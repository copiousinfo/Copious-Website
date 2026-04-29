import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] bg-white text-dark">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#da251d]">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need a custom solution? Reach out to our team today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-[#f8f9fa] p-8 rounded-2xl shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#da251d] focus:border-transparent transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#da251d] focus:border-transparent transition-all" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#da251d] focus:border-transparent transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#da251d] focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#da251d] text-white py-3 rounded-lg font-bold hover:bg-[#c02019] transition-all transform hover:scale-[1.02]">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#fff0f0] flex items-center justify-center text-[#da251d] shrink-0">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="text-gray-600">+xxxxxxxxxx</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#fff0f0] flex items-center justify-center text-[#da251d] shrink-0">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Email Us</h3>
              <p className="text-gray-600">info@copious.info</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#fff0f0] flex items-center justify-center text-[#da251d] shrink-0">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Visit Us</h3>
              <p className="text-gray-600">Noida, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
