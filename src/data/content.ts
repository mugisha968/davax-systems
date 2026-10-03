import { ServiceItem, ProcessStepItem, SolutionCategory, ProjectItem, WhyPoint, TechItem } from '../types';

export const COMPANY_INFO = {
  name: 'Davax Systems',
  tagline: 'Websites. Systems. Digital Solutions.',
  headline: 'Digital Systems Built for Real Businesses.',
  supportingText:
    'We design and build websites, web applications, business systems, and digital tools that solve real problems and make businesses more effective.',
  coreMessage:
    'We build reliable digital products that help businesses work smarter, serve customers better, and grow.',
  statement:
    'From a simple website to a complete business system, we build technology around the way your business actually works.',
  builtFor: ['Startups', 'Small Businesses', 'Organizations', 'Growing Companies'],
  contactPlaceholders: {
    email: 'contact@davaxsystems.com',
    emailNote: 'Official inquiries inbox',
    phone: '+1 (555) 019-2834',
    phoneNote: 'Direct / WhatsApp business channel',
    location: 'Available Globally · Remote-First',
    locationNote: 'Headquartered for distributed client delivery',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    tagline: 'Fast, search-optimized web platforms built to convert',
    description:
      'Modern, fast, responsive websites designed to establish credibility and convert visitors into customers.',
    capabilities: [
      'High-performance responsive UI',
      'SEO & metadata architecture',
      'Lead capture & booking funnels',
      'Content management readiness',
    ],
    icon: 'Globe',
  },
  {
    id: 'custom-business-systems',
    number: '02',
    title: 'Custom Business Systems',
    tagline: 'Tailored operational infrastructure for daily workflows',
    description:
      'Internal systems designed around real business workflows, including management, finance, operations, and reporting.',
    capabilities: [
      'Role-based access control (RBAC)',
      'Operational workflow modeling',
      'Secure multi-tier databases',
      'Audit logging & compliance records',
    ],
    icon: 'Layers',
  },
  {
    id: 'web-applications',
    number: '03',
    title: 'Web Applications',
    tagline: 'High-availability interactive products for clients & teams',
    description:
      'Interactive web applications built for customers, employees, communities, and organizations.',
    capabilities: [
      'Responsive full-stack architecture',
      'Real-time data synchronization',
      'Secure customer/member portals',
      'Progressive web capabilities',
    ],
    icon: 'AppWindow',
  },
  {
    id: 'dashboards-admin',
    number: '04',
    title: 'Dashboards & Admin Systems',
    tagline: 'Actionable visibility over complex operations',
    description:
      'Clear dashboards that turn business data into useful information and actionable insights.',
    capabilities: [
      'Real-time operational KPI trackers',
      'Custom filtering & report exports',
      'Executive performance summaries',
      'Granular data permissioning',
    ],
    icon: 'BarChart3',
  },
  {
    id: 'automation-integrations',
    number: '05',
    title: 'Automation & Integrations',
    tagline: 'Seamless connection between disjointed business tools',
    description:
      'Connect tools and automate repetitive workflows so businesses spend less time doing manual work.',
    capabilities: [
      'Third-party REST API orchestration',
      'Automated invoice & document generation',
      'Event-triggered webhooks & alerts',
      'Manual task elimination pipelines',
    ],
    icon: 'Zap',
  },
  {
    id: 'ai-powered-solutions',
    number: '06',
    title: 'AI-Powered Solutions',
    tagline: 'Pragmatic intelligence focused on concrete business value',
    description:
      'Practical AI integrations and intelligent features designed around actual business needs.',
    capabilities: [
      'Document summarization & parsing',
      'Intelligent search & knowledge retrieval',
      'Automated customer support routing',
      'Context-aware workflow assistance',
    ],
    icon: 'Cpu',
  },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Discover',
    headline: 'Deep operational discovery',
    description: 'Understand the business, users, problems, and requirements.',
    focusArea: 'Requirement gathering & scoping',
    deliverables: ['Workflow mapping', 'User pain points analysis', 'Technical feasibility plan'],
  },
  {
    number: '02',
    title: 'Design',
    headline: 'Architecture & experience mapping',
    description: 'Design the user experience, architecture, and visual interface.',
    focusArea: 'UX/UI & System Architecture',
    deliverables: ['Interactive wireframes', 'Data schema blueprints', 'Design system & tokens'],
  },
  {
    number: '03',
    title: 'Build',
    headline: 'Production engineering',
    description: 'Develop the system using modern, maintainable technology.',
    focusArea: 'Full-stack development',
    deliverables: ['Modular component code', 'Type-safe API routes', 'Clean relational schemas'],
  },
  {
    number: '04',
    title: 'Test',
    headline: 'Rigorous quality assurance',
    description: 'Test functionality, security, responsiveness, and reliability.',
    focusArea: 'Security & edge-case validation',
    deliverables: ['Cross-device responsiveness', 'Security & permission audit', 'Performance benchmarking'],
  },
  {
    number: '05',
    title: 'Launch',
    headline: 'Zero-downtime deployment',
    description: 'Deploy the product and make it available to real users.',
    focusArea: 'Cloud provisioning & rollout',
    deliverables: ['Production environment setup', 'Domain & SSL routing', 'Team onboarding walkthrough'],
  },
  {
    number: '06',
    title: 'Improve',
    headline: 'Continuous refinement',
    description: 'Continue improving the system based on real-world usage.',
    focusArea: 'Telemetry & iteration',
    deliverables: ['Real-world usage analysis', 'Feature iteration backlog', 'System scalability updates'],
  },
];

