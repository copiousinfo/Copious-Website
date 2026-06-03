/**
 * navLinks — Navigation structure for Navbar
 * Each item can have:
 *   - name    : Display label
 *   - path    : Route path (leaf items only)
 *   - children: Array of child items (creates a dropdown)
 */
export const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Solutions',
    children: [
      { name: 'Ticketing',         path: '/solutions/ticketing' },
      { name: 'Billing',           path: '/solutions/billing' },
      { name: 'Parking',           path: '/solutions/parking' },
      { name: 'Event Management',  path: '/solutions/event-management' },
      { name: 'Acurestro',         path: '/solutions/acurestro' },
      { name: 'Vyorise',           path: '/solutions/vyorise' },
    ],
  },
  {
    name: 'Services',
    children: [
      { name: 'Bulk SMS',           path: '/services/bulk-sms' },
      { name: 'Bulk Whatsapp Business', path: '/services/bulk-web-whatsapp' },
      { name: 'Microsoft',      path: '/services/microsoft' },
      { name: 'Cloud Service',  path: '/services/cloud-service' },
      { name: 'Backup',         path: '/services/backup' },
    ],
  },
  {
    name: 'Security',
    children: [
      { name: 'End Point Security', path: '/services/security' },
      { name: 'Email Security',     path: '/security/email' },
      { name: 'Antivirus Security', path: '/security/antivirus' },
    ],
  },
  {
    name: 'Cloud',
    children: [
      { name: 'AWS',      path: '/services/cloud-service_aws' },
      { name: 'Azure',    path: '/services/cloud-service_azure' },
    ],
  },
  { name: 'Blog', path: '/blog' },
  {
    name: 'Company',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Career',   path: '/career' },
      { name: 'FAQ',      path: '/faq' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];
