import React from 'react';
import { Link } from 'react-router';

// This is the main component that renders the Terms and Conditions page.
// In a real application, you would use React Router to display this component
// when the user navigates to the appropriate URL.
const TermsAndCondition = () => {
  return (
   <div className="min-h-screen max-w-full flex justify-center mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full  md:flex md:space-x-8">
        {/* Content Column */}
        <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl font-medium divider uppercase text-center text-sky-800 mb-6 sm:mb-8">
            Terms & Conditions
          </h1>
          
          <p className="text-gray-600 text-sm sm:text-base text-center mb-6">
            Last updated: August 10, 2025
          </p>

          <div className="space-y-8">
            {/* Section 1: Introduction */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Welcome to our travel booking platform. These Terms & Conditions govern your use of our services, including our website, mobile applications, and any related services. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
              </p>
            </div>

            {/* Section 2: User Obligations */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">2. User Obligations</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all information you provide is accurate and complete, and that you maintain the confidentiality of your account credentials. You must be at least 18 years old to use our services.
              </p>
            </div>

            {/* Section 3: Booking and Payments */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">3. Booking and Payments</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                All bookings are subject to availability and confirmation. Prices are subject to change without notice. We accept various forms of payment, and all payments are processed securely. You are responsible for any fees, taxes, and other charges associated with your bookings.
              </p>
            </div>

            {/* Section 4: Cancellation Policy */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">4. Cancellation Policy</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Cancellation policies vary depending on the specific tour, hotel, or flight. You are responsible for reviewing and understanding the cancellation policy for each booking you make. In most cases, cancellations may result in a partial or full loss of the amount paid.
              </p>
            </div>

            {/* Section 5: Limitation of Liability */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our service is provided on an "as is" and "as available" basis. We do not guarantee that the service will be uninterrupted, secure, or error-free. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the service.
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
        
        {/* Image Column (hidden on small screens) */}
        <div className="hidden md:block flex-1 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2946" 
            alt="Tropical beach with a clear ocean and palm trees" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};


export default TermsAndCondition;
