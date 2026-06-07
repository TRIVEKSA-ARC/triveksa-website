import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createLead = async (leadData) => {
  const response = await axios.post(
    `${API_URL}/api/leads`,
    leadData
  );

  return response.data;
};