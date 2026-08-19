import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return authService.getCurrentUser();
  });

  const [loading, setLoading] = useState(true);

  // =====================================================
  // CHECK LOGIN STATE ON PAGE LOAD
  // =====================================================
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = authService.getToken();

        if (!token) {
          setUser(null);
          return;
        }

        // First use saved user
        const savedUser = authService.getCurrentUser();

        if (savedUser) {
          setUser(savedUser);
        }

        // Verify token with backend
        const currentUser = await authService.getMe();

        if (currentUser) {
          setUser(currentUser);

          localStorage.setItem(
            "adminUser",
            JSON.stringify(currentUser)
          );
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);

        authService.logout();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // =====================================================
  // LOGIN
  // =====================================================
  const login = async (email, password) => {
    const data = await authService.login(
      email,
      password
    );

    const token =
      data?.token ||
      data?.accessToken ||
      data?.data?.token;

    const loggedInUser =
      data?.user ||
      data?.data?.user;

    if (!token) {
      throw new Error(
        "Login successful but token was not received."
      );
    }

    if (!loggedInUser) {
      throw new Error(
        "Login successful but user data was not received."
      );
    }

    // authService.login() already saves token/user
    setUser(loggedInUser);

    return data;
  };

  // =====================================================
  // LOGOUT
  // =====================================================
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // =====================================================
  // AUTHENTICATION STATUS
  // =====================================================
  const isAuthenticated = Boolean(
    authService.getToken()
  );

  // =====================================================
  // ADMIN STATUS
  // =====================================================
  const isAdmin = user?.role === "admin";

  // =====================================================
  // CONTEXT
  // =====================================================
  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;