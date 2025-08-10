import React from 'react';
import { Link } from 'react-router';

const CookiePolicy = () => {
    return (
          <div className="min-h-screen w-full  flex justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full ">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-medium divider uppercase text-center text-sky-800 mb-6 sm:mb-8">
            Cookie Policy
          </h1>
          
          <p className="text-gray-600 text-sm sm:text-base text-center mb-6">
            Last updated: August 10, 2025
          </p>

          <div className="space-y-8">
            {/* Section 1: Introduction */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">1. Introduction to Cookies</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                This Cookie Policy explains what cookies are and how we use them on our travel booking platform. By using our website, you consent to our use of cookies in accordance with this policy.
              </p>
            </div>

            {/* Section 2: What Are Cookies? */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">2. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Cookies are small pieces of data stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide reporting information to the site owners.
              </p>
            </div>

            {/* Section 3: How We Use Cookies */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">3. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We use cookies for several purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
                <li><span className="font-bold">Authentication:</span> To remember your login state so you don't have to log in repeatedly.</li>
                <li><span className="font-bold">Personalization:</span> To remember your preferences and settings, such as language or currency.</li>
                <li><span className="font-bold">Analytics:</span> To understand how visitors use our website, which helps us to improve its functionality and user experience.</li>
                <li><span className="font-bold">Marketing:</span> To deliver relevant advertisements and measure the effectiveness of our campaigns.</li>
              </ul>
            </div>

            {/* Section 4: Types of Cookies */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">4. Types of Cookies We Use</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We use both session and persistent cookies. Session cookies are temporary and expire when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. We also use both first-party (set by us) and third-party (set by our partners) cookies.
              </p>
            </div>
            
            {/* Section 5: Your Choices */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">5. Your Cookie Choices</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
              </p>
            </div>
            
            {/* Back Button */}
            <div className="mt-8 text-center">
              <Link to='/'>
              <button
                
                className="px-6 py-3 bg-sky-600 text-white font-bold text-base rounded-full shadow-lg hover:bg-sky-700 transition-colors"
              >
                Back to Home
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CookiePolicy;