import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutHero from '../../assets/images/services/general/backup header.jpeg';

export default function BackupDetail() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[92px]">
      {/* Hero Section */}
      <section className="relative w-full">
        <img
        src={aboutHero}
        className="w-full md:h-[600px] object-fit"
        alt='backup service hero-section image'
      />
        <div className="absolute inset-0 bg-red-400/20" />
      </section>
        
      

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
              What is backup software?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              Backup software is a software application designed to create duplicates of your files, folders, or entire system, encompassing the operating system, software programs, and data. Sophisticated features enable users to generate several backups, ensuring data and system recovery in case one backup is compromised or inaccessible.
            </p>
            <div className="mb-12">
              <button
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              What is the purpose of utilizing backup software?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              There are numerous methods through which you can experience data loss on your computer, laptop, or mobile device. These include falling victim to a cyberattack, encountering hardware or software malfunctions, facing human-made or natural disasters, or experiencing a power outage. Additionally, accidental deletion of files or folders, theft of your computer, or spilling coffee or any other liquid on your device can also result in data loss. In fact, the possibilities of losing data are so vast that it is highly likely to happen to you at some point. When this unfortunate event occurs, you may permanently lose your data unless you have a backup. Consider backups as a form of insurance, ensuring that regardless of the circumstances, you can retrieve your valuable information.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              Explain the functionality of backup software and outline its advantages.
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              You have the option to acquire complimentary backup software or make a purchase from various vendors. The software may come in the form of a service known as backup as a service (BaaS) or be cloud-based. After the software is activated or set up, it will duplicate your files and folders and save the backup on an external drive, DVD, USB, or in the cloud. More sophisticated solutions, such as Copious Cyber Protect Home Office, not only back up your files and folders but also your applications and operating system - your entire system. The features vary depending on the solution you select, but below is a list of the fundamental features that most backup applications offer.
            </p>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-8">
              Let’s look at some advantages of data backup and recovery solutions.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Data security</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Data security is an essential aspect of data backup and recovery. The significance of having robust security measures in data backup and restore solutions cannot be overstated, as it plays a critical role in safeguarding an organization's project management data.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Compression and deduplication:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  The inclusion of built-in, block-level data deduplication and compression leads to a substantial decrease in data volumes, enhances the speed of backups, and minimizes storage needs.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Incremental and differential backup methods:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  The characteristics solely support the backup of modifications, resulting in time savings and the optimization of storage space, as well as network, disk, and system performance.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Backup scheduling:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Backups are executed automatically according to your set schedule or in response to particular events.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Encryption:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Encrypting data during transmission and while stored safeguards your data against unauthorized access.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Recovery:</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  It is essential to efficiently recover only the necessary data from your backup files.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              Select the right backup software? What do you need to look for?
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              Numerous backup solutions are available in the market, each with its own unique set of features and capabilities. When considering which software to purchase, we suggest focusing on these seven essential components.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Ease of use</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  You are seeking a backup solution that is user-friendly, easy to set up, operate, and keep track of, while also providing a sleek, intuitive interface with customizable dashboards.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Reliability</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  To reduce the risk of data loss, choose established solution providers with proven technologies over new entrants with untested technologies.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Automation</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Automate your backup process to "set it and forget it." Once established, your data is continuously protected in the background. You'll receive smart alerts if any issues arise.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Breadth</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Ensure your backup solution protects multiple devices across different operating systems used by you, your co-workers, and your family.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Speed</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Fast backups eliminate bottlenecks in daily operations, and quick recovery times get your systems running in minutes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Versatility</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  For business users with complex IT environments, robust backup software should support various data types and offer flexible storage options like local disks, tape, SAN, NAS, and the cloud.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-[15px] sm:text-base mb-2">Data protection</h3>
                <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                  Why use separate backup and cybersecurity solutions when integrated options exist? Modern data protection combines both, offering a single license and dashboard for comprehensive management. Whether facing cyberattacks, natural disasters, hardware/software failures, or human error, you can quickly recover your data and systems with one efficient solution.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-6">
              Pricing of backup software
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-6">
              Backup software pricing for personal or home office use varies by vendor, based on storage space and features. Services like Dropbox, IDrive, Microsoft OneDrive, Box, OpenDrive, and Google Drive offer free storage from 2GB to 15GB per user.
            </p>
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed mb-10">
              The cost of consumer backup solutions differs among vendors and is typically determined by the storage capacity. The price can range from as little as $40 to several hundred dollars annually.
            </p>
            
            <div>
              <button
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-[#da251d] text-[#da251d] font-bold py-2 px-6 rounded-md hover:bg-[#da251d] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
