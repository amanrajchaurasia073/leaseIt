// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm">
            Our mission is to eliminate the hassle of finding a good rental property by providing a brokerage-free platform. With real-time property pictures, availability updates, and affordable options, we aim to make the rental process seamless and convenient for everyone.
          </p>
        </div>

        {/* Contact Information Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Information</h2>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:support@leaseit.com" className="hover:underline">support@leaseit.com</a></li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123 Rental Lane, Bangalore, India</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src="https://via.placeholder.com/24?text=FB"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src="https://via.placeholder.com/24?text=TW"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src="https://via.placeholder.com/24?text=LI"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t border-white border-opacity-20 pt-4">
        © 2025 Leaseit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
