export interface ServiceDetail {
  slug: string;
  no: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  keyStandards: string[];
  methodology: { step: string; desc: string }[];
  businessBenefits: string[];
  sampleUseCases: string[];
}

export interface IndustryDetail {
  slug: string;
  no: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  typicalHazards: string[];
  complianceStandards: string[];
  solutionsProvided: string[];
  outcomes: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientSector: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
}

export interface LeaderProfile {
  name: string;
  role: string;
  credentials: string[];
  experience: string;
  summary: string;
  highlights: string[];
}

export interface ClientSectorGroup {
  category: string;
  clients: string[];
}

export const companyInfo = {
  name: "HESAONE LLP",
  altName: "HESA-ONE LLP",
  sanskritMotto: "आत्मानं सततं रक्षेत्",
  mottoEnglish: "Protect oneself always",
  foundedYear: 2018,
  mission: "To serve humanity by applying safety culture thus increasing life expectancy of human, environment & asset.",
  tagline: "Total Safety Solutions & Industrial HSE Engineering Advisory",
  headOffice: {
    addressLine1: "501, Saiwadi, Kudan Pachmarg",
    addressLine2: "Next to CISF Colony, Boisar (West)",
    district: "Dist. Palghar",
    state: "Maharashtra",
    pinCode: "401502",
    country: "India"
  },
  phones: [
    { label: "Consultation & Scope", number: "+91 96737 86820" },
    { label: "Technical Desk", number: "+91 83788 76198" },
    { label: "Direct Inquiries", number: "+91 77740 55113" }
  ],
  email: "hesaonellp@gmail.com",
  website: "www.hesaonellp.com",
  csrFoundation: {
    name: "Anal Foundation",
    focus: "Corporate Social Responsibility (CSR) offering free community seminars for Domestic Safety, Electrical Home Safety, Road Safety, and free HSE industrial orientations."
  },
  stats: {
    experienceYears: "20+",
    trainingManHours: "20,000+",
    foundedYear: 2018,
    accreditation: "DISH Approved Safety Auditor (Govt. of Maharashtra)"
  }
};

export const leadershipData: LeaderProfile[] = [
  {
    name: "Mr. V. Raghunath",
    role: "Principal Safety Consultant & Lead Technical Advisor",
    credentials: [
      "Diploma in Chemical Engineering",
      "Post Graduate Diploma in Industrial Safety (PGDIS)",
      "Post Graduate in Fire Safety",
      "PG Diploma in Industrial Psychology (Pune University)"
    ],
    experience: "20+ Years Industrial HSE Leadership",
    summary:
      "Accomplished chemical and industrial safety authority with more than two decades of senior operational leadership across Chemical, Pharmaceutical, Polymer, Heavy Engineering, and Construction sectors.",
    highlights: [
      "Headed Corporate Safety Departments at Aarti Industries Ltd., Ajanta Pharma, and Polygenta Technologies.",
      "Imparted more than 20,000 Man-Hours of specialized EHS, Behavior-Based Safety (BBS), and process safety training.",
      "Plant Safety Auditor and core BBS deployment leader at Aarti Industries.",
      "Recipient of the prestigious 'Best Safety Changer Award' at Polygenta Technologies Ltd.",
      "Active EHS Member at DISH MARG Aurangabad and Co-Chairman of NIMA Safety Committee Nashik."
    ]
  },
  {
    name: "Mr. Jitendra Thakur",
    role: "Associate Partner, Senior Consultant & Lead Trainer",
    credentials: [
      "M.Sc. in Environmental Sciences",
      "Advance Diploma in Industrial Safety (ADIS)",
      "Advance Diploma in Fire Safety",
      "Certified Internal Auditor for Integrated Management Systems (IMS)"
    ],
    experience: "15+ Years Industrial HSE & Environmental Experience",
    summary:
      "Senior safety and environmental consultant specializing in regulatory factory compliance, statutory safety audits, fire protection assessments, and chemical industry hazard management.",
    highlights: [
      "15+ years of dedicated consulting and audit experience across Pharma, Bulk Drugs, and Specialty Chemical plants.",
      "Certified Internal Auditor for ISO 14001, ISO 45001, and Integrated Management Systems (IMS).",
      "Approved Internal Safety and Fire Auditor with extensive shop-floor training delivery across Maharashtra industrial belts.",
      "Specialist in Onsite Emergency Plans (OEP), Disaster Management, and Mock Drill facilitation."
    ]
  }
];

