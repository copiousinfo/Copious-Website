import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/services/general/dr header.jpeg";

export default function DRServiceDetail() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[92px]">
      {/* Hero Section */}
      <section className="relative w-full">
        <img
          src={heroImg}
          alt="dr service header image"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
              What is Disaster Recovery (DR)?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Disaster Recovery (DR) is a set of policies, tools, and procedures
              designed to enable the recovery or continuation of vital
              technology infrastructure and systems following a natural or
              human-induced disaster. A DR plan ensures your business can
              quickly restore its critical data, applications, and IT systems
              after a disruption — whether it's a cyberattack, hardware failure,
              natural disaster, or accidental data deletion.
            </p>
            <div className="mb-12">
              <button
                onClick={() => navigate("/contact")}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              Why is Disaster Recovery critical for your business?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Every business, regardless of size or industry, is vulnerable to
              disruptions that can cause significant data loss and operational
              downtime. Without a robust Disaster Recovery plan, even a minor
              outage can translate into hours or days of lost productivity,
              damaged reputation, and severe financial losses. Our DR services
              ensure that when disaster strikes, your business can recover
              swiftly and completely — protecting your revenue, your customers,
              and your brand.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              Key components of our DR Services
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              Our Disaster Recovery services are built on industry best
              practices and are tailored to your specific business requirements
              and risk tolerance.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Risk Assessment & Business Impact Analysis
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  We begin by identifying your critical systems, data, and
                  processes, then assess the potential impact of various
                  disaster scenarios. This analysis forms the foundation of a DR
                  plan that prioritizes what matters most to your business.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Recovery Time Objective (RTO) & Recovery Point Objective (RPO)
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  We help you define your RTO (how quickly you need to recover)
                  and RPO (how much data loss is acceptable), then design a
                  tailored recovery strategy that meets these targets within
                  your budget.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Cloud-Based Disaster Recovery (DRaaS)
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Leverage the power of the cloud for cost-effective, scalable,
                  and geographically redundant disaster recovery. Our Disaster
                  Recovery as a Service (DRaaS) solutions replicate your
                  critical workloads to the cloud, enabling rapid failover with
                  minimal disruption.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Automated Failover & Failback
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Our systems are configured for automated failover, meaning
                  your backup environment can activate instantly when a failure
                  is detected — dramatically reducing your recovery time and
                  minimizing the need for manual intervention.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Regular DR Testing & Drills
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  A DR plan that has never been tested is a DR plan you can't
                  trust. We conduct regular, non-disruptive DR drills and
                  testing to validate that your recovery procedures work as
                  expected and that your team is prepared to act confidently in
                  a crisis.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Data Replication & Continuous Protection
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Using advanced replication technology, we continuously mirror
                  your critical data to a secure secondary site. This ensures
                  that even in the worst-case scenario, you lose minimal to no
                  data.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              Benefits of partnering with Copious Info for DR Services
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              Choosing Copious Info as your DR partner means choosing
              reliability, expertise, and peace of mind.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Minimized Downtime
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Our rapid failover capabilities drastically reduce the time
                  your systems are offline, ensuring your business operations
                  resume as quickly as possible after any disruption.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Data Integrity & Compliance
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Our DR solutions are designed to protect data integrity and
                  help you meet industry-specific regulatory compliance
                  requirements, such as GDPR, HIPAA, and ISO 27001.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">
                  Cost-Effective Protection
                </h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  By leveraging cloud infrastructure, we eliminate the need for
                  expensive secondary hardware and data centers, making
                  enterprise-grade disaster recovery accessible and affordable
                  for businesses of all sizes.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => navigate("/contact")}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
