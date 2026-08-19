import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, Smartphone, ShoppingCart, Server,
  Layers, Palette, Wrench, Rocket, Code2,
  ArrowRight, CheckCircle, TrendingUp, Shield
} from 'lucide-react';

const Services = ({ isDark }) => {
  const d = isDark;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <Globe size={22} />,
      title: 'Web Development',
      subtitle: 'React · Next.js · Node.js',
      path: '/web-development',
      tag: 'Most Popular',
      tagColor: 'purple',
      desc: 'Custom web applications engineered for speed, scalability and conversion. From corporate websites to complex web platforms — built with modern React and Next.js architecture.',
      points: ['Server-side rendering (SSR)', 'Core Web Vitals optimised', 'SEO-ready from day one'],
      keywords: 'custom web development, React development, Next.js development Pakistan',
    },
    {
      icon: <Smartphone size={22} />,
      title: 'Mobile App Development',
      subtitle: 'React Native · iOS · Android',
      path: '/mobile-apps',
      tag: 'Cross-Platform',
      tagColor: 'blue',
      desc: 'Native-grade iOS and Android applications built with React Native. One codebase, both platforms — faster delivery, lower cost, same performance.',
      points: ['iOS & Android from one codebase', 'Offline-first architecture', 'App Store & Play Store ready'],
      keywords: 'React Native mobile app development, iOS Android app Pakistan',
    },
    {
      icon: <ShoppingCart size={22} />,
      title: 'E-Commerce Development',
      subtitle: 'MERN · Stripe · Payments',
      path: '/ecommerce',
      tag: 'High ROI',
      tagColor: 'green',
      desc: 'High-conversion custom e-commerce platforms with secure payment integration, real-time inventory management and powerful admin dashboards.',
      points: ['Stripe, PayPal, JazzCash integration', 'Real-time inventory & orders', 'Mobile-first storefront'],
      keywords: 'e-commerce development Pakistan, custom online store Islamabad',
    },
    {
      icon: <Server size={22} />,
      title: 'Backend & API Development',
      subtitle: 'Node.js · Express · MongoDB',
      path: '/backend-api',
      tag: 'Scalable',
      tagColor: 'orange',
      desc: 'Robust, secure and highly scalable backend systems and REST APIs. Built with Node.js and Express — engineered for high traffic and enterprise workloads.',
      points: ['RESTful & GraphQL APIs', 'JWT auth & role-based access', 'AWS & cloud deployment'],
      keywords: 'backend API development, Node.js development company Pakistan',
    },
    {
      icon: <Layers size={22} />,
      title: 'MERN Stack Development',
      subtitle: 'MongoDB · Express · React · Node',
      path: '/mern-stack-development',
      tag: 'Full Stack',
      tagColor: 'purple',
      desc: 'Complete full-stack JavaScript development using the proven MERN stack. From database architecture to pixel-perfect UI — one team, end-to-end ownership.',
      points: ['Single team, full ownership', 'TypeScript-first codebase', 'Microservices ready'],
      keywords: 'MERN stack development company, full stack development Islamabad',
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'SaaS Product Development',
      subtitle: 'Multi-tenant · Stripe · Dashboards',
      path: '/saas-product-development',
      tag: 'Product',
      tagColor: 'indigo',
      desc: 'End-to-end SaaS platform engineering — multi-tenant architecture, subscription billing, analytics dashboards and scalable cloud infrastructure.',
      points: ['Multi-tenant architecture', 'Stripe subscription billing', 'Analytics & admin dashboards'],
      keywords: 'SaaS development company Pakistan, SaaS product development Islamabad',
    },
    {
      icon: <Palette size={22} />,
      title: 'UI/UX Design',
      subtitle: 'Figma · Prototypes · Design Systems',
      path: '/ui-ux-design',
      tag: 'Design',
      tagColor: 'pink',
      desc: 'User-centered design that converts. From wireframes and Figma prototypes to production-ready design systems — every pixel tied to a business outcome.',
      points: ['Figma wireframes & prototypes', 'Design system documentation', 'Developer handoff included'],
      keywords: 'UI UX design agency Islamabad, Figma design services Pakistan',
    },
    {
      icon: <Rocket size={22} />,
      title: 'Startup MVP Development',
      subtitle: 'Lean · Fast · Investor-Ready',
      path: '/startup-mvp',
      tag: 'Launch Fast',
      tagColor: 'amber',
      desc: 'Investor-ready MVPs delivered in 8 to 14 weeks. We help founders validate ideas, reach early users and attract funding — without burning through runway.',
      points: ['Launch in 8–14 weeks', 'Investor-ready output', 'Post-launch iteration support'],
      keywords: 'startup MVP development Pakistan, MVP development company Islamabad',
    },
    {
      icon: <Wrench size={22} />,
      title: 'Maintenance & Support',
      subtitle: 'Bugs · Security · Performance',
      path: '/maintenance',
      tag: 'Ongoing',
      tagColor: 'gray',
      desc: 'Proactive website and app maintenance — security patches, performance monitoring, dependency updates, bug fixes and monthly reports.',
      points: ['24hr critical bug response', 'Monthly performance reports', 'Security monitoring'],
      keywords: 'website maintenance services Pakistan, web app support Islamabad',
    },
    {
      icon: <Code2 size={22} />,
      title: 'React Development',
      subtitle: 'React 19 · Hooks · State Management',
      path: '/reactdevelopment',
      tag: 'Frontend',
      tagColor: 'cyan',
      desc: 'Expert React.js development — fast, component-driven web applications with modern hooks, optimised state management and clean architecture.',
      points: ['React 19 + TypeScript', 'TanStack Query & Zustand', 'Lighthouse 95+ scores'],
      keywords: 'React development company Pakistan, hire React developer Islamabad',
    },
    {
      icon: <Shield size={22} />,
      title: 'Backend Security & DevOps',
      subtitle: 'AWS · Docker · CI/CD',
      path: '/backend-api',
      tag: 'Infrastructure',
      tagColor: 'red',
      desc: 'Secure cloud infrastructure, automated CI/CD pipelines, Docker containerisation and AWS deployment — so your product stays fast and always online.',
      points: ['AWS, Vercel, DigitalOcean', 'Docker & CI/CD pipelines', 'SSL, DDoS & security hardening'],
      keywords: 'DevOps services Pakistan, AWS deployment Islamabad, cloud infrastructure',
    },
  ];

  const tagColors = {
    purple: d ? 'bg-purple-500/15 text-purple-400 border-purple-500/20' : 'bg-purple-50 text-purple-700 border-purple-200',
    blue:   d ? 'bg-blue-500/15 text-blue-400 border-blue-500/20'     : 'bg-blue-50 text-blue-700 border-blue-200',
    green:  d ? 'bg-green-500/15 text-green-400 border-green-500/20'  : 'bg-green-50 text-green-700 border-green-200',
    orange: d ? 'bg-orange-500/15 text-orange-400 border-orange-500/20': 'bg-orange-50 text-orange-700 border-orange-200',
    indigo: d ? 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    pink:   d ? 'bg-pink-500/15 text-pink-400 border-pink-500/20'     : 'bg-pink-50 text-pink-700 border-pink-200',
    amber:  d ? 'bg-amber-500/15 text-amber-400 border-amber-500/20'  : 'bg-amber-50 text-amber-700 border-amber-200',
    gray:   d ? 'bg-white/[0.06] text-gray-400 border-white/[0.08]'   : 'bg-gray-100 text-gray-600 border-gray-200',
    cyan:   d ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20'     : 'bg-cyan-50 text-cyan-700 border-cyan-200',
    red:    d ? 'bg-red-500/15 text-red-400 border-red-500/20'        : 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`py-24 transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-[#fafafa]'}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
            d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}>
            What We Do
          </div>

          <h2
            id="services-heading"
            className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
              d ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Core Services
          </h2>

          <p className={`text-lg leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            From idea to launch and beyond — DevZore delivers full-cycle software engineering services
            trusted by startups, SMEs and enterprises across Pakistan, the USA, UK, UAE and Europe.
            Every service is engineered for performance, scalability and long-term business value.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <Link
              to={svc.path}
              key={i}
              aria-label={`${svc.title} — DevZore service`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                d
                  ? hoveredIndex === i
                    ? 'bg-white/[0.04] border-purple-500/30 shadow-[0_0_30px_rgba(124,58,237,0.08)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/20'
                  : hoveredIndex === i
                    ? 'bg-white border-purple-200 shadow-[0_4px_24px_rgba(124,58,237,0.08)]'
                    : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm'
              }`}
            >
              {/* Tag */}
              <span className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full border mb-4 ${tagColors[svc.tagColor]}`}>
                {svc.tag}
              </span>

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  d
                    ? 'bg-white/[0.04] border border-white/[0.08] text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600'
                    : 'bg-purple-50 border border-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600'
                }`}>
                  {svc.icon}
                </div>
                <div>
                  <h3 className={`text-[15px] font-bold leading-tight mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>
                    {svc.title}
                  </h3>
                  <p className={`text-[11px] font-medium ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                    {svc.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={`text-[13px] leading-relaxed mb-4 flex-grow ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                {svc.desc}
              </p>

              {/* Points */}
              <ul className="space-y-1.5 mb-5">
                {svc.points.map((pt, j) => (
                  <li key={j} className={`flex items-center gap-2 text-[12px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    <CheckCircle size={12} className="text-purple-500 flex-shrink-0"/>
                    {pt}
                  </li>
                ))}
              </ul>

              {/* CTA arrow */}
              <div className={`flex items-center gap-1.5 text-[12px] font-semibold mt-auto ${
                d ? 'text-purple-400' : 'text-purple-600'
              }`}>
                Learn more
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform"/>
              </div>

              {/* Hidden SEO keywords */}
              <span className="sr-only">{svc.keywords}</span>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`mt-16 p-10 rounded-3xl border text-center ${
          d
            ? 'bg-white/[0.02] border-white/[0.06]'
            : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-2xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
            Not Sure Which Service You Need?
          </h2>
          <p className={`text-sm mb-8 max-w-md mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Tell us about your project and we will recommend the right solution.
            Free consultation — no commitment required. Response within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
            >
              Get Free Consultation <ArrowRight size={15}/>
            </Link>
            <Link
              to="/allservices"
              className={`flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl text-sm transition-all border ${
                d
                  ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              View All Services <ArrowRight size={15}/>
            </Link>
          </div>
        </div>

        {/* ── SEO Rich Text Block (hidden, crawlable) ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Software Development Services in Islamabad, Pakistan</h2>
          <p>
            DevZore provides comprehensive software development services including custom web development,
            React Native mobile app development, MERN stack engineering, SaaS product development,
            e-commerce development, UI/UX design, startup MVP development, backend API development,
            and website maintenance. Based in Islamabad, Pakistan, we serve clients across
            USA, UK, UAE, Canada, Australia and Europe.
          </p>
          <h3>Custom Web Application Development</h3>
          <p>React.js, Next.js, and Node.js web application development for startups and enterprises.</p>
          <h3>Mobile App Development (iOS & Android)</h3>
          <p>React Native cross-platform mobile app development for iOS and Android platforms.</p>
          <h3>E-Commerce Website Development</h3>
          <p>Custom e-commerce platforms with Stripe, PayPal and local payment gateway integration.</p>
          <h3>Backend & API Development</h3>
          <p>Node.js, Express.js REST and GraphQL API development with MongoDB and PostgreSQL.</p>
          <h3>MERN Stack Development</h3>
          <p>Full-stack MongoDB, Express, React and Node.js application development.</p>
          <h3>SaaS Product Development</h3>
          <p>Multi-tenant SaaS platform engineering with subscription billing and analytics.</p>
          <h3>UI/UX Design & Optimization</h3>
          <p>Figma UI/UX design, wireframing, prototyping and design system development.</p>
          <h3>Startup MVP Development</h3>
          <p>Lean MVP development for startups — from idea to investor-ready product in 8 to 14 weeks.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;