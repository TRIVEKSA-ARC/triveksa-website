import api from "../api/api";

/* ===============================
   GET ACTIVE SERVICES (PUBLIC)
================================ */
export const fetchServices = async () => {
  const res = await api.get("/services");
  return res.data;
};

/* ===============================
   GET ALL SERVICES (ADMIN)
================================ */
export const fetchAdminServices = async () => {
  const res = await api.get("/services/admin");
  return res.data;
};

/* ===============================
   CREATE SERVICE (ADMIN)
================================ */
export const createServiceAPI = async (serviceData) => {
  const res = await api.post("/services", serviceData);
  return res.data;
};

/* ===============================
   UPDATE SERVICE (ADMIN)
================================ */
export const updateServiceAPI = async (id, serviceData) => {
  const res = await api.put(`/services/${id}`, serviceData);
  return res.data;
};

/* ===============================
   DELETE SERVICE (ADMIN)
================================ */
export const deleteServiceAPI = async (id) => {
  const res = await api.delete(`/services/${id}`);
  return res.data;
};