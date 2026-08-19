import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Globe, Smartphone, ShoppingCart, Server,
  Layers, Palette, Wrench, Rocket, Code2,
  ArrowRight, CheckCircle, TrendingUp, Shield,
  Clock, Star, Users, Award, Plus, Minus,
  MapPin, MessageSquare, Zap, HeartHandshake
} from 'lucide-react';

const AllServices = ({ isDark }) => {
  const d = isDark;
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeFaq, setActiveFaq] = useState(null);

  const filters = ['All', 'Web', 'Mobile', 'Backend', 'Design', 'Growth'];

  const services = [
    {
      icon: <Globe size={22} />,
      title: 'Custom Web Development',
      subtitle: 'React.js · Next.js · Node.js',
      path: '/web-development',
      filter: 'Web',
      tag: 'Most Popular',
      tagColor: 'purple',
      desc: 'We build custom, high-performance web applications and business websites using React.js and Next.js — engineered for speed, SEO and long-term scalability. From corporate websites to complex web platforms, every project is built mobile-first with Core Web Vitals optimisation that Google rewards.',
      points: [
        'Server-side rendering for better SEO rankings',
        'Core Web Vitals optimised — LCP, FID, CLS',
        'Mobile-first responsive design',
        'Structured data & schema markup built-in',
        'Deployed on Vercel or AWS with CI/CD',
      ],
      keywords: 'custom web development Pakistan, React.js web app Islamabad, Next.js development company',
    },
    {
      icon: <Smartphone size={22} />,
      title: 'Mobile App Development',
      subtitle: 'React Native · iOS · Android',
      path: '/mobile-apps',
      filter: 'Mobile',
      tag: 'Cross-Platform',
      tagColor: 'blue',
      desc: 'Native-grade iOS and Android applications built with React Native. One codebase, both platforms — delivering native performance at significantly lower cost than building separate iOS and Android apps. Trusted by clients across Pakistan, UAE and UK.',
      points: [
        'iOS and Android from a single codebase',
        'App Store and Google Play Store submission',
        'Offline-first architecture with local storage',
        'Push notifications and deep linking',
        'Biometric authentication and secure storage',
      ],
      keywords: 'mobile app development Pakistan, React Native iOS Android, cross-platform app Islamabad',
    },
    {
      icon: <ShoppingCart size={22} />,
      title: 'E-Commerce Development',
      subtitle: 'MERN Stack · Stripe · Multi-vendor',
      path: '/ecommerce',
      filter: 'Web',
      tag: 'High Converting',
      tagColor: 'green',
      desc: 'High-conversion custom e-commerce platforms built to sell. From single-vendor stores to multi-vendor marketplaces — we integrate Stripe, PayPal, JazzCash and Easypaisa with real-time inventory management, order tracking and powerful admin dashboards.',
      points: [
        'Stripe, PayPal, JazzCash & Easypaisa integration',
        'Real-time inventory and order management',
        'Mobile-first checkout with high conversion UX',
        'Multi-vendor marketplace support',
        'Advanced analytics and sales reporting',
      ],
      keywords: 'e-commerce development Pakistan, custom online store Islamabad, Stripe payment integration',
    },
    {
      icon: <Server size={22} />,
      title: 'Backend & API Development',
      subtitle: 'Node.js · Express · REST · GraphQL',
      path: '/backend-api',
      filter: 'Backend',
      tag: 'Scalable',
      tagColor: 'orange',
      desc: 'Robust, secure and highly scalable backend systems and APIs built with Node.js and Express. Whether you need a simple REST API or a complex microservices architecture, we engineer backends that handle millions of requests reliably.',
      points: [
        'RESTful and GraphQL API design',
        'JWT authentication and role-based access control',
        'MongoDB, PostgreSQL and Redis integration',
        'Rate limiting, caching and performance tuning',
        'Comprehensive Postman API documentation',
      ],
      keywords: 'backend API development Pakistan, Node.js development Islamabad, REST API company',
    },
    {
      icon: <Layers size={22} />,
      title: 'MERN Stack Development',
      subtitle: 'MongoDB · Express · React · Node.js',
      path: '/mern-stack-development',
      filter: 'Web',
      tag: 'Full Stack',
      tagColor: 'purple',
      desc: 'Complete full-stack JavaScript development using the proven MERN stack. From database schema design to pixel-perfect React UI — one team owns the entire product. No handoff friction, no communication gaps, no technical debt from misaligned teams.',
      points: [
        'End-to-end ownership by a single senior team',
        'TypeScript across frontend and backend',
        'MongoDB Atlas with optimised schema design',
        'Docker containerisation and CI/CD pipelines',
        'Scalable microservices architecture option',
      ],
      keywords: 'MERN stack development company Pakistan, full stack development Islamabad, MongoDB Express React Node',
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'SaaS Product Development',
      subtitle: 'Multi-tenant · Stripe · Analytics',
      path: '/saas-product-development',
      filter: 'Web',
      tag: 'Product',
      tagColor: 'indigo',
      desc: 'End-to-end SaaS platform engineering for founders and businesses. We build multi-tenant architectures with Stripe subscription billing, analytics dashboards, role-based access control and the scalable cloud infrastructure that growing SaaS products need.',
      points: [
        'Multi-tenant architecture with data isolation',
        'Stripe subscription and billing management',
        'User roles, permissions and team management',
        'Analytics dashboard with real-time metrics',
        'AWS auto-scaling and high availability setup',
      ],
      keywords: 'SaaS development company Pakistan, SaaS product development Islamabad, multi-tenant SaaS',
    },
    {
      icon: <Palette size={22} />,
      title: 'UI/UX Design',
      subtitle: 'Figma · Prototypes · Design Systems',
      path: '/ui-ux-design',
      filter: 'Design',
      tag: 'Design First',
      tagColor: 'pink',
      desc: 'User-centered design that converts visitors into customers. From initial wireframes and Figma prototypes to complete design systems — every pixel is tied to a business outcome. We design products that users love and businesses profit from.',
      points: [
        'Low and high-fidelity Figma wireframes',
        'Interactive clickable prototype before development',
        'Complete design system and component library',
        'Usability testing and iteration',
        'Developer-ready handoff with Figma specs',
      ],
      keywords: 'UI UX design agency Pakistan, Figma design services Islamabad, product design company',
    },
    {
      icon: <Rocket size={22} />,
      title: 'Startup MVP Development',
      subtitle: 'Lean · Investor-Ready · 8–14 Weeks',
      path: '/startup-mvp',
      filter: 'Growth',
      tag: 'Launch Fast',
      tagColor: 'amber',
      desc: 'Investor-ready MVPs delivered in 8 to 14 weeks. We help founders validate ideas, reach early users and attract seed funding — without burning through runway on features that do not matter yet. From idea to live product, structured and fast.',
      points: [
        'Delivered in 8–14 weeks with milestone reviews',
        'Investor-ready output with clean documentation',
        'Core feature prioritisation using lean methodology',
        'User feedback loop built into the process',
        'Post-launch iteration and scaling support',
      ],
      keywords: 'startup MVP development Pakistan, MVP development company Islamabad, launch startup fast',
    },
    {
      icon: <Wrench size={22} />,
      title: 'Website Maintenance & Support',
      subtitle: 'Security · Performance · Updates',
      path: '/maintenance',
      filter: 'Growth',
      tag: 'Ongoing',
      tagColor: 'gray',
      desc: 'Proactive website and application maintenance that keeps your product fast, secure and growing after launch. Monthly security patches, dependency updates, performance monitoring, bug fixes and detailed monthly reports — so you never have to worry.',
      points: [
        '24-hour critical bug response guarantee',
        'Monthly security patches and dependency updates',
        'Performance monitoring with Lighthouse reports',
        'Database backup and disaster recovery',
        'Monthly health report with recommendations',
      ],
      keywords: 'website maintenance services Pakistan, web app support Islamabad, ongoing development support',
    },
    {
      icon: <Code2 size={22} />,
      title: 'React.js Development',
      subtitle: 'React 19 · TypeScript · Hooks',
      path: '/reactdevelopment',
      filter: 'Web',
      tag: 'Frontend Expert',
      tagColor: 'cyan',
      desc: 'Expert React.js development for web applications that need to be fast, maintainable and scalable. We use React 19, TypeScript, modern hooks, TanStack Query and clean component architecture that your team can maintain long after launch.',
      points: [
        'React 19 with TypeScript and strict typing',
        'TanStack Query for server state management',
        'Zustand or Redux for client state',
        'Component library with Storybook documentation',
        'Lighthouse 95+ performance scores',
      ],
      keywords: 'React development company Pakistan, hire React developer Islamabad, React.js web app',
    },
    {
      icon: <Shield size={22} />,
      title: 'DevOps & Cloud Infrastructure',
      subtitle: 'AWS · Docker · CI/CD · Security',
      path: '/backend-api',
      filter: 'Backend',
      tag: 'Infrastructure',
      tagColor: 'red',
      desc: 'Secure cloud infrastructure, automated CI/CD pipelines, Docker containerisation and AWS deployment that keeps your product online, fast and protected. We set up monitoring, alerting and auto-scaling so your infrastructure grows with your business.',
      points: [
        'AWS, Vercel and DigitalOcean deployment',
        'Docker containerisation and orchestration',
        'Automated CI/CD with GitHub Actions',
        'SSL certificates, DDoS protection and firewalls',
        'Uptime monitoring and alerting setup',
      ],
      keywords: 'DevOps services Pakistan, AWS deployment Islamabad, cloud infrastructure company',
    },
  ];

  const faqs = [
    {
      q: 'How much does custom software development cost with DevZore?',
      a: 'Every project is different, so we do not publish fixed rates. After a free discovery call, we produce a detailed fixed-price proposal tied to specific deliverables and milestones. This protects you from billing surprises. Contact us for a free consultation and we will give you an honest estimate within 24 hours.',
    },
    {
      q: 'How long does a typical software project take?',
      a: 'A business website takes 2 to 4 weeks. A custom web application or e-commerce platform takes 6 to 10 weeks. A full SaaS platform or mobile app takes 10 to 16 weeks. A startup MVP is delivered in 8 to 14 weeks. Every project starts with a discovery session that produces a milestone-based timeline you can rely on.',
    },
    {
      q: 'Do you work with international clients outside Pakistan?',
      a: 'Yes — the majority of our clients are international. We have delivered projects for clients in the United States, United Kingdom, United Arab Emirates, Canada, Australia and Saudi Arabia. We work fully remotely with flexible meeting times across all time zones, and our pricing in US dollars and British pounds makes working with us straightforward from any country.',
    },
    {
      q: 'Will I own the source code after the project is complete?',
      a: 'Absolutely. You own 100 percent of the source code, repositories, design files and all project assets from day one. Code lives in your GitHub organisation, infrastructure runs in your cloud accounts, and we never hold your product hostage. You are always free to take the code and work with another team.',
    },
    {
      q: 'What technologies do you specialise in?',
      a: 'Our primary stack is React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, React Native, TypeScript and Tailwind CSS. We deploy on AWS, Vercel and DigitalOcean using Docker and CI/CD pipelines. We integrate Stripe for payments, Socket.io for real-time features and GraphQL for flexible APIs.',
    },
    {
      q: 'Do you provide support and maintenance after launch?',
      a: 'Every project includes 30 days of post-launch support at no extra cost — covering bug fixes, performance monitoring and minor adjustments. After that, we offer monthly maintenance plans covering security patches, dependency updates, performance monitoring and up to 10 hours of development work per month.',
    },
    {
      q: 'How do I communicate with your team during development?',
      a: 'You talk directly to the engineers building your product — no account managers in the middle. We communicate via Slack, WhatsApp, email or video calls. You review real working software on a live staging environment every two weeks, and every message gets a response within 24 hours including weekends.',
    },
    {
      q: 'Can DevZore take over an existing project or codebase?',
      a: 'Yes. We regularly take over existing projects and codebases. We start with a technical audit to identify bugs, security vulnerabilities, performance issues and technical debt. We then produce a findings report and a prioritised improvement plan before any work begins — so you know exactly what you are getting.',
    },
  ];

  const process = [
    { n: '01', title: 'Free Discovery Call', desc: 'We discuss your project goals, requirements and timeline. You leave with clarity on what needs to be built and what it will cost — no commitment required.' },
    { n: '02', title: 'Proposal & Planning', desc: 'We deliver a detailed fixed-price proposal with milestones, deliverables and a realistic timeline. Architecture and tech stack are agreed before development starts.' },
    { n: '03', title: 'Design & Prototype', desc: 'Wireframes and Figma prototypes for every screen. You experience the full product before a single line of production code is written. Changes are fast here.' },
    { n: '04', title: 'Agile Development', desc: 'Development in two-week sprints with a live staging environment updated after every sprint. You review working software every two weeks — not status reports.' },
    { n: '05', title: 'Testing & QA', desc: 'Full QA testing across browsers and devices, security audit, performance optimisation and Lighthouse scoring before any production deployment.' },
    { n: '06', title: 'Launch & Ongoing Support', desc: 'We handle full deployment and monitor the launch. 30 days of post-launch support included. Most clients continue with DevZore for ongoing development.' },
  ];

  const tagColors = {
    purple: d ? 'bg-purple-500/15 text-purple-400 border-purple-500/20' : 'bg-purple-50 text-purple-700 border-purple-200',
    blue: d ? 'bg-blue-500/15 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-700 border-blue-200',
    green: d ? 'bg-green-500/15 text-green-400 border-green-500/20' : 'bg-green-50 text-green-700 border-green-200',
    orange: d ? 'bg-orange-500/15 text-orange-400 border-orange-500/20' : 'bg-orange-50 text-orange-700 border-orange-200',
    indigo: d ? 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border-indigo-200',
    pink: d ? 'bg-pink-500/15 text-pink-400 border-pink-500/20' : 'bg-pink-50 text-pink-700 border-pink-200',
    amber: d ? 'bg-amber-500/15 text-amber-400 border-amber-500/20' : 'bg-amber-50 text-amber-700 border-amber-200',
    gray: d ? 'bg-white/[0.06] text-gray-400 border-white/[0.08]' : 'bg-gray-100 text-gray-600 border-gray-200',
    cyan: d ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border-cyan-200',
    red: d ? 'bg-red-500/15 text-red-400 border-red-500/20' : 'bg-red-50 text-red-700 border-red-200',
  };

  const filtered = activeFilter === 'All' ? services : services.filter(s => s.filter === activeFilter);

  const stats = [
    { icon: <Award size={14} />, val: '50+', label: 'Projects Delivered' },
    { icon: <Users size={14} />, val: '30+', label: 'Happy Clients' },
    { icon: <Globe size={14} />, val: '15+', label: 'Countries Served' },
    { icon: <Star size={14} />, val: '5.0', label: 'Client Rating' },
    { icon: <Clock size={14} />, val: '24hr', label: 'Response Time' },
  ];

  return (
    <>
      <Helmet>
        <title>All Software Development Services | Web, Mobile & SaaS | DevZore Pakistan</title>
        <meta name="description" content="DevZore offers web development, mobile app development, MERN stack, SaaS, e-commerce, UI/UX design and startup MVP development from Islamabad, Pakistan. Trusted by 30+ clients across USA, UK, UAE, Canada and Australia." />
        <link rel="canonical" href="https://devzore.com/allservices" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore — Muhammad Shoukat" />
        <meta name="keywords" content="software development services Pakistan, web development company Islamabad, mobile app development Pakistan, MERN stack development, SaaS development company, e-commerce development Pakistan, UI UX design agency Islamabad, startup MVP development, React developer Pakistan, Node.js development company, full stack developer Islamabad, software house Pakistan" />

        {/* GEO */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* OG */}
        <meta property="og:title" content="All Software Development Services | DevZore Pakistan" />
        <meta property="og:description" content="Web development, mobile apps, MERN stack, SaaS, e-commerce and more — from DevZore, Islamabad. 50+ projects, 5.0 rating, 15+ countries served." />
        <meta property="og:url" content="https://devzore.com/allservices" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Software Development Services | DevZore Pakistan" />
        <meta name="twitter:description" content="Full-cycle software development from DevZore, Islamabad — web, mobile, SaaS and more. Free consultation available." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "All Software Development Services — DevZore",
          "url": "https://devzore.com/allservices",
          "description": "Complete list of software development services offered by DevZore — web development, mobile apps, MERN stack, SaaS, e-commerce, UI/UX and more.",
          "breadcrumb": {
            "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://devzore.com" },
              { "@type": "ListItem", "position": 2, "name": "All Services", "item": "https://devzore.com/allservices" }
            ]
          },
          "provider": {
            "@type": "Organization", "name": "DevZore", "url": "https://devzore.com",
            "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" },
            "contactPoint": { "@type": "ContactPoint", "email": "hellodevzore@gmail.com", "telephone": "+92-334-8004300" }
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "DevZore Services",
            "itemListElement": services.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Service",
                "name": s.title,
                "description": s.desc,
                "url": `https://devzore.com${s.path}`,
                "provider": { "@type": "Organization", "name": "DevZore" }
              }
            }))
          }
        })}</script>

        {/* FAQ Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* ── HERO ── */}
        <section aria-labelledby="allservices-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                  }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  Islamabad, Pakistan — Serving Worldwide
                </div>

                <h1 id="allservices-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Premium Software Development{' '}
                  <span className="text-purple-600">Services</span> for Global Businesses
                </h1>

                <p className={`text-lg leading-relaxed mb-6 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a full-service software development agency based in Islamabad, Pakistan,
                  delivering world-class web applications, mobile apps, SaaS platforms and digital products
                  to startups and enterprises across the USA, UK, UAE, Canada and Australia since 2022.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  Every service we offer is backed by senior engineers, transparent pricing, fixed-scope
                  proposals and a track record of 50+ successful deliveries with a 5.0 client rating.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Get Free Consultation <ArrowRight size={14} />
                  </Link>
                  <a href="#services"
                    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      }`}>
                    Browse Services <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  ...stats,
                  { icon: <HeartHandshake size={14} />, val: '80%', label: 'Client Retention' },
                ].map((s, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'
                    }`}>
                    <span className="text-purple-500 mb-2 block">{s.icon}</span>
                    <div className={`text-2xl font-black mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>{s.val}</div>
                    <div className={`text-[11px] uppercase tracking-wide ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── GEO TRUST STRIP ── */}
        <div className={`py-4 border-b ${d ? 'bg-purple-600/5 border-purple-500/10' : 'bg-purple-50 border-purple-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              <span className={`text-[11px] font-bold flex items-center gap-1.5 ${d ? 'text-purple-400' : 'text-purple-700'}`}>
                <MapPin size={11} /> Based in Islamabad, Pakistan
              </span>
              {['🇵🇰 Pakistan', '🇺🇸 USA', '🇬🇧 UK', '🇦🇪 UAE', '🇨🇦 Canada', '🇦🇺 Australia', '🇸🇦 Saudi Arabia'].map((c, i) => (
                <span key={i} className={`text-[11px] font-medium ${d ? 'text-gray-500' : 'text-gray-500'}`}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── FILTERS ── */}
        <div className={`py-5 border-b sticky top-[70px] z-40 ${d ? 'bg-[#030303]/95 border-white/[0.06] backdrop-blur-xl' : 'bg-white/95 border-gray-100 backdrop-blur-xl'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-200 border ${activeFilter === f
                      ? 'bg-purple-600 text-white border-purple-600 shadow-[0_0_16px_rgba(124,58,237,0.25)]'
                      : d
                        ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                        : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300'
                    }`}>
                  {f}
                  {f === 'All' && (
                    <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${activeFilter === 'All' ? 'bg-white/20' : d ? 'bg-white/[0.08] text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
                      {services.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <section id="services" aria-label="All DevZore software development services" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {filtered.map((svc, i) => (
                <Link
                  to={svc.path}
                  key={i}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  aria-label={`${svc.title} — DevZore service page`}
                  className={`group flex flex-col p-6 rounded-2xl border transition-all duration-300 ${d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/25 hover:shadow-[0_0_24px_rgba(124,58,237,0.06)]'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-md'
                    }`}
                >
                  <span className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full border mb-4 ${tagColors[svc.tagColor]}`}>
                    {svc.tag}
                  </span>

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${d
                        ? 'bg-white/[0.04] border-white/[0.08] text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600'
                        : 'bg-purple-50 border-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600'
                      }`}>
                      {svc.icon}
                    </div>
                    <div>
                      <h2 className={`text-[15px] font-bold leading-tight mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>
                        {svc.title}
                      </h2>
                      <p className={`text-[11px] font-medium ${d ? 'text-gray-500' : 'text-gray-400'}`}>{svc.subtitle}</p>
                    </div>
                  </div>

                  <p className={`text-[13px] leading-relaxed mb-4 flex-grow ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    {svc.desc}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {svc.points.map((pt, j) => (
                      <li key={j} className={`flex items-center gap-2 text-[12px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                        <CheckCircle size={12} className="text-purple-500 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-1.5 text-[12px] font-semibold pt-4 border-t mt-auto ${d ? 'border-white/[0.06] text-purple-400' : 'border-gray-100 text-purple-600'
                    }`}>
                    Learn more about {svc.title}
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>

                  <span className="sr-only">{svc.keywords}</span>
                </Link>
              ))}
            </div>

            {/* Internal Links Section */}
            <div className={`p-8 rounded-2xl border mb-12 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
              <h2 className={`text-[14px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                Explore Individual Service Pages
              </h2>
              <div className="flex flex-wrap gap-2">
                {services.map((s, i) => (
                  <Link key={i} to={s.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition-all ${d
                        ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:border-purple-500/30 hover:text-purple-400 hover:bg-purple-600/10'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-purple-200 hover:text-purple-700 hover:bg-purple-50'
                      }`}>
                    {s.title} <ArrowRight size={10} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section aria-labelledby="process-heading" className={`py-10 border-t border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>How We Work</div>
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Our Development Process
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                A transparent, structured process that keeps you in control at every stage —
                from the first free discovery call to post-launch support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all ${d ? 'bg-white/[0.02] border-white/[0.06] hover:border-purple-500/20' : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm'
                  }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[13px] font-black ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</span>
                    <div className={`h-px flex-1 ${d ? 'bg-white/[0.06]' : 'bg-gray-100'}`} />
                  </div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Start With a Free Discovery Call <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY DEVZORE ── */}
        <section aria-label="Why choose DevZore" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                  }`}>Why DevZore</div>
                <h2 className={`text-3xl font-black mb-5 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Why 30+ Clients from 15+ Countries Choose DevZore
                </h2>
                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  We deliver US and UK quality software engineering from Islamabad, Pakistan —
                  at significantly better value. Senior engineers only. Direct communication.
                  Fixed pricing. Full code ownership. And a 5.0 rating to back it all up.
                </p>
                <div className="space-y-3">
                  {[
                    'Senior engineers on every project — no juniors learning on your budget',
                    'Direct access to your developer — no account managers',
                    'Fixed-price proposals — no billing surprises',
                    '100% source code ownership — yours from day one',
                    'Response within 24 hours — including weekends',
                    '30 days post-launch support included on every project',
                  ].map((pt, i) => (
                    <div key={i} className={`flex items-start gap-3 text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />
                      {pt}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`inline-flex items-center gap-2 text-[13px] font-semibold ${d ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}>
                    Learn more about DevZore <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Award size={16} />, title: '50+ Projects', desc: 'Delivered on time and on budget since 2022' },
                  { icon: <Star size={16} />, title: '5.0 Rating', desc: 'Verified across 30+ international client reviews' },
                  { icon: <Globe size={16} />, title: '15+ Countries', desc: 'USA, UK, UAE, Canada, Australia and more' },
                  { icon: <Clock size={16} />, title: '24hr Response', desc: 'Every message answered within one business day' },
                  { icon: <Zap size={16} />, title: '8–14 Week MVPs', desc: 'Investor-ready products delivered fast' },
                  { icon: <HeartHandshake size={16} />, title: '80% Retention', desc: 'Clients return for ongoing work and new projects' },
                ].map((item, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'
                    }`}>
                    <span className="text-purple-500 mb-2 block">{item.icon}</span>
                    <p className={`text-[14px] font-black mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                    <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>FAQ</div>
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Frequently Asked Questions
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Everything you need to know about working with DevZore.
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
                    <span className={`text-[14px] font-bold leading-snug ${activeFaq === i ? 'text-purple-500' : d ? 'text-white' : 'text-gray-900'
                      }`}>{faq.q}</span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${activeFaq === i ? 'bg-purple-600 text-white' : d ? 'bg-white/[0.06] text-gray-500' : 'bg-gray-100 text-gray-500'
                      }`}>
                      {activeFaq === i ? <Minus size={13} /> : <Plus size={13} />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`px-5 pb-5 pt-0 border-t text-[14px] leading-relaxed ${d ? 'border-white/[0.06] text-gray-400' : 'border-purple-100 text-gray-600'
                      }`}>
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section aria-label="Contact DevZore" className="py-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 ${d ? 'bg-purple-600/15' : 'bg-purple-50'}`}>
              <MessageSquare size={24} className="text-purple-500" />
            </div>
            <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
              Ready to Start Your Project?
            </h2>
            <p className={`text-base mb-4 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Join 30+ clients from USA, UK, UAE, Canada, Australia and Pakistan who trust DevZore
              to build their digital products. Free consultation — response within 24 hours.
            </p>
            <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              📍 Based in Islamabad, Pakistan · Serving clients worldwide since 2022
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Get Free Consultation <ArrowRight size={15} />
              </Link>
              <a href="https://wa.me/923348004300?text=Hi DevZore! I want to discuss a project."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                WhatsApp Us <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ── SEO HIDDEN ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Software Development Services in Islamabad, Pakistan — DevZore</h2>
          <p>DevZore is a full-service software development agency based in Islamabad, Pakistan, offering web development with React.js and Next.js, cross-platform mobile app development with React Native, full-stack MERN stack development, SaaS product engineering, custom e-commerce development, UI/UX design with Figma, startup MVP development, backend API development with Node.js and Express, and ongoing website maintenance. We serve clients across USA, UK, UAE, Canada, Australia and Saudi Arabia. Keywords: software development company Pakistan, web development agency Islamabad, mobile app development Pakistan, MERN stack development company, SaaS development Islamabad, e-commerce development Pakistan, React developer Islamabad, Node.js API development, startup MVP Pakistan, UI UX design agency Pakistan, software house Islamabad, full stack developer Pakistan, hire developer Pakistan, custom software Pakistan.</p>
          <nav aria-label="Internal service links">
            <ul>
              {services.map((s, i) => <li key={i}><a href={s.path}>{s.title} — DevZore Pakistan</a></li>)}
            </ul>
          </nav>
          <h2>Why Choose DevZore for Software Development</h2>
          <p>DevZore offers senior-only engineering teams, direct developer access, fixed pricing, 100 percent source code ownership, 24-hour response guarantee and 30 days post-launch support. We have a 5.0 client rating from 30+ verified reviews and have delivered 50+ projects across 15+ countries since 2022.</p>
          <h2>Our Software Development Process</h2>
          {process.map((p, i) => <div key={i}><h3>{p.title}</h3><p>{p.desc}</p></div>)}
        </div>

      </main>
    </>
  );
};

export default AllServices;