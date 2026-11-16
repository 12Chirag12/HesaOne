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
    shortDesc: "Structured risk identification, quantitative assessment, and hazard modeling to safeguard high-risk operations.",
    heroHeadline: "Preventing catastrophic releases and high-consequence incidents before they occur.",
    fullDesc:
      "Process safety is the systematic foundation that prevents catastrophic fires, explosions, toxic gas releases, and severe chemical containment failures. HESAONE LLP conducts industry-leading qualitative and quantitative process hazard evaluations tailored to complex chemical processing, oil & gas distribution, pharmaceuticals, and manufacturing facilities.",
    iconName: "ShieldCheck",
    deliverables: [
      "Full HAZOP (Hazard and Operability) Worksheets and Action Item Trackers",
      "HAZID (Hazard Identification) & What-If Analysis Reports",
      "Quantitative Risk Assessment (QRA) with FN-Curves and Individual Risk Contours",
      "Layer of Protection Analysis (LOPA) & Safety Integrity Level (SIL) Allocation",
      "Consequence Modeling for Dispersion, Thermal Radiation, and Overpressure",
      "Bow-Tie Diagrams with Critical Safety Barrier Registers"
    ],
    keyStandards: [
      "IEC 61508 / IEC 61511 (Functional Safety & Safety Instrumented Systems)",
      "OSHA 29 CFR 1910.119 (Process Safety Management of Highly Hazardous Chemicals)",
      "CCPS (Center for Chemical Process Safety) Guidelines",
      "API 754 & API RP 581 (Risk-Based Inspection)",
      "ISO 31000 (Risk Management Guidelines)"
    ],
    methodology: [
      {
        step: "Data Ingestion & P&ID Scoping",
        desc: "Review process flow diagrams (PFDs), piping and instrumentation diagrams (P&IDs), safety data sheets (SDSs), and operating parameters."
      },
      {
        step: "Multidisciplinary Workshop Facilitation",
        desc: "Chair structured sessions using guide-word methodology with plant engineers, operators, and safety specialists."
      },
      {
        step: "Quantitative Risk & Consequence Simulation",
        desc: "Simulate flammable vapor cloud explosions, pool fires, toxic gas plumes, and determine fatal radius zones."
      },
      {
        step: "Engineering Recommendations & Barrier Management",
        desc: "Deliver practical, prioritized hierarchical risk reduction recommendations to close safety gaps."
      }
    ],
    businessBenefits: [
      "Avoid multi-million-dollar loss events and regulatory shutdowns",
      "Protect workforce lives and adjacent community populations",
      "Lower commercial property and casualty insurance premiums",
      "Achieve full statutory compliance with national and international environmental & safety regulators"
    ],
    sampleUseCases: [
      "Petrochemical continuous reactor modification and piping expansion",
      "Flammable solvent storage farm and pressurized LPG bullet tank installation",
      "Bulk chemical API synthesis in pharmaceutical multi-product plants"
    ]
  },
  {
    slug: "safety-management-systems",
    no: "02",
    title: "Safety Management Systems & Compliance",
    shortDesc: "Robust management frameworks, third-party compliance audits, and actionable governance that embed safety into corporate DNA.",
    heroHeadline: "Transforming procedural paperwork into a proactive, resilient safety culture.",
    fullDesc:
      "Effective HSE governance requires more than binders on a shelf—it demands an active, auditable, and resilient management architecture. HESAONE LLP designs, audits, and streamlines Occupational Health and Safety Management Systems (OHSMS) aligned with global best practices.",
    iconName: "ClipboardCheck",
    deliverables: [
      "ISO 45001 & ISO 14001 Gap Analysis and Certification Readiness Audits",
      "Comprehensive EHS Manuals, Standard Operating Procedures (SOPs), and Safe Work Methods",
      "Legal Compliance Registers covering Factories Act, Pollution Control, and Municipal Codes",
      "Contractor Safety Management Systems and Vendor Pre-Qualification Protocols",
      "EHS Leading & Lagging KPI Performance Dashboards",
      "Internal Audit Programs with Corrective Action Tracking (CAPA)"
    ],
    keyStandards: [
      "ISO 45001:2018 (Occupational Health & Safety Management Systems)",
      "ISO 14001:2015 (Environmental Management Systems)",
      "ILO-OSH 2001 (Guidelines on Occupational Safety and Health Management Systems)",
      "National Factories Act & State Model Rules",
      "ANSI/ASSP Z10 (Occupational Health and Safety Management Systems)"
    ],
    methodology: [
      {
        step: "Baseline Diagnostic Audit",
        desc: "Benchmark your existing operations, policies, and incident history against ISO and statutory mandates."
      },
      {
        step: "System Architecture Design",
        desc: "Develop user-friendly policies, risk assessment registers, permit systems, and role-based responsibilities."
      },
      {
        step: "Workforce & Management Integration",
        desc: "Deploy toolkits, deliver train-the-auditor sessions, and introduce accountability at supervisory levels."
      },
      {
        step: "Pre-Certification & Continuous Review",
        desc: "Simulate third-party certification audits, close non-conformances, and instill management review routines."
      }
    ],
    businessBenefits: [
      "Reduced Lost Time Injury Frequency Rate (LTIFR)",
      "Seamless qualification in high-stakes client vendor selection and tenders",
      "Elimination of regulatory fines, stop-work notices, and legal liability",
      "Measurable employee engagement and positive workplace morale"
    ],
    sampleUseCases: [
      "Multi-site manufacturing enterprise migrating to ISO 45001",
      "Global logistics hub requiring standardized contractor HSE oversight",
      "Heavy engineering shop floor establishing zero-harm governance"
    ]
  },
  {
    slug: "fire-emergency-safety",
    no: "03",
    title: "Fire & Emergency Safety Engineering",
    shortDesc: "End-to-end fire risk assessments, hydraulic network reviews, emergency response planning, and tactical evacuation modeling.",
    heroHeadline: "Protecting lives and critical physical infrastructure through robust fire engineering.",
    fullDesc:
      "Fire represents one of the most volatile and rapid threats to industrial personnel, plant infrastructure, and business continuity. HESAONE LLP delivers comprehensive fire safety audits, hydraulic adequacy assessments, passive and active fire protection reviews, and crisis preparedness planning.",
    iconName: "Flame",
    deliverables: [
      "Industrial Fire Risk Assessment (FRA) and Hazard Area Zoning",
      "Fire Hydrant, Sprinkler, and Deluge System Hydraulic Adequacy Verification",
      "Smoke Control, Venting, and Egress Evacuation Computer Simulations",
      "On-Site Emergency Preparedness & Disaster Management Plans (DMP)",
      "Passive Fire Protection (Fire Doors, Intumescent Coatings, Compartmentation) Surveys",
      "Emergency Mock Drill Protocols and Crisis Command Team Training"
    ],
    keyStandards: [
      "NFPA 13 (Standard for the Installation of Sprinkler Systems)",
      "NFPA 30 (Flammable and Combustible Liquids Code)",
      "NFPA 101 (Life Safety Code)",
      "National Building Code (NBC) Part 4 - Fire & Life Safety",
      "IS 2190 & IS 15105 (Selection, Installation, and Maintenance of Fire Fighting)"
    ],
    methodology: [
      {
        step: "Fire Load & Fuel Source Calculation",
        desc: "Quantify combustible material volumes, storage configurations, and flash-point risk factors."
      },
      {
        step: "Active & Passive System Audit",
        desc: "Inspect detection networks, alarm systems, fire pump rooms, hydrant pressure, and compartment integrity."
      },
      {
        step: "Evacuation Time & Travel Distance Analysis",
        desc: "Calculate safe egress times, evaluate escape route illumination, and identify bottlenecks in personnel evacuation."
      },
      {
        step: "Crisis Management & Tactical Planning",
        desc: "Formulate emergency command structures, liaison protocols with municipal responders, and drill schedules."
      }
    ],
    businessBenefits: [
      "Guarantee immediate, unimpeded life safety during emergency situations",
      "Prevent catastrophic asset loss and inventory destruction",
      "Maintain valid Fire Department No-Objection Certificates (NOC)",
      "Ensure rapid business recovery and minimal downtime after critical alerts"
    ],
    sampleUseCases: [
      "High-bay warehouse with flammable automated racking systems",
      "Paint manufacturing plant with volatile organic compounds (VOCs)",
      "Large-scale commercial data center with specialized clean-agent fire suppression"
    ]
  },
  {
    slug: "environment-sustainability",
    no: "04",
    title: "Environment & Sustainability Solutions",
    shortDesc: "Comprehensive environmental impact studies, industrial effluent audits, waste minimization, and corporate ESG reporting.",
    heroHeadline: "Balancing industrial productivity with rigorous environmental stewardship and decarbonization.",
    fullDesc:
      "Modern industry must harmonize operational output with stringent ecological boundaries. HESAONE LLP partners with organizations to achieve environmental compliance, streamline wastewater and emissions monitoring, optimize circular resource consumption, and build credible ESG frameworks.",
    iconName: "Leaf",
    deliverables: [
      "Environmental Impact Assessment (EIA) and Environmental Management Plans (EMP)",
      "Effluent Treatment Plant (ETP) and Sewage Treatment Plant (STP) Efficiency Audits",
      "Air Pollution Control Device (APCD) Evaluation & Stack Emission Studies",
      "Hazardous Waste, Plastic, and E-Waste Management & Extended Producer Responsibility (EPR)",
      "Scope 1, Scope 2, and Scope 3 Carbon Footprint Calculations",
      "Water Audit and Zero Liquid Discharge (ZLD) Feasibility Studies"
    ],
    keyStandards: [
      "ISO 14001:2015 (Environmental Management)",
      "ISO 14064 (Greenhouse Gas Accounting & Verification)",
      "GRI (Global Reporting Initiative) Sustainability Standards",
      "Central and State Pollution Control Board (CPCB / SPCB) Consent Regulations",
      "Hazardous and Other Wastes (Management and Transboundary Movement) Rules"
    ],
    methodology: [
      {
        step: "Ecological Baseline & Mass Balance Analysis",
        desc: "Analyze plant input-output balances of water, raw chemicals, energy, and waste streams."
      },
      {
        step: "Discharge & Emission Monitoring",
        desc: "Evaluate effluent parameters (COD, BOD, TDS, heavy metals) and ambient air particulate levels."
      },
      {
        step: "Resource Recovery & Cleaner Production",
        desc: "Design waste valorization, solvent recovery, rainwater harvesting, and energy reduction pathways."
      },
      {
        step: "Regulatory Consents & Reporting",
        desc: "Assist with Consent to Establish (CTE), Consent to Operate (CTO), and corporate sustainability disclosure."
      }
    ],
    businessBenefits: [
      "Secure hassle-free regulatory clearances and prevent closure notices",
      "Substantial cost savings through water recycling and energy conservation",
      "Attract ESG-focused institutional investors and tier-one global buyers",
      "Mitigate long-term environmental remediation and contamination liabilities"
    ],
    sampleUseCases: [
      "Textile dyeing and finishing unit implementing Zero Liquid Discharge (ZLD)",
      "Pharmaceutical facility optimizing solvent recycling and thermal oxidizers",
      "Engineering fabrication plant lowering Scope 1 & 2 carbon intensity"
    ]
  },
  {
    slug: "technical-safety-services",
    no: "05",
    title: "Technical Safety & Operational Engineering",
    shortDesc: "Specialized machine guarding, electrical safety, hazardous area classification (ATEX/IECEx), and permit-to-work systems.",
    heroHeadline: "Engineering physical barriers and engineering controls between operators and energy sources.",
    fullDesc:
      "Technical safety bridges engineering principles with everyday frontline operations. HESAONE LLP conducts in-depth engineering evaluations of machine safeguarding, hazardous energy isolation (LOTO), electrical thermography, hazardous area zoning, and high-risk work environments.",
    iconName: "HardHat",
    deliverables: [
      "Hazardous Area Classification (HAC) per ATEX / IECEx Standards",
      "Comprehensive Electrical Safety Audits & Infrared Thermographic Inspection",
      "Machine Safety & Functional Safeguarding Verification (EN ISO 13849)",
      "Lockout/Tagout (LOTO) Energy Control Procedures and Hardware Audits",
      "Confined Space Entry and Work-at-Height Engineering Systems",
      "Pressure Vessel, Lifting Equipment, and Mechanical Integrity Protocols"
    ],
    keyStandards: [
      "NFPA 70E (Standard for Electrical Safety in the Workplace)",
      "IEC 60079 Series (Explosive Atmospheres)",
      "ISO 12100 (Safety of Machinery - General Principles for Design)",
      "OSHA 1910.147 (The Control of Hazardous Energy - Lockout/Tagout)",
      "ANSI / ASSP A10.32 (Fall Protection Systems for Construction & Demolition)"
    ],
    methodology: [
      {
        step: "Physical Site Walkdown & Energy Mapping",
        desc: "Trace high-voltage switchgear, hydraulic manifolds, pneumatic circuits, and mechanical moving parts."
      },
      {
        step: "Hazardous Gas/Dust Zone Delineation",
        desc: "Map Zone 0, 1, 2 (gas) and Zone 20, 21, 22 (combustible dust) to specify explosion-proof electrical ratings."
      },
      {
        step: "Interlock & Safety Circuit Verification",
        desc: "Verify light curtains, safety interlocks, emergency stop switches, and Category/Performance Levels (PLr)."
      },
      {
        step: "Permit-to-Work (PTW) Standardization",
        desc: "Establish stringent hot work, confined space, cold work, and excavation permit governance."
      }
    ],
    businessBenefits: [
      "Eliminate life-altering amputations, electrical shocks, and fatal falls",
      "Prevent catastrophic ignition in flammable vapor and combustible dust zones",
      "Ensure peak machinery reliability and prolonged asset lifespans",
      "Eliminate equipment downtime caused by improper energy isolation"
    ],
    sampleUseCases: [
      "Food processing facility addressing grain dust explosion risks (Zone 21/22)",
      "Automotive robotic assembly line requiring safety interlock PLd validation",
      "Heavy equipment fabrication plant overhauling 11kV electrical substations"
    ]
  },
  {
    slug: "training-awareness",
    no: "06",
    title: "Workforce Training & Safety Culture",
    shortDesc: "Accredited HSE workshops, Behavior-Based Safety (BBS) programs, and executive safety leadership coaching.",
    heroHeadline: "Empowering frontline champions and senior leadership with practical safety competencies.",
    fullDesc:
      "A safety management system is only as capable as the people executing it. HESAONE LLP conducts immersive, experiential, and culturally resonant training modules designed to transform frontline behavior, eradicate risk complacency, and foster active care among workers, supervisors, and executive leaders.",
    iconName: "GraduationCap",
    deliverables: [
      "Customized Behavior-Based Safety (BBS) Observation & Coaching Systems",
      "Process Safety & HAZOP Participant Certification Courses",
      "Incident Investigation & Root Cause Analysis (RCA - 5 Why & Fishbone) Workshops",
      "Emergency Response Team (ERT) & Advanced Firefighter Tactical Drills",
      "First Aid, CPR, and Industrial Hygiene Competency Certifications",
      "Safety Leadership Mastery for Plant Managers, Shift In-Charges, and Supervisors"
    ],
    keyStandards: [
      "NEBOSH (National Examination Board in Occupational Safety and Health) Aligned",
      "IOSH (Institution of Occupational Safety and Health) Best Practices",
      "OSHA General Industry & Construction Training Guidelines",
      "ANSI/ASSP Z490.1 (Criteria for Accepted Practices in Safety, Health and Environmental Training)",
      "Adult Learning Principles (Andragogy) for Frontline Multilingual Workforces"
    ],
    methodology: [
      {
        step: "Training Needs Assessment (TNA)",
        desc: "Diagnose plant injury trends, near-miss patterns, and frontline skill deficiencies."
      },
      {
        step: "Interactive Curriculum & Simulation Design",
        desc: "Create vernacular, hands-on, case-study-driven modules with zero boring slide marathons."
      },
      {
        step: "Field Delivery & Practical Drills",
        desc: "Deliver workshops on-site with live extinguisher handling, harness donning, and table-top scenarios."
      },
      {
        step: "Competency Verification & Post-Training Tracking",
        desc: "Test retention with practical assessments, issue verified certificates, and measure on-floor behavioral shift."
      }
    ],
    businessBenefits: [
      "Drastic decrease in unsafe acts and hazardous workplace conditions",
      "Empowered frontline workers who confidently exercise Stop-Work Authority",
      "Cultivate an organic reporting culture for near-misses and hazards",
      "High return on human capital through reduced absenteeism and medical costs"
    ],
    sampleUseCases: [
      "Chemical manufacturing site training 400 operators in Behavior-Based Safety",
      "Construction infrastructure contractor certifying 1,200 workers in work-at-height safety",
      "Cross-functional executive team aligning on Process Safety Leadership metrics"
    ]
  }
];

