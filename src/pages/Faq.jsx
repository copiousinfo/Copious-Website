import React, { useState } from "react";
import aboutHero from "../assets/images/about/FAQ.jpeg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is bulk SMS and how does it work?",
      answer:
        "Bulk SMS is a method of sending large quantities of SMS messages to a wide audience simultaneously. It works by using a bulk SMS gateway, which connects to a telecommunications network and allows users to send messages from a web interface or API to multiple recipients at once. This service is commonly used for marketing campaigns, alerts, notifications, and other mass communication needs.",
    },
    {
      question: "How can I send bulk SMS messages using your service?",
      answer:
        "To send bulk SMS messages using our service, you need to sign up for an account on our platform. Once registered, you can log in to our web interface, upload your contact list, compose your message, and send it to your recipients. Alternatively, you can integrate our API into your existing systems to automate the process.",
    },
    {
      question:
        "What are the pricing and payment options for your bulk SMS service?",
      answer:
        "Our bulk SMS pricing is based on the volume of messages you send and the destination of the recipients. We offer flexible pricing plans to suit different business needs, including pay-as-you-go and monthly subscription options. For detailed pricing information, please visit our pricing page or contact our sales team.",
    },
    {
      question: "Can I personalize the SMS messages I send in bulk?",
      answer:
        "Yes, you can personalize your bulk SMS messages using our platform. You can include custom fields such as the recipient's name, appointment details, or other personalized information within your message. This enhances the relevance and effectiveness of your communication.",
    },
    {
      question: "What is cloud storage?",
      answer:
        "Cloud storage is a service model in which data is maintained, managed, backed up remotely, and made available to users over a network (typically the internet). Users upload their data to cloud storage servers, which are managed by a cloud service provider.",
    },
    {
      question: "How secure is cloud storage?",
      answer:
        "Security in cloud storage can vary depending on the provider and the level of service. Most reputable cloud storage providers implement strong security measures such as encryption (both in transit and at rest), access controls, and regular security audits. However, users should also follow best practices, such as using strong passwords and enabling two-factor authentication.",
    },
    {
      question: "How much does cloud storage cost?",
      answer:
        "Costs for cloud storage vary widely depending on the provider, the amount of storage required, and any additional features or services. Some providers offer a limited amount of free storage, with paid plans for additional storage. It's important to compare different providers and plans to find one that fits your needs and budget.",
    },
    {
      question: "Can I use cloud storage for business purposes?",
      answer:
        "Yes, cloud storage is widely used for business purposes. It offers various features beneficial for businesses, such as secure file sharing, collaboration tools, data backup and recovery, and compliance with data protection regulations. Many cloud storage providers offer business-specific plans with additional features like enhanced security, user management, and integration with other business tools and services.",
    },
    {
      question: "How can data be secured in the cloud?",
      answer:
        "Data can be secured in the cloud through encryption (both in transit and at rest), strong access control mechanisms, regular security audits, using secure APIs, and implementing robust identity and access management (IAM) practices. Ensuring compliance with relevant standards and regulations is also critical.",
    },
    {
      question: "What is the shared responsibility model in cloud security?",
      answer:
        "The shared responsibility model delineates the security responsibilities between the cloud service provider (CSP) and the customer. Typically, the CSP is responsible for the security of the cloud (infrastructure, physical hardware, network, etc.), while the customer is responsible for security in the cloud (data, identity management, application security, etc.).",
    },
    {
      question: "How can compliance be ensured in a cloud environment?",
      answer:
        "Compliance can be ensured by understanding the relevant laws, regulations, and standards that apply to your data and operations. Implementing comprehensive security controls, conducting regular audits and assessments, and choosing CSPs that comply with industry standards like ISO 27001, SOC 2, and GDPR are essential steps.",
    },
    {
      question:
        "What are the best practices for identity and access management (IAM) in the cloud?",
      answer:
        "Best practices for IAM in the cloud include using multi-factor authentication (MFA), implementing the principle of least privilege, regularly reviewing and revoking unnecessary access, monitoring user activity, and using centralized IAM solutions to manage identities across all cloud services. Automating IAM processes where possible can also enhance security and efficiency.",
    },
    {
      question: "Why is Data Security Important?",
      answer:
        "Data security is crucial because it helps protect sensitive information from cyber attacks and data breaches, which can lead to financial loss, reputational damage, legal consequences, and the compromise of personal and confidential information.",
    },
    {
      question: "What is IT consultation and how can it benefit my business?",
      answer:
        "IT consultation involves working with experienced professionals to assess your current technology infrastructure, identify areas for improvement, and implement solutions that enhance efficiency, security, and scalability. Benefits include improved operational efficiency, better data security, cost savings, and access to the latest technology trends and best practices.",
    },
    {
      question:
        "How do you assess our current IT infrastructure and determine our needs?",
      answer:
        "The assessment process typically involves a comprehensive review of your existing systems, software, hardware, and network. This includes understanding your business processes, identifying any pain points, and evaluating your current IT support. Based on this assessment, we provide recommendations tailored to your specific business needs and goals.",
    },
    {
      question: "What kind of IT services do you offer?",
      answer:
        "IT consulting firms offer a wide range of services, including network and infrastructure design, cybersecurity, cloud computing solutions, software development, data management, IT support and maintenance, and digital transformation strategies. The specific services can be customized to meet your business requirements.",
    },
    {
      question: "How do you ensure the security and privacy of our data?",
      answer:
        "Ensuring data security and privacy is a top priority. IT consultants implement robust security measures such as firewalls, encryption, multi-factor authentication, regular security audits, and compliance with industry standards and regulations. Additionally, they provide ongoing monitoring and incident response to protect against potential threats.",
    },
    {
      question:
        "What is the cost of IT consultation services and what factors influence pricing?",
      answer:
        "The cost of IT consultation services can vary based on factors such as the scope of the project, the complexity of your IT infrastructure, the level of expertise required, and the duration of the engagement. It's important to discuss your specific needs and budget with the consultant to get a customized quote. Some consultants may offer flexible pricing models, such as hourly rates, project-based fees, or managed services contracts.",
    },
    {
      question: "What services do business consultants typically offer?",
      answer:
        "Business consultants offer a wide range of services including strategic planning, operational improvement, financial analysis, market research, human resources management, IT consulting, and change management. Their goal is to help businesses improve performance and achieve their objectives.",
    },
    {
      question: "How can a business consultant help my company grow?",
      answer:
        "Business consultants bring expertise and an outside perspective to identify opportunities for growth, streamline operations, optimize financial performance, develop marketing strategies, and enhance organizational efficiency. They can also provide training and development for staff to ensure sustainable growth.",
    },
    {
      question: "What should I look for when choosing a business consultant?",
      answer:
        "Key factors to consider include the consultant's experience and expertise in your industry, their track record of success, client testimonials, communication skills, and their ability to understand and align with your business goals. It's also important to ensure they have a clear, structured approach to addressing your specific challenges.",
    },
    {
      question: "How do business consultants charge for their services?",
      answer:
        "Business consultants may charge by the hour, on a project basis, or through a retainer agreement. Fees can vary widely based on the consultant's experience, the complexity of the project, and the scope of work involved. It's important to have a clear understanding of the fee structure and ensure it aligns with your budget.",
    },
    {
      question:
        "What is the typical process a business consultant follows during a project?",
      answer:
        "The typical process includes an initial assessment phase where the consultant gathers information about the business, followed by the analysis phase where they identify key issues and opportunities. Next is the planning phase where they develop strategies and solutions. Implementation follows, where they help execute the plan. Finally, there's the evaluation phase to measure results and make any necessary adjustments.",
    },
    {
      question: "What is Bulk WhatsApp Messaging?",
      answer:
        "Bulk WhatsApp messaging allows businesses and individuals to send large volumes of messages to multiple recipients simultaneously. This is often used for marketing campaigns, notifications, updates, and customer engagement.",
    },
    {
      question: "Is Bulk Messaging Allowed on WhatsApp?",
      answer:
        "WhatsApp has strict policies against spam and bulk messaging. Unauthorized use of bulk messaging can lead to account suspension. However, WhatsApp Business API is designed for businesses to send bulk messages with prior consent from the recipients and adhering to WhatsApp's guidelines.",
    },
    {
      question: "What is backup software and why is it important?",
      answer:
        "Backup software is a type of program designed to create copies of data, files, and systems to protect against data loss. It is important because it ensures data integrity and availability in case of hardware failure, accidental deletion, cyber-attacks, or other disasters.",
    },
    {
      question: "What types of backup methods are available?",
      answer:
        "<ul><li><b>Full Backup:</b> Copies all selected data every time.</li><li><b>Incremental Backup:</b> Only backs up data that has changed since the last backup.</li><li><b>Differential Backup:</b> Backs up data changed since the last full backup.</li><li><b>Mirror Backup:</b> Creates an exact copy of the source data.</li><li><b>Snapshot:</b> Captures the state of the system at a specific point in time.</li></ul>",
    },
    {
      question: "How often should I back up my data?",
      answer:
        "The frequency of backups depends on the importance of the data and how often it changes. Critical data may require daily or even continuous backups, while less critical data might be backed up weekly or monthly. A common practice is to follow the 3-2-1 rule: <ul><li>Keep 3 copies of your data.</li><li>Store 2 copies on different media.</li><li>Store 1 copy offsite.</li></ul>",
    },
  ];

  return (
    <div className="w-full pt-[92px] bg-[#f8f9fa] pb-16">
      {/* Hero Section */}
      <section
        className="relative h-[260px] sm:h-[320px] lg:h-[400px] bg-contain bg-center bg-no-repeat mb-12"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-red-400/30" />
      </section>

      {/* FAQ Section */}
      <section className="max-w-[800px] mx-auto px-4">
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
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
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
