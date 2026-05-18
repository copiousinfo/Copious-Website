import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutHero from '../../../assets/images/services/consulting/consulting.png';

export default function BusinessConsultingDetail() {
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
            Business Consulting Services
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 max-w-[800px]">
            Business consulting involves offering specialized guidance to business owners and executives with the goal of enhancing performance. It is a crucial service for companies looking to achieve growth, streamline operations, and address a range of challenges.
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
              Business Consulting
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-5">
              Business consulting involves offering specialized guidance to business owners and executives with the goal of enhancing performance. It is a crucial service for companies looking to achieve growth, streamline operations, and address a range of challenges.
            </p>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-8">
              Michael Tschudy, founder and CEO of David Edward Business Solutions, a consulting firm specializing in financial and operational optimization for small businesses, explains that business consulting entails offering specialized recommendations and direction to organizations in order to enhance their operations, reach their objectives, and address intricate business challenges.
            </p>
            <div className="mb-12">
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

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              What are the responsibilities of a business consultant?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-5">
              A business consultant serves as a driving force for transformation - a professional who collaborates with business owners and managers seeking to enhance operations and productivity, expand their enterprises, or sustain a favorable trajectory.
            </p>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-5">
              Consultants may have different areas of expertise, with some focusing on specific fields and others adopting a broader perspective. The services offered by consulting firms can differ, but certain responsibilities are commonly associated with consultants.
            </p>
            <ul className="list-disc list-inside text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-8 space-y-2">
              <li>Determine the barriers that hinder the progress or effectiveness.</li>
              <li>Identify potential areas for improvement and assist in executing necessary modifications.</li>
              <li>Offer training and support materials to employees and executives.</li>
              <li>Aid in the development of business strategies and the establishment of new ventures.</li>
              <li>Evaluate, recruit, and terminate employees as required.</li>
              <li>Introduce fresh initiatives.</li>
              <li>Examine the financial plan of a corporation, propose modifications, and execute the recommended changes.</li>
            </ul>
            <div className="mb-12">
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

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              What benefits can be gained from enlisting the services of business consultants?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              There are numerous advantages that can be obtained from the assistance of a business consultant, ranging from developing practical business plans, to implementing operational processes and protocols, to providing support with financial management, and beyond.
            </p>
            <div className="space-y-6 mb-6">
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">1. Professional Advice:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Consultants possess extensive expertise in the realm of business, accumulated over several years. They are capable of offering valuable guidance that may not be accessible elsewhere.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">2. Problem Solving:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Consultants are also capable of assisting in the resolution of any issues that may arise. These issues could include the development of efficient marketing strategies or the enhancement of internal processes within the organization. By offering a unique viewpoint on current challenges, consultants can propose innovative solutions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">3. Cost Savings:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Hiring a consultant can lead to cost savings as they possess the expertise to complete tasks swiftly and effectively. This enables you to accomplish more within a shorter timeframe and with minimal resources compared to attempting to tackle the tasks independently.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">4. Time Management:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Consultants excel in effectively managing time and assisting with task prioritization to maximize the utilization of your limited resources. This ensures that you remain focused and achieve your set goals within the designated timeframe.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">5. Market Research:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  By leveraging the expertise of a consultant, you can acquire market insights and evaluate patterns that will enhance your decision-making process. This is of utmost importance if you aspire to achieve long-term success.
                </p>
              </div>
            </div>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-12">
              Here are a few advantages of utilizing consultancy services for your business or startup. They provide a range of services that can facilitate the growth and success of your business. It is advisable to contemplate hiring a business consultant in order to maximize the potential of your venture.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              What Tools Are Utilized by Business Consultants?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              To excel as a prosperous business consultant, meticulous planning, thorough research, and efficient organization are imperative. Employing the appropriate consulting tools can significantly enhance your performance. Presented below are five fundamental technological categories that are essential for your success.
            </p>
            <ul className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-8 space-y-4">
              <li>
                <strong className="text-[#1f2937]">CRM :</strong> Customer Relationship Management (CRM) software serves a greater purpose than simply managing client data and interactions, sharing files, and monitoring lead advancement. By ensuring precise information is linked to each client's profile, it plays a crucial role in fostering robust relationships and facilitating precise communication both within and outside the organization.
              </li>
              <li>
                <strong className="text-[#1f2937]">Project management tools :</strong> Business consultants typically handle multiple clients simultaneously, with each client having multiple projects. To effectively manage these tasks, it is essential for them to utilize project management tools specifically designed for client-based businesses.
              </li>
              <li>
                <strong className="text-[#1f2937]">Process automation software :</strong> An automated work management software has the ability to optimize your workflow and make your daily tasks more efficient. By consolidating various applications into one platform, business consultants can effectively oversee sales, projects, billing, and other operations regardless of their location.
              </li>
              <li>
                <strong className="text-[#1f2937]">Time-tracking tools :</strong> It is customary for a business consultant to bill by the hour, making it essential to diligently monitor billable hours for consulting services. Additionally, it is important to keep track of these hours on a per-client and per-project basis.
              </li>
            </ul>

            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-8 font-semibold">
              Are you prepared to begin? click on button to speak with a professional right now.
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
