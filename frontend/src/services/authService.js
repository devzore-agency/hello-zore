import api from "./api";
import cookieManager from "../utils/cookieManager";

// ======================================================
// LOGIN
// POST /api/auth/login
// ======================================================
const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email: email.trim().toLowerCase(),
      password,
    });

    const data = response.data;

    const token =
      data?.token ||
      data?.accessToken ||
      data?.data?.token;

    const user =
      data?.user ||
      data?.data?.user ||
      null;

    // Token is required
    if (!token) {
      throw new Error(
        "Login successful, but authentication token was not received."
      );
    }

    // 🔐 Save JWT token in secure cookie (7 days)
    console.log("🔑 Token received from login:", token.substring(0, 30) + "...");
    cookieManager.setCookie("adminToken", token, 7);
    
    // Verify it was saved
    const savedToken = cookieManager.getCookie("adminToken");
    if (savedToken) {
      console.log("✅ Token successfully saved to cookie!");
    } else {
      console.warn("⚠️  Token may not be saved to cookie, retrying...");
      localStorage.setItem("adminToken", token); // Fallback
    }

    // 📝 Save user info (can stay in localStorage for now)
    if (user) {
      localStorage.setItem(
        "adminUser",
        JSON.stringify(user)
      );
      console.log("✅ User info saved:", user);
    }

    return {
      ...data,
      token,
      user,
    };
  } catch (error) {
    console.error(
      "Login error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// ======================================================
// GET CURRENT USER FROM BACKEND
// GET /api/auth/me
// ======================================================
const getMe = async () => {
  try {
    const token = getToken();

    if (!token) {
      return null;
    }

    const response = await api.get("/auth/me");

    const data = response.data;

    const user =
      data?.user ||
      data?.data?.user ||
      null;

    if (!user) {
      throw new Error(
        "Authentication verified but user data was not received."
      );
    }

    // Update stored user
    localStorage.setItem(
      "adminUser",
      JSON.stringify(user)
    );

    return user;
  } catch (error) {
    console.error(
      "Get current user error:",
      error.response?.data || error.message
    );

    // If token is invalid/expired
    if (error.response?.status === 401) {
      clearAuth();
    }

    throw error;
  }
};

// ======================================================
// LOGOUT
// ======================================================
const logout = () => {
  clearAuth();
};

// ======================================================
// GET CURRENT USER FROM LOCAL STORAGE
// ======================================================
const getCurrentUser = () => {
  const storedUser =
    localStorage.getItem("adminUser");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.error(
      "Failed to parse admin user:",
      error
    );

    localStorage.removeItem("adminUser");

    return null;
  }
};

// ======================================================
// GET TOKEN - READ FROM COOKIE
// ======================================================
const getToken = () => {
  // 🔐 Try cookie first (secure), fallback to localStorage (legacy)
  return cookieManager.getCookie("adminToken") || 
         localStorage.getItem("adminToken");
};

// ======================================================
// CHECK AUTHENTICATION
// ======================================================
const isAuthenticated = () => {
  return Boolean(getToken());
};

// ======================================================
// CLEAR AUTH DATA - COOKIES + STORAGE
// ======================================================
const clearAuth = () => {
  // 🔐 Clear from cookie
  cookieManager.deleteCookie("adminToken");
  
  // 📝 Clear from localStorage
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
};

// ======================================================
// EXPORT
// ======================================================
export default {
  login,
  getMe,
  logout,
  getCurrentUser,
  getToken,
  isAuthenticated,
  clearAuth,
};