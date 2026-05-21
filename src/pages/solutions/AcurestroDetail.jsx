import React from 'react';
import acurestroImg from '../../assets/images/solutions/acurestro/acurestro.jpg';
import aboutImage from '../../assets/images/about/about-section.jpg';

const tabData = [
  'Acurestro Software',
  'Automated Management Software',
];

const featureCards = [
  { title: "Customer Management", subtitle: "Manage customers easily and effectively." },
  { title: "Customer Support", subtitle: "Sync customer data with CRM systems" },
  { title: "Payment Integration", subtitle: "Self Managed MOP like Cash, Wallets, UPI etc" },
  { title: "Automation", subtitle: "Make tasks automation by Mobile" },
  { title: "Multi-Currency Support", subtitle: "Handle transactions in different currencies." },
  { title: "Import & Export", subtitle: "You can easly data import and export" },
  { title: "Tax Management", subtitle: "Tax Management Reports Format & Excel Export" },
  { title: "Multilingual", subtitle: "It's provided multipal language" },
  { title: "Data-transfar", subtitle: "Data transfar with security" },
  { title: "Searching", subtitle: "Records find easly and fast" },
];

export default function AcurestroDetail() {
  return (
    <div className="w-full pt-[92px] bg-[#efefef]">
      {/* ── Hero Section ── */}
      <section
        className="relative h-[300px] sm:h-[400px] lg:h-[480px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${acurestroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[1000px]">
          <span className="bg-[#da251d] text-white text-xs font-semibold px-5 py-1.5 rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Smart Solutions For Modern Acurestro Management
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-[800px]">
            Simplify Your Business, Boost Efficiency, And Serve Customers Faster - All From Your Mobile.
          </p>
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
                    className={`text-[11px] px-4 py-1.5 rounded-full ${idx === 0 ? 'bg-[#da251d] text-white' : 'bg-[#f1f5f9] text-[#374151]'
                      }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Acurestro software streamlines the operations through automation, including tasks like creation, tracking, and management.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                This eradicates the necessity for manual input of data, minimizing the chances of mistakes and conserving precious time for businesses and their customers.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7">
                Our comprehensive Software efficiently handles all aspects of your business. With our user-friendly software, you will have access to a wide range of tools that will streamline your business operations effortlessly.
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
                The Purpose Of Acurestro Systems
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                By automating tasks such as tracking and reporting, Acurestro software makes the process more efficient and less prone to errors, ultimately saving time for both businesses and their clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[56px] font-semibold text-[#1f2937] flex flex-col lg:gap-4 mb-12">
            <span>Acurestro Management</span>
            <span>Feature</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((item, index) => (
              <article
                key={index}
                className="site-card bg-[#f8f8f8] rounded-[10px] border border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer"
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
