import React from "react";
import { useParams } from "react-router-dom";
import ticketImg from "../../assets/images/solutions/ticketing/ticketHero.jpeg";
import ticketing2Img from "../../assets/images/solutions/ticketing/playtrek_1.jpeg";
import ticketing3Img from "../../assets/images/solutions/ticketing/playtrek_2.jpeg";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineFolderOpen,
  HiOutlineCreditCard,
  HiOutlineDocumentText,
  HiOutlineReceiptPercent,
  HiOutlineMagnifyingGlass,
  HiOutlineArrowPath,
} from "react-icons/hi2";

const tabData = ["Ticket Management Software"];

const titleMap = {
  billing: "Billing",
  ticketing: "Ticketing",
  parking: "Parking",
};

const featureCards = [
  {
    id: 1,
    title: "Create & Manage",
    subtitle: "Tickets are create and manage very Easy",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    id: 2,
    title: "Records",
    subtitle: "We can multipal Records store.",
    icon: HiOutlineFolderOpen,
  },
  {
    id: 3,
    title: "Payment of Method",
    subtitle: "Self Managed MOP like Cash, UPI etc",
    icon: HiOutlineCreditCard,
  },
  {
    id: 4,
    title: "Account Statement",
    subtitle: "Indivisual Statement Record Print",
    icon: HiOutlineDocumentText,
  },
  {
    id: 5,
    title: "Import & Export",
    subtitle: "You can easly data import and export",
    icon: HiOutlineArrowPath,
  },
  {
    id: 6,
    title: "GST",
    subtitle: "GST Reports Format & Excel Export",
    icon: HiOutlineReceiptPercent,
  },
  {
    id: 7,
    title: "Searching",
    subtitle: "Records find easly and fast",
    icon: HiOutlineMagnifyingGlass,
  },
];

export default function SolutionsDetail() {
  const { slug } = useParams();
  const currentTitle = titleMap[slug] || "Solutions";

  return (
    <div className="w-full pt-[72px]  bg-[#efefef]">
      {/* ── Hero Section ── */}
      <section className="relative w-full">
        <img
          src={ticketImg}
          alt={currentTitle}
          className=" w-full h-[420px] object-fit"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* ── About + Purpose Section ── */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
        <div className="bg-white p-2 sm:p-6 lg:p-6 rounded-md">
          {/* About Us row */}
          <div className="w-full flex flex-col-reverse md:flex-row  gap-5 lg:gap-10 items-start">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1f2937] mb-3 sm:mb-4">
                About Us
              </h2>
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {tabData.map((tab, idx) => (
                  <span
                    key={tab}
                    className={`text-[10px] sm:text-[11px] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full ${
                      idx === 0
                        ? "bg-[#da251d] text-white"
                        : "bg-[#f1f5f9] text-[#374151]"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <p className="text-[#4b5563] text-[13px] sm:text-[14px] leading-6 sm:leading-7">
                Businesses utilize ticket management software to monitor and
                handle customer service requests and inquiries. This software
                enables customer service teams to efficiently process incoming
                tickets, allocate them to the relevant team members, and deliver
                effective customer service. It encompasses features such as
                ticket tracking, categorization, assignment and routing, as well
                as automated notifications. Additionally, the software aids
                agents in prioritizing tickets, analyzing ticket data, and
                generating reports on customer service performance.
              </p>
            </div>
            <img
              src={ticketing2Img}
              alt="Ticket Management"
              className="w-full md:w-1/2 rounded-md object-fit bg-[#f8f9fa] h-[200px] sm:h-[260px] lg:h-[320px] mt-2 lg:mt-0"
            />
          </div>

          {/* Purpose of Online Booking row */}
          <div className="flex flex-col md:flex-row gap-5  mt-6 sm:mt-10">
            <img
              src={ticketing3Img}
              alt="Online booking"
              className="w-full md:w-1/2 rounded-md object-fit h-[200px] sm:h-[260px] lg:h-[320px]"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1f2937] mb-3 sm:mb-4">
                The Purpose Of Online Booking Systems
              </h3>
              <p className="text-[#4b5563] text-[13px] sm:text-[14px] leading-6 sm:leading-7 mb-3 sm:mb-4">
                If you are not currently utilizing an online booking system, you
                may question the necessity of it. You might think that phone and
                email bookings are sufficient. However, it is important to take
                into account the current trends and metrics through which guests
                are making their bookings before making any hasty judgments.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-[#4b5563] text-[13px] sm:text-[14px] leading-6 sm:leading-7 space-y-1 marker:text-[#da251d]">
                <li>
                  Enhance the quality of online interactions for your customers.
                </li>
                <li>
                  Increase the speed of online transactions for your customers.
                </li>
                <li>
                  Efficiently gather crucial information to support various
                  aspects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticket Booking Management Feature Cards ── */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 pb-8 sm:pb-12 lg:pb-16">
        <div className="bg-white rounded-md p-4 sm:p-6 lg:p-8">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-[48px] font-semibold text-[#1f2937] mb-6 sm:mb-10 lg:mb-12 leading-tight">
            Ticket Booking Management Feature
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {featureCards.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="site-card bg-[#f8f8f8] rounded-[10px] border border-gray-200 px-3 sm:px-4 py-3 flex items-center gap-3 cursor-pointer"
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f2e7e7] shrink-0 flex justify-center items-center"
                    aria-hidden
                  >
                    <Icon className="text-red-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-[#da251d] text-[13px] sm:text-sm font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[#4b5563] text-[10px] sm:text-[11px] mt-0.5">
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
