const marketingBoards = [
    {
        id: "heymarketers",
        name: "Hey Marketers",
        url: "https://heymarketers.com/",
        description: "The best place to find marketing jobs at top tech companies and startups.",
        category: "Marketing",
        region: "Global",
        badges: ["Tech Marketing", "Startups", "Global"],
        icon: "📣"
    },
    {
        id: "growth_hub",
        name: "GrowthHub Jobs",
        url: "https://growthhub.com/jobs",
        description: "Specialized job board for growth marketers, product managers, and data-driven advertisers.",
        category: "Marketing",
        region: "Global",
        badges: ["Growth", "Data", "Marketing"],
        icon: "🚀"
    },
    {
        id: "salesloft_careers",
        name: "SalesLoft Careers",
        url: "https://salesloft.com/careers",
        description: "Leading sales engagement platform hiring for sales, account management, and growth roles.",
        category: "Marketing",
        region: "Global",
        badges: ["Sales", "Enterprise", "High Pay"],
        icon: "📈"
    },
    {
        id: "marketing_brew",
        name: "Marketing Brew Jobs",
        url: "https://www.morningbrew.com/marketing/jobs",
        description: "Curated marketing roles from the team behind the popular Marketing Brew newsletter.",
        category: "Marketing",
        region: "North America",
        badges: ["Curated", "Media", "Marketing"],
        icon: "☕"
    },
    {
        id: "content_writing_jobs",
        name: "Content Writing Jobs",
        url: "https://contentwritingjobs.com/",
        description: "The premiere job board for content marketers, copywriters, and creative writers.",
        category: "Marketing",
        region: "Global",
        badges: ["Writing", "Content", "Global"],
        icon: "✍️"
    },
    {
        id: "demand_curve",
        name: "Demand Curve Jobs",
        url: "https://www.demandcurve.com/jobs",
        description: "Growth marketing jobs at vetted startups, curated by growth experts.",
        category: "Marketing",
        region: "Global",
        badges: ["Growth", "Startups", "Elite"],
        icon: "📉"
    },

    {
        id: "inbound_jobs",
        name: "Inbound Jobs",
        url: "https://www.inbound.org/jobs",
        description: "HubSpot ecosystem job board focused on inbound marketing, CRM, and lifecycle marketing roles.",
        category: "Marketing",
        region: "Global",
        badges: ["Inbound", "CRM", "Growth"],
        icon: "📥"
    },
    {
        id: "moz_jobs",
        name: "Moz Careers",
        url: "https://moz.com/about/jobs",
        description: "SEO-focused company hiring roles in search marketing, analytics, and content strategy.",
        category: "Marketing",
        region: "Global",
        badges: ["SEO", "Search", "Content"],
        icon: "🔎"
    },
    {
        id: "ahrefs_jobs",
        name: "Ahrefs Careers",
        url: "https://ahrefs.com/careers",
        description: "SEO software company hiring marketers, content strategists, and data analysts.",
        category: "Marketing",
        region: "Global",
        badges: ["SEO", "Data", "Content"],
        icon: "📊"
    },
    {
        id: "semrush_jobs",
        name: "SEMrush Careers",
        url: "https://www.semrush.com/company/careers/",
        description: "Global SEO and digital marketing platform hiring growth marketers and analysts.",
        category: "Marketing",
        region: "Global",
        badges: ["SEO", "Analytics", "Growth"],
        icon: "📈"
    },
    {
        id: "search_engine_land_jobs",
        name: "Search Engine Land Jobs",
        url: "https://jobs.searchengineland.com/",
        description: "Job board focused on SEO, PPC, and search marketing professionals.",
        category: "Marketing",
        region: "Global",
        badges: ["SEO", "PPC", "Search"],
        icon: "🧭"
    },
    {
        id: "ppc_jobs",
        name: "PPC Hero Jobs",
        url: "https://www.ppchero.com/jobs/",
        description: "Performance marketing job board focused on paid ads (Google Ads, Meta Ads, etc).",
        category: "Marketing",
        region: "Global",
        badges: ["PPC", "Ads", "Performance"],
        icon: "💰"
    },
    {
        id: "meta_careers_marketing",
        name: "Meta Marketing Careers",
        url: "https://www.metacareers.com/",
        description: "Marketing, growth, and ads ecosystem jobs at Meta (Facebook, Instagram, WhatsApp).",
        category: "Marketing",
        region: "Global",
        badges: ["Ads", "Social Media", "Scale"],
        icon: "📱"
    },
    {
        id: "google_ads_jobs",
        name: "Google Ads Careers",
        url: "https://careers.google.com/",
        description: "Performance marketing, ad tech, and growth analytics roles at Google.",
        category: "Marketing",
        region: "Global",
        badges: ["Ads", "Data", "Scale"],
        icon: "🔍"
    },
    {
        id: "hubspot_careers",
        name: "HubSpot Careers",
        url: "https://www.hubspot.com/careers",
        description: "Inbound marketing, CRM, and growth platform hiring marketers globally.",
        category: "Marketing",
        region: "Global",
        badges: ["Inbound", "CRM", "Growth"],
        icon: "🧲"
    },
    {
        id: "copyhackers_jobs",
        name: "Copyhackers Jobs",
        url: "https://copyhackers.com/jobs/",
        description: "Top-tier copywriting and conversion optimization job board.",
        category: "Marketing",
        region: "Global",
        badges: ["Copywriting", "Conversion", "Elite"],
        icon: "📝"
    },
    {
        id: "copyblogger_jobs",
        name: "Copyblogger Jobs",
        url: "https://copyblogger.com/jobs/",
        description: "Content marketing and SEO writing opportunities for creators and strategists.",
        category: "Marketing",
        region: "Global",
        badges: ["Content", "SEO", "Writing"],
        icon: "✏️"
    },
    {
        id: "superpath_jobs",
        name: "Superpath Jobs",
        url: "https://superpath.co/jobs",
        description: "Community-driven content marketing job board for writers and strategists.",
        category: "Marketing",
        region: "Global",
        badges: ["Content", "Community", "Writing"],
        icon: "🧑‍💻"
    },
    {
        id: "creator_economy_jobs",
        name: "Creator Economy Jobs",
        url: "https://creatoreconomyjobs.com/",
        description: "Jobs in influencer marketing, creator platforms, and social media growth.",
        category: "Marketing",
        region: "Global",
        badges: ["Influencer", "Social Media", "Creators"],
        icon: "🎥"
    },
    {
        id: "linkedin_marketing_jobs",
        name: "LinkedIn Marketing Jobs",
        url: "https://www.linkedin.com/jobs/",
        description: "Largest global hub for marketing, brand, and growth roles.",
        category: "Marketing",
        region: "Global",
        badges: ["Corporate", "B2B", "Global"],
        icon: "💼"
    },
    {
        id: "marketingweek_jobs",
        name: "Marketing Week Jobs",
        url: "https://jobs.marketingweek.com/",
        description: "UK/EU-focused marketing careers in brand, strategy, and advertising.",
        category: "Marketing",
        region: "Europe",
        badges: ["Brand", "Strategy", "Europe"],
        icon: "🇬🇧"
    }
];
