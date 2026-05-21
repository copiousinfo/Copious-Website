import React from 'react';
import { useParams, Link } from 'react-router-dom';
import heroBg from '../../assets/images/about/about-hero.jpg';
import bulkSmsImg from '../../assets/images/services/general/bulksms1.jpg';
import sectionImg from '../../assets/images/about/about-section.jpg';
import { FiCheckCircle } from 'react-icons/fi';

/* ─── Per-Service Content ─────────────────────────────────────── */
const serviceContent = {
  'bulk-sms': {
    badge: 'Services',
    hero: 'Bulk Sms Services',
    heroSub:
      'Bulk SMS Services Allow Businesses To Send Large Volumes Of Text Messages Simultaneously. It Is Used For Marketing, Notifications, Alerts, And Communication, Enabling Efficient And Widespread Customer Outreach And Engagement.',
    whatTitle: 'What Is Bulk SMS Message?',
    whatDesc: [
      'Bulk SMS messaging is a legacy description for application-to-person SMS messaging services. It refers specifically to the sending of large number of SMS messages to the mobile phones of a predetermined group of recipients.',
      'Today the application-to-person SMS messaging services have evolved to include bulk SMS messaging alongside the sending of single messages (such as one time passwords and delivery notifications), interactive messaging (such as group messaging services), and incoming number services (such as mobile marketing campaigns, voting or information line).',
    ],
    purposeTitle: 'The Purpose Of Bulk SMS Services',
    purposeDesc:
      'If you are not currently utilizing a bulk SMS service, you may question the necessity of it. You might think that email campaigns are sufficient. However, SMS has an open rate of over 98%, making it one of the most effective communication channels available for businesses of all sizes.',
    purposePoints: [
      'Reach customers instantly with time-sensitive promotions and alerts.',
      'Automate appointment reminders, OTPs, and transactional messages.',
      'Run large-scale marketing campaigns with ease and high delivery rates.',
      'Track message delivery and engagement with real-time analytics.',
    ],
    planTitle: 'Bulk Sms Our Best Plans',
    plans: [
      { price: '$10', label: 'One Month Plan', features: ['Monthly Cost for IVR', 'Fully automated IVR at $0.06/min', 'Basic reporting and analytics', 'Basic chat and email support'] },
      { price: '$12', label: 'Three Month Plan', features: ['Monthly Cost for IVR', 'Fully automated IVR at $0.06/min', 'Basic reporting and analytics', 'Basic chat and email support'] },
      { price: '$16', label: 'Six Month Plan', features: ['Monthly Cost for IVR', 'Fully automated IVR at $0.06/min', 'Basic reporting and analytics', 'Basic chat and email support'] },
    ],
    features: [
      { title: 'Instant Delivery', subtitle: 'Messages reach recipients within seconds of sending.' },
      { title: 'High Open Rate', subtitle: '98%+ open rates compared to email or social media.' },
      { title: 'Bulk Scheduling', subtitle: 'Schedule messages for optimal delivery time.' },
      { title: 'WhatsApp Integration', subtitle: 'Send messages via WhatsApp Business API.' },
      { title: 'Personalization', subtitle: 'Customize messages with recipient name and details.' },
      { title: 'DND Filtering', subtitle: 'Automatic DND number filtering for compliance.' },
      { title: 'Unicode Support', subtitle: 'Send messages in Hindi and regional languages.' },
      { title: 'API Access', subtitle: 'Integrate SMS into your existing apps via REST API.' },
      { title: 'Detailed Reports', subtitle: 'Real-time delivery reports and campaign analytics.' },
    ],
  },

  'cloud-service': {
    badge: 'Services',
    hero: 'Bulk Sms Services',
    heroSub:
      'Bulk SMS Services Allow Businesses To Send Large Volumes Of Text Messages Simultaneously. It Is Used For Marketing, Notifications, Alerts, And Communication, Enabling Efficient And Widespread Customer Outreach And Engagement.',
    whatTitle: 'What Is Bulk SMS Message?',
    whatDesc: [
      'Cloud services refer to a broad range of services delivered on demand to companies and customers over the internet. These services are designed to provide easy, affordable access to applications and resources, without the need for internal infrastructure or hardware.',
      'From storage and databases to networking, software, analytics, and intelligence — cloud services offer faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping lower operating costs and run infrastructure more efficiently.',
    ],
    purposeTitle: 'Why Your Business Needs Cloud Services',
    purposeDesc:
      'Migrating to the cloud enables your business to reduce IT overhead, improve collaboration, and scale resources dynamically based on demand. Modern cloud platforms also provide built-in redundancy and disaster recovery, ensuring your data is always safe.',
    purposePoints: [
      'Scale computing resources up or down based on business needs.',
      'Access data and applications securely from anywhere in the world.',
      'Reduce capital expenditure on physical hardware and infrastructure.',
      'Ensure business continuity with automated backups and failover.',
    ],
    planTitle: 'Bulk Sms Our Best Plans',
    plans: [
      { price: '$10', label: 'Basic plan', features: ['Access to all basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20GB individual data each user', 'Basic chat and email support'] },
      { price: '$10', label: 'Basic plan', features: ['Access to all basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20GB individual data each user', 'Basic chat and email support'] },
      { price: '$10', label: 'Basic plan', features: ['Access to all basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20GB individual data each user', 'Basic chat and email support'] },
    ],
    features: [
      { title: 'Elastic Scaling', subtitle: 'Auto-scale resources based on real-time traffic demands.' },
      { title: 'Data Backup', subtitle: 'Automated daily backups with one-click restore.' },
      { title: 'Global CDN', subtitle: 'Deliver content faster with worldwide edge locations.' },
      { title: 'Load Balancing', subtitle: 'Distribute traffic for optimal performance and uptime.' },
      { title: 'Virtual Machines', subtitle: 'Deploy and manage VMs on our high-performance cloud.' },
      { title: 'Database Hosting', subtitle: 'Managed databases with automatic patching and updates.' },
      { title: 'Disaster Recovery', subtitle: 'Geo-redundant failover to protect against data loss.' },
      { title: 'API Management', subtitle: 'Publish, secure, and monitor APIs at any scale.' },
      { title: '99.9% Uptime SLA', subtitle: 'Guaranteed uptime with enterprise-grade infrastructure.' },
    ],
  },

  'security': {
    badge: 'Services',
    hero: 'Security Services',
    heroSub:
      'We Deliver End-To-End Security Solutions That Protect Your Business From Cyber Threats. Including Firewalls, Encryption, Monitoring, And Compliance Management For Complete Peace Of Mind.',
    whatTitle: 'What Is Enterprise Security?',
    whatDesc: [
      'Enterprise security refers to the set of policies, tools, and technologies used to safeguard an organization\'s digital assets, networks, and data from unauthorized access, cyber attacks, and internal threats. It is a comprehensive approach that covers everything from endpoint protection to cloud security.',
      'As businesses increasingly rely on digital infrastructure, the need for robust security solutions has never been greater. A single data breach can cost companies millions and damage their reputation irreparably. Our security services ensure your business stays protected 24/7.',
    ],
    purposeTitle: 'Why Security Is Critical For Your Business',
    purposeDesc:
      'Cybercrime is one of the fastest-growing threats to businesses worldwide. Whether you are a startup or an enterprise, having a solid security strategy in place is no longer optional — it is a business necessity that protects your revenue, reputation, and customer trust.',
    purposePoints: [
      'Protect sensitive customer and business data from breaches.',
      'Stay compliant with industry regulations such as GDPR and ISO 27001.',
      'Detect and neutralize threats in real-time before damage occurs.',
      'Build customer trust by demonstrating commitment to data privacy.',
    ],
    planTitle: 'Security Service Plans',
    plans: [
      { price: '₹999', label: 'Basic Shield', features: ['Firewall Setup', 'Basic Monitoring', 'Monthly Reports', 'Email Support'] },
      { price: '₹2,499', label: 'Pro Shield', features: ['Advanced Firewall', '24/7 Monitoring', 'Weekly Reports', 'Priority Response'] },
      { price: '₹4,999', label: 'Enterprise Shield', features: ['Full Security Suite', 'Real-time Alerts', 'Compliance Management', 'Dedicated Security Team'] },
    ],
    features: [
      { title: 'Threat Detection', subtitle: 'AI-powered real-time detection of suspicious activity.' },
      { title: 'Firewall Management', subtitle: 'Next-gen firewall setup and continuous management.' },
      { title: 'Data Encryption', subtitle: 'End-to-end encryption for data in transit and at rest.' },
      { title: 'VPN Services', subtitle: 'Secure remote access for your distributed workforce.' },
      { title: 'Endpoint Protection', subtitle: 'Safeguard all devices connected to your network.' },
      { title: 'Vulnerability Scans', subtitle: 'Regular scans to identify and patch security gaps.' },
      { title: 'Compliance Audit', subtitle: 'Ensure compliance with GDPR, ISO 27001, and more.' },
      { title: 'Incident Response', subtitle: '24/7 expert response to contain and resolve breaches.' },
      { title: 'Security Training', subtitle: 'Employee security awareness programs and workshops.' },
    ],
  },
};

