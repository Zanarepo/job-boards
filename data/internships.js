const internshipBoards = [
    {
        id: "internships_com",
        name: "Internships.com",
        url: "https://www.internships.com/",
        description: "The world’s largest internship marketplace, helping students find internships and employers find talent.",
        category: "Internships",
        region: "North America",
        badges: ["Students", "Internships", "Entry Level"],
        icon: "🎓"
    },
    {
        id: "wayup",
        name: "WayUp",
        url: "https://www.wayup.com/",
        description: "The go-to platform for early-career professionals to find internships and entry-level jobs at top companies.",
        category: "Internships",
        region: "North America",
        badges: ["Early Career", "Internships", "Tech"],
        icon: "🚀"
    },

    {
        id: "linkedin_internships",
        name: "LinkedIn Internships",
        url: "https://www.linkedin.com/jobs/internships/",
        description: "Global internship listings across industries with networking and direct applications.",
        category: "Internships",
        region: "Global",
        badges: ["Global", "Networking", "Entry Level"],
        icon: "💼"
    },
    {
        id: "glassdoor_internships",
        name: "Glassdoor Internships",
        url: "https://www.glassdoor.com/Job/index.htm",
        description: "Internship and entry-level job listings with company reviews and salary insights.",
        category: "Internships",
        region: "Global",
        badges: ["Reviews", "Salary", "Global"],
        icon: "⭐"
    },
    {
        id: "indeed_internships",
        name: "Indeed Internships",
        url: "https://www.indeed.com/",
        description: "Large global job board with extensive internship listings across all industries.",
        category: "Internships",
        region: "Global",
        badges: ["Global", "Search", "Mass Listings"],
        icon: "🔎"
    },
    {
        id: "handshake",
        name: "Handshake",
        url: "https://joinhandshake.com/",
        description: "University-focused internship platform connecting students with employers.",
        category: "Internships",
        region: "North America",
        badges: ["Students", "University", "Internships"],
        icon: "🤝"
    },
    {
        id: "internwise",
        name: "Internwise",
        url: "https://www.internwise.co.uk/",
        description: "UK-focused internship platform for students and graduates.",
        category: "Internships",
        region: "Europe",
        badges: ["UK", "Students", "Entry Level"],
        icon: "🇬🇧"
    },
    {
        id: "europlacement",
        name: "Europlacement",
        url: "https://www.europlacement.com/",
        description: "European internship placement platform for international students.",
        category: "Internships",
        region: "Europe",
        badges: ["Europe", "Students", "Placement"],
        icon: "🇪🇺"
    },
    {
        id: "erasmusintern",
        name: "ErasmusIntern",
        url: "https://erasmusintern.org/",
        description: "Official Erasmus internship portal for students seeking placements across Europe.",
        category: "Internships",
        region: "Europe",
        badges: ["EU", "Students", "Exchange"],
        icon: "🎓"
    },
    {
        id: "aiesec",
        name: "AIESEC Opportunities",
        url: "https://aiesec.org/",
        description: "Global student organization offering international internships and volunteering programs.",
        category: "Internships",
        region: "Global",
        badges: ["Global", "Exchange", "Leadership"],
        icon: "🌍"
    },
    {
        id: "globalexperiences",
        name: "Global Experiences",
        url: "https://www.globalexperiences.com/",
        description: "International internship placement program for students and graduates.",
        category: "Internships",
        region: "Global",
        badges: ["International", "Students", "Career"],
        icon: "✈️"
    },
    {
        id: "uninternships",
        name: "UN Internships",
        url: "https://careers.un.org/lbw/Home.aspx?viewtype=IP",
        description: "United Nations internship program for global policy and development experience.",
        category: "Internships",
        region: "Global",
        badges: ["UN", "Policy", "International"],
        icon: "🕊️"
    },
    {
        id: "worldbankinternships",
        name: "World Bank Internships",
        url: "https://www.worldbank.org/en/about/careers/programs-and-internships",
        description: "Prestigious global internship program in economics, policy, and development.",
        category: "Internships",
        region: "Global",
        badges: ["Policy", "Economics", "Global"],
        icon: "🌐"
    },
    {
        id: "nasa_internships",
        name: "NASA Internships",
        url: "https://intern.nasa.gov/",
        description: "US space agency internship program for STEM students worldwide.",
        category: "Internships",
        region: "North America",
        badges: ["STEM", "Space", "Elite"],
        icon: "🚀"
    },
    {
        id: "google_student_programs",
        name: "Google Student Programs",
        url: "https://careers.google.com/students/",
        description: "Internships and student programs at Google across engineering, product, and business.",
        category: "Internships",
        region: "Global",
        badges: ["Tech", "Elite", "Students"],
        icon: "🔵"
    },
    {
        id: "microsoft_internships",
        name: "Microsoft Internships",
        url: "https://careers.microsoft.com/students/",
        description: "Global internship programs for engineering, design, and business roles.",
        category: "Internships",
        region: "Global",
        badges: ["Tech", "Students", "Enterprise"],
        icon: "🪟"
    },
    {
        id: "amazon_internships",
        name: "Amazon Internships",
        url: "https://www.amazon.jobs/en/teams/internships-for-students",
        description: "Internship programs across tech, logistics, and business roles at Amazon.",
        category: "Internships",
        region: "Global",
        badges: ["Tech", "Operations", "Students"],
        icon: "📦"
    },

    {
        id: "apple_internships",
        name: "Apple Internships",
        url: "https://www.apple.com/careers/us/students.html",
        description: "Internship programs at Apple across engineering, design, and business roles.",
        category: "Internships",
        region: "Global",
        badges: ["Tech", "Elite", "Students"],
        icon: "🍎"
    },
    {
        id: "meta_internships",
        name: "Meta Internships",
        url: "https://www.metacareers.com/students-and-grads",
        description: "Internship programs at Meta for engineering, AI, product, and research roles.",
        category: "Internships",
        region: "Global",
        badges: ["AI", "Tech", "Elite"],
        icon: "📘"
    },
    {
        id: "tesla_internships",
        name: "Tesla Internships",
        url: "https://www.tesla.com/careers/internships",
        description: "Engineering and business internship programs at Tesla.",
        category: "Internships",
        region: "Global",
        badges: ["Engineering", "Automotive", "Elite"],
        icon: "⚡"
    },
    {
        id: "goldmansachs_internships",
        name: "Goldman Sachs Internships",
        url: "https://www.goldmansachs.com/careers/students/",
        description: "Finance and investment banking internship programs.",
        category: "Internships",
        region: "Global",
        badges: ["Finance", "Banking", "Elite"],
        icon: "🏦"
    },
    {
        id: "morganstanley_internships",
        name: "Morgan Stanley Internships",
        url: "https://www.morganstanley.com/people-opportunities/students-graduates",
        description: "Global finance internship programs in banking and asset management.",
        category: "Internships",
        region: "Global",
        badges: ["Finance", "Banking", "Students"],
        icon: "📊"
    },
    {
        id: "jpmorgan_internships",
        name: "JPMorgan Chase Internships",
        url: "https://careers.jpmorgan.com/students",
        description: "Finance, tech, and business internship programs at JPMorgan Chase.",
        category: "Internships",
        region: "Global",
        badges: ["Finance", "Tech", "Elite"],
        icon: "🏛️"
    },
    {
        id: "deloitte_internships",
        name: "Deloitte Internships",
        url: "https://www2.deloitte.com/global/en/careers/students.html",
        description: "Consulting, audit, and advisory internship programs at Deloitte.",
        category: "Internships",
        region: "Global",
        badges: ["Consulting", "Business", "Students"],
        icon: "📑"
    },
    {
        id: "pwc_internships",
        name: "PwC Internships",
        url: "https://www.pwc.com/gx/en/careers.html",
        description: "Global internship programs in consulting, audit, and tax.",
        category: "Internships",
        region: "Global",
        badges: ["Consulting", "Finance", "Students"],
        icon: "📘"
    },
    {
        id: "ey_internships",
        name: "EY Internships",
        url: "https://www.ey.com/en_gl/careers/students",
        description: "Ernst & Young internship programs in consulting and advisory.",
        category: "Internships",
        region: "Global",
        badges: ["Consulting", "Business", "Students"],
        icon: "🧠"
    },
    {
        id: "kpmg_internships",
        name: "KPMG Internships",
        url: "https://home.kpmg/xx/en/home/careers/graduates.html",
        description: "Global internship programs in audit, tax, and consulting.",
        category: "Internships",
        region: "Global",
        badges: ["Finance", "Consulting", "Students"],
        icon: "📊"
    },
    {
        id: "cern_internships",
        name: "CERN Internships",
        url: "https://careers.cern/students",
        description: "Physics and engineering research internships at CERN.",
        category: "Internships",
        region: "Europe",
        badges: ["Physics", "Research", "Elite"],
        icon: "⚛️"
    },
    {
        id: "esa_internships",
        name: "European Space Agency Internships",
        url: "https://www.esa.int/About_Us/Careers_at_ESA",
        description: "Space science and engineering internship programs at ESA.",
        category: "Internships",
        region: "Europe",
        badges: ["Space", "STEM", "Elite"],
        icon: "🛰️"
    },
    {
        id: "worldbank_ypp",
        name: "World Bank YPP",
        url: "https://www.worldbank.org/en/about/careers/programs-and-internships/ypp",
        description: "Young Professionals Program and internship pathway into global development careers.",
        category: "Internships",
        region: "Global",
        badges: ["Policy", "Economics", "Elite"],
        icon: "🌍"
    },
    {
        id: "unicef_internships",
        name: "UNICEF Internships",
        url: "https://www.unicef.org/careers/internships",
        description: "Global internship programs in humanitarian and development work.",
        category: "Internships",
        region: "Global",
        badges: ["Humanitarian", "UN", "Students"],
        icon: "🕊️"
    },
    {
        id: "who_internships",
        name: "WHO Internships",
        url: "https://www.who.int/careers/internship-programme",
        description: "World Health Organization internship programs in global health policy.",
        category: "Internships",
        region: "Global",
        badges: ["Health", "UN", "Policy"],
        icon: "🧬"
    },
    {
        "id": "un_internships",
        "name": "United Nations Internships",
        "url": "https://careers.un.org/lbw/home.aspx?viewtype=1",
        "description": "Internships across UN agencies, funds, and programs. Highly competitive.",
        "category": "Internships",
        "region": "Global",
        "badges": ["UN", "Humanitarian", "International"],
        "icon": "🕊️"
    },

    {
        "id": "worldbank_internships",
        "name": "World Bank Internships",
        "url": "https://www.worldbank.org/en/about/careers/programs-and-internships",
        "description": "Paid internships for students interested in international development.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Development", "Economics", "Global"],
        "icon": "🌍"
    },

    {
        "id": "imf_internships",
        "name": "IMF Internships",
        "url": "https://www.imf.org/en/About/careers/internships-and-student-programs",
        "description": "Prestigious internship program for students interested in economics and finance.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Finance", "Economics", "Elite"],
        "icon": "🏛️"
    },

    {
        "id": "oecd_internships",
        "name": "OECD Internships",
        "url": "https://www.oecd.org/careers/internships.htm",
        "description": "Internships at the Organisation for Economic Co-operation and Development.",
        "category": "Internships",
        "region": "Europe",
        "badges": ["Policy", "Economics", "Europe"],
        "icon": "🌐"
    },

    {
        "id": "redcross_internships",
        "name": "Red Cross Internships",
        "url": "https://www.icrc.org/en/document/internships",
        "description": "Humanitarian internships with the International Committee of the Red Cross.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Humanitarian", "NGO", "International"],
        "icon": "🩸"
    },

    {
        "id": "amnesty_internships",
        "name": "Amnesty International Internships",
        "url": "https://www.amnesty.org/en/who-we-are/careers/working-at-amnesty/internships/",
        "description": "Human rights internships with global impact.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Human Rights", "NGO", "Activism"],
        "icon": "✊"
    },

    {
        "id": "doctorswithoutborders_internships",
        "name": "Doctors Without Borders Internships",
        "url": "https://www.msf.org/get-involved/field-volunteer/intern-msf",
        "description": "Field and HQ internships for those passionate about humanitarian medicine and aid.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Humanitarian", "Medicine", "Fieldwork"],
        "icon": "🚑"
    },

    {
        "id": "worldfoodprogramme_internships",
        "name": "World Food Programme Internships",
        "url": "https://www.wfp.org/careers/internships",
        "description": "Internships with the UN agency dedicated to ending world hunger.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Food Security", "UN", "Humanitarian"],
        "icon": "🌾"
    },

    {
        "id": "unhcr_internships",
        "name": "UNHCR Internships",
        "url": "https://www.unhcr.org/careers/internships.html",
        "description": "Internships with the UN Refugee Agency focusing on refugee rights and protection.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Refugees", "UN", "Human Rights"],
        "icon": "🛡️"
    },

    {
        "id": "ielts_internships",
        "name": "IELTSInternships",
        "url": "https://ieltsinternships.com/",
        "description": "A global database of paid internships worldwide.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Paid", "Global", "All Fields"],
        "icon": "💰"
    },

    {
        "id": "iaea_internships",
        "name": "IAEA Internships",
        "url": "https://www.iaea.org/about/employment/internships",
        "description": "Internships at the International Atomic Energy Agency in Vienna.",
        "category": "Internships",
        "region": "Europe",
        "badges": ["Nuclear", "Science", "International"],
        "icon": "⚛️"
    },

    {
        "id": "nato_internships",
        "name": "NATO Internships",
        "url": "https://www.nato.int/cps/en/natohq/internship.htm",
        "description": "Internship opportunities at NATO Headquarters in Brussels.",
        "category": "Internships",
        "region": "Europe",
        "badges": ["Defense", "International", "Security"],
        "icon": "🛡️"
    },

    {
        "id": "eu_internships",
        "name": "EU Internships",
        "url": "https://students.ec.europa.eu/internships-and-traineeships_en",
        "description": "Internships across various European Union institutions.",
        "category": "Internships",
        "region": "Europe",
        "badges": ["EU", "Policy", "Bureaucracy"],
        "icon": "🇪🇺"
    },

    {
        "id": "unesco_internships",
        "name": "UNESCO Internships",
        "url": "https://en.unesco.org/careers/internships",
        "description": "Internships at UNESCO focusing on education, science, culture, and communication.",
        "category": "Internships",
        "region": "Global",
        "badges": ["Culture", "Education", "UN"],
        "icon": "🏛️"
    },

    {
        "id": "nasa_internships",
        "name": "NASA Internships",
        "url": "https://intern.nasa.gov/",
        "description": "Internships at NASA for students passionate about space exploration and science.",
        "category": "Internships",
        "region": "USA",
        "badges": ["Space", "STEM", "USA"],
        "icon": "🚀"
    },

    {
        "id": "esa_internships",
        "name": "ESA Internships",
        "url": "https://www.esa.int/About_Us/Careers_at_ESA/Internships",
        "description": "Space science and engineering internships at the European Space Agency.",
        "category": "Internships",
        "region": "Europe",
        "badges": ["Space", "STEM", "Europe"],
        "icon": "🛰️"
    },

    {
        "id": "cern_internships",
        "name": "CERN Internships",
        "url": "https://jobs.web.cern.ch/job-types/internships-fellowships",
        "description": "Physics and engineering internships at the European Organization for Nuclear Research"
    }
];
