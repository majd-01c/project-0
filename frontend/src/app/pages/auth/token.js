/**
 * Authentication token utilities
 * Manages JWT tokens and user role extraction
 */

/**
 * Get the current user's role from the JWT token
 * @returns {string|null} The user's role (user, friend, psychologist, admin) or null if not authenticated
 */
export function getCurrentRole() {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return null;
    }

    // Decode JWT token (basic implementation)
    const payload = JSON.parse(atob(token.split('.')[1]));
    
    return payload.role || null;
  } catch (error) {
    console.error('Error getting current role:', error);
    return null;
  }
}

/**
 * Get the full decoded token payload
 * @returns {object|null} The decoded token payload or null
 */
export function getTokenPayload() {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return null;
    }

    return JSON.parse(atob(token.split('.')[1]));
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

/**
 * Check if user is authenticated
 * @returns {boolean} True if user has a valid token
 */
export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

/**
 * Set the authentication token
 * @param {string} token - The JWT token to store
 */
export function setToken(token) {
  localStorage.setItem('token', token);
}

/**
 * Remove the authentication token
 */
export function removeToken() {
  localStorage.removeItem('token');
}
