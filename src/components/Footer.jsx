import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 w-full mt-auto">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Branding */}
          <div className="lg:col-span-4">
            <h2 className="text-[17px] font-bold mb-4">Customer Care</h2>
            <p className="text-gray-400 text-[12px] leading-snug pr-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-[14px] font-semibold mb-5">Company</h3>
            <ul className="space-y-4 text-[12px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[14px] font-semibold mb-5">Services</h3>
            <ul className="space-y-4 text-[12px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[14px] font-semibold mb-5">Information</h3>
            <ul className="space-y-4 text-[12px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[14px] font-semibold mb-5">Social Links</h3>
            <ul className="space-y-4 text-[12px] text-gray-400">
              <li className="flex items-center gap-2"><i className="fa-brands fa-x-twitter text-gray-400 w-4"></i> <a href="#" className="hover:text-white transition-colors">@Customer Care</a></li>
              <li className="flex items-center gap-2"><i className="fa-brands fa-linkedin-in text-gray-400 w-4"></i> <a href="#" className="hover:text-white transition-colors">@Customer Care</a></li>
              <li className="flex items-center gap-2"><i className="fa-brands fa-facebook-f text-gray-400 w-4"></i> <a href="#" className="hover:text-white transition-colors">@Customer Care</a></li>
              <li className="flex items-center gap-2"><i className="fa-regular fa-envelope text-gray-400 w-4"></i> <a href="#" className="hover:text-white transition-colors">support@cst.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-6 text-center text-[12px] text-gray-500 font-medium">
          <p>© 2025 Customer Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
