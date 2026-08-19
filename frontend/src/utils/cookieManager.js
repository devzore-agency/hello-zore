// ======================================================
// COOKIE MANAGER - SECURE TOKEN STORAGE
// ======================================================

/**
 * Set cookie with expiration
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} days - Expiration in days
 */
const setCookie = (name, value, days = 7) => {
  try {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    
    // Build cookie string - SameSite=Lax for better compatibility
    const cookieString = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; SameSite=Lax`;
    
    document.cookie = cookieString;
    
    // 🔍 Debug: Verify cookie was set
    const verify = getCookie(name);
    if (verify) {
      console.log(`✅ Cookie '${name}' set successfully`);
    } else {
      console.warn(`⚠️  Cookie '${name}' may not have been set properly`);
    }
  } catch (error) {
    console.error("❌ Error setting cookie:", error);
  }
};

/**
 * Get cookie value
 * @param {string} name - Cookie name
 * @returns {string|null} - Cookie value or null
 */
const getCookie = (name) => {
  try {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(";");
    
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(nameEQ)) {
        const value = decodeURIComponent(cookie.substring(nameEQ.length));
        console.log(`✅ Cookie '${name}' found:`, value.substring(0, 20) + "...");
        return value;
      }
    }
    
    console.log(`❌ Cookie '${name}' not found. Available cookies:`, document.cookie);
    return null;
  } catch (error) {
    console.error("❌ Error reading cookie:", error);
    return null;
  }
};

/**
 * Delete cookie
 * @param {string} name - Cookie name
 */
const deleteCookie = (name) => {
  try {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax;`;
    console.log(`✅ Cookie '${name}' deleted`);
  } catch (error) {
    console.error(`❌ Error deleting cookie '${name}':`, error);
  }
};

/**
 * Check if cookie exists
 * @param {string} name - Cookie name
 * @returns {boolean}
 */
const hasCookie = (name) => {
  return getCookie(name) !== null;
};

export default {
  setCookie,
  getCookie,
  deleteCookie,
  hasCookie,
};
