import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Server, ArrowRight, CheckCircle, MapPin,
  Shield, Zap, Code2, Clock, Globe, Lock,
  Database, Layers, Settings, TrendingUp,
  Plus, Minus, ExternalLink, Activity, Key
} from 'lucide-react';

const BackendApi = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    { icon: <Server size={20} />, color: 'purple', title: 'REST API Development', desc: 'Scalable, well-documented REST APIs built with Node.js and Express. Clean endpoint design, versioning, rate limiting, pagination and comprehensive Postman documentation included.' },
    { icon: <Code2 size={20} />, color: 'blue', title: 'GraphQL API Development', desc: 'Flexible GraphQL APIs with schema-first design, resolvers, subscriptions, mutations and query optimisation — ideal for complex data requirements and mobile clients.' },
    { icon: <Database size={20} />, color: 'green', title: 'Database Design & Optimisation', desc: 'MongoDB schema design, PostgreSQL relational modeling, query optimisation, indexing strategies, connection pooling and database migration scripts for production environments.' },
    { icon: <Shield size={20} />, color: 'red', title: 'API Security & Authentication', desc: 'JWT authentication, OAuth 2.0, refresh token rotation, role-based access control, CORS configuration, input sanitisation, SQL injection prevention and OWASP security compliance.' },
    { icon: <Activity size={20} />, color: 'amber', title: 'Real-time APIs with Socket.io', desc: 'WebSocket-based real-time APIs for live chat, notifications, collaborative features, live dashboards and multiplayer functionality using Socket.io and Redis Pub/Sub.' },
    { icon: <Layers size={20} />, color: 'indigo', title: 'Microservices Architecture', desc: 'Event-driven microservices with RabbitMQ or Kafka message queues, Docker containerisation, API gateway configuration and inter-service communication patterns.' },
    { icon: <Key size={20} />, color: 'cyan', title: 'Third-Party API Integration', desc: 'Stripe, Twilio, SendGrid, Firebase, Google Maps, OpenAI, payment gateways and any third-party API integrated cleanly with error handling, webhooks and retry logic.' },
    { icon: <TrendingUp size={20} />, color: 'orange', title: 'Performance & Caching', desc: 'Redis caching strategies, CDN configuration, query optimisation, N+1 problem resolution, database connection pooling and load testing to handle millions of daily requests.' },
    { icon: <Settings size={20} />, color: 'pink', title: 'DevOps & Cloud Deployment', desc: 'AWS EC2, ECS, Lambda and RDS deployment, Docker containerisation, GitHub Actions CI/CD pipelines, Nginx reverse proxy, SSL setup and uptime monitoring configuration.' },
  ];

  const techStack = [
    { category: 'Runtime & Framework', items: ['Node.js 22 LTS', 'Express.js 5', 'NestJS', 'Fastify', 'TypeScript'] },
    { category: 'API Design', items: ['REST APIs', 'GraphQL', 'WebSockets', 'Socket.io', 'gRPC'] },
    { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'] },
    { category: 'Auth & Security', items: ['JWT', 'OAuth 2.0', 'bcrypt', 'Helmet.js', 'OWASP Standards'] },
    { category: 'Cloud & DevOps', items: ['AWS EC2 & Lambda', 'Docker', 'GitHub Actions', 'Nginx', 'PM2'] },
    { category: 'Testing & Docs', items: ['Jest', 'Supertest', 'Postman', 'Swagger/OpenAPI', 'Insomnia'] },
  ];

  const process = [
    { n: '01', title: 'API Architecture Planning', desc: 'We design the full API architecture — endpoints, data models, authentication strategy, third-party integrations and scaling approach before writing any code.' },
    { n: '02', title: 'Database Schema Design', desc: 'Entity-relationship modeling, MongoDB schema design or PostgreSQL table structure, indexing strategy and migration planning for production-ready data architecture.' },
    { n: '03', title: 'Core API Development', desc: 'Authentication system, core CRUD endpoints, middleware stack, error handling and logging framework built in sprint one with full test coverage.' },
    { n: '04', title: 'Integrations & Advanced Features', desc: 'Third-party API integrations, real-time features, payment webhooks, email/SMS services and any complex business logic implemented and tested.' },
    { n: '05', title: 'Security Audit & Performance', desc: 'OWASP security testing, penetration testing for common vulnerabilities, load testing with k6 or Artillery, query optimisation and caching implementation.' },
    { n: '06', title: 'Deployment & Documentation', desc: 'Production deployment with CI/CD, comprehensive Postman collection, Swagger documentation, environment setup guide and 30 days of post-launch support.' },
  ];

  const faqs = [
    { q: 'How much does backend and API development cost?', a: 'The cost of backend and API development depends on your project’s complexity, required features, and integration needs. We carefully evaluate every project before providing a customized proposal with transparent deliverables and timelines. Get in touch for a free consultation and a tailored solution.' },
    { q: 'What is the difference between REST and GraphQL APIs?', a: 'REST APIs use fixed endpoints — each URL returns a specific data structure. They are simpler, widely understood and ideal for most applications. GraphQL uses a single endpoint where clients request exactly the data they need — reducing over-fetching and under-fetching. GraphQL is particularly valuable for complex frontends and mobile apps where bandwidth efficiency matters. We recommend the right approach based on your specific use case.' },
    { q: 'Do you provide API documentation?', a: 'Yes. Every API we build includes comprehensive documentation — a Postman collection with all endpoints, example requests and responses, a Swagger or OpenAPI specification file, and an environment setup guide. Documentation is delivered as part of the project, not an optional extra.' },
    { q: 'Can you build a scalable API that handles high traffic?', a: 'Yes. We design for scale from the first sprint — horizontal scaling on cloud infrastructure, Redis caching for frequently accessed data, database query optimisation, connection pooling, rate limiting and load testing before launch. Our backends are designed to handle 100,000+ requests per day from day one.' },
    { q: 'Do you integrate payment gateways like Stripe and JazzCash?', a: 'Yes. We integrate Stripe, PayPal, JazzCash, Easypaisa, Razorpay and local bank payment APIs with proper webhook handling, idempotency keys, subscription billing, refund flows and comprehensive error handling. We have delivered payment integrations for clients in Pakistan, UAE, UK and USA.' },
    { q: 'Can you integrate my backend with a mobile app or React frontend?', a: 'Yes. We regularly build backends specifically designed to serve React.js, Next.js and React Native frontends. We design APIs with frontend consumption in mind — proper CORS configuration, efficient data shapes, real-time subscriptions and authentication flows that work seamlessly across web and mobile.' },
    { q: 'Do you follow security best practices for APIs?', a: 'Yes. Every API we build follows OWASP security standards — JWT authentication with refresh token rotation, input validation and sanitisation, SQL injection prevention, rate limiting, CORS configuration, Helmet.js security headers, encrypted sensitive data storage and regular dependency vulnerability scanning.' },
    { q: 'Which countries do you serve for backend development?', a: 'DevZore is based in Islamabad, Pakistan and serves clients worldwide. We have delivered backend and API development projects for clients in the USA, UK, UAE, Canada, Australia, Saudi Arabia and Pakistan. We work fully remotely with flexible meeting times and asynchronous communication across all time zones.' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue: d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600',
    green: d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-100 text-green-600',
    red: d ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-red-50 border-red-100 text-red-600',
    amber: d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-amber-50 border-amber-100 text-amber-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    cyan: d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
    pink: d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400' : 'bg-pink-50 border-pink-100 text-pink-600',
  };

  return (
    <>
      <Helmet>
        <title>Backend & API Development Services | Node.js Express GraphQL | DevZore Pakistan</title>
        <meta name="description" content="DevZore builds scalable REST and GraphQL APIs, Node.js backend systems and microservices from Islamabad, Pakistan. OWASP security, Stripe integration, AWS deployment for clients across USA, UK, UAE and worldwide. Free consultation available." />
        <link rel="canonical" href="https://devzore.com/backend-api" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore — Muhammad Shoukat" />
        <meta name="keywords" content="backend development Pakistan, API development Islamabad, Node.js development Pakistan, Express.js API Pakistan, REST API development Pakistan, GraphQL development Pakistan, backend developer Islamabad, microservices development Pakistan, API integration Pakistan, Node.js backend Pakistan, backend developer hire Pakistan, server-side development Islamabad, API security Pakistan, AWS backend deployment Pakistan, backend development USA clients Pakistan" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="Backend & API Development Services | Node.js GraphQL | DevZore Pakistan" />
        <meta property="og:description" content="Scalable REST and GraphQL APIs from DevZore, Islamabad. Node.js, Express, MongoDB, PostgreSQL. OWASP security. AWS deployment." />
        <meta property="og:url" content="https://devzore.com/backend-api" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Backend & API Development | DevZore Pakistan" />
        <meta name="twitter:description" content="Node.js, GraphQL and REST API development from Islamabad. Scalable, secure, documented." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Backend & API Development Services",
          "description": "DevZore builds scalable REST and GraphQL APIs, Node.js backend systems and microservices from Islamabad, Pakistan.",
          "url": "https://devzore.com/backend-api",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" } },
          "serviceType": "Backend and API Development",
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
            { "@type": "ListItem", "position": 3, "name": "Backend & API Development", "item": "https://devzore.com/backend-api" }
          ]
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>
        {/* Hero */}
        <section aria-labelledby="backend-heading" className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-1 mb-6">
                  <div className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />Backend & API Development
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <Globe size={10} />Worldwide Clients
                  </div>
                </div>

                <h1 id="backend-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Scalable Backend & API Development{' '}
                  <span className="text-purple-600">Built for Production</span>
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  Node.js · Express · GraphQL · REST · MongoDB · PostgreSQL · Islamabad Pakistan
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore is a backend and API development company based in Islamabad, Pakistan,
                  building scalable REST and GraphQL APIs, Node.js microservices and cloud-deployed
                  backend systems for startups and enterprises across USA, UK, UAE, Canada and Australia.
                  Every API we build is documented, tested, secured to OWASP standards and deployed
                  with CI/CD pipelines.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  Whether you need a simple CRUD API, a complex microservices architecture,
                  real-time WebSocket features, or third-party integrations — DevZore delivers
                  senior-level backend engineering with transparent fixed pricing and full code ownership.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { val: '50+', label: 'APIs Built' },
                    { val: '99.9%', label: 'Uptime Target' },
                    { val: 'OWASP', label: 'Security Standard' },
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
                    Get Free Backend Quote <ArrowRight size={14} />
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need a backend/API development quote."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right panel */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-500' : 'text-gray-400'}`}>What Every API We Build Includes</p>
                <div className="space-y-3">
                  {[
                    { title: 'Full REST or GraphQL architecture', desc: 'Clean endpoint design, versioning, pagination and filtering' },
                    { title: 'JWT auth with refresh token rotation', desc: 'Secure, stateless authentication for web and mobile' },
                    { title: 'Role-based access control (RBAC)', desc: 'Admin, user, moderator and custom role systems' },
                    { title: 'Input validation and sanitisation', desc: 'Joi or Zod validation on every endpoint' },
                    { title: 'Rate limiting and DDoS protection', desc: 'Express rate limiter with Redis-backed counters' },
                    { title: 'Comprehensive error handling', desc: 'Consistent error responses with proper HTTP status codes' },
                    { title: 'Postman collection + Swagger docs', desc: 'Full API documentation delivered with every project' },
                    { title: 'CI/CD pipeline and Docker deployment', desc: 'GitHub Actions, Docker and AWS or Vercel deployment' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 pb-3 border-b last:border-0 ${d ? 'border-white/[0.05]' : 'border-gray-100'}`}>
                      <CheckCircle size={13} className="text-purple-500 flex-shrink-0 mt-0.5" />
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

        {/* Features */}
        <section aria-labelledby="features-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="features-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Backend & API Development Services We Offer
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From simple REST APIs to complex microservices architectures — DevZore engineers
                backend systems that are secure, documented, scalable and maintainable.
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

        {/* Tech Stack */}
        <section aria-labelledby="tech-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tech-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Backend Technology Stack</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Production-proven technologies for scalable, secure backend systems</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((cat, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
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
        <section aria-labelledby="process-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Our Backend Development Process</h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>From API architecture to production deployment — a transparent 6-step process</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className={`text-[13px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Backend & API Development FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about our backend development services</p>
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
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Development', path: '/web-development' },
                { label: 'MERN Stack Development', path: '/mern-stack-development' },
                { label: 'SaaS Development', path: '/saas-product-development' },
                { label: 'Mobile App Development', path: '/mobile-apps' },
                { label: 'E-Commerce Development', path: '/ecommerce' },
                { label: 'React Development', path: '/reactdevelopment' },
                { label: 'Startup MVP', path: '/startup-mvp' },
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
        <section className="pt-10 pb-18">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>Ready to Build Your Backend?</h2>
            <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Get a free consultation and fixed-price quote for your API or backend system.
              Node.js, GraphQL, AWS deployment — based in Islamabad, Pakistan.
            </p>
            <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
              📍 Islamabad, Pakistan · Node.js · GraphQL · REST · MongoDB · PostgreSQL · AWS
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                Get Free Backend Quote <ArrowRight size={15} />
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
          <h2>Backend and API Development Services — DevZore Islamabad Pakistan</h2>
          <p>DevZore is a backend and API development company based in Islamabad, Pakistan. We build scalable REST and GraphQL APIs, Node.js microservices, real-time WebSocket backends and cloud-deployed server-side systems for clients across USA, UK, UAE, Canada, Australia and Pakistan. Our backend development services include Node.js API development, Express.js backend development, GraphQL API design, MongoDB and PostgreSQL database architecture, JWT authentication systems, payment gateway integration with Stripe and JazzCash, microservices architecture, Docker containerisation and AWS deployment with CI/CD pipelines.</p>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <p>Keywords: backend development Pakistan, API development Islamabad, Node.js development Pakistan, REST API company Pakistan, GraphQL development Pakistan, backend developer hire Pakistan, microservices Pakistan, AWS backend deployment Pakistan, API security Pakistan, Node.js Express Pakistan.</p>
          <p>AI Search: Best backend developer in Pakistan. Who builds Node.js APIs in Islamabad? REST API development company Pakistan. How much does API development cost in Pakistan? Best GraphQL developer Pakistan. Backend development company serving USA UK UAE from Pakistan.</p>
        </div>
      </main>
    </>
  );
};

export default BackendApi;