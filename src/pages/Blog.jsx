import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Optimize Your Billing Process',
    excerpt: 'Discover the top 5 strategies to streamline your company billing and reduce errors.',
    date: 'April 25, 2026',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'The Future of Digital Ticketing',
    excerpt: 'Exploring how mobile-first ticketing solutions are changing the event industry.',
    date: 'April 20, 2026',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Smart Parking: A Guide for Cities',
    excerpt: 'How data-driven parking management can reduce traffic and improve urban life.',
    date: 'April 15, 2026',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80'
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] bg-white text-dark">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#da251d]">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest news, tips, and insights from the Copious team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="h-48 w-full">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs text-[#da251d] font-bold mb-2 uppercase tracking-wider">{post.date}</span>
              <h3 className="text-xl font-bold mb-3 text-dark">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <button className="text-[#da251d] font-bold text-sm hover:underline mt-auto inline-flex items-center">
                Read More <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
