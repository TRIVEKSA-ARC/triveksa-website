import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Loginout/AuthContext";

import AboutAdmin from "./About/Admin.About";
import ProjectsAdmin from "./Projects/Admin.Projects";
import ServicesAdmin from "./Services/ServicesAdmin";
import AdminFooter from "./Footer/Admin.Footer";

function Admin() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [active, setActive] = useState("about");
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // ✅ Read token from sessionStorage (same as AuthContext)
    const token = sessionStorage.getItem("adminToken");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          sessionStorage.removeItem("adminToken");
          navigate("/login");
        } else {
          setCheckingAuth(false);
        }
      })
      .catch(() => {
        sessionStorage.removeItem("adminToken");
        navigate("/login");
      });
  }, [navigate]);

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] text-white">
        Checking authentication...
      </div>
    );
  }

  const menuItems = [
    {
      key: "about",
      label: "About Me",
    },
    {
      key: "projects",
      label: "Projects",
    },
    {
      key: "services",
      label: "Services",
    },
    {
      key: "footer",
      label: "Footer",
    },
  ];

  return (
    <div className="flex min-h-screen w-full bg-[#0b0f19] text-white font-plusjakarta">

      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 p-8 flex flex-col">

        <div>

          <h1 className="text-3xl font-bold tracking-wide mb-1">
            Admin Panel
          </h1>

          <p className="text-sm text-white/60 mb-10">
            Portfolio Content Manager
          </p>

          <nav className="flex flex-col gap-4">

            {menuItems.map((item) => (

              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  active === item.key
                    ? "bg-yellow-400/10 text-yellow-300 border border-yellow-400/20"
                    : "text-white/70 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>

            ))}

          </nav>

        </div>

        {/* Logout */}
        <button
          onClick={() => {
            sessionStorage.removeItem("adminToken");
            logout();
          }}
          className="mt-auto rounded-xl bg-red-500/20 px-4 py-3 font-semibold text-red-400 hover:bg-red-500/40 transition"
        >
          Logout
        </button>

      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-14">

        {active === "about" && <AboutAdmin />}

        {active === "projects" && <ProjectsAdmin />}

        {active === "services" && <ServicesAdmin />}

        {active === "footer" && <AdminFooter />}

      </main>

    </div>
  );
}

export default Admin;