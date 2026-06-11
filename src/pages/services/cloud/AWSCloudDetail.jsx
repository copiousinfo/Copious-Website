import React, { useState } from "react";
import heroBg from "../../../assets/images/services/cloud/aws header.jpeg";
import aws1Img from "../../../assets/images/services/cloud/aws_1.png";
import aws2Img from "../../../assets/images/services/cloud/aws_2.png";

const categories = {
  "use-case": [
    {
      title: "Artificial Intelligence",
      desc: "Build And Scale The Next Wave Of AI Innovation On AWS. Transform Customer Interactions With A Wide Range Of Artificial Intelligence And Machine Learning Solutions, Providing Unparalleled Customer Experiences.",
    },
    {
      title: "Backup & Restore",
      desc: "Build And Scale The Next Wave Of AI Innovation On AWS. Transform Customer Interactions With A Wide Range Of Artificial Intelligence And Machine Learning Solutions, Providing Unparalleled Customer Experiences.",
    },
    {
      title: "Hybrid & Multicloud",
      desc: "Build And Scale The Next Wave Of AI Innovation On AWS. Transform Customer Interactions With A Wide Range Of Artificial Intelligence And Machine Learning Solutions, Providing Unparalleled Customer Experiences.",
    },
  ],
  industry: [
    {
      title: "Telecommunication",
      desc: "It's commonly referred to as telecom, involves the transmission of information across long distances using electronic methods. It encompasses various forms of communication such as voice, data, and video transmission. ",
    },
    {
      title: "Automotive",
      desc: "AWS accelerates the automotive industry’s digital transformation through the most comprehensive set of purpose-built cloud capabilities, unmatched experience, and broadest partner and developer community.",
    },
    {
      title: "Advertising & Marketing",
      desc: "The advertising and marketing technology sector is currently undergoing a significant transformation as businesses strive to enhance compatibility between different platforms and deliver enhanced, more personalized experiences, all while safeguarding consumer data.",
    },
  ],
  org: [
    {
      title: "Enterprise",
      desc: "Prepare for impactful transformation by reconsidering the concept of one-time reinventions. Delve into our carefully selected perspectives to understand why contemporary innovation is more of a continuous process rather than a final destination.",
    },

    {
      title: "Small and Medium Business",
      desc: "Discover Cloud for Small and Medium Businesses. Effectively control IT expenses, bolster data protection, and expand utilizing the capabilities of cloud technology.",
    },

    {
      title: "Software Companies",
      desc: "Create a more robust future driven by Copious. Thousands of software developers rely on Copious to fuel their rapid expansion with cloud services that enable quick scalability and secure innovation.",
    },
  ],
};

export default function AWSCloudDetail() {
  const [activeTab, setActiveTab] = useState("use-case");

  return (
    <div className="w-full pt-[92px] bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full">
        <img
          src={heroBg}
          className=" w-full h-[350px] object-cover"
          alt="aws-hero-image"
        />
        <div className="absolute inset-0 bg-red-400/30" />
      </section>

      {/* ── Cloud Computing Section ───────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Cloud Computing With AWS(Amazon Web Services)
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Power Your Business with AWS Cloud Accelerate your business
                growth with scalable, secure, and reliable cloud solutions built
                entirely on Amazon Web Services. Our cloud-native infrastructure
                is designed to empower your organization by adapting dynamically
                to your evolving requirements. Through seamless scalability, you
                can easily expand or adjust your digital infrastructure to match
                your precise business needs. Security is deeply embedded into
                our framework, providing enterprise-grade protection that
                rigorously incorporates built-in AWS best practices to safeguard
                your critical data and assets.{" "}
              </p>

              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Performance and efficiency remain at the forefront of our
                digital ecosystem. We deliver high-performance architecture
                coupled with exceptional availability, ensuring your core
                applications consistently run smoothly and without interruption.
                To maximize your financial efficiency, our strategic cost
                optimization processes help you eliminate waste, letting you
                optimize overall operational costs and get the absolute most
                value from your cloud investment.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Transitioning to the cloud is effortless with the right partner
                by your side. Let our dedicated AWS experts help you seamlessly
                migrate, modernize, and manage your diverse workloads in the
                cloud.
              </p>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={aws1Img}
                alt="AWS Cloud Computing"
                className="w-full h-auto object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories Section ───────────────────────────────── */}
      <section className="w-full bg-[#e9ebec] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center mb-8">
            Categories
          </h2>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12">
            {[
              { id: "use-case", label: "By Use Case" },
              { id: "industry", label: "By Industry" },
              { id: "org", label: "By Organizations Type" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold border transition-all ${
                  activeTab === tab.id
                    ? "bg-[#da251d] text-white border-[#da251d] shadow-sm"
                    : "bg-white text-[#4b5563] border-gray-300 hover:border-[#da251d] hover:text-[#da251d]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Image */}
            <div className="w-full">
              <img
                src={aws2Img}
                alt="Cloud Categories"
                className="w-full h-[280px] sm:h-[340px] lg:h-[380px] object-contain md:object-cover bg-[#f8f9fa] rounded-xl shadow-sm"
              />
            </div>
            {/* Right: Category List */}
            <div className="space-y-7">
              {categories[activeTab].map((cat, i) => (
                <div key={i}>
                  <h3 className="text-[#da251d] font-bold text-[15px] sm:text-[16px] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-[#4b5563] text-[13.5px] sm:text-[14px] leading-[1.8]">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
