import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Send, ArrowRight,
  CheckCircle, Clock, Globe, MessageSquare,
  Star, Shield, Zap
} from 'lucide-react';

const Contact = ({ isDark }) => {
  const d = isDark;
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    'Web Development', 'Mobile App Development', 'MERN Stack Development',
    'SaaS Development', 'E-Commerce Development', 'UI/UX Design',
    'Startup MVP', 'Backend & API', 'Maintenance & Support', 'Other',
  ];

  const budgets = [
    'Under $1,000', '$1,000 – $3,000', '$3,000 – $8,000',
    '$8,000 – $20,000', '$20,000+', 'Not sure yet',
  ];

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const contactMethods = [
    { icon: <Mail size={18}/>,    label: 'Email Us',        value: 'hellodevzore@gmail.com', href: 'mailto:hellodevzore@gmail.com', color: 'purple' },
    { icon: <Phone size={18}/>,   label: 'Call / WhatsApp', value: '+92 334 8004300',         href: 'https://wa.me/923348004300',    color: 'green' },
    { icon: <MapPin size={18}/>,  label: 'Our Location',    value: 'Islamabad, Pakistan',     href: null,                           color: 'blue' },
    { icon: <Clock size={18}/>,   label: 'Response Time',   value: 'Within 24 hours',         href: null,                           color: 'amber' },
  ];

  const trustPoints = [
    { icon: <CheckCircle size={14}/>, text: 'Free consultation — no obligation' },
    { icon: <Shield size={14}/>,      text: 'Fixed pricing — no surprise bills' },
    { icon: <Zap size={14}/>,         text: 'Response within 24 hours' },
    { icon: <Globe size={14}/>,       text: 'Serving USA, UK, UAE, Canada & more' },
    { icon: <Star size={14}/>,        text: '5.0 rating from 30+ clients' },
    { icon: <CheckCircle size={14}/>, text: '100% source code ownership' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-200 text-green-600',
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'     : 'bg-blue-50 border-blue-200 text-blue-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'  : 'bg-amber-50 border-amber-200 text-amber-600',
  };

  const inp = `w-full px-4 py-3 rounded-xl border text-[14px] font-medium outline-none transition-all duration-200 ${
    d
      ? 'bg-white/[0.04] border-white/[0.08] text-white placeholder-gray-600 focus:border-purple-500/50 focus:bg-white/[0.06]'
      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-300 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)]'
  }`;

  return (
    <>
      <Helmet>
        <title>Contact DevZore | Hire a Developer in Islamabad, Pakistan</title>
        <meta name="description" content="Get in touch with DevZore to start your web or mobile app project. Based in Islamabad, Pakistan — serving clients worldwide. Free consultation, response within 24 hours." />
        <link rel="canonical" href="https://devzore.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="contact DevZore, hire developer Pakistan, hire React developer Islamabad, web development quote Pakistan, software development consultation" />

        {/* GEO */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* OG */}
        <meta property="og:title" content="Contact DevZore | Hire a Developer in Islamabad" />
        <meta property="og:description" content="Start your web or mobile project with DevZore. Free consultation, fixed pricing, response within 24 hours. Based in Islamabad, Pakistan." />
        <meta property="og:url" content="https://devzore.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact DevZore | Hire a Developer in Islamabad" />
        <meta name="twitter:description" content="Free consultation for web, mobile and SaaS development. Response within 24 hours from DevZore, Islamabad." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact DevZore",
          "url": "https://devzore.com/contact",
          "description": "Contact DevZore for web development, mobile app development and software engineering services.",
          "mainEntity": {
            "@type": "Organization",
            "name": "DevZore",
            "url": "https://devzore.com",
            "email": "hellodevzore@gmail.com",
            "telephone": "+92-334-8004300",
            "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" },
            "contactPoint": [
              { "@type": "ContactPoint", "contactType": "customer service", "email": "hellodevzore@gmail.com", "availableLanguage": ["English", "Urdu"] },
              { "@type": "ContactPoint", "contactType": "sales", "telephone": "+92-334-8004300", "contactOption": "TollFree" }
            ]
          }
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* ── HERO ── */}
        <section aria-labelledby="contact-heading" className={`pt-30 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border ${
              d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
            }`}>
              Get In Touch
            </div>
            <h1 id="contact-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${d ? 'text-white' : 'text-gray-900'}`}>
              Let's Build Something{' '}
              <span className="text-purple-600">Together</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
              Tell us about your project and we will get back to you within 24 hours with a clear plan
              and honest pricing. No commitment required.
            </p>
          </div>
        </section>

        {/* ── CONTACT METHODS ── */}
        <section aria-label="Contact methods" className={`py-12 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {contactMethods.map((m, i) => (
                <div key={i} className={`p-5 rounded-2xl border transition-all ${
                  d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-gray-50 border-gray-200 hover:bg-white hover:shadow-sm'
                }`}>
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-3 ${colorMap[m.color]}`}>
                    {m.icon}
                  </div>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${d ? 'text-gray-500' : 'text-gray-400'}`}>{m.label}</p>
                  {m.href ? (
                    <a href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className={`text-[13px] font-semibold hover:text-purple-500 transition-colors ${d ? 'text-white' : 'text-gray-900'}`}>
                      {m.value}
                    </a>
                  ) : (
                    <p className={`text-[13px] font-semibold ${d ? 'text-white' : 'text-gray-900'}`}>{m.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN SECTION ── */}
        <section aria-label="Contact form and information" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">

              {/* LEFT: Info */}
              <div className="lg:col-span-2 flex flex-col gap-6">

                {/* Trust points */}
                <div className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                  <h2 className={`text-[14px] font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                    Why Work With DevZore?
                  </h2>
                  <div className="space-y-3">
                    {trustPoints.map((pt, i) => (
                      <div key={i} className={`flex items-center gap-3 text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="text-purple-500 flex-shrink-0">{pt.icon}</span>
                        {pt.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp */}
                <a href="https://wa.me/923348004300?text=Hi DevZore! I want to discuss a project."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border bg-[#25D366]/10 border-[#25D366]/25 hover:bg-[#25D366]/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#25D366]">Chat on WhatsApp</p>
                    <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>Fastest way to reach us</p>
                  </div>
                  <ArrowRight size={14} className="text-[#25D366] ml-auto"/>
                </a>

                {/* Email direct */}
                <a href="mailto:hellodevzore@gmail.com"
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                    d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}>
                  <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-purple-500"/>
                  </div>
                  <div>
                    <p className={`text-[13px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>hellodevzore@gmail.com</p>
                    <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>Response within 24 hours</p>
                  </div>
                  <ArrowRight size={14} className="text-purple-500 ml-auto"/>
                </a>

                {/* Location */}
                <div className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-purple-500"/>
                    <p className={`text-[11px] font-bold uppercase tracking-widest ${d ? 'text-gray-500' : 'text-gray-400'}`}>Location</p>
                  </div>
                  <p className={`text-[14px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>Islamabad, Pakistan</p>
                  <p className={`text-[12px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                    Serving clients worldwide — USA · UK · UAE · Canada · Australia · Saudi Arabia
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                    <span className={`text-[11px] font-semibold ${d ? 'text-green-400' : 'text-green-700'}`}>
                      Available for new projects
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className={`h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl border ${
                    d ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50 border-green-200'
                  }`}>
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                      <CheckCircle size={28} className="text-white"/>
                    </div>
                    <h2 className={`text-2xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                      Message Received!
                    </h2>
                    <p className={`text-base mb-2 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      Thank you for reaching out, {form.name || 'there'}!
                    </p>
                    <p className={`text-sm mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                      We will review your project details and get back to you within 24 hours
                      with a clear plan and honest pricing.
                    </p>
                    <a href="https://wa.me/923348004300?text=Hi! I just submitted a contact form on DevZore."
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl text-sm">
                      Chat on WhatsApp for faster reply <ArrowRight size={14}/>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={`p-8 rounded-3xl border ${
                    d ? 'bg-white/[0.02] border-white/[0.08]' : 'bg-[#fafafa] border-gray-200'
                  }`}>
                    <h2 className={`text-xl font-black mb-6 ${d ? 'text-white' : 'text-gray-900'}`}>
                      Tell Us About Your Project
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={`block text-[11px] font-bold uppercase tracking-wider mb-2 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                          Your Name *
                        </label>
                        <input
                          type="text" name="name" required
                          value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className={inp}
                        />
                      </div>
                      <div>
                        <label className={`block text-[11px] font-bold uppercase tracking-wider mb-2 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                          Email Address *
                        </label>
                        <input
                          type="email" name="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="john@company.com"
                          className={inp}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={`block text-[11px] font-bold uppercase tracking-wider mb-2 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                          Service Needed
                        </label>
                        <select name="service" value={form.service} onChange={handleChange} className={inp}>
                          <option value="">Select a service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={`block text-[11px] font-bold uppercase tracking-wider mb-2 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                          Budget Range
                        </label>
                        <select name="budget" value={form.budget} onChange={handleChange} className={inp}>
                          <option value="">Select budget range</option>
                          {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className={`block text-[11px] font-bold uppercase tracking-wider mb-2 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                        Project Details *
                      </label>
                      <textarea
                        name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us about your project — what you want to build, who it's for, any specific requirements, timeline expectations..."
                        className={inp + ' resize-none'}
                      />
                    </div>

                    <button type="submit" disabled={loading}
                      className={`w-full flex items-center justify-center gap-2 py-4 font-black text-sm rounded-xl transition-all ${
                        loading
                          ? 'bg-purple-400 cursor-not-allowed text-white'
                          : 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-[0_0_24px_rgba(124,58,237,0.35)]'
                      }`}>
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/> Sending...</>
                      ) : (
                        <><Send size={15}/> Send Message — Free Consultation</>
                      )}
                    </button>

                    <p className={`text-center text-[11px] mt-4 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                      By submitting, you agree to our{' '}
                      <Link to="/privacy-policy" className="text-purple-500 hover:underline">Privacy Policy</Link>.
                      We respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO HIDDEN ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Contact DevZore Software Development Agency — Islamabad Pakistan</h2>
          <address>
            <p>DevZore International — Software Development Agency</p>
            <p>Email: hellodevzore@gmail.com</p>
            <p>Phone / WhatsApp: +92 334 8004300</p>
            <p>Location: Islamabad, Pakistan</p>
            <p>Services: Web Development, Mobile App Development, MERN Stack, SaaS, E-Commerce, UI/UX Design, MVP Development</p>
            <p>Service Areas: Pakistan, USA, UK, UAE, Canada, Australia, Saudi Arabia</p>
          </address>
        </div>

      </main>
    </>
  );
};

export default Contact;