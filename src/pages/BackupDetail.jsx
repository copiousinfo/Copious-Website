import React from 'react';
import { FaShieldAlt, FaCompressArrowsAlt, FaClock, FaLock, FaUndo, FaCogs, FaCheckCircle, FaRobot, FaTachometerAlt, FaCloudUploadAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import aboutHero from '../assets/about.jpg';
import aboutImage from '../assets/about1.jpg';

export default function BackupDetail() {
  const navigate = useNavigate();

  const advantages = [
    {
      title: "Data security",
      icon: <FaShieldAlt className="text-[#da251d] text-3xl mb-3" />,
      desc: "Data security is an essential aspect of data backup and recovery. The significance of having robust security measures in data backup and restore solutions cannot be overstated, as it plays a critical role in safeguarding an organization's project management data."
    },
    {
      title: "Compression & deduplication",
      icon: <FaCompressArrowsAlt className="text-[#0078d4] text-3xl mb-3" />,
      desc: "The inclusion of built-in, block-level data deduplication and compression leads to a substantial decrease in data volumes, enhances the speed of backups, and minimizes storage needs."
    },
    {
      title: "Incremental & differential",
      icon: <FaCogs className="text-[#10b981] text-3xl mb-3" />,
      desc: "The characteristics solely support the backup of modifications, resulting in time savings and the optimization of storage space, as well as network, disk, and system performance."
    },
    {
      title: "Backup scheduling",
      icon: <FaClock className="text-[#f59e0b] text-3xl mb-3" />,
      desc: "Backups are executed automatically according to your set schedule or in response to particular events."
    },
    {
      title: "Encryption",
      icon: <FaLock className="text-[#6366f1] text-3xl mb-3" />,
      desc: "Encrypting data during transmission and while stored safeguards your data against unauthorized access."
    },
    {
      title: "Recovery",
      icon: <FaUndo className="text-[#8b5cf6] text-3xl mb-3" />,
      desc: "It is essential to efficiently recover only the necessary data from your backup files."
    }
  ];

  const selectionCriteria = [
    { title: "Ease of use", icon: <FaCheckCircle className="text-[#10b981] shrink-0 mt-1" />, desc: "You are seeking a backup solution that is user-friendly, easy to set up, operate, and keep track of, while also providing a sleek, intuitive interface with customizable dashboards." },
    { title: "Reliability", icon: <FaShieldAlt className="text-[#10b981] shrink-0 mt-1" />, desc: "To reduce the risk of data loss, choose established solution providers with proven technologies over new entrants with untested technologies." },
    { title: "Automation", icon: <FaRobot className="text-[#10b981] shrink-0 mt-1" />, desc: 'Automate your backup process to "set it and forget it." Once established, your data is continuously protected in the background. You\'ll receive smart alerts if any issues arise.' },
    { title: "Breadth", icon: <FaCloudUploadAlt className="text-[#10b981] shrink-0 mt-1" />, desc: "Ensure your backup solution protects multiple devices across different operating systems used by you, your co-workers, and your family." },
    { title: "Speed", icon: <FaTachometerAlt className="text-[#10b981] shrink-0 mt-1" />, desc: "Fast backups eliminate bottlenecks in daily operations, and quick recovery times get your systems running in minutes." },
    { title: "Versatility", icon: <FaCogs className="text-[#10b981] shrink-0 mt-1" />, desc: "For business users with complex IT environments, robust backup software should support various data types and offer flexible storage options like local disks, tape, SAN, NAS, and the cloud." },
    { title: "Data protection", icon: <FaLock className="text-[#10b981] shrink-0 mt-1" />, desc: "Why use separate backup and cybersecurity solutions when integrated options exist? Modern data protection combines both, offering a single license and dashboard for comprehensive management. Whether facing cyberattacks, natural disasters, hardware/software failures, or human error, you can quickly recover your data and systems with one efficient solution." }
  ];

  return (
    <div className="w-full pt-[92px]">
      {/* Hero Section */}
      <section
        className="relative h-[400px] sm:h-[450px] lg:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[900px]">
          <span className="bg-[#da251d] text-white text-xs font-semibold px-5 py-1.5 rounded-full mb-6">
            Services
          </span>
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Backup Software Solutions
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 max-w-[800px]">
            Backup software is designed to create duplicates of your files, folders, or entire system, encompassing the operating system, software programs, and data. Sophisticated features enable users to generate several backups, ensuring data and system recovery.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#da251d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#c02019] transition-colors"
          >
            Request Call
          </button>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
              What is the purpose of utilizing backup software?
            </h2>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-5">
              There are numerous methods through which you can experience data loss on your computer, laptop, or mobile device. These include falling victim to a cyberattack, encountering hardware or software malfunctions, facing human-made or natural disasters, or experiencing a power outage.
            </p>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-5">
              Additionally, accidental deletion of files or folders, theft of your computer, or spilling coffee or any other liquid on your device can also result in data loss. In fact, the possibilities of losing data are so vast that it is highly likely to happen to you at some point. 
            </p>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
              When this unfortunate event occurs, you may permanently lose your data unless you have a backup. Consider backups as a form of insurance, ensuring that regardless of the circumstances, you can retrieve your valuable information.
            </p>
          </div>
          <div>
            <img
              src={aboutImage}
              alt="Data Backup Solutions"
              className="w-full rounded-xl object-cover shadow-lg h-[300px] sm:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#f8f9fa] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-4">
              Functionality and Advantages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              After the software is activated, it will duplicate your files and save the backup on an external drive, DVD, USB, or in the cloud. Let’s look at some advantages of data backup and recovery solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                {adv.icon}
                <h3 className="text-xl font-bold text-[#1f2937] mb-3">{adv.title}</h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-10 text-center">
            Select the right backup software? What do you need to look for?
          </h2>
          <div className="space-y-6">
            {selectionCriteria.map((item, index) => (
              <div key={index} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                {item.icon}
                <div>
                  <h4 className="font-bold text-[#1f2937] mb-1">{item.title}</h4>
                  <p className="text-[#4b5563] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="bg-[#da251d] text-white py-16 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">Pricing of backup software</h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
            Backup software pricing for personal or home office use varies by vendor, based on storage space and features. Services like Dropbox, IDrive, Microsoft OneDrive, Box, OpenDrive, and Google Drive offer free storage from 2GB to 15GB per user.
          </p>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            The cost of consumer backup solutions differs among vendors and is typically determined by the storage capacity. The price can range from as little as $40 to several hundred dollars annually.
          </p>
        </div>
      </section>
    </div>
  );
}
