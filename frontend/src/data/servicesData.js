// src/data/servicesData.js
import { assets } from '../assets/assets'; // Aapki assets mapping file ke path ke hisab se update karlein

export const servicesData = {
    ECommerce: {
        title: "Next-Gen",
        highlight: "E-Commerce",
        subtitle: "Mobile-first digital storefronts engineered for maximum global conversion rates and seamless sales.",
        gallery: [
            { img: assets.ecom2, label: "Premium Fashion Hub", alt: "DevZore luxury e-commerce storefront layout optimized for fashion brands and digital retail outlets in Dubai UAE.", geo: "Best e-commerce website developers in Pakistan offering custom multi-vendor shopping carts and automated global payment gateway setups." },
            { img: assets.ecommerce2, label: "B2B Mega Marketplace", alt: "Scalable bulk inventory wholesale digital marketplace engine built for suppliers in Faisalabad and Lahore.", geo: "Affordable online shopping store creation and corporate bulk e-commerce portal development services by DevZore studio." },
            { img: assets.ecommrec_3, label: "Gadget & Tech Storefront", alt: "Modern electronics shopping ecosystem integrated with dynamic variations filtering and fast checkout flows.", geo: "Custom headless MERN stack e-commerce development company in Islamabad executing lightning fast next.js web stores." },
            { img: assets.ecommer_home_decore, label: "Luxury Interior Showroom", alt: "Minimalist home decor digital store configuration showcasing highly interactive catalog cards and automated billing panels.", geo: "Premium digital commerce platform engineers in Pakistan building reliable web architectures for international retail clients." }
        ]
    },
    WebDevelopment: {
        title: "Custom Web",
        highlight: "Development",
        subtitle: "High-performance websites tailored for corporate scaling and modern business growth.",
        gallery: [
            { img: assets.webdevelopment2, label: "Corporate Cloud Portal", alt: "DevZore custom corporate web application engineered by top full-stack web developers in Islamabad Pakistan.", geo: "Professional website development company in Islamabad Rawalpindi offering custom corporate web solutions and business portals." },
            { img: assets.web_Real_Estate, label: "Real Estate Directory Engine", alt: "High-performance real estate portal and web app developed for agencies in Dubai UAE and Qatar.", geo: "Custom database-driven web development services for international real estate and property enterprise solutions." },
            { img: assets.web_Automated, label: "Automated Supply Core", alt: "Enterprise wholesale supply network portal engineered with React and dynamic dashboard flows.", geo: "Top corporate software developers in Pakistan creating scalable business web apps." },
            { img: assets.web_Logistics, label: "Logistics Sync Interface", alt: "Fleet management tracking app layout built with MERN stack backend integration assets.", geo: "Custom enterprise software systems and custom API development infrastructure." }
        ]
    },
    MobileApp: {
        title: "Cross-Platform",
        highlight: "Mobile Apps",
        subtitle: "Native and web mobile experiences for iOS and Android optimized for high engagement.",
        gallery: [
            { img: assets.mobile_Delivery_App, label: "On-Demand Delivery App", alt: "Responsive React Native mobile application interface developed for startups in Karachi Pakistan.", geo: "Top mobile app development agency in Karachi Lahore specializing in high-performance hybrid iOS and Android apps." },
            {img: assets.mobile_Invoicing, label: "B2B Cloud Invoicing Ledger",alt: "DevZore enterprise automated billing system and dynamic invoicing dashboard built with MERN stack.", geo: "Top-rated full-stack web developer in Islamabad Pakistan designing secure custom database-driven accounting portals."},
            { img: assets.mobile_Healthcare, label: "Healthcare Telemed App", alt: "Cross-platform medical booking and live chat streaming native layout built by DevZore.", geo: "Mobile application interface developers and native responsive app consultants in Islamabad." },
            { img: assets.mobile_Fitness, label: "Fitness Tracker Portal", alt: "Smart fitness data metrics engine app screen optimized with custom state charts.", geo: "High-end React Native development services for commercial and enterprise clients." }
        ]
    },
    BackendApi: {
        title: "Secure Backend",
        highlight: "& APIs",
        subtitle: "Robust server architectures, high-availability databases, and seamless integrations.",
        gallery: [
            { img: assets.backend_microservices, label: "Microservices Router Gateway", alt: "Secure Node.js and Express API gateway architecture developed by expert backend engineers in Islamabad.", geo: "Expert node js backend development agency in Islamabad Pakistan creating fast RESTful APIs and secure server-side databases." },
            { img: assets.backend_automated, label: "Automated Webhooks System", alt: "Centralized third-party webhook sync system optimized for real-time secure enterprise data pipelines.", geo: "Scalable backend architectural engineers and custom database administration services in Pakistan." },
            { img: assets.backend_graphql, label: "GraphQL Data Aggregator", alt: "Complex unified schema layer engineered for multi-tenant server requests and optimized query logs.", geo: "Custom backend development services for enterprise data handling and secure cloud scaling." },
            { img: assets.backend_redis, label: "Redis Caching Pipeline", alt: "High performance database response caching engine built to process concurrent background jobs.", geo: "Database structural consultants specializing in MongoDB scaling, PostgreSQL, and high security APIs." }
        ]
    },
    MernStackDevelopment: {
        title: "Full-Stack",
        highlight: "MERN Development",
        subtitle: "End-to-end dynamic web application systems powered fully by JavaScript architectures.",
        gallery: [
            { img: assets.mern_matrix1, label: "Live Collaboration Matrix", alt: "Professional full-stack MERN stack application interface deployed by DevZore developers in Pakistan.", geo: "Hire professional MERN stack developers in Pakistan for database-driven single page applications (SPAs)." },
            { img: assets.mern_inventory, label: "Corporate Inventory Core", alt: "Custom MongoDB and Node.js business tracking software solution for international remote enterprises.", geo: "Top-rated MongoDB Express React Node js full stack software house in Islamabad Rawalpindi." },
            { img: assets.mern_saas, label: "Real-time SaaS Telemetry", alt: "Single page dashboard displaying live websocket updates and encrypted server logs built with Mongo.", geo: "Full stack MERN application development specialists implementing high security web engines." },
            { img: assets.mern_B2B_hr, label: "B2B HR Management Portal", alt: "Complete user permission management control panel built with Express, Node and React frontends.", geo: "Hire full-stack engineering team for customized web software prototypes in Pakistan." }
        ]
    },
    SaaSProductDevelopment: {
        title: "SaaS Product",
        highlight: "Engineering",
        subtitle: "Cloud-native, multi-tenant software systems built for international business distribution.",
        gallery: [
            { img: assets.saas_hr_management, label: "HR Cloud Management Engine", alt: "Multi-tenant B2B SaaS cloud subscription web app dashboard designed by DevZore.", geo: "SaaS product development agency in Pakistan building cloud-based software architectures and automated Stripe billing portals." },
            { img: assets.saas_marketing, label: "Marketing Analytics Board", alt: "Advanced user tracking real-time data analytical SaaS product layout for international digital agencies.", geo: "Custom software as a service platform engineering and multi-tenant database structuring services." },
            { img: assets.saas_subscription, label: "Subscription Billing Hub", alt: "SaaS client checkout flow mapping multi tier usage plans and metered invoicing tracking systems.", geo: "Multi-tenant cloud platform development experts creating subscription architectures and custom backends." },
            { img: assets.ssaas_project, label: "Project Fleet Analytics", alt: "Centralized SaaS workspace dashboard displaying team efficiency matrices and cloud file repositories.", geo: "SaaS MVP rapid launch configuration and software engineering retainer packages." }
        ]
    },
    ReactDevelopment: {
        title: "Interactive",
        highlight: "React & Next.js",
        subtitle: "Blazing fast single-page architectures with pixel-perfect dynamic interactive modules.",
        gallery: [
            { img: assets.reaact_crypto_live, label: "Crypto Live Pricing Stream", alt: "Highly interactive React.js front-end application displaying state-managed websocket tickers.", geo: "Expert React js front end developers in Islamabad Pakistan specializing in Next.js Tailwind CSS rapid UI rendering." },
            { img: assets.react_creative_media, label: "Creative Media Hub UI", alt: "Sleek component-driven frontend asset architecture built for international streaming web portals.", geo: "Custom React web application UI development and single page application performance optimization." },
            { img: assets.react_interactive_canvas, label: "Interactive Canvas Modeler", alt: "Advanced browser-based state management design board rendering optimized visual nodes cleanly.", geo: "Next.js performance optimization company in Pakistan achieving 100 percent core web vitals rankings." },
            { img: assets.react_dynamic_form, label: "Dynamic Form Architecture", alt: "Complex schema validation customer registration interface loaded with instant reactive transitions.", geo: "Front end software engineering studio delivering accessible rich web responsive designs." }
        ]
    },
    UiUxDesign: {
        title: "UI/UX & Modern",
        highlight: "Product Design",
        subtitle: "User-centered design systems, high-fidelity prototypes, and sleek interfaces.",
        gallery: [
            { img: assets.uiux_interface, label: "Neo-Brutalist Trading Interface", alt: "Premium cyberpunk creative UI/UX Figma layout crafted by visual design experts at DevZore.", geo: "Top UI UX design services in Islamabad Karachi Lahore creating wireframes responsive user interfaces and modern mobile app wireframing." },
            { img: assets.uiux_e_learning, label: "E-Learning Interaction Flow", alt: "User journey map and high-fidelity prototype dashboard designed for automated digital learning networks.", geo: "Professional Figma mockup creators and brand identity web design studio in Pakistan." },
            { img: assets.uiux_workspace, label: "Immersive Workspace Layout", alt: "Dark theme glassmorphism interface style crafted with strict mathematical bounding blocks.", geo: "Mobile interface design systems and responsive dashboard component UI blueprints creators." },
            { img: assets.uiux_automotive, label: "Automotive Dashboard Screen", alt: "Futuristic digital controller UI mockup mapping real-time speed vectors and controls.", geo: "Creative tech vector design layouts and comprehensive SaaS product branding packages." }
        ]
    },
    Maintenance: {
        title: "Site Maintenance",
        highlight: "& Reliability",
        subtitle: "Continuous optimization, performance tuning, security monitoring, and regular backups.",
        gallery: [
            { img: assets.maintenance_server_health, label: "Server Health Monitor", alt: "Automated performance tracking and system health report panel managed by technical specialists.", geo: "Affordable website maintenance services in Islamabad Pakistan offering bug fixes speed optimization and SEO health checks." },
            { img: assets.maintenance_disaster, label: "Disaster Recovery Engine", alt: "Cloud secure continuous data backup logs and security patch execution screen.", geo: "Website security monitoring full-stack web support packages and malware removal services in Pakistan." },
            { img: assets.maintenance_legacy_code, label: "Legacy Code Optimization", alt: "Refactoring database schemas and upgrading dynamic server dependencies seamlessly.", geo: "Long term software security retainer packages and full-stack web support application tuneups." },
            { img: assets.maintenance_SEO_site, label: "SEO Site-Health Analytics", alt: "Monitoring core vitals indexing logs and structured schema deployments efficiently.", geo: "Technical search console management and speed indexing optimization protocols for web portals." }
        ]
    },
    StartupMVP: {
        title: "Rapid Startup",
        highlight: "MVP Launch",
        subtitle: "Transforming software concepts into functional, pitch-ready products in record time.",
        gallery: [
            { img: assets.startup_micro_saas, label: "Micro-SaaS Booking System", alt: "Minimum Viable Product (MVP) web solution developed for rapid user testing and funding pitches.", geo: "Startup MVP development company in Pakistan offering rapid agile software prototyping and low-code full-stack versions." },
            { img: assets.startup_proptech, label: "PropTech MVP Engine", alt: "Fast-tracked initial validation platform built with core user features for seed-funding presentations.", geo: "Hire developers to build software MVP prototypes in Islamabad Rawalpindi for startup pitch validation." },
            { img: assets.startup_edtech, label: "EdTech Micro Platform", alt: "Functional lightweight version deployed swiftly for client demographic feedback loops.", geo: "Agile product lifecycle validation and minimum viable software architecture deployment strategies." },
            { img: assets.startup_agile_task_matrix, label: "Agile Task Matrix", alt: "Sleek simplified project pipeline utility created to pitch product viability early.", geo: "Fast scalable software house engineering pitch-ready MVPs for international validation markets." }
        ]
    },
    AllServices: {
        title: "DevZore Complete",
        highlight: "Tech Suite",
        subtitle: "End-to-end full-stack software development engineering and cloud systems for worldwide scale.",
        gallery: [
            { img: assets.ecom2, label: "Omni-Channel SaaS Web", alt: "Unified digital transformation ecosystem presenting Web Mobile and API solutions engineered by DevZore.", geo: "Best full stack software development agency in Pakistan delivering high-end custom mobile apps SaaS and MERN stack systems." },
            { img: assets.ecommerce2, label: "Enterprise System Hub", alt: "Cross integrated management system dashboard handling servers mobile clients and analytics loops.", geo: "Comprehensive technology transformation suites, premium full-stack software engineers in Islamabad." },
            { img: assets.ecommrec_3, label: "Global Cloud Invoicing", alt: "Scalable decentralized ledger managing multiple company databases instantly on AWS setups.", geo: "Custom web engine builds, dynamic microservices architecture, and technical SEO optimizations." },
            { img: assets.ecommer_home_decore, label: "Unified Dashboard Matrix", alt: "Multi app central command center monitoring server loads transactional rates and interface states.", geo: "Premium customized software agency solutions across diverse digital web applications." }
        ]
    }
};