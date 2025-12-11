// src/api.js
import { API_ENDPOINTS } from './apiEndpoints';

// Register user (tries /register, falls back to /create)
export async function registerUser(form) {
  try {
    let response = await fetch(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (response.status === 404) {
      response = await fetch(API_ENDPOINTS.CREATE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, password: 'Temp@1234' }),
      });
    }
    return await response.json();
  } catch (err) {
    return { error: 'Network error. Please try again.' };
  }
}

// Login user
export async function loginUser(form) {
  try {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    return await response.json();
  } catch (err) {
    return { error: 'Network error. Please try again.' };
  }
}

// Reset password
export async function resetPassword(form) {
  try {
    const response = await fetch(API_ENDPOINTS.RESET_PASSWORD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    return await response.json();
  } catch (err) {
    return { error: 'Network error. Please try again.' };
  }
}

// Get all users
export async function getAllUsers() {
  try {
    const response = await fetch(API_ENDPOINTS.GET_ALL);
    return await response.json();
  } catch (err) {
    return { error: 'Network error. Please try again.' };
  }
}

// Get user by ID
export async function getUserById(id) {
  try {
    const response = await fetch(API_ENDPOINTS.GET_BY_ID(id));
    return await response.json();
  } catch (err) {
    return { error: 'Network error. Please try again.' };
  }
}

// Update user by ID
export async function updateUser(id, data) {
  try {
    const response = await fetch(API_ENDPOINTS.UPDATE(id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (err) {
    return { error: 'Network error. Please try again.' };
  }
}

// Delete user by ID
export async function deleteUser(id) {
  try {
    const response = await fetch(API_ENDPOINTS.DELETE(id), {
      method: 'DELETE',
    });
    return await response.json();
  } catch (err) {
    return { error: 'Network error. Please try again.' };
  }
}
