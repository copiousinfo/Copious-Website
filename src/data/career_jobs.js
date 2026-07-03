import bdaImg from "../assets/images/about/bda.jpg";
import androidImg from "../assets/images/about/android.jpg";
import phpImg from "../assets/images/about/php.jpg";
import digitalMarketingImg from "../assets/images/about/digital-marketing-executive.jpeg";
import frontendDevImg from "../assets/images/about/frontend-developer.jpeg";

/**
 * Career job listings — single source of truth for the Careers page.
 *
 * To add a new opening:
 *  1. Place the PDF in `public/job-descriptions/` (e.g. `new-role.pdf`)
 *  2. Add a new entry below with a unique `id` and matching `pdf` filename
 *
 * PDF files (place in public/job-descriptions/):
 *  - jd Bde.pdf
 *  - jd Android Developer_EX.pdf
 *  - Jd php.pdf
 */
export const careerJobs = [
  {
    id: "social-mdeia-marketing",
    title: "Digital Marketing Executive",
    img: digitalMarketingImg,
    pdf: "jd Social Media Marketing.pdf",
    desc: [
      "A Social Media Executive is responsible for managing the company's online presence by creating engaging content, growing brand awareness, and building strong connections with the target audience across social media platforms.",
      "The roles and responsibilities include planning and publishing posts, designing creative content, monitoring audience engagement, and managing social media campaigns. They also analyze performance metrics to improve reach, engagement, and overall campaign effectiveness.",
    ],
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    img: bdaImg,
    pdf: "jd Bde.pdf",
    desc: [
      "A Business Development Executive is a key part of the company's growth team, responsible for identifying new business opportunities, building client relationships, and driving revenue.",
      "The roles and responsibilities include conducting market research to identify new prospects, managing the sales pipeline, and assuring high conversion rates by understanding client needs. They also participate in strategic planning to ensure quality in the overall sales experience.",
    ],
  },
  {
    id: "android-developer",
    title: "Android Developer",
    img: androidImg,
    pdf: "jd Android Developer_EX.pdf",
    desc: [
      "Copious Infotech is a leading technology company specializing in innovative mobile solutions. We are dedicated to creating high-quality apps that provide exceptional user experiences. Join our team and gain hands-on experience in a dynamic and fast-paced environment.",
      "We are looking for an Android Developer who possesses a passion for pushing mobile technologies to the limits. This Android app developer will work with our team of talented engineers to design and build the next generation of our mobile applications. Android programming works closely with other app development and technical teams.",
    ],
  },
  {
    id: "php-developer",
    title: "PHP Developer",
    img: phpImg,
    pdf: "Jd php.pdf",
    desc: [
      "A PHP developer is part of the company's backend team, responsible for writing, testing, and maintaining PHP code for web applications.",
      "The roles and responsibilities include preparing server-side logic, managing database connections, and assuring high performance and responsiveness to requests from the front end. They also participate in front-end integration to ensure quality in the overall experience.",
      "A PHP developer collaborates with cross-functional teams to define, design, and develop new features. They also participate in the design and testing process.",
    ],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    img: frontendDevImg,
    pdf: "Job Description frontend intern.pdf",
    desc: [
      "A Frontend Developer is responsible for creating responsive, user-friendly, and visually appealing web interfaces that deliver an excellent user experience across all modern devices and browsers.",
      "The roles and responsibilities include developing interactive user interfaces using HTML, CSS, JavaScript, and modern frontend frameworks (React.js, TailwindCSS). They ensure websites are fast, responsive, and optimized for performance while maintaining clean and reusable code.",
      "A Frontend Developer collaborates with UI/UX designers and backend developers to transform designs into functional web applications. ",
    ],
  },
];
