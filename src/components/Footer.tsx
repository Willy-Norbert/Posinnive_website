
import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-platformBlue text-white bg-gray-900 p-4">
      <div className="max-w-7xl bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="font-medium text-lg mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
            </ul>
          </div>
        <div>
            <h3 className="font-medium text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Kigali, Rwanda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">posinnove@gmail.com</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to get our news & deals delivered to you.</p>
            <div className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="bg-gray-400 border border-gray-600 text-white rounded-l-md block w-full  p-2.5 focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Your email"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-950 px-4 py-2.5 rounded-r-md font-medium hover:bg-gray-800"
              >
                Submit
              </button>
            </div>
          </div>
          <div className=" space-x-4 mt-4 md:mt-0">
          <h3 className="font-medium text-center text-lg mb-4">Get In Touch</h3>
          <div className="flex justify-center gap-4">
          <a href="#" className="text-white">
            <img src="/x.png" alt="Facebook" className="h-15 w-15" />
          </a>

          <a href="#" className="text-white">
            <img src="/LinkedIn.png" alt="Instagram" className="h-15 w-15" />
          </a>
          <a href="#" className="text-white">
            <img src="/Instagram.png" alt="Instagram" className="h-15 w-15" />
          </a>
        </div>
        </div>
        </div>
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-center text-gray-300">
          © 2024 Posinnove Tech Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
