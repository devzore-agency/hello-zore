import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Shield, Eye, Database, Globe, Cookie,
  Lock, ArrowRight, CheckCircle, Mail
} from 'lucide-react';

const PrivacyPolicy = ({ isDark }) => {
  const d = isDark;
  const [activeSection, setActiveSection] = useState(null);

  const lastUpdated = 'April 24, 2026';

  const navItems = [
    { id: 'collection',   label: 'Data We Collect',      icon: <Database size={15}/> },
    { id: 'usage',        label: 'How We Use Data',       icon: <Eye size={15}/> },
    { id: 'security',     label: 'Data Security',         icon: <Shield size={15}/> },
    { id: 'cookies',      label: 'Cookies',               icon: <Cookie size={15}/> },
    { id: 'thirdparty',   label: 'Third Parties',         icon: <Globe size={15}/> },
    { id: 'retention',    label: 'Data Retention',        icon: <Lock size={15}/> },
    { id: 'rights',       label: 'Your Rights',           icon: <CheckCircle size={15}/> },
    { id: 'contact',      label: 'Contact Us',            icon: <Mail size={15}/> },
  ];

  const sectionClass = `scroll-mt-28 py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`;
  const h2Class = `text-2xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`;
  const pClass = `text-[14px] leading-relaxed mb-4 ${d ? 'text-gray-400' : 'text-gray-600'}`;
  const cardClass = `p-5 rounded-xl border mb-3 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`;

  return (
    <>
      <Helmet>
        <title>Privacy Policy | How DevZore Protects Your Data</title>
        <meta name="description" content="DevZore's privacy policy explains how we collect, use, protect and store your personal data. GDPR-conscious, transparent and updated April 2026." />
        <link rel="canonical" href="https://devzore.com/privacy-policy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy | DevZore" />
        <meta property="og:description" content="How DevZore collects, uses and protects your personal data. Transparent, GDPR-conscious privacy practices." />
        <meta property="og:url" content="https://devzore.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | DevZore" />
        <meta name="twitter:description" content="How DevZore protects your personal data." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy — DevZore",
          "url": "https://devzore.com/privacy-policy",
          "description": "DevZore's privacy policy explaining data collection, usage, security and user rights.",
          "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://devzore.com" },
            { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://devzore.com/privacy-policy" }
          ]}
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>
        <div className={`border-b pt-20 ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
        
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className={`text-[10px] font-black uppercase tracking-widest mb-4 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Contents</p>
                <nav className="space-y-1">
                  {navItems.map(item => (
                    <a key={item.id} href={`#${item.id}`}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12px] font-semibold transition-all ${
                        d ? 'text-gray-400 hover:text-purple-400 hover:bg-purple-600/10' : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
                      }`}>
                      <span className="text-purple-500">{item.icon}</span>
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className={`mt-6 p-4 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Last Updated</p>
                  <p className={`text-[12px] font-semibold ${d ? 'text-white' : 'text-gray-900'}`}>{lastUpdated}</p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">

              {/* Header */}
              <div className="mb-12">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                  <Shield size={11}/> Privacy Policy
                </div>
                <h1 className={`text-4xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  How DevZore Protects Your Data
                </h1>
                <p className={`text-base leading-relaxed max-w-2xl ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  At DevZore, we take your privacy seriously. This policy explains clearly and honestly
                  what data we collect, why we collect it, how we protect it and what rights you have
                  over your personal information. Last updated: <strong>{lastUpdated}</strong>.
                </p>
              </div>

              {/* Section 1: Data We Collect */}
              <section id="collection" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}><Database size={15}/></div>
                  <h2 className={h2Class}>Data We Collect</h2>
                </div>
                <p className={pClass}>We collect only the information necessary to provide our software development services and respond to enquiries. We do not sell your data — ever.</p>

                <div className={cardClass}>
                  <h3 className={`text-[13px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>Information You Provide Directly</h3>
                  <ul className={`text-[13px] space-y-1 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li>• Name and email address when you contact us or submit our contact form</li>
                    <li>• Phone number if you choose to provide it</li>
                    <li>• Project requirements and technical details shared during consultations</li>
                    <li>• Company name and website for project scoping purposes</li>
                    <li>• Messages and feedback sent to hellodevzore@gmail.com or via WhatsApp</li>
                  </ul>
                </div>

                <div className={cardClass}>
                  <h3 className={`text-[13px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>Information Collected Automatically</h3>
                  <ul className={`text-[13px] space-y-1 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li>• Browser type, device type and operating system</li>
                    <li>• Pages visited, time on site and referring pages (via Google Analytics)</li>
                    <li>• IP address (anonymised where possible)</li>
                    <li>• Cookie identifiers (see the Cookies section below)</li>
                  </ul>
                </div>

                <div className={cardClass}>
                  <h3 className={`text-[13px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>Information We Do NOT Collect</h3>
                  <ul className={`text-[13px] space-y-1 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li>• Credit card or payment information (we never process payments directly)</li>
                    <li>• Sensitive personal data (health, ethnicity, political opinions)</li>
                    <li>• Data from children under 16 years of age</li>
                  </ul>
                </div>
              </section>

              {/* Section 2: How We Use Data */}
              <section id="usage" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}><Eye size={15}/></div>
                  <h2 className={h2Class}>How We Use Your Data</h2>
                </div>
                <p className={pClass}>We use your information only for the purposes described below. We do not use your data for advertising, profiling or selling to third parties.</p>
                {[
                  { title: 'Responding to Enquiries', desc: 'We use your name, email and project details to respond to your consultation request and provide an accurate project proposal.' },
                  { title: 'Delivering Our Services', desc: 'For active clients, we use your contact information and project specifications to deliver the software development work we have agreed to provide.' },
                  { title: 'Improving Our Website', desc: 'Anonymised analytics data helps us understand which pages are most useful and where we can improve the user experience on devzore.com.' },
                  { title: 'Legal Compliance', desc: 'We retain basic records of business transactions as required by applicable tax and business law in Pakistan and for international client agreements.' },
                  { title: 'Communication', desc: 'With your consent, we may send updates about project progress, maintenance reports or new services we think may be relevant to your business.' },
                ].map((item, i) => (
                  <div key={i} className={`${cardClass} flex items-start gap-3`}>
                    <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5"/>
                    <div>
                      <p className={`text-[13px] font-bold mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                      <p className={`text-[12px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </section>

              {/* Section 3: Data Security */}
              <section id="security" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}><Shield size={15}/></div>
                  <h2 className={h2Class}>Data Security</h2>
                </div>
                <p className={pClass}>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration or destruction.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { title: 'SSL Encryption', desc: 'All data transmitted to devzore.com is encrypted via HTTPS/SSL' },
                    { title: 'Secure Email', desc: 'Business emails handled via Google Workspace with 2FA enabled' },
                    { title: 'Limited Access', desc: 'Your data is accessible only to authorised DevZore team members' },
                    { title: 'No Unnecessary Storage', desc: 'We delete enquiry data that does not result in an active project after 12 months' },
                    { title: 'Form Security', desc: 'Contact form submissions processed via Formspree with spam protection' },
                    { title: 'Breach Response', desc: 'In the event of a data breach, we will notify affected parties within 72 hours' },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <p className={`text-[12px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                      <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Cookies */}
              <section id="cookies" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}><Cookie size={15}/></div>
                  <h2 className={h2Class}>Cookies</h2>
                </div>
                <p className={pClass}>Our website uses cookies to improve your experience and understand how visitors use our site. We use minimal cookies and do not use cookies for advertising.</p>
                {[
                  { type: 'Essential Cookies', desc: 'Required for the website to function correctly. These cannot be disabled.', examples: 'Session cookies, security tokens' },
                  { type: 'Analytics Cookies', desc: 'Help us understand site usage to improve our content and user experience.', examples: 'Google Analytics (anonymised IP, page views, session duration)' },
                  { type: 'Preference Cookies', desc: 'Remember your settings such as dark/light mode preference.', examples: 'devzore-theme (localStorage)' },
                ].map((item, i) => (
                  <div key={i} className={`${cardClass}`}>
                    <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.type}</p>
                    <p className={`text-[12px] mb-1 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                    <p className={`text-[11px] ${d ? 'text-gray-600' : 'text-gray-400'}`}>Examples: {item.examples}</p>
                  </div>
                ))}
                <p className={`text-[13px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>You can disable non-essential cookies in your browser settings at any time. This will not affect the core functionality of our website.</p>
              </section>

              {/* Section 5: Third Parties */}
              <section id="thirdparty" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}><Globe size={15}/></div>
                  <h2 className={h2Class}>Third-Party Services</h2>
                </div>
                <p className={pClass}>We use a small number of trusted third-party services to operate our website. Each has its own privacy policy.</p>
                {[
                  { name: 'Formspree', purpose: 'Contact form submission processing', privacy: 'formspree.io/privacy' },
                  { name: 'Google Analytics', purpose: 'Anonymised website usage statistics', privacy: 'policies.google.com/privacy' },
                  { name: 'Vercel', purpose: 'Website hosting and deployment infrastructure', privacy: 'vercel.com/legal/privacy-policy' },
                  { name: 'Google Workspace', purpose: 'Business email (hellodevzore@gmail.com)', privacy: 'policies.google.com/privacy' },
                  { name: 'WhatsApp Business', purpose: 'Client communication channel', privacy: 'whatsapp.com/legal/privacy-policy' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border mb-2 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                    <CheckCircle size={13} className="text-purple-500 flex-shrink-0 mt-0.5"/>
                    <div>
                      <p className={`text-[12px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>{item.name} — {item.purpose}</p>
                      <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>Privacy policy: {item.privacy}</p>
                    </div>
                  </div>
                ))}
                <p className={`text-[13px] mt-3 ${d ? 'text-gray-500' : 'text-gray-500'}`}>We do not sell, rent or share your personal data with any third party for marketing purposes.</p>
              </section>

              {/* Section 6: Data Retention */}
              <section id="retention" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}><Lock size={15}/></div>
                  <h2 className={h2Class}>How Long We Keep Your Data</h2>
                </div>
                <p className={pClass}>We keep your data only for as long as necessary for the purpose it was collected or as required by law.</p>
                {[
                  { type: 'Enquiry data (non-clients)', period: '12 months', reason: 'In case you return with a follow-up enquiry' },
                  { type: 'Active client project data', period: 'Duration of the project + 2 years', reason: 'For project reference, support and legal purposes' },
                  { type: 'Invoice and payment records', period: '7 years', reason: 'Legal requirement under Pakistani tax law' },
                  { type: 'Analytics data', period: '26 months', reason: 'Google Analytics default retention' },
                  { type: 'Email correspondence', period: '3 years', reason: 'Business communication record' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start justify-between gap-4 p-4 rounded-xl border mb-2 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                    <div>
                      <p className={`text-[12px] font-bold mb-0.5 ${d ? 'text-white' : 'text-gray-900'}`}>{item.type}</p>
                      <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{item.reason}</p>
                    </div>
                    <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-1 rounded-full ${d ? 'bg-purple-500/15 text-purple-400' : 'bg-purple-50 text-purple-700'}`}>{item.period}</span>
                  </div>
                ))}
              </section>

              {/* Section 7: Your Rights */}
              <section id="rights" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}><CheckCircle size={15}/></div>
                  <h2 className={h2Class}>Your Privacy Rights</h2>
                </div>
                <p className={pClass}>Depending on your location, you may have the following rights regarding your personal data. We honour these rights regardless of where you are located.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { right: 'Right to Access', desc: 'Request a copy of the personal data we hold about you' },
                    { right: 'Right to Rectification', desc: 'Ask us to correct inaccurate or incomplete data' },
                    { right: 'Right to Erasure', desc: 'Request deletion of your personal data (subject to legal obligations)' },
                    { right: 'Right to Restriction', desc: 'Ask us to limit how we use your data while a dispute is resolved' },
                    { right: 'Right to Portability', desc: 'Receive your data in a structured, machine-readable format' },
                    { right: 'Right to Object', desc: 'Object to processing based on legitimate interests or for marketing purposes' },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <p className={`text-[12px] font-bold mb-1 text-purple-500`}>{item.right}</p>
                      <p className={`text-[11px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className={`text-[13px] mt-4 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  To exercise any of these rights, contact us at <a href="mailto:hellodevzore@gmail.com" className="text-purple-500 hover:underline">hellodevzore@gmail.com</a>. We will respond within 30 days.
                </p>
              </section>

              {/* Section 8: Contact */}
              <section id="contact" className="pt-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-pink-500/10 text-pink-400' : 'bg-pink-50 text-pink-600'}`}><Mail size={15}/></div>
                  <h2 className={h2Class}>Privacy Questions & Contact</h2>
                </div>
                <p className={pClass}>If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:</p>
                <div className={`p-6 rounded-2xl border mb-6 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                  <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>DevZore — Data Privacy Contact</p>
                  <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>Email: <a href="mailto:hellodevzore@gmail.com" className="text-purple-500 hover:underline">hellodevzore@gmail.com</a></p>
                  <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>WhatsApp: <a href="https://wa.me/923348004300" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">+92 334 8004300</a></p>
                  <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>Location: Islamabad, Pakistan</p>
                  <p className={`text-[11px] mt-2 ${d ? 'text-gray-600' : 'text-gray-400'}`}>We aim to respond to all privacy enquiries within 5 business days.</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all">
                    Contact DevZore <ArrowRight size={13}/>
                  </Link>
                  <Link to="/terms-and-conditions" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    Terms of Service
                  </Link>
                </div>

                <div className={`mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`text-[12px] font-semibold hover:text-purple-500 transition-colors ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                    ← Back to Home
                  </Link>
                  <p className={`text-[11px] ${d ? 'text-gray-700' : 'text-gray-300'}`}>
                    © 2026 DevZore · All Rights Reserved · Last Updated {lastUpdated}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;