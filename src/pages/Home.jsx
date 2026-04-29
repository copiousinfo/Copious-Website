import React from 'react';
import Hero from '../components/sections/home/Hero';
import Services from '../components/sections/home/Services';
import Solutions from '../components/sections/home/Solutions';
import Testimonials from '../components/sections/home/Testimonials';

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-[92px]">
      <Hero />
      <Services />
      <Solutions />
      <Testimonials />
    </div>
  );
}
