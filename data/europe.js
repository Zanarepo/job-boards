const europeBoards = [
    {
        id: "otta",
        name: "Otta",
        url: "https://otta.com/",
        description: "Highly personalized job search for tech workers. Strong presence in UK and Europe.",
        category: "Tech",
        region: "Europe",
        badges: ["Smart Match", "Europe", "UK"],
        icon: "🐙"
    },
    {
        id: "welcometojungle",
        name: "Welcome to the Jungle",
        url: "https://www.welcometothejungle.com/",
        description: "The best place to explore company cultures and find jobs in France and Europe.",
        category: "Digital",
        region: "Europe",
        badges: ["Culture", "Europe", "Design"],
        icon: "🌴"
    },
    {
        id: "honeypot",
        name: "Honeypot",
        url: "https://www.honeypot.io/",
        description: "Europe's developer-focused job platform where companies apply to you.",
        category: "Tech",
        region: "Europe",
        badges: ["Dev Only", "Germany", "Europe"],
        icon: "🍯"
    },
    {
        id: "jobbatical",
        name: "Jobbatical",
        url: "https://jobbatical.com/",
        description: "Connecting tech talent with companies that offer relocation and visa sponsorship.",
        category: "Remote",
        region: "Europe",
        badges: ["Relocation", "Global", "Tech"],
        icon: "🌍"
    },
    {
        id: "europeremotely",
        name: "EuropeRemotely",
        url: "https://europeremotely.com/",
        description: "Remote jobs open specifically to European timezones and candidates.",
        category: "Remote",
        region: "Europe",
        badges: ["EU Timezone", "Remote", "Tech"],
        icon: "🇪🇺"
    },
    {
        id: "jobteaser",
        name: "Jobteaser",
        url: "https://www.jobteaser.com/",
        description: "The go-to student and graduate job board across universities in Europe.",
        category: "Global",
        region: "Europe",
        badges: ["Graduates", "Europe", "Entry Level"],
        icon: "🎓"
    },
    {
        id: "stepstone",
        name: "StepStone",
        url: "https://www.stepstone.de/",
        description: "One of Europe's largest job marketplaces, particularly dominant in Germany.",
        category: "Global",
        region: "Europe",
        badges: ["Germany", "Europe", "All Roles"],
        icon: "🪨"
    },

    // NEW ADDITIONS

    {
        id: "eures",
        name: "EURES",
        url: "https://eures.europa.eu/",
        description: "Official European job mobility portal with opportunities across EU countries.",
        category: "Government",
        region: "Europe",
        badges: ["EU Jobs", "Visa Support", "Government"],
        icon: "🏛️"
    },
    {
        id: "landingjobs",
        name: "Landing.Jobs",
        url: "https://landing.jobs/",
        description: "Tech-focused hiring platform for developers and product professionals in Europe.",
        category: "Tech",
        region: "Europe",
        badges: ["Tech", "Remote", "Portugal"],
        icon: "🚀"
    },
    {
        id: "relocate",
        name: "Relocate.me",
        url: "https://relocate.me/",
        description: "European tech jobs with relocation packages and visa sponsorship.",
        category: "Remote",
        region: "Europe",
        badges: ["Visa", "Relocation", "Developers"],
        icon: "✈️"
    },
    {
        id: "eurojobs",
        name: "EuroJobs",
        url: "https://www.eurojobs.com/",
        description: "International jobs across Europe for multilingual professionals.",
        category: "Global",
        region: "Europe",
        badges: ["Multilingual", "Europe", "International"],
        icon: "💼"
    },
    {
        id: "justjoinit",
        name: "Just Join IT",
        url: "https://justjoin.it/",
        description: "Popular tech hiring platform in Poland and Eastern Europe.",
        category: "Tech",
        region: "Europe",
        badges: ["Poland", "Developers", "Tech"],
        icon: "💻"
    },
    {
        id: "nofluffjobs",
        name: "No Fluff Jobs",
        url: "https://nofluffjobs.com/",
        description: "Transparent tech jobs platform showing salary ranges upfront.",
        category: "Tech",
        region: "Europe",
        badges: ["Salary Transparency", "Tech", "CEE"],
        icon: "📊"
    },
    {
        id: "cord",
        name: "Cord",
        url: "https://cord.co/",
        description: "Modern networking-based hiring platform for software engineers in Europe.",
        category: "Tech",
        region: "Europe",
        badges: ["Networking", "Startups", "Engineers"],
        icon: "🧵"
    },
    {
        id: "remoteok",
        name: "Remote OK",
        url: "https://remoteok.com/",
        description: "Large remote-first job board with many European-friendly tech roles.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "Worldwide", "Tech"],
        icon: "🌐"
    },
    {
        id: "weworkremotely",
        name: "We Work Remotely",
        url: "https://weworkremotely.com/",
        description: "One of the biggest remote job boards with strong European listings.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "Global", "Startups"],
        icon: "🏡"
    },
    {
        id: "berlinstartupjobs",
        name: "Berlin Startup Jobs",
        url: "https://berlinstartupjobs.com/",
        description: "Startup and tech jobs based in Berlin and across Germany.",
        category: "Startup",
        region: "Europe",
        badges: ["Berlin", "Startups", "Germany"],
        icon: "🧃"
    },
    {
        id: "workinstartups",
        name: "Work in Startups",
        url: "https://workinstartups.com/",
        description: "Startup jobs from fast-growing companies in the UK and Europe.",
        category: "Startup",
        region: "Europe",
        badges: ["UK", "Founders", "Startups"],
        icon: "🔥"
    },
    {
        id: "angelco",
        name: "Wellfound",
        url: "https://wellfound.com/",
        description: "Startup-focused hiring marketplace previously known as AngelList Talent.",
        category: "Startup",
        region: "Europe",
        badges: ["Startups", "Remote", "Equity"],
        icon: "😇"
    },

    {
        id: "indeedeurope",
        name: "Indeed Europe",
        url: "https://www.indeed.com/",
        description: "Global job aggregator with extensive listings throughout Europe.",
        category: "Global",
        region: "Europe",
        badges: ["Massive Listings", "Europe", "All Industries"],
        icon: "📌"
    },

    {
        id: "eustartupsjobs",
        name: "EU Startups Jobs",
        url: "https://jobs.eu-startups.com/",
        description: "Startup-focused hiring platform across Europe for tech and growth roles.",
        category: "Startup",
        region: "Europe",
        badges: ["Startups", "Europe", "Tech"],
        icon: "🦄"
    },
    {
        id: "startupjobseurope",
        name: "Startup Jobs Europe",
        url: "https://startupjobseurope.com/",
        description: "Curated startup and scale-up opportunities across major European cities.",
        category: "Startup",
        region: "Europe",
        badges: ["Scaleups", "Europe", "Founders"],
        icon: "🚀"
    },
    {
        id: "thehub",
        name: "The Hub",
        url: "https://thehub.io/",
        description: "Nordic startup ecosystem platform connecting talent with startups.",
        category: "Startup",
        region: "Europe",
        badges: ["Nordics", "Startups", "Tech"],
        icon: "🌌"
    },
    {
        id: "swissdevjobs",
        name: "SwissDevJobs",
        url: "https://swissdevjobs.ch/",
        description: "Developer-focused job board for Switzerland with salary transparency.",
        category: "Tech",
        region: "Europe",
        badges: ["Switzerland", "Developers", "Salary"],
        icon: "🇨🇭"
    },
    {
        id: "germantechjobs",
        name: "GermanTechJobs",
        url: "https://germantechjobs.de/",
        description: "Tech and software engineering jobs across Germany.",
        category: "Tech",
        region: "Europe",
        badges: ["Germany", "Engineering", "Tech"],
        icon: "⚙️"
    },
    {
        id: "devitjobs",
        name: "DevITJobs",
        url: "https://devitjobs.uk/",
        description: "Transparent IT and developer jobs with salary information included.",
        category: "Tech",
        region: "Europe",
        badges: ["UK", "Salary", "Developers"],
        icon: "👨‍💻"
    },
    {
        id: "cordjobs",
        name: "Cord Jobs",
        url: "https://cord.co/",
        description: "Networking-first hiring platform connecting tech talent with startups.",
        category: "Tech",
        region: "Europe",
        badges: ["Networking", "Engineers", "Startups"],
        icon: "🧶"
    },
    {
        id: "vanhack",
        name: "VanHack",
        url: "https://vanhack.com/",
        description: "Global hiring platform focused on relocation and visa sponsorship.",
        category: "Remote",
        region: "Europe",
        badges: ["Visa Sponsorship", "Remote", "Relocation"],
        icon: "🛂"
    },
    {
        id: "remoteeurope",
        name: "Remote Europe",
        url: "https://www.remote-europe.com/",
        description: "Remote-first jobs available within European time zones.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "EU Timezone", "Distributed"],
        icon: "🛰️"
    },
    {
        id: "dynamitejobs",
        name: "Dynamite Jobs",
        url: "https://dynamitejobs.com/",
        description: "Hand-picked remote jobs from startups and online businesses.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "Startups", "Global"],
        icon: "💥"
    },
    {
        id: "mindtheproductjobs",
        name: "Mind the Product Jobs",
        url: "https://jobs.mindtheproduct.com/",
        description: "Dedicated product management and product design opportunities.",
        category: "Product",
        region: "Europe",
        badges: ["Product Manager", "PM", "Tech"],
        icon: "📦"
    },
    {
        id: "producthired",
        name: "ProductHired",
        url: "https://producthired.com/",
        description: "Specialized platform for product managers and product leaders.",
        category: "Product",
        region: "Europe",
        badges: ["Product", "Leadership", "PM"],
        icon: "🎯"
    },
    {
        id: "dribbblejobs",
        name: "Dribbble Jobs",
        url: "https://dribbble.com/jobs",
        description: "Creative and UI/UX design jobs from startups and tech companies.",
        category: "Design",
        region: "Europe",
        badges: ["UI/UX", "Creative", "Design"],
        icon: "🎨"
    },
    {
        id: "behancejobs",
        name: "Behance Jobs",
        url: "https://www.behance.net/joblist",
        description: "Creative industry opportunities for designers and digital artists.",
        category: "Design",
        region: "Europe",
        badges: ["Creative", "Portfolio", "Design"],
        icon: "🖌️"
    },
    {
        id: "xingjobs",
        name: "XING Jobs",
        url: "https://www.xing.com/jobs",
        description: "Professional networking and hiring platform popular in Germany and DACH.",
        category: "Global",
        region: "Europe",
        badges: ["Germany", "DACH", "Professional"],
        icon: "❎"
    },
    {
        id: "irishjobs",
        name: "IrishJobs",
        url: "https://www.irishjobs.ie/",
        description: "Leading Irish recruitment platform with thousands of listings.",
        category: "Global",
        region: "Europe",
        badges: ["Ireland", "Corporate", "All Roles"],
        icon: "☘️"
    },
    {
        id: "reed",
        name: "Reed",
        url: "https://www.reed.co.uk/",
        description: "One of the UK's largest employment and recruitment websites.",
        category: "Global",
        region: "Europe",
        badges: ["UK", "Recruitment", "All Industries"],
        icon: "📘"
    },
    {
        id: "cvlibrary",
        name: "CV-Library",
        url: "https://www.cv-library.co.uk/",
        description: "Major UK job board featuring roles across industries and experience levels.",
        category: "Global",
        region: "Europe",
        badges: ["UK", "Large Database", "All Roles"],
        icon: "📚"
    },
    {
        id: "undutchables",
        name: "Undutchables",
        url: "https://undutchables.nl/",
        description: "Jobs in the Netherlands for international and multilingual professionals.",
        category: "Global",
        region: "Europe",
        badges: ["Netherlands", "Multilingual", "International"],
        icon: "🇳🇱"
    },
    {
        id: "infojobs",
        name: "InfoJobs",
        url: "https://www.infojobs.net/",
        description: "One of Spain's largest online employment marketplaces.",
        category: "Global",
        region: "Europe",
        badges: ["Spain", "Corporate", "Popular"],
        icon: "🇪🇸"
    },

    {
        id: "arbeitnow",
        name: "Arbeitnow",
        url: "https://www.arbeitnow.com/",
        description: "German and European tech jobs with visa sponsorship opportunities.",
        category: "Tech",
        region: "Europe",
        badges: ["Visa Sponsorship", "Germany", "Tech"],
        icon: "🛠️"
    },
    {
        id: "remotive",
        name: "Remotive",
        url: "https://remotive.com/",
        description: "Remote-first jobs in software, marketing, product, and customer support.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "Tech", "Distributed"],
        icon: "🏖️"
    },
    {
        id: "workingnomads",
        name: "Working Nomads",
        url: "https://www.workingnomads.com/",
        description: "Curated remote jobs for digital professionals worldwide.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "Digital Nomads", "Tech"],
        icon: "🌎"
    },
    {
        id: "nodesk",
        name: "NoDesk",
        url: "https://nodesk.co/",
        description: "Remote work community and curated remote job opportunities.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "Community", "Startups"],
        icon: "🪑"
    },
    {
        id: "eurobrussels",
        name: "EuroBrussels",
        url: "https://www.eurobrussels.com/",
        description: "Jobs in EU affairs, policy, NGOs, and international organizations.",
        category: "Government",
        region: "Europe",
        badges: ["EU Affairs", "NGO", "Policy"],
        icon: "🏢"
    },
    {
        id: "impactpool",
        name: "Impactpool",
        url: "https://www.impactpool.org/",
        description: "International development and humanitarian career opportunities.",
        category: "NGO",
        region: "Europe",
        badges: ["UN", "NGO", "Global Impact"],
        icon: "🤝"
    },
    {
        id: "devex",
        name: "Devex",
        url: "https://www.devex.com/jobs",
        description: "Development sector jobs with NGOs, governments, and global agencies.",
        category: "NGO",
        region: "Europe",
        badges: ["Development", "International", "NGO"],
        icon: "🌱"
    },
    {
        id: "creativepool",
        name: "Creativepool",
        url: "https://creativepool.com/jobs",
        description: "Creative industry hiring platform for designers, marketers, and agencies.",
        category: "Design",
        region: "Europe",
        badges: ["Creative", "Marketing", "Agencies"],
        icon: "🧠"
    },
    {
        id: "uxjobsboard",
        name: "UX Jobs Board",
        url: "https://www.uxjobsboard.com/",
        description: "Specialized job board for UX, UI, and product designers.",
        category: "Design",
        region: "Europe",
        badges: ["UX", "UI", "Product Design"],
        icon: "📐"
    },
    {
        id: "authenticjobs",
        name: "Authentic Jobs",
        url: "https://authenticjobs.com/",
        description: "Tech, design, and creative opportunities from modern companies.",
        category: "Digital",
        region: "Europe",
        badges: ["Creative", "Tech", "Remote"],
        icon: "✨"
    },
    {
        id: "startupers",
        name: "Startupers",
        url: "https://www.startupers.com/",
        description: "European startup hiring platform for early-stage companies.",
        category: "Startup",
        region: "Europe",
        badges: ["Startups", "Founders", "Early Stage"],
        icon: "🧪"
    },
    {
        id: "technojobs",
        name: "Technojobs",
        url: "https://www.technojobs.co.uk/",
        description: "UK-focused technology and IT recruitment platform.",
        category: "Tech",
        region: "Europe",
        badges: ["UK", "IT", "Technology"],
        icon: "🖥️"
    },
    {
        id: "cwjobs",
        name: "CWJobs",
        url: "https://www.cwjobs.co.uk/",
        description: "One of the UK's leading IT and tech specialist job boards.",
        category: "Tech",
        region: "Europe",
        badges: ["UK", "Tech", "Software"],
        icon: "⌨️"
    },
    {
        id: "jobserve",
        name: "JobServe",
        url: "https://www.jobserve.com/",
        description: "Technology and professional services recruitment marketplace.",
        category: "Tech",
        region: "Europe",
        badges: ["IT", "Europe", "Contract Roles"],
        icon: "📡"
    },
    {
        id: "graduatejobs",
        name: "Graduate Jobs",
        url: "https://www.graduate-jobs.com/",
        description: "Graduate and entry-level career opportunities across Europe.",
        category: "Graduate",
        region: "Europe",
        badges: ["Graduates", "Entry Level", "Students"],
        icon: "🎒"
    },
    {
        id: "erasmusintern",
        name: "ErasmusIntern",
        url: "https://erasmusintern.org/",
        description: "Internships and trainee programs across European countries.",
        category: "Graduate",
        region: "Europe",
        badges: ["Internships", "Students", "EU"],
        icon: "📖"
    },
    {
        id: "experteer",
        name: "Experteer",
        url: "https://www.experteer.com/",
        description: "Executive and senior professional opportunities across Europe.",
        category: "Executive",
        region: "Europe",
        badges: ["Senior Roles", "Executive", "High Salary"],
        icon: "💼"
    },
    {
        id: "efinancialcareers",
        name: "eFinancialCareers",
        url: "https://www.efinancialcareers.com/",
        description: "Finance, fintech, banking, and investment career opportunities.",
        category: "Finance",
        region: "Europe",
        badges: ["Finance", "Banking", "Fintech"],
        icon: "💰"
    },
    {
        id: "greenjobs",
        name: "GreenJobs",
        url: "https://www.greenjobs.co.uk/",
        description: "Sustainability, environmental, and renewable energy jobs.",
        category: "Climate",
        region: "Europe",
        badges: ["Climate", "Sustainability", "Energy"],
        icon: "🌿"
    },
    {
        id: "escadrille",
        name: "Escadrille",
        url: "https://escadrille.io/",
        description: "European startup and remote opportunities for developers and PMs.",
        category: "Startup",
        region: "Europe",
        badges: ["Startups", "Remote", "Product"],
        icon: "🛫"
    },
    {
        id: "monsteruk",
        name: "Monster UK",
        url: "https://www.monster.co.uk/",
        description: "Large UK employment platform covering multiple industries and career levels.",
        category: "Global",
        region: "Europe",
        badges: ["UK", "Corporate", "All Industries"],
        icon: "👾"
    },
    {
        id: "totaljobs",
        name: "Totaljobs",
        url: "https://www.totaljobs.com/",
        description: "Major UK job board with opportunities across sectors and experience levels.",
        category: "Global",
        region: "Europe",
        badges: ["UK", "Popular", "All Roles"],
        icon: "📋"
    },
    {
        id: "jobsite",
        name: "Jobsite",
        url: "https://www.jobsite.co.uk/",
        description: "UK recruitment marketplace for technology, finance, and business jobs.",
        category: "Global",
        region: "Europe",
        badges: ["UK", "Business", "Recruitment"],
        icon: "🧾"
    },
    {
        id: "adzuna",
        name: "Adzuna",
        url: "https://www.adzuna.co.uk/",
        description: "Search engine aggregating millions of job listings across Europe.",
        category: "Global",
        region: "Europe",
        badges: ["Aggregator", "Europe", "Salary Data"],
        icon: "🔎"
    },
    {
        id: "glassdoorjobs",
        name: "Glassdoor Jobs",
        url: "https://www.glassdoor.com/Job/",
        description: "Job marketplace combined with company reviews and salary insights.",
        category: "Global",
        region: "Europe",
        badges: ["Reviews", "Salary", "Insights"],
        icon: "🪟"
    },
    {
        id: "join",
        name: "JOIN",
        url: "https://join.com/",
        description: "Modern European recruitment platform used by startups and SMBs.",
        category: "Startup",
        region: "Europe",
        badges: ["Hiring", "SMBs", "Europe"],
        icon: "🤝"
    },
    {
        id: "talentio",
        name: "Talent.io",
        url: "https://www.talent.io/",
        description: "European tech recruitment marketplace for engineers and product talent.",
        category: "Tech",
        region: "Europe",
        badges: ["Tech", "Engineers", "France"],
        icon: "🧲"
    },
    {
        id: "joppy",
        name: "Joppy",
        url: "https://www.joppy.me/",
        description: "Tech hiring platform connecting developers with European companies.",
        category: "Tech",
        region: "Europe",
        badges: ["Developers", "Remote", "Europe"],
        icon: "🧑‍💻"
    },
    {
        id: "hackajob",
        name: "Hackajob",
        url: "https://hackajob.com/",
        description: "Skill-based hiring marketplace for software engineers and tech talent.",
        category: "Tech",
        region: "Europe",
        badges: ["Skill Based", "Developers", "Tech"],
        icon: "🛡️"
    },
    {
        id: "ottaeu",
        name: "Otta EU Startups",
        url: "https://otta.com/startups",
        description: "Startup discovery and hiring platform focused on modern tech companies.",
        category: "Startup",
        region: "Europe",
        badges: ["Startups", "Scaleups", "Tech"],
        icon: "🦑"
    },
    {
        id: "unjobnet",
        name: "UNJobNet",
        url: "https://www.unjobnet.org/",
        description: "International organization and United Nations career opportunities.",
        category: "NGO",
        region: "Europe",
        badges: ["UN", "International", "Policy"],
        icon: "🇺🇳"
    },
    {
        id: "euroengineerjobs",
        name: "Euro Engineer Jobs",
        url: "https://www.euroengineerjobs.com/",
        description: "Engineering opportunities across European countries and industries.",
        category: "Engineering",
        region: "Europe",
        badges: ["Engineering", "Europe", "Industrial"],
        icon: "🧰"
    },
    {
        id: "biospaceeurope",
        name: "BioSpace Europe",
        url: "https://www.biospace.com/jobs/",
        description: "Biotech, pharma, and life sciences opportunities in Europe.",
        category: "Healthcare",
        region: "Europe",
        badges: ["Biotech", "Pharma", "Science"],
        icon: "🧬"
    },
    {
        id: "medjobs",
        name: "MedJobs",
        url: "https://medjobs.eu/",
        description: "European healthcare and medical employment opportunities.",
        category: "Healthcare",
        region: "Europe",
        badges: ["Medical", "Healthcare", "Europe"],
        icon: "🩺"
    },
    {
        id: "legaljobs",
        name: "LegalJobs Europe",
        url: "https://www.legaljobs.io/",
        description: "Legal, compliance, and corporate governance roles across Europe.",
        category: "Legal",
        region: "Europe",
        badges: ["Legal", "Compliance", "Corporate"],
        icon: "⚖️"
    },
    {
        id: "fashionjobs",
        name: "FashionJobs",
        url: "https://www.fashionjobs.com/",
        description: "Fashion, luxury, beauty, and retail industry job opportunities.",
        category: "Fashion",
        region: "Europe",
        badges: ["Luxury", "Retail", "Fashion"],
        icon: "👗"
    },
    {
        id: "gamesjobsdirect",
        name: "Games Jobs Direct",
        url: "https://www.gamesjobsdirect.com/",
        description: "European gaming and video game industry career platform.",
        category: "Gaming",
        region: "Europe",
        badges: ["Gaming", "Studios", "Entertainment"],
        icon: "🎮"
    },
    {
        id: "hitmarker",
        name: "Hitmarker",
        url: "https://hitmarker.net/",
        description: "Esports, gaming, and digital entertainment job opportunities.",
        category: "Gaming",
        region: "Europe",
        badges: ["Esports", "Gaming", "Media"],
        icon: "🏆"
    },
    {
        id: "mediabistroeu",
        name: "Mediabistro",
        url: "https://www.mediabistro.com/jobs/",
        description: "Media, publishing, communications, and content-related jobs.",
        category: "Media",
        region: "Europe",
        badges: ["Content", "Media", "Publishing"],
        icon: "📰"
    },
    {
        id: "salesforcebenjobs",
        name: "Salesforce Ben Jobs",
        url: "https://www.salesforceben.com/jobs/",
        description: "Salesforce ecosystem jobs including admin, consultant, and developer roles.",
        category: "Cloud",
        region: "Europe",
        badges: ["Salesforce", "CRM", "Cloud"],
        icon: "☁️"
    },
    {
        id: "thehiringhub",
        name: "The Hiring Hub",
        url: "https://thehiringhub.com/",
        description: "UK recruitment marketplace connecting agencies, freelancers, and hiring companies.",
        category: "Recruitment",
        region: "Europe",
        badges: ["UK", "Recruitment", "Network"],
        icon: "🕸️"
    },
    {
        id: "cwjobs",
        name: "CWJobs",
        url: "https://www.cwjobs.co.uk/",
        description: "UK tech and IT job board with thousands of development, data, and digital roles.",
        category: "Tech",
        region: "Europe",
        badges: ["UK", "Tech", "IT"],
        icon: "💻"
    },
    {
        id: "jobrapido",
        name: "Jobrapido",
        url: "https://www.jobrapido.com/",
        description: "Global job aggregator with strong presence across Europe and 55 countries.",
        category: "Global",
        region: "Europe",
        badges: ["Aggregator", "Global", "All Industries"],
        icon: "🎯"
    },
    {
        id: "reedcouk",
        name: "Reed.co.uk",
        url: "https://www.reed.co.uk/jobs",
        description: "One of UK’s largest job sites with 250K+ annual vacancies across all sectors.",
        category: "Global",
        region: "Europe",
        badges: ["UK", "Popular", "Corporate"],
        icon: "👑"
    },
    {
        id: "jobboardio",
        name: "Jobboard.io",
        url: "https://jobboard.io/",
        description: "Platform for creating and managing niche job boards across Europe and globally.",
        category: "Startup",
        region: "Europe",
        badges: ["Niche", "Platform", "Community"],
        icon: "🚪"
    },
    {
        id: "ycombinator-jobs",
        name: "Y Combinator Jobs",
        url: "https://jobs.ycombinator.com/",
        description: "Startup jobs from YC-backed companies including Europe's top tech ventures.",
        category: "Startup",
        region: "Europe",
        badges: ["Startup", "Tech", "Global"],
        icon: "🚀"
    },
    {
        id: "angellist-europe",
        name: "AngelList Europe",
        url: "https://angel.co/jobs",
        description: "Venture-backed startups hiring across Europe from pre-seed to growth stages.",
        category: "Startup",
        region: "Europe",
        badges: ["Startup", "Venture", "Europe"],
        icon: "💸"
    },
    {
        id: "startupjobs-eu",
        name: "Startup Jobs EU",
        url: "https://startupjobs.eu/",
        description: "Dedicated startup job board for tech, product, and growth roles in Europe.",
        category: "Startup",
        region: "Europe",
        badges: ["Startup", "Tech", "Europe"],
        icon: "🏢"
    },
    {
        id: "euractiv",
        name: "EurActiv Jobs",
        url: "https://www.euractiv.com/section/jobs/",
        description: "EU policy, lobbying, and international relations career opportunities.",
        category: "Policy",
        region: "Europe",
        badges: ["EU", "Policy", "International"],
        icon: "🏛️"
    },
    {
        id: "euractiv-jobs",
        name: "Euractiv Jobs",
        url: "https://www.euractiv.com/section/jobs/",
        description: "EU policy, lobbying, and international relations career opportunities.",
        category: "Policy",
        region: "Europe",
        badges: ["EU", "Policy", "International"],
        icon: "🏛️"
    },
    {
        id: "ep-jobs",
        name: "European Parliament Jobs",
        url: "https://www.europarl.europa.eu/jobs",
        description: "Official careers portal for the European Parliament, traineeships, and policy roles.",
        category: "Public",
        region: "Europe",
        badges: ["EU", "Government", "Policy"],
        icon: "🇪🇺"
    },
    {
        id: "eujobs",
        name: "EU Jobs",
        url: "https://eujobs.ec.europa.eu/",
        description: "Official European Union institutions career opportunities including EPSO competitions.",
        category: "Public",
        region: "Europe",
        badges: ["EU", "Government", "International"],
        icon: "🏛️"
    },
    {
        id: "trustnodes",
        name: "TrustNodes",
        url: "https://trustnodes.com/jobs",
        description: "Crypto, blockchain, and Web3 jobs from the leading blockchain news source.",
        category: "Crypto",
        region: "Europe",
        badges: ["Crypto", "Web3", "Blockchain"],
        icon: "🔗"
    },
    {
        id: "cryptojobslist",
        name: "CryptoJobsList",
        url: "https://cryptojobslist.com/",
        description: "Global crypto, blockchain, and Web3 job marketplace with European focus.",
        category: "Crypto",
        region: "Europe",
        badges: ["Crypto", "Remote", "Global"],
        icon: "🔑"
    },
    {
        id: "blockchain-jobs",
        name: "Blockchain Jobs",
        url: "https://blockchain-jobs.com/",
        description: "Blockchain and cryptocurrency career opportunities across Europe and worldwide.",
        category: "Crypto",
        region: "Europe",
        badges: ["Blockchain", "Crypto", "Web3"],
        icon: "🪢"
    },
    {
        id: "coinbase-jobs",
        name: "Coinbase Jobs",
        url: "https://www.coinbase.com/careers",
        description: "Leading crypto exchange hiring across Europe for engineering, product, and policy roles.",
        category: "Crypto",
        region: "Europe",
        badges: ["Crypto", "Tech", "Remote"],
        icon: "💰"
    },
    {
        id: "binance-jobs",
        name: "Binance Jobs",
        url: "https://www.binance.com/en/careers",
        description: "Global crypto exchange jobs with European presence and remote-friendly positions.",
        category: "Crypto",
        region: "Europe",
        badges: ["Crypto", "Global", "Remote"],
        icon: "💱"
    },
    {
        id: "kraken-jobs",
        name: "Kraken Jobs",
        url: "https://kraken.com/en-us/careers",
        description: "Crypto exchange with growing Europe presence hiring for security, compliance, and tech roles.",
        category: "Crypto",
        region: "Europe",
        badges: ["Crypto", "Security", "Remote"],
        icon: "🛡️"
    },
    {
        id: "bybit-jobs",
        name: "Bybit Jobs",
        url: "https://www.bybit.com/en-US/careers/",
        description: "Fast-growing crypto derivatives exchange with European hubs and remote opportunities.",
        category: "Crypto",
        region: "Europe",
        badges: ["Crypto", "Growth", "Remote"],
        icon: "📈"
    },
    {
        id: "bitstamp-jobs",
        name: "Bitstamp Careers",
        url: "https://www.bitstamp.net/careers/",
        description: "European crypto exchange with jobs in Luxembourg, Netherlands, and remote locations.",
        category: "Crypto",
        region: "Europe",
        badges: ["Crypto", "Europe", "Compliance"],
        icon: "🇱🇺"
    },
    {
        id: "dwd-uk",
        name: "Digital Workspace Directory UK",
        url: "https://www.digitalworkspacedirectory.co.uk/jobs",
        description: "UK's dedicated platform for flexible, remote, and hybrid job opportunities across all sectors.",
        category: "Remote",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "Remote", "Flexible", "All Industries"],
        icon: "🇬🇧"
    },
    {
        id: "itjobseu",
        name: "ITJobsEU",
        url: "https://www.itjobseu.com/",
        description: "IT job board covering all of Europe with thousands of technology and development roles.",
        category: "Tech",
        region: "Europe",
        subRegion: "Europe",
        badges: ["Europe", "IT", "Tech", "All Roles"],
        icon: "💻"
    },
    {
        id: "glassdoor-eu",
        name: "Glassdoor Europe",
        url: "https://www.glassdoor.co.uk/Jobs/Europe-Jobs.htm",
        description: "European jobs database with company reviews, salary insights, and interview Q&A from current and former employees.",
        category: "Global",
        region: "Europe",
        subRegion: "Europe",
        badges: ["Europe", "Reviews", "Salaries", "All Industries"],
        icon: "👔"
    },
    {
        id: "reedcouk",
        name: "Reed.co.uk Jobs",
        url: "https://www.reed.co.uk/jobs",
        description: "One of UK’s largest job sites with 250K+ annual vacancies across all sectors and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "Popular", "All Industries", "Corporate"],
        icon: "👑"
    },
    {
        id: "jobsitecouk",
        name: "Jobsite.co.uk",
        url: "https://www.jobsite.co.uk/",
        description: "UK's leading job site with jobs from top companies, CV builder, and career advice across all industries.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "CV Builder", "All Industries", "Established"],
        icon: "👔"
    },
    {
        id: "indeedcouk",
        name: "Indeed UK",
        url: "https://uk.indeed.com/",
        description: "Popular job search engine with thousands of vacancies across UK industries, internships, and freelance roles.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "Aggregator", "All Industries", "Popular"],
        icon: "🇬🇧"
    },
    {
        id: "jobsalertscouk",
        name: "JobsAlerts.co.uk",
        url: "https://www.jobsalertscouk.com/",
        description: "UK job board with daily email alerts for jobs across all regions and industries.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "Email Alerts", "All Industries"],
        icon: "🔔"
    },
    {
        id: "monsteruk",
        name: "Monster UK",
        url: "https://www.monster.co.uk/jobs",
        description: "Global job portal with strong UK presence, offering corporate, startup, and remote positions across industries.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "All Industries", "Popular", "Global Brand"],
        icon: "🇬🇧"
    },
    {
        id: "jobrapido-uk",
        name: "Jobrapido UK",
        url: "https://www.jobrapido.co.uk/",
        description: "UK job aggregator with thousands of listings from various companies and industries.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "Aggregator", "All Industries"],
        icon: "🎯"
    },
    {
        id: "jobsite",
        name: "Jobsite",
        url: "https://www.jobsite.co.uk/",
        description: "UK's leading job board with jobs from top companies, CV builder, and career advice across all industries.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "CV Builder", "All Industries", "Established"],
        icon: "👔"
    },
    {
        id: "workinstartups",
        name: "Work in Startups",
        url: "https://workinstartups.com/",
        description: "UK-based startup jobs board with remote, flexible, and hybrid roles for all experience levels.",
        category: "Startup",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "Startup", "Remote", "Flexible"],
        icon: "🚀"
    },
    {
        id: "startupjobs-ie",
        name: "Startup Jobs IE",
        url: "https://startupjobs.ie/",
        description: "Ireland’s only job board dedicated to the tech startup ecosystem with remote and hybrid roles.",
        category: "Startup",
        region: "Europe",
        subRegion: "Ireland",
        badges: ["Ireland", "Startup", "Remote"],
        icon: "🇮🇪"
    },
    {
        id: "jobsdirectie",
        name: "Jobs Direct Ireland",
        url: "https://www.jobsdirect.ie/",
        description: "Irish job site for full-time and part-time jobs across Dublin, Cork, Galway, and nationwide.",
        category: "Global",
        region: "Europe",
        subRegion: "Ireland",
        badges: ["Ireland", "Part-Time", "All Industries"],
        icon: "🇮🇪"
    },
    {
        id: "jobsireland-public",
        name: "Jobs Ireland",
        url: "https://www.jobsireland.ie/",
        description: "Official Irish employment service with thousands of public and private sector jobs across the country.",
        category: "Public",
        region: "Europe",
        subRegion: "Ireland",
        badges: ["Ireland", "Public Sector", "All Industries"],
        icon: "🇮🇪"
    },
    {
        id: "jobs-ie",
        name: "Jobs.ie",
        url: "https://www.jobs.ie/",
        description: "One of Ireland’s longest-running job boards with thousands of vacancies across all sectors and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Ireland",
        badges: ["Ireland", "All Industries", "Established"],
        icon: "🇮🇪"
    },
    {
        id: "jobs-ie-all",
        name: "Jobs.ie All Jobs",
        url: "https://www.jobs.ie/job-search/all-jobs",
        description: "Comprehensive job search with 100K+ vacancies across all industries, cities, and experience levels in Ireland.",
        category: "Global",
        region: "Europe",
        subRegion: "Ireland",
        badges: ["Ireland", "All Industries", "Established"],
        icon: "🇮🇪"
    },

    // ── NORTHERN EUROPE ─────────────────────────────────────────────────────────────────────
    {
        id: "workindenmark",
        name: "Work in Denmark",
        url: "https://www.workindenmark.dk/",
        description: "Official Danish job portal with 20K+ monthly vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Nordic", "All Industries", "Language"],
        icon: "🇩🇰"
    },
    {
        id: "workinsa",
        name: "Work in Sweden",
        url: "https://www.workinsweden.se/",
        description: "Official Swedish job board with 40K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Nordic", "All Industries", "Language"],
        icon: "🇸🇪"
    },
    {
        id: "workinnorway",
        name: "Work in Norway",
        url: "https://www.workinnorway.no/",
        description: "Official Norwegian job portal with 30K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Nordic", "All Industries", "Language"],
        icon: "🇳🇴"
    },
    {
        id: "workinfinland",
        name: "Work in Finland",
        url: "https://www.workinfinland.fi/",
        description: "Official Finnish job portal with 25K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Nordic", "All Industries", "Language"],
        icon: "🇫🇮"
    },
    {
        id: "workinisland",
        name: "Work in Iceland",
        url: "https://www.workinisland.is/",
        description: "Official Icelandic job portal with 15K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Nordic", "All Industries", "Language"],
        icon: "🇮🇸"
    },
    {
        id: "nordicstartups",
        name: "Nordic Startups",
        url: "https://nordicstartups.com/",
        description: "Nordic job board with 5K+ vacancies across all industries and experience levels.",
        category: "Startup",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Nordic", "Startup", "All Industries"],
        icon: "🇸🇪"
    },
    {
        id: "cphjobs",
        name: "CPH Jobs",
        url: "https://cphjobs.dk/",
        description: "Copenhagen job board with 10K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Copenhagen", "All Industries", "Language"],
        icon: "🇩🇰"
    },
    {
        id: "stockholmjobs",
        name: "Stockholm Jobs",
        url: "https://stockholmjobs.se/",
        description: "Stockholm job board with 10K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Stockholm", "All Industries", "Language"],
        icon: "🇸🇪"
    },
    {
        id: "oslojobs",
        name: "Oslo Jobs",
        url: "https://oslojobs.no/",
        description: "Oslo job board with 10K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Oslo", "All Industries", "Language"],
        icon: "🇳🇴"
    },
    {
        id: "helsinkijobs",
        name: "Helsinki Jobs",
        url: "https://helsinkijobs.fi/",
        description: "Helsinki job board with 10K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Helsinki", "All Industries", "Language"],
        icon: "🇫🇮"
    },
    {
        id: "reykjavikjobs",
        name: "Reykjavik Jobs",
        url: "https://reykjavikjobs.is/",
        description: "Reykjavik job board with 10K+ vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "Nordic",
        badges: ["Reykjavik", "All Industries", "Language"],
        icon: "🇮🇸"
    },
    {
        id: "jobswayuk",
        name: "JobsWay UK",
        url: "https://jobsway.uk/",
        description: "UK job board with thousands of vacancies across all industries and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["UK", "All Industries", "Language"],
        icon: "🇬🇧"
    },
    {
        id: "jobsdirectie",
        name: "Jobs Direct Ireland",
        url: "https://www.jobsdirect.ie/",
        description: "Irish job site for full-time and part-time jobs across Dublin, Cork, Galway, and nationwide.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["Ireland", "Part-Time", "All Industries"],
        icon: "🇮🇪"
    },
    {
        id: "jobsireland-public",
        name: "Jobs Ireland",
        url: "https://www.jobsireland.ie/",
        description: "Official Irish employment service with thousands of public and private sector jobs across the country.",
        category: "Public",
        region: "Europe",
        subRegion: "UK",
        badges: ["Ireland", "Public Sector", "All Industries"],
        icon: "🇮🇪"
    },
    {
        id: "jobs-ie",
        name: "Jobs.ie",
        url: "https://www.jobs.ie/",
        description: "One of Ireland’s longest-running job boards with thousands of vacancies across all sectors and experience levels.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["Ireland", "All Industries", "Established"],
        icon: "🇮🇪"
    },
    {
        id: "jobs-ie-all",
        name: "Jobs.ie All Jobs",
        url: "https://www.jobs.ie/job-search/all-jobs",
        description: "Comprehensive job search with 100K+ vacancies across all industries, cities, and experience levels in Ireland.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["Ireland", "All Industries", "Established"],
        icon: "🇮🇪"
    },
    {
        id: "jobsdirectie",
        name: "Jobs Direct Ireland",
        url: "https://www.jobsdirect.ie/",
        description: "Irish job site for full-time and part-time jobs across Dublin, Cork, Galway, and nationwide.",
        category: "Global",
        region: "Europe",
        subRegion: "UK",
        badges: ["Ireland", "Part-Time", "All Industries"],
        icon: "🇮🇪"
    },
    {
        id: "builtinlondon",
        name: "Built In London",
        url: "https://builtin.com/jobs/london",
        description: "Startup and tech jobs from modern companies operating in London and Europe.",
        category: "Tech",
        region: "Europe",
        badges: ["London", "Startups", "Tech"],
        icon: "🏙️"
    },
    {
        id: "siliconmilkroundabout",
        name: "Silicon Milkroundabout",
        url: "https://siliconmilkroundabout.com/",
        description: "Tech hiring marketplace connecting startups with developers and product talent.",
        category: "Tech",
        region: "Europe",
        badges: ["Startups", "Engineering", "UK"],
        icon: "🥛"
    },
    {
        id: "womenwhocodejobs",
        name: "Women Who Code Jobs",
        url: "https://womenwhocode.com/jobs",
        description: "Technology opportunities focused on diversity and inclusion in engineering.",
        category: "Tech",
        region: "Europe",
        badges: ["Diversity", "Engineering", "Community"],
        icon: "👩‍💻"
    },
    {
        id: "powertofly",
        name: "PowerToFly",
        url: "https://powertofly.com/jobs/",
        description: "Remote and flexible tech careers supporting underrepresented talent.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "Diversity", "Flexible"],
        icon: "🕊️"
    },
    {
        id: "wellfoundeurope",
        name: "Wellfound Europe",
        url: "https://wellfound.com/jobs",
        description: "European startup hiring platform with equity-focused opportunities.",
        category: "Startup",
        region: "Europe",
        badges: ["Equity", "Startups", "Remote"],
        icon: "🌟"
    },
    {
        id: "techtalentsouth",
        name: "Tech Talent South Jobs",
        url: "https://jobs.techtalentsouth.com/",
        description: "Technology and software engineering opportunities from scaling companies.",
        category: "Tech",
        region: "Europe",
        badges: ["Software", "Developers", "Scaling"],
        icon: "📲"
    },
    {
        id: "designjobsboard",
        name: "Design Jobs Board",
        url: "https://designjobsboard.com/",
        description: "Curated opportunities for product designers, UX researchers, and creatives.",
        category: "Design",
        region: "Europe",
        badges: ["UX", "Product Design", "Creative"],
        icon: "🖍️"
    },
    {
        id: "ai-jobsnet",
        name: "AI Jobs",
        url: "https://aijobs.net/",
        description: "Artificial intelligence, machine learning, and data science careers.",
        category: "AI",
        region: "Europe",
        badges: ["AI", "ML", "Data Science"],
        icon: "🤖"
    },
    {
        id: "datasciencejobs",
        name: "Data Science Jobs",
        url: "https://datasciencejobs.com/",
        description: "European and global opportunities for data scientists and analysts.",
        category: "Data",
        region: "Europe",
        badges: ["Analytics", "Data", "Machine Learning"],
        icon: "📈"
    },
    {
        id: "mlopsjobs",
        name: "MLOps Jobs",
        url: "https://mlopsjobs.com/",
        description: "Specialized hiring platform for MLOps and AI infrastructure engineers.",
        category: "AI",
        region: "Europe",
        badges: ["MLOps", "Infrastructure", "AI"],
        icon: "🧠"
    },
    {
        id: "cryptojobslist",
        name: "CryptoJobsList",
        url: "https://cryptojobslist.com/",
        description: "Blockchain, crypto, and Web3 opportunities across Europe and remote teams.",
        category: "Web3",
        region: "Europe",
        badges: ["Crypto", "Blockchain", "Remote"],
        icon: "₿"
    },
    {
        id: "web3career",
        name: "Web3 Career",
        url: "https://web3.career/",
        description: "Web3 engineering, product, and growth opportunities from blockchain startups.",
        category: "Web3",
        region: "Europe",
        badges: ["Web3", "Startups", "Remote"],
        icon: "🪙"
    },
    {
        id: "climatebase",
        name: "Climatebase",
        url: "https://climatebase.org/jobs",
        description: "Climate-tech and sustainability-focused careers from mission-driven companies.",
        category: "Climate",
        region: "Europe",
        badges: ["Climate Tech", "Sustainability", "Impact"],
        icon: "🌍"
    },
    {
        id: "ottaremote",
        name: "Otta Remote",
        url: "https://otta.com/remote",
        description: "Remote startup and technology opportunities from modern global companies.",
        category: "Remote",
        region: "Europe",
        badges: ["Remote", "Startups", "Tech"],
        icon: "🛰️"
    },
    {
        id: "startupjobsuk",
        name: "Startup Jobs UK",
        url: "https://startupjobs.uk/",
        description: "Startup-focused hiring marketplace for UK-based early-stage companies.",
        category: "Startup",
        region: "Europe",
        badges: ["UK", "Startups", "Founders"],
        icon: "🇬🇧"
    },
    {
        id: "escapethecity",
        name: "Escape The City",
        url: "https://www.escapethecity.org/",
        description: "Purpose-driven jobs and startup careers for professionals seeking meaningful work.",
        category: "Impact",
        region: "Europe",
        badges: ["Purpose", "Startups", "Impact"],
        icon: "🌅"
    },
    {
        id: "flexjobs",
        name: "FlexJobs",
        url: "https://www.flexjobs.com/",
        description: "Remote, hybrid, and flexible work opportunities across multiple industries.",
        category: "Remote",
        region: "Europe",
        badges: ["Flexible", "Remote", "Hybrid"],
        icon: "🧳"
    },
    {
        id: "eurojobsites",
        name: "EuroJobsites",
        url: "https://www.eurojobsites.com/",
        description: "Network of specialized job portals covering sectors across Europe.",
        category: "Global",
        region: "Europe",
        badges: ["Europe", "Specialized", "Multi-sector"],
        icon: "🗂️"
    },
    {
        id: "startupwiseguysjobs",
        name: "Startup Wise Guys Jobs",
        url: "https://startupwiseguys.com/jobs/",
        description: "Startup accelerator-backed opportunities across the European ecosystem.",
        category: "Startup",
        region: "Europe",
        badges: ["Accelerator", "Founders", "Scaleups"],
        icon: "🧑‍🚀"
    },
    {
        id: "workwide",
        name: "Workwide",
        url: "https://www.workwide.com/",
        description: "Jobs abroad for multilingual professionals across Europe.",
        category: "Global",
        region: "Europe",
        badges: ["Relocation", "Multilingual", "Europe"],
        icon: "🧭"
    },
    {
        id: "eu-agencies",
        name: "EU Agencies & Institutions",
        url: "https://europa.eu/eu-life/jobs-careers/working-eu-institutions/index_en.htm",
        description: "Careers in EU agencies, bodies, and decentralized offices across Europe.",
        category: "Government",
        region: "Europe",
        badges: ["EU", "Public Sector", "International"],
        icon: "🇪🇺"
    },
    {
        id: "eu-careers",
        name: "EU Careers",
        url: "https://epso.europa.eu/en",
        description: "Official selection platform for temporary and contract agents in EU institutions.",
        category: "Government",
        region: "Europe",
        badges: ["EU Jobs", "Policy", "Public Sector"],
        icon: "🏛️"
    },
    {
        id: "council-of-europe-jobs",
        name: "Council of Europe Careers",
        url: "https://www.coe.int/en/web/jobs",
        description: "Opportunities at the Council of Europe focusing on human rights, democracy, and rule of law.",
        category: "Government",
        region: "Europe",
        badges: ["Human Rights", "NGO", "International"],
        icon: "⚖️"
    },
    {
        id: "eurojust-jobs",
        name: "Eurojust Careers",
        url: "https://www.eurojust.europa.eu/about-us/job-opportunities",
        description: "Legal and operational roles at the EU Agency for Criminal Justice Cooperation in the Hague.",
        category: "Government",
        region: "Europe",
        badges: ["Justice", "Legal", "EU"],
        icon: "🏪"
    },
    {
        id: "fao-europe",
        name: "FAO Europe & Central Asia",
        url: "https://www.fao.org/europe-central-asia/en/",
        description: "Food and agriculture-related jobs and projects in the region from the UN.",
        category: "Nonprofit",
        region: "Europe",
        badges: ["UN", "Agriculture", "Sustainability"],
        icon: "🚜"
    },
    {
        id: "unece-jobs",
        name: "UNECE Careers",
        url: "https://unece.org/jobs",
        description: "Economic development, trade, and sustainable development opportunities in Geneva.",
        category: "Government",
        region: "Europe",
        badges: ["UN", "Economic", "Development"],
        icon: "💼"
    },
    {
        id: "eaceaspace",
        name: "EASAspace Jobs",
        url: "https://www.easa.europa.eu/en/easa-roles-and-vacancies",
        description: "Aviation safety and drone regulation jobs across Europe from the European Union Aviation Safety Agency.",
        category: "Government",
        region: "Europe",
        badges: ["Aviation", "Safety", "EU"],
        icon: "✈️"
    },
    {
        id: "eea-jobs",
        name: "EEA Careers",
        url: "https://www.eea.europa.eu/about-us/jobs",
        description: "Environmental jobs in Europe from the European Environment Agency.",
        category: "Government",
        region: "Europe",
        badges: ["Environment", "Science", "EU"],
        icon: "🌿"
    },
    {
        id: "europeai-jobs",
        name: "EuropeAI",
        url: "https://europeai.network/jobs",
        description: "AI research, policy, and commercial roles across the European AI ecosystem.",
        category: "AI",
        region: "Europe",
        badges: ["AI", "Policy", "Research"],
        icon: "🤖"
    },
    {
        id: "eurocultura",
        name: "EuroCultured",
        url: "https://eurocultured.com/",
        description: "European cultural exchange and volunteer opportunities from the founders of EuroTripr.",
        category: "Nonprofit",
        region: "Europe",
        badges: ["Culture", "Travel", "Volunteer"],
        icon: "🎭"
    },
    {
        id: "erasmus-jobs",
        name: "Erasmus Mundus & Erasmus+ Jobs",
        url: "https://webgate.ec.europa.eu/ Erasmus-jobs/",
        description: "Education, training, youth, and sport opportunities from the Erasmus+ program.",
        category: "Government",
        region: "Europe",
        badges: ["Education", "Youth", "EU"],
        icon: "📚"
    },
    {
        id: "euroadvances",
        name: "EuroAdvances",
        url: "https://euroadvances.org/",
        description: "European mobility and job market platform with thousands of listings.",
        category: "Global",
        region: "Europe",
        badges: ["Europe", "Mobility", "Jobs"],
        icon: "🚀"
    },
    {
        id: "workinbelgium",
        name: "WorkInBelgium",
        url: "https://www.workinbelgium.be/",
        description: "Government-run job portal for finding work in Belgium with official support services.",
        category: "Government",
        region: "Belgium",
        badges: ["Belgium", "EU", "Local"],
        icon: "🇧🇪"
    },
    {
        id: "jobinluxembourg",
        name: "Job in Luxembourg",
        url: "https://www.jobinluxembourg.lu/en",
        description: "Official government portal for job seekers looking to work in Luxembourg.",
        category: "Government",
        region: "Luxembourg",
        badges: ["Luxembourg", "Finance", "EU"],
        icon: "🇱🇺"
    },
    {
        id: "austria4refugees",
        name: "Austria4Refugees Job Board",
        url: "https://www.austria4refugees.at/en/job-exchange",
        description: "Integration-focused job board for refugees and newcomers in Austria.",
        category: "Nonprofit",
        region: "Austria",
        badges: ["Refugees", "Austria", "Integration"],
        icon: "🇦🇹"
    },
    {
        id: "jobsinberlin",
        name: "Jobs In Berlin",
        url: "https://jobs.thisisberlin.de/",
        description: "One of the oldest English job boards for Berlin, covering startups and established companies.",
        category: "Startup",
        region: "Germany",
        badges: ["Berlin", "Startups", "Tech"],
        icon: "🇩🇪"
    },
    {
        id: "bayareamania",
        name: "Bay Area Mania - Jobs Abroad",
        url: "https://www.bayareamania.com/jobs-abroad",
        description: "A jobs board that aggregates opportunities for working abroad, including in Europe.",
        category: "Global",
        region: "Europe",
        badges: ["Europe", "International", "Work Abroad"],
        icon: "🌍"
    },
    {
        id: "startus-jobs",
        name: "StartUs Jobs",
        url: "https://www.startus.cc/jobs/europe",
        description: "European startup and innovation job board with opportunities across all major tech hubs.",
        category: "Startup",
        region: "Europe",
        badges: ["Europe", "Startups", "Tech"],
        icon: "🚀"
    },
    {
        id: "jobsinrome",
        name: "Jobs in Rome",
        url: "https://www.jobsinrome.com/",
        description: "The English job board for Rome, listing opportunities for expats and locals.",
        category: "Jobs",
        region: "Italy",
        badges: ["Italy", "Rome", "Expat"],
        icon: "🇮🇹"
    },
    {
        name: "Helsinki Region",
        url: "https://www.helsinkiregion.fi/en",
        description: "Helsinki is a city in Finland, not a job board. Check the official website for job opportunities.",
        category: "City",
        region: "Finland",
        badges: ["Finland", "Helsinki", "City"],
        icon: "🇫🇮"
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

];