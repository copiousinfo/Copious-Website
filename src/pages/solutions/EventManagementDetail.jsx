import React from 'react';
import aboutHero from '../../assets/images/solutions/event/event-hero.jpg';
import aboutImage from '../../assets/images/about/about-section.jpg';

const tabData = [
  'Event Management Software',
  'Automated Event Management Software',
];

const featureCards = [
  { title: "Event Creation", subtitle: "Effortlessly create, edit, and manage events with customizable details." },
  { title: "User Management", subtitle: "Easily create and manage user profiles, assign roles, and control access." },
  { title: "QR Code Scanning", subtitle: "Efficiently track attendee attendance with quick and accurate QR code scanning." },
  { title: "Data Storage", subtitle: "Securely store all event data in a centralized database and generate insightful reports." },
  { title: "User-Friendly", subtitle: "Intuitive and easy-to-use interface for both administrators and event attendees." },
  { title: "Increased Efficiency", subtitle: "Streamline event planning, execution, and post-event analysis." },
  { title: "Improved Accuracy", subtitle: "Eliminate manual data entry errors and ensure accurate attendance tracking." },
  { title: "Enhanced Security", subtitle: "Securely store all event data and protect sensitive information." },
  { title: "Better Insights", subtitle: "Gain valuable insights into event performance with comprehensive reports." },
  { title: "Cost-Effectiveness", subtitle: "Reduce administrative overhead and optimize resource allocation." },
];

export default function EventManagementDetail() {
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
              Simplify Your Events, Boost Efficiency, And Serve Attendees Faster - All From Your Mobile.
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
                This innovative event management application streamlines event planning and execution. Easily create and manage events, assign users, and track attendance with seamless QR code scanning.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7">
                The application securely stores all event data in a centralized database, providing administrators with real-time insights and comprehensive reports. Our user-friendly interface simplifies event management, allowing for efficient planning and seamless on-site execution.
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
                The Purpose Of Event Systems
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Our innovative event management application streamlines event planning and execution, providing administrators with real-time insights to ensure events run perfectly from start to finish.
              </p>
              <ul className="list-disc pl-6 text-[#4b5563] text-[14px] leading-7 space-y-1 marker:text-[#da251d]">
                <li>Easily create and manage events and assign users.</li>
                <li>Track attendance with seamless QR code scanning.</li>
                <li>Securely store all event data in a centralized database.</li>
                <li>Simplify event management for efficient planning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[56px] font-semibold text-[#1f2937] mb-8">
            Event Management Feature
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
