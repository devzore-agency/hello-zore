import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Smartphone, Globe, Zap, Star, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const Hero = ({ isDark }) => {
  const d = isDark;

  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const words = [
    'Web Applications',
    'Mobile Apps',
    'SaaS Products',
    'E-Commerce Stores',
    'MERN Stack Apps',
    'MVP Startups',
  ];

  // ── Typewriter effect ──
  useEffect(() => {
    const word = words[currentWord];
    let timeout;

    if (!isDeleting && charIndex <= word.length) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, charIndex));
        setCharIndex(prev => prev + 1);
      }, 80);
    } else if (!isDeleting && charIndex > word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, charIndex));
        setCharIndex(prev => prev - 1);
      }, 40);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCurrentWord(prev => (prev + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWord]);

  const stats = [
    { num: '50+', label: 'Projects Delivered', icon: <Award size={16} /> },
    { num: '30+', label: 'Happy Clients', icon: <Users size={16} /> },
    { num: '98%', label: 'Client Satisfaction', icon: <Star size={16} /> },
    { num: '24hr', label: 'Response Time', icon: <Zap size={16} /> },
  ];

  const services = [
    { icon: <Globe size={14} />, label: 'Web Development' },
    { icon: <Smartphone size={14} />, label: 'Mobile Apps' },
    { icon: <Code2 size={14} />, label: 'MERN Stack' },
    { icon: <TrendingUp size={14} />, label: 'SaaS Products' },
  ];

  const trustPoints = [
    'Free consultation — no commitment required',
    'Source code ownership — yours from day one',
    'Islamabad-based team serving clients worldwide',
    'Agile delivery — updates every 2 weeks',
  ];

  return (
    <section
      aria-label="DevZore Homepage Hero — Software Development Agency Islamabad"
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'
        }`}
    >
      {/* ── Background subtle pattern ── */}
      <div className={`absolute inset-0 pointer-events-none ${d
          ? 'bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.06)_0%,transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.04)_0%,transparent_60%)]'
        }`} />

      {/* ── Grid lines (subtle) ── */}
      <div className={`absolute inset-0 pointer-events-none ${d
          ? 'bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]'
          : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]'
        }`} />

      <div className="relative max-w-7xl mx-auto px-6 pt-26 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div>

            {/* Location badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border ${d
                ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                : 'bg-purple-50 border-purple-200 text-purple-700'
              }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              Islamabad, Pakistan — Serving Worldwide
            </div>

            {/* ── H1 — Main SEO heading ── */}
            <h1 className={`text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6 ${d ? 'text-white' : 'text-gray-900'
              }`}>
              <p>We Build{' '}</p>
              <span className="text-purple-600 relative inline-block">
                {displayText}
                <span className="animate-pulse text-purple-500">|</span>
              </span>
              <br />
              <span className={d ? 'text-gray-300' : 'text-gray-700'}>
                That Scale Globally
              </span>
            </h1>

            {/* Hidden SEO H1 for crawlers — full keyword rich */}
            <h1 className="sr-only">
              Custom MERN Stack Web Development, React Native Mobile Apps, SaaS Development, and Full Stack Software Solutions Worldwide — DevZore, Islamabad Pakistan
            </h1>

            {/* Description */}
            <p className={`text-md leading-relaxed mb-4 max-w-xl ${d ? 'text-gray-400' : 'text-gray-600'
              }`}>
              DevZore is a premium software engineering agency based in Islamabad, Pakistan.
              We architect and deliver <strong className={d ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>high-performance web applications</strong>,
              cross-platform mobile apps, scalable SaaS platforms, and enterprise-grade
              software solutions for startups and businesses across the USA, UK, UAE, and beyond.
            </p>

            {/* Trust checklist */}
            <ul className="space-y-2.5 mb-10" aria-label="Why choose DevZore">
              {trustPoints.map((point, i) => (
                <li key={i} className={`flex items-center gap-3 text-sm ${d ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  <CheckCircle size={15} className="text-purple-500 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/contact"
                aria-label="Get free software development consultation from DevZore"
                className="group flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]"
              >
                Get Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/allservices"
                aria-label="View all DevZore software development services"
                className={`group flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm tracking-wide transition-all duration-200 border ${d
                    ? 'border-white/10 text-gray-300 hover:border-white/20 hover:text-white hover:bg-white/[0.04]'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                View Our Services
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap gap-2" aria-label="Core services">
              {services.map((s, i) => (
                <span key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold border ${d
                    ? 'bg-white/[0.04] border-white/[0.08] text-gray-400'
                    : 'bg-gray-100 border-gray-200 text-gray-600'
                  }`}>
                  <span className="text-purple-500">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="hidden lg:block">

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {stats.map((stat, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all duration-200 hover:border-purple-500/30 ${d
                    ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                    : 'bg-gray-50 border-gray-200 hover:bg-white hover:shadow-sm'
                  }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-purple-500">{stat.icon}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${d ? 'text-gray-500' : 'text-gray-400'
                      }`}>{stat.label}</span>
                  </div>
                  <div className={`text-4xl font-black ${d ? 'text-white' : 'text-gray-900'
                    }`}>{stat.num}</div>
                </div>
              ))}
            </div>

            {/* Featured services card */}
            <div className={`p-6 rounded-2xl border ${d
                ? 'bg-white/[0.02] border-white/[0.06]'
                : 'bg-gray-50 border-gray-200'
              }`}>
              <p className={`text-[10px] font-black uppercase tracking-widest mb-4 ${d ? 'text-gray-500' : 'text-gray-400'
                }`}>What We Engineer</p>
              <div className="space-y-3">
                {[
                  {
                    name: "MERN Stack Development",
                    desc: "MongoDB, Express, React, Node.js",
                    link: "/mern-stack-development",
                  },
                  {
                    name: "React Native Mobile Apps",
                    desc: "iOS & Android cross-platform",
                    link: "/reactdevelopment",
                  },
                  {
                    name: "SaaS Product Engineering",
                    desc: "Scalable cloud-first platforms",
                    link: "/saas-product-development",
                  },
                  {
                    name: "E-Commerce Development",
                    desc: "Custom stores that convert",
                    link: "/ecommerce",
                  },
                  {
                    name: "UI/UX Design & Prototyping",
                    desc: "Figma to pixel-perfect UI",
                    link: "/ui-ux-design",
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className={`flex items-center justify-between py-2.5 border-b last:border-0 transition-colors ${d ? "border-white/[0.05] hover:bg-white/5" : "border-gray-100 hover:bg-gray-50"
                      }`}
                  >
                    <div>
                      <p
                        className={`text-[13px] font-semibold ${d ? "text-gray-200" : "text-gray-800"
                          }`}
                      >
                        {item.name}
                      </p>
                      <p
                        className={`text-[11px] ${d ? "text-gray-500" : "text-gray-400"
                          }`}
                      >
                        {item.desc}
                      </p>
                    </div>

                    <ArrowRight size={13} className="text-purple-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Location + availability strip */}
            <div className={`mt-4 p-4 rounded-xl flex items-center justify-between border ${d
                ? 'bg-purple-600/5 border-purple-500/15'
                : 'bg-purple-50 border-purple-100'
              }`}>
              <div>
                <p className={`text-[11px] font-bold ${d ? 'text-purple-400' : 'text-purple-700'}`}>
                  📍 Islamabad, Pakistan
                </p>
                <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  Serving USA · UK · UAE · Europe · Australia
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className={`text-[11px] font-semibold ${d ? 'text-green-400' : 'text-green-700'}`}>
                  Available Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM STATS BAR (mobile + desktop) ── */}
        <div className={`mt-20 pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-6 ${d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}>
          {[
            { label: 'Years of Excellence', val: '4+' },
            { label: 'Industries Served', val: '12+' },
            { label: 'Countries Reached', val: '15+' },
            { label: 'On-Time Delivery Rate', val: '98%' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className={`text-3xl font-black mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>
                {item.val}
              </div>
              <div className={`text-[11px] font-medium uppercase tracking-widest ${d ? 'text-gray-500' : 'text-gray-400'
                }`}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SEO RICH TEXT BLOCK (hidden visually, visible to crawlers) ── */}
      <div className="sr-only" aria-hidden="false">
        <h2>DevZore — Leading Software Development Agency in Islamabad, Pakistan</h2>
        <p>
          DevZore International is a full-service software development company headquartered in Islamabad, Pakistan,
          delivering world-class digital solutions to clients across the United States, United Kingdom, United Arab Emirates,
          Canada, Australia, and Europe. Our expert engineering team specialises in MERN stack development,
          React.js web applications, Node.js backend systems, React Native mobile app development,
          SaaS platform engineering, e-commerce development, UI/UX design, and startup MVP development.
        </p>
        <p>
          We combine technical precision with business insight to build products that perform at scale.
          Whether you are a startup seeking your first MVP or an enterprise modernising legacy systems,
          DevZore delivers on time, on budget, and to the highest engineering standards.
        </p>
        <p>
          Keywords: MERN stack development company Pakistan, software development agency Islamabad,
          hire React developer Pakistan, Node.js development company, React Native mobile app development,
          SaaS development company Islamabad, web development company Pakistan, custom software development,
          e-commerce development Pakistan, UI UX design agency Islamabad, startup MVP development Pakistan.
        </p>
      </div>
    </section>
  );
};

export default Hero;