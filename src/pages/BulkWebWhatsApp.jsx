import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutHero from '../assets/whattap.jpg';
import aboutImage from '../assets/about1.jpg'; // Using existing images as fallbacks

export default function BulkWebWhatsApp() {
  const navigate = useNavigate();

  const plans = [
    {
      price: '$10/mth',
      name: 'One Month Plan',
      billing: 'Billed monthly.',
      features: [
        'Monthly Cost for IVR',
        'Fully automated IVR at $0.06/min',
        'Basic reporting and analytics',
        'Basic chat and email support',
      ],
    },
    {
      price: '$12/mth',
      name: 'Three Month Plan',
      billing: 'Billed quarterly.',
      features: [
        'Monthly Cost for IVR',
        'Fully automated IVR at $0.06/min',
        'Basic reporting and analytics',
        'Basic chat and email support',
      ],
    },
    {
      price: '$16/mth',
      name: 'Six Month Plan',
      billing: 'Billed semi-annually.',
      features: [
        'Monthly Cost for IVR',
        'Fully automated IVR at $0.06/min',
        'Basic reporting and analytics',
        'Basic chat and email support',
      ],
    },
  ];

  const featuresList = [
    { title: 'Mass Messaging', desc: 'Send a single message to hundreds or thousands of recipients at once.' },
    { title: 'Multimedia Support', desc: 'Send text, images, videos, documents, and other media formats.' },
    { title: 'Personalization', desc: "Customize messages with variables (e.g., recipient's name) for a personalized touch." },
    { title: 'Scheduled Messages', desc: 'Schedule messages to be sent at a specific date and time' },
    { title: 'Contact Management', desc: 'Import and manage contact lists, categorize recipients, and segment audiences.' },
    { title: 'Message Templates', desc: 'Create and save message templates for frequently used messages.' },
    { title: 'Delivery Reports', desc: 'Track message delivery and read status with detailed reports and analytics.' },
    { title: 'Interactive Messages', desc: 'Use buttons, quick replies, and other interactive elements in messages.' },
    { title: 'Automation', desc: 'Set up automated responses and workflows based on triggers or user actions.' },
    { title: 'Compliance', desc: 'Ensure compliance with WhatsApp Business policies and data protection regulations.' }
  ];

  return (
    <div className="w-full pt-[92px] bg-[#efefef]">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[380px] sm:min-h-[420px] lg:h-[480px] bg-cover bg-center flex flex-col justify-center py-12 sm:py-16"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <span className="bg-[#da251d] text-white text-[11px] sm:text-xs font-semibold px-4 sm:px-5 py-1.5 rounded-full mb-4 sm:mb-5 inline-block">
            Services
          </span>
          <h1 className="text-white text-[28px] sm:text-4xl lg:text-[52px] font-bold leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
            Bulk Web Whatsapp Services
          </h1>
          <p className="text-gray-200 text-[13px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            Bulk Web WhatsApp enables businesses to send mass messages via WhatsApp Web. It automates messaging, allowing companies to reach numerous customers simultaneously for marketing, notifications, and customer service efficiently.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#da251d] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-md w-auto"
          >
            Free Live Demo
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 lg:px-12">
          <div>
            <h2 className="text-[#1f2937] text-2xl sm:text-3xl lg:text-[36px] font-bold mb-6 leading-snug">
              What is Bulk Web WhatsApp?
            </h2>
            <div className="space-y-4">
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Bulk SMS messaging is a legacy description for application-to-person SMS messaging services. It refers specifically to the sending of large number of SMS messages to the mobile phones of a predetermined group of recipients.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Today the application-to-person SMS messaging services have evolved to include bulk SMS messaging alongside the sending of single messages (such as one time passwords and delivery notifications), interactive messaging (such as group messaging services), and incoming number services (such as mobile marketing campaigns, voting or information lines).
              </p>
            </div>
          </div>
          <div className="w-full">
            <img
              src={aboutImage}
              alt="Team joining hands"
              className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white pb-14 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <h2 className="text-[#1f2937] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center mb-12">
            Feature of Bulk Whatsapp SMS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuresList.map((item, index) => (
              <article
                key={index}
                className="bg-[#f3f4f6] p-6 lg:p-8 rounded-lg relative overflow-hidden group hover:shadow-lg transition-all duration-300 min-h-[200px] flex flex-col justify-center"
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

      {/* Pricing Section */}
      <section className="bg-[#f8f9fa] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937]">
              Bulk Sms Our Best Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col"
              >
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-[#1f2937] mb-2">{plan.price}</h3>
                  <p className="text-[#1f2937] font-semibold text-lg">{plan.name}</p>
                  <p className="text-[#6b7280] text-sm mt-1">{plan.billing}</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="text-[#10b981] shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[#4b5563] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-[#da251d] text-white font-bold py-3.5 rounded-lg hover:bg-[#c02019] transition-colors"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
