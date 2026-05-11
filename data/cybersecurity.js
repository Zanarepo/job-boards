const cybersecurityBoards = [
    {
        id: "cybersn",
        name: "CyberSN",
        url: "https://www.cybersn.com/",
        description: "The largest cybersecurity job network, specializing in matching talent with specific security roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Security", "Elite", "High Pay"],
        icon: "🔒"
    },
    {
        id: "hackerone_jobs",
        name: "HackerOne Careers",
        url: "https://www.hackerone.com/careers",
        description: "Join the leader in bug bounties and vulnerability coordination. Perfect for ethical hackers.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Ethical Hacking", "Remote", "Global"],
        icon: "🛡️"
    },
    {
        id: "cybersec_jobs",
        name: "CyberSecurityJobsite",
        url: "https://www.cybersecurityjobsite.com/",
        description: "Dedicated recruitment portal for the cybersecurity industry across the UK and Europe.",
        category: "Cybersecurity",
        region: "Europe",
        badges: ["UK", "Security", "Europe"],
        icon: "🇬🇧"
    },
    {
        id: "clearancejobs",
        name: "ClearanceJobs",
        url: "https://www.clearancejobs.com/",
        description: "The largest security-cleared career network, focusing on government and defense cybersecurity.",
        category: "Cybersecurity",
        region: "North America",
        badges: ["Security Clearance", "Government", "USA"],
        icon: "🗝️"
    },
    {
        id: "ninjajobs",
        name: "NinjaJobs",
        url: "https://ninjajobs.org/",
        description: "A community-driven cybersecurity job board run by security professionals for security professionals.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Community", "Security", "Global"],
        icon: "🥷"
    },
    {
        id: "infosec_jobs",
        name: "InfoSec Jobs",
        url: "https://infosec-jobs.com/",
        description: "Specialized platform for information security, privacy, and compliance roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Privacy", "Compliance", "Security"],
        icon: "📑"
    },

    {
        id: "remote_cyber_jobs",
        name: "Remote Cyber Jobs",
        url: "https://remotecyberjobs.com/",
        description: "Curated remote cybersecurity roles across SOC, cloud security, and penetration testing.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Remote", "SOC", "Cloud Security"],
        icon: "🌐"
    },
    {
        id: "darkreading_jobs",
        name: "Dark Reading Jobs",
        url: "https://jobs.darkreading.com/",
        description: "Cybersecurity industry job board tied to one of the largest security news platforms.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Security News", "Enterprise", "Global"],
        icon: "📰"
    },
    {
        id: "cybersecurity_vacancies",
        name: "CyberSecurity Vacancies",
        url: "https://www.cybersecurityjobboard.com/",
        description: "General global cybersecurity job board covering SOC, GRC, pentesting, and cloud security.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["SOC", "GRC", "Pentesting"],
        icon: "🔐"
    },
    {
        id: "zerodevsec_jobs",
        name: "ZeroSec Jobs",
        url: "https://www.zerodevsec.com/jobs",
        description: "Platform focused on zero-trust, application security, and secure development roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["AppSec", "Zero Trust", "DevSecOps"],
        icon: "🧬"
    },
    {
        id: "defcon_jobs",
        name: "DEF CON Groups Jobs",
        url: "https://www.defcon.org/",
        description: "Community-driven security network tied to DEF CON hacker ecosystem and events.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Hacking", "Community", "Research"],
        icon: "☠️"
    },
    {
        id: "sans_jobs",
        name: "SANS Institute Careers",
        url: "https://www.sans.org/careers/",
        description: "Leading cybersecurity training institute with job pathways in enterprise security.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Training", "Enterprise", "Security"],
        icon: "🎓"
    },
    {
        id: "isc2_jobs",
        name: "(ISC)² Career Center",
        url: "https://www.isc2.org/Jobs",
        description: "Global cybersecurity certification body offering job listings for certified professionals.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Certification", "Enterprise", "Security"],
        icon: "📜"
    },
    {
        id: "cyber_defense_mag_jobs",
        name: "Cyber Defense Magazine Jobs",
        url: "https://www.cyberdefensemagazine.com/jobs/",
        description: "Cybersecurity publication job board focused on enterprise security vendors.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Enterprise", "Security Vendors", "Global"],
        icon: "🛡️"
    },
    {
        id: "bugcrowd_careers",
        name: "Bugcrowd Careers",
        url: "https://www.bugcrowd.com/careers/",
        description: "Bug bounty platform hiring ethical hackers and security researchers.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Bug Bounty", "Ethical Hacking", "Remote"],
        icon: "🐛"
    },
    {
        id: "intigriti_jobs",
        name: "Intigriti Careers",
        url: "https://www.intigriti.com/jobs",
        description: "European bug bounty and vulnerability disclosure platform careers.",
        category: "Cybersecurity",
        region: "Europe",
        badges: ["Bug Bounty", "Europe", "Security"],
        icon: "🧪"
    },
    {
        id: "synack_careers",
        name: "Synack Careers",
        url: "https://www.synack.com/careers/",
        description: "Crowdsourced penetration testing platform hiring elite security researchers.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Pentesting", "Elite", "Research"],
        icon: "🕵️"
    },
    {
        id: "palo_alto_jobs",
        name: "Palo Alto Networks Careers",
        url: "https://jobs.paloaltonetworks.com/",
        description: "Major cybersecurity company hiring across cloud, network, and threat intelligence.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Enterprise", "Cloud Security", "Threat Intel"],
        icon: "🔥"
    },
    {
        id: "crowdstrike_jobs",
        name: "CrowdStrike Careers",
        url: "https://www.crowdstrike.com/careers/",
        description: "Global leader in endpoint protection and threat intelligence hiring security engineers.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["EDR", "Threat Intel", "Enterprise"],
        icon: "🦅"
    },

    {
        id: "securityweekly_jobs",
        name: "Security Weekly Jobs",
        url: "https://securityweekly.com/jobs/",
        description: "Cybersecurity job board tied to Security Weekly media network, focused on enterprise security roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Security Media", "Enterprise", "Global"],
        icon: "📻"
    },
    {
        id: "cybrary_jobs",
        name: "Cybrary Careers",
        url: "https://www.cybrary.it/careers",
        description: "Cybersecurity education platform with career pathways into SOC, pentesting, and cloud security.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Training", "SOC", "Pentesting"],
        icon: "🎓"
    },
    {
        id: "hackthebox_jobs",
        name: "Hack The Box Careers",
        url: "https://www.hackthebox.com/careers",
        description: "Cybersecurity training platform hiring ethical hackers, researchers, and security engineers.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Ethical Hacking", "Training", "Elite"],
        icon: "🧠"
    },
    {
        id: "tryhackme_jobs",
        name: "TryHackMe Careers",
        url: "https://tryhackme.com/careers",
        description: "Hands-on cybersecurity learning platform hiring security engineers and content creators.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Learning", "Security Training", "Remote"],
        icon: "🧪"
    },
    {
        id: "redteam_jobs",
        name: "Red Team Jobs",
        url: "https://redteam.jobs/",
        description: "Specialized job board for offensive security, penetration testing, and red teaming roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Red Team", "Pentesting", "Offensive Security"],
        icon: "🔴"
    },
    {
        id: "blue_team_jobs",
        name: "Blue Team Jobs",
        url: "https://blueteamjobs.com/",
        description: "Defensive cybersecurity roles including SOC analysts, incident response, and threat detection.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["SOC", "Blue Team", "Defense"],
        icon: "🔵"
    },
    {
        id: "cloudsecurity_jobs",
        name: "Cloud Security Jobs",
        url: "https://cloudsecurityjobs.net/",
        description: "Focused job board for AWS, Azure, GCP security engineers and cloud architects.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Cloud", "AWS", "DevSecOps"],
        icon: "☁️"
    },
    {
        id: "appsec_jobs",
        name: "Application Security Jobs",
        url: "https://appsecjobs.com/",
        description: "Dedicated AppSec job board for secure coding, DevSecOps, and software security roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["AppSec", "DevSecOps", "Engineering"],
        icon: "🧩"
    },
    {
        id: "cybersecurity_jobs_eu",
        name: "Cybersecurity Jobs Europe",
        url: "https://www.cybersecurityjobs.eu/",
        description: "European-focused cybersecurity job board for enterprise and government security roles.",
        category: "Cybersecurity",
        region: "Europe",
        badges: ["Europe", "Enterprise", "Security"],
        icon: "🇪🇺"
    },
    {
        id: "cybersec_africa_jobs",
        name: "CyberSec Africa Jobs",
        url: "https://cybersecurityafrica.jobs/",
        description: "Emerging cybersecurity job board focused on African talent and security roles.",
        category: "Cybersecurity",
        region: "Africa",
        badges: ["Africa", "Security", "Emerging Market"],
        icon: "🌍"
    },
    {
        id: "cybersecurityventures_jobs",
        name: "Cybersecurity Ventures Jobs",
        url: "https://cybersecurityventures.com/jobs/",
        description: "Industry research firm job listings for cybersecurity vendors and startups.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Research", "Startups", "Security"],
        icon: "📊"
    },
    {
        id: "talent_scout_cyber",
        name: "Talent Scout Cyber",
        url: "https://talentscoutcyber.com/",
        description: "Recruitment platform specializing in senior cybersecurity and executive roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Executive", "Senior Roles", "Recruitment"],
        icon: "🕴️"
    },
    {
        id: "microsoft_security_jobs",
        name: "Microsoft Security Careers",
        url: "https://careers.microsoft.com/",
        description: "Official Microsoft careers portal with dedicated cybersecurity, cloud security, and threat intelligence roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Big Tech", "Cloud Security", "Enterprise"],
        icon: "🪟"
    },
    {
        id: "google_security_jobs",
        name: "Google Security Careers",
        url: "https://careers.google.com/",
        description: "Security engineering, privacy, and threat analysis roles at Google.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Big Tech", "Security Engineering", "AI Security"],
        icon: "🔍"
    },
    {
        id: "amazon_security_jobs",
        name: "AWS Security Careers",
        url: "https://aws.amazon.com/careers/",
        description: "Cloud security engineering roles across AWS infrastructure and enterprise products.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Cloud", "AWS", "Enterprise"],
        icon: "☁️"
    },
    {
        id: "microsoft_msrc",
        name: "Microsoft Security Response Center",
        url: "https://msrc.microsoft.com/",
        description: "Bug bounty and vulnerability research program hiring elite security researchers.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Bug Bounty", "Research", "Elite"],
        icon: "🛡️"
    },
    {
        id: "google_vrp",
        name: "Google Vulnerability Reward Program",
        url: "https://bughunters.google.com/",
        description: "One of the most advanced bug bounty ecosystems globally (often leads to hiring).",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Bug Bounty", "Research", "High Skill"],
        icon: "🐛"
    },
    {
        id: "apple_security_jobs",
        name: "Apple Security Careers",
        url: "https://jobs.apple.com/",
        description: "Security engineering, privacy, and infrastructure protection roles at Apple.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Big Tech", "Privacy", "Security"],
        icon: "🍎"
    },
    {
        id: "ibm_security_jobs",
        name: "IBM Security Careers",
        url: "https://www.ibm.com/careers/",
        description: "Enterprise cybersecurity, SOC, and consulting security roles at IBM.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Enterprise", "SOC", "Consulting"],
        icon: "🔵"
    },
    {
        id: "accenture_security_jobs",
        name: "Accenture Security",
        url: "https://www.accenture.com/",
        description: "Global consulting cybersecurity roles across enterprise clients and governments.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Consulting", "Enterprise", "GRC"],
        icon: "🏢"
    },
    {
        id: "pwc_cyber_jobs",
        name: "PwC Cybersecurity Careers",
        url: "https://www.pwc.com/",
        description: "Cyber risk, governance, and enterprise security consulting roles.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Consulting", "GRC", "Risk"],
        icon: "📊"
    },
    {
        id: "kpmg_cyber_jobs",
        name: "KPMG Cyber Security Careers",
        url: "https://home.kpmg/",
        description: "Cybersecurity advisory, risk, and compliance roles in global markets.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Consulting", "Risk", "Enterprise"],
        icon: "🏛️"
    },
    {
        id: "deloitte_cyber_jobs",
        name: "Deloitte Cyber Careers",
        url: "https://www2.deloitte.com/",
        description: "One of the largest global cybersecurity consulting job pipelines.",
        category: "Cybersecurity",
        region: "Global",
        badges: ["Consulting", "GRC", "Enterprise"],
        icon: "🌐"
    },
    {
        id: "africacert_jobs",
        name: "AfricaCERT Network",
        url: "https://www.africacert.org/",
        description: "African cybersecurity coordination network with incident response and talent ecosystem links.",
        category: "Cybersecurity",
        region: "Africa",
        badges: ["Africa", "CERT", "Security Response"],
        icon: "🌍"
    },
    {
        id: "cert_eu_jobs",
        name: "ENISA / CERT-EU Careers",
        url: "https://www.enisa.europa.eu/",
        description: "European Union cybersecurity agency hiring for threat intelligence and defense roles.",
        category: "Cybersecurity",
        region: "Europe",
        badges: ["Government", "EU", "Security"],
        icon: "🇪🇺"
    }
];
