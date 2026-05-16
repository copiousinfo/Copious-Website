import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function BulkWhatsAppBlog() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[120px] pb-20 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <p className="text-[#374151] text-lg leading-relaxed mb-8">
          Efficient tracking of customer chats. By using this app, companies can significantly enhance their customer service and support operations. <Link to="/services/bulk-web-whatsapp" className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors">Bulk WhatsApp</Link> messaging can be a powerful tool for businesses for several reasons. Here's a detailed look at why businesses might need it and how it can be beneficial:
        </p>

        <ul className="space-y-6 text-[#374151] text-lg list-disc pl-8">
          <li>
            <span className="font-bold text-black">Mass Messaging:</span> Businesses can send messages to a large number of customers simultaneously. This is particularly useful for announcements, promotions, or important updates.
          </li>
          <li>
            <span className="font-bold text-black">Time-Saving:</span> Automating bulk messages saves time compared to manually sending individual messages to each customer.
          </li>
          <li>
            <span className="font-bold text-black">Quick Response:</span> Businesses can use WhatsApp for customer support, addressing queries and issues in real time.
          </li>
          <li>
            <span className="font-bold text-black">Automated Responses:</span> Automated messages can handle common queries, providing instant responses to customers and freeing up human resources for more complex issues.
          </li>
          <li>
            <span className="font-bold text-black">Customer Feedback:</span> Easily collect feedback through surveys or direct questions, helping businesses improve their products and services.
          </li>
          <li>
            <span className="font-bold text-black">Market Research:</span> Conduct market research to understand customer preferences and trends.
          </li>
        </ul>

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
                <span className="inline-flex items-center px-3 px-4 bg-[#f9fafb] border border-r-0 border-gray-200 rounded-l-lg text-gray-500 text-sm">
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
