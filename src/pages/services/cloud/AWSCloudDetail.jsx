import React, { useState } from "react";
import heroBg from "../../../assets/images/services/cloud/aws_2.png";
import aws1Img from "../../../assets/images/services/cloud/aws_1.png";

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
      <section className="w-full">
        <div
          className="relative w-full min-h-[340px] sm:min-h-[400px] lg:min-h-[600px] bg-cover bg-center flex items-center justify-center py-16"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-red-400/30" />
        </div>
      </section>

      {/* ── Cloud Computing Section ───────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Cloud Computing With AWS(Amazon Web Services)
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                AWS, or Amazon Web Services, is a globally recognised cloud
                platform that is widely embraced and utilized by numerous
                customers worldwide. With a vast array of over 200
                fully-equipped services available, AWS operates from data
                centers across the globe. This platform caters to a diverse
                range of customers, including rapidly expanding startups, larger
                scale enterprises, and prominent government agencies. By
                leveraging AWS, these customers are able to reduce expenses,
                enhance their agility, and accelerate their innovation
                processes.
              </p>
            </div>
            {/* Right: Image */}
            <div className="w-full">
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
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
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
                src={aws1Img}
                alt="Cloud Categories"
                className="w-full h-[280px] sm:h-[340px] lg:h-[380px] object-contain bg-[#f8f9fa] rounded-xl shadow-sm"
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
