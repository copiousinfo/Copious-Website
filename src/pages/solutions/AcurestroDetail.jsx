import React from "react";
import acurestroImg from "../../assets/images/solutions/acurestro/acurestro hero.jpeg";
import acurestro2Img from "../../assets/images/solutions/acurestro/acurestro2.jpg";
import acurestro1Img from "../../assets/images/solutions/acurestro/acurestro1.jpeg";
import { FaUsers } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

import { TbTruckDelivery, TbArrowsTransferUpDown } from "react-icons/tb";
import { HiOutlineCreditCard, HiOutlineMagnifyingGlass } from "react-icons/hi2";

const tabData = ["Acurestro Software"];

const featureCards = [
  {
    title: "Customer Management",
    subtitle: "Manage customers easily and effectively.",
    icon: FaUsers,
  },
  {
    title: "Customer Support",
    subtitle: "Sync customer data with CRM systems",
    icon: MdSupportAgent,
  },
  {
    title: "Payment Integration",
    subtitle: "Self Managed MOP like Cash, UPI etc",
    icon: HiOutlineCreditCard,
  },
  {
    title: "Import & Export",
    subtitle: "You can easly data import and export",
    icon: TbArrowsTransferUpDown,
  },
  {
    title: "Product Transfer",
    subtitle:
      "Fast and secure product transfer with reliable tracking and management",
    icon: TbTruckDelivery,
  },
  {
    title: "Searching",
    subtitle: "Records find easly and fast",
    icon: HiOutlineMagnifyingGlass,
  },
];

export default function AcurestroDetail() {
  return (
    <div className="w-full pt-[56px] bg-[#efefef]">
      {/* ── Hero Section ── */}
      <section className="relative w-full">
        <img
          src={acurestroImg}
          alt="acurestro hero section image"
          className="w-full md:h-[540px] object-cover"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      <section className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        <div className="bg-white p-2 sm:p-7 lg:p-8 rounded-md">
          <div className="flex flex-col-reverse md:flex-row gap-7 lg:gap-10 mb-12 sm:mb-16 ">
            <div>
              <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
                About Software
              </h2>
              <span className="flex flex-wrap gap-2 mb-3 sm:mb-4 bg-[#da251d] w-40 px-4 py-1.5 rounded-full text-white text-sm">
                {tabData}
              </span>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Acurestro software streamlines the operations through
                automation, including tasks like creation, tracking, and
                management.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                This eradicates the necessity for manual input of data,
                minimizing the chances of mistakes and conserving precious time
                for businesses and their customers.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7">
                Our comprehensive Software efficiently handles all aspects of
                your business.
              </p>
            </div>
            <img
              src={acurestro2Img}
              alt="Solution management"
              className="w-full rounded-md object-cover bg-[#f8f9fa] h-[240px] sm:h-[300px] lg:h-[320px]"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-7 lg:gap-10 mb-12 sm:mb-16">
            <img
              src={acurestro1Img}
              alt="Online booking"
              className="w-full rounded-md object-contain h-[240px] sm:h-[300px] lg:h-[320px]"
            />
            <div>
              <h3 className="text-3xl font-semibold text-[#1f2937] mb-4">
                The Purpose Of Acurestro Systems
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                By automating tasks such as tracking and reporting, Acurestro
                software makes the process more efficient and less prone to
                errors, ultimately saving time for both businesses and their
                clients.
              </p>
              <h4 className="text-xl font-semibold text-[#1f2937] mb-3 mt-6">
                Intuitive Point of Sale & Self-Checkout
              </h4>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Acurestro delivers a modern, touch-friendly interface designed
                to accelerate transactions and improve the customer experience:
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f2937] flex flex-col lg:gap-4 mb-9">
            <span>Acurestro Management Feature</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className="site-card bg-[#f8f8f8] rounded-[10px] border border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer"
                >
                  <div
                    className="w-10 h-10 rounded-full bg-[#f2e7e7] shrink-0 flex justify-center items-center"
                    aria-hidden
                  >
                    <Icon className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-[#da251d] text-sm font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[#4b5563] text-[11px] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
