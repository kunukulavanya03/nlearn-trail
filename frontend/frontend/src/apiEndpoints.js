// src/apiEndpoints.js

const API_BASE = 'http://localhost:5000/api/users';

export const API_ENDPOINTS = {
  REGISTER: `${API_BASE}/register`,
  LOGIN: `${API_BASE}/login`,
  RESET_PASSWORD: `${API_BASE}/reset-password`,
  CREATE: `${API_BASE}/create`,
  GET_ALL: `${API_BASE}/`,
  GET_BY_ID: (id) => `${API_BASE}/${id}`,
  UPDATE: (id) => `${API_BASE}/${id}`,
  DELETE: (id) => `${API_BASE}/${id}`,
};
