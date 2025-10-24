const questions = [
  // --- Week 1: Assignment 1 (10 Questions) ---
  {
    question: "How do spear-phishing attacks differ from general phishing attacks?",
    options: [
      "They use only phone calls as a medium",
      "They are randomly sent to thousands of people",
      "They target specific individuals with personalized messages",
      "They do not involve malware at all"
    ],
    answer: "They target specific individuals with personalized messages"
  },
  {
    question: "What does ransomware typically do to a victim's files?",
    options: [
      "Deletes them permanently",
      "Encrypts them to prevent access",
      "Transfers them to another device",
      "Makes them publicly available online"
    ],
    answer: "Encrypts them to prevent access"
  },
  {
    question: "Which of the following are examples of systems protected under Critical Infrastructure Protection (CIP)?",
    options: [
      "Gaming consoles and home Wi-Fi routers",
      "SCADA systems, Industrial Control Systems (ICS), and operational technology",
      "Social media networks and entertainment apps",
      "Educational platforms and student databases"
    ],
    answer: "SCADA systems, Industrial Control Systems (ICS), and operational technology"
  },
  {
    question: "_________ is the protection of information assets that use, store, or transmit information through the application of policy, education, and technology.",
    options: [
      "Network Security",
      "Operations Security",
      "Communications Security",
      "Information Security"
    ],
    answer: "Information Security"
  },
  {
    question: "_________ is the property of information that describes how data is whole, complete, and uncorrupted.",
    options: [
      "Integrity",
      "Availability",
      "Confidentiality",
      "Accuracy"
    ],
    answer: "Integrity"
  },
  {
    question: "To protect the confidentiality of information, which of the following measures can be taken:",
    options: [
      "Information classification",
      "Secure document storage",
      "Application of general security policies",
      "All the above"
    ],
    answer: "All the above"
  },
  {
    question: "In the context of cybersecurity, how can technology act as a source of threat?",
    options: [
      "It includes tools that can attack other networks",
      "It increases internet traffic for organizations",
      "It automates routine business operations",
      "Through software that prevents users from sharing information"
    ],
    answer: "It includes tools that can attack other networks"
  },
  {
    question: "True or False: Information Security is not a process, but a product or a technology.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "_________ is a manipulation technique that exploits human error to gain private information, access, or valuables.",
    options: [
      "Session Hijacking",
      "Salting",
      "Social Engineering",
      "Smurf Attack"
    ],
    answer: "Social Engineering"
  },
  {
    question: "Which of the following scenarios represents a breach involving protected health information (PHI)?",
    options: [
      "Sharing a patient's prescription history along with their name",
      "Forwarding anonymous health statistics to a research team",
      "Posting a hospital's general policy on patient intake",
      "Transmitting appointment schedules without personal details"
    ],
    answer: "Sharing a patient's prescription history along with their name"
  },

  // --- Week 2: Assignment 2 (10 Questions) ---
  {
    question: "What is the primary purpose of the McCumber Cube?",
    options: [
      "To develop network security protocols",
      "To create operating systems",
      "To establish and evaluate information security programs",
      "To analyze network traffic performance"
    ],
    answer: "To establish and evaluate information security programs"
  },
  {
    question: "Consider the following statements\na. The first dimension of the McCumber cube identifies the goals to protect the cyber world.\nb. The second dimension of the McCumber cube focuses on the problems of protecting all of the states of data in the cyber world.\nc. The third dimension of the McCumber cube defines the types of controls used to protect the cyber world.\nWhich of the above statements are True?",
    options: [
      "Only a is true",
      "a and b are true",
      "b and c are true",
      "a,b,and c are true"
    ],
    answer: "a,b,and c are true"
  },
  {
    question: "In a malware detection system, when legitimate business software is incorrectly identified as malicious, this represents:",
    options: [
      "True Positive (TP)",
      "False Positive (FP)",
      "True Negative (TN)",
      "False Negative (FN)"
    ],
    answer: "False Positive (FP)"
  },
  {
    question: "True or False: A False Negative in malware detection means the system correctly identifies a safe file as non-malicious.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "A vulnerability in cybersecurity is best defined as:",
    options: [
      "A malicious program designed to damage systems",
      "A security patch released by software vendors",
      "A method used by attackers to gain unauthorized access",
      "A weakness or flaw in technology, processes, or human behavior that leaves systems open to exploitation"
    ],
    answer: "A weakness or flaw in technology, processes, or human behavior that leaves systems open to exploitation"
  },
  {
    question: "An exploit is primarily:",
    options: [
      "A weakness in system security that needs patching",
      "A technique used to compromise a system",
      "A novel self-protecting antivirus software",
      "A security framework for risk assessment"
    ],
    answer: "A technique used to compromise a system"
  },
  {
    question: "True or False: Accuracy is an attribute of information that describes how data is genuine or original rather than reproduced or fabricated.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "What is a recommended defense against phishing emails?",
    options: [
      "Always open attachments to check content",
      "Click links only if the sender is familiar",
      "Verify the source and avoid clicking suspicious links",
      "Forward the email to colleagues"
    ],
    answer: "Verify the source and avoid clicking suspicious links"
  },
  {
    question: "Which of the following are best practices for balancing information security and access? (Select all that apply.)",
    options: [
      "Regular review of user access rights",
      "Implementing role-based access control",
      "Granting blanket access to all employees",
      "Monitoring and auditing access logs"
    ],
    answer: [
      "Regular review of user access rights",
      "Implementing role-based access control",
      "Monitoring and auditing access logs"
    ]
  },
  {
    question: "In an information system, which component is responsible for enabling communication and data transfer between devices?",
    options: [
      "Hardware",
      "Software",
      "Networks",
      "Data"
    ],
    answer: "Networks"
  },

  // --- Week 3: Assignment 3 (10 Questions) ---
  {
    question: "A company's risk register lists \"third-party data breach\" as a critical risk. Which GRC function is primarily responsible for ensuring ongoing monitoring and mitigation of this risk?",
    options: [
      "Governance",
      "Reducible Breach",
      "Compliance",
      "Risk Management"
    ],
    answer: "Risk Management"
  },
  {
    question: "Which of the following statements is correct regarding the implementation of a GRC framework?",
    options: [
      "Implementing a GRC framework guarantees that an organization has immunity from all cyber threats.",
      "A GRC framework helps organizations identify, assess, and mitigate cyber risks, but does not make them fully immune to threats.",
      "GRC frameworks are only relevant for financial compliance and do not address cybersecurity.",
      "GRC frameworks eliminate the need for cybersecurity controls."
    ],
    answer: "A GRC framework helps organizations identify, assess, and mitigate cyber risks, but does not make them fully immune to threats."
  },
  {
    question: "True or False: de facto standard refers to instructions that dictate certain standard behavior within an organization.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "Which of the following refers to a detailed statement of what must be done to comply with policy?",
    options: [
      "de jure practices",
      "guidelines",
      "standard",
      "procedures"
    ],
    answer: "standard"
  },
  {
    question: "If an organization's policy states \"All confidential data must be protected,\" which of the following would be the most appropriate standard to support this policy?",
    options: [
      "Employees should consider using strong passwords",
      "Confidential data must be encrypted using AES-256",
      "Steps for reporting a data breach",
      "Encouraging staff to attend security training"
    ],
    answer: "Confidential data must be encrypted using AES-256"
  },
  {
    question: "True or False: Compliance activities in a GRC framework are limited to following internal company policies and do not involve external laws or regulations.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "Which of the following are examples of preventive controls in IT security? (Select all that apply.)",
    options: [
      "Firewall configuration blocking unauthorized ports",
      "Security awareness training for employees",
      "Daily review of audit logs",
      "Multi-factor authentication (MFA) for system access",
      "Data backup and recovery solutions"
    ],
    answer: [
      "Firewall configuration blocking unauthorized ports",
      "Security awareness training for employees",
      "Multi-factor authentication (MFA) for system access"
    ]
  },
  {
    question: "Which framework, developed by the IT community, prioritizes IT control objectives and is specified by ISACA (Information Systems Audit and Control Association)?",
    options: [
      "COBIT",
      "COSO",
      "ISO/IEC 27001",
      "NIST Cybersecurity Framework"
    ],
    answer: "COBIT"
  },
  {
    question: "Which of the following statements about the NIST Cybersecurity Framework are NOT correct? (Select all that apply.)",
    options: [
      "It guarantees complete protection against all cyber threats.",
      "Only large organizations can benefit from it.",
      "The framework is rigid and cannot be customized to fit an organization's needs.",
      "Implementing it is a one-time activity and does not require ongoing updates.",
      "It deals only with technology and does not consider employee training or policies."
    ],
    answer: [
      "It guarantees complete protection against all cyber threats.",
      "Only large organizations can benefit from it.",
      "The framework is rigid and cannot be customized to fit an organization's needs.",
      "Implementing it is a one-time activity and does not require ongoing updates.",
      "It deals only with technology and does not consider employee training or policies."
    ]
  },
  {
    question: "Which of the following statements is correct regarding ISO 27001 certification?",
    options: [
      "ISO 27001 certification is only relevant for government agencies.",
      "ISO 27001 certification can be issued to both organizations and individuals.",
      "ISO 27001 certification can only be issued to organizations.",
      "ISO 27001 certification is only available to individuals, not organizations."
    ],
    answer: "ISO 27001 certification can only be issued to organizations."
  },

  // --- Week 4: Assignment 4 (10 Questions) ---
  {
    question: "_________ is the actions taken by management to specify the intermediate goals and objectives of the organization in order to obtain specified strategic goals, followed by estimates and schedules for the allocation of resources necessary to achieve those goals and objectives.",
    options: [
      "Tactical Planning",
      "Strategic Planning",
      "Operational Planning",
      "Business Continuity Planning"
    ],
    answer: "Tactical Planning"
  },
  {
    question: "True or False: Strategic plans are used to create operational plans, which in turn are used to develop tactical plans.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "The actions taken by senior management to develop and implement a combined Disaster Recovery (DR) and Business Continuity (BC) policy, plan, and set of recovery teams is known as",
    options: [
      "Business Resumption Planning (BRP)",
      "Business Continuity Planning (BCP)",
      "Disaster Recovery Planning (DCP)",
      "Incident Response Planning (IRP)"
    ],
    answer: "Business Resumption Planning (BRP)"
  },
  {
    question: "_________ is an adverse event that could result in loss of an information asset or assets, but does not currently threaten the viability of the entire organization.",
    options: [
      "Disaster",
      "Phishing",
      "Incident",
      "Impact"
    ],
    answer: "Incident"
  },
  {
    question: "Contingency Plan includes",
    options: [
      "Incident Response Planning (IRP), Organizational Planning (OP), and Business Continuity Planning (BCP)",
      "Organizational Planning (OP), Disaster Recovery Planning (DRP), and Business Continuity Planning (BCP)",
      "Incident Response Planning (IRP), Disaster Recovery Planning (DRP), and Tactical Planning (TP)",
      "Incident Response Planning (IRP), Disaster Recovery Planning (DRP), and Business Continuity Planning (BCP)"
    ],
    answer: "Incident Response Planning (IRP), Disaster Recovery Planning (DRP), and Business Continuity Planning (BCP)"
  },
  {
    question: "_________ is an investigation and assessment of adverse events that can affect the organization, conducted as a preliminary phase of the contingency planning process.",
    options: [
      "Business Contingency Plan",
      "Direct Changeover Conversion Strategy",
      "Crisis Management Planning",
      "Business Impact Analysis"
    ],
    answer: "Business Impact Analysis"
  },
  {
    question: "_________ is the total amount of time the system owner is willing to accept for a mission/business process outage or disruption, including all impact considerations.",
    options: [
      "Recovery Time Objective",
      "Work Recovery Time",
      "Maximum Tolerable Downtime",
      "Total Recovery Time"
    ],
    answer: "Maximum Tolerable Downtime"
  },
  {
    question: "The presence or execution of unknown programs or processes is a",
    options: [
      "Possible incident indicator",
      "Probable incident indicator",
      "Definite incident indicator",
      "All the above"
    ],
    answer: "Possible incident indicator"
  },
  {
    question: "An organization can choose from several cost-based strategies when planning for business continuity. _________ is a facility that provides only basic services, with no computer hardware or peripherals.",
    options: [
      "Hot Sites",
      "Warm Sites",
      "Cold Sites",
      "Yellow Sites"
    ],
    answer: "Cold Sites"
  },
  {
    question: "Which of the following statements accurately distinguish between a threat and an attack in cybersecurity? (Select all that apply.)",
    options: [
      "A threat is a potential danger, while an attack is an active action taken to exploit that danger",
      "An attack can exist without a preceding threat",
      "A threat actor often carries out an attack",
      "An attack's success always depends on the existence of a vulnerability that the threat agent can exploit"
    ],
    answer: [
      "A threat is a potential danger, while an attack is an active action taken to exploit that danger",
      "A threat actor often carries out an attack",
      "An attack's success always depends on the existence of a vulnerability that the threat agent can exploit"
    ]
  },

  // --- Week 5: Assignment 5 (10 Questions) ---
  {
    question: "Which of the following statement is not true?",
    options: [
      "Policies direct how issues should be addressed and technologies should be used.",
      "Information security policy is best disseminated in a comprehensive security education, training, and awareness (SETA) program.",
      "Policies are more detailed than standards and describe the steps that must be taken to conform to standards.",
      "Management must use policies as the basis for all information security planning, design, and deployment."
    ],
    answer: "Policies are more detailed than standards and describe the steps that must be taken to conform to standards."
  },
  {
    question: "_________ is an organizational policy that provides detailed, targeted guidance to instruct all members of the organization in the use of a resource, such as one of its processes or technologies.",
    options: [
      "Systems-specific security policy",
      "Issue-specific security policy",
      "Enterprise information security policy",
      "General or security program policy"
    ],
    answer: "Issue-specific security policy"
  },
  {
    question: "Which of the following is not a component of Enterprise information security policy?",
    options: [
      "Statement of Purpose",
      "Information Security Responsibilities and Roles",
      "Reference to other Information Standards and Guidelines",
      "Statement of Policy"
    ],
    answer: "Statement of Policy"
  },
  {
    question: "_________ contains the specifications of authorization that govern the rights and privileges of users to a particular information asset.",
    options: [
      "Access Control List (ACL)",
      "Capabilities Table",
      "Configuration Rules",
      "Authentication Protocol"
    ],
    answer: "Access Control List (ACL)"
  },
  {
    question: "Access Control Matrix combines the information in",
    options: [
      "Access Control List (ACL)s and Capability Tables.",
      "Access Control List (ACL)s and Authentication Protocol.",
      "Authentication Protocol and Capability Tables.",
      "Configuration Rules and Capability Tables."
    ],
    answer: "Access Control List (ACL)s and Capability Tables."
  },
  {
    question: "Which of the following best differentiates cyber hygiene from cybersecurity?",
    options: [
      "Cyber hygiene is hardware-focused, while cybersecurity is software-focused.",
      "Cyber hygiene is reactive in nature, while cybersecurity is always proactive.",
      "Cyber hygiene involves routine practices for maintaining digital health, whereas cybersecurity includes broader strategies, technologies, and incident response.",
      "Cyber hygiene focuses only on personal devices, while cybersecurity is limited to organizations."
    ],
    answer: "Cyber hygiene involves routine practices for maintaining digital health, whereas cybersecurity includes broader strategies, technologies, and incident response."
  },
  {
    question: "True or False: Configuration rules govern how a security system reacts to the data it receives.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Which of the following is not true about Systems-Specific Security Policies (SysSPs)?",
    options: [
      "SysSPs can be separated into two general groups, managerial guidance SysSPs and technical specifications SysSPs.",
      "SysSPs function as standards or procedures to be used when configuring or maintaining systems.",
      "SysSPs can be combined into a single policy document that contains elements of both managerial guidance SysSPs and technical specifications SysSPs.",
      "SysSPs can be developed at the same time as Issue-specific policies (ISSPs), or they can be prepared after their related ISSPs."
    ],
    answer: "SysSPs can be developed at the same time as Issue-specific policies (ISSPs), or they can be prepared after their related ISSPs."
  },
  {
    question: "Which of the following are the basic rules that should be followed when shaping a policy?",
    options: [
      "Never conflict with law",
      "Properly supported and administered",
      "Involve end users of information systems",
      "All the above"
    ],
    answer: "All the above"
  },
  {
    question: "The statement “Use strong passwords, frequently changed.” is an example of",
    options: [
      "Practice",
      "Standard",
      "Guideline",
      "Policy"
    ],
    answer: "Policy"
  },

  // --- Week 6: Assignment 6 (10 Questions) ---
  {
    question: "Risk management involves three major undertakings:",
    options: [
      "Risk Auditing, Risk Assessment, and Risk Control",
      "Risk Identification, Risk Assessment, and Risk Auditing",
      "Risk Identification, Risk Assessment, and Risk Control",
      "Risk Monitoring, Risk Assessment, and Risk Auditing"
    ],
    answer: "Risk Identification, Risk Assessment, and Risk Control"
  },
  {
    question: "Determine Loss Frequency (Likelihood) comes under:",
    options: [
      "Risk Identification",
      "Risk Auditing",
      "Risk Monitoring",
      "Risk Assessment"
    ],
    answer: "Risk Assessment"
  },
  {
    question: "Residual risk is a combined function of:",
    options: [
      "(1) a threat less the effect of threat-reducing safeguards, (2) a vulnerability less the effect of vulnerability-reducing safeguards, and (3) an asset less the effect of asset value-reducing safeguards.",
      "(1) a threat less the effect of threat-reducing safeguards, (2) a vulnerability plus the effect of vulnerability-reducing safeguards, and (3) an asset less the effect of asset value-reducing safeguards",
      "(1) a threat plus the effect of threat-reducing safeguards, (2) a vulnerability plus the effect of vulnerability-reducing safeguards, and (3) an asset plus the effect of asset value-reducing safeguards",
      "(1) a threat plus the effect of threat-reducing safeguards, (2) a vulnerability plus the effect of vulnerability-reducing safeguards, and (3) an asset less the effect of asset value-reducing safeguards"
    ],
    answer: "(1) a threat less the effect of threat-reducing safeguards, (2) a vulnerability less the effect of vulnerability-reducing safeguards, and (3) an asset less the effect of asset value-reducing safeguards."
  },
  {
    question: "Risk tolerance defines the quantity and nature of risk that organizations are willing to accept as they evaluate the trade-offs between perfect security and unlimited accessibility.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "The calculation of the likelihood of an attack coupled with the attack frequency to determine the expected number of losses within a specified time range is called:",
    options: [
      "Attack Success Probability",
      "Loss Frequency",
      "Loss Magnitude",
      "Probable Loss"
    ],
    answer: "Loss Frequency"
  },
  {
    question: "Based on the given scenario for TechNova Inc., using the formula: Risk = (Loss Frequency × Loss Magnitude) + Uncertainty Term, calculate the final risk score for Asset A.",
    options: [
      "2.75",
      "2.5",
      "3.75",
      "2.25"
    ],
    answer: "2.75"
  },
  {
    question: "Which of the following is not true?",
    options: [
      "The mitigation risk control strategy attempts to shift risk to other assets, other processes, or other organizations.",
      "The mitigation risk control strategy reduces the impact of the loss caused by a realized incident, disaster, or attack through effective contingency planning and preparation.",
      "The mitigation risk control strategy attempts to reduce the impact of an attack rather than reduce the success of the attack itself.",
      "The mitigation risk control strategy requires the creation of three types of contingency plans: the incident response plan, the disaster recovery plan, and the business continuity plan."
    ],
    answer: "The mitigation risk control strategy attempts to shift risk to other assets, other processes, or other organizations."
  },
  {
    question: "The process of identifying and documenting specific and provable flaws in the organization’s information asset environment is known as:",
    options: [
      "Risk Assessment",
      "Vulnerability Assessment",
      "Asset Scanning",
      "Risk Control"
    ],
    answer: "Vulnerability Assessment"
  },
  {
    question: "“Blackmail threat of information disclosure” is an example of:",
    options: [
      "Espionage or trespass",
      "Compromises to intellectual property",
      "Information extortion",
      "Sabotage or vandalism"
    ],
    answer: "Information extortion"
  },
  {
    question: "Which of the following statements is/are true? (Select all that apply)",
    options: [
      "Risk management examines and documents the information technology security being used in an organization.",
      "A key component of a risk management strategy is the identification and classification of the organization’s information assets, while prioritization is performed only after risk controls are implemented.",
      "Risk management helps an organization identify vulnerabilities in its information systems and take carefully reasoned steps to assure the confidentiality, integrity, and availability of all components in those systems.",
      "The goal of risk assessment is to assign a risk rating or score that represents the relative risk for a specific vulnerability of an information asset."
    ],
    answer: [
      "Risk management examines and documents the information technology security being used in an organization.",
      "Risk management helps an organization identify vulnerabilities in its information systems and take carefully reasoned steps to assure the confidentiality, integrity, and availability of all components in those systems.",
      "The goal of risk assessment is to assign a risk rating or score that represents the relative risk for a specific vulnerability of an information asset."
    ]
  },

  // --- Week 7: Assignment 7 (10 Questions) ---
  {
    question: "__________ is the principle that an individual is entrusted to safeguard and control equipment, keying material, and information and is answerable to proper authority for the loss or misuse of that equipment or information.",
    options: [
      "Auditability",
      "Accountability",
      "Confidentiality",
      "Responsibility"
    ],
    answer: "Accountability"
  },
  {
    question: "Which of the following rings provides the least privileges in an Operating System?",
    options: [
      "Ring 0",
      "Ring 1",
      "Ring 2",
      "Ring 3"
    ],
    answer: "Ring 3"
  },
  {
    question: "Which of the following is not true about asymmetric encryption?",
    options: [
      "Asymmetric encryption incorporates mathematical operations involving both a public key and a private key to encipher or decipher a message.",
      "Asymmetric encryption relies on asymmetric cryptography, also known as private key cryptography.",
      "Rivest Shamir Adleman (RSA) is an example of asymmetric encryption.",
      "Asymmetric cryptography has two primary use cases: authentication and confidentiality."
    ],
    answer: "Asymmetric encryption relies on asymmetric cryptography, also known as private key cryptography."
  },
  {
    question: "Which team is responsible for defending against cyber threats by implementing security measures and monitoring systems for suspicious activities?",
    options: [
      "Red Team",
      "Yellow Team",
      "Green Team",
      "Blue Team"
    ],
    answer: "Blue Team"
  },
  {
    question: "True or False : Attribution, the process of identifying the perpetrators of cyber attacks, is easily achievable in cyberspace.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "What does the \"Command and Control\" stage of the Intrusion Kill Chain involve?",
    options: [
      "Gaining initial access to target system",
      "Executing malicious code on target system",
      "Establishing a communication channel to remotely access the compromised system.",
      "Exploiting vulnerabilities to gain control of target system"
    ],
    answer: "Establishing a communication channel to remotely access the compromised system."
  },
  {
    question: "Which layer of the OSI model provides reliable data transfer and error control of connections?",
    options: [
      "Network layer",
      "Data Link layer",
      "Physical layer",
      "Transport layer"
    ],
    answer: "Transport layer"
  },
  {
    question: "Which of the following statements about ethical hacking is/are correct? (Select all that apply)",
    options: [
      "Ethical hackers operate with explicit permission from the organization",
      "Ethical hackers communicate findings to the organization.",
      "Ethical hackers exploit a system's vulnerabilities for personal gain, without a formal agreement.",
      "Ethical hacking is a proactive measure for security posture."
    ],
    answer: [
      "Ethical hackers operate with explicit permission from the organization",
      "Ethical hackers communicate findings to the organization.",
      "Ethical hacking is a proactive measure for security posture."
    ]
  },
  {
    question: "Which of the following statement is true?",
    options: [
      "TCP is connectionless, and UDP is connection-oriented",
      "TCP is connection-oriented, and UDP is connectionless",
      "Both TCP and UDP are connectionless",
      "Both TCP and UDP are connection-oriented"
    ],
    answer: "TCP is connection-oriented, and UDP is connectionless"
  },
  {
    question: "What is the primary function of a Demilitarized Zone (DMZ) in network security architecture?",
    options: [
      "A special VPN to Increase the network speed for internal users",
      "Create an isolated buffer zone for public-facing services, separating them from the internal network",
      "Connect all internal devices directly to internet",
      "Encrypt all outgoing network traffic"
    ],
    answer: "Create an isolated buffer zone for public-facing services, separating them from the internal network"
  },

  // --- Week 8: Assignment 8 (10 Questions) ---
  {
    question: "The five risk control strategies are:",
    options: [
      "Transference, mitigation, acceptance, optimization and termination",
      "Defense, transference, mitigation, optimization, and termination",
      "Defense, transference, mitigation, acceptance, and termination",
      "Optimization, transference, mitigation, acceptance, and termination"
    ],
    answer: "Defense, transference, mitigation, acceptance, and termination"
  },
  {
    question: "Which risk control strategy is also referred to as Risk Avoidance in NIST SP 800-30?",
    options: [
      "Optimization",
      "Mitigation",
      "Acceptance",
      "Termination"
    ],
    answer: "Termination"
  },
  {
    question: "Which of the following is not true?",
    options: [
      "Monoalphabetic substitution cipher incorporates only a single alphabet in the encryption process",
      "Polyalphabetic substitution cipher incorporates two or more alphabets in the encryption process",
      "Vigenère cipher is an advanced type of substitution cipher that uses a simple polyalphabetic code",
      "Vernam cipher is implemented using tabula recta"
    ],
    answer: "Vernam cipher is implemented using tabula recta"
  },
  {
    question: "Which of the following is NOT typically considered a factor affecting the cost of a control or safeguard?",
    options: [
      "Cost of development or acquisition of hardware, software, and services",
      "Training fees for personnel",
      "Cost of implementation (installation, configuration, and testing)",
      "Marketing and advertising expenses"
    ],
    answer: "Marketing and advertising expenses"
  },
  {
    question: "A website has an estimated value of $1 million. A hacker defacement scenario indicates that a deliberate act of sabotage could damage 10% of the site’s value. What is the Single Loss Expectancy (SLE)?",
    options: [
      "$1,000",
      "$10,000",
      "$100,000",
      "$1,000,000"
    ],
    answer: "$100,000"
  },
  {
    question: "A website has a Single Loss Expectancy (SLE) of $100,000. If the Annualized Rate of Occurrence (ARO) is estimated at 0.50, what is the Annualized Loss Expectancy (ALE)?",
    options: [
      "$5,000",
      "$50,000",
      "$100,000",
      "$500,000"
    ],
    answer: "$50,000"
  },
  {
    question: "Which of the following is true regarding Cost-Benefit Analysis (CBA), Annualized Loss Expectancy (ALE), and annualized cost of a safeguard (ACS)?",
    options: [
      "CBA = ALE(prior) - ALE(post) - ACS",
      "CBA = ALE(prior) - ALE(post) + ACS",
      "CBA = ALE(prior) + ALE(post) - ACS",
      "CBA = ALE(prior) + ALE(post) + ACS"
    ],
    answer: "CBA = ALE(prior) - ALE(post) - ACS"
  },
  {
    question: "Which of the following statements is/are correct? (Select all that apply)",
    options: [
      "Bit stream cipher is an encryption method that involves converting plaintext to ciphertext one bit at a time",
      "Block cipher is an encryption method that involves dividing the plaintext into a sets of bits and then converting the plaintext to ciphertext one block at a time",
      "Bit stream methods most commonly use algorithm functions like XOR, whereas block methods can use XOR, transposition, or substitution",
      "Enciphering is the process of converting an encoded message back to its original readable form"
    ],
    answer: [
      "Bit stream cipher is an encryption method that involves converting plaintext to ciphertext one bit at a time",
      "Block cipher is an encryption method that involves dividing the plaintext into a sets of bits and then converting the plaintext to ciphertext one block at a time",
      "Bit stream methods most commonly use algorithm functions like XOR, whereas block methods can use XOR, transposition, or substitution"
    ]
  },
  {
    question: "_________ are encrypted messages that can be mathematically proven as authentic.",
    options: [
      "Digital signatures",
      "Digital Certificates",
      "Message Authentication Codes",
      "Hash values"
    ],
    answer: "Digital signatures"
  },
  {
    question: "Which security concept ensures that a sender cannot deny having sent a message, by reversing public-key encryption to verify its origin?",
    options: [
      "Confidentiality",
      "Integrity",
      "Nonrepudiation",
      "Authentication"
    ],
    answer: "Nonrepudiation"
  },

  // --- Week 9: Assignment 9 (10 Questions) ---
  {
    question: "What is the earliest notion of privacy in history?",
    options: [
      "Privacy as a legal right with clearly defined boundaries",
      "Privacy as freedom, emphasizing the right to be let alone",
      "Privacy as a commercial concept related to data protection",
      "Privacy as a national security concern"
    ],
    answer: "Privacy as freedom, emphasizing the right to be let alone"
  },
  {
    question: "True or False: Privacy is an absolute right in the context of law.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "The acronym FIPP stands for:",
    options: [
      "Fair Internet Privacy Policies",
      "Federal Information Protection Protocols",
      "Fair Information Practice Principles",
      "Foundational Internet Privacy Procedures"
    ],
    answer: "Fair Information Practice Principles"
  },
  {
    question: "The __________ view argues that privacy is not an independent concept but can be reduced to other rights like property or liberty.",
    options: [
      "Economic",
      "Feminist",
      "Political",
      "Reductionist"
    ],
    answer: "Reductionist"
  },
  {
    question: "What is the core principle of informational privacy?",
    options: [
      "The right to remain anonymous at all times",
      "The complete elimination of all personal data collection",
      "The responsibility of companies to prioritize profits over user privacy",
      "The ability of individuals to decide what personal information they share and with whom"
    ],
    answer: "The ability of individuals to decide what personal information they share and with whom"
  },
  {
    question: "The FIPPs were first introduced in a report by:",
    options: [
      "The Federal Trade Commission (FTC)",
      "The European Union",
      "The US Secretary's Advisory Committee on Automated Personal Data Systems",
      "A private industry consortium"
    ],
    answer: "The US Secretary's Advisory Committee on Automated Personal Data Systems"
  },
  {
    question: "According to India's DPDP Act, what/who is the 'data principle'?",
    options: [
      "The company that determines the purpose & means of data processing",
      "An external auditor who verifies a company's data protection measures",
      "The individual whose data is being processed/used",
      "A government agency responsible for enforcing the law"
    ],
    answer: "The individual whose data is being processed/used"
  },
  {
    question: "Which of the following aspects of data privacy is NOT explicitly addressed in the FIPP?",
    options: [
      "The ability to access and correct personal data",
      "The right to be forgotten",
      "The requirement for secret personal data record-keeping systems",
      "The need for individual consent for data collection"
    ],
    answer: "The right to be forgotten"
  },
  {
    question: "Under India's DPDP Act, which of the following correctly describes the role of a Data Processor?",
    options: [
      "The individual whose personal data is collected and processed",
      "The entity that determines the purpose and means of processing personal data",
      "The entity that processes personal data on behalf of the Data Fiduciary",
      "The government which is enforcing the Act"
    ],
    answer: "The entity that processes personal data on behalf of the Data Fiduciary"
  },
  {
    question: "Which of the following are important reasons why information privacy is significant for organizations? (Select all that apply)",
    options: [
      "Protect sensitive customer and employee data from unauthorized access",
      "Comply with legal and regulatory requirements related to data protection",
      "To increase the amount of data collected regardless of its relevance for business competition",
      "To maintain customer trust and protect the organization's reputation",
      "Avoid financial penalties and legal consequences due to data breaches"
    ],
    answer: [
      "Protect sensitive customer and employee data from unauthorized access",
      "Comply with legal and regulatory requirements related to data protection",
      "To maintain customer trust and protect the organization's reputation",
      "Avoid financial penalties and legal consequences due to data breaches"
    ]
  },

  // --- Week 10: Assignment 10 (10 Questions) ---
  {
    question: "_________ is the phenomenon where individuals claim to value privacy, yet in practice, they trade their personal data for trivial benefits or fail to use measures to protect their privacy.",
    options: [
      "Privacy Fatigue",
      "Privacy Negligence",
      "Privacy Paradox",
      "Privacy Breach"
    ],
    answer: "Privacy Paradox"
  },
  {
    question: "Which of the following is not true:",
    options: [
      "Personally Identifiable Information (PII) refers to any data that can be linked to a specific individual and used to reveal or misuse their identity",
      "A social security number (SSN) can be considered as a sensitive PII",
      "A person’s medical records can be considered as a non-sensitive PII",
      "Non-sensitive PII would not cause significant harm to a person if leaked or stolen"
    ],
    answer: "A person’s medical records can be considered as a non-sensitive PII"
  },
  {
    question: "Which of the following best distinguishes the Right to Privacy from the Right to Anonymity?",
    options: [
      "Privacy is about preventing identity disclosure, while anonymity is about protecting personal information",
      "Privacy ensures control over personal data and how it is shared, while anonymity ensures that actions cannot be traced back to an identifiable individual",
      "Privacy is a technical safeguard, while anonymity is a legal right",
      "Privacy applies only to digital data, while anonymity applies only to physical identity"
    ],
    answer: "Privacy ensures control over personal data and how it is shared, while anonymity ensures that actions cannot be traced back to an identifiable individual"
  },
  {
    question: "True or False: Personal data that has been de-identified, encrypted or pseudonymised, but can be used to re-identify a person, remains personal data and falls within the scope of the GDPR.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "_________ has been defined as the intentional concealment of information.",
    options: [
      "Security",
      "Anonymity",
      "Confidentiality",
      "Secrecy"
    ],
    answer: "Secrecy"
  },
  {
    question: "British law embraces privacy as _________.",
    options: [
      "Security",
      "Anonymity",
      "Confidentiality",
      "Secrecy"
    ],
    answer: "Confidentiality"
  },
  {
    question: "Which of the statements about pseudonymization is true?",
    options: [
      "Pseudonymization is a technique proposed by frameworks like Privacy by Design offering practical substitutes for using the raw data, especially when this data is sensitive",
      "Various pseudonymization techniques enable you to preserve format or understand the original intention for that data",
      "Pseudonymization methods often maintain the capability to establish connections between data, which proves beneficial when linking datasets using personal identifiers or other sensitive columns",
      "All the above"
    ],
    answer: "All the above"
  },
  {
    question: "Differential privacy is:",
    options: [
      "A method of probabilistically limiting the amount of information an attacker can gain when data is released",
      "A method for measuring and monitoring the loss of privacy experienced by an individual in a dataset that has been released",
      "One of the most effective methods for providing individuals in a dataset with plausible deniability while still performing data analysis",
      "All the above"
    ],
    answer: "All the above"
  },
  {
    question: "Which of the following statement is not true about k-anonymity?",
    options: [
      "k-anonymity is an intuitive and widely used method for modifying data for privacy protection",
      "For k-anonymity to be achieved, there need to be at least k+1 individuals in the dataset who share the set of attributes that might become identifying for each individual",
      "Generalization is a method for achieving K-Anonymity",
      "k-anonymity can be provided by using suppression techniques"
    ],
    answer: "For k-anonymity to be achieved, there need to be at least k+1 individuals in the dataset who share the set of attributes that might become identifying for each individual"
  },
  {
    question: "Which of the following statements is/are correct? (Select all that apply)",
    options: [
      "Privacy-preserving data mining enables the extraction of insights from datasets while ensuring that the identities of data subjects or confidential information remain undisclosed",
      "Randomization, anonymyzation and encryption are methods of privacy-preserving data mining.",
      "The goal of privacy-preserving data mining is to develop data mining methods without increasing the risk of misuse of the data",
      "Privacy-preserving data mining remove irrelevant data before mining"
    ],
    answer: [
      "Privacy-preserving data mining enables the extraction of insights from datasets while ensuring that the identities of data subjects or confidential information remain undisclosed",
      "Randomization, anonymyzation and encryption are methods of privacy-preserving data mining.",
      "The goal of privacy-preserving data mining is to develop data mining methods without increasing the risk of misuse of the data"
    ]
  },

  // --- Week 11: Assignment 11 (10 Questions) ---
  {
    question: "Within how many hours does GDPR require organizations to report cyber incidents?",
    options: [
      "48 hours",
      "There is no such requirement",
      "72 hours",
      "96 hours"
    ],
    answer: "72 hours"
  },
  {
    question: "True or False: Privacy is a fundamental right in India.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Which legal basis for processing personal data applies when someone's life is in danger, and the processing is necessary to save it?",
    options: [
      "Consent",
      "Public interest",
      "Contract",
      "Vital interests"
    ],
    answer: "Vital interests"
  },
  {
    question: "GDPR applies to which of the following organizations?",
    options: [
      "Only organizations located in EU",
      "Any organization, regardless of location, that processes the personal data of individuals in EU",
      "Only government bodies in EU",
      "Organizations processing only anonymous data"
    ],
    answer: "Any organization, regardless of location, that processes the personal data of individuals in EU"
  },
  {
    question: "Which of the following is/are guiding principles of the GDPR: (Select all that apply)",
    options: [
      "Lawfulness, fairness, and transparency",
      "Purpose limitation",
      "Data minimization",
      "Data speculation"
    ],
    answer: [
      "Lawfulness, fairness, and transparency",
      "Purpose limitation",
      "Data minimization"
    ]
  },
  {
    question: "Which of the following is not a valid legal basis for processing personal data under GDPR?",
    options: [
      "Consent of the data subject",
      "Fulfillment of a contract",
      "Public interest",
      "Profit maximization"
    ],
    answer: "Profit maximization"
  },
  {
    question: "True or False: GDPR doesn't mandate the exact security measures organizations must take.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Which of the following best describes the concept of data localization in India?",
    options: [
      "Permanent deletion of all sensitive data",
      "Mandatory storage and processing of certain data within the country’s borders",
      "Making data available to all global users",
      "Storing data only on cloud servers outside India"
    ],
    answer: "Mandatory storage and processing of certain data within the country’s borders"
  },
  {
    question: "Under GDPR, which of the following is a key responsibility of the Data Protection Officer (DPO)?",
    options: [
      "Designing the firm’s IT infrastructure",
      "Advising on and monitoring firm’s compliance with data protection laws",
      "Managing all financial transactions",
      "Hiring and firing employees"
    ],
    answer: "Advising on and monitoring firm’s compliance with data protection laws"
  },
  {
    question: "In the context of Aadhaar data, who would be considered the Data Principal?",
    options: [
      "The Unique Identification Authority of India (UIDAI)",
      "The individual to whom the Aadhaar number and related data belong",
      "The service providers using Aadhaar authentication",
      "The government agency processing the data"
    ],
    answer: "The individual to whom the Aadhaar number and related data belong"
  },

  // --- Week 12: Assignment 12 (10 Questions) ---
  {
    question: "What does Prospect Theory suggest about how people perceive gains and losses?",
    options: [
      "People value all gains and losses equally",
      "Individuals are more likely to take risks for potential gains",
      "Losses are typically felt more intensely than gains",
      "People only care about maximizing their financial gains"
    ],
    answer: "Losses are typically felt more intensely than gains"
  },
  {
    question: "An employee believes that the personal data on their device is more valuable than others perceive, simply because it belongs to them. This is an example of which cognitive bias?",
    options: [
      "Anchoring Bias",
      "Endowment Effect",
      "Confirmation Bias",
      "Availability Heuristic"
    ],
    answer: "Endowment Effect"
  },
  {
    question: "Which design approach is best recommended to address privacy concerns with digital contact tracing applications?",
    options: [
      "Implement a centralized architecture where all contact tracing data is stored and processed by a single authority",
      "Develop a decentralized, privacy-preserving architecture that minimizes the sharing of personal data",
      "Prioritize public health benefits over individual privacy protections in the design of contact tracing systems",
      "Require mandatory participation in contact tracing programs to maximize the effectiveness of the technology"
    ],
    answer: "Develop a decentralized, privacy-preserving architecture that minimizes the sharing of personal data"
  },
  {
    question: "Which of the following is an example of the privacy paradox by an action of a user?",
    options: [
      "Reads a website's privacy policy in detail before signing up",
      "Chooses to pay for a service to avoid targeted ads",
      "Expresses concern about data collection but uses free social media services",
      "Deletes their old accounts to protect their personal information"
    ],
    answer: "Expresses concern about data collection but uses free social media services"
  },
  {
    question: "In the typical case of privacy valuation, the relationship between Willingness-to-Accept (WTA) and Willingness-to-Pay (WTP) is:",
    options: [
      "WTA < WTP",
      "WTA = WTP",
      "WTA > WTP",
      "No relationship between WTA and WTP"
    ],
    answer: "WTA > WTP"
  },
  {
    question: "Which of the following is true about privacy valuation?",
    options: [
      "Privacy valuation is consistent across all individuals and contexts",
      "Privacy valuation is influenced by external factors and remains stable over time",
      "Privacy valuation has variability and is context driven",
      "Privacy valuation is solely determined by economic factors and market trends"
    ],
    answer: "Privacy valuation has variability and is context driven"
  },
  {
    question: "What is the core idea behind the privacy calculus?",
    options: [
      "Individuals make irrational decisions about sharing personal information",
      "Individuals engage in a cost-benefit analysis to decide whether to disclose personal data",
      "Individuals do not have any control over the disclosure of their personal information",
      "Individuals are solely motivated by the potential benefits of data sharing"
    ],
    answer: "Individuals engage in a cost-benefit analysis to decide whether to disclose personal data"
  },
  {
    question: "Why is understanding the value that individuals assign to the protection of their personal data important for businesses?",
    options: [
      "To enable businesses to use personal data for maximum commercial gain",
      "To help businesses develop privacy-enhancing initiatives that can provide a competitive advantage",
      "To allow businesses to mandate strict data collection and usage policies without considering consumer preferences",
      "To facilitate the creation of personal data trading markets where individuals can monetize their information"
    ],
    answer: "To help businesses develop privacy-enhancing initiatives that can provide a competitive advantage"
  },
  {
    question: "A father took photos of his sick toddler to share with a doctor. An automated system flagged the images as child abuse material and flagged the father as a criminal. This incident highlights which key concern in information privacy?",
    options: [
      "Accuracy and fairness in automated systems",
      "Data minimization",
      "Right to be forgotten",
      "Encryption of personal data"
    ],
    answer: "Accuracy and fairness in automated systems"
  },
  {
    question: "During online checkout, a retailer asks customers for shipping addresses and contact details to deliver orders. However, it also requests marital status and income, which are not relevant. This violates which privacy principle?",
    options: [
      "Data Portability",
      "Data Minimization",
      "Purpose Limitation",
      "Transparency Requirement"
    ],
    answer: "Data Minimization"
  }
];
