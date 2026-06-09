import { FaFacebookF, FaInstagram, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/shared/copious.png';

export default function Footer() {
  return (
    <footer className="bg-[#0e1626] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 items-start">

          {/* Column 1: Google Map */}
          <div className="w-full lg:w-[300px] flex flex-col">
            <h4 className="font-bold text-lg mb-6">Our Location</h4>
            <div className="w-full rounded-xl overflow-hidden border border-gray-700 h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1304655175595!2d77.3762794742933!3d28.62585168438619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe52eb05379%3A0x8e9c143bfb81a1a9!2sCopious%20Infotech!5e0!3m2!1sen!2sin!4v1780427978835!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Copious Infotech Location"
              />
            </div>
          </div>

          {/* Column 2: Logo & Info */}
          <div className="w-full lg:w-[380px] flex flex-col items-start">
            {/* Logo */}
            <div className="bg-white p-2 rounded mb-6 inline-flex">
              <img src={logoImg} alt="Copious Logo" className="h-8" />
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Beautiful billing experience! Reports and sales tracking are well organized.
            </p>
            
            <h4 className="font-bold text-lg mb-4">Stay In Touch</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#0e1626] flex items-center justify-center hover:bg-[#E42A23] hover:text-white transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#0e1626] flex items-center justify-center hover:bg-[#E42A23] hover:text-white transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#0e1626] flex items-center justify-center hover:bg-[#E42A23] hover:text-white transition-colors">
                <FaPinterestP size={14} />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="w-full lg:w-[160px] flex flex-col">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">My Story</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Reach Me */}
          <div className="w-full lg:w-[260px] flex flex-col">
            <h4 className="font-bold text-lg mb-6">Reach Me</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaPhoneAlt size={10} />
                </div>
                <span>8882320033</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaEnvelope size={10} />
                </div>
                <span>Connect@copiousinfo.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0e1626] shrink-0">
                  <FaMapMarkerAlt size={10} />
                </div>
                <span>H-141 sector-63 noida</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs">
            © 2026 All Rights Reserved By Copious Infotech
          </p>
        </div>

      </div>
    </footer>
  )
}
