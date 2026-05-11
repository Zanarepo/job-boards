const web3Boards = [
    {
        id: "web3career",
        name: "Web3.career",
        url: "https://web3.career/",
        description: "The largest Web3 job board with thousands of roles in blockchain, crypto, and decentralized tech.",
        category: "Web3",
        region: "Global",
        badges: ["Blockchain", "Crypto", "High Pay"],
        icon: "🔗"
    },
    {
        id: "cryptojobslist",
        name: "CryptoJobsList",
        url: "https://cryptojobslist.com/",
        description: "Find your next career in crypto. Trusted by top startups and established blockchain protocols.",
        category: "Web3",
        region: "Global",
        badges: ["Crypto", "Remote", "Global"],
        icon: "🪙"
    },
    {
        id: "cryptojobs",
        name: "Crypto.jobs",
        url: "https://crypto.jobs/",
        description: "A community-focused job board for the cryptocurrency and blockchain industry.",
        category: "Web3",
        region: "Global",
        badges: ["Crypto", "Community", "Blockchain"],
        icon: "📡"
    },
    {
        id: "cryptocurrencyjobs",
        name: "Cryptocurrency Jobs",
        url: "https://cryptocurrencyjobs.co/",
        description: "Leading job board for the crypto space, featuring roles at companies like Coinbase and Uniswap.",
        category: "Web3",
        region: "Global",
        badges: ["Curated", "Top Companies", "Global"],
        icon: "💎"
    },
    {
        id: "pompcryptojobs",
        name: "Pomp Crypto Jobs",
        url: "https://pompcryptojobs.com/",
        description: "The premiere job board for the crypto and bitcoin industry, curated by Anthony Pompliano.",
        category: "Web3",
        region: "North America",
        badges: ["Bitcoin", "Elite", "Curated"],
        icon: "₿"
    },
    {
        id: "bankless_jobs",
        name: "Bankless Jobs",
        url: "https://jobs.banklesshq.com/",
        description: "The job board for the frontier of finance, focusing on DeFi, NFTs, and DAO roles.",
        category: "Web3",
        region: "Global",
        badges: ["DeFi", "DAO", "NFTs"],
        icon: "🏦"
    },

    {
        id: "angel_co_web3",
        name: "AngelList (Wellfound Web3 Jobs)",
        url: "https://wellfound.com/",
        description: "Major startup hiring platform with strong Web3, crypto, and blockchain startup listings.",
        category: "Web3",
        region: "Global",
        badges: ["Startups", "Crypto", "VC-backed"],
        icon: "🚀"
    },
    {
        id: "dework",
        name: "Dework",
        url: "https://dework.xyz/",
        description: "DAO task management and bounty platform for Web3 contributors and builders.",
        category: "Web3",
        region: "Global",
        badges: ["DAO", "Bounties", "On-chain Work"],
        icon: "🧑‍💻"
    },
    {
        id: "gitcoin",
        name: "Gitcoin",
        url: "https://gitcoin.co/",
        description: "Leading platform for Web3 bounties, grants, and open-source crypto development work.",
        category: "Web3",
        region: "Global",
        badges: ["Bounties", "Grants", "Open Source"],
        icon: "🪙"
    },
    {
        id: "daohaus",
        name: "DAOhaus Jobs",
        url: "https://daohaus.club/",
        description: "DAO coordination platform with opportunities for contributors in decentralized organizations.",
        category: "Web3",
        region: "Global",
        badges: ["DAO", "Governance", "Community"],
        icon: "🏛️"
    },
    {
        id: "snapshot",
        name: "Snapshot Labs Governance",
        url: "https://snapshot.org/",
        description: "Governance platform where many DAOs recruit contributors through proposals and roles.",
        category: "Web3",
        region: "Global",
        badges: ["DAO", "Governance", "Voting"],
        icon: "🗳️"
    },
    {
        id: "forefront",
        name: "Forefront Jobs",
        url: "https://forefront.xyz/",
        description: "Web3 community platform focused on DAOs, crypto careers, and social tokens.",
        category: "Web3",
        region: "Global",
        badges: ["DAO", "Community", "Crypto"],
        icon: "🌐"
    },
    {
        id: "ethlance",
        name: "Ethlance",
        url: "https://ethlance.com/",
        description: "Decentralized freelance marketplace built on Ethereum with no middlemen.",
        category: "Web3",
        region: "Global",
        badges: ["Ethereum", "Freelance", "Decentralized"],
        icon: "⛓️"
    },
    {
        id: "braintrust",
        name: "Braintrust",
        url: "https://www.usebraintrust.com/",
        description: "Web3 talent network connecting developers with top companies without traditional intermediaries.",
        category: "Web3",
        region: "Global",
        badges: ["Talent Network", "Crypto", "High Skill"],
        icon: "🧠"
    },
    {
        id: "superteam",
        name: "Superteam DAO",
        url: "https://superteam.fun/",
        description: "Community-driven platform for Solana ecosystem jobs, grants, and bounties.",
        category: "Web3",
        region: "Global",
        badges: ["Solana", "DAO", "Bounties"],
        icon: "⚡"
    },
    {
        id: "dao_jobs",
        name: "DAO Jobs",
        url: "https://www.daohq.co/",
        description: "Aggregator of DAO roles across governance, engineering, and community management.",
        category: "Web3",
        region: "Global",
        badges: ["DAO", "Web3", "Remote"],
        icon: "🏛️"
    },
    {
        id: "remote3",
        name: "Remote3",
        url: "https://remote3.co/",
        description: "Curated remote Web3 job board across crypto startups and blockchain companies.",
        category: "Web3",
        region: "Global",
        badges: ["Remote", "Crypto", "Startups"],
        icon: "🌍"
    },
    {
        id: "cryptojobs_devs",
        name: "CryptoJobs Dev",
        url: "https://cryptojobs.dev/",
        description: "Web3 developer-focused job board for blockchain engineers and smart contract developers.",
        category: "Web3",
        region: "Global",
        badges: ["Developers", "Smart Contracts", "Blockchain"],
        icon: "💻"
    },
    {
        id: "buildspace",
        name: "Buildspace",
        url: "https://buildspace.so/",
        description: "Web3 builder community where developers learn and get matched to crypto opportunities.",
        category: "Web3",
        region: "Global",
        badges: ["Learning", "Builders", "Startups"],
        icon: "🚧"
    },
    {
        id: "web3grants",
        name: "Web3 Grants",
        url: "https://web3grants.xyz/",
        description: "Aggregator of grants, funding, and paid builder opportunities across Web3 ecosystems.",
        category: "Web3",
        region: "Global",
        badges: ["Grants", "Funding", "Builders"],
        icon: "💰"
    }
];
