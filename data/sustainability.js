const sustainabilityBoards = [
    {
        id: "climatebase",
        name: "Climatebase",
        url: "https://climatebase.org/",
        description: "The leading platform for climate careers, connecting talent with thousands of jobs at top climate tech companies.",
        category: "Sustainability",
        region: "Global",
        badges: ["Climate Tech", "Green Jobs", "Impact"],
        icon: "🌱"
    },
    {
        id: "workonclimate",
        name: "Work on Climate",
        url: "https://workonclimate.org/",
        description: "A community-driven platform and directory for professionals transition into climate-focused roles.",
        category: "Sustainability",
        region: "Global",
        badges: ["Community", "Climate", "Global"],
        icon: "🌍"
    },
    {
        id: "terrado",
        name: "Terra.do",
        url: "https://www.terra.do/climate-jobs",
        description: "Climate education and jobs platform helping a million people work in climate by 2030.",
        category: "Sustainability",
        region: "Global",
        badges: ["Education", "Climate Tech", "Career Change"],
        icon: "☀️"
    },
    {
        id: "greenbiz",
        name: "GreenBiz Jobs",
        url: "https://jobs.greenbiz.com/",
        description: "The best place to find corporate sustainability, circular economy, and clean energy jobs.",
        category: "Sustainability",
        region: "North America",
        badges: ["Corporate", "Sustainability", "ESG"],
        icon: "🏢"
    },
    {
        id: "ethicaljobs_global",
        name: "EthicalJobs",
        url: "https://www.ethicaljobs.com.au/",
        description: "Dedicated to jobs that make a difference, from environmental NGOs to social enterprises.",
        category: "Sustainability",
        region: "Oceania",
        badges: ["Social Impact", "Environment", "NGO"],
        icon: "🤝"
    },
    {
        id: "conservationjobs",
        name: "Conservation Job Board",
        url: "https://www.conservationjobboard.com/",
        description: "The world's largest job board for conservation, ecology, and wildlife roles.",
        category: "Sustainability",
        region: "Global",
        badges: ["Conservation", "Ecology", "Global"],
        icon: "🐾"
    },
    {
        id: "re_newable",
        name: "Re-newable Jobs",
        url: "https://www.re-newables.com/",
        description: "Specialized job board for the renewable energy, solar, and wind power sectors.",
        category: "Sustainability",
        region: "Europe",
        badges: ["Clean Energy", "Solar", "Europe"],
        icon: "🔋"
    },
    {
        id: "earthworks_jobs",
        name: "EarthWorks Jobs",
        url: "https://earthworks-jobs.com/",
        description: "Global job board for environmental science, conservation, forestry, and sustainability roles.",
        category: "Sustainability",
        region: "Global",
        badges: ["Environment", "Conservation", "Global"],
        icon: "🌿"
    },
    {
        id: "environmental_career",
        name: "EnvironmentalCareer.com",
        url: "https://environmentalcareer.com/",
        description: "Dedicated platform for environmental science, climate, and sustainability jobs worldwide.",
        category: "Sustainability",
        region: "Global",
        badges: ["Environment", "Science", "Green Jobs"],
        icon: "🌱"
    },
    {
        id: "climate_chase",
        name: "ClimateChase",
        url: "https://climatechase.com/",
        description: "Curated climate tech job board and newsletter for sustainability professionals.",
        category: "Sustainability",
        region: "Global",
        badges: ["Climate Tech", "Startups", "Jobs"],
        icon: "🌍"
    },
    {
        id: "sustainable_business_jobs",
        name: "Sustainable Business Jobs",
        url: "https://www.sustainablebusiness.com/jobs/",
        description: "Jobs focused on sustainability, ESG, clean energy, and corporate responsibility.",
        category: "Sustainability",
        region: "Global",
        badges: ["ESG", "Corporate", "Sustainability"],
        icon: "🏢"
    },
    {
        id: "esg_careers",
        name: "ESG Today Jobs",
        url: "https://www.esgtoday.com/jobs/",
        description: "Job listings focused on ESG, impact investing, and corporate sustainability roles.",
        category: "Sustainability",
        region: "Global",
        badges: ["ESG", "Finance", "Impact"],
        icon: "📊"
    },
    {
        id: "climate_kic_jobs",
        name: "Climate-KIC Jobs",
        url: "https://www.climate-kic.org/jobs/",
        description: "Europe’s largest climate innovation initiative offering jobs and startup roles.",
        category: "Sustainability",
        region: "Europe",
        badges: ["EU", "Innovation", "Climate Tech"],
        icon: "🇪🇺"
    },
    {
        id: "carbon_careers",
        name: "Carbon Careers",
        url: "https://www.carboncareers.com/",
        description: "Specialized job board for carbon markets, carbon accounting, and climate finance.",
        category: "Sustainability",
        region: "Global",
        badges: ["Carbon", "Finance", "Climate"],
        icon: "🪙"
    },
    {
        id: "renewable_energy_world",
        name: "Renewable Energy World Jobs",
        url: "https://jobs.renewableenergyworld.com/",
        description: "Jobs in solar, wind, hydro, and renewable energy infrastructure.",
        category: "Sustainability",
        region: "Global",
        badges: ["Renewable", "Energy", "Engineering"],
        icon: "⚡"
    },
    {
        id: "clean_energy_jobs",
        name: "Clean Energy Jobs (IRENA)",
        url: "https://www.irena.org/",
        description: "International Renewable Energy Agency supporting global clean energy employment.",
        category: "Sustainability",
        region: "Global",
        badges: ["UN", "Energy", "Climate"],
        icon: "☀️"
    },
    {
        id: "eco_jobs",
        name: "EcoJobs.com",
        url: "https://www.ecojobs.com/",
        description: "Environmental job board focused on conservation, sustainability, and green careers.",
        category: "Sustainability",
        region: "Global",
        badges: ["Eco", "Conservation", "Green Jobs"],
        icon: "🌳"
    },
    {
        id: "green_jobs_online",
        name: "GreenJobs Online",
        url: "https://www.greenjobs.co.uk/",
        description: "UK-based green job board covering sustainability, renewables, and environmental roles.",
        category: "Sustainability",
        region: "Europe",
        badges: ["UK", "Green Energy", "ESG"],
        icon: "🇬🇧"
    },
    {
        id: "nature_conservancy_jobs",
        name: "The Nature Conservancy Careers",
        url: "https://www.nature.org/en-us/about-us/careers/",
        description: "Global conservation organization hiring for environmental science and sustainability roles.",
        category: "Sustainability",
        region: "Global",
        badges: ["Conservation", "NGO", "Science"],
        icon: "🐘"
    },
    {
        id: "wwf_careers",
        name: "WWF Careers",
        url: "https://www.worldwildlife.org/about/careers",
        description: "World Wildlife Fund careers in conservation, climate action, and biodiversity protection.",
        category: "Sustainability",
        region: "Global",
        badges: ["Wildlife", "Conservation", "NGO"],
        icon: "🐼"
    },
    {
        id: "climate_one",
        name: "Climate One Jobs",
        url: "https://www.climateone.org/",
        description: "Climate policy, energy transition, and environmental leadership jobs and programs.",
        category: "Sustainability",
        region: "North America",
        badges: ["Policy", "Climate", "Energy"],
        icon: "🎤"
    },
    {
        id: "edf_careers",
        name: "Environmental Defense Fund Careers",
        url: "https://www.edf.org/jobs",
        description: "Major US environmental NGO working on climate policy, energy, and sustainability solutions.",
        category: "Sustainability",
        region: "North America",
        badges: ["NGO", "Policy", "Climate"],
        icon: "🌎"
    },
    {
        id: "greenpeace_jobs",
        name: "Greenpeace Careers",
        url: "https://www.greenpeace.org/international/explore/jobs/",
        description: "Global environmental activism organization hiring for climate and sustainability campaigns.",
        category: "Sustainability",
        region: "Global",
        badges: ["Activism", "Climate", "NGO"],
        icon: "✊"
    },
    {
        id: "siemens_energy_jobs",
        name: "Siemens Energy Careers",
        url: "https://www.siemens-energy.com/global/en/company/jobs.html",
        description: "Global energy transition jobs in electrification, renewables, and decarbonization tech.",
        category: "Sustainability",
        region: "Global",
        badges: ["Energy Transition", "Engineering", "Clean Tech"],
        icon: "⚡"
    },
    {
        id: "schneider_electric_careers",
        name: "Schneider Electric Careers",
        url: "https://www.se.com/ww/en/about-us/careers/",
        description: "Global leader in energy management and automation hiring for sustainability-focused roles.",
        category: "Sustainability",
        region: "Global",
        badges: ["Energy Efficiency", "ESG", "Engineering"],
        icon: "🔌"
    },
    {
        id: "ibm_sustainability_jobs",
        name: "IBM Sustainability Careers",
        url: "https://www.ibm.com/careers",
        description: "Corporate sustainability, climate tech, and AI-driven environmental solutions roles.",
        category: "Sustainability",
        region: "Global",
        badges: ["Tech", "AI", "ESG"],
        icon: "💻"
    },
    {
        id: "world_bank_environment_jobs",
        name: "World Bank Environment Jobs",
        url: "https://www.worldbank.org/en/about/careers",
        description: "Global development roles focused on climate change, sustainability, and environmental finance.",
        category: "Sustainability",
        region: "Global",
        badges: ["Development", "Finance", "Climate"],
        icon: "🏦"
    },
    {
        id: "unep_careers",
        name: "UN Environment Programme Careers",
        url: "https://www.unep.org/work-with-us",
        description: "UN agency focused on global environmental policy, climate action, and sustainability.",
        category: "Sustainability",
        region: "Global",
        badges: ["UN", "Policy", "Climate"],
        icon: "🌿"
    },
    {
        id: "undp_environment_jobs",
        name: "UNDP Climate & Environment Jobs",
        url: "https://www.undp.org/careers",
        description: "UN development agency roles focused on climate resilience and sustainability projects.",
        category: "Sustainability",
        region: "Global",
        badges: ["UN", "Development", "Climate"],
        icon: "🌍"
    },
    {
        id: "irex_climate",
        name: "IREX Sustainability Programs",
        url: "https://www.irex.org/careers",
        description: "International nonprofit supporting climate education, youth, and sustainability programs.",
        category: "Sustainability",
        region: "Global",
        badges: ["Education", "Climate", "Youth"],
        icon: "📚"
    },
    {
        id: "climate_policy_initiative",
        name: "Climate Policy Initiative Careers",
        url: "https://www.climatepolicyinitiative.org/",
        description: "Global think tank focused on climate finance and policy analysis.",
        category: "Sustainability",
        region: "Global",
        badges: ["Finance", "Policy", "Climate"],
        icon: "📊"
    },
    {
        id: "energy_transition_hub",
        name: "Energy Transition Hub",
        url: "https://energytransition.org/",
        description: "Research and job ecosystem focused on global shift to renewable energy systems.",
        category: "Sustainability",
        region: "Global",
        badges: ["Energy", "Research", "Transition"],
        icon: "🔋"
    },
    {
        id: "africa_climate_foundation",
        name: "Africa Climate Foundation",
        url: "https://africaclimatefoundation.org/",
        description: "Africa-focused climate policy and funding organization supporting adaptation and resilience.",
        category: "Sustainability",
        region: "Africa",
        badges: ["Africa", "Policy", "Climate"],
        icon: "🌍"
    },

    {
        id: "we_mean_business",
        name: "We Mean Business Coalition Careers",
        url: "https://www.wemeanbusinesscoalition.org/",
        description: "Global coalition working with corporations on climate action and net-zero commitments.",
        category: "Sustainability",
        region: "Global",
        badges: ["Corporate Climate", "Net Zero", "Policy"],
        icon: "🏢"
    },
    {
        id: "cdp_careers",
        name: "CDP (Carbon Disclosure Project) Careers",
        url: "https://www.cdp.net/en/careers",
        description: "Leading global platform for environmental disclosure and climate data reporting jobs.",
        category: "Sustainability",
        region: "Global",
        badges: ["Carbon Data", "ESG", "Climate"],
        icon: "📈"
    },
    {
        id: "science_based_targets",
        name: "Science Based Targets initiative (SBTi) Careers",
        url: "https://sciencebasedtargets.org/about-us/careers",
        description: "Global organization defining corporate net-zero and emissions reduction standards.",
        category: "Sustainability",
        region: "Global",
        badges: ["Net Zero", "Standards", "Climate"],
        icon: "🎯"
    },
    {
        id: "gold_standard",
        name: "Gold Standard Jobs",
        url: "https://www.goldstandard.org/",
        description: "Certification body for climate impact projects and carbon offset integrity.",
        category: "Sustainability",
        region: "Global",
        badges: ["Carbon Markets", "Certification", "Climate"],
        icon: "🪙"
    },
    {
        id: "verra_registry",
        name: "Verra Careers",
        url: "https://verra.org/",
        description: "Major carbon credit standard body managing global climate offset projects.",
        category: "Sustainability",
        region: "Global",
        badges: ["Carbon Markets", "Offsets", "Climate"],
        icon: "🌱"
    },
    {
        id: "icf_climate",
        name: "ICF Climate Careers",
        url: "https://www.icf.com/careers",
        description: "Consulting firm heavily involved in climate policy, energy transition, and sustainability advisory.",
        category: "Sustainability",
        region: "Global",
        badges: ["Consulting", "Climate", "Energy"],
        icon: "📊"
    },
    {
        id: "bloomberg_green_jobs",
        name: "Bloomberg Green Careers",
        url: "https://www.bloomberg.com/company/careers/",
        description: "Climate journalism, data, and sustainability research roles within Bloomberg Green.",
        category: "Sustainability",
        region: "Global",
        badges: ["Media", "Climate Data", "Research"],
        icon: "📰"
    },
    {
        id: "rocky_mountain_institute",
        name: "Rocky Mountain Institute Careers",
        url: "https://rmi.org/careers/",
        description: "Energy transition think tank focused on decarbonization and clean energy systems.",
        category: "Sustainability",
        region: "Global",
        badges: ["Energy", "Research", "Climate"],
        icon: "⛰️"
    },
    {
        id: "c40_cities",
        name: "C40 Cities Climate Leadership",
        url: "https://www.c40.org/careers/",
        description: "Global network of cities working on climate resilience and urban sustainability.",
        category: "Sustainability",
        region: "Global",
        badges: ["Cities", "Climate Policy", "Urban"],
        icon: "🏙️"
    },
    {
        id: "global_covenant_mayors",
        name: "Global Covenant of Mayors",
        url: "https://www.globalcovenantofmayors.org/",
        description: "City-level climate action network supporting urban sustainability projects.",
        category: "Sustainability",
        region: "Global",
        badges: ["Cities", "Climate", "Policy"],
        icon: "🌆"
    },
    {
        id: "climate_kic_community",
        name: "Climate-KIC Community Platform",
        url: "https://www.climate-kic.org/",
        description: "EU climate innovation ecosystem linking startups, research, and jobs.",
        category: "Sustainability",
        region: "Europe",
        badges: ["EU", "Startups", "Innovation"],
        icon: "🇪🇺"
    },
    {
        id: "african_carbon_markets",
        name: "African Carbon Markets Initiative (ACMI)",
        url: "https://www.africancarbonmarkets.org/",
        description: "Pan-African initiative scaling voluntary carbon markets and climate finance.",
        category: "Sustainability",
        region: "Africa",
        badges: ["Africa", "Carbon", "Finance"],
        icon: "🌍"
    },
    {
        id: "climate_action_tracker",
        name: "Climate Action Tracker Careers",
        url: "https://climateactiontracker.org/",
        description: "Independent scientific analysis of climate policy and emissions tracking.",
        category: "Sustainability",
        region: "Global",
        badges: ["Data", "Policy", "Science"],
        icon: "📉"
    }
];
