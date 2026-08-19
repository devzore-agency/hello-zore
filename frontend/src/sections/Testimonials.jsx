import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const Testimonials = ({ isDark }) => {
  const d = isDark;
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      name: 'James Richardson',
      role: 'CEO',
      company: 'TechVault Solutions',
      location: 'United States',
      flag: '🇺🇸',
      rating: 5,
      short: 'Best development agency we have ever worked with.',
      text: 'We hired DevZore to rebuild our SaaS platform from scratch. The team delivered a fully functional, scalable product in 11 weeks — on time, on budget and above our expectations. Direct access to the engineers made communication effortless. We have since extended the contract for a second major feature rollout.',
      project: 'SaaS Platform Rebuild',
      color: 'purple',
      avatar: 'JR',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Founder',
      company: 'GreenLeaf Market',
      location: 'United Kingdom',
      flag: '🇬🇧',
      rating: 5,
      short: 'Incredible team — they genuinely care about your success.',
      text: 'DevZore built our e-commerce platform with Stripe integration, inventory management and a mobile-responsive storefront. The attention to detail was outstanding — every edge case was handled without being asked. Our revenue increased by 250% in the first quarter after launch. I recommend them without reservation.',
      project: 'E-Commerce Platform',
      color: 'green',
      avatar: 'SM',
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'Director of Technology',
      company: 'Gulf Properties LLC',
      location: 'UAE',
      flag: '🇦🇪',
      rating: 5,
      short: 'They turned a complex requirement into a clean, working product.',
      text: 'Our real estate platform required multi-language support, advanced property search and agent management — all within a tight deadline. DevZore handled everything professionally. The code quality was excellent and the documentation was thorough. Post-launch support was responsive and helpful. We will use them again.',
      project: 'Real Estate Platform',
      color: 'blue',
      avatar: 'AA',
    },
    {
      name: 'Priya Sharma',
      role: 'Co-Founder',
      company: 'EduSpark Technologies',
      location: 'Australia',
      flag: '🇦🇺',
      rating: 5,
      short: 'From idea to 15,000 users in under 6 months — remarkable.',
      text: 'DevZore built our EdTech platform end-to-end — video streaming, quizzes, certificates, instructor dashboards and subscription billing. The UI/UX was beautiful and the backend scaled effortlessly as we grew from zero to 15,000 learners. The team felt like true partners, not just contractors.',
      project: 'EdTech SaaS Platform',
      color: 'cyan',
      avatar: 'PS',
    },
    {
      name: 'Marcus Weber',
      role: 'CTO',
      company: 'ConstructPro GmbH',
      location: 'Canada',
      flag: '🇨🇦',
      rating: 5,
      short: 'Technically brilliant team with exceptional communication.',
      text: 'We needed a complex construction management system with Gantt charts, budget tracking and real-time collaboration. DevZore delivered exactly what we needed — clean architecture, comprehensive testing and excellent documentation. The fortnightly sprint reviews kept us fully informed throughout. Outstanding experience.',
      project: 'Construction Management System',
      color: 'amber',
      avatar: 'MW',
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Product Manager',
      company: 'MedConnect Health',
      location: 'UAE',
      flag: '🇦🇪',
      rating: 5,
      short: 'Our telemedicine platform went live in 10 weeks. Incredible.',
      text: 'Building a healthcare platform comes with strict requirements around security and compliance. DevZore understood this from day one — implementing HIPAA-conscious design patterns, secure data handling and thorough testing before launch. The team responded to every query within hours. Truly professional.',
      project: 'Healthcare Portal',
      color: 'pink',
      avatar: 'FA',
    },
    {
      name: 'Daniel Kowalski',
      role: 'Startup Founder',
      company: 'LogiTrack Systems',
      location: 'Pakistan',
      flag: '🇵🇰',
      rating: 5,
      short: 'They saved us months of development time and significant cost.',
      text: 'DevZore built our fleet management MVP in 8 weeks with real-time GPS tracking, route optimisation and driver management. The React Native mobile app worked flawlessly on both iOS and Android. What impressed me most was how proactively they suggested improvements beyond the original scope.',
      project: 'Fleet Management MVP',
      color: 'indigo',
      avatar: 'DK',
    },
  ];

  const colorMap = {
    purple: { bg: d ? 'bg-purple-500/10 border-purple-500/20' : 'bg-purple-50 border-purple-100', avatar: 'bg-purple-600', quote: 'text-purple-400', tag: d ? 'bg-purple-500/15 text-purple-400' : 'bg-purple-50 text-purple-700' },
    green:  { bg: d ? 'bg-green-500/10 border-green-500/20'   : 'bg-green-50 border-green-100',   avatar: 'bg-green-600',  quote: 'text-green-400',  tag: d ? 'bg-green-500/15 text-green-400'   : 'bg-green-50 text-green-700' },
    blue:   { bg: d ? 'bg-blue-500/10 border-blue-500/20'     : 'bg-blue-50 border-blue-100',     avatar: 'bg-blue-600',   quote: 'text-blue-400',   tag: d ? 'bg-blue-500/15 text-blue-400'     : 'bg-blue-50 text-blue-700' },
    cyan:   { bg: d ? 'bg-cyan-500/10 border-cyan-500/20'     : 'bg-cyan-50 border-cyan-100',     avatar: 'bg-cyan-600',   quote: 'text-cyan-400',   tag: d ? 'bg-cyan-500/15 text-cyan-400'     : 'bg-cyan-50 text-cyan-700' },
    amber:  { bg: d ? 'bg-amber-500/10 border-amber-500/20'   : 'bg-amber-50 border-amber-100',   avatar: 'bg-amber-600',  quote: 'text-amber-400',  tag: d ? 'bg-amber-500/15 text-amber-400'   : 'bg-amber-50 text-amber-700' },
    pink:   { bg: d ? 'bg-pink-500/10 border-pink-500/20'     : 'bg-pink-50 border-pink-100',     avatar: 'bg-pink-600',   quote: 'text-pink-400',   tag: d ? 'bg-pink-500/15 text-pink-400'     : 'bg-pink-50 text-pink-700' },
    indigo: { bg: d ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-100', avatar: 'bg-indigo-600', quote: 'text-indigo-400', tag: d ? 'bg-indigo-500/15 text-indigo-400' : 'bg-indigo-50 text-indigo-700' },
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const current = testimonials[active];
  const c = colorMap[current.color];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className={`py-24 transition-colors duration-300 ${d ? 'bg-[#050505]' : 'bg-[#fafafa]'}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
            d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}>
            Client Reviews
          </div>

          <h2
            id="testimonials-heading"
            className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
              d ? 'text-white' : 'text-gray-900'
            }`}
          >
            What Our Clients Say{' '}
            <span className="text-purple-600">About DevZore</span>
          </h2>

          <p className={`text-lg ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Real reviews from real clients across USA, UK, UAE, Canada, Australia and Pakistan.
            30+ projects delivered, 5.0 average rating.
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400"/>
            ))}
            <span className={`ml-2 text-sm font-bold ${d ? 'text-white' : 'text-gray-900'}`}>5.0</span>
            <span className={`text-sm ${d ? 'text-gray-500' : 'text-gray-400'}`}>/ 30+ reviews</span>
          </div>
        </div>

        {/* ── Featured testimonial ── */}
        <div className={`relative p-8 lg:p-12 rounded-3xl border mb-6 transition-all duration-500 ${
          d
            ? `bg-white/[0.02] border-white/[0.08] ${c.bg.split(' ')[0].replace('bg-', 'shadow-')}`
            : `bg-white border-gray-200`
        }`}>

          {/* Quote icon */}
          <div className={`absolute top-8 right-8 opacity-20 ${c.quote}`}>
            <Quote size={48}/>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left: reviewer info */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-2xl ${c.avatar} flex items-center justify-center text-white font-black text-lg mb-4`}>
                  {current.avatar}
                </div>

                <h3 className={`text-xl font-black mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>
                  {current.name}
                </h3>
                <p className={`text-sm font-semibold ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  {current.role}
                </p>
                <p className={`text-sm ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  {current.company}
                </p>
                <p className="text-sm mt-1">
                  {current.flag} {current.location}
                </p>

                {/* Stars */}
                <div className="flex gap-0.5 mt-3">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400"/>
                  ))}
                </div>
              </div>

              {/* Project tag */}
              <div className={`inline-flex items-center gap-2 mt-6 px-3 py-2 rounded-lg text-[11px] font-bold ${c.tag}`}>
                <CheckCircle size={11}/>
                {current.project}
              </div>
            </div>

            {/* Right: testimonial text */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <p className={`text-xl font-black mb-4 italic ${d ? 'text-white' : 'text-gray-900'}`}>
                "{current.short}"
              </p>
              <p className={`text-[15px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                {current.text}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-dashed border-gray-500/20">
            <button
              onClick={() => { setActive(prev => (prev - 1 + testimonials.length) % testimonials.length); setAutoPlay(false); }}
              className={`flex items-center gap-2 text-[12px] font-semibold px-4 py-2 rounded-lg border transition-all ${
                d ? 'border-white/[0.1] text-gray-400 hover:text-white hover:border-white/20' : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              <ArrowLeft size={13}/> Previous
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setAutoPlay(false); }}
                  className={`transition-all duration-300 rounded-full ${
                    active === i
                      ? 'w-6 h-2 bg-purple-500'
                      : `w-2 h-2 ${d ? 'bg-white/[0.15] hover:bg-white/30' : 'bg-gray-300 hover:bg-gray-400'}`
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => { setActive(prev => (prev + 1) % testimonials.length); setAutoPlay(false); }}
              className={`flex items-center gap-2 text-[12px] font-semibold px-4 py-2 rounded-lg border transition-all ${
                d ? 'border-purple-500/30 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600' : 'border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600'
              }`}
            >
              Next <ArrowRight size={13}/>
            </button>
          </div>
        </div>

        {/* ── Mini cards grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setAutoPlay(false); }}
              className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                active === i
                  ? d ? 'bg-purple-600/15 border-purple-500/30' : 'bg-purple-50 border-purple-200'
                  : d ? 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]' : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg ${colorMap[t.color].avatar} flex items-center justify-center text-white font-black text-[11px] mb-2`}>
                {t.avatar}
              </div>
              <p className={`text-[11px] font-bold leading-tight ${active === i ? d ? 'text-white' : 'text-gray-900' : d ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.name.split(' ')[0]}
              </p>
              <p className={`text-[9px] mt-0.5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                {t.flag} {t.location}
              </p>
            </button>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className={`p-8 rounded-3xl border text-center ${
          d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-xl font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>
            Ready to Be Our Next Success Story?
          </h2>
          <p className={`text-sm mb-6 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Join 30+ clients from USA, UK, UAE, Canada, Australia and Pakistan who trust DevZore.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
          >
            Start Free Consultation <ArrowRight size={15}/>
          </Link>
        </div>

        {/* ── SEO Hidden ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Client Reviews — DevZore Software Development Agency Islamabad Pakistan</h2>
          <p>
            DevZore has a 5.0 star rating from 30+ clients across USA, UK, UAE, Canada, Australia and Pakistan.
            Our clients include startups, SMEs and enterprises who have trusted DevZore for web development,
            mobile app development, SaaS platforms, e-commerce development and MVP development.
            We are recognised as a reliable, transparent and high-quality software development agency
            based in Islamabad, Pakistan.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;