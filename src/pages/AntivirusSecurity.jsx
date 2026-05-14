import React from 'react';
import heroBg from '../assets/antivirus.jpg';
import sectionImg from '../assets/about1.jpg';
import { FiCheckCircle } from 'react-icons/fi';

const deviceLinks = [
  { label: 'Antivirus for Windows', icon: '🪟' },
  { label: 'Antivirus for Linux', icon: '🐧' },
  { label: 'Antivirus for Mac', icon: '🍎' },
  { label: 'Antivirus for iOS', icon: '📱' },
];

const advantages = [
  'Real-Time Malware Detection',
  'Ransomware Protection',
  'Spyware & Adware Removal',
  'Automatic Software Updates',
  'Multi-Device Protection',
  'Scheduled Scans & Reports',
  'Web & Email Threat Filtering',
  'Zero-Day Threat Defense',
];

export default function AntivirusSecurity() {
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
              Antivirus Security
            </h1>
            <p className="text-gray-200 text-[13px] sm:text-[14px] max-w-2xl mx-auto leading-relaxed mb-3 px-2">
              Industry-leading antivirus protection for your data and devices. Award-winning protection for Windows, Mac, Android, and iOS.
            </p>
            <p className="text-gray-300 text-[12px] sm:text-[13px] max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              Copious Serve Antivirus delivers comprehensive, real-time security against viruses, malware, ransomware, and other threats — keeping all your devices protected around the clock.
            </p>
            <button className="bg-[#da251d] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-md">
              Free Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* ── What is Antivirus? ──────────────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Text */}
            <div>
              <h2 className="text-[#1f2937] text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-5 leading-snug">
                What is Antivirus?
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Antivirus software is a program designed to detect, prevent, and remove malicious software, commonly referred to as malware, from computers and other devices. Malware includes viruses, worms, trojans, ransomware, spyware, adware, and more.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Anti-virus software can identify and block many viruses before they can infect your computer. Once you install anti-virus software, it is important to keep it up to date.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="w-full">
              <img
                src={sectionImg}
                alt="What is Antivirus"
                className="w-full h-[240px] sm:h-[290px] lg:h-[320px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why We Use Antivirus? ───────────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="w-full order-2 lg:order-1">
              <img
                src={heroBg}
                alt="Why We Use Antivirus"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-cover rounded-xl shadow-sm"
              />
            </div>
            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Why We Use Antivirus?
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-5">
                In order to stop malware from harming your device, antivirus programs identify, quarantine, and/or remove dangerous code. In order to protect users from the newest viruses and other infections, modern antivirus software updates itself automatically.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Detects and removes malware before it spreads',
                  'Protects sensitive data from theft',
                  'Prevents unauthorized system access',
                  'Keeps your devices running safely and efficiently',
                ].map((item) => (
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

      {/* ── Get Antivirus On All Your Devices ──────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                GET ANTIVIRUS ON ALL YOUR DEVICES
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-6">
                Select from the comprehensive range of cyber security solutions. Copious Infotech provides industry-leading antivirus protection across all your platforms — whether you're on Windows, Linux, Mac, or iOS.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {deviceLinks.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:border-[#da251d] hover:bg-red-50 transition-all duration-200 cursor-pointer group"
                  >
                    <span className="text-xl">{d.icon}</span>
                    <span className="text-[#374151] text-[14px] font-semibold group-hover:text-[#da251d] transition-colors">
                      {d.label}
                    </span>
                  </div>
                ))}
              </div>
              <button className="bg-[#da251d] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-sm">
                More Details
              </button>
            </div>
            {/* Right: Image */}
            <div className="w-full">
              <img
                src={sectionImg}
                alt="Antivirus on All Devices"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages Section ──────────────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-center mb-5 leading-snug max-w-3xl mx-auto">
            Advantages Of Utilizing Antivirus Security Solution From Copious Infotech.
          </h2>
          <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            Copious Infotech Antivirus provides comprehensive protection for your business data and devices, defending against viruses, ransomware, spyware, trojans, and other sophisticated threats — keeping your organisation secure at all times.
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
