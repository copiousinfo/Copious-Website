import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import aboutHero from '../assets/about.jpg';
import aboutImage from '../assets/about1.jpg'; // Using existing images as fallbacks

export default function BulkWebWhatsApp() {
  const navigate = useNavigate();

  const plans = [
    {
      price: '$10/mth',
      name: 'Basic plan',
      billing: 'Billed annually.',
      features: [
        'Access to all basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20GB individual data each user',
        'Basic chat and email support',
      ],
    },
    {
      price: '$10/mth',
      name: 'Basic plan',
      billing: 'Billed annually.',
      features: [
        'Access to all basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20GB individual data each user',
        'Basic chat and email support',
      ],
    },
    {
      price: '$10/mth',
      name: 'Basic plan',
      billing: 'Billed annually.',
      features: [
        'Access to all basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20GB individual data each user',
        'Basic chat and email support',
      ],
    },
  ];

  return (
    <div className="w-full pt-[92px]">
      {/* Hero Section */}
      <section
        className="relative h-[400px] sm:h-[450px] lg:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[900px]">
          <span className="bg-[#da251d] text-white text-xs font-semibold px-5 py-1.5 rounded-full mb-6">
            Services
          </span>
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Bulk Web WhatsApp
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 max-w-[800px]">
            Bulk Web WhatsApp Services Allow Businesses To Send Large Volumes Of Messages Simultaneously. It's
            Used For Marketing, Notifications, Alerts, And Communication, Enabling Efficient And Widespread
            Customer Outreach And Engagement.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#da251d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#c02019] transition-colors"
          >
            Free Live Demo
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
              What Is Bulk Web WhatsApp?
            </h2>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-5">
              Bulk messaging is a legacy description for application-to-person messaging
              services. It refers specifically to the sending of large number of messages to the
              mobile phones of a predetermined group of recipients.
            </p>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
              Today the application-to-person messaging services have evolved to include bulk
              messaging alongside the sending of single messages (such as one time passwords
              and delivery notifications), interactive messaging (such as group messaging services),
              and incoming number services (such as mobile marketing campaigns, voting or
              information lines).
            </p>
          </div>
          <div>
            <img
              src={aboutImage}
              alt="Team joining hands"
              className="w-full rounded-xl object-cover shadow-lg h-[300px] sm:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#f8f9fa] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937]">
              Bulk Web WhatsApp Our Best Plans
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
                      <FaCheckCircle className="text-[#10b981] shrink-0 mt-1" size={16} />
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
