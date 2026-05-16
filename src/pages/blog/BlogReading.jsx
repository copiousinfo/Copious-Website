import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandX,
  TbMail,
} from 'react-icons/tb';
import { blogData } from '../../data/blog_data';

const shareLinks = [
  { icon: TbMail, label: 'Email', href: '#' },
  { icon: TbBrandX, label: 'X', href: '#' },
  { icon: TbBrandFacebook, label: 'Facebook', href: '#' },
  { icon: TbBrandInstagram, label: 'Instagram', href: '#' },
];

export default function BlogReading() {
  const { type } = useParams();
  const blog = blogData.find((b) => b.type === type);

  // Fallback if blog not found
  if (!blog) {
    return (
      <div className="pt-[120px] pb-20 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link to="/blog" className="text-[#da251d] hover:underline mt-4 inline-block">Back to Blogs</Link>
      </div>
    );
  }

  const latestPosts = blogData.filter(b => b.type !== type).slice(0, 5);

  return (
    <div className="w-full pt-[92px] bg-[#e8e8e8]">
      <section className="relative w-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-[#1a0a0a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b1538]/95 via-[#4a0d1f]/75 to-black/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] flex flex-col justify-center py-10">
          <p className="text-white/90 text-sm mb-3">{blog.date}</p>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight max-w-4xl mb-4">
            {blog.title}
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl">
            {blog.excerpt}
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200/80 px-4 sm:px-6 py-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gray-300 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold text-[#1f2937] text-sm">{blog.author}</p>
              <p className="text-xs text-gray-500">{blog.date}</p>
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
          <article className="lg:col-span-8 space-y-8 text-[#374151] text-[15px] leading-7">
            {blog.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 
                  id={section.title.toLowerCase().replace(/\s+/g, '-')}
                  className="text-2xl sm:text-3xl font-bold text-[#111827]"
                >
                  {section.title}
                </h2>
                <p>{section.text}</p>
                {section.list && (
                  <ul className="list-disc pl-6 space-y-4 marker:text-[#da251d]">
                    {section.list.map((item, i) => {
                      const [label, ...rest] = item.split(':');
                      return (
                        <li key={i}>
                          {rest.length > 0 ? (
                            <>
                              <span className="font-bold text-[#111827]">{label}:</span>
                              {rest.join(':')}
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {section.image && (
                  <div className="rounded-lg overflow-hidden my-8">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto object-cover max-h-[420px] object-center"
                    />
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4">Conclusion</h2>
              <p className="mb-8">
                Strong {blog.title.replace('Why we need ', '').replace('?', '')} strategy is essential for any modern business. 
                By focusing on these core principles, you can ensure your business remains competitive and resilient in an ever-changing digital landscape.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex bg-[#da251d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#c02019] transition-all shadow-md"
              >
                Get in Touch
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-6">
            <div className="site-card bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <h3 className="font-bold text-[#111827] mb-4">About The Author</h3>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gray-300 mb-3" aria-hidden />
                <p className="font-semibold text-[#111827]">{blog.author}</p>
                <p className="text-sm text-[#da251d] font-medium mb-3">Author</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Writer and strategist focused on growth marketing, messaging, and practical business solutions
                  that teams can ship without a huge agency budget.
                </p>
              </div>
            </div>

            <div className="site-card bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <h3 className="font-bold text-[#111827] mb-4">In This Blog</h3>
              <ul className="space-y-3 text-sm">
                {blog.sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#374151] hover:text-[#da251d]"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-card bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <h3 className="font-bold text-[#111827] mb-4">Latest Blogs</h3>
              <ul className="space-y-4">
                {latestPosts.map((post, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-14 h-14 rounded shrink-0 bg-[#d1d5db] overflow-hidden">
                      <img src={post.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <Link
                      to={`/blog/${post.type}`}
                      className="text-sm font-medium text-[#111827] leading-snug hover:text-[#da251d]"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/blog"
                className="mt-5 inline-block text-[#da251d] font-semibold text-sm hover:underline"
              >
                Show More
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

