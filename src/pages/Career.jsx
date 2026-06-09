import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/images/about/about-hero.jpg';
import jobImg from '../assets/images/about/about-section.jpg';
import { careerJobs } from '../data/career_jobs';
import { openJobPdf, downloadJobPdf } from '../utils/jobPdf';

export default function Career() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[92px] bg-white">

      {/* ── Hero Banner ───────────────────────────────────────── */}
      <section className="w-full">
        <div
          className="relative w-full min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] bg-cover bg-center flex items-center justify-center py-16"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-4 sm:px-8 max-w-3xl mx-auto">
            <span className="bg-[#da251d] text-white text-[11px] sm:text-xs font-semibold px-4 py-1.5 rounded-full mb-5 inline-block tracking-wide">
              About
            </span>
            <h1 className="text-white text-[26px] sm:text-[36px] lg:text-[48px] font-bold leading-tight">
              Craft Your Career Story<br className="hidden sm:block" /> Dream Big, Achieve Bigger
            </h1>
          </div>
        </div>
      </section>

      {/* ── Join Our Team ─────────────────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-[#1f2937] text-[24px] sm:text-[28px] lg:text-[34px] font-bold mb-5 leading-snug">
                Join Our Team
              </h2>
              <div className="space-y-4">
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Copious Infotech is a fast-growing startup, diligent, and passionate professionals to become part of our team. We are a company that specializes in creating products that helps developers or users with ease. We specialize in developing enterprise-level web applications. Our Sales and partner development and development team members who can work from home. We have a medium-sized and well-established sales team. Our team has worked on multiple technologies like efficient data collection, location services, and numerous offline capabilities. With our quality-driven approach, the development of mobile and server-side back-end business applications that streamline daily business operations are extremely important to our success. Database solutions are proficient and well curated.
                </p>
                <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8]">
                  Copious Infotech is an equal opportunity employer and does not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status. Our commitment to inclusive means we are FYI managers, successful entrepreneurs, and Business Developers (someone 50+) teams who will be supported and welcomed to success.
                </p>
              </div>
            </div>
            <div className="w-full">
              <img
                src={jobImg}
                alt="Join Our Team"
                className="w-full h-[260px] sm:h-[310px] lg:h-[360px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Positions ────────────────────────────────────── */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">

          <div className="text-center mb-12">
            <h2 className="text-[#1f2937] text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-5">
              Open Positions
            </h2>
            <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.8] max-w-3xl mx-auto">
              Copious Infotech is an equal opportunity employer and does not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status. Our commitment to inclusive means we are FYI managers. We look for talented and passionate people who are looking to make a positive impact and have fun doing it. We are a team of builders, thinkers, and dreamers who are passionate about helping businesses grow and succeed. We are looking for people who are passionate about building software that makes a difference.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {careerJobs.map((job) => (
              <div
                key={job.id}
                className="site-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <h3 className="text-[#1f2937] text-[20px] sm:text-[22px] font-bold mb-5">
                      {job.title}
                    </h3>
                    <div className="space-y-3 mb-7">
                      {job.desc.map((para, i) => (
                        <p
                          key={i}
                          className="text-[#4b5563] text-[13.5px] sm:text-[14px] leading-[1.8]"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={() => openJobPdf(job.pdf)}
                        className="border-2 border-[#da251d] text-[#da251d] font-bold text-[13.5px] sm:text-[14px] px-6 py-2.5 rounded-md hover:bg-[#da251d] hover:text-white transition-all duration-200"
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        onClick={() => downloadJobPdf(job.pdf)}
                        className="border-2 border-[#da251d] text-[#da251d] font-bold text-[13.5px] sm:text-[14px] px-6 py-2.5 rounded-md hover:bg-[#da251d] hover:text-white transition-all duration-200"
                      >
                        Download PDF
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate('/contact')}
                        className="bg-[#da251d] text-white font-bold text-[13.5px] sm:text-[14px] px-6 py-2.5 rounded-md hover:bg-[#c02019] transition-all duration-200"
                      >
                        Contact Hiring Team
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-[220px] lg:h-auto">
                    <img
                      src={job.img || jobImg}
                      alt={job.title}
                      className="w-full h-full object-contain bg-[#f8f9fa] rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
