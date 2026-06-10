import React from "react";
import { Link } from "react-router-dom";

export default function SecurityBlog() {
  return (
    <div className="w-full pt-[120px] pb-20 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <p className="text-[#374151] text-lg leading-relaxed mb-6">
          Additionally, it helps companies comply with legal and regulatory
          requirements, prevent financial losses, and maintain a competitive
          edge. Good data security measures reduce the risks of cyber threats
          and data breaches, preserving the company's reputation and ensuring
          smooth operations.
        </p>
        <p className="text-[#374151] text-lg leading-relaxed mb-8">
          Data security is crucial for companies for several reasons:
        </p>

        <ul className="space-y-8 text-[#374151] text-lg list-disc pl-8 marker:text-[#da251d]">
          <li>
            <span className="font-bold text-black">Email security:</span>We need{" "}
            <Link
              to="/security/email"
              className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors"
            >
              email security
            </Link>{" "}
            to protect sensitive information from unauthorized access, prevent
            phishing and malware attacks, and ensure the integrity and
            confidentiality of communication.{" "}
            <Link
              to="/security/email"
              className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors"
            >
              Email security
            </Link>{" "}
            involves using encryption, spam filters, and authentication
            protocols to safeguard email exchanges.
          </li>
          <li>
            <span className="font-bold text-black">Endpoint security:</span>
            <Link
              to="/services/security"
              className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors"
            >
              Endpoint security
            </Link>{" "}
            is essential to protect devices like computers and mobile phones
            from cyber threats such as malware and unauthorized access. It
            ensures data integrity, compliance with regulations, and the overall
            security of networked systems. By implementing{" "}
            <Link
              to="/services/security"
              className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors"
            >
              endpoint security
            </Link>
            , organizations can monitor, detect, and respond to potential
            security incidents in real-time.
          </li>
          <li>
            <span className="font-bold text-black">Antivirus security:</span>
            <Link
              to="/security/antivirus"
              className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors"
            >
              Antivirus security
            </Link>{" "}
            is essential to protect your computer from malicious software, such
            as viruses, malware, and ransomware. It helps safeguard your
            personal information, prevents unauthorized access, and keeps your
            system running smoothly by detecting and removing threats before
            they can cause damage.
          </li>
        </ul>
      </div>
    </div>
  );
}
