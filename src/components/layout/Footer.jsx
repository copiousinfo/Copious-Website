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
    <footer className="bg-[#4B0505] text-white pt-20 pb-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Google Map */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4">Our Location</h4>
            <div className="w-full rounded-xl border border-gray-300 overflow-hidden h-[220px] md:h-[260px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1304655175595!2d77.3762794742933!3d28.62585168438619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe52eb05379%3A0x8e9c143bfb81a1a9!2sCopious%20Infotech!5e0!3m2!1sen!2sin!4v1780427978835!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Copious Infotech Location"
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:ml-20">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
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

          {/* Column 3: Reach Me */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4">Reach Us</h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-center gap-3">
                <div className="mt-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaPhoneAlt size={12} />
                </div>
                <a href="tel:8882320033" className="hover:underline">
                  8882320033
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="mt-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaEnvelope size={12} />
                </div>
                <a
                  href="mailto:connect@copiousinfo.com"
                  className="hover:underline"
                >
                  connect@copiousinfo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="mt-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaMapMarkerAlt size={12} />
                </div>
                <address className="not-italic">
                  H-141, Sector 63 Rd, Electronic City, H Block, Sector 63,
                  Noida, Uttar Pradesh 201309
                </address>
              </li>
              <li className="flex items-center gap-3 cursor-pointer">
                <div className="mt-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaFacebookF size={12} />
                </div>
                <Link
                  to="https://www.facebook.com/p/Copious-Infotech-100088582103621"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </Link>
              </li>
              <li className="flex items-center gap-3 cursor-pointer">
                <div className="mt-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaInstagram size={12} />
                </div>
                <Link
                  to="https://www.instagram.com/copious_infotech"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li className="flex items-center gap-3 cursor-pointer">
                <div className="mt-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaLinkedin size={12} />
                </div>
                <Link
                  to="https://www.linkedin.com/company/copious-infotech"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="flex items-center gap-3 cursor-pointer">
                <div className="mt-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaX size={12} />
                </div>
                <Link
                  to="https://x.com/copiousinfo"
                  target="_blank"
                  className="hover:underline"
                >
                  X (Formerly Twitter)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-400 pt-4 flex  items-center justify-center">
          <p className="text-gray-300 text-center md:text-left">
            © 2026 All Rights Reserved By Copious Infotech
          </p>
        </div>
      </div>
    </footer>
  );
}
