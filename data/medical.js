const medicalBoards = [
    {
        id: "healthecareers",
        name: "Health eCareers",
        url: "https://www.healthecareers.com/",
        description: "The largest healthcare job board in the US for physicians, nurses, and healthcare administrators.",
        category: "Medical",
        region: "North America",
        badges: ["Healthcare", "Physicians", "Nursing"],
        icon: "🏥"
    },
    {
        id: "doximity",
        name: "Doximity Careers",
        url: "https://www.doximity.com/careers",
        description: "The leading professional network for physicians, offering curated medical job opportunities.",
        category: "Medical",
        region: "North America",
        badges: ["Physicians", "Networking", "Tech"],
        icon: "🩺"
    },
    {
        id: "practicematch",
        name: "PracticeMatch",
        url: "https://www.practicematch.com/",
        description: "Comprehensive database of physician jobs and healthcare recruitment resources.",
        category: "Medical",
        region: "North America",
        badges: ["Physicians", "Recruitment", "USA"],
        icon: "🩹"
    },
    {
        id: "nejm_careercenter",
        name: "NEJM CareerCenter",
        url: "https://www.nejmcareercenter.org/",
        description: "The official job board of the New England Journal of Medicine for physician recruitment.",
        category: "Medical",
        region: "Global",
        badges: ["Physicians", "Academic", "Elite"],
        icon: "📚"
    },
    {
        id: "medzilla",
        name: "MedZilla",
        url: "https://www.medzilla.com/",
        description: "Specialized job board for biotechnology, pharmaceutical, and healthcare professionals.",
        category: "Medical",
        region: "Global",
        badges: ["Biotech", "Pharma", "Healthcare"],
        icon: "🧪"
    },
    {
        id: "nurse_com",
        name: "Nurse.com",
        url: "https://www.nurse.com/jobs",
        description: "The leading job board for nurses, offering thousands of nursing roles and CE resources.",
        category: "Medical",
        region: "Global",
        badges: ["Nursing", "CE Credits", "Global"],
        icon: "👩‍⚕️"
    },
    {
        id: "biospace",
        name: "BioSpace",
        url: "https://www.biospace.com/",
        description: "The home of the life sciences industry, focusing on biotech, pharma, and medical device jobs.",
        category: "Medical",
        region: "Global",
        badges: ["Life Sciences", "Biotech", "Pharma"],
        icon: "🧬"
    },
    {
        id: "pharmajobs",
        name: "PharmaJobs",
        url: "https://www.pharmajobs.com/",
        description: "Dedicated platform for finding careers in the pharmaceutical and medical sales industries.",
        category: "Medical",
        region: "Global",
        badges: ["Pharma", "Sales", "Global"],
        icon: "💊"
    },
    {
        id: "bmj_careers",
        name: "BMJ Careers",
        url: "https://jobs.bmj.com/",
        description: "The UK's largest job board for doctors, covering all grades and specialties.",
        category: "Medical",
        region: "Europe",
        badges: ["UK", "Doctors", "Academic"],
        icon: "🇬🇧"
    },

    {
        id: "indeed_healthcare",
        name: "Indeed Healthcare",
        url: "https://www.indeed.com/q-healthcare-jobs.html",
        description: "Large global job board with extensive healthcare, nursing, and hospital job listings.",
        category: "Medical",
        region: "Global",
        badges: ["Healthcare", "Hospitals", "Global"],
        icon: "🔎"
    },
    {
        id: "glassdoor_healthcare",
        name: "Glassdoor Healthcare Jobs",
        url: "https://www.glassdoor.com/Job/healthcare-jobs-SRCH_KO0,10.htm",
        description: "Healthcare job listings with salary insights and employer reviews.",
        category: "Medical",
        region: "Global",
        badges: ["Salary", "Hospitals", "Global"],
        icon: "⭐"
    },
    {
        id: "healthjobsuk",
        name: "HealthJobs UK",
        url: "https://www.healthjobsuk.com/",
        description: "Official NHS-related recruitment platform for healthcare roles in the UK.",
        category: "Medical",
        region: "Europe",
        badges: ["NHS", "UK", "Doctors"],
        icon: "🇬🇧"
    },
    {
        id: "nhs_jobs",
        name: "NHS Jobs",
        url: "https://www.jobs.nhs.uk/",
        description: "Official UK National Health Service job portal for all healthcare roles.",
        category: "Medical",
        region: "Europe",
        badges: ["NHS", "Public Health", "UK"],
        icon: "🏥"
    },
    {
        id: "healthcareers_canada",
        name: "HealthCareers Canada",
        url: "https://www.healthcareers.novascotia.ca/",
        description: "Canadian provincial healthcare recruitment platform.",
        category: "Medical",
        region: "North America",
        badges: ["Canada", "Hospitals", "Public Health"],
        icon: "🇨🇦"
    },
    {
        id: "ama_careers",
        name: "American Medical Association Careers",
        url: "https://careers.ama-assn.org/",
        description: "Physician-focused career board from the American Medical Association.",
        category: "Medical",
        region: "North America",
        badges: ["Physicians", "USA", "Professional"],
        icon: "🩺"
    },
    {
        id: "aamc_careers",
        name: "AAMC Careers",
        url: "https://www.aamc.org/career-development",
        description: "Academic medicine and teaching hospital job board in the US.",
        category: "Medical",
        region: "North America",
        badges: ["Academic", "Teaching", "Hospitals"],
        icon: "🎓"
    },
    {
        id: "who_careers",
        name: "WHO Careers",
        url: "https://www.who.int/careers",
        description: "World Health Organization global public health and medical jobs.",
        category: "Medical",
        region: "Global",
        badges: ["UN", "Global Health", "Policy"],
        icon: "🌍"
    },
    {
        id: "msf_jobs",
        name: "Médecins Sans Frontières (MSF Careers)",
        url: "https://www.msf.org/work-msf",
        description: "Humanitarian medical jobs in crisis zones worldwide.",
        category: "Medical",
        region: "Global",
        badges: ["Humanitarian", "Emergency", "NGO"],
        icon: "🚑"
    },
    {
        id: "cdc_jobs",
        name: "CDC Careers",
        url: "https://jobs.cdc.gov/",
        description: "US Centers for Disease Control and Prevention job portal for public health roles.",
        category: "Medical",
        region: "North America",
        badges: ["Public Health", "Research", "Government"],
        icon: "🧫"
    },
    {
        id: "fda_jobs",
        name: "FDA Careers",
        url: "https://www.fda.gov/about-fda/jobs-and-internships-fda",
        description: "US Food and Drug Administration careers in healthcare regulation and safety.",
        category: "Medical",
        region: "North America",
        badges: ["Regulation", "Healthcare", "Government"],
        icon: "💊"
    },
    {
        id: "medscape_jobs",
        name: "Medscape Jobs",
        url: "https://www.medscape.com/careers",
        description: "Physician and healthcare professional job listings and medical news platform.",
        category: "Medical",
        region: "Global",
        badges: ["Physicians", "Global", "News"],
        icon: "📰"
    },
    {
        id: "hospitalrecruit",
        name: "HospitalRecruiting",
        url: "https://www.hospitalrecruiting.com/",
        description: "US-focused hospital and healthcare system recruitment platform.",
        category: "Medical",
        region: "North America",
        badges: ["Hospitals", "Physicians", "USA"],
        icon: "🏨"
    },
    {
        id: "pharmiweb",
        name: "PharmiWeb Jobs",
        url: "https://www.pharmiweb.jobs/",
        description: "European pharmaceutical, biotech, and medical industry job board.",
        category: "Medical",
        region: "Europe",
        badges: ["Pharma", "Biotech", "Europe"],
        icon: "💉"
    },
    {
        id: "healthcareers_australia",
        name: "Health Careers Australia",
        url: "https://www.healthcareers.health.gov.au/",
        description: "Official Australian government healthcare job and career portal.",
        category: "Medical",
        region: "Oceania",
        badges: ["Australia", "Public Health", "Government"],
        icon: "🇦🇺"
    },
    {
        id: "international_medical_corps",
        name: "International Medical Corps Careers",
        url: "https://internationalmedicalcorps.org/work-with-us/",
        description: "Global emergency medical NGO hiring doctors, nurses, and humanitarian health staff.",
        category: "Medical",
        region: "Global",
        badges: ["Humanitarian", "Emergency", "NGO"],
        icon: "🚑"
    },
    {
        id: "international_medical_relief",
        name: "International Medical Relief",
        url: "https://internationalmedicalrelief.org/",
        description: "Global nonprofit deploying volunteer medical professionals to crisis zones.",
        category: "Medical",
        region: "Global",
        badges: ["Volunteer", "Emergency", "Global"],
        icon: "🩺"
    },
    {
        id: "path_careers",
        name: "PATH Careers",
        url: "https://www.path.org/careers/",
        description: "Global health innovation NGO focused on vaccines, disease prevention, and health systems.",
        category: "Medical",
        region: "Global",
        badges: ["Public Health", "Research", "NGO"],
        icon: "🧬"
    },
    {
        id: "gavi_alliance",
        name: "Gavi Careers",
        url: "https://www.gavi.org/careers",
        description: "Global Vaccine Alliance working on immunization programs in developing countries.",
        category: "Medical",
        region: "Global",
        badges: ["Vaccines", "Public Health", "Global"],
        icon: "💉"
    },
    {
        id: "clinton_health_access",
        name: "Clinton Health Access Initiative (CHAI)",
        url: "https://www.clintonhealthaccess.org/careers/",
        description: "Global health organization improving access to medicine and healthcare systems.",
        category: "Medical",
        region: "Global",
        badges: ["Health Systems", "Global", "Policy"],
        icon: "🏥"
    },
    {
        id: "pathfinder_international",
        name: "Pathfinder International",
        url: "https://www.pathfinder.org/careers/",
        description: "Global NGO focused on reproductive health and healthcare access.",
        category: "Medical",
        region: "Global",
        badges: ["Reproductive Health", "NGO", "Global"],
        icon: "🤱"
    },
    {
        id: "jhpiego",
        name: "Jhpiego Careers",
        url: "https://www.jhpiego.org/careers/",
        description: "Johns Hopkins-affiliated NGO improving healthcare systems worldwide.",
        category: "Medical",
        region: "Global",
        badges: ["Academic", "Public Health", "NGO"],
        icon: "🎓"
    },
    {
        id: "fhi360_health",
        name: "FHI 360 Careers (Health)",
        url: "https://www.fhi360.org/careers",
        description: "Global nonprofit working on health, HIV, and development programs.",
        category: "Medical",
        region: "Global",
        badges: ["HIV", "Public Health", "NGO"],
        icon: "🌍"
    },
    {
        id: "intrahealth",
        name: "IntraHealth International",
        url: "https://www.intrahealth.org/careers",
        description: "Global organization strengthening health workforce systems in developing countries.",
        category: "Medical",
        region: "Global",
        badges: ["Health Systems", "Workforce", "NGO"],
        icon: "👩‍⚕️"
    },
    {
        id: "amref_health",
        name: "AMREF Health Africa",
        url: "https://amref.org/careers/",
        description: "Largest African-based health NGO focused on training and health systems.",
        category: "Medical",
        region: "Africa",
        badges: ["Africa", "Public Health", "NGO"],
        icon: "🌍"
    },
    {
        id: "redcross_careers",
        name: "International Red Cross Careers",
        url: "https://www.icrc.org/en/work-with-us",
        description: "Global humanitarian medical and emergency response organization.",
        category: "Medical",
        region: "Global",
        badges: ["Humanitarian", "Emergency", "Global"],
        icon: "➕"
    },
    {
        id: "msf_careers_extra",
        name: "MSF Field Recruitment Portal",
        url: "https://www.msf.org/work-msf",
        description: "Doctors Without Borders recruitment for field medical and emergency roles.",
        category: "Medical",
        region: "Global",
        badges: ["Emergency", "Conflict Zones", "NGO"],
        icon: "🚑"
    },
    {
        id: "medglobal",
        name: "MedGlobal",
        url: "https://medglobal.org/",
        description: "Humanitarian medical NGO providing emergency care in crisis-affected regions.",
        category: "Medical",
        region: "Global",
        badges: ["Humanitarian", "Emergency", "NGO"],
        icon: "🧑‍⚕️"
    },
    {
        id: "seed_global_health",
        name: "Seed Global Health",
        url: "https://seedglobalhealth.org/",
        description: "Nonprofit deploying doctors and nurses to strengthen health education systems.",
        category: "Medical",
        region: "Africa",
        badges: ["Training", "Education", "NGO"],
        icon: "📚"
    },
    {
        id: "emms_international",
        name: "EMMS International",
        url: "https://www.emms.org/",
        description: "UK-based NGO improving healthcare systems in low-resource countries.",
        category: "Medical",
        region: "Global",
        badges: ["UK", "Healthcare Systems", "NGO"],
        icon: "🏥"
    },
    {
        id: "nih_jobs",
        name: "NIH Careers",
        url: "https://www.jobs.nih.gov/",
        description: "US National Institutes of Health job portal for biomedical research and public health roles.",
        category: "Medical",
        region: "North America",
        badges: ["Research", "Government", "Biomedicine"],
        icon: "🧫"
    },
    {
        id: "nih_internships",
        name: "NIH Student Programs",
        url: "https://www.training.nih.gov/programs",
        description: "Biomedical internships and research training programs at NIH.",
        category: "Medical",
        region: "North America",
        badges: ["Internship", "Research", "Students"],
        icon: "🔬"
    },
    {
        id: "eurohealthjobs",
        name: "EuroHealthJobs",
        url: "https://www.eurohealthjobs.com/",
        description: "European healthcare job aggregator for doctors, nurses, and allied health professionals.",
        category: "Medical",
        region: "Europe",
        badges: ["Europe", "Hospitals", "Healthcare"],
        icon: "🇪🇺"
    },
    {
        id: "healthjobsworld",
        name: "HealthJobsWorldwide",
        url: "https://www.healthjobsworldwide.com/",
        description: "Global healthcare recruitment platform for clinical and hospital roles.",
        category: "Medical",
        region: "Global",
        badges: ["Hospitals", "Global", "Clinical"],
        icon: "🌍"
    },
    {
        id: "medicusmundi",
        name: "Medicus Mundi",
        url: "https://www.medicusmundi.org/",
        description: "International health cooperation NGO focusing on global health systems.",
        category: "Medical",
        region: "Global",
        badges: ["Global Health", "NGO", "Development"],
        icon: "🏥"
    },
    {
        id: "ihme_jobs",
        name: "Institute for Health Metrics and Evaluation (IHME)",
        url: "https://www.healthdata.org/about/careers",
        description: "Global health research institute focused on data, disease burden, and health policy.",
        category: "Medical",
        region: "Global",
        badges: ["Research", "Data", "Public Health"],
        icon: "📊"
    },
    {
        id: "wellcome_trust_jobs",
        name: "Wellcome Trust Careers",
        url: "https://wellcome.org/jobs",
        description: "UK-based global biomedical research funding organization.",
        category: "Medical",
        region: "Europe",
        badges: ["Research", "Biomedicine", "Funding"],
        icon: "🧠"
    },
    {
        id: "cdc_foundation",
        name: "CDC Foundation Careers",
        url: "https://www.cdcfoundation.org/careers",
        description: "Supports CDC public health programs and outbreak response initiatives.",
        category: "Medical",
        region: "North America",
        badges: ["Public Health", "Outbreaks", "USA"],
        icon: "🦠"
    },
    {
        id: "nih_clinical_center",
        name: "NIH Clinical Center Jobs",
        url: "https://clinicalcenter.nih.gov/careers/",
        description: "World’s largest hospital dedicated to clinical research.",
        category: "Medical",
        region: "North America",
        badges: ["Clinical Research", "Hospital", "Elite"],
        icon: "🏨"
    },
    {
        id: "global_fund",
        name: "Global Fund Careers",
        url: "https://www.theglobalfund.org/en/careers/",
        description: "International organization fighting AIDS, tuberculosis, and malaria.",
        category: "Medical",
        region: "Global",
        badges: ["HIV", "Malaria", "TB"],
        icon: "🌍"
    },
    {
        id: "paaho_jobs",
        name: "PAHO Careers",
        url: "https://www.paho.org/en/careers",
        description: "Pan American Health Organization public health jobs across the Americas.",
        category: "Medical",
        region: "North America",
        badges: ["WHO Affiliate", "Public Health", "Americas"],
        icon: "🌎"
    },
    {
        id: "afro_who_jobs",
        name: "WHO AFRO Careers",
        url: "https://www.afro.who.int/about-us/careers",
        description: "WHO African regional office careers in public health and disease control.",
        category: "Medical",
        region: "Africa",
        badges: ["WHO", "Africa", "Public Health"],
        icon: "🌍"
    }
];
