import React from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../../../assets/images/services/security/email header.jpeg";
import email1Img from "../../../assets/images/services/security/email1.jpeg";
import email2Img from "../../../assets/images/services/security/email2.jpeg"
import { FiCheckCircle } from "react-icons/fi";

const advantages = [
  "Comprehensive Defense",
  "Secure Access",
  "Intelligent Control"
];
const detailedAdvantages = [
  "Comprehensive Defense",
  "Secure Access",
  "Intelligent Control",
  "Block Unauthorized Access",
]

export default function EmailSecurity() {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-[56px] bg-white">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative w-full">
        <img
          src={heroBg}
          className=" w-full md:h-[500px] object-cover"
          alt="Email security hero image"
        />
        <div className="absolute inset-0 bg-red-400/30" />
      </section>

      {/* ── Email Security for Safe Office Communication ─────────── */}
      <section className="w-full bg-white py-12 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-1">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[#1f2937] text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-5 leading-snug">
                Email Security for Safe Office Communication
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  An essential component of communication in any organization is
                  email. However, because complex and ever-growing cyber risks
                  are always present, this straightforward method of
                  communication also needs to be protected at all times.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Tata Tele Business Services (TTBS) Email Security's incredibly
                  dependable, expandable, feature-rich solutions support secure
                  communication within your organization.
                </p>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="mt-6 bg-[#da251d] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-sm active:scale-95"
              >
                More Details
              </button>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={email1Img}
                alt="Email Security for Safe Office Communication"
                className="w-full h-[240px] sm:h-[290px] lg:h-[320px] object-fit bg-[#f8f9fa] rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages of Telecom's Email Security Service ───────── */}
      <section className="w-full bg-[#f8f9fa] py-12 ">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-5 ">
            {/* Left: Image */}
            <div className="w-full order-2 lg:order-1">
              <img
                src={email2Img}
                alt="Advantages of Email Security"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-fit bg-[#f8f9fa] rounded-xl shadow-sm"
              />
            </div>
            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Advantages of Telecom's Email Security Service
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-5">
                Our fault-tolerant solution ensures robust protection against advanced persistent threats with guaranteed disaster recovery. Key features include:
              </p>
              <ul className="space-y-3 mb-6">
                {advantages.map((item) => (
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

      {/* ── Advantages Cards ────────────────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-center mb-5 leading-snug max-w-3xl mx-auto">
            Advantages Of Utilizing Email Security Solution From Copious
            Infotech.
          </h2>
          <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            You may feel secure knowing that TTBS Email Security's anti-fault
            tolerant email management solution offers protection against
            sophisticated persistent threats as well as guaranteed catastrophe
            recovery.
          </p>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {detailedAdvantages.map((label, i) => (
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
