const jobBoards = [
    // GLOBAL & NORTH AMERICA
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/",
        description: "The world's largest professional network. Excellent for all roles including remote and hybrid.",
        category: "Global",
        region: "North America",
        badges: ["Remote", "Hybrid", "Global"],
        icon: "💼"
    },
    {
        name: "Indeed",
        url: "https://www.indeed.com/",
        description: "Comprehensive job search engine with millions of listings across every industry globally.",
        category: "Global",
        region: "Global",
        badges: ["All Roles", "International"],
        icon: "🔍"
    },
    {
        name: "Built In",
        url: "https://builtin.com/",
        description: "The hub for startups and tech companies in major US tech hubs.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "Startups", "USA"],
        icon: "🏗️"
    },
    {
        name: "Hired",
        url: "https://hired.com/",
        description: "Companies apply to you. Focused on tech, product, and design roles in North America and UK.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "High Pay", "Vetted"],
        icon: "🤝"
    },
    {
        name: "Dice",
        url: "https://www.dice.com/",
        description: "The leading tech job board in the US with thousands of remote and on-site roles for engineers.",
        category: "Tech",
        region: "North America",
        badges: ["Tech", "Engineering", "USA"],
        icon: "🎲"
    },
    {
        name: "ZipRecruiter",
        url: "https://www.ziprecruiter.com/",
        description: "AI-powered job matching platform connecting millions of job seekers and employers in North America.",
        category: "Global",
        region: "North America",
        badges: ["AI Match", "All Roles", "USA"],
        icon: "⚡"
    },
    {
        name: "Glassdoor",
        url: "https://www.glassdoor.com/Job/",
        description: "Job listings combined with insider company reviews, salaries, and interview insights.",
        category: "Global",
        region: "North America",
        badges: ["Reviews", "Salary Data", "Global"],
        icon: "🚪"
    },

    // REMOTE FOCUS
    {
        name: "We Work Remotely",
        url: "https://weworkremotely.com/",
        description: "The largest remote work community in the world. High-quality tech and creative roles.",
        category: "Remote",
        region: "Global",
        badges: ["100% Remote", "SaaS", "Dev"],
        icon: "🏠"
    },
    {
        name: "Remote OK",
        url: "https://remoteok.com/",
        description: "Popular platform for digital nomads and remote workers. Great for devs and designers.",
        category: "Remote",
        region: "Global",
        badges: ["Nomad", "High Pay", "Tech"],
        icon: "✅"
    },
    {
        name: "Remote.co",
        url: "https://remote.co/remote-jobs/",
        description: "Curated remote job listings across customer service, marketing, tech, and more.",
        category: "Remote",
        region: "Global",
        badges: ["100% Remote", "Curated", "All Roles"],
        icon: "🌐"
    },
    {
        name: "FlexJobs",
        url: "https://www.flexjobs.com/",
        description: "Screened and verified remote, hybrid, and flexible jobs. Zero scam listings guaranteed.",
        category: "Remote",
        region: "Global",
        badges: ["Verified", "Remote", "Flexible"],
        icon: "🔒"
    },
    {
        name: "Remotive",
        url: "https://remotive.com/",
        description: "Curated remote tech jobs from top companies. Also features a thriving Slack community.",
        category: "Remote",
        region: "Global",
        badges: ["100% Remote", "Tech", "Community"],
        icon: "📡"
    },
    {
        name: "Remote Leaf",
        url: "https://remoteleaf.com/",
        description: "Hand-picked remote jobs aggregated daily from 50+ sources into one clean feed.",
        category: "Remote",
        region: "Global",
        badges: ["Aggregator", "Daily", "Tech"],
        icon: "🍃"
    },
    {
        name: "Jobspresso",
        url: "https://jobspresso.co/",
        description: "High-quality, hand-picked remote jobs in tech, marketing, customer support, and more.",
        category: "Remote",
        region: "Global",
        badges: ["Curated", "Remote", "Quality"],
        icon: "☕"
    },
    {
        name: "Himalayas",
        url: "https://himalayas.app/",
        description: "Async-first remote jobs with deep company profiles, timezone filters, and salary ranges.",
        category: "Remote",
        region: "Global",
        badges: ["Async", "Remote", "Profiles"],
        icon: "🏔️"
    },
    {
        name: "NoDesk",
        url: "https://nodesk.co/remote-jobs/",
        description: "Remote job listings paired with a curated directory of remote work resources and tools.",
        category: "Remote",
        region: "Global",
        badges: ["Remote", "Resources", "Dev"],
        icon: "💻"
    },
    {
        name: "Dynamite Jobs",
        url: "https://dynamitejobs.com/",
        description: "The home of bootstrapped and indie company remote jobs — great for culture-fit seekers.",
        category: "Remote",
        region: "Global",
        badges: ["Indie", "Remote", "Bootstrapped"],
        icon: "🧨"
    },
    {
        name: "4 Day Week",
        url: "https://4dayweek.io/",
        description: "Remote jobs at companies with a 4-day work week. Work smarter, not longer.",
        category: "Remote",
        region: "Global",
        badges: ["4-Day Week", "Remote", "Work-Life"],
        icon: "📅"
    },
    {
        name: "Working Nomads",
        url: "https://www.workingnomads.com/jobs",
        description: "Curated list of remote digital jobs for location-independent professionals and nomads.",
        category: "Remote",
        region: "Global",
        badges: ["Nomad", "Remote", "Digital"],
        icon: "🧳"
    },
    {
        name: "Pangian",
        url: "https://pangian.com/",
        description: "Remote-first job network with a strong global community and company culture pages.",
        category: "Remote",
        region: "Global",
        badges: ["Community", "Remote", "Global"],
        icon: "🌏"
    },

    // AFRICA
    {
        name: "Jobberman",
        url: "https://www.jobberman.com/",
        description: "West Africa's largest job portal, focusing on Nigeria and Ghana.",
        category: "Global",
        region: "Africa",
        badges: ["Nigeria", "Ghana", "Africa"],
        icon: "🇳🇬"
    },
    {
        name: "BrighterMonday",
        url: "https://www.brightermonday.co.ke/",
        description: "The leading job site in East Africa, covering Kenya, Uganda, and Tanzania.",
        category: "Global",
        region: "Africa",
        badges: ["Kenya", "East Africa"],
        icon: "🇰🇪"
    },
    {
        name: "Pnet",
        url: "https://www.pnet.co.za/",
        description: "One of South Africa's leading online recruitment portals.",
        category: "Global",
        region: "Africa",
        badges: ["South Africa", "Corporate"],
        icon: "🇿🇦"
    },
    {
        name: "TechCity Jobs",
        url: "https://www.techcityng.com/",
        description: "Tech-focused job listings and news for the African technology ecosystem.",
        category: "Tech",
        region: "Africa",
        badges: ["Tech", "Africa", "Startups"],
        icon: "🏙️"
    },
    {
        name: "Fuzu",
        url: "https://www.fuzu.com/",
        description: "Career growth platform covering Kenya, Uganda, Nigeria and more with learning resources.",
        category: "Global",
        region: "Africa",
        badges: ["East Africa", "Learning", "Growth"],
        icon: "🌱"
    },
    {
        name: "Africa Job Board",
        url: "https://www.africajobboard.com/",
        description: "Pan-African job listings spanning multiple industries and countries across the continent.",
        category: "Global",
        region: "Africa",
        badges: ["Pan-Africa", "All Roles"],
        icon: "🌍"
    },
    {
        name: "Findwork Africa",
        url: "https://findwork.africa/",
        description: "Remote and local tech opportunities specifically targeting African talent.",
        category: "Remote",
        region: "Africa",
        badges: ["Remote", "Tech", "Africa"],
        icon: "📲"
    },
    {
        name: "Shortlist",
        url: "https://shortlist.co/",
        description: "Connecting high-growth companies in Africa and India with top professional talent.",
        category: "Tech",
        region: "Africa",
        badges: ["Africa", "India", "Vetted"],
        icon: "📋"
    },

    // EUROPE
    {
        name: "Otta",
        url: "https://otta.com/",
        description: "Highly personalized job search for tech workers. Strong presence in UK and Europe.",
        category: "Tech",
        region: "Europe",
        badges: ["Smart Match", "Europe", "UK"],
        icon: "🐙"
    },
    {
        name: "Welcome to the Jungle",
        url: "https://www.welcometothejungle.com/",
        description: "The best place to explore company cultures and find jobs in France and Europe.",
        category: "Digital",
        region: "Europe",
        badges: ["Culture", "Europe", "Design"],
        icon: "🌴"
    },
    {
        name: "Honeypot",
        url: "https://www.honeypot.io/",
        description: "Europe's developer-focused job platform where companies apply to you.",
        category: "Tech",
        region: "Europe",
        badges: ["Dev Only", "Germany", "Europe"],
        icon: "🍯"
    },
    {
        name: "Jobbatical",
        url: "https://jobbatical.com/",
        description: "Connecting tech talent with companies that offer relocation and visa sponsorship.",
        category: "Remote",
        region: "Europe",
        badges: ["Relocation", "Global", "Tech"],
        icon: "🌍"
    },
    {
        name: "EuropeRemotely",
        url: "https://europeremotely.com/",
        description: "Remote jobs open specifically to European timezones and candidates.",
        category: "Remote",
        region: "Europe",
        badges: ["EU Timezone", "Remote", "Tech"],
        icon: "🇪🇺"
    },
    {
        name: "Jobteaser",
        url: "https://www.jobteaser.com/",
        description: "The go-to student and graduate job board across universities in Europe.",
        category: "Global",
        region: "Europe",
        badges: ["Graduates", "Europe", "Entry Level"],
        icon: "🎓"
    },
    {
        name: "StepStone",
        url: "https://www.stepstone.de/",
        description: "One of Europe's largest job marketplaces, particularly dominant in Germany.",
        category: "Global",
        region: "Europe",
        badges: ["Germany", "Europe", "All Roles"],
        icon: "🪨"
    },

    // SOUTH AMERICA
    {
        name: "Getonbrd",
        url: "https://www.getonbrd.com/",
        description: "The leading platform for tech jobs in Latin America.",
        category: "Tech",
        region: "South America",
        badges: ["LatAm", "Tech", "Remote"],
        icon: "🚢"
    },
    {
        name: "Torre",
        url: "https://torre.ai/",
        description: "A new way to find work globally, with a very strong user base in Latin America.",
        category: "Remote",
        region: "South America",
        badges: ["AI Match", "LatAm", "Global"],
        icon: "🗼"
    },
    {
        name: "Workana",
        url: "https://www.workana.com/",
        description: "The largest freelance marketplace for Spanish and Portuguese speakers.",
        category: "FaaS",
        region: "South America",
        badges: ["Freelance", "LatAm", "Spanish"],
        icon: "🚜"
    },
    {
        name: "InfoJobs Brazil",
        url: "https://www.infojobs.com.br/",
        description: "One of the most visited job sites in Brazil for all professional levels.",
        category: "Global",
        region: "South America",
        badges: ["Brazil", "All Levels"],
        icon: "🇧🇷"
    },
    {
        name: "Computrabajo",
        url: "https://www.computrabajo.com/",
        description: "A major job portal covering Mexico, Colombia, Argentina, Chile and more.",
        category: "Global",
        region: "South America",
        badges: ["LatAm", "Spanish", "Wide Coverage"],
        icon: "💻"
    },
    {
        name: "OLX Emprego",
        url: "https://www.olx.com.br/trabalho-e-servicos",
        description: "Brazil's popular classifieds platform with a robust jobs and services section.",
        category: "Global",
        region: "South America",
        badges: ["Brazil", "Classifieds", "Local"],
        icon: "📌"
    },

    // SAAS & STARTUPS
    {
        name: "Wellfound (AngelList)",
        url: "https://wellfound.com/jobs",
        description: "The best place to find jobs at startups. SaaS, Fintech, and emerging tech focus.",
        category: "SaaS",
        region: "Global",
        badges: ["Startups", "Equity", "SaaS"],
        icon: "✌️"
    },
    {
        name: "Y Combinator",
        url: "https://www.ycombinator.com/jobs",
        description: "Apply to hundreds of YC-backed startups with a single application profile.",
        category: "SaaS",
        region: "Global",
        badges: ["Startups", "Top Tier", "Tech"],
        icon: "🧡"
    },
    {
        name: "Product Hunt Jobs",
        url: "https://www.producthunt.com/jobs",
        description: "Job listings from cutting-edge startups launching on Product Hunt daily.",
        category: "SaaS",
        region: "Global",
        badges: ["Startups", "Product", "Early Stage"],
        icon: "🐱"
    },
    {
        name: "Hacker News Who's Hiring",
        url: "https://news.ycombinator.com/jobs",
        description: "Monthly 'Who is Hiring?' thread from the HN community. Pure signal, no noise.",
        category: "SaaS",
        region: "Global",
        badges: ["Engineer", "Startups", "Community"],
        icon: "🟧"
    },
    {
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
        name: "Toptal",
        url: "https://www.toptal.com/",
        description: "Exclusive network of the top 3% of freelance talent globally.",
        category: "FaaS",
        region: "Global",
        badges: ["Elite", "Freelance", "High End"],
        icon: "💎"
    },
    {
        name: "Upwork",
        url: "https://www.upwork.com/",
        description: "World's largest freelance marketplace for all types of digital work.",
        category: "FaaS",
        region: "Global",
        badges: ["Freelance", "Gigs", "Global"],
        icon: "🟢"
    },
    {
        name: "Fiverr",
        url: "https://www.fiverr.com/",
        description: "Marketplace for creative and digital services starting from micro-gigs to enterprise projects.",
        category: "FaaS",
        region: "Global",
        badges: ["Gigs", "Creative", "Global"],
        icon: "🎯"
    },
    {
        name: "PeoplePerHour",
        url: "https://www.peopleperhour.com/",
        description: "UK-origin freelance platform popular for design, writing, and development projects.",
        category: "FaaS",
        region: "Europe",
        badges: ["UK", "Freelance", "Digital"],
        icon: "⏱️"
    },
    {
        name: "Contra",
        url: "https://contra.com/",
        description: "Commission-free freelance platform with a portfolio-first approach for independent workers.",
        category: "FaaS",
        region: "Global",
        badges: ["0% Commission", "Portfolio", "Freelance"],
        icon: "🎨"
    },
    {
        name: "Guru",
        url: "https://www.guru.com/",
        description: "Freelance marketplace with workroom collaboration tools for long-term client relationships.",
        category: "FaaS",
        region: "Global",
        badges: ["Freelance", "Collaboration", "Long-term"],
        icon: "🧘"
    },

    // ASIA
    {
        name: "JobStreet",
        url: "https://www.jobstreet.com/",
        description: "Southeast Asia's largest job marketplace, dominant in Malaysia, Singapore, Philippines.",
        category: "Global",
        region: "Asia",
        badges: ["SEA", "Corporate", "All Roles"],
        icon: "🌏"
    },
    {
        name: "Naukri",
        url: "https://www.naukri.com/",
        description: "India's #1 job portal with millions of listings across every sector.",
        category: "Global",
        region: "Asia",
        badges: ["India", "All Roles", "Volume"],
        icon: "🇮🇳"
    },
    {
        name: "Foundit (Monster APAC)",
        url: "https://www.foundit.in/",
        description: "Formerly Monster India — a major platform for mid to senior professional roles in Asia.",
        category: "Global",
        region: "Asia",
        badges: ["India", "APAC", "Mid-Senior"],
        icon: "🔎"
    },
    {
        name: "Tech In Asia Jobs",
        url: "https://www.techinasia.com/jobs",
        description: "The premier source for startup and tech jobs across Southeast and East Asia.",
        category: "Tech",
        region: "Asia",
        badges: ["Startups", "SEA", "Tech"],
        icon: "🏮"
    }
];

