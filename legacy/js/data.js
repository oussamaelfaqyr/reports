const ReportForge = {};

// ── Fonts available in the typography picker ──────────────────────────────────
ReportForge.fonts = [
    { label: 'Inter',           value: 'Inter',             import: 'Inter:wght@300;400;500;600;700;800' },
    { label: 'Playfair Display',value: 'Playfair Display',  import: 'Playfair+Display:ital,wght@0,400;0,700;0,800;1,400' },
    { label: 'Outfit',          value: 'Outfit',            import: 'Outfit:wght@300;400;600;700;800' },
    { label: 'Lora',            value: 'Lora',              import: 'Lora:ital,wght@0,400;0,600;0,700;1,400' },
    { label: 'DM Sans',         value: 'DM Sans',           import: 'DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400' },
    { label: 'Fraunces',        value: 'Fraunces',          import: 'Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700' },
    { label: 'Sora',            value: 'Sora',              import: 'Sora:wght@300;400;600;700;800' },
    { label: 'Merriweather',    value: 'Merriweather',      import: 'Merriweather:ital,wght@0,300;0,400;0,700;1,400' },
    { label: 'Space Grotesk',   value: 'Space Grotesk',     import: 'Space+Grotesk:wght@300;400;500;600;700' },
    { label: 'JetBrains Mono',  value: 'JetBrains Mono',   import: 'JetBrains+Mono:wght@300;400;700' },
    { label: 'Cormorant Garamond', value: 'Cormorant Garamond', import: 'Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400' },
    { label: 'Raleway',         value: 'Raleway',           import: 'Raleway:wght@300;400;600;700;800' },
    { label: 'Crimson Pro',     value: 'Crimson Pro',       import: 'Crimson+Pro:ital,wght@0,400;0,600;1,400' },
    { label: 'Nunito',          value: 'Nunito',            import: 'Nunito:wght@300;400;600;700;800' },
    { label: 'Libre Baskerville', value: 'Libre Baskerville', import: 'Libre+Baskerville:ital,wght@0,400;0,700;1,400' },
];

// ── Default state for the report builder ─────────────────────────────────────
ReportForge.defaultState = function() {
    return {
        id: null,
        templateKey: 'blank',
        title: 'Untitled Report',
        subtitle: 'A brief description of what this report covers.',
        author: '',
        role: '',
        date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
        logo: '',
        logoPosition: 'left',
        accent: '#4f46e5',
        bodyFont: 'Inter',
        headingFont: 'Playfair Display',
        titleSize: 56,
        headingSize: 32,
        bodySize: 15,
        lineHeight: 1.8,
        logoWidth: 280,
        logoHeight: 80,
        pageMargin: 80,
        imageWidth: 100,
        layout: 'classic',
        sections: [
            { id: Date.now(), title: 'Executive Summary', content: '> The future belongs to those who see possibilities before they become obvious.\n\nThis report presents a strategic overview of emerging opportunities and the path forward for organizations aiming to lead in their sector.\n\n- Accelerating market dynamics require swift, informed decisions\n- Data-driven frameworks outperform intuition-only models\n- Collaborative ecosystems deliver superior long-term outcomes', sectionImage: null, sectionImageWidth: 100, sectionImageAlign: 'center', sectionImagePos: 'bottom' }
        ]
    };
};

