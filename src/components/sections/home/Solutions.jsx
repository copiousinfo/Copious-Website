import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import ContentCard from '../../ui/ContentCard';
import billingImg from '../../../assets/images/solutions/billing/billing-hero.jpg';
import ticketingImg from '../../../assets/images/solutions/ticketing/ticket-hero.jpg';
import parkingImg from '../../../assets/images/solutions/parking/parking-hero.jpg';

const solutionsData = [
  {
    id: 1,
    slug: 'billing',
    title: 'Billing',
    image: billingImg,
    description:
      'Simplify your billing processes with our advanced, automated billing software. Generate invoices, track payments, and manage financial records effortlessly to boost your business efficiency.',
  },
  {
    id: 2,
    slug: 'ticketing',
    title: 'Ticketing',
    image: ticketingImg,
    description:
      'Our ticket management software helps businesses handle customer service requests efficiently. Track, categorize, and resolve incoming tickets to deliver effective and timely support.',
  },
  {
    id: 3,
    slug: 'parking',
    title: 'Parking',
    image: parkingImg,
    description:
      'Optimize your parking operations with smart management solutions. Ensure seamless entry and exit, track availability, and provide a hassle-free parking experience for your customers.',
  },
];

export default function Solutions() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading>Our Solutions</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {solutionsData.map((solution) => (
            <ContentCard
              key={solution.id}
              image={solution.image}
              imageAlt={solution.title}
              title={solution.title}
              description={solution.description}
              to={`/solutions/${solution.slug}`}
              ctaLabel="More Detail"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
