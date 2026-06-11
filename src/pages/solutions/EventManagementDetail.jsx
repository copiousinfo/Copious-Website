import React from "react";
import aboutHero from "../../assets/images/solutions/event/event header.jpeg";
import eventmgmImg from "../../assets/images/solutions/event/eventohub_post2.png";
import eventmgmOriginalImg from "../../assets/images/solutions/event/eventohub_3.png";
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
      <section className="max-w-[1440px] mx-auto">
        <div
          className="relative h-[260px] sm:h-[320px] lg:h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        <div className="bg-white p-5 sm:p-7 lg:p-8 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-stretch">
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
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Make your visitor check-in effortless with our "Scan. Verify.
                Welcome." approach. We provide a completely seamless check-in
                experience for both your visitors and your internal teams. By
                automating the entry process, you eliminate long queues and
                tedious manual data entry at the front desk.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Our smart QR code scanning system allows for instant identity
                verification. The system automatically captures essential
                visitor details, stores them in secure digital records, and can
                instantly print customized badges. This guarantees that only
                authorized personnel and registered guests gain access to your
                premises.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Whether you are hosting a large corporate event, a conference,
                or managing daily office visitors, our robust software
                streamlines your entire visitor management workflow. Elevate
                your brand image with a modern, digitized reception while
                significantly strengthening your on-site security and compliance
                standards.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7">
                Stay fully informed with an intuitive real-time dashboard that
                tracks total visitors, current check-ins, and pre-registered
                guests at a glance. Access detailed visitor logs and historical
                data effortlessly.
              </p>
            </div>
            <img
              src={eventmgmImg}
              alt="Solution management"
              className="w-full h-auto rounded-md object-cover object-top shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 mt-10 items-stretch">
            <img
              src={eventmgmOriginalImg}
              alt="Online booking"
              className="w-full h-full rounded-md object-cover shadow-sm"
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
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Make every milestone a grand celebration. Whether you're
                organizing a product launch, a corporate ribbon-cutting
                ceremony, or an end-of-year gala, our event system is built to
                handle the complexities behind the scenes so your attendees can
                focus on celebrating the moment.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                From sending out beautifully crafted invitations to tracking
                RSVPs and managing seating arrangements, the platform acts as
                your reliable digital assistant. It ensures that VIP guests
                receive appropriate attention and that overall crowd flow
                remains smooth and unhindered during critical moments like
                keynote speeches and ceremonies.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                By automating repetitive tasks and centralizing communication,
                our system dramatically reduces the stress associated with event
                planning. The ultimate goal is to empower organizers to deliver
                highly engaging, successful, and memorable events that leave a
                lasting positive impression on every guest.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Gain deeper insights into attendee behavior and preferences with
                our advanced analytics tools. By understanding your audience
                better, you can tailor future events to their specific
                interests, ultimately driving higher engagement and attendance
                rates over time.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7"></p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[56px] font-semibold text-[#1f2937] mb-8">
            Event Management Feature
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((item, index) => {
              const Icon = item.icon
              return(
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
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
