import React from "react";
import aboutHero from "../../assets/images/solutions/voter-management/voter-management-header.jpeg";
import voterManagementImg1 from "../../assets/images/solutions/voter-management/voter-management1.jpeg";
import voterManagementImg2 from "../../assets/images/solutions/voter-management/voter-management2.jpeg";

import eventmgmOriginalImg from "../../assets/images/solutions/event/eventohub_2.jpeg";
import { MdOutlineEvent, MdOutlineSavings } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { FaIdCard, FaUsers, FaWhatsapp, FaShareAlt } from "react-icons/fa";
import { BsFilterSquare, BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineCursorClick, HiOutlineChartBar } from "react-icons/hi";
import { MdSms } from "react-icons/md";

const tabData = ["Voter Management Software"];

const featureCards = [
  {
    title: "Voter Search and Identification",
    subtitle: "Quickly search and locate voters using our application.",
    icon: MdOutlineManageSearch,
  },
  {
    title: "Individual Voter Slip Generation",
    subtitle:
      "Generate printable voter slips for individual voters with desirable information.",
    icon: FaIdCard,
  },
  {
    title: "Family Voter Slip Generation",
    subtitle: "Generate household-based voter slips.",
    icon: FaUsers,
  },
  {
    title: "Advanced Voter Filtering",
    subtitle:
      "Filter and segment voters for targeted campaigning with multiple filters.",
    icon: BsFilterSquare,
  },
  {
    title: "User-Friendly",
    subtitle: "Intuitive and easy-to-use interface for better usage.",
    icon: HiOutlineCursorClick,
  },
  {
    title: "Area Based Targeting",
    subtitle: "Organize campaigns geographically (area,ward,region etc.)",
    icon: BsGraphUpArrow,
  },
  {
    title: "WhatsApp Integration",
    subtitle:
      "Communicate with voters directly through WhatsApp securely and safely.",
    icon: FaWhatsapp,
  },
  {
    title: "SMS Integration",
    subtitle:
      "Reach voters via SMS, campaign and send voter-related information.",
    icon: MdSms,
  },
  {
    title: "One-Tap Sharing",
    subtitle: "Simplifies communication for campaign workers.",
    icon: FaShareAlt,
  },
  {
    title: "Communication Tracking",
    subtitle: "Maintain records of campaign outreach.",
    icon: HiOutlineChartBar,
  },
];

export default function VoterManagement() {
  return (
    <div className="w-full pt-[56px] bg-[#efefef]">
      <section className="relative w-full mx-auto">
        <img
          src={aboutHero}
          alt="eventohub header image"
          className="w-full md:h-[540px] object-cover"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      <section className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-10 py-8">
        <div className="bg-white p-3 sm:p-7 lg:p-8 rounded-md space-y-5 md:space-y-12">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            <div>
              <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
                About Software
              </h2>
              <span className="flex flex-wrap gap-2 mb-3 sm:mb-4 bg-[#da251d] w-56 px-4 py-1.5 rounded-full text-white text-sm">
                {tabData}
              </span>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                The Voter Management System is a complete election campaign
                solution that helps political parties, candidates, and campaign
                teams manage voter data efficiently from a single platform. It
                simplifies campaign operations, improves coordination, and saves
                valuable time.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Quickly search voters using Voter ID or Name, generate
                Individual and Family Voter Slips with candidate images, and
                organize records using smart filters such as Age, Gender,
                Education, Family Size, Area, Category, Colour, Live/Dead
                Status, and Booth for targeted campaign planning.
              </p>
            </div>
            <img
              src={voterManagementImg1}
              alt="Solution management"
              className="w-full h-[300px] rounded-md object-fill sm:object-cover shadow-sm"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <img
              src={voterManagementImg2}
              alt="Online booking"
              className="w-full h-[320px] rounded-md object-fill sm:object-cover shadow-sm"
            />
            <div>
              <h3 className="text-3xl font-semibold text-[#1f2937] mb-4">
                The Purpose Of Voter Management System
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Manage booth-wise voter data with ease and stay connected
                through integrated WhatsApp and SMS, allowing you to instantly
                share voter slips, campaign updates, and important messages with
                individuals or families.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Export voter data and reports in PDF and Excel formats for
                printing and analysis. Built for speed, security, and
                reliability, the platform handles large voter databases while
                providing a simple, user-friendly experience for campaigns of
                any size.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                The platform also supports PDF and Excel export, allowing you to
                download, print, and manage voter records whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f2937] flex flex-col lg:gap-4 mb-9">
            Voter Management Feature
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
