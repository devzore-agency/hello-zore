import axios from "axios";
import cookieManager from "../utils/cookieManager";

// ======================================================
// API BASE URL
// ======================================================

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

// ======================================================
// AXIOS INSTANCE
// ======================================================

const api = axios.create({
  baseURL: API_URL,

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 15000,

  // Enable cookies / credentials
  withCredentials: true,
});

// ======================================================
// REQUEST INTERCEPTOR
// Automatically attach JWT token
// ======================================================

api.interceptors.request.use(
  (config) => {
    // ==================================================
    // AUTH TOKEN
    // ==================================================

    const token =
      cookieManager.getCookie("adminToken") ||
      localStorage.getItem("adminToken");

    if (token) {
      config.headers = config.headers || {};

      config.headers.Authorization = `Bearer ${token}`;

      console.log(
        "✅ Token attached to request:",
        token.substring(0, 20) + "..."
      );
    }

    // ==================================================
    // IMPORTANT:
    // FORM DATA / IMAGE UPLOAD
    // ==================================================

    // Browser should automatically create:
    //
    // multipart/form-data; boundary=....
    //
    // DO NOT manually set Content-Type for FormData.

    if (
      typeof FormData !== "undefined" &&
      config.data instanceof FormData
    ) {
      // Remove JSON content type
      // so Axios/browser can set multipart boundary.
      if (config.headers) {
        delete config.headers["Content-Type"];
        delete config.headers["content-type"];
      }

      console.log(
        "📦 FormData request detected — Content-Type handled automatically."
      );
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// ======================================================
// RESPONSE INTERCEPTOR
// ======================================================

let retryCount = {};

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const status = error.response?.status;
    const url = error.config?.url;
    const config = error.config;

    // ==================================================
    // UNAUTHORIZED
    // ==================================================

    if (status === 401) {
      console.error(
        "❌ 401 Unauthorized on:",
        url
      );

      cookieManager.deleteCookie("adminToken");

      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");
    }

    // ==================================================
    // RATE LIMIT
    // ==================================================

    if (status === 429) {
      retryCount[url] =
        (retryCount[url] || 0) + 1;

      if (retryCount[url] < 3) {
        const delay =
          Math.pow(2, retryCount[url]) * 1000;

        console.warn(
          `⏳ Rate limited (429). Retrying in ${delay}ms...`
        );

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(api(config));
          }, delay);
        });
      }

      // Reset after max retries
      retryCount[url] = 0;
    }

    // ==================================================
    // NETWORK ERROR
    // ==================================================

    if (!status) {
      console.error(
        "❌ Network error:",
        error.message
      );

      error.message =
        "Network error. Check if backend is running.";
    }

    return Promise.reject(error);
  }
);

export default api;