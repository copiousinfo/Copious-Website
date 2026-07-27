import client1 from "../../../assets/images/clientLogo/Balmer Lawrie.webp";
import client2 from "../../../assets/images/clientLogo/canwinn.webp";
import client3 from "../../../assets/images/clientLogo/Holiday Club.webp";
import client4 from "../../../assets/images/clientLogo/Jeena.webp";
import client5 from "../../../assets/images/clientLogo/justdial.webp";
import client6 from "../../../assets/images/clientLogo/Okara Roadways.webp";
import client7 from "../../../assets/images/clientLogo/Radiant.webp";
import client8 from "../../../assets/images/clientLogo/RAINET.webp";
import client9 from "../../../assets/images/clientLogo/Shivit.webp";
import client10 from "../../../assets/images/clientLogo/Shree AZAD.webp";
import client11 from "../../../assets/images/clientLogo/sugam.webp";
import client12 from "../../../assets/images/clientLogo/V19.webp";

const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
];

// Duplicate for infinite effect
const logos = [...clients, ...clients];

const ClientCard = ({ logo }) => (
  <div className="mx-5 flex shrink-0 items-center justify-center rounded-xl bg-white shadow-md">
    <img
      src={logo}
      alt="Client"
      className="h-11 object-contain transition-all duration-300 hover:grayscale-0 hover:scale-110"
    />
  </div>
);

export default function OurClients() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Our Clients</h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Trusted by leading companies.
        </p>

        {/* First Row */}
        <div className="marquee">
          <div className="marquee-content">
            {logos.map((logo, i) => (
              <ClientCard key={i} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
