import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../../assets/images/services/cloud/cloud-hero.jpg'; 
import cloud2Img from '../../../assets/images/services/cloud/cloud2.jpg';
import { FiCheckCircle, FiCloud, FiShield, FiZap, FiDatabase, FiGlobe, FiTrendingUp, FiCpu, FiLayers, FiBox } from 'react-icons/fi';

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

/* ─── Advantage Items ─────────────────────────────────────────── */
const advantages = [
  {
    title: 'Agility',
    icon: <FiZap size={22} />,
    text: 'The cloud provides convenient access to a wide array of technologies, enabling you to accelerate innovation and create virtually anything you can envision. You have the ability to rapidly deploy resources as required, ranging from infrastructure services like computing, storage, and databases, to Internet of Things, machine learning, data lakes, analytics, and beyond. With the ability to deploy technology services within minutes, you can now accelerate the process of going from idea to implementation by several orders of magnitude compared to the past.'
  },
  {
    title: 'Cost-Saving',
    icon: <FiTrendingUp size={22} />,
    text: 'The cloud enables you to exchange fixed costs, like data centers and physical servers, for flexible expenses, where you only pay for IT services as you use them. Moreover, the variable expenses are significantly lower compared to the costs you would incur if you were to handle it on your own, thanks to the advantages of economies of scale.'
  },
  {
    title: 'Flexibility',
    icon: <FiGlobe size={22} />,
    text: 'Cloud computing allows you to avoid over-provisioning resources in advance for potential spikes in business activity. Instead, you can provision only the necessary amount of resources. This flexibility enables you to easily adjust resource levels to match your evolving business requirements. Leveraging cloud technology enables businesses to quickly scale into different geographical areas and establish a global presence within minutes.'
  }
];

/* ─── Type Items ─────────────────────────────────────────────── */
const cloudTypes = [
  {
    title: 'Iaas (Infrastructure as a Service)',
    icon: <FiCpu size={24} className="text-[#da251d]" />,
    desc: 'The platform offers scalable and virtualized computing resources such as servers, storage, and networking via the internet. Users are granted complete control over the infrastructure, allowing for customization and management access to virtual machines, storage, and networking elements.'
  },
  {
    title: 'Paas (Platform as a Service)',
    icon: <FiLayers size={24} className="text-[#da251d]" />,
    desc: 'Platform as a Service (PaaS) eliminates the requirement for managing the underlying infrastructure, typically hardware and operating systems. Instead, it enables you to concentrate on deploying and overseeing your applications. This streamlines your operations by relieving you of concerns such as resource acquisition and updates.'
  },
  {
    title: 'Saas (Software as a Service)',
    icon: <FiBox size={24} className="text-[#da251d]" />,
    desc: 'Software as a Service (SaaS) offers a fully managed product provided by the service provider. Typically, when discussing SaaS, individuals are talking about end-user applications like web-based email. Users are relieved from concerns regarding service maintenance, allowing them to focus solely on utilizing the software.'
  }
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function CloudServiceHome() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[92px] bg-white">

      {/* ── Hero Banner ───────────────────────────────────────── */}
      <section className="w-full">
        <div
          className="relative w-full min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] bg-cover bg-center flex items-center justify-center py-16"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
            <span className="bg-[#da251d] text-white text-[11px] sm:text-xs font-semibold px-4 py-1.5 rounded-full mb-5 inline-block tracking-widest uppercase">
              Cloud Solutions
            </span>
            <h1 className="text-white text-[28px] sm:text-[40px] lg:text-[54px] font-bold leading-tight mb-5">
              Revolutionize Your Business with Our Cloud Services
            </h1>
            <p className="text-gray-200 text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Scalable, secure, and flexible cloud infrastructure managed by Copious Info to accelerate your digital transformation.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#da251d] text-white px-10 py-3.5 rounded-lg font-bold text-[15px] hover:bg-[#c02019] transition-all shadow-md active:scale-95"
            >
              Free Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* ── About Cloud Computing ───────────────────────────── */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-6 leading-snug">
                About Cloud Computing?
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Cloud computing is the utilization of services provided by a third-party, where data storage, servers, databases, networking, and software are accessed over the internet. The physical servers responsible for storing the data are managed by a cloud service provider.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  In cloud computing, computer system resources, including data storage and computing power, can be accessed as needed without the user having to directly oversee their management.
                </p>
              </div>
            </div>
            <div className="w-full">
              <img
                src={cloud2Img}
                alt="About Cloud Computing"
                className="w-full h-[280px] sm:h-[340px] lg:h-[380px] object-contain bg-[#f8f9fa] rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why we use Cloud Computing ───────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-6 leading-tight">
              Why we use Cloud Computing?
            </h2>
            <div className="space-y-5">
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Cloud computing is being utilized by organizations across various sectors for different purposes, including data backup, disaster recovery, email services, virtual desktops, software development and testing, big data analytics, and customer-facing web applications.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Healthcare companies are leveraging the cloud to create customized treatment plans for patients, while financial services companies are utilizing it for real-time fraud detection and prevention.
              </p>
              <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                Video game developers are harnessing the power of the cloud to provide online gaming experiences to a global audience of millions of players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantage of Cloud Computing ─────────────────────── */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-10 leading-tight text-center">
            Advantage of Cloud Computing?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <div key={i} className="site-card bg-white p-7 rounded-2xl border border-gray-100 shadow-sm cursor-pointer">
                <div className="w-12 h-12 bg-red-50 text-[#da251d] rounded-xl flex items-center justify-center mb-6">
                  {adv.icon}
                </div>
                <h3 className="text-[#1f2937] font-bold text-[20px] mb-4">{adv.title}</h3>
                <p className="text-[#4b5563] text-[14px] leading-[1.8]">
                  {adv.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Types of Cloud Computing ─────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-5">
              Types of Cloud Computing
            </h2>
            <p className="text-[#4b5563] text-[14px] sm:text-[15px] max-w-3xl mx-auto leading-[1.8]">
              There are three primary categories of cloud computing, namely Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Each category offers varying degrees of control, flexibility, and management.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cloudTypes.map((type, i) => (
              <div key={i} className="site-card bg-white rounded-xl p-8 border border-gray-100 shadow-sm cursor-pointer">
                <div className="mb-6">{type.icon}</div>
                <h3 className="text-[#1f2937] font-bold text-[18px] mb-4">{type.title}</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-[1.8]">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cloud Providers ───────────────────────────────────── */}
      <section id="cloud-providers" className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1f2937] text-[26px] sm:text-[30px] lg:text-[36px] font-bold mb-4 uppercase">
              Our Cloud Service Provided By:
            </h2>
            <p className="text-[#4b5563] text-[14px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
              Choose Your Cloud Platform — We partner with the world's leading cloud providers to deliver the right solution.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {providers.map((p, i) => (
              <div
                key={i}
                className="site-card group bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden cursor-pointer"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: p.color }} />
                <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  <div className="mb-5">
                    {p.logo}
                    <p className="text-[#6b7280] text-[12px] mt-1">{p.subtitle}</p>
                  </div>
                  <h3 className="text-[#1f2937] font-bold text-[20px] sm:text-[22px] mb-3">{p.name}</h3>
                  <p className="text-[#4b5563] text-[13.5px] sm:text-[14px] leading-[1.8] mb-6 flex-grow">{p.description}</p>
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
                    className="w-full py-3 rounded-lg font-bold text-[14px] sm:text-[15px] transition-all text-white hover:opacity-90 active:scale-95"
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

    </div>
  );
}
