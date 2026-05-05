import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../../ui/SectionHeading';
import { FiMessageSquare, FiCloud, FiShield } from 'react-icons/fi';

const servicesData = [
  {
    id: 1,
    slug: 'bulk-sms',
    icon: <FiMessageSquare size={32} className="text-[#da251d]" />,
    title: 'Bulk SMS And Bulk Web WhatsApp',
    description:
      'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text And WhatsApp Respectively, For Efficient Customer Outreach, Notifications, Alerts, And Communication.',
  },
  {
    id: 2,
    slug: 'cloud-service',
    icon: <FiCloud size={32} className="text-[#da251d]" />,
    title: 'Cloud Service',
    description:
      'Our Cloud Services Provide Scalable, Secure, And High-Performance Infrastructure Solutions. Enabling Businesses To Operate Efficiently, Store Data Safely, And Scale On Demand.',
  },
  {
    id: 3,
    slug: 'security',
    icon: <FiShield size={32} className="text-[#da251d]" />,
    title: 'Security',
    description:
      'We Deliver End-To-End Security Solutions That Protect Your Business From Cyber Threats. Including Firewalls, Encryption, Monitoring, And Compliance Management For Peace Of Mind.',
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f8f9fa] py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading>Copious Services</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 place-items-center sm:place-items-stretch auto-rows-fr">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="w-full max-w-[340px] sm:max-w-none h-full bg-white rounded-[24px] px-6 py-9 text-center shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-[#fff1f0] rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-[#da251d] font-bold text-[22px] mb-4 leading-tight min-h-[56px] flex items-center justify-center">
                {service.title}
              </h3>

              <p className="text-[#4b5563] text-[14px] font-medium leading-[1.7] mb-8 max-w-[280px] min-h-[120px]">
                {service.description}
              </p>

              <button
                onClick={() => navigate(`/services/${service.slug}`)}
                className="bg-[#da251d] text-white px-10 py-3 rounded-lg text-[15px] font-bold hover:bg-[#c02019] transition-all mt-auto shadow-sm w-full sm:w-auto"
              >
                More Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
