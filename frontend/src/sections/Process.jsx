import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Search, Palette, Code2,
  TestTube, Rocket, HeartHandshake, ArrowRight,
  CheckCircle, Clock, Users, Zap
} from 'lucide-react';

const Process = ({ isDark }) => {
  const d = isDark;
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      icon: <MessageSquare size={20} />,
      title: 'Discovery & Free Consultation',
      subtitle: 'Week 1',
      color: 'purple',
      desc: 'We start with a deep-dive discovery call — understanding your business goals, target users, technical requirements and budget. No generic proposals. Every project starts with genuine understanding.',
      deliverables: [
        'Project scope document',
        'Technical requirements specification',
        'Honest budget and timeline estimate',
        'Technology stack recommendation',
      ],
      outcome: 'You know exactly what will be built, how long it takes, and what it costs — before we start.',
    },
    {
      number: '02',
      icon: <Search size={20} />,
      title: 'Research & Architecture Planning',
      subtitle: 'Week 1–2',
      color: 'blue',
      desc: 'Our senior engineers map the full system architecture, database schema, API structure and third-party integrations. We identify technical risks early — when they are cheap to fix.',
      deliverables: [
        'System architecture diagram',
        'Database schema design',
        'API endpoint planning',
        'Risk assessment report',
      ],
      outcome: 'A technically sound foundation that prevents expensive rework during development.',
    },
    {
      number: '03',
      icon: <Palette size={20} />,
      title: 'UI/UX Design & Prototyping',
      subtitle: 'Week 2–3',
      color: 'pink',
      desc: 'Wireframes and interactive Figma prototypes for every screen and user flow. You experience the full product before a single line of production code is written. Changes are fast and free at this stage.',
      deliverables: [
        'Low-fidelity wireframes',
        'High-fidelity Figma UI designs',
        'Interactive clickable prototype',
        'Design system & component library',
      ],
      outcome: 'Stakeholders and investors can see and click through the product before development begins.',
    },
    {
      number: '04',
      icon: <Code2 size={20} />,
      title: 'Agile Development & Sprints',
      subtitle: 'Week 3–10',
      color: 'amber',
      desc: 'Development in two-week Agile sprints with a live staging environment updated after every sprint. You review real, working software — not status reports — every two weeks.',
      deliverables: [
        'Working software every 2 weeks',
        'Private GitHub repository access',
        'Sprint review sessions',
        'Progress tracking dashboard',
      ],
      outcome: 'Continuous visibility into real progress. You catch issues early — not after months of work.',
    },
    {
      number: '05',
      icon: <TestTube size={20} />,
      title: 'QA Testing & Security Audit',
      subtitle: 'Week 9–11',
      color: 'cyan',
      desc: 'Comprehensive QA testing across browsers and devices, automated test suites, security vulnerability scanning, performance testing and Core Web Vitals optimisation before any production deployment.',
      deliverables: [
        'Full browser & device testing',
        'Security vulnerability report',
        'Performance & Lighthouse audit',
        'Bug fix cycle before launch',
      ],
      outcome: 'A production-ready product that is fast, secure and thoroughly tested on real devices.',
    },
    {
      number: '06',
      icon: <Rocket size={20} />,
      title: 'Launch & Deployment',
      subtitle: 'Week 11–12',
      color: 'green',
      desc: 'We handle full deployment — DNS configuration, SSL setup, CI/CD pipeline, production environment configuration and monitoring setup. Launch day is managed — not hoped for.',
      deliverables: [
        'Production deployment',
        'CI/CD pipeline setup',
        'Monitoring & alerting configured',
        'Domain & SSL configuration',
      ],
      outcome: 'Your product is live, monitored and ready for real users — with zero launch-day surprises.',
    },
    {
      number: '07',
      icon: <HeartHandshake size={20} />,
      title: 'Post-Launch Support & Growth',
      subtitle: 'Ongoing',
      color: 'indigo',
      desc: 'We do not disappear after launch. 30 days of included post-launch support catches anything real users find. Most clients continue with ongoing development, maintenance and feature iteration.',
      deliverables: [
        '30-day post-launch support',
        'Bug fix guarantee',
        'Performance monitoring',
        'Feature roadmap planning',
      ],
      outcome: 'Your product keeps improving. We grow with you from MVP to scaled platform.',
    },
  ];

  const colorMap = {
    purple: { bg: d ? 'bg-purple-500/15 border-purple-500/25 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700', num: 'text-purple-500', dot: 'bg-purple-500', line: d ? 'border-purple-500/20' : 'border-purple-200', active: d ? 'border-purple-500/40 bg-purple-600/10' : 'border-purple-300 bg-purple-50' },
    blue:   { bg: d ? 'bg-blue-500/15 border-blue-500/25 text-blue-400'     : 'bg-blue-50 border-blue-200 text-blue-700',     num: 'text-blue-500',   dot: 'bg-blue-500',   line: d ? 'border-blue-500/20' : 'border-blue-200',   active: d ? 'border-blue-500/40 bg-blue-600/10' : 'border-blue-300 bg-blue-50' },
    pink:   { bg: d ? 'bg-pink-500/15 border-pink-500/25 text-pink-400'     : 'bg-pink-50 border-pink-200 text-pink-700',     num: 'text-pink-500',   dot: 'bg-pink-500',   line: d ? 'border-pink-500/20' : 'border-pink-200',   active: d ? 'border-pink-500/40 bg-pink-600/10' : 'border-pink-300 bg-pink-50' },
    amber:  { bg: d ? 'bg-amber-500/15 border-amber-500/25 text-amber-400'  : 'bg-amber-50 border-amber-200 text-amber-700',  num: 'text-amber-500',  dot: 'bg-amber-500',  line: d ? 'border-amber-500/20' : 'border-amber-200',  active: d ? 'border-amber-500/40 bg-amber-600/10' : 'border-amber-300 bg-amber-50' },
    cyan:   { bg: d ? 'bg-cyan-500/15 border-cyan-500/25 text-cyan-400'     : 'bg-cyan-50 border-cyan-200 text-cyan-700',     num: 'text-cyan-500',   dot: 'bg-cyan-500',   line: d ? 'border-cyan-500/20' : 'border-cyan-200',   active: d ? 'border-cyan-500/40 bg-cyan-600/10' : 'border-cyan-300 bg-cyan-50' },
    green:  { bg: d ? 'bg-green-500/15 border-green-500/25 text-green-400'  : 'bg-green-50 border-green-200 text-green-700',  num: 'text-green-500',  dot: 'bg-green-500',  line: d ? 'border-green-500/20' : 'border-green-200',  active: d ? 'border-green-500/40 bg-green-600/10' : 'border-green-300 bg-green-50' },
    indigo: { bg: d ? 'bg-indigo-500/15 border-indigo-500/25 text-indigo-400': 'bg-indigo-50 border-indigo-200 text-indigo-700', num: 'text-indigo-500', dot: 'bg-indigo-500', line: d ? 'border-indigo-500/20' : 'border-indigo-200', active: d ? 'border-indigo-500/40 bg-indigo-600/10' : 'border-indigo-300 bg-indigo-50' },
  };

  const active = steps[activeStep];
  const c = colorMap[active.color];

  return (
    <section
      aria-labelledby="process-heading"
      className={`py-24 transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
            d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}>
            How We Work
          </div>

          <h2
            id="process-heading"
            className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
              d ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our 7-Step Development{' '}
            <span className="text-purple-600">Process</span>
          </h2>

          <p className={`text-lg leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            A transparent, structured process that keeps you in control at every stage —
            from the first discovery call to post-launch support and beyond.
            No black boxes. No surprises.
          </p>
        </div>

        {/* ── Interactive Process ── */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left: step tabs */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`group flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                  activeStep === i
                    ? d
                      ? `${colorMap[step.color].active} shadow-sm`
                      : `${colorMap[step.color].active} shadow-sm`
                    : d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]'
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {/* Step number */}
                <div className={`text-[13px] font-black flex-shrink-0 w-8 text-center ${
                  activeStep === i
                    ? colorMap[step.color].num
                    : d ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {step.number}
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`text-[13px] font-bold truncate ${
                    activeStep === i
                      ? d ? 'text-white' : 'text-gray-900'
                      : d ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${
                    activeStep === i
                      ? colorMap[step.color].num
                      : d ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.subtitle}
                  </p>
                </div>

                {/* Active indicator */}
                {activeStep === i && (
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colorMap[step.color].dot}`}/>
                )}
              </button>
            ))}
          </div>

          {/* Right: step detail */}
          <div className="lg:col-span-3">
            <div className={`h-full p-8 rounded-2xl border transition-all duration-300 ${
              d ? 'bg-white/[0.02] border-white/[0.08]' : 'bg-[#fafafa] border-gray-200'
            }`}>

              {/* Step header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.bg}`}>
                  {active.icon}
                </div>
                <div>
                  <div className={`text-[11px] font-black uppercase tracking-widest mb-1 ${c.num}`}>
                    Step {active.number} · {active.subtitle}
                  </div>
                  <h3 className={`text-xl font-black ${d ? 'text-white' : 'text-gray-900'}`}>
                    {active.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className={`text-[14px] leading-relaxed mb-6 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                {active.desc}
              </p>

              {/* Deliverables */}
              <div className="mb-6">
                <p className={`text-[11px] font-black uppercase tracking-widest mb-3 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  What You Receive
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.deliverables.map((item, i) => (
                    <div key={i} className={`flex items-center gap-2.5 p-3 rounded-lg border ${
                      d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'
                    }`}>
                      <CheckCircle size={13} className={c.num}/>
                      <span className={`text-[12px] font-medium ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className={`p-4 rounded-xl border ${
                d ? `${c.bg} bg-opacity-50` : c.bg.replace('text-', '').split(' ')[0] + ' border-' + active.color + '-200'
              }`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-1 ${c.num}`}>
                  ✦ Outcome
                </p>
                <p className={`text-[13px] font-semibold ${d ? 'text-gray-200' : 'text-gray-800'}`}>
                  {active.outcome}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-dashed border-gray-200/20">
                <button
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className={`text-[12px] font-semibold px-4 py-2 rounded-lg border transition-all ${
                    activeStep === 0
                      ? d ? 'border-white/[0.04] text-gray-700 cursor-not-allowed' : 'border-gray-100 text-gray-300 cursor-not-allowed'
                      : d ? 'border-white/[0.1] text-gray-400 hover:text-white hover:border-white/20' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
                  }`}
                >
                  ← Previous
                </button>

                <span className={`text-[11px] font-bold ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                  {activeStep + 1} of {steps.length}
                </span>

                <button
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  disabled={activeStep === steps.length - 1}
                  className={`text-[12px] font-semibold px-4 py-2 rounded-lg border transition-all ${
                    activeStep === steps.length - 1
                      ? d ? 'border-white/[0.04] text-gray-700 cursor-not-allowed' : 'border-gray-100 text-gray-300 cursor-not-allowed'
                      : 'border-purple-500/30 text-purple-500 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Timeline summary ── */}
        <div className={`mt-16 p-8 rounded-3xl border ${
          d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'
        }`}>
          <h2 className={`text-xl font-black mb-6 ${d ? 'text-white' : 'text-gray-900'}`}>
            Typical Project Timeline
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <MessageSquare size={16}/>, label: 'Discovery',    time: 'Week 1',    color: 'text-purple-500' },
              { icon: <Palette size={16}/>,       label: 'Design',       time: 'Week 2–3',  color: 'text-pink-500' },
              { icon: <Code2 size={16}/>,         label: 'Development',  time: 'Week 3–10', color: 'text-amber-500' },
              { icon: <Rocket size={16}/>,        label: 'Launch',       time: 'Week 11–12',color: 'text-green-500' },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center text-center p-4 rounded-xl border ${
                d ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-white border-gray-200'
              }`}>
                <span className={`mb-2 ${item.color}`}>{item.icon}</span>
                <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.label}</p>
                <p className={`text-[11px] ${item.color}`}>{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 text-center">
          <p className={`text-sm mb-6 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
            Ready to start your project with a team that follows a proven process?
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            Start Free Consultation <ArrowRight size={15}/>
          </Link>
        </div>

        {/* ── SEO Hidden Block ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Software Development Process — DevZore Islamabad Pakistan</h2>
          <p>
            DevZore follows a structured 7-step software development process that ensures
            transparent delivery, client control and high-quality output for every project.
            Our process includes discovery, research, UI/UX design, agile development,
            QA testing, deployment and ongoing support — serving clients across
            Pakistan, USA, UK, UAE, Canada and Australia.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Process;