import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import AnimatedCursor from "./components/AnimatedCursor";
import SmoothScroll from "./components/SmoothScroll";

// Components
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ContactModal from "./components/Contact/ContactModal";
import WhatsAppModal from "./components/Contact/WhatsAppModal";
import Admin from "./Admin/Admin";
import GlobalBackground from "./Layouts/GlobalBackground";

// Context & Auth
import { ProjectProvider } from "./context/ProjectContext";
import { AboutProvider } from "./context/AboutContext";
import { FooterProvider } from "./context/FooterContext";
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
      {/* 1. GlobalBackground only wraps your page content */}
      <GlobalBackground>
        <Hero />
        <About />
        <Projects />
        <Footer 
          onOpenModal={() => setIsModalOpen(true)} 
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)} 
        />
      </GlobalBackground>

      {/* 2. Modals are outside GlobalBackground, preventing clipping */}
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

      <AnimatedCursor />

      <SmoothScroll>
        <Router>
          <AuthProvider>
            <FooterProvider>
              <ProjectProvider>
                <AboutProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<AdminLogin />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />

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
        </Router>
      </SmoothScroll>
    </>
  );
}

export default App;