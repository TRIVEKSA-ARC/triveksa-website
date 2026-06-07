import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const createLead = async (leadData) => {
  const response = await axios.post(
    `${API_URL}/leads`,
    leadData
  );

  return response.data;
};