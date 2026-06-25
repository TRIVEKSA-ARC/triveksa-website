import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

import AnimatedCursor from "./components/AnimatedCursor";
import SmoothScroll from "./components/SmoothScroll";

// Home Components
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

// Contact
import ContactModal from "./components/Contact/ContactModal";
import WhatsAppModal from "./components/Contact/WhatsAppModal";

// Layout
import GlobalBackground from "./Layouts/GlobalBackground";

// Admin
import Admin from "./Admin/Admin";

// Context
import { ProjectProvider } from "./context/ProjectContext";
import { AboutProvider } from "./context/AboutContext";
import { FooterProvider } from "./context/FooterContext";

// Auth
import { AuthProvider } from "./Loginout/AuthContext";
import ProtectedRoute from "./Loginout/ProtectedRoute";
import AdminLogin from "./Loginout/AdminLogin";
import ForgotPassword from "./Loginout/ForgotPassword";
import ResetPassword from "./Loginout/ResetPassword";

/* ================= HOME ================= */

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  return (
    <>
      <GlobalBackground>
        <Hero />

        <About />

        {/* ✅ Services Section */}
        <Services />

        <Projects />

        <Footer
          onOpenModal={() => setIsModalOpen(true)}
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        />
      </GlobalBackground>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </>
  );
}

/* ================= SERVICES PAGE ================= */

function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  return (
    <>
      <GlobalBackground>
        <Services />

        <Footer
          onOpenModal={() => setIsModalOpen(true)}
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        />
      </GlobalBackground>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </>
  );
}

/* ================= APP ================= */

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />

      <Router>
        <SmoothScroll>
          <AnimatedCursor />

          <AuthProvider>
            <FooterProvider>
              <ProjectProvider>
                <AboutProvider>
                  <Routes>
                    {/* Public Pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />

                    {/* Authentication */}
                    <Route path="/login" element={<AdminLogin />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                    <Route
                      path="/reset-password/:token"
                      element={<ResetPassword />}
                    />

                    {/* Admin */}
                    <Route
                      path="/admin/*"
                      element={
                        <ProtectedRoute>
                          <Admin />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                </AboutProvider>
              </ProjectProvider>
            </FooterProvider>
          </AuthProvider>
        </SmoothScroll>
      </Router>
    </>
  );
}

export default App;