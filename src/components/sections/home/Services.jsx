import React from 'react';
import SectionHeading from '../../ui/SectionHeading';

const servicesData = [
  {
    id: 1,
    title: 'Bulk SMS And Bulk Web WhatsApp',
    description: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text And WhatsApp Respectively, For Efficient Customer Outreach, IT Consulting Advises On Technology Use For Business Goals.'
  },
  {
    id: 2,
    title: 'Cloud Service',
    description: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text And WhatsApp Respectively, For Efficient Customer Outreach, IT Consulting Advises On Technology Use For Business Goals.'
  },
  {
    id: 3,
    title: 'Security',
    description: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text And WhatsApp Respectively, For Efficient Customer Outreach, IT Consulting Advises On Technology Use For Business Goals.'
  }
];

export default function Services() {
  return (
    <section className="w-full bg-[#f8f9fa] py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading>Copious Services</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-[20px] p-12 text-center shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-24 h-24 bg-[#fff1f0] rounded-full flex items-center justify-center mb-8">
                {/* Clean pink circle from design */}
                <div className="w-12 h-12 bg-[#ffe4e4] rounded-full"></div>
              </div>
              <h3 className="text-[#da251d] font-bold text-[22px] mb-5 leading-tight">{service.title}</h3>
              <p className="text-[#4b5563] text-[14px] font-medium leading-[1.7] mb-10 max-w-[280px]">
                {service.description}
              </p>
              <button className="bg-[#da251d] text-white px-10 py-3 rounded-lg text-[15px] font-bold hover:bg-[#c02019] transition-all mt-auto shadow-sm">
                More Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
