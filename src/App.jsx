import { Routes, Route } from 'react-router-dom'
import useScrollToTop from './hooks/useScrollToTop'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/blog/Blog'
import BlogReading from './pages/blog/BlogReading'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import SolutionsDetail from './pages/solutions/SolutionsDetail'
import BillingDetail from './pages/solutions/BillingDetail'
import ParkingDetail from './pages/solutions/ParkingDetail'
import EventManagementDetail from './pages/solutions/EventManagementDetail'
import AcurestroDetail from './pages/solutions/AcurestroDetail'
import VyoriseDetail from './pages/solutions/VyoriseDetail'
import ServiceDetail from './pages/services/ServiceDetail'
import SecurityDetail from './pages/services/security/SecurityDetail'
import EmailSecurity from './pages/services/security/EmailSecurity'
import AntivirusSecurity from './pages/services/security/AntivirusSecurity'
import BulkWebWhatsApp from './pages/services/BulkWebWhatsApp'
import MicrosoftDetail from './pages/services/MicrosoftDetail'
import BackupDetail from './pages/services/BackupDetail'
import AWSCloudDetail from './pages/services/cloud/AWSCloudDetail'
import AzureCloudDetail from './pages/services/cloud/AzureCloudDetail'
import JioCloudDetail from './pages/services/cloud/JioCloudDetail'
import CloudServiceHome from './pages/services/cloud/CloudServiceHome'
import Career from './pages/Career'

import BulkWhatsAppBlog from './pages/blog/BulkWhatsAppBlog'
import CloudServiceBlog from './pages/blog/CloudServiceBlog'
import SecurityBlog from './pages/blog/SecurityBlog'
import BulkSMSBlog from './pages/blog/BulkSMSBlog'

function App() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/bulk-whatsapp" element={<BulkWhatsAppBlog />} />
          <Route path="/blog/cloud-service" element={<CloudServiceBlog />} />
          <Route path="/blog/security" element={<SecurityBlog />} />
          <Route path="/blog/bulk-sms" element={<BulkSMSBlog />} />
          <Route path="/blog/:type" element={<BlogReading />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/solutions/billing" element={<BillingDetail />} />
          <Route path="/solutions/parking" element={<ParkingDetail />} />
          <Route path="/solutions/event-management" element={<EventManagementDetail />} />
          <Route path="/solutions/acurestro" element={<AcurestroDetail />} />
          <Route path="/solutions/vyorise" element={<VyoriseDetail />} />
          <Route path="/solutions/:slug" element={<SolutionsDetail />} />
          <Route path="/services/security" element={<SecurityDetail />} />
          <Route path="/security/email" element={<EmailSecurity />} />
          <Route path="/security/antivirus" element={<AntivirusSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services/cloud-service" element={<CloudServiceHome />} />
          <Route path="/services/cloud-service_aws" element={<AWSCloudDetail />} />
          <Route path="/services/cloud-service_azure" element={<AzureCloudDetail />} />
          <Route path="/services/cloud-service_jio" element={<JioCloudDetail />} />
          <Route path="/services/bulk-web-whatsapp" element={<BulkWebWhatsApp />} />
          <Route path="/services/microsoft" element={<MicrosoftDetail />} />
          <Route path="/services/backup" element={<BackupDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />


        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