export const clientRoster: ClientSectorGroup[] = [
  {
    category: "Automotive & Heavy Engineering",
    clients: [
      "Mahindra & Mahindra",
      "Bosch Rexroth (Pune)",
      "Lear Corporation",
      "CTR Manufacturing Industries",
      "Triveni Engineering & Industries Ltd."
    ]
  },
  {
    category: "Chemical, Refining & Pharmaceuticals",
    clients: [
      "Aarti Industries Limited",
      "Aarti Pharma",
      "Lupin Ltd.",
      "Hindustan Petroleum Corporation Ltd. (HPCL Manmad Terminal)",
      "Gharda Chemicals Limited",
      "Ajanta Pharma",
      "Atul Ltd.",
      "Macleods Pharmaceuticals",
      "Balaji Amines",
      "Mehta Petro Refineries Ltd."
    ]
  },
  {
    category: "Polymers, Packaging & Specialty Manufacturing",
    clients: [
      "Polygenta Technologies Ltd.",
      "Everest Industries Ltd.",
      "Cosmo Films Ltd.",
      "McLube Asia Pvt. Ltd.",
      "Beekaylon Synthetics Pvt. Ltd.",
      "Blue Chip Industries Pvt. Ltd.",
      "Hexagon Nutrition Ltd."
    ]
  }
];

