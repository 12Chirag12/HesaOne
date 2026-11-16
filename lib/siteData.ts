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

export const servicesData: ServiceDetail[] = [
  {
    slug: "process-safety-risk-studies",
    no: "01",
    title: "Process Safety & Risk Studies",
    shortDesc: "Structured risk identification, quantitative assessment, and hazard modeling to safeguard high-hazard operations.",
    heroHeadline: "Systematic hazard identification and consequence engineering for process facilities.",
    fullDesc:
      "Process safety is the engineering foundation that prevents catastrophic loss of primary containment, fires, vapor cloud explosions, and toxic exposure. HESAONE LLP conducts comprehensive qualitative and quantitative hazard evaluations tailored to chemical synthesis, oil and gas handling, pharmaceutical manufacturing, and heavy process installations.",
    iconName: "ShieldCheck",
    deliverables: [
      "HAZOP (Hazard and Operability) Worksheets and Action Registers",
      "HAZID (Hazard Identification) and What-If Analysis Reports",
      "Quantitative Risk Assessment (QRA) with FN-Curves and Risk Contours",
      "Layer of Protection Analysis (LOPA) & SIL Allocation Dossiers",
      "Consequence Modeling for Dispersion, Thermal Radiation, and Overpressure",
      "Bow-Tie Diagrams with Safety-Critical Barrier Definitions"
    ],
    keyStandards: [
      "IEC 61508 / IEC 61511 (Functional Safety & SIS)",
      "OSHA 29 CFR 1910.119 (Process Safety Management)",
      "CCPS Guidelines for Process Hazard Analysis",
      "API 754 & API RP 581 (Risk-Based Inspection)",
      "ISO 31000 (Risk Management Guidelines)"
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
      "Continuous chemical reactor modification and distillation expansion",
      "Pressurized LPG, LNG, and toxic solvent storage tank farms",
      "Bulk chemical synthesis and multi-product batch pharmaceutical facilities"
    ]
  },
  {
    slug: "safety-management-systems",
    no: "02",
    title: "Safety Management Systems & Compliance",
    shortDesc: "Management frameworks, third-party compliance audits, and governance embedding safety into operational culture.",
    heroHeadline: "Moving from procedural paperwork to an active, resilient safety management system.",
    fullDesc:
      "A safety management system is only as effective as its execution on the plant floor. HESAONE LLP designs, evaluates, and matures organizational Health and Safety Management Systems (OHSMS) aligned with ISO 45001 and ISO 14001, closing the gap between documented procedures and frontline operations.",
    iconName: "ClipboardCheck",
    deliverables: [
      "ISO 45001 / ISO 14001 Gap Analysis and Readiness Reports",
      "Statutory EHS Legal Registers & Regulatory Compliance Audits",
      "Standard Operating Procedures (SOPs) and EHS Policy Manuals",
      "Incident Investigation Protocols and Root Cause Analysis (RCA)",
      "Contractor Safety Management Specifications",
      "Corrective & Preventive Action (CAPA) Governance Trackers"
    ],
    keyStandards: [
      "ISO 45001:2018 (Occupational Health & Safety)",
      "ISO 14001:2015 (Environmental Management)",
      "Factories Act & State Statutory Compliance Rules",
      "ILO-OSH 2001 (Guidelines on OHS Management Systems)",
      "OSHA 1910 General Industry Standards"
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
      "Standardize contractor safety oversight across capital projects"
    ],
    sampleUseCases: [
      "Multi-site manufacturing enterprise seeking ISO 45001 / 14001 certification",
      "Comprehensive regulatory compliance audit following an expansion permit",
      "Turnkey overhaul of contractor safety management for capital projects"
    ]
  },
  {
    slug: "fire-emergency-safety",
    no: "03",
    title: "Industrial Fire & Emergency Safety",
    shortDesc: "Fire risk assessments, hydraulic fire network evaluations, and engineered emergency response planning.",
    heroHeadline: "Engineered fire prevention and dependable life-safety systems for industrial facilities.",
    fullDesc:
      "Industrial fires and explosions present severe risks to human life and business continuity. HESAONE LLP provides specialized fire engineering advisory, conducting rigorous hazard assessments, testing hydraulic fire protection capacity, and formulating actionable emergency egress plans.",
    iconName: "Flame",
    deliverables: [
      "Comprehensive Industrial Fire Risk Assessments (FRA)",
      "Fire Hydrant & Sprinkler Network Hydraulic Calculations",
      "Special Hazard Fire Suppression System Design Specifications",
      "Computerized Emergency Evacuation and Egress Analyses",
      "On-Site Emergency Response Plans (ERP) and Disaster Scenarios",
      "Passive Fire Protection & Fire Compartmentation Audits"
    ],
    keyStandards: [
      "NFPA 13 (Installation of Sprinkler Systems)",
      "NFPA 30 (Flammable and Combustible Liquids Code)",
      "NFPA 72 (National Fire Alarm and Signaling Code)",
      "National Building Code (NBC Part 4: Fire & Life Safety)",
      "IS 15105 / IS 13039 (Fire Protection of Industrial Buildings)"
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
        step: "Emergency Plan & Drill Formulation",
        desc: "Develop site-specific emergency response manuals, incident command structures, and mock-drill protocols."
      }
    ],
    businessBenefits: [
      "Protect critical production assets and inventory from major fire losses",
      "Address property insurer risk engineering and underwriting recommendations",
      "Ensure rapid, unobstructed workforce evacuation during emergencies",
      "Maintain compliance with statutory fire safety rules and licensing bodies"
    ],
    sampleUseCases: [
      "High-bay automated logistics warehouse sprinkler coverage verification",
      "Flammable chemical storage farm deluge system and foam proportioning design",
      "Manufacturing plant fire audit for annual municipal fire license renewal"
    ]
  },
  {
    slug: "environment-sustainability",
    no: "04",
    title: "Environmental & Sustainability Compliance",
    shortDesc: "Environmental assessments, industrial effluent management, and statutory consent compliance.",
    heroHeadline: "Technical environmental stewardship and rigorous consent compliance for industry.",
    fullDesc:
      "Modern industrial facilities operate under strict regulatory scrutiny regarding air emissions, effluent discharge, and hazardous waste handling. HESAONE LLP provides technical environmental advisory to ensure facilities maintain full compliance with statutory pollution control mandates.",
    iconName: "Leaf",
    deliverables: [
      "Environmental Impact Assessment (EIA) Studies and EMPs",
      "Effluent Treatment Plant (ETP) & ZLD Performance Evaluations",
      "Statutory Consent to Establish (CTE) & Consent to Operate (CTO) Guidance",
      "Hazardous Waste Characterization and Storage Compliance Audits",
      "Stack Emission & Ambient Air Quality Monitoring Frameworks",
      "Corporate ESG and Scope 1 & 2 Carbon Footprint Accounting"
    ],
    keyStandards: [
      "Central & State Pollution Control Board (CPCB / SPCB) Guidelines",
      "Environment (Protection) Act & Hazardous Waste Management Rules",
      "ISO 14001:2015 (Environmental Management Systems)",
      "Water (Prevention & Control of Pollution) Act",
      "Air (Prevention & Control of Pollution) Act"
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
      "Chemical manufacturing zero liquid discharge (ZLD) plant performance review",
      "Pharmaceutical facility hazardous solvent recovery and waste management audit",
      "Industrial park environmental baseline study for brownfield site expansion"
    ]
  },
  {
    slug: "technical-safety-services",
    no: "05",
    title: "Technical Safety & Machine Guarding",
    shortDesc: "Machine safety audits, hazardous area classification, electrical safety, and energy isolation.",
    heroHeadline: "Engineering safeguards for machinery, electrical systems, and hazardous atmospheres.",
    fullDesc:
      "Physical interaction between personnel and high-energy equipment remains a leading cause of industrial fatalities and severe injuries. HESAONE LLP provides specialized engineering assessments to eliminate mechanical, electrical, and thermal hazards across production environments.",
    iconName: "HardHat",
    deliverables: [
      "Machine Guarding Risk Assessments under ISO 12100",
      "Hazardous Area Classification (HAC) Schedules and Zone Drawings",
      "Lockout/Tagout (LOTO) Zero-Energy State Machine Procedures",
      "Electrical Safety Audits and Arc Flash Hazard Calculations",
      "Ergonomic Task Risk Analyses and Manual Handling Reviews",
      "Pressure Vessel and Pressurized System Integrity Reviews"
    ],
    keyStandards: [
      "ISO 12100 / ISO 13849 (Safety of Machinery)",
      "IEC 60079 / IS 5572 (Hazardous Area Classification)",
      "OSHA 1910.147 (The Control of Hazardous Energy - LOTO)",
      "NFPA 70E / IEEE 1584 (Electrical Workplace Safety & Arc Flash)",
      "OSHA 1910 Subpart O (Machinery and Machine Guarding)"
    ],
    methodology: [
      {
        step: "Equipment Inventory & Hazard Mapping",
        desc: "Survey mechanical pinch points, rotating parts, electrical panels, and flammable vapor release zones."
      },
      {
        step: "Engineering Safety Evaluation",
        desc: "Evaluate existing interlocks, light curtains, relief valves, and electrical enclosure ratings."
      },
      {
        step: "Standardized Safeguard Design",
        desc: "Specify compliant physical guards, interlocked safety devices, and visual isolation instructions."
      },
      {
        step: "Verification & Maintenance Integration",
        desc: "Verify safety functions, provide operational training, and integrate checks into maintenance routines."
      }
    ],
    businessBenefits: [
      "Eliminate severe mechanical crushing, amputation, and entrapment injuries",
      "Prevent ignition of flammable atmospheres through certified electrical equipment",
      "Standardize energy isolation procedures to protect maintenance technicians",
      "Achieve full alignment with international machinery safety directives"
    ],
    sampleUseCases: [
      "Automated stamping press and robotic welding cell machine safeguarding",
      "Chemical batch synthesis plant hazardous area classification drawing update",
      "Turnkey site-wide LOTO program deployment for a heavy manufacturing plant"
    ]
  },
  {
    slug: "training-awareness",
    no: "06",
    title: "HSE Training & Workforce Development",
    shortDesc: "Competency-based safety training, Behavior-Based Safety (BBS), and leadership safety coaching.",
    heroHeadline: "Empowering frontline workers and leadership with practical safety competence.",
    fullDesc:
      "Technical safeguards require a skilled, safety-conscious workforce to function effectively. HESAONE LLP delivers high-impact, competency-focused training programs designed to bridge the gap between regulatory theory and real-world shop-floor execution.",
    iconName: "GraduationCap",
    deliverables: [
      "Behavior-Based Safety (BBS) Observer and Champion Workshops",
      "Permit-to-Work (PTW) and Confined Space Entry Certification",
      "Executive and Supervisory Process Safety Leadership Seminars",
      "Chemical Hazard Communication (HAZCOM) and GHS Training",
      "Practical Fire Extinguisher and First-Response Drills",
      "Hazard Identification and Stop-Work Authority Enablement"
    ],
    keyStandards: [
      "OSHA Training Guidelines & Voluntary Protection Programs",
      "ISO 45001 Clause 7.2 & 7.3 (Competence and Awareness)",
      "NEBOSH & IOSH Competency Frameworks",
      "Globally Harmonized System (GHS) of Chemical Classification",
      "Factories Act Safety Officer & Worker Training Rules"
    ],
    methodology: [
      {
        step: "Training Needs Assessment (TNA)",
        desc: "Review site incident history and interview shift supervisors to pinpoint knowledge gaps."
      },
      {
        step: "Custom Curriculum & Practical Modules",
        desc: "Develop scenario-driven, multilingual training materials focused on actual plant equipment."
      },
      {
        step: "Interactive Workshop Delivery",
        desc: "Facilitate hands-on practical exercises, case study discussions, and hazard-hunt simulations."
      },
      {
        step: "Competency Evaluation & Tracking",
        desc: "Administer pre/post assessments, issue certifications, and provide ongoing retention tracking."
      }
    ],
    businessBenefits: [
      "Cultivate an active safety culture where workers proactively report hazards",
      "Ensure supervisors understand their statutory safety liabilities and duties",
      "Reduce human error through standardized work practices and energy isolation",
      "Empower employees at all levels to exercise Stop-Work Authority safely"
    ],
    sampleUseCases: [
      "Comprehensive Behavior-Based Safety workshop for continuous process plant operators",
      "Permit-to-work and hazardous energy isolation training for maintenance teams",
      "Process safety leadership seminar for site managers and plant superintendents"
    ]
  }
];