export const SOLUTIONS: SolutionCategory[] = [
  {
    id: 'customer-management',
    title: 'Customer Management',
    shortDesc: 'CRMs, lead pipelines & client portals built for your exact sales cycle.',
    description:
      'Stop forcing your team into rigid third-party CRMs. We build custom client pipelines, communication logs, and customer self-service portals aligned with your team’s daily communication flow.',
    coreModules: ['Client Account Portals', 'Interaction History & Notes', 'Pipeline Deal Tracking', 'Direct Notification Dispatch'],
    solvedProblems: ['Scattered customer notes across spreadsheets', 'Slow response times to inbound inquiries', 'Lack of customer self-service visibility'],
    typicalBusiness: 'B2B Services, Consultancies, Agencies, Trade Firms',
    icon: 'Users',
  },
  {
    id: 'inventory-operations',
    title: 'Inventory & Operations',
    shortDesc: 'Stock tracking, procurement, asset lifecycle, and dispatch controls.',
    description:
      'Real-time operational systems that track physical assets, warehouse status, incoming orders, and fulfillment pipelines with zero spreadsheet ambiguity.',
    coreModules: ['Stock Level Telemetry', 'Barcode / QR Lookup Ready', 'Supplier Reorder Triggers', 'Multi-location Warehouse Sync'],
    solvedProblems: ['Stockouts and inventory discrepancies', 'Manual data re-entry between warehouse & sales', 'Lost asset records'],
    typicalBusiness: 'Distributors, Retailers, Equipment Rental, Light Manufacturing',
    icon: 'Boxes',
  },
  {
    id: 'finance-payments',
    title: 'Finance & Payments',
    shortDesc: 'Invoicing, billing automation, ledger records, and payment reconciliation.',
    description:
      'Secure, transparent financial systems engineered for reliable transaction records, recurring subscriptions, client invoicing, and structured audit logs.',
    coreModules: ['Invoice Generation & Tracking', 'Payment Gateway Integration', 'Payment Reconciliation Logs', 'Financial Summary Reports'],
    solvedProblems: ['Uncollected late invoices', 'Disorganized financial bookkeeping', 'Manual payment verification bottlenecks'],
    typicalBusiness: 'Professional Services, Subscription Platforms, Financial Collectives',
    icon: 'CreditCard',
  },
  {
    id: 'booking-appointments',
    title: 'Booking & Appointments',
    shortDesc: 'Calendar scheduling, staff availability, and automated confirmation reminders.',
    description:
      'Self-service booking portals that integrate with team calendars, enforce booking deposits, manage buffer times, and send automated client reminders.',
    coreModules: ['Smart Availability Engine', 'Automated SMS / Email Triggers', 'Deposit & Payment Capture', 'Staff Allocation Management'],
    solvedProblems: ['Double bookings and no-shows', 'Time wasted in back-and-forth scheduling emails', 'Manual reminder overhead'],
    typicalBusiness: 'Medical Practices, Salons, Consultancies, Rental Services',
    icon: 'Calendar',
  },
  {
    id: 'membership-community',
    title: 'Membership & Community Systems',
    shortDesc: 'Member directories, dues tracking, meeting governance, and group portals.',
    description:
      'Specialized platforms for associations, cooperatives, savings clubs, and professional bodies to govern memberships, track dues, and coordinate meetings.',
    coreModules: ['Member Profile Directory', 'Contribution & Dues Tracking', 'Meeting Attendance Logs', 'Member Self-Service Dashboard'],
    solvedProblems: ['Disorganized manual attendance lists', 'Lack of transparency in group contributions', 'Slow administrative reporting'],
    typicalBusiness: 'Savings Groups, Non-Profits, Trade Associations, Clubs',
    icon: 'Network',
  },
  {
    id: 'business-dashboards',
    title: 'Business Dashboards',
    shortDesc: 'Executive visibility, revenue metrics, and operational performance telemetry.',
    description:
      'Unified command consoles that aggregate data from multiple databases, APIs, and departments into clean, legible graphs and exportable reports.',
    coreModules: ['Multi-Source Data Aggregation', 'Interactive Filtering & Range Sorting', 'CSV & PDF Report Generation', 'Real-Time Operational Alerts'],
    solvedProblems: ['Blind decision-making without real-time numbers', 'Hours spent assembling monthly reports', 'Siloed department metrics'],
    typicalBusiness: 'Growing SMEs, Operations Managers, Executive Leadership',
    icon: 'LayoutDashboard',
  },
  {
    id: 'websites-online-presence',
    title: 'Websites & Online Presence',
    shortDesc: 'High-conversion web platforms that build credibility and drive commercial inquiries.',
    description:
      'Engineering-grade web presence built for sub-second speeds, flawless search engine visibility, high conversion rates, and seamless mobile accessibility.',
    coreModules: ['Responsive Modern Architecture', 'Search Engine Optimization (SEO)', 'Inbound Inquiry Conversion Funnels', 'Fast Global Edge Delivery'],
    solvedProblems: ['Outdated websites failing to win customer trust', 'Sluggish loading speeds hurting Google rankings', 'Cluttered mobile layouts'],
    typicalBusiness: 'Companies launching new ventures or upgrading outdated digital presence',
    icon: 'Monitor',
  },
  {
    id: 'custom-platforms',
    title: 'Custom Digital Platforms',
    shortDesc: 'End-to-end bespoke software engineered around your proprietary business model.',
    description:
      'When off-the-shelf software fails to match your proprietary operational advantage, we architect end-to-end custom web platforms from first principles.',
    coreModules: ['Bespoke Domain Data Modeling', 'Custom Multi-Tier Permissions', 'Tailored API Integrations', 'Scalable Cloud Architecture'],
    solvedProblems: ['Outgrowing inflexible SaaS packages', 'High recurring software subscription costs', 'Inability to scale proprietary processes'],
    typicalBusiness: 'Innovative Enterprises, Unique Business Models, Fast-Scaling Ventures',
    icon: 'Code2',
  },
];

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: 'ikimina-management-system',
    title: 'Ikimina Management System',
    category: 'Business Management System',
    tagline: 'Digital platform for informal savings groups, contributions & ledger governance',
    description:
      'A specialized digital platform designed for managing community savings groups (Ikimina), tracking members, meeting cycles, financial contributions, loan disbursements, and transparent ledger records.',
    challenges: [
      'Manual paper record-keeping prone to calculation discrepancies and physical loss',
      'Difficulty verifying individual member contributions during high-volume group meetings',
      'Lack of instant audit visibility for group administrators and contributing members',
    ],
    solutions: [
      'Structured digital ledger recording every member contribution with verifiable timestamp logs',
      'Automated loan calculation engine with transparent interest schedules and repayment tracking',
      'SMS / localized summary alerts informing members of upcoming meetings and balances',
    ],
    architecture: {
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      components: [
        'Member Registry & Role Permissions',
        'Meeting Session Ledger & Cash Reconciliation',
        'Loan Portfolio & Amortization Tracker',
        'Group Performance & Year-End Dividend Calculator',
      ],
    },
    metrics: [
      { label: 'Record Accuracy', value: '100%' },
      { label: 'Meeting Reconcile Time', value: '< 10 mins' },
      { label: 'Member Transparency', value: 'Real-Time' },
    ],
  },
  {
    id: 'business-website-platform',
    title: 'Business Website Platform',
    category: 'Web Development',
    tagline: 'High-performance commercial web presence engineered for maximum conversion',
    description:
      'A modern web presence designed for businesses that need a professional online identity, fast loading speeds, structured SEO metadata, and seamless lead conversion pathways.',
    challenges: [
      'Legacy website with 4+ second load times causing high bounce rates on mobile networks',
      'Unstructured content failing to communicate core technical competencies to prospective clients',
      'Zero lead qualification mechanism resulting in low-quality inquiries',
    ],
    solutions: [
      'Built with modern static-first architecture delivering sub-second load times globally',
      'Implemented clean typographic hierarchy and clear value-proposition structure',
      'Interactive project intake questionnaire that pre-qualifies client leads prior to contact',
    ],
    architecture: {
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Schema.org JSON-LD'],
      components: [
        'Responsive Dynamic Layout Engine',
        'Interactive Project Estimation Funnel',
        'Accessible Semantic SEO Structure',
        'Global CDN Edge Deployment',
      ],
    },
    metrics: [
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Initial Page Load', value: '0.6s' },
      { label: 'Lead Quality Improvement', value: '+65%' },
    ],
  },
  {
    id: 'custom-operations-dashboard',
    title: 'Custom Operations Dashboard',
    category: 'Business Software',
    tagline: 'Unified operational cockpit for business monitoring and dispatch management',
    description:
      'A centralized dashboard for managing business operations, team task distribution, client communications, and real-time operational status without software bloat.',
    challenges: [
      'Information scattered across five disparate third-party applications with no single source of truth',
      'Leadership spending hours each week compiling progress status from individual team members',
      'No operational warning triggers when service delivery timelines fell behind schedule',
    ],
    solutions: [
      'Centralized operational command interface aggregating key operational data into a single view',
      'Role-tailored interfaces allowing managers, operators, and staff to focus on relevant tasks',
      'Automated SLA monitoring with visual status indicators before deadlines are breached',
    ],
    architecture: {
      stack: ['React', 'TypeScript', 'Convex/REST', 'Tailwind CSS', 'Chart Engine'],
      components: [
        'Live Operations Pipeline View',
        'Staff Task Queue & Assignment Engine',
        'Real-time Metric Aggregation Service',
        'CSV/Audit Export Utility',
      ],
    },
    metrics: [
      { label: 'Hours Saved Weekly', value: '14+ hrs' },
      { label: 'System Visibility', value: '100% Unified' },
      { label: 'SLA Adherence', value: '99.4%' },
    ],
  },
];