/* ─── Component ────────────────────────────────────────────────── */
export default function ServiceDetail() {
  const { slug } = useParams();
  const content = serviceContent[slug];

  if (!content) {
    return (
      <div className="w-full pt-[92px] min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa]">
        <h1 className="text-3xl font-bold text-[#da251d] mb-4">Service Not Found</h1>
        <p className="text-gray-500 mb-8">The service page you are looking for does not exist.</p>
        <Link
          to="/"
          className="bg-[#da251d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#c02019] transition-all"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-[92px] bg-[#efefef]">

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="w-full">
        <div
          className="relative w-full min-h-[380px] sm:min-h-[420px] lg:h-[480px] bg-cover bg-center flex flex-col justify-center py-12 sm:py-16"
          style={{ backgroundImage: `url(${slug === 'bulk-sms' ? bulkSmsImg : heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <span className="bg-[#da251d] text-white text-[11px] sm:text-xs font-semibold px-4 sm:px-5 py-1.5 rounded-full mb-4 sm:mb-5 inline-block">
              {content.badge}
            </span>
            <h1 className="text-white text-[28px] sm:text-4xl lg:text-[52px] font-bold leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
              {content.hero}
            </h1>
            <p className="text-gray-200 text-[13px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              {content.heroSub}
            </p>
            <Link
              to="/contact"
              className="bg-[#da251d] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-[#c02019] transition-all shadow-md inline-block"
            >
              Free Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── What Is Section ─────────────────────────────────────── */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-[#1f2937] text-2xl sm:text-3xl lg:text-[36px] font-bold mb-6 leading-snug">
                {content.whatTitle}
              </h2>
              <div className="space-y-4">
                {content.whatDesc.map((para, i) => (
                  <p key={i} className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full">
              <img
                src={sectionImg}
                alt={content.whatTitle}
                className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ── Plans Section ────────────────────────────────────────── */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-[#1f2937] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center mb-12">
            {content.planTitle}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-md lg:max-w-none mx-auto">
            {content.plans.map((plan, i) => (
              <div
                key={i}
                className="site-card rounded-xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 flex flex-col shadow-sm cursor-pointer"
              >
                <div className="text-center mb-6 sm:mb-8">
                  <p className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1f2937] mb-2">{plan.price}<span className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold">/mth</span></p>
                  <p className="text-[15px] sm:text-[16px] font-bold text-[#1f2937] mb-1.5">{plan.label}</p>
                  <p className="text-[13px] text-[#9ca3af]">Billed annually.</p>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow w-full max-w-[280px] mx-auto">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-[13.5px] text-[#6b7280]">
                      <FiCheckCircle size={18} className="text-[#86efac] mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 sm:py-3.5 rounded-md font-bold text-[14px] sm:text-[15px] transition-all bg-[#da251d] text-white hover:bg-[#c02019]"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
