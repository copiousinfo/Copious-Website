import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../../assets/images/services/cloud/jio.jpg';
import sectionImg from '../../../assets/images/about/about-section.jpg';

const features = [
  {
    title: 'Super Flexible',
    desc: 'Enjoy the ease of using cloud storage designed specifically for photos, videos, music, documents, and contacts, regardless of their size or format. Easily handle a variety of file formats all in one centralized platform.',
  },
  {
    title: 'Mostly Secure',
    desc: "Safeguard your confidential documents within JioCloud's Private Folder. Establish a unique passphrase and enable App Lock for enhanced confidentiality, guaranteeing the protection of your private information in case your device is lost.",
  },
  {
    title: 'High Searching Power',
    desc: "Quickly access your files using JioCloud's innovative search feature. Easily find them based on Name, Date, or Location, guaranteeing you find what you're looking for without delay.",
  },
  {
    title: 'Enhanced Sharing',
    desc: "JioCloud's secure private share feature enables you to share files with complete confidence. You can customize permissions to have full control over who can view or edit your data. Additionally, you can create share links for convenient public access to your files.",
  },
  {
    title: 'Always Keep Track Of Your Files',
    desc: 'JioCloud guarantees a hassle-free file management experience through its Auto Backup functionality, providing secure storage for photos, videos, documents, messages, and contacts. This ensures uninterrupted access and peace of mind.',
  },
  {
    title: 'Smooth Sign-in',
    desc: "Avoid the inconvenience of passwords by utilizing JioCloud's OTP login feature. Effortlessly access your account on your Desktop or STB by scanning the QR code displayed on your phone. This method ensures a straightforward and secure login process, as it should be.",
  },
  {
    title: 'Widely Accessible',
    desc: 'Experience the convenience of cloud storage tailored for photos, videos, music, documents, and contacts, irrespective of their format or size. Manage an array of file formats effortlessly within a unified platform.',
  },
];

const advantages = [
  {
    title: 'Simple',
    desc: 'Assortment of pre-packaged solutions with guided purchasing and complete digital enrollment process.',
  },
  {
    title: 'Secure',
    desc: 'Cutting-edge worldwide cybersecurity intelligence, combined hardware, and numerous security accreditations.',
  },
  {
    title: 'Superfast',
    desc: 'GST Reports Format & Excel Export.',
  },
  {
    title: 'State-of-the-art',
    desc: 'Top-tier Cloud infrastructure featuring integrated IaaS, PaaS & SaaS, in addition to industry-specific solutions.',
  },
  {
    title: 'Scalable',
    desc: 'JioBusiness customers have access to dedicated data centers that offer expandable capacity, elastic bandwidth, and Virtual Machines (VMs) available on demand.',
  },
  {
    title: 'Savings Oriented',
    desc: "Business usage can benefit from a 'pay-as-you-go' model, featuring transparent pricing and potential savings of up to 60%.",
  },
  {
    title: 'Service Focussed',
    desc: 'Our customer service is available 24x7, we offer digital self-service options, and provide top deals through partnerships and collaborations.',
  },
  {
    title: 'Multilingual',
    desc: 'It is provided in multiple languages.',
  },
  {
    title: 'Data Transfer',
    desc: 'Data transfer with security.',
  },
];

export default function JioCloudDetail() {
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
              Unleash The Power Of The Jio Cloud With Copious Infotech
            </h1>
          </div>
        </div>
      </section>

      {/* ── What Is JioCloud ─────────────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                What Is JioCloud?
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  JioCloud, a secure cloud storage service offered by Jio, offers complimentary storage upon registration. This platform simplifies the process of backing up your device data. The stored information can be synchronized across multiple devices using a single account and effortlessly shared with your network, whether it be for personal or business purposes. Essentially, it functions as a virtual hard drive, allowing you to access your assortment of photos, videos, music, documents, and contacts from anywhere.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  <strong className="block text-[#1f2937] mb-2 font-bold">Enhance IT infrastructure to streamline business operations.</strong>
                  Cloud adoption is a pivotal factor in facilitating the optimization of business operations and expediting technological advancements. JioCloud aims to establish itself as the foremost local cloud provider in India by offering convenient purchasing options, cost-effective pricing, localization, extensive coverage, and a comprehensive range of suitable solutions.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="w-full">
              <img
                src={sectionImg}
                alt="What Is JioCloud"
                className="w-full h-[250px] sm:h-[290px] lg:h-[320px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Section ──────────────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center mb-10 sm:mb-14">
            Feature
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feat, i) => (
              <div
                key={i}
                className="site-card bg-white rounded-xl border border-gray-100 p-6 sm:p-7 shadow-sm cursor-pointer"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#da251d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-[#1f2937] font-bold text-[15px] sm:text-[16px] mb-3">{feat.title}</h3>
                <p className="text-[#4b5563] text-[13px] sm:text-[14px] leading-[1.8]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jio Advantage Section ────────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center mb-4">
            Jio Advantage
          </h2>
          <p className="text-[#4b5563] text-[14px] sm:text-[15px] text-center mb-10 sm:mb-14">
            JioCloud offers a wide range of benefits for your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="site-card bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col cursor-pointer"
              >
                <h3 className="text-[#1f2937] font-bold text-[15px] sm:text-[16px] mb-3">{adv.title}</h3>
                <p className="text-[#4b5563] text-[13px] sm:text-[14px] leading-[1.8] mb-5 flex-grow">{adv.desc}</p>
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
