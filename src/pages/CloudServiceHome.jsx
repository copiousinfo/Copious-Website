import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/cloud.jpg'; 
import sectionImg from '../assets/about1.jpg';
import { FiCheckCircle, FiCloud, FiShield, FiZap, FiDatabase, FiGlobe, FiTrendingUp } from 'react-icons/fi';

/* ─── Cloud Provider Cards ─────────────────────────────────────── */
const providers = [
  {
    name: 'AWS Cloud',
    subtitle: 'Amazon Web Services',
    description:
      'The world\'s most comprehensive cloud platform with 200+ services. Leverage AWS for compute, storage, AI, analytics, and global infrastructure at scale.',
    slug: 'cloud-service_aws',
    color: '#FF9900',
    highlights: ['200+ Cloud Services', 'Global Data Centers', 'Pay-as-you-go Pricing', 'Enterprise-Grade Security'],
    logo: (
      <svg viewBox="0 0 80 48" className="h-8 w-auto" fill="none">
        <text x="0" y="36" fontSize="28" fontWeight="900" fill="#FF9900" fontFamily="Arial">AWS</text>
      </svg>
    ),
  },
  {
    name: 'JIO Cloud',
    subtitle: 'Reliance Jio Cloud',
    description:
      'India\'s own cloud platform built on Jio\'s nationwide 5G and fiber backbone. Perfect for Indian businesses needing data sovereignty and low-latency access.',
    slug: 'cloud-service_jio',
    color: '#003087',
    highlights: ['Made in India', 'Data Sovereignty', '5G Powered Network', 'Competitive Pricing'],
    logo: (
      <svg viewBox="0 0 80 48" className="h-8 w-auto" fill="none">
        <text x="0" y="36" fontSize="24" fontWeight="900" fill="#003087" fontFamily="Arial">JIO</text>
      </svg>
    ),
  },
  {
    name: 'Azure Cloud',
    subtitle: 'Microsoft Azure',
    description:
      'Microsoft\'s enterprise cloud trusted by 95% of Fortune 500 companies. Seamless integration with Microsoft 365, Teams, and Dynamics for maximum productivity.',
    slug: 'cloud-service_azure',
    color: '#0078D4',
    highlights: ['Microsoft 365 Integration', 'Hybrid Cloud Ready', '90+ Compliance Certs', 'AI & OpenAI Powered'],
    logo: (
      <svg viewBox="0 0 80 48" className="h-8 w-auto" fill="none">
        <text x="0" y="36" fontSize="18" fontWeight="900" fill="#0078D4" fontFamily="Arial">Azure</text>
      </svg>
    ),
  },
];

/* ─── What We Offer Items ──────────────────────────────────────── */
const offerings = [
  {
    icon: <FiCloud size={24} className="text-[#da251d]" />,
    title: 'Cloud Migration',
    desc: 'Seamlessly migrate your existing on-premise infrastructure to the cloud with zero downtime and full data integrity.',
  },
  {
    icon: <FiShield size={24} className="text-[#da251d]" />,
    title: 'Cloud Security',
    desc: 'End-to-end cloud security solutions including identity management, threat detection, and compliance management.',
  },
  {
    icon: <FiZap size={24} className="text-[#da251d]" />,
    title: 'Cloud Optimization',
    desc: 'Reduce cloud costs by up to 40% with our expert optimization strategies and right-sizing recommendations.',
  },
  {
    icon: <FiDatabase size={24} className="text-[#da251d]" />,
    title: 'Managed Databases',
    desc: 'Fully managed database services on AWS, Azure, and JIO Cloud — always available, always backed up.',
  },
  {
    icon: <FiGlobe size={24} className="text-[#da251d]" />,
    title: 'Multi-Cloud Strategy',
    desc: 'Avoid vendor lock-in with our multi-cloud approach. Run workloads across AWS, Azure, and JIO simultaneously.',
  },
  {
    icon: <FiTrendingUp size={24} className="text-[#da251d]" />,
    title: '24/7 Cloud Support',
    desc: 'Round-the-clock monitoring and support from our certified cloud engineers across all major platforms.',
  },
];

/* ─── Why Choose Us ────────────────────────────────────────────── */
const whyPoints = [
  'Certified experts on AWS, Azure, and JIO Cloud platforms.',
  'End-to-end implementation from planning to deployment.',
  'Custom cloud architecture tailored to your business needs.',
  '99.9% uptime SLA with proactive monitoring and alerts.',
  'Transparent pricing with no hidden costs or surprises.',
  'Post-deployment support and continuous optimization.',
];