export const servicesData: ServiceDetail[] = [
  {
    slug: "process-safety-risk-studies",
    no: "01",
    title: "Process Safety Studies & Risk Assessment",
    shortDesc: "Hazard Identification (HIRA), HAZOP studies, PSSR reviews, LOPA analysis, and ISO 14001/45001 systems.",
    heroHeadline: "Rigorous process safety studies and consequence modeling for high-hazard industry.",
    fullDesc:
      "Process safety is the engineering foundation that prevents catastrophic loss of primary containment, toxic vapor release, and chemical runaway incidents. HESAONE LLP conducts structured qualitative and quantitative risk assessments tailored to continuous chemical reactors, API pharmaceutical synthesis, petrochemical terminals, and pressurized storage installations.",
    iconName: "ShieldCheck",
    deliverables: [
      "Hazard Identification & Risk Assessment (HIRA) Worksheets",
      "HAZOP (Hazard and Operability) Multidisciplinary Studies & Action Registers",
      "Pre-Startup Safety Review (PSSR) Protocols for New & Modified Units",
      "Layer of Protection Analysis (LOPA) & Risk Reduction Verification",
      "Customer Safety Pre-Audit & Verification Dossiers",
      "ISO 14001 (EMS) & ISO 45001 (OHSMS) Implementation Frameworks"
    ],
    keyStandards: [
      "The Factories Act, 1948 (Sections 41B, 41C & State Rules)",
      "MSIHC Rules, 1989 (Major Accident Hazard Guidelines)",
      "IEC 61508 / IEC 61511 (Functional Safety & SIF)",
      "CCPS Guidelines for Process Hazard Analysis",
      "ISO 45001:2018 & ISO 14001:2015 Management Systems"
    ],
    methodology: [
      {
        step: "Data Ingestion & P&ID Scoping",
        desc: "Examine piping and instrumentation diagrams (P&IDs), process flow diagrams (PFDs), mass/heat balances, and operating envelopes."
      },
      {
        step: "Multidisciplinary Workshop Facilitation",
        desc: "Lead structured sessions using standardized guide-words with client operations, process engineers, and maintenance leads."
      },
      {
        step: "Consequence & Quantitative Modeling",
        desc: "Simulate atmospheric dispersion, pool fire radiation, and blast overpressures to determine risk-exclusion zones."
      },
      {
        step: "Actionable Safeguard Engineering",
        desc: "Deliver practical, prioritized risk-reduction measures aligned with the hierarchy of controls."
      }
    ],
    businessBenefits: [
      "Prevent catastrophic process failure and uncontained toxic releases",
      "Meet rigorous statutory licensing and regulatory consent requirements",
      "Provide objective basis for safety instrumented function (SIF) design",
      "Protect surrounding personnel, physical assets, and community boundaries"
    ],
    sampleUseCases: [
      "Continuous chemical reactor modification and distillation expansion at chemical synthesis facilities",
      "Pressurized LPG, LNG, and toxic solvent storage tank farms and transfer manifolds",
      "Pre-startup safety reviews (PSSR) for brownfield API batch synthesis units"
    ]
  },
  {
    slug: "safety-management-systems",
    no: "02",
    title: "Safety System Implementation & Compliance",
    shortDesc: "Work permit systems (PTW), Behavior-Based Safety (BBS), unsafe condition compliance, and accident reporting.",
    heroHeadline: "Moving from procedural paperwork to active shop-floor safety governance.",
    fullDesc:
      "A safety management system is only as effective as its frontline execution. HESAONE LLP designs, implements, and audits shop-floor safety systems—from structured Permit-to-Work (PTW) frameworks and Lockout/Tagout (LOTO) protocols to Behavior-Based Safety (BBS) observation routines and statutory CAPA management.",
    iconName: "ClipboardCheck",
    deliverables: [
      "Permit-to-Work (PTW) System Design (Hot Work, Height, Confined Space, Electrical)",
      "Behavior-Based Safety (BBS) Culture & Observer Routines",
      "Unsafe Condition Finding, Inspection & CAPA Compliance Tracking",
      "Accident / Incident Reporting, Investigation & Root Cause Analysis (RCA)",
      "Personal Protective Equipment (PPE) Matrix & Effectiveness Audits",
      "Statutory OHS Legal Registers & Gap Analysis Reports"
    ],
    keyStandards: [
      "ISO 45001:2018 (Occupational Health & Safety)",
      "The Factories Act, 1948 & State Factory Rules",
      "DISH Approved Safety Audit Methodologies",
      "ILO-OSH 2001 Safety Management Guidelines",
      "IS 14489 (Code of Practice on Occupational Safety & Health Audit)"
    ],
    methodology: [
      {
        step: "Baseline Diagnostic & Legal Review",
        desc: "Evaluate current safety documentation against applicable federal, state, and corporate mandates."
      },
      {
        step: "Field Verification & Practice Audits",
        desc: "Conduct physical walkthrough audits to verify frontline adherence, work permits, and supervisory oversight."
      },
      {
        step: "Framework Architecture & Alignment",
        desc: "Draft concise, actionable operational procedures and risk assessment registers tailored to plant workflows."
      },
      {
        step: "Internal Audit Capability & Governance",
        desc: "Train internal safety committees, establish review metrics, and prepare the organization for certification audits."
      }
    ],
    businessBenefits: [
      "Establish audit-ready statutory compliance across all operational units",
      "Reduce near-misses and injury frequency through systematic hazard control",
      "Enhance corporate governance and institutional investor credibility",
      "Standardize contractor safety oversight across operational shifts"
    ],
    sampleUseCases: [
      "Multi-shift automotive and mechanical engineering plants deploying BBS culture",
      "Comprehensive regulatory compliance audit following an expansion permit",
      "Standardization of Permit-to-Work systems for contractor workforce"
    ]
  },
  {
    slug: "fire-emergency-safety",
    no: "03",
    title: "Industrial Fire & Emergency Safety",
    shortDesc: "Fire audits, hydrant inspection & AMC, fire extinguisher supply/refill, Onsite Emergency Plans, and mock drills.",
    heroHeadline: "Engineered fire prevention and dependable life-safety systems for industrial facilities.",
    fullDesc:
      "Industrial fires and explosions present severe risks to human life, physical assets, and business continuity. HESAONE LLP provides specialized industrial fire engineering advisory: evaluating fire risks, inspecting hydrant networks, providing extinguisher maintenance and AMC support, drafting statutory Onsite Emergency Plans, and conducting realistic emergency evacuation drills.",
    iconName: "Flame",
    deliverables: [
      "Comprehensive Industrial Fire Risk Assessments (FRA)",
      "Fire Hydrant Network Inspection, Flow Testing & AMC Support",
      "Fire Extinguisher Supply, Refill, Inspection & Maintenance Schedules",
      "Statutory Onsite Emergency Plan (OEP) & Disaster Management Manuals",
      "Full-Scale Plant Mock Drills & Evacuation Protocol Testing",
      "Passive Fire Containment & Fire Compartmentation Audits"
    ],
    keyStandards: [
      "National Building Code (NBC 2016 Part 4: Fire & Life Safety)",
      "The Factories Act, 1948 (Section 38: Precautions in case of fire)",
      "IS 15105 / IS 13039 (Fire Protection of Industrial Buildings)",
      "NFPA 10 (Portable Fire Extinguishers) & NFPA 14 (Standpipe Systems)",
      "State Fire Prevention and Life Safety Measures Acts"
    ],
    methodology: [
      {
        step: "Fire Load & Fuel Source Inventory",
        desc: "Calculate fuel loading, combustible inventory densities, and potential ignition sources across all facility zones."
      },
      {
        step: "Active Suppression & Water Supply Audit",
        desc: "Verify fire water reservoir capacities, pump curves, ring main pressures, and deluge coverage."
      },
      {
        step: "Passive Containment & Egress Evaluation",
        desc: "Inspect fire-rated barriers, dampers, travel distances, and emergency exit capacities."
      },
      {
        step: "Emergency Plan & Drill Execution",
        desc: "Develop site-specific emergency response manuals, incident command structures, and lead real-time mock drills."
      }
    ],
    businessBenefits: [
      "Protect critical production assets and inventory from major fire losses",
      "Address property insurer risk engineering and underwriting recommendations",
      "Ensure rapid, unobstructed workforce evacuation during emergencies",
      "Maintain compliance with statutory fire safety rules and licensing bodies"
    ],
    sampleUseCases: [
      "Chemical manufacturing plant hydrant ring-main pressure testing and quarterly AMC",
      "Pharmaceutical warehouse fire risk assessment and statutory emergency evacuation mock drills",
      "Polymer processing plant Onsite Emergency Plan preparation for regulatory filing"
    ]
  },
  {
    slug: "environment-sustainability",
    no: "04",
    title: "Environmental & Pollution Control Solutions",
    shortDesc: "Effluent Treatment Plant (ETP) troubleshooting, water auditing, energy conservation, and pollution control compliance.",
    heroHeadline: "Technical environmental stewardship and rigorous consent compliance for industry.",
    fullDesc:
      "Modern industrial facilities operate under strict regulatory scrutiny regarding air emissions, effluent discharge, water conservation, and hazardous waste. HESAONE LLP provides hands-on technical environmental advisory—troubleshooting Effluent Treatment Plants (ETP), conducting comprehensive industrial water audits, identifying energy conservation opportunities, and ensuring compliance with State Pollution Control Board mandates.",
    iconName: "Leaf",
    deliverables: [
      "Effluent Treatment Plant (ETP) Operation & Troubleshooting Audits",
      "Industrial Water Auditing, Water Balance & Consumption Optimization",
      "Energy Conservation & Thermal Efficiency Studies",
      "State Pollution Control Board (SPCB / CPCB) Consent Compliance Guidance",
      "Hazardous Waste Characterization and Storage Compliance Reviews",
      "Environmental Management Plan (EMP) Development"
    ],
    keyStandards: [
      "Water (Prevention & Control of Pollution) Act, 1974",
      "Air (Prevention & Control of Pollution) Act, 1981",
      "Environment (Protection) Act, 1986 & Hazardous Waste Rules",
      "Central & State Pollution Control Board (CPCB / SPCB) Standards",
      "ISO 14001:2015 (Environmental Management Systems)"
    ],
    methodology: [
      {
        step: "Mass Balance & Waste Stream Profiling",
        desc: "Map raw material inputs, water consumption, wastewater generation, and emission points."
      },
      {
        step: "Treatment Capability & Discharge Analysis",
        desc: "Assess biological and chemical treatment systems against statutory concentration limits."
      },
      {
        step: "Regulatory Gap & Risk Remediation",
        desc: "Identify non-compliances with consent parameters and formulate engineered corrective plans."
      },
      {
        step: "Sustainability & Monitoring Governance",
        desc: "Implement continuous monitoring systems, waste minimization roadmaps, and environmental metrics."
      }
    ],
    businessBenefits: [
      "Prevent regulatory closure notices and punitive environmental penalties",
      "Optimize water recycling and industrial effluent operating costs",
      "Secure statutory environmental consents without administrative delays",
      "Strengthen corporate environmental stewardship and community goodwill"
    ],
    sampleUseCases: [
      "Chemical and bulk drug manufacturing ETP biological reactor troubleshooting",
      "Textile and polymer plant site-wide water auditing and recycling optimization",
      "Industrial manufacturing energy conservation and environmental consent review"
    ]
  },
  {
    slug: "technical-safety-services",
    no: "05",
    title: "Engineering Services & Factory Licensing Support",
    shortDesc: "Factory layout approval, Process Flow Diagram (PFD) preparation, SOPs, and electrical safety audits.",
    heroHeadline: "Technical engineering documentation, factory approvals, and electrical safety audits.",
    fullDesc:
      "Industrial facilities require precise technical documentation, statutory layout approvals from factory inspectorates, verified electrical systems, and standardized operational procedures. HESAONE LLP assists plant engineering teams in preparing statutory factory layout drawings, developing Process Flow Diagrams (PFD), drafting Standard Operating Procedures (SOP), and conducting electrical safety and thermography audits.",
    iconName: "HardHat",
    deliverables: [
      "Factory Layout Approval Documentation (DISH / Factory Inspectorate)",
      "Process Flow Diagram (PFD) & P&ID Scoping Preparation",
      "Standard Operating Procedures (SOPs) for High-Hazard Plant Operations",
      "Electrical Safety Audits, Earthing Verification & Thermography Studies",
      "Machine Guarding Assessments & Energy Isolation (LOTO) Procedures",
      "Legal Licensing Support under The Factories Act"
    ],
    keyStandards: [
      "The Factories Act, 1948 (Section 6: Approval, licensing and registration of factories)",
      "Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations",
      "IS 732 / IS 3043 (Code of Practice for Electrical Wiring & Earthing)",
      "ISO 12100 (Safety of Machinery - General Principles for Design)",
      "OSHA 1910.147 (Control of Hazardous Energy - LOTO)"
    ],
    methodology: [
      {
        step: "Plant Survey & Layout Inspection",
        desc: "Survey plant physical boundaries, machinery placements, escape routes, and ventilation profiles."
      },
      {
        step: "Engineering Drawing & Flowsheet Authoring",
        desc: "Draft accurate architectural factory layouts and process flow diagrams satisfying inspectorate specifications."
      },
      {
        step: "Electrical & Mechanical Integrity Testing",
        desc: "Conduct electrical thermography, earthing resistance tests, and machinery pinch-point evaluations."
      },
      {
        step: "SOP Formulation & Regulatory Submission",
        desc: "Author step-by-step operating procedures and compile audit-ready dossiers for statutory clearance."
      }
    ],
    businessBenefits: [
      "Accelerate statutory factory licensing and layout approvals without bureaucratic delays",
      "Prevent catastrophic electrical fires and arc flash incidents through proactive audits",
      "Standardize operating procedures to reduce operator error and downtime",
      "Ensure machinery complies with statutory safeguarding mandates"
    ],
    sampleUseCases: [
      "Brownfield plant expansion requiring DISH factory layout approval in Maharashtra",
      "Automotive component manufacturing electrical safety audit and earthing verification",
      "Chemical synthesis plant SOP preparation for toxic raw material charging"
    ]
  },
  {
    slug: "training-awareness",
    no: "06",
    title: "HSE Training & Workforce Competency",
    shortDesc: "Workforce safety training, fire drills, BBS coaching, chemical handling, and supervisory seminars.",
    heroHeadline: "Empowering frontline workers and leadership with practical safety competence.",
    fullDesc:
      "As HESAONE’s core thesis emphasizes: almost 90% of industrial accidents stem from lack of hazard awareness and overconfidence among working personnel. Our training practice—led by consultants with over 20,000 training man-hours—delivers high-impact, practical, scenario-driven safety modules in English, Hindi, and Marathi.",
    iconName: "GraduationCap",
    deliverables: [
      "Basic Safety Induction Training for New Workers & Contractors",
      "Behavior-Based Safety (BBS) Observer & Leadership Coaching",
      "Fire Hazard Awareness, Hydrant Operation & Extinguisher Drills",
      "Permit-to-Work (PTW) & Confined Space Entry Certification",
      "Chemical Hazards, MSDS/SDS Understanding & Spill Response",
      "Electrical Safety, Lockout/Tagout (LOTO) & Energy Isolation Modules"
    ],
    keyStandards: [
      "The Factories Act, 1948 (Safety Officer & Worker Training Mandates)",
      "ISO 45001 Clause 7.2 & 7.3 (Competence and Awareness)",
      "National Safety Council Guidelines",
      "NEBOSH & IOSH Competency Frameworks",
      "Globally Harmonized System (GHS) of Chemical Hazard Communication"
    ],
    methodology: [
      {
        step: "Plant Hazard Assessment & TNA",
        desc: "Identify site-specific accident history, near-miss logs, and machinery types to tailor curriculum."
      },
      {
        step: "Multilingual, Practical Curriculum Design",
        desc: "Author engaging visual modules in Hindi, Marathi, and English centered on real plant scenarios."
      },
      {
        step: "Hands-on Practical Simulation",
        desc: "Conduct live extinguisher discharges, mock evacuation drills, and LOTO board simulations."
      },
      {
        step: "Competency Verification & Retention Tracking",
        desc: "Administer pre/post training evaluations and issue verified certificates of competence."
      }
    ],
    businessBenefits: [
      "Target the 90% human factor root cause of workplace accidents",
      "Empower employees at all levels to exercise Stop-Work Authority safely",
      "Ensure supervisors understand their statutory legal liabilities under The Factories Act",
      "Build a resilient, proactive safety culture that protects life and operational continuity"
    ],
    sampleUseCases: [
      "Site-wide Behavior-Based Safety workshop series for chemical plant operating shifts",
      "Hands-on fire extinguisher and emergency drill training for packaging and film facilities",
      "Contractor safety induction and permit-to-work training for plant maintenance shutdowns"
    ]
  }
];

