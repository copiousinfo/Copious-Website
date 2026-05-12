import React from 'react';
import aboutHero from '../assets/about.jpg';
import aboutImage from '../assets/about1.jpg';

const tabData = [
  'Billing Management Software',
  'Automated Billing Management Software',
];

const featureCards = [
  { title: "Customer Management", subtitle: "Send booking confirmations and reminders via email or SMS." },
  { title: "Customer Support", subtitle: "Sync customer data with CRM systems" },
  { title: "Payment Integration", subtitle: "Self Managed MOP like Cash, Wallets, UPI etc" },
  { title: "Automation", subtitle: "Make Ticket automation by Mobile" },
  { title: "Multi-Currency", subtitle: "Handle transactions in different currencies." },
  { title: "Import & Export", subtitle: "You can easily data import and export" },
  { title: "Tax Management", subtitle: "Tax Management Reports Format & Excel Export" },
  { title: "Multilingual", subtitle: "It's provided multiple language" },
  { title: "Data-transfer", subtitle: "Data transfer with security" },
  { title: "Searching", subtitle: "Records find easily and fast" },
];

export default function BillingDetail() {
  return (
    <div className="w-full pt-[92px] bg-[#efefef]">
      <section className="max-w-[1440px] mx-auto">
        <div
          className="relative h-[260px] sm:h-[320px] lg:h-[360px] bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <span className="bg-[#da251d] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-white text-3xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.08] mb-0 max-w-[1320px]">
              Smart Solutions For Modern Ticketing, Billing, And Parking
            </h1>
            <p className="text-gray-100 text-xs sm:text-sm max-w-3xl mt-5 sm:mt-6">
              Simplify Your Billing, Boost Efficiency, And Serve Customers Faster - All From Your Mobile.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        <div className="bg-white p-5 sm:p-7 lg:p-8 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">About Us</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {tabData.map((tab, idx) => (
                  <span
                    key={tab}
                    className={`text-[11px] px-4 py-1.5 rounded-full ${
                      idx === 0 ? 'bg-[#da251d] text-white' : 'bg-[#f1f5f9] text-[#374151]'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Billing software streamlines the invoicing procedure through automation, including tasks like invoice creation, payment monitoring, and payment reminders.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7">
                Our comprehensive Billing Software efficiently handles all aspects of your business, including inventory and sales tracking, as well as service and repair management. With our user-friendly billing software, you will have access to a wide range of tools that will streamline your business operations effortlessly. Additionally, you can easily maintain a customized workflow to effectively monitor all items undergoing service.
              </p>
            </div>
            <img
              src={aboutImage}
              alt="Solution management"
              className="w-full rounded-md object-cover h-[240px] sm:h-[300px] lg:h-[320px]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 mt-10 items-start">
            <img
              src={aboutImage}
              alt="Online booking"
              className="w-full rounded-md object-cover h-[240px] sm:h-[300px] lg:h-[320px]"
            />
            <div>
              <h3 className="text-3xl font-semibold text-[#1f2937] mb-4">
                The Purpose Of Billing Systems
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                By automating tasks such as generating invoices, tracking payments, and sending payment reminders, billing software makes the invoicing process more efficient and less prone to errors, ultimately saving time for both businesses and their clients.
              </p>
              <ul className="list-disc pl-6 text-[#4b5563] text-[14px] leading-7 space-y-1 marker:text-[#da251d]">
                <li>Streamlines the invoicing procedure through automation.</li>
                <li>Handles inventory and sales tracking efficiently.</li>
                <li>Maintains a customized workflow to monitor service items.</li>
                <li>Minimizes the chances of mistakes and conserves precious time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[56px] font-semibold text-[#1f2937] mb-8">
            Billing Management Feature
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((item, index) => (
              <article
                key={index}
                className="bg-[#f8f8f8] rounded-[10px] border border-gray-200 px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#f2e7e7] shrink-0" aria-hidden />
                <div>
                  <h3 className="text-[#da251d] text-sm font-bold">{item.title}</h3>
                  <p className="text-[#4b5563] text-[11px] mt-0.5">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
