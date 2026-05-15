import React from 'react';
import heroBg from '../assets/endpoint.jpg';
import sectionImg from '../assets/about1.jpg';
import { FiCheckCircle } from 'react-icons/fi';

export default function SecurityDetail() {
  return (
    <div className="w-full pt-[92px] bg-white">

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="w-full">
        <div
          className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] bg-cover bg-center flex flex-col justify-center py-14 sm:py-16"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <span className="bg-[#da251d] text-white text-[11px] sm:text-xs font-semibold px-4 sm:px-5 py-1.5 rounded-full mb-4 sm:mb-5 inline-block tracking-wide">
              Security
            </span>
            <h1 className="text-white text-[28px] sm:text-4xl lg:text-[52px] font-bold leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
              Endpoint Security
            </h1>
            <p className="text-gray-200 text-[13px] sm:text-[14px] max-w-2xl mx-auto leading-relaxed mb-3 px-2">
              Endpoint Protection is a security practice employed by cybersecurity experts to safeguard a wide array of devices, including laptops, mobile phones, printers, and servers.
            </p>
            <p className="text-gray-300 text-[12px] sm:text-[13px] max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              Its primary objective is to identify, neutralize attacks, and eliminate risks to reinforce ongoing cyber threats, ensuring the security and integrity of these devices. Endpoint security involves safeguarding all devices linked to a network to prevent them from being exploited as entry points by cybercriminals.
            </p>
            <button className="bg-[#da251d] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-md">
              Free Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* ── What Is Endpoint Security ──────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Text */}
            <div>
              <h2 className="text-[#1f2937] text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-5 leading-snug">
                What Is Endpoint Security?
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Endpoint protection is a security practice employed by cybersecurity experts to safeguard a wide array of devices, including laptops, mobile phones, printers, and servers. Its primary objective is to identify and neutralize ongoing cyber threats, ensuring the security and integrity of these devices.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Endpoint security involves safeguarding all devices linked to a network to prevent them from being exploited as entry points by cybercriminals.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="w-full">
              <img
                src={sectionImg}
                alt="What Is Endpoint Security"
                className="w-full h-[240px] sm:h-[290px] lg:h-[320px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Comprehensive Endpoint Security For SMBs ──────────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="w-full order-2 lg:order-1">
              <img
                src={sectionImg}
                alt="Endpoint Security For SMBs"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-cover rounded-xl shadow-sm"
              />
            </div>
            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Comprehensive Endpoint Security For SMBs
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-4">
                As the digital transformation of businesses continues, it becomes crucial to prioritize robust cyber protection due to the escalating cyber threats. Unfortunately, numerous enterprises still overlook the importance of securing their digital assets.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-6">
                The utilization of endpoint security enforces significant advantages to businesses. Endpoint security enforces encompasses features such as application control, data loss protection (DLP), and advanced antivirus protection. Now, let us delve into the interconnected benefits of implementing endpoint security, which serves as an excellent means to safeguard your business.
              </p>
              <button className="bg-[#da251d] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-sm">
                More Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Improve Security Measures ──────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Improve Security Measures For Your Company
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-4">
                As the digital transformation of businesses continues, it becomes crucial to prioritize robust cyber protection due to the escalating cyber threats. Unfortunately, numerous enterprises still overlook the importance of securing their digital assets.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-6">
                The utilization of endpoint security enforces significant advantages to businesses. Endpoint security enforces encompasses features such as application control, data loss protection (DLP), and advanced antivirus protection. Now, let us delve into the interconnected benefits of implementing endpoint security, which serves as an excellent means to safeguard your business.
              </p>
              <button className="bg-[#da251d] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-sm">
                More Details
              </button>
            </div>
            {/* Right: Image */}
            <div className="w-full">
              <img
                src={sectionImg}
                alt="Improve Security Measures"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages Section ─────────────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Heading */}
          <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-center mb-5 leading-snug max-w-3xl mx-auto">
            Advantages Of Utilizing End Point Security Solution From Copious Infotech.
          </h2>
          <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            Endpoint Security provides comprehensive protection for critical business data, ensuring defense against a wide range of threats such as virus spyware, pharming, hacking, IM, filtering, USB pen blocking, and data theft. With its known features, Copious Infotech Endpoint Security effectively safeguards all valuable information, offering peace of mind to businesses.
          </p>

          {/* Create & Manage Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <button
                key={i}
                className="border border-[#da251d] text-[#da251d] font-semibold text-[14px] sm:text-[15px] py-3.5 sm:py-4 px-6 rounded-lg hover:bg-[#da251d] hover:text-white transition-all duration-200"
              >
                Create &amp; Manage
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
