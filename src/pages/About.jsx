import React from 'react';

export default function About() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center bg-white text-dark">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#da251d]">About Copious</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We believe that building beautiful, highly functional web experiences shouldn't require 
          complex setups or heavy dependencies. Our platform is designed to give you exactly what 
          you need: clean architecture, sensible defaults, and limitless customizability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#fff0f0] flex items-center justify-center mb-4">
              <span className="text-[#da251d] font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark">Simplicity First</h3>
            <p className="text-gray-500 text-sm">We cut out the bloat so you can focus on what matters most: your product.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#fff0f0] flex items-center justify-center mb-4">
              <span className="text-[#da251d] font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark">Production Ready</h3>
            <p className="text-gray-500 text-sm">Everything you need to launch confidently, built right in.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