// --- SUBMIT A BOARD (localStorage) ---
const STORAGE_KEY = 'gjh_submissions';

function getSubmissions() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function saveSubmission(entry) {
    const submissions = getSubmissions();
    submissions.unshift(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
}

// --- DOM REFS ---
const grid = document.getElementById('jobBoardsGrid');
const searchInput = document.getElementById('search');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');

const openModalBtn = document.getElementById('openSubmitModal');
const modal = document.getElementById('submitModal');
const closeModalBtn = document.getElementById('closeModal');
const submitForm = document.getElementById('submitForm');
const submitSuccess = document.getElementById('submitSuccess');

// --- THEME ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// --- RENDER ---
function renderBoards(filteredBoards) {
    grid.innerHTML = '';
    if (filteredBoards.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">No boards found matching your search.</div>';
        return;
    }
    filteredBoards.forEach(board => {
        const card = document.createElement('div');
        card.className = 'board-card' + (board.submitted ? ' submitted-card' : '');
        card.innerHTML = `
            <div class="card-header">
                <div class="icon-wrapper">${board.icon}</div>
                <h3>${board.name}</h3>
                ${board.submitted ? '<span class="community-tag">Community</span>' : ''}
            </div>
            <p>${board.description}</p>
            <div class="badge-list">
                <span class="badge region-badge">${board.region}</span>
                ${board.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
            </div>
            <a href="${board.url}" target="_blank" class="visit-btn">
                Visit Website 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
        `;
        grid.appendChild(card);
    });
}

// --- FILTER ---
function filter() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeBtn = document.querySelector('.filter-btn.active');
    const filterType = activeBtn.dataset.type;
    const filterValue = activeBtn.dataset.value;

    const allBoards = [...jobBoards, ...getSubmissions()];

    const filtered = allBoards.filter(board => {
        const matchesSearch = board.name.toLowerCase().includes(searchTerm) ||
            board.description.toLowerCase().includes(searchTerm) ||
            board.region.toLowerCase().includes(searchTerm);

        let matchesFilter = true;
        if (filterValue !== 'All') {
            if (filterType === 'category') {
                matchesFilter = board.category === filterValue;
            } else if (filterType === 'region') {
                matchesFilter = board.region === filterValue;
            }
        }

        return matchesSearch && matchesFilter;
    });

    renderBoards(filtered);
}

searchInput.addEventListener('input', filter);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filter();
    });
});

// --- MODAL ---
function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    submitSuccess.style.display = 'none';
    submitForm.style.display = 'flex';
    submitForm.reset();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('boardName').value.trim();
    const url = document.getElementById('boardUrl').value.trim();
    const description = document.getElementById('boardDesc').value.trim();
    const region = document.getElementById('boardRegion').value;
    const category = document.getElementById('boardCategory').value;

    const entry = {
        name,
        url: url.startsWith('http') ? url : 'https://' + url,
        description,
        region,
        category,
        badges: [region, category],
        icon: '📌',
        submitted: true
    };

    saveSubmission(entry);
    submitForm.style.display = 'none';
    submitSuccess.style.display = 'flex';

    setTimeout(() => {
        closeModal();
        filter();
    }, 2000);
});

// --- INIT ---
initTheme();
renderBoards(jobBoards);