export const industriesData: IndustryDetail[] = [
  {
    slug: "manufacturing-engineering",
    no: "01",
    title: "Manufacturing & Heavy Engineering",
    tagline: "Mechanical equipment, overhead lifting, assembly lines, and high-energy fabrication.",
    description:
      "Automotive manufacturing, foundries, and heavy fabrication operations involve intense operational tempos, mechanical pinch points, overhead crane movements, and maintenance energy isolation challenges.",
    iconName: "Factory",
    typicalHazards: [
      "Machinery entrapment, entanglement, and mechanical crushing",
      "Overhead crane rigging failures and heavy material handling collisions",
      "Hazardous electrical and hydraulic energy release during maintenance",
      "High ambient noise, welding fumes, and repetitive ergonomic strain"
    ],
    complianceStandards: ["OSHA 1910 Subpart O", "ISO 12100", "EN ISO 13849-1", "Factories Act (Machinery Safety)"],
    solutionsProvided: [
      "Machine Guarding and Functional Safety Audits",
      "Comprehensive Lockout/Tagout (LOTO) Program Deployment",
      "Overhead Crane, Rigging, and Material Handling Safety Reviews",
      "Ergonomic Assessment and Industrial Hygiene Monitoring"
    ],
    outcomes: "Engineered physical safeguards and standardized energy isolation protocols delivering full statutory compliance."
  },
  {
    slug: "chemical-pharmaceuticals",
    no: "02",
    title: "Chemical & Pharmaceuticals",
    tagline: "Volatile organic compounds, exothermic reactions, hazardous dusts, and tight consent limits.",
    description:
      "Chemical synthesis and pharmaceutical processing involve high pressures, flammable solvent handling, toxic vapors, and strict statutory environmental effluent discharge parameters.",
    iconName: "FlaskConical",
    typicalHazards: [
      "Exothermic runaway reactions and thermal decomposition",
      "Toxic vapor releases, solvent spills, and hazardous inhalation hazards",
      "Combustible dust flash fires in milling, drying, and API handling",
      "Effluent treatment plant upset and statutory consent non-compliance"
    ],
    complianceStandards: ["OSHA 1910.119 (PSM)", "NFPA 30 / NFPA 652", "IEC 60079", "Pollution Control Board Consent Rules"],
    solutionsProvided: [
      "HAZOP, What-If, and SIL Allocation Facilitation",
      "Hazardous Area Classification (Zone 0, 1, 2 & Zone 20, 21, 22)",
      "Industrial Effluent and Zero Liquid Discharge (ZLD) Compliance Audits",
      "Vapor Cloud Dispersion and Consequence Modeling"
    ],
    outcomes: "Comprehensive process hazard identification and verified engineering barriers protecting facility containment."
  },
  {
    slug: "infrastructure-construction",
    no: "03",
    title: "Infrastructure & Construction",
    tagline: "Working at height, heavy earthmoving, temporary structures, and contractor workforces.",
    description:
      "Civil infrastructure, highway developments, industrial construction, and structural projects operate across dynamic site conditions with high contractor worker density and elevated physical risks.",
    iconName: "Building2",
    typicalHazards: [
      "Falls from height (scaffolding, edge openings, fragile roofing)",
      "Trench cave-ins, structural collapses, and excavation failures",
      "Struck-by moving earthmoving equipment and mobile cranes",
      "Temporary electrical distribution faults and high-voltage line contact"
    ],
    complianceStandards: ["OSHA 1926", "Building & Other Construction Workers (BOCW) Act", "IS 4014 (Scaffolding)", "ANSI A10"],
    solutionsProvided: [
      "Contractor HSE Pre-Qualification and Daily Oversight Frameworks",
      "Engineered Fall Protection, Lifeline, and Safety Net Specifications",
      "Deep Excavation Shoring and Dewatering Safety Surveys",
      "Site-Wide Permit-to-Work (PTW) and Tool-Box-Talk (TBT) Standardization"
    ],
    outcomes: "Systematic high-risk permit controls, verified fall protection systems, and disciplined contractor safety governance."
  },
  {
    slug: "logistics-warehousing",
    no: "04",
    title: "Logistics & Industrial Warehousing",
    tagline: "High-bay racking, material handling vehicles, cold chains, and large fire compartments.",
    description:
      "Modern distribution centers and automated fulfillment hubs experience high forklift density, rapid picking schedules, towering pallet racking, and large fire compartments with concentrated combustible inventory.",
    iconName: "Truck",
    typicalHazards: [
      "Forklift-pedestrian collisions and loading dock edge falls",
      "Structural pallet racking deflection, overloading, and collapse",
      "Rapid fire spread through high-density combustible storage arrays",
      "Ammonia refrigerant releases in industrial cold-storage operations"
    ],
    complianceStandards: ["NFPA 13 (High-Rack Sprinklers)", "EN 15635 (Steel Static Racking)", "OSHA 1910.178 (Powered Industrial Trucks)"],
    solutionsProvided: [
      "Pedestrian Segregation and Plant Traffic Management Audits",
      "Structural Pallet Racking Integrity and Deflection Inspections",
      "High-Bay Fire Sprinkler Hydraulic Verification and Egress Audits",
      "Refrigeration Emergency Response and Leak Detection Reviews"
    ],
    outcomes: "Physical traffic separation, certified rack structural compliance, and verified fire suppression network density."
  },
  {
    slug: "energy-power-utilities",
    no: "05",
    title: "Energy & Power Utilities",
    tagline: "High-voltage switchgear, thermal boilers, solar assets, and battery storage.",
    description:
      "Power generation, transmission substations, and utility installations present extreme arc flash energies, pressurized steam networks, confined spaces, and high-energy thermal risks.",
    iconName: "Zap",
    typicalHazards: [
      "Arc flash blast, electrocution, and medium/high-voltage flashovers",
      "High-pressure boiler tube ruptures and thermal steam releases",
      "Battery Energy Storage System (BESS) thermal runaway risks",
      "Work-at-height on transmission towers, chimneys, and wind assets"
    ],
    complianceStandards: ["NFPA 70E", "IEEE 1584 (Arc Flash Hazard Calculations)", "Electricity Rules & Safety Regulations", "OSHA 1910.269"],
    solutionsProvided: [
      "Arc Flash Hazard Analysis and Incident Energy Warning Labeling",
      "High-Voltage Substation Electrical Safety Audits",
      "Confined Space Entry and Isolation Protocols for Boilers",
      "Renewable BESS Fire Prevention and Suppression Reviews"
    ],
    outcomes: "Calculated arc flash protection boundaries, standardized personal protective equipment, and verified energy isolation."
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "cs-chemical-hazop",
    title: "Specialty Chemicals: Process Hazard Analysis & SIL Allocation",
    clientSector: "Chemical Manufacturing",
    challenge:
      "A batch chemical synthesis facility operating high-pressure reactors and volatile organic solvent loops required an updated process hazard evaluation to satisfy regulatory operating permits and assess potential thermal runaway scenarios.",
    solution:
      "HESAONE facilitated a multidisciplinary HAZOP study across all active reaction nodes, conducted atmospheric dispersion simulations, and performed Layer of Protection Analysis (LOPA) to verify safety-instrumented functions.",
    results: [
      "Completed node-by-node hazard identification covering normal, startup, and upset states",
      "Specified SIL-rated emergency depressurization and relief interlock safeguards",
      "Formulated an actionable, prioritized risk mitigation register with clear engineering responsibilities"
    ],
    metrics: [
      { label: "Governing Standard", value: "IEC 61511 / OSHA PSM" },
      { label: "Study Scope", value: "Full Node HAZOP & LOPA" },
      { label: "Key Milestone", value: "Audit-Ready Register" }
    ]
  },
  {
    id: "cs-auto-iso45001",
    title: "Automotive Component Plant: ISO 45001 OHSMS & Machine Safety Overhaul",
    clientSector: "Automotive & Engineering",
    challenge:
      "A multi-line mechanical press and stamping facility sought to transition from informal safety practices to a fully certified ISO 45001 management system while upgrading machine guarding and energy isolation procedures.",
    solution:
      "HESAONE conducted a comprehensive statutory gap audit, drafted standardized Lockout/Tagout (LOTO) visual instructions for major press lines, and trained internal safety committee leads to sustain the management system.",
    results: [
      "Established verified operational procedures aligned with ISO 45001:2018 requirements",
      "Engineered physical safeguarding specifications for mechanical press pinch points",
      "Delivered practical, bilingual LOTO energy isolation protocols across all production assets"
    ],
    metrics: [
      { label: "Management Standard", value: "ISO 45001:2018" },
      { label: "Machinery Focus", value: "Press Safeguarding & LOTO" },
      { label: "Key Milestone", value: "Certified OHSMS Framework" }
    ]
  },
  {
    id: "cs-logistics-fire",
    title: "Distribution Center: High-Bay Sprinkler Network & Life Safety Review",
    clientSector: "Logistics & Warehousing",
    challenge:
      "A large-scale logistics fulfillment facility with multi-tier storage racking required an independent fire safety audit to evaluate hydraulic sprinkler capacity, fire water reserves, and emergency egress distances.",
    solution:
      "HESAONE conducted hydraulic flow calculations against NFPA 13 standards, evaluated in-rack sprinkler coverage, verified fire pump curves, and modeled emergency evacuation travel routes across all operational zones.",
    results: [
      "Verified fire water pump flow and pressure curves against high-rack design density criteria",
      "Identified critical egress bottlenecks and recommended optimized exit corridor alignments",
      "Delivered a detailed fire risk assessment dossier to support insurance and statutory review"
    ],
    metrics: [
      { label: "Engineering Code", value: "NFPA 13 / NBC Part 4" },
      { label: "Scope of Review", value: "Hydraulic & Egress Audit" },
      { label: "Key Milestone", value: "Validated Life Safety Report" }
    ]
  }
];

