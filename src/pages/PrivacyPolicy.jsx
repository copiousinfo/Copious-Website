import React from "react";

function PrivacyPolicy() {
  return (
    <div className="mt-28 px-5 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-10">Privacy Policy</h1>
      <span className="font-medium underline">Privacy Policy</span>
      <p className="text-sm my-4 tracking-wide leading-6">
        Copious Infotech Private Limited ("we," "us," or "our") is committed to
        protecting the privacy and security of your personal information. This
        Privacy Policy explains how we collect, use, disclose, and protect your
        information when you visit our website (https://www.copiousinfo.com/)
        (the "Website") or interact with us through other means, such as email
        or phone.{" "}
      </p>
      {/* policy-1 */}
      <div className="my-4">
        <span className="">1- Information We Collect</span>
        <p className="my-3">
          We may collect the following types of information from you:
        </p>
        <ol className="list-[lower-alpha] px-8  space-y-3">
          <li className="">
            <b>Personal Information:</b> This may include your name, email
            address, phone number, company name, job title, and other
            information you voluntarily provide to us, such as when you contact
            us through our website or request information about our services.
          </li>
          <li className="">
            <b> Usage Information:</b> We may automatically collect information
            about your use of our Website, such as your IP address, browser
            type, operating system, referring URLs, and pages visited. This
            information may be collected using cookies or other tracking
            technologies.{" "}
          </li>
          <li className="">
            <b>Information from Third Parties:</b> We may receive information
            about you from third-party sources, such as public databases,
            marketing partners, and social media platforms.{" "}
          </li>
        </ol>
      </div>
      {/* policy-2 */}
      <div className="my-4">
        <span className="">2- How We Collect Information</span>
        <p className="my-3">
          We collect information directly from you when you provide it to us,
          such as when you fill out a contact form, subscribe to our newsletter,
          or request a quote. We also collect information automatically through
          the use of cookies and other tracking technologies.
        </p>
      </div>
      {/* policy-3 */}
      <div className="my-4">
        <span className="">3- How We Use Information</span>
        <p className="my-3">
          We may use your information for the following purposes:
        </p>
        <ol className="list-[lower-alpha] px-8  space-y-3">
          <li className="">
            To respond to your inquiries and fulfill your requests.
          </li>
          <li className="">
            To provide you with information about our services and products.
          </li>
          <li className="">To personalize your experience on our Website.</li>
          <li className="">To improve our Website and services</li>
          <li className="">
            To communicate with you about marketing and promotional offers.
          </li>
          <li className="">
            To comply with legal and regulatory requirements.
          </li>
        </ol>
      </div>
      {/* policy-4 */}
      <div className="my-4">
        <span className="">4- Information Sharing</span>
        <p className="my-3">
          We may share your information with the following third parties:
        </p>
        <ol className="list-[lower-alpha] px-8  space-y-3">
          <li className="">
            <b>Service Providers:</b> We may share your information with
            third-party service providers who assist us with our business
            operations, such as website hosting, data analysis, and customer
            support.
          </li>
          <li className="">
            <b>Business Partners:</b> We may share your information with our
            business partners for joint marketing purposes.
          </li>
          <li className="">
            <b>Legal and Regulatory Requirements:</b>We may disclose your
            information to comply with applicable laws, regulations, and legal
            processes, such as subpoenas and court orders.
          </li>
        </ol>
      </div>
      {/* policy-5 */}
      <div className="my-4">
        <span className="">5- Data Security</span>
        <p className="my-3">
          We take reasonable measures to protect your information from
          unauthorized access, use, and disclosure. However, no method of
          transmission over the internet or method of electronic storage is
          completely secure. Therefore, we cannot guarantee the absolute
          security of any information you transmit to us or store on our
          systems.
        </p>
      </div>
      {/* policy-6 */}
      <div className="my-4">
        <span className="">6- Cookies and Tracking Technologies</span>
        <p className="my-3">
          We use cookies and other tracking technologies to collect information
          about your use of our Website. Cookies are small text files that are
          stored on your computer or device. You can control the use of cookies
          through your browser settings.
        </p>
      </div>
      {/* policy-7 */}
      <div className="my-4">
        <span className="">7- Chidren's Policy</span>
        <p className="my-3">
          Our Website is not intended for children under the age of 13. We do
          not knowingly collect personal information from children under 13.
        </p>
      </div>
      {/* policy-8 */}
      <div className="my-4">
        <span className="">8. Changes to This Privacy Policy</span>
        <p className="my-3">
          We may update this Privacy Policy from time to time. We will notify
          you of any material changes by posting the updated Privacy Policy on
          our Website
        </p>
      </div>
      {/* policy-9 */}
      <div className="my-4">
        <span className="">9. Contact Us</span>
        <p className="my-3">
          If you have any questions about this Privacy Policy, please contact us
          at connect@copiousinfo.com
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
