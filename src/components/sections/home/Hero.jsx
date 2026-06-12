import React from "react";
import Button from "../../ui/Button";
import heroBg from "../../../assets/images/home/hero-bg.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Background Image with Overlay */}
      <img
        src={heroBg}
        className="w-full md:h-[500px] object-cover"
        alt="home-hero-image"
      />
      <div className="absolute inset-0 bg-red-400/20"></div>
    </section>
  );
}
