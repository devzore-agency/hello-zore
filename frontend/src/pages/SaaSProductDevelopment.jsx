import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  TrendingUp, ArrowRight, CheckCircle, MapPin,
  Shield, Zap, Code2, Clock, Globe, Star,
  Database, Monitor, Server, Settings, CreditCard,
  Plus, Minus, ExternalLink, Users, BarChart3,
  Layers, Lock, Rocket, Award, RefreshCw
} from 'lucide-react';

const SaaSProductDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    {
      icon: <Users size={20} />, color: 'purple',
      title: 'Multi-Tenant Architecture',
      desc: 'Enterprise-grade multi-tenancy with complete data isolation between tenants. Row-level security, tenant-scoped APIs, custom subdomain routing and white-label support — built to serve thousands of organizations on a single infrastructure.',
    },
    {
      icon: <CreditCard size={20} />, color: 'green',
      title: 'Subscription Billing & Monetisation',
      desc: 'Stripe-powered subscription management with plan tiers, usage-based billing, free trials, coupon codes, invoice generation, dunning automation and a customer billing portal — everything your SaaS revenue engine needs.',
    },
    {
      icon: <BarChart3 size={20} />, color: 'blue',
      title: 'Analytics & Reporting Dashboards',
      desc: 'Real-time business intelligence dashboards with custom KPI widgets, cohort analysis, funnel visualisation, revenue metrics, churn tracking and exportable reports — built with Recharts, D3.js or Chart.js.',
    },
    {
      icon: <Lock size={20} />, color: 'red',
      title: 'Authentication & Team Management',
      desc: 'Multi-provider OAuth (Google, GitHub, Microsoft), passwordless magic links, two-factor authentication, granular role-based access control, team invitations, SSO for enterprise plans and audit logging.',
    },
    {
      icon: <Zap size={20} />, color: 'amber',
      title: 'API-First Architecture',
      desc: 'Public REST and GraphQL APIs with API key management, rate limiting, webhook delivery system, OpenAPI documentation and developer portal — turning your SaaS into a platform that others can build on.',
    },
    {
      icon: <RefreshCw size={20} />, color: 'cyan',
      title: 'Onboarding & User Activation',
      desc: 'Guided onboarding flows, product tours, in-app checklists, empty state design, welcome email sequences and activation tracking — engineered to maximise trial-to-paid conversion from day one.',
    },
    {
      icon: <Server size={20} />, color: 'indigo',
      title: 'Scalable Cloud Infrastructure',
      desc: 'Auto-scaling AWS infrastructure, containerised workloads with Docker and ECS, database connection pooling, Redis caching, CDN configuration, uptime monitoring and automated backup systems.',
    },
    {
      icon: <Settings size={20} />, color: 'orange',
      title: 'Admin & Operations Panel',
      desc: 'Internal super-admin dashboard for tenant management, user impersonation, feature flags, support tooling, billing overrides, usage monitoring and operational insights — the control centre for your SaaS business.',
    },
    {
      icon: <Globe size={20} />, color: 'pink',
      title: 'Internationalisation & Compliance',
      desc: 'i18n multi-language support, timezone handling, GDPR-compliant data processing, cookie consent management, data export and deletion flows, Terms of Service versioning and SOC 2 readiness foundations.',
    },
  ];

  const saasTypes = [
    { title: 'B2B SaaS Platforms', desc: 'Workspace tools, project management, CRM, HR software, analytics platforms and enterprise productivity tools for business customers.' },
    { title: 'Vertical SaaS Solutions', desc: 'Industry-specific platforms for healthcare, legal, construction, real estate, logistics, EdTech and other sectors with domain-specific workflows.' },
    { title: 'Developer Tools & API SaaS', desc: 'API-first products, developer platforms, monitoring tools, infrastructure software and technical SaaS products for engineering teams.' },
    { title: 'Marketplace SaaS', desc: 'Two-sided marketplace platforms combining SaaS business model with marketplace dynamics — connecting suppliers, service providers and buyers.' },
    { title: 'AI-Powered SaaS Products', desc: 'SaaS platforms with OpenAI or Claude integration, custom ML model serving, intelligent automation, copilot features and AI-generated insights.' },
    { title: 'Mobile-First SaaS', desc: 'SaaS products with React Native mobile apps as the primary interface, with web dashboard companion and shared backend infrastructure.' },
  ];

  const techStack = [
    { category: 'Frontend', items: ['React.js 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'TanStack Query'] },
    { category: 'Backend', items: ['Node.js 22', 'Express.js', 'GraphQL', 'REST APIs', 'Bull Queue', 'Socket.io'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB Atlas', 'Redis', 'Prisma ORM', 'Drizzle ORM'] },
    { category: 'Billing', items: ['Stripe Subscriptions', 'Stripe Billing Portal', 'Webhooks', 'Usage Billing', 'Metered API'] },
    { category: 'Cloud & DevOps', items: ['AWS ECS & Lambda', 'Docker', 'GitHub Actions', 'Vercel', 'Cloudflare'] },
    { category: 'Monitoring', items: ['Sentry', 'Datadog', 'PostHog Analytics', 'LogRocket', 'Uptime Robot'] },
  ];

  const process = [
    { n: '01', title: 'SaaS Product Strategy', desc: 'Ideal Customer Profile definition, pricing model design, feature prioritisation using MoSCoW, competitive analysis and go-to-market technical requirements mapping.' },
    { n: '02', title: 'Architecture & Data Modeling', desc: 'Multi-tenant database design, API architecture, authentication strategy, billing integration plan, third-party service selection and scalability roadmap.' },
    { n: '03', title: 'Design & Prototype', desc: 'SaaS UI/UX design with Figma — dashboard layouts, onboarding flows, billing pages, settings and mobile-responsive designs. Interactive prototype before development.' },
    { n: '04', title: 'Sprint Development', desc: 'Two-week agile sprints on a live staging environment. Auth and multi-tenancy first, then core features, then billing, then growth features — prioritised for early user validation.' },
    { n: '05', title: 'Security, QA & Performance', desc: 'OWASP security audit, penetration testing, load testing with k6, database query optimisation, Redis caching, bundle analysis and Core Web Vitals optimisation.' },
    { n: '06', title: 'Launch & Growth Engineering', desc: 'Production deployment, analytics instrumentation, A/B testing setup, conversion tracking, documentation, team training and 30 days post-launch support included.' },
  ];

  const faqs = [
    {
      q: 'What is SaaS product development?',
      a: 'SaaS (Software as a Service) product development is the process of building a cloud-based software application that customers access via subscription. Unlike traditional software, SaaS products are hosted centrally, updated continuously, accessed via browser or mobile app and charged on a recurring monthly or annual basis. DevZore builds complete SaaS products from architecture and UI design through to production deployment, billing integration and post-launch growth engineering.',
    },
    {
      q: 'How much does SaaS development cost?',
      a: 'The cost of SaaS development depends on your product vision, required features, integrations, scalability, and overall project complexity. After a free discovery call, we provide a customized proposal with a clear project scope, timeline, and deliverables. Contact us for a free, no-obligation consultation tailored to your business goals.'
    },
    {
      q: 'How long does it take to build a SaaS product?',
      a: 'A lean SaaS MVP with core features, auth, basic billing and a functional dashboard takes 10 to 14 weeks. A full-featured B2B SaaS platform with advanced multi-tenancy, analytics, team management and API takes 16 to 24 weeks. We use two-week sprints with a live staging environment — you see working software every fortnight, not just status updates.',
    },
    {
      q: 'Do you build multi-tenant SaaS architecture?',
      a: 'Yes. Multi-tenant architecture is our default approach for SaaS products. We implement row-level security with PostgreSQL or tenant-scoped MongoDB collections, custom subdomain routing, tenant-specific configuration, white-label support and a super-admin management interface. We design for thousands of tenants on a single infrastructure from day one.',
    },
    {
      q: 'Do you integrate Stripe for SaaS subscription billing?',
      a: 'Yes. Stripe is our primary billing integration for SaaS products. We implement subscription plans, plan upgrades and downgrades, usage-based billing, free trial periods, coupon and discount codes, invoice generation, dunning automation for failed payments, the Stripe Customer Portal and webhook handling for all billing events. Billing is never an afterthought in our SaaS builds.',
    },
    {
      q: 'Can you add AI features to our SaaS product?',
      a: 'Yes. We integrate OpenAI GPT-4, Claude, Anthropic APIs and custom AI features into SaaS products. This includes AI-powered copilot sidebars, intelligent content generation, automated data analysis, smart recommendations, conversational interfaces and AI-driven workflow automation. AI features are becoming table stakes for modern SaaS products and we have experience building them production-ready.',
    },
    {
      q: 'Do you build the marketing website alongside the SaaS app?',
      a: 'Yes. We typically build both the marketing website — with landing pages, pricing page, blog and documentation — and the SaaS application itself. The marketing site is built with Next.js for SEO performance, and the SaaS application uses React with a Node.js backend. Both share the same design system for a cohesive brand experience.',
    },
    {
      q: 'Will I own the source code of my SaaS product?',
      a: 'Absolutely. You own 100 percent of the source code, repositories, infrastructure, design files and all project assets from day one. Your code lives in your GitHub organisation, your database runs in your cloud accounts and your Stripe account holds your billing data. We never charge licensing fees or hold code hostage after project completion.',
    },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    green: d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-100 text-green-600',
    blue: d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600',
    red: d ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-red-50 border-red-100 text-red-600',
    amber: d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-amber-50 border-amber-100 text-amber-600',
    cyan: d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
    pink: d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400' : 'bg-pink-50 border-pink-100 text-pink-600',
  };

  return (
    <>
      <Helmet>
        {/* ── Maximum SEO — Worldwide Targeting ── */}
        <title>SaaS Product Development Company | Build Scalable SaaS | DevZore</title>
        <meta name="description" content="DevZore is a SaaS product development company building scalable multi-tenant SaaS platforms with Stripe billing, React dashboards, Node.js APIs and AWS infrastructure. Trusted by founders and enterprises worldwide. Free consultation available." />
        <link rel="canonical" href="https://devzore.com/saas-product-development" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore" />
        <meta name="keywords" content="SaaS development company, SaaS product development, build SaaS platform, SaaS development agency, SaaS MVP development, multi-tenant SaaS development, Stripe SaaS billing, SaaS startup development, custom SaaS solution, B2B SaaS development, SaaS application development, SaaS developer for hire, React SaaS dashboard, Node.js SaaS backend, SaaS product builder, SaaS subscription platform, SaaS engineering company, affordable SaaS development, SaaS development cost, hire SaaS developer, SaaS platform architecture, SaaS development services, build SaaS app from scratch, SaaS product agency" />

        {/* ── GEO — Worldwide + Pakistan ── */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="SaaS Product Development Company | Build Scalable SaaS | DevZore" />
        <meta property="og:description" content="Build your SaaS product with DevZore. Multi-tenant architecture, Stripe billing, React dashboards and Node.js APIs. 50+ projects delivered worldwide. Free consultation." />
        <meta property="og:url" content="https://devzore.com/saas-product-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />

        {/* ── Twitter ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaaS Product Development Company | DevZore" />
        <meta name="twitter:description" content="Build scalable SaaS with multi-tenancy, Stripe billing and React dashboards. Free consultation from DevZore." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />

        {/* ── Service Schema ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SaaS Product Development Services",
          "alternateName": ["SaaS Development Company", "SaaS Platform Builder", "Custom SaaS Development"],
          "description": "DevZore builds scalable multi-tenant SaaS platforms with Stripe billing, React dashboards and Node.js APIs for founders and enterprises worldwide.",
          "url": "https://devzore.com/saas-product-development",
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
          "serviceType": "SaaS Product Development",
          "areaServed": "Worldwide"
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
            { "@type": "ListItem", "position": 3, "name": "SaaS Product Development", "item": "https://devzore.com/saas-product-development" }
          ]
        })}</script>

        {/* ── HowTo Schema ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How DevZore Builds a SaaS Product",
          "description": "DevZore's 6-step SaaS product development process from strategy to post-launch.",
          "step": process.map(p => ({ "@type": "HowToStep", "name": p.title, "text": p.desc }))
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* ── HERO ── */}
        <section aria-labelledby="saas-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> SaaS Development
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <Globe size={10} /> Worldwide Clients
                  </div>
                </div>

                <h1 id="saas-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  SaaS Product Development{' '}
                  <span className="text-purple-600">Built to Scale Globally</span>
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  Multi-Tenant Architecture · Stripe Billing · React Dashboards · Node.js APIs · AWS Infrastructure
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a SaaS product development company that helps founders, startups and
                  enterprises build scalable, production-ready SaaS platforms. We design and engineer
                  complete SaaS products — from multi-tenant architecture and Stripe subscription billing
                  to real-time analytics dashboards, team management and public APIs — trusted by
                  clients across the USA, UK, UAE, Canada and Australia.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  We have onboarded platforms with 200+ enterprise customers, built SaaS products
                  that process millions in recurring revenue and helped founders go from idea
                  to first paying customer in as little as 10 weeks.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  Unlike freelancers who disappear or agencies that overpromise, DevZore gives you
                  senior engineers, transparent milestone tracking, fixed pricing and a codebase
                  you own completely — built to last, not just to demo.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { val: '20+', label: 'SaaS Products Built' },
                    { val: '5.0', label: 'Client Rating' },
                    { val: '200+', label: 'Tenants Served' },
                    { val: '10wk', label: 'Fastest MVP' },
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
                    Get Free SaaS Consultation <ArrowRight size={14} />
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I want to build a SaaS product."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right: SaaS checklist */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-6 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  What Every SaaS Product We Build Includes
                </p>
                <div className="space-y-3">
                  {[
                    { item: 'Multi-tenant architecture with full data isolation', note: 'Row-level security or tenant-scoped DBs' },
                    { item: 'Stripe subscription billing with plan management', note: 'Free trials, upgrades, dunning automation' },
                    { item: 'OAuth + MFA authentication system', note: 'Google, GitHub, Microsoft, magic links' },
                    { item: 'Role-based access control (RBAC)', note: 'Admin, member, viewer and custom roles' },
                    { item: 'Real-time analytics and reporting dashboard', note: 'Recharts, D3.js or Chart.js' },
                    { item: 'Team and workspace management', note: 'Invitations, permissions, team settings' },
                    { item: 'Public REST and GraphQL API with docs', note: 'API keys, rate limiting, Swagger/OpenAPI' },
                    { item: 'Super-admin management panel', note: 'Tenant management, user impersonation' },
                    { item: 'CI/CD pipeline and Docker deployment', note: 'GitHub Actions, AWS ECS or Vercel' },
                    { item: 'GDPR compliance foundations', note: 'Data export, deletion, cookie consent' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 pb-3 border-b last:border-0 ${d ? 'border-white/[0.05]' : 'border-gray-100'}`}>
                      <CheckCircle size={13} className="text-purple-500 flex-shrink-0 mt-0.5" />
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

        {/* Features */}
        <section aria-labelledby="features-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="features-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                SaaS Platform Features We Engineer
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From core SaaS infrastructure to advanced growth features — everything your platform
                needs to acquire, convert, retain and expand customers at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SaaS Types */}
        <section aria-labelledby="saastypes-heading" className={`py-20 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="saastypes-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Types of SaaS Products We Build
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From B2B tools to AI-powered platforms — we build SaaS across every category
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {saasTypes.map((type, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <CheckCircle size={15} className="text-purple-500 mb-3" />
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{type.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section aria-labelledby="tech-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tech-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>SaaS Technology Stack</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Production-proven technologies for scalable SaaS platforms</p>
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
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>How We Build Your SaaS Product</h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>From strategy and architecture to launch and growth — 6 transparent steps</p>
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
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>SaaS Development FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about building a SaaS product with DevZore</p>
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
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Development', path: '/web-development' },
                { label: 'MERN Stack Development', path: '/mern-stack-development' },
                { label: 'Backend & API Development', path: '/backend-api' },
                { label: 'React Development', path: '/reactdevelopment' },
                { label: 'Mobile App Development', path: '/mobile-apps' },
                { label: 'E-Commerce Development', path: '/ecommerce' },
                { label: 'Startup MVP Development', path: '/startup-mvp' },
                { label: 'UI/UX Design', path: '/ui-ux-design' },
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
        <section className="py-15">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
              Ready to Build Your SaaS Product?
            </h2>
            <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Get a free SaaS architecture consultation. We will map your product, propose the right tech stack and give you a fixed-price estimate — no commitment required.
            </p>
            <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              Multi-Tenant · Stripe Billing · React Dashboard · Node.js API · AWS · 20+ SaaS Products Delivered
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Get Free SaaS Consultation <ArrowRight size={15} />
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
          <h2>SaaS Product Development Company — DevZore</h2>
          <p>DevZore is a SaaS product development company building scalable multi-tenant SaaS platforms for startups and enterprises worldwide. We develop B2B SaaS products, vertical SaaS solutions, developer tools, marketplace SaaS, AI-powered SaaS applications and mobile-first SaaS platforms using React.js, Node.js, PostgreSQL, MongoDB, Stripe and AWS. Our SaaS engineering team delivers complete products including multi-tenant architecture, subscription billing, analytics dashboards, team management, public APIs and GDPR compliance.</p>
          <h2>Types of SaaS Products We Build</h2>
          {saasTypes.map((t, i) => <div key={i}><h3>{t.title}</h3><p>{t.desc}</p></div>)}
          <h2>SaaS Features We Engineer</h2>
          {features.map((f, i) => <div key={i}><h3>{f.title}</h3><p>{f.desc}</p></div>)}
          <h2>SaaS Development FAQ</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <h2>SaaS Development Process</h2>
          {process.map((p, i) => <div key={i}><h3>{p.title}</h3><p>{p.desc}</p></div>)}
          <p>Primary Keywords: SaaS development company, SaaS product development, build SaaS platform, SaaS development agency, SaaS MVP development, multi-tenant SaaS, Stripe SaaS billing, B2B SaaS development, SaaS application development, custom SaaS solution, SaaS startup development, SaaS engineering company, SaaS developer for hire, React SaaS dashboard, Node.js SaaS backend.</p>
          <p>Long-tail Keywords: How much does SaaS development cost, how to build a SaaS product, best SaaS development company, SaaS development company for startups, build SaaS with Stripe, multi-tenant SaaS architecture, SaaS product development timeline, affordable SaaS development, SaaS platform development cost 2025 2026.</p>
          <p>AI Search: Who builds SaaS products? Best company to build a SaaS platform. How much does it cost to build a SaaS product? Who can build my SaaS idea? Best SaaS development agency for startups. SaaS development company with Stripe integration. How long does SaaS development take? DevZore SaaS reviews.</p>
        </div>

      </main>
    </>
  );
};

export default SaaSProductDevelopment;

