import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ ADD THIS
import AnimatedCursor from "./components/AnimatedCursor";
import SmoothScroll from "./components/SmoothScroll";

// your imports
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Admin from "./Admin/Admin";

import GlobalBackground from "./Layouts/GlobalBackground";

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
  return (
    <GlobalBackground>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </GlobalBackground>
  );
}

/* ================= APP ================= */
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      
      {/* ✅ TOASTER (ADD ONCE) */}
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