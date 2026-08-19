import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const TechStack = ({ isDark }) => {
  const d = isDark;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    {
      title: 'Frontend Development',
      tag: 'Frontend',
      desc: 'Modern, performant UI libraries and frameworks for web applications',
      items: [
        { name: 'React.js',     subtitle: 'UI Library',       icon: '⚛️', color: '#61DAFB', level: 'Expert',    uses: 'Web apps, SPAs, dashboards' },
        { name: 'Next.js',      subtitle: 'React Framework',  icon: '▲',  color: '#ffffff', level: 'Expert',    uses: 'SSR, SEO, full-stack apps' },
        { name: 'Tailwind CSS', subtitle: 'CSS Framework',    icon: '🎨', color: '#38BDF8', level: 'Expert',    uses: 'Rapid UI development' },
        { name: 'TypeScript',   subtitle: 'Typed JavaScript', icon: '📘', color: '#3178C6', level: 'Advanced',  uses: 'Type-safe development' },
        { name: 'JavaScript',   subtitle: 'Language',         icon: '🟨', color: '#F7DF1E', level: 'Expert',    uses: 'Core web development' },
        { name: 'Redux',        subtitle: 'State Management', icon: '🔄', color: '#764ABC', level: 'Advanced',  uses: 'Complex state handling' },
      ]
    },
    {
      title: 'Backend Development',
      tag: 'Backend',
      desc: 'Scalable server-side technologies and API frameworks',
      items: [
        { name: 'Node.js',     subtitle: 'Runtime',         icon: '⬢',  color: '#339933', level: 'Expert',    uses: 'Server-side JavaScript' },
        { name: 'Express.js',  subtitle: 'Node Framework',  icon: 'Ex', color: '#828282', level: 'Expert',    uses: 'REST API development' },
        { name: 'GraphQL',     subtitle: 'Query Language',  icon: '◈',  color: '#E535AB', level: 'Advanced',  uses: 'Flexible API design' },
        { name: 'Socket.io',   subtitle: 'Real-time',       icon: '⚡', color: '#010101', level: 'Advanced',  uses: 'Real-time applications' },
        { name: 'JWT',         subtitle: 'Authentication',  icon: '🔐', color: '#D63AFF', level: 'Expert',    uses: 'Secure auth systems' },
        { name: 'REST APIs',   subtitle: 'API Design',      icon: '🔗', color: '#6366f1', level: 'Expert',    uses: 'Standard API architecture' },
      ]
    },
    {
      title: 'Mobile Development',
      tag: 'Mobile',
      desc: 'Cross-platform mobile app development for iOS and Android',
      items: [
        { name: 'React Native', subtitle: 'iOS & Android',   icon: '📱', color: '#61DAFB', level: 'Expert',    uses: 'Cross-platform mobile apps' },
        // { name: 'Expo',         subtitle: 'RN Framework',    icon: 'Exp',color: '#ffffff', level: 'Advanced',  uses: 'Rapid mobile development' },
        { name: 'Firebase',     subtitle: 'Mobile Backend',  icon: '🔥', color: '#FFCA28', level: 'Advanced',  uses: 'Real-time mobile data' },
        { name: 'Push Notifs',  subtitle: 'Notifications',   icon: '🔔', color: '#FF9500', level: 'Advanced',  uses: 'User re-engagement' },
      ]
    },
    {
      title: 'Database & Storage',
      tag: 'Database',
      desc: 'Relational and NoSQL databases for every scale and use case',
      items: [
        { name: 'MongoDB',     subtitle: 'NoSQL',           icon: '🍃', color: '#47A248', level: 'Expert',    uses: 'Flexible document storage' },
        { name: 'PostgreSQL',  subtitle: 'Relational',      icon: '🐘', color: '#336791', level: 'Expert',    uses: 'Complex relational data' },
        { name: 'MySQL',       subtitle: 'SQL Database',    icon: '🐬', color: '#4479A1', level: 'Advanced',  uses: 'Traditional SQL workloads' },
        { name: 'Redis',       subtitle: 'Caching',         icon: '⚡', color: '#DC382D', level: 'Advanced',  uses: 'Session & cache storage' },
        { name: 'Mongoose',    subtitle: 'MongoDB ODM',     icon: 'M',  color: '#880000', level: 'Expert',    uses: 'MongoDB schema modeling' },
        // { name: 'Prisma',      subtitle: 'ORM',             icon: '◆',  color: '#5A67D8', level: 'Advanced',  uses: 'Type-safe DB queries' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      tag: 'Cloud',
      desc: 'Cloud infrastructure, deployment pipelines and monitoring tools',
      items: [
        { name: 'AWS',           subtitle: 'Cloud Platform',   icon: '☁️', color: '#FF9900', level: 'Advanced',  uses: 'Scalable cloud infrastructure' },
        { name: 'Vercel',        subtitle: 'Frontend Hosting', icon: '▲',  color: '#ffffff', level: 'Expert',    uses: 'Next.js & React deployment' },
        { name: 'DigitalOcean',  subtitle: 'VPS Hosting',      icon: '💧', color: '#0080FF', level: 'Advanced',  uses: 'Flexible cloud servers' },
        { name: 'Docker',        subtitle: 'Containerization', icon: '🐳', color: '#2496ED', level: 'Advanced',  uses: 'App containerization' },
        { name: 'GitHub Actions',subtitle: 'CI/CD',            icon: 'GH', color: '#2088FF', level: 'Advanced',  uses: 'Automated pipelines' },
        { name: 'Nginx',         subtitle: 'Web Server',       icon: '⚙️', color: '#009900', level: 'Advanced',  uses: 'Reverse proxy & load balancing' },
      ]
    },
    {
      title: 'Design & Tools',
      tag: 'Design',
      desc: 'Design, collaboration and productivity tools used in every project',
      items: [
        { name: 'Figma',         subtitle: 'UI/UX Design',     icon: '🎨', color: '#F24E1E', level: 'Expert',    uses: 'UI design & prototyping' },
        // { name: 'Stripe',        subtitle: 'Payments',         icon: '💳', color: '#635BFF', level: 'Advanced',  uses: 'Payment integration' },
        { name: 'Git & GitHub',  subtitle: 'Version Control',  icon: '🔀', color: '#F05032', level: 'Expert',    uses: 'Code versioning & collaboration' },
        { name: 'Postman',       subtitle: 'API Testing',      icon: '📮', color: '#FF6C37', level: 'Expert',    uses: 'API development & testing' },
        { name: 'Sentry',        subtitle: 'Error Monitoring', icon: '🔍', color: '#362D59', level: 'Advanced',  uses: 'Production error tracking' },
        { name: 'Cloudinary',    subtitle: 'Media Storage',    icon: '🖼️', color: '#3448C5', level: 'Advanced',  uses: 'Image & video management' },
      ]
    },
  ];

  const allTags = ['All', ...categories.map(c => c.tag)];
  const displayed = activeCategory === 'All' ? categories : categories.filter(c => c.tag === activeCategory);

  const levelColor = (level) => {
    if (level === 'Expert')   return d ? 'bg-green-500/15 text-green-400 border-green-500/20'   : 'bg-green-50 text-green-700 border-green-200';
    if (level === 'Advanced') return d ? 'bg-blue-500/15 text-blue-400 border-blue-500/20'     : 'bg-blue-50 text-blue-700 border-blue-200';
    return d ? 'bg-gray-500/15 text-gray-400 border-gray-500/20' : 'bg-gray-50 text-gray-600 border-gray-200';
  };

  return (
    <section
      id="tech"
      aria-labelledby="techstack-heading"
      className={`py-24 transition-colors duration-300 ${d ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
            d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}>
            Technology
          </div>

          <h2
            id="techstack-heading"
            className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
              d ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Technology Stack
          </h2>

          <p className={`text-lg leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Modern, battle-tested technologies chosen for performance, scalability and long-term maintainability.
            Every tool in our stack is production-proven across real client projects.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-200 border ${
                activeCategory === tag
                  ? 'bg-purple-600 text-white border-purple-600 shadow-[0_0_16px_rgba(124,58,237,0.25)]'
                  : d
                    ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ── Categories ── */}
        <div className="space-y-12">
          {displayed.map((cat, i) => (
            <div key={i}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`h-6 w-1 rounded-full bg-purple-600`}/>
                <div>
                  <h3 className={`text-lg font-black uppercase tracking-wider ${d ? 'text-white' : 'text-gray-900'}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-[12px] mt-0.5 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Tech grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`group flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-200 cursor-default ${
                      d
                        ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.06] hover:border-purple-500/25 hover:shadow-[0_4px_20px_rgba(124,58,237,0.08)]'
                        : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-md hover:shadow-purple-100/50'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 font-bold transition-transform duration-200 group-hover:scale-110"
                      style={{
                        background: d
                          ? `linear-gradient(135deg, ${item.color}18, ${item.color}08)`
                          : `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
                        border: `1px solid ${item.color}25`,
                        color: item.color === '#ffffff' ? (d ? '#fff' : '#374151') : item.color,
                        fontSize: item.icon.length > 2 ? '13px' : '22px',
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Name */}
                    <p className={`text-[13px] font-bold mb-0.5 leading-tight ${d ? 'text-white' : 'text-gray-900'}`}>
                      {item.name}
                    </p>

                    {/* Subtitle */}
                    <p className={`text-[10px] mb-2 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                      {item.subtitle}
                    </p>

                    {/* Level badge */}
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${levelColor(item.level)}`}>
                      {item.level}
                    </span>

                    {/* Uses — show on hover */}
                    <p className={`text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-tight ${
                      d ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {item.uses}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom summary ── */}
        <div className={`mt-16 p-8 lg:p-12 rounded-3xl border ${
          d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-2xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Why These Technologies?
              </h2>
              <p className={`text-sm leading-relaxed mb-4 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Every technology in our stack is chosen for a specific reason — not because it is trendy.
                We prioritise tools with strong ecosystems, long-term support, and proven production reliability.
              </p>
              <div className="space-y-2">
                {[
                  'Production-proven across 50+ real projects',
                  'Strong community support and long-term viability',
                  'Performance optimised for scale',
                  'Security-first with active vulnerability patching',
                ].map((pt, i) => (
                  <div key={i} className={`flex items-center gap-2.5 text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    <CheckCircle size={13} className="text-purple-500 flex-shrink-0"/>
                    {pt}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: '30+',  label: 'Technologies mastered' },
                { num: '50+',  label: 'Projects delivered' },
                { num: '4+',   label: 'Years in production' },
                { num: '100%', label: 'TypeScript adoption' },
                { num: '95+',  label: 'Lighthouse avg score' },
                { num: '24hr', label: 'Support response' },
              ].map((s, i) => (
                <div key={i} className={`text-center p-3 rounded-xl border ${
                  d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'
                }`}>
                  <div className={`text-xl font-black text-purple-500 mb-0.5`}>{s.num}</div>
                  <div className={`text-[9px] font-medium uppercase tracking-wide ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 text-center">
          <p className={`text-sm mb-6 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
            Want to know which technology is right for your project?
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            Get a Free Tech Consultation <ArrowRight size={15}/>
          </Link>
        </div>

        {/* ── SEO Hidden Block ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Technology Stack — DevZore Software Development Agency Islamabad</h2>
          <p>
            DevZore uses a modern, production-proven technology stack including React.js, Next.js,
            Node.js, Express.js, MongoDB, PostgreSQL, React Native, TypeScript, Tailwind CSS,
            AWS, Docker, GraphQL, Socket.io and Stripe. Our engineering team has delivered
            50+ projects using these technologies for clients across Pakistan, USA, UK, UAE,
            Canada and Australia. We specialise in MERN stack development, full-stack JavaScript,
            cloud deployment and cross-platform mobile development.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TechStack;