import React from 'react';
import aboutHero from '../assets/about.jpg';
import aboutSectionImage from '../assets/about1.jpg';

export default function About() {
  return (
    <div className="w-full pt-[92px] bg-[#202329]">
      <section className="w-full bg-[#202329]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-7">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold">About</h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto">
        <div
          className="relative h-[280px] sm:h-[340px] lg:h-[390px] bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <span className="bg-[#da251d] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3">
              What We Do
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm max-w-3xl">
              Simplify Your Billing, Boost Efficiency, And Serve Customers Faster - All From Your Mobile.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#efefef]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
          <h3 className="text-[#1f1f1f] text-4xl font-semibold text-center mb-10">About Us</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="text-[#3a3a3a] text-sm sm:text-[15px] leading-7 space-y-5">
              <p>
                Copious Infotech is a rapidly growing software and information technology consulting
                company that provides innovative software solutions to business clients in India.
                Founded by professionals with a vision to deliver cutting-edge consulting services and
                the latest in software technology, Copious Infotech is dedicated to supporting the
                business community both nationwide and beyond. The founders have established
                professional ties with several leading companies, which enhances their ability to offer
                top-tier services.
              </p>
              <p>
                The company offers a comprehensive range of IT services designed to meet diverse
                business needs. These services include business consulting, where they help clients
                strategize and optimize their operations, and brand management, which focuses on
                enhancing a company's market presence and reputation. Additionally, Copious Infotech
                excels in business intelligence and data warehousing, providing clients with insightful
                data analysis and storage solutions that drive informed decision-making.
              </p>
              <p>
                The company offers a comprehensive range of IT services designed to meet diverse
                business needs. These services include business consulting, where they help clients
                strategize and optimize their operations, and brand management, which focuses on
                enhancing a company's market presence and reputation. Additionally, Copious Infotech
                excels in business intelligence and data warehousing, providing clients with insightful
                data analysis and storage solutions that drive informed decision-making.
              </p>
            </div>

            <div className="w-full">
              <img
                src={aboutSectionImage}
                alt="Copious about section"
                className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