export const industriesData: IndustryDetail[] = [
  {
    slug: "manufacturing-engineering",
    no: "01",
    title: "Manufacturing & Heavy Engineering",
    tagline: "Heavy machinery, molten metals, high-speed assembly, and robotic automation.",
    description:
      "From automotive assembly and foundries to heavy structural fabrication, manufacturing operations face intense operational tempos, mechanical pinch points, overhead lifting risks, and repetitive ergonomic stresses.",
    iconName: "Factory",
    typicalHazards: [
      "Machinery entrapment, entanglement, and mechanical crushing",
      "Overhead crane failures, rigging drops, and material handling collisions",
      "Hazardous energy release during maintenance (LOTO failures)",
      "High noise, metal welding fumes, and ergonomic musculoskeletal injuries"
    ],
    complianceStandards: ["OSHA 1910 Subpart O", "ISO 12100", "EN ISO 13849-1", "Factories Act Section 21"],
    solutionsProvided: [
      "Turnkey Machine Guarding & Functional Safety Audits",
      "Material Handling, Overhead Crane, and Rigging Safety Inspections",
      "Comprehensive Lockout/Tagout (LOTO) Program Deployment",
      "Ergonomic Assessment & Industrial Noise/Vibration Control"
    ],
    outcomes: "Reduced mechanical incident frequency by 72% across 30+ audited manufacturing facilities."
  },
  {
    slug: "chemical-pharmaceuticals",
    no: "02",
    title: "Chemical & Pharmaceuticals",
    tagline: "Volatile organic compounds, exothermic reactions, hazardous dusts, and strict cleanroom protocols.",
    description:
      "Chemical processing and pharmaceutical synthesis deal with high pressures, toxic vapors, explosive atmospheres, and tight environmental effluent parameters where minor deviations can escalate into major disasters.",
    iconName: "FlaskConical",
    typicalHazards: [
      "Exothermic runaway reactions and thermal decomposition",
      "Toxic gas leaks, solvent spills, and skin absorption hazards",
      "Combustible dust flash fires (APIs, excipients, fine powders)",
      "Effluent treatment failure and groundwater contamination"
    ],
    complianceStandards: ["OSHA 1910.119 (PSM)", "NFPA 30 / NFPA 652", "IEC 60079", "CPCB / SPCB Consent Guidelines"],
    solutionsProvided: [
      "HAZOP, What-If, and SIL Allocation Facilitation",
      "Hazardous Area Classification (Zone 0, 1, 2 & Zone 20, 21, 22)",
      "Zero Liquid Discharge (ZLD) and Industrial Effluent Audits",
      "Vapor Cloud Dispersion and Consequence Modeling"
    ],
    outcomes: "100% regulatory consent compliance and zero catastrophic containment failures for client plants."
  },
  {
    slug: "infrastructure-construction",
    no: "03",
    title: "Infrastructure & Construction",
    tagline: "High-elevation work, heavy earthmoving, temporary structures, and dynamic contractor workforces.",
    description:
      "Civil infrastructure, highway corridors, metro rail developments, and commercial construction involve ever-changing physical topography, transient labor forces, and the industry's highest fatal four hazards.",
    iconName: "Building2",
    typicalHazards: [
      "Falls from height (scaffolding, edge openings, fragile roofing)",
      "Trench cave-ins, structural collapses, and excavation failures",
      "Struck-by moving excavators, dump trucks, and mobile cranes",
      "Electrocution from overhead power lines or temporary distribution boards"
    ],
    complianceStandards: ["OSHA 1926", "BOCW Act (Building & Other Construction Workers)", "IS 4014 (Scaffolding)", "ANSI A10"],
    solutionsProvided: [
      "Contractor HSE Pre-Qualification and Daily Oversight Frameworks",
      "Engineered Fall Protection, Lifeline, and Safety Net Designs",
      "Deep Excavation Shoring and Dewatering Safety Surveys",
      "Site-Wide Permit-to-Work (PTW) and Tool-Box-Talk (TBT) Digitalization"
    ],
    outcomes: "Achieved over 5 million consecutive safe man-hours on marquee infrastructure projects."
  },
  {
    slug: "logistics-warehousing",
    no: "04",
    title: "Logistics & Industrial Warehousing",
    tagline: "High-bay racking, automated guided vehicles, cold chains, and high-frequency vehicle movement.",
    description:
      "Modern supply chain mega-hubs experience high forklift density, rapid picking schedules, towering storage racks, and vast fire compartments with concentrated combustible inventory.",
    iconName: "Truck",
    typicalHazards: [
      "Forklift-pedestrian collisions and dock edge falls",
      "Pallet racking collapse and overhead product falling objects",
      "Rapid fire spread across high-density storage arrays",
      "Ammonia refrigerant leaks in industrial cold-storage facilities"
    ],
    complianceStandards: ["NFPA 13 (High-Rack Sprinklers)", "EN 15635 (Steel Static Racking)", "OSHA 1910.178 (Powered Industrial Trucks)"],
    solutionsProvided: [
      "Pedestrian Segregation & Traffic Management Audits",
      "Structural Pallet Racking Deflection & Integrity Audits",
      "High-Bay Fire Sprinkler Hydraulic Verification",
      "Ammonia Emergency Response & Detection Audits"
    ],
    outcomes: "Eliminated vehicular near-misses by 88% and prevented structural rack failures."
  },
  {
    slug: "energy-power-utilities",
    no: "05",
    title: "Energy & Power Utilities",
    tagline: "Extra-high voltage substations, thermal boilers, solar farms, and battery storage.",
    description:
      "Power generation, transmission grids, and renewable utility installations present extreme arc flash hazards, pressurized steam systems, confined spaces, and high-energy thermal risks.",
    iconName: "Zap",
    typicalHazards: [
      "Arc flash blast, electrocution, and high-voltage flashovers",
      "High-pressure boiler tube ruptures and steam scalds",
      "Battery Energy Storage System (BESS) thermal runaway",
      "Work-at-height on wind turbine nacelles and high-voltage transmission towers"
    ],
    complianceStandards: ["NFPA 70E", "IEEE 1584 (Arc Flash Hazard Calculations)", "Indian Electricity Rules", "OSHA 1910.269"],
    solutionsProvided: [
      "Arc Flash Hazard Analysis & Incident Energy Labeling",
      "High-Voltage Substation Electrical Safety Audits",
      "Confined Space Boilers & Turbines Entry Protocols",
      "Renewable BESS Fire Prevention & Suppression Audits"
    ],
    outcomes: "Zero electrical flashover casualties across 45+ audited utility substations."
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "cs-chemical-hazop",
    title: "Specialty Chemicals: Brownfield Expansion HAZOP & SIL Allocation",
    clientSector: "Chemical Manufacturing",
    challenge:
      "A premier manufacturer was commissioning a 400 MTD chlorination and distillation plant with severe exothermic runaway risks and proximity to residential zones. The facility lacked an updated quantitative process risk model.",
    solution:
      "HESAONE facilitated an intensive 18-node HAZOP study, conducted continuous atmospheric dispersion modeling, and performed LOPA to determine safety integrity levels for 14 safety-critical instrumented loops.",
    results: [
      "Identified 28 critical process vulnerabilities prior to active commissioning",
      "Engineered automated SIL-2 emergency depressurization and scrubber diversion systems",
      "Secured regulatory operating approval with zero delays or non-compliances"
    ],
    metrics: [
      { label: "Vulnerabilities Mitigated", value: "28" },
      { label: "Safety Critical Loops", value: "14 SIL-2" },
      { label: "Commissioning Delay", value: "0 Days" }
    ]
  },
  {
    id: "cs-auto-iso45001",
    title: "Automotive Tier-1: Enterprise-Wide ISO 45001 & BBS Transformation",
    clientSector: "Automotive & Engineering",
    challenge:
      "A plant with 1,800 workers was experiencing high minor incident rates, contractor safety violations, and frequent near-misses due to frontline complacency and lack of standardized energy isolation.",
    solution:
      "HESAONE architected a comprehensive ISO 45001 OHSMS, engineered custom machine safeguarding for 120 press tools, and deployed an ongoing Behavior-Based Safety observation culture.",
    results: [
      "68% reduction in Lost Time Injury Frequency Rate (LTIFR) in year one",
      "100% of supervisory staff certified in hazard identification & Root Cause Analysis",
      "First-time audit pass with zero major non-conformances from international registrar"
    ],
    metrics: [
      { label: "LTIFR Reduction", value: "-68%" },
      { label: "Machinery Safeguarded", value: "120 Units" },
      { label: "Safe Man-Hours", value: "3.2M+" }
    ]
  },
  {
    id: "cs-logistics-fire",
    title: "E-Commerce Mega-Hub: 850,000 Sq Ft High-Bay Fire & Life Safety Overhaul",
    clientSector: "Logistics & Warehousing",
    challenge:
      "A massive distribution fulfillment facility faced severe insurance audit objections regarding deficient sprinkler density in high-bay automated racking and inadequate emergency travel distance for 900 warehouse operatives.",
    solution:
      "HESAONE performed hydraulic network modeling, specified in-rack ESFR sprinkler layouts, conducted computerized egress pedestrian evacuation simulations, and designed an integrated smoke extraction network.",
    results: [
      "Successfully certified compliant with NFPA 13 and National Building Code Part 4",
      "Reduced insurance annual premium by 22% through validated risk reduction",
      "Cut theoretical emergency evacuation clearing time from 6.2 minutes to 2.8 minutes"
    ],
    metrics: [
      { label: "Insurance Premium Saving", value: "22%" },
      { label: "Evacuation Time", value: "2.8 min" },
      { label: "Facility Area", value: "850k sq ft" }
    ]
  }
];

