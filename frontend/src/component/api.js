import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const submitApplication = async (applicationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/college`, applicationData);
    return response.data;
  } catch (error) {
    console.error("Error submitting application:", error);
    throw error.response ? error.response.data : new Error("Server Error");
  }
};

export const submitContactForm = async (contactData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact`, contactData);
    return response.data;  // Return the response from the backend
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error.response ? error.response.data : new Error("Server Error");
  }
};