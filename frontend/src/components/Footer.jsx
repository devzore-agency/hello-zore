import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
} from 'lucide-react';

const Footer = ({ isDark }) => {
  const d = isDark;

  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile App Development', path: '/mobile-apps' },
    { name: 'MERN Stack Development', path: '/mern-stack-development' },
    { name: 'E-Commerce Development', path: '/ecommerce' },
    { name: 'SaaS Development', path: '/saas-product-development' },
    { name: 'React Development', path: '/reactdevelopment' },
    { name: 'UI/UX Design', path: '/ui-ux-design' },
    { name: 'Startup MVP', path: '/startup-mvp' },
    { name: 'Backend & API', path: '/backend-api' },
    { name: 'Maintenance & Support', path: '/maintenance' },
  ];

  const company = [
    { name: 'About DevZore', path: '/about' },
    { name: 'Our Work', path: '/#projects' },
    { name: 'All Services', path: '/allservices' },
    { name: 'Blog & Insights', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];
const socials = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/muhammadshoukat2030',
    label: 'DevZore on GitHub',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/dev-zore-833893418',
    label: 'DevZore on LinkedIn',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/devz.ore/',
    label: 'DevZore on Instagram',
  },
  {
    name: 'Upwork',
    icon: ExternalLink,
    href: 'https://www.upwork.com',
    label: 'Hire DevZore on Upwork',
  },
  {
    name: 'Facebook',
    icon: ExternalLink,
    href: '#',
    label: 'DevZore on Facebook',
  },
  {
    name: 'TikTok',
    icon: ExternalLink,
    href: '#',
    label: 'DevZore on TikTok',
  },
  {
    name: 'Fiverr',
    icon: ExternalLink,
    href: '#',
    label: 'DevZore on Fiverr',
  },
  {
    name: 'X',
    icon: ExternalLink,
    href: '#',
    label: 'DevZore on X',
  },
];
  const stats = [
    { num: '50+', label: 'Projects Delivered' },
    { num: '30+', label: 'Happy Clients' },
    { num: '15+', label: 'Countries Served' },
    { num: '98%', label: 'Client Satisfaction' },
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="DevZore footer — software development agency Islamabad Pakistan"
      className={`transition-colors duration-300 ${d ? 'bg-[#050505] border-t border-white/[0.05]' : 'bg-[#111827] border-t border-white/[0.04]'}`}
    >

      {/* ── TOP CTA STRIP ── */}
      <div className={`border-b ${d ? 'border-white/[0.06]' : 'border-white/[0.06]'}`}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-1">
              ✦ Available for New Projects
            </p>
            <h2 className="text-2xl font-black text-white leading-tight">
              Got a project in mind?{' '}
              <span className="text-purple-400">Let's build it.</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Free consultation · Response within 24 hours · No commitment required
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              aria-label="Contact DevZore for a free software development consultation"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.35)]"
            >
              Get Free Consultation <ArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/923348004300?text=Hi DevZore! I want to discuss a project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp DevZore for project inquiry"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div className={`border-b ${d ? 'border-white/[0.04]' : 'border-white/[0.04]'}`}>
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-white mb-1">{s.num}</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={handleLinkClick} aria-label="DevZore homepage" className="flex items-center gap-0 leading-none -ml-1 mb-4 group">
              <img
                src="/logo.png"
                alt="DevZore software development agency Islamabad Pakistan"
                className="w-[64px] h-[64px] object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col leading-none -ml-4">
                <span className="text-[20px] font-extrabold tracking-tight text-white">
                  Dev<span className="text-purple-400">Zore</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.22em] text-gray-500">Software Agency</span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Premium software engineering agency based in Islamabad, Pakistan.
              We architect and deliver high-performance web apps, mobile apps,
              SaaS platforms and e-commerce solutions for clients worldwide.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:hellodevzore@gmail.com"
                aria-label="Email DevZore"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/20 group-hover:border-purple-500/30 transition-all">
                  <Mail size={13} className="text-purple-400" />
                </div>
                hellodevzore@gmail.com
              </a>
              <a
                href="tel:+923348004300"
                aria-label="Call DevZore"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/20 group-hover:border-purple-500/30 transition-all">
                  <Phone size={13} className="text-purple-400" />
                </div>
                +92 334 8004300
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <MapPin size={13} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400">Islamabad, Pakistan</p>
                  <p className="text-[11px] text-gray-600">Serving USA · UK · UAE · Canada · Australia</p>
                </div>
              </div>
            </div>

            {/* Social links */}
<div className="grid grid-cols-2 gap-2 max-w-[350px]">
  {socials.map((s, i) => {
    const Icon = s.icon;

    return (
      <a
        key={i}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="h-9 rounded-lg bg-white/[0.04] border border-white/[0.10] flex items-center justify-center gap-2 text-gray-400 hover:text-white hover:bg-purple-600/10 hover:border-purple-500/30 transition-all duration-200"
      >
        <Icon size={16} strokeWidth={1.8} />
        <span className="text-[11px] font-semibold tracking-wider uppercase">
          {s.name}
        </span>
      </a>
    );
  })}
