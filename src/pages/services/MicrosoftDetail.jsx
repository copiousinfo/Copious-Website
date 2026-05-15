import React from 'react';
import { FaCheckCircle, FaWindows, FaDatabase, FaEnvelope, FaShareAlt, FaMobileAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import aboutHero from '../../assets/images/services/general/microsoft.jpg';
import aboutImage from '../../assets/images/about/about-section.jpg';

export default function MicrosoftDetail() {
  const navigate = useNavigate();

  const products = [
    {
      title: "Microsoft Windows",
      icon: <FaWindows className="text-[#00a4ef] text-4xl mb-4" />,
      features: [
        "User Interface: Known for its graphical user interface (GUI).",
        "Features: Multitasking, virtual desktops, Start menu, taskbar.",
        "Compatibility: Runs on varied hardware, supports vast software.",
        "Security: Windows Defender provides built-in antivirus/firewall.",
        "Integration: Integrates with Office 365, OneDrive, Edge.",
        "Customization: Themes, backgrounds, and personal settings."
      ]
    },
    {
      title: "SQL Server",
      icon: <FaDatabase className="text-[#da251d] text-4xl mb-4" />,
      features: [
        "Relational Database: Stores data in relational tables (SQL).",
        "Development Tools: Integrates with SSMS, Azure Data Studio.",
        "Cloud Integration: Easy migration and hybrid scenarios via Azure.",
        "Support & Updates: Regular updates for security and performance.",
        "Ecosystem: Vast community and development resources."
      ]
    },
    {
      title: "Exchange Server",
      icon: <FaEnvelope className="text-[#0078d4] text-4xl mb-4" />,
      features: [
        "Email Management: Efficient send/receive using SMTP, IMAP, POP3.",
        "Calendar & Scheduling: Resource booking, meeting invitations.",
        "Security: Encryption, anti-spam, malware protection, DLP.",
        "High Availability: Clustering and Database Availability Groups.",
        "Mobile Support: Synchronization via Exchange ActiveSync."
      ]
    },
    {
      title: "SharePoint Server",
      icon: <FaShareAlt className="text-[#038387] text-4xl mb-4" />,
      features: [
        "Document Management: Secure libraries with versioning.",
        "Business Intelligence: Integrates with Excel Services and Power BI.",
        "Security: Granular security controls for sites and documents.",
        "Integration: Works seamlessly with Microsoft 365, Teams, OneDrive.",
        "Hybrid Deployment: Available on-premises or in the cloud."
      ]
    },
    {
      title: "Intune Suite",
      icon: <FaMobileAlt className="text-[#5c2d91] text-4xl mb-4" />,
      features: [
        "MDM & MAM: Manage mobile devices and secure applications.",
        "PC Management: Manage Windows 10 and macOS (Windows Autopilot).",
        "Integration: Seamless management across Microsoft 365.",
        "Security: Encryption enforcement, remote wipe, compliance.",
        "Cloud-based: Accessible and scalable web-based console."
      ]
    },
    {
      title: "Dynamics 365",
      icon: <FaChartLine className="text-[#002050] text-4xl mb-4" />,
      features: [
        "Modular Structure: Sales, Customer Service, Finance, Marketing.",
        "Cloud-Based: Scalable, flexible, accessible from anywhere.",
        "Integration: Office 365, Azure, Power Platform, LinkedIn.",
        "Customization: Build apps and automate workflows via Power Platform.",
        "Security: Adheres to industry-standard security and compliance."
      ]
    },
    {
      title: "Microsoft Defender",
      icon: <FaShieldAlt className="text-[#00a4ef] text-4xl mb-4" />,
      features: [
        "Real-Time Protection: Scans and quarantines malware automatically.",
        "Cloud-Based: Quick response to threats via Microsoft cloud.",
        "Firewall: Network protection and suspicious activity monitoring.",
        "Device Security: Secure Boot and TPM management.",
        "Cross-Platform: Windows, macOS, iOS, and Android support."
      ]
    }
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
            Microsoft Services
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 max-w-[800px]">
            We provide comprehensive deployment, management, and support services for a wide array of Microsoft products. From Windows and SQL Server to enterprise collaboration tools like SharePoint and Exchange.
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
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
              Empower Your Business With Microsoft
            </h2>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-5">
              In today's fast-paced digital world, leveraging the right technology stack is crucial. Microsoft offers an unparalleled ecosystem of operating systems, databases, cloud services, and productivity tools that integrate seamlessly.
            </p>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
              Whether you need robust database management through SQL Server, seamless communication via Exchange Server, intelligent collaboration with SharePoint, or comprehensive device management through Intune, we have the expertise to help you implement and scale these solutions effectively.
            </p>
          </div>
          <div>
            <img
              src={aboutImage}
              alt="Microsoft Solutions"
              className="w-full rounded-xl object-cover shadow-lg h-[300px] sm:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="bg-[#f8f9fa] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-4">
              Our Microsoft Expertise
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore the full range of Microsoft products and services we support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="mb-6 border-b border-gray-100 pb-6">
                  {product.icon}
                  <h3 className="text-2xl font-bold text-[#1f2937]">{product.title}</h3>
                </div>

                <div className="flex-grow space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#10b981] shrink-0 mt-1" size={16} />
                      <span className="text-[#4b5563] text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
