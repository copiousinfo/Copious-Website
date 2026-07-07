import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/shared/copious.png";
import { FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#4B0505] text-white pt-9 pb-4 sm:pb-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
          {/* Column 1: Google Map */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Our Location
            </h4>
            <div className="w-full rounded-xl border border-white/20 overflow-hidden h-[200px] sm:h-[220px] md:h-[240px] lg:h-[220px] xl:h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1304655175595!2d77.3762794742933!3d28.62585168438619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe52eb05379%3A0x8e9c143bfb81a1a9!2sCopious%20Infotech!5e0!3m2!1sen!2sin!4v1780427978835!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Copious Infotech Location"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col md:items-center">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Connect */}
          <div className="flex flex-col md:items-center">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Social Connect
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-200">
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaFacebookF size={12} />
                </div>
                <Link
                  to="https://www.facebook.com/p/Copious-Infotech-100088582103621"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaInstagram size={12} />
                </div>
                <Link
                  to="https://www.instagram.com/copious_infotech"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaLinkedin size={12} />
                </div>
                <Link
                  to="https://www.linkedin.com/company/copious-infotech"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaX size={12} />
                </div>
                <Link
                  to="https://x.com/copiousinfo"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  X (Formerly Twitter)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div className="flex flex-col">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaPhoneAlt size={12} />
                </div>
                <a
                  href="tel:8882320033"
                  className="hover:text-white transition-colors"
                >
                  8882320033
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaEnvelope size={12} />
                </div>
                <a
                  href="mailto:connect@copiousinfo.com"
                  className="hover:text-white transition-colors break-all"
                >
                  connect@copiousinfo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaMapMarkerAlt size={12} />
                </div>
                <address className="not-italic leading-relaxed text-sm">
                  H-141, Sector 63 Rd, Electronic City, H Block, Sector 63,
                  Noida, Uttar Pradesh 201309
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
      </div>
      <div className="border-t border-white/20 pt-4 flex items-center justify-center w-full">
        <p className="text-gray-300 text-xs sm:text-sm text-center px-4">
          © 2026 All Rights Reserved By Copious Infotech
        </p>
      </div>
    </footer>
  );
}
