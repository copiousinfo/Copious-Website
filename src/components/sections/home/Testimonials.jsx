import React from "react";
import { FaStar } from "react-icons/fa";
import SectionHeading from "../../ui/SectionHeading";
import bgImg from "../../../assets/images/home/testimonial.jpeg";

const testimonialsData = [
  {
    id: 1,
    name: "Rajesh Kumar, CEO",
    client: "Acural Solutions Pvt. Ltd.",
    quote:
      '"Copious did not just build software for us; they built a solution that transformed how Acural operates. From the initial architecture design to final deployment, their team demonstrated deep domain expertise and total commitment to our success. The software is intuitive, powerful, and tailored perfectly to our needs. If you are looking for an agile technology partner who delivers exactly what they promise, I highly recommend Copious."',
  },
  {
    id: 2,
    name: "M. Kapoor, Retired IT Head",
    client: "Haryana Tourism",
    quote:
      '"We are highly satisfied with Copious and their exceptional team! They provided us with an outstanding ticketing software for Pinjore Garden that helped us build a massive fan base in no time. Our account manager is efficient, incredibly knowledgeable, and always supportive. We highly recommend Copious to everyone looking for cutting-edge software development."',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-16 flex flex-col items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-red-400/20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <SectionHeading dark={false}>Testimonials</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="site-card bg-white rounded-2xl p-6 flex flex-col gap-6 shadow-lg border border-transparent"
            >
              <div className="flex flex-col h-full text-left">
                <div className="flex text-[#1E50FF] mb-4 justify-center sm:justify-start">
                  {testimonial.client}
                </div>
                <p className="text-dark font-medium text-[15px] leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <span className="font-bold text-dark">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
