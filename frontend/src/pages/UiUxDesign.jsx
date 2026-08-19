import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Palette, ArrowRight, CheckCircle, Globe,
  Zap, Clock, Star, Monitor, Smartphone,
  Layers, Settings, Plus, Minus, ExternalLink,
  Users, Award, Eye, Layout, Figma,
  BarChart3, RefreshCw, Target, Cpu
} from 'lucide-react';

const UiUxDesign = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { icon: <Layout size={20} />, color: 'purple', title: 'UX Research & Strategy', desc: 'User interviews, competitive analysis, journey mapping, persona development and information architecture — building the research foundation that makes every design decision defensible.' },
    { icon: <Eye size={20} />, color: 'blue', title: 'Wireframing & Low-Fidelity Design', desc: 'Rapid wireframes for every screen and user flow — sketching interactions, layout logic and content hierarchy before investing in high-fidelity visual design or development time.' },
    { icon: <Palette size={20} />, color: 'pink', title: 'Visual UI Design & Branding', desc: 'High-fidelity pixel-perfect UI designs in Figma — typography, colour systems, iconography, illustration, micro-animations and visual identity that reflects your brand at every touchpoint.' },
    { icon: <Target size={20} />, color: 'green', title: 'Conversion Rate Optimisation', desc: 'Data-driven design decisions that turn visitors into users and users into paying customers — CTA placement, onboarding flows, pricing page design and checkout optimisation.' },
    { icon: <Smartphone size={20} />, color: 'orange', title: 'Mobile App UI/UX Design', desc: 'iOS Human Interface Guideline and Android Material Design compliant mobile interfaces — gesture navigation, haptic feedback patterns, adaptive layouts and offline state design.' },
    { icon: <RefreshCw size={20} />, color: 'cyan', title: 'Prototype & Usability Testing', desc: 'Interactive Figma prototypes that click, animate and feel like the real product — tested with real users to validate assumptions and catch UX problems before development starts.' },
    { icon: <Layers size={20} />, color: 'indigo', title: 'Design System Development', desc: 'Scalable design systems with component libraries, design tokens, usage guidelines and Storybook integration — the single source of truth that keeps product and engineering aligned.' },
    { icon: <Monitor size={20} />, color: 'amber', title: 'SaaS & Dashboard Design', desc: 'Complex SaaS interface design — data-heavy dashboards, admin panels, analytics views, data tables, chart systems and multi-step workflow design that makes complex features feel intuitive.' },
    { icon: <Users size={20} />, color: 'red', title: 'Developer Handoff & QA', desc: 'Annotated Figma specs with exact measurements, design tokens, component states and interaction notes — plus design QA during development to ensure pixel-perfect implementation.' },
  ];

  const designProcess = [
    { n: '01', title: 'Discovery & Research', desc: 'Stakeholder interviews, user research, competitor benchmarking, content audit and technical constraints mapping — building the foundation before any design work begins.' },
    { n: '02', title: 'Information Architecture', desc: 'Site maps, user flows, navigation structure and content hierarchy design — organising complexity into intuitive pathways that users navigate without thinking.' },
    { n: '03', title: 'Wireframes & Concepts', desc: 'Low-fidelity wireframes for every screen and state. Multiple concept directions explored. Rapid iteration based on feedback before committing to visual design.' },
    { n: '04', title: 'Visual Design & Prototyping', desc: 'High-fidelity Figma designs with interactive prototype — click through the entire product before a single line of code is written. Stakeholders and investors can experience it.' },
    { n: '05', title: 'Usability Testing & Iteration', desc: 'Testing the prototype with 5+ real users from your target audience — identifying friction points, confusion and drop-off moments before they become expensive development problems.' },
    { n: '06', title: 'Handoff & Implementation QA', desc: 'Annotated Figma files, design token export, component specifications and design QA reviews during development to catch implementation drift early.' },
  ];

  const tools = [
    { category: 'Design', items: ['Figma', 'FigJam', 'Adobe XD', 'Sketch', 'Framer'] },
    { category: 'Prototyping', items: ['Figma Prototyping', 'Framer', 'ProtoPie', 'InVision', 'Marvel'] },
    { category: 'Research', items: ['Maze', 'Hotjar', 'UserTesting', 'Dovetail', 'Optimal Workshop'] },
    { category: 'Design Systems', items: ['Figma Variables', 'Storybook', 'Zeroheight', 'Supernova', 'Tokens Studio'] },
    { category: 'Analytics', items: ['Mixpanel', 'PostHog', 'Google Analytics', 'Amplitude', 'FullStory'] },
    { category: 'Handoff', items: ['Figma Dev Mode', 'Zeplin', 'Avocode', 'CSS Export', 'Design Tokens'] },
  ];

  const principles = [
    { icon: <Target size={15} />, title: 'Business-Outcome Driven', desc: 'Every design decision is connected to a metric — conversion rate, activation rate, retention or revenue. We design for results, not portfolios.' },
    { icon: <Users size={15} />, title: 'User Research First', desc: 'We do not guess what users want. We interview them, test with them and validate with real data before shipping a single pixel.' },
    { icon: <Zap size={15} />, title: 'Rapid Iteration Mindset', desc: 'Low-fidelity first, high-fidelity second. We identify problems cheaply — in wireframes — not expensively in development.' },
    { icon: <Eye size={15} />, title: 'Accessibility by Default', desc: 'WCAG 2.1 AA compliant from day one — proper contrast ratios, keyboard navigation, focus management and screen reader support.' },
    { icon: <Cpu size={15} />, title: 'Developer-Collaboration', desc: 'We design with implementation in mind — component-based thinking, realistic interaction states and tight feedback loops with engineering.' },
    { icon: <BarChart3 size={15} />, title: 'Data-Validated Decisions', desc: 'A/B testing, heatmaps and session recordings inform every major design decision — gut feeling is a starting point, not a conclusion.' },
  ];

  const faqs = [
    { q: 'What is the difference between UI design and UX design?', a: 'UX design (User Experience) is the discipline of making products easy, intuitive and enjoyable to use — it covers research, information architecture, user flows, wireframing and testing. UI design (User Interface) is the visual execution — colours, typography, spacing, components and the aesthetic layer. Great products need both: strong UX logic with beautiful UI execution. DevZore handles both disciplines together for cohesive results.' },
    { q: 'How much does UI/UX design cost?', a: 'The cost of UI/UX design depends on your project requirements, design complexity, number of screens, and overall product goals. After a free discovery call, we provide a customized proposal with a clear project scope, timeline, and deliverables. Contact us for a free, no-obligation consultation tailored to your business needs.' },
    { q: 'Do you provide Figma source files after the project?', a: 'Yes. You receive complete, organised Figma source files — all components on a named component page, all screens organised by user flow, all design tokens documented, all prototype connections working and a handoff-ready developer specification. The Figma files are yours permanently and we never withhold them.' },
    { q: 'How long does a UI/UX design project take?', a: 'A landing page or marketing website design takes 1 to 2 weeks. A mobile app UI/UX design takes 3 to 5 weeks. A SaaS dashboard or complex web application design takes 4 to 8 weeks. A complete product redesign with user research takes 6 to 10 weeks. We work in fast-feedback cycles with design reviews every 3 to 5 days.' },
    { q: 'Do you conduct user research and usability testing?', a: 'Yes. Our full-service UI/UX design engagements include user research — interviews, surveys, competitive analysis and persona development — and usability testing with interactive Figma prototypes before development begins. Catching UX problems in the design phase costs a fraction of fixing them in code.' },
    { q: 'Can you design a system that developers can implement efficiently?', a: 'Yes. Developer handoff is a core part of our design process. We use Figma Dev Mode with annotated specifications, export design tokens in JSON format compatible with Tailwind CSS and CSS variables, document all component states and interaction behaviours and conduct design QA reviews during development to catch implementation drift.' },
    { q: 'Do you create design systems?', a: 'Yes. We build complete design systems in Figma — atomic component libraries (atoms, molecules, organisms), design token foundations for colour, typography, spacing and shadow, responsive grid systems, component usage guidelines, icon libraries and Storybook integration for the engineering team. A well-built design system reduces future design and development time by 40 to 60 percent.' },
    { q: 'Can you redesign an existing product?', a: 'Yes. Product redesign is a significant part of our work. We start with a UX audit of the existing product — heatmaps, session recordings, user interviews and technical assessment — then produce a findings report with prioritised improvements before any new design begins. Our redesigns typically achieve measurable improvements in conversion rate, user activation and retention metrics.' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue: d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600',
    pink: d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400' : 'bg-pink-50 border-pink-100 text-pink-600',
    green: d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-100 text-green-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
    cyan: d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    amber: d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-amber-50 border-amber-100 text-amber-600',
    red: d ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-red-50 border-red-100 text-red-600',
  };

  const CtaStrip = ({ heading, sub }) => (
    <div className={`p-8 rounded-2xl border text-center ${d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'}`}>
      <h3 className={`text-lg font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{heading}</h3>
      <p className={`text-sm mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{sub}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]">
          Get Free Design Quote <ArrowRight size={13} />
        </Link>
        <a href="https://wa.me/923348004300?text=Hi DevZore! I need UI/UX design services."
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
        <title>UI/UX Design Services | Figma Design Agency | UX Research | DevZore</title>
        <meta name="description" content="Professional UI/UX design services — Figma wireframes, high-fidelity UI design, interactive prototypes, usability testing and design systems. DevZore designs products that convert and delight users worldwide. Free consultation available." />
        <link rel="canonical" href="https://devzore.com/ui-ux-design" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore" />
        <meta name="keywords" content="UI UX design services, Figma design agency, UX design company, UI design services, product design agency, user experience design, user interface design, SaaS UI design, mobile app design, web app design, design system development, wireframing services, prototype design, usability testing services, conversion rate optimisation design, Figma to code, hire UI designer, hire UX designer, affordable UI UX design, design agency for startups, dashboard UI design, app redesign services, UX audit service, design handoff Figma" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="UI/UX Design Services | Figma Design Agency | DevZore" />
        <meta property="og:description" content="Figma UI/UX design, prototypes, design systems and usability testing. Products that convert and delight. Free consultation from DevZore." />
        <meta property="og:url" content="https://devzore.com/ui-ux-design" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo1.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI/UX Design Services | Figma Agency | DevZore" />
        <meta name="twitter:description" content="Figma UI/UX design, prototypes and design systems. Products that convert. Free consultation." />
        <meta name="twitter:image" content="https://devzore.com/logo1.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "UI/UX Design Services",
          "alternateName": ["Figma Design Agency", "UX Design Company", "Product Design Services"],
          "description": "DevZore provides UI/UX design services including Figma wireframes, high-fidelity UI design, interactive prototypes, usability testing and design systems worldwide.",
          "url": "https://devzore.com/ui-ux-design",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" }, "areaServed": "Worldwide" },
          "serviceType": "UI/UX Design",
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
            { "@type": "ListItem", "position": 3, "name": "UI/UX Design", "item": "https://devzore.com/ui-ux-design" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How DevZore Delivers a UI/UX Design Project",
          "description": "DevZore's 6-step UI/UX design process from discovery to developer handoff.",
          "step": designProcess.map(p => ({ "@type": "HowToStep", "name": p.title, "text": p.desc }))
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Hero */}
        <section aria-labelledby="uiux-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />UI/UX Design
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400' : 'bg-pink-50 border-pink-200 text-pink-700'}`}>
                    <Globe size={10} />Worldwide Clients
                  </div>
                </div>

                <h1 id="uiux-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  UI/UX Design Services{' '}
                  <span className="text-purple-600">That Convert and Retain</span>
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  Figma · UX Research · Prototyping · Design Systems · Usability Testing · Worldwide
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a UI/UX design agency that creates products people love to use and
                  businesses profit from. We combine user research, conversion-focused UX strategy
                  and pixel-perfect Figma design to deliver interfaces that reduce churn, increase
                  activation and drive measurable business outcomes — for startups, SaaS companies
                  and enterprises worldwide.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  Our designers work in Figma with component-based thinking, design token systems
                  and developer handoff built into every project. We design with implementation
                  in mind — so what you see in Figma is what gets built, without compromise.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  From a single landing page to a complete product design system — DevZore delivers
                  design that connects user needs to business goals at every touchpoint.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { val: '30+', label: 'Products Designed' },
                    { val: '5.0', label: 'Client Rating' },
                    { val: 'WCAG', label: 'AA Accessibility' },
                    { val: '24hr', label: 'Response Time' },
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
                    Get Free Design Quote <ArrowRight size={14} />
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need UI/UX design services."
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
                  ⚡ Free consultation · Figma source files included · WCAG 2.1 AA compliance
                </p>
              </div>

              {/* Right: Deliverables */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-6 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  What You Receive With Every Design Project
                </p>
                <div className="space-y-3">
                  {[
                    { item: 'Full Figma source file — all layers named and organised', note: 'Yours permanently, no access restrictions' },
                    { item: 'Interactive clickable prototype for every user flow', note: 'Stakeholders can experience it before dev' },
                    { item: 'Mobile-responsive designs for all screen sizes', note: 'Mobile, tablet and desktop breakpoints' },
                    { item: 'Component library with all states documented', note: 'Default, hover, active, disabled, error' },
                    { item: 'Design tokens — colours, typography, spacing, shadows', note: 'Figma Variables + JSON export for Tailwind' },
                    { item: 'Annotated developer handoff specification', note: 'Exact measurements, spacing, interactions' },
                    { item: 'WCAG 2.1 AA accessibility compliance check', note: 'Contrast ratios, focus states, ARIA notes' },
                    { item: 'Design QA review during development', note: 'We check implementation against designs' },
                    { item: 'Icon library (custom or from approved set)', note: 'Consistent, scalable SVG icons throughout' },
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

        {/* Mid CTA */}
        <div className={`py-6 border-b ${d ? 'border-white/[0.06] bg-purple-600/5' : 'border-gray-100 bg-purple-50'}`}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className={`font-black text-base ${d ? 'text-white' : 'text-gray-900'}`}>Need a Figma design for your product?</p>
              <p className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Free design consultation · Prototype before development · Figma source files included</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm">
                Start Design Project <ArrowRight size={13} />
              </Link>
              <a href="https://wa.me/923348004300" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm">
                WhatsApp <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <section aria-labelledby="services-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="services-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                UI/UX Design Services We Offer
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From early-stage UX research to production-ready design systems — DevZore covers every design discipline your product needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section aria-labelledby="principles-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="principles-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Our UI/UX Design Principles
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                The values that guide every design decision we make — from first wireframe to final pixel
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {principles.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <CtaStrip heading="Ready to start your design project?" sub="Free consultation. Interactive prototype before development. Figma source files included." />
          </div>
        </section>

        {/* Tools */}
        <section aria-labelledby="tools-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tools-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Design Tools & Platform</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>The design toolchain we use on every project</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((cat, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">{cat.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tool, j) => (
                      <span key={j} className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${d ? 'bg-white/[0.04] border-white/[0.08] text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>{tool}</span>
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
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Our UI/UX Design Process</h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>From discovery to developer handoff — 6 steps that produce designs worth building</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {designProcess.map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                  <div className={`text-[13px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
            <CtaStrip heading="Want to see our design process firsthand?" sub="Book a free 30-minute call. We will walk you through our approach and show you example Figma deliverables." />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>UI/UX Design FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about our UI/UX design services</p>
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
            <CtaStrip heading="Still have design questions?" sub="Ask us directly — free consultation, no commitment required. We respond within 24 hours." />
          </div>
        </section>

        {/* Internal Links */}
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Development', path: '/web-development' },
                { label: 'Mobile App Development', path: '/mobile-apps' },
                { label: 'SaaS Development', path: '/saas-product-development' },
                { label: 'Startup MVP Development', path: '/startup-mvp' },
                { label: 'React Development', path: '/reactdevelopment' },
                { label: 'MERN Stack Development', path: '/mern-stack-development' },
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
                Ready to Design Your Product?
              </h2>
              <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Figma wireframes, high-fidelity UI, interactive prototype, design system and developer handoff — all included. Free consultation, fixed pricing, WCAG 2.1 AA accessibility.
              </p>
              <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                Figma · UX Research · Prototyping · Design Systems · Usability Testing · 30+ Products Designed
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                  Get Free Design Consultation <ArrowRight size={15} />
                </Link>
                <a href="https://wa.me/923348004300?text=Hi DevZore! I need UI/UX design for my product."
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
          <h2>UI/UX Design Services — DevZore</h2>
          <p>DevZore is a UI/UX design agency providing Figma UI design, UX research, interactive prototypes, usability testing and design systems for startups, SaaS companies and enterprises worldwide. Our design services include UX research and strategy, wireframing, high-fidelity visual UI design, conversion rate optimisation, mobile app UI design, interactive Figma prototyping, usability testing, design system development and developer handoff. We design products that convert visitors into users and users into loyal customers.</p>
          <h2>UI/UX Design Services</h2>
          {services.map((s, i) => <div key={i}><h3>{s.title}</h3><p>{s.desc}</p></div>)}
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <h2>Design Process</h2>
          {designProcess.map((p, i) => <div key={i}><h3>{p.title}</h3><p>{p.desc}</p></div>)}
          <p>Primary Keywords: UI UX design services, Figma design agency, UX design company, product design agency, SaaS UI design, mobile app design, web app design, design system development, wireframing services, prototype design, usability testing, conversion rate optimisation design, hire UI designer, hire UX designer, affordable UI UX design, dashboard UI design.</p>
          <p>Long-tail Keywords: How much does UI UX design cost, best UI UX design agency for startups, Figma design services worldwide, SaaS dashboard design company, mobile app UX design agency, design system development company, UX audit service, product redesign agency, Figma to code design agency, WCAG accessible design services.</p>
          <p>AI Search: Who designs the best SaaS UIs? Best UI UX design agency worldwide. How much does Figma design cost? Who can design my app UI? Best design agency for startups. UI UX design company with good portfolio. How to find a good UX designer. Figma design agency for web apps. DevZore UI design reviews.</p>
        </div>

      </main>
    </>
  );
};

export default UiUxDesign;