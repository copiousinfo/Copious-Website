import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogReading from './pages/BlogReading'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import SolutionsDetail from './pages/SolutionsDetail'
import BillingDetail from './pages/BillingDetail'
import ParkingDetail from './pages/ParkingDetail'
import EventManagementDetail from './pages/EventManagementDetail'
import ServiceDetail from './pages/ServiceDetail'
import SecurityDetail from './pages/SecurityDetail'
import EmailSecurity from './pages/EmailSecurity'
import AntivirusSecurity from './pages/AntivirusSecurity'
import BulkWebWhatsApp from './pages/BulkWebWhatsApp'
import ITConsultingDetail from './pages/ITConsultingDetail'
import BusinessConsultingDetail from './pages/BusinessConsultingDetail'
import MicrosoftDetail from './pages/MicrosoftDetail'
import BackupDetail from './pages/BackupDetail'
import AWSCloudDetail from './pages/AWSCloudDetail'
import AzureCloudDetail from './pages/AzureCloudDetail'
import JioCloudDetail from './pages/JioCloudDetail'
import CloudServiceHome from './pages/CloudServiceHome'
import Career from './pages/Career'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/read" element={<BlogReading />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/solutions/billing" element={<BillingDetail />} />
          <Route path="/solutions/parking" element={<ParkingDetail />} />
          <Route path="/solutions/event-management" element={<EventManagementDetail />} />
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
          <Route path="/services/it-consulting" element={<ITConsultingDetail />} />
          <Route path="/services/business-consulting" element={<BusinessConsultingDetail />} />
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
