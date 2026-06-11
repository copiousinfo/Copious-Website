import React from "react";
import { useParams } from "react-router-dom";
import bulkSmsImg from "../../assets/images/services/general/BULKSMS header.png";
import sectionImg from "../../assets/images/about/about-section.jpg";
import bulkSmsWhatImg from "../../assets/images/services/general/bulksms1.png";

/* ─── Per-Service Content ─────────────────────────────────────── */
const serviceContent = {
  "bulk-sms": {
    badge: "Services",
    hero: "Bulk Sms Services",
    heroSub:
      "Bulk SMS Services Allow Businesses To Send Large Volumes Of Text Messages Simultaneously. It Is Used For Marketing, Notifications, Alerts, And Communication, Enabling Efficient And Widespread Customer Outreach And Engagement.",
    whatTitle: "What Is Bulk SMS Message?",
    whatDesc: [
      "Bulk SMS messaging is a legacy description for application-to-person SMS messaging services. It refers specifically to the sending of large number of SMS messages to the mobile phones of a predetermined group of recipients.",
      "Today the application-to-person SMS messaging services have evolved to include bulk SMS messaging alongside the sending of single messages (such as one time passwords and delivery notifications), interactive messaging (such as group messaging services), and incoming number services (such as mobile marketing campaigns, voting or information line).",
    ],
    purposeTitle: "The Purpose Of Bulk SMS Services",
    purposeDesc:
      "If you are not currently utilizing a bulk SMS service, you may question the necessity of it. You might think that email campaigns are sufficient. However, SMS has an open rate of over 98%, making it one of the most effective communication channels available for businesses of all sizes.",
    purposePoints: [
      "Reach customers instantly with time-sensitive promotions and alerts.",
      "Automate appointment reminders, OTPs, and transactional messages.",
      "Run large-scale marketing campaigns with ease and high delivery rates.",
      "Track message delivery and engagement with real-time analytics.",
    ],
  },

  "cloud-service": {
    badge: "Services",
    hero: "Bulk Sms Services",
    heroSub:
      "Bulk SMS Services Allow Businesses To Send Large Volumes Of Text Messages Simultaneously. It Is Used For Marketing, Notifications, Alerts, And Communication, Enabling Efficient And Widespread Customer Outreach And Engagement.",
    whatTitle: "What Is Bulk SMS Message?",
    whatDesc: [
      "Cloud services refer to a broad range of services delivered on demand to companies and customers over the internet. These services are designed to provide easy, affordable access to applications and resources, without the need for internal infrastructure or hardware.",
      "From storage and databases to networking, software, analytics, and intelligence — cloud services offer faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping lower operating costs and run infrastructure more efficiently.",
    ],
    purposeTitle: "Why Your Business Needs Cloud Services",
    purposeDesc:
      "Migrating to the cloud enables your business to reduce IT overhead, improve collaboration, and scale resources dynamically based on demand. Modern cloud platforms also provide built-in redundancy and disaster recovery, ensuring your data is always safe.",
    purposePoints: [
      "Scale computing resources up or down based on business needs.",
      "Access data and applications securely from anywhere in the world.",
      "Reduce capital expenditure on physical hardware and infrastructure.",
      "Ensure business continuity with automated backups and failover.",
    ],
  },

  security: {
    badge: "Services",
    hero: "Security Services",
    heroSub:
      "We Deliver End-To-End Security Solutions That Protect Your Business From Cyber Threats. Including Firewalls, Encryption, Monitoring, And Compliance Management For Complete Peace Of Mind.",
    whatTitle: "What Is Enterprise Security?",
    whatDesc: [
      "Enterprise security refers to the set of policies, tools, and technologies used to safeguard an organization's digital assets, networks, and data from unauthorized access, cyber attacks, and internal threats. It is a comprehensive approach that covers everything from endpoint protection to cloud security.",
      "As businesses increasingly rely on digital infrastructure, the need for robust security solutions has never been greater. A single data breach can cost companies millions and damage their reputation irreparably. Our security services ensure your business stays protected 24/7.",
    ],
    purposeTitle: "Why Security Is Critical For Your Business",
    purposeDesc:
      "Cybercrime is one of the fastest-growing threats to businesses worldwide. Whether you are a startup or an enterprise, having a solid security strategy in place is no longer optional — it is a business necessity that protects your revenue, reputation, and customer trust.",
    purposePoints: [
      "Protect sensitive customer and business data from breaches.",
      "Stay compliant with industry regulations such as GDPR and ISO 27001.",
      "Detect and neutralize threats in real-time before damage occurs.",
      "Build customer trust by demonstrating commitment to data privacy.",
    ],
    planTitle: "Security Service Plans",
  },
};

/* ─── Component ────────────────────────────────────────────────── */
export default function ServiceDetail() {
  const { slug } = useParams();
  const content = serviceContent[slug];
  const currentWhatImg = slug === "bulk-sms" ? bulkSmsWhatImg : sectionImg;

  return (
    <div className="w-full pt-[92px] bg-[#efefef]">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative w-full">
        <img
          src={bulkSmsImg}
          alt="bulk service header image"
          className="w-full md:h-[400px] object-fit"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* ── What Is Section ─────────────────────────────────────── */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            <div className="w-full md:w-1/2">
              <h2 className="text-[#1f2937] text-2xl sm:text-3xl lg:text-[36px] font-bold mb-6 leading-snug">
                {content.whatTitle}
              </h2>
              <div className="space-y-4">
                {content.whatDesc.map((para, i) => (
                  <p
                    key={i}
                    className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={currentWhatImg}
                alt={content.whatTitle}
                className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover bg-[#aaabac] rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
