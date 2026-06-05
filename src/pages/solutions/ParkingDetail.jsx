import React from 'react';
import parkingImg from '../../assets/images/solutions/parking/parkingheader.jpg';
import parking4Img from '../../assets/images/solutions/parking/ParkingHub_1.png';

const tabData = [
  'Parking',
];

const featureCards = [
  { title: "Easy & Fast Billing", subtitle: "Fastest Way to Create Invoices / Bills" },
  { title: "BarCode Scanner", subtitle: "BarCode Scanner Auto-Detection, Image Upload and High-Accuracy Readings" },
  { title: "Searching", subtitle: "Records find easily and fast" },
  { title: "Payment of Method", subtitle: "Self Managed MOP like Cash, UPI etc" },
];

export default function ParkingDetail() {
  return (
    <div className="w-full pt-[92px] bg-[#efefef]">
      {/* ── Hero Section ── */}
      <section
        className="relative h-[300px] sm:h-[400px] lg:h-[480px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${parkingImg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[1000px]">
          {/* <span className="bg-[#da251d] text-white text-xs font-semibold px-5 py-1.5 rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Smart Solutions For Modern Parking
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
              <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">About Us</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {tabData.map((tab, idx) => (
                  <span
                    key={tab}
                    className={`text-[11px] px-4 py-1.5 rounded-full ${
                      idx === 0 ? 'bg-[#da251d] text-white' : 'bg-[#f1f5f9] text-[#374151]'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                The Parking Management Software enables users to find, register, and make payments for parking through their Smartphone in areas that were previously designated as No Parking zones. Within a company, Parking Management serves as a beneficial tool for managing employee parking lots and spaces. This Parking App solution assists both individuals and businesses in handling vehicle spot reservations and tickets efficiently.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Companies can effectively manage access to parking locations and handle various fees with the assistance of parking management software. The integration of parking management software with video surveillance or image capture and recognition solutions enhances its functionality.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Our advanced parking systems also come equipped with real-time occupancy tracking, ensuring that drivers can easily locate available spots without unnecessary circling. This significantly reduces traffic congestion and carbon emissions within the facility.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                Furthermore, the automated reporting and analytics dashboard provides operators with valuable insights into peak usage times, revenue generation, and customer behavior. This data-driven approach empowers management to optimize pricing strategies and improve overall service efficiency.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                With robust security features including automated gate controls and unauthorized access alerts, our solution guarantees a safe and seamless parking experience. It effortlessly bridges the gap between modern technology and everyday convenience, making smart parking a reality for everyone.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                A key advantage of our comprehensive parking management solution is its ability to seamlessly integrate with third-party payment gateways and mobile wallets. This ensures a frictionless checkout process for users, reducing queues at exit gates and significantly improving overall customer satisfaction. The system also supports dynamic pricing models, allowing operators to adjust rates based on demand, time of day, or special events.
              </p>
              <p className="text-[#4b5563] text-[14px] leading-7 mb-4">
                For commercial complexes and residential buildings, the software offers a dedicated tenant portal. This feature allows administrators to easily allocate parking spaces, manage monthly passes, and monitor visitor parking in real-time. 
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
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[56px] font-semibold text-[#1f2937] mb-8">
            Parking Management Feature
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((item, index) => (
              <article
                key={index}
                className="site-card bg-[#f8f8f8] rounded-[10px] border border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-[#f2e7e7] shrink-0" aria-hidden />
                <div>
                  <h3 className="text-[#da251d] text-sm font-bold">{item.title}</h3>
                  <p className="text-[#4b5563] text-[11px] mt-0.5">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
