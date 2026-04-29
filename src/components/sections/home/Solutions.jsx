import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import billingImg from '../../../assets/billing.jpg';
import ticketingImg from '../../../assets/tickting.jpg';
import parkingImg from '../../../assets/parking.jpg';

const solutionsData = [
  {
    id: 1,
    title: 'Billing',
    image: billingImg,
    description: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text And WhatsApp Respectively, For Efficient Customer Outreach, IT Consulting Advises On Technology Use For Business Goals.'
  },
  {
    id: 2,
    title: 'Ticketing',
    image: ticketingImg,
    description: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text And WhatsApp Respectively, For Efficient Customer Outreach, IT Consulting Advises On Technology Use For Business Goals.'
  },
  {
    id: 3,
    title: 'Parking',
    image: parkingImg,
    description: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text And WhatsApp Respectively, For Efficient Customer Outreach, IT Consulting Advises On Technology Use For Business Goals.'
  }
];

export default function Solutions() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading>Our Solutions</SectionHeading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((solution) => (
            <div key={solution.id} className="bg-white rounded-[10px] overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <div className="h-[200px] w-full">
                <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col items-start flex-grow">
                <h3 className="text-[#da251d] font-bold text-lg mb-3">{solution.title}</h3>
                <p className="text-[#4b5563] text-[13px] font-medium leading-[1.6] mb-5">
                  {solution.description}
                </p>
                <button className="bg-[#da251d] text-white px-5 py-2 rounded-md text-[13px] font-semibold hover:bg-[#c02019] transition-colors mt-auto">
                  More Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
