const africaBoards = [
    {
        id: "jobberman",
        name: "Jobberman",
        url: "https://www.jobberman.com/",
        description: "West Africa's largest job portal, focusing on Nigeria and Ghana.",
        category: "Global",
        region: "Africa",
        badges: ["Nigeria", "Ghana", "Africa"],
        icon: "🇳🇬"
    },
    {
        id: "brightermonday",
        name: "BrighterMonday",
        url: "https://www.brightermonday.co.ke/",
        description: "The leading job site in East Africa, covering Kenya, Uganda, and Tanzania.",
        category: "Global",
        region: "Africa",
        badges: ["Kenya", "East Africa"],
        icon: "🇰🇪"
    },
    {
        id: "pnet",
        name: "Pnet",
        url: "https://www.pnet.co.za/",
        description: "One of South Africa's leading online recruitment portals.",
        category: "Global",
        region: "Africa",
        badges: ["South Africa", "Corporate"],
        icon: "🇿🇦"
    },
    {
        id: "techcity",
        name: "TechCity Jobs",
        url: "https://www.techcityng.com/",
        description: "Tech-focused job listings and news for the African technology ecosystem.",
        category: "Tech",
        region: "Africa",
        badges: ["Tech", "Africa", "Startups"],
        icon: "🏙️"
    },
    {
        id: "fuzu",
        name: "Fuzu",
        url: "https://www.fuzu.com/",
        description: "Career growth platform covering Kenya, Uganda, Nigeria and more with learning resources.",
        category: "Global",
        region: "Africa",
        badges: ["East Africa", "Learning", "Growth"],
        icon: "🌱"
    },
    {
        id: "africajobboard",
        name: "Africa Job Board",
        url: "https://www.africajobboard.com/",
        description: "Pan-African job listings spanning multiple industries and countries across the continent.",
        category: "Global",
        region: "Africa",
        badges: ["Pan-Africa", "All Roles"],
        icon: "🌍"
    },
    {
        id: "findworkafrica",
        name: "Findwork Africa",
        url: "https://findwork.africa/",
        description: "Remote and local tech opportunities specifically targeting African talent.",
        category: "Remote",
        region: "Africa",
        badges: ["Remote", "Tech", "Africa"],
        icon: "📲"
    },
    {
        id: "shortlist",
        name: "Shortlist",
        url: "https://shortlist.co/",
        description: "Connecting high-growth companies in Africa and India with top professional talent.",
        category: "Tech",
        region: "Africa",
        badges: ["Africa", "India", "Vetted"],
        icon: "📋"
    },

    // ── WEST AFRICA ────────────────────────────────────────────────
    {
        id: "jobberman",
        name: "Jobberman",
        url: "https://www.jobberman.com/",
        description: "West Africa's largest job portal, focusing on Nigeria and Ghana.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Nigeria", "Ghana", "Africa"],
        icon: "🇳🇬"
    },
    {
        id: "myjobmag",
        name: "MyJobMag",
        url: "https://www.myjobmag.com/",
        description: "One of Nigeria's leading job portals with verified listings, CV builder, and career advice. Active since 2010.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Nigeria", "Verified", "CV Builder"],
        icon: "📌"
    },
    {
        id: "ngcareers",
        name: "NGCareers",
        url: "https://www.ngcareers.com/",
        description: "Nigeria-focused job board offering listings, company reviews, and career resources for all experience levels.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Nigeria", "Reviews", "Career Advice"],
        icon: "🇳🇬"
    },
    {
        id: "jobzilla",
        name: "Jobzilla Nigeria",
        url: "https://www.jobzilla.ng/",
        description: "Nigerian job search website with a wide range of listings across industries and states.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Nigeria", "All Industries"],
        icon: "⚡"
    },
    {
        id: "hotnigerianjobs",
        name: "HotNigerianJobs",
        url: "https://www.hotnigerianjobs.com/",
        description: "Daily publisher of the latest Nigerian job vacancies across varied sectors and businesses.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Nigeria", "Daily Updates"],
        icon: "🔥"
    },
    {
        id: "naijahotjobs",
        name: "NaijaHotJobs",
        url: "https://www.naijahotjobs.com/",
        description: "Popular Nigerian job board with a long-standing focus on connecting local employers and job seekers.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Nigeria", "Established"],
        icon: "🇳🇬"
    },
    {
        id: "naijajobportal",
        name: "NaijaJobPortal",
        url: "https://www.naijajobportal.com.ng/",
        description: "Free job portal covering all 36 Nigerian states with ATS CV builder, job alerts, and community chat for job seekers.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Nigeria", "Free", "Community"],
        icon: "📢"
    },
    {
        id: "jobwebghana",
        name: "JobWeb Ghana",
        url: "https://www.jobwebghana.com/",
        description: "Dedicated platform for job seekers and employers in Ghana, covering all major industries.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Ghana", "All Industries"],
        icon: "🇬🇭"
    },
    {
        id: "graduatesinghana",
        name: "Graduates In Ghana",
        url: "https://www.graduatesinghana.com/",
        description: "Ghanaian job portal geared toward graduate-level positions and entry-to-mid level career opportunities.",
        category: "Global",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Ghana", "Graduates", "Entry Level"],
        icon: "🎓"
    },
    {
        id: "techcity",
        name: "TechCity Jobs",
        url: "https://www.techcityng.com/",
        description: "Tech-focused job listings and news for the African technology ecosystem.",
        category: "Tech",
        region: "Africa",
        subRegion: "West Africa",
        badges: ["Tech", "Africa", "Startups"],
        icon: "🏙️"
    },

    // ── EAST AFRICA ────────────────────────────────────────────────
    {
        id: "brightermonday",
        name: "BrighterMonday",
        url: "https://www.brightermonday.co.ke/",
        description: "The leading job site in East Africa, covering Kenya, Uganda, and Tanzania.",
        category: "Global",
        region: "Africa",
        subRegion: "East Africa",
        badges: ["Kenya", "East Africa"],
        icon: "🇰🇪"
    },
    {
        id: "jobwebkenya",
        name: "JobWeb Kenya",
        url: "https://www.jobwebkenya.com/",
        description: "Kenya's largest jobs website connecting graduates and professionals with top employers nationwide.",
        category: "Global",
        region: "Africa",
        subRegion: "East Africa",
        badges: ["Kenya", "Graduates", "All Levels"],
        icon: "🇰🇪"
    },
    {
        id: "fuzu",
        name: "Fuzu",
        url: "https://www.fuzu.com/",
        description: "Career growth platform covering Kenya, Uganda, Nigeria and more with learning resources and mentorship.",
        category: "Global",
        region: "Africa",
        subRegion: "East Africa",
        badges: ["East Africa", "Learning", "Growth"],
        icon: "🌱"
    },
    {
        id: "ethiojobs",
        name: "EthioJobs",
        url: "https://ethiojobs.net/",
        description: "Ethiopia's leading job board for local and NGO vacancies in accounting, IT, finance, and more.",
        category: "Global",
        region: "Africa",
        subRegion: "East Africa",
        badges: ["Ethiopia", "NGO", "Finance"],
        icon: "🇪🇹"
    },
    {
        id: "kaleta",
        name: "Kaleta",
        url: "https://kaleta.co/",
        description: "Pan-African jobs and freelance/consultancy platform spanning East, West, Central, North, and Southern Africa.",
        category: "Freelance",
        region: "Africa",

        subRegion: "East Africa",
        badges: ["Pan-Africa", "Freelance", "Consultancy"],
        icon: "🌍"
    },
    {
        id: "jobwebzambia",
        name: "JobWeb Zambia",
        url: "https://jobwebzambia.com/",
        description: "Zambia's largest jobs website, specialising in graduate and professional vacancies across all industries.",
        category: "Global",
        region: "Africa",
        subRegion: "East Africa",
        badges: ["Zambia", "Graduates"],
        icon: "🇿🇲"
    },
    {
        id: "gozambiajobs",
        name: "Go Zambia Jobs",
        url: "https://gozambiajobs.com/",
        description: "Zambia's #1 job search platform since 2011, connecting job seekers with top employers nationwide.",
        category: "Global",
        region: "Africa",
        subRegion: "East Africa",
        badges: ["Zambia", "Established"],
        icon: "🇿🇲"
    },

    // ── SOUTHERN AFRICA ────────────────────────────────────────────
    {
        id: "pnet",
        name: "Pnet",
        url: "https://www.pnet.co.za/",
        description: "One of South Africa's leading online recruitment portals for professionals across all sectors.",
        category: "Global",
        region: "Africa",
        subRegion: "Southern Africa",
        badges: ["South Africa", "Corporate"],
        icon: "🇿🇦"
    },
    {
        id: "careers24",
        name: "Careers24",
        url: "https://www.careers24.com/",
        description: "South Africa's major job site with a CV database of 3 million+ and an audience of 6 million job seekers.",
        category: "Global",
        region: "Africa",
        subRegion: "Southern Africa",
        badges: ["South Africa", "Large DB", "All Levels"],
        icon: "🇿🇦"
    },
    {
        id: "jobvine",
        name: "Jobvine",
        url: "https://www.jobvine.co.za/",
        description: "South African job board using social referral technology to connect employers with passive and active candidates.",
        category: "Global",
        region: "Africa",
        subRegion: "Southern Africa",
        badges: ["South Africa", "Referrals", "Social"],
        icon: "🍇"
    },
    {
        id: "vacancymail",
        name: "VacancyMail",
        url: "https://www.vacancymail.co.zw/",
        description: "Zimbabwe's most trusted job vacancies website covering NGO roles, graduate trainee programmes, and diaspora jobs.",
        category: "Global",
        region: "Africa",
        subRegion: "Southern Africa",
        badges: ["Zimbabwe", "NGO", "Diaspora"],
        icon: "🇿🇼"
    },
    {
        id: "zimbajob",
        name: "ZimbaJob",
        url: "https://www.zimbajob.com/",
        description: "Zimbabwean recruitment site serving companies and job seekers with vacancies and CV search tools.",
        category: "Global",
        region: "Africa",
        subRegion: "Southern Africa",
        badges: ["Zimbabwe", "CV Search"],
        icon: "🇿🇼"
    },
    {
        id: "cvpeopleafrica",
        name: "CV People Africa",
        url: "https://www.cvpeopleafrica.com/",
        description: "Pan-African recruitment platform with strong coverage in Zimbabwe, Zambia, and neighbouring Southern African countries.",
        category: "Global",
        region: "Africa",
        subRegion: "Southern Africa",
        badges: ["Zimbabwe", "Zambia", "Pan-Africa"],
        icon: "📄"
    },

    // ── NORTH AFRICA ───────────────────────────────────────────────
    {
        id: "wuzzuf",
        name: "WUZZUF",
        url: "https://wuzzuf.net/",
        description: "Egypt's leading job platform using smart matching to connect professionals with top companies in the Middle East and North Africa.",
        category: "Tech",
        region: "Africa",
        subRegion: "North Africa",
        badges: ["Egypt", "MENA", "Smart Match"],
        icon: "🇪🇬"
    },
    {
        id: "tanqeeb",
        name: "Tanqeeb",
        url: "https://tanqeeb.com/",
        description: "AI-powered recruitment platform for Arabic-speaking markets covering Egypt and broader MENA regions.",
        category: "Tech",
        region: "Africa",
        subRegion: "North Africa",
        badges: ["Egypt", "MENA", "AI Powered"],
        icon: "🤖"
    },

    // ── PAN-AFRICA / MULTI-REGION ──────────────────────────────────
    {
        id: "africajobboard",
        name: "Africa Job Board",
        url: "https://www.africajobboard.com/",
        description: "Pan-African job listings spanning multiple industries and countries across the continent.",
        category: "Global",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Pan-Africa", "All Roles"],
        icon: "🌍"
    },
    {
        id: "careersinafrica",
        name: "Careers in Africa",
        url: "https://www.careersinafrica.com/",
        description: "Continent-wide recruitment platform helping employers build employer brand and reach 2M+ African professionals.",
        category: "Global",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Pan-Africa", "Executive", "Employer Brand"],
        icon: "🌍"
    },
    {
        id: "africawork",
        name: "AfricaWork",
        url: "https://www.africawork.com/",
        description: "Pan-African job board and executive recruitment service spanning Francophone and Anglophone Africa.",
        category: "Global",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Pan-Africa", "Francophone", "Executive"],
        icon: "🤝"
    },
    {
        id: "jobnetafrica",
        name: "JobNet Africa",
        url: "https://jobnetafrica.com/",
        description: "Boutique executive search firm and job board connecting senior African talent with high-growth organisations.",
        category: "Global",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Pan-Africa", "Executive", "Senior Roles"],
        icon: "🎯"
    },
    {
        id: "ngojobsinafrica",
        name: "NGO Jobs in Africa",
        url: "https://ngojobsinafrica.com/",
        description: "Dedicated job board for NGO and non-profit vacancies across the African continent.",
        category: "NGO",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["NGO", "Non-Profit", "Pan-Africa"],
        icon: "🌐"
    },
    {
        id: "shortlist",
        name: "Shortlist",
        url: "https://shortlist.co/",
        description: "Connecting high-growth companies in Africa and India with vetted top professional talent.",
        category: "Tech",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Africa", "India", "Vetted"],
        icon: "📋"
    },
    {
        id: "findworkafrica",
        name: "Findwork Africa",
        url: "https://findwork.africa/",
        description: "Remote and local tech opportunities specifically targeting African talent.",
        category: "Remote",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Remote", "Tech", "Africa"],
        icon: "📲"
    },
    {
        id: "remote4africa",
        name: "Remote4Africa",
        url: "https://remote4africa.com/",
        description: "Verified remote job listings specifically for African professionals in Nigeria, Kenya, South Africa, Ghana, Egypt, and more.",
        category: "Remote",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Remote", "Verified", "Multi-country"],
        icon: "🌐"
    },
    {
        id: "caglobal",
        name: "CA Global",
        url: "https://www.caglobalint.com/",
        description: "African executive search and headhunting firm with daily job additions for local professionals and the African diaspora.",
        category: "Global",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Pan-Africa", "Executive", "Diaspora"],
        icon: "🔍"
    },
    {
        id: "myjobmag_africa",
        name: "MyJobMag (Multi-country)",
        url: "https://www.myjobmag.com/",
        description: "Operates across multiple African countries including Nigeria, Ghana, South Africa, and Kenya with verified listings.",
        category: "Global",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Multi-country", "Verified", "Africa-wide"],
        icon: "🗺️"
    },
    {
        id: "findajobinafrica",
        name: "Find a Job in Africa",
        url: "https://findajobinafrica.com/",
        description: "Executive-focused African job portal with CV enhancement services and a broad continental job database.",
        category: "Global",
        region: "Africa",
        subRegion: "Pan-Africa",
        badges: ["Pan-Africa", "Executive", "CV Help"],
        icon: "🔎"
    },
];

