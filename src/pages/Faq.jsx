import React, { useState } from "react";
import faqHero from "../assets/images/about/FAQ.jpeg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Copious Infotech provide?",
      answer:
        "Copious Infotech offers custom software development, POS and billing software, temple management systems, event management platforms, amusement and ride management solutions, cybersecurity services, cloud solutions, backup and disaster recovery services, Bulk WhatsApp solutions, and Bulk SMS services.",
    },
    {
      question: "Do you develop customized software for businesses?",
      answer:
        "Yes. We specialize in developing customized software solutions tailored to your business processes, industry requirements, and operational goals. Our team works closely with clients to build scalable and efficient applications.",
    },
    {
      question: "What is Acurestro and who can use it?",
      answer:
        "Acurestro is our advanced POS and billing software designed for restaurants, cafes, retail stores, food courts, and other businesses. It helps manage billing, inventory, customer data, GST compliance, and business reporting from a single platform.",
    },
    {
      question: "What is Vyorise Temple Management Software?",
      answer:
        "Vyorise is a comprehensive temple management solution that helps manage donations, devotee records, pooja bookings, event scheduling, accounting, and communication with devotees through automated notifications.",
    },
    {
      question: "What is Playtreak and how does it help businesses?",
      answer:
        "Playtreak is a ride and amusement management software designed for amusement parks, malls, fairs, gaming zones, and entertainment centers. It helps manage rides, ticketing, visitor records, access control, and operational reporting.",
    },
    {
      question: "What is EventoHub Event Management Software?",
      answer:
        "EventoHub is an event management platform that simplifies event planning, attendee registration, ticketing, check-ins, communication, and reporting. It is suitable for corporate events, exhibitions, conferences, and public gatherings.",
    },
    {
      question: "Can your software integrate with existing business systems?",
      answer:
        "Yes. Our solutions can integrate with accounting software, payment gateways, ERP systems, CRM platforms, biometric devices, cloud services, and other third-party applications to ensure smooth business operations.",
    },
    {
      question: "What cybersecurity services does Copious Infotech offer?",
      answer:
        "We provide comprehensive cybersecurity solutions including antivirus protection, endpoint security, email security, ransomware protection, threat monitoring, and security consultation to help organizations safeguard their digital assets.",
    },
    {
      question: "Why is endpoint security important for businesses?",
      answer:
        "Endpoint security protects laptops, desktops, servers, and mobile devices from malware, ransomware, phishing attacks, and unauthorized access. It helps reduce security risks and strengthens overall business protection.",
    },
    {
      question: "Do you provide email security solutions?",
      answer:
        "Yes. Our email security services help protect businesses from phishing attacks, spam, malware, business email compromise (BEC), and other email-based cyber threats while ensuring secure communication.",
    },
    {
      question: "What backup and disaster recovery services do you provid",
      answer:
        "We offer backup and disaster recovery solutions powered by leading technologies such as Acronis and Microsoft. These solutions help businesses recover critical data quickly in the event of hardware failures, cyberattacks, accidental deletion, or natural disasters.",
    },
    {
      question: "Do you provide cloud and AWS services?",
      answer:
        "Yes. We offer AWS cloud services, cloud migration, cloud infrastructure setup, server management, cloud security, storage solutions, and cloud optimization services to support business growth and scalability.",
    },
    {
      question: "What are Bulk WhatsApp and Bulk SMS services?",
      answer:
        "Our Bulk WhatsApp and Bulk SMS solutions enable businesses to send promotional messages, alerts, OTPs, reminders, notifications, and customer communications efficiently while improving customer engagement.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes. We offer dedicated technical support, software maintenance, regular updates, security patches, performance optimization, and troubleshooting services to ensure uninterrupted operations.es.",
    },
    {
      question: "Why should businesses choose Copious Infotech?",
      answer:
        "Copious Infotech combines industry expertise, innovative technology, reliable support, and scalable solutions to help businesses streamline operations, improve security, enhance customer experiences, and achieve long-term growth through digital transformation..",
    },
  ];

  return (
    <div className="w-full pt-[92px] bg-[#f8f9fa] pb-16">
      {/* Hero Section */}
      <section className="relative max-w-[1440px] mx-auto">
        <img src={faqHero} className="md:h-[350px] w-full object-contain " />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* FAQ Section */}
      <section className="max-w-[800px] mx-auto px-4 my-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="site-card bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
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
                  openIndex === index
                    ? "max-h-[500px] py-4 border-t border-gray-100"
                    : "max-h-0"
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
