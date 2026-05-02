import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/blog.jpg';
import billingImage from '../assets/billing.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Best Whatsapp Marketing Campaign',
    excerpt: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text.',
    date: 'Jan 25, 2026',
    image: billingImage,
  },
  {
    id: 2,
    title: 'Best Whatsapp Marketing Campaign',
    excerpt: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text.',
    date: 'Jan 25, 2026',
    image: billingImage,
  },
  {
    id: 3,
    title: 'Best Whatsapp Marketing Campaign',
    excerpt: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text.',
    date: 'Jan 25, 2026',
    image: billingImage,
  },
  {
    id: 4,
    title: 'Best Whatsapp Marketing Campaign',
    excerpt: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text.',
    date: 'Jan 25, 2026',
    image: billingImage,
  },
  {
    id: 5,
    title: 'Best Whatsapp Marketing Campaign',
    excerpt: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text.',
    date: 'Jan 25, 2026',
    image: billingImage,
  },
  {
    id: 6,
    title: 'Best Whatsapp Marketing Campaign',
    excerpt: 'Bulk SMS And Bulk Web WhatsApp Enable Businesses To Send Mass Messages Via Text.',
    date: 'Jan 25, 2026',
    image: billingImage,
  },
];

export default function Blog() {
  return (
    <div className="w-full pt-[92px] bg-[#202329]">
      <section className="w-full bg-[#202329]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-7">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold">Blogs</h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto">
        <div
          className="relative h-[250px] sm:h-[310px] lg:h-[360px] bg-cover bg-center"
          style={{ backgroundImage: `url(${blogImage})` }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16">
            <span className="bg-[#da251d] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit">
              Our Blogs
            </span>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[48px] font-semibold mb-3 leading-tight">
              Read Our Blogs
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm max-w-3xl">
              Simplify Your Billing, Boost Efficiency, And Serve Customers Faster - All From Your Mobile.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#efefef]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#f5f5f5] rounded-2xl overflow-hidden border border-[#e5e7eb] flex flex-col"
              >
                <div className="h-[180px] w-full">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <span className="text-[10px] text-[#6b7280] mb-2">{post.date}</span>
                  <h3 className="text-[#da251d] text-xl font-semibold leading-tight mb-2">{post.title}</h3>
                  <p className="text-[#4b5563] text-xs sm:text-[13px] leading-5 mb-5">{post.excerpt}</p>
                  <Link
                    to="/blog/read"
                    className="mt-auto w-fit inline-flex bg-[#da251d] text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-[#c6221a] transition-colors"
                  >
                    Read Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
