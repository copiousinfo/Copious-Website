import React from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../../../assets/images/services/security/antivirus.jpg";
import antivirus1Img from "../../../assets/images/services/security/antivirus1.jpg";
import antivirus2Img from "../../../assets/images/services/security/antivirus2.jpeg";

import { FiCheckCircle } from "react-icons/fi";

const deviceLinks = [
  { label: "Antivirus for Windows", icon: "🪟" },
  { label: "Antivirus for Linux", icon: "🐧" },
  { label: "Antivirus for Mac", icon: "🍎" },
  { label: "Antivirus for iOS", icon: "📱" },
];

const advantages = [
  "Real-Time Malware Detection",
  "Ransomware Protection",
  "Spyware & Adware Removal",
  "Automatic Software Updates",
  "Multi-Device Protection",
  "Scheduled Scans & Reports",
  "Web & Email Threat Filtering",
  "Zero-Day Threat Defense",
];

export default function AntivirusSecurity() {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-[92px] bg-white">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative w-full">
        <img
          src={heroBg}
          alt="antivirus security hero image"
          className=" w-full md:h-[500px] object-cover"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* ── What is Antivirus? ──────────────────────────────────── */}
      <section className="w-full bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[#1f2937] text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-5 leading-snug">
                What is Antivirus?
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Antivirus software is a program designed to detect, prevent,
                  and remove malicious software, commonly referred to as
                  malware, from computers and other devices. Malware includes
                  viruses, worms, trojans, ransomware, spyware, adware, and
                  more.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Anti-virus software can identify and block many viruses before
                  they can infect your computer. Once you install anti-virus
                  software, it is important to keep it up to date. Select from
                  the comprehensive range of cyber security solutions. Copious
                  Infotech provides industry-leading antivirus protection across
                  all your platforms — whether you're on Windows, Linux, Mac, or
                  iOS.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={antivirus1Img}
                alt="What is Antivirus"
                className="w-full h-[240px] sm:h-[290px] lg:h-[320px] object-cover bg-[#f8f9fa] rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why We Use Antivirus? ───────────────────────────────── */}
      <section className="w-full bg-[#e9eaeb] py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 order-2 lg:order-1">
              <img
                src={antivirus2Img}
                alt="Why We Use Antivirus"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-cover bg-[#f8f9fa] rounded-xl shadow-sm"
              />
            </div>
            {/* Right: Text */}
            <div className="order-1 lg:order-2 w-full md:w-1/2">
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Why We Use Antivirus?
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-5">
                In order to stop malware from harming your device, antivirus
                programs identify, quarantine, and/or remove dangerous code. In
                order to protect users from the newest viruses and other
                infections, modern antivirus software updates itself
                automatically.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Detects and removes malware before it spreads",
                  "Protects sensitive data from theft",
                  "Prevents unauthorized system access",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#4b5563] text-[14px] sm:text-[15px]"
                  >
                    <FiCheckCircle
                      className="text-[#da251d] shrink-0"
                      size={17}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#da251d] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-sm active:scale-95"
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages Section ──────────────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-center mb-5 leading-snug max-w-3xl mx-auto">
            Advantages Of Utilizing Antivirus Security Solution From Copious
            Infotech.
          </h2>
          <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            Copious Infotech Antivirus provides comprehensive protection for
            your business data and devices, defending against viruses,
            ransomware, spyware, trojans, and other sophisticated threats —
            keeping your organisation secure at all times.
          </p>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {advantages.map((label, i) => (
              <button
                key={i}
                className="site-card border border-[#da251d] text-[#da251d] font-semibold text-[13px] sm:text-[14px] py-3.5 sm:py-4 px-4 rounded-lg hover:bg-[#da251d] hover:text-white transition-colors duration-300 cursor-pointer"
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
