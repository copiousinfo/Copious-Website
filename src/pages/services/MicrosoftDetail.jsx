import React from "react";
import { useNavigate } from "react-router-dom";
import aboutHero from "../../assets/images/services/general/microsoft header.jpeg";

export default function MicrosoftDetail() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[56px]">
      {/* Hero Section */}
      <section className="relative w-full">
        <img
          src={aboutHero}
          alt="microsoft header image"
          className="  w-full md:h-[500px] object-cover"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* Content Section */}
      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
              Microsoft Windows
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Microsoft Windows is an operating system developed by Microsoft.
              It features a graphical user interface (GUI) that allows users to
              interact with their computer using visual elements like windows,
              icons, and menus. Windows supports multitasking, enabling multiple
              applications to run simultaneously. It is widely used across
              personal computers, business environments, and educational
              institutions. The OS comes with built-in applications and supports
              a vast range of third-party software. Windows updates regularly to
              enhance security, performance, and features.
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
              SharePoint Server
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Microsoft SharePoint Server is a robust platform developed by
              Microsoft for enterprise collaboration, document management, and
              content organization. It enables organizations to create intranet
              sites where teams can securely share documents, collaborate on
              projects in real-time, manage workflows for business processes,
              and access comprehensive business intelligence reports. SharePoint
              offers advanced content management features, including metadata
              and tagging, to organize and categorize content efficiently. It
              also integrates seamlessly with other Microsoft 365 services like
              Teams, OneDrive, and Power BI, providing a unified experience.
              SharePoint provides granular security controls, allowing
              administrators to manage permissions at various levels. Whether
              deployed on-premises, in the cloud, or in a hybrid environment,
              SharePoint enhances organizational productivity by offering a
              secure, customizable, and integrated platform for effective
              teamwork and information management.
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

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6 mt-12">
              Dynamics 365
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Microsoft Dynamics 365 is a cloud-based suite of business
              applications by Microsoft, integrating ERP and CRM
              functionalities. It offers modules like Sales, Customer Service,
              Finance, and Operations, among others, which can be used
              individually or together. Built on Azure, it supports seamless
              integration with Office 365, Power Platform, and LinkedIn,
              enhancing productivity and data management. AI capabilities
              provide insights and predictive analytics, enabling data-driven
              decisions and personalized customer experiences. With a unified
              interface, extensive customization options, and scalability,
              Dynamics 365 caters to businesses of all sizes, ensuring security
              and compliance through industry-standard protocols and
              subscription-based pricing.
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
              MicroSoft Defender
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Microsoft Defender, formerly known as Windows Defender, is a
              built-in antivirus and anti-malware component of Microsoft
              Windows. It provides real-time protection against a variety of
              threats, including viruses, malware, spyware, and other malicious
              software. Here are some key aspects of Microsoft Defender:
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

            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Microsoft Defender is a comprehensive security solution designed
              to protect Windows users from a wide range of threats. Its
              integration with the Windows operating system, combined with
              cloud-based threat intelligence and real-time protection features,
              makes it a robust choice for both individual and enterprise-level
              security.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1f2937] mb-6">
              Features
            </h3>
            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  1. Real-Time Protection:
                </h4>
                <ul className="list-disc list-inside text-[#4b5563] text-[15px] sm:text-base leading-relaxed space-y-1">
                  <li>Continuously scans files and processes for threats.</li>
                  <li>
                    Automatically takes action on detected threats, such as
                    quarantining or removing malware.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  2. Cloud-Based Protection:
                </h4>
                <ul className="list-disc list-inside text-[#4b5563] text-[15px] sm:text-base leading-relaxed space-y-1">
                  <li>
                    Utilizes Microsoft's cloud infrastructure to quickly
                    identify and respond to new threats.
                  </li>
                  <li>
                    Shares threat data anonymously to enhance the overall
                    security database.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  3. Firewall and Network Protection:
                </h4>
                <ul className="list-disc list-inside text-[#4b5563] text-[15px] sm:text-base leading-relaxed space-y-1">
                  <li>
                    Manages network settings and monitors network traffic for
                    suspicious activity.
                  </li>
                  <li>
                    Provides tools for configuring firewall rules and settings.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  4. Device Security:
                </h4>
                <ul className="list-disc list-inside text-[#4b5563] text-[15px] sm:text-base leading-relaxed space-y-1">
                  <li>
                    Ensures that hardware security features like Secure Boot and
                    TPM (Trusted Platform Module) are properly configured and
                    functional.
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1f2937] mb-6">
              Integration and Compatibility
            </h3>
            <ul className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10 space-y-4">
              <li>
                <strong className="text-[#1f2937]">
                  Seamless Integration with Windows:
                </strong>{" "}
                Being a built-in component, Microsoft Defender is tightly
                integrated with the Windows operating system, providing a
                seamless and efficient security solution.
              </li>
              <li>
                <strong className="text-[#1f2937]">
                  Cross-Platform Support:
                </strong>{" "}
                Microsoft Defender is available for other platforms, including
                macOS, iOS, and Android, offering consistent protection across
                multiple devices.
              </li>
              <li>
                <strong className="text-[#1f2937]">
                  Enterprise-Level Solutions:
                </strong>{" "}
                For businesses, Microsoft Defender Advanced Threat Protection
                (ATP) provides enhanced security features, such as threat
                analytics, automated investigation, and response capabilities.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1f2937] mb-6">
              User Experience
            </h3>
            <ul className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10 space-y-4">
              <li>
                <strong className="text-[#1f2937]">
                  User-Friendly Interface:
                </strong>{" "}
                The interface is straightforward and easy to navigate, making it
                accessible for users with varying levels of technical expertise.
              </li>
              <li>
                <strong className="text-[#1f2937]">
                  Minimal Performance Impact:
                </strong>{" "}
                Designed to work efficiently without significantly affecting
                system performance.
              </li>
              <li>
                <strong className="text-[#1f2937]">Automatic Updates:</strong>{" "}
                Regular updates ensure that the antivirus definitions are
                current, protecting against the latest threats.
              </li>
            </ul>

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
