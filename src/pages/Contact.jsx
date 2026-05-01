import React from 'react';
import contactHero from '../assets/contactus.jpg';

export default function Contact() {
  return (
    <div className="w-full pt-[92px] bg-[#202329]">
      <section className="w-full bg-[#202329]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-7">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold">Contact</h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto">
        <div
          className="relative h-[260px] sm:h-[320px] lg:h-[370px] bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <span className="bg-[#da251d] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[48px] font-semibold mb-3 leading-tight">
              Send Us Hi To Our Team
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm max-w-3xl">
              Simplify Your Billing, Boost Efficiency, And Serve Customers Faster - All From Your Mobile.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#efefef]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-[72px]">
          <div className="max-w-[640px] mx-auto">
            <p className="text-[#da251d] text-center text-sm font-medium mb-2">Contact us</p>
            <h3 className="text-[#1f2937] text-4xl font-semibold text-center mb-3">Get in touch</h3>
            <p className="text-center text-[#6b7280] text-[15px] mb-8">
              We'd love to hear from you. Please fill out this form.
            </p>

            <form className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-[#4b5563] mb-1.5">First name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full h-11 px-3 text-sm border border-[#d1d5db] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#4b5563] mb-1.5">Last name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full h-11 px-3 text-sm border border-[#d1d5db] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-[#4b5563] mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full h-11 px-3 text-sm border border-[#d1d5db] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#4b5563] mb-1.5">Phone number</label>
                <input
                  type="tel"
                  placeholder="US   +1 (555) 000-0000"
                  className="w-full h-11 px-3 text-sm border border-[#d1d5db] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#4b5563] mb-1.5">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-3 py-2.5 text-sm border border-[#d1d5db] rounded-md bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d]"
                />
              </div>

              <label className="flex items-center gap-2 text-[12px] text-[#4b5563]">
                <input type="checkbox" className="w-4 h-4 border-[#d1d5db] rounded" />
                <span>
                  You agree to our friendly <span className="underline">privacy policy</span>.
                </span>
              </label>

              <button
                type="submit"
                className="w-full h-11 bg-[#da251d] text-white text-sm font-medium rounded-md hover:bg-[#c6221a] transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
