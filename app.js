const jobBoards = [
    ...featuredBoards,
    ...governmentBoards,
    ...ngoBoards,
    ...internshipBoards,
    ...volunteerBoards,
    ...aiTaskBoards,
    ...medicalBoards,
    ...apprenticeshipBoards,
    ...sustainabilityBoards,
    ...web3Boards,
    ...creativeBoards,
    ...cybersecurityBoards,
    ...marketingBoards,
    ...eventBoards,
    ...musicBoards,
    ...globalBoards,








    ...africaBoards,
    ...europeBoards,
    ...americasBoards,
    ...asiaBoards,
    ...freelanceBoards
];





// --- STORAGE KEYS ---
const STORAGE_KEY = 'gjh_submissions';
const VOTES_KEY = 'gjh_votes';
const USER_VOTES_KEY = 'gjh_user_votes';

// --- PARTNERS ---
function renderPartners() {
    const partnersGrid = document.getElementById('partnersGrid');
    if (!partnersGrid) return;

    partnersGrid.innerHTML = partnerResources.map(partner => `
        <div class="partner-card">
            <div class="partner-badge">${partner.badge}</div>
            <div class="partner-icon">${partner.icon}</div>
            <div class="partner-info">
                <h3>${partner.title}</h3>
                <p>${partner.description}</p>
                <a href="${partner.link}" class="partner-link">${partner.cta}</a>
            </div>
        </div>
    `).join('');
}

// --- FEATURED BOARDS ---
function renderFeatured() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;

    featuredGrid.innerHTML = featuredBoards.map(board => `
        <div class="board-card featured-card">
            <div class="card-header">
                <div class="icon-wrapper">${board.icon || '✨'}</div>
                <h3>${board.name}</h3>
                <span class="featured-badge">Featured</span>
            </div>
            <p>${board.description}</p>
            <div class="badge-list">
                <span class="badge region-badge">${board.region}</span>
                ${(board.badges || []).map(badge => `<span class="badge">${badge}</span>`).join('')}
            </div>
            <a href="${board.url}" target="_blank" class="visit-btn">
                Visit Website
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
        </div>
    `).join('');
}

// --- BOARDS GRID ---

// --- VOTE LOGIC ---
function getVotes() {
    try {
        return JSON.parse(localStorage.getItem(VOTES_KEY)) || {};
    } catch {
        return {};
    }
}

function getUserVotes() {
    try {
        return JSON.parse(localStorage.getItem(USER_VOTES_KEY)) || [];
    } catch {
        return [];
    }
}

function handleVote(boardId) {
    const votes = getVotes();
    const userVotes = getUserVotes();

    if (userVotes.includes(boardId)) {
        // Unvote
        votes[boardId] = Math.max(0, (votes[boardId] || 1) - 1);
        const index = userVotes.indexOf(boardId);
        userVotes.splice(index, 1);
    } else {
        // Vote
        votes[boardId] = (votes[boardId] || 0) + 1;
        userVotes.push(boardId);
    }

    localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
    localStorage.setItem(USER_VOTES_KEY, JSON.stringify(userVotes));
    filter(); // Re-render
}

// --- SUBMIT A BOARD (localStorage) ---
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
const openModalBtn2 = document.getElementById('openSubmitModal2');
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

    const votes = getVotes();
    const userVotes = getUserVotes();

    filteredBoards.forEach(board => {
        const card = document.createElement('div');
        card.className = 'board-card' + (board.submitted ? ' submitted-card' : '');
        const voteCount = (board.id && votes[board.id]) || 0;
        const hasVoted = board.id && userVotes.includes(board.id);
        const badges = board.badges || [];

        card.innerHTML = `
            <div class="card-header">
                <div class="icon-wrapper">${board.icon || '📌'}</div>
                <h3>${board.name || 'Untitled Board'}</h3>
                ${board.submitted ? '<span class="community-tag">Community</span>' : ''}
                <button class="upvote-btn ${hasVoted ? 'voted' : ''}" data-id="${board.id || ''}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="${hasVoted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span>${voteCount}</span>
                </button>
            </div>
            <p>${board.description || 'No description available.'}</p>
            <div class="badge-list">
                <span class="badge region-badge">${board.region || 'Global'}</span>
                ${badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
            </div>

            <a href="${board.url}" target="_blank" class="visit-btn">
                Visit Website 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
        `;
        grid.appendChild(card);
    });

    // Wire up upvote buttons
    document.querySelectorAll('.upvote-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            handleVote(btn.dataset.id);
        });
    });
}


