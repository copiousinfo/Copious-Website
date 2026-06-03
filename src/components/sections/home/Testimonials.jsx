import React from 'react';
import { FaStar } from 'react-icons/fa';
import SectionHeading from '../../ui/SectionHeading';
import bgImg from '../../../assets/images/home/hero-bg.jpg';

const testimonialsData = [
  {
    id: 1,
    name: 'Uttam Kumar',
    role: 'Director',
    quote: '"Overall, the two reports were very clear and helpful so thank you for the suggestion to do the focus group. We are currently working with our developer to implement some of these suggestions"'
  },
  {
    id: 2,
    name: 'M. Kapoor',
    role: 'Haryana Tourism',
    quote: '"We are very happy and satisfied with Copious service. Our account manager is efficient and very knowledgeable. It was able to create a vast fan base within very short period of time. We would highly recommend Copious to anyone."'
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 flex flex-col items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-dark/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <SectionHeading dark={false}>Testimonials</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="site-card bg-white rounded-2xl p-6 flex flex-col gap-6 shadow-lg border border-transparent">
              <div className="flex flex-col h-full text-left">
                <div className="flex text-[#1E50FF] mb-4 justify-center sm:justify-start">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-dark font-medium text-[15px] leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <span className="font-bold text-dark">{testimonial.name}</span>
                  <span className="text-gray-500 text-sm ml-2">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
