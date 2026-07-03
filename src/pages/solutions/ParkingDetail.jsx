import React from "react";
import parkingImg from "../../assets/images/solutions/parking/parkingheader.jpeg";
import parking4Img from "../../assets/images/solutions/parking/ParkingHub_1.jpeg";
import { FaRupeeSign } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { HiOutlineMagnifyingGlass, HiOutlineCreditCard } from "react-icons/hi2";

const tabData = ["Parking Management Software"];

const featureCards = [
  {
    title: "Easy & Fast Billing",
    subtitle: "Fastest Way to Create Invoices / Bills",
    icon: FaRupeeSign,
  },
  {
    title: "BarCode Scanner",
    subtitle:
      "BarCode Scanner Auto-Detection, Image Upload and High-Accuracy Readings",
    icon: BsQrCodeScan,
  },
  {
    title: "Searching",
    subtitle: "Records find easily and fast",
    icon: HiOutlineMagnifyingGlass,
  },
  {
    title: "Payment of Method",
    subtitle: "Self Managed MOP like Cash, UPI etc",
    icon: HiOutlineCreditCard,
  },
];

export default function ParkingDetail() {
  return (
    <div className="w-full pt-[56px] bg-[#efefef]">
      {/* ── Hero Section ── */}
      <section className="relative w-full">
        <img
          src={parkingImg}
          alt="parking header image"
          className="w-full md:h-[540px] object-fill"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-10 lg:py-12">
        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-md">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            <div className="">
              <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
                About Software
              </h2>
              <span className="flex flex-wrap gap-2 mb-3 sm:mb-4 bg-[#da251d] w-60 px-4 py-1.5 rounded-full text-white text-sm">
                {tabData}
              </span>

              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                The Parking Management Software enables users to find, register,
                and make payments for parking through their Smartphone in areas
                that were previously designated as No Parking zones. Within a
                company, Parking Management serves as a beneficial tool for
                managing employee parking lots and spaces. This Parking App
                solution assists both individuals and businesses in handling
                vehicle spot reservations and tickets efficiently.
              </p>

              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Our advanced parking systems also come equipped with real-time
                occupancy tracking, ensuring that drivers can easily locate
                available spots without unnecessary circling. This significantly
                reduces traffic congestion and carbon emissions within the
                facility.
              </p>

              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                A key advantage of our comprehensive parking management solution
                is its ability to seamlessly integrate with third-party payment
                gateways and mobile wallets.
              </p>
            </div>
            <div className="lg:col-span-7 rounded-md shadow-sm overflow-hidden bg-[#f8f9fa] self-stretch">
              <img
                src={parking4Img}
                alt="Solution management"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f2937] flex flex-col lg:gap-4 mb-9">
            Parking Management Feature
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