</div>
          </div>

          {/* ── Col 2: Services ── */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-5">
              Services
            </h3>
            <ul className="space-y-3" aria-label="DevZore services">
              {services.map((s, i) => (
                <li key={i}>
                  <Link
                    to={s.path}
                    onClick={handleLinkClick}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-0.5 transition-all duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                      <ArrowRight size={10} className="text-purple-400 flex-shrink-0" />
                    </span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Company ── */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-5">
              Company
            </h3>
            <ul className="space-y-3 mb-8" aria-label="DevZore company pages">
              {company.map((c, i) => (
                <li key={i}>
                  <Link
                    to={c.path}
                    onClick={handleLinkClick}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-0.5 transition-all duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                      <ArrowRight size={10} className="text-purple-400 flex-shrink-0" />
                    </span>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="space-y-2">
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-3">
                Trusted By
              </h3>
              {[
                '🇵🇰 Pakistan — Local & Enterprise',
                '🇺🇸 United States — Startups & SMEs',
                '🇬🇧 United Kingdom — Agencies',
                '🇦🇪 UAE — Real Estate & Fintech',
                '🇨🇦 Canada — Construction Tech',
                '🇦🇺 Australia — EdTech Platforms',
              ].map((item, i) => (
                <div key={i} className="text-[11px] text-gray-500 flex items-center gap-2">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Col 4: GEO + Tech ── */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-5">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {[
                'React.js', 'Next.js', 'Node.js', 'Express.js',
                'MongoDB', 'PostgreSQL', 'React Native',
                'TypeScript', 'Tailwind CSS', 'AWS',
                'Docker', 'Stripe', 'Socket.io', 'GraphQL',
              ].map((tech, i) => (
                <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-gray-400">
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-4">
              Quick Contact
            </h3>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="flex items-center justify-between w-full px-4 py-3 bg-purple-600/10 border border-purple-500/20 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/30 transition-all group"
            >
              <div>
                <p className="text-[12px] font-bold text-white">Start a Project</p>
                <p className="text-[10px] text-gray-500">Free consultation available</p>
              </div>
              <ArrowRight size={14} className="text-purple-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-bold text-green-400">Currently Available</span>
              </div>
              <p className="text-[11px] text-gray-500">
                Currently accepting new projects. Most inquiries receive a response within 1 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={`border-t ${d ? 'border-white/[0.05]' : 'border-white/[0.05]'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="text-[11px] text-gray-600">
              © {currentYear} DevZore International. All rights reserved.
            </p>
            <span className="text-gray-700 hidden md:inline">·</span>
            <p className="text-[11px] text-gray-600">
              Registered in Islamabad, Pakistan
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" onClick={handleLinkClick} className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">·</span>
            <Link to="/terms-and-conditions" onClick={handleLinkClick} className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</Link>
            <span className="text-gray-700">·</span>
            <span className="text-[11px] text-purple-500 font-semibold">Engineered with precision </span>
          </div>
        </div>
      </div>

      {/* ── SEO + GEO Hidden Block ── */}
      <div className="sr-only" aria-hidden="false">
        <address>
          <p>DevZore International</p>
          <p>Software Development Agency</p>
          <p>Islamabad, Pakistan</p>
          <p>Email: hellodevzore@gmail.com</p>
          <p>Phone: +92 334 8004300</p>
          <p>Service Area: Worldwide — USA, UK, UAE, Canada, Australia, Saudi Arabia, Pakistan</p>
        </address>
        <nav aria-label="Footer SEO navigation">
          <h2>DevZore Software Development Services</h2>
          <ul>
            <li><a href="/web-development">Web Development Services Pakistan</a></li>
            <li><a href="/mobile-apps">Mobile App Development Islamabad</a></li>
            <li><a href="/mern-stack-development">MERN Stack Development Company</a></li>
            <li><a href="/ecommerce">E-Commerce Development Pakistan</a></li>
            <li><a href="/saas-product-development">SaaS Development Company Islamabad</a></li>
            <li><a href="/ui-ux-design">UI UX Design Agency Pakistan</a></li>
            <li><a href="/startup-mvp">Startup MVP Development Pakistan</a></li>
            <li><a href="/backend-api">Backend API Development Node.js</a></li>
            <li><a href="/maintenance">Website Maintenance Services Pakistan</a></li>
            <li><a href="/reactdevelopment">React Development Company Islamabad</a></li>
          </ul>
          <p>
            DevZore is a premium software engineering agency headquartered in Islamabad, Pakistan.
            We specialise in MERN stack development, React.js web applications, React Native mobile apps,
            SaaS product engineering, e-commerce development, UI/UX design and startup MVP development.
            Serving clients across United States, United Kingdom, United Arab Emirates, Canada, Australia,
            Saudi Arabia and Pakistan since 2022.
          </p>
          <p>
            Keywords: software development company Islamabad, web development agency Pakistan,
            MERN stack development Pakistan, hire React developer Islamabad, Node.js development company,
            React Native mobile app Pakistan, SaaS development Islamabad, e-commerce development Pakistan,
            software house Islamabad, full stack developer Pakistan, UI UX design Pakistan,
            startup MVP development Pakistan, custom software development Islamabad.
          </p>
        </nav>
      </div>

    </footer>
  );
};

export default Footer;