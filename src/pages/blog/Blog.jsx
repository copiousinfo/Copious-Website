import React from "react";
import blogImage from "../../assets/images/blog/blog-hero.jpeg";
import ContentCard from "../../components/ui/ContentCard";
import { blogData } from "../../data/blog_data";

export default function Blog() {
  return (
    <div className="w-full pt-[92px] bg-[#202329]">
      <section className="relative max-w-[1440px] mx-auto">
        <img src={blogImage} className=" h-[350px] w-full object-cover" />
        <div className="absolute inset-0 bg-red-400/20" />
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
