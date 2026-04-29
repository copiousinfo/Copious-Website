import React from 'react';
import Button from '../../ui/Button';
import heroBg from '../../../assets/image.jpg';

export default function Hero() {
  return (
    <section className="relative w-full h-[565px] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
 
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 text-center flex flex-col items-center">
        <div className="bg-[#da251d] text-white text-[14px] font-medium px-6 py-1.5 rounded-full mb-6 inline-block shadow-sm">
          Trusted By 1000+ People In India
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Unlock Seamless Experiences <br />
          With Our App For Your Booking, <br />
          Ticketing, And Parking Needs
        </h1>
        
        <p className="text-gray-200 text-sm md:text-[16px] max-w-3xl mx-auto mb-10 font-medium">
          Simplify Your Billing, Boost Efficiency, And Serve Customers Faster — All From Your Mobile.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
          <button className="bg-[#da251d] text-white px-10 py-3 rounded-lg font-bold text-[16px] hover:bg-[#c02019] transition-all">
            Download App
          </button>
          <button className="bg-transparent border-2 border-white text-white px-10 py-3 rounded-lg font-bold text-[16px] hover:bg-white/10 transition-all">
            Free Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}
