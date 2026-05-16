import React from 'react';
import { Link } from 'react-router-dom';

export default function SecurityBlog() {
  return (
    <div className="w-full pt-[120px] pb-20 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <p className="text-[#374151] text-lg leading-relaxed mb-6">
          Additionally, it helps companies comply with legal and regulatory requirements, prevent financial losses, and maintain a competitive edge. Good data security measures reduce the risks of cyber threats and data breaches, preserving the company's reputation and ensuring smooth operations.
        </p>
        <p className="text-[#374151] text-lg leading-relaxed mb-8">
          Data security is crucial for companies for several reasons:
        </p>

        <ul className="space-y-8 text-[#374151] text-lg list-disc pl-8 marker:text-[#da251d]">
          <li>
            <span className="font-bold text-black">Email security:</span>We need <Link to="/security/email" className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors">email security</Link> to protect sensitive information from unauthorized access, prevent phishing and malware attacks, and ensure the integrity and confidentiality of communication. <Link to="/security/email" className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors">Email security</Link> involves using encryption, spam filters, and authentication protocols to safeguard email exchanges.
          </li>
          <li>
            <span className="font-bold text-black">Endpoint security:</span><Link to="/services/security" className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors">Endpoint security</Link> is essential to protect devices like computers and mobile phones from cyber threats such as malware and unauthorized access. It ensures data integrity, compliance with regulations, and the overall security of networked systems. By implementing <Link to="/services/security" className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors">endpoint security</Link>, organizations can monitor, detect, and respond to potential security incidents in real-time.
          </li>
          <li>
            <span className="font-bold text-black">Antivirus security:</span><Link to="/security/antivirus" className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors">Antivirus security</Link> is essential to protect your computer from malicious software, such as viruses, malware, and ransomware. It helps safeguard your personal information, prevents unauthorized access, and keeps your system running smoothly by detecting and removing threats before they can cause damage.
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
