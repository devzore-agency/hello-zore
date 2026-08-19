import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Globe, Star, CheckCircle } from 'lucide-react';

// Asset imports
import weldonPaint from '../assets/weldonpaint.webp';
import sarabFood from '../assets/sarab_website_image.webp';
import dentalWebsite from '../assets/Dental_website.webp';
import gulfDunes from '../assets/gulf-dunes.webp';
import quickBite from '../assets/food.webp';
import qatarTourist from '../assets/qatar_tourist_agency.webp';

const Projects = ({ isDark }) => {
  const d = isDark;
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web App', 'Mobile', 'E-Commerce', 'SaaS', 'Healthcare', 'Travel'];

  const projects = [
    {
      title: 'Weldon Paints',
      subtitle: 'Store & Inventory Management System',
      desc: 'Enterprise-grade MERN stack inventory control and POS system built for Weldon Paints. Features real-time stock tracking, automated sales reporting, multi-user role management and a full admin dashboard.',
      image: weldonPaint,
      liveUrl: 'https://hamzapaints.vercel.app/',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      filter: 'Web App',
      category: 'Inventory & POS',
      country: '🇵🇰 Pakistan',
      result: 'Replaced manual spreadsheets — 80% faster stock management',
      color: 'blue',
    },
    {
      title: 'Sarab Express',
      subtitle: 'Multi-Restaurant Food Delivery Portal',
      desc: 'Scalable MERN stack food ordering application featuring interactive menus, cart management, real-time order status updates, and a dedicated vendor dashboard with revenue analytics.',
      image: sarabFood,
      liveUrl: 'https://sarab-food-delivery.vercel.app/',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      filter: 'E-Commerce',
      category: 'Food Delivery',
      country: '🇵🇰 Pakistan',
      result: 'Onboarded 12 restaurants in first month of launch',
      color: 'orange',
    },
    {
      title: 'Prime Dental Care',
      subtitle: 'Healthcare Booking & Patient Portal',
      desc: 'Modern healthcare web solution designed for dental clinics. Offers online appointment scheduling, patient records, service showcase, and partner inquiry management with a clean, trust-building UI.',
      image: dentalWebsite,
      liveUrl: 'https://prime-dental-react.vercel.app/',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      filter: 'Healthcare',
      category: 'Healthcare',
      country: '🇵🇰 Pakistan',
      result: 'Appointment bookings up 60% after launch',
      color: 'green',
    },
    {
      title: 'Gulf Dunes Tourism',
      subtitle: 'Middle East Travel Booking Platform',
      desc: 'High-converting travel platform engineered for Middle Eastern tourism. Enables seamless desert safari bookings, customised tour packages, and multi-currency inquiry flows for international visitors.',
      image: gulfDunes,
      liveUrl: 'https://www.gulfdunestourism.com/',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'UI Design'],
      filter: 'Travel',
      category: 'Travel & Tourism',
      country: '🇦🇪 UAE',
      result: 'Serving thousands of tourists across Middle East',
      color: 'amber',
    },
    {
      title: 'QuickBite',
      subtitle: 'On-Demand Food Delivery Web App',
      desc: 'Fast and responsive web application designed for cloud kitchens and local restaurants. Features streamlined checkout, advanced search filtering, and a mobile-first design optimised for conversion.',
      image: quickBite,
      liveUrl: 'https://food-nine-ashy.vercel.app/',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      filter: 'E-Commerce',
      category: 'Food Tech',
      country: '🇵🇰 Pakistan',
      result: 'Sub-2-second load time across all devices',
      color: 'red',
    },
    {
      title: 'Best Desert Safari Qatar',
      subtitle: 'Tourism & Safari Booking Engine',
      desc: 'Custom booking platform tailored for Qatar\'s excursion market. Offers real-time reservation requests, package customisation, and a geo-targeted landing experience optimised for international travellers.',
      image: qatarTourist,
      liveUrl: 'https://www.bestdesertsafariqatar.com/',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'SEO'],
      filter: 'Travel',
      category: 'Travel & Tourism',
      country: '🇶🇦 Qatar',
      result: 'Top Google rankings for Qatar safari keywords',
      color: 'purple',
    },
  ];

  const colorMap = {
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'      : 'bg-blue-50 border-blue-200 text-blue-700',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400': 'bg-orange-50 border-orange-200 text-orange-700',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-200 text-green-700',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'   : 'bg-amber-50 border-amber-200 text-amber-700',
    red:    d ? 'bg-red-500/10 border-red-500/20 text-red-400'         : 'bg-red-50 border-red-200 text-red-700',
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400': 'bg-purple-50 border-purple-200 text-purple-700',
  };

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.filter === activeFilter);

  const stats = [
    { val: '50+',  label: 'Projects Delivered' },
    { val: '5.0',  label: 'Client Rating' },
    { val: '15+',  label: 'Countries' },
    { val: '100%', label: 'Code Ownership' },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`py-4 transition-colors duration-300 ${d ? 'bg-[#050505]' : 'bg-[#fafafa]'}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
              d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
            }`}>
              <Globe size={11}/> Real Projects · Live Worldwide
            </div>
            <h2
              id="projects-heading"
              className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}
            >
              Projects We Have{' '}
              <span className="text-purple-600">Shipped Live</span>
            </h2>
            <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Real products built for real clients across Pakistan, UAE, Qatar and beyond.
              Every project below is live — click to visit and test it yourself.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <div key={i} className={`p-4 rounded-2xl border text-center ${
                d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'
              }`}>
                <div className={`text-2xl font-black ${d ? 'text-white' : 'text-gray-900'}`}>{s.val}</div>
                <div className={`text-[10px] mt-0.5 ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-200 border ${
                activeFilter === f
                  ? 'bg-purple-600 text-white border-purple-600 shadow-[0_0_16px_rgba(124,58,237,0.25)]'
                  : d
                    ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {f}
              {f === 'All' && (
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === 'All' ? 'bg-white/20' : d ? 'bg-white/[0.08] text-gray-500' : 'bg-gray-100 text-gray-400'
                }`}>{projects.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filtered.map((project, i) => (
            <article
              key={i}
              className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06] hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)]'
                  : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/40'
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.subtitle} — DevZore project`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="375"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live website`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-bold rounded-xl text-[13px] hover:bg-purple-50 transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink size={14}/> Live Preview
                  </a>
                </div>

                {/* Country badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                    d ? 'bg-black/50 border-white/10 text-white' : 'bg-white/90 border-gray-200 text-gray-700'
                  }`}>
                    {project.country}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                    d ? 'bg-black/50 border-white/10 text-white' : 'bg-white/90 border-gray-200 text-gray-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-5">

                {/* Title */}
                <h3 className={`text-[15px] font-black mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className="text-purple-500 text-[11px] font-semibold mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className={`text-[12px] leading-relaxed mb-4 flex-grow ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.desc}
                </p>

                {/* Result */}
                <div className={`flex items-start gap-2 p-3 rounded-lg border mb-4 ${
                  d ? 'bg-green-500/5 border-green-500/15' : 'bg-green-50 border-green-100'
                }`}>
                  <CheckCircle size={12} className="text-green-500 flex-shrink-0 mt-0.5"/>
                  <p className={`text-[11px] font-semibold ${d ? 'text-green-400' : 'text-green-700'}`}>
                    {project.result}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className={`text-[10px] font-bold px-2 py-1 rounded-md border ${
                      d ? 'bg-white/[0.04] border-white/[0.08] text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} live website`}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[12px] font-bold border transition-all group/btn ${
                    d
                      ? 'border-purple-500/25 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                      : 'border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                  }`}
                >
                  Visit Site
                  <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 transition-transform"/>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Industries Section ── */}
        <div className={`p-8 lg:p-10 rounded-3xl border mb-10 ${
          d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-2xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Industries We Have Built For
              </h2>
              <p className={`text-sm leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                50+ projects delivered across real estate, healthcare, food tech, travel, retail,
                logistics, EdTech, fintech and SaaS — for clients in Pakistan, UAE, Qatar,
                UK, USA, Canada and Australia.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Healthcare', 'Food & Delivery', 'Travel & Tourism', 'Retail & E-Commerce',
                  'Inventory & POS', 'SaaS Platforms', 'Real Estate', 'Education',
                  'Fintech', 'Logistics', 'Construction', 'Restaurant',
                ].map((ind, i) => (
                  <span key={i} className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg border ${
                    d ? 'bg-white/[0.03] border-white/[0.08] text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { flag: '🇵🇰', country: 'Pakistan',      projects: '30+ projects' },
                { flag: '🇦🇪', country: 'UAE',           projects: '8+ projects' },
                { flag: '🇶🇦', country: 'Qatar',         projects: '3+ projects' },
                { flag: '🇬🇧', country: 'UK',            projects: '4+ projects' },
                { flag: '🇺🇸', country: 'USA',           projects: '5+ projects' },
                { flag: '🇦🇺', country: 'Australia',     projects: '2+ projects' },
              ].map((c, i) => (
                <div key={i} className={`p-4 rounded-xl border ${
                  d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-100'
                }`}>
                  <span className="text-xl block mb-1">{c.flag}</span>
                  <p className={`text-[12px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>{c.country}</p>
                  <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{c.projects}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Strip ── */}
        <div className={`p-8 rounded-3xl border text-center ${
          d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'
        }`}>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400"/>
            ))}
            <span className={`ml-2 text-[13px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>
              5.0 from 30+ clients
            </span>
          </div>
          <h2 className={`text-2xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
            Want a Project Like These Built for You?
          </h2>
          <p className={`text-sm mb-6 max-w-lg mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Free consultation. Fixed pricing. Delivered on time.
            Join 30+ clients who trust DevZore to build their digital products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
            >
              Start Your Project <ArrowRight size={15}/>
            </Link>
            <a
              href="https://wa.me/923348004300?text=Hi DevZore! I saw your projects and want to discuss mine."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
              </svg>
              WhatsApp Us
            </a>
            <Link
              to="/allservices"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-white'
              }`}
            >
              All Services <ArrowRight size={15}/>
            </Link>
          </div>
        </div>

        {/* SEO Hidden Block */}
        <div className="sr-only" aria-hidden="false">
          <h2>Our Portfolio — Real Projects Built by DevZore</h2>
          <p>
            DevZore has delivered 50+ software development projects worldwide including
            inventory management systems, food delivery platforms, healthcare booking portals,
            travel and tourism booking engines, e-commerce stores and SaaS applications.
            Our clients are based in Pakistan, UAE, Qatar, UK, USA, Canada and Australia.
            Technologies used include React.js, Node.js, Express.js, MongoDB, MERN stack,
            Tailwind CSS and cloud deployment on AWS and Vercel.
          </p>
          <ul>
            {[
              'Weldon Paints inventory management system Pakistan',
              'Sarab Express food delivery portal Pakistan',
              'Prime Dental Care healthcare booking system Pakistan',
              'Gulf Dunes Tourism travel booking platform UAE',
              'QuickBite food delivery web app Pakistan',
              'Best Desert Safari Qatar tourism booking engine',
            ].map((kw, i) => <li key={i}>{kw}</li>)}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;