import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FileText, CheckCircle, Shield, Lock,
  AlertTriangle, Globe, CreditCard, ArrowRight,
  Scale, Clock, Mail, Users
} from 'lucide-react';

const Terms = ({ isDark }) => {
  const d = isDark;
  const lastUpdated = 'April 24, 2026';

  const navItems = [
    { id: 'agreement',    label: 'Agreement',              icon: <FileText size={14}/> },
    { id: 'services',     label: 'Our Services',           icon: <Globe size={14}/> },
    { id: 'payment',      label: 'Payment & Pricing',      icon: <CreditCard size={14}/> },
    { id: 'ip',           label: 'Intellectual Property',  icon: <Lock size={14}/> },
    { id: 'liability',    label: 'Liability',              icon: <Scale size={14}/> },
    { id: 'termination',  label: 'Termination',            icon: <AlertTriangle size={14}/> },
    { id: 'conduct',      label: 'Acceptable Use',         icon: <Shield size={14}/> },
    { id: 'disputes',     label: 'Disputes',               icon: <Users size={14}/> },
    { id: 'contact',      label: 'Contact',                icon: <Mail size={14}/> },
  ];

  const sectionClass = `scroll-mt-28 py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`;
  const h2Class = `text-2xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`;
  const pClass = `text-[14px] leading-relaxed mb-4 ${d ? 'text-gray-400' : 'text-gray-600'}`;
  const cardClass = `p-5 rounded-xl border mb-3 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`;

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | DevZore Software Development Agency</title>
        <meta name="description" content="DevZore's terms and conditions for software development services. Covers service delivery, payment, intellectual property, liability and dispute resolution. Updated April 2026." />
        <link rel="canonical" href="https://devzore.com/terms-and-conditions" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms & Conditions | DevZore" />
        <meta property="og:description" content="DevZore's terms and conditions for software development services — payment, IP ownership, liability and dispute resolution." />
        <meta property="og:url" content="https://devzore.com/terms-and-conditions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo1.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms & Conditions | DevZore" />
        <meta name="twitter:description" content="Terms of service for DevZore software development agency." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms and Conditions — DevZore",
          "url": "https://devzore.com/terms-and-conditions",
          "description": "Terms and conditions for DevZore software development services.",
          "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://devzore.com" },
            { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": "https://devzore.com/terms-and-conditions" }
          ]}
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Breadcrumb */}
        <div className={`border-b pt-20 ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-[11px]">
            <Link to="/" className={`hover:text-purple-500 transition-colors ${d ? 'text-gray-500' : 'text-gray-400'}`}>Home</Link>
            <span className={d ? 'text-gray-700' : 'text-gray-300'}>/</span>
            <span className="text-purple-500 font-semibold">Terms & Conditions</span>
          </div>
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
                <div className={`mt-3 p-4 rounded-xl border ${d ? 'bg-amber-500/5 border-amber-500/15' : 'bg-amber-50 border-amber-200'}`}>
                  <p className={`text-[11px] font-semibold ${d ? 'text-amber-400' : 'text-amber-700'}`}>
                    By using devzore.com or engaging our services, you agree to these terms.
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">

              {/* Header */}
              <div className="mb-12">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                  <FileText size={11}/> Terms & Conditions
                </div>
                <h1 className={`text-4xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Terms and Conditions
                </h1>
                <p className={`text-base leading-relaxed max-w-2xl ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  These terms govern your use of devzore.com and any software development services
                  provided by DevZore. Please read them carefully before engaging our services.
                  By contacting us or using our website, you agree to be bound by these terms.
                  Last updated: <strong>{lastUpdated}</strong>.
                </p>
                <div className={`mt-5 p-4 rounded-xl border ${d ? 'bg-amber-500/5 border-amber-500/15' : 'bg-amber-50 border-amber-200'}`}>
                  <p className={`text-[13px] font-semibold ${d ? 'text-amber-400' : 'text-amber-700'}`}>
                    ⚠️ If you have any questions about these terms before engaging our services, please contact us at hellodevzore@gmail.com before proceeding.
                  </p>
                </div>
              </div>

              {/* 1. Agreement */}
              <section id="agreement" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}><FileText size={15}/></div>
                  <h2 className={h2Class}>1. Agreement to Terms</h2>
                </div>
                <p className={pClass}>These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client") and DevZore ("Company", "we", "us"), a software development agency operated by Muhammad Shoukat, based in Islamabad, Pakistan.</p>
                <p className={pClass}>By accessing devzore.com, submitting a contact form, engaging DevZore for any service or entering into a project agreement, you acknowledge that you have read, understood and agree to be bound by these Terms.</p>
                <p className={pClass}>These Terms apply to all visitors, clients and anyone who uses or accesses our services. Specific project agreements may supersede these Terms where there is a direct conflict.</p>
                <div className={cardClass}>
                  <p className={`text-[13px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>Definitions</p>
                  <ul className={`text-[13px] space-y-1 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li>• <strong className={d ? 'text-gray-200' : 'text-gray-800'}>"Services"</strong> — web development, mobile app development, SaaS development, UI/UX design, MVP development and any related software services</li>
                    <li>• <strong className={d ? 'text-gray-200' : 'text-gray-800'}>"Project"</strong> — a specific engagement agreed between Client and DevZore with defined scope and deliverables</li>
                    <li>• <strong className={d ? 'text-gray-200' : 'text-gray-800'}>"Deliverables"</strong> — source code, design files, documentation and other outputs produced under a Project</li>
                    <li>• <strong className={d ? 'text-gray-200' : 'text-gray-800'}>"Proposal"</strong> — a written fixed-price quotation issued by DevZore for a specific Project scope</li>
                  </ul>
                </div>
              </section>

              {/* 2. Services */}
              <section id="services" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}><Globe size={15}/></div>
                  <h2 className={h2Class}>2. Our Services</h2>
                </div>
                <p className={pClass}>DevZore provides custom software development services including web development, mobile app development, MERN stack development, SaaS product development, e-commerce development, UI/UX design, startup MVP development, backend and API development and website maintenance and support.</p>

                <div className={cardClass}>
                  <p className={`text-[13px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>Service Delivery Standards</p>
                  <ul className={`text-[13px] space-y-1 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li>• All services are delivered based on a written Proposal accepted by the Client</li>
                    <li>• We reserve the right to decline any project at our sole discretion</li>
                    <li>• Services are delivered remotely — in-person meetings are by arrangement only</li>
                    <li>• Timelines are estimates based on agreed scope; changes to scope may extend timelines</li>
                    <li>• We use industry-standard tools, frameworks and best practices in all deliveries</li>
                  </ul>
                </div>

                <div className={cardClass}>
                  <p className={`text-[13px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>Client Responsibilities</p>
                  <ul className={`text-[13px] space-y-1 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li>• Providing accurate and complete project requirements and feedback</li>
                    <li>• Responding to queries and review requests within agreed timeframes</li>
                    <li>• Providing access to necessary third-party accounts, APIs and assets</li>
                    <li>• Reviewing and approving or rejecting deliverables within 7 business days</li>
                    <li>• Making payments according to the agreed milestone schedule</li>
                  </ul>
                </div>

                <p className={pClass}>Delays caused by late client feedback, unavailability of required access or scope changes will not be counted against DevZore's delivery timeline.</p>
              </section>

              {/* 3. Payment */}
              <section id="payment" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}><CreditCard size={15}/></div>
                  <h2 className={h2Class}>3. Payment and Pricing</h2>
                </div>
                <p className={pClass}>All pricing is agreed in writing via a Proposal before work commences. Verbal pricing discussions are non-binding until confirmed in writing.</p>

                {[
                  { title: 'Fixed-Price Projects', desc: 'Most projects are priced at a fixed fee for a defined scope. Fixed prices are binding upon acceptance of the written Proposal. Changes to scope after acceptance may result in additional charges, which will be agreed in writing before implementation.' },
                  { title: 'Payment Schedule', desc: 'Projects are typically structured with milestone-based payments: a deposit of 30–50% before work commences, milestone payments tied to defined deliverables and a final payment upon project completion before handover of final deliverables.' },
                  { title: 'Monthly Retainers', desc: 'Maintenance and support plans are billed monthly in advance. The first month is due before service commencement. Retainer services are month-to-month and may be cancelled with 30 days written notice.' },
                  { title: 'Late Payment', desc: 'Payments not received within 14 days of the invoice date may result in a suspension of work until payment is received. DevZore reserves the right to charge interest of 1.5% per month on overdue balances after 30 days.' },
                  { title: 'Refund Policy', desc: 'Deposits are non-refundable after work has commenced. Milestone payments for completed and approved deliverables are non-refundable. Where DevZore fails to deliver agreed scope, a proportional refund will be provided at our discretion.' },
                ].map((item, i) => (
                  <div key={i} className={cardClass}>
                    <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                  </div>
                ))}

                <p className={pClass}>All prices are in USD unless otherwise agreed. Bank transfer, Wise, PayPal and cryptocurrency payments may be accepted by arrangement. DevZore is not responsible for bank transfer fees charged by third-party institutions.</p>
              </section>

              {/* 4. Intellectual Property */}
              <section id="ip" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}><Lock size={15}/></div>
                  <h2 className={h2Class}>4. Intellectual Property</h2>
                </div>

                <div className={`p-5 rounded-xl border mb-4 ${d ? 'bg-green-500/5 border-green-500/15' : 'bg-green-50 border-green-200'}`}>
                  <p className={`text-[13px] font-bold mb-1 ${d ? 'text-green-300' : 'text-green-800'}`}>✅ You Own Your Code — This Is Our Standard Policy</p>
                  <p className={`text-[13px] ${d ? 'text-green-400' : 'text-green-700'}`}>Upon receipt of full payment for a project, the Client receives full ownership of all custom code, design files and deliverables created specifically for that project. We do not retain licensing rights over custom-built work.</p>
                </div>

                {[
                  { title: 'Client Ownership', desc: 'All custom source code, design assets, documentation and deliverables created exclusively for your project become your property upon full payment. Code is transferred to your GitHub organisation and infrastructure to your cloud accounts.' },
                  { title: 'Third-Party Components', desc: 'Open-source libraries, frameworks (React, Node.js, etc.), npm packages and third-party tools used in your project remain subject to their own licences (typically MIT, Apache 2.0 or similar open-source licences). These licences generally permit commercial use.' },
                  { title: 'DevZore Portfolio Rights', desc: 'Unless explicitly requested otherwise in writing, DevZore reserves the right to list your project name in our portfolio and describe the type of work completed. We will never share your source code, proprietary data or confidential business information publicly.' },
                  { title: 'Pre-existing IP', desc: 'Any code, tools, frameworks or methodologies developed by DevZore prior to your project remain the property of DevZore. Where such components are incorporated into your project, a non-exclusive, perpetual licence is granted for use within your project.' },
                  { title: 'Client Content', desc: 'Any content, branding, data or materials provided by the Client for use in the project remain the property of the Client. DevZore accepts no responsibility for content provided by the Client that infringes third-party rights.' },
                ].map((item, i) => (
                  <div key={i} className={cardClass}>
                    <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                  </div>
                ))}
              </section>

              {/* 5. Liability */}
              <section id="liability" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}><Scale size={15}/></div>
                  <h2 className={h2Class}>5. Limitation of Liability</h2>
                </div>
                <p className={pClass}>DevZore provides all services with reasonable care and professional skill. However, the following limitations apply.</p>

                {[
                  { title: 'Maximum Liability', desc: 'DevZore\'s total liability for any claim arising from a project shall not exceed the total fees paid by the Client for that specific project in the 12 months preceding the claim.' },
                  { title: 'Excluded Losses', desc: 'DevZore shall not be liable for indirect, consequential, special or punitive damages, including but not limited to loss of revenue, loss of profits, loss of business, loss of data or loss of goodwill, even if advised of the possibility of such damages.' },
                  { title: 'No Guarantees on Business Outcomes', desc: 'DevZore guarantees the technical delivery of agreed deliverables. We make no guarantees regarding business outcomes, user acquisition, revenue generated, conversion rates or any other commercial result of using the software we build.' },
                  { title: 'Third-Party Service Failures', desc: 'DevZore is not responsible for failures, outages, pricing changes or service terminations by third-party services including but not limited to AWS, Vercel, Stripe, MongoDB Atlas, Twilio, SendGrid or any other infrastructure or API provider used within your project.' },
                  { title: 'Force Majeure', desc: 'DevZore shall not be liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including natural disasters, internet failures, governmental actions, pandemics or other force majeure events.' },
                ].map((item, i) => (
                  <div key={i} className={cardClass}>
                    <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                  </div>
                ))}

                <p className={pClass}>Some jurisdictions do not allow limitation of certain warranties or liabilities. In such cases, the above limitations apply to the maximum extent permitted by applicable law.</p>
              </section>

              {/* 6. Termination */}
              <section id="termination" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600'}`}><AlertTriangle size={15}/></div>
                  <h2 className={h2Class}>6. Termination</h2>
                </div>
                <p className={pClass}>Either party may terminate a project engagement under the following conditions.</p>

                {[
                  { title: 'Termination by Client', desc: 'The Client may terminate a project at any time by providing written notice. In such cases, the Client is liable for payment of all work completed to the date of termination, calculated on a pro-rated basis against the total project fee. The deposit is non-refundable.' },
                  { title: 'Termination by DevZore', desc: 'DevZore may terminate a project if: the Client fails to make a scheduled payment within 21 days of the due date; the Client behaves abusively or unreasonably toward our team; the project scope changes so substantially as to require a renegotiation; or the Client requests deliverables that violate applicable law or our ethical standards.' },
                  { title: 'Effect of Termination', desc: 'Upon termination, DevZore will deliver all completed work products to the Client (subject to payment of amounts owed). Ownership of partially completed deliverables is retained by DevZore until all outstanding payments are settled.' },
                  { title: 'Monthly Retainer Cancellation', desc: 'Either party may cancel a monthly maintenance retainer with 30 days written notice. Services will continue for the notice period. No refund is provided for the notice period month if payment has already been processed.' },
                ].map((item, i) => (
                  <div key={i} className={cardClass}>
                    <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                  </div>
                ))}
              </section>

              {/* 7. Acceptable Use */}
              <section id="conduct" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-600'}`}><Shield size={15}/></div>
                  <h2 className={h2Class}>7. Acceptable Use of Services</h2>
                </div>
                <p className={pClass}>DevZore reserves the right to decline any project or terminate any engagement that involves the following. This list is not exhaustive.</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Products designed to deceive, scam or defraud users',
                    'Malware, spyware, ransomware or any malicious software',
                    'Illegal products or services under applicable law',
                    'Content that infringes third-party intellectual property rights',
                    'Gambling platforms in jurisdictions where prohibited',
                    'Products designed to facilitate harassment or abuse',
                    'Cryptocurrency fraud, rug pulls or Ponzi schemes',
                    'Platforms facilitating human trafficking or exploitation',
                    'Weapons manufacturing or illegal arms trade',
                    'Any product designed to cause harm to individuals or groups',
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-2.5 p-3 rounded-lg border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <AlertTriangle size={12} className="text-red-500 flex-shrink-0 mt-0.5"/>
                      <p className={`text-[12px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item}</p>
                    </div>
                  ))}
                </div>

                <p className={`text-[13px] mt-4 ${d ? 'text-gray-500' : 'text-gray-500'}`}>We also reserve the right to decline projects that conflict with our values, even if they do not appear on the above list.</p>
              </section>

              {/* 8. Disputes */}
              <section id="disputes" className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}><Users size={15}/></div>
                  <h2 className={h2Class}>8. Dispute Resolution & Governing Law</h2>
                </div>

                {[
                  { title: 'Informal Resolution First', desc: 'In the event of any dispute, both parties agree to first attempt to resolve the matter through good-faith negotiation for a minimum of 30 days before pursuing any formal action. Most disputes can and should be resolved through direct communication.' },
                  { title: 'Mediation', desc: 'If informal resolution fails, either party may request non-binding mediation by a mutually agreed mediator before pursuing legal action. The cost of mediation will be shared equally between both parties.' },
                  { title: 'Governing Law', desc: 'These Terms are governed by the laws of the Islamic Republic of Pakistan. For international clients, any dispute that cannot be resolved informally may be referred to arbitration under internationally recognised arbitration rules agreed by both parties.' },
                  { title: 'Jurisdiction', desc: 'The parties agree that the courts of Islamabad, Pakistan shall have non-exclusive jurisdiction for any disputes arising under these Terms, without prejudice to the rights of international clients to seek relief in their local jurisdiction.' },
                  { title: 'Modifications to Terms', desc: 'DevZore reserves the right to update these Terms at any time. Updated terms will be posted on devzore.com with a revised date. Continued engagement with our services after an update constitutes acceptance of the revised Terms.' },
                ].map((item, i) => (
                  <div key={i} className={cardClass}>
                    <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                  </div>
                ))}
              </section>

              {/* 9. Contact */}
              <section id="contact" className="pt-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${d ? 'bg-pink-500/10 text-pink-400' : 'bg-pink-50 text-pink-600'}`}><Mail size={15}/></div>
                  <h2 className={h2Class}>9. Contact Us</h2>
                </div>
                <p className={pClass}>If you have any questions, concerns or requests regarding these Terms and Conditions, please contact us:</p>

                <div className={`p-6 rounded-2xl border mb-6 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                  <p className={`text-[14px] font-bold mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>DevZore Legal Contact</p>
                  <div className="space-y-2">
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      <strong className={d ? 'text-gray-300' : 'text-gray-800'}>Business Name:</strong> DevZore (operated by Muhammad Shoukat)
                    </p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      <strong className={d ? 'text-gray-300' : 'text-gray-800'}>Email:</strong>{' '}
                      <a href="mailto:hellodevzore@gmail.com" className="text-purple-500 hover:underline">hellodevzore@gmail.com</a>
                    </p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      <strong className={d ? 'text-gray-300' : 'text-gray-800'}>WhatsApp:</strong>{' '}
                      <a href="https://wa.me/923348004300" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">+92 334 8004300</a>
                    </p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      <strong className={d ? 'text-gray-300' : 'text-gray-800'}>Location:</strong> Islamabad, Pakistan
                    </p>
                    <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                      <strong className={d ? 'text-gray-300' : 'text-gray-800'}>Response time:</strong> Within 5 business days
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]">
                    Contact DevZore <ArrowRight size={13}/>
                  </Link>
                  <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    Privacy Policy
                  </Link>
                </div>

                <div className={`p-5 rounded-xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                  <p className={`text-[12px] font-bold mb-1 ${d ? 'text-gray-400' : 'text-gray-600'}`}>Entire Agreement</p>
                  <p className={`text-[12px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>These Terms, together with any written Project Proposal accepted by the Client, constitute the entire agreement between the parties with respect to the subject matter hereof and supersede all prior discussions, understandings and agreements. No oral agreement or representation shall be binding unless confirmed in writing.</p>
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

export default Terms;