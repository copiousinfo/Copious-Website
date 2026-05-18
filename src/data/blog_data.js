import smsImage from '../assets/images/services/general/bulksms.png';
import whatsappImage from '../assets/images/services/general/whatsapp.jpg';
import cloudImage from '../assets/images/services/cloud/cloud-hero.jpg';
import securityImage from '../assets/images/services/security/antivirus.jpg';
import bulksms1 from '../assets/images/services/general/bulksms1.jpg';

import reading1 from '../assets/images/blog/blogreading1.jpg';
import reading2 from '../assets/images/blog/blogreading2.jpg';
import reading3 from '../assets/images/blog/blogreading3.jpg';

export const blogData = [
  {
    id: 1,
    type: 'bulk-sms',
    title: 'Why we need Bulk SMS?',
    excerpt: 'Bulk SMS enables businesses to send large volumes of text messages to mobile phones instantly. It is highly effective for marketing, notifications, alerts, and critical communication to reach customers directly.',
    date: 'Jan 25, 2026',
    image: bulksms1,
    author: 'Vishal Shrisvastav',
    heroImage: reading2,
    inlineImage1: reading1,
    inlineImage2: reading3,
    sections: [
      {
        title: 'Instant Communication at Scale',
        text: 'Bulk SMS remains one of the most effective ways to reach a large audience instantly. With open rates exceeding 98%, it ensures your message is seen within minutes of being sent.',
        list: [
          'Direct and immediate delivery to customers.',
          'High engagement compared to email marketing.',
          'Cost-effective for large scale campaigns.',
          'No internet connection required for recipients.'
        ]
      },
      {
        title: 'Versatility in Business Operations',
        text: 'From marketing promotions to critical alerts and OTPs, Bulk SMS serves multiple purposes across various industries including retail, banking, and logistics.',
        image: reading1
      }
    ]
  },
  {
    id: 2,
    type: 'bulk-whatsapp',
    title: 'Why we need Bulk web Whatsapp?',
    excerpt: 'Reach your customers where they are most active with professional WhatsApp marketing. Bulk messaging allows you to engage with your audience through their preferred chat platform with rich media support.',
    date: 'Jan 26, 2026',
    image: whatsappImage,
    author: 'Vishal Shrisvastav',
    heroImage: reading2,
    inlineImage1: reading1,
    inlineImage2: reading3,
    sections: [
      {
        title: 'Enhancing Customer Interactions',
        text: "Bulk WhatsApp messaging enables automation of responses and efficient tracking of customer chats. By using this app, companies can significantly enhance their customer service and support operations. It can be a powerful tool for businesses for several reasons. Here's a detailed look at why businesses might need it and how it can be beneficial:",
        list: [
          'Mass Messaging: Businesses can send messages to a large number of customers simultaneously. This is particularly useful for announcements, promotions, or important updates.',
          'Time-Saving: Automating bulk messages saves time compared to manually sending individual messages to each customer.',
          'Quick Response: Businesses can use WhatsApp for customer support, addressing queries and issues in real time.',
          'Automated Responses: Automated messages can handle common queries, providing instant responses to customers and freeing up human resources for more complex issues.',
          'Customer Feedback: Easily collect feedback through surveys or direct questions, helping businesses improve their products and services.',
          'Market Research: Conduct market research to understand customer preferences and trends.'
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'cloud-service',
    title: 'Why we need Cloud Service?',
    excerpt: 'Scalable, secure, and accessible infrastructure to power your modern business operations. Cloud services provide the flexibility to grow your storage and computing power without heavy upfront investments.',
    date: 'Jan 27, 2026',
    image: cloudImage,
    author: 'Vishal Shrisvastav',
    heroImage: reading2,
    inlineImage1: reading1,
    inlineImage2: reading3,
    sections: [
      {
        title: 'The Foundation of Digital Transformation',
        text: 'Cloud services provide the flexibility and scalability needed to grow your business without the heavy upfront costs of physical infrastructure.',
        list: [
          'Pay-as-you-go pricing models.',
          'Automatic updates and security patches.',
          'Enhanced collaboration for remote teams.',
          'Disaster recovery and data backup.'
        ]
      },
      {
        title: 'Security and Reliability',
        text: 'Modern cloud providers offer enterprise-grade security and 99.9% uptime, ensuring your business data is always safe and accessible.',
        image: reading1
      }
    ]
  },
  {
    id: 4,
    type: 'security',
    title: 'Why we need Security?',
    excerpt: 'Protect your digital assets and customer data from evolving cyber threats with multi-layered defense. Ensure business continuity and build customer trust by securing your sensitive information today.',
    date: 'Jan 28, 2026',
    image: securityImage,
    author: 'Vishal Shrisvastav',
    heroImage: reading2,
    inlineImage1: reading1,
    inlineImage2: reading3,
    sections: [
      {
        title: 'Defending Against Modern Threats',
        text: 'As cyber threats become more sophisticated, robust security measures are essential to protect your business reputation and sensitive data.',
        list: [
          'Prevention of data breaches and theft.',
          'Protection against malware and ransomware.',
          'Compliance with data protection regulations.',
          'Business continuity and peace of mind.'
        ]
      },
      {
        title: 'A Proactive Approach',
        text: 'Investing in security today saves millions in potential losses tomorrow. A multi-layered defense strategy is the best way to stay protected.',
        image: reading2
      }
    ]
  }
];
