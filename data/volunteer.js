const volunteerBoards = [
    {
        id: "volunteermatch",
        name: "VolunteerMatch",
        url: "https://www.volunteermatch.org/",
        description: "The most effective way to recruit highly qualified volunteers for your nonprofit organization.",
        category: "Volunteer",
        region: "Global",
        badges: ["Volunteer", "Nonprofit", "Global"],
        icon: "🤝"
    },
    {
        id: "catchafire",
        name: "Catchafire",
        url: "https://www.catchafire.org/",
        description: "Skill-based volunteering platform that matches professionals with nonprofits that need their expertise.",
        category: "Volunteer",
        region: "Global",
        badges: ["Skill-based", "Pro Bono", "Impact"],
        icon: "🔥"
    },

    {
        id: "idealistextra",
        name: "Idealist Volunteer Hub",
        url: "https://www.idealist.org/en/volunteer",
        description: "Global platform for volunteering, internships, and nonprofit opportunities.",
        category: "Volunteer",
        region: "Global",
        badges: ["Volunteer", "Nonprofit", "Global"],
        icon: "🌍"
    },
    {
        id: "allforgood",
        name: "All For Good",
        url: "https://www.allforgood.org/",
        description: "Volunteer opportunity aggregator connecting people with local and global causes.",
        category: "Volunteer",
        region: "North America",
        badges: ["Volunteer", "Local", "Community"],
        icon: "🌱"
    },
    {
        id: "unvolunteer",
        name: "UN Volunteers",
        url: "https://www.unv.org/",
        description: "United Nations volunteer program for global peace, development, and humanitarian work.",
        category: "Volunteer",
        region: "Global",
        badges: ["UN", "Global", "Humanitarian"],
        icon: "🕊️"
    },
    {
        id: "peacecorps",
        name: "Peace Corps",
        url: "https://www.peacecorps.gov/",
        description: "US government international volunteer program focused on education, health, and development.",
        category: "Volunteer",
        region: "Global",
        badges: ["US Government", "International", "Development"],
        icon: "✈️"
    },
    {
        id: "gvi",
        name: "GVI (Global Vision International)",
        url: "https://www.gviusa.com/",
        description: "International volunteer programs in conservation, education, and community development.",
        category: "Volunteer",
        region: "Global",
        badges: ["Conservation", "Education", "Impact"],
        icon: "🌿"
    },
    {
        id: "projectsabroad",
        name: "Projects Abroad",
        url: "https://www.projects-abroad.org/",
        description: "Global volunteer abroad programs in healthcare, teaching, and conservation.",
        category: "Volunteer",
        region: "Global",
        badges: ["Travel", "Volunteer", "Education"],
        icon: "🌎"
    },
    {
        id: "ivhq",
        name: "IVHQ (International Volunteer HQ)",
        url: "https://www.volunteerhq.org/",
        description: "One of the largest volunteer travel organizations offering global programs.",
        category: "Volunteer",
        region: "Global",
        badges: ["Travel", "Volunteer", "Global"],
        icon: "🎒"
    },
    {
        id: "workaway",
        name: "Workaway",
        url: "https://www.workaway.info/",
        description: "Cultural exchange platform where volunteers work in exchange for accommodation.",
        category: "Volunteer",
        region: "Global",
        badges: ["Exchange", "Travel", "Cultural"],
        icon: "🏡"
    },
    {
        id: "worldpackers",
        name: "Worldpackers",
        url: "https://www.worldpackers.com/",
        description: "Volunteer travel platform connecting travelers with hosts worldwide.",
        category: "Volunteer",
        region: "Global",
        badges: ["Travel", "Exchange", "Community"],
        icon: "🌏"
    },
    {
        id: "helpx",
        name: "HelpX",
        url: "https://www.helpx.net/",
        description: "Volunteer exchange platform for farm, hostel, and eco-project work.",
        category: "Volunteer",
        region: "Global",
        badges: ["Eco", "Travel", "Exchange"],
        icon: "🌾"
    },
    {
        id: "zazumap",
        name: "Zazu Map Volunteering",
        url: "https://www.zazumap.com/",
        description: "Volunteer mapping and local impact platform for community projects.",
        category: "Volunteer",
        region: "Global",
        badges: ["Community", "Mapping", "Local"],
        icon: "🗺️"
    },
    {
        id: "doit",
        name: "Do-it.org",
        url: "https://doit.life/",
        description: "UK-based volunteer platform connecting people with local charities and causes.",
        category: "Volunteer",
        region: "Europe",
        badges: ["UK", "Community", "Volunteer"],
        icon: "🇬🇧"
    },
    {
        id: "volunteerworld",
        name: "Volunteer World",
        url: "https://www.volunteerworld.com/",
        description: "International volunteer abroad marketplace for social and environmental projects.",
        category: "Volunteer",
        region: "Global",
        badges: ["Travel", "Impact", "Global"],
        icon: "🌍"
    },
    {
        id: "helpstay",
        name: "HelpStay",
        url: "https://www.helpx.net/",
        description: "Volunteer exchange platform for cultural immersion and travel experiences.",
        category: "Volunteer",
        region: "Global",
        badges: ["Travel", "Exchange", "Culture"],
        icon: "🧳"
    },
    {
        id: "hippohelp",
        name: "Hippohelp",
        url: "https://hippohelp.com/",
        description: "Map-based volunteer exchange platform for travelers and hosts.",
        category: "Volunteer",
        region: "Global",
        badges: ["Travel", "Map", "Exchange"],
        icon: "🦛"
    },
    {
        id: "betterplace",
        name: "Betterplace.org",
        url: "https://www.betterplace.org/",
        description: "Germany’s largest donation and volunteer platform connecting people with social projects.",
        category: "Volunteer",
        region: "Europe",
        badges: ["Germany", "NGO", "Community"],
        icon: "🇩🇪"
    },
    {
        id: "volunteeringaustralia",
        name: "GoVolunteer Australia",
        url: "https://govolunteer.com.au/",
        description: "Australia’s national volunteer matching platform for community and nonprofit work.",
        category: "Volunteer",
        region: "Oceania",
        badges: ["Australia", "Community", "Volunteer"],
        icon: "🇦🇺"
    },
    {
        id: "mycva",
        name: "MyCVA",
        url: "https://www.mycva.org.uk/",
        description: "UK-based platform connecting volunteers with charities and local community programs.",
        category: "Volunteer",
        region: "Europe",
        badges: ["UK", "Charity", "Local"],
        icon: "🇬🇧"
    },
    {
        id: "vso",
        name: "VSO (Voluntary Service Overseas)",
        url: "https://www.vsointernational.org/",
        description: "International development volunteering organization focused on education and health.",
        category: "Volunteer",
        region: "Global",
        badges: ["Development", "Education", "Health"],
        icon: "🌍"
    },
    {
        id: "tearfund",
        name: "Tearfund Volunteering",
        url: "https://www.tearfund.org/",
        description: "Faith-based global NGO offering volunteer opportunities in humanitarian work.",
        category: "Volunteer",
        region: "Global",
        badges: ["Humanitarian", "NGO", "Faith-based"],
        icon: "✝️"
    },
    {
        id: "redcrossvolunteer",
        name: "Red Cross Volunteering",
        url: "https://www.redcross.org/volunteer",
        description: "Global Red Cross volunteer programs in disaster relief and community support.",
        category: "Volunteer",
        region: "Global",
        badges: ["Disaster Relief", "Humanitarian", "Global"],
        icon: "➕"
    },
    {
        id: "unicefvolunteer",
        name: "UNICEF Volunteer Programs",
        url: "https://www.unicef.org/participate/volunteer",
        description: "Global volunteering and advocacy opportunities for children's welfare.",
        category: "Volunteer",
        region: "Global",
        badges: ["UN", "Children", "Advocacy"],
        icon: "🧒"
    },
    {
        id: "habitatforhumanity",
        name: "Habitat for Humanity",
        url: "https://www.habitat.org/volunteer",
        description: "Global housing nonprofit offering construction and community volunteering programs.",
        category: "Volunteer",
        region: "Global",
        badges: ["Housing", "Construction", "Community"],
        icon: "🏠"
    },
    {
        id: "idealistschools",
        name: "Idealist Education Volunteering",
        url: "https://www.idealist.org/en/volunteer",
        description: "Education-focused volunteer opportunities worldwide via Idealist network.",
        category: "Volunteer",
        region: "Global",
        badges: ["Education", "NGO", "Students"],
        icon: "📚"
    },
    {
        id: "sparked",
        name: "Sparked Online Volunteering",
        url: "https://www.sparked.com/",
        description: "Micro-volunteering platform for digital tasks supporting nonprofits.",
        category: "Volunteer",
        region: "Global",
        badges: ["Micro-volunteering", "Online", "NGO"],
        icon: "⚡"
    },
    {
        id: "zooniverse",
        name: "Zooniverse",
        url: "https://www.zooniverse.org/",
        description: "Citizen science volunteering platform for research and data classification projects.",
        category: "Volunteer",
        region: "Global",
        badges: ["Science", "Research", "Citizen Science"],
        icon: "🔬"
    },
    {
        id: "unonlinevolunteer",
        name: "UN Online Volunteering",
        url: "https://www.onlinevolunteering.org/",
        description: "United Nations platform for remote digital volunteering with NGOs globally.",
        category: "Volunteer",
        region: "Global",
        badges: ["UN", "Remote", "Digital"],
        icon: "💻"
    },
    {
        id: "catchafireextra",
        name: "Catchafire Pro Bono Hub",
        url: "https://www.catchafire.org/",
        description: "Skill-based volunteering matching professionals with nonprofit projects.",
        category: "Volunteer",
        region: "Global",
        badges: ["Skills", "Pro Bono", "Impact"],
        icon: "🔥"
    },

    {
        id: "europa_youth_portal",
        name: "European Youth Portal Volunteering",
        url: "https://youth.europa.eu/volunteering_en",
        description: "Official EU portal for European Solidarity Corps volunteering opportunities.",
        category: "Volunteer",
        region: "Europe",
        badges: ["EU", "Youth", "Official"],
        icon: "🇪🇺"
    },
    {
        id: "solidarity_corps",
        name: "European Solidarity Corps",
        url: "https://europa.eu/youth/solidarity_en",
        description: "EU-funded volunteering and humanitarian projects for young people across Europe.",
        category: "Volunteer",
        region: "Europe",
        badges: ["EU", "Youth", "Humanitarian"],
        icon: "🤝"
    },
    {
        id: "volunteermatch_uk",
        name: "NCVO Volunteer Now (UK)",
        url: "https://www.ncvo.org.uk/ncvo-volunteering/",
        description: "UK national volunteering infrastructure connecting citizens with charities.",
        category: "Volunteer",
        region: "Europe",
        badges: ["UK", "Charity", "National"],
        icon: "🇬🇧"
    },
    {
        id: "gov_nz_volunteer",
        name: "Volunteering New Zealand",
        url: "https://www.volunteeringnz.org.nz/",
        description: "New Zealand’s national volunteer coordination platform.",
        category: "Volunteer",
        region: "Oceania",
        badges: ["NZ", "Community", "National"],
        icon: "🇳🇿"
    },
    {
        id: "canada_volunteer",
        name: "Volunteer Canada",
        url: "https://volunteer.ca/",
        description: "National organization supporting volunteerism across Canada.",
        category: "Volunteer",
        region: "North America",
        badges: ["Canada", "National", "Community"],
        icon: "🇨🇦"
    },
    {
        id: "aus_government_volunteer",
        name: "GoVolunteer Australia (Gov Portal)",
        url: "https://www.volunteeringaustralia.org/",
        description: "National volunteering infrastructure supporting Australian NGOs and communities.",
        category: "Volunteer",
        region: "Oceania",
        badges: ["Australia", "National", "NGO"],
        icon: "🇦🇺"
    },
    {
        id: "points_of_light",
        name: "Points of Light",
        url: "https://www.pointsoflight.org/",
        description: "US-based global volunteer network promoting civic engagement and service.",
        category: "Volunteer",
        region: "North America",
        badges: ["USA", "Civic", "Community"],
        icon: "✨"
    },
    {
        id: "hands_on_network",
        name: "HandsOn Network",
        url: "https://www.pointsoflight.org/hands-on/",
        description: "Local volunteer action network under Points of Light for community service.",
        category: "Volunteer",
        region: "Global",
        badges: ["Community", "Local", "Service"],
        icon: "🙌"
    },
    {
        id: "idealist_europe",
        name: "Idealist Europe Volunteer Hub",
        url: "https://www.idealist.org/",
        description: "European and global nonprofit volunteering opportunities.",
        category: "Volunteer",
        region: "Europe",
        badges: ["NGO", "Europe", "Impact"],
        icon: "🌍"
    },
    {
        id: "alliance_volunteer",
        name: "Alliance of European Voluntary Service Organisations",
        url: "https://www.alliance-network.eu/",
        description: "European network of youth volunteering organizations and exchanges.",
        category: "Volunteer",
        region: "Europe",
        badges: ["Youth", "Exchange", "EU"],
        icon: "🌐"
    },
    {
        id: "peace_corps_response",
        name: "Peace Corps Response",
        url: "https://www.peacecorps.gov/volunteer/peace-corps-response/",
        description: "Short-term high-skill volunteer assignments for experienced professionals.",
        category: "Volunteer",
        region: "Global",
        badges: ["Expert", "Development", "US"],
        icon: "⚡"
    },
    {
        id: "volunteer_scotland",
        name: "Volunteer Scotland",
        url: "https://www.volunteerscotland.net/",
        description: "National volunteering platform for Scotland-based community projects.",
        category: "Volunteer",
        region: "Europe",
        badges: ["Scotland", "National", "Community"],
        icon: "🏴"
    },

    {
        id: "do_it_uk_extra",
        name: "Do It UK Expanded Network",
        url: "https://doit.life/",
        description: "UK-wide volunteering discovery platform connecting people to local charities and community projects.",
        category: "Volunteer",
        region: "Europe",
        badges: ["UK", "Community", "Charity"],
        icon: "🇬🇧"
    },
    {
        id: "new_york_cares",
        name: "New York Cares",
        url: "https://www.newyorkcares.org/",
        description: "Largest volunteer organization in New York City connecting residents with local service projects.",
        category: "Volunteer",
        region: "North America",
        badges: ["USA", "City-Based", "Community"],
        icon: "🗽"
    },
    {
        id: "la_volunteers",
        name: "LA Works",
        url: "https://www.laworks.com/",
        description: "Official Los Angeles volunteer matching platform for civic and nonprofit work.",
        category: "Volunteer",
        region: "North America",
        badges: ["USA", "City-Based", "Civic"],
        icon: "🌴"
    },
    {
        id: "sf_volunteers",
        name: "San Francisco Volunteers",
        url: "https://www.sf.gov/volunteer",
        description: "City-run volunteer portal for public service and nonprofit opportunities in San Francisco.",
        category: "Volunteer",
        region: "North America",
        badges: ["USA", "City Government", "Civic"],
        icon: "🌉"
    },
    {
        id: "toronto_volunteers",
        name: "Volunteer Toronto",
        url: "https://www.volunteertoronto.ca/",
        description: "Central hub for volunteering opportunities in Toronto and surrounding communities.",
        category: "Volunteer",
        region: "North America",
        badges: ["Canada", "City-Based", "Community"],
        icon: "🇨🇦"
    },
    {
        id: "paris_volunteering",
        name: "JeVeuxAider (France Volunteer Platform)",
        url: "https://www.jeveuxaider.gouv.fr/",
        description: "Official French government volunteering platform connecting citizens to civic missions.",
        category: "Volunteer",
        region: "Europe",
        badges: ["France", "Government", "Civic"],
        icon: "🇫🇷"
    },
    {
        id: "berlin_volunteer",
        name: "Berlin Volunteer Center",
        url: "https://www.berlin.de/buergeraktiv/",
        description: "Berlin civic engagement platform for volunteering in local community projects.",
        category: "Volunteer",
        region: "Europe",
        badges: ["Germany", "City-Based", "Community"],
        icon: "🇩🇪"
    },
    {
        id: "rotary_volunteer",
        name: "Rotary International Volunteer Programs",
        url: "https://www.rotary.org/en/our-programs",
        description: "Global humanitarian volunteer network focused on education, health, and peace initiatives.",
        category: "Volunteer",
        region: "Global",
        badges: ["Humanitarian", "Global", "Service"],
        icon: "🔄"
    },
    {
        id: "lions_club",
        name: "Lions Clubs International",
        url: "https://www.lionsclubs.org/en",
        description: "Global volunteer service organization focused on community development and sight programs.",
        category: "Volunteer",
        region: "Global",
        badges: ["Community", "Global", "Service"],
        icon: "🦁"
    },
    {
        id: "habitat_local_chapters",
        name: "Habitat Local Chapters Portal",
        url: "https://www.habitat.org/",
        description: "Local volunteer housing construction chapters across multiple countries.",
        category: "Volunteer",
        region: "Global",
        badges: ["Housing", "Construction", "Community"],
        icon: "🏠"
    },
];
