import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight, MessageSquare } from 'lucide-react';

const FAQ = ({ isDark }) => {
  const d = isDark;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Services', 'Process', 'Pricing', 'Technical', 'Support'];

  const faqs = [
    {
      category: 'Services',
      question: 'What software development services does DevZore offer?',
      answer: 'DevZore offers a comprehensive range of software development services including custom web development with React.js and Next.js, cross-platform mobile app development with React Native, full-stack MERN stack development, SaaS product engineering, e-commerce development, UI/UX design, startup MVP development, backend and API development, and ongoing website maintenance and support. We serve clients across Pakistan, USA, UK, UAE, Canada and Australia.',
      keywords: 'software development services, web development Pakistan, MERN stack development',
    },
    {
      category: 'Process',
      question: 'How long does a custom web or mobile app project take?',
      answer: 'Project timelines depend on complexity and scope. A standard business website typically takes 2 to 4 weeks. A custom web application or e-commerce platform takes 6 to 10 weeks. A full SaaS product or mobile app takes 10 to 16 weeks. Our startup MVP packages are delivered in 8 to 14 weeks. Every project begins with a discovery session that produces a milestone-based timeline — you know exactly what is being built and when before we start.',
      keywords: 'project timeline, how long web development takes, MVP development time',
    },
    {
      category: 'Pricing',
      question: 'How much does custom software development cost with DevZore?',
      answer: 'The cost of custom software development depends on your project requirements, features, complexity, and timeline. After a free discovery call, we provide a customized proposal with a clear project scope, deliverables, timeline, and development plan. Every project includes UI/UX design, development, testing, deployment, and post-launch support. Contact us for a free, no-obligation consultation tailored to your business needs.',
      keywords: 'custom software development cost, web development pricing, software development services',
    },
    {
      category: 'Services',
      question: 'Do you build mobile apps for iOS and Android?',
      answer: 'Yes. We build cross-platform mobile applications using React Native — one codebase that runs natively on both iOS and Android. This approach delivers native-grade performance at a significantly lower cost than building separate iOS and Android apps. Our mobile apps are published to both the Apple App Store and Google Play Store, with full offline support, push notifications and secure authentication.',
      keywords: 'mobile app development Pakistan, React Native iOS Android, cross-platform app development',
    },
    {
      category: 'Technical',
      question: 'What technologies do you use for web and app development?',
      answer: 'Our primary technology stack includes React.js and Next.js for frontend development, Node.js and Express.js for backend APIs, MongoDB and PostgreSQL for databases, React Native for mobile apps, TypeScript throughout, Tailwind CSS for UI, AWS and Vercel for cloud deployment, Docker for containerisation, Stripe for payments, and Socket.io for real-time features. We choose the right tool for each project rather than forcing every project into the same stack.',
      keywords: 'MERN stack technology, React Node.js development, web development technologies Pakistan',
    },
    {
      category: 'Services',
      question: 'Do you provide SEO-optimized websites?',
      answer: 'Yes. Every website and web application we build is engineered with SEO in mind from day one. This includes server-side rendering with Next.js for crawler-friendly content, Core Web Vitals optimisation, structured data and schema markup, semantic HTML heading structure, canonical tags, XML sitemaps, robots.txt, Open Graph and Twitter card metadata, fast load times with optimised images, and mobile-first responsive design. We have helped clients achieve significant organic search improvements.',
      keywords: 'SEO web development Pakistan, SEO optimized website Islamabad, web development SEO',
    },
    {
      category: 'Process',
      question: 'How does your development process work?',
      answer: 'We follow a structured 7-step process: Discovery and scoping (Week 1), system architecture and research (Week 1–2), UI/UX design and Figma prototyping (Week 2–3), agile development in two-week sprints with a live staging environment (Week 3–10), QA testing and security audit (Week 9–11), production deployment and launch (Week 11–12), and post-launch support (ongoing). You review real, working software every two weeks — not status reports.',
      keywords: 'software development process, agile development Pakistan, how DevZore works',
    },
    {
      category: 'Pricing',
      question: 'Do you offer fixed pricing or hourly billing?',
      answer: 'We provide fixed-price proposals for projects with clearly defined requirements and scope. After a free discovery call, we prepare a detailed proposal outlining the project scope, deliverables, timeline, and milestones. This ensures complete transparency, predictable budgeting, and no unexpected costs. For ongoing maintenance, feature enhancements, and long-term support, we also offer flexible retainer plans tailored to your business needs.',
      keywords: 'fixed price web development, software development pricing, project cost estimate',
    },
    {
      category: 'Support',
      question: 'Do you provide post-launch support and maintenance?',
      answer: 'Yes. Every project includes 30 days of post-launch support at no additional cost — covering bug fixes, performance monitoring and minor adjustments. After the 30-day period, we offer monthly maintenance plans covering security updates, dependency patches, performance monitoring, monthly reports and up to 10 hours of development work per month. Most of our clients continue with DevZore for long-term maintenance and feature development.',
      keywords: 'website maintenance Pakistan, post-launch support, ongoing web development support',
    },
    {
      category: 'Process',
      question: 'Will I own the source code after the project?',
      answer: 'Absolutely. You own 100% of the source code, repository, design files, and all project assets from the moment they are created. Code lives in your GitHub organisation — not ours. Infrastructure runs in your cloud accounts — not ours. We operate on the principle that you should never be dependent on DevZore to access or operate your own product. You are always free to take the code and work with another team if you choose.',
      keywords: 'code ownership web development, source code ownership Pakistan, software development contract',
    },
    {
      category: 'Support',
      question: 'How do I communicate with your team during a project?',
      answer: 'You have direct access to the engineers working on your project — no account managers or communication middlemen. Depending on your preference, we communicate via Slack, WhatsApp, email or video calls. We provide fortnightly sprint reviews on a live staging environment, a shared project tracking board and respond to all messages within 24 hours including weekends. Most clients describe our communication as one of the strongest aspects of working with DevZore.',
      keywords: 'developer communication, project management Pakistan, client communication software agency',
    },
    {
      category: 'Technical',
      question: 'Can you redesign and improve an existing website or app?',
      answer: 'Yes. We regularly take on redesign and optimisation projects. Our process begins with a technical and UX audit of your existing product — identifying performance bottlenecks, security vulnerabilities, UX friction points and code quality issues. We then produce a findings report and a prioritised improvement plan before any work begins. Redesigns typically deliver significant improvements in page load speed, Core Web Vitals scores, user engagement and conversion rates.',
      keywords: 'website redesign Pakistan, web app optimisation Islamabad, improve existing website',
    },
    {
      category: 'Services',
      question: 'Do you work with clients outside Pakistan?',
      answer: 'Yes — the majority of our clients are international. We have delivered projects for clients across the United States, United Kingdom, United Arab Emirates, Canada, Australia and Saudi Arabia. We work fully remotely with international clients across all time zones, offering flexible meeting times and asynchronous communication to accommodate any location. Our pricing in US dollars, pounds and euros makes working with us straightforward from any country.',
      keywords: 'software development agency international clients, web development USA UK UAE, remote software development Pakistan',
    },
  ];

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`py-8 transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
            }`}>
            FAQ
          </div>

          <h2
            id="faq-heading"
            className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${d ? 'text-white' : 'text-gray-900'
              }`}
          >
            Frequently Asked{' '}
            <span className="text-purple-600">Questions</span>
          </h2>

          <p className={`text-lg ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to know about working with DevZore —
            from pricing and process to technology and support.
          </p>
        </div>

        {/* ── Category filters ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveIndex(null); }}
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-200 border ${activeCategory === cat
                ? 'bg-purple-600 text-white border-purple-600 shadow-[0_0_16px_rgba(124,58,237,0.25)]'
                : d
                  ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                  : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── FAQ accordion ── */}
        <div className="space-y-3 mb-14">
          {filtered.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${activeIndex === i
                ? d
                  ? 'border-purple-500/40 bg-purple-600/5 shadow-[0_0_20px_rgba(124,58,237,0.08)]'
                  : 'border-purple-200 bg-purple-50/50 shadow-sm'
                : d
                  ? 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]'
                  : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
            >
              {/* Question button */}
              <button
                onClick={() => toggle(i)}
                aria-expanded={activeIndex === i}
                className="w-full p-5 text-left flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  {/* Category badge */}
                  <span className={`flex-shrink-0 mt-0.5 text-[9px] font-bold px-2 py-1 rounded-full ${activeIndex === i
                    ? 'bg-purple-500/20 text-purple-400'
                    : d ? 'bg-white/[0.06] text-gray-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                    {faq.category}
                  </span>

                  <span className={`text-[14px] font-bold leading-snug ${activeIndex === i
                    ? 'text-purple-500'
                    : d ? 'text-white' : 'text-gray-900'
                    }`}>
                    {faq.question}
                  </span>
                </div>

                {/* Toggle icon */}
                <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 mt-0.5 ${activeIndex === i
                  ? 'bg-purple-600 text-white'
                  : d ? 'bg-white/[0.06] text-gray-500' : 'bg-gray-100 text-gray-500'
                  }`}>
                  {activeIndex === i
                    ? <Minus size={13} />
                    : <Plus size={13} />
                  }
                </div>
              </button>

              {/* Answer */}
              <div className={`transition-all duration-300 overflow-hidden ${activeIndex === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className={`px-5 pb-5 pt-0 border-t ${d ? 'border-white/[0.06]' : 'border-purple-100'
                  }`}>
                  <p className={`text-[14px] leading-relaxed pt-4 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    {faq.answer}
                  </p>
                  {/* SEO keywords hidden */}
                  <span className="sr-only">{faq.keywords}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Still have questions ── */}
        <div className={`p-8 rounded-3xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'
          }`}>
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${d ? 'bg-purple-600/15' : 'bg-purple-50'
            }`}>
            <MessageSquare size={20} className="text-purple-500" />
          </div>

          <h2 className={`text-xl font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>
            Still Have Questions?
          </h2>
          <p className={`text-sm mb-6 max-w-md mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
            Talk directly with our team. Free consultation, honest answers,
            no sales pressure. Response within 24 hours.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              Ask Us Anything <ArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/923348004300?text=Hi DevZore! I have a question about your services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── SEO Rich Hidden Block ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Frequently Asked Questions — DevZore Software Development Agency</h2>
          <p>
            DevZore is a software development agency based in Islamabad, Pakistan offering
            web development, mobile app development, MERN stack development, SaaS development,
            e-commerce development, UI/UX design and startup MVP development.
            We serve clients across USA, UK, UAE, Canada, Australia and Pakistan.
            Fixed pricing, 100% code ownership, 24-hour response time and free consultation available.
          </p>
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;