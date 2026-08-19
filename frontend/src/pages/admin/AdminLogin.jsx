import { useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AdminLogin = () => {
  const {
    login,
    isAuthenticated,
    loading: authLoading,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ======================================================
  // AUTH INITIALIZATION
  // ======================================================
  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 mx-auto border-4 border-white/20 border-t-white rounded-full animate-spin" />

          <p className="text-slate-400 mt-4 text-sm">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  // ======================================================
  // ALREADY AUTHENTICATED
  // ======================================================
  if (isAuthenticated) {
    const redirectPath =
      location.state?.from?.pathname ||
      location.state?.from ||
      "/admin/dashboard";

    return (
      <Navigate
        to={redirectPath}
        replace
      />
    );
  }

  // ======================================================
  // HANDLE INPUT CHANGE
  // ======================================================
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ======================================================
  // HANDLE LOGIN
  // ======================================================
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    // ----------------------------------------------------
    // Validation
    // ----------------------------------------------------
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      toast.error(
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      setLoading(true);

      const data = await login(
        email,
        password
      );

      // --------------------------------------------------
      // Make sure backend returned admin user
      // --------------------------------------------------
      const loggedInUser =
        data?.user ||
        data?.data?.user;

      if (!loggedInUser) {
        toast.error(
          "Login failed: user information was not received."
        );
        return;
      }

      // --------------------------------------------------
      // Check admin role
      // --------------------------------------------------
      if (loggedInUser.role !== "admin") {
        toast.error(
          "You do not have administrator access."
        );

        return;
      }

      toast.success(
        "Welcome back, Admin!"
      );

      // --------------------------------------------------
      // Redirect
      // --------------------------------------------------
      const redirectPath =
        location.state?.from?.pathname ||
        location.state?.from ||
        "/admin/dashboard";

      navigate(
        redirectPath,
        {
          replace: true,
        }
      );
    } catch (error) {
      console.error(
        "Admin login error:",
        error
      );

      const status =
        error?.response?.status;

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message;

      if (status === 401) {
        toast.error(
          message ||
            "Invalid email or password."
        );
      } else if (status === 403) {
        toast.error(
          message ||
            "Admin access required."
        );
      } else if (status === 400) {
        toast.error(
          message ||
            "Please check your login details."
        );
      } else {
        toast.error(
          message ||
            "Unable to connect to the server."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // ======================================================
  // LOGIN UI
  // ======================================================
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* ==================================================
          BACKGROUND EFFECTS
      ================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />

      </div>

      {/* ==================================================
          LOGIN WRAPPER
      ================================================== */}
      <div className="relative z-10 w-full max-w-md">

        {/* ==================================================
            LOGIN CARD
        ================================================== */}
        <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-9 border border-white/10">

          {/* ==================================================
              HEADER
          ================================================== */}
          <div className="text-center mb-8">

            {/* Logo */}
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-lg">
              <span className="text-2xl font-extrabold tracking-tight">
                D
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              DevZore Admin
            </h1>

            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Sign in to manage your website
            </p>

          </div>

          {/* ==================================================
              LOGIN FORM
          ================================================== */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* ==================================================
                EMAIL
            ================================================== */}
            <div>

              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@devzore.com"
                autoComplete="email"
                autoFocus
                disabled={loading}
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 transition disabled:bg-slate-50 disabled:cursor-not-allowed"
              />

            </div>

            {/* ==================================================
                PASSWORD
            ================================================== */}
            <div>

              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Password
              </label>

              <div className="relative">

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loading}
                  className="w-full px-4 py-3.5 pr-20 border border-slate-200 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 transition disabled:bg-slate-50 disabled:cursor-not-allowed"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (previous) =>
                        !previous
                    )
                  }
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-sm font-semibold text-slate-500 hover:text-slate-900 transition disabled:opacity-50"
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>

            {/* ==================================================
                SIGN IN BUTTON
            ================================================== */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-slate-950"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">

                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                  Signing in...

                </span>
              ) : (
                "Sign In"
              )}
            </button>

          </form>

          {/* ==================================================
              FOOTER
          ================================================== */}
          <p className="text-center text-xs text-slate-400 mt-8">
            DevZore Admin Panel
          </p>

        </div>

        {/* ==================================================
            SECURITY TEXT
        ================================================== */}
        <p className="text-center text-xs text-slate-500 mt-5">
          Secure administrator access
        </p>

      </div>
    </div>
  );
};

export default AdminLogin;