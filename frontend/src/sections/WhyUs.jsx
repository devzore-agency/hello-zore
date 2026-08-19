import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Shield, Zap, Code2,
  Users, Clock, Globe, Award, TrendingUp, Lock, HeartHandshake
} from 'lucide-react';

const WhyUs = ({ isDark }) => {
  const d = isDark;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasons = [
    {
      icon: <Code2 size={20} />,
      title: 'Senior Engineers Only',
      desc: 'Every DevZore project is handled by senior-level engineers with 4+ years of production experience — not junior developers learning on your budget.',
      stat: '4+ yrs avg experience',
      color: 'purple',
    },
    {
      icon: <Zap size={20} />,
      title: 'Fast Delivery, Zero Compromise',
      desc: 'We move fast without cutting corners. Most MVPs delivered in 8–14 weeks. Fortnightly sprint reviews keep you in control of every milestone.',
      stat: '8–14 weeks MVP delivery',
      color: 'amber',
    },
    {
      icon: <Shield size={20} />,
      title: 'You Own Everything',
      desc: 'Source code, repositories, cloud accounts, design files — everything is yours from day one. We never hold your product hostage.',
      stat: '100% code ownership',
      color: 'green',
    },
    {
      icon: <Globe size={20} />,
      title: 'Global Standards, Local Rates',
      desc: 'US and UK quality software engineered from Islamabad, Pakistan — at a fraction of Western agency rates. More value, same excellence.',
      stat: 'USA · UK · UAE · 15+ countries',
      color: 'blue',
    },
    {
      icon: <Clock size={20} />,
      title: '24-Hour Response Guarantee',
      desc: 'Every message, question and concern gets a response within 24 hours — including weekends. You will never be left wondering what is happening.',
      stat: '< 24hr response time',
      color: 'cyan',
    },
    {
      icon: <Users size={20} />,
      title: 'Direct Access to Engineers',
      desc: 'No account managers. No middlemen. You talk directly to the engineers building your product — faster decisions, fewer misunderstandings.',
      stat: 'Direct communication',
      color: 'indigo',
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Built to Scale From Day One',
      desc: 'Every codebase we write is architected for growth. Clean code, solid testing, and scalable infrastructure mean you never have to rebuild.',
      stat: 'Scalable architecture',
      color: 'orange',
    },
    {
      icon: <Lock size={20} />,
      title: 'Security-First Development',
      desc: 'JWT auth, HTTPS, input validation, SQL injection prevention, rate limiting — security best practices are built into every layer, not bolted on after.',
      stat: 'Enterprise-grade security',
      color: 'red',
    },
    {
      icon: <HeartHandshake size={20} />,
      title: 'Long-Term Partnership',
      desc: 'We do not disappear after launch. Most of our clients continue with DevZore for ongoing development, maintenance and scaling long after go-live.',
      stat: '80% client retention rate',
      color: 'pink',
    },
  ];

  const colorMap = {
    purple: { icon: d ? 'bg-purple-500/15 border-purple-500/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600' : 'bg-purple-50 border-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600', stat: d ? 'text-purple-400' : 'text-purple-600', card: d ? 'hover:border-purple-500/25' : 'hover:border-purple-200' },
    amber:  { icon: d ? 'bg-amber-500/15 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500' : 'bg-amber-50 border-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500', stat: d ? 'text-amber-400' : 'text-amber-600', card: d ? 'hover:border-amber-500/25' : 'hover:border-amber-200' },
    green:  { icon: d ? 'bg-green-500/15 border-green-500/20 text-green-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600' : 'bg-green-50 border-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600', stat: d ? 'text-green-400' : 'text-green-600', card: d ? 'hover:border-green-500/25' : 'hover:border-green-200' },
    blue:   { icon: d ? 'bg-blue-500/15 border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600' : 'bg-blue-50 border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600', stat: d ? 'text-blue-400' : 'text-blue-600', card: d ? 'hover:border-blue-500/25' : 'hover:border-blue-200' },
    cyan:   { icon: d ? 'bg-cyan-500/15 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600' : 'bg-cyan-50 border-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600', stat: d ? 'text-cyan-400' : 'text-cyan-600', card: d ? 'hover:border-cyan-500/25' : 'hover:border-cyan-200' },
    indigo: { icon: d ? 'bg-indigo-500/15 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600' : 'bg-indigo-50 border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600', stat: d ? 'text-indigo-400' : 'text-indigo-600', card: d ? 'hover:border-indigo-500/25' : 'hover:border-indigo-200' },
    orange: { icon: d ? 'bg-orange-500/15 border-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500' : 'bg-orange-50 border-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500', stat: d ? 'text-orange-400' : 'text-orange-600', card: d ? 'hover:border-orange-500/25' : 'hover:border-orange-200' },
    red:    { icon: d ? 'bg-red-500/15 border-red-500/20 text-red-400 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600' : 'bg-red-50 border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600', stat: d ? 'text-red-400' : 'text-red-600', card: d ? 'hover:border-red-500/25' : 'hover:border-red-200' },
    pink:   { icon: d ? 'bg-pink-500/15 border-pink-500/20 text-pink-400 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600' : 'bg-pink-50 border-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600', stat: d ? 'text-pink-400' : 'text-pink-600', card: d ? 'hover:border-pink-500/25' : 'hover:border-pink-200' },
  };

  const highlights = [
    { val: '50+',  label: 'Projects Delivered' },
    { val: '30+',  label: 'Happy Clients' },
    { val: '98%',  label: 'On-Time Delivery' },
    { val: '0',    label: 'Projects Abandoned' },
  ];

  return (
    <section
      aria-labelledby="whyus-heading"
      className={`py-24 transition-colors duration-300 ${d ? 'bg-[#050505]' : 'bg-[#fafafa]'}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
            d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}>
            Why DevZore
          </div>

          <h2
            id="whyus-heading"
            className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
              d ? 'text-white' : 'text-gray-900'
            }`}
          >
            Why 30+ Clients Chose DevZore{' '}
            <span className="text-purple-600">Over Other Agencies</span>
          </h2>

          <p className={`text-lg leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            There are hundreds of software agencies in Pakistan. Here is why startups and businesses
            from USA, UK, UAE and beyond consistently choose DevZore — and keep coming back.
          </p>
        </div>

        {/* ── Highlights row ── */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl border ${
          d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'
        }`}>
          {highlights.map((h, i) => (
            <div key={i} className="text-center py-2">
              <div className={`text-3xl font-black mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>
                {h.val}
              </div>
              <div className={`text-[11px] font-medium uppercase tracking-widest ${
                d ? 'text-gray-500' : 'text-gray-400'
              }`}>{h.label}</div>
            </div>
          ))}
        </div>

        {/* ── Reasons Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                d
                  ? `bg-white/[0.02] border-white/[0.06] ${colorMap[r.color].card} hover:bg-white/[0.04]`
                  : `bg-white border-gray-200 ${colorMap[r.color].card} hover:shadow-sm`
              }`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 transition-all duration-200 ${colorMap[r.color].icon}`}>
                {r.icon}
              </div>

              {/* Title */}
              <h3 className={`text-[15px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>
                {r.title}
              </h3>

              {/* Desc */}
              <p className={`text-[13px] leading-relaxed flex-grow mb-4 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                {r.desc}
              </p>

              {/* Stat */}
              <div className={`flex items-center gap-2 text-[11px] font-bold pt-4 border-t ${
                d ? 'border-white/[0.06]' : 'border-gray-100'
              } ${colorMap[r.color].stat}`}>
                <CheckCircle size={12}/>
                {r.stat}
              </div>
            </div>
          ))}
        </div>

        {/* ── Comparison table ── */}
        <div className={`mt-16 p-8 lg:p-12 rounded-3xl border ${
          d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-2xl font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>
            DevZore vs Other Agencies
          </h2>
          <p className={`text-sm mb-8 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Here is an honest comparison of what you get with DevZore versus a typical software agency.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="DevZore vs other agencies comparison">
              <thead>
                <tr className={`border-b ${d ? 'border-white/[0.08]' : 'border-gray-100'}`}>
                  <th className={`text-left py-3 px-4 text-[11px] font-bold uppercase tracking-wider ${d ? 'text-gray-500' : 'text-gray-400'}`}>Feature</th>
                  <th className="text-center py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">
                      ✦ DevZore
                    </span>
                  </th>
                  <th className={`text-center py-3 px-4 text-[11px] font-bold uppercase tracking-wider ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                    Other Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Senior engineers on every project',      '✓', '✗ Often juniors'],
                  ['Direct access to your developer',        '✓', '✗ Account manager relay'],
                  ['Full source code ownership',             '✓', '✗ Sometimes locked'],
                  ['Response within 24 hours',               '✓', '✗ 48–72 hours typical'],
                  ['Transparent milestone tracking',         '✓', '✗ Black box delivery'],
                  ['Post-launch support included',           '✓', '✗ Extra cost'],
                  ['Scalable architecture from day one',     '✓', '✗ Rebuild often needed'],
                  ['Fixed-scope honest pricing',             '✓', '✗ Scope creep common'],
                ].map(([feature, devzore, others], i) => (
                  <tr key={i} className={`border-b ${d ? 'border-white/[0.04]' : 'border-gray-50'} ${i % 2 === 0 ? d ? 'bg-white/[0.01]' : 'bg-gray-50/50' : ''}`}>
                    <td className={`py-3.5 px-4 text-[13px] ${d ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-[12px] font-bold text-green-500">
                        <CheckCircle size={13}/> {devzore}
                      </span>
                    </td>
                    <td className={`py-3.5 px-4 text-center text-[12px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                      {others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={`mt-12 p-10 rounded-3xl border text-center ${
          d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'
        }`}>
          <h2 className={`text-2xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
            Ready to Work With a Team You Can Trust?
          </h2>
          <p className={`text-sm mb-8 max-w-md mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Free consultation. Honest pricing. No commitment.
            Response within 24 hours from our Islamabad team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
            >
              Start Free Consultation <ArrowRight size={15}/>
            </Link>
            <Link
              to="/allservices"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl text-sm transition-all border ${
                d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-purple-200 text-purple-700 hover:bg-purple-100'
              }`}
            >
              View Our Services <ArrowRight size={15}/>
            </Link>
          </div>
        </div>

        {/* ── SEO Hidden Block ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Why Choose DevZore Software Development Agency Islamabad</h2>
          <p>
            DevZore is a trusted software development agency based in Islamabad, Pakistan,
            known for delivering high-quality web applications, mobile apps, SaaS products
            and e-commerce platforms to clients across USA, UK, UAE, Canada and Australia.
            We offer senior-only engineering teams, direct developer communication, full source
            code ownership, 24-hour response guarantee and post-launch support — making us
            the top choice for startups and enterprises seeking reliable software development in Pakistan.
          </p>
          <p>
            Keywords: best software development company Pakistan, reliable web development agency Islamabad,
            top MERN stack developers Pakistan, hire senior React developer Islamabad,
            trusted software agency Pakistan, software development company USA clients Pakistan,
            web development company UK clients Pakistan, affordable software development Pakistan.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;