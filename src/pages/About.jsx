import React from "react";
import aboutHero from "../assets/images/about/about-hero.jpeg";
import aboutSectionImage from "../assets/images/about/about-section.jpg";

export default function About() {
  return (
    <div className="w-full pt-[92px] bg-[#202329]">
      <section className="max-w-[1440px] mx-auto">
        <div
          className="relative h-[280px] sm:h-[340px] lg:h-[540px] bg-center bg-cover"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black/45" />
        </div>
      </section>

      <section className="w-full bg-[#efefef]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
          <h3 className="text-[#1f1f1f] text-4xl font-semibold text-center mb-10">
            About Us
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="text-[#3a3a3a] text-sm sm:text-[15px] leading-7 space-y-5">
              <p>
                Copious Infotech is a rapidly growing software and information
                technology consulting company that provides innovative software
                solutions to business clients in India. Founded by professionals
                with a vision to deliver cutting-edge consulting services and
                the latest in software technology, Copious Infotech is dedicated
                to supporting the business community both nationwide and beyond.
                The founders have established professional ties with several
                leading companies, which enhances their ability to offer
                top-tier services.
              </p>
              <p>
                The company offers a comprehensive range of IT services designed
                to meet diverse business needs. These services include business
                consulting, where they help clients strategize and optimize
                their operations, and brand management, which focuses on
                enhancing a company's market presence and reputation.
                Additionally, Copious Infotech excels in business intelligence
                and data warehousing, providing clients with insightful data
                analysis and storage solutions that drive informed
                decision-making.
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
