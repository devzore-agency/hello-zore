
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
  Navigate,
} from "react-router-dom";

// ======================================================
// AUTH
// ======================================================

import AuthContextProvider from "./context/AuthContext";

// ======================================================
// PUBLIC COMPONENTS
// ======================================================

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrustBar from "./components/TrustBar";

// ======================================================
// HOME SECTIONS
// ======================================================

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import WhyUs from "./sections/WhyUs";
import Process from "./sections/Process";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";

// ======================================================
// PUBLIC PAGES
// ======================================================

import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import BlogDetails from "./pages/BlogDetails";

// ======================================================
// SERVICE PAGES
// ======================================================

import AllServices from "./pages/AllServices";
import WebDevelopment from "./pages/WebDevelopment";
import MobileApp from "./pages/MobileApp";
import ECommerce from "./pages/ECommerce";
import BackendApi from "./pages/BackendApi";
import MernStackDevelopment from "./pages/MernStackDevelopment";
import SaaSProductDevelopment from "./pages/SaaSProductDevelopment";
import ReactDevelopment from "./pages/ReactDevelopment";
import UiUxDesign from "./pages/UiUxDesign";
import Maintenance from "./pages/Maintenance";
import StartupMVP from "./pages/StartupMVP";

// ======================================================
// EXTRA PAGES
// ======================================================

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// ======================================================
// ADMIN PAGES
// ======================================================

import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostEditor from "./pages/admin/AdminPostEditor";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminComments from "./pages/admin/AdminComments";

// ======================================================
// SEO MANAGER
// ======================================================

