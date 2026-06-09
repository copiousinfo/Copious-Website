import React from 'react';
import aboutHero from '../assets/images/about/about-hero.jpg';

const privacySections = [
  {
    title: '1. Information We Collect',
    content: 'We may collect the following types of information from you:',
    items: [
      {
        label: 'Personal Information',
        text: 'This may include your name, email address, phone number, company name, job title, and other information you voluntarily provide to us, such as when you contact us through our website or request information about our services.',
      },
      {
        label: 'Usage Information',
        text: 'We may automatically collect information about your use of our Website, such as your IP address, browser type, operating system, referring URLs, and pages visited. This information may be collected using cookies or other tracking technologies.',
      },
      {
        label: 'Information from Third Parties',
        text: 'We may receive information about you from third-party sources, such as public databases, marketing partners, and social media platforms.',
      },
    ],
  },
  {
    title: '2. How We Collect Information',
    content:
      'We collect information directly from you when you provide it to us, such as when you fill out a contact form, subscribe to our newsletter, or request a quote. We also collect information automatically through the use of cookies and other tracking technologies.',
  },
  {
    title: '3. How We Use Information',
    content: 'We may use your information for the following purposes:',
    bullets: [
      'To respond to your inquiries and fulfill your requests.',
      'To provide you with information about our services and products.',
      'To personalize your experience on our Website.',
      'To improve our Website and services.',
      'To communicate with you about marketing and promotional offers.',
      'To comply with legal and regulatory requirements.',
    ],
  },
  {
    title: '4. Information Sharing',
    content: 'We may share your information with the following third parties:',
    items: [
      {
        label: 'Service Providers',
        text: 'We may share your information with third-party service providers who assist us with our business operations, such as website hosting, data analysis, and customer support.',
      },
      {
        label: 'Business Partners',
        text: 'We may share your information with our business partners for joint marketing purposes.',
      },
      {
        label: 'Legal and Regulatory Requirements',
        text: 'We may disclose your information to comply with applicable laws, regulations, and legal processes, such as subpoenas and court orders.',
      },
    ],
  },
  {
    title: '5. Data Security',
    content:
      'We take reasonable measures to protect your information from unauthorized access, use, and disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure. Therefore, we cannot guarantee the absolute security of any information you transmit to us or store on our systems.',
  },
  {
    title: '6. Cookies and Tracking Technologies',
    content:
      'We use cookies and other tracking technologies to collect information about your use of our Website. Cookies are small text files that are stored on your computer or device. You can control the use of cookies through your browser settings.',
  },
  {
    title: "7. Children's Privacy",
    content:
      'Our Website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.',
  },
  {
    title: '8. Changes to This Privacy Policy',
    content:
      'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated Privacy Policy on our Website.',
  },
  {
    title: '9. Contact Us',
    content: (
      <>
        If you have any questions about this Privacy Policy, please contact us at{' '}
        <a
          href="mailto:Connect@copiousinfo.com"
          className="text-[#da251d] font-semibold hover:underline"
        >
          Connect@copiousinfo.com
        </a>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="w-full pt-[92px] bg-[#202329]">
      <section className="w-full bg-[#202329]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-7">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold">Privacy Policy</h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto">
        <div
          className="relative h-[250px] sm:h-[300px] lg:h-[340px] bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <span className="bg-[#da251d] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Legal
            </span>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3">
              Privacy Policy
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm max-w-3xl">
              How Copious Infotech collects, uses, and protects your information.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#efefef]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10">
            <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.85] mb-8">
              Copious Infotech Private Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
              committed to protecting the privacy and security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and protect your information
              when you visit our Website or interact with us through other means, such as email or
              phone.
            </p>

            <div className="space-y-8">
              {privacySections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-[#1f2937] text-lg sm:text-xl font-bold mb-3">
                    {section.title}
                  </h3>

                  {section.content && (
                    <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.85] mb-3">
                      {section.content}
                    </p>
                  )}

                  {section.items?.map((item) => (
                    <p
                      key={item.label}
                      className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.85] mb-3"
                    >
                      <span className="font-semibold text-[#1f2937]">{item.label}: </span>
                      {item.text}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="list-disc pl-6 space-y-2 text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.85] marker:text-[#da251d]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
