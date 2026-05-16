import React, { useState } from 'react';
import aboutHero from '../assets/images/about/about-hero.jpg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is bulk SMS and how does it work?", answer: "Bulk SMS refers to the sending of large numbers of SMS messages to the mobile phones of a predetermined group of recipients." },
    { question: "How can I send bulk SMS messages using your service?", answer: "You can send messages via our web portal or API integration." },
    { question: "What are the pricing and payment options for your bulk SMS service?", answer: "We offer flexible, pay-as-you-go pricing and monthly subscription plans." },
    { question: "Can I personalize the SMS messages I send in bulk?", answer: "Yes, our platform supports dynamic tags for personalization." },
    { question: "What is cloud storage?", answer: "Cloud storage is a model of computer data storage in which digital data is stored in logical pools across multiple servers." },
    { question: "How secure is cloud storage?", answer: "We use advanced encryption and robust security protocols to ensure your data remains completely secure." },
    { question: "How much does cloud storage cost?", answer: "Costs vary depending on the amount of storage and features required. Please check our pricing page." },
    { question: "Can I use cloud storage for business purposes?", answer: "Absolutely. Our solutions are designed for enterprise-level data storage and management." },
    { question: "How can data be secured in the cloud?", answer: "By using encryption, IAM policies, and regular security audits." },
    { question: "What is the shared responsibility model in cloud security?", answer: "It details which security responsibilities are handled by the provider and which by the customer." },
    { question: "How can compliance be ensured in a cloud environment?", answer: "Through continuous monitoring and adhering to industry-standard certifications (e.g., ISO, SOC)." },
    { question: "What are the best practices for identity and access management (IAM) in the cloud?", answer: "Implement least privilege access, use multi-factor authentication, and regularly review permissions." },
    { question: "Why is Data Security Important?", answer: "It protects sensitive information from unauthorized access, breaches, and data loss." },
    { question: "What is IT consultation and how can it benefit my business?", answer: "It provides expert guidance to optimize your IT strategy and infrastructure for better efficiency." },
    { question: "How do you assess our current IT infrastructure and determine our needs?", answer: "We conduct comprehensive audits and work closely with your team to understand your goals." },
    { question: "What kind of IT services do you offer?", answer: "We offer strategic planning, network management, cloud migration, and cybersecurity services." },
    { question: "How do you ensure the security and privacy of our data?", answer: "We adhere strictly to data privacy laws and implement top-tier cybersecurity measures." },
    { question: "What is the cost of IT consultation services and what factors influence pricing?", answer: "Pricing is based on project scope, complexity, and the level of ongoing support required." },
    { question: "What services do business consultants typically offer?", answer: "Strategy development, operational improvements, and organizational restructuring." },
    { question: "How can a business consultant help my company grow?", answer: "By identifying market opportunities and streamlining your internal processes." },
    { question: "What should I look for when choosing a business consultant?", answer: "Look for industry experience, proven track records, and a transparent methodology." },
    { question: "How do business consultants charge for their services?", answer: "Charges can be hourly, project-based, or on a retainer model." },
    { question: "What is the typical process a business consultant follows during a project?", answer: "Discovery, analysis, strategy formulation, and implementation support." },
    { question: "What is Bulk WhatsApp Messaging?", answer: "It's the process of sending promotional or transactional messages to multiple WhatsApp users simultaneously." },
    { question: "Is Bulk Messaging Allowed on WhatsApp?", answer: "Yes, using the official WhatsApp Business API according to their commerce and business policies." },
    { 
      question: "What is backup software and why is it important?", 
      answer: "Backup software creates copies of your data to prevent loss in case of hardware failure or cyberattacks." 
    },
    { 
      question: "What types of backup methods are available?", 
      answer: "<ul><li><b>Full Backup:</b> Copies all selected data every time.</li><li><b>Incremental Backup:</b> Only backs up data that has changed since the last backup.</li><li><b>Differential Backup:</b> Backs up data changed since the last full backup.</li><li><b>Mirror Backup:</b> Creates an exact copy of the source data.</li><li><b>Snapshot:</b> Captures the state of the system at a specific point in time.</li></ul>" 
    },
    { 
      question: "How often should I back up my data?", 
      answer: "<ul><li>Keep 3 copies of your data.</li><li>Store 2 copies on different media.</li><li>Store 1 copy offsite.</li></ul>" 
    }
  ];

  return (
    <div className="w-full pt-[92px] bg-[#f8f9fa] pb-16">
      {/* Hero Section */}
      <section
        className="relative h-[260px] sm:h-[320px] lg:h-[360px] bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className="bg-[#da251d] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Company
          </span>
          <h1 className="text-white text-3xl sm:text-5xl lg:text-[64px] font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-200 mt-4">Find your answers right here.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[800px] mx-auto px-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-[#1f2937] text-sm sm:text-base pr-4">
                  {faq.question}
                </h3>
                <span className="text-[#da251d] shrink-0">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] py-4 border-t border-gray-100' : 'max-h-0'
                }`}
              >
                <div 
                  className="text-sm text-gray-600 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
