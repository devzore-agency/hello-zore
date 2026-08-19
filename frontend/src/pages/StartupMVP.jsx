import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Rocket, ArrowRight, CheckCircle, Globe,
  Zap, Clock, Star, Shield, TrendingUp,
  Code2, Users, Award, Layers, Target,
  Plus, Minus, ExternalLink, BarChart3,
  Lightbulb, RefreshCw, Database, Monitor,
  CreditCard, Smartphone
} from 'lucide-react';

const StartupMVP = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const mvpTypes = [
    { icon: <Monitor size={20} />, color: 'purple', title: 'SaaS MVP Platform', desc: 'Multi-tenant SaaS MVPs with core feature set, Stripe subscription billing, user authentication, basic analytics dashboard and the architecture to scale — investor-ready in 10 to 14 weeks.' },
    { icon: <Smartphone size={20} />, color: 'blue', title: 'Mobile App MVP', desc: 'React Native MVP applications for iOS and Android — core user flows, push notifications, authentication, backend API and App Store submission handled. From concept to live in 8 to 12 weeks.' },
    { icon: <Globe size={20} />, color: 'green', title: 'Marketplace MVP', desc: 'Two-sided marketplace MVPs connecting buyers and sellers — vendor onboarding, listing management, search, secure payments and reviews. Lean feature set that validates the marketplace hypothesis fast.' },
    { icon: <Database size={20} />, color: 'orange', title: 'B2B Tool MVP', desc: 'Internal business tools, productivity apps and B2B workflow automation MVPs — data import, core feature loop, team management and the integrations your early customers need to switch.' },
    { icon: <CreditCard size={20} />, color: 'cyan', title: 'Fintech MVP', desc: 'Fintech product MVPs with Stripe, Plaid or Open Banking integration, KYC flows, secure data handling, compliance-conscious architecture and the trust signals institutional investors look for.' },
    { icon: <Layers size={20} />, color: 'indigo', title: 'API-First MVP', desc: 'API-first MVPs where the core product is the API — developer documentation, authentication, rate limiting, usage-based billing and a developer portal that makes the product feel production-ready from day one.' },
  ];

  const mvpPrinciples = [
    { icon: <Target size={15} />, title: 'Validate First, Build Second', desc: 'We help you identify the riskiest assumptions about your product and design the smallest possible MVP that proves or disproves them — saving months of misdirected engineering.' },
    { icon: <Zap size={15} />, title: 'Speed Without Technical Debt', desc: 'Speed does not mean shortcuts. We build MVPs with clean architecture, TypeScript and proper testing — because the fastest path to Series A is not rewriting your codebase at 1,000 users.' },
    { icon: <Users size={15} />, title: 'User Feedback Loop Built In', desc: 'Analytics, session recording, in-app feedback widgets and email sequences are instrumented from launch — giving you real user data within days of going live.' },
    { icon: <TrendingUp size={15} />, title: 'Investor-Ready Output', desc: 'Clean codebase on GitHub, architecture documentation, deployment on scalable infrastructure and a product that demonstrates engineering credibility to technical investors.' },
    { icon: <RefreshCw size={15} />, title: 'Iteration-Ready Architecture', desc: 'MVPs built with DevZore are designed for rapid iteration — feature flags, modular components and a deployment pipeline that pushes to production in under 5 minutes.' },
    { icon: <Shield size={15} />, title: 'Secure and Compliant Foundation', desc: 'Authentication, authorisation, data encryption, GDPR-ready data handling and security headers — built in from the start so compliance is not a blocker when enterprise customers arrive.' },
  ];

  const timeline = [
    { week: 'Week 1', phase: 'Product Strategy', deliverable: 'Feature prioritisation, user story mapping, architecture decision record' },
    { week: 'Week 1–2', phase: 'Design & Prototype', deliverable: 'Figma wireframes, clickable prototype, user flow validation' },
    { week: 'Week 2–4', phase: 'Core Infrastructure', deliverable: 'Auth system, database, API foundation, CI/CD pipeline' },
    { week: 'Week 4–8', phase: 'Feature Development', deliverable: 'Core feature loop, payment integration, key user flows' },
    { week: 'Week 8–10', phase: 'Beta Testing', deliverable: 'Staging deployment, internal testing, early user feedback session' },
    { week: 'Week 10–12', phase: 'Launch & Analytics', deliverable: 'Production deployment, analytics instrumentation, App Store submission' },
    { week: 'Post-launch', phase: 'Iteration Support', deliverable: 'Bug fixes, user feedback analysis, feature v2 planning' },
  ];

  const techStack = [
    { category: 'Frontend', items: ['React.js 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Mobile', items: ['React Native', 'Expo SDK', 'iOS & Android', 'Push Notifications'] },
    { category: 'Backend', items: ['Node.js 22', 'Express.js', 'GraphQL', 'REST APIs', 'Socket.io'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB Atlas', 'Redis', 'Prisma ORM'] },
    { category: 'Billing', items: ['Stripe Subscriptions', 'Usage Billing', 'Webhooks', 'Customer Portal'] },
    { category: 'Analytics', items: ['PostHog', 'Mixpanel', 'Sentry', 'LogRocket', 'Google Analytics'] },
    { category: 'Infra', items: ['AWS', 'Vercel', 'Docker', 'GitHub Actions CI/CD', 'Cloudflare'] },
    { category: 'Auth', items: ['JWT + Refresh Tokens', 'OAuth (Google, GitHub)', 'Magic Links', '2FA'] },
  ];

  const faqs = [
    {
      q: 'What is an MVP and why do I need one?',
      a: 'An MVP (Minimum Viable Product) is the smallest version of your product that delivers core value to your target user and allows you to validate your most critical business assumptions with real data. Rather than spending 18 months building a fully featured product that may miss the market, an MVP lets you launch in weeks, gather real user feedback and iterate toward product-market fit before burning significant capital. DevZore builds MVPs that are lean but production-quality — investor-ready and built to scale.',
    },
    {
      q: 'How long does it take to build an MVP with DevZore?',
      a: 'A web application or SaaS MVP typically takes 10 to 14 weeks from discovery to production launch. A mobile app MVP takes 8 to 12 weeks. A marketplace MVP takes 12 to 16 weeks. The timeline depends heavily on the scope of the core feature set — our first task in every MVP engagement is helping you cut scope aggressively to hit the earliest possible launch date without compromising product quality.',
    },
    {
      q: 'How much does MVP development cost?',
      a: 'The cost of MVP development depends on your product idea, required features, target platforms, and overall project complexity. After a free discovery call, we provide a customized proposal with a clear project scope, development roadmap, timeline, and deliverables. Contact us for a free, no-obligation consultation tailored to your startup or business goals.'
    },
    {
      q: 'What should be in an MVP and what should be left out?',
      a: 'An MVP should contain only the core feature loop that delivers the primary value proposition to your target user. Everything else — advanced reporting, admin panels, third integrations, nice-to-have UI polish — is a v2 feature. DevZore runs a product strategy session at the start of every MVP engagement where we apply the MoSCoW method and Jobs-to-be-Done framework to ruthlessly prioritise the feature set that gets you to first paid user fastest.',
    },
    {
      q: 'Will my MVP be able to scale when I get users?',
      a: 'Yes. DevZore MVPs are built with scalability in mind from the first sprint — not bolted on later. We use auto-scaling cloud infrastructure, horizontally scalable backend architecture, database indexing and query optimisation from day one, and design systems that grow with your product. The difference between a DevZore MVP and a freelancer MVP is that ours does not need a full rewrite when you reach 1,000 users.',
    },
    {
      q: 'Do you help with product strategy and feature prioritisation?',
      a: 'Yes. Product strategy is a core part of our MVP service. We run a structured discovery sprint at the start of every engagement — mapping user stories, defining the core value loop, identifying the riskiest assumptions to validate and ruthlessly cutting scope to the lean feature set that delivers real value fastest. Many founders come to us with 40 features they want in v1. We help them ship 8 features that matter in half the time.',
    },
    {
      q: 'Will the MVP be investor-ready?',
      a: 'Yes. DevZore builds MVPs that demonstrate engineering credibility to technical investors. This means clean, well-structured code on GitHub in your organisation, proper architecture documentation, scalable cloud deployment, test coverage on critical paths, a CI/CD pipeline and a product that loads fast and handles edge cases gracefully. We have helped founders use DevZore-built MVPs to close pre-seed and seed rounds.',
    },
    {
      q: 'Do you continue working with us after MVP launch?',
      a: 'Yes. Most DevZore MVP clients continue with us for v2 feature development, ongoing maintenance and scaling work. We offer 30 days of post-launch support on every MVP, followed by monthly maintenance plans and sprint-based feature development. We build long-term relationships with founders — we want to see your startup succeed, not just deliver a project and disappear.',
    },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue: d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600',
    green: d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-100 text-green-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
    cyan: d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600',
  };

  const CtaStrip = ({ heading, sub }) => (
    <div className={`p-8 rounded-2xl border text-center ${d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'}`}>
      <h3 className={`text-lg font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{heading}</h3>
      <p className={`text-sm mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{sub}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]">
          Get Free MVP Consultation <ArrowRight size={13} />
        </Link>
        <a href="https://wa.me/923348004300?text=Hi DevZore! I want to build an MVP."
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" /></svg>
          WhatsApp
        </a>
        <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`flex items-center gap-2 px-5 py-2.5 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
          All Services
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Startup MVP Development Company | Build MVP Fast | DevZore</title>
        <meta name="description" content="DevZore is a startup MVP development company building investor-ready MVPs in 8 to 14 weeks. SaaS MVPs, mobile app MVPs, marketplace MVPs and B2B tool MVPs with Stripe billing, clean architecture and full code ownership. Free product strategy consultation." />
        <link rel="canonical" href="https://devzore.com/startup-mvp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore" />
        <meta name="keywords" content="startup MVP development, MVP development company, build MVP fast, SaaS MVP development, mobile app MVP, marketplace MVP development, MVP developer for hire, startup product development, MVP development agency, lean MVP development, investor-ready MVP, MVP development cost, how to build an MVP, MVP development timeline, tech startup development, MVP to product development, rapid MVP development, MVP with Stripe, no-code alternative MVP, custom MVP development, affordable MVP development" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="Startup MVP Development Company | Build MVP in 8-14 Weeks | DevZore" />
        <meta property="og:description" content="Investor-ready MVPs in 8 to 14 weeks. SaaS, mobile, marketplace and B2B tool MVPs. Clean code, Stripe billing, scalable architecture. Free strategy consultation." />
        <meta property="og:url" content="https://devzore.com/startup-mvp" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Startup MVP Development | Build Fast | DevZore" />
        <meta name="twitter:description" content="Investor-ready MVPs in 8-14 weeks. SaaS, mobile app and marketplace MVPs. Free strategy session." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Startup MVP Development Services",
          "alternateName": ["MVP Development Company", "Lean MVP Builder", "Investor-Ready MVP Development"],
          "description": "DevZore builds investor-ready startup MVPs in 8 to 14 weeks — SaaS, mobile app, marketplace and B2B tool MVPs with clean architecture and full code ownership.",
          "url": "https://devzore.com/startup-mvp",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" }, "areaServed": "Worldwide" },
          "serviceType": "MVP Development",
          "areaServed": "Worldwide"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://devzore.com" },
            { "@type": "ListItem", "position": 2, "name": "All Services", "item": "https://devzore.com/allservices" },
            { "@type": "ListItem", "position": 3, "name": "Startup MVP Development", "item": "https://devzore.com/startup-mvp" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How DevZore Builds a Startup MVP",
          "description": "DevZore's 7-step MVP development process from product strategy to post-launch iteration.",
          "step": timeline.map(t => ({ "@type": "HowToStep", "name": t.phase, "text": t.deliverable }))
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Hero */}
        <section aria-labelledby="mvp-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> Startup MVP Development
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
                    <Zap size={10} /> Launch in 8–14 Weeks
                  </div>
                </div>

                <h1 id="mvp-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Startup MVP Development{' '}
                  <span className="text-purple-600">From Idea to Investors</span>
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  SaaS MVPs · Mobile App MVPs · Marketplace MVPs · B2B Tools · 8–14 Weeks · Investor-Ready
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a startup MVP development company that helps founders go from idea to
                  investor-ready product in 8 to 14 weeks. We build SaaS MVPs, mobile app MVPs,
                  marketplace platforms and B2B tool MVPs with clean TypeScript codebases, Stripe billing,
                  scalable cloud architecture and 100% source code ownership — for startups across the
                  USA, UK, UAE, Europe, Canada, Australia and beyond.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  Our MVP approach starts with product strategy — ruthlessly cutting scope to the lean
                  feature set that validates your core hypothesis fastest. Then we build with speed
                  and quality simultaneously — no technical debt, no shortcuts, no architecture you
                  will regret at 10,000 users.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  We have helped founders close pre-seed and seed funding rounds with DevZore-built MVPs.
                  We know what technical investors look for — and we build accordingly.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { val: '20+', label: 'MVPs Shipped' },
                    { val: '10wk', label: 'Avg Launch Time' },
                    { val: '5.0', label: 'Founder Rating' },
                    { val: '100%', label: 'Code Ownership' },
                  ].map((s, i) => (
                    <div key={i} className={`p-3 rounded-xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <div className={`text-xl font-black ${d ? 'text-white' : 'text-gray-900'}`}>{s.val}</div>
                      <div className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Get Free MVP Strategy Session <ArrowRight size={14} />
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I want to build an MVP."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" /></svg>
                    WhatsApp
                  </a>
                  <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    All Services
                  </Link>
                </div>
                <p className={`text-[12px] ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                  ⚡ Free strategy session · Fixed pricing · Code ownership · No long-term contracts
                </p>
              </div>

              {/* Right: What MVP includes */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-6 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  Every DevZore MVP Includes
                </p>
                <div className="space-y-3">
                  {[
                    { item: 'Product strategy & feature prioritisation session', note: 'MoSCoW + Jobs-to-be-Done framework' },
                    { item: 'Figma UI/UX design for all core screens', note: 'Wireframes → high-fidelity → prototype' },
                    { item: 'React or React Native frontend with TypeScript', note: 'Clean, component-driven, documented' },
                    { item: 'Node.js backend with REST or GraphQL API', note: 'Scalable, OWASP-secure, documented' },
                    { item: 'Authentication system (email, OAuth, magic links)', note: 'JWT with refresh tokens, 2FA option' },
                    { item: 'Stripe payment or subscription integration', note: 'Plans, trials, webhooks, billing portal' },
                    { item: 'Database design and migration scripts', note: 'PostgreSQL or MongoDB Atlas' },
                    { item: 'CI/CD pipeline on GitHub Actions', note: 'Automated deploy on every merge' },
                    { item: 'Analytics instrumentation (PostHog or Mixpanel)', note: 'Real user data from day one of launch' },
                    { item: 'Production deployment on Vercel or AWS', note: 'Auto-scaling, monitored, backed up' },
                    { item: '30 days post-launch support', note: 'Bug fixes and iteration planning' },
                    { item: '100% source code ownership on your GitHub', note: 'Full transfer, no licensing fees' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 pb-2.5 border-b last:border-0 ${d ? 'border-white/[0.05]' : 'border-gray-100'}`}>
                      <CheckCircle size={12} className="text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className={`text-[12px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>{item.item}</p>
                        <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <div className={`py-6 border-b ${d ? 'border-white/[0.06] bg-purple-600/5' : 'border-gray-100 bg-purple-50'}`}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className={`font-black text-base ${d ? 'text-white' : 'text-gray-900'}`}>Have a startup idea? Let's build your MVP.</p>
              <p className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Free strategy session · 8–14 weeks to launch · Investor-ready output · Fixed pricing</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm">
                Book Strategy Call <ArrowRight size={13} />
              </Link>
              <a href="https://wa.me/923348004300" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm">
                WhatsApp <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* MVP Types */}
        <section aria-labelledby="mvptypes-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="mvptypes-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Types of MVPs We Build
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From SaaS platforms to mobile apps and marketplaces — we have built MVPs across every product category for founders worldwide.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {mvpTypes.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section aria-labelledby="principles-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="principles-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Our MVP Development Philosophy
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                The principles that guide every MVP we build — connecting speed to quality and features to outcomes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {mvpPrinciples.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <CtaStrip heading="Ready to validate your startup idea?" sub="Free product strategy session. We help you define the MVP scope before quoting a price." />
          </div>
        </section>

        {/* Timeline */}
        <section aria-labelledby="timeline-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="timeline-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                MVP Development Timeline — Week by Week
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                A predictable, milestone-driven timeline from strategy to production launch
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {timeline.map((item, i) => (
                <div key={i} className={`flex items-start gap-4 p-5 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className={`flex-shrink-0 text-[11px] font-black w-20 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{item.week}</div>
                  <div className={`w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0`} />
                  <div>
                    <p className={`text-[13px] font-bold mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>{item.phase}</p>
                    <p className={`text-[12px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.deliverable}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section aria-labelledby="tech-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tech-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>MVP Technology Stack</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Production-proven technologies that scale from MVP to enterprise</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((cat, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">{cat.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tech, j) => (
                      <span key={j} className={`text-[10px] font-medium px-2 py-1 rounded-md border ${d ? 'bg-white/[0.04] border-white/[0.08] text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Startup MVP Development FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions from founders about building an MVP with DevZore</p>
            </div>
            <div className="space-y-3 mb-10">
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
            <CtaStrip heading="Ready to discuss your MVP idea?" sub="Free 30-minute strategy session. We will help you define scope, estimate cost and plan the build." />
          </div>
        </section>

        {/* Internal Links */}
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'SaaS Development', path: '/saas-product-development' },
                { label: 'Web Development', path: '/web-development' },
                { label: 'Mobile App Development', path: '/mobile-apps' },
                { label: 'MERN Stack Development', path: '/mern-stack-development' },
                { label: 'Backend & API', path: '/backend-api' },
                { label: 'UI/UX Design', path: '/ui-ux-design' },
                { label: 'React Development', path: '/reactdevelopment' },
                { label: 'E-Commerce Development', path: '/ecommerce' },
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

        {/* Final CTA */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`p-10 rounded-3xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
              <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Ready to Build Your MVP?
              </h2>
              <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Free product strategy session. Fixed pricing. 8 to 14 weeks to launch.
                Investor-ready output. 100% code ownership. 30 days post-launch support.
              </p>
              <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                SaaS MVPs · Mobile App MVPs · Marketplace MVPs · B2B Tools · React · Node.js · Stripe · AWS
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                  Get Free MVP Strategy Session <ArrowRight size={15} />
                </Link>
                <a href="https://wa.me/923348004300?text=Hi DevZore! I want to build an MVP for my startup."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" /></svg>
                  WhatsApp Now
                </a>
                <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                  View All Services <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO + AI Hidden */}
        <div className="sr-only" aria-hidden="false">
          <h2>Startup MVP Development Services — DevZore</h2>
          <p>DevZore is a startup MVP development company building investor-ready minimum viable products for founders worldwide. We develop SaaS MVPs, mobile app MVPs, marketplace MVPs, B2B tool MVPs, fintech MVPs and API-first MVPs using React.js, React Native, Node.js, PostgreSQL, MongoDB, Stripe and AWS. Our MVP development process starts with product strategy and feature prioritisation, followed by Figma design, sprint-based development with fortnightly reviews and production launch in 8 to 14 weeks. All MVPs include TypeScript codebases, CI/CD pipelines, analytics instrumentation and 100% source code ownership.</p>
          <h2>Types of MVPs We Build</h2>
          {mvpTypes.map((item, i) => <div key={i}><h3>{item.title}</h3><p>{item.desc}</p></div>)}
          <h2>MVP Development FAQ</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <h2>MVP Development Timeline</h2>
          {timeline.map((t, i) => <div key={i}><h3>{t.phase}</h3><p>{t.deliverable}</p></div>)}
          <p>Primary Keywords: startup MVP development, MVP development company, build MVP fast, SaaS MVP development, mobile app MVP, marketplace MVP, MVP developer for hire, startup product development, MVP development agency, lean MVP, investor-ready MVP, MVP development cost, MVP development timeline, rapid MVP development, custom MVP development.</p>
          <p>Long-tail Keywords: How much does MVP development cost, how long does MVP development take, best MVP development company for startups, SaaS MVP development company, how to build an MVP in 8 weeks, startup MVP with Stripe, investor-ready MVP development, mobile app MVP development company, marketplace MVP builder, affordable MVP development company.</p>
          <p>AI Search: Who builds startup MVPs? Best MVP development company worldwide. How much does it cost to build an MVP? Who can build my startup idea? Best agency for startup MVP development. MVP development company with good reviews. How to find a developer to build my MVP. Startup MVP development in 10 weeks. DevZore MVP reviews. Investor-ready MVP development agency.</p>
        </div>

      </main>
    </>
  );
};

export default StartupMVP;