export const WHY_DAVAX: WhyPoint[] = [
  {
    title: 'Built Around Your Workflow',
    description:
      'We understand the way your organization works before designing the system. Instead of asking you to alter how you run your business, we engineer software that fits your existing operations and eliminates friction.',
    bulletPoints: [
      'In-depth operational mapping before writing any code',
      'Interfaces tailored to your team’s specific terminology and hierarchy',
      'Zero unnecessary features or bloated subscription overhead',
    ],
  },
  {
    title: 'Practical Technology',
    description:
      'We choose technology based on the problem instead of using technology simply because it is popular. We select robust, proven, and maintainable stacks that ensure your system remains stable for years to come.',
    bulletPoints: [
      'Production-tested frameworks with active global ecosystems',
      'Avoidance of experimental tools that risk future abandonment',
      'Fast performance, low maintenance requirements, and zero vendor lock-in',
    ],
  },
  {
    title: 'Security Conscious',
    description:
      'Security, privacy, validation, authentication, and responsible data handling are considered throughout development, not bolted on as an afterthought before launch.',
    bulletPoints: [
      'Strict server-side validation and input sanitization',
      'Granular role-based permissions preventing unauthorized data exposure',
      'Encrypted credentials, HTTPS enforcement, and secure token management',
    ],
  },
  {
    title: 'Scalable Architecture',
    description:
      'Systems should be able to evolve as the business grows. We write clean, modular, and type-safe codebases with clear separations of concern so new capabilities can be added effortlessly.',
    bulletPoints: [
      'Decoupled frontend and backend architectures',
      'Database schemas designed with future indices and relations in mind',
      'Clean documentation and codebase organization for long-term stewardship',
    ],
  },
  {
    title: 'Clear Communication',
    description:
      'Clients should understand what is being built and why. We speak plainly, avoid technical obfuscation, share regular milestone progress, and ensure complete transparency at every stage.',
    bulletPoints: [
      'Plain-language milestone reviews and architecture explanations',
      'Direct communication without layers of non-technical intermediaries',
      'Transparent estimates, timeline commitments, and documented deliverables',
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    role: 'Component-based interactive user interfaces with optimal rendering lifecycle',
    badge: 'UI Framework',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    role: 'Strict static type safety across client interfaces and backend data contracts',
    badge: 'Type System',
  },
  {
    name: 'Vite',
    category: 'Frontend',
    role: 'Ultra-fast build tooling and optimized bundle compilation for instant page loads',
    badge: 'Build Tool',
  },
  {
    name: 'Node.js',
    category: 'Backend & Data',
    role: 'High-throughput asynchronous server runtime for backend services & APIs',
    badge: 'Runtime',
  },
  {
    name: 'Convex',
    category: 'Backend & Data',
    role: 'Real-time database, backend cloud functions, and end-to-end type safety',
    badge: 'Backend Platform',
  },
  {
    name: 'PostgreSQL',
    category: 'Backend & Data',
    role: 'Enterprise-grade relational database for structured business records and financial audits',
    badge: 'Relational DB',
  },
  {
    name: 'REST APIs',
    category: 'APIs & Cloud',
    role: 'Standards-compliant, secure endpoints for seamless third-party tool integration',
    badge: 'Architecture',
  },
  {
    name: 'Cloud Infrastructure',
    category: 'APIs & Cloud',
    role: 'Resilient containerized hosting, edge CDNs, and automated SSL orchestration',
    badge: 'Deployment',
  },
  {
    name: 'Modern AI APIs',
    category: 'Intelligence',
    role: 'Practical language models for text processing, categorization, and contextual automation',
    badge: 'Intelligence',
  },
];
