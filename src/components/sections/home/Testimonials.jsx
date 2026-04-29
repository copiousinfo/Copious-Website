import React from 'react';
import { FaStar } from 'react-icons/fa';
import SectionHeading from '../../ui/SectionHeading';
import jennyImg from '../../../assets/jenny.png';
import bgImg from '../../../assets/image.jpg';

const testimonialsData = [
  {
    id: 1,
    name: 'Jonny Wilson',
    role: 'Director',
    image: jennyImg,
    quote: '"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."'
  },
  {
    id: 2,
    name: 'Jonny Wilson',
    role: 'Director',
    image: jennyImg,
    quote: '"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."'
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
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-lg">
              <div className="w-40 h-40 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col text-center sm:text-left h-full">
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