export const industriesData: IndustryDetail[] = [
  {
    slug: "chemical-pharmaceuticals",
    no: "01",
    title: "Chemical & Pharmaceuticals",
    tagline: "Volatile organic compounds, exothermic reactions, hazardous dusts, and tight consent limits.",
    description:
      "Specialty chemical synthesis, active pharmaceutical ingredient (API) manufacturing, and bulk solvent handling involve high thermal energies, toxic vapor releases, volatile solvent transfer, and strict State Pollution Control Board discharge norms. HESAONE delivers deep process safety engineering, HAZOP studies, PSSR reviews, and ETP optimization.",
    iconName: "FlaskConical",
    typicalHazards: [
      "Exothermic runaway reactions and thermal decomposition",
      "Toxic vapor releases, volatile solvent leaks, and chemical inhalation",
      "Combustible dust flash fires in milling, drying, and API granulation",
      "Effluent Treatment Plant (ETP) biological upset and consent parameter exceedance"
    ],
    complianceStandards: [
      "The Factories Act, 1948",
      "MSIHC Rules, 1989",
      "OSHA 1910.119 (Process Safety Management)",
      "NFPA 30 / NFPA 652",
      "State Pollution Control Board (SPCB) Consent Rules"
    ],
    solutionsProvided: [
      "HAZOP, HIRA, and LOPA Risk Studies for Synthesis Units",
      "Plant Pre-Start Safety Reviews (PSSR) for Commissioning",
      "Effluent Treatment Plant (ETP) Troubleshooting & Optimization",
      "Onsite Emergency Plan (OEP) Preparation & Regulatory Filing"
    ],
    outcomes: "Verified engineering containment barriers, audit-ready statutory compliance, and zero uncontained loss of primary containment."
  },
  {
    slug: "manufacturing-engineering",
    no: "02",
    title: "Automotive & Heavy Engineering",
    tagline: "Mechanical equipment, overhead cranes, assembly lines, and high-energy fabrication.",
    description:
      "Automotive component plants, foundries, stamping facilities, and heavy engineering shops operate high-tonnage hydraulic presses, automated welding cells, overhead cranes, and complex electrical sub-stations. HESAONE implements machine safeguarding, LOTO systems, electrical safety audits, and factory layout approvals.",
    iconName: "Factory",
    typicalHazards: [
      "Machinery entrapment, pinch-point crushing, and mechanical amputations",
      "Overhead crane rigging failures and heavy material handling collisions",
      "Hazardous electrical and hydraulic energy release during maintenance",
      "High ambient noise, welding fumes, and repetitive ergonomic strain"
    ],
    complianceStandards: [
      "The Factories Act, 1948 (Machinery Safety)",
      "ISO 12100 (Safety of Machinery)",
      "Central Electricity Authority Safety Regulations",
      "IS 3043 (Code of Practice for Earthing)"
    ],
    solutionsProvided: [
      "Machine Guarding and ISO 12100 Safety Assessments",
      "Standardized Lockout/Tagout (LOTO) Energy Isolation Deployment",
      "Electrical Safety Audits with Thermal Imaging",
      "Factory Layout Approvals from Factory Inspectorate (DISH)"
    ],
    outcomes: "Engineered physical safeguards, certified energy isolation routines, and accelerated factory licensing."
  },
  {
    slug: "polymers-packaging",
    no: "03",
    title: "Polymers, Packaging & Synthetics",
    tagline: "High-speed extrusion lines, static electricity, fire loads, and synthetic fiber processing.",
    description:
      "Polymer manufacturing, synthetic yarn spinning, film extrusion, and industrial packaging involve high-speed rotating rolls, high combustible fuel loading, static charge generation, and intense continuous operations. HESAONE advises major polymer leaders on fire protection, static mitigation, BBS culture, and water auditing.",
    iconName: "Building2",
    typicalHazards: [
      "Rapid fire spread through high-density polymer storage and film rolls",
      "Static discharge sparks in solvent-based coating and extrusion zones",
      "Nip-point drawing and entrapment in high-speed rewinder rollers",
      "Significant cooling water consumption and thermal energy losses"
    ],
    complianceStandards: [
      "National Building Code (NBC Part 4: Fire & Life Safety)",
      "IS 15105 (Industrial Fire Protection Standards)",
      "The Factories Act, 1948",
      "ISO 14001:2015 Environmental Standards"
    ],
    solutionsProvided: [
      "Fire Hydrant & Sprinkler Network Hydraulic Inspections & AMC",
      "Static Electricity & Flammable Vapor Hazard Audits",
      "Comprehensive Water Auditing & Water Balance Optimization",
      "Behavior-Based Safety (BBS) Training for Continuous Shifts"
    ],
    outcomes: "Certified fire safety infrastructure, optimized water recycling, and empowered shift workforce."
  },
  {
    slug: "infrastructure-construction",
    no: "04",
    title: "Infrastructure & Industrial Construction",
    tagline: "Working at height, deep excavations, temporary electricals, and multi-contractor sites.",
    description:
      "Civil infrastructure, greenfield chemical plant erection, industrial sheds, and plant brownfield revamps operate under dynamic site conditions with high contractor worker density and elevated physical risks. HESAONE establishes rigorous site-wide permit-to-work systems, scaffolding inspections, and accident prevention frameworks.",
    iconName: "Truck",
    typicalHazards: [
      "Falls from height (scaffolding, structural steel, fragile roofing)",
      "Trench cave-ins, structural collapses, and heavy machinery strikes",
      "Temporary electrical distribution shocks and flashovers",
      "Contractor worker turnover and lack of induction awareness"
    ],
    complianceStandards: [
      "Building & Other Construction Workers (BOCW) Act",
      "The Factories Act, 1948",
      "IS 4014 (Scaffolding Safety)",
      "IS 3696 (Safety Code for Scaffolds and Ladders)"
    ],
    solutionsProvided: [
      "Contractor HSE Pre-Qualification and Daily Oversight Frameworks",
      "Engineered Fall Protection, Scaffolding, and Lifeline Inspections",
      "Deep Excavation Shoring and Dewatering Safety Surveys",
      "Site-Wide Permit-to-Work (PTW) and Tool-Box-Talk (TBT) Standardization"
    ],
    outcomes: "Disciplined high-risk permit controls, verified fall protection systems, and zero-fatality project execution."
  },
  {
    slug: "energy-power-utilities",
    no: "05",
    title: "Energy & Industrial Utilities",
    tagline: "High-voltage switchyards, steam boiler networks, effluent treatment, and fuel terminals.",
    description:
      "Power generation, petrochemical terminals, medium-voltage substations, and plant utility blocks present extreme arc flash energies, pressurized steam networks, fuel storage hazards, and effluent discharge compliance. HESAONE conducts electrical safety audits, arc flash studies, emergency planning, and ETP performance reviews.",
    iconName: "Zap",
    typicalHazards: [
      "Arc flash blast, electrocution, and high-voltage flashovers",
      "High-pressure boiler steam releases and pressurized line failures",
      "Bulk hydrocarbon transfer leaks and manifold ignition risks",
      "Heavy effluent treatment plant shock loads and consent violations"
    ],
    complianceStandards: [
      "Central Electricity Authority Safety Regulations",
      "Indian Boilers Act & Boiler Regulations",
      "Petroleum Act & SMPV Rules (PESO)",
      "NFPA 70E / IEEE 1584 Electrical Safety Standards"
    ],
    solutionsProvided: [
      "Electrical Safety Audits with Thermography and Earthing Verification",
      "Onsite Emergency Plan (OEP) Preparation for Fuel Terminals",
      "Confined Space Entry and Isolation Protocols for Boilers",
      "ETP Troubleshooting and Continuous Consent Compliance"
    ],
    outcomes: "Engineered arc flash safety boundaries, verified electrical earthing, and audit-ready emergency plans."
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "cs-chemical-hazop",
    title: "Specialty Chemicals Synthesis: Comprehensive HAZOP & Process Safety Audit",
    clientSector: "Chemical & Pharmaceuticals",
    challenge:
      "A leading specialty chemical manufacturing facility operating batch synthesis reactors and volatile solvent recovery systems required an updated, audit-grade Process Hazard Analysis to satisfy statutory regulatory inspection criteria and evaluate thermal runaway safeguards.",
    solution:
      "HESAONE’s lead consultants facilitated a node-by-node HAZOP study across all active reaction lines, modeled atmospheric dispersion scenarios, and evaluated relief valve and emergency interlock capacities against international criteria.",
    results: [
      "Executed node-by-node hazard identification covering normal, startup, shutdown, and emergency upset states",
      "Engineered actionable independent protection layers (IPLs) for reactor runaway protection",
      "Delivered a verified, audit-ready Process Safety Dossier accepted by statutory authorities"
    ],
    metrics: [
      { label: "Study Scope", value: "Full Node HAZOP & HIRA" },
      { label: "Governing Code", value: "Factories Act / MSIHC" },
      { label: "Key Milestone", value: "Audit-Ready Register" }
    ]
  },
  {
    id: "cs-auto-bbs",
    title: "Automotive Component Major: Machine Guarding & Behavior-Based Safety Deployment",
    clientSector: "Automotive & Heavy Engineering",
    challenge:
      "A multi-line automotive component manufacturing plant sought to reduce pinch-point near-misses, modernize mechanical press guarding, and deploy a shop-floor Behavior-Based Safety (BBS) observation culture across three operating shifts.",
    solution:
      "HESAONE conducted ISO 12100 machine risk assessments across all stamping press lines, designed standardized visual Lockout/Tagout (LOTO) procedures, and trained 150+ supervisors and frontline operators as active BBS observers.",
    results: [
      "Engineered physical machine guards and interlock specifications for high-tonnage presses",
      "Standardized bilingual visual LOTO placards mounted directly at energy isolation points",
      "Established frontline BBS observation routines resulting in immediate reduction in unsafe acts"
    ],
    metrics: [
      { label: "Machinery Focus", value: "Press Guarding & LOTO" },
      { label: "Culture Shift", value: "BBS Observer Certified" },
      { label: "Key Milestone", value: "150+ Operators Trained" }
    ]
  },
  {
    id: "cs-polymer-fire-etp",
    title: "Synthetic Polymer Facility: Hydrant Network Inspection & ETP Troubleshooting",
    clientSector: "Polymers & Specialty Manufacturing",
    challenge:
      "A continuous synthetic polymer manufacturing unit experienced biological treatment upsets in its Effluent Treatment Plant (ETP) and required an engineering verification of its high-pressure fire hydrant network for annual statutory licensing.",
    solution:
      "HESAONE performed on-site biological and chemical diagnostic testing on the ETP to stabilize COD/BOD levels, conducted hydraulic pressure and flow testing across the entire hydrant ring main, and led a full-scale plant mock evacuation drill.",
    results: [
      "Identified root cause of ETP bacterial shock and restored compliant biological aeration parameters",
      "Tested and verified fire hydrant ring main pressures, pump curves, and deluge system coverage",
      "Successfully conducted statutory emergency evacuation mock drill with full workforce participation"
    ],
    metrics: [
      { label: "Environmental", value: "ETP Balance Restored" },
      { label: "Fire Network", value: "Hydrant AMC & Tested" },
      { label: "Key Milestone", value: "Full Mock Drill Led" }
    ]
  }
];

