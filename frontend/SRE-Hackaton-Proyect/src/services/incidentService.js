import axios from 'axios';

const API_URL = 'http://localhost:3001/api/incidents';

export default async function submitIncident(formData) {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message || 'Error de conexión con el servidor base.';
    throw new Error(errorMessage);
  }
};