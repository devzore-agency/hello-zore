import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe, Smartphone, ShoppingCart, Settings,
  Palette, Wrench, Rocket, Cloud, Lightbulb,
  ChevronDown, LayoutGrid, Mail, Menu, X,
  ArrowRight, Zap, Sun, Moon
} from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const services = [
    { name: "All Services",           icon: <LayoutGrid size={16}/>, path: "/allservices",              desc: "Browse everything we offer" },
    { name: "Web Development",        icon: <Globe size={16}/>,      path: "/web-development",          desc: "React, Next.js, modern web apps" },
    { name: "Mobile App Development", icon: <Smartphone size={16}/>, path: "/mobile-apps",              desc: "iOS & Android with React Native" },
    { name: "E-Commerce",             icon: <ShoppingCart size={16}/>,path:"/ecommerce",                desc: "Custom online stores that convert" },
    { name: "MERN Stack",             icon: <Rocket size={16}/>,     path: "/mern-stack-development",   desc: "Full-stack JS from DB to UI" },
    { name: "SaaS Development",       icon: <Cloud size={16}/>,      path: "/saas-product-development", desc: "Scalable SaaS products" },
    { name: "React Development",      icon: <Zap size={16}/>,        path: "/reactdevelopment",         desc: "Component-driven React UIs" },
    { name: "UI/UX Design",           icon: <Palette size={16}/>,    path: "/ui-ux-design",             desc: "Figma to pixel-perfect design" },
    { name: "Startup MVP",            icon: <Lightbulb size={16}/>,  path: "/startup-mvp",              desc: "Launch in 8-14 weeks" },
    { name: "Maintenance & Support",  icon: <Wrench size={16}/>,     path: "/maintenance",              desc: "Keep your site running perfectly" },
    { name: "Backend & API",          icon: <Settings size={16}/>,   path: "/backend-api",              desc: "Node.js, Express, REST & GraphQL" },
  ];

  const navLinks = [
    { name: "Home",      path: "/" },
    { name: "About",     path: "/about" },
    { name: "Portfolio", path: "/#projects" },
    { name: "Blog",      path: "/blog" },
  ];

  const handleLinkClick = (path) => {
    setIsOpen(false);
    setMobileServiceOpen(false);
    if (!path.includes("#")) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isLinkActive = (path) => {
    if (path.includes("#")) return location.hash === "#" + path.split("#")[1];
    return location.pathname === path && location.hash === "";
  };

  // ── Theme-aware classes ──
  const d = isDark;

  const navScrolledBg = d
    ? 'bg-[#050505]/98 backdrop-blur-3xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.8)]'
    : 'bg-white/95 backdrop-blur-3xl border-b border-gray-200 shadow-[0_1px_20px_rgba(0,0,0,0.08)]';

  const linkCls = (active) => active
    ? d ? 'text-white bg-white/[0.06]' : 'text-gray-900 bg-gray-100'
    : d ? 'text-gray-400 hover:text-white hover:bg-white/[0.04]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100';

  const ThemeToggle = ({ mobile = false }) => (
    <button
      onClick={toggleTheme}
      aria-label={d ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex items-center gap-2 rounded-full font-semibold transition-all duration-300
        ${mobile ? 'w-full px-4 py-3 justify-between border' : 'px-3 py-2 text-[11px] border'}
        ${d
          ? mobile
            ? 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
            : 'bg-white/[0.06] border-white/[0.1] text-gray-300 hover:bg-white/[0.1]'
          : mobile
            ? 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200'
            : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200'
        }`}
    >
      {mobile ? (
        <>
          <div className="flex items-center gap-3">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${d ? 'bg-yellow-500/20' : 'bg-gray-800/10'}`}>
              {d ? <Sun size={14} className="text-yellow-400"/> : <Moon size={14} className="text-gray-700"/>}
            </div>
            <div className="text-left">
              <p className={`text-[14px] font-semibold ${d ? 'text-white' : 'text-gray-800'}`}>
                {d ? 'Switch to Light' : 'Switch to Dark'}
              </p>
              <p className="text-[10px] text-gray-500">{d ? 'Bright & minimal' : 'Easy on the eyes'}</p>
            </div>
          </div>
          <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${d ? 'bg-gray-700' : 'bg-purple-600'}`}>
            <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${d ? 'left-0.5' : 'left-5'}`}></div>
          </div>
        </>
      ) : (
        <>
          {d ? <Sun size={13} className="text-yellow-400"/> : <Moon size={13} className="text-gray-600"/>}
          <span className="text-[11px] tracking-wide">{d ? 'Light' : 'Dark'}</span>
        </>
      )}
    </button>
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${d ? 'bg-black/70' : 'bg-black/40'} ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Announcement Bar */}
      {!scrolled && !isOpen && (
        <div className={`fixed top-0 w-full z-[10000] border-b py-2 px-4 text-center hidden md:block ${d ? 'bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-blue-600/20 border-white/5' : 'bg-purple-50 border-purple-100'}`}>
          <p className={`text-[11px] tracking-widest uppercase ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="text-purple-500 font-bold">✦ Now Available</span>
            {' '}— Free consultation for your next project{' '}
            <Link to="/contact" className="text-purple-600 underline underline-offset-2 hover:text-purple-700 font-semibold">Book a call →</Link>
          </p>
        </div>
      )}

      {/* Navbar */}
      <nav className={`fixed w-full transition-all duration-500 z-[9999] h-[70px] ${scrolled || isOpen ? 'top-0 ' + navScrolledBg : 'top-[36px] bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={() => handleLinkClick("/")}
            className={`flex items-center gap-0 leading-none -ml-3 group transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <img src="/logo.png" alt="DevZore Software Development Agency Islamabad"
              className="w-[75px] h-[75px] object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"/>
            <div className="flex flex-col leading-none -ml-5">
              <span className={`text-[22px] font-extrabold tracking-tight ${d ? 'text-white' : 'text-gray-900'}`}>
                Dev<span className="text-purple-500">Zore</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.22em] mt-0.5 ${d ? 'text-gray-400' : 'text-gray-500'}`}>Software Agency</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} onClick={() => handleLinkClick(link.path)}
                    className={`relative px-4 py-2 rounded-lg text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${linkCls(isLinkActive(link.path))}`}>
                    {isLinkActive(link.path) && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500"/>}
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Services Dropdown */}
              <li className="relative" onMouseEnter={() => setServiceOpen(true)} onMouseLeave={() => setServiceOpen(false)}>
                <button className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${linkCls(serviceOpen)}`}>
                  Services
                  <ChevronDown size={13} className={`transition-transform duration-300 ${serviceOpen ? 'rotate-180 text-purple-500' : ''}`}/>
                </button>

                <div className={`absolute top-full right-0 mt-3 w-[480px] transition-all duration-300 ${serviceOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className={`absolute -top-1.5 right-16 w-3 h-3 border-l border-t rotate-45 ${d ? 'bg-[#0e0e0e] border-white/10' : 'bg-white border-gray-200'}`}/>
                  <div className={`border rounded-2xl shadow-xl overflow-hidden ${d ? 'bg-[#0a0a0a] border-white/[0.1]' : 'bg-white border-gray-200'}`}>

                    <div className={`px-5 py-4 border-b flex items-center justify-between ${d ? 'border-white/[0.1]' : 'border-gray-100'}`}>
                      <div>
                        <p className={`text-[11px] font-black uppercase tracking-[0.3em] ${d ? 'text-gray-500' : 'text-gray-400'}`}>Our Expertise</p>
                        <p className={`text-sm font-bold mt-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>What can we build for you?</p>
                      </div>
                      <Link to="/allservices" onClick={() => handleLinkClick("/allservices")}
                        className="text-[10px] text-purple-500 hover:text-purple-700 font-bold uppercase tracking-widest flex items-center gap-1">
                        View all <ArrowRight size={10}/>
                      </Link>
                    </div>

                    <div className="p-1 grid grid-cols-2 gap-0.5 max-h-[58vh] overflow-y-auto scrollbar-hide-standard">
                      {services.slice(1).map((s, i) => (
                        <Link key={i} to={s.path}
                          onClick={() => { setServiceOpen(false); handleLinkClick(s.path); }}
                          className={`group flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 border border-transparent ${d ? 'hover:bg-white/[0.05] hover:border-white/[0.06]' : 'hover:bg-gray-50 hover:border-gray-200'}`}>
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all mt-0.5 ${d ? 'bg-white/[0.04] border-white/[0.06]' : 'bg-gray-100 border-gray-200'}`}>
                            {s.icon}
                          </div>
                          <div>
                            <p className={`text-[13px] font-semibold group-hover:text-purple-600 leading-tight ${d ? 'text-gray-200' : 'text-gray-700'}`}>{s.name}</p>
                            <p className={`text-[11px] mt-0.5 leading-tight ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className={`px-5 py-4 border-t flex items-center justify-between ${d ? 'border-white/[0.06] bg-gradient-to-r from-purple-600/5 to-indigo-600/5' : 'border-gray-100 bg-gray-50'}`}>
                      <div>
                        <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>Not sure what you need?</p>
                        <p className={`text-[12px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>Let's figure it out together</p>
                      </div>
                      <Link to="/contact" onClick={() => handleLinkClick("/contact")}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold rounded-lg transition-colors">
                        Free Call <ArrowRight size={11}/>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* Theme Toggle */}
            <ThemeToggle/>

            {/* CTA */}
            <Link to="/contact" onClick={() => handleLinkClick("/contact")}
              className={`group flex items-center gap-2 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${d ? 'bg-white hover:bg-purple-500 text-black hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'bg-[#111827] hover:bg-purple-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]'}`}>
              Book a Call
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform"/>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-[10002]">
            {!isOpen ? (
              <button onClick={() => setIsOpen(true)} className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 group">
                <span className={`w-6 h-0.5 rounded-full transition-all group-hover:w-7 ${d ? 'bg-white' : 'bg-gray-800'}`}/>
                <span className="w-5 h-0.5 bg-purple-500 rounded-full transition-all group-hover:w-7"/>
                <span className={`w-4 h-0.5 rounded-full transition-all group-hover:w-7 ${d ? 'bg-white/50' : 'bg-gray-400'}`}/>
              </button>
            ) : (
              <button onClick={() => setIsOpen(false)}
                className={`fixed top-5 right-6 w-9 h-9 flex items-center justify-center rounded-lg z-[10003] transition-all ${d ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20' : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'}`}>
                <X size={18}/>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-[85%] max-w-[360px] h-screen z-[10001] flex flex-col transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className={`absolute inset-0 backdrop-blur-3xl border-l ${d ? 'bg-[#060606]/98 border-white/[0.08]' : 'bg-white/98 border-gray-200'}`}/>

        <div className={`relative z-10 px-6 pt-6 pb-4 border-b flex items-center gap-0 ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
        
          <div className="w-15 h-8 to-indigo-700 rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt="DevZore" className="w-20 h-20 object-contain"/>
          </div>
          <div>
            <p className={`text-base font-black tracking-tight ${d ? 'text-white' : 'text-gray-900'}`}>Dev<span className="text-purple-500">Zore</span></p>
            <p className={`text-[9px] uppercase tracking-widest ${d ? 'text-gray-600' : 'text-gray-400'}`}>Software Agency</p>
          </div>
        </div>

        <div className="relative z-10 flex-1 overflow-y-auto px-4 py-5">
          <div className="mb-4">
            <p className={`text-[9px] font-black uppercase tracking-[0.4em] mb-3 px-2 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Navigation</p>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    isLinkActive(link.path)
                      ? d ? "bg-purple-600/15 border border-purple-500/30 text-white" : "bg-purple-50 border border-purple-200 text-purple-700"
                      : d ? "text-gray-400 hover:text-white hover:bg-white/[0.04] border border-transparent" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent"
                  }`}>
                  <span className="text-[15px] font-semibold">{link.name}</span>
                  {isLinkActive(link.path)
                    ? <span className="w-1.5 h-1.5 rounded-full bg-purple-500"/>
                    : <ArrowRight size={14} className={d ? 'text-gray-600' : 'text-gray-400'}/>
                  }
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-4"><ThemeToggle mobile={true}/></div>

          <div>
            <button onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all mb-1 ${d ? 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <LayoutGrid size={14} className="text-purple-500"/>
                </div>
                <div className="text-left">
                  <p className={`text-[14px] font-semibold ${d ? 'text-white' : 'text-gray-800'}`}>Our Services</p>
                  <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>11 services available</p>
                </div>
              </div>
              <ChevronDown size={15} className={`transition-transform duration-300 ${mobileServiceOpen ? 'rotate-180 text-purple-500' : d ? 'text-gray-500' : 'text-gray-400'}`}/>
            </button>

            <div className={`overflow-hidden transition-all duration-400 ${mobileServiceOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col gap-0.5 pt-1 pl-2">
                {services.map((s, i) => (
                  <Link key={i} to={s.path} onClick={() => handleLinkClick(s.path)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${d ? 'text-gray-400 hover:text-white hover:bg-white/[0.04]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}>
                    <span className="text-purple-500/70 group-hover:text-purple-500 transition-colors">{s.icon}</span>
                    <span className="text-[13px] font-medium">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`relative z-10 p-4 border-t space-y-3 ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <Link to="/contact" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3.5 rounded-xl font-bold text-[12px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all">
            <Mail size={14}/> Hire Us Now
          </Link>
          <a href="https://wa.me/923348004300?text=Hi DevZore! I want to discuss a project." target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-[#25D366]/20 transition-all">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
            WhatsApp Us
          </a>
          <p className={`text-[9px] text-center uppercase tracking-widest ${d ? 'text-gray-700' : 'text-gray-400'}`}>DevZore • Islamabad • 2026</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;