export const faqData = [
  {
    q: "What certifications, accreditations, and experience do HESAONE's consultants hold?",
    a: "HESAONE is led by certified industrial safety professionals with over 20 years of hands-on plant experience. Our team includes a DISH Approved Safety Auditor (Directorate of Industrial Safety & Health, Government of Maharashtra), Post-Graduates in Industrial Safety (PGDIS) and Fire Safety, M.Sc. in Environmental Sciences, Advanced Diplomas in Industrial Safety (ADIS), certified IMS Internal Auditors, and active members of DISH MARG and NIMA Safety Committees."
  },
  {
    q: "Which industrial sectors and clients does HESAONE serve?",
    a: "HESAONE advises leading industrial organizations across Automotive (Mahindra & Mahindra, Bosch Rexroth Pune, Lear Corporation, CTR), Chemical & Pharmaceuticals (Aarti Industries, Lupin Ltd, HPCL Manmad, Gharda Chemicals, Ajanta Pharma, Atul Ltd, Macleods Pharma), Polymers & Synthetics (Polygenta Technologies, Everest Industries, Cosmo Films), and Heavy Engineering (Triveni Engineering)."
  },
  {
    q: "How does HESAONE support facilities with DISH and statutory Factory Inspectorate compliance?",
    a: "As a DISH Approved Safety Auditor practice, we conduct comprehensive statutory safety audits under The Factories Act, 1948, prepare statutory factory layout approvals, assist with MSIHC Rules compliance, conduct electrical safety audits, author Onsite Emergency Plans (OEP), and provide actionable Corrective and Preventive Action (CAPA) roadmaps for regulatory submissions."
  },
  {
    q: "Why is HSE training the core focus of HESAONE?",
    a: "Our core operating thesis—proven across decades of field inspections—is that almost 90% of industrial accidents stem from lack of hazard awareness and overconfidence among working personnel. We have delivered over 20,000 Man-Hours of hands-on, scenario-driven training in Hindi, Marathi, and English covering fire drills, chemical handling, permit-to-work, machine safety, and Behavior-Based Safety (BBS)."
  },
  {
    q: "What community initiatives does HESAONE support under its CSR program?",
    a: "Under the 'Anal Foundation' banner, HESAONE provides free community seminars on Domestic Safety, Electrical Home Safety, and Road Safety. We also offer free initial HSE orientation sessions to industrial facilities to build safety awareness and protect worker lives."
  },
  {
    q: "How do we engage HESAONE for a plant audit, HAZOP study, or proposal?",
    a: "You can reach our advisory desk directly by phone (+91 96737 86820 / +91 83788 76198 / +91 77740 55113) or email (hesaonellp@gmail.com). We review your plant context, chemical inventory, or P&IDs under bilateral Non-Disclosure Agreement (NDA) and provide a transparent, scoped technical proposal within 24 to 48 hours."
  }
];
