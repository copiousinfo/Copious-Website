import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import logoImg from '../assets/copious.png';

/* ─── Nav Structure ───────────────────────────────────────────── */
const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Solutions',
    children: [
      { name: 'Ticketing', path: '/solutions/ticketing' },
      { name: 'Billing', path: '/solutions/billing' },
      { name: 'Parking', path: '/solutions/parking' },
      { name: 'Event Management', path: '/solutions/event-management' },
    ],
  },
  {
    name: 'Services',
    children: [
      { name: 'Bulk SMS', path: '/services/bulk-sms' },
      { name: 'Bulk Web WhatsApp', path: '/services/bulk-web-whatsapp' },
      {
        name: 'Consulting',
        children: [
          { name: 'IT Consulting Services', path: '/services/it-consulting' },
          { name: 'Business Consulting Services', path: '/services/business-consulting' },
        ],
      },
      { name: 'Microsoft', path: '/services/microsoft' },
      { name: 'Cloud Service', path: '/services/cloud-service' },
      { name: 'Backup', path: '/services/backup' },
    ],
  },
  {
    name: 'Security',
    children: [
      { name: 'End Point Security', path: '/services/security' },
      { name: 'Email Security', path: '/security/email' },
      { name: 'Antivirus Security', path: '/security/antivirus' },
    ],
  },
  {
    name: 'Cloud',
    children: [
      { name: 'AWS', path: '/services/cloud-service_aws' },
      { name: 'Azure', path: '/services/cloud-service_azure' },
      { name: 'JioCloud', path: '/services/cloud-service_jio' },
    ],
  },
  { name: 'Blog', path: '/blog' },
  {
    name: 'Company',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Career', path: '/career' },
      { name: 'FAQ', path: '/faq' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

/* ─── Desktop Dropdown ────────────────────────────────────────── */
function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null);
  const closeTimer = useRef(null);
  const subCloseTimer = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const openMenu = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setSubOpen(null);
    }, 120); // 120ms delay — enough time to move into the dropdown
  }, []);

  const openSub = useCallback((name) => {
    clearTimeout(subCloseTimer.current);
    setSubOpen(name);
  }, []);

  const closeSub = useCallback(() => {
    subCloseTimer.current = setTimeout(() => setSubOpen(null), 120);
  }, []);

  useEffect(() => () => {
    clearTimeout(closeTimer.current);
    clearTimeout(subCloseTimer.current);
  }, []);

  const isActive = item.children?.some(c =>
    c.path === location.pathname ||
    c.children?.some(sc => sc.path === location.pathname)
  );

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      {/* Trigger Button */}
      <button
        className={`flex items-center gap-1 text-[13px] xl:text-[14px] font-bold transition-colors hover:text-[#da251d] py-2 ${
          isActive ? 'text-[#da251d]' : 'text-[#4b5563]'
        }`}
      >
        {item.name}
        <FaChevronDown
          size={9}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Invisible bridge so mouse can travel to dropdown without gap closing it */}
      {open && <div className="absolute top-full left-0 w-full h-2 z-[199]" />}

      {/* Dropdown Panel */}
      {open && (
        <div
          className="absolute top-[calc(100%+8px)] left-0 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[200px] z-[200]"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          {item.children.map((child) =>
            child.children ? (
              <div
                key={child.name}
                className="relative"
                onMouseEnter={() => { openMenu(); openSub(child.name); }}
                onMouseLeave={() => { closeSub(); }}
              >
                <button className="w-full flex items-center justify-between px-4 py-2.5 text-[13.5px] text-[#374151] hover:bg-red-50 hover:text-[#da251d] font-semibold transition-colors rounded-sm">
                  {child.name}
                  <FaChevronRight size={9} />
                </button>
                {/* Sub-dropdown */}
                {subOpen === child.name && (
                  <div
                    className="absolute left-full top-0 ml-1 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[230px] z-[210]"
                    onMouseEnter={() => { openMenu(); openSub(child.name); }}
                    onMouseLeave={closeSub}
                  >
                    {child.children.map((sc) => (
                      <button
                        key={sc.name}
                        onClick={() => { navigate(sc.path); setOpen(false); setSubOpen(null); }}
                        className={`w-full text-left px-4 py-2.5 text-[13.5px] font-semibold transition-colors hover:bg-red-50 hover:text-[#da251d] rounded-sm ${
                          location.pathname === sc.path ? 'text-[#da251d] bg-red-50' : 'text-[#374151]'
                        }`}
                      >
                        {sc.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={child.name}
                onClick={() => { navigate(child.path); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-[13.5px] font-semibold transition-colors hover:bg-red-50 hover:text-[#da251d] rounded-sm ${
                  location.pathname === child.path ? 'text-[#da251d] bg-red-50' : 'text-[#374151]'
                }`}
              >
                {child.name}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Accordion Item ───────────────────────────────────── */
function MobileAccordion({ item, depth = 0, onNavigate }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  if (!item.children) {
    return (
      <button
        onClick={() => { navigate(item.path); onNavigate(); }}
        className={`w-full text-left py-3 font-semibold text-[15px] transition-colors border-b border-white/10 ${
          location.pathname === item.path ? 'text-[#da251d]' : 'text-gray-200'
        }`}
        style={{ paddingLeft: `${(depth + 1) * 16}px` }}
      >
        {item.name}
      </button>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 font-bold text-[15px] text-white"
        style={{ paddingLeft: `${(depth + 1) * 16}px`, paddingRight: '16px' }}
      >
        {item.name}
        <FaChevronDown
          size={10}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[600px]' : 'max-h-0'}`}
      >
        <div className="bg-black/25 pb-1">
          {item.children.map((child) => (
            <MobileAccordion
              key={child.name}
              item={child}
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Navbar ─────────────────────────────────────────────── */
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <header className="w-full z-[100] fixed top-0 left-0 right-0 shadow-sm bg-white">

      {/* Top Announcement Bar */}
      <div className="bg-[#1A1A1A] w-full py-1.5 flex justify-center items-center">
        <span className="text-white text-[11px] tracking-wider font-medium">
          Welcome to Copious Info
        </span>
      </div>

      {/* Main Navbar Row */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[64px]">

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img src={logoImg} alt="Copious Logo" className="h-9 lg:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-16">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[13px] xl:text-[14px] font-bold px-2 xl:px-2.5 py-2 transition-colors hover:text-[#da251d] ${
                    item.path === '/blog'
                      ? location.pathname.startsWith('/blog')
                        ? 'text-[#da251d]'
                        : 'text-[#4b5563]'
                      : location.pathname === item.path
                        ? 'text-[#da251d]'
                        : 'text-[#4b5563]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="hidden sm:block bg-[#da251d] text-white px-4 py-2 rounded-md font-bold hover:bg-[#c02019] transition-colors text-[13px] xl:text-[14px] whitespace-nowrap"
            >
              Free Live Demo
            </button>
            <button
              className="lg:hidden p-2 text-[#1A1A1A]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      <div
        className={`lg:hidden bg-[#1A1A1A] overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[80vh] border-t border-[#2f2f2f]' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-5">
          {navItems.map((item) => (
            <MobileAccordion
              key={item.name}
              item={item}
              onNavigate={() => setIsOpen(false)}
            />
          ))}
          <button
            onClick={() => { navigate('/contact'); setIsOpen(false); }}
            className="sm:hidden w-full mt-4 bg-[#da251d] text-white py-3 rounded-md font-bold text-[15px]"
          >
            Free Live Demo
          </button>
        </div>
      </div>

    </header>
  );
}
