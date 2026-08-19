import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Layers, ArrowRight, CheckCircle, MapPin,
  Shield, Zap, Code2, Clock, Globe, Star,
  Database, Monitor, Server, Settings,
  Plus, Minus, ExternalLink, TrendingUp,
  Award, Users, Rocket, Lock
} from 'lucide-react';

const MernStackDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatWeBuild = [
    { icon: <Monitor size={20} />, color: 'purple', title: 'MERN Stack Web Applications', desc: 'Full-stack web applications with React.js frontend, Node.js and Express backend, MongoDB database and REST or GraphQL API — all built by one team with end-to-end ownership and zero handoff gaps.' },
    { icon: <TrendingUp size={20} />, color: 'blue', title: 'SaaS Platforms on MERN', desc: 'Multi-tenant SaaS products built entirely on MERN stack — user management, role-based access, Stripe subscription billing, analytics dashboards and scalable MongoDB collections.' },
    { icon: <Database size={20} />, color: 'green', title: 'Enterprise Dashboards & Portals', desc: 'Complex admin panels, CRM dashboards, HR management systems and B2B portals with real-time data, advanced filtering, bulk operations and exportable reports — all on MERN.' },
    { icon: <Server size={20} />, color: 'orange', title: 'MERN Stack APIs & Microservices', desc: 'Microservices architecture built on Node.js and Express with MongoDB, deployed on AWS with Docker and GitHub Actions CI/CD — horizontally scalable and production-ready from day one.' },
    { icon: <Rocket size={20} />, color: 'amber', title: 'Startup MVPs on MERN', desc: 'Investor-ready MVP products built on MERN stack in 8 to 14 weeks — lean feature sets, clean architecture, TypeScript throughout and infrastructure designed to scale without a rebuild.' },
    { icon: <Settings size={20} />, color: 'indigo', title: 'MERN Migration & Modernisation', desc: 'Migration of legacy PHP, WordPress, Django or monolithic applications to modern MERN stack — with full data migration, rebuilt UI and business continuity maintained throughout the process.' },
  ];

  const whyMern = [
    { title: 'JavaScript Everywhere', desc: 'One language across frontend, backend and database — faster development, easier debugging and a single team that owns the full stack.' },
    { title: 'MongoDB Flexibility', desc: 'Schema-less document database that adapts to changing requirements without expensive migrations — ideal for startups and evolving products.' },
    { title: 'React Performance', desc: 'Virtual DOM, component reusability and a massive ecosystem make React the most battle-tested frontend library for complex web applications.' },
    { title: 'Node.js Scalability', desc: 'Non-blocking I/O handles thousands of concurrent connections efficiently — perfect for real-time features, APIs and high-traffic applications.' },
    { title: 'Rapid Development', desc: 'Shared JavaScript knowledge across the entire stack means faster iteration, smaller teams and significantly lower development cost.' },
    { title: 'Massive Ecosystem', desc: 'npm has over 2 million packages. Whatever your requirement — there is a well-maintained library that solves it without building from scratch.' },
  ];

  const techStack = [
    { category: 'M — MongoDB', items: ['MongoDB Atlas', 'Mongoose ODM', 'Aggregation Pipelines', 'Atlas Search', 'Change Streams'] },
    { category: 'E — Express.js', items: ['Express.js 5', 'REST APIs', 'GraphQL', 'Middleware Stack', 'Error Handling'] },
    { category: 'R — React.js', items: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'TanStack Query'] },
    { category: 'N — Node.js', items: ['Node.js 22 LTS', 'Socket.io', 'Bull Queue', 'Nodemailer', 'JWT Auth'] },
    { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'AWS EC2 & S3', 'Nginx', 'PM2'] },
    { category: 'Tools', items: ['Stripe', 'Redis', 'Cloudinary', 'Twilio', 'SendGrid'] },
  ];

  const process = [
    { n: '01', title: 'Full-Stack Architecture Design', desc: 'We design the complete MERN architecture — MongoDB schema, Express API structure, React component tree, state management strategy and deployment plan — before writing any code.' },
    { n: '02', title: 'Database & API Foundation', desc: 'MongoDB collections, Mongoose schemas, Express routes, authentication system and core CRUD APIs built with full test coverage in the first sprint.' },
    { n: '03', title: 'React UI Development', desc: 'Component-driven React development with TypeScript, TanStack Query for server state, Tailwind CSS for styling and Storybook documentation for the component library.' },
    { n: '04', title: 'Integration & Advanced Features', desc: 'Payment gateways, third-party APIs, real-time features with Socket.io, email/SMS services and any complex business logic implemented and tested end-to-end.' },
    { n: '05', title: 'Security Audit & Performance Tuning', desc: 'OWASP testing, MongoDB query optimisation, React bundle analysis, Redis caching implementation, load testing and Lighthouse performance scoring.' },
    { n: '06', title: 'Deployment & Handover', desc: 'Docker containerisation, CI/CD pipeline setup, AWS or Vercel deployment, production monitoring, admin training and 30 days post-launch support.' },
  ];

  const faqs = [
    { q: 'What is MERN stack development?', a: 'MERN stack is a full-stack JavaScript development approach using four technologies: MongoDB (database), Express.js (backend framework), React.js (frontend UI library) and Node.js (server runtime). Using JavaScript across the entire application — from database to user interface — means one team can own the full product, reducing complexity, handoff friction and development cost significantly.' },
    { q: 'How much does MERN stack development cost?', a: 'The cost of a MERN stack project depends on your business requirements, project scope, features, and overall complexity. After a free discovery call, we provide a customized proposal with a clear project scope, deliverables, timeline, and development plan. Contact us for a free, no-obligation consultation tailored to your needs.' },
    { q: 'How long does a MERN stack project take?', a: 'A simple MERN web application takes 6 to 10 weeks. A full SaaS platform takes 12 to 18 weeks. A startup MVP takes 8 to 14 weeks. An enterprise portal or complex dashboard takes 14 to 20 weeks. Every project starts with a discovery session producing a milestone-based timeline with fortnightly sprint reviews on a live staging environment.' },
    { q: 'Is MERN stack good for large-scale applications?', a: 'Yes. MERN stack scales well for large applications when architected correctly. DevZore designs for scale from day one — horizontal scaling on AWS, MongoDB Atlas auto-scaling, Redis caching for hot data, React code splitting for fast load times and microservices separation for independent deployment. Several of our clients run MERN applications handling 100,000+ daily active users.' },
    { q: 'Do you use TypeScript with MERN stack?', a: 'Yes. We use TypeScript across the entire MERN stack — on the React frontend, Node.js backend and shared type definitions. TypeScript catches bugs at compile time, improves code documentation and makes the codebase significantly easier to maintain as it grows. We consider TypeScript non-optional on any production MERN application.' },
    { q: 'Can MERN stack be used for mobile apps?', a: 'Yes. We build the Node.js and Express backend with both web and mobile consumption in mind. The same API powers the React.js web frontend and a React Native mobile app — sharing authentication, business logic and data models. This approach is significantly more cost-effective than building separate backends for web and mobile.' },
    { q: 'Do you integrate payment gateways in MERN applications?', a: 'Yes. We integrate Stripe, PayPal, JazzCash and Easypaisa into MERN stack applications with proper webhook handling, subscription billing, refund flows and idempotent payment processing. We have delivered payment integrations for clients in Pakistan, UAE, UK and USA across dozens of MERN projects.' },
    { q: 'Why choose DevZore for MERN stack development in Pakistan?', a: 'DevZore is a specialist MERN stack development agency based in Islamabad, Pakistan. We have delivered 30+ full-stack JavaScript projects with a 5.0 client rating. You get senior engineers only, direct developer access, TypeScript-first codebases, comprehensive documentation, fixed pricing and 100% source code ownership. We serve clients across USA, UK, UAE, Canada and Australia — at significantly better value than Western agencies.' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue: d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600',
    green: d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-100 text-green-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
    amber: d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-amber-50 border-amber-100 text-amber-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600',
  };

  return (
    <>
      <Helmet>
        {/* ── Primary SEO — Maximum Keywords ── */}
        <title>MERN Stack Development Company Pakistan | MongoDB Express React Node.js | DevZore Islamabad</title>
        <meta name="description" content="DevZore is a MERN stack development company based in Islamabad, Pakistan. We build full-stack web applications, SaaS platforms, dashboards and MVPs using MongoDB, Express.js, React.js and Node.js. Trusted by 30+ clients across USA, UK, UAE, Canada and Australia. Free consultation available." />
        <link rel="canonical" href="https://devzore.com/mern-stack-development" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore — Muhammad Shoukat" />
        <meta name="keywords" content="MERN stack development Pakistan, MERN stack company Islamabad, MongoDB Express React Node Pakistan, full stack JavaScript development Pakistan, MERN stack developer Pakistan, hire MERN developer Islamabad, MERN stack web application Pakistan, MERN stack SaaS development Pakistan, full stack development company Pakistan, MongoDB development Pakistan, Express.js development Pakistan, React Node.js Pakistan, MERN stack USA clients Pakistan, MERN stack UK clients, MERN stack UAE clients, MERN stack development agency Pakistan, JavaScript full stack Pakistan, MERN stack project Pakistan, best MERN developer Pakistan, MERN stack cost Pakistan" />

        {/* ── GEO ── */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* ── OG ── */}
        <meta property="og:title" content="MERN Stack Development Company Pakistan | MongoDB Express React Node | DevZore" />
        <meta property="og:description" content="Full-stack MERN development from DevZore, Islamabad Pakistan. MongoDB, Express, React, Node.js. 30+ projects, 5.0 rating, USA UK UAE clients served." />
        <meta property="og:url" content="https://devzore.com/mern-stack-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />

        {/* ── Twitter ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MERN Stack Development Company Pakistan | DevZore Islamabad" />
        <meta name="twitter:description" content="MongoDB, Express, React, Node.js — full-stack JavaScript from Islamabad. Free consultation available." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />

        {/* ── Service Schema ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "MERN Stack Development Services",
          "alternateName": ["MongoDB Express React Node Development", "Full Stack JavaScript Development", "MERN Stack Company Pakistan"],
          "description": "DevZore provides MERN stack development services — MongoDB, Express.js, React.js and Node.js — from Islamabad, Pakistan for clients worldwide.",
          "url": "https://devzore.com/mern-stack-development",
          "provider": {
            "@type": "Organization",
            "name": "DevZore",
            "url": "https://devzore.com",
            "telephone": "+92-334-8004300",
            "email": "hellodevzore@gmail.com",
            "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" },
            "areaServed": ["Pakistan", "United States", "United Kingdom", "United Arab Emirates", "Canada", "Australia"]
          },
          "serviceType": "MERN Stack Development",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "MERN Stack Services",
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
            { "@type": "ListItem", "position": 3, "name": "MERN Stack Development", "item": "https://devzore.com/mern-stack-development" }
          ]
        })}</script>

        {/* ── HowTo Schema ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How DevZore Delivers a MERN Stack Project",
          "description": "DevZore's 6-step MERN stack development process from architecture to deployment.",
          "step": process.map(p => ({ "@type": "HowToStep", "name": p.title, "text": p.desc }))
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Hero */}
        <section aria-labelledby="mern-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex flex-wrap gap-1 mb-1">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />MERN Stack Development
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <Globe size={10} />Worldwide Clients
                  </div>
                </div>

                <h1 id="mern-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  MERN Stack Development{' '}
                  <span className="text-purple-600">Company in Pakistan</span>
                </h1>

                {/* AI + keyword optimized subtitle */}
                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  MongoDB · Express.js · React.js · Node.js · Full Stack JavaScript · Islamabad Pakistan · USA UK UAE
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a MERN stack development company based in Islamabad, Pakistan,
                  specialising in full-stack JavaScript web application development using
                  <strong className={d ? 'text-white' : 'text-gray-900'}> MongoDB, Express.js, React.js and Node.js</strong>.
                  We build web applications, SaaS platforms, enterprise dashboards, e-commerce stores
                  and startup MVPs on MERN stack for clients across the USA, UK, UAE, Canada and Australia.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  Our MERN stack development team uses TypeScript across the full stack, follows OWASP
                  security standards, writes comprehensive test coverage and delivers clean, documented
                  code with CI/CD pipelines — so you own a product that scales, not just one that works.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  With 30+ MERN stack projects delivered and a 5.0 client rating across 15+ countries,
                  DevZore is the trusted MERN stack agency for startups and enterprises who want
                  US and UK quality software engineering at significantly better value.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { val: '30+', label: 'MERN Projects' },
                    { val: '5.0', label: 'Client Rating' },
                    { val: '15+', label: 'Countries' },
                    { val: '4+', label: 'Years MERN Exp' },
                  ].map((s, i) => (
                    <div key={i} className={`p-3 rounded-xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <div className={`text-xl font-black ${d ? 'text-white' : 'text-gray-900'}`}>{s.val}</div>
                      <div className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Get Free MERN Stack Quote <ArrowRight size={14} />
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need a MERN stack development quote."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* MERN Stack explanation */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-6 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  The MERN Stack — Explained
                </p>
                <div className="space-y-5">
                  {[
                    { letter: 'M', name: 'MongoDB', role: 'Database', color: 'text-green-500', bg: d ? 'bg-green-500/10' : 'bg-green-50', desc: 'NoSQL document database — flexible schema, Atlas cloud hosting, scales to billions of documents with horizontal sharding.' },
                    { letter: 'E', name: 'Express.js', role: 'Backend Framework', color: 'text-gray-400', bg: d ? 'bg-white/[0.06]' : 'bg-gray-100', desc: 'Minimal, fast Node.js web framework — REST API routing, middleware stack, authentication and business logic layer.' },
                    { letter: 'R', name: 'React.js', role: 'Frontend UI', color: 'text-blue-400', bg: d ? 'bg-blue-500/10' : 'bg-blue-50', desc: 'Component-driven UI library — virtual DOM, hooks, server components, TypeScript and the world\'s largest frontend ecosystem.' },
                    { letter: 'N', name: 'Node.js', role: 'Server Runtime', color: 'text-green-400', bg: d ? 'bg-green-500/10' : 'bg-green-50', desc: 'JavaScript server runtime — non-blocking I/O, handles 10,000+ concurrent connections and powers the Express backend.' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-white border-gray-100'}`}>
                      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-lg font-black ${item.color}`}>{item.letter}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className={`text-[14px] font-black ${d ? 'text-white' : 'text-gray-900'}`}>{item.name}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${d ? 'bg-white/[0.06] text-gray-500' : 'bg-gray-100 text-gray-400'}`}>{item.role}</span>
                        </div>
                        <p className={`text-[12px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`mt-5 p-3 rounded-xl ${d ? 'bg-purple-600/5' : 'bg-purple-50'}`}>
                  <p className={`text-[11px] font-semibold text-center ${d ? 'text-purple-400' : 'text-purple-700'}`}>
                    🌍 Serving: Pakistan · USA · UK · UAE · Canada · Australia · Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section aria-labelledby="whatwebuild-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="whatwebuild-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                What We Build with MERN Stack
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From simple business web apps to complex enterprise platforms — DevZore has built
                MERN stack products across real estate, healthcare, fintech, e-commerce, logistics,
                EdTech and SaaS for clients in Pakistan, USA, UK, UAE and Canada.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeBuild.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why MERN */}
        <section aria-labelledby="whymern-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="whymern-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Why MERN Stack? Why DevZore?
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                MERN stack is the most popular full-stack JavaScript framework for good reason —
                and DevZore is Islamabad's specialist MERN development agency with the track record to prove it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {whyMern.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <CheckCircle size={16} className="text-purple-500 mb-3" />
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Comparison: DevZore vs Others */}
            <div className={`p-8 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
              <h2 className={`text-xl font-black mb-6 ${d ? 'text-white' : 'text-gray-900'}`}>
                Why DevZore for MERN Stack — vs Other Agencies
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${d ? 'border-white/[0.08]' : 'border-gray-100'}`}>
                      <th className={`text-left py-3 px-4 text-[11px] font-bold uppercase ${d ? 'text-gray-500' : 'text-gray-400'}`}>Factor</th>
                      <th className="text-center py-3 px-4">
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">✦ DevZore</span>
                      </th>
                      <th className={`text-center py-3 px-4 text-[11px] font-bold ${d ? 'text-gray-500' : 'text-gray-400'}`}>Other Agencies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['TypeScript across full MERN stack', '✓ Always', '✗ Often skipped'],
                      ['Senior-only MERN engineers', '✓ Every project', '✗ Junior heavy'],
                      ['OWASP security on every API', '✓ Standard', '✗ Add-on cost'],
                      ['Postman + Swagger docs included', '✓ Included', '✗ Extra cost'],
                      ['CI/CD pipeline from day one', '✓ Standard', '✗ Often missing'],
                      ['MongoDB schema design consultation', '✓ Included', '✗ Rarely offered'],
                      ['100% source code ownership', '✓ Always', '✗ Sometimes locked'],
                      ['Fixed pricing — no surprise bills', '✓ Guaranteed', '✗ Hourly creep'],
                    ].map(([factor, devzore, other], i) => (
                      <tr key={i} className={`border-b ${d ? 'border-white/[0.04]' : 'border-gray-50'} ${i % 2 === 0 ? d ? 'bg-white/[0.01]' : 'bg-gray-50/50' : ''}`}>
                        <td className={`py-3 px-4 text-[13px] ${d ? 'text-gray-300' : 'text-gray-700'}`}>{factor}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center gap-1 text-[12px] font-bold text-green-500">
                            <CheckCircle size={12} /> {devzore}
                          </span>
                        </td>
                        <td className={`py-3 px-4 text-center text-[12px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section aria-labelledby="tech-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tech-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Full MERN Stack Technology Arsenal
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Complete MERN stack toolchain used in our production applications
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((cat, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">{cat.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tech, j) => (
                      <span key={j} className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${d ? 'bg-white/[0.04] border-white/[0.08] text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section aria-labelledby="process-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Our MERN Stack Development Process
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From full-stack architecture to production deployment — 6 transparent steps with no surprises
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

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                MERN Stack Development FAQ
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Common questions about MERN stack development from DevZore, Islamabad Pakistan
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-xl border overflow-hidden transition-all duration-300 ${activeFaq === i ? d ? 'border-purple-500/40 bg-purple-600/5' : 'border-purple-200 bg-purple-50/50' : d ? 'border-white/[0.06] bg-white/[0.02]' : 'border-gray-200 bg-white'}`}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}
                    className="w-full p-5 text-left flex items-start justify-between gap-4">
                    <span className={`text-[14px] font-bold ${activeFaq === i ? 'text-purple-500' : d ? 'text-white' : 'text-gray-900'}`}>{faq.q}</span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${activeFaq === i ? 'bg-purple-600 text-white' : d ? 'bg-white/[0.06] text-gray-500' : 'bg-gray-100 text-gray-500'}`}>
                      {activeFaq === i ? <Minus size={13} /> : <Plus size={13} />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`px-5 pb-5 pt-0 border-t text-[14px] leading-relaxed ${d ? 'border-white/[0.06] text-gray-400' : 'border-purple-100 text-gray-600'}`}>
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section aria-label="Related MERN stack services" className={`py-12 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              Related Services — Also Built on MERN
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Development', path: '/web-development' },
                { label: 'SaaS Development', path: '/saas-product-development' },
                { label: 'Backend & API Development', path: '/backend-api' },
                { label: 'E-Commerce Development', path: '/ecommerce' },
                { label: 'React Development', path: '/reactdevelopment' },
                { label: 'Mobile App Development', path: '/mobile-apps' },
                { label: 'Startup MVP Development', path: '/startup-mvp' },
                { label: 'UI/UX Design', path: '/ui-ux-design' },
                { label: 'Maintenance & Support', path: '/maintenance' },
                { label: 'All Services', path: '/allservices' },
              ].map((link, i) => (
                <Link key={i} to={link.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-lg border transition-all ${d ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:border-purple-500/30 hover:text-purple-400' : 'bg-white border-gray-200 text-gray-600 hover:border-purple-200 hover:text-purple-700'}`}>
                  {link.label} <ExternalLink size={10} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
              Ready to Build Your MERN Stack Application?
            </h2>
            <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Get a free consultation from Islamabad's specialist MERN stack development team.
              TypeScript-first. OWASP secure. Fixed pricing. 100% code ownership.
            </p>
            <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              📍 Islamabad, Pakistan · MongoDB · Express.js · React.js · Node.js · 30+ Projects Delivered
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Get Free MERN Stack Quote <ArrowRight size={15} />
              </Link>
              <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                View All Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* SEO + AI Rich Hidden Block */}
        <div className="sr-only" aria-hidden="false">
          <h2>MERN Stack Development Company in Islamabad, Pakistan — DevZore</h2>
          <p>DevZore is a specialist MERN stack development company based in Islamabad, Pakistan. We build full-stack web applications, SaaS platforms, enterprise dashboards, e-commerce stores and startup MVPs using MongoDB, Express.js, React.js and Node.js — the MERN stack. Our MERN stack development team uses TypeScript across the full stack, follows OWASP security standards and delivers production-ready applications with CI/CD pipelines, comprehensive documentation and 100% source code ownership. We have delivered 30+ MERN stack projects with a 5.0 client rating for clients across USA, UK, UAE, Canada, Australia and Pakistan since 2022.</p>
          <h2>MERN Stack Services We Offer</h2>
          {whatWeBuild.map((item, i) => <div key={i}><h3>{item.title}</h3><p>{item.desc}</p></div>)}
          <h2>Frequently Asked Questions About MERN Stack</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <h2>MERN Stack Development Process</h2>
          {process.map((p, i) => <div key={i}><h3>{p.title}</h3><p>{p.desc}</p></div>)}
          <p>Primary Keywords: MERN stack development Pakistan, MERN stack company Islamabad, MongoDB Express React Node Pakistan, full stack JavaScript development Pakistan, hire MERN developer Islamabad, MERN stack web application Pakistan, MERN stack SaaS Pakistan, MERN stack developer Pakistan, best MERN company Pakistan.</p>
          <p>Long-tail Keywords: How much does MERN stack development cost in Pakistan, best MERN stack company Islamabad, MERN stack development for startups Pakistan, hire full stack JavaScript developer Pakistan, MERN stack e-commerce Pakistan, MERN stack SaaS platform Pakistan, affordable MERN development Pakistan.</p>
          <p>AI Search Queries: Who is the best MERN stack developer in Pakistan? Which company builds MERN stack applications in Islamabad? How much does MERN stack development cost in Pakistan? Best full stack JavaScript development company Pakistan. Top MERN stack agency serving USA UK UAE from Pakistan. MERN stack development company Islamabad with good reviews. DevZore MERN stack reviews.</p>
          <p>Location Keywords: MERN stack developer Islamabad, MERN stack company Rawalpindi, full stack developer Pakistan, JavaScript developer Islamabad, MongoDB developer Pakistan, React developer Islamabad, Node.js developer Pakistan, software agency Islamabad MERN.</p>
        </div>

      </main>
    </>
  );
};

export default MernStackDevelopment;
