const americasBoards = [
    // NORTH AMERICA
    {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/",
        description: "The world's largest professional network. Excellent for all roles including remote and hybrid.",
        category: "Global",
        region: "North America",
        badges: ["Remote", "Hybrid", "Global"],
        icon: "💼"
    },
    {
        id: "builtin",
        name: "Built In",
        url: "https://builtin.com/",
        description: "The hub for startups and tech companies in major US tech hubs.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "Startups", "USA"],
        icon: "🏗️"
    },
    {
        id: "hired",
        name: "Hired",
        url: "https://hired.com/",
        description: "Companies apply to you. Focused on tech, product, and design roles in North America and UK.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "High Pay", "Vetted"],
        icon: "🤝"
    },
    {
        id: "dice",
        name: "Dice",
        url: "https://www.dice.com/",
        description: "The leading tech job board in the US with thousands of remote and on-site roles for engineers.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "Engineering", "USA"],
        icon: "🎲"
    },
    {
        id: "ziprecruiter",
        name: "ZipRecruiter",
        url: "https://www.ziprecruiter.com/",
        description: "AI-powered job matching platform connecting millions of job seekers and employers in North America.",
        category: "Global",
        region: "North America",
        badges: ["AI Match", "All Roles", "USA"],
        icon: "⚡"
    },
    {
        id: "glassdoor",
        name: "Glassdoor",
        url: "https://www.glassdoor.com/Job/",
        description: "Job listings combined with insider company reviews, salaries, and interview insights.",
        category: "Global",
        region: "North America",
        badges: ["Reviews", "Salary Data", "Global"],
        icon: "🏢"
    },

    // SOUTH AMERICA
    {
        id: "getonbrd",
        name: "Getonbrd",
        url: "https://www.getonbrd.com/",
        description: "The leading platform for tech jobs in Latin America.",
        category: "Tech",
        region: "South America",
        badges: ["LatAm", "Tech", "Remote"],
        icon: "🚢"
    },
    {
        id: "torre",
        name: "Torre",
        url: "https://torre.ai/",
        description: "A new way to find work globally, with a very strong user base in Latin America.",
        category: "Remote",
        region: "South America",
        badges: ["AI Match", "LatAm", "Global"],
        icon: "🗼"
    },
    {
        id: "infojobsbr",

        name: "InfoJobs Brazil",
        url: "https://www.infojobs.com.br/",
        description: "One of the most visited job sites in Brazil for all professional levels.",
        category: "Global",
        region: "South America",
        badges: ["Brazil", "All Levels"],
        icon: "🇧🇷"
    },
    {
        id: "computrabajo",
        name: "Computrabajo",
        url: "https://www.computrabajo.com/",
        description: "A major job portal covering Mexico, Colombia, Argentina, Chile and more.",
        category: "Global",
        region: "South America",
        badges: ["LatAm", "Spanish", "Wide Coverage"],
        icon: "💻"
    },
    {
        id: "olxemprego",
        name: "OLX Emprego",
        url: "https://www.olx.com.br/trabalho-e-servicos",
        description: "Brazil's popular classifieds platform with a robust jobs and services section.",
        category: "Global",
        region: "South America",
        badges: ["Brazil", "Classifieds", "Local"],
        icon: "📌"
    },
    {
        id: "bumeran",
        name: "Bumeran",
        url: "https://www.bumeran.com/",
        description: "Latin America's largest job portal with 60K+ listings and 11M+ monthly visitors across 12 countries including Argentina, Peru, Mexico, Chile, and Ecuador.",
        category: "Global",
        region: "South America",
        badges: ["LatAm", "Wide Coverage", "Spanish"],
        icon: "🪃"
    },
    {
        id: "laborum",
        name: "Laborum",
        url: "https://www.laborum.com/",
        description: "Multi-country LatAm job board operating across Chile, Peru, Colombia, Ecuador, and Bolivia.",
        category: "Global",
        region: "South America",
        badges: ["LatAm", "Multi-country", "Spanish"],
        icon: "🌎"
    },

    // ── MEXICO ────────────────────────────────────────────────────


    {
        id: "indeed",
        name: "Indeed",
        url: "https://www.indeed.com/",
        description: "The world's most-visited job board with 130M+ listings globally and 4M+ new postings per day across every industry.",
        category: "Global",
        region: "North America",
        badges: ["All Industries", "High Volume", "Global"],
        icon: "🔍"
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/",
        description: "The world's largest professional network. 20M+ live postings, excellent for all roles including remote and hybrid.",
        category: "Global",
        region: "North America",
        badges: ["Remote", "Hybrid", "Global"],
        icon: "💼"
    },
    {
        id: "glassdoor",
        name: "Glassdoor",
        url: "https://www.glassdoor.com/Job/",
        description: "Job listings combined with insider company reviews, salaries, and interview insights.",
        category: "Global",
        region: "North America",
        badges: ["Reviews", "Salary Data", "Global"],
        icon: "🏢"
    },
    {
        id: "ziprecruiter",
        name: "ZipRecruiter",
        url: "https://www.ziprecruiter.com/",
        description: "AI-powered job matching platform reaching 12M+ seekers per week by distributing to 100+ partner boards.",
        category: "Global",
        region: "North America",
        badges: ["AI Match", "All Roles", "USA"],
        icon: "⚡"
    },
    {
        id: "monster",
        name: "Monster",
        url: "https://www.monster.com/",
        description: "A pioneer of online recruiting, reinvented with AI job recommendations, resume evaluation tools, and career coaching.",
        category: "Global",
        region: "North America",
        badges: ["All Levels", "Resume Help", "USA"],
        icon: "👾"
    },
    {
        id: "careerbuilder",
        name: "CareerBuilder",
        url: "https://www.careerbuilder.com/",
        description: "Data-backed hiring platform since 1995 with AI candidate matching, labor market insights, and 17.5M+ candidate profiles.",
        category: "Global",
        region: "North America",
        badges: ["AI Match", "Data-Driven", "USA"],
        icon: "🏗️"
    },
    {
        id: "simplyhired",
        name: "SimplyHired",
        url: "https://www.simplyhired.com/",
        description: "Aggregates listings from company sites, job boards, and agencies into one searchable database with salary estimates.",
        category: "Global",
        region: "North America",
        badges: ["Aggregator", "Free", "Salary Data"],
        icon: "🗂️"
    },
    {
        id: "usajobs",
        name: "USAJobs",
        url: "https://www.usajobs.gov/",
        description: "The official US federal government job portal, listing 50K–200K+ federal positions monthly across all agencies.",
        category: "Government",
        region: "North America",
        badges: ["Government", "Federal", "USA"],
        icon: "🦅"
    },

    // ── NORTH AMERICA — TECH & STARTUPS ───────────────────────────
    {
        id: "builtin",
        name: "Built In",
        url: "https://builtin.com/",
        description: "The hub for startups and tech companies in major US tech hubs like Austin, Chicago, and San Francisco.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "Startups", "USA"],
        icon: "🏗️"
    },
    {
        id: "dice",
        name: "Dice",
        url: "https://www.dice.com/",
        description: "The leading US tech job board with 70K+ listings for engineers, developers, AI/ML, cloud, and data science roles.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "Engineering", "USA"],
        icon: "🎲"
    },
    {
        id: "wellfound",
        name: "Wellfound (AngelList)",
        url: "https://wellfound.com/",
        description: "Formerly AngelList Talent. The go-to platform for startup jobs at high-growth companies with equity transparency.",
        category: "Tech",
        region: "North America",
        badges: ["Startups", "Equity", "Tech"],
        icon: "🚀"
    },
    {
        id: "hired",
        name: "Hired",
        url: "https://hired.com/",
        description: "Companies apply to you. Focused on tech, product, and design roles in North America and the UK.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "High Pay", "Vetted"],
        icon: "🤝"
    },
    {
        id: "ycombinator_jobs",
        name: "Y Combinator Jobs",
        url: "https://www.ycombinator.com/jobs",
        description: "Work at a startup board featuring jobs exclusively at YC-backed companies, from seed to Series C and beyond.",
        category: "Tech",
        region: "North America",
        badges: ["YC", "Startups", "Equity"],
        icon: "🔶"
    },

    // ── NORTH AMERICA — REMOTE & FLEXIBLE ─────────────────────────
    {
        id: "flexjobs",
        name: "FlexJobs",
        url: "https://www.flexjobs.com/",
        description: "Hand-screened remote and flexible jobs with 100K+ fresh roles added monthly. Subscription-based, no scams.",
        category: "Remote",
        region: "North America",
        badges: ["Remote", "Vetted", "Flexible"],
        icon: "🏠"
    },
    {
        id: "remoteok",
        name: "Remote OK",
        url: "https://remoteok.com/",
        description: "One of the most popular remote-only job boards, strong in tech and design, used by engineers worldwide.",
        category: "Remote",
        region: "North America",
        badges: ["Remote", "Tech", "Global"],
        icon: "🌍"
    },
    {
        id: "weworkremotely",
        name: "We Work Remotely",
        url: "https://weworkremotely.com/",
        description: "The largest remote work community. Curated listings in programming, design, marketing, and customer support.",
        category: "Remote",
        region: "North America",
        badges: ["Remote", "Curated", "Global"],
        icon: "💻"
    },

    // ── NORTH AMERICA — NICHE ─────────────────────────────────────
    {
        id: "snagajob",
        name: "Snagajob",
        url: "https://www.snagajob.com/",
        description: "The leading board for hourly and part-time roles in the US. 6M+ monthly seekers across retail, restaurant, and healthcare.",
        category: "Hourly",
        region: "North America",
        badges: ["Hourly", "Part-Time", "USA"],
        icon: "⏱️"
    },
    {
        id: "idealist",
        name: "Idealist",
        url: "https://www.idealist.org/",
        description: "Dedicated to nonprofit, NGO, and mission-driven roles. Includes internships, volunteer work, and full-time positions.",
        category: "NGO",
        region: "North America",
        badges: ["Nonprofit", "NGO", "Mission-Driven"],
        icon: "💚"
    },
    {
        id: "theladders",
        name: "The Ladders",
        url: "https://www.theladders.com/",
        description: "Curated board for six-figure earners. Focused exclusively on senior-level and executive positions across the US.",
        category: "Executive",
        region: "North America",
        badges: ["Executive", "Senior", "High Pay"],
        icon: "🪜"
    },
    {
        id: "craigslist_jobs",
        name: "Craigslist Jobs",
        url: "https://www.craigslist.org/about/sites",
        description: "Hyper-local classifieds with a large jobs section. Great for small businesses, local gigs, and hourly work across US cities.",
        category: "Local",
        region: "North America",
        badges: ["Local", "Gig", "Free"],
        icon: "📋"
    },

    // ── CANADA ────────────────────────────────────────────────────
    {
        id: "workopolis",
        name: "Workopolis",
        url: "https://www.workopolis.com/",
        description: "One of Canada's most established job boards, covering all industries and provinces across the country.",
        category: "Global",
        region: "North America",
        badges: ["Canada", "All Industries"],
        icon: "🇨🇦"
    },
    {
        id: "eluta",
        name: "Eluta",
        url: "https://www.eluta.ca/",
        description: "Canadian job search engine that aggregates listings directly from employer career pages for fresh, accurate results.",
        category: "Global",
        region: "North America",
        badges: ["Canada", "Aggregator", "Verified"],
        icon: "🇨🇦"
    },
    {
        id: "jobbank",
        name: "Job Bank Canada",
        url: "https://www.jobbank.gc.ca/",
        description: "The official Government of Canada job board, covering federal and provincial employment opportunities nationwide.",
        category: "Government",
        region: "North America",
        badges: ["Canada", "Government", "Free"],
        icon: "🍁"
    },

    // ── SOUTH AMERICA ─────────────────────────────────────────────
    {
        id: "getonbrd",
        name: "Getonbrd",
        url: "https://www.getonbrd.com/",
        description: "The leading platform for tech and digital jobs in Latin America. Transparent salaries and remote-friendly listings.",
        category: "Tech",
        region: "South America",
        badges: ["LatAm", "Tech", "Remote"],
        icon: "🚢"
    },
    {
        id: "torre",
        name: "Torre",
        url: "https://torre.ai/",
        description: "AI-powered professional network and job board with a strong user base in Latin America and global reach.",
        category: "Remote",
        region: "South America",
        badges: ["AI Match", "LatAm", "Global"],
        icon: ""
    },
    {
        id: "catho",

        name: "Catho",
        url: "https://www.catho.com.br/",
        description: "One of Brazil's largest and oldest online recruitment platforms, strong in mid-to-senior level professionals.",
        category: "Global",
        region: "South America",
        badges: ["Brazil", "Mid-Senior", "Established"],
        icon: "🇧🇷"
    },
    {
        id: "computrabajo",
        name: "Computrabajo",
        url: "https://www.computrabajo.com/",
        description: "Major job portal covering Mexico, Colombia, Argentina, Chile, and a dozen more LatAm countries.",
        category: "Global",
        region: "South America",
        badges: ["LatAm", "Spanish", "Wide Coverage"],
        icon: "💻"
    },
    {
        id: "bumeran",
        name: "Bumeran",
        url: "https://www.bumeran.com/",
        description: "Latin America's largest job portal with 60K+ listings and 11M+ monthly visitors across 12 countries including Argentina, Peru, Mexico, Chile, and Ecuador.",
        category: "Global",
        region: "South America",
        badges: ["LatAm", "Wide Coverage", "Spanish"],
        icon: "🪃"
    },
    {
        id: "occmundial",
        name: "OCC Mundial",
        url: "https://www.occ.com.mx/",
        description: "Mexico's largest and most established job board, widely used by companies of all sizes for professional recruitment.",
        category: "Global",
        region: "South America",
        badges: ["Mexico", "Established", "Spanish"],
        icon: "🇲🇽"
    },
    {
        id: "elempleo",
        name: "ElEmpleo",
        url: "https://www.elempleo.com/",
        description: "Colombia's leading job board, connecting professionals with top companies across all industries in the country.",
        category: "Global",
        region: "South America",
        badges: ["Colombia", "All Industries"],
        icon: "🇨🇴"
    },
    {
        id: "trabajando",
        name: "Trabajando.com",
        url: "https://www.trabajando.com/",
        description: "Major job platform across Chile, Colombia, Mexico, and Peru. Known for employer branding and career development tools.",
        category: "Global",
        region: "South America",
        badges: ["Chile", "Multi-country", "Spanish"],
        icon: "🇨🇱"
    },
    {
        id: "zonajobs",
        name: "ZonaJobs",
        url: "https://www.zonajobs.com.ar/",
        description: "Argentina's major online job portal with a wide range of listings across professional sectors.",
        category: "Global",
        region: "South America",
        badges: ["Argentina", "All Sectors"],
        icon: "🇦🇷"
    },
    {
        id: "laborum",
        name: "Laborum",
        url: "https://www.laborum.com/",
        description: "Multi-country LatAm job board operating across Chile, Peru, Colombia, Ecuador, and Bolivia.",
        category: "Global",
        region: "South America",
        badges: ["LatAm", "Multi-country", "Spanish"],
        icon: "🌎"
    },
    {
        id: "olxemprego",
        name: "OLX Emprego",
        url: "https://www.olx.com.br/trabalho-e-servicos",
        description: "Brazil's popular classifieds platform with a robust jobs and services section for local and gig work.",
        category: "Local",
        region: "South America",
        badges: ["Brazil", "Classifieds", "Local"],
        icon: "📌"
    },
    {
        id: "konzerta",
        name: "Konzerta",
        url: "https://www.konzerta.com/",
        description: "Leading job portal in Panama, part of the Bumeran group. Covers professional and blue-collar roles across Central America.",
        category: "Global",
        region: "South America",
        badges: ["Panama", "Central America", "Spanish"],
        icon: "🇵🇦"
    },
    {
        id: "bayareamania",
        name: "Bay Area Mania - Jobs Abroad",
        url: "https://www.bayareamania.com/jobs-abroad",
        description: "A jobs board that aggregates opportunities for working abroad, including in the Americas.",
        category: "Global",
        region: "Americas",
        badges: ["Americas", "International", "Work Abroad"],
        icon: "🌍"
    },
    {
        name: "Job in France",
        url: "https://jobinfrance.com/",
        description: "Job board for English speakers in France.",
        category: "Jobs",
        region: "France",
        badges: ["France", "Jobs", "English"],
        icon: "🇫🇷"
    },
    {
        name: "Job in Germany",
        url: "https://jobingermany.com/",
        description: "Job board for English speakers in Germany.",
        category: "Jobs",
        region: "Germany",
        badges: ["Germany", "Jobs", "English"],
        icon: "🇩🇪"
    },
    {
        name: "Job in Spain",
        url: "https://jobinspain.com/",
        description: "Job board for English speakers in Spain.",
        category: "Jobs",
        region: "Spain",
        badges: ["Spain", "Jobs", "English"],
        icon: "🇪🇸"
    },
    {
        name: "Job in Canada",
        url: "https://jobincanada.com/",
        description: "Job board for English speakers in Canada.",
        category: "Jobs",
        region: "Canada",
        badges: ["Canada", "Jobs", "English"],
        icon: "🇨🇦"
    },
    {
        name: "Job in Mexico",
        url: "https://jobinmexico.com/",
        description: "Job board for English speakers in Mexico.",
        category: "Jobs",
        region: "Mexico",
        badges: ["Mexico", "Jobs", "English"],
        icon: "🇲🇽"
    },
    {
        name: "Job in Colombia",
        url: "https://jobincolombia.com/",
        description: "Job board for English speakers in Colombia.",
        category: "Jobs",
        region: "Colombia",
        badges: ["Colombia", "Jobs", "English"],
        icon: "🇨🇴"
    },
    {
        name: "Job in Peru",
        url: "https://jobinperu.com/",
        description: "Job board for English speakers in Peru.",
        category: "Jobs",
        region: "Peru",
        badges: ["Peru", "Jobs", "English"],
        icon: "🇵🇪"
    },
    {
        name: "Job in Chile",
        url: "https://jobinchile.com/",
        description: "Job board for English speakers in Chile.",
        category: "Jobs",
        region: "Chile",
        badges: ["Chile", "Jobs", "English"],
        icon: "🇨🇱"
    },
    {
        name: "Job in Argentina",
        url: "https://jobinargentina.com/",
        description: "Job board for English speakers in Argentina.",
        category: "Jobs",
        region: "Argentina",
        badges: ["Argentina", "Jobs", "English"],
        icon: "🇦🇷"
    },
    {
        name: "Job in Brazil",
        url: "https://jobinbrazil.com/",
        description: "Job board for English speakers in Brazil.",
        category: "Jobs",
        region: "Brazil",
        badges: ["Brazil", "Jobs", "English"],
        icon: "🇧🇷"
    },
    {
        name: "Job in Panama",
        url: "https://jobinpanama.com/",
        description: "Job board for English speakers in Panama.",
        category: "Jobs",
        region: "Panama",
        badges: ["Panama", "Jobs", "English"],
        icon: "🇵🇦"
    },
    {
        name: "Job in Ecuador",
        url: "https://jobinecuador.com/",
        description: "Job board for English speakers in Ecuador.",
        category: "Jobs",
        region: "Ecuador",
        badges: ["Ecuador", "Jobs", "English"],
        icon: "🇪🇨"
    },
    {
        name: "Job in Bolivia",
        url: "https://jobinbolivia.com/",
        description: "Job board for English speakers in Bolivia.",
        category: "Jobs",
        region: "Bolivia",
        badges: ["Bolivia", "Jobs", "English"],
        icon: "🇧🇴"
    },
    {
        name: "Job in Uruguay",
        url: "https://jobinuruguay.com/",
        description: "Job board for English speakers in Uruguay.",
        category: "Jobs",
        region: "Uruguay",
        badges: ["Uruguay", "Jobs", "English"],
        icon: "🇺🇾"
    },
    {
        name: "Job in Paraguay",
        url: "https://jobinparaguay.com/",
        description: "Job board for English speakers in Paraguay.",
        category: "Jobs",
        region: "Paraguay",
        badges: ["Paraguay", "Jobs", "English"],
        icon: "🇵🇾"
    },
    {
        id: "venezuelae3",
        name: "Venezuela E3",
        url: "https://venezuelae3.com/trabajos",
        description: "The leading professional job board in Venezuela, connecting talent with top employers across the country.",
        category: "Jobs",
        region: "South America",
        badges: ["Venezuela", "Latin America", "Professional"],
        icon: "🇻🇪"
    },




];
