import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import aboutHero from '../assets/consulting.png';
import aboutImage from '../assets/about1.jpg';

export default function ITConsultingDetail() {
  const navigate = useNavigate();

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
            IT Consulting Services
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 max-w-[800px]">
            IT consulting services offer advisory support to clients in evaluating various technology strategies and aligning them with their business or process strategies. These services encompass strategic, architectural, operational, and implementation planning to assist customers in achieving their IT goals effectively.
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
        <div className="max-w-[1000px] mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
              IT Consulting
            </h2>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-5">
              IT consulting services offer advisory support to clients in evaluating various technology strategies and aligning them with their business or process strategies. These services encompass strategic, architectural, operational, and implementation planning to assist customers in achieving their IT goals effectively. Strategic planning involves assessing IT needs and developing system implementation plans, while architecture planning combines strategic plans with knowledge of emerging technologies to design the system and supporting infrastructure. Operational assessment and benchmarking evaluate the efficiency and capacity of a client's IT environment, and implementation planning guides customers through the deployment and testing of new solutions.
            </p>
            <div className="mt-8">
              <button
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mt-8 mb-5">
              At Copious Infotech, we recognize the importance of providing tailored IT solutions that go beyond standard consultations. In order to thrive in today's digital era and navigate the intricate technology environment, a customized IT strategy that aligns with your business's expansion is essential.
            </p>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-5">
              Copious Infotech stands out as the leading IT consulting firm in Grande Prairie. This is due to our team of dedicated IT consultants, who are based in Grande Prairie and committed to aligning your IT strategy with your business goals. Our comprehensive Copious Infotech strategy plan encompasses all aspects, including goal-setting, resource planning, and policy development. By ensuring that your IT solutions can expand alongside your business, we aim to save you valuable time and energy that would otherwise be spent on reactive measures.
            </p>
            
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-5 font-semibold">
              To obtain further details regarding our IT consulting and planning services, or to directly communicate with a consultant, kindly
            </p>
            <div className="mb-8">
              <button
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6 mt-12">
              Expert IT Planning and Consultancy Solutions
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-5">
              We excel at simplifying IT consulting in Grande Prairie. Although technology is our expertise, we recognize that an effective IT strategy involves more than just implementing IT solutions. It should seamlessly align with your business objectives and daily operations, without adding unnecessary complexities. That's why our initial step is to thoroughly understand our clients' organizations, their aspirations, and their requirements.
            </p>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-5">
              Through our comprehensive exploration procedure, we provide uncomplicated and user-friendly resolutions that precisely outline all the essential elements for executing your IT strategy. This encompasses service level agreements (SLAs), roles, budgets, and the life cycles of both hardware and software. Additionally, we consistently anticipate future requirements by devising a long-term IT strategy that encompasses disaster recovery and business continuity planning.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6 mt-12">
              The Distinctive Copious Infotech Advantage
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-5">
              You have a strong passion for your business, excelling in what you do. At Copious Infotech, we share that same passion for technology. Our IT consultants stay current with the latest trends and best practices, allowing you to focus on your strengths. We are dedicated to identifying the optimal solutions for your company's specific IT requirements, always keeping your business objectives at the forefront. Meanwhile, you can continue concentrating on your core competencies, whatever they may be.
            </p>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-8">
              Your organization will profit from IT infrastructure and planning that not only fits your needs now but also predicts future ones when you choose the Copious Infotech difference. We are able to implement our IT solutions where they will be most effective because of our comprehensive consulting process, which goes beyond IT to offer insight into your company's workflows and business requirements.
            </p>
            
            <div>
              <button
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
