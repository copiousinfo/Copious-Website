import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/services/general/mr header.jpeg";

export default function ManagedServiceDetail() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[92px]">
      {/* Hero Section */}
      <section className="relative w-full ">
        <img
          src={heroImg}
          alt="manager service header image"
          className="w-full md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
              What are Managed Services?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Managed Services is the practice of outsourcing the responsibility
              for maintaining and anticipating the need for a range of processes
              and functions to improve operations and cut expenses. A Managed
              Services Provider (MSP) proactively manages, monitors, and
              maintains your IT infrastructure, applications, and end-user
              systems on your behalf, under a Service Level Agreement (SLA).
            </p>
            <div className="mb-12">
              <button
                onClick={() => navigate("/contact")}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              Why do businesses need Managed Services?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              In today's fast-paced digital landscape, maintaining a robust and
              secure IT environment is critical yet resource-intensive. Many
              businesses lack the internal expertise or budget to manage complex
              IT systems effectively. Managed Services bridge this gap by
              providing access to a team of experts who monitor your
              infrastructure 24/7, resolve issues before they impact your
              operations, and ensure your technology aligns with your business
              goals — all at a predictable monthly cost.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              Key benefits of our Managed Services
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              Partnering with Copious Info for Managed Services unlocks a wide
              range of strategic and operational advantages for your business.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  24/7 Proactive Monitoring
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Our team continuously monitors your network, servers, and
                  applications around the clock to detect and resolve issues
                  before they escalate into costly downtime.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Cost Predictability
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Replace unpredictable capital expenditure with a fixed,
                  affordable monthly fee. Managed Services convert your IT costs
                  from a variable expense to a manageable operational budget
                  line.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Access to Expert Talent
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Gain immediate access to a diverse team of certified IT
                  professionals with expertise across networking, cybersecurity,
                  cloud computing, and more — without the cost of full-time
                  hiring.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Enhanced Security & Compliance
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  We implement industry-leading security protocols, patch
                  management, and compliance frameworks to protect your data
                  from cyber threats and ensure you meet regulatory
                  requirements.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Scalability & Flexibility
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Our services scale effortlessly with your business. Whether
                  you are expanding to new locations or onboarding new users,
                  our Managed Services adapt to your evolving needs without
                  disruption.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Strategic IT Planning
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  We act as your virtual CIO, providing technology roadmaps,
                  budget planning, and strategic guidance to align your IT
                  investments with your long-term business objectives.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              What's included in our Managed Services?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              Our comprehensive Managed Services package is designed to cover
              every aspect of your IT environment, giving you total peace of
              mind.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Network & Infrastructure Management
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  End-to-end management of your routers, switches, firewalls,
                  and servers to ensure maximum uptime and optimal performance
                  across your entire network.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Help Desk & User Support
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  A dedicated support team is available to assist your employees
                  with technical issues, ensuring minimal disruption to their
                  daily workflows with fast resolution times.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Patch & Update Management
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  We handle all operating system and application updates on your
                  behalf, ensuring your systems are always running on the
                  latest, most secure software versions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Cloud Management
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Full lifecycle management of your cloud environments,
                  including AWS, Azure, and Google Cloud, optimizing
                  performance, cost, and security for all your cloud-hosted
                  workloads.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => navigate("/contact")}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
