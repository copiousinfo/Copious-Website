import React from 'react';
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandX,
  TbMail,
} from 'react-icons/tb';
import heroImage from '../assets/blogreading2.jpg';
import inlineImage1 from '../assets/blogreading1.jpg';
import inlineImage2 from '../assets/blogreading3.jpg';

const shareLinks = [
  { icon: TbMail, label: 'Email', href: '#' },
  { icon: TbBrandX, label: 'X', href: '#' },
  { icon: TbBrandFacebook, label: 'Facebook', href: '#' },
  { icon: TbBrandInstagram, label: 'Instagram', href: '#' },
];

const tocItems = [
  { label: 'Understanding Your SEO Marketing Needs', active: true },
  { label: 'Keyword Research & Content Strategy', active: false },
  { label: 'Technical SEO & Site Performance', active: false },
  { label: 'Measuring Results & Iteration', active: false },
];

const latestPosts = [
  { title: 'Met Gala 2023: Iconic Looks & Red Carpet Moments' },
  { title: 'Met Gala 2023: Iconic Looks & Red Carpet Moments' },
  { title: 'Met Gala 2023: Iconic Looks & Red Carpet Moments' },
  { title: 'Met Gala 2023: Iconic Looks & Red Carpet Moments' },
  { title: 'Met Gala 2023: Iconic Looks & Red Carpet Moments' },
];

export default function BlogReading() {
  return (
    <div className="w-full pt-[92px] bg-[#e8e8e8]">
      <section className="relative w-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-[#1a0a0a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b1538]/95 via-[#4a0d1f]/75 to-black/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] flex flex-col justify-center py-10">
          <p className="text-white/90 text-sm mb-3">Jan 25, 2024</p>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight max-w-4xl mb-4">
            Best Whatsapp Marketing Campaign
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl">
            Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200/80 px-4 sm:px-6 py-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gray-300 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold text-[#1f2937] text-sm">Vishal Shrisvastav</p>
              <p className="text-xs text-gray-500">Jan 25, 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
            <span className="text-sm font-bold text-black">Share</span>
            <div className="flex items-center gap-4 sm:gap-5">
              {shareLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center justify-center text-[#E2211D] hover:text-[#C41A17] transition-colors"
                  aria-label={label}
                >
                  <Icon size={22} strokeWidth={1.35} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <article className="lg:col-span-8 space-y-6 text-[#374151] text-[15px] leading-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Understanding Your SEO Marketing Needs
            </h2>
            <p>
              Search engine optimization is not a one-size-fits-all playbook. Before you invest in
              content or backlinks, clarify what your business actually needs: visibility for branded
              terms, demand capture for high-intent keywords, or authority in a niche. A clear goal
              keeps every tactic aligned and measurable.
            </p>
            <p>
              Start with your customer journey. Map the questions people ask before they choose a
              solution like yours, then build pages and resources that answer those questions better
              than competitors. Consistency beats sporadic campaigns—regular publishing, internal
              linking, and technical hygiene compound over time.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#da251d]">
              <li>Audit existing pages for relevance, speed, and crawlability.</li>
              <li>Prioritize topics that match commercial intent, not only traffic volume.</li>
              <li>Use structured data where it genuinely helps users and search results.</li>
              <li>Track rankings and conversions together, not vanity metrics alone.</li>
            </ul>
            <div className="rounded-lg overflow-hidden my-8">
              <img
                src={inlineImage1}
                alt="Digital marketing visualization"
                className="w-full h-auto object-cover max-h-[420px] object-center"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] pt-2">
              Understanding Your SEO Marketing Needs
            </h2>
            <p>
              Search engine optimization is not a one-size-fits-all playbook. Before you invest in
              content or backlinks, clarify what your business actually needs: visibility for branded
              terms, demand capture for high-intent keywords, or authority in a niche. A clear goal
              keeps every tactic aligned and measurable.
            </p>
            <p>
              Start with your customer journey. Map the questions people ask before they choose a
              solution like yours, then build pages and resources that answer those questions better
              than competitors. Consistency beats sporadic campaigns—regular publishing, internal
              linking, and technical hygiene compound over time.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#da251d]">
              <li>Audit existing pages for relevance, speed, and crawlability.</li>
              <li>Prioritize topics that match commercial intent, not only traffic volume.</li>
              <li>Use structured data where it genuinely helps users and search results.</li>
              <li>Track rankings and conversions together, not vanity metrics alone.</li>
            </ul>
            <div className="rounded-lg overflow-hidden my-8">
              <img
                src={inlineImage2}
                alt="Editorial feature image"
                className="w-full h-auto object-cover max-h-[420px] object-center"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">Conclusion</h2>
            <p>
              Strong SEO is the sum of useful content, solid technical foundations, and patience.
              Focus on serving readers first; search engines reward clarity, depth, and trust. Review
              performance quarterly, refresh evergreen pages, and double down on what moves leads
              and revenue—not just clicks.
            </p>
            <p>
              If you align teams around one north-star metric (qualified leads, signups, or sales),
              your roadmap stays honest and your blog reading experience stays valuable long after
              publish day.
            </p>
          </article>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-5 sm:p-6">
              <h3 className="font-bold text-[#111827] mb-4">About The Author</h3>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gray-300 mb-3" aria-hidden />
                <p className="font-semibold text-[#111827]">Vishal Shrisvastav</p>
                <p className="text-sm text-[#da251d] font-medium mb-3">Author</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Writer and strategist focused on growth marketing, messaging, and practical SEO
                  that teams can ship without a huge agency budget.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-5 sm:p-6">
              <h3 className="font-bold text-[#111827] mb-4">In This Blog</h3>
              <ul className="space-y-3 text-sm">
                {tocItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href="#"
                      className={
                        item.active
                          ? 'text-[#da251d] font-semibold underline'
                          : 'text-[#374151] hover:text-[#da251d]'
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-5 sm:p-6">
              <h3 className="font-bold text-[#111827] mb-4">Latest Blogs</h3>
              <ul className="space-y-4">
                {latestPosts.map((post, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-14 h-14 rounded shrink-0 bg-[#d1d5db]" aria-hidden />
                    <a
                      href="#"
                      className="text-sm font-medium text-[#111827] leading-snug hover:text-[#da251d]"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-5 text-[#da251d] font-semibold text-sm hover:underline"
              >
                Show More
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
