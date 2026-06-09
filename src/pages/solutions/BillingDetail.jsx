import React from "react";
import billingImg from "../../assets/images/solutions/billing/billing-header.png";
import billing3Img from "../../assets/images/solutions/billing/billingimg 2.jpg";
import billing4Img from "../../assets/images/solutions/billing/billingimg3.jpg";

const tabData = ["Billing"];

const featureCards = [
  {
    title: "Customer Management",
    subtitle: "Send booking confirmations and reminders via email or SMS.",
  },
  {
    title: "Customer Support",
    subtitle: "Sync customer data with CRM systems",
  },
  {
    title: "Payment Integration",
    subtitle: "Self Managed MOP like Cash, UPI etc",
  },
  {
    title: "Import & Export",
    subtitle: "You can easly data import and export",
  },
  { title: "Searching", subtitle: "Records find easly and fast" },
];

export default function BillingDetail() {
  return (
    <div className="w-full pt-[92px] bg-[#efefef]">
      {/* ── Hero Section ── */}
      <section className=" h-[300px] sm:h-[400px] lg:h-[800px] bg-[billingImg] bg-cover bg-center flex items-center justify-center">
        <div className=" absolute top-0 left-0 w-full bg-black/60" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[1000px]">
          {/* <span className="bg-[#da251d] text-white text-xs font-semibold px-5 py-1.5 rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Smart Solutions For Modern Billing
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-[800px]">
            Simplify Your Events, Boost Efficiency, And Serve Attendees Faster - All From Your Mobile.
          </p> */}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-10 lg:py-12">
        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-center">
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
                Billing software streamlines the invoicing procedure through
                automation, including tasks like invoice creation, payment
                monitoring, and payment reminders.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                This eradicates the necessity for manual input of data,
                minimizing the chances of mistakes and conserving precious time
                for businesses and their customers.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Companies can effectively manage access to parking locations and
                handle various fees with the assistance of parking management
                software.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Our comprehensive Billing Software efficiently handles all
                aspects of your business, including inventory and sales
                tracking, as well as service and repair management. With our
                user-friendly billing software, you will have access to a wide
                range of tools that will streamline your business operations
                effortlessly. Additionally, you can easily maintain a customized
                workflow to effectively monitor all items undergoing service.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                In addition to seamless invoicing, our platform offers advanced
                tax calculation and multi-currency support
              </p>
            </div>
            <div className="lg:col-span-7 rounded-md shadow-sm overflow-hidden bg-[#f8f9fa] self-stretch">
              <img
                src={billing3Img}
                alt="Solution management"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-10 items-stretch">
            <div className="lg:col-span-7 rounded-md shadow-sm overflow-hidden order-2 lg:order-1 bg-[#f8f9fa] self-stretch">
              <img
                src={billing4Img}
                alt="Online booking"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-[#1f2937] mb-4">
                The Purpose Of Billing Systems
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                By automating tasks such as generating invoices, tracking
                payments, and sending payment reminders, billing software makes
                the invoicing process more efficient and less prone to errors,
                ultimately saving time for both businesses and their clients.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                It ensures accurate financial records by securely logging every
                transaction, providing real-time insights into the company’s
                cash flow. With comprehensive reporting features, businesses can
                easily analyze their revenue streams and identify areas for
                growth.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Furthermore, a robust billing system enhances customer
                satisfaction by offering transparent and professional invoices.
                It supports multiple payment methods, making it convenient for
                clients to settle their dues promptly, which significantly
                reduces payment delays.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7">
                Modern billing solutions also seamlessly integrate with other
                business tools, such as CRM and accounting software. This
                creates a unified ecosystem that eliminates data silos,
                minimizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="bg-white rounded-md p-5 sm:p-7 lg:p-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[56px] font-semibold text-[#1f2937] flex flex-col lg:gap-4 mb-12">
            <span>Ticket Booking & Billing Management</span>
            <span>Feature</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((item, index) => (
              <article
                key={index}
                className="site-card bg-[#f8f8f8] rounded-[10px] border border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-full bg-[#f2e7e7] shrink-0"
                  aria-hidden
                />
                <div>
                  <h3 className="text-[#da251d] text-sm font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[#4b5563] text-[11px] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
