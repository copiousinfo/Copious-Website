import React from 'react';
import blogImage from '../../assets/images/blog/blog-hero.jpg';
import ContentCard from '../../components/ui/ContentCard';
import { blogData } from '../../data/blog_data';

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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {blogData.map((post) => (
              <ContentCard
                key={post.id}
                image={post.image}
                imageAlt={post.title}
                title={post.title}
                description={post.excerpt}
                to={`/blog/${post.type}`}
                ctaLabel="Read Now"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