export const faqData = [
  {
    q: "How does HESAONE LLP begin an engagement with a new industrial facility?",
    a: "Every engagement starts with our structured 'Understand' phase. We conduct a preliminary desk review of your site layout, process flow diagrams (P&IDs), chemical inventory, and statutory compliance history. Following this, our senior safety consultants perform a walkthrough audit or workshop to map high-consequence risk points before issuing a transparent, scoped proposal."
  },
  {
    q: "Are HESAONE's consultants certified to conduct statutory and international audits?",
    a: "Yes. Our team comprises Chartered Safety Practitioners, Certified Functional Safety Engineers (TÜV Rheinland), Lead Auditors for ISO 45001 and ISO 14001, NEBOSH Diploma holders, and accredited Fire Safety Engineers with decades of heavy industrial experience."
  },
  {
    q: "Can HESAONE assist us in responding to regulatory notices or non-compliance citations?",
    a: "Absolutely. We provide urgent technical advisory for plants facing show-cause notices, regulatory remediation orders, or post-incident inquiry committees. We help you conduct rapid root-cause analyses, draft technically sound Corrective and Preventive Action (CAPA) plans, and liaise with authorities to demonstrate rigorous risk mitigation."
  },
  {
    q: "What is the typical duration for a comprehensive HAZOP study?",
    a: "A typical HAZOP study depends on the number of nodes (piping & instrumentation sections). A compact plant modification might take 2 to 4 workshop days, while a large greenfield refinery or chemical synthesis unit can span 2 to 3 weeks of multidisciplinary sessions. Our experienced chairs ensure swift, focused, and exhaustive node analysis without operational stagnation."
  },
  {
    q: "Do you offer tailored on-site workforce training in local vernacular languages?",
    a: "Yes. Training is only effective when workers fully comprehend the concepts. We deliver customized Behavior-Based Safety, Fire Safety, and Permit-to-Work programs in English, Hindi, and regional languages, utilizing visual simulations and hands-on practical drills instead of tedious lecture slides."
  },
  {
    q: "How does HESAONE protect client proprietary process technology and intellectual property?",
    a: "Confidentiality is sacrosanct in process safety. We sign strict non-disclosure agreements (NDAs) prior to receiving any drawings, formulations, or operational documents. All client data is encrypted, stored on secure private infrastructure, and only accessible to assigned project consultants."
  }
];
