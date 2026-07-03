import React from "react";
import SectionHeading from "../../ui/SectionHeading";
import ContentCard from "../../ui/ContentCard";
import ticketingImg from "../../../assets/images/solutions/ticketing/ticketHero.jpeg";
import parkingImg from "../../../assets/images/solutions/parking/parkingheader.jpeg";
import eventImg from "../../../assets/images/solutions/event/event header.jpeg";
import acurestroImg from "../../../assets/images/solutions/acurestro/acurestro hero.jpeg";
import vyoriseImg from "../../../assets/images/solutions/vyorise/vyorise header.jpeg";
import voterManagementImg from "../../../assets/images/solutions/voter-management/voter-management-header.jpeg";

const solutionsData = [
  {
    id: 1,
    slug: "ticketing",
    title: "Ticketing",
    image: ticketingImg,
    description:
      "Our ticket management software helps businesses handle customer service requests efficiently. Track, categorize, and resolve incoming tickets to deliver effective and timely support.",
  },
  {
    id: 2,
    slug: "parking",
    title: "Parking",
    image: parkingImg,
    description:
      "Optimize your parking operations with smart management solutions. Ensure seamless entry and exit, track availability, and provide a hassle-free parking experience for your customers.",
  },
  {
    id: 3,
    slug: "event-management",
    title: "Event Management",
    image: eventImg,
    description:
      "Streamline your events from planning to execution with our comprehensive event management solution. Handle registrations, ticketing, attendee tracking, and real-time reporting all in one place.",
  },
  {
    id: 4,
    slug: "acurestro",
    title: "Acurestro",
    image: acurestroImg,
    description:
      "Acurestro is a powerful restaurant and retail POS solution designed to streamline order management, billing, inventory, and customer experience — all from a single unified platform.",
  },
  {
    id: 5,
    slug: "vyorise",
    title: "Vyorise",
    image: vyoriseImg,
    description:
      "Vyorise delivers cutting-edge business management tools tailored for modern enterprises. Enhance your operational efficiency, data insights, and team collaboration with our smart platform.",
  },
  {
    id: 6,
    slug: "voter-management",
    title: "Voter Management",
    image: voterManagementImg,
    description:
      "Simplify your election campaign with a powerful Voter Management System designed to organize voter data, improve field operations, and enhance voter outreach.",
  },
];

export default function Solutions() {
  return (
    <section className="w-full bg-white py-12">
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
