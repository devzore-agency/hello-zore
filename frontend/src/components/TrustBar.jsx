import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Globe } from 'lucide-react';

const TrustBar = ({ isDark }) => {
  const d = isDark;

  const features = [
    { icon: <CheckCircle size={13}/>, text: 'Fixed Pricing' },
    { icon: <CheckCircle size={13}/>, text: 'Money-Back Guarantee' },
    { icon: <CheckCircle size={13}/>, text: '100% Code Ownership' },
    { icon: <CheckCircle size={13}/>, text: 'Free Consultation' },
    { icon: <CheckCircle size={13}/>, text: '24hr Response' },
    { icon: <CheckCircle size={13}/>, text: 'No Lock-in Contracts' },
  ];

  const techs = [
    'React.js', 'Next.js', 'Node.js', 'MongoDB',
    'React Native', 'TypeScript', 'AWS', 'Tailwind CSS',
    'PostgreSQL', 'Docker', 'Stripe', 'GraphQL',
  ];

  const stats = [
    { icon: <Star size={14} className="text-yellow-400"/>,  val: '5.0',  label: 'Rating',          sub: '30+ client reviews' },
    { icon: <Zap size={14} className="text-purple-400"/>,   val: '50+',  label: 'Projects Done',   sub: 'Since 2022' },
    { icon: <Globe size={14} className="text-blue-400"/>,   val: '15+',  label: 'Countries',       sub: 'USA, UK, UAE & more' },
    { icon: <Clock size={14} className="text-green-400"/>,  val: '24hr', label: 'Response Time',   sub: 'Including weekends' },
    { icon: <Shield size={14} className="text-pink-400"/>,  val: '98%',  label: 'On-Time Delivery',sub: 'Across all projects' },
  ];

  return (
    <div
      aria-label="DevZore trust signals and technology partners"
      className={`w-full transition-colors duration-300 ${
        d ? 'bg-[#030303]' : 'bg-white'
      }`}
    >
      {/* ── Stats row ── */}
      <div className={`border-y ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-5">

            {/* Star rating */}
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400 text-lg">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <div>
                <p className={`font-black text-sm leading-none ${d ? 'text-white' : 'text-gray-900'}`}>
                  5.0 Rating
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                  From 30+ clients
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className={`hidden md:block w-px h-8 ${d ? 'bg-white/[0.08]' : 'bg-gray-200'}`}/>

            {/* Stats */}
            {stats.slice(1).map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    d ? 'bg-white/[0.04] border border-white/[0.08]' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className={`font-black text-sm leading-none ${d ? 'text-white' : 'text-gray-900'}`}>
                      {s.val} <span className={`font-semibold text-[11px] ${d ? 'text-gray-400' : 'text-gray-500'}`}>{s.label}</span>
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{s.sub}</p>
                  </div>
                </div>
                {i < stats.length - 2 && (
                  <div className={`hidden lg:block w-px h-8 ${d ? 'bg-white/[0.08]' : 'bg-gray-200'}`}/>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features checklist ── */}
      <div className={`border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {features.map((f, i) => (
              <div key={i} className={`flex items-center gap-2 text-[12px] font-semibold ${
                d ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span className="text-green-500">{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tech marquee ── */}
      <div className={`border-b overflow-hidden ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
        <div className="flex items-center gap-2 py-3 px-6">
          <span className={`text-[10px] font-black uppercase tracking-[0.2em] flex-shrink-0 ${
            d ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Tech Stack
          </span>
          <div className={`w-px h-4 mx-2 ${d ? 'bg-white/[0.08]' : 'bg-gray-200'}`}/>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <span key={i} className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${
                d
                  ? 'bg-white/[0.03] border-white/[0.07] text-gray-400'
                  : 'bg-gray-50 border-gray-200 text-gray-600'
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── GEO trust strip ── */}
      <div className={`${d ? 'bg-purple-600/5' : 'bg-purple-50'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <span className={`text-[11px] font-bold ${d ? 'text-purple-400' : 'text-purple-700'}`}>
              📍 Islamabad, Pakistan — Trusted Worldwide
            </span>
            {['🇵🇰 Pakistan', '🇺🇸 USA', '🇬🇧 UK', '🇦🇪 UAE', '🇨🇦 Canada', '🇦🇺 Australia'].map((c, i) => (
              <span key={i} className={`text-[11px] font-medium ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEO Hidden ── */}
      <div className="sr-only" aria-hidden="false">
        <p>
          DevZore is a 5-star rated software development agency based in Islamabad, Pakistan,
          with clients across USA, UK, UAE, Canada and Australia. We offer fixed pricing,
          money-back guarantee, 100% code ownership, free consultation and 24-hour response time.
          Technologies include React.js, Next.js, Node.js, MongoDB, React Native, TypeScript,
          AWS, PostgreSQL, Docker and Stripe.
        </p>
      </div>
    </div>
  );
};

export default TrustBar;