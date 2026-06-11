import React from "react";
import aboutHero from "../assets/images/about/about hero.jpeg";
import aboutSectionImage from "../assets/images/about/about us.jpeg";

export default function About() {
  return (
    <div className="w-full pt-[92px] bg-[#202329]">
      <section className="relative max-w-[1440px] mx-auto">
        <img src={aboutHero} className=" md:h-[360px] object-cover w-full" />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      <section className="w-full bg-[#efefef]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
          <h3 className="text-[#1f1f1f] text-4xl font-semibold text-center mb-10">
            About Us
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-[#1f1f1f] text-2xl font-bold mb-6">
              Empowering Businesses Through Innovative Technology Solutions
            </h2>

            {/* Introduction Paragraph */}
            <p className="text-[#333333] text-lg mb-6 leading-relaxed">
              At Copious Infotech, we are committed to helping businesses transform and grow through reliable, innovative, and customized technology solutions. With years of experience in software development, IT infrastructure, cloud services, and cybersecurity, we provide end-to-end digital solutions that enable organizations to operate efficiently, securely, and profitably.
            </p>

            <p className="text-[#333333] text-lg mb-10 leading-relaxed">
              We specialize in developing industry-focused software products as well as custom software solutions tailored to meet the unique requirements of our clients. Our mission is to deliver technology that simplifies operations, improves productivity, and supports business growth.
            </p>

            {/* Our Software Solutions */}
            <h3 className="text-[#1f1f1f] text-2xl font-bold mt-10 mb-4">
              Our Software Solutions
            </h3>

            <p className="text-[#333333] text-lg mb-4 leading-relaxed">
              We have developed a range of powerful business applications designed for different industries:
            </p>

            <ul className="text-[#333333] text-lg mb-10 ml-6 space-y-2 list-disc">
              <li>
                <strong>Acurestro</strong> – A comprehensive POS and billing software solution for retail stores, restaurants, and businesses.
              </li>
              <li>
                <strong>Vyorise</strong> – An advanced Temple Management System for managing donations, events, memberships, accounting, and daily operations.
              </li>
              <li>
                <strong>Playtreak</strong> – A complete management platform for amusement parks, malls, fairs, exhibitions, and ride operations.
              </li>
              <li>
                <strong>Voter Management Application</strong> – A smart solution for managing voters, Booth Management, communication, surveys and campaign activities.
              </li>
              <li>
                <strong>EventoHub</strong> – An all-in-one event management platform for planning, organizing, and managing events efficiently.
              </li>
            </ul>

            {/* Custom Software Development */}
            <h3 className="text-[#1f1f1f] text-2xl font-bold mt-10 mb-4">
              Custom Software Development
            </h3>

            <p className="text-[#333333] text-lg mb-10 leading-relaxed">
              Every business has unique requirements. Our team develops customized software applications that align with specific business processes, helping organizations automate operations, improve efficiency, and gain better control over their workflows.
            </p>

            {/* Cybersecurity & IT Solutions */}
            <h3 className="text-[#1f1f1f] text-2xl font-bold mt-10 mb-4">
              Cybersecurity & IT Solutions
            </h3>

            <p className="text-[#333333] text-lg mb-4 leading-relaxed">
              In today's digital world, security is more important than ever. We offer comprehensive cybersecurity solutions, including:
            </p>

            <ul className="text-[#333333] text-lg mb-10 ml-6 space-y-2 list-disc">
              <li>Antivirus Protection</li>
              <li>Endpoint Security</li>
              <li>Email Security Solutions</li>
              <li>Data Protection & Backup Services</li>
              <li>Disaster Recovery (DR) Solutions</li>
              <li>Cloud Security Services</li>
            </ul>

            {/* Cloud & Business Communication Services */}
            <h3 className="text-[#1f1f1f] text-2xl font-bold mt-10 mb-4">
              Cloud & Business Communication Services
            </h3>

            <p className="text-[#333333] text-lg mb-4 leading-relaxed">
              We help businesses leverage modern cloud and communication technologies through:
            </p>

            <ul className="text-[#333333] text-lg mb-10 ml-6 space-y-2 list-disc">
              <li>AWS Cloud Services</li>
              <li>Microsoft Cloud Solutions</li>
              <li>Acronis Backup Solutions</li>
              <li>Business WhatsApp Solutions</li>
              <li>Bulk SMS Services</li>
              <li>Enterprise Messaging Solutions</li>
            </ul>

            {/* Why Choose Copious Infotech */}
            <h3 className="text-[#1f1f1f] text-2xl font-bold mt-10 mb-4">
              Why Choose Copious Infotech?
            </h3>

            <ul className="text-[#333333] text-lg mb-10 ml-6 space-y-2 list-disc">
              <li>Industry-specific software expertise</li>
              <li>Custom software development capabilities</li>
              <li>Strong focus on cybersecurity and data protection</li>
              <li>Reliable cloud and backup solutions</li>
              <li>Dedicated customer support</li>
              <li>Scalable solutions for businesses of all sizes</li>
            </ul>

            {/* Closing Paragraph */}
            <p className="text-[#333333] text-lg mb-4 leading-relaxed">
              At Copious Infotech, we believe technology should empower businesses, not complicate them. Our team works closely with clients to understand their challenges and deliver solutions that create real business value. Whether you need business software, cloud infrastructure, cybersecurity services, or a completely customized application, we are your trusted technology partner.
            </p>

            <p className="text-[#333333] text-lg font-semibold leading-relaxed">
              Copious Infotech – Delivering Innovation, Security, and Growth Through Technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