const SEOManager = () => {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = "https://devzore.com";
    const currentPath = location.pathname;

    // ==================================================
    // PUBLIC SEO DATA
    // ==================================================

    const routeSeoData = {
      "/": {
        title:
          "DevZore International | MERN Stack & Software Engineering Agency",
        desc:
          "Premium Software Engineering Agency specializing in high-performance web development, scalable SaaS engines, and enterprise software solutions.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/allservices": {
        title:
          "Our Services | Software Architecture & Product Engineering | DevZore",
        desc:
          "Explore our full suite of digital solutions — MERN stack engineering, UI/UX design, mobile apps and SaaS products built for global performance.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/web-development": {
        title:
          "Custom Web Development Services | Next.js & React | DevZore",
        desc:
          "High-speed, scalable, and secure custom web applications engineered with precision using React and Next.js from Islamabad, Pakistan.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/mobile-apps": {
        title:
          "Cross-Platform Mobile App Development | iOS & Android | DevZore",
        desc:
          "Native-grade hybrid mobile applications built using React Native. iOS and Android app development from Islamabad, Pakistan.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/ecommerce": {
        title:
          "Enterprise E-Commerce Development | Online Store Experts | DevZore",
        desc:
          "High-conversion e-commerce platforms built with MERN stack. Custom online stores with payment gateways, inventory and analytics.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/backend-api": {
        title:
          "Backend Engineering & Scalable API Development | DevZore",
        desc:
          "Secure RESTful and GraphQL APIs built on Node.js and Express. Scalable backend systems from DevZore, Islamabad.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/mern-stack-development": {
        title:
          "Full-Stack MERN Stack Development Company | DevZore",
        desc:
          "Production-ready MERN stack applications — MongoDB, Express, React, Node.js. Full-stack JavaScript development from Islamabad.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/saas-product-development": {
        title:
          "SaaS Product Development Company | DevZore Islamabad",
        desc:
          "End-to-end SaaS product development — multi-tenant architecture, dashboards, subscriptions and cloud scaling from DevZore.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/reactdevelopment": {
        title:
          "React.js Development Services | React Experts | DevZore",
        desc:
          "Component-driven React development with optimized performance, modern hooks and clean state management from DevZore, Islamabad.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/ui-ux-design": {
        title:
          "UI/UX Design Services | User-Centered Design Agency | DevZore",
        desc:
          "Conversion-focused UI/UX design — wireframes, Figma prototypes and pixel-perfect interfaces from DevZore, Islamabad.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/maintenance": {
        title:
          "Website Maintenance & Support Services | DevZore",
        desc:
          "24/7 website maintenance — bug fixes, security updates, performance monitoring and ongoing support from DevZore, Islamabad.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/startup-mvp": {
        title:
          "Startup MVP Development Company | Launch in 8 Weeks | DevZore",
        desc:
          "Investor-ready MVPs built in 8 to 14 weeks using MERN stack. From idea to launch — DevZore, Islamabad, Pakistan.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/about": {
        title:
          "About DevZore | Software Agency Founded by Shoukat — Islamabad",
        desc:
          "Learn about DevZore, a software development agency founded by Shoukat in Islamabad, Pakistan. Building scalable web apps, mobile apps and SaaS products.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/contact": {
        title:
          "Contact DevZore | Hire a Developer in Islamabad, Pakistan",
        desc:
          "Get in touch with DevZore. Start your web or mobile app project. Based in Islamabad — free consultation, response within 24 hours.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      // ==================================================
      // BLOG PAGE
      // ==================================================

      "/blog": {
        title:
          "DevZore Blog | Web & App Development Tips & Insights",
        desc:
          "Read the DevZore blog for tips on web development, mobile apps, MERN stack, and software business insights from Islamabad, Pakistan.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/privacy-policy": {
        title:
          "Privacy Policy | DevZore International",
        desc:
          "Read DevZore's privacy policy — how we collect, use and protect your personal information.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },

      "/terms-and-conditions": {
        title:
          "Terms & Conditions | DevZore International",
        desc:
          "DevZore terms and conditions governing our software development services, source code ownership and support agreements.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      },
    };

    // ==================================================
    // ADMIN SEO DATA
    // ==================================================

    const adminSeoData = {
      "/admin/login": {
        title: "Admin Login | DevZore",
        desc: "DevZore administrator login.",
      },

      "/admin": {
        title: "Admin Dashboard | DevZore",
        desc: "DevZore admin dashboard.",
      },

      "/admin/dashboard": {
        title: "Admin Dashboard | DevZore",
        desc: "DevZore admin dashboard.",
      },

      "/admin/posts": {
        title: "Manage Posts | DevZore Admin",
        desc: "Manage DevZore blog posts.",
      },

      "/admin/posts/new": {
        title: "Create Post | DevZore Admin",
        desc: "Create a new DevZore blog post.",
      },

      "/admin/categories": {
        title: "Manage Categories | DevZore Admin",
        desc: "Manage DevZore blog categories.",
      },

      "/admin/comments": {
        title: "Manage Comments | DevZore Admin",
        desc: "Manage DevZore blog comments.",
      },
    };

    // ==================================================
    // ADMIN ROUTES
    // ==================================================

    if (currentPath.startsWith("/admin")) {
      const adminData =
        adminSeoData[currentPath] || {
          title: "Admin | DevZore",
          desc: "DevZore administration panel.",
        };

      document.title = adminData.title;

      let robots = document.querySelector(
        'meta[name="robots"]'
      );

      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }

      robots.content = "noindex, nofollow";

      return;
    }

    // ==================================================
    // PUBLIC ROUTE DATA
    // ==================================================

    const currentData =
      routeSeoData[currentPath] || {
        title: "404 Page Not Found | DevZore International",
        desc:
          "The page you are looking for does not exist. Return to DevZore homepage.",
        geo: {
          region: "PK-IS",
          placename: "Islamabad",
          position: "33.6844;73.0479",
        },
      };

    // ==================================================
    // TITLE
    // ==================================================

    document.title = currentData.title;

    // ==================================================
    // META DESCRIPTION
    // ==================================================

    let metaDesc = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }

    metaDesc.content = currentData.desc;

    // ==================================================
    // CANONICAL
    // ==================================================

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${baseUrl}${currentPath}`;

    // ==================================================
    // GEO META TAGS
    // ==================================================

    const geoTags = [
      {
        name: "geo.region",
        content: currentData.geo.region,
      },
      {
        name: "geo.placename",
        content: currentData.geo.placename,
      },
      {
        name: "geo.position",
        content: currentData.geo.position,
      },
      {
        name: "ICBM",
        content: currentData.geo.position.replace(
          ";",
          ", "
        ),
      },
    ];

    geoTags.forEach(({ name, content }) => {
      let tag = document.querySelector(
        `meta[name="${name}"]`
      );

      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }

      tag.content = content;
    });

    // ==================================================
    // OPEN GRAPH
    // ==================================================

    const ogTags = [
      {
        property: "og:title",
        content: currentData.title,
      },
      {
        property: "og:description",
        content: currentData.desc,
      },
      {
        property: "og:url",
        content: `${baseUrl}${currentPath}`,
      },
      {
        property: "og:type",
        content: "website",
      },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }

      tag.content = content;
    });

    // ==================================================
    // ROBOTS
    // ==================================================

    let robots = document.querySelector(
      'meta[name="robots"]'
    );

    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }

    robots.content = "index, follow";
  }, [location.pathname]);

  return null;
};

// ======================================================
// SCROLL TO TOP
// ======================================================

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ======================================================
// 404 PAGE
// ======================================================

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[var(--bg-primary)]">
      <h1 className="text-9xl font-black text-purple-600">
        404
      </h1>

      <p className="text-2xl font-bold mt-4 text-[var(--text-primary)]">
        Page Not Found
      </p>

      <p className="text-[var(--text-muted)] mt-2 mb-8">
        The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

// ======================================================
// MAIN APP
// ======================================================

function App() {
  // ====================================================
  // THEME STATE
  // ====================================================

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("devzore-theme");

    if (saved) {
      return saved === "dark";
    }

    return false;
  });

  // ====================================================
  // APPLY THEME
  // ====================================================

  useEffect(() => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("devzore-theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("devzore-theme", "light");
    }
  }, [isDark]);

  // ====================================================
  // TOGGLE THEME
  // ====================================================

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Router>
      <ScrollToTop />

      <SEOManager />

      <AppContent
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </Router>
  );
}

// ======================================================
// APP CONTENT
// ======================================================

const AppContent = ({
  isDark,
  toggleTheme,
}) => {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin");

  return (
    <div
      className={`
        min-h-screen
        font-sans
        flex
        flex-col
        transition-colors
        duration-300
        ${isDark
          ? "bg-[#030303] text-white selection:bg-purple-500/30"
          : "bg-[#fafafa] text-[#111827] selection:bg-purple-200"
        }
      `}
    >
      {/* =================================================
          PUBLIC NAVBAR
          ================================================= */}

      {!isAdminRoute && (
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
      )}

      {/* =================================================
          MAIN ROUTES
          ================================================= */}

      <main className="flex-grow">
        <Routes>

          {/* =================================================
              HOME
              ================================================= */}

          <Route
            path="/"
            element={
              <>
                <Hero isDark={isDark} />
                <TrustBar isDark={isDark} />
                <Services isDark={isDark} />
                <Projects isDark={isDark} />
                <WhyUs isDark={isDark} />
                <Process isDark={isDark} />
                <TechStack isDark={isDark} />
                <Testimonials isDark={isDark} />
                <FAQ isDark={isDark} />
              </>
            }
          />

          {/* =================================================
              SERVICE PAGES
              ================================================= */}

          <Route
            path="/allservices"
            element={
              <AllServices isDark={isDark} />
            }
          />

          <Route
            path="/web-development"
            element={
              <WebDevelopment isDark={isDark} />
            }
          />

          <Route
            path="/mobile-apps"
            element={
              <MobileApp isDark={isDark} />
            }
          />

          <Route
            path="/ecommerce"
            element={
              <ECommerce isDark={isDark} />
            }
          />

          <Route
            path="/backend-api"
            element={
              <BackendApi isDark={isDark} />
            }
          />

          <Route
            path="/mern-stack-development"
            element={
              <MernStackDevelopment
                isDark={isDark}
              />
            }
          />

          <Route
            path="/saas-product-development"
            element={
              <SaaSProductDevelopment
                isDark={isDark}
              />
            }
          />

          <Route
            path="/reactdevelopment"
            element={
              <ReactDevelopment
                isDark={isDark}
              />
            }
          />

          <Route
            path="/ui-ux-design"
            element={
              <UiUxDesign
                isDark={isDark}
              />
            }
          />

          <Route
            path="/maintenance"
            element={
              <Maintenance
                isDark={isDark}
              />
            }
          />

          <Route
            path="/startup-mvp"
            element={
              <StartupMVP
                isDark={isDark}
              />
            }
          />

          {/* =================================================
              OTHER PUBLIC PAGES
              ================================================= */}

          <Route
            path="/about"
            element={
              <About isDark={isDark} />
            }
          />

          <Route
            path="/contact"
            element={
              <Contact isDark={isDark} />
            }
          />

          {/* =================================================
              BLOG PAGE
              /blog -> BlogPost.jsx
              ================================================= */}

          <Route
            path="/blog"
            element={
              <BlogPost isDark={isDark} />
            }
          />

          <Route
            path="/blog/:slug"
            element={
            <BlogDetails isDark={isDark}/>}
          />

          <Route
            path="/privacy-policy"
            element={
              <PrivacyPolicy
                isDark={isDark}
              />
            }
          />

          <Route
            path="/terms-and-conditions"
            element={
              <Terms isDark={isDark} />
            }
          />

          {/* =================================================
              ADMIN LOGIN
              ================================================= */}

          <Route
            path="/admin/login"
            element={
              <AdminLogin
                isDark={isDark}
              />
            }
          />

          {/* =================================================
              ADMIN PANEL
              ================================================= */}

          <Route
            path="/admin"
            element={
              <AdminLayout
                isDark={isDark}
                toggleTheme={toggleTheme}
              />
            }
          >

            {/* /admin -> /admin/dashboard */}

            <Route
              index
              element={
                <Navigate
                  to="dashboard"
                  replace
                />
              }
            />

            {/* =================================================
                DASHBOARD
                ================================================= */}

            <Route
              path="dashboard"
              element={
                <AdminDashboard
                  isDark={isDark}
                />
              }
            />

            {/* =================================================
                POSTS
                ================================================= */}

            <Route
              path="posts"
              element={
                <AdminPosts
                  isDark={isDark}
                />
              }
            />

            {/* =================================================
                CREATE POST
                ================================================= */}

            <Route
              path="posts/new"
              element={
                <AdminPostEditor
                  isDark={isDark}
                />
              }
            />

            {/* =================================================
                EDIT POST
                ================================================= */}

            <Route
              path="posts/edit/:id"
              element={
                <AdminPostEditor
                  isDark={isDark}
                />
              }
            />

            {/* =================================================
                CATEGORIES
                ================================================= */}

            <Route
              path="categories"
              element={
                <AdminCategories
                  isDark={isDark}
                />
              }
            />

            {/* =================================================
                COMMENTS
                ================================================= */}

            <Route
              path="comments"
              element={
                <AdminComments
                  isDark={isDark}
                />
              }
            />

          </Route>

          {/* =================================================
              404
              ================================================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      {/* =================================================
          PUBLIC FOOTER
          ================================================= */}

      {!isAdminRoute && (
        <Footer isDark={isDark} />
      )}
    </div>
  );
};

// ======================================================
// ROOT EXPORT
// ======================================================

export default function RootApp() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}
