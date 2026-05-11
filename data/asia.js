const asiaBoards = [
    {
        id: "jobstreet",
        name: "JobStreet",
        url: "https://www.jobstreet.com/",
        description: "Southeast Asia's largest job marketplace, dominant in Malaysia, Singapore, Philippines.",
        category: "Global",
        region: "Asia",
        badges: ["SEA", "Corporate", "All Roles"],
        icon: "🌏"
    },
    {
        id: "naukri",
        name: "Naukri",
        url: "https://www.naukri.com/",
        description: "India's #1 job portal with millions of listings across every sector.",
        category: "Global",
        region: "Asia",
        badges: ["India", "All Roles", "Volume"],
        icon: "🇮🇳"
    },
    {
        id: "foundit",
        name: "Foundit (Monster APAC)",
        url: "https://www.foundit.in/",
        description: "Formerly Monster India — a major platform for mid to senior professional roles in Asia.",
        category: "Global",
        region: "Asia",
        badges: ["India", "APAC", "Mid-Senior"],
        icon: "🔎"
    },
    {
        id: "techinasia",
        name: "Tech In Asia Jobs",
        url: "https://www.techinasia.com/jobs",
        description: "The premier source for startup and tech jobs across Southeast and East Asia.",
        category: "Tech",
        region: "Asia",
        badges: ["Startups", "SEA", "Tech"],
        icon: "🏮"
    },

    {
        id: "jobstreet",
        name: "JobStreet",
        url: "https://www.jobstreet.com/",
        description: "Southeast Asia's largest job marketplace (SEEK-owned) with 36M+ active talent profiles across Malaysia, Singapore, Philippines, and Indonesia.",
        category: "Global",
        region: "Asia",
        subRegion: "Southeast Asia",
        badges: ["SEA", "Corporate", "All Roles"],
        icon: "🌏"
    },
    {
        id: "jobsdb",
        name: "JobsDB",
        url: "https://www.jobsdb.com/",
        description: "Asia's preferred job destination (SEEK-owned), covering Hong Kong, Singapore, and Thailand with career advice and listings.",
        category: "Global",
        region: "Asia",
        subRegion: "Southeast Asia",
        badges: ["Hong Kong", "Thailand", "Singapore"],
        icon: "📋"
    },
    {
        id: "techinasia",
        name: "Tech In Asia Jobs",
        url: "https://www.techinasia.com/jobs",
        description: "The premier source for startup and tech jobs across Southeast and East Asia.",
        category: "Tech",
        region: "Asia",
        subRegion: "Southeast Asia",
        badges: ["Startups", "SEA", "Tech"],
        icon: "🏮"
    },
    {
        id: "glints",
        name: "Glints",
        url: "https://glints.com/",
        description: "Singapore-born talent ecosystem serving 4M+ professionals and 50K+ organisations across Southeast Asia and Taiwan.",
        category: "Tech",
        region: "Asia",
        subRegion: "Southeast Asia",
        badges: ["SEA", "Taiwan", "Startups"],
        icon: "✨"
    },
    {
        id: "9cv9",
        name: "9cv9",
        url: "https://9cv9.com/",
        description: "Fast-growing SEA recruitment platform with strong presence in Vietnam, Indonesia, Philippines, Malaysia, Thailand, and Singapore.",
        category: "Global",
        region: "Asia",
        subRegion: "Southeast Asia",
        badges: ["SEA", "Multi-country", "Growing"],
        icon: "9️⃣"
    },
    {
        id: "kalibrr",
        name: "Kalibrr",
        url: "https://www.kalibrr.com/",
        description: "Philippine-founded AI-powered job matching platform for mid-to-senior tech and marketing roles. Expanded into Indonesia with 2M+ users.",
        category: "Tech",
        region: "Asia",
        subRegion: "Southeast Asia",
        badges: ["Philippines", "Indonesia", "AI Match"],
        icon: "🇵🇭"
    },
    {
        id: "hiredly",
        name: "Hiredly",
        url: "https://hiredly.com/",
        description: "Malaysia's leading startup and tech job board, popular with young professionals and growth-stage companies.",
        category: "Tech",
        region: "Asia",
        subRegion: "Southeast Asia",
        badges: ["Malaysia", "Startups", "Tech"],
        icon: "🇲🇾"
    },
    {
        id: "workabroadph",
        name: "Work Abroad (Philippines)",
        url: "https://www.workabroad.ph/",
        description: "The Philippines' leading platform for overseas employment, connecting OFWs with international job opportunities worldwide.",
        category: "Global",
        region: "Asia",
        subRegion: "Southeast Asia",
        badges: ["Philippines", "OFW", "Overseas"],
        icon: "✈️"
    },

    // ── INDIA ─────────────────────────────────────────────────────
    {
        id: "naukri",
        name: "Naukri",
        url: "https://www.naukri.com/",
        description: "India's #1 job portal with millions of listings across every sector and 20K+ recruiters actively accessing its database.",
        category: "Global",
        region: "Asia",
        subRegion: "India",
        badges: ["India", "All Roles", "Volume"],
        icon: "🇮🇳"
    },
    {
        id: "foundit",
        name: "Foundit (Monster APAC)",
        url: "https://www.foundit.in/",
        description: "Formerly Monster India — a major platform for mid-to-senior professional roles across India, Middle East, and Southeast Asia.",
        category: "Global",
        region: "Asia",
        subRegion: "India",
        badges: ["India", "APAC", "Mid-Senior"],
        icon: "🔎"
    },
    {
        id: "shine",
        name: "Shine",
        url: "https://www.shine.com/",
        description: "One of India's top job portals owned by HT Media, covering all major sectors with strong reach in Tier 2 and Tier 3 cities.",
        category: "Global",
        region: "Asia",
        subRegion: "India",
        badges: ["India", "All Cities", "All Roles"],
        icon: "☀️"
    },
    {
        id: "iimjobs",
        name: "IIMjobs",
        url: "https://www.iimjobs.com/",
        description: "India's premium job board for MBA graduates and senior management professionals. Focus on high-quality, curated listings.",
        category: "Executive",
        region: "Asia",
        subRegion: "India",
        badges: ["India", "MBA", "Executive"],
        icon: "🎓"
    },
    {
        id: "freshersworld",
        name: "Freshersworld",
        url: "https://www.freshersworld.com/",
        description: "India's largest entry-level job portal for freshers and graduates, with walk-in drives, government jobs, and campus recruitment.",
        category: "Global",
        region: "Asia",
        subRegion: "India",
        badges: ["India", "Freshers", "Entry Level"],
        icon: "🌱"
    },
    {
        id: "internshala",
        name: "Internshala",
        url: "https://internshala.com/",
        description: "India's leading internship and entry-level job platform, connecting students and recent graduates with companies nationwide.",
        category: "Tech",
        region: "Asia",
        subRegion: "India",
        badges: ["India", "Internships", "Students"],
        icon: "📚"
    },

    // ── CHINA ─────────────────────────────────────────────────────
    {
        id: "51job",
        name: "51job",
        url: "https://www.51job.com/",
        description: "China's leading job board with 81M+ registered users, 72M+ resumes, and coverage across all industries in 50+ Chinese cities.",
        category: "Global",
        region: "Asia",
        subRegion: "China",
        badges: ["China", "High Volume", "All Industries"],
        icon: "🇨🇳"
    },
    {
        id: "zhaopin",
        name: "Zhaopin",
        url: "https://www.zhaopin.com/",
        description: "One of China's top recruitment platforms using AI and big data, covering IT, automotive, finance, property, and FMCG across 50+ cities.",
        category: "Global",
        region: "Asia",
        subRegion: "China",
        badges: ["China", "AI Match", "All Sectors"],
        icon: "🇨🇳"
    },
    {
        id: "bosszhipin",
        name: "BOSS Zhipin",
        url: "https://www.zhipin.com/",
        description: "China's first 'direct recruitment' mobile-first platform with 120M+ users. Job seekers chat directly with hiring managers in real time.",
        category: "Tech",
        region: "Asia",
        subRegion: "China",
        badges: ["China", "Direct Chat", "Mobile"],
        icon: "📱"
    },
    {
        id: "liepin",
        name: "Liepin",
        url: "https://www.liepin.com/",
        description: "Often called 'the LinkedIn of China.' Premium mid-to-senior professional recruitment with 80M+ users and English-language listings.",
        category: "Executive",
        region: "Asia",
        subRegion: "China",
        badges: ["China", "Mid-Senior", "English Listings"],
        icon: "🏆"
    },

    // ── JAPAN ─────────────────────────────────────────────────────
    {
        id: "daijob",
        name: "Daijob",
        url: "https://www.daijob.com/en/",
        description: "Japan's premier job site for multilingual and bilingual professionals. English-language interface with roles at top Japanese and global firms.",
        category: "Global",
        region: "Asia",
        subRegion: "Japan",
        badges: ["Japan", "Bilingual", "English"],
        icon: "🇯🇵"
    },
    {
        id: "gaijinpot",
        name: "GaijinPot Jobs",
        url: "https://jobs.gaijinpot.com/",
        description: "Japan's most popular English-language job board for foreign nationals, covering teaching, tech, hospitality, and corporate roles.",
        category: "Global",
        region: "Asia",
        subRegion: "Japan",
        badges: ["Japan", "Expats", "English"],
        icon: "🗾"
    },
    {
        id: "mynavi",
        name: "MyNavi",
        url: "https://job.mynavi.jp/",
        description: "One of Japan's top new-graduate recruitment portals, widely used for 'shūkatsu' (job-hunting season) by Japanese university students.",
        category: "Global",
        region: "Asia",
        subRegion: "Japan",
        badges: ["Japan", "Graduates", "New Grads"],
        icon: "🇯🇵"
    },
    {
        id: "rikunabi",
        name: "Rikunabi",
        url: "https://job.rikunabi.com/",
        description: "Japan's other leading new-graduate job board, operated by Recruit Holdings. Essential for fresh university graduate hiring in Japan.",
        category: "Global",
        region: "Asia",
        subRegion: "Japan",
        badges: ["Japan", "Graduates", "Campus"],
        icon: "🇯🇵"
    },

    // ── SOUTH KOREA ───────────────────────────────────────────────
    {
        id: "saramin",
        name: "Saramin",
        url: "https://www.saramin.co.kr/",
        description: "One of South Korea's largest job portals with millions of listings, AI-based matching, and career resources for all experience levels.",
        category: "Global",
        region: "Asia",
        subRegion: "South Korea",
        badges: ["South Korea", "AI Match", "All Levels"],
        icon: "🇰🇷"
    },
    {
        id: "jobkorea",
        name: "JobKorea",
        url: "https://www.jobkorea.co.kr/",
        description: "South Korea's premier job board, widely used by both employers and candidates across corporate, tech, and public sectors.",
        category: "Global",
        region: "Asia",
        subRegion: "South Korea",
        badges: ["South Korea", "Corporate", "All Sectors"],
        icon: "🇰🇷"
    },

    // ── MIDDLE EAST ───────────────────────────────────────────────
    {
        id: "bayt",
        name: "Bayt",
        url: "https://www.bayt.com/",
        description: "The Middle East's largest job platform, founded in 2000. 40M+ professional profiles and 81K+ live listings across UAE, Saudi Arabia, Qatar, and beyond.",
        category: "Global",
        region: "Asia",
        subRegion: "Middle East",
        badges: ["MENA", "All Roles", "UAE", "Saudi"],
        icon: "🌙"
    },
    {
        id: "gulftalent",
        name: "GulfTalent",
        url: "https://www.gulftalent.com/",
        description: "Premium recruitment platform serving 9M+ professionals across UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. Strong in oil & gas and executive roles.",
        category: "Executive",
        region: "Asia",
        subRegion: "Middle East",
        badges: ["Gulf", "Executive", "Oil & Gas"],
        icon: "🛢️"
    },
    {
        id: "naukrigulf",
        name: "NaukriGulf",
        url: "https://www.naukrigulf.com/",
        description: "A leading Gulf job portal with strong reach across all 6 GCC countries. Known for rich job market insights, resume services, and high expat job seeker traffic.",
        category: "Global",
        region: "Asia",
        subRegion: "Middle East",
        badges: ["Gulf", "GCC", "Expats"],
        icon: "🏜️"
    },
    {
        id: "dubizzle_jobs",
        name: "Dubizzle Jobs",
        url: "https://www.dubizzle.com/jobs/",
        description: "UAE's popular classified ads platform with a large jobs section. Processes 2M+ applications monthly. Strong for entry-level and local roles in Dubai.",
        category: "Local",
        region: "Asia",
        subRegion: "Middle East",
        badges: ["UAE", "Dubai", "Entry Level"],
        icon: "🇦🇪"
    },
    {
        id: "wuzzuf_mena",
        name: "WUZZUF",
        url: "https://wuzzuf.net/",
        description: "Egypt's leading job platform using smart AI matching for professionals in Egypt and broader MENA markets.",
        category: "Tech",
        region: "Asia",
        subRegion: "Middle East",
        badges: ["Egypt", "MENA", "AI Match"],
        icon: "🇪🇬"
    },

    // ── SOUTH & CENTRAL ASIA ──────────────────────────────────────
    {
        id: "bdjobs",
        name: "BDjobs",
        url: "https://www.bdjobs.com/",
        description: "Bangladesh's largest and most trusted job portal, connecting employers with millions of local professionals across all industries.",
        category: "Global",
        region: "Asia",
        subRegion: "South Asia",
        badges: ["Bangladesh", "All Industries"],
        icon: "🇧🇩"
    },
    {
        id: "rozee",
        name: "Rozee.pk",
        url: "https://www.rozee.pk/",
        description: "Pakistan's #1 job portal with the largest database of CVs and job listings across tech, banking, healthcare, and engineering.",
        category: "Global",
        region: "Asia",
        subRegion: "South Asia",
        badges: ["Pakistan", "All Sectors", "Large DB"],
        icon: "🇵🇰"
    },
    {
        id: "merojob",
        name: "MeroJob",
        url: "https://www.merojob.com/",
        description: "Nepal's leading online job portal connecting Nepali employers with qualified professionals across all major sectors.",
        category: "Global",
        region: "Asia",
        subRegion: "South Asia",
        badges: ["Nepal", "All Sectors"],
        icon: "🇳🇵"
    },
    {
        id: "topjobs_lk",
        name: "TopJobs (Sri Lanka)",
        url: "https://www.topjobs.lk/",
        description: "Sri Lanka's premier job portal, widely used by top employers and job seekers across all professional categories.",
        category: "Global",
        region: "Asia",
        subRegion: "South Asia",
        badges: ["Sri Lanka", "All Roles"],
        icon: "🇱🇰"
    }
];
