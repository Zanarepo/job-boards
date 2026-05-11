const apprenticeshipBoards = [
    {
        id: "apprenticeship_gov",
        name: "Apprenticeship.gov",
        url: "https://www.apprenticeship.gov/",
        description: "The official US government portal for finding apprenticeships across all industries, especially trades.",
        category: "Handiworks",
        region: "North America",
        badges: ["USA", "Official", "Trades"],
        icon: "🏗️"
    },
    {
        id: "find_apprenticeship_uk",
        name: "Find an Apprenticeship (UK)",
        url: "https://www.gov.uk/apply-apprenticeship",
        description: "Official UK government service to search and apply for apprenticeships in England.",
        category: "Handiworks",
        region: "Europe",
        badges: ["UK", "Official", "Construction"],
        icon: "🇬🇧"
    },
    {
        id: "tradehounds",
        name: "Trade Hounds",
        url: "https://www.tradehounds.com/",
        description: "The largest professional community built for the skilled trades (plumbing, carpentry, electrical).",
        category: "Handiworks",
        region: "North America",
        badges: ["Trades", "Community", "USA"],
        icon: "🐕"
    },
    {
        id: "skillpointe",
        name: "SkillPointe",
        url: "https://www.skillpointe.com/",
        description: "Helping people find skilled trade training and jobs in high-growth industries like construction and energy.",
        category: "Handiworks",
        region: "North America",
        badges: ["Skills", "Vocational", "USA"],
        icon: "🎯"
    },
    {
        id: "goconstruct",
        name: "Go Construct",
        url: "https://www.goconstruct.org/",
        description: "A comprehensive guide to careers in the UK construction and built environment industry.",
        category: "Handiworks",
        region: "Europe",
        badges: ["UK", "Construction", "Career Guide"],
        icon: "🧱"
    },
    {
        id: "tafe_nsw",
        name: "TAFE NSW Apprenticeships",
        url: "https://www.tafensw.edu.au/apprenticeships-traineeships",
        description: "Australia’s leading provider of vocational education and training for apprentices and trainees.",
        category: "Handiworks",
        region: "Oceania",
        badges: ["Australia", "Vocational", "Training"],
        icon: "🇦🇺"
    },
    {
        id: "red_seal_canada",
        name: "Red Seal Program",
        url: "https://www.red-seal.ca/",
        description: "The standard for excellence in the skilled trades in Canada, managing apprenticeship standards.",
        category: "Handiworks",
        region: "North America",
        badges: ["Canada", "Standards", "Elite"],
        icon: "🍁"
    },
    {
        id: "mikeroweworks",
        name: "mikeroweWorks Foundation",
        url: "https://www.mikeroweworks.org/",
        description: "Promoting skilled trades and providing scholarships for vocational training and apprenticeships.",
        category: "Handiworks",
        region: "North America",
        badges: ["Scholarships", "Advocacy", "Trades"],
        icon: "👷"
    },
    {
        id: "construction_job_board",
        name: "Construction Job Board",
        url: "https://www.constructionjobboard.com/",
        description: "Dedicated job board for the construction industry, including entry-level and apprentice roles.",
        category: "Handiworks",
        region: "Global",
        badges: ["Construction", "Engineering", "Global"],
        icon: "🚧"
    },

    {
        id: "european_apprenticeships",
        name: "European Alliance for Apprenticeships",
        url: "https://ec.europa.eu/social/main.jsp?catId=1147",
        description: "EU initiative promoting apprenticeships across member states and connecting youth to training programs.",
        category: "Handiworks",
        region: "Europe",
        badges: ["EU", "Official", "Training"],
        icon: "🇪🇺"
    },
    {
        id: "national_careers_service_uk",
        name: "National Careers Service (UK Apprenticeships)",
        url: "https://nationalcareers.service.gov.uk/apprenticeships",
        description: "UK government platform listing apprenticeships across trades, tech, and business sectors.",
        category: "Handiworks",
        region: "Europe",
        badges: ["UK", "Official", "Government"],
        icon: "🇬🇧"
    },
    {
        id: "apprenticeship_scotland",
        name: "Apprenticeships.scot",
        url: "https://www.apprenticeships.scot/",
        description: "Scotland’s national apprenticeship portal for modern and foundation apprenticeships.",
        category: "Handiworks",
        region: "Europe",
        badges: ["Scotland", "Official", "Trades"],
        icon: "🏴"
    },
    {
        id: "skillsconnect_aus",
        name: "SkillsConnect Australia",
        url: "https://www.australianapprenticeships.gov.au/",
        description: "Australian government portal for apprenticeships and traineeships across industries.",
        category: "Handiworks",
        region: "Oceania",
        badges: ["Australia", "Government", "Vocational"],
        icon: "🇦🇺"
    },
    {
        id: "skills_ontario",
        name: "Ontario Apprenticeship (Skilled Trades Ontario)",
        url: "https://www.skilledtradesontario.ca/",
        description: "Canadian provincial system for registering and managing skilled trade apprenticeships.",
        category: "Handiworks",
        region: "North America",
        badges: ["Canada", "Trades", "Government"],
        icon: "🍁"
    },
    {
        id: "skills_canada_youth",
        name: "Skills Canada",
        url: "https://www.skillscanada.com/",
        description: "National organization promoting skilled trades careers and youth competitions in Canada.",
        category: "Handiworks",
        region: "North America",
        badges: ["Canada", "Youth", "Trades"],
        icon: "🏅"
    },
    {
        id: "worldskills",
        name: "WorldSkills International",
        url: "https://www.worldskills.org/",
        description: "Global organization promoting excellence in vocational skills and trades competitions.",
        category: "Handiworks",
        region: "Global",
        badges: ["Global", "Elite Skills", "Trades"],
        icon: "🌍"
    },
    {
        id: "skillsusa",
        name: "SkillsUSA",
        url: "https://www.skillsusa.org/",
        description: "US workforce development organization preparing students for skilled trade careers.",
        category: "Handiworks",
        region: "North America",
        badges: ["USA", "Students", "Vocational"],
        icon: "🇺🇸"
    },
    {
        id: "careerone_australia",
        name: "CareerOne Apprenticeships",
        url: "https://www.careerone.com.au/",
        description: "Australian job board with strong apprenticeship and trade listings.",
        category: "Handiworks",
        region: "Oceania",
        badges: ["Australia", "Jobs", "Trades"],
        icon: "🧰"
    },
    {
        id: "reed_apprenticeships",
        name: "Reed Apprenticeships (UK)",
        url: "https://www.reed.co.uk/apprenticeships",
        description: "UK job platform with a large dedicated apprenticeship section.",
        category: "Handiworks",
        region: "Europe",
        badges: ["UK", "Jobs", "Trades"],
        icon: "📘"
    },
    {
        id: "totaljobs_apprenticeships",
        name: "TotalJobs Apprenticeships",
        url: "https://www.totaljobs.com/jobs/apprenticeship",
        description: "UK job board offering apprenticeship listings across multiple industries.",
        category: "Handiworks",
        region: "Europe",
        badges: ["UK", "Jobs", "Entry Level"],
        icon: "🔧"
    },
    {
        id: "indeed_apprenticeships",
        name: "Indeed Apprenticeships",
        url: "https://www.indeed.com/q-Apprenticeship-jobs.html",
        description: "Global job aggregator with large volume of apprenticeship and trainee roles.",
        category: "Handiworks",
        region: "Global",
        badges: ["Global", "Aggregator", "Trades"],
        icon: "🔎"
    },
    {
        id: "ziprecruiter_trades",
        name: "ZipRecruiter Trades",
        url: "https://www.ziprecruiter.com/",
        description: "US job platform with strong coverage of apprenticeships and skilled trade jobs.",
        category: "Handiworks",
        region: "North America",
        badges: ["USA", "Trades", "Jobs"],
        icon: "⚙️"
    },
    {
        id: "nccer",
        name: "NCCER (National Center for Construction Education)",
        url: "https://www.nccer.org/",
        description: "US construction education foundation setting standards for craft training and apprenticeships.",
        category: "Handiworks",
        region: "North America",
        badges: ["Construction", "Certification", "USA"],
        icon: "🏗️"
    },

    {
        id: "nigeria_nasims",
        name: "NASIMS (National Social Investment Management System)",
        url: "https://nasims.gov.ng/",
        description: "Nigeria’s federal platform for skills programs, training, and youth employment initiatives (N-Power ecosystem).",
        category: "Handiworks",
        region: "Africa",
        badges: ["Nigeria", "Government", "Training"],
        icon: "🇳🇬"
    },
    {
        id: "nigeria_npower",
        name: "N-Power Programme",
        url: "https://www.npower.gov.ng/",
        description: "Nigeria federal youth empowerment program providing vocational training and apprenticeships.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Nigeria", "Youth", "Skills"],
        icon: "⚙️"
    },
    {
        id: "itf_nigeria",
        name: "Industrial Training Fund (ITF)",
        url: "https://www.itf.gov.ng/",
        description: "Nigeria’s official agency for industrial training, apprenticeships, and technical skill development.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Nigeria", "Technical", "Government"],
        icon: "🏗️"
    },
    {
        id: "nigeria_nigerian_technical_colleges",
        name: "Federal Technical Colleges (Nigeria)",
        url: "https://education.gov.ng/",
        description: "Nigeria’s vocational education system for trade skills and apprenticeships.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Nigeria", "Vocational", "Education"],
        icon: "🎓"
    },
    {
        id: "lagos_skills_acquisition",
        name: "Lagos State Skills Acquisition Centres",
        url: "https://mspa.lagosstate.gov.ng/",
        description: "Lagos state vocational training centers offering apprenticeships in trades and tech skills.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Nigeria", "Lagos", "Vocational"],
        icon: "🏙️"
    },
    {
        id: "federal_ministry_labour_nigeria",
        name: "Federal Ministry of Labour & Employment (Nigeria)",
        url: "https://www.labour.gov.ng/",
        description: "Government body overseeing employment, apprenticeship systems, and labor training.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Nigeria", "Government", "Employment"],
        icon: "🏛️"
    },
    {
        id: "skillup_imo",
        name: "SkillUp Imo Program",
        url: "https://skillupimo.ng/",
        description: "State-led digital and vocational skills training program in Imo State, Nigeria.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Nigeria", "Digital Skills", "State Program"],
        icon: "💻"
    },
    {
        id: "3million_techies",
        name: "3 Million Technical Talent (3MTT)",
        url: "https://3mtt.gov.ng/",
        description: "Nigeria federal program training millions in digital, technical, and vocational skills.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Nigeria", "Tech", "Skills"],
        icon: "🚀"
    },
    {
        id: "youth_employment_service_kenya",
        name: "Kenya Youth Employment & Opportunities Project (KYEOP)",
        url: "https://www.youthfund.go.ke/",
        description: "Kenyan government program supporting youth apprenticeships and entrepreneurship.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Kenya", "Youth", "Government"],
        icon: "🇰🇪"
    },
    {
        id: "south_africa_seta",
        name: "SETA (South Africa Skills Education Training Authorities)",
        url: "https://www.skillsportal.co.za/",
        description: "South Africa’s sector-based training authorities managing apprenticeships across industries.",
        category: "Handiworks",
        region: "Africa",
        badges: ["South Africa", "Government", "Training"],
        icon: "🇿🇦"
    },
    {
        id: "ethiopia_tvets",
        name: "Ethiopia TVET System",
        url: "https://www.moe.gov.et/",
        description: "Ethiopia’s technical and vocational education and training system for apprenticeships.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Ethiopia", "Vocational", "Education"],
        icon: "🇪🇹"
    },
    {
        id: "ghana_cotvets",
        name: "COTVET Ghana",
        url: "https://www.cotvet.gov.gh/",
        description: "Council for Technical and Vocational Education and Training in Ghana.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Ghana", "Government", "Skills"],
        icon: "🇬🇭"
    },
    {
        id: "afdb_youth_employment",
        name: "African Development Bank Youth Employment",
        url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/jobs-for-youth-in-africa",
        description: "Pan-African initiative supporting youth employment and skills development.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Africa", "Development", "Youth"],
        icon: "🌍"
    },
    {
        id: "undp_youth_africa",
        name: "UNDP Youth Empowerment Africa",
        url: "https://www.undp.org/africa",
        description: "UN development programs supporting vocational training and youth employment in Africa.",
        category: "Handiworks",
        region: "Africa",
        badges: ["UN", "Africa", "Development"],
        icon: "🌐"
    },

    {
        id: "africa_union_ysa",
        name: "African Union Youth Skills Initiative (AYSI)",
        url: "https://au.int/en/youth",
        description: "African Union programs supporting youth skills development and vocational training across member states.",
        category: "Handiworks",
        region: "Africa",
        badges: ["AU", "Pan-African", "Youth"],
        icon: "🌍"
    },
    {
        id: "ilo_skills_africa",
        name: "ILO Skills & Employability Africa",
        url: "https://www.ilo.org/africa",
        description: "International Labour Organization programs supporting apprenticeships and vocational training in Africa.",
        category: "Handiworks",
        region: "Africa",
        badges: ["UN", "Skills", "Training"],
        icon: "⚙️"
    },
    {
        id: "world_bank_skills",
        name: "World Bank Skills Development Programs",
        url: "https://www.worldbank.org/en/topic/skillsdevelopment",
        description: "Funding and implementation of vocational training and apprenticeship systems in developing countries.",
        category: "Handiworks",
        region: "Africa",
        badges: ["Development", "Funding", "Skills"],
        icon: "🏗️"
    }
];
