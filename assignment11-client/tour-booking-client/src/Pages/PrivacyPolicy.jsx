import React from 'react';
import { Link } from 'react-router';

const PrivacyPolicy = () => {
    return (
         <div className="min-h-screen mx-auto max-w-full flex justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-full">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          {/* Hero Image at the top of the content box */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://media.istockphoto.com/id/1254993875/photo/cropped-image-of-business-woman-hand-working-laptop-computer-in-home-office.jpg?s=612x612&w=0&k=20&c=ggCyr3ORRwbNffyFmtrk86emXKJGqkKxJzsRlR_wVC0=" 
              alt="A person's hands typing on a laptop, representing digital data." 
              className="w-full h-auto object-cover" 
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-medium uppercase divider text-center text-sky-800 mb-6 sm:mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-gray-600 text-sm sm:text-base text-center mb-6">
            Last updated: August 10, 2025
          </p>

          <div className="space-y-8">
            {/* Section 1: Introduction */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services. By using our website, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Section 2: Information We Collect */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We may collect personal information such as your name, email address, phone number, and payment details when you create an account, make a booking, or contact us. We also collect non-personal data, such as your IP address and browsing history, to improve our services and your experience.
              </p>
            </div>

            {/* Section 3: How We Use Your Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                The information we collect is used to provide and improve our services, process your bookings, communicate with you, and personalize your experience. We may also use your information for marketing purposes, but you will always have the option to opt-out.
              </p>
            </div>

            {/* Section 4: Sharing Your Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">4. Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We do not sell your personal information. We may share your data with trusted third-party partners (e.g., airlines, hotels, payment processors) to fulfill your bookings and operate our services. All third parties are required to protect your information and are not permitted to use it for any other purpose.
              </p>
            </div>

            {/* Section 5: Data Security */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
              </p>
            </div>
            
            {/* Back Button */}
            <div className="mt-8 text-center">
              <Link to='/'>
              <button
                
                className="px-6 py-3 bg-sky-600 text-white cursor-pointer font-bold text-base rounded-full shadow-lg hover:bg-sky-700 transition-colors"
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

export default PrivacyPolicy;