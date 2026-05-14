import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import aboutHero from '../assets/consulting.png';
import aboutImage from '../assets/about1.jpg';

export default function BusinessConsultingDetail() {
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
            Business Consulting Services
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 max-w-[800px]">
            Our Business Consulting Services are designed to help organizations improve their
            performance and efficiency. We analyze businesses and create solutions while also
            helping companies meet their goals.
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
              What Is Business Consulting?
            </h2>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-5">
              Business consulting is the practice of helping organizations improve their performance,
              operating primarily through the analysis of existing organizational problems and the
              development of plans for improvement. Organizations may draw upon the services of
              management consultants for a number of reasons.
            </p>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
              These include gaining external (and presumably objective) advice and access to the
              consultants' specialized expertise. Our experienced professionals bring proven
              methodologies and frameworks to guide the identification of problems, and to serve as
              the basis for recommendations for more effective or efficient ways of performing work tasks.
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
              Business Consulting Our Best Plans
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
