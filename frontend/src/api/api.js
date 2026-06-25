import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false, // JWT only, no cookies
});

/* ================= 🔐 ATTACH TOKEN ================= */
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("adminToken");

    const publicRoutes = [
      "/auth/login",
      "/auth/forgot-password",
      "/auth/reset-password",
    ];

    const isPublicRoute = publicRoutes.some((route) =>
      config.url?.includes(route)
    );

    // ✅ DO NOT FORCE JSON FOR FORMDATA (🔥 THIS WAS THE BUG)
    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    if (token && !isPublicRoute) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ================= ⏳ TOKEN EXPIRY ================= */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      sessionStorage.removeItem("adminToken");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default api;