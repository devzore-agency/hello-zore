import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Users, Award, Globe,
  Code2, Zap, Shield, HeartHandshake, MapPin,
  Star, TrendingUp, Clock
} from 'lucide-react';

const About = ({ isDark }) => {
  const d = isDark;

  const values = [
    { icon: <Code2 size={18} />, title: 'Engineering Excellence', desc: 'We write clean, well-documented, scalable code on every project — not just code that works today.' },
    { icon: <Shield size={18} />, title: 'Radical Transparency', desc: 'Honest timelines, honest pricing, honest communication. No overpromising, no disappearing acts.' },
    { icon: <Zap size={18} />, title: 'Speed Without Shortcuts', desc: 'We move fast without sacrificing quality. Structured processes let us deliver quickly and reliably.' },
    { icon: <HeartHandshake size={18} />, title: 'Client Partnership', desc: 'We treat every project as if it were our own business — because your success directly reflects ours.' },
    { icon: <Globe size={18} />, title: 'Global Mindset', desc: 'Built in Islamabad, trusted worldwide. We understand both local markets and international standards.' },
    { icon: <Users size={18} />, title: 'People First', desc: 'Great software is built by people who respect each other. We foster a culture of collaboration and growth.' },
  ];

  const milestones = [
    { year: '2022', event: 'DevZore founded by Shoukat in Islamabad, Pakistan' },
    { year: '2022', event: 'First international client — e-commerce platform for UK retailer' },
    { year: '2023', event: 'Expanded to mobile app development with React Native' },
    { year: '2023', event: '10+ projects delivered across Pakistan, UAE and USA' },
    { year: '2024', event: 'Launched SaaS development service — first platform for US fintech startup' },
    { year: '2024', event: '25+ projects completed — 5.0 rating maintained across all reviews' },
    { year: '2025', event: 'Expanded to 15+ countries — Canada, Australia, Saudi Arabia added' },
    { year: '2026', event: '50+ projects delivered — Ahrefs health score 98, PageSpeed 92+' },
  ];

  const team = [
    { name: 'Muhammad Shoukat', role: 'Founder & Lead Engineer', skills: 'MERN Stack · React Native · SaaS Architecture', avatar: 'MS', color: 'bg-purple-600' },
    { name: 'Backend Engineer', role: 'Senior Backend Developer', skills: 'Node.js · PostgreSQL · AWS · Docker', avatar: 'BE', color: 'bg-blue-600' },
    { name: 'Frontend Engineer', role: 'Senior React Developer', skills: 'React.js · Next.js · TypeScript · Tailwind', avatar: 'FE', color: 'bg-indigo-600' },
    { name: 'UI/UX Designer', role: 'Product Designer', skills: 'Figma · Prototyping · Design Systems', avatar: 'UD', color: 'bg-pink-600' },
  ];

  const stats = [
    { icon: <Award size={16} />, val: '50+', label: 'Projects Delivered', sub: 'Since 2022' },
    { icon: <Users size={16} />, val: '30+', label: 'Happy Clients', sub: '5.0 avg rating' },
    { icon: <Globe size={16} />, val: '15+', label: 'Countries Served', sub: 'USA, UK, UAE & more' },
    { icon: <TrendingUp size={16} />, val: '98%', label: 'On-Time Delivery', sub: 'Across all projects' },
    { icon: <Star size={16} />, val: '5.0', label: 'Client Rating', sub: '30+ verified reviews' },
    { icon: <Clock size={16} />, val: '4+', label: 'Years of Experience', sub: 'Production engineering' },
  ];

  return (
    <>
      <Helmet>
        <title>About DevZore | Software Agency Founded by Shoukat — Islamabad Pakistan</title>
        <meta name="description" content="Learn about DevZore, a premium software development agency founded by Shoukat in Islamabad, Pakistan. 50+ projects delivered for clients across USA, UK, UAE, Canada and Australia since 2022." />
        <link rel="canonical" href="https://devzore.com/about" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Muhammad Shoukat — DevZore" />
        <meta name="keywords" content="about DevZore, software agency Islamabad, Shoukat developer Pakistan, DevZore team, software development company Pakistan history" />

        {/* GEO Tags */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* Open Graph */}
        <meta property="og:title" content="About DevZore | Software Agency Founded by Shoukat" />
        <meta property="og:description" content="DevZore is a premium software development agency based in Islamabad, Pakistan. Founded by Shoukat in 2022, serving 30+ clients across USA, UK, UAE and beyond." />
        <meta property="og:url" content="https://devzore.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About DevZore | Software Agency Founded by Shoukat" />
        <meta name="twitter:description" content="Premium software development agency in Islamabad, Pakistan. 50+ projects, 30+ clients, 15+ countries served." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About DevZore",
          "url": "https://devzore.com/about",
          "description": "Learn about DevZore, a premium software development agency founded by Shoukat in Islamabad, Pakistan.",
          "mainEntity": {
            "@type": "Organization",
            "name": "DevZore",
            "url": "https://devzore.com",
            "logo": "https://devzore.com/logo1.png",
            "foundingDate": "2022",
            "founder": { "@type": "Person", "name": "Muhammad Shoukat" },
            "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" },
            "areaServed": "Worldwide",
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "5" },
            "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "email": "hellodevzore@gmail.com", "telephone": "+92-334-8004300" }
          }
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* ── HERO ── */}
        <section aria-labelledby="about-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                  }`}>
                  About DevZore
                </div>
                <h1
                  id="about-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 ${d ? 'text-white' : 'text-gray-900'
                    }`}
                >
                  Digital Solutions{' '}
                  <span className="text-purple-600">Trusted Worldwide.</span>
                </h1>

                <p className={`text-lg leading-relaxed mb-6 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a premium software engineering agency founded by{' '}
                  <strong className={d ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>Muhammad Shoukat</strong>{' '}
                  in Islamabad, Pakistan in 2022. We architect and deliver high-performance web applications,
                  cross-platform mobile apps, scalable SaaS platforms and enterprise software solutions
                  for clients across the USA, UK, UAE, Canada, Australia and beyond.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  We started with a single belief: that world-class software engineering should not require
                  a Western agency budget. Today, 50+ delivered projects and a 5.0 client rating across
                  15+ countries prove that belief right.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Work With Us <ArrowRight size={14} />
                  </Link>
                  <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      }`}>
                    Our Services <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className={`p-5 rounded-2xl border transition-all hover:border-purple-500/30 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-gray-50 border-gray-200 hover:bg-white hover:shadow-sm'
                    }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-purple-500">{s.icon}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</span>
                    </div>
                    <div className={`text-3xl font-black mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>{s.val}</div>
                    <div className={`text-[11px] ${d ? 'text-gray-600' : 'text-gray-400'}`}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section aria-label="DevZore mission and vision" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-8 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                <div className="w-10 h-10 rounded-xl bg-purple-600/15 flex items-center justify-center mb-4">
                  <MapPin size={18} className="text-purple-500" />
                </div>
                <h2 className={`text-xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Our Mission</h2>
                <p className={`text-[14px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  To deliver world-class software engineering from Islamabad, Pakistan — making
                  enterprise-grade digital products accessible to startups and businesses worldwide,
                  regardless of geography or budget constraints. We believe great engineering
                  has no borders.
                </p>
              </div>
              <div className={`p-8 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                <div className="w-10 h-10 rounded-xl bg-purple-600/15 flex items-center justify-center mb-4">
                  <TrendingUp size={18} className="text-purple-500" />
                </div>
                <h2 className={`text-xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Our Vision</h2>
                <p className={`text-[14px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  To be recognised as the most trusted software development agency from Pakistan —
                  known not just for technical excellence, but for the integrity, transparency
                  and long-term partnerships we build with every client we work with.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section aria-labelledby="values-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>Our Values</div>
              <h2 id="values-heading" className={`text-3xl font-black ${d ? 'text-white' : 'text-gray-900'}`}>
                What We Stand For
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 text-purple-500 ${d ? 'bg-purple-500/10 border-purple-500/20' : 'bg-purple-50 border-purple-100'
                    }`}>{v.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{v.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section aria-labelledby="team-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>Our Team</div>
              <h2 id="team-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                The People Behind DevZore
              </h2>
              <p className={`text-base max-w-2xl ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                A focused team of senior engineers and designers who work directly with you on every project.
                No juniors learning on your budget. No account managers in the way.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((t, i) => (
                <div key={i} className={`p-6 rounded-2xl border text-center transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}>
                  <div className={`w-16 h-16 rounded-2xl ${t.color} flex items-center justify-center text-white font-black text-lg mx-auto mb-4`}>
                    {t.avatar}
                  </div>
                  <h3 className={`text-[14px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{t.name}</h3>
                  <p className="text-purple-500 text-[12px] font-semibold mb-2">{t.role}</p>
                  <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{t.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MILESTONES ── */}
        <section aria-labelledby="milestones-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>Our Journey</div>
              <h2 id="milestones-heading" className={`text-3xl font-black ${d ? 'text-white' : 'text-gray-900'}`}>
                DevZore Timeline — 2022 to 2026
              </h2>
            </div>
            <div className="relative">
              <div className={`absolute left-[72px] top-0 bottom-0 w-px ${d ? 'bg-white/[0.06]' : 'bg-gray-200'}`} />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className={`flex-shrink-0 text-[12px] font-black w-14 text-right ${d ? 'text-purple-400' : 'text-purple-600'}`}>
                      {m.year}
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full border-2 border-purple-500 mt-1 ${d ? 'bg-[#030303]' : 'bg-white'}`} />
                    </div>
                    <div className={`pb-4 text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      {m.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY PAKISTAN ── */}
        <section aria-label="Why DevZore is based in Pakistan" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                  }`}>Why Pakistan</div>
                <h2 className={`text-3xl font-black mb-5 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Global Standards at Pakistan's Best Value
                </h2>
                <p className={`text-base leading-relaxed mb-6 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pakistan has one of the fastest-growing tech ecosystems in Asia. Islamabad in particular
                  has a thriving engineering community with deep expertise in modern web and mobile
                  development. DevZore brings together the best of this talent — senior engineers
                  who deliver US and UK quality at significantly better value.
                </p>
                <div className="space-y-3">
                  {[
                    'Senior-level engineers at 40–60% lower cost than US/UK agencies',
                    'English-first communication — no language barriers',
                    'Flexible time zone coverage for US, UK and UAE clients',
                    'Proven track record with 15+ country client base',
                    'Strong Pakistan tech community with growing global recognition',
                  ].map((pt, i) => (
                    <div key={i} className={`flex items-center gap-3 text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      <CheckCircle size={14} className="text-purple-500 flex-shrink-0" />
                      {pt}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { flag: '🇵🇰', country: 'Pakistan', type: 'Home base', clients: 'Local & Enterprise' },
                  { flag: '🇺🇸', country: 'United States', type: 'Primary market', clients: 'Startups & SMEs' },
                  { flag: '🇬🇧', country: 'United Kingdom', type: 'Key market', clients: 'Agencies & Brands' },
                  { flag: '🇦🇪', country: 'UAE', type: 'Key market', clients: 'Real Estate & Fintech' },
                  { flag: '🇨🇦', country: 'Canada', type: 'Active market', clients: 'Tech Companies' },
                  { flag: '🇦🇺', country: 'Australia', type: 'Active market', clients: 'EdTech Platforms' },
                ].map((c, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                    <span className="text-2xl block mb-2">{c.flag}</span>
                    <p className={`text-[13px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>{c.country}</p>
                    <p className={`text-[10px] text-purple-500 font-semibold`}>{c.type}</p>
                    <p className={`text-[10px] mt-0.5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>{c.clients}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section aria-label="Contact DevZore" className="py-15">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
              Ready to Build Something Together?
            </h2>
            <p className={`text-base mb-8 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Free consultation. Honest pricing. No commitment required.
              Join 30+ clients who trust DevZore to build their digital products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Start Free Consultation <ArrowRight size={15} />
              </Link>
              <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}>
                View Our Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SEO HIDDEN ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>About DevZore Software Development Agency — Islamabad Pakistan</h2>
          <p>DevZore International is a premium software development agency founded by Muhammad Shoukat in Islamabad, Pakistan in 2022. We specialise in MERN stack development, React.js web applications, React Native mobile app development, SaaS product engineering, e-commerce development, UI/UX design and startup MVP development. We have delivered 50+ projects for clients across USA, UK, UAE, Canada, Australia, Saudi Arabia and Pakistan since our founding. Our team maintains a 5.0 client rating and 98% on-time delivery rate across all projects.</p>
          <p>Keywords: software development company Islamabad, web development agency Pakistan, about DevZore, Shoukat developer Islamabad, MERN stack agency Pakistan, trusted software agency Pakistan, software house Islamabad 2022.</p>
        </div>

      </main>
    </>
  );
};

export default About;