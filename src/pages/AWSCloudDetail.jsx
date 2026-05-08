import React, { useState } from 'react';
import heroBg from '../assets/about.jpg';
import sectionImg from '../assets/about1.jpg';

const categories = {
  'use-case': [
    {
      title: 'Artificial Intelligence',
      desc: 'Build And Scale The Next Wave Of AI Innovation On AWS. Transform Customer Interactions With A Wide Range Of Artificial Intelligence And Machine Learning Solutions, Providing Unparalleled Customer Experiences.',
    },
    {
      title: 'Backup & Restore',
      desc: 'Build And Scale The Next Wave Of AI Innovation On AWS. Transform Customer Interactions With A Wide Range Of Artificial Intelligence And Machine Learning Solutions, Providing Unparalleled Customer Experiences.',
    },
    {
      title: 'Hybrid & Multicloud',
      desc: 'Build And Scale The Next Wave Of AI Innovation On AWS. Transform Customer Interactions With A Wide Range Of Artificial Intelligence And Machine Learning Solutions, Providing Unparalleled Customer Experiences.',
    },
  ],
  'industry': [
    {
      title: 'Healthcare & Life Sciences',
      desc: 'Accelerate research and innovation with AWS cloud solutions designed to meet the strict compliance and security requirements of healthcare and life sciences organizations worldwide.',
    },
    {
      title: 'Financial Services',
      desc: 'Enable agility, innovation, and security in financial services with scalable AWS cloud infrastructure, helping banks, insurers, and capital markets firms drive transformation.',
    },
    {
      title: 'Education & Research',
      desc: 'Empower educators, students, and researchers with scalable, cost-effective AWS tools for collaboration, data analytics, and digital learning environments at any scale.',
    },
  ],
  'org': [
    {
      title: 'Startups',
      desc: 'AWS provides startups with the infrastructure, credits, and support they need to move fast, build smart, and scale globally without large upfront infrastructure investments.',
    },
    {
      title: 'Enterprise',
      desc: 'Large enterprises trust AWS to run mission-critical workloads, providing the reliability, security, and global footprint needed to operate at scale across every region.',
    },
    {
      title: 'Government & Public Sector',
      desc: 'AWS supports government agencies with secure, compliant cloud infrastructure that meets the regulatory requirements of public sector organizations around the world.',
    },
  ],
};

export default function AWSCloudDetail() {
  const [activeTab, setActiveTab] = useState('use-case');

  return (
    <div className="w-full pt-[92px] bg-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="w-full">
        <div
          className="relative w-full min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] bg-cover bg-center flex items-center justify-center py-16"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-4 sm:px-8">
            <span className="bg-[#da251d] text-white text-[11px] sm:text-xs font-semibold px-4 py-1.5 rounded-full mb-5 inline-block tracking-wide">
              Cloud
            </span>
            <h1 className="text-white text-[26px] sm:text-[36px] lg:text-[48px] font-bold leading-tight max-w-3xl mx-auto">
              Harness The Power Of AWS With Our Expertise
            </h1>
          </div>
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
                AWS, or Amazon Web Services, is a globally recognised cloud platform that is widely embraced and utilized by numerous customers worldwide. With a vast array of over 200 fully-equipped services available, AWS operates from data centers across the globe. This platform caters to a diverse range of customers, including rapidly expanding startups, larger scale enterprises, and prominent government agencies. By leveraging AWS, these customers are able to reduce expenses, enhance their agility, and accelerate their innovation processes.
              </p>
            </div>
            {/* Right: Image */}
            <div className="w-full">
              <img
                src={sectionImg}
                alt="AWS Cloud Computing"
                className="w-full h-[250px] sm:h-[290px] lg:h-[320px] object-cover rounded-xl shadow-sm"
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
              { id: 'use-case', label: 'By Use Case' },
              { id: 'industry', label: 'By Industry' },
              { id: 'org', label: 'By Organizations Type' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold border transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#da251d] text-white border-[#da251d] shadow-sm'
                    : 'bg-white text-[#4b5563] border-gray-300 hover:border-[#da251d] hover:text-[#da251d]'
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
                src={sectionImg}
                alt="Cloud Categories"
                className="w-full h-[280px] sm:h-[340px] lg:h-[380px] object-cover rounded-xl shadow-sm"
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
