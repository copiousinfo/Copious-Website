import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../../assets/images/services/cloud/azure.jpg';
import sectionImg from '../../../assets/images/about/about-section.jpg';

const values = [
  {
    title: 'Trust your cloud',
    desc: 'Receive comprehensive security measures, supported by a group of proficient professionals, and proactive adherence to regulations that is relied upon by corporations, governmental bodies, and emerging businesses.',
  },
  {
    title: 'Effortlessly integrate hybrid operations',
    desc: 'We are ready to assist you at your on-premises location, across various clouds, and at the edge. Our services are tailored to integrate and manage your environments in a hybrid cloud setup.',
  },
  {
    title: 'Build on your terms',
    desc: 'Embracing open source principles, along with backing for a wide array of languages and frameworks, construct your projects as you desire and launch them wherever you prefer.',
  },
  {
    title: 'Prepare for the future',
    desc: "Microsoft's ongoing innovation is dedicated to fostering your growth today and shaping your future product strategies.",
  },
];

const features = [
  {
    title: 'Azure SQL',
    desc: 'Microsoft Azure SQL Database is a managed cloud database cloud-based Microsoft SQL Servers, provided as part of Microsoft Azure services. The service handles database management functions for cloud based Microsoft SQL Servers including upgrading, patching, backups, and monitoring without user involvement.',
  },
  {
    title: 'Virtual Machine',
    desc: 'A virtual machine is the virtualization or emulation of a computer system. Virtual machines are based on computer architectures and provide the functionality of a physical computer. Their implementations may involve specialized hardware, software, or a combination of the two.',
  },
  {
    title: 'App Services',
    desc: 'Azure App Service is an HTTP-based service for hosting web applications, REST APIs, and mobile back ends. Applications run and scale with ease on both Windows and Linux-based environments.',
  },
  {
    title: 'Azure Virtual Desktop',
    desc: 'Azure Virtual Desktop, previously recognized as Windows Virtual Desktop, is a platform within Microsoft Azure that enables the virtualization of Windows operating systems. It offers secure access to virtual desktops and applications through the cloud, utilizing the Remote Desktop Protocol.',
  },
  {
    title: 'Azure Function',
    desc: 'We are ready to assist you at your on-premises location, across various clouds, and at the edge. Our services are tailored to integrate and manage your environments in a hybrid cloud setup.',
  },
  {
    title: 'Azure Kubernetes Service (AKS)',
    desc: 'AKS provides the fastest method to initiate the development and deployment of cloud-native applications in Azure, datacenters, or at the edge. It comes with pre-built code-to-cloud pipelines and guardrails, ensuring a seamless process.',
  },
];

export default function AzureCloudDetail() {
  const navigate = useNavigate();

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
              Elevate Your Business With Azure Cloud Technology
            </h1>
          </div>
        </div>
      </section>

      {/* ── What Is Azure Cloud ──────────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                What Is Azure Cloud?
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Azure is a cloud computing platform and service created by Microsoft. It provides a range of cloud services, including those for computing, analytics, storage, and networking. Users can choose and configure these services to develop and scale new applications, or run existing applications, in the public cloud.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  The Azure cloud platform offers over 200 products and cloud services aimed at assisting you in developing innovative solutions to address current issues and shape the future. Develop, operate, and oversee applications across various clouds, on-premises, and at the edge, utilizing the tools and frameworks that best suit your needs.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="w-full">
              <img
                src={sectionImg}
                alt="What Is Azure Cloud"
                className="w-full h-[250px] sm:h-[290px] lg:h-[320px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center mb-10 sm:mb-14">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((val, i) => (
              <div
                key={i}
                className="site-card bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm cursor-pointer"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#da251d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-[#1f2937] font-bold text-[16px] sm:text-[17px] mb-3">{val.title}</h3>
                <p className="text-[#4b5563] text-[13.5px] sm:text-[14px] leading-[1.8]">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Of Azure Cloud ──────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center mb-10 sm:mb-14">
            Feature's Of The Azure Cloud
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feat, i) => (
              <div
                key={i}
                className="site-card bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col cursor-pointer"
              >
                <h3 className="text-[#1f2937] font-bold text-[15px] sm:text-[16px] mb-3">{feat.title}</h3>
                <p className="text-[#4b5563] text-[13px] sm:text-[14px] leading-[1.8] mb-5 flex-grow">{feat.desc}</p>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-2.5 rounded-md bg-[#da251d] text-white font-bold text-[13px] sm:text-[14px] hover:bg-[#c02019] transition-all"
                >
                  More Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
