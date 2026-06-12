import React from "react";
import aboutHero from "../../assets/images/solutions/event/event header.jpeg";
import eventmgmImg from "../../assets/images/solutions/event/eventohub_1.jpeg";
import eventmgmOriginalImg from "../../assets/images/solutions/event/eventohub_2.jpeg";
import { MdOutlineEvent, MdOutlineSavings } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { LuDatabase } from "react-icons/lu";
import {
  HiOutlineHandThumbUp,
  HiOutlineCheckBadge,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { TbTrendingUp } from "react-icons/tb";

const tabData = ["Event Management Software"];

const featureCards = [
  {
    title: "Event Creation",
    subtitle:
      "Effortlessly create, edit, and manage events with customizable details.",
    icon: MdOutlineEvent,
  },
  {
    title: "User Management",
    subtitle:
      "Easily create and manage user profiles, assign roles, and control access.",
    icon: FaUsers,
  },
  {
    title: "QR Code Scanning",
    subtitle:
      "Efficiently track attendee attendance with quick and accurate QR code scanning.",
    icon: BsQrCodeScan,
  },
  {
    title: "Data Storage",
    subtitle:
      "Securely store all event data in a centralized database and generate insightful reports.",
    icon: LuDatabase,
  },
  {
    title: "User-Friendly",
    subtitle:
      "Intuitive and easy-to-use interface for both administrators and event attendees.",
    icon: HiOutlineHandThumbUp,
  },
  {
    title: "Increased Efficiency",
    subtitle: "Streamline event planning, execution, and post-event analysis.",
    icon: TbTrendingUp,
  },
  {
    title: "Improved Accuracy",
    subtitle:
      "Eliminate manual data entry errors and ensure accurate attendance tracking.",
    icon: HiOutlineCheckBadge,
  },
  {
    title: "Enhanced Security",
    subtitle:
      "Securely store all event data and protect sensitive information.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Better Insights",
    subtitle:
      "Gain valuable insights into event performance with comprehensive reports.",
    icon: HiOutlineChartBar,
  },
  {
    title: "Cost-Effectiveness",
    subtitle:
      "Reduce administrative overhead and optimize resource allocation.",
    icon: MdOutlineSavings,
  },
];

export default function EventManagementDetail() {
  return (
    <div className="w-full pt-[92px] bg-[#efefef]">
      <section className="relative w-full mx-auto">
        <img
          src={aboutHero}
          alt="eventohub header image"
          className="w-full md:h-[500px] object-fit"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      <section className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-10 py-8">
        <div className="bg-white p-3 sm:p-7 lg:p-8 rounded-md">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            <div>
              <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
                About Us
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {tabData.map((tab, idx) => (
                  <span
                    key={tab}
                    className={`text-[11px] px-4 py-1.5 rounded-full ${
                      idx === 0
                        ? "bg-[#da251d] text-white"
                        : "bg-[#f1f5f9] text-[#374151]"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                This innovative event management application streamlines event
                planning and execution. Easily create and manage events, assign
                users, and track attendance with seamless QR code scanning.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                The application securely stores all event data in a centralized
                database, providing administrators with real-time insights and
                comprehensive reports. Our user-friendly interface simplifies
                event management, allowing for efficient planning and seamless
                on-site execution.
              </p>
            </div>
            <img
              src={eventmgmImg}
              alt="Solution management"
              className="w-full h-[300px] rounded-md object-cover shadow-sm"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <img
              src={eventmgmOriginalImg}
              alt="Online booking"
              className="w-full h-[320px] rounded-md object-cover shadow-sm"
            />
            <div>
              <h3 className="text-3xl font-semibold text-[#1f2937] mb-4">
                The Purpose Of Event Systems
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Our innovative event management application streamlines event
                planning and execution, providing administrators with real-time
                insights to ensure events run perfectly from start to finish.
              </p>
              <ul className="list-disc pl-6 text-[#4b5563] text-[14px] leading-7 space-y-1 marker:text-[#da251d] mb-4">
                <li>Easily create and manage events and assign users.</li>
                <li>Track attendance with seamless QR code scanning.</li>
                <li>
                  Securely store all event data in a centralized database.
                </li>
                <li>Simplify event management for efficient planning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[56px] font-semibold text-[#1f2937] mb-8">
            Event Management Feature
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
