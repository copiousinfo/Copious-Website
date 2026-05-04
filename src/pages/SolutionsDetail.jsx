import React from 'react';
import { useParams } from 'react-router-dom';
import aboutHero from '../assets/about.jpg';
import aboutImage from '../assets/about1.jpg';

const tabData = [
  'Ticket Management Software',
  'Automated Ticket Management Software',
];

const titleMap = {
  billing: 'Billing',
  ticketing: 'Ticketing',
  parking: 'Parking',
};

const featureCards = Array.from({ length: 9 }, (_, idx) => ({
  id: idx + 1,
  title: 'Create & Manage',
  subtitle: 'Tickets Are Create And Manage Very Easy',
}));

export default function SolutionsDetail() {
  const { slug } = useParams();
  const currentTitle = titleMap[slug] || 'Solutions';

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
              <p className="text-[#4b5563] text-[14px] leading-7">
                Businesses utilize ticket management software to monitor and handle customer service
                requests and inquiries. This software enables customer service teams to efficiently
                process incoming tickets, allocate them to the relevant team members, and deliver
                effective customer service. It encompasses features such as ticket tracking,
                categorization, assignment and routing, as well as automated notifications. Additionally,
                the software aids agents in prioritizing tickets, analyzing ticket data, and generating
                reports on customer service performance.
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
                The Purpose Of Online Booking Systems
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                If you are not currently utilizing an online booking system, you may question the necessity
                of it. You might think that phone and email bookings are sufficient. However, it is
                important to take into account the current trends and metrics through which guests are
                making their bookings before making any hasty judgments.
              </p>
              <ul className="list-disc pl-6 text-[#4b5563] text-[14px] leading-7 space-y-1 marker:text-[#da251d]">
                <li>Enhance the quality of online interactions for your customers.</li>
                <li>Increase the speed of online transactions for your customers.</li>
                <li>Efficiently gather crucial information to support various aspects of business.</li>
                <li>Including your organization and promotional activities.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[56px] font-semibold text-[#1f2937] mb-8">
            Ticket Booking Management Feature
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((item) => (
              <article
                key={item.id}
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
