import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, CheckCircle, ChevronLeft,
  Database, Monitor, Zap, Search, Layers, RefreshCw,
  Code2, Settings, Lock, Rocket, TrendingUp,
  Plus, Minus, Star, Users, Award, Clock,
  Shield, ExternalLink, MapPin
} from 'lucide-react';

const WebDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatWeBuild = [
    {
      icon: <Database size={22} />,
      color: 'blue',
      title: 'Business Web Applications & Internal Tools',
      desc: 'Custom CRM systems, HR management platforms, inventory control systems, project management tools and internal dashboards that replace spreadsheets with purpose-built software your team actually uses every day.',
    },
    {
      icon: <Monitor size={22} />,
      color: 'purple',
      title: 'Corporate & Business Websites',
      desc: 'Professional, SEO-optimised corporate websites and landing pages built with Next.js for fast load times, server-side rendering and Google-friendly content architecture that ranks and converts.',
    },
    {
      icon: <Zap size={22} />,
      color: 'yellow',
      title: 'E-Commerce & Marketplace Platforms',
      desc: 'Custom e-commerce storefronts, B2B ordering systems and multi-vendor marketplaces with Stripe, PayPal, JazzCash and Easypaisa integration — outperforming generic templates when your business needs more.',
    },
    {
      icon: <Search size={22} />,
      color: 'green',
      title: 'Analytics Dashboards & Data Platforms',
      desc: 'Real-time reporting interfaces, business intelligence dashboards and data visualisation platforms with complex filtering, custom charts and export capabilities built for decision-makers.',
    },
    {
      icon: <Layers size={22} />,
      color: 'orange',
      title: 'SaaS Products & Subscription Platforms',
      desc: 'Multi-tenant SaaS platforms with subscription billing via Stripe, user management, role-based access control, analytics dashboards and the cloud infrastructure that growing SaaS businesses need.',
    },
    {
      icon: <RefreshCw size={22} />,
      color: 'gray',
      title: 'Legacy System Modernisation',
      desc: 'Migration of aging PHP, WordPress or monolithic applications to modern React and Node.js stacks — with full data migration, rebuilt interfaces and business continuity maintained throughout.',
    },
  ];

  const techStack = [
    { category: 'Frontend', items: ['React.js 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Socket.io'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma ORM'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Vercel', 'DigitalOcean', 'Docker', 'GitHub Actions CI/CD'] },
    { category: 'Payments', items: ['Stripe', 'PayPal', 'JazzCash', 'Easypaisa', 'Razorpay'] },
    { category: 'SEO & Performance', items: ['Core Web Vitals', 'Lighthouse 95+', 'Schema Markup', 'Cloudflare CDN', 'SSR/SSG'] },
  ];

  const process = [
    { n: '01', title: 'Free Discovery & Scoping', desc: 'We map your business logic, user flows, data requirements and integrations into a detailed spec. You receive a fixed-price proposal before any development begins.' },
    { n: '02', title: 'Architecture & Tech Selection', desc: 'Senior engineers choose the right tools for your scale, compliance requirements and integration needs — no one-size-fits-all approach.' },
    { n: '03', title: 'UI/UX Design & Prototyping', desc: 'Figma wireframes and interactive prototypes for every screen. You experience and approve the full product before production code is written.' },
    { n: '04', title: 'Sprint-Based Development', desc: 'Two-week agile sprints with a live staging environment updated after every sprint. You review real working software — not PowerPoint updates.' },
    { n: '05', title: 'QA Testing & Security Audit', desc: 'Full browser and device testing, automated test suites, OWASP security testing, performance optimisation and Lighthouse scoring before launch.' },
    { n: '06', title: 'Launch & Post-Launch Support', desc: 'Production deployment with monitoring, error tracking and uptime alerts. 30 days of post-launch support included on every project.' },
  ];

  const whyUs = [
    { icon: <Code2 size={16} />, title: 'Senior Engineers Only', desc: 'Every project is handled by senior developers with 4+ years of production experience. No juniors learning on your budget.' },
    { icon: <Shield size={16} />, title: '100% Code Ownership', desc: 'Your code lives in your GitHub from day one. We never hold source code hostage or use proprietary frameworks only we can maintain.' },
    { icon: <Zap size={16} />, title: 'Performance Engineered', desc: 'Core Web Vitals optimised, Lighthouse 95+ scores, CDN configured and load tested before every launch.' },
    { icon: <Lock size={16} />, title: 'Security-First Development', desc: 'OWASP best practices, JWT auth, input validation, rate limiting and regular security audits built into every project.' },
    { icon: <Settings size={16} />, title: 'Scalable Architecture', desc: 'Designed to handle 10x traffic from day one. Microservices-ready, horizontally scalable and cloud-native by default.' },
    { icon: <Clock size={16} />, title: '24hr Response Guarantee', desc: 'Direct access to your engineer. Every message answered within 24 hours — including weekends.' },
  ];

  const faqs = [
    {
      q: 'How much does custom web development cost?',
      a: 'The cost of custom web development depends on your project requirements, features, design, and overall complexity. After a free discovery call, we provide a customized proposal with a clear project scope, timeline, and deliverables. Contact us for a free, no-obligation consultation tailored to your business needs.'
    },
    {
      q: 'How long does a web development project take?',
      a: 'A standard business website takes 2 to 4 weeks. A custom web application with user authentication, database and admin panel takes 6 to 10 weeks. A full SaaS platform takes 10 to 16 weeks. Every project begins with a discovery session that produces a milestone-based timeline you can rely on.',
    },
    {
      q: 'What is the difference between a website and a web application?',
      a: 'A website is primarily informational — it presents content to visitors. A web application is interactive — users log in, input data, trigger workflows and interact with dynamic content. Examples include dashboards, booking systems, CRM platforms, e-commerce stores and SaaS products. DevZore builds both.',
    },
    {
      q: 'Do you build SEO-optimised websites?',
      a: 'Yes. Every website we build is engineered with SEO from day one — server-side rendering with Next.js, structured data and schema markup, semantic HTML heading structure, canonical tags, XML sitemaps, Core Web Vitals optimisation, fast load times and mobile-first responsive design. We have helped clients achieve significant improvements in Google rankings.',
    },
    {
      q: 'Can you handle high traffic and scale my web application?',
      a: 'Yes. We design for scalability from the first sprint — horizontal scaling on cloud infrastructure, database query optimisation, Redis caching, CDN configuration and load testing before launch. Our web applications are designed to handle 10x expected traffic from day one.',
    },
    {
      q: 'Which countries do you serve for web development?',
      a: 'DevZore is based in Islamabad, Pakistan and serves clients worldwide. We have delivered web development projects for clients in the United States, United Kingdom, United Arab Emirates, Canada, Australia, Saudi Arabia, Qatar and Pakistan. We work fully remotely with flexible meeting times across all time zones.',
    },
    {
      q: 'Do you use React or Next.js for web development?',
      a: 'Both — and we choose based on your needs. React is ideal for complex single-page applications and dashboards. Next.js adds server-side rendering and is better for SEO-critical websites, e-commerce and content-heavy platforms. Most of our client projects use Next.js for the frontend and Node.js with Express for the backend.',
    },
    {
      q: 'Will I own the source code after the project?',
      a: 'Absolutely. You own 100 percent of the source code, repository, design files and all project assets from day one. Code lives in your GitHub organisation. We never hold code hostage, use proprietary frameworks you cannot maintain without us, or charge licensing fees on software we build for you.',
    },
  ];

  const colorMap = {
    blue: d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600',
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    yellow: d ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' : 'bg-yellow-50 border-yellow-100 text-yellow-600',
    green: d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-100 text-green-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
    gray: d ? 'bg-white/[0.06] border-white/[0.1] text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600',
  };

  const inp = `flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center`;

  return (
    <>
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>Custom Web Development Services | React Next.js Node.js | DevZore Pakistan</title>
        <meta name="description" content="DevZore offers custom web development services using React.js, Next.js and Node.js from Islamabad, Pakistan. We build fast, SEO-optimised web applications, business websites, SaaS platforms and e-commerce stores for clients across USA, UK, UAE and worldwide." />
        <link rel="canonical" href="https://devzore.com/web-development" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore — Muhammad Shoukat" />
        <meta name="keywords" content="custom web development Pakistan, web development company Islamabad, React.js development Pakistan, Next.js development company, Node.js web development, web application development Pakistan, hire web developer Pakistan, web development agency Islamabad, business website development Pakistan, web development services USA clients Pakistan, web development UK clients, SEO web development Pakistan, responsive web design Islamabad, full stack web development Pakistan" />

        {/* ── GEO ── */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* ── OG ── */}
        <meta property="og:title" content="Custom Web Development Services | React Next.js | DevZore Pakistan" />
        <meta property="og:description" content="Custom web development from DevZore, Islamabad Pakistan — React.js, Next.js, Node.js. Fast, SEO-optimised web applications for global clients." />
        <meta property="og:url" content="https://devzore.com/web-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />

        {/* ── Twitter ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Web Development Services | DevZore Pakistan" />
        <meta name="twitter:description" content="React.js, Next.js and Node.js web development from Islamabad. Fast, SEO-ready, scalable." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />

        {/* ── Schema ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom Web Development Services",
          "description": "DevZore provides custom web development services using React.js, Next.js and Node.js from Islamabad, Pakistan. We build fast, SEO-optimised web applications for clients worldwide.",
          "url": "https://devzore.com/web-development",
          "provider": {
            "@type": "Organization",
            "name": "DevZore",
            "url": "https://devzore.com",
            "telephone": "+92-334-8004300",
            "email": "hellodevzore@gmail.com",
            "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" },
            "areaServed": "Worldwide",
            "sameAs": ["https://github.com/muhammadshoukat2030", "https://www.linkedin.com/in/dev-zore-833893418"]
          },
          "serviceType": "Web Development",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": whatWeBuild.map((item, i) => ({
              "@type": "Offer",
              "position": i + 1,
              "name": item.title,
              "description": item.desc
            }))
          }
        })}</script>

        {/* ── FAQ Schema ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>

        {/* ── Breadcrumb Schema ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://devzore.com" },
            { "@type": "ListItem", "position": 2, "name": "All Services", "item": "https://devzore.com/allservices" },
            { "@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://devzore.com/web-development" }
          ]
        })}</script>

        {/* ── HowTo Schema (Process) ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How DevZore Delivers a Web Development Project",
          "description": "DevZore's 6-step web development process from discovery to post-launch support.",
          "step": process.map(p => ({
            "@type": "HowToStep",
            "name": p.title,
            "text": p.desc
          }))
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* ── HERO ── */}
        <section aria-labelledby="webdev-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-13 items-center">
              <div>
                {/* GEO + availability badge */}
                <div className="flex flex-wrap gap-3 mb-1">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    Web Development Service
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'
                    }`}>
                    <Globe size={10} />Worldwide Clients
                  </div>
                </div>

                <h1 id="webdev-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Custom Web Development{' '}
                  <span className="text-purple-600">Services</span> That Rank, Convert and Scale
                </h1>

                {/* AI search optimized subtitle */}
                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  React.js · Next.js · Node.js · Islamabad, Pakistan · Serving USA, UK, UAE Worldwide
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a custom web development company based in Islamabad, Pakistan, building
                  high-performance web applications, business websites, SaaS platforms and e-commerce stores
                  for clients across the United States, United Kingdom, UAE, Canada and Australia.
                  We use React.js, Next.js and Node.js — modern technologies that deliver fast load times,
                  excellent SEO and long-term scalability.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  Whether you need a corporate website that ranks on Google, a web application that automates
                  your business workflows, or a full SaaS product — DevZore delivers senior-level engineering
                  at transparent fixed pricing with 100% source code ownership.
                </p>

                {/* Trust indicators */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { val: '50+', label: 'Projects Delivered' },
                    { val: '5.0', label: 'Client Rating' },
                    { val: '15+', label: 'Countries Served' },
                    { val: '24hr', label: 'Response Time' },
                  ].map((s, i) => (
                    <div key={i} className={`p-3 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <div className={`text-xl font-black ${d ? 'text-white' : 'text-gray-900'}`}>{s.val}</div>
                      <div className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Get Free Web Development Quote <ArrowRight size={14} />
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need a web development quote."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right: Key capabilities */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  What We Deliver
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'SEO-Optimised Websites', desc: 'Next.js SSR, structured data, Core Web Vitals, Lighthouse 95+' },
                    { title: 'Custom Web Applications', desc: 'React dashboards, portals, booking systems, CRM tools' },
                    { title: 'E-Commerce Platforms', desc: 'Stripe, PayPal, multi-vendor, real-time inventory' },
                    { title: 'SaaS Product Development', desc: 'Multi-tenant, subscription billing, analytics dashboards' },
                    { title: 'REST & GraphQL APIs', desc: 'Node.js, Express, scalable microservices architecture' },
                    { title: 'Performance & Speed Optimisation', desc: 'CDN, caching, image optimisation, bundle reduction' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 pb-4 border-b last:border-0 ${d ? 'border-white/[0.05]' : 'border-gray-100'}`}>
                      <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className={`text-[13px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                        <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* GEO serving strip */}
                <div className={`mt-5 p-3 rounded-xl ${d ? 'bg-purple-600/5' : 'bg-purple-50'}`}>
                  <p className={`text-[11px] font-semibold text-center ${d ? 'text-purple-400' : 'text-purple-700'}`}>
                    🌍 Serving: Pakistan · USA · UK · UAE · Canada · Australia · Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ── */}
        <section aria-labelledby="whatwebuild-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>What We Build</div>
              <h2 id="whatwebuild-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Web Development Solutions for Every Business Need
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From simple business websites to complex enterprise web applications —
                DevZore has delivered web projects across real estate, healthcare, fintech,
                e-commerce, logistics, EdTech and more for clients in Pakistan, USA, UK and UAE.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeBuild.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section aria-labelledby="techstack-heading" className={`py-15 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="techstack-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Web Development Technology Stack
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Modern, production-proven technologies chosen for performance, SEO and long-term maintainability
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techStack.map((cat, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                  <p className={`text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500`}>{cat.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech, j) => (
                      <span key={j} className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border ${d ? 'bg-white/[0.04] border-white/[0.08] text-gray-300' : 'bg-white border-gray-200 text-gray-700'
                        }`}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE DEVZORE ── */}
        <section aria-labelledby="why-heading" className={`py-20 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>Why DevZore</div>
              <h2 id="why-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Why Businesses Choose DevZore for Web Development
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                There are hundreds of web development agencies in Pakistan. Here is why clients from USA,
                UK, UAE and beyond consistently choose DevZore — and keep coming back for more projects.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}>
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'
                    }`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section aria-labelledby="process-heading" className={`py-20 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>Our Process</div>
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                How Our Web Development Process Works
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                A transparent, structured 6-step process from discovery to launch — with no black boxes and no surprises
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                  <div className={`text-[13px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section aria-label="Industries served" className={`py-20 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className={`text-2xl font-black mb-8 ${d ? 'text-white' : 'text-gray-900'}`}>
              Industries We Serve with Web Development
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { name: 'Real Estate & PropTech', icon: '🏠', desc: 'Property portals, agent CRM' },
                { name: 'Healthcare & MedTech', icon: '🏥', desc: 'Patient portals, telemedicine' },
                { name: 'E-Commerce & Retail', icon: '🛒', desc: 'Custom stores, marketplaces' },
                { name: 'Fintech & Banking', icon: '💳', desc: 'Financial dashboards, payments' },
                { name: 'EdTech & E-Learning', icon: '🎓', desc: 'LMS platforms, course delivery' },
                { name: 'Logistics & Supply Chain', icon: '🚚', desc: 'Fleet tracking, route management' },
                { name: 'Food & Restaurant', icon: '🍽️', desc: 'Ordering systems, POS platforms' },
                { name: 'Travel & Hospitality', icon: '✈️', desc: 'Booking engines, travel apps' },
                { name: 'Construction & Engineering', icon: '🏗️', desc: 'Project management, reporting' },
                { name: 'HR & Enterprise Software', icon: '👥', desc: 'HRMS, payroll, onboarding' },
                { name: 'Non-Profit & NGO', icon: '🌱', desc: 'Donor platforms, campaigns' },
                { name: 'SaaS & B2B Tools', icon: '⚙️', desc: 'Multi-tenant SaaS platforms' },
              ].map((ind, i) => (
                <div key={i} className={`p-4 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-white border-gray-200'}`}>
                  <span className="text-xl block mb-1.5">{ind.icon}</span>
                  <p className={`text-[12px] font-bold leading-tight ${d ? 'text-gray-200' : 'text-gray-800'}`}>{ind.name}</p>
                  <p className={`text-[10px] mt-0.5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className={`py-20 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Web Development FAQ
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Common questions about our web development services
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-xl border overflow-hidden transition-all duration-300 ${activeFaq === i
                    ? d ? 'border-purple-500/40 bg-purple-600/5' : 'border-purple-200 bg-purple-50/50'
                    : d ? 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    aria-expanded={activeFaq === i}
                    className="w-full p-5 text-left flex items-start justify-between gap-4">
                    <span className={`text-[14px] font-bold ${activeFaq === i ? 'text-purple-500' : d ? 'text-white' : 'text-gray-900'}`}>{faq.q}</span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${activeFaq === i ? 'bg-purple-600 text-white' : d ? 'bg-white/[0.06] text-gray-500' : 'bg-gray-100 text-gray-500'}`}>
                      {activeFaq === i ? <Minus size={13} /> : <Plus size={13} />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`px-5 pb-5 pt-0 border-t text-[14px] leading-relaxed ${d ? 'border-white/[0.06] text-gray-400' : 'border-purple-100 text-gray-600'}`}>
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'MERN Stack Development', path: '/mern-stack-development' },
                { label: 'React.js Development', path: '/reactdevelopment' },
                { label: 'Backend & API Development', path: '/backend-api' },
                { label: 'SaaS Development', path: '/saas-product-development' },
                { label: 'E-Commerce Development', path: '/ecommerce' },
                { label: 'Mobile App Development', path: '/mobile-apps' },
                { label: 'UI/UX Design', path: '/ui-ux-design' },
                { label: 'Startup MVP Development', path: '/startup-mvp' },
                { label: 'All Services', path: '/allservices' },
              ].map((link, i) => (
                <Link key={i} to={link.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-lg border transition-all ${d
                      ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:border-purple-500/30 hover:text-purple-400'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-purple-200 hover:text-purple-700'
                    }`}>
                  {link.label} <ExternalLink size={10} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section aria-label="Contact DevZore for web development" className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
              Ready to Build Your Web Application?
            </h2>
            <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Get a free consultation and honest quote from our senior web development team.
              Based in Islamabad, Pakistan — serving clients worldwide.
            </p>
            <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              📍 Islamabad, Pakistan · React.js · Next.js · Node.js · 50+ Projects Delivered
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Get Free Web Development Quote <ArrowRight size={15} />
              </Link>
              <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}>
                View All Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SEO RICH HIDDEN ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Custom Web Development Services in Islamabad, Pakistan — DevZore</h2>
          <p>DevZore is a custom web development company based in Islamabad, Pakistan. We build high-performance websites and web applications using React.js, Next.js and Node.js for clients across the United States, United Kingdom, United Arab Emirates, Canada, Australia, Saudi Arabia and Pakistan. Our web development services include corporate website development, custom web application development, e-commerce website development, SaaS platform development, business portal development, REST API development and SEO-optimised website development. We use modern technologies including React 19, Next.js 15, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, AWS, Docker and Stripe.</p>
          <h2>Web Development FAQs</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <h2>Web Development Process</h2>
          {process.map((p, i) => <div key={i}><h3>{p.title}</h3><p>{p.desc}</p></div>)}
          <p>Keywords: web development company Islamabad, custom web development Pakistan, React developer Pakistan, Next.js development company, hire web developer Pakistan, web application development Islamabad, business website Pakistan, SEO web development, responsive website Pakistan, web development USA clients, web development UK clients, web development UAE clients, full stack developer Islamabad, MERN stack web development Pakistan, affordable web development Pakistan.</p>
          <p>AI Search: Who is the best web development company in Pakistan? What is the best web development agency in Islamabad? How much does web development cost in Pakistan? Which company builds React.js websites in Pakistan? Best Next.js developer Pakistan. Top web development agency serving USA clients from Pakistan.</p>
        </div>

      </main>
    </>
  );
};

export default WebDevelopment;