export const faqData = [
  {
    q: "How does HESAONE LLP initiate an advisory engagement with a new facility?",
    a: "Every engagement begins with our structured scoping phase. We review your site plot plans, process flow diagrams (PFDs), chemical inventory, and statutory compliance history. Following this, our senior safety consultants conduct an on-site walkthrough or discovery session to define a transparent, technically scoped project plan."
  },
  {
    q: "What certifications and qualifications do HESAONE's consultants hold?",
    a: "Our team consists of experienced safety professionals, including certified functional safety practitioners, lead auditors for ISO 45001 and ISO 14001, NEBOSH qualified specialists, and industrial fire safety engineers with extensive field experience across high-hazard industries."
  },
  {
    q: "Can HESAONE support facilities facing statutory notices or regulatory compliance audits?",
    a: "Yes. We provide objective technical advisory for plants addressing statutory audit observations, regulatory inspection notices, or internal compliance remediation. We assist in identifying root causes, drafting actionable Corrective and Preventive Action (CAPA) plans, and verifying that safeguards satisfy statutory criteria."
  },
  {
    q: "What is the typical timeframe required for a formal HAZOP study?",
    a: "The duration of a HAZOP study depends directly on the number of nodes (piping, instrumentation, and operational sections) under review. A focused plant modification typically takes 2 to 4 workshop days, while complex greenfield synthesis units can span several weeks of structured multidisciplinary facilitation."
  },
  {
    q: "Do you deliver on-site workforce safety training customized to plant equipment?",
    a: "Yes. We develop scenario-driven, practical training programs tailored directly to your facility's machinery, chemicals, and operating workflows. Training can be delivered in English, Hindi, and vernacular languages to ensure genuine frontline understanding and hazard awareness."
  },
  {
    q: "How does HESAONE protect client operational data and proprietary process designs?",
    a: "Confidentiality is fundamental to our practice. We execute mutual Non-Disclosure Agreements (NDAs) prior to receiving process diagrams, formulations, or operational documents. All project files are stored securely and accessed exclusively by assigned project engineers."
  }
];