// --- STATS ---
function updateStats() {
    const allBoards = [...jobBoards, ...getSubmissions()];
    const boardCount = allBoards.length;
    const categories = new Set(allBoards.map(b => b.category)).size;
    
    // Map regions to continents to get an accurate count
    const continentMap = {
        'Africa': 'Africa',
        'Europe': 'Europe',
        'UK': 'Europe',
        'Germany': 'Europe',
        'France': 'Europe',
        'Spain': 'Europe',
        'Italy': 'Europe',
        'Asia': 'Asia',
        'India': 'Asia',
        'China': 'Asia',
        'Japan': 'Asia',
        'North America': 'North America',
        'South America': 'South America',
        'Americas': 'Americas',
        'USA': 'North America',
        'Canada': 'North America',
        'Australia': 'Oceania',
        'Oceania': 'Oceania',
        'Global': 'Global'
    };

    const uniqueContinents = new Set(allBoards.map(b => continentMap[b.region] || 'Global'));
    
    document.getElementById('statBoards').textContent = boardCount;
    document.getElementById('statRegions').textContent = uniqueContinents.size;
    document.getElementById('statCategories').textContent = categories;
}


// --- FILTER & SORT ---
const sortSelect = document.getElementById('sortSelect');

function filter() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeBtn = document.querySelector('.filter-btn.active');
    const filterType = activeBtn.dataset.type;
    const filterValue = activeBtn.dataset.value;
    const sortBy = sortSelect.value;

    const allBoards = [...jobBoards, ...getSubmissions()];
    const userVotes = getUserVotes();
    const votes = getVotes();

    let filtered = allBoards.filter(board => {
        const name = board.name || '';
        const desc = board.description || '';
        const region = board.region || '';
        const category = board.category || '';
        const badges = board.badges || [];

        const matchesSearch = name.toLowerCase().includes(searchTerm) ||
            desc.toLowerCase().includes(searchTerm) ||
            region.toLowerCase().includes(searchTerm) ||
            category.toLowerCase().includes(searchTerm) ||
            badges.some(badge => badge.toLowerCase().includes(searchTerm));



        let matchesFilter = true;
        if (filterValue === 'Favorites') {
            matchesFilter = userVotes.includes(board.id);
        } else if (filterValue !== 'All') {
            if (filterType === 'category') {
                matchesFilter = board.category === filterValue;
            } else if (filterType === 'region') {
                matchesFilter = board.region === filterValue;
            }
        }

        return matchesSearch && matchesFilter;
    });

    // Apply Sorting
    if (sortBy === 'popularity') {
        filtered.sort((a, b) => (votes[b.id] || 0) - (votes[a.id] || 0));
    } else if (sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'newest') {
        // Submitted boards with sub_ timestamp come first, then others
        filtered.sort((a, b) => {
            const aTime = a.id.startsWith('sub_') ? parseInt(a.id.split('_')[1]) : 0;
            const bTime = b.id.startsWith('sub_') ? parseInt(b.id.split('_')[1]) : 0;
            return bTime - aTime;
        });
    }

    renderBoards(filtered);
    updateStats();
}

if (sortSelect) sortSelect.addEventListener('change', filter);


// --- TIPS MODAL ---
const tipsModal = document.getElementById('tipsModal');
const openTipsBtn = document.getElementById('openTipsModal');
const closeTipsBtn = document.getElementById('closeTipsModal');

function openTips() {
    tipsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTips() {
    tipsModal.classList.remove('active');
    document.body.style.overflow = '';
}

if (openTipsBtn) openTipsBtn.addEventListener('click', openTips);
if (closeTipsBtn) closeTipsBtn.addEventListener('click', closeTips);
if (tipsModal) {
    tipsModal.addEventListener('click', (e) => {
        if (e.target === tipsModal) closeTips();
    });
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

if (openModalBtn) openModalBtn.addEventListener('click', openModal);
if (openModalBtn2) openModalBtn2.addEventListener('click', openModal);
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
        id: 'sub_' + Date.now(),
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
renderPartners();
renderFeatured();
renderBoards(jobBoards);
updateStats();