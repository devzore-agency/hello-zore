import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code2, ArrowRight, CheckCircle, Globe,
  Shield, Zap, Clock, Star, Database,
  Monitor, Server, Settings, Layers,
  Plus, Minus, ExternalLink, TrendingUp,
  Award, Users, Rocket, Lock, Cpu,
  BarChart3, Palette, RefreshCw, Activity
} from 'lucide-react';

const ReactDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatWeBuild = [
    { icon: <Monitor size={20}/>,    color: 'purple', title: 'Single-Page Applications (SPAs)',      desc: 'Fast, fluid React SPAs with client-side routing, lazy loading, code splitting and optimised bundle sizes — delivering app-like experiences in the browser without page reloads.' },
    { icon: <BarChart3 size={20}/>,  color: 'blue',   title: 'React Admin Dashboards & Portals',     desc: 'Feature-rich admin panels, business intelligence dashboards, data tables, chart integrations, form wizards and role-based views — everything your internal teams need to operate your product.' },
    { icon: <Layers size={20}/>,     color: 'green',  title: 'Component Libraries & Design Systems', desc: 'Reusable React component libraries with Storybook documentation, TypeScript props interfaces, accessibility compliance and design token integration — the foundation every growing product needs.' },
    { icon: <RefreshCw size={20}/>,  color: 'orange', title: 'React + Next.js Web Applications',     desc: 'Hybrid React applications with Next.js — SSR for SEO-critical pages, static generation for performance and client-side React for interactive features — the best of every rendering strategy.' },
    { icon: <TrendingUp size={20}/>, color: 'indigo', title: 'React SaaS Platform Frontends',        desc: 'Complex SaaS frontends with multi-tenant user interfaces, subscription management screens, onboarding flows, team management, billing pages and analytics dashboards built in React.' },
    { icon: <Cpu size={20}/>,        color: 'cyan',   title: 'React Migration & Refactoring',        desc: 'Migration from legacy Angular, Vue, jQuery or class-component React codebases to modern React with hooks, TypeScript, TanStack Query and current best practices — zero downtime.' },
  ];

  const techStack = [
    { category: 'Core React',       items: ['React 19', 'TypeScript 5', 'React Hooks', 'Context API', 'React Suspense'] },
    { category: 'State Management', items: ['TanStack Query', 'Zustand', 'Redux Toolkit', 'Jotai', 'SWR'] },
    { category: 'Routing',          items: ['React Router 7', 'Next.js App Router', 'TanStack Router', 'Wouter'] },
    { category: 'Styling',          items: ['Tailwind CSS', 'shadcn/ui', 'Radix UI', 'CSS Modules', 'Styled Components'] },
    { category: 'Testing',          items: ['Vitest', 'React Testing Library', 'Playwright', 'Storybook', 'MSW'] },
    { category: 'Tooling',          items: ['Vite', 'Turbopack', 'ESLint', 'Prettier', 'Husky + lint-staged'] },
  ];

  const whyReact = [
    { icon: <Zap size={15}/>,       title: 'Virtual DOM Performance',        desc: 'React\'s virtual DOM diffs only what changed — delivering 60fps UI updates even in data-heavy applications with thousands of components.' },
    { icon: <Layers size={15}/>,    title: 'Component Reusability',          desc: 'Build once, use everywhere. React components are the building blocks of maintainable frontends — reducing duplication and accelerating new feature development.' },
    { icon: <Users size={15}/>,     title: 'Largest Ecosystem',              desc: 'Over 2 million npm packages, the world\'s largest developer community and battle-tested solutions for every UI challenge imaginable.' },
    { icon: <Shield size={15}/>,    title: 'TypeScript-First Development',   desc: 'TypeScript with React catches component prop errors at compile time, documents component interfaces automatically and dramatically reduces runtime bugs.' },
    { icon: <TrendingUp size={15}/>,title: 'Meta-Backed Stability',          desc: 'React is built and maintained by Meta — used in production at Facebook, Instagram, WhatsApp and thousands of enterprise applications worldwide.' },
    { icon: <Cpu size={15}/>,       title: 'React Server Components',        desc: 'React 19 Server Components stream UI from the server, reducing client JavaScript by up to 60% — the biggest React performance leap in years.' },
  ];

  const performance = [
    { metric: 'Lighthouse Performance', target: '95+', how: 'Code splitting, lazy loading, image optimisation, font subsetting and critical CSS extraction' },
    { metric: 'First Contentful Paint', target: '< 1.2s', how: 'SSR/SSG with Next.js, CDN delivery, preloading critical resources and eliminating render-blocking scripts' },
    { metric: 'Largest Contentful Paint', target: '< 2.0s', how: 'Image compression, next/image optimisation, priority hints and server-rendered above-the-fold content' },
    { metric: 'Cumulative Layout Shift', target: '< 0.1', how: 'Explicit image dimensions, font display swap, skeleton loaders and stable layout anchors throughout' },
    { metric: 'Total Blocking Time', target: '< 200ms', how: 'Bundle splitting, tree shaking, dynamic imports and deferring non-critical third-party scripts' },
    { metric: 'Bundle Size', target: 'Minimal', how: 'Vite tree shaking, dynamic imports, component lazy loading and regular bundle analysis with rollup-plugin-visualizer' },
  ];

  const process = [
    { n: '01', title: 'Component Architecture Planning', desc: 'We design the full component tree, state management strategy, data fetching patterns and routing structure before writing a single line of production code.' },
    { n: '02', title: 'Design System & UI Foundation',   desc: 'Tailwind configuration, shadcn/ui component library setup, typography scale, colour tokens, spacing system and Storybook component documentation.' },
    { n: '03', title: 'Feature Development in Sprints',  desc: 'Two-week sprints with a deployed staging environment after every sprint. You interact with the actual React application — not mockups or prototypes.' },
    { n: '04', title: 'API Integration & State',         desc: 'TanStack Query for server state, Zustand for client state, React Hook Form for forms, optimistic updates and comprehensive error boundary handling.' },
    { n: '05', title: 'Performance & Accessibility',     desc: 'Lighthouse 95+ auditing, WCAG 2.1 AA accessibility compliance, keyboard navigation, screen reader testing, bundle optimisation and Core Web Vitals.' },
    { n: '06', title: 'Testing, Review & Handover',      desc: 'Vitest unit tests, Playwright E2E tests, React Testing Library component tests, code review, Storybook documentation and developer handover session.' },
  ];

  const faqs = [
    { q: 'Why choose React over Vue, Angular or Svelte?', a: 'React has the largest ecosystem, the most job market demand, the strongest community support and is backed by Meta with a proven track record across millions of production applications. React\'s component model is the most flexible of any major UI framework, and React 19 with Server Components represents the next generation of web development. For most projects, React is the lowest-risk, highest-reward frontend choice available today.' },
    { q: 'What is the difference between React.js and Next.js?', a: 'React.js is a UI library for building component-driven interfaces. It runs in the browser (client-side rendering) by default. Next.js is a React framework that adds server-side rendering (SSR), static site generation (SSG), file-based routing, image optimisation and API routes on top of React. We use React for SPAs and complex web applications, and Next.js when SEO performance, server rendering or a full-stack framework is needed.' },
    { q: 'Do you use TypeScript with React?', a: 'Yes — always. We consider TypeScript non-optional on any production React application. TypeScript provides compile-time type checking for component props, catches integration errors before runtime, documents component interfaces automatically and makes large React codebases significantly easier to maintain and refactor. Our TypeScript coverage target on every project is 100%.' },
    { q: 'How do you manage state in large React applications?', a: 'We use a clear separation between server state and client state. TanStack Query (React Query) manages all server state — data fetching, caching, synchronisation and optimistic updates. Zustand handles lightweight client state that needs to be shared across components. We avoid overusing React Context for performance-sensitive state and use React Hook Form for all form state management.' },
    { q: 'How do you achieve Lighthouse 95+ performance scores in React?', a: 'Our performance approach includes: code splitting with React.lazy and dynamic imports, image optimisation with next/image or manual WebP conversion, critical CSS extraction, font subsetting with font-display swap, lazy loading below-the-fold content, eliminating render-blocking scripts, CDN delivery, preloading critical resources and regular bundle analysis. We target Lighthouse 95+ on every project and treat performance as a feature, not an afterthought.' },
    { q: 'Can you migrate my existing React class components to modern hooks?', a: 'Yes. We regularly modernise React codebases — migrating from class components to function components with hooks, replacing legacy state management with TanStack Query and Zustand, upgrading to React Router 7, adding TypeScript and migrating from Create React App to Vite. We perform migrations incrementally to maintain business continuity throughout.' },
    { q: 'Do you write tests for React components?', a: 'Yes. Our standard testing approach includes Vitest for unit tests, React Testing Library for component tests, Playwright for E2E tests and Storybook for visual component testing. We aim for meaningful test coverage on business-critical user flows and component behaviour — not 100% coverage for its own sake. All tests run automatically in our GitHub Actions CI/CD pipeline.' },
    { q: 'How long does a React development project take?', a: 'A React component library or design system takes 3 to 6 weeks. A single-page React application takes 4 to 8 weeks. A React admin dashboard or portal takes 6 to 12 weeks. A full React SaaS frontend with complex state management takes 10 to 16 weeks. Every project starts with a discovery session producing a milestone-based timeline with fortnightly staging builds.' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'      : 'bg-blue-50 border-blue-100 text-blue-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-100 text-green-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400': 'bg-orange-50 border-orange-100 text-orange-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400': 'bg-indigo-50 border-indigo-100 text-indigo-600',
    cyan:   d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
  };

  // Reusable CTA strip component
  const CtaStrip = ({ heading, sub }) => (
    <div className={`py-12 px-8 rounded-3xl border text-center ${d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'}`}>
      <h3 className={`text-xl font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{heading}</h3>
      <p className={`text-sm mb-6 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{sub}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
          Get Free React Quote <ArrowRight size={14}/>
        </Link>
        <a href="https://wa.me/923348004300?text=Hi DevZore! I need React development help."
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
          WhatsApp
        </a>
        <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'}`}>
          All Services <ArrowRight size={14}/>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>React.js Development Services | React 19 TypeScript Next.js | DevZore</title>
        <meta name="description" content="Expert React.js development services — React 19, TypeScript, Next.js, TanStack Query, Tailwind CSS. DevZore builds high-performance React SPAs, dashboards, SaaS frontends and component libraries. Lighthouse 95+ scores. Free consultation available." />
        <link rel="canonical" href="https://devzore.com/reactdevelopment" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore" />
        <meta name="keywords" content="React development services, React.js developer, React 19 development, hire React developer, React TypeScript development, Next.js React development, React SPA development, React dashboard development, React component library, React Native developer, React hooks development, custom React application, React refactoring service, React migration service, React performance optimisation, React testing services, TanStack Query developer, React SaaS frontend, React admin panel, affordable React development, expert React developer for hire, React development company" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="React.js Development Services | React 19 TypeScript | DevZore" />
        <meta property="og:description" content="Expert React.js development — React 19, TypeScript, Next.js, Lighthouse 95+. SPAs, dashboards, SaaS frontends and component libraries. Free consultation." />
        <meta property="og:url" content="https://devzore.com/reactdevelopment" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React.js Development Services | DevZore" />
        <meta name="twitter:description" content="React 19, TypeScript, Next.js. Lighthouse 95+. SPAs, dashboards and SaaS frontends. Free consultation from DevZore." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "React.js Development Services",
          "alternateName": ["React Developer", "React Development Company", "React 19 Development"],
          "description": "DevZore provides expert React.js development services including React SPAs, dashboards, SaaS frontends, component libraries and Next.js applications worldwide.",
          "url": "https://devzore.com/reactdevelopment",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" }, "areaServed": "Worldwide" },
          "serviceType": "React.js Development",
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
            { "@type": "ListItem", "position": 3, "name": "React Development", "item": "https://devzore.com/reactdevelopment" }
          ]
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        
        

        {/* Hero */}
        <section aria-labelledby="react-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-1">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"/> React.js Development
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
                    <Globe size={10}/> Worldwide Clients
                  </div>
                </div>

                <h1 id="react-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Expert React.js Development{' '}
                  <span className="text-purple-600">Services That Perform</span>
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  React 19 · TypeScript · Next.js · TanStack Query · Tailwind CSS · Lighthouse 95+
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore provides expert React.js development services for startups, SaaS companies
                  and enterprises worldwide. We build high-performance React single-page applications,
                  complex dashboards, SaaS platform frontends, component libraries and Next.js web
                  applications — all with TypeScript, comprehensive test coverage and Lighthouse 95+ scores.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  Our React developers use React 19, TypeScript 5, TanStack Query for server state,
                  Zustand for client state, Tailwind CSS with shadcn/ui for styling, Vitest and
                  Playwright for testing and Vite for builds — the modern React stack that scales.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  Whether you need a new React application built from scratch, an existing codebase
                  modernised, a component library created or a React SaaS frontend engineered —
                  DevZore delivers senior-level React expertise with fixed pricing and full code ownership.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { val: '95+',  label: 'Lighthouse Score' },
                    { val: '40+',  label: 'React Projects' },
                    { val: '5.0',  label: 'Client Rating' },
                    { val: '100%', label: 'TypeScript' },
                  ].map((s, i) => (
                    <div key={i} className={`p-3 rounded-xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <div className={`text-xl font-black ${d ? 'text-white' : 'text-gray-900'}`}>{s.val}</div>
                      <div className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Multiple CTAs */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Get Free React Quote <ArrowRight size={14}/>
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need React.js development services."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
                    WhatsApp Us
                  </a>
                  <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    View All Services
                  </Link>
                </div>
                <p className={`text-[12px] ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                  ⚡ Response within 24 hours · Free consultation · Fixed pricing · 100% code ownership
                </p>
              </div>

              {/* Right: React features panel */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-500' : 'text-gray-400'}`}>Our React Development Standards</p>
                <div className="space-y-3">
                  {[
                    { title: 'React 19 + TypeScript 5',           desc: 'Latest stable React with full TypeScript coverage — no JavaScript, no exceptions' },
                    { title: 'TanStack Query for server state',    desc: 'Caching, background refetching, optimistic updates and stale-while-revalidate' },
                    { title: 'Lighthouse 95+ on every build',      desc: 'Performance, accessibility, best practices and SEO measured every sprint' },
                    { title: 'Vitest + React Testing Library',     desc: 'Unit and component tests on every critical user flow before delivery' },
                    { title: 'Storybook component documentation',  desc: 'Every reusable component documented with props, variants and usage examples' },
                    { title: 'GitHub Actions CI/CD pipeline',      desc: 'Automated lint, type check, test and deploy on every pull request' },
                    { title: 'Vite for fast builds',               desc: 'Sub-second HMR in development, optimised production bundles under 200KB' },
                    { title: 'WCAG 2.1 AA accessibility',          desc: 'Keyboard navigation, screen reader support, focus management and ARIA' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 pb-3 border-b last:border-0 ${d ? 'border-white/[0.05]' : 'border-gray-100'}`}>
                      <CheckCircle size={13} className="text-purple-500 flex-shrink-0 mt-0.5"/>
                      <div>
                        <p className={`text-[12px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                        <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <div className={`py-8 border-b ${d ? 'border-white/[0.06] bg-purple-600/5' : 'border-gray-100 bg-purple-50'}`}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className={`font-black text-base ${d ? 'text-white' : 'text-gray-900'}`}>Need a React developer? We respond within 24 hours.</p>
              <p className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Free consultation · Fixed pricing · Senior engineers only</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all">
                Start Now <ArrowRight size={13}/>
              </Link>
              <a href="https://wa.me/923348004300?text=Hi! I need React development."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm">
                WhatsApp <ArrowRight size={13}/>
              </a>
            </div>
          </div>
        </div>

        {/* What We Build */}
        <section aria-labelledby="whatwebuild-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="whatwebuild-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                React Applications We Build
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From simple SPAs to complex enterprise frontends — DevZore has built React applications
                across SaaS, fintech, healthcare, e-commerce, logistics and EdTech for clients worldwide.
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

        {/* Why React */}
        <section aria-labelledby="why-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="why-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Why React.js? Why DevZore?
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                React is the world's most popular UI library — and DevZore is a specialist React agency with the depth of experience to use it right.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {whyReact.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            {/* Inline CTA after why section */}
            <CtaStrip
              heading="Ready to hire a React developer?"
              sub="Senior React engineers. TypeScript-first. Lighthouse 95+. Fixed pricing. Free consultation."
            />
          </div>
        </section>

        {/* Performance Targets */}
        <section aria-labelledby="perf-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="perf-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                React Performance Targets We Hit
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Performance is a feature — we track and hit these metrics on every React project we deliver
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {performance.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className={`text-2xl font-black text-purple-500 mb-1`}>{item.target}</div>
                  <p className={`text-[13px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.metric}</p>
                  <p className={`text-[12px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.how}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section aria-labelledby="tech-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tech-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>React Technology Stack</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>The modern React toolchain we use on every project</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((cat, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
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
        <section aria-labelledby="process-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Our React Development Process</h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>From component architecture to tested, deployed React application — 6 transparent steps</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {process.map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className={`text-[13px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
            {/* CTA after process */}
            <CtaStrip
              heading="Want to see our React development process in action?"
              sub="Book a free 30-minute call. We will walk you through our approach and answer every question."
            />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>React Development FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about our React.js development services</p>
            </div>
            <div className="space-y-3 mb-12">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-xl border overflow-hidden transition-all duration-300 ${activeFaq === i ? d ? 'border-purple-500/40 bg-purple-600/5' : 'border-purple-200 bg-purple-50/50' : d ? 'border-white/[0.06] bg-white/[0.02]' : 'border-gray-200 bg-white'}`}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}
                    className="w-full p-5 text-left flex items-start justify-between gap-4">
                    <span className={`text-[14px] font-bold ${activeFaq === i ? 'text-purple-500' : d ? 'text-white' : 'text-gray-900'}`}>{faq.q}</span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${activeFaq === i ? 'bg-purple-600 text-white' : d ? 'bg-white/[0.06] text-gray-500' : 'bg-gray-100 text-gray-500'}`}>
                      {activeFaq === i ? <Minus size={13}/> : <Plus size={13}/>}
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
            {/* CTA after FAQ */}
            <CtaStrip
              heading="Still have questions about React development?"
              sub="Ask us directly — free 30-minute consultation, no commitment required."
            />
          </div>
        </section>

        {/* Internal Links */}
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Development',          path: '/web-development' },
                { label: 'MERN Stack Development',   path: '/mern-stack-development' },
                { label: 'Next.js (Web Dev)',         path: '/web-development' },
                { label: 'SaaS Development',          path: '/saas-product-development' },
                { label: 'Backend & API',             path: '/backend-api' },
                { label: 'Mobile App Development',    path: '/mobile-apps' },
                { label: 'E-Commerce Development',    path: '/ecommerce' },
                { label: 'UI/UX Design',              path: '/ui-ux-design' },
                { label: 'Startup MVP',               path: '/startup-mvp' },
                { label: 'All Services',              path: '/allservices' },
              ].map((link, i) => (
                <Link key={i} to={link.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-lg border transition-all ${d ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:border-purple-500/30 hover:text-purple-400' : 'bg-white border-gray-200 text-gray-600 hover:border-purple-200 hover:text-purple-700'}`}>
                  {link.label} <ExternalLink size={10}/>
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
                Ready to Build Your React Application?
              </h2>
              <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Senior React engineers. TypeScript-first. Lighthouse 95+. TanStack Query. Vitest tests.
                Fixed pricing. 100% code ownership. Free consultation.
              </p>
              <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                React 19 · TypeScript · Next.js · Tailwind CSS · Vite · Vitest · Playwright · 40+ React Projects
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                  Get Free React Development Quote <ArrowRight size={15}/>
                </Link>
                <a href="https://wa.me/923348004300?text=Hi DevZore! I want to discuss a React project."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
                  WhatsApp Now
                </a>
                <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                  View All Services <ArrowRight size={15}/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO + AI Hidden */}
        <div className="sr-only" aria-hidden="false">
          <h2>React.js Development Services — DevZore</h2>
          <p>DevZore provides expert React.js development services worldwide. We build React 19 single-page applications, admin dashboards, SaaS frontends, component libraries and Next.js web applications with TypeScript, TanStack Query, Zustand, Tailwind CSS, Vitest and Playwright. Our React developers achieve Lighthouse 95+ performance scores, WCAG 2.1 AA accessibility compliance and 100% TypeScript coverage on every project. We have delivered 40+ React projects for clients across USA, UK, UAE, Canada, Australia and globally since 2022.</p>
          <h2>React Applications We Build</h2>
          {whatWeBuild.map((item, i) => <div key={i}><h3>{item.title}</h3><p>{item.desc}</p></div>)}
          <h2>React FAQ</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <h2>React Development Process</h2>
          {process.map((p, i) => <div key={i}><h3>{p.title}</h3><p>{p.desc}</p></div>)}
          <p>Primary Keywords: React development services, React.js developer, hire React developer, React 19 development, React TypeScript, Next.js React, React SPA, React dashboard, React SaaS, React component library, React migration, React performance, TanStack Query, React testing, affordable React developer.</p>
          <p>AI Search: Who is the best React developer? Best company for React development. How much does React development cost? Hire senior React developer. React 19 development services. React TypeScript developer for hire. React performance optimisation service. React dashboard development company. Best React agency worldwide.</p>
        </div>

      </main>
    </>
  );
};

export default ReactDevelopment;