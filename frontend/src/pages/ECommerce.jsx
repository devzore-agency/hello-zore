import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, ArrowRight, CheckCircle, MapPin,
  Shield, Zap, Code2, Clock, Globe, Star,
  CreditCard, Package, TrendingUp, BarChart3,
  Plus, Minus, ExternalLink, Truck, Users,
  Search, Bell, Lock, Award
} from 'lucide-react';

const ECommerce = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    { icon: <ShoppingCart size={20} />, color: 'purple', title: 'Custom Storefront Design', desc: 'Pixel-perfect, mobile-first storefronts designed to convert visitors into buyers. Every UI element — from product cards to checkout — is optimised for maximum conversion rate.' },
    { icon: <CreditCard size={20} />, color: 'green', title: 'Payment Gateway Integration', desc: 'Stripe, PayPal, JazzCash, Easypaisa, Razorpay and local bank integrations. Multi-currency support, automatic tax calculation and PCI-compliant checkout flows.' },
    { icon: <Package size={20} />, color: 'blue', title: 'Inventory & Order Management', desc: 'Real-time inventory tracking, low-stock alerts, bulk product management, order fulfilment workflows and automated supplier notifications.' },
    { icon: <Users size={20} />, color: 'orange', title: 'Multi-vendor Marketplace', desc: 'Build a marketplace platform like Amazon or Daraz — vendor onboarding, commission management, individual vendor dashboards and dispute resolution tools.' },
    { icon: <Search size={20} />, color: 'cyan', title: 'Product Search & Filtering', desc: 'Elasticsearch-powered product search with instant results, faceted filtering by price, category, brand, rating and custom attributes for large catalogs.' },
    { icon: <BarChart3 size={20} />, color: 'indigo', title: 'Analytics & Sales Dashboard', desc: 'Real-time revenue dashboards, customer lifetime value tracking, conversion funnel analysis, abandoned cart analytics and sales forecasting tools.' },
    { icon: <Truck size={20} />, color: 'amber', title: 'Shipping & Logistics Integration', desc: 'TCS, Leopards, DHL, FedEx and local courier API integration with real-time shipping rate calculation, order tracking and automated fulfilment.' },
    { icon: <Bell size={20} />, color: 'pink', title: 'Marketing & Promotions Engine', desc: 'Discount codes, flash sales, bundle offers, loyalty points, referral programs, email marketing integration with Mailchimp and push notification campaigns.' },
    { icon: <Lock size={20} />, color: 'red', title: 'Security & Compliance', desc: 'SSL encryption, PCI DSS compliance, fraud detection, secure authentication, GDPR-ready data handling and regular security audits for every e-commerce build.' },
  ];

  const techStack = [
    { category: 'Frontend', items: ['React.js 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Redis Cache'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Prisma ORM'] },
    { category: 'Payments', items: ['Stripe', 'PayPal', 'JazzCash', 'Easypaisa', 'Razorpay'] },
    { category: 'Shipping', items: ['TCS API', 'Leopards API', 'DHL', 'FedEx', 'ShipStation'] },
    { category: 'Cloud', items: ['AWS S3', 'Cloudinary', 'Vercel', 'DigitalOcean', 'Cloudflare CDN'] },
  ];

  const process = [
    { n: '01', title: 'Business & Product Discovery', desc: 'We map your product catalog structure, customer journey, payment requirements, shipping zones and admin workflow — before any development begins.' },
    { n: '02', title: 'UI/UX Design for E-Commerce', desc: 'Conversion-optimised Figma designs for every page — homepage, category, product, cart, checkout and account. A/B tested layouts based on e-commerce best practices.' },
    { n: '03', title: 'Core Platform Development', desc: 'Product catalog, cart, wishlist, user auth and admin panel built in sprint one. Payment integration and order management in sprint two.' },
    { n: '04', title: 'Integrations & Advanced Features', desc: 'Shipping APIs, email marketing, analytics, search engine, reviews system and any third-party tools integrated and tested.' },
    { n: '05', title: 'Performance & SEO Optimisation', desc: 'Core Web Vitals optimisation, product schema markup, category page SEO, image compression and Lighthouse 90+ scores across all pages.' },
    { n: '06', title: 'Launch, Training & Support', desc: 'Full deployment, admin panel training session, 30 days of post-launch support and optional monthly maintenance plan.' },
  ];

  const faqs = [
    { q: 'How much does custom e-commerce development cost?', a: 'The cost of a custom e-commerce solution depends on your specific requirements, features, and business objectives. We provide a personalized proposal after understanding your project needs. Get in touch for a free consultation and a tailored solution.' }, 
    { q: 'How long does it take to build a custom e-commerce website?', a: 'A standard custom e-commerce store takes 6 to 10 weeks. A multi-vendor marketplace takes 12 to 18 weeks. A basic product catalogue with checkout takes 3 to 5 weeks. Every project starts with a discovery session that produces a milestone-based timeline you can rely on.' },
    { q: 'Do you integrate JazzCash and Easypaisa for Pakistani e-commerce?', a: 'Yes. We have extensive experience integrating JazzCash, Easypaisa and local bank payment gateways for Pakistani e-commerce platforms, alongside international gateways like Stripe and PayPal for businesses serving global customers.' },
    { q: 'Can you build a marketplace like Daraz or Amazon?', a: 'Yes. We build full multi-vendor marketplace platforms with vendor onboarding, individual vendor dashboards, commission management, product approval workflows, dispute resolution and customer-facing vendor storefronts. These projects typically take 12 to 18 weeks.' },
    { q: 'Will my e-commerce site rank on Google?', a: 'Yes. Every e-commerce platform we build includes structured product schema markup, SEO-optimised category and product URLs, fast server-side rendered pages with Next.js, Core Web Vitals optimisation, XML sitemaps and mobile-first responsive design — all of which contribute to strong Google rankings.' },
    { q: 'Can you migrate my existing WooCommerce or Shopify store?', a: 'Yes. We regularly migrate e-commerce stores from WooCommerce, Shopify, Magento and other platforms to custom MERN stack solutions. We handle full data migration including products, customers, orders and reviews with zero downtime during the switch.' },
    { q: 'Do you integrate shipping couriers like TCS and Leopards for Pakistan?', a: 'Yes. We integrate TCS, Leopards, Pakistan Post and other local courier APIs with real-time shipping rate calculation, automated order dispatching, tracking number generation and customer-facing order tracking pages.' },
    { q: 'Will I own the source code of my e-commerce platform?', a: 'Absolutely. 100 percent of the source code, database schema, design files and all project assets belong to you from day one. Your code lives in your GitHub repository and your store runs in your cloud accounts. We never charge licensing fees on software we build for you.' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    green: d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-100 text-green-600',
    blue: d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
    cyan: d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    amber: d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-amber-50 border-amber-100 text-amber-600',
    pink: d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400' : 'bg-pink-50 border-pink-100 text-pink-600',
    red: d ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-red-50 border-red-100 text-red-600',
  };

  return (
    <>
      <Helmet>
        <title>Custom E-Commerce Development Services | MERN Stack Stripe JazzCash | DevZore Pakistan</title>
        <meta name="description" content="DevZore builds custom e-commerce platforms with Stripe, JazzCash, Easypaisa and PayPal integration from Islamabad, Pakistan. High-converting online stores, multi-vendor marketplaces and e-commerce solutions for clients across USA, UK, UAE and Pakistan." />
        <link rel="canonical" href="https://devzore.com/ecommerce" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore — Muhammad Shoukat" />
        <meta name="keywords" content="e-commerce development Pakistan, custom online store Islamabad, e-commerce website development Pakistan, JazzCash integration Pakistan, Easypaisa payment integration, Stripe e-commerce Pakistan, multi-vendor marketplace development Pakistan, WooCommerce alternative Pakistan, Shopify alternative Pakistan, online store development Islamabad, e-commerce agency Pakistan, hire e-commerce developer Pakistan, e-commerce development USA clients, MERN stack e-commerce, custom shopping cart development Pakistan" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="Custom E-Commerce Development Services | DevZore Pakistan" />
        <meta property="og:description" content="Custom e-commerce stores and marketplaces from DevZore, Islamabad. Stripe, JazzCash, Easypaisa integration. High-converting, SEO-optimised." />
        <meta property="og:url" content="https://devzore.com/ecommerce" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom E-Commerce Development | DevZore Pakistan" />
        <meta name="twitter:description" content="Custom online stores with JazzCash, Stripe and PayPal. High-converting e-commerce from Islamabad." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom E-Commerce Development Services",
          "description": "DevZore builds custom e-commerce platforms with payment gateway integration from Islamabad, Pakistan.",
          "url": "https://devzore.com/ecommerce",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" } },
          "serviceType": "E-Commerce Development",
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
            { "@type": "ListItem", "position": 3, "name": "E-Commerce Development", "item": "https://devzore.com/ecommerce" }
          ]
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>
        {/* Hero */}
        <section aria-labelledby="ecom-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> E-Commerce Development
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <Globe size={10}/> Worldwide Clients
                  </div>
                </div>

                <h1 id="ecom-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Custom E-Commerce Development{' '}
                  <span className="text-purple-600">That Converts and Scales</span>
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  MERN Stack · Stripe · JazzCash · Easypaisa · Islamabad Pakistan · USA UK UAE
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a custom e-commerce development company based in Islamabad, Pakistan,
                  building high-converting online stores, multi-vendor marketplaces and B2B ordering
                  platforms for businesses across Pakistan, USA, UK, UAE and Canada. We integrate
                  Stripe, PayPal, JazzCash and Easypaisa — covering both local and international markets.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  Unlike Shopify or WooCommerce templates, our custom e-commerce platforms are built
                  exactly to your business logic — your products, your workflows, your integrations —
                  with complete source code ownership and no monthly platform fees.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { val: '15+', label: 'Stores Built' },
                    { val: '250%', label: 'Avg Revenue Boost' },
                    { val: '5.0', label: 'Client Rating' },
                    { val: '0%', label: 'Platform Fees' },
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
                    Get Free E-Commerce Quote <ArrowRight size={14} />
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need an e-commerce development quote."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right: Comparison */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  Custom vs Template — Why Custom Wins
                </p>
                <div className="space-y-3">
                  {[
                    { point: 'No monthly platform fees (Shopify $29–$299/mo)', custom: true },
                    { point: 'Exactly your business logic — not template limits', custom: true },
                    { point: '100% source code ownership', custom: true },
                    { point: 'JazzCash & Easypaisa built-in for Pakistan', custom: true },
                    { point: 'Custom shipping & courier API integration', custom: true },
                    { point: 'SEO-optimised from architecture level', custom: true },
                    { point: 'Scales to 100,000+ products without performance hit', custom: true },
                    { point: 'No plugin conflicts or forced updates', custom: true },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${d ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-white border-gray-100'}`}>
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                      <p className={`text-[12px] font-medium ${d ? 'text-gray-300' : 'text-gray-700'}`}>{item.point}</p>
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

        {/* Features */}
        <section aria-labelledby="features-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="features-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Everything Your E-Commerce Platform Needs
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From single-vendor stores to complex multi-vendor marketplaces — DevZore builds
                every feature your e-commerce business needs to launch, grow and scale.
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

        {/* Payment Gateways Highlight */}
        <section aria-label="Payment gateway integrations" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className={`text-2xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Payment Gateways We Integrate
              </h2>
              <p className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Local and international payment solutions for Pakistan and global markets
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Stripe', flag: '🇺🇸', desc: 'International cards & wallets' },
                { name: 'PayPal', flag: '🌍', desc: 'Global payments & buyer protection' },
                { name: 'JazzCash', flag: '🇵🇰', desc: 'Pakistan mobile wallet' },
                { name: 'Easypaisa', flag: '🇵🇰', desc: 'Pakistan mobile payments' },
                { name: 'Razorpay', flag: '🇮🇳', desc: 'India & South Asia' },
                { name: 'Bank Transfer', flag: '🏦', desc: 'Direct bank integration' },
              ].map((gw, i) => (
                <div key={i} className={`p-4 rounded-xl border text-center transition-all hover:border-purple-500/30 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                  <div className="text-2xl mb-2">{gw.flag}</div>
                  <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{gw.name}</p>
                  <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{gw.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section aria-labelledby="tech-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tech-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                E-Commerce Technology Stack
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Production-proven technologies for high-performance e-commerce
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
                How We Build Your E-Commerce Platform
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                A structured 6-step process from discovery to launch — with regular reviews and no surprises
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
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>E-Commerce Development FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about our e-commerce development services</p>
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
        <section aria-label="Related services" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Development', path: '/web-development' },
                { label: 'MERN Stack Development', path: '/mern-stack-development' },
                { label: 'Backend & API', path: '/backend-api' },
                { label: 'Mobile App Development', path: '/mobile-apps' },
                { label: 'UI/UX Design', path: '/ui-ux-design' },
                { label: 'SaaS Development', path: '/saas-product-development' },
                { label: 'Startup MVP', path: '/startup-mvp' },
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
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
              Ready to Launch Your Online Store?
            </h2>
            <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Get a free consultation and fixed-price quote for your custom e-commerce platform.
              JazzCash, Easypaisa, Stripe integration included. Based in Islamabad, Pakistan.
            </p>
            <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              📍 Islamabad, Pakistan · MERN Stack · Stripe · JazzCash · Easypaisa · 15+ Stores Built
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Get Free E-Commerce Quote <ArrowRight size={15} />
              </Link>
              <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                View All Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* SEO + AI Hidden */}
        <div className="sr-only" aria-hidden="false">
          <h2>Custom E-Commerce Development Services — DevZore Islamabad Pakistan</h2>
          <p>DevZore is a custom e-commerce development company based in Islamabad, Pakistan. We build high-converting online stores, multi-vendor marketplaces and B2B e-commerce platforms using MERN stack, React.js and Next.js. We integrate Stripe, PayPal, JazzCash, Easypaisa and local bank payment gateways for Pakistani and international markets. Our e-commerce solutions include custom storefronts, inventory management, order management, shipping courier integration with TCS and Leopards, analytics dashboards and marketing automation. We serve e-commerce clients across USA, UK, UAE, Canada, Australia and Pakistan.</p>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <p>Keywords: e-commerce development Pakistan, custom online store Islamabad, JazzCash integration Pakistan, Easypaisa payment Pakistan, Stripe e-commerce Pakistan, multi-vendor marketplace Pakistan, WooCommerce alternative Pakistan, Shopify alternative Pakistan, online store development Islamabad, e-commerce agency Pakistan, MERN stack e-commerce, TCS Leopards courier integration Pakistan.</p>
          <p>AI Search: Best e-commerce development company in Pakistan. Who builds online stores with JazzCash integration? Custom e-commerce development Islamabad. How to build an e-commerce website in Pakistan. Best alternative to Shopify Pakistan. Custom marketplace development Pakistan.</p>
        </div>

      </main>
    </>
  );
};

export default ECommerce;