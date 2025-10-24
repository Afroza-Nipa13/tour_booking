require('dotenv').config()
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express()
// firebase admin
const admin = require("firebase-admin");
const decoded = Buffer.from(process.env.FB_SERVICE_KEY, 'base64').toString('utf8')
const serviceAccount = JSON.parse(decoded);

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;

// 'https://tour-booking-client.web.app',

// middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://tour-booking-client.web.app',
  ],
  credentials: true,
  exposedHeaders: ['Authorization']
}))
app.use(express.json())






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterph.bwaiqag.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPH`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers?.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).send({ message: "Unauthorized access" })
  }
  const token = authHeader.split(' ')[1]
  // console.log("token in the middleware",token)
  try {
    const decoded = await admin.auth().verifyIdToken(token)
    req.decoded = decoded;
    console.log("decoded", decoded)
    next()
  } catch (error) {
    return res.status(401).send({ message: "unauthorized access" })
  }



}

const verifyTokenEmail = async (req, res, next) => {
  const email = req.query.email;
  if (email !== req.decoded.email) {
    return res.status(403).send({ message: "forbidden access" })
  }
  next()
}


async function run() {
  try {
    // await client.connect()


    const packageCollection = client.db('zahabaTour').collection("tourPackages");
    const bookingCollection = client.db('zahabaTour').collection("bookings")
    const hotelCollection = client.db('zahabaTour').collection("hotels")

    // hotel collection
    // Get hotels near a destination
    app.get('/hotels', async (req, res) => {
      const destination = req.query.destination;
      const query = destination ? { destination: { $regex: destination, $options: "i" } } : {};
      const result = await hotelCollection.find(query).toArray();
      res.send(result);
    });

// Get a single hotel by ID
app.get('/hotels/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const hotel = await hotelCollection.findOne(query);

    if (!hotel) {
      return res.status(404).send({ message: "Hotel not found" });
    }

    res.send(hotel);
  } catch (error) {
    console.error("Error fetching hotel by ID:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


    // tour-packages api
    app.get('/getSixPackages', async (req, res) => {
      const result = await packageCollection.find({}).limit(8).toArray();
      res.send(result)
      // console.log("First 8 packages:", result);
    })

    app.get('/getSixPackages/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await packageCollection.findOne(query)
      res.send(result)
    })




    app.get('/all-packages', async (req, res) => {

      const search = req.query.search;

      let query = {}

      //destination query
      if (search) {
        query = {
          destination: {
            $regex: search,
            $options: 'i'
          }
        }
      }

      const result = await packageCollection.find(query).toArray();

      res.send(result)
    })

    app.get('/all-packages/bookings', verifyFirebaseToken, async (req, res) => {
      const email = req.query.email;

      const query = {
        guide_email: email
      }
      const packages = await packageCollection.find(query).toArray()
      for (pack of packages) {
        const bookingQuery = {
          packageId: pack._id.toString()
        }
        const bookingCount = await bookingCollection.countDocuments(bookingQuery)
        pack.bookingCount = bookingCount;
      }
      res.send(packages)
    })



    app.get('/all-packages/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await packageCollection.findOne(query)
      res.send(result)

    })

    app.post('/all-packages', async (req, res) => {
      const newPackage = req.body;
      const result = await packageCollection.insertOne(newPackage)
      res.send(result)
    })
    //  get a single tour package by id
    app.get('/package/:id', async (req, res) => {
      try {
        const id = req.params.id; // fix here
        const filter = { _id: new ObjectId(id) };
        const package = await packageCollection.findOne(filter);

        if (!package) {
          return res.status(404).send({ message: 'Package not found' });
        }
        res.send(package);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    });

    app.put('/all-packages/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true }
      const updatedPackages = req.body;
      const updatedDoc = {
        $set: updatedPackages
      }
      const result = await packageCollection.updateOne(filter, updatedDoc, options)
      res.send(result)
    })

    app.delete('/all-packages/:id', verifyFirebaseToken, async (req, res) => {
      const id = req.params.id;
      console.log(id)
      const query = { _id: new ObjectId(id) }
      const result = await packageCollection.deleteOne(query)
      res.send(result)
    })

    // tourist application related api
    app.get('/bookings', verifyFirebaseToken, async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query.tourist_email = email;
      }
      const result = await bookingCollection.find(query).toArray();
      // agregation of result
      for (const booking of result) {
        const packageId = booking.packageId
        if (!ObjectId.isValid(packageId)) {
          console.warn('Invalid packageId:', packageId);
          continue;
        }
        const packageQuery = { _id: new ObjectId(packageId) }
        const package = await packageCollection.findOne(packageQuery)
        if (package) {
          booking.tour_name = package.tour_name;
          booking.guide_name = package.guide_name;
          booking.guide_contact_no = package.guide_contact_no;
          booking.departure_date = package.departure_date;
          booking.departure_location = package.departure_location;
          booking.destination = package.destination;
          booking.image = package.image;

        }



      }
      res.send(result)
    })




    app.get('/bookings/package/:package_id', async (req, res) => {
      const package_id = req.params.package_id;
      console.log(package_id)
      const query = {
        packageId: package_id
      }
      const result = await bookingCollection.find(query).toArray()
      res.send(result)

    })


    app.patch('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const updatedDoc = {
        $set: {
          status: req.body.status
        }
      }
      const result = await bookingCollection.updateOne(filter, updatedDoc)
      res.send(result)
    })

    app.post('/bookings', async (req, res) => {
      const bookings = req.body;
      console.log(bookings)
      const result = await bookingCollection.insertOne(bookings)
      const packageId = bookings.packageId;


      const updateResult = await packageCollection.updateOne({ _id: new ObjectId(packageId) }, {
        $inc: {
          bookingCount: 1
        }
      })


      res.send(result)
    })




  } finally {

  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send("Tour-booking-server is cooking...")
})
app.listen(port, () => {
  console.log(`Zahaba tour is running on port : ${port}`)
})