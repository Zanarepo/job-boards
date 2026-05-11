const globalBoards = [
    {
        id: "indeed",
        name: "Indeed",
        url: "https://www.indeed.com/",
        description: "Comprehensive job search engine with millions of listings across every industry globally.",
        category: "Global",
        region: "Global",
        badges: ["All Roles", "International"],
        icon: "🔍"
    },
    // REMOTE FOCUS
    {
        id: "wwr",
        name: "We Work Remotely",
        url: "https://weworkremotely.com/",
        description: "The largest remote work community in the world. High-quality tech and creative roles.",
        category: "Remote",
        region: "Global",
        badges: ["100% Remote", "SaaS", "Dev"],
        icon: "🏠"
    },
    {
        id: "remoteok",
        name: "Remote OK",
        url: "https://remoteok.com/",
        description: "Popular platform for digital nomads and remote workers. Great for devs and designers.",
        category: "Remote",
        region: "Global",
        badges: ["Nomad", "High Pay", "Tech"],
        icon: "✅"
    },
    {
        id: "remoteco",
        name: "Remote.co",
        url: "https://remote.co/remote-jobs/",
        description: "Curated remote job listings across customer service, marketing, tech, and more.",
        category: "Remote",
        region: "Global",
        badges: ["100% Remote", "Curated", "All Roles"],
        icon: "🌐"
    },
    {
        id: "flexjobs",
        name: "FlexJobs",
        url: "https://www.flexjobs.com/",
        description: "Screened and verified remote, hybrid, and flexible jobs. Zero scam listings guaranteed.",
        category: "Remote",
        region: "Global",
        badges: ["Verified", "Remote", "Flexible"],
        icon: "🔒"
    },
    {
        id: "remotive",
        name: "Remotive",
        url: "https://remotive.com/",
        description: "Curated remote tech jobs from top companies. Also features a thriving Slack community.",
        category: "Remote",
        region: "Global",
        badges: ["100% Remote", "Tech", "Community"],
        icon: "📡"
    },
    {
        id: "remoteleaf",
        name: "Remote Leaf",
        url: "https://remoteleaf.com/",
        description: "Hand-picked remote jobs aggregated daily from 50+ sources into one clean feed.",
        category: "Remote",
        region: "Global",
        badges: ["Aggregator", "Daily", "Tech"],
        icon: "🍃"
    },
    {
        id: "jobspresso",
        name: "Jobspresso",
        url: "https://jobspresso.co/",
        description: "High-quality, hand-picked remote jobs in tech, marketing, customer support, and more.",
        category: "Remote",
        region: "Global",
        badges: ["Curated", "Remote", "Quality"],
        icon: "☕"
    },
    {
        id: "himalayas",
        name: "Himalayas",
        url: "https://himalayas.app/",
        description: "Async-first remote jobs with deep company profiles, timezone filters, and salary ranges.",
        category: "Remote",
        region: "Global",
        badges: ["Async", "Remote", "Profiles"],
        icon: "🏔️"
    },
    {
        id: "nodesk",
        name: "NoDesk",
        url: "https://nodesk.co/remote-jobs/",
        description: "Remote job listings paired with a curated directory of remote work resources and tools.",
        category: "Remote",
        region: "Global",
        badges: ["Remote", "Resources", "Dev"],
        icon: "💻"
    },
    {
        id: "dynamitejobs",
        name: "Dynamite Jobs",
        url: "https://dynamitejobs.com/",
        description: "The home of bootstrapped and indie company remote jobs — great for culture-fit seekers.",
        category: "Remote",
        region: "Global",
        badges: ["Indie", "Remote", "Bootstrapped"],
        icon: "🧨"
    },
    {
        id: "4dayweek",
        name: "4 Day Week",
        url: "https://4dayweek.io/",
        description: "Remote jobs at companies with a 4-day work week. Work smarter, not longer.",
        category: "Remote",
        region: "Global",
        badges: ["4-Day Week", "Remote", "Work-Life"],
        icon: "📅"
    },
    {
        id: "workingnomads",
        name: "Working Nomads",
        url: "https://www.workingnomads.com/jobs",
        description: "Curated list of remote digital jobs for location-independent professionals and nomads.",
        category: "Remote",
        region: "Global",
        badges: ["Nomad", "Remote", "Digital"],
        icon: "🧳"
    },
    {
        id: "pangian",
        name: "Pangian",
        url: "https://pangian.com/",
        description: "Remote-first job network with a strong global community and company culture pages.",
        category: "Remote",
        region: "Global",
        badges: ["Community", "Remote", "Global"],
        icon: "🌏"
    },
    // SAAS & STARTUPS
    {
        id: "wellfound",
        name: "Wellfound (AngelList)",
        url: "https://wellfound.com/jobs",
        description: "The best place to find jobs at startups. SaaS, Fintech, and emerging tech focus.",
        category: "SaaS",
        region: "Global",
        badges: ["Startups", "Equity", "SaaS"],
        icon: "✌️"
    },
    {
        id: "ycombinator",
        name: "Y Combinator",
        url: "https://www.ycombinator.com/jobs",
        description: "Apply to hundreds of YC-backed startups with a single application profile.",
        category: "SaaS",
        region: "Global",
        badges: ["Startups", "Top Tier", "Tech"],
        icon: "🧡"
    },
    {
        id: "producthuntjobs",
        name: "Product Hunt Jobs",
        url: "https://www.producthunt.com/jobs",
        description: "Job listings from cutting-edge startups launching on Product Hunt daily.",
        category: "SaaS",
        region: "Global",
        badges: ["Startups", "Product", "Early Stage"],
        icon: "🐱"
    },
    {
        id: "hackernewsjobs",
        name: "Hacker News Who's Hiring",
        url: "https://news.ycombinator.com/jobs",
        description: "Monthly 'Who is Hiring?' thread from the HN community. Pure signal, no noise.",
        category: "SaaS",
        region: "Global",
        badges: ["Engineer", "Startups", "Community"],
        icon: "🟧"
    },
    {
        id: "startupjobs",
        name: "Startup Jobs",
        url: "https://startup.jobs/",
        description: "Thousands of open roles at venture-backed and bootstrapped startups worldwide.",
        category: "SaaS",
        region: "Global",
        badges: ["Startups", "VC-backed", "Global"],
        icon: "🚀"
    },
    // FREELANCE / FAAS
    {
        id: "toptal",
        name: "Toptal",
        url: "https://www.toptal.com/",
        description: "Exclusive network of the top 3% of freelance talent globally.",
        category: "FaaS",
        region: "Global",
        badges: ["Elite", "Freelance", "High End"],
        icon: "💎"
    },
    {
        id: "upwork",
        name: "Upwork",
        url: "https://www.upwork.com/",
        description: "World's largest freelance marketplace for all types of digital work.",
        category: "FaaS",
        region: "Global",
        badges: ["Freelance", "Gigs", "Global"],
        icon: "🟢"
    },
    {
        id: "fiverr",
        name: "Fiverr",
        url: "https://www.fiverr.com/",
        description: "Marketplace for creative and digital services starting from micro-gigs to enterprise projects.",
        category: "FaaS",
        region: "Global",
        badges: ["Gigs", "Creative", "Global"],
        icon: "🎯"
    },
    {
        id: "peopleperhour",
        name: "PeoplePerHour",
        url: "https://www.peopleperhour.com/",
        description: "UK-origin freelance platform popular for design, writing, and development projects.",
        category: "FaaS",
        region: "Europe",
        badges: ["UK", "Freelance", "Digital"],
        icon: "⏱️"
    },
    {
        id: "contra",
        name: "Contra",
        url: "https://contra.com/",
        description: "Commission-free freelance platform with a portfolio-first approach for independent workers.",
        category: "FaaS",
        region: "Global",
        badges: ["0% Commission", "Portfolio", "Freelance"],
        icon: "🎨"
    },
    {
        id: "guru",
        name: "Guru",
        url: "https://www.guru.com/",
        description: "Freelance marketplace with workroom collaboration tools for long-term client relationships.",
        category: "FaaS",
        region: "Global",
        badges: ["Freelance", "Collaboration", "Long-term"],
        icon: "🧘"
    }
];