/* ─── Stats ─────────────────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Businesses Migrated' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '3', label: 'Cloud Platforms' },
  { value: '24/7', label: 'Expert Support' },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function CloudServiceHome() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[92px] bg-white">

      {/* ── Hero Banner ───────────────────────────────────────── */}
      <section className="w-full">
        <div
          className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] bg-cover bg-center flex items-center justify-center py-16"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
            <span className="bg-[#da251d] text-white text-[11px] sm:text-xs font-semibold px-4 py-1.5 rounded-full mb-5 inline-block tracking-widest uppercase">
              Cloud Services
            </span>
            <h1 className="text-white text-[28px] sm:text-[40px] lg:text-[54px] font-bold leading-tight mb-5">
              Power Your Business With <span className="text-[#da251d]">Intelligent</span> Cloud Solutions
            </h1>
            <p className="text-gray-200 text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Copious Info delivers end-to-end cloud services on AWS, JIO Cloud, and Microsoft Azure — helping businesses scale, secure, and innovate faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-[#da251d] text-white px-8 py-3 rounded-lg font-bold text-[15px] hover:bg-[#c02019] transition-all shadow-md"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => document.getElementById('cloud-providers').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 border border-white/40 text-white px-8 py-3 rounded-lg font-bold text-[15px] hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Explore Platforms ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="w-full bg-[#da251d] py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-[28px] sm:text-[36px] font-black leading-none mb-1">{s.value}</p>
                <p className="text-[12px] sm:text-[14px] text-white/80 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Are Cloud Services ───────────────────────────── */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#da251d] text-[13px] font-bold uppercase tracking-widest mb-3 inline-block">What We Do</span>
              <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-5 leading-snug">
                What Are Cloud Services?
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Cloud services are infrastructure, platforms, or software hosted by third-party providers and made available to users over the internet. Instead of maintaining servers or data centers on-site, businesses can access computing power, storage, and applications on demand — paying only for what they use.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  At Copious Info, we are an authorized partner for AWS, Microsoft Azure, and JIO Cloud — offering migration, management, optimization, and support services to businesses of all sizes across India and globally.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {['Reduce capital expenditure on physical hardware.', 'Scale resources instantly up or down as needed.', 'Access data and applications from anywhere in the world.', 'Built-in redundancy and disaster recovery capabilities.'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#da251d] mt-0.5 shrink-0" size={17} />
                    <span className="text-[#4b5563] text-[14px] sm:text-[15px]">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <img
                src={sectionImg}
                alt="Cloud Services Overview"
                className="w-full h-[280px] sm:h-[340px] lg:h-[400px] object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Cloud Providers ───────────────────────────────────── */}
      <section id="cloud-providers" className="w-full bg-[#f8f9fa] py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#da251d] text-[13px] font-bold uppercase tracking-widest mb-3 inline-block">Our Platforms</span>
            <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-4">
              Choose Your Cloud Platform
            </h2>
            <p className="text-[#4b5563] text-[14px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
              We partner with the world's leading cloud providers to deliver the right solution for your specific business requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {providers.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Top accent bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: p.color }} />
                <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  {/* Logo placeholder */}
                  <div className="mb-5">
                    {p.logo}
                    <p className="text-[#6b7280] text-[12px] mt-1">{p.subtitle}</p>
                  </div>
                  <h3 className="text-[#1f2937] font-bold text-[20px] sm:text-[22px] mb-3">{p.name}</h3>
                  <p className="text-[#4b5563] text-[13.5px] sm:text-[14px] leading-[1.8] mb-6 flex-grow">{p.description}</p>
                  {/* Highlights */}
                  <ul className="space-y-2 mb-7">
                    {p.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2.5 text-[13px] text-[#4b5563]">
                        <FiCheckCircle size={15} className="shrink-0" style={{ color: p.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(`/services/${p.slug}`)}
                    className="w-full py-3 rounded-lg font-bold text-[14px] sm:text-[15px] transition-all text-white hover:opacity-90"
                    style={{ backgroundColor: p.color }}
                  >
                    Explore {p.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Offer ─────────────────────────────────────── */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#da251d] text-[13px] font-bold uppercase tracking-widest mb-3 inline-block">Our Services</span>
            <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-4">
              What Copious Info Provides
            </h2>
            <p className="text-[#4b5563] text-[14px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
              From migration to optimization, we cover every aspect of your cloud journey with expert guidance and hands-on support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {offerings.map((item, i) => (
              <div
                key={i}
                className="bg-[#f8f9fa] rounded-xl p-6 sm:p-7 border border-gray-100 hover:border-[#da251d]/30 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#da251d] transition-colors">
                  <span className="group-hover:[&>svg]:text-white transition-colors">{item.icon}</span>
                </div>
                <h3 className="text-[#1f2937] font-bold text-[16px] sm:text-[17px] mb-3">{item.title}</h3>
                <p className="text-[#4b5563] text-[13.5px] sm:text-[14px] leading-[1.8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="w-full">
              <img
                src={heroBg}
                alt="Why Choose Copious Cloud"
                className="w-full h-[280px] sm:h-[340px] lg:h-[400px] object-cover rounded-2xl shadow-md"
              />
            </div>
            <div>
              <span className="text-[#da251d] text-[13px] font-bold uppercase tracking-widest mb-3 inline-block">Why Us</span>
              <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-5 leading-snug">
                Why Choose Copious Info For Cloud?
              </h2>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] mb-7">
                We are not just a reseller — we are your long-term cloud partner. Our team of certified architects, engineers, and support specialists work alongside your business to design, deploy, and continuously optimize cloud environments that deliver measurable results.
              </p>
              <ul className="space-y-4">
                {whyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#da251d] mt-0.5 shrink-0" size={18} />
                    <span className="text-[#4b5563] text-[14px] sm:text-[15px] leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="w-full bg-[#da251d] py-14 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[38px] font-bold mb-4 leading-snug">
            Ready To Move To The Cloud?
          </h2>
          <p className="text-white/80 text-[14px] sm:text-[16px] mb-8 max-w-xl mx-auto leading-relaxed">
            Talk to our cloud experts today. Get a free consultation and custom cloud roadmap for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#da251d] px-8 py-3 rounded-lg font-bold text-[15px] hover:bg-gray-50 transition-all shadow-md"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => document.getElementById('cloud-providers').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-[15px] hover:bg-white/10 transition-all"
            >
              View Our Plans
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
