import { useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully.");

    navigate("/admin/login", {
      replace: true,
    });
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "▦",
    },
    {
      name: "Posts",
      path: "/admin/posts",
      icon: "✎",
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: "▤",
    },
    {
      name: "Comments",
      path: "/admin/comments",
      icon: "◌",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen
          w-64 bg-slate-950 text-white
          transform transition-transform duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Logo */}
        <div className="h-20 px-6 flex items-center border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center font-bold">
              D
            </div>

            <div>
              <h1 className="font-bold text-lg">
                DevZore
              </h1>

              <p className="text-xs text-slate-400">
                Admin Panel
              </p>
            </div>
          </div>

          {/* Mobile close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto lg:hidden text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <p className="px-3 text-[11px] uppercase tracking-wider text-slate-500 mb-3">
            Management
          </p>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-4 py-3 rounded-xl
                text-sm font-medium transition
                ${
                  isActive
                    ? "bg-white text-slate-950 shadow-lg"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }
                `
              }
            >
              <span className="w-5 text-center">
                {item.icon}
              </span>

              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="border-t border-white/10 pt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition"
            >
              <span>↪</span>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:ml-64">
        {/* Top Navbar */}
        <header className="sticky top-0 z-20 h-20 bg-white border-b border-slate-200">
          <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile menu */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100"
              >
                ☰
              </button>

              <div>
                <p className="text-xs text-slate-400">
                  Welcome back
                </p>

                <h2 className="font-semibold text-slate-900">
                  Admin Panel
                </h2>
              </div>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-slate-900">
                  {user?.name || "Admin"}
                </p>

                <p className="text-xs text-slate-400">
                  {user?.email || "Administrator"}
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center font-semibold">
                {(user?.name || "A")
                  .charAt(0)
                  .toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;