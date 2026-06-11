import { Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import SolutionsDetail from "./pages/solutions/SolutionsDetail";
import BillingDetail from "./pages/solutions/BillingDetail";
import ParkingDetail from "./pages/solutions/ParkingDetail";
import EventManagementDetail from "./pages/solutions/EventManagementDetail";
import AcurestroDetail from "./pages/solutions/AcurestroDetail";
import VyoriseDetail from "./pages/solutions/VyoriseDetail";
import ServiceDetail from "./pages/services/ServiceDetail";
import SecurityDetail from "./pages/services/security/SecurityDetail";
import EmailSecurity from "./pages/services/security/EmailSecurity";
import AntivirusSecurity from "./pages/services/security/AntivirusSecurity";
import BulkWebWhatsApp from "./pages/services/BulkWebWhatsApp";
import MicrosoftDetail from "./pages/services/MicrosoftDetail";
import BackupDetail from "./pages/services/BackupDetail";
import AWSCloudDetail from "./pages/services/cloud/AWSCloudDetail";
import AzureCloudDetail from "./pages/services/cloud/AzureCloudDetail";
import ManagedServiceDetail from "./pages/services/ManagedServiceDetail";
import DRServiceDetail from "./pages/services/DRServiceDetail";
import Career from "./pages/Career";

import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen  font-poppins">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/solutions/billing" element={<BillingDetail />} />
          <Route path="/solutions/parking" element={<ParkingDetail />} />
          <Route
            path="/solutions/event-management"
            element={<EventManagementDetail />}
          />
          <Route path="/solutions/acurestro" element={<AcurestroDetail />} />
          <Route path="/solutions/vyorise" element={<VyoriseDetail />} />
          <Route path="/solutions/:slug" element={<SolutionsDetail />} />
          <Route path="/services/security" element={<SecurityDetail />} />
          <Route path="/security/email" element={<EmailSecurity />} />
          <Route path="/security/antivirus" element={<AntivirusSecurity />} />
          <Route path="/career" element={<Career />} />

          <Route
            path="/services/cloud-service_aws"
            element={<AWSCloudDetail />}
          />
          <Route
            path="/services/cloud-service_azure"
            element={<AzureCloudDetail />}
          />
          <Route
            path="/services/bulk-web-whatsapp"
            element={<BulkWebWhatsApp />}
          />
          <Route path="/services/microsoft" element={<MicrosoftDetail />} />
          <Route path="/services/backup" element={<BackupDetail />} />
          <Route
            path="/services/managed-service"
            element={<ManagedServiceDetail />}
          />
          <Route path="/services/dr-service" element={<DRServiceDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
