const freelanceBoards = [
    {
        id: "upwork",
        name: "Upwork",
        url: "https://www.upwork.com/",
        description: "World's largest freelance marketplace for all types of digital work, from short-term gigs to long-term contracts.",
        category: "Freelance",
        region: "Global",
        badges: ["Freelance", "Gigs", "Global"],
        icon: "🟢"
    },
    {
        id: "fiverr",
        name: "Fiverr",
        url: "https://www.fiverr.com/",
        description: "Marketplace for creative and digital services starting from micro-gigs to enterprise-level projects.",
        category: "Freelance",
        region: "Global",
        badges: ["Gigs", "Creative", "Global"],
        icon: "🎯"
    },
    {
        id: "peopleperhour",
        name: "PeoplePerHour",
        url: "https://www.peopleperhour.com/",
        description: "UK-based freelance platform popular for design, writing, and development projects.",
        category: "Freelance",
        region: "Europe",
        badges: ["UK", "Freelance", "Digital"],
        icon: "⏱️"
    },
    {
        id: "contra",
        name: "Contra",
        url: "https://contra.com/",
        description: "Commission-free freelance platform with a portfolio-first approach for independent workers.",
        category: "Freelance",
        region: "Global",
        badges: ["0% Commission", "Portfolio", "Freelance"],
        icon: "🎨"
    },
    {
        id: "guru",
        name: "Guru",
        url: "https://www.guru.com/",
        description: "Freelance marketplace with workroom collaboration tools for long-term client relationships.",
        category: "Freelance",
        region: "Global",
        badges: ["Freelance", "Collaboration", "Global"],
        icon: "🧘"
    },
    {
        id: "workana",
        name: "Workana",
        url: "https://www.workana.com/",
        description: "The largest freelance marketplace for Spanish and Portuguese speakers in Latin America.",
        category: "Freelance",
        region: "South America",
        badges: ["LatAm", "Spanish", "Freelance"],
        icon: "🚜"
    },
    {
        id: "99designs",
        name: "99designs",
        url: "https://99designs.com/",
        description: "The go-to platform for freelance designers to find projects and participate in design contests.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "Contests", "Creative"],
        icon: "🎨"
    },
    {
        id: "malt",
        name: "Malt",
        url: "https://www.malt.com/",
        description: "Leading European freelance marketplace connecting consultants with top companies.",
        category: "Freelance",
        region: "Europe",
        badges: ["Europe", "Consulting", "Freelance"],
        icon: "🍷"
    },
    {
        id: "freelancer",
        name: "Freelancer",
        url: "https://www.freelancer.com/",
        description: "Global freelancing marketplace for software, writing, marketing, and engineering projects.",
        category: "Freelance",
        region: "Global",
        badges: ["Global", "Projects", "Freelance"],
        icon: "🌐"
    },
    {
        id: "solidgigs",
        name: "SolidGigs",
        url: "https://solidgigs.com/",
        description: "Curated freelance job leads delivered to creatives, developers, and consultants.",
        category: "Freelance",
        region: "Global",
        badges: ["Curated", "Remote", "Creative"],
        icon: "📬"
    },
    {
        id: "flexiple",
        name: "Flexiple",
        url: "https://flexiple.com/",
        description: "Premium freelance network for developers and designers working with startups.",
        category: "Freelance",
        region: "Global",
        badges: ["Vetted", "Startups", "Developers"],
        icon: "🧩"
    },
    {
        id: "gigster",
        name: "Gigster",
        url: "https://gigster.com/",
        description: "Enterprise-focused freelance platform for software developers and AI experts.",
        category: "Freelance",
        region: "Global",
        badges: ["Enterprise", "AI", "Engineering"],
        icon: "⚡"
    },
    {
        id: "truelancer",
        name: "Truelancer",
        url: "https://www.truelancer.com/",
        description: "Affordable freelance marketplace popular among remote digital professionals.",
        category: "Freelance",
        region: "Asia",
        badges: ["Remote", "Affordable", "Digital"],
        icon: "🛵"
    },
    {
        id: "freelancermap",
        name: "Freelancermap",
        url: "https://www.freelancermap.com/",
        description: "European IT freelancer marketplace focused on consultants and contractors.",
        category: "Freelance",
        region: "Europe",
        badges: ["IT", "Consulting", "Europe"],
        icon: "🗺️"
    },
    {
        id: "kolabtree",
        name: "Kolabtree",
        url: "https://www.kolabtree.com/",
        description: "Freelance platform for scientists, researchers, and academic experts.",
        category: "Freelance",
        region: "Global",
        badges: ["Science", "Research", "Academic"],
        icon: "🔬"
    },
    {
        id: "writeraccess",
        name: "WriterAccess",
        url: "https://www.writeraccess.com/",
        description: "Marketplace connecting freelance writers with brands and agencies.",
        category: "Freelance",
        region: "Global",
        badges: ["Writing", "Content", "Marketing"],
        icon: "✍️"
    },
    {
        id: "designcrowd",
        name: "DesignCrowd",
        url: "https://www.designcrowd.com/",
        description: "Creative freelance platform for logo, branding, and graphic design work.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "Branding", "Creative"],
        icon: "🖌️"
    },
    {
        id: "crowdspring",
        name: "Crowdspring",
        url: "https://www.crowdspring.com/",
        description: "Marketplace for freelance creatives specializing in branding and web design.",
        category: "Freelance",
        region: "Global",
        badges: ["Creative", "Branding", "Design"],
        icon: "🌈"
    },
    {
        id: "gunio",
        name: "Gun.io",
        url: "https://www.gun.io/",
        description: "Elite freelance developer network for software engineering projects.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "Engineering", "Elite"],
        icon: "🔫"
    },
    {
        id: "arcdev",
        name: "Arc.dev",
        url: "https://arc.dev/",
        description: "Remote freelance and full-time developer opportunities worldwide.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "Remote", "Tech"],
        icon: "🧑‍💻"
    },
    {
        id: "codeable",
        name: "Codeable",
        url: "https://www.codeable.io/",
        description: "Freelance platform exclusively for vetted WordPress developers.",
        category: "Freelance",
        region: "Global",
        badges: ["WordPress", "Developers", "Vetted"],
        icon: "🔧"
    },
    {
        id: "simplyhiredgigs",
        name: "SimplyHired Gigs",
        url: "https://www.simplyhired.com/",
        description: "Job aggregator featuring freelance, contract, and remote opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Aggregator", "Contract", "Remote"],
        icon: "📌"
    },
    {
        id: "taskrabbit",
        name: "TaskRabbit",
        url: "https://www.taskrabbit.com/",
        description: "Marketplace for local freelance services and task-based work.",
        category: "Freelance",
        region: "North America",
        badges: ["Tasks", "Local Services", "Gig Work"],
        icon: "🐇"
    },
    {
        id: "bark",
        name: "Bark",
        url: "https://www.bark.com/",
        description: "Lead-generation platform for freelancers and local service providers.",
        category: "Freelance",
        region: "Global",
        badges: ["Leads", "Services", "Freelancers"],
        icon: "🐕"
    },
    {
        id: "hubstafftalent",
        name: "Hubstaff Talent",
        url: "https://talent.hubstaff.com/",
        description: "Free directory connecting remote freelancers with global companies.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Free", "Talent"],
        icon: "🛰️"
    },
    {
        id: "outsourcely",
        name: "Outsourcely",
        url: "https://www.outsourcely.com/",
        description: "Remote hiring platform for freelancers and distributed teams.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Distributed", "Hiring"],
        icon: "🌍"
    },
    {
        id: "worksome",
        name: "Worksome",
        url: "https://www.worksome.com/",
        description: "Modern freelance management platform connecting companies with contractors.",
        category: "Freelance",
        region: "Europe",
        badges: ["Contractors", "Europe", "Consulting"],
        icon: "🧠"
    },
    {
        id: "moonlight",
        name: "Moonlight",
        url: "https://www.moonlightwork.com/",
        description: "Platform for developers seeking freelance side projects and remote gigs.",
        category: "Freelance",
        region: "Global",
        badges: ["Side Hustle", "Developers", "Remote"],
        icon: "🌙"
    },
    {
        id: "yunojuno",
        name: "YunoJuno",
        url: "https://www.yunojuno.com/",
        description: "Premium freelance platform connecting creative and tech freelancers with enterprises.",
        category: "Freelance",
        region: "Europe",
        badges: ["Creative", "Enterprise", "UK"],
        icon: "🪐"
    },
    {
        id: "comatch",
        name: "COMATCH",
        url: "https://www.comatch.com/",
        description: "Consulting-focused freelance marketplace for independent business experts.",
        category: "Freelance",
        region: "Europe",
        badges: ["Consulting", "Business", "Experts"],
        icon: "📊"
    },
    {
        id: "expert360",
        name: "Expert360",
        url: "https://expert360.com/",
        description: "Network of elite consultants, project managers, and digital freelancers.",
        category: "Freelance",
        region: "Global",
        badges: ["Consultants", "Elite", "Projects"],
        icon: "🎓"
    },
    {
        id: "crewscale",
        name: "Crewscale",
        url: "https://www.crewscale.com/",
        description: "Remote freelance hiring platform for vetted engineering talent.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Engineering", "Vetted"],
        icon: "🚢"
    },
    {
        id: "cloudpeeps",
        name: "CloudPeeps",
        url: "https://cloudpeeps.com/",
        description: "Freelance marketplace for marketers, social media managers, and creatives.",
        category: "Freelance",
        region: "Global",
        badges: ["Marketing", "Social Media", "Creative"],
        icon: "☁️"
    },
    {
        id: "servicecape",
        name: "ServiceScape",
        url: "https://www.servicescape.com/",
        description: "Platform for freelance editors, translators, writers, and graphic designers.",
        category: "Freelance",
        region: "Global",
        badges: ["Editing", "Translation", "Writing"],
        icon: "📝"
    },
    {
        id: "freelancewritinggigs",
        name: "Freelance Writing Gigs",
        url: "https://www.freelancewritinggigs.com/",
        description: "Job board and resource hub for freelance writers and bloggers.",
        category: "Freelance",
        region: "Global",
        badges: ["Writing", "Content", "Blogging"],
        icon: "📚"
    },
    {
        id: "probloggerjobs",
        name: "ProBlogger Jobs",
        url: "https://problogger.com/jobs/",
        description: "Freelance and remote writing jobs for bloggers and content creators.",
        category: "Freelance",
        region: "Global",
        badges: ["Blogging", "Content", "Remote"],
        icon: "📰"
    },
    {
        id: "scripted",
        name: "Scripted",
        url: "https://www.scripted.com/",
        description: "Marketplace for freelance copywriters and content strategists.",
        category: "Freelance",
        region: "Global",
        badges: ["Copywriting", "Content", "Marketing"],
        icon: "📜"
    },
    {
        id: "voice123",
        name: "Voice123",
        url: "https://voice123.com/",
        description: "Freelance marketplace for voice actors and audio professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Voice Over", "Audio", "Creative"],
        icon: "🎙️"
    },
    {
        id: "voices",
        name: "Voices",
        url: "https://www.voices.com/",
        description: "Professional voice acting and narration freelance marketplace.",
        category: "Freelance",
        region: "Global",
        badges: ["Voice Talent", "Narration", "Media"],
        icon: "🔊"
    },
    {
        id: "twine",
        name: "Twine",
        url: "https://www.twine.net/",
        description: "Creative freelancer network for music, animation, video, and design.",
        category: "Freelance",
        region: "Global",
        badges: ["Animation", "Video", "Creative"],
        icon: "🧵"
    },
    {
        id: "airtasker",
        name: "Airtasker",
        url: "https://www.airtasker.com/",
        description: "Task-based freelance platform for digital and local service jobs.",
        category: "Freelance",
        region: "Australia",
        badges: ["Tasks", "Gig Work", "Services"],
        icon: "🛠️"
    },
    {
        id: "cadcrowd",
        name: "Cad Crowd",
        url: "https://www.cadcrowd.com/",
        description: "Freelance engineering and CAD design marketplace.",
        category: "Freelance",
        region: "Global",
        badges: ["CAD", "Engineering", "Design"],
        icon: "📐"
    },
    {
        id: "sterlingtalentsolutions",
        name: "Sterling Talent Solutions",
        url: "https://www.sterlingcheck.com/",
        description: "Independent contractor and workforce solutions for enterprise clients.",
        category: "Freelance",
        region: "Global",
        badges: ["Enterprise", "Contractors", "Workforce"],
        icon: "🏢"
    },
    {
        id: "ifreelance",
        name: "iFreelance",
        url: "https://www.ifreelance.com/",
        description: "Independent freelance bidding marketplace with low platform fees.",
        category: "Freelance",
        region: "Global",
        badges: ["Bidding", "Low Fees", "Freelancers"],
        icon: "💼"
    },
    {
        id: "zeerk",
        name: "Zeerk",
        url: "https://zeerk.com/",
        description: "Micro-job marketplace for freelancers offering digital services.",
        category: "Freelance",
        region: "Global",
        badges: ["Micro Jobs", "Digital", "Services"],
        icon: "⚙️"
    },
    {
        id: "seoclerks",
        name: "SEOClerks",
        url: "https://www.seoclerks.com/",
        description: "Freelance marketplace focused on SEO, marketing, and web growth services.",
        category: "Freelance",
        region: "Global",
        badges: ["SEO", "Marketing", "Growth"],
        icon: "📈"
    },
    {
        id: "fivesquid",
        name: "FiveSquids",
        url: "https://www.fivesquid.com/",
        description: "Affordable freelance service marketplace for quick digital gigs.",
        category: "Freelance",
        region: "Europe",
        badges: ["Affordable", "Gigs", "Digital"],
        icon: "🦑"
    },
    {
        id: "workhoppers",
        name: "Workhoppers",
        url: "https://www.workhoppers.com/",
        description: "Freelance and contract job platform emphasizing local and remote flexibility.",
        category: "Freelance",
        region: "North America",
        badges: ["Contract", "Flexible", "Remote"],
        icon: "🦘"
    },
    {
        id: "torre",
        name: "Torre",
        url: "https://torre.ai/",
        description: "AI-powered talent marketplace connecting freelancers with global remote opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Matching", "Remote", "Global"],
        icon: "🗼"
    },
    {
        id: "jobrack",
        name: "JobRack",
        url: "https://jobrack.eu/",
        description: "Remote freelance and contractor opportunities from international startups.",
        category: "Freelance",
        region: "Europe",
        badges: ["Remote", "Startups", "Europe"],
        icon: "🧳"
    },
    {
        id: "indiehackersjobs",
        name: "Indie Hackers Jobs",
        url: "https://www.indiehackers.com/jobs",
        description: "Remote freelance and startup opportunities from indie founders and SaaS companies.",
        category: "Freelance",
        region: "Global",
        badges: ["Startups", "SaaS", "Remote"],
        icon: "🚀"
    },
    {
        id: "remoteco",
        name: "Remote.co",
        url: "https://remote.co/remote-jobs/",
        description: "Remote work marketplace with freelance, contract, and flexible roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Flexible", "Digital"],
        icon: "🏝️"
    },
    {
        id: "skipthedrive",
        name: "SkipTheDrive",
        url: "https://www.skipthedrive.com/",
        description: "Remote and work-from-home job platform featuring freelance gigs.",
        category: "Freelance",
        region: "Global",
        badges: ["WFH", "Remote", "Flexible"],
        icon: "🚗"
    },
    {
        id: "remoters",
        name: "Remoters",
        url: "https://remoters.net/jobs/",
        description: "Remote-first jobs and freelance opportunities for distributed professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Distributed", "Remote", "Tech"],
        icon: "🌐"
    },
    {
        id: "workew",
        name: "Workew",
        url: "https://workew.com/",
        description: "Remote job board with freelance opportunities in tech and digital roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Digital", "Tech"],
        icon: "💻"
    },
    {
        id: "freelanceuk",
        name: "Freelance UK",
        url: "https://www.freelanceuk.com/",
        description: "UK freelance community and project board for independent professionals.",
        category: "Freelance",
        region: "Europe",
        badges: ["UK", "Community", "Projects"],
        icon: "🇬🇧"
    },
    {
        id: "journalismjobs",
        name: "JournalismJobs",
        url: "https://www.journalismjobs.com/",
        description: "Freelance and contract opportunities for journalists and media professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Media", "Journalism", "Writing"],
        icon: "🗞️"
    },
    {
        id: "mediabistrofreelance",
        name: "Mediabistro Freelance",
        url: "https://www.mediabistro.com/jobs/",
        description: "Freelance writing, editing, publishing, and media-related opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Publishing", "Media", "Editing"],
        icon: "🎬"
    },
    {
        id: "freelanceanimators",
        name: "Freelance Animators",
        url: "https://freelanceanimators.com/",
        description: "Marketplace connecting freelance animators with creative projects.",
        category: "Freelance",
        region: "Global",
        badges: ["Animation", "Creative", "Video"],
        icon: "🎞️"
    },
    {
        id: "productionhub",
        name: "ProductionHUB",
        url: "https://www.productionhub.com/",
        description: "Freelance production jobs for film, broadcasting, and media professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Film", "Broadcast", "Media"],
        icon: "🎥"
    },
    {
        id: "soundbetter",
        name: "SoundBetter",
        url: "https://soundbetter.com/",
        description: "Freelance music production marketplace for artists and audio engineers.",
        category: "Freelance",
        region: "Global",
        badges: ["Music", "Audio", "Production"],
        icon: "🎵"
    },
    {
        id: "behancefreelance",
        name: "Behance Freelance",
        url: "https://www.behance.net/joblist",
        description: "Creative freelance opportunities for designers and digital artists.",
        category: "Freelance",
        region: "Global",
        badges: ["Creative", "Portfolio", "Design"],
        icon: "🖼️"
    },
    {
        id: "dribbblehiring",
        name: "Dribbble Hiring",
        url: "https://dribbble.com/freelance-jobs",
        description: "Freelance design opportunities from startups and creative agencies.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "Creative", "UI/UX"],
        icon: "🏀"
    },
    {
        id: "kwork",
        name: "Kwork",
        url: "https://kwork.com/",
        description: "Fixed-price freelance marketplace for digital services and quick gigs.",
        category: "Freelance",
        region: "Global",
        badges: ["Fixed Price", "Digital", "Gigs"],
        icon: "🧰"
    },
    {
        id: "laborx",
        name: "LaborX",
        url: "https://laborx.com/",
        description: "Crypto-powered freelance marketplace for remote professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Crypto", "Remote", "Blockchain"],
        icon: "⛓️"
    },
    {
        id: "usebraintrust",
        name: "Braintrust",
        url: "https://www.usebraintrust.com/",
        description: "Decentralized talent network for freelancers in tech and product roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Web3", "Tech", "Talent Network"],
        icon: "🧠"
    },
    {
        id: "workmarket",
        name: "WorkMarket",
        url: "https://www.workmarket.com/",
        description: "Enterprise freelance management system for contractors and field workers.",
        category: "Freelance",
        region: "Global",
        badges: ["Enterprise", "Contractors", "Field Work"],
        icon: "🏗️"
    },
    {
        id: "jooblefreelance",
        name: "Jooble Freelance",
        url: "https://jooble.org/",
        description: "Job search engine indexing freelance and contract opportunities worldwide.",
        category: "Freelance",
        region: "Global",
        badges: ["Aggregator", "Contract", "Worldwide"],
        icon: "🔍"
    },
    {
        id: "crew",
        name: "Crew",
        url: "https://crew.co/",
        description: "Freelance platform connecting vetted creatives and developers with startups.",
        category: "Freelance",
        region: "Global",
        badges: ["Vetted", "Creative", "Startups"],
        icon: "🛶"
    },
    {
        id: "contently",
        name: "Contently",
        url: "https://contently.com/",
        description: "Premium freelance network for journalists, writers, and content strategists.",
        category: "Freelance",
        region: "Global",
        badges: ["Content", "Writing", "Media"],
        icon: "📰"
    },
    {
        id: "nDash",
        name: "nDash",
        url: "https://www.ndash.com/",
        description: "Marketplace for freelance writers and brands seeking content creation.",
        category: "Freelance",
        region: "Global",
        badges: ["Writing", "Brands", "Content"],
        icon: "✒️"
    },
    {
        id: "clearvoice",
        name: "ClearVoice",
        url: "https://www.clearvoice.com/",
        description: "Content marketing platform connecting freelancers with enterprise brands.",
        category: "Freelance",
        region: "Global",
        badges: ["Content Marketing", "Enterprise", "Writing"],
        icon: "📢"
    },
    {
        id: "verbly",
        name: "Verbly",
        url: "https://verbly.com/",
        description: "Professional freelance writing network for experienced content creators.",
        category: "Freelance",
        region: "Global",
        badges: ["Writers", "Professional", "Content"],
        icon: "📖"
    },
    {
        id: "greatcontent",
        name: "Greatcontent",
        url: "https://greatcontent.com/",
        description: "European content marketplace for freelance writers and translators.",
        category: "Freelance",
        region: "Europe",
        badges: ["Translation", "Content", "Europe"],
        icon: "🌍"
    },
    {
        id: "textbroker",
        name: "Textbroker",
        url: "https://www.textbroker.com/",
        description: "Freelance writing platform offering article and copywriting assignments.",
        category: "Freelance",
        region: "Global",
        badges: ["Copywriting", "Articles", "Writing"],
        icon: "📝"
    },
    {
        id: "constantcontent",
        name: "Constant Content",
        url: "https://www.constant-content.com/",
        description: "Marketplace where freelance writers sell custom and pre-written content.",
        category: "Freelance",
        region: "Global",
        badges: ["Content", "Articles", "Marketplace"],
        icon: "📄"
    },
    {
        id: "belay",
        name: "BELAY",
        url: "https://belaysolutions.com/",
        description: "Remote freelance opportunities for virtual assistants and specialists.",
        category: "Freelance",
        region: "North America",
        badges: ["Virtual Assistant", "Remote", "Admin"],
        icon: "🧑‍💼"
    },
    {
        id: "timeetc",
        name: "Time Etc",
        url: "https://www.timeetc.com/",
        description: "Virtual assistant freelance platform supporting entrepreneurs and executives.",
        category: "Freelance",
        region: "Global",
        badges: ["VA", "Executive Support", "Remote"],
        icon: "⏳"
    },
    {
        id: "rev",
        name: "Rev",
        url: "https://www.rev.com/freelancers",
        description: "Freelance transcription, captioning, and translation opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Transcription", "Captions", "Translation"],
        icon: "🎧"
    },
    {
        id: "scribie",
        name: "Scribie",
        url: "https://scribie.com/freelance-transcription",
        description: "Freelance transcription platform for remote audio and video work.",
        category: "Freelance",
        region: "Global",
        badges: ["Transcription", "Remote", "Audio"],
        icon: "🎤"
    },
    {
        id: "transcribeme",
        name: "TranscribeMe",
        url: "https://www.transcribeme.com/",
        description: "Remote transcription and data annotation freelance opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Transcription", "Data", "Remote"],
        icon: "📼"
    },
    {
        id: "appen",
        name: "Appen",
        url: "https://appen.com/",
        description: "Flexible freelance tasks in AI training, data labeling, and search evaluation.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Training", "Data Labeling", "Remote"],
        icon: "🤖"
    },
    {
        id: "telusinternationalai",
        name: "TELUS International AI",
        url: "https://www.telusinternational.ai/",
        description: "Freelance AI data annotation and language evaluation projects.",
        category: "Freelance",
        region: "Global",
        badges: ["AI", "Annotation", "Remote"],
        icon: "🧠"
    },
    {
        id: "clickworker",
        name: "Clickworker",
        url: "https://www.clickworker.com/",
        description: "Microtask marketplace for writing, categorization, AI, and web research jobs.",
        category: "Freelance",
        region: "Global",
        badges: ["Microtasks", "AI", "Flexible"],
        icon: "🖱️"
    },
    {
        id: "oneforma",
        name: "OneForma",
        url: "https://www.oneforma.com/",
        description: "Freelance language, AI training, and data collection opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["AI", "Languages", "Data Collection"],
        icon: "🌐"
    },
    {
        id: "lionbridge",
        name: "Lionbridge",
        url: "https://www.lionbridge.com/",
        description: "Freelance translation, localization, and AI data services platform.",
        category: "Freelance",
        region: "Global",
        badges: ["Localization", "Translation", "AI"],
        icon: "🦁"
    },
    {
        id: "usertesting",
        name: "UserTesting",
        url: "https://www.usertesting.com/",
        description: "Get paid as a freelancer to test websites, apps, and digital experiences.",
        category: "Freelance",
        region: "Global",
        badges: ["UX Testing", "Apps", "Feedback"],
        icon: "📱"
    },
    {
        id: "respondent",
        name: "Respondent",
        url: "https://www.respondent.io/",
        description: "Research participation and freelance user interview opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Research", "Interviews", "UX"],
        icon: "🧪"
    },
    {
        id: "designhill",
        name: "Designhill",
        url: "https://www.designhill.com/",
        description: "Creative marketplace for logos, branding, and design contests.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "Branding", "Contests"],
        icon: "🎨"
    },
    {
        id: "designhillstudio",
        name: "Designhill Studio",
        url: "https://www.designhill.com/studio",
        description: "Premium curated design services connecting businesses with freelance designers.",
        category: "Freelance",
        region: "Global",
        badges: ["Premium", "Design", "Branding"],
        icon: "🖌️"
    },
    {
        id: "twago",
        name: "Twago",
        url: "https://www.twago.com/",
        description: "European freelance marketplace for developers, designers, and marketers.",
        category: "Freelance",
        region: "Europe",
        badges: ["Europe", "Tech", "Marketing"],
        icon: "🇪🇺"
    },
    {
        id: "freelanceinformer",
        name: "Freelance Informer",
        url: "https://www.freelanceinformer.com/",
        description: "Curated freelance job board for writers, editors, and digital creators.",
        category: "Freelance",
        region: "Global",
        badges: ["Writing", "Curated", "Remote"],
        icon: "📡"
    },
    {
        id: "bloggingprojobs",
        name: "BloggingPro Jobs",
        url: "https://www.bloggingpro.com/jobs/",
        description: "Freelance writing and blogging opportunities for content creators.",
        category: "Freelance",
        region: "Global",
        badges: ["Blogging", "Writing", "Content"],
        icon: "📝"
    },
    {
        id: "justremote",
        name: "JustRemote",
        url: "https://justremote.co/",
        description: "Remote-first job board with freelance and contract listings worldwide.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Global", "Tech"],
        icon: "🌍"
    },
    {
        id: "remoteokfreelance",
        name: "RemoteOK",
        url: "https://remoteok.com/",
        description: "Remote job board featuring freelance tech and digital roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Tech", "Startups"],
        icon: "🛰️"
    },
    {
        id: "jobspresso",
        name: "Jobspresso",
        url: "https://jobspresso.co/",
        description: "Hand-picked remote jobs in tech, marketing, and customer support.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Marketing", "Tech"],
        icon: "☕"
    },
    {
        id: "weworkremotelyfreelance",
        name: "We Work Remotely",
        url: "https://weworkremotely.com/",
        description: "One of the largest remote job boards with freelance tech roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Tech", "Global"],
        icon: "🏠"
    },
    {
        id: "jobspack",
        name: "JobsPack",
        url: "https://jobspack.com/",
        description: "Curated freelance and remote job listings for digital professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Curated", "Remote", "Digital"],
        icon: "📦"
    },
    {
        id: "freelancewriting",
        name: "FreelanceWriting.com",
        url: "https://www.freelancewriting.com/",
        description: "Job board dedicated to freelance writing and editing opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Writing", "Editing", "Content"],
        icon: "✍️"
    },
    {
        id: "contentwritingjobs",
        name: "Content Writing Jobs",
        url: "https://www.contentwritingjobs.com/",
        description: "Freelance content writing job board updated daily.",
        category: "Freelance",
        region: "Global",
        badges: ["Writing", "Content", "Remote"],
        icon: "📚"
    },
    {
        id: "remoteleaf",
        name: "RemoteLeaf",
        url: "https://remoteleaf.com/",
        description: "Curated remote freelance jobs sent via daily email digest.",
        category: "Freelance",
        region: "Global",
        badges: ["Curated", "Email Digest", "Remote"],
        icon: "🍃"
    },
    {
        id: "remotivepro",
        name: "Remotive",
        url: "https://remotive.com/",
        description: "Remote freelance and full-time tech roles curated for professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Tech", "Startup"],
        icon: "🚀"
    },
    {
        id: "angelistjobs",
        name: "Wellfound (AngelList)",
        url: "https://wellfound.com/jobs",
        description: "Startup-focused freelance and contract tech roles worldwide.",
        category: "Freelance",
        region: "Global",
        badges: ["Startups", "Equity", "Remote"],
        icon: "🦄"
    },
    {
        id: "remotejobsclub",
        name: "Remote Jobs Club",
        url: "https://remotejobsclub.com/",
        description: "Curated freelance and remote job opportunities across industries.",
        category: "Freelance",
        region: "Global",
        badges: ["Curated", "Remote", "Digital"],
        icon: "📡"
    },
    {
        id: "freelancewritinghub",
        name: "Freelance Writing Hub",
        url: "https://www.freelancewritinghub.com/",
        description: "Resource and job board for freelance writers and content creators.",
        category: "Freelance",
        region: "Global",
        badges: ["Writing", "Content", "Remote"],
        icon: "🖋️"
    },
    {
        id: "designpickle",
        name: "Design Pickle",
        url: "https://www.designpickle.com/",
        description: "Unlimited subscription-based design service connecting clients with dedicated designers.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "Subscription", "Creative"],
        icon: "🍊"
    },
    {
        id: "penji",
        name: "Penji",
        url: "https://www.penji.co/",
        description: "On-demand subscription design platform for businesses and agencies.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "On-demand", "Subscription"],
        icon: "🖌️"
    },
    {
        id: "manypixels",
        name: "ManyPixels",
        url: "https://www.manypixels.co/",
        description: "Flat-rate subscription design service for startups and marketing teams.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "Flat-rate", "Startup"],
        icon: "📐"
    },
    {
        id: "superside",
        name: "Superside",
        url: "https://www.superside.com/",
        description: "Enterprise creative outsourcing platform with global freelance designers.",
        category: "Freelance",
        region: "Global",
        badges: ["Enterprise", "Design", "Creative"],
        icon: "🚀"
    },
    {
        id: "turing",
        name: "Turing",
        url: "https://www.turing.com/",
        description: "AI-powered platform matching software engineers with remote freelance jobs.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Matching", "Engineering", "Remote"],
        icon: "🤖"
    },
    {
        id: "xteam",
        name: "X-Team",
        url: "https://x-team.com/",
        description: "Remote developer network working with high-growth tech companies.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "Remote", "Startups"],
        icon: "🔥"
    },
    {
        id: "clouddevs",
        name: "CloudDevs",
        url: "https://clouddevs.com/",
        description: "Vetted Latin American developers matched with US and European companies.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "LatAm", "Vetted"],
        icon: "☁️"
    },
    {
        id: "aquent",
        name: "Aquent",
        url: "https://aquent.com/",
        description: "Creative staffing agency connecting freelancers with Fortune 500 companies.",
        category: "Freelance",
        region: "Global",
        badges: ["Enterprise", "Creative", "Marketing"],
        icon: "🎬"
    },
    {
        id: "creativecircle",
        name: "Creative Circle",
        url: "https://www.creativecircle.com/",
        description: "Freelance creative staffing platform for designers, writers, and marketers.",
        category: "Freelance",
        region: "North America",
        badges: ["Creative", "Marketing", "Design"],
        icon: "🎨"
    },
    {
        id: "vitay",
        name: "Vitae",
        url: "https://vitae.co/",
        description: "Modern freelance hiring platform for tech and creative professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Tech", "Creative", "Remote"],
        icon: "✨"
    },
    {
        id: "hired",
        name: "Hired",
        url: "https://hired.com/",
        description: "Tech talent marketplace where companies apply to freelancers.",
        category: "Freelance",
        region: "Global",
        badges: ["Reverse Hiring", "Tech", "Startups"],
        icon: "💼"
    },
    {
        id: "roberthalf",
        name: "Robert Half",
        url: "https://www.roberthalf.com/",
        description: "Professional staffing agency offering freelance and contract roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Corporate", "Finance", "Contract"],
        icon: "🏦"
    },
    {
        id: "manpower",
        name: "Manpower",
        url: "https://www.manpower.com/",
        description: "Global staffing firm offering freelance, temp, and contract jobs.",
        category: "Freelance",
        region: "Global",
        badges: ["Staffing", "Contract", "Global"],
        icon: "👷"
    },
    {
        id: "randstad",
        name: "Randstad",
        url: "https://www.randstad.com/",
        description: "International HR and staffing company offering freelance contracts.",
        category: "Freelance",
        region: "Global",
        badges: ["HR", "Contract", "Global"],
        icon: "🏢"
    },
    {
        id: "adecco",
        name: "Adecco",
        url: "https://www.adecco.com/",
        description: "Global recruitment agency offering freelance and temporary roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Recruitment", "Temp Work", "Global"],
        icon: "📇"
    },
    {
        id: "freelancedeck",
        name: "Freelance Deck",
        url: "https://freelancedeck.com/",
        description: "Freelance marketplace for designers and developers with curated listings.",
        category: "Freelance",
        region: "Global",
        badges: ["Curated", "Design", "Tech"],
        icon: "🃏"
    },
    {
        id: "flexjobs",
        name: "FlexJobs",
        url: "https://www.flexjobs.com/",
        description: "Curated remote, part-time, and freelance job board with vetted listings across industries.",
        category: "Freelance",
        region: "Global",
        badges: ["Curated", "Remote", "Vetted"],
        icon: "🔒"
    },
    {
        id: "lemonio",
        name: "Lemon.io",
        url: "https://lemon.io/",
        description: "Vetted marketplace connecting startups with freelance software developers.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "Startups", "Vetted"],
        icon: "🍋"
    },
    {
        id: "catalant",
        name: "Catalant",
        url: "https://catalant.com/",
        description: "Expert network platform connecting independent consultants with enterprise projects.",
        category: "Freelance",
        region: "Global",
        badges: ["Consulting", "Enterprise", "Experts"],
        icon: "🧭"
    },
    {
        id: "glg",
        name: "GLG",
        url: "https://glginsights.com/",
        description: "Professional expert network connecting freelancers with research and consulting gigs.",
        category: "Freelance",
        region: "Global",
        badges: ["Consulting", "Research", "Experts"],
        icon: "📘"
    },
    {
        id: "alphasights",
        name: "AlphaSights",
        url: "https://www.alphasights.com/",
        description: "Knowledge-on-demand platform connecting industry experts with clients worldwide.",
        category: "Freelance",
        region: "Global",
        badges: ["Experts", "Consulting", "Research"],
        icon: "🔎"
    },
    {
        id: "zintro",
        name: "Zintro",
        url: "https://www.zintro.com/",
        description: "Expert network marketplace connecting consultants with paid research opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Consulting", "Experts", "Research"],
        icon: "🧠"
    },
    {
        id: "workingnomads",
        name: "Working Nomads",
        url: "https://www.workingnomads.com/",
        description: "Remote job aggregator featuring curated freelance and digital nomad roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Nomad", "Curated"],
        icon: "🌴"
    },
    {
        id: "dice",
        name: "Dice",
        url: "https://www.dice.com/",
        description: "Tech-focused job board featuring freelance, contract, and remote engineering roles.",
        category: "Freelance",
        region: "North America",
        badges: ["Tech", "Contract", "Engineering"],
        icon: "🎲"
    },
    {
        id: "authenticjobs",
        name: "Authentic Jobs",
        url: "https://authenticjobs.com/",
        description: "Design and development job board with freelance and remote opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "Dev", "Remote"],
        icon: "🧾"
    },
    {
        id: "powertofly",
        name: "PowerToFly",
        url: "https://powertofly.com/",
        description: "Platform connecting diverse talent with remote and freelance opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Diversity", "Tech"],
        icon: "🚀"
    },
    {
        id: "outsourceaccelerator",
        name: "Outsource Accelerator",
        url: "https://www.outsourceaccelerator.com/",
        description: "Directory and marketplace for outsourcing and freelance service providers.",
        category: "Freelance",
        region: "Global",
        badges: ["Outsourcing", "Services", "Global"],
        icon: "🏭"
    },
    {
        id: "remotasks",
        name: "Remotasks",
        url: "https://www.remotasks.com/",
        description: "Microtask platform for AI training data, image labeling, and transcription work.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Tasks", "Microjobs", "Remote"],
        icon: "🏷️"
    },
    {
        id: "dataannotation",
        name: "DataAnnotation.tech",
        url: "https://www.dataannotation.tech/",
        description: "Freelance platform for AI training, evaluation, and data annotation tasks.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Training", "Data", "Remote"],
        icon: "🧠"
    },
    {
        id: "toloka",
        name: "Toloka",
        url: "https://toloka.ai/",
        description: "Crowdsourced freelance tasks for AI training, surveys, and data validation.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Data", "Microtasks", "Crowdsourcing"],
        icon: "🔬"
    },
    {
        id: "mindrift",
        name: "Mindrift",
        url: "https://mindrift.ai/",
        description: "Platform for AI training and expert-level freelance data tasks.",
        category: "Freelance",
        region: "Global",
        badges: ["AI", "Expert Tasks", "Remote"],
        icon: "🧩"
    },
    {
        id: "codementor",
        name: "Codementor",
        url: "https://www.codementor.io/",
        description: "Freelance platform connecting developers with clients for mentorship and project work.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "Mentorship", "Tech"],
        icon: "👨‍💻"
    },
    {
        id: "outlierai",
        name: "Outlier AI",
        url: "https://outlier.ai/",
        description: "Freelance AI training platform offering data evaluation and model feedback tasks.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Training", "Evaluation", "Remote"],
        icon: "🤖"
    },
    {
        id: "hivework",
        name: "Hive Work",
        url: "https://hivemicro.com/",
        description: "Microtask platform for labeling images, text, and training AI systems.",
        category: "Freelance",
        region: "Global",
        badges: ["Microtasks", "AI Data", "Remote"],
        icon: "🐝"
    },
    {
        id: "spare5",
        name: "Spare5",
        url: "https://www.spare5.com/",
        description: "Micro freelance tasks focused on AI training and data labeling.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Data", "Microtasks", "Remote"],
        icon: "🧮"
    },
    {
        id: "uTest",
        name: "uTest",
        url: "https://www.utest.com/",
        description: "Freelance QA testing platform for apps, websites, and software systems.",
        category: "Freelance",
        region: "Global",
        badges: ["QA", "Testing", "Tech"],
        icon: "🧪"
    },
    {
        id: "testbirds",
        name: "Testbirds",
        url: "https://www.testbirds.com/",
        description: "Crowdsourced usability testing and QA freelance platform.",
        category: "Freelance",
        region: "Europe",
        badges: ["UX Testing", "QA", "Crowdsourcing"],
        icon: "🐦"
    },
    {
        id: "userlytics",
        name: "Userlytics",
        url: "https://www.userlytics.com/",
        description: "Freelance UX testing platform for apps, websites, and prototypes.",
        category: "Freelance",
        region: "Global",
        badges: ["UX", "Testing", "Research"],
        icon: "📱"
    },
    {
        id: "validately",
        name: "Validately",
        url: "https://www.validately.com/",
        description: "User experience testing platform for freelance testers and researchers.",
        category: "Freelance",
        region: "Global",
        badges: ["UX Testing", "Research", "Remote"],
        icon: "🔍"
    },
    {
        id: "dscout",
        name: "dscout",
        url: "https://www.dscout.com/",
        description: "Freelance research platform where users get paid for product feedback and studies.",
        category: "Freelance",
        region: "Global",
        badges: ["Research", "UX", "Feedback"],
        icon: "🎥"
    },
    {
        id: "nodesk",
        name: "NoDesk",
        url: "https://nodesk.co/",
        description: "Remote job board featuring freelance, contract, and digital nomad roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Nomad", "Digital"],
        icon: "🧳"
    },
    {
        id: "flexa",
        name: "Flexa Careers",
        url: "https://flexa.careers/",
        description: "Flexible work platform showing transparent remote and freelance-friendly companies.",
        category: "Freelance",
        region: "Global",
        badges: ["Flexible", "Remote", "Transparency"],
        icon: "🧘"
    },
    {
        id: "jobicy",
        name: "Jobicy",
        url: "https://jobicy.com/",
        description: "Remote job board with freelance and contract roles across tech and business.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Contract", "Tech"],
        icon: "📌"
    },
    {
        id: "remote3",
        name: "Remote3",
        url: "https://remote3.co/",
        description: "Web3-focused remote and freelance job board for crypto and blockchain talent.",
        category: "Freelance",
        region: "Global",
        badges: ["Web3", "Crypto", "Remote"],
        icon: "⛓️"
    },
    {
        id: "dailyremote",
        name: "DailyRemote",
        url: "https://dailyremote.com/",
        description: "Curated remote freelance and contract job listings updated daily.",
        category: "Freelance",
        region: "Global",
        badges: ["Curated", "Remote", "Daily"],
        icon: "📆"
    },
    {
        id: "jobgether",
        name: "JobGether",
        url: "https://jobgether.com/",
        description: "AI-powered remote job matching platform with freelance opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["AI Matching", "Remote", "Jobs"],
        icon: "🤝"
    },
    {
        id: "remotelytech",
        name: "Remotely.tech",
        url: "https://remotely.tech/",
        description: "Remote job board focused on tech freelancers and developers.",
        category: "Freelance",
        region: "Global",
        badges: ["Tech", "Remote", "Developers"],
        icon: "💻"
    },
    {
        id: "landingjobs",
        name: "Landing.Jobs",
        url: "https://landing.jobs/",
        description: "European tech job marketplace with freelance and contract roles.",
        category: "Freelance",
        region: "Europe",
        badges: ["Europe", "Tech", "Contract"],
        icon: "🛬"
    },
    {
        id: "vanhack",
        name: "VanHack",
        url: "https://vanhack.com/",
        description: "Global tech hiring platform connecting developers with remote and freelance jobs.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "Remote", "Global"],
        icon: "🌎"
    },
    {
        id: "justjoinit",
        name: "JustJoin.it",
        url: "https://justjoin.it/",
        description: "European tech job board focused on developers, designers, and product roles with remote/freelance options.",
        category: "Freelance",
        region: "Europe",
        badges: ["Tech", "Europe", "Remote"],
        icon: "🇵🇱"
    },
    {
        id: "nofluffjobs",
        name: "No Fluff Jobs",
        url: "https://nofluffjobs.com/",
        description: "Transparent tech job board popular in Europe with contract and freelance listings.",
        category: "Freelance",
        region: "Europe",
        badges: ["Tech", "Salary Transparent", "Europe"],
        icon: "🧾"
    },
    {
        id: "remotivo",
        name: "Remotivo",
        url: "https://remotivo.com/",
        description: "Curated remote and freelance job board for digital professionals.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Curated", "Digital"],
        icon: "🌐"
    },
    {
        id: "eurojobs",
        name: "EuroJobs",
        url: "https://www.eurojobs.com/",
        description: "European job board featuring freelance, contract, and full-time roles across industries.",
        category: "Freelance",
        region: "Europe",
        badges: ["Europe", "Contract", "Jobs"],
        icon: "🇪🇺"
    },
    {
        id: "jobsinberlin",
        name: "Jobs in Berlin",
        url: "https://www.jobsinberlin.eu/",
        description: "Berlin-focused job board with freelance and tech opportunities.",
        category: "Freelance",
        region: "Europe",
        badges: ["Berlin", "Tech", "Europe"],
        icon: "🏙️"
    },
    {
        id: "workinstartups",
        name: "WorkInStartups",
        url: "https://workinstartups.com/",
        description: "Startup job board in Europe offering freelance and contract roles.",
        category: "Freelance",
        region: "Europe",
        badges: ["Startups", "Europe", "Tech"],
        icon: "🚀"
    },
    {
        id: "technojobs",
        name: "Technojobs",
        url: "https://www.technojobs.co.uk/",
        description: "UK tech job board featuring freelance and contract IT roles.",
        category: "Freelance",
        region: "Europe",
        badges: ["UK", "Tech", "Contract"],
        icon: "💾"
    },
    {
        id: "cwjobs",
        name: "CWJobs",
        url: "https://www.cwjobs.co.uk/",
        description: "UK IT job board with freelance, contract, and remote opportunities.",
        category: "Freelance",
        region: "Europe",
        badges: ["UK", "IT", "Contract"],
        icon: "🖥️"
    },
    {
        id: "xplace",
        name: "XPlace",
        url: "https://www.xplace.com/",
        description: "Global freelance marketplace for developers, designers, and engineers.",
        category: "Freelance",
        region: "Global",
        badges: ["Tech", "Design", "Engineering"],
        icon: "🧱"
    },
    {
        id: "freelancerde",
        name: "Freelancer.de",
        url: "https://www.freelancer.de/",
        description: "German-focused freelance marketplace for European clients and freelancers.",
        category: "Freelance",
        region: "Europe",
        badges: ["Germany", "Freelance", "Europe"],
        icon: "🇩🇪"
    },
    {
        id: "jobflare",
        name: "JobFlare",
        url: "https://jobflare.com/",
        description: "Freelance and gig job matching platform for flexible digital work.",
        category: "Freelance",
        region: "Global",
        badges: ["Gigs", "Remote", "Flexible"],
        icon: "⚡"
    },
    {
        id: "remotewx",
        name: "RemoteWx",
        url: "https://remotewx.com/",
        description: "Remote and freelance job aggregator for tech and digital roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Tech", "Aggregator"],
        icon: "🌦️"
    },
    {
        id: "remoteworkhub",
        name: "Remote Work Hub",
        url: "https://remoteworkhub.com/",
        description: "Remote job board featuring freelance, contract, and digital nomad opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Nomad", "Curated"],
        icon: "🌍"
    },
    {
        id: "jobboardsearch",
        name: "JobBoardSearch",
        url: "https://jobboardsearch.com/",
        description: "Meta job board that aggregates freelance and remote listings from multiple sources.",
        category: "Freelance",
        region: "Global",
        badges: ["Aggregator", "Remote", "Search"],
        icon: "🔎"
    },
    {
        id: "startupers",
        name: "Startupers",
        url: "https://startupers.com/",
        description: "Startup-focused job board with freelance and early-stage contract roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Startups", "Early Stage", "Remote"],
        icon: "🚀"
    },
    {
        id: "remotepeople",
        name: "Remote People",
        url: "https://remotepeople.io/",
        description: "Remote hiring platform connecting global freelancers with companies.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Global", "Hiring"],
        icon: "👥"
    },
    {
        id: "eurofreelancehub",
        name: "EuroFreelance Hub",
        url: "https://eurofreelancehub.com/",
        description: "European freelance job aggregator for developers, designers, and consultants.",
        category: "Freelance",
        region: "Europe",
        badges: ["Europe", "Tech", "Consulting"],
        icon: "🇪🇺"
    },
    {
        id: "techcareers",
        name: "TechCareers",
        url: "https://www.techcareers.com/",
        description: "Tech-focused job board with freelance and contract software roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Tech", "Engineering", "Contract"],
        icon: "🧑‍💻"
    },
    {
        id: "devjobs",
        name: "DevJobs",
        url: "https://devjobs.com/",
        description: "Developer job board with freelance, remote, and contract opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "Remote", "Contract"],
        icon: "💻"
    },
    {
        id: "remotecoders",
        name: "Remote Coders",
        url: "https://remotecoders.io/",
        description: "Platform for freelance developers seeking remote coding contracts.",
        category: "Freelance",
        region: "Global",
        badges: ["Coding", "Remote", "Tech"],
        icon: "🧑‍💻"
    },
    {
        id: "jobsforremote",
        name: "JobsForRemote",
        url: "https://jobsforremote.com/",
        description: "Remote-first job board with freelance and contract listings.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Freelance", "Global"],
        icon: "🌐"
    },
    {
        id: "freelanceengine",
        name: "Freelance Engine",
        url: "https://freelanceengine.com/",
        description: "Freelance job marketplace platform used by independent job boards.",
        category: "Freelance",
        region: "Global",
        badges: ["Marketplace", "Platform", "Jobs"],
        icon: "⚙️"
    },
    {
        id: "giggrabbers",
        name: "GigGrabbers",
        url: "https://giggrabbers.com/",
        description: "Freelance marketplace focused on business services and digital work.",
        category: "Freelance",
        region: "Global",
        badges: ["Business", "Gigs", "Freelance"],
        icon: "🧲"
    },
    {
        id: "remotehub",
        name: "RemoteHub",
        url: "https://remotehub.io/",
        description: "Remote job and freelance platform with global opportunities for digital workers.",
        category: "Freelance",
        region: "Global",
        badges: ["Remote", "Global", "Digital"],
        icon: "🌍"
    },
    {
        id: "remotejobsfinder",
        name: "Remote Jobs Finder",
        url: "https://remotejobsfinder.com/",
        description: "Aggregated freelance and remote job search engine.",
        category: "Freelance",
        region: "Global",
        badges: ["Aggregator", "Remote", "Search"],
        icon: "🔍"
    },
    {
        id: "startupjobs",
        name: "Startup Jobs",
        url: "https://startup.jobs/",
        description: "Startup-focused job board with freelance and contract roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Startups", "Tech", "Remote"],
        icon: "🚀"
    },
    {
        id: "techjobsboard",
        name: "Tech Jobs Board",
        url: "https://techjobsboard.com/",
        description: "Developer-focused job board with freelance and remote tech roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Tech", "Remote", "Developers"],
        icon: "💻"
    },
    {
        id: "devremotejobs",
        name: "Dev Remote Jobs",
        url: "https://devremotejobs.com/",
        description: "Remote-first freelance platform for software engineers.",
        category: "Freelance",
        region: "Global",
        badges: ["Developers", "Remote", "Engineering"],
        icon: "🧑‍💻"
    },
    {
        id: "freelancehunt",
        name: "Freelancehunt",
        url: "https://freelancehunt.com/",
        description: "Eastern European freelance marketplace for developers and designers.",
        category: "Freelance",
        region: "Europe",
        badges: ["Europe", "Tech", "Design"],
        icon: "🐺"
    },
    {
        id: "weblancer",
        name: "Weblancer",
        url: "https://www.weblancer.net/",
        description: "Freelance marketplace popular in Eastern Europe and CIS countries.",
        category: "Freelance",
        region: "Europe",
        badges: ["CIS", "Freelance", "Tech"],
        icon: "🌐"
    },
    {
        id: "freelanceua",
        name: "Freelance.ua",
        url: "https://freelance.ua/",
        description: "Ukrainian freelance platform for digital and tech services.",
        category: "Freelance",
        region: "Europe",
        badges: ["Ukraine", "Tech", "Freelance"],
        icon: "🇺🇦"
    },
    {
        id: "kabanchik",
        name: "Kabanchik",
        url: "https://kabanchik.ua/",
        description: "Task-based freelance platform popular in Eastern Europe.",
        category: "Freelance",
        region: "Europe",
        badges: ["Tasks", "Local", "Freelance"],
        icon: "🛠️"
    },
    {
        id: "youteam",
        name: "YouTeam",
        url: "https://youteam.io/",
        description: "Platform connecting companies with vetted remote software development teams.",
        category: "Freelance",
        region: "Global",
        badges: ["Teams", "Developers", "Vetted"],
        icon: "👨‍👩‍👧‍👦"
    },
    {
        id: "peopleperproject",
        name: "PeoplePerProject",
        url: "https://www.peopleperproject.com/",
        description: "Project-based freelance marketplace for small digital and business tasks.",
        category: "Freelance",
        region: "Global",
        badges: ["Projects", "Small Tasks", "Freelance"],
        icon: "📁"
    },
    {
        id: "taskhub",
        name: "TaskHub",
        url: "https://taskhub.com/",
        description: "Task-based gig platform for small freelance digital jobs and errands.",
        category: "Freelance",
        region: "Global",
        badges: ["Tasks", "Microjobs", "Gig"],
        icon: "🧩"
    },
    {
        id: "domestika",
        name: "Domestika",
        url: "https://www.domestika.org/",
        description: "Creative community platform with freelance gigs for designers and artists.",
        category: "Freelance",
        region: "Global",
        badges: ["Creative", "Design", "Art"],
        icon: "🎨"
    },
    {
        id: "coroflot",
        name: "Coroflot",
        url: "https://www.coroflot.com/",
        description: "Design-focused portfolio platform with freelance job postings.",
        category: "Freelance",
        region: "Global",
        badges: ["Design", "Portfolio", "Creative"],
        icon: "🖼️"
    },
    {
        id: "smashingjobs",
        name: "Smashing Magazine",
        url: "https://jobs.smashingmagazine.com/",
        description: "Frontend, UX, and design freelance job board.",
        category: "Freelance",
        region: "Global",
        badges: ["Frontend", "UX", "Design"],
        icon: "💡"
    },
    {
        id: "uxjobsboard",
        name: "UX Jobs Board",
        url: "https://www.uxjobsboard.com/",
        description: "UX/UI-focused freelance and contract job listings.",
        category: "Freelance",
        region: "Global",
        badges: ["UX", "UI", "Design"],
        icon: "📱"
    },
    {
        id: "frontendjobs",
        name: "Frontend Jobs",
        url: "https://frontendjobs.com/",
        description: "Freelance and contract jobs for frontend engineers.",
        category: "Freelance",
        region: "Global",
        badges: ["Frontend", "React", "Web"],
        icon: "🧑‍💻"
    },
    {
        id: "javascriptjobs",
        name: "JavaScript Jobs",
        url: "https://javascriptjob.xyz/",
        description: "Niche freelance job board for JavaScript developers.",
        category: "Freelance",
        region: "Global",
        badges: ["JavaScript", "Dev", "Remote"],
        icon: "⚙️"
    },
    {
        id: "pythonjobs",
        name: "Python Jobs",
        url: "https://pythonjobshq.com/",
        description: "Freelance and remote Python development opportunities.",
        category: "Freelance",
        region: "Global",
        badges: ["Python", "Backend", "Dev"],
        icon: "🐍"
    },
    {
        id: "remotees",
        name: "Remotees",
        url: "https://remotees.com/",
        description: "Curated remote freelance jobs aggregated from multiple sources.",
        category: "Freelance",
        region: "Global",
        badges: ["Aggregator", "Remote", "Tech"],
        icon: "📡"
    },
    {
        id: "remoteyear",
        name: "Remote Year",
        url: "https://www.remoteyear.com/",
        description: "Digital nomad freelance and remote work community platform.",
        category: "Freelance",
        region: "Global",
        badges: ["Nomad", "Remote", "Community"],
        icon: "🌍"
    },
    {
        id: "nomadlist",
        name: "Nomad List",
        url: "https://nomadlist.com/jobs",
        description: "Freelance and remote jobs for digital nomads around the world.",
        category: "Freelance",
        region: "Global",
        badges: ["Nomad", "Remote", "Lifestyle"],
        icon: "🧳"
    },
    {
        id: "techjobsforgood",
        name: "Tech Jobs for Good",
        url: "https://techjobsforgood.com/",
        description: "Mission-driven tech job board with freelance and contract roles.",
        category: "Freelance",
        region: "Global",
        badges: ["Impact", "Tech", "Social Good"],
        icon: "🌱"
    },
    {
        id: "hackerx",
        name: "HackerX",
        url: "https://www.hackerx.org/",
        description: "Invite-only tech hiring events and freelance talent network.",
        category: "Freelance",
        region: "Global",
        badges: ["Invite-only", "Tech", "Elite"],
        icon: "🧠"
    },
    {
        id: "fieldnation",
        name: "Field Nation",
        url: "https://www.fieldnation.com/",
        description: "IT field service freelance platform for technicians and engineers.",
        category: "Freelance",
        region: "North America",
        badges: ["IT", "Field Work", "Technicians"],
        icon: "🛠️"
    },
    {
        id: "gigsmart",
        name: "GigSmart",
        url: "https://gigsmart.com/",
        description: "On-demand freelance and gig work platform for flexible labor.",
        category: "Freelance",
        region: "North America",
        badges: ["Gigs", "On-demand", "Flexible"],
        icon: "📲"
    },
    {
        id: "wonolo",
        name: "Wonolo",
        url: "https://www.wonolo.com/",
        description: "On-demand gig platform for hourly freelance jobs.",
        category: "Freelance",
        region: "North America",
        badges: ["Hourly", "Gigs", "On-demand"],
        icon: "⏱️"
    }
];