// ── Templates (full content for real starting points) ─────────────────────────
ReportForge.templates = {
    blank: {
        label: 'Blank Canvas',
        description: 'Start fresh with a clean slate.',
        accent: '#4f46e5',
        bodyFont: 'Inter',
        headingFont: 'Playfair Display',
        tag: 'Custom',
        layout: 'classic',
        preview: { bg: '#f8fafc', accent: '#4f46e5', style: 'minimal' },
        data: {}
    },

    executive: {
        label: 'Executive Whitepaper',
        description: 'Formal, authoritative. Perfect for boardroom presentations and strategic reports.',
        accent: '#0f172a',
        bodyFont: 'Inter',
        headingFont: 'Playfair Display',
        tag: 'Business',
        layout: 'sidebar',
        preview: { bg: '#0f172a', accent: '#6366f1', style: 'dark' },
        data: {
            title: 'Q3 Strategic Intelligence Report',
            subtitle: 'A comprehensive analysis of market positioning, operational efficiency, and growth trajectories for enterprise stakeholders.',
            author: 'Alexandra Mercer',
            role: 'Chief Strategy Officer',
            accent: '#0f172a',
            sections: [
                { id: 1, title: 'Executive Summary', content: '> Organizations that invest in strategic intelligence today will define the competitive landscape of tomorrow.\n\nThis quarterly report synthesizes data from over 400 enterprise deployments across 18 industry verticals. Our analysis reveals a decisive shift toward integrated decision-making frameworks that combine real-time analytics with long-term foresight.\n\nKey performance indicators show a 23% improvement in operational throughput for organizations adopting our recommended frameworks versus industry baselines.' },
                { id: 2, title: 'Market Landscape Analysis', content: 'The current macroeconomic environment presents a bifurcated opportunity set: organizations with robust digital infrastructure are accelerating their competitive advantages, while laggards face compounding operational debt.\n\n1. Digital-first organizations grew revenue 3.2x faster than peers\n2. Supply chain resilience investment increased 41% year-over-year\n3. Talent retention in strategic roles improved 28% with structured development programs\n\n- North American markets show strong momentum in enterprise software adoption\n- European regulatory compliance is creating new category opportunities\n- Asia-Pacific expansion remains the highest-upside geographic play' },
                { id: 3, title: 'Strategic Recommendations', content: '> Execution without strategy is aimless. Strategy without execution is meaningless.\n\nBased on our comprehensive analysis, we recommend a phased approach to value capture:\n\n1. Establish cross-functional data governance councils within 60 days\n2. Rationalize technology stack to eliminate redundancy and reduce total cost of ownership by 18-25%\n3. Invest in leadership capability building with a minimum 12-month commitment\n\nThe strategic window for category leadership is narrow. Organizations must act decisively within the next two quarters to secure defensible market positions.' },
                { id: 4, title: 'Risk & Mitigation Framework', content: 'Risk management must evolve from a compliance exercise to a strategic capability. Our framework identifies three tiers of organizational risk:\n\n- Operational risks: process dependencies, single points of failure, talent concentration\n- Market risks: competitive disruption, regulatory shifts, macroeconomic volatility\n- Strategic risks: misaligned incentives, poor capital allocation, execution gaps\n\nFor each risk category, we recommend quarterly review cadences with defined escalation protocols and pre-approved mitigation playbooks.' }
            ]
        }
    },

    tech: {
        label: 'Modern Tech Report',
        description: 'Sleek, data-driven. Ideal for product launches, engineering reviews, and tech briefings.',
        accent: '#10b981',
        bodyFont: 'Space Grotesk',
        headingFont: 'Sora',
        tag: 'Technology',
        layout: 'magazine',
        preview: { bg: '#064e3b', accent: '#10b981', style: 'tech' },
        data: {
            title: 'Platform Architecture Review 2024',
            subtitle: 'Engineering performance benchmarks, infrastructure scaling analysis, and technology roadmap for the next 18-month cycle.',
            author: 'Jordan Nakamura',
            role: 'VP of Engineering',
            accent: '#10b981',
            sections: [
                { id: 1, title: 'System Performance Overview', content: '> Our infrastructure processed 2.4 billion requests last quarter with 99.98% uptime — a new organizational benchmark.\n\nThis report analyzes the performance characteristics of our distributed platform following the Q3 infrastructure overhaul. Core improvements include a 340ms reduction in median API latency and a 60% decrease in cold start times for serverless functions.\n\n- P50 latency: 42ms (down from 380ms)\n- P99 latency: 210ms (down from 1.2s)\n- Error rate: 0.003% (down from 0.4%)' },
                { id: 2, title: 'Scalability & Infrastructure', content: 'The migration to a microservices architecture enabled horizontal scaling across 14 independent service domains. Kubernetes cluster autoscaling now handles traffic spikes up to 40x baseline without manual intervention.\n\n1. Database sharding implemented across 8 regional clusters\n2. CDN coverage expanded to 42 edge nodes globally\n3. Event-driven messaging reduced synchronous coupling by 73%\n\nInfrastructure cost efficiency improved 31% despite a 2.8x increase in transaction volume, validating our architectural investment thesis.' },
                { id: 3, title: 'Security & Compliance', content: 'Zero-trust architecture implementation completed across all production environments. Security posture assessment scores improved from 67 to 94 (out of 100) following the implementation of continuous threat monitoring.\n\n- SOC 2 Type II certification achieved Q2 2024\n- Penetration testing identified and remediated 14 medium/low vulnerabilities\n- MFA enrollment reached 99.7% across all internal users\n\n> Security is not a feature — it is the foundation on which all features are built.' },
                { id: 4, title: '18-Month Technology Roadmap', content: 'Our forward roadmap prioritizes three strategic pillars: developer experience, platform reliability, and AI-native capabilities.\n\n1. Q4 2024: Launch unified developer portal and internal API marketplace\n2. Q1 2025: Deploy ML-powered anomaly detection across all production services\n3. Q2 2025: Complete deprecation of legacy monolith components\n4. Q3 2025: Launch real-time collaborative features powered by WebRTC and CRDTs\n\nCapital allocation for the roadmap is structured as 40% infrastructure, 35% product capabilities, and 25% security and compliance.' }
            ]
        }
    },

    creative: {
        label: 'Creative Brief',
        description: 'Bold, expressive. Designed for campaign briefs, design thinking, and brand storytelling.',
        accent: '#f97316',
        bodyFont: 'DM Sans',
        headingFont: 'Fraunces',
        tag: 'Creative',
        layout: 'centered',
        preview: { bg: '#fff7ed', accent: '#f97316', style: 'warm' },
        data: {
            title: 'Brand Evolution Campaign Brief',
            subtitle: 'Defining the visual identity, messaging strategy, and audience activation playbook for our Q4 campaign launch.',
            author: 'Mia Laurent',
            role: 'Creative Director',
            accent: '#f97316',
            sections: [
                { id: 1, title: 'Creative Vision', content: '> We are not refreshing a brand. We are sparking a cultural moment.\n\nThis campaign marks a pivotal chapter in our brand story — a deliberate shift from product-centric messaging to a values-driven narrative that resonates deeply with our audience\'s aspirations.\n\nThe central creative idea: "Made for the ones who move." This three-word manifesto anchors every touchpoint, from hero film to social micro-content, in a unified emotional truth.' },
                { id: 2, title: 'Target Audience Profile', content: 'Our primary audience is the "Ambitious Creator" — individuals aged 24-38 who blend professional ambition with personal authenticity.\n\n- Values: autonomy, craft, community, and meaningful progress\n- Media: Instagram, YouTube, Substack, podcast-first content consumers\n- Behavior: brand advocates who share what aligns with their identity\n\nSecondary audience: enterprise decision-makers who admire premium positioning and aspire to associate their organizations with our brand equity.' },
                { id: 3, title: 'Campaign Channels & Execution', content: '1. Hero Film (60-second): cinematic, emotion-first, no product shots until final 8 seconds\n2. Digital OOH: minimalist typographic executions in 8 key urban markets\n3. Social-first Content Series: 12-week "Makers in Motion" documentary micro-series\n4. Creator Partnerships: 6 macro-creators and 40 micro-creators in adjacent creative verticals\n\n> The best brands don\'t interrupt culture — they contribute to it.' },
                { id: 4, title: 'Success Metrics', content: 'Brand health tracking will measure movement across three core dimensions over the 16-week campaign window:\n\n- Brand awareness: target 12-point lift among primary audience\n- Consideration: target 8-point lift in purchase intent scoring\n- Social share of voice: target 22% growth versus competitive set\n\nAll creative executions will be tested via pre-launch concept testing with a 400-person audience panel to optimize for emotional resonance before media investment is committed.' }
            ]
        }
    },

    finance: {
        label: 'Financial Report',
        description: 'Precise, data-centric. Built for annual reports, investment memos, and fiscal analysis.',
        accent: '#0ea5e9',
        bodyFont: 'Outfit',
        headingFont: 'Outfit',
        tag: 'Finance',
        layout: 'sidebar',
        preview: { bg: '#f0f9ff', accent: '#0ea5e9', style: 'clean' },
        data: {
            title: 'Annual Financial Performance Report',
            subtitle: 'Full-year revenue analysis, cost structure review, capital deployment strategy, and fiscal year projections for 2025.',
            author: 'Dr. Samuel Okafor',
            role: 'Chief Financial Officer',
            accent: '#0ea5e9',
            sections: [
                { id: 1, title: 'Financial Highlights', content: '> Revenue grew 38% year-over-year, outpacing industry median by 19 percentage points — a testament to disciplined execution and strategic capital allocation.\n\nFull fiscal year results represent the strongest performance in the company\'s operating history:\n\n- Total Revenue: $847M (+38% YoY)\n- Gross Profit Margin: 68.4% (up from 61.2%)\n- Adjusted EBITDA: $203M (24% margin)\n- Free Cash Flow: $156M (+71% YoY)' },
                { id: 2, title: 'Revenue Analysis by Segment', content: 'Revenue diversification improved significantly with subscription-based recurring revenue now comprising 74% of total revenue, up from 58% in the prior year.\n\n1. Enterprise SaaS: $547M (+42% YoY) — primary growth engine\n2. Professional Services: $186M (+18% YoY) — high-margin implementation work\n3. Marketplace & Transactions: $114M (+67% YoY) — emerging high-growth segment\n\nGeographic mix: North America 62%, EMEA 24%, Asia-Pacific 14%. EMEA and APAC both outgrew North America for the first time in company history.' },
                { id: 3, title: 'Cost Structure & Efficiency', content: 'Operational leverage materialized at scale as we achieved the dual mandate of growth and efficiency:\n\n- R&D investment: $189M (22% of revenue, optimized from 28% prior year)\n- Sales & Marketing: $254M (30% of revenue, down 4 points)\n- G&A: $68M (8% of revenue, down 2 points)\n\n> Efficiency is not cost-cutting. It is ensuring every dollar deployed generates maximum strategic value.\n\nHeadcount grew 12% while revenue per employee increased 23%, demonstrating genuine operational leverage.' },
                { id: 4, title: 'Fiscal Year 2025 Outlook', content: 'For FY2025, we are guiding to continued disciplined growth with expanding margins:\n\n1. Revenue guidance: $1.05B — $1.10B (24-30% growth)\n2. Adjusted EBITDA margin: 26-28% (200-400bps expansion)\n3. Free Cash Flow conversion: 75-80% of EBITDA\n\nCapital allocation priorities for FY2025: product R&D (45%), strategic M&A (25%), share repurchase program (20%), and facility expansion (10%).' }
            ]
        }
    },

    research: {
        label: 'Academic Research',
        description: 'Scholarly, structured. Ideal for research papers, case studies, and academic publications.',
        accent: '#7c3aed',
        bodyFont: 'Lora',
        headingFont: 'Cormorant Garamond',
        tag: 'Academic',
        layout: 'centered',
        preview: { bg: '#f5f3ff', accent: '#7c3aed', style: 'academic' },
        data: {
            title: 'The Cognitive Architecture of AI-Assisted Decision Making',
            subtitle: 'An empirical investigation into human-AI collaborative frameworks, cognitive load distribution, and decision quality outcomes in high-stakes environments.',
            author: 'Dr. Priya Venkataraman',
            role: 'Research Fellow, Institute for Cognitive Systems',
            accent: '#7c3aed',
            sections: [
                { id: 1, title: 'Abstract', content: 'This study examines the cognitive mechanisms underlying human-AI decision collaboration in high-stakes professional environments. Through a series of controlled experiments involving 847 participants across six professional domains, we demonstrate that structured human-AI interaction protocols reduce decision error rates by 34.7% while simultaneously decreasing cognitive load by 28% compared to unaided human judgment.\n\n> Artificial intelligence does not replace human cognition — it augments its range, precision, and endurance under pressure.\n\nOur findings have significant implications for the design of AI-assisted decision support systems in medicine, law, financial risk assessment, and strategic planning.' },
                { id: 2, title: 'Literature Review', content: 'Prior research on human-AI interaction has largely focused on task performance metrics while underweighting the cognitive cost of AI collaboration (Kahneman & Klein, 2009; Parasuraman & Riley, 1997). More recent work by Wang et al. (2022) suggests that AI assistance quality is mediated by the human operator\'s domain expertise and mental model of the AI system\'s limitations.\n\nGaps in existing literature include:\n- Insufficient longitudinal data on AI-assisted decision quality degradation over time\n- Limited cross-domain generalizability of existing frameworks\n- Absence of standardized cognitive load measurement protocols in human-AI research\n\nThis study addresses these gaps through a multi-domain, mixed-methods research design.' },
                { id: 3, title: 'Methodology', content: 'We employed a randomized controlled trial design with three conditions: (1) human judgment only, (2) AI recommendation only, and (3) structured human-AI collaboration protocol.\n\n1. Participant recruitment: purposive sampling across six professional domains (n=847)\n2. Cognitive load measurement: NASA-TLX scale combined with pupillometry biometric monitoring\n3. Decision quality assessment: expert panel review against objective outcome benchmarks\n4. Statistical analysis: multilevel mixed-effects modeling controlling for domain, experience level, and baseline cognitive capacity\n\nAll procedures were approved by the Institutional Review Board (Protocol #2024-CR-0047).' },
                { id: 4, title: 'Findings & Discussion', content: '> The data compels us to reconsider the binary framing of human vs. AI decision making. The evidence supports a third paradigm: collaborative cognitive architecture.\n\nKey findings across all participant groups:\n\n- Decision accuracy: 34.7% improvement in human-AI collaborative condition vs. unaided baseline\n- Cognitive load: 28% reduction in NASA-TLX scores for structured collaboration vs. unstructured AI exposure\n- Overreliance risk: observed in 23% of participants when AI confidence scores exceeded 90%\n- Expert-novice differential: AI assistance yielded greater performance gains for novice practitioners (41%) vs. domain experts (18%)\n\nThese findings suggest that AI-assisted decision support systems must be designed with explicit calibration mechanisms to prevent automation bias while maximizing collaborative cognitive efficiency.' }
            ]
        }
    },

    marketing: {
        label: 'Marketing Proposal',
        description: 'Bold, colorful, focused on campaign metrics and creative strategy.',
        accent: '#ec4899',
        bodyFont: 'DM Sans',
        headingFont: 'Outfit',
        tag: 'Marketing',
        layout: 'magazine',
        preview: { bg: '#fdf2f8', accent: '#ec4899', style: 'creative' },
        data: {
            title: 'Q3 Global Brand Campaign Proposal',
            subtitle: 'Omnichannel strategy, audience targeting, creative direction, and projected ROI for the upcoming product launch.',
            author: 'Elena Rodriguez',
            role: 'VP of Global Marketing',
            accent: '#ec4899',
            sections: [
                { id: 1, title: 'Campaign Objective & Positioning', content: 'Our primary objective for Q3 is to successfully launch the new product line while capturing a 15% share of voice within our core demographic (Millennials and Gen Z).\n\n> The modern consumer does not buy products; they buy identities. Our campaign must position our brand as an essential part of their lifestyle.\n\nPositioning Statement: For ambitious creators who refuse to compromise on quality, our new suite provides professional-grade tools wrapped in an intuitive, accessible interface.' },
                { id: 2, title: 'Target Audience Profiles', content: 'We have identified three core audience segments that will drive 80% of our campaign performance:\n\n1. The Aspiring Pro (Primary): Aged 18-28. Highly active on TikTok and YouTube. Values authenticity and aesthetic.\n2. The Established Freelancer (Secondary): Aged 25-40. Primarily active on Instagram and LinkedIn. Values workflow efficiency.\n3. The Hobbyist (Tertiary): Aged 30+. Active on Facebook and Pinterest. Values ease-of-use and community.\n\nOur media spend will be weighted 50%, 30%, and 20% respectively across these segments.' },
                { id: 3, title: 'Media Mix & Channel Strategy', content: 'We are deploying a full-funnel strategy designed to guide the consumer from broad awareness to high-intent conversion.\n\n- Top of Funnel (Awareness): TikTok influencer partnerships, YouTube pre-roll ads, High-impact out-of-home (OOH) in major metro areas.\n- Middle of Funnel (Consideration): Retargeted Instagram Stories, interactive web experiences, PR placements in key trade publications.\n- Bottom of Funnel (Conversion): Paid search (Google Ads), targeted email sequences, affiliate marketing.\n\nEstimated reach: 45 million unique impressions.' },
                { id: 4, title: 'Budget Allocation & Projected ROI', content: 'Total Campaign Budget: $2.5 Million\n\n| Category | Allocation | Percentage |\n|---|---|---|\n| Paid Social Media | $1,000,000 | 40% |\n| Influencer Partnerships | $625,000 | 25% |\n| Search & Programmatic | $500,000 | 20% |\n| Creative Production | $250,000 | 10% |\n| Contingency & Testing | $125,000 | 5% |\n\nProjected ROI: Based on historical conversion rates (2.4%) and estimated CPA ($45), we project $7.2M in direct revenue attribution, representing a 2.88x Return on Ad Spend (ROAS).' }
            ]
        }
    },

    project: {
        label: 'Project Status',
        description: 'Clean, timeline-focused, tabular data. Ideal for PMs and stakeholders.',
        accent: '#f59e0b',
        bodyFont: 'Inter',
        headingFont: 'Space Grotesk',
        tag: 'Management',
        layout: 'sidebar',
        preview: { bg: '#fffbeb', accent: '#f59e0b', style: 'tech' },
        data: {
            title: 'Project Apollo: Phase 2 Status Update',
            subtitle: 'Executive summary of progress, current roadblocks, milestone tracking, and resource allocation for the core platform migration.',
            author: 'Marcus Chen',
            role: 'Senior Technical Program Manager',
            accent: '#f59e0b',
            sections: [
                { id: 1, title: 'Executive Summary', content: 'Phase 2 of Project Apollo is currently tracking **GREEN** (On Schedule, On Budget). As of Week 12, we have completed the core database migration and have begun the API integration phase.\n\n> Migration velocity is currently exceeding baseline projections by 14%, allowing us to absorb minor delays in the identity management integration without impacting the critical path.\n\nOverall Completion: 68% (Target: 65%).' },
                { id: 2, title: 'Milestone Tracking', content: 'Status of key Phase 2 deliverables:\n\n1. Database Migration: **COMPLETED** (May 14)\n2. Legacy System Decommissioning: **IN PROGRESS** (Target: June 1)\n3. API Gateway Integration: **IN PROGRESS** (Target: June 15)\n4. Security Audit & Pentesting: **PENDING** (Target: July 1)\n5. User Acceptance Testing (UAT): **PENDING** (Target: July 15)\n\nThe upcoming Security Audit is our highest risk dependency. We have preemptively engaged the external InfoSec team to begin pre-audits.' },
                { id: 3, title: 'Current Blockers & Risks', content: 'While the project is healthy, we are tracking three primary risks:\n\n- Risk 1 (Medium): The third-party OAuth provider updated their API spec unexpectedly. Impact: 3 days of rework for the auth team.\n- Risk 2 (Low): Two senior engineers on the backend team are scheduled for PTO in late June during the critical UAT phase. Mitigation: Cross-training mid-level engineers started last week.\n- Risk 3 (Low): Minor scope creep requested by the marketing team regarding analytics tracking. Mitigation: Deferred to Phase 3.\n\nAll risks are currently managed and mitigated.' },
                { id: 4, title: 'Resource & Budget Status', content: 'We are currently operating at 92% of projected capacity, meaning we have a comfortable buffer for unexpected issues.\n\n| Resource Type | Allocated | Burned | Remaining |\n|---|---|---|---|\n| Engineering Hours | 2,400 | 1,560 | 840 |\n| Design Hours | 400 | 380 | 20 |\n| QA Hours | 800 | 210 | 590 |\n| Infrastructure Cost | $45,000 | $22,500 | $22,500 |\n\nWe anticipate a slight underspend on infrastructure and a slight overspend on QA hours. The overall budget remains balanced.' }
            ]
        }
    },

    minimalist: {
        label: 'Minimalist',
        description: 'Extremely clean, lots of whitespace, elegant serif fonts.',
        accent: '#171717',
        bodyFont: 'Libre Baskerville',
        headingFont: 'Playfair Display',
        tag: 'Design',
        layout: 'centered',
        preview: { bg: '#fafafa', accent: '#171717', style: 'executive' },
        data: {
            title: 'Design Philosophy & Brand Evolution',
            subtitle: 'A meditation on reduction, clarity, and the enduring power of negative space in modern brand identity.',
            author: 'Julian Vance',
            role: 'Creative Director',
            accent: '#171717',
            sections: [
                { id: 1, title: 'The Power of Reduction', content: '> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. — Antoine de Saint-Exupéry\n\nOur brand evolution is not an exercise in adding new elements; it is an exercise in profound reduction. By stripping away the superfluous, we expose the absolute core of our identity. \n\nMinimalism is not merely an aesthetic choice; it is a strategic imperative that signals confidence, clarity, and uncompromising quality.' },
                { id: 2, title: 'Typography as Voice', content: 'In the absence of heavy imagery and complex graphics, typography must carry the entire weight of our brand voice. \n\n1. Primary Heading (Playfair Display): Evokes heritage, craftsmanship, and authority. Used sparingly for maximum impact.\n2. Body Text (Libre Baskerville): Ensures readability while maintaining an editorial, sophisticated tone.\n3. Supporting Text (Inter): Provides modern, utilitarian contrast to the serifs.\n\nTypography is the visible manifestation of our brand\'s spoken word.' },
                { id: 3, title: 'Negative Space as Content', content: 'Whitespace is not empty space; it is the canvas upon which our message breathes. \n\n- It focuses attention.\n- It implies luxury and restraint.\n- It reduces cognitive load for the user.\n\nOur new grid system mandates a minimum of 40% negative space on all brand touchpoints. We will no longer fear the void; we will utilize it to frame our excellence.' },
                { id: 4, title: 'Implementation Guidelines', content: 'Applying this philosophy requires rigorous discipline.\n\n| Element | Current | Future State |\n|---|---|---|\n| Color Palette | 8 Colors | 3 Colors (Black, White, Warm Gray) |\n| Logo Usage | Frequent | Rare & Intentional |\n| Imagery | Lifestyle | Abstract & Textural |\n| Copywriting | Descriptive | Poetic & Concise |\n\nThis is not a redesign. It is a refinement.' }
            ]
        }
    },

    case_study: {
        label: 'Case Study',
        description: 'Focused on problem/solution layout, blockquotes, and stats.',
        accent: '#2563eb',
        bodyFont: 'Inter',
        headingFont: 'Inter',
        tag: 'Business',
        layout: 'magazine',
        preview: { bg: '#eff6ff', accent: '#2563eb', style: 'executive' },
        data: {
            title: 'Acme Corp: Digital Transformation Case Study',
            subtitle: 'How a legacy logistics provider achieved a 300% increase in operational efficiency through cloud-native architecture.',
            author: 'Sarah Jenkins',
            role: 'Lead Solutions Architect',
            accent: '#2563eb',
            sections: [
                { id: 1, title: 'The Challenge', content: 'Acme Corp, a 40-year-old logistics and supply chain provider, was struggling to compete with digital-first startups. Their on-premise, monolithic architecture was brittle, expensive to maintain, and lacked the agility required for modern e-commerce demands.\n\n> Our IT infrastructure had become our biggest liability instead of our greatest asset. We needed a total paradigm shift.\n> — CEO, Acme Corp\n\nKey pain points:\n- 48-hour delay in inventory synchronization\n- Frequent downtime during peak holiday seasons\n- Inability to integrate with modern third-party logistics (3PL) APIs' },
                { id: 2, title: 'The Solution', content: 'We partnered with Acme Corp to execute a comprehensive, 18-month digital transformation strategy, migrating their core systems to a scalable, cloud-native architecture.\n\n1. Microservices Architecture: Deconstructed the monolith into 45 independent microservices.\n2. Real-time Event Streaming: Implemented Kafka to enable sub-second inventory synchronization.\n3. Cloud Infrastructure: Migrated to a fully managed AWS environment with auto-scaling capabilities.\n4. CI/CD Pipelines: Automated testing and deployment, enabling multiple releases per day instead of bi-annually.\n\nThe transition was executed with zero unplanned downtime.' },
                { id: 3, title: 'The Results', content: 'The business impact of the transformation exceeded initial projections across all measured KPIs.\n\n| Metric | Before | After | Improvement |\n|---|---|---|---|\n| Inventory Sync Time | 48 hours | 0.5 seconds | >99% |\n| System Uptime | 98.5% | 99.99% | +1.49% |\n| Infrastructure Cost | $120k/mo | $45k/mo | -62% |\n| Deployment Frequency | 2/year | 15/week | +39,000% |\n\nAcme Corp is now positioned as a technology leader in the logistics space, capable of onboarding new enterprise clients in days rather than months.' },
                { id: 4, title: 'Key Takeaways & Next Steps', content: 'This transformation underscores the vital importance of treating technology as a core business driver rather than a cost center.\n\n- Agility Wins: The ability to deploy code rapidly is the ultimate competitive advantage.\n- Data is Currency: Real-time data streams unlock entirely new business models.\n- Cultural Shift: The hardest part of the transformation was not technological, but cultural—shifting from a "fear of failure" to a "fail fast and iterate" mindset.\n\nNext steps for Acme Corp include implementing machine learning models for predictive routing and demand forecasting.' }
            ]
        }
    },

    // ── NEW TEMPLATES ──────────────────────────────────────────────────────────

    neon: {
        label: 'Neon Dark',
        description: 'Dark background with electric cyan accents. Cyberpunk-inspired premium feel.',
        accent: '#06b6d4',
        bodyFont: 'Space Grotesk',
        headingFont: 'Sora',
        tag: 'Design',
        layout: 'fullbleed',
        preview: { bg: '#0c0a1e', accent: '#06b6d4', style: 'neon' },
        data: {
            title: 'Future-Ready Innovation Strategy',
            subtitle: 'A bold, forward-looking framework for organizations navigating the next decade of digital disruption.',
            author: 'Kai Nakamura',
            role: 'Head of Innovation',
            accent: '#06b6d4',
            bodyFont: 'Space Grotesk',
            headingFont: 'Sora',
            titleSize: 52,
            headingSize: 28,
            bodySize: 15,
            lineHeight: 1.9,
            sections: [
                { id: 1, title: 'The Innovation Imperative', content: '> The organizations that survive the next decade will be those that build adaptability into their DNA.\n\nWe are living through the most rapid period of technological change in human history. Generative AI, quantum computing, and spatial computing are not future concepts — they are live forces reshaping industries right now.\n\n- 72% of executives cite AI readiness as their top strategic priority\n- Organizations investing in innovation culture outgrow peers by 2.4x\n- First-mover advantages in AI are compressing from 3 years to 18 months' },
                { id: 2, title: 'Strategic Pillars', content: 'Our three-pillar innovation framework ensures balanced investment across the innovation horizon.\n\n1. Core Innovation (60%): Incremental improvements to existing products and processes\n2. Adjacent Innovation (30%): Expanding into new markets or new capabilities\n3. Transformational Innovation (10%): High-risk, high-reward bets on emerging categories\n\nThis allocation mirrors the portfolio approach proven effective by leading innovation companies globally.' },
                { id: 3, title: 'Execution Roadmap', content: 'Innovation without execution is just ideation. Our roadmap converts strategy into measurable action.\n\n- Q1: Establish cross-functional AI Center of Excellence\n- Q2: Launch internal innovation tournament with dedicated funding\n- Q3: Deploy first AI-native product feature to market\n- Q4: Report on KPIs, iterate, and scale what works\n\n> Ideas are cheap. Execution is priceless.' },
                { id: 4, title: 'Measuring Success', content: 'We will track innovation ROI against a balanced scorecard of leading and lagging indicators.\n\n| Indicator | Metric | Target |\n|---|---|---|\n| Speed | Time-to-prototype | < 3 weeks |\n| Volume | Ideas entered pipeline | > 200/quarter |\n| Conversion | Ideas reaching market | > 5% |\n| Impact | Revenue from new products | > 15% of total |' }
            ]
        }
    },

    editorial: {
        label: 'Editorial',
        description: 'Newspaper-inspired layout with bold serif headings and classical structure.',
        accent: '#b91c1c',
        bodyFont: 'Merriweather',
        headingFont: 'Playfair Display',
        tag: 'Media',
        layout: 'classic',
        preview: { bg: '#fefce8', accent: '#b91c1c', style: 'editorial' },
        data: {
            title: 'The State of the Industry: Annual Review',
            subtitle: 'An in-depth editorial analysis of the forces, trends, and personalities shaping our sector in the year ahead.',
            author: 'Sophia Brennan',
            role: 'Editor-in-Chief',
            accent: '#b91c1c',
            bodyFont: 'Merriweather',
            headingFont: 'Playfair Display',
            titleSize: 58,
            headingSize: 30,
            bodySize: 14,
            lineHeight: 1.9,
            sections: [
                { id: 1, title: 'Editor\'s Note', content: '> We do not merely report on the world; we interpret it for those who must act upon it.\n\nThis edition of our annual review arrives at a moment of profound transformation. The old certainties are giving way to a new, more fluid landscape where agility, authenticity, and analytical rigor are the currencies of success.\n\nOur editorial team has conducted over 120 interviews, analyzed thousands of data points, and synthesized the most significant developments into the report you hold in your hands.' },
                { id: 2, title: 'The Year That Was', content: 'No single trend dominated the year — rather, a confluence of forces created a perfect storm of disruption and opportunity.\n\n- The great re-platforming: 68% of enterprises migrated core systems to cloud-native architecture\n- The talent realignment: skilled professionals gained unprecedented negotiating power\n- The data awakening: organizations began treating data as a first-class strategic asset\n\n1. Consumer confidence reached its highest point in seven years by Q3\n2. Merger and acquisition activity surged 31% year-over-year\n3. ESG considerations became non-negotiable for institutional investors' },
                { id: 3, title: 'Voices from the Field', content: 'We spoke with thirty industry leaders across five continents. The themes that emerged were strikingly consistent.\n\n> The pace of change has moved from evolutionary to revolutionary. We are no longer adapting to a new normal — we are building it in real time.\n\n> Leaders who cling to yesterday\'s playbook will find it increasingly irrelevant. The competitive advantage now belongs to the perpetually curious.\n\nThese voices represent not just individual perspectives, but the emerging consensus of a generation of leaders who understand that the old rules no longer apply.' },
                { id: 4, title: 'Looking Ahead', content: 'Our editorial board has identified five macro-forces that will define the next 24 months.\n\n1. AI-native organizations will outcompete AI-assisted ones\n2. Geopolitical realignment will redraw global supply chain maps\n3. The attention economy will face meaningful regulatory pressure\n4. Sustainability will shift from brand narrative to operational mandate\n5. The workforce of the future will demand radical transparency from employers\n\nWe invite our readers to engage with these ideas, challenge our conclusions, and contribute to the ongoing conversation that gives this review its value.' }
            ]
        }
    },

    mono: {
        label: 'Mono Code',
        description: 'Monospace typography throughout. Built for technical documentation and dev reports.',
        accent: '#16a34a',
        bodyFont: 'JetBrains Mono',
        headingFont: 'JetBrains Mono',
        tag: 'Technology',
        layout: 'sidebar',
        preview: { bg: '#f0fdf4', accent: '#16a34a', style: 'mono' },
        data: {
            title: 'System Architecture Documentation v2.0',
            subtitle: 'Comprehensive technical specification for the platform core services, API contracts, and deployment topology.',
            author: 'Dev Team',
            role: 'Platform Engineering',
            accent: '#16a34a',
            bodyFont: 'JetBrains Mono',
            headingFont: 'JetBrains Mono',
            titleSize: 42,
            headingSize: 22,
            bodySize: 13,
            lineHeight: 1.9,
            sections: [
                { id: 1, title: '// Overview', content: 'This document serves as the canonical reference for the platform architecture. All implementation decisions should trace back to a principle or constraint defined herein.\n\n- Runtime: Node.js 20 LTS / Python 3.11\n- Infrastructure: AWS EKS + Fargate\n- Database: PostgreSQL 15 (primary), Redis 7 (cache)\n- Message Queue: Apache Kafka 3.5\n\n> "Simplicity is the soul of efficiency." — Austin Freeman' },
                { id: 2, title: '// API Contract', content: 'All services communicate via REST or gRPC. External-facing APIs are versioned under /api/v{n}.\n\n1. Authentication: Bearer JWT (RS256, 15min expiry)\n2. Rate Limiting: 1000 req/min per API key, 100 req/min unauthenticated\n3. Pagination: cursor-based for all list endpoints\n4. Errors: RFC 7807 Problem Details format\n\nDeprecation Policy: APIs are supported for a minimum of 12 months after a new major version is released. Sunset headers are included 90 days before removal.' },
                { id: 3, title: '// Deployment Topology', content: 'Production runs across three AWS regions for high availability and disaster recovery.\n\n- Primary: us-east-1 (full stack)\n- Secondary: eu-west-1 (full stack, active-active)\n- Tertiary: ap-southeast-1 (read replicas + CDN)\n\nRPO: < 1 hour | RTO: < 15 minutes\n\nAll deployments are executed via GitOps with ArgoCD. Blue/green deployment is mandatory for all stateful service updates.' },
                { id: 4, title: '// Observability', content: 'The three pillars of observability are implemented across all services.\n\n| Pillar | Tool | Retention |\n|---|---|---|\n| Metrics | Prometheus + Grafana | 90 days |\n| Logs | Loki + OpenSearch | 30 days |\n| Traces | Tempo + Jaeger | 14 days |\n\nAlerts route to PagerDuty. On-call rotation is managed via a 4-week schedule. SLO breach triggers automatic incident creation.' }
            ]
        }
    },

    soft: {
        label: 'Soft Pastel',
        description: 'Gentle warm tones, rounded feel, perfect for HR, wellness, and education reports.',
        accent: '#d946ef',
        bodyFont: 'Nunito',
        headingFont: 'Nunito',
        tag: 'HR / Education',
        layout: 'centered',
        preview: { bg: '#fdf4ff', accent: '#d946ef', style: 'soft' },
        data: {
            title: 'Employee Wellbeing & Culture Report',
            subtitle: 'A comprehensive look at our people programs, engagement metrics, and initiatives driving a thriving workplace culture.',
            author: 'Amara Osei',
            role: 'Chief People Officer',
            accent: '#d946ef',
            bodyFont: 'Nunito',
            headingFont: 'Nunito',
            titleSize: 52,
            headingSize: 28,
            bodySize: 15,
            lineHeight: 2.0,
            sections: [
                { id: 1, title: 'A Message from People & Culture', content: '> Our people are not our greatest asset. They are our organization itself.\n\nThis year, we doubled down on our commitment to creating a workplace where every individual can bring their full self to work. The data in this report tells a story of progress — and opportunity.\n\nEmployee engagement reached an all-time high of 84% this year, a 12-point improvement over the prior year and 19 points above industry average.' },
                { id: 2, title: 'Wellbeing Initiatives', content: 'We launched seven new wellbeing programs this year, designed to support the whole person.\n\n1. Mental Health First Aider Program: 45 certified first aiders across all offices\n2. Flexible Fridays: Early finish pilot saw 91% positive feedback\n3. Parental Leave Enhancement: Primary leave extended from 16 to 26 weeks\n4. Learning & Development Budget: $1,500 annual allowance per employee\n\n- 89% of employees used at least one wellbeing benefit\n- Healthcare claims related to stress-related illness dropped 22%' },
                { id: 3, title: 'Engagement & Belonging', content: 'Belonging is not a bonus — it is a business imperative. When people feel they belong, they contribute fully.\n\n- Diversity in leadership roles increased from 31% to 44%\n- Our internal mentorship program now connects 380 pairs annually\n- Employee Net Promoter Score (eNPS): +62 (up from +48)\n\n> I have never felt more supported in my entire career. The culture here is genuinely different.\n> — Anonymous Employee Survey Response' },
                { id: 4, title: 'Looking Forward', content: 'Our focus for the coming year is on three interconnected priorities.\n\n| Priority | Goal | Timeline |\n|---|---|---|\n| Hybrid Work | Formalize flexible work policy | Q1 |\n| Pay Equity | Complete global pay equity audit | Q2 |\n| Leadership Development | Launch executive coaching program | Q3 |\n\nWe are committed to publishing this report annually as an act of accountability to our people. Our goal is not just to measure culture — it is to shape it.' }
            ]
        }
    },

    blueprint: {
        label: 'Blueprint',
        description: 'Deep navy with silver and white — structured, authoritative, premium consulting look.',
        accent: '#38bdf8',
        bodyFont: 'Outfit',
        headingFont: 'Raleway',
        tag: 'Consulting',
        layout: 'fullbleed',
        preview: { bg: '#0f2744', accent: '#38bdf8', style: 'blueprint' },
        data: {
            title: 'Global Expansion Strategy Blueprint',
            subtitle: 'A structured market entry framework, risk assessment, and operational playbook for entering three new geographic markets.',
            author: 'Victoria Huang',
            role: 'Principal Consultant',
            accent: '#38bdf8',
            bodyFont: 'Outfit',
            headingFont: 'Raleway',
            titleSize: 54,
            headingSize: 30,
            bodySize: 15,
            lineHeight: 1.85,
            sections: [
                { id: 1, title: 'Strategic Rationale', content: '> Global diversification is no longer optional for organizations seeking durable, compounding growth.\n\nThis blueprint lays out the case for entering three high-potential markets: Brazil, Germany, and South Korea. Collectively, these markets represent a $4.2 billion addressable opportunity, a natural fit for our core product value proposition, and acceptable risk profiles given current organizational capabilities.\n\n- Combined GDP growth: 4.1% projected over next 3 years\n- Competitive density: Moderate — no dominant player holds >25% share\n- Regulatory environment: Complex but navigable with local partners' },
                { id: 2, title: 'Market Entry Framework', content: 'We recommend a phased, partnership-first entry model that minimizes capital at risk while establishing a credible local presence.\n\n1. Phase 1 — Validate (Months 1-6): Local partner identification, regulatory mapping, pilot customer acquisition\n2. Phase 2 — Establish (Months 7-18): Local entity formation, team hiring, product localization\n3. Phase 3 — Scale (Months 19-36): Full go-to-market, channel expansion, performance marketing\n\nThis model has been deployed successfully in our MENA and SEA expansions with average payback periods of 22 months.' },
                { id: 3, title: 'Risk Assessment', content: 'A rigorous risk assessment is the foundation of any credible expansion blueprint.\n\n| Risk Category | Severity | Probability | Mitigation |\n|---|---|---|---|\n| Regulatory Compliance | High | Medium | Engage local legal counsel in each market |\n| Currency Volatility | Medium | High | USD-denominated contracts where possible |\n| Talent Acquisition | Medium | Medium | Partner with regional executive search firms |\n| Competitive Response | Low | Low | Monitor via quarterly competitive intelligence |' },
                { id: 4, title: 'Investment & Returns', content: 'Total investment required across all three markets over 36 months is projected at $18.5M.\n\n- Personnel: $9.2M (50% of total)\n- Infrastructure & Tech: $3.7M (20%)\n- Sales & Marketing: $3.7M (20%)\n- Legal & Compliance: $1.9M (10%)\n\nProjected combined revenue from new markets by Month 36: $31.4M, representing a 1.7x return on invested capital. Internal rate of return is projected at 34%, well above our 20% investment hurdle rate.' }
            ]
        }
    },

    gradient_ink: {
        label: 'Gradient Ink',
        description: 'Rich teal-to-violet palette, elegant body font — modern luxury aesthetic.',
        accent: '#7c3aed',
        bodyFont: 'Crimson Pro',
        headingFont: 'Raleway',
        tag: 'Design',
        layout: 'magazine',
        preview: { bg: '#f5f3ff', accent: '#7c3aed', style: 'gradient' },
        data: {
            title: 'The Future of Work: A Strategic Synthesis',
            subtitle: 'Synthesizing emerging research, behavioral shifts, and organizational design principles to define the future of the modern enterprise.',
            author: 'Isabelle Fontaine',
            role: 'Senior Research Strategist',
            accent: '#7c3aed',
            bodyFont: 'Crimson Pro',
            headingFont: 'Raleway',
            titleSize: 58,
            headingSize: 32,
            bodySize: 16,
            lineHeight: 1.9,
            sections: [
                { id: 1, title: 'The Great Recalibration', content: '> The office is no longer a place. It is an experience — and experiences must earn their audience.\n\nThe pandemic accelerated a decade of workplace evolution into three years. What emerged is not a return to the old normal, nor a wholesale embrace of the remote model, but something entirely new: a dynamic, purpose-driven approach to where, when, and how work happens.\n\nOrganizations that embrace this fluidity as a strategic advantage will attract disproportionate talent and outperform those that impose rigid mandates.' },
                { id: 2, title: 'Three Models Emerging', content: 'Our research across 500 global organizations reveals three distinct workplace models crystallizing in the market.\n\n1. The Anchor Model: A flagship headquarters serves as a cultural hub; employees attend for high-value collaboration, not routine work.\n2. The Distributed Model: Fully remote or near-fully remote; performance-based, async-first, globally sourced talent.\n3. The Fluid Model: Team-led, season-aware; adapts quarterly based on project demands and team composition.\n\nNo single model is universally superior. Fit depends on organizational culture, industry context, and talent strategy.' },
                { id: 3, title: 'Technology as Fabric', content: 'In every successful future-of-work model, technology is not a tool — it is the connective tissue of the organization.\n\n- AI-assisted scheduling reduced coordination overhead by 41% in pilot organizations\n- Async communication platforms (Loom, Notion, Slack) improved documentation quality and reduced meeting load\n- Digital HQ platforms (Microsoft Viva, Notion) created unified culture layers for distributed teams\n\n> The companies winning the talent war are not those with the best perks. They are the ones with the most elegant digital work environments.' },
                { id: 4, title: 'Design Principles for the Future', content: 'Based on our synthesis, we offer six design principles for future-ready organizations.\n\n1. Asynchrony-first: Default to async, meet only when synchronous interaction adds irreplaceable value.\n2. Radical documentation: Write everything down. Institutional knowledge is a competitive asset.\n3. Outcomes over presence: Measure what gets done, not when or where it gets done.\n4. Psychological safety as infrastructure: Create environments where risk-taking is encouraged and failure is instructive.\n5. Team autonomy within guardrails: Empower teams to self-organize within clear strategic and cultural boundaries.\n6. Continuous listening: Treat employee feedback as a real-time data stream, not an annual event.' }
            ]
        }
    },

    charcoal: {
        label: 'Charcoal Stone',
        description: 'Dark grey with warm amber accents. Sophisticated and grounded. Great for strategy reports.',
        accent: '#f59e0b',
        bodyFont: 'Lora',
        headingFont: 'Space Grotesk',
        tag: 'Strategy',
        layout: 'fullbleed',
        preview: { bg: '#1c1917', accent: '#f59e0b', style: 'charcoal' },
        data: {
            title: 'Long-Range Strategic Plan 2025–2030',
            subtitle: 'A five-year strategic roadmap defining mission, vision, key bets, and the organizational capabilities required to achieve sustained market leadership.',
            author: 'Thomas Eriksson',
            role: 'Chief Executive Officer',
            accent: '#f59e0b',
            bodyFont: 'Lora',
            headingFont: 'Space Grotesk',
            titleSize: 52,
            headingSize: 28,
            bodySize: 15,
            lineHeight: 1.85,
            sections: [
                { id: 1, title: 'Our North Star', content: '> We do not build for quarters. We build for decades.\n\nThe purpose of this five-year plan is not to predict the future — no document can do that. It is to articulate the choices we are making today about who we are, what we stand for, and where we will play to win.\n\nOur North Star for 2030: To be the undisputed category leader in our core market, with a business model so resilient that economic downturns become strategic acquisition opportunities.' },
                { id: 2, title: 'Where We Will Play', content: 'Strategic clarity begins with explicit choices about where you will compete and where you will not.\n\n1. Primary market: Mid-market and enterprise B2B, North America and Europe\n2. Adjacent expansion: Asia-Pacific, beginning with Singapore and Australia in 2027\n3. Category creation: AI-native workflow tooling (no incumbent holds a dominant position)\n\nWhere we will NOT compete:\n- SMB self-serve market (margin structure incompatible with our cost base)\n- Consumer applications (different motion, different talent, different distribution)' },
                { id: 3, title: 'The Three Big Bets', content: 'Long-range strategy requires conviction. We are making three big bets that we believe will compound into decisive competitive advantage by 2030.\n\n| Bet | Investment | Expected Payoff |\n|---|---|---|\n| AI-Native Product | $45M over 3 years | 2x NRR, 40% reduction in churn |\n| Category Leadership | $30M over 5 years | #1 brand recall in target segment |\n| Platform Ecosystem | $20M over 4 years | 30% of revenue through partnerships |\n\nThese bets are sequenced, not simultaneous. AI-native product comes first; it is the foundation on which the others depend.' },
                { id: 4, title: 'Organizational Capabilities Required', content: 'Strategy is only as good as the organization\'s ability to execute it. We have identified four critical capability gaps we must close by 2026.\n\n- AI & ML Engineering: Scale from 12 to 60 dedicated ML engineers\n- Enterprise Sales Motion: Build a proven, repeatable six-figure deal playbook\n- Global Operations: Establish a scalable, multi-currency, multi-region infrastructure\n- Executive Leadership Depth: Develop the next generation of leaders from within\n\nCapability building is not a support function — it is the strategy.' }
            ]
        }
    },

    coral: {
        label: 'Coral Warm',
        description: 'Terracotta and coral hues with elegant Fraunces headings. Warm, human, premium.',
        accent: '#e11d48',
        bodyFont: 'DM Sans',
        headingFont: 'Fraunces',
        tag: 'Creative',
        layout: 'centered',
        preview: { bg: '#fff1f2', accent: '#e11d48', style: 'coral' },
        data: {
            title: 'Social Impact Annual Report 2024',
            subtitle: 'Measuring our commitment to people, planet, and purpose — and sharing the stories that numbers alone cannot tell.',
            author: 'Naledi Dlamini',
            role: 'Chief Impact Officer',
            accent: '#e11d48',
            bodyFont: 'DM Sans',
            headingFont: 'Fraunces',
            titleSize: 56,
            headingSize: 32,
            bodySize: 15,
            lineHeight: 1.95,
            sections: [
                { id: 1, title: 'A Letter from Our Impact Team', content: '> Profit and purpose are not in tension. They are in partnership.\n\nThis report is our annual act of transparency — a public commitment to share not just our wins, but the full picture of our journey toward becoming a truly regenerative organization.\n\nIn 2024, we reached more communities, reduced our environmental footprint more aggressively than planned, and deepened our investment in the human beings at the heart of our mission. We are proud — and we are not done.' },
                { id: 2, title: 'Community Impact', content: 'Our community programs reached 142,000 individuals this year across 17 countries.\n\n1. Education Initiative: Funded 3,400 scholarships for underrepresented students in STEM\n2. Small Business Grants: Distributed $4.2M to 890 women-owned small businesses\n3. Digital Inclusion Program: Provided devices and connectivity to 12,000 households in low-income communities\n\n> The scholarship changed my life. I am the first person in my family to attend university.\n> — Program Beneficiary, Lagos, Nigeria' },
                { id: 3, title: 'Environmental Progress', content: 'Our environmental commitments are legally binding and audited annually by an independent third party.\n\n- Carbon emissions reduced 34% against our 2022 baseline (target: 30%)\n- 100% of office locations now powered by renewable energy\n- Supply chain emissions reporting now covers 78% of Scope 3 categories\n\n| Commitment | 2024 Status | 2030 Target |\n|---|---|---|\n| Net Zero Operations | On Track | 2026 |\n| Net Zero Supply Chain | Behind | 2030 |\n| Zero Waste to Landfill | Achieved | 2024 |' },
                { id: 4, title: 'Looking to 2025', content: 'Our 2025 impact agenda is our most ambitious yet. We are not incrementalizing — we are making step-changes.\n\n- Launch the EduAI Education Foundation with $10M inaugural endowment\n- Achieve Fair Trade certification for our primary supply chain\n- Expand community programs to 5 new countries across Sub-Saharan Africa\n- Publish our first TNFD-aligned nature risk report\n\nImpact is not a department. It is the entire organization, aligned around a shared belief that business is the most powerful force for human progress when directed with intention and accountability.' }
            ]
        }
    }
};