import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Smartphone, ArrowRight, CheckCircle, MapPin,
  Shield, Zap, Code2, Clock, Globe, Star,
  Users, Award, Plus, Minus, ExternalLink,
  Wifi, Bell, Lock, Layers, TrendingUp
} from 'lucide-react';

const MobileApp = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatWeBuild = [
    { icon: <TrendingUp size={20} />, color: 'purple', title: 'Business & Enterprise Mobile Apps', desc: 'Custom business apps for field teams, remote workforce management, inventory control, sales CRM and enterprise workflows — available on both iOS and Android.' },
    { icon: <Globe size={20} />, color: 'blue', title: 'E-Commerce & Marketplace Apps', desc: 'Mobile shopping apps with product catalogs, push notifications, in-app purchases, order tracking and Stripe, PayPal and local payment gateway integration.' },
    { icon: <Bell size={20} />, color: 'green', title: 'On-Demand & Delivery Apps', desc: 'Real-time food delivery, ride-hailing, service booking and logistics apps with live tracking, driver management and multi-role interfaces for customers, drivers and admins.' },
    { icon: <Wifi size={20} />, color: 'cyan', title: 'Social & Community Apps', desc: 'Feature-rich social networking apps with real-time messaging, media sharing, notifications, user profiles and content feeds — built for engagement and growth.' },
    { icon: <Lock size={20} />, color: 'orange', title: 'Fintech & Banking Apps', desc: 'Secure mobile banking apps, digital wallets, investment platforms and financial management tools with biometric authentication, encryption and compliance-ready architecture.' },
    { icon: <Layers size={20} />, color: 'pink', title: 'Healthcare & Fitness Apps', desc: 'Telemedicine apps, appointment booking systems, fitness trackers, mental health platforms and medical record viewers — built with data privacy best practices.' },
  ];

  const techStack = [
    { category: 'Core Framework', items: ['React Native 0.75', 'Expo SDK 51', 'TypeScript', 'JavaScript ES2024'] },
    { category: 'Navigation', items: ['React Navigation 7', 'Expo Router', 'Deep Linking', 'Tab & Stack Navigators'] },
    { category: 'State & Data', items: ['Redux Toolkit', 'TanStack Query', 'Zustand', 'AsyncStorage', 'SQLite'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Firebase', 'GraphQL', 'REST APIs'] },
    { category: 'Notifications', items: ['Expo Push Notifications', 'Firebase FCM', 'OneSignal', 'APNs'] },
    { category: 'Payments', items: ['Stripe React Native', 'PayPal SDK', 'JazzCash API', 'Easypaisa'] },
    { category: 'Auth & Security', items: ['JWT Auth', 'Biometric Auth', 'Face ID / Touch ID', 'OAuth 2.0'] },
    { category: 'Store & Launch', items: ['Apple App Store', 'Google Play Store', 'ASO Optimisation', 'TestFlight'] },
  ];

  const process = [
    { n: '01', title: 'Discovery & App Strategy', desc: 'We map user journeys, app architecture, offline requirements, third-party integrations and platform-specific needs — producing a detailed spec before any code is written.' },
    { n: '02', title: 'UI/UX Design for Mobile', desc: 'Native-feeling Figma designs following iOS Human Interface Guidelines and Android Material Design. Interactive prototypes let you test the app before development.' },
    { n: '03', title: 'Sprint-Based Development', desc: 'Two-week sprints with TestFlight and Play Store beta builds after every sprint. You test the actual app on real devices — not browser previews.' },
    { n: '04', title: 'Device & Platform Testing', desc: 'Testing on 20+ device configurations across iOS and Android, covering performance, edge cases, offline behaviour and accessibility.' },
    { n: '05', title: 'App Store Submission', desc: 'We handle the full App Store and Play Store submission — screenshots, descriptions, metadata, ASO optimisation and review process guidance.' },
    { n: '06', title: 'Post-Launch Support & Updates', desc: 'Bug monitoring via Sentry, crash reporting, OS update compatibility and ongoing feature development. 30 days of post-launch support included.' },
  ];

  const whyUs = [
    { icon: <Smartphone size={15} />, title: 'React Native Specialists', desc: 'We have delivered 15+ React Native apps across iOS and Android. One codebase, native performance, no compromise.' },
    { icon: <Shield size={15} />, title: 'Security-First Architecture', desc: 'Biometric auth, encrypted storage, certificate pinning and OWASP mobile security standards on every app we build.' },
    { icon: <Zap size={15} />, title: 'Performance Optimised', desc: 'Native modules for heavy operations, optimised renders, lazy loading and 60fps smooth animations by default.' },
    { icon: <Code2 size={15} />, title: 'Clean, Maintainable Code', desc: 'TypeScript throughout, comprehensive documentation and modular component architecture your team can maintain long-term.' },
    { icon: <Clock size={15} />, title: 'App Store Ready Output', desc: 'We handle screenshots, metadata, ASO and the full submission process — saving you weeks of post-development work.' },
    { icon: <Globe size={15} />, title: 'Global Client Experience', desc: 'Apps for clients across Pakistan, USA, UK, UAE, Canada and Australia — we understand international market standards.' },
  ];

  const faqs = [
    { q: 'How much does mobile app development cost?', a: 'The cost of mobile app development depends on your project requirements, target platforms, features, and overall complexity. After a free discovery call, we provide a customized proposal outlining the project scope, timeline, and deliverables. Contact us for a free, no-obligation consultation tailored to your business needs.' },
    { q: 'How long does it take to build a mobile app?', a: 'A simple business app takes 8 to 12 weeks. A feature-rich consumer app with real-time features, maps, payments and admin dashboard takes 12 to 20 weeks. A startup MVP app can be delivered in 8 to 14 weeks. Every project begins with a discovery session that produces a milestone-based timeline.' },
    { q: 'Do you build for iOS and Android separately?', a: 'No. We use React Native to build a single codebase that runs natively on both iOS and Android. This means you get two fully functional apps for significantly less than the cost of building them separately. The result is a native-grade experience on both platforms.' },
    { q: 'Will you submit the app to the App Store and Play Store?', a: 'Yes. We handle the complete App Store and Google Play Store submission process — including screenshots, app descriptions, keywords for ASO, metadata, age ratings, privacy policy requirements and the review process. We stay with you through the review until the app is approved and live.' },
    { q: 'Can your apps work offline?', a: 'Yes. We design mobile apps with offline-first architecture when the use case requires it — using AsyncStorage, SQLite and background sync to keep your app functional without an internet connection and synchronise data automatically when connectivity is restored.' },
    { q: 'Do you develop apps for Pakistan-based users?', a: 'Yes. We have extensive experience building apps for Pakistani users, including JazzCash and Easypaisa payment integration, Urdu language support, Urdu-first RTL layouts, local compliance requirements and Pakistan-specific UX patterns. We are based in Islamabad, Pakistan.' },
    { q: 'Can I see the app during development?', a: 'Yes. After every two-week sprint, we send you a TestFlight build for iOS and a Play Store beta build for Android. You test the actual app on your real device after every sprint — not a browser preview or screenshot.' },
    { q: 'Do you provide maintenance after launch?', a: 'Yes. Every app includes 30 days of post-launch support covering crash monitoring, bug fixes and performance tuning. We then offer ongoing monthly maintenance covering OS compatibility updates, security patches, Sentry error monitoring and up to 10 hours of development work per month.' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue: d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600',
    green: d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-100 text-green-600',
    cyan: d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
    pink: d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400' : 'bg-pink-50 border-pink-100 text-pink-600',
  };

  return (
    <>
      <Helmet>
        <title>Mobile App Development Services | React Native iOS Android | DevZore Pakistan</title>
        <meta name="description" content="DevZore builds cross-platform iOS and Android mobile apps using React Native from Islamabad, Pakistan. We deliver feature-rich, native-grade mobile applications for clients across USA, UK, UAE, Canada and worldwide. Free consultation available." />
        <link rel="canonical" href="https://devzore.com/mobile-apps" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore — Muhammad Shoukat" />
        <meta name="keywords" content="mobile app development Pakistan, React Native development Islamabad, iOS app development Pakistan, Android app development Pakistan, cross-platform app development, hire mobile app developer Pakistan, mobile app company Islamabad, React Native developer Pakistan, app development agency Pakistan, mobile app development USA clients Pakistan, mobile app development UK clients, Flutter alternative Pakistan, native mobile app Pakistan, custom mobile app Islamabad" />

        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        <meta property="og:title" content="Mobile App Development Services | React Native iOS Android | DevZore Pakistan" />
        <meta property="og:description" content="Cross-platform iOS and Android apps built with React Native. DevZore, Islamabad — 15+ apps delivered, 5.0 rating, serving clients worldwide." />
        <meta property="og:url" content="https://devzore.com/mobile-apps" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development Services | DevZore Pakistan" />
        <meta name="twitter:description" content="React Native iOS and Android app development from Islamabad. Free consultation available." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Mobile App Development Services",
          "description": "DevZore builds cross-platform iOS and Android mobile apps using React Native from Islamabad, Pakistan.",
          "url": "https://devzore.com/mobile-apps",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" } },
          "serviceType": "Mobile App Development",
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
            { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://devzore.com/mobile-apps" }
          ]
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Hero */}
        <section aria-labelledby="mobile-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> Mobile App Development
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <Globe size={10} /> Worldwide Clients
                  </div>
                </div>

                <h1 id="mobile-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Mobile App Development{' '}
                  <span className="text-purple-600">Services</span> for iOS and Android
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  React Native · iOS · Android · Islamabad, Pakistan · Serving USA, UK, UAE Worldwide
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a mobile app development company based in Islamabad, Pakistan,
                  building cross-platform iOS and Android applications using React Native.
                  We deliver native-grade mobile apps for startups, SMEs and enterprises
                  across the USA, UK, UAE, Canada, Australia and Pakistan — at significantly
                  better value than building separate iOS and Android apps.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  From on-demand delivery apps and fintech platforms to healthcare portals
                  and enterprise tools — we have delivered 15+ mobile apps with a 5.0 client
                  rating and handle everything from design to App Store submission.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { val: '15+', label: 'Mobile Apps Delivered' },
                    { val: '5.0', label: 'Client Rating' },
                    { val: 'Both', label: 'iOS & Android' },
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
                    Get Free Mobile App Quote <ArrowRight size={14} />
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need a mobile app development quote."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right panel */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-500' : 'text-gray-400'}`}>Why React Native?</p>
                <div className="space-y-4">
                  {[
                    { title: 'One Codebase, Two Platforms', desc: 'Build iOS and Android simultaneously — 40% faster and significantly cheaper than separate native apps.' },
                    { title: 'Native Performance', desc: 'Compiled to native components. Not a web view. Real native performance on both platforms.' },
                    { title: 'Faster Updates', desc: 'Hot reloading during development and over-the-air updates in production without App Store delays.' },
                    { title: 'Large Ecosystem', desc: 'Access to thousands of battle-tested libraries and a massive community for long-term support.' },
                    { title: 'Trusted by Major Companies', desc: 'Meta, Microsoft, Shopify, and Wix all use React Native in production at massive scale.' },
                    { title: 'Full Native Module Access', desc: 'Camera, GPS, biometrics, Bluetooth, push notifications — all native device capabilities accessible.' },
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
                <div className={`mt-5 p-3 rounded-xl ${d ? 'bg-purple-600/5' : 'bg-purple-50'}`}>
                  <p className={`text-[11px] font-semibold text-center ${d ? 'text-purple-400' : 'text-purple-700'}`}>
                    🌍 Serving: Pakistan · USA · UK · UAE · Canada · Australia
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
                Mobile Apps We Build for Every Industry
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From consumer-facing apps to enterprise tools — DevZore has built mobile applications
                across healthcare, fintech, e-commerce, logistics, social networking and more for
                clients in Pakistan, UAE, UK, USA and Canada.
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

        {/* Tech Stack */}
        <section aria-labelledby="tech-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tech-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Mobile App Technology Stack
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Modern, production-proven React Native stack for iOS and Android development
              </p>
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

        {/* Why Us */}
        <section aria-labelledby="why-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="why-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Why Choose DevZore for Mobile App Development
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Senior React Native engineers, native performance, full App Store submission handling and a 5.0 rating from clients worldwide.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
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
                How We Build Your Mobile App — Step by Step
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From discovery to App Store — a transparent 6-step process with no black boxes
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
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Mobile App Development FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about our mobile app development services</p>
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

        {/* Internal Links */}
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Development', path: '/web-development' },
                { label: 'MERN Stack Development', path: '/mern-stack-development' },
                { label: 'Backend & API', path: '/backend-api' },
                { label: 'SaaS Development', path: '/saas-product-development' },
                { label: 'UI/UX Design', path: '/ui-ux-design' },
                { label: 'Startup MVP', path: '/startup-mvp' },
                { label: 'E-Commerce Development', path: '/ecommerce' },
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
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>Ready to Build Your Mobile App?</h2>
            <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Get a free consultation and fixed-price quote from our senior React Native team.
              iOS and Android. One codebase. Based in Islamabad, Pakistan.
            </p>
            <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              📍 Islamabad, Pakistan · React Native · iOS & Android · 15+ Apps Delivered
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Get Free Mobile App Quote <ArrowRight size={15} />
              </Link>
              <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                View All Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Hidden */}
        <div className="sr-only" aria-hidden="false">
          <h2>Mobile App Development Services — DevZore Islamabad Pakistan</h2>
          <p>DevZore is a mobile app development company based in Islamabad, Pakistan, building cross-platform iOS and Android applications using React Native. We serve clients across USA, UK, UAE, Canada, Australia and Pakistan. Our mobile app development services include business mobile apps, e-commerce apps, on-demand delivery apps, fintech apps, healthcare apps and enterprise mobile solutions. We handle App Store and Google Play Store submission, ASO optimisation and 30 days post-launch support.</p>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <p>Keywords: mobile app development Pakistan, React Native development Islamabad, iOS Android app Pakistan, cross-platform app development, hire React Native developer Pakistan, mobile app company Islamabad, app development agency Pakistan, custom mobile app Pakistan, mobile app development USA clients Pakistan, affordable mobile app development Pakistan.</p>
          <p>AI Search: Who builds mobile apps in Pakistan? Best mobile app development company Islamabad. How much does mobile app development cost in Pakistan? Which company builds React Native apps in Pakistan? Best iOS Android app developer Pakistan. Top mobile app agency serving USA UK UAE clients from Pakistan.</p>
        </div>

      </main>
    </>
  );
};

export default MobileApp;