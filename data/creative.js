const creativeBoards = [
    // GAMING
    {
        id: "hitmarker",
        name: "Hitmarker",
        url: "https://hitmarker.net/",
        description: "The largest job board for the gaming and esports industry, covering everything from dev to marketing.",
        category: "Gaming",
        region: "Global",
        badges: ["Gaming", "Esports", "Global"],
        icon: "🎮"
    },
    {
        id: "gamesjobsdirect",
        name: "GamesJobsDirect",
        url: "https://www.gamesjobsdirect.com/",
        description: "Specialized job portal for the global video game industry, including AAA and indie studios.",
        category: "Gaming",
        region: "Global",
        badges: ["Game Dev", "Indie", "AAA"],
        icon: "🕹️"
    },
    {
        id: "work_in_games",
        name: "Work in Games",
        url: "https://workingames.com/",
        description: "Connecting talented individuals with the best career opportunities in the gaming sector.",
        category: "Gaming",
        region: "Europe",
        badges: ["UK", "Game Dev", "Europe"],
        icon: "🎯"
    },
    {
        id: "gamedev_jobs",
        name: "Game Dev Jobs",
        url: "https://gamedevjob.eu/",
        description: "Curated job board for game developers, artists, and designers in the European gaming industry.",
        category: "Gaming",
        region: "Europe",
        badges: ["Development", "Art", "Europe"],
        icon: "👾"
    },
    // CREATIVE & DESIGN
    {
        id: "behance",
        name: "Behance Jobs",
        url: "https://www.behance.net/joblist",
        description: "Adobe's premiere creative network, featuring high-end roles in design, illustration, and photography.",
        category: "Creative",
        region: "Global",
        badges: ["Design", "Art", "Adobe"],
        icon: "🎨"
    },
    {
        id: "dribbble",
        name: "Dribbble Jobs",
        url: "https://dribbble.com/jobs",
        description: "The go-to platform for digital designers and UI/UX professionals to find their next gig.",
        category: "Creative",
        region: "Global",
        badges: ["UI/UX", "Product Design", "Global"],
        icon: "🏀"
    },
    {
        id: "the_dots",
        name: "The Dots",
        url: "https://the-dots.com/",
        description: "A professional network for the creative industries, from advertising to fashion and film.",
        category: "Creative",
        region: "Europe",
        badges: ["Creative", "Networking", "UK"],
        icon: "🌑"
    },
    {
        id: "creativepool",
        name: "Creativepool",
        url: "https://creativepool.com/jobs/",
        description: "Global network for the creative industry, connecting agencies and brands with top talent.",
        category: "Creative",
        region: "Global",
        badges: ["Agency", "Design", "Global"],
        icon: "🏊"
    },
    {
        id: "working_not_working",
        name: "Working Not Working",
        url: "https://workingnotworking.com/",
        description: "An elite curated network of the world's best creative talent and opportunities.",
        category: "Creative",
        region: "Global",
        badges: ["Elite", "Curated", "Design"],
        icon: "💼"
    },

    {
        id: "artstation_jobs",
        name: "ArtStation Jobs",
        url: "https://www.artstation.com/jobs",
        description: "Top job board for concept artists, 3D artists, VFX and game art professionals.",
        category: "Creative",
        region: "Global",
        badges: ["3D Art", "Game Art", "VFX"],
        icon: "🖼️"
    },
    {
        id: "polycount",
        name: "Polycount Jobs",
        url: "https://polycount.com/",
        description: "Community-driven hub for game artists and 3D professionals with job postings and portfolio reviews.",
        category: "Gaming",
        region: "Global",
        badges: ["Game Art", "3D", "Community"],
        icon: "🧩"
    },
    {
        id: "stash_gaming_jobs",
        name: "Stash (Game Dev Jobs)",
        url: "https://www.stash.com/jobs",
        description: "Job board and resource hub for game developers, designers, and interactive media creators.",
        category: "Gaming",
        region: "Global",
        badges: ["Game Dev", "Interactive", "Design"],
        icon: "🎲"
    },
    {
        id: "sidefx_jobs",
        name: "SideFX Jobs (Houdini)",
        url: "https://www.sidefx.com/jobs/",
        description: "VFX and procedural 3D industry jobs centered around Houdini software.",
        category: "Creative",
        region: "Global",
        badges: ["VFX", "3D", "Film"],
        icon: "💥"
    },
    {
        id: "vfx_jobs_board",
        name: "VFX Jobs Board",
        url: "https://www.vfxjobs.com/",
        description: "Dedicated job board for visual effects, animation, and post-production industries.",
        category: "Creative",
        region: "Global",
        badges: ["VFX", "Animation", "Film"],
        icon: "🎬"
    },
    {
        id: "animation_cafe_jobs",
        name: "Animation Cafe Jobs",
        url: "https://animationcafe.com/jobs/",
        description: "Job listings for animation studios, motion graphics, and character animation roles.",
        category: "Creative",
        region: "Global",
        badges: ["Animation", "Motion Graphics", "Film"],
        icon: "🎞️"
    },
    {
        id: "motionographer_jobs",
        name: "Motionographer Jobs",
        url: "https://motionographer.com/jobs/",
        description: "Creative hub for motion design, animation, and digital storytelling careers.",
        category: "Creative",
        region: "Global",
        badges: ["Motion Design", "Creative", "Media"],
        icon: "🎥"
    },
    {
        id: "production_hub",
        name: "ProductionHUB",
        url: "https://www.productionhub.com/jobs",
        description: "Global marketplace for film, TV, video production, and creative services.",
        category: "Creative",
        region: "Global",
        badges: ["Film", "TV", "Production"],
        icon: "🎦"
    },
    {
        id: "designjobs_board",
        name: "DesignJobs Board",
        url: "https://designjobs.aiga.org/",
        description: "AIGA-backed job board for professional designers across all disciplines.",
        category: "Creative",
        region: "Global",
        badges: ["Design", "UI/UX", "Professional"],
        icon: "✏️"
    },
    {
        id: "crew_network",
        name: "Crew (Design Network)",
        url: "https://crew.co/",
        description: "Curated network connecting top designers with vetted startups and companies.",
        category: "Creative",
        region: "Global",
        badges: ["Design", "Startups", "Curated"],
        icon: "🧑‍🎨"
    },
    {
        id: "weworkremotely_creative",
        name: "We Work Remotely (Creative)",
        url: "https://weworkremotely.com/categories/remote-design-jobs",
        description: "Large remote job board with a strong creative, design, and marketing section.",
        category: "Creative",
        region: "Global",
        badges: ["Remote", "Design", "Global"],
        icon: "🌐"
    },
    {
        id: "remotive_design",
        name: "Remotive (Design Jobs)",
        url: "https://remotive.com/",
        description: "Remote-first job board with strong creative, design, and product roles.",
        category: "Creative",
        region: "Global",
        badges: ["Remote", "Design", "Tech"],
        icon: "🚀"
    },

    {
        id: "aiga_design_jobs",
        name: "AIGA Design Jobs",
        url: "https://designjobs.aiga.org/",
        description: "Professional association job board for designers in branding, UX, and visual communication.",
        category: "Creative",
        region: "Global",
        badges: ["Design", "UX", "Professional"],
        icon: "🧭"
    },
    {
        id: "designhill_jobs",
        name: "Designhill Jobs",
        url: "https://www.designhill.com/jobs",
        description: "Global marketplace for freelance and full-time design work across branding and illustration.",
        category: "Creative",
        region: "Global",
        badges: ["Design", "Freelance", "Branding"],
        icon: "🎨"
    },
    {
        id: "toonboom_jobs",
        name: "Toon Boom Careers",
        url: "https://www.toonboom.com/careers",
        description: "Animation industry job hub for 2D/3D animators and production studios.",
        category: "Creative",
        region: "Global",
        badges: ["Animation", "2D", "3D"],
        icon: "🎞️"
    },
    {
        id: "animation_world_network",
        name: "Animation World Network Jobs",
        url: "https://www.awn.com/jobs",
        description: "Major animation and VFX job board covering studios worldwide.",
        category: "Creative",
        region: "Global",
        badges: ["Animation", "VFX", "Film"],
        icon: "🌍"
    },
    {
        id: "starnow_creative",
        name: "StarNow",
        url: "https://www.starnow.com/",
        description: "Casting and creative jobs for actors, filmmakers, models, and performers.",
        category: "Creative",
        region: "Global",
        badges: ["Casting", "Film", "Talent"],
        icon: "🎭"
    },
    {
        id: "mandy_creative_media",
        name: "Mandy Network (Film & Media)",
        url: "https://www.mandy.com/",
        description: "Global platform for film, TV, theatre, and media production roles.",
        category: "Creative",
        region: "Global",
        badges: ["Film", "TV", "Media"],
        icon: "🎬"
    },
    {
        id: "vimeo_staff_jobs",
        name: "Vimeo Careers",
        url: "https://www.vimeo.com/jobs",
        description: "Creative video platform hiring engineers, designers, and media professionals.",
        category: "Creative",
        region: "Global",
        badges: ["Video", "Creative Tech", "Media"],
        icon: "📹"
    },
    {
        id: "unity_jobs",
        name: "Unity Careers",
        url: "https://unity.com/careers",
        description: "Game engine company hiring developers, designers, and graphics engineers.",
        category: "Gaming",
        region: "Global",
        badges: ["Game Engine", "Dev", "AAA"],
        icon: "🧠"
    },
    {
        id: "epic_games_jobs",
        name: "Epic Games Careers",
        url: "https://www.epicgames.com/site/en-US/careers",
        description: "Fortnite and Unreal Engine company hiring across game dev and creative tech.",
        category: "Gaming",
        region: "Global",
        badges: ["Unreal Engine", "AAA", "Tech"],
        icon: "🔥"
    },
    {
        id: "riot_games_jobs",
        name: "Riot Games Careers",
        url: "https://www.riotgames.com/en/work-with-us",
        description: "Global esports and game development company behind League of Legends.",
        category: "Gaming",
        region: "Global",
        badges: ["Esports", "AAA", "Gaming"],
        icon: "⚔️"
    },
    {
        id: "blizzard_jobs",
        name: "Blizzard Entertainment Careers",
        url: "https://careers.blizzard.com/",
        description: "Major AAA game studio hiring across design, engineering, and production.",
        category: "Gaming",
        region: "Global",
        badges: ["AAA", "Game Dev", "Esports"],
        icon: "❄️"
    },
    {
        id: "activision_jobs",
        name: "Activision Careers",
        url: "https://careers.activision.com/",
        description: "Large-scale game publisher hiring across global AAA franchises.",
        category: "Gaming",
        region: "Global",
        badges: ["AAA", "Publishing", "Gaming"],
        icon: "🎯"
    },
    {
        id: "netflix_animation_jobs",
        name: "Netflix Animation Careers",
        url: "https://jobs.netflix.com/",
        description: "Streaming giant hiring for animation, film, and game-adjacent creative roles.",
        category: "Creative",
        region: "Global",
        badges: ["Animation", "Film", "Streaming"],
        icon: "📺"
    }
];
