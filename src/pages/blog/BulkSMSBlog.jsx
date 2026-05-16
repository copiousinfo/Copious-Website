import React from 'react';
import { Link } from 'react-router-dom';

export default function BulkSMSBlog() {
  return (
    <div className="w-full pt-[120px] pb-20 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <p className="text-[#374151] text-lg leading-relaxed mb-6">
          <Link to="/services/bulk-sms" className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors">SMS</Link> is a powerful communication tool that offers several benefits for businesses, organizations, and individuals. Here are some key reasons why it is useful:
        </p>

        <ul className="space-y-8 text-[#374151] text-lg list-disc pl-8 marker:text-[#da251d]">
          <li>
            <span className="font-bold text-black">Wide Reach:</span> Bulk SMS allows businesses to reach a large number of people quickly and efficiently. Nearly everyone owns a mobile phone, making SMS a universal communication channel.
          </li>
          <li>
            <span className="font-bold text-black">Automation and Scheduling:</span> Many bulk SMS platforms allow for automated sending and scheduling of messages, making it easier to manage campaigns and ensure timely delivery.
          </li>
          <li>
            <span className="font-bold text-black">Versatility:</span> Bulk SMS can be used for various purposes, including marketing promotions, alerts and notifications, reminders, customer support, and more.
          </li>
          <li>
            <span className="font-bold text-black">Customer Relationship Management:</span> Regular communication via SMS can help maintain and strengthen relationships with customers by keeping them informed and engaged.
          </li>
        </ul>

        {/* Contact Form Section */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-bold text-[#111827] mb-3">Get in touch</h2>
            <p className="text-[#4b5563] text-lg">We'd love to hear from you. Please fill out this form.</p>
          </div>

          <form className="max-w-[800px] mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#374151]" htmlFor="first-name">First name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#374151]" htmlFor="last-name">Last name</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#374151]" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-[#f9fafb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#374151]" htmlFor="phone">Phone number</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 bg-[#f9fafb] border border-r-0 border-gray-200 rounded-l-lg text-gray-500 text-sm">
                  US
                </span>
                <input
                  type="text"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#374151]" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 bg-[#f9fafb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#da251d] text-white py-3.5 rounded-lg font-bold text-lg hover:bg-[#c02019] transition-all shadow-md active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
