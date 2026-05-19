import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const AuthContext = createContext();

const INACTIVITY_TIME = 15 * 60 * 1000; // 15 minutes

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Use a ref to persist the timer ID across component re-renders
  const logoutTimerRef = useRef(null);

  /* ================= LOGOUT ================= */
  const logout = () => {
    sessionStorage.removeItem("adminToken");
    setToken(null);
    navigate("/login");
  };

  /* ================= RESET TIMER ================= */
  const resetTimer = () => {
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }

    logoutTimerRef.current = setTimeout(() => {
      logout();
      alert("Session expired. Please login again.");
    }, INACTIVITY_TIME);
  };

  /* ================= INIT AUTH (ON REFRESH) ================= */
  useEffect(() => {
    const storedToken = sessionStorage.getItem("adminToken");
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  /* ================= USER ACTIVITY DETECTOR ================= */
  useEffect(() => {
    // Only run the inactivity timer if the user is logged in
    if (!token) {
      if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
      return;
    }

    const events = ["mousemove", "keydown", "click", "scroll"];

    const handleUserActivity = () => {
      resetTimer();
    };

    events.forEach((event) => {
      window.addEventListener(event, handleUserActivity);
    });

    // Initialize timer on mount/login
    resetTimer();

    return () => {
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, [token]);

  /* ================= LOGIN ================= */
  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });

    const jwtToken = res.data.token;

    sessionStorage.setItem("adminToken", jwtToken);
    setToken(jwtToken);

    navigate("/admin");
  };

  /* ================= SYNC LOGOUT ACROSS TABS ================= */
  // Note: 'storage' event fires across tabs for localStorage, but sessionStorage is tab-isolated.
  // This remains intact if you use cross-tab sessionStorage sync mechanisms elsewhere.
  useEffect(() => {
    const syncLogout = (event) => {
      if (event.key === "adminToken" && !event.newValue) {
        setToken(null);
        navigate("/login");
      }
    };

    window.addEventListener("storage", syncLogout);
    return () => window.removeEventListener("storage", syncLogout);
  }, [navigate]);

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};