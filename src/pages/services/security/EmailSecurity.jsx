import React from 'react';
import heroBg from '../../../assets/images/services/security/email.jpg';
import sectionImg from '../../../assets/images/about/about-section.jpg';
import { FiCheckCircle } from 'react-icons/fi';

const advantages = [
  'Cloud-Security',
  'Malware & Phishing Protection',
  'Secure Roaming Users',
  'URL Detection and Filtering',
  'Flexible Policy Creation',
  'Real-Time Analysis & Reporting',
  'User Identification',
  'DNS Firewall Security',
];

export default function EmailSecurity() {
  return (
    <div className="w-full pt-[92px] bg-white">

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="w-full">
        <div
          className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] bg-cover bg-center flex flex-col justify-center py-14 sm:py-16"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <span className="bg-[#da251d] text-white text-[11px] sm:text-xs font-semibold px-4 sm:px-5 py-1.5 rounded-full mb-4 sm:mb-5 inline-block tracking-wide">
              Security
            </span>
            <h1 className="text-white text-[28px] sm:text-4xl lg:text-[52px] font-bold leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
              Email Security
            </h1>
            <p className="text-gray-200 text-[13px] sm:text-[14px] max-w-2xl mx-auto leading-relaxed mb-3 px-2">
              An essential component of communication in any organization is email. However, because complex and ever-growing cyber risks are always present, this straightforward method of communication also needs to be protected at all times.
            </p>
            <p className="text-gray-300 text-[12px] sm:text-[13px] max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              Tata Tele Business Services (TTBS) Email Security's incredibly dependable, expandable, feature-rich solutions support secure communication within your organization.
            </p>
            <button className="bg-[#da251d] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-md">
              Free Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* ── Email Security for Safe Office Communication ─────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Text */}
            <div>
              <h2 className="text-[#1f2937] text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-5 leading-snug">
                Email Security for Safe Office Communication
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  An essential component of communication in any organization is email. However, because complex and ever-growing cyber risks are always present, this straightforward method of communication also needs to be protected at all times.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Tata Tele Business Services (TTBS) Email Security's incredibly dependable, expandable, feature-rich solutions support secure communication within your organization.
                </p>
              </div>
              <button className="mt-6 bg-[#da251d] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-sm">
                More Details
              </button>
            </div>
            {/* Right: Image */}
            <div className="w-full">
              <img
                src={sectionImg}
                alt="Email Security for Safe Office Communication"
                className="w-full h-[240px] sm:h-[290px] lg:h-[320px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages of Telecom's Email Security Service ───────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="w-full order-2 lg:order-1">
              <img
                src={heroBg}
                alt="Advantages of Email Security"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-cover rounded-xl shadow-sm"
              />
            </div>
            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Advantages of Telecom's Email Security Service
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-5">
                You may feel secure knowing that TTBS Email Security's anti-fault tolerant email management solution offers protection against sophisticated persistent threats as well as guaranteed catastrophe recovery.
              </p>
              <ul className="space-y-3 mb-6">
                {advantages.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#4b5563] text-[14px] sm:text-[15px]">
                    <FiCheckCircle className="text-[#da251d] shrink-0" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-[#da251d] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-sm">
                More Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages Cards ────────────────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-center mb-5 leading-snug max-w-3xl mx-auto">
            Advantages Of Utilizing Email Security Solution From Copious Infotech.
          </h2>
          <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            You may feel secure knowing that TTBS Email Security's anti-fault tolerant email management solution offers protection against sophisticated persistent threats as well as guaranteed catastrophe recovery.
          </p>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {advantages.map((label, i) => (
              <button
                key={i}
                className="border border-[#da251d] text-[#da251d] font-semibold text-[13px] sm:text-[14px] py-3.5 sm:py-4 px-4 rounded-lg hover:bg-[#da251d] hover:text-white transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
