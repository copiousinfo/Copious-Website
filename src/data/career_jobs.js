import bdaImg from '../assets/images/about/bda.jpg';
import androidImg from '../assets/images/about/android.jpg';
import phpImg from '../assets/images/about/php.jpg';

/**
 * Career job listings — single source of truth for the Careers page.
 *
 * To add a new opening:
 *  1. Place the PDF in `public/job-descriptions/` (e.g. `new-role.pdf`)
 *  2. Add a new entry below with a unique `id` and matching `pdf` filename
 *
 * PDF files (place in public/job-descriptions/):
 *  - business-development-executive.pdf
 *  - android-developer.pdf
 *  - php-developer.pdf
 */
export const careerJobs = [
  {
    id: 'business-development-executive',
    title: 'Business Development Executive',
    img: bdaImg,
    pdf: 'jd Bde.pdf',
    desc: [
      'A Business Development Executive is a key part of the company\'s growth team, responsible for identifying new business opportunities, building client relationships, and driving revenue.',
      'The roles and responsibilities include conducting market research to identify new prospects, managing the sales pipeline, and assuring high conversion rates by understanding client needs. They also participate in strategic planning to ensure quality in the overall sales experience.',
      'A Business Development Executive collaborates with cross-functional teams to define, design, and develop targeted outreach strategies. He or she is adept at negotiating contracts and delivering persuasive pitches. They are responsible for building long-term partnerships and driving B2B sales. They also participate in networking events and client meetings.',
      'A Business Development Executive is also referred to as a Sales Executive or Growth Specialist. Sometimes, jobs also require the professional to be experienced in digital marketing strategies and building comprehensive market analysis reports.',
    ],
  },
  {
    id: 'android-developer',
    title: 'Android Developer',
    img: androidImg,
    pdf: 'jd Android Developer_EX.pdf',
    desc: [
      'Copious Infotech is a leading technology company specializing in innovative mobile solutions. We are dedicated to creating high-quality apps that provide exceptional user experiences. Join our team and gain hands-on experience in a dynamic and fast-paced environment.',
      'We are looking for an Android Developer who possesses a passion for pushing mobile technologies to the limits. This Android app developer will work with our team of talented engineers to design and build the next generation of our mobile applications. Android programming works closely with other app development and technical teams.',
    ],
  },
  {
    id: 'php-developer',
    title: 'PHP Developer',
    img: phpImg,
    pdf: 'Jd php.pdf',
    desc: [
      'A PHP developer is part of the company\'s backend team, responsible for writing, testing, and maintaining PHP code for web applications.',
      'The roles and responsibilities include preparing server-side logic, managing database connections, and assuring high performance and responsiveness to requests from the front end. They also participate in front-end integration to ensure quality in the overall experience.',
      'A PHP developer collaborates with cross-functional teams to define, design, and develop new features. He or she is adept at solving problems and writing quality code. They are responsible for building backend code and APIs. They also participate in the design and testing process.',
      'A PHP developer is also referred to as a PHP expert or backend programmer. Sometimes, jobs also require the developer to be experienced in front-end technologies and building desktop and web applications.',
    ],
  },
];
