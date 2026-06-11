import React from "react";
import { useNavigate } from "react-router-dom";
import aboutHero from "../../assets/images/services/general/whatsapp header.jpeg";
import whatapp1Img from "../../assets/images/services/general/whatsapp business.jpeg";

export default function BulkWebWhatsApp() {
  const navigate = useNavigate();

  const featuresList = [
    {
      title: "Mass Messaging",
      desc: "Send a single message to hundreds or thousands of recipients at once.",
    },
    {
      title: "Multimedia Support",
      desc: "Send text, images, videos, documents, and other media formats.",
    },
    {
      title: "Personalization",
      desc: "Customize messages with variables (e.g., recipient's name) for a personalized touch.",
    },
    {
      title: "Scheduled Messages",
      desc: "Schedule messages to be sent at a specific date and time",
    },
    {
      title: "Contact Management",
      desc: "Import and manage contact lists, categorize recipients, and segment audiences.",
    },
    {
      title: "Message Templates",
      desc: "Create and save message templates for frequently used messages.",
    },
    {
      title: "Delivery Reports",
      desc: "Track message delivery and read status with detailed reports and analytics.",
    },
    {
      title: "Interactive Messages",
      desc: "Use buttons, quick replies, and other interactive elements in messages.",
    },
    {
      title: "Automation",
      desc: "Set up automated responses and workflows based on triggers or user actions.",
    },
    {
      title: "Compliance",
      desc: "Ensure compliance with WhatsApp Business policies and data protection regulations.",
    },
  ];

  return (
    <div className="w-full pt-[92px] bg-[#efefef]">
      {/* Hero Section */}
      <section className="relative w-full">
        <img
          src={aboutHero}
          alt="bulk whatsapp header image"
          className=" w-full md:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* Content Section */}
      <section className="bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row gap-4 px-4 lg:px-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-[#1f2937] text-2xl sm:text-3xl lg:text-[36px] font-bold mb-6 leading-snug">
              What is Bulk Whatsapp Business?
            </h2>
            <div className="space-y-4">
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Bulk SMS messaging is a legacy description for
                application-to-person SMS messaging services. It refers
                specifically to the sending of large number of SMS messages to
                the mobile phones of a predetermined group of recipients.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Today the application-to-person SMS messaging services have
                evolved to include bulk SMS messaging alongside the sending of
                single messages (such as one time passwords and delivery
                notifications), interactive messaging (such as group messaging
                services), and incoming number services (such as mobile
                marketing campaigns, voting or information lines).
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={whatapp1Img}
              alt="Team joining hands"
              className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover bg-[#f8f9fa] rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white pb-14 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <h2 className="text-[#1f2937] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center mb-12">
            Feature of Bulk Whatsapp Business
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuresList.map((item, index) => (
              <article
                key={index}
                className="site-card bg-[#f3f4f6] p-6 lg:p-8 rounded-lg relative overflow-hidden min-h-[200px] flex flex-col justify-center cursor-pointer"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#e5e7eb] rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute right-4 bottom-4 w-16 h-16 bg-[#e5e7eb] rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500 delay-75"></div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-1.5 h-12 bg-[#da251d] rounded-full shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#1f2937] mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#4b5563] text-sm lg:text-[15px] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
