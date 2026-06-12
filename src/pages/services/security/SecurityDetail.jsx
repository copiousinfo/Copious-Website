import React from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../../../assets/images/services/security/end point header.jpeg";
import endPoint1Img from "../../../assets/images/services/security/end point_1.jpeg";
import endPoint2Img from "../../../assets/images/services/security/end point_2.jpeg";
import endPoint3Img from "../../../assets/images/services/security/end point_3.jpeg";
import { FiCheckCircle } from "react-icons/fi";

export default function SecurityDetail() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[92px] bg-white">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative w-full">
        <img
          src={heroBg}
          className=" w-full md:h-[500px] object-cover"
          alt="endpoint-security-hero-image"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* ── What Is Endpoint Security ──────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-12 lg:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[#1f2937] text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-5 leading-snug">
                What Is Endpoint Security?
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Endpoint security is a cybersecurity strategy that focuses on
                  protecting individual devices—known as endpoints—that connect
                  to a corporate network.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  By deploying security software directly on these devices,
                  organizations can monitor for, detect, and block malicious
                  activit.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Modern endpoint security solutions have evolved beyond
                  traditional antivirus, incorporating advanced features li////////////ke
                  AI-driven threat intelligence, real-time behavioral analysis,
                  and cloud-based centralized management.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={endPoint1Img}
                alt="What Is Endpoint Security"
                className="w-full h-[240px] sm:h-[290px] lg:h-[320px] object-fit
                 bg-[#f8f9fa] rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Comprehensive Endpoint Security For SMBs ──────────── */}
      <section className="w-full bg-[#ebecec] py-12 ">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 order-2 lg:order-1">
              <img
                src={endPoint2Img}
                alt="Endpoint Security For SMBs"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-fit bg-[#f8f9fa] rounded-xl shadow-sm"
              />
            </div>
            {/* Right: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Comprehensive Endpoint Security For SMBs
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-4">
                As the digital transformation of businesses continues, it
                becomes crucial to prioritize robust cyber protection due to the
                escalating cyber threats. Unfortunately, numerous enterprises
                still overlook the importance of securing their digital assets.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-6">
                The utilization of endpoint security enforces significant
                advantages to businesses. Endpoint security enforces encompasses
                features such as application control, data loss protection
                (DLP), and advanced antivirus protection. .
              </p>
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

      {/* ── Improve Security Measures ──────────────────────────── */}
      <section className="w-full bg-white py-12 ">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[#1f2937] text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-5 leading-snug">
                Improve Security Measures For Your Company
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-4">
                As the digital transformation of businesses continues, it
                becomes crucial to prioritize robust cyber protection due to the
                escalating cyber threats. Unfortunately, numerous enterprises
                still overlook the importance of securing their digital assets.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-6">
                The utilization of endpoint security enforces significant
                advantages to businesses. Endpoint security enforces encompasses
                features such as application control, data loss protection
                (DLP), and advanced antivirus protection.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#da251d] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-sm active:scale-95"
              >
                More Details
              </button>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={endPoint3Img}
                alt="Improve Security Measures"
                className="w-full h-[240px] sm:h-[290px] lg:h-[340px] object-cover bg-[#f8f9fa] rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages Section ─────────────────────────────────── */}
      <section className="w-full bg-[#ebecec] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Heading */}
          <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-center mb-5 leading-snug max-w-3xl mx-auto">
            Advantages Of Utilizing End Point Security Solution From Copious
            Infotech.
          </h2>
          <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            Endpoint Security provides comprehensive protection for critical
            business data, ensuring defense against a wide range of threats such
            as virus spyware, pharming, hacking, IM, filtering, USB pen
            blocking, and data theft. With its known features, Copious Infotech
            Endpoint Security effectively safeguards all valuable information,
            offering peace of mind to businesses.
          </p>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {[
              "Cloud-Security",
              "Malware & Phishing Protection",
              "Secure Roaming Users",
              "URL Detection and Filtering",
              "Flexible Policy Creation",
              "Real-Time Analysis & Reporting",
              "User Identification",
              "DNS Firewall Security",
            ].map((feature, i) => (
              <div
                key={i}
                className="site-card border border-[#da251d] text-[#da251d] font-semibold text-[14px] sm:text-[15px] py-3.5 sm:py-4 px-6 rounded-lg hover:bg-[#da251d] hover:text-white transition-colors duration-300 text-center flex items-center justify-center cursor-pointer"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
