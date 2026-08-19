import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Wrench, ArrowRight, CheckCircle, Globe,
  Shield, Zap, Clock, Activity, RefreshCw,
  AlertTriangle, Lock, BarChart3, Server,
  Plus, Minus, ExternalLink, Bell, Database,
  Settings, TrendingUp, Award, Users, Eye
} from 'lucide-react';

const Maintenance = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);
  const [activePlan, setActivePlan] = useState(1);

  const services = [
    { icon: <Shield size={20}/>,    color: 'blue',   title: 'Security Updates & Patching',        desc: 'Regular dependency vulnerability scanning with npm audit and Snyk, critical security patch deployment within 24 hours, SSL certificate renewal, security header hardening and OWASP vulnerability remediation.' },
    { icon: <Activity size={20}/>,  color: 'green',  title: 'Uptime Monitoring & Alerting',        desc: '24/7 uptime monitoring with Uptime Robot, Datadog or Better Uptime. Instant alerts for downtime, slow response times, certificate expiry and critical error spikes — before your users notice.' },
    { icon: <RefreshCw size={20}/>, color: 'purple', title: 'Dependency Updates & Testing',        desc: 'Monthly npm, pip and gem dependency updates with full regression testing before deployment. Framework upgrades (React, Next.js, Node.js) managed safely with rollback plans.' },
    { icon: <AlertTriangle size={20}/>, color: 'amber', title: 'Bug Fixing & Error Resolution',   desc: 'Sentry error monitoring with intelligent alerting, triage and resolution. Critical production bugs fixed within 24 hours. Full root cause analysis and regression tests added to prevent recurrence.' },
    { icon: <BarChart3 size={20}/>, color: 'cyan',   title: 'Performance Optimisation',            desc: 'Monthly Lighthouse audits, Core Web Vitals monitoring, database query optimisation, Redis cache tuning, CDN configuration review and bundle analysis — keeping your product fast as it grows.' },
    { icon: <Database size={20}/>,  color: 'indigo', title: 'Database Backup & Recovery',          desc: 'Automated daily database backups to AWS S3 or equivalent, backup integrity testing, point-in-time recovery configuration and documented disaster recovery runbooks tested quarterly.' },
    { icon: <Settings size={20}/>,  color: 'orange', title: 'Infrastructure Management',           desc: 'Server health monitoring, disk space management, memory leak detection, log rotation, auto-scaling configuration review and cloud cost optimisation recommendations on every monthly report.' },
    { icon: <Bell size={20}/>,      color: 'red',    title: 'Incident Response & RCA',             desc: 'On-call incident response, systematic root cause analysis, post-incident reports with timeline and actionable preventive measures — so the same issue never happens twice.' },
    { icon: <Eye size={20}/>,       color: 'pink',   title: 'Monthly Health Reports',              desc: 'Detailed monthly reports covering uptime statistics, error rates, performance metrics, security scan results, completed work, recommendations and upcoming maintenance tasks.' },
  ];

  const plans = [
    {
      name: 'Essential',
      desc: 'For small business websites and simple web apps',
      features: [
        'Monthly security dependency updates',
        'Uptime monitoring (1-minute intervals)',
        'Weekly automated backups',
        'Monthly Lighthouse performance audit',
        'Bug fixes up to 5 hours per month',
        'Monthly health report',
        'Email support — response within 48 hours',
        'SSL certificate management',
      ],
      cta: 'Get Essential Plan',
    },
    {
      name: 'Professional',
      desc: 'For production web applications and e-commerce',
      features: [
        'Everything in Essential, plus:',
        'Bi-weekly dependency updates with testing',
        '1-minute uptime monitoring with SMS alerts',
        'Daily automated backups with integrity testing',
        'Bug fixes up to 10 hours per month',
        'Critical bug response within 24 hours',
        'Monthly Core Web Vitals optimisation',
        'Sentry error monitoring integration',
        'Priority email + WhatsApp support',
        'Quarterly security penetration scan',
      ],
      cta: 'Get Professional Plan',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      desc: 'For complex platforms, SaaS and high-traffic apps',
      features: [
        'Everything in Professional, plus:',
        'Weekly dependency updates and testing',
        '30-second uptime monitoring',
        'Real-time error alerting with PagerDuty',
        'Bug fixes up to 20 hours per month',
        'Critical bug response within 4 hours',
        'Database query optimisation monthly',
        'Custom infrastructure monitoring',
        'Dedicated engineer point of contact',
        'Quarterly architecture review call',
        'On-call incident response coverage',
      ],
      cta: 'Get Enterprise Plan',
    },
  ];

  const process = [
    { n: '01', title: 'Onboarding & Codebase Audit', desc: 'We review your codebase, infrastructure, deployment pipeline and current monitoring setup — producing an initial health report with immediate recommendations.' },
    { n: '02', title: 'Monitoring & Alerting Setup',  desc: 'Uptime monitoring, error tracking with Sentry, performance monitoring and alerting configured. You and we both get notified the moment anything is wrong.' },
    { n: '03', title: 'Backup & Recovery Configuration', desc: 'Automated backup schedules configured, tested and documented. Recovery procedures validated — so you know exactly what happens if something goes wrong.' },
    { n: '04', title: 'Monthly Maintenance Cycle',    desc: 'Security updates, dependency patches, performance audit, database maintenance and any bug fixes performed on a predictable monthly schedule.' },
    { n: '05', title: 'Monthly Report Delivery',      desc: 'Detailed report covering uptime, errors, performance, completed work, security findings and recommendations — delivered the first week of every month.' },
    { n: '06', title: 'Ongoing Improvement Roadmap',  desc: 'Quarterly review calls to discuss performance trends, upcoming framework updates, infrastructure improvements and feature work if needed.' },
  ];

  const faqs = [
    { q: 'What is included in a website maintenance plan?', a: 'A DevZore website maintenance plan covers security dependency updates, uptime monitoring with alerting, automated database backups, bug fixing hours, monthly Lighthouse performance audits, error monitoring with Sentry, Core Web Vitals tracking, SSL certificate management, monthly health reports and priority support. The exact scope depends on your chosen plan — we offer Essential, Professional and Enterprise tiers.' },
    { q: 'How quickly do you respond to critical bugs?', a: 'On the Professional plan, critical production bugs receive a response within 24 hours. On the Enterprise plan, critical bugs receive a response within 4 hours. We define a critical bug as any issue that prevents users from completing core actions, causes data loss or takes the site offline. Routine bug fixes and improvements are handled within the monthly hours allocation.' },
    { q: 'Can you maintain a site you did not build?', a: 'Yes. We regularly take on maintenance for websites and applications we did not build — including React, Next.js, Node.js, MERN stack and various other tech stacks. We start every new maintenance client with a codebase audit to understand the architecture, identify immediate risks and document the system. This typically takes one to two weeks before active maintenance begins.' },
    { q: 'What monitoring tools do you use?', a: 'Our monitoring stack includes Uptime Robot or Better Uptime for availability monitoring, Sentry for error tracking and alerting, Datadog or custom dashboards for application performance monitoring, Lighthouse CI for Core Web Vitals tracking, npm audit and Snyk for security vulnerability scanning, and AWS CloudWatch or similar for infrastructure metrics.' },
    { q: 'Do you provide emergency support outside business hours?', a: 'Enterprise plan clients receive on-call incident response coverage for critical outages. Professional plan clients receive next-business-day response for non-critical issues and 24-hour response for critical production outages. All clients can reach us via WhatsApp for urgent communication regardless of plan.' },
    { q: 'What happens if you discover a security vulnerability?', a: 'When we discover a security vulnerability — via automated scanning, CVE databases or manual review — we assess the severity, notify you immediately for critical issues, apply the fix or mitigation, test in staging, deploy to production and include a full write-up in the monthly report. We treat all security issues as high priority regardless of plan tier.' },
    { q: 'Can I upgrade or downgrade my maintenance plan?', a: 'Yes. You can change plans at any time with 30 days notice. We do not lock clients into long-term contracts — all plans are month-to-month. If your traffic or complexity grows significantly, we will proactively recommend an upgrade with clear justification before any issues arise.' },
    { q: 'What is included in the monthly health report?', a: 'The monthly health report includes uptime percentage and downtime incidents, error rate trends from Sentry, Core Web Vitals scores compared to previous month, security scan results and patches applied, dependency update log, completed bug fixes and hours used, upcoming maintenance tasks and recommendations, and any infrastructure cost optimisation suggestions.' },
  ];

  const colorMap = {
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'      : 'bg-blue-50 border-blue-100 text-blue-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-100 text-green-600',
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400': 'bg-purple-50 border-purple-100 text-purple-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'   : 'bg-amber-50 border-amber-100 text-amber-600',
    cyan:   d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400': 'bg-indigo-50 border-indigo-100 text-indigo-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400': 'bg-orange-50 border-orange-100 text-orange-600',
    red:    d ? 'bg-red-500/10 border-red-500/20 text-red-400'         : 'bg-red-50 border-red-100 text-red-600',
    pink:   d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'      : 'bg-pink-50 border-pink-100 text-pink-600',
  };

  const CtaStrip = ({ heading, sub }) => (
    <div className={`p-8 rounded-2xl border text-center ${d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'}`}>
      <h3 className={`text-lg font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{heading}</h3>
      <p className={`text-sm mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{sub}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]">
          Get Free Audit <ArrowRight size={13}/>
        </Link>
        <a href="https://wa.me/923348004300?text=Hi DevZore! I need website maintenance services."
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
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
        <title>Website Maintenance & Support Services | Monthly Retainer | DevZore</title>
        <meta name="description" content="Professional website maintenance and support services — security updates, uptime monitoring, bug fixes, performance optimisation, database backups and monthly reports. DevZore keeps your web application secure, fast and growing. Free site audit available." />
        <link rel="canonical" href="https://devzore.com/maintenance" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore" />
        <meta name="keywords" content="website maintenance services, web app maintenance, website support services, monthly website maintenance, website security updates, uptime monitoring service, bug fixing service, website performance optimisation, database backup service, website maintenance company, web application support, React maintenance service, Node.js maintenance, MERN stack maintenance, SaaS maintenance support, website retainer service, monthly maintenance plan, technical support service, website health monitoring, emergency website support" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="Website Maintenance & Support Services | DevZore" />
        <meta property="og:description" content="Security updates, uptime monitoring, bug fixes and monthly reports. Keep your web app secure, fast and growing with DevZore maintenance plans." />
        <meta property="og:url" content="https://devzore.com/maintenance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Maintenance & Support Services | DevZore" />
        <meta name="twitter:description" content="Security, monitoring, bug fixes and performance. Monthly maintenance plans for web applications. Free audit." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Website Maintenance and Support Services",
          "alternateName": ["Web App Maintenance", "Website Support Retainer", "Monthly Maintenance Plan"],
          "description": "DevZore provides website maintenance and support services including security updates, uptime monitoring, bug fixing, performance optimisation and monthly health reports for web applications worldwide.",
          "url": "https://devzore.com/maintenance",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" }, "areaServed": "Worldwide" },
          "serviceType": "Website Maintenance",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Maintenance Plans",
            "itemListElement": plans.map((p, i) => ({ "@type": "Offer", "position": i + 1, "name": p.name, "description": p.desc }))
          }
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
            { "@type": "ListItem", "position": 3, "name": "Maintenance & Support", "item": "https://devzore.com/maintenance" }
          ]
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Hero */}
        <section aria-labelledby="maint-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> Currently Accepting Clients
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <Globe size={10}/> Worldwide Clients
                  </div>
                </div>

                <h1 id="maint-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Website Maintenance &{' '}
                  <span className="text-purple-600">Support Services</span> That Keep You Online
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  Security Updates · Uptime Monitoring · Bug Fixes · Performance · Monthly Reports · Worldwide
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore provides professional website maintenance and web application support services
                  for businesses worldwide. Our maintenance plans cover everything a live web product
                  needs to stay secure, fast and available — security patches, uptime monitoring,
                  bug fixing, performance optimisation, database backups and detailed monthly reports.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  We maintain React, Next.js, Node.js, MERN stack, SaaS platforms and custom web
                  applications — whether we built them or not. Our monitoring stack catches issues
                  before your users do, and our response times mean problems get solved, not escalated.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  Month-to-month plans, no long-term contracts, transparent monthly reports and
                  a dedicated team who treats your product like it is their own.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { val: '99.9%', label: 'Uptime Target' },
                    { val: '24hr',  label: 'Critical Response' },
                    { val: '5.0',   label: 'Client Rating' },
                    { val: '0',     label: 'Long-term Contracts' },
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
                    Get Free Site Audit <ArrowRight size={14}/>
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need website maintenance services."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
                    WhatsApp
                  </a>
                  <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    All Services
                  </Link>
                </div>
                <p className={`text-[12px] ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                  ⚡ Free initial audit · Month-to-month · No lock-in contracts · We can maintain sites we did not build
                </p>
              </div>

              {/* Right: Why maintenance matters */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-6 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  What Happens Without Maintenance
                </p>
                <div className="space-y-4">
                  {[
                    { icon: '🔓', issue: 'Security vulnerabilities accumulate',      consequence: 'npm packages have known CVEs within 90 days on average — exploited within weeks.' },
                    { icon: '🐌', issue: 'Performance degrades silently',            consequence: 'Every 100ms of load time reduces conversion by 1%. Most degradation is invisible until it is severe.' },
                    { icon: '📦', issue: 'Dependencies fall critically behind',      consequence: 'Packages more than 2 major versions behind often cannot be updated safely — requiring expensive rewrites.' },
                    { icon: '💥', issue: 'Unmonitored errors accumulate',           consequence: 'Without Sentry, hundreds of users may hit errors you never know about — silently churning.' },
                    { icon: '🚨', issue: 'Downtime goes undetected',               consequence: 'Without monitoring, you learn about outages from angry customers — not from your own systems.' },
                    { icon: '💾', issue: 'No backup = no recovery',                consequence: 'Database corruption, accidental deletion or hosting failure with no backups means permanent data loss.' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border ${d ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-white border-gray-100'}`}>
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className={`text-[12px] font-bold mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>{item.issue}</p>
                        <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>{item.consequence}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`mt-5 p-3 rounded-xl ${d ? 'bg-green-500/10' : 'bg-green-50'}`}>
                  <p className={`text-[11px] font-semibold text-center ${d ? 'text-green-400' : 'text-green-700'}`}>
                    ✅ DevZore maintenance prevents all of the above — proactively
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <div className={`py-6 border-b ${d ? 'border-white/[0.06] bg-green-500/5' : 'border-gray-100 bg-green-50'}`}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className={`font-black text-base ${d ? 'text-white' : 'text-gray-900'}`}>Your site has not been audited recently?</p>
              <p className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Free security and performance audit — we will show you exactly what needs attention</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm">
                Free Audit <ArrowRight size={13}/>
              </Link>
              <a href="https://wa.me/923348004300" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm">
                WhatsApp <ArrowRight size={13}/>
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <section aria-labelledby="services-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="services-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                What Our Maintenance Service Covers
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Every maintenance plan includes a core set of proactive services — keeping your product
                secure, fast and available without you having to think about it.
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

        {/* Plans */}
        <section aria-labelledby="plans-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="plans-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Maintenance Plans
              </h2>
              <p className={`text-base max-w-xl mx-auto mb-2 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Month-to-month plans — no long-term contracts. Upgrade or cancel anytime.
              </p>
              <p className={`text-sm ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                Contact us for exact pricing — every plan is customised to your stack and needs
              </p>
            </div>

            {/* Plan tabs */}
            <div className="flex justify-center gap-2 mb-8">
              {plans.map((plan, i) => (
                <button key={i} onClick={() => setActivePlan(i)}
                  className={`px-5 py-2 rounded-lg text-[12px] font-bold transition-all border ${
                    activePlan === i
                      ? 'bg-purple-600 text-white border-purple-600'
                      : d ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white' : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900'
                  }`}>
                  {plan.name}
                </button>
              ))}
            </div>

            {/* Active plan */}
            <div className={`max-w-2xl mx-auto p-8 rounded-3xl border ${
              plans[activePlan].highlighted
                ? d ? 'border-purple-500/40 bg-purple-600/5' : 'border-purple-200 bg-purple-50'
                : d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'
            }`}>
              {plans[activePlan].highlighted && (
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className={`text-2xl font-black mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{plans[activePlan].name}</h3>
              <p className={`text-sm mb-6 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{plans[activePlan].desc}</p>
              <div className="space-y-3 mb-8">
                {plans[activePlan].features.map((feature, i) => (
                  <div key={i} className={`flex items-center gap-3 text-[13px] ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                    <CheckCircle size={14} className="text-purple-500 flex-shrink-0"/>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]">
                  {plans[activePlan].cta} <ArrowRight size={13}/>
                </Link>
                <a href="https://wa.me/923348004300?text=Hi DevZore! I am interested in the maintenance plan."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm">
                  Discuss via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section aria-labelledby="process-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>How Our Maintenance Service Works</h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>From onboarding to ongoing monthly care — a transparent, predictable process</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {process.map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className={`text-[13px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
            <CtaStrip heading="Ready to hand off your maintenance?" sub="Free initial audit. Month-to-month. No contracts. We respond within 24 hours." />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={`py-20 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Maintenance & Support FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about our website maintenance service</p>
            </div>
            <div className="space-y-3 mb-10">
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
            <CtaStrip heading="Questions about maintenance plans?" sub="Talk to us directly — free consultation, no commitment. We respond within 24 hours." />
          </div>
        </section>

        {/* Internal Links */}
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Development',         path: '/web-development' },
                { label: 'Backend & API',            path: '/backend-api' },
                { label: 'React Development',        path: '/reactdevelopment' },
                { label: 'MERN Stack Development',   path: '/mern-stack-development' },
                { label: 'SaaS Development',          path: '/saas-product-development' },
                { label: 'Mobile App Development',   path: '/mobile-apps' },
                { label: 'E-Commerce Development',   path: '/ecommerce' },
                { label: 'UI/UX Design',             path: '/ui-ux-design' },
                { label: 'All Services',             path: '/allservices' },
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
                Stop Worrying About Your Website
              </h2>
              <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Security updates, monitoring, bug fixes, performance and monthly reports — all handled.
                Month-to-month plans, no contracts, free initial audit.
              </p>
              <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                99.9% Uptime · 24hr Bug Response · Monthly Reports · No Lock-in Contracts · Worldwide Clients
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                  Get Free Site Audit <ArrowRight size={15}/>
                </Link>
                <a href="https://wa.me/923348004300?text=Hi DevZore! I need website maintenance."
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
          <h2>Website Maintenance and Support Services — DevZore</h2>
          <p>DevZore provides professional website maintenance and web application support services on monthly retainer plans for businesses worldwide. Our maintenance service covers security dependency updates, 24/7 uptime monitoring, critical bug fixing within 24 hours, monthly performance optimisation, automated database backups, Sentry error monitoring, Core Web Vitals tracking, SSL certificate management and detailed monthly health reports. We maintain React, Next.js, Node.js, MERN stack, SaaS platforms and custom web applications for clients across USA, UK, UAE, Canada, Australia and globally.</p>
          <h2>Maintenance Services</h2>
          {services.map((s, i) => <div key={i}><h3>{s.title}</h3><p>{s.desc}</p></div>)}
          <h2>Maintenance Plans</h2>
          {plans.map((p, i) => <div key={i}><h3>{p.name} Maintenance Plan</h3><p>{p.desc}</p></div>)}
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <h2>Maintenance Process</h2>
          {process.map((p, i) => <div key={i}><h3>{p.title}</h3><p>{p.desc}</p></div>)}
          <p>Primary Keywords: website maintenance services, web app maintenance, website support services, monthly website maintenance, website security updates, uptime monitoring service, bug fixing service, website performance optimisation, database backup service, website maintenance company, web application support, React maintenance, Node.js maintenance, SaaS maintenance support, website retainer service.</p>
          <p>Long-tail Keywords: How much does website maintenance cost, best website maintenance company, web app maintenance monthly plan, React website maintenance service, Node.js application support, SaaS platform maintenance, website security update service, website uptime monitoring service, monthly maintenance retainer web development.</p>
          <p>AI Search: Who provides website maintenance services? Best company for web app maintenance. How much does monthly website maintenance cost? Website security update service. Who monitors website uptime? Web application bug fixing service. React website maintenance company. Monthly retainer web development support.</p>
        </div>

      </main>
    </>
  );
};

export default Maintenance;
