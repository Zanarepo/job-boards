const eventBoards = [
    {
        id: "eventjobsearch",
        name: "Eventjobsearch",
        url: "https://www.eventjobsearch.co.uk/",
        description: "The UK's leading job board for the events industry, from planning to on-site staffing.",
        category: "Events",
        region: "Europe",
        badges: ["UK", "Planning", "Events"],
        icon: "🎟️"
    },
    {
        id: "bizbash_jobs",
        name: "BizBash Jobs",
        url: "https://www.bizbash.com/jobs",
        description: "The premiere resource for event professionals to find planning, coordination, and production roles.",
        category: "Events",
        region: "North America",
        badges: ["USA", "Production", "Planning"],
        icon: "📋"
    },
    {
        id: "event_careers",
        name: "Event Careers",
        url: "https://www.eventcareers.com/",
        description: "Global job board dedicated to the event, meeting, and exhibition industries.",
        category: "Events",
        region: "Global",
        badges: ["Global", "Meetings", "Exhibitions"],
        icon: "🌍"
    },
    {
        id: "instawork_events",
        name: "Instawork (Event Staff)",
        url: "https://www.instawork.com/",
        description: "Flexible work platform for finding event staff, ushering, and hospitality roles instantly.",
        category: "Events",
        region: "North America",
        badges: ["Gig Economy", "Staffing", "USA"],
        icon: "⚡"
    },
    {
        id: "qwick_jobs",
        name: "Qwick",
        url: "https://www.qwick.com/",
        description: "On-demand staffing for hospitality and events, perfect for servers, ushers, and event leads.",
        category: "Events",
        region: "North America",
        badges: ["Hospitality", "On-demand", "USA"],
        icon: "🍴"
    },
    {
        id: "mpi_jobs",
        name: "MPI Career Center",
        url: "https://www.mpi.org/careers",
        description: "Meeting Professionals International job board for high-level event planning and management.",
        category: "Events",
        region: "Global",
        badges: ["Professional", "Meetings", "Global"],
        icon: "🤝"
    },
    {
        id: "backstage_events",
        name: "Backstage (Staff & Crew)",
        url: "https://www.backstage.com/",
        description: "While known for acting, it's a huge hub for finding venue ushers, front-of-house, and event crew.",
        category: "Events",
        region: "Global",
        badges: ["Staff", "Venue", "Front of House"],
        icon: "🎭"
    },
    {
        id: "iavm_jobs",
        name: "IAVM VenueNet",
        url: "https://www.iavm.org/jobs",
        description: "International Association of Venue Managers job board for professional stadium and theater roles.",
        category: "Events",
        region: "Global",
        badges: ["Venues", "Management", "Professional"],
        icon: "🏟️"
    },

    {
        id: "productionhub",
        name: "ProductionHUB",
        url: "https://www.productionhub.com/",
        description: "Global marketplace for event production, AV, staging, lighting, and live event crew roles.",
        category: "Events",
        region: "Global",
        badges: ["Production", "AV", "Live Events"],
        icon: "🎬"
    },
    {
        id: "stagehands_jobs",
        name: "Stagehands.com",
        url: "https://www.stagehands.com/",
        description: "Platform for hiring stage crew, riggers, lighting technicians, and live event staff.",
        category: "Events",
        region: "North America",
        badges: ["Crew", "Technical", "Live Shows"],
        icon: "🔧"
    },
    {
        id: "entertainmentcareers",
        name: "EntertainmentCareers.net",
        url: "https://www.entertainmentcareers.net/",
        description: "Jobs in live entertainment, concerts, festivals, venues, and production companies.",
        category: "Events",
        region: "Global",
        badges: ["Entertainment", "Live Events", "Production"],
        icon: "🎤"
    },
    {
        id: "eventective_jobs",
        name: "Eventective Jobs",
        url: "https://www.eventective.com/jobs/",
        description: "Event planning marketplace connecting venues, planners, and coordinators.",
        category: "Events",
        region: "North America",
        badges: ["Venues", "Planning", "Coordination"],
        icon: "🏛️"
    },
    {
        id: "hireahost_staffing",
        name: "Hire a Host",
        url: "https://www.hireahost.com/",
        description: "Event staffing platform for brand ambassadors, hosts, and promotional staff.",
        category: "Events",
        region: "Global",
        badges: ["Brand Events", "Staffing", "Promotions"],
        icon: "🤵"
    },
    {
        id: "promoter_jobs",
        name: "Event Promoter Jobs",
        url: "https://www.eventpromoterjobs.com/",
        description: "Jobs for nightlife promoters, club event coordinators, and experiential marketing staff.",
        category: "Events",
        region: "Global",
        badges: ["Nightlife", "Marketing", "Promotions"],
        icon: "🎉"
    },
    {
        id: "festival_jobs_board",
        name: "Festival Jobs",
        url: "https://www.festivaljobs.co.uk/",
        description: "Jobs in music festivals, outdoor events, ticketing, and production across Europe.",
        category: "Events",
        region: "Europe",
        badges: ["Festivals", "Music", "Seasonal"],
        icon: "🎪"
    },
    {
        id: "weddingwire_jobs",
        name: "WeddingWire Vendor Jobs",
        url: "https://www.weddingwire.com/",
        description: "Wedding planning and luxury event vendor marketplace with job opportunities.",
        category: "Events",
        region: "Global",
        badges: ["Weddings", "Luxury", "Planning"],
        icon: "💍"
    },
    {
        id: "thevendry_jobs",
        name: "The Vendry",
        url: "https://www.thevendry.com/",
        description: "Platform for corporate event planning, experiential marketing, and venue sourcing jobs.",
        category: "Events",
        region: "Global",
        badges: ["Corporate", "Experiential", "Venues"],
        icon: "🏢"
    },
    {
        id: "eventex_jobs",
        name: "Eventex Careers",
        url: "https://eventex.co/jobs/",
        description: "Global awards and event industry platform with curated high-end event roles.",
        category: "Events",
        region: "Global",
        badges: ["Elite", "Awards", "Events"],
        icon: "🏆"
    },
    {
        id: "crewgo_staffing",
        name: "CrewGO",
        url: "https://www.crewgo.com/",
        description: "On-demand staffing platform for event crews, hospitality, and live production support.",
        category: "Events",
        region: "Global",
        badges: ["Gig Work", "Crew", "Events"],
        icon: "🚚"
    },
    {
        id: "liveforce_events",
        name: "Liveforce",
        url: "https://www.liveforce.co.uk/",
        description: "UK-based staffing platform for events, promotions, and brand activations.",
        category: "Events",
        region: "Europe",
        badges: ["UK", "Staffing", "Brand Activations"],
        icon: "📡"
    },

    {
        id: "aeg_presents_careers",
        name: "AEG Presents Careers",
        url: "https://www.aegworldwide.com/careers",
        description: "Major global live entertainment company hiring for concerts, festivals, and venue operations roles.",
        category: "Events",
        region: "Global",
        badges: ["Concerts", "Venues", "Live Entertainment"],
        icon: "🎤"
    },
    {
        id: "live_nation_careers",
        name: "Live Nation Careers",
        url: "https://livenation.wd1.myworkdayjobs.com/",
        description: "One of the largest global concert and festival operators hiring across production, logistics, and marketing.",
        category: "Events",
        region: "Global",
        badges: ["Festivals", "Concerts", "Production"],
        icon: "🎶"
    },
    {
        id: "ces_careers",
        name: "CES Careers",
        url: "https://www.ces.tech/",
        description: "Tech event ecosystem hiring roles for large-scale conference production and operations.",
        category: "Events",
        region: "North America",
        badges: ["Conferences", "Tech Events", "Production"],
        icon: "💡"
    },
    {
        id: "smg_venues_careers",
        name: "SMG Venue Management",
        url: "https://www.smgworld.com/careers",
        description: "Global venue management company hiring stadium, arena, and event operations staff.",
        category: "Events",
        region: "Global",
        badges: ["Venues", "Stadiums", "Operations"],
        icon: "🏟️"
    },
    {
        id: "eventbrite_organizer_jobs",
        name: "Eventbrite Organizer Ecosystem",
        url: "https://www.eventbrite.com/",
        description: "Event creation ecosystem where organizers often hire planners, marketers, and coordinators.",
        category: "Events",
        region: "Global",
        badges: ["Ticketing", "Organizers", "Events"],
        icon: "🎫"
    },
    {
        id: "meetup_professionals",
        name: "Meetup Pro Jobs",
        url: "https://www.meetup.com/pro/",
        description: "Community event platform used by organizers hiring coordinators and community managers.",
        category: "Events",
        region: "Global",
        badges: ["Community", "Networking", "Events"],
        icon: "🤝"
    },
    {
        id: "freeman_company_jobs",
        name: "Freeman Company Careers",
        url: "https://www.freeman.com/careers",
        description: "One of the largest global event production and exhibition companies hiring technical and creative staff.",
        category: "Events",
        region: "Global",
        badges: ["Exhibitions", "Production", "Enterprise"],
        icon: "🏗️"
    },
    {
        id: "gavel_careers_events",
        name: "Gavel Event Staffing",
        url: "https://www.gavelintl.com/",
        description: "Global staffing agency for corporate events, conferences, and exhibitions.",
        category: "Events",
        region: "Global",
        badges: ["Staffing", "Corporate", "Exhibitions"],
        icon: "🧑‍💼"
    },
    {
        id: "on_location_events",
        name: "On Location Experiences",
        url: "https://onlocationexp.com/",
        description: "Premium hospitality and VIP event experiences hiring event coordinators and logistics staff.",
        category: "Events",
        region: "Global",
        badges: ["VIP", "Hospitality", "Luxury Events"],
        icon: "🏨"
    },
    {
        id: "prg_event_services",
        name: "PRG (Production Resource Group)",
        url: "https://www.prg.com/",
        description: "Global leader in live event production, lighting, staging, and broadcast event tech hiring.",
        category: "Events",
        region: "Global",
        badges: ["Production", "Lighting", "Broadcast"],
        icon: "💡"
    },
    {
        id: "expo_group_jobs",
        name: "Expo Group Careers",
        url: "https://www.theexpogroup.com/",
        description: "Exhibition and trade show production company hiring event designers and coordinators.",
        category: "Events",
        region: "Global",
        badges: ["Exhibitions", "Design", "Trade Shows"],
        icon: "📦"
    },
    {
        id: "freelance_event_staff_africa",
        name: "Event Staffing Africa (Emerging Networks)",
        url: "https://www.google.com/search?q=event+staffing+agencies+africa",
        description: "Regional staffing ecosystem connecting event crews, ushers, and hospitality staff across Africa.",
        category: "Events",
        region: "Africa",
        badges: ["Africa", "Gig Work", "Emerging"],
        icon: "🌍"
    },

    {
        id: "eventful_africa",
        name: "Eventful Nigeria",
        url: "https://eventfulnigeria.com/",
        description: "Event management and planning company frequently hiring ushers, coordinators, and event crew.",
        category: "Events",
        region: "Africa",
        badges: ["Nigeria", "Events", "Staffing"],
        icon: "🎉"
    },

];
