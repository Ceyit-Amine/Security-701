const QUESTIONS = [
  {
    "id": 1,
    "domain": 1,
    "question": "A hospital portal must ensure patient records cannot be read by unauthorized people. Which CIA property is MOST directly protected by encryption at rest?",
    "options": [
      "Non-repudiation",
      "Confidentiality",
      "Integrity",
      "Availability"
    ],
    "correct": 1,
    "explanation": "Encryption at rest protects confidentiality by making stored data unreadable without the key.",
    "correct_letter": "B"
  },
  {
    "id": 2,
    "domain": 1,
    "question": "A file's hash changes after transfer. What does this indicate?",
    "options": [
      "The file's integrity may have been compromised",
      "The sender is authenticated",
      "Availability has improved",
      "The file was encrypted"
    ],
    "correct": 0,
    "explanation": "Reminder: hashing proves integrity. A different hash means the content changed.",
    "correct_letter": "A"
  },
  {
    "id": 3,
    "domain": 1,
    "question": "Which encryption type uses the SAME key to encrypt and decrypt?",
    "options": [
      "Symmetric",
      "Asymmetric",
      "Digital signature",
      "Hashing"
    ],
    "correct": 0,
    "explanation": "Reminder: symmetric uses one shared key for both operations. Asymmetric uses a public/private pair.",
    "correct_letter": "A"
  },
  {
    "id": 4,
    "domain": 1,
    "question": "A sender encrypts a message with the recipient's public key. Only the recipient can read it because only they hold the:",
    "options": [
      "Certificate",
      "Hash",
      "Public key",
      "Private key"
    ],
    "correct": 3,
    "explanation": "In asymmetric encryption, the public key encrypts and the matching private key decrypts.",
    "correct_letter": "D"
  },
  {
    "id": 5,
    "domain": 1,
    "question": "A digital signature primarily provides integrity and:",
    "options": [
      "Availability",
      "Anonymity",
      "Confidentiality of the whole message",
      "Non-repudiation"
    ],
    "correct": 3,
    "explanation": "A signature proves who signed and that the content was not altered, giving non-repudiation.",
    "correct_letter": "D"
  },
  {
    "id": 6,
    "domain": 1,
    "question": "Zero Trust is BEST described as:",
    "options": [
      "Trust devices on the LAN",
      "Remove all firewalls",
      "Verify explicitly, use least privilege, assume breach",
      "Trust all internal users"
    ],
    "correct": 2,
    "explanation": "Zero Trust never trusts automatically; every user and device is verified.",
    "correct_letter": "C"
  },
  {
    "id": 7,
    "domain": 1,
    "question": "A security camera watching a data center door is which control type?",
    "options": [
      "Corrective",
      "Compensating",
      "Detective",
      "Preventive"
    ],
    "correct": 2,
    "explanation": "Cameras detect and record events; they do not by themselves prevent entry.",
    "correct_letter": "C"
  },
  {
    "id": 8,
    "domain": 1,
    "question": "Requiring a manager to approve a request before access is granted is an example of:",
    "options": [
      "Technical control",
      "Administrative / managerial control",
      "Physical control",
      "Detective control"
    ],
    "correct": 1,
    "explanation": "Approvals and policies are managerial controls governing how access is granted.",
    "correct_letter": "B"
  },
  {
    "id": 9,
    "domain": 1,
    "question": "Which concept ensures a user cannot deny sending a signed email?",
    "options": [
      "Obfuscation",
      "Availability",
      "Non-repudiation",
      "Confidentiality"
    ],
    "correct": 2,
    "explanation": "Non-repudiation means actions can be proven and cannot credibly be denied.",
    "correct_letter": "C"
  },
  {
    "id": 10,
    "domain": 1,
    "question": "A certificate that is expired will MOST likely cause browsers to:",
    "options": [
      "Disable encryption silently",
      "Speed up TLS",
      "Warn that the site identity cannot be trusted",
      "Extend the session"
    ],
    "correct": 2,
    "explanation": "Expired certificates fail validation, so browsers warn about trust.",
    "correct_letter": "C"
  },
  {
    "id": 11,
    "domain": 1,
    "question": "Salting passwords before hashing mainly defends against:",
    "options": [
      "Rainbow table attacks",
      "DDoS attacks",
      "Tailgating",
      "Privilege escalation"
    ],
    "correct": 0,
    "explanation": "Unique salts make precomputed rainbow tables ineffective for stored passwords.",
    "correct_letter": "A"
  },
  {
    "id": 12,
    "domain": 2,
    "question": "An attacker group funded by a government targets another country's power grid. This actor is BEST classified as:",
    "options": [
      "Nation-state",
      "Hacktivist",
      "Script kiddie",
      "Insider"
    ],
    "correct": 0,
    "explanation": "Nation-state actors are government-backed, well resourced, and often target critical infrastructure.",
    "correct_letter": "A"
  },
  {
    "id": 13,
    "domain": 2,
    "question": "An email to the CFO appears to come from the CEO asking for an urgent wire transfer. This is:",
    "options": [
      "Whaling",
      "Baiting",
      "Vishing",
      "Smishing"
    ],
    "correct": 0,
    "explanation": "Whaling is spear phishing aimed at senior executives such as a CEO or CFO.",
    "correct_letter": "A"
  },
  {
    "id": 14,
    "domain": 2,
    "question": "A user receives a text message with a link claiming their bank account is locked. This is:",
    "options": [
      "Pretexting",
      "Watering hole",
      "Vishing",
      "Smishing"
    ],
    "correct": 3,
    "explanation": "Smishing is phishing delivered by SMS text message.",
    "correct_letter": "D"
  },
  {
    "id": 15,
    "domain": 2,
    "question": "Malware that encrypts files and demands payment is:",
    "options": [
      "Ransomware",
      "Worm",
      "Rootkit",
      "Logic bomb"
    ],
    "correct": 0,
    "explanation": "Ransomware encrypts data and demands payment for the decryption key.",
    "correct_letter": "A"
  },
  {
    "id": 16,
    "domain": 2,
    "question": "Malware that spreads by itself across a network without user action is a:",
    "options": [
      "Spyware",
      "Worm",
      "Keylogger",
      "Trojan"
    ],
    "correct": 1,
    "explanation": "Worms self-propagate across networks without needing a host file or user click.",
    "correct_letter": "B"
  },
  {
    "id": 17,
    "domain": 2,
    "question": "A program that looks like a useful game but installs a backdoor is a:",
    "options": [
      "Trojan",
      "RAT only",
      "Virus",
      "Worm"
    ],
    "correct": 0,
    "explanation": "A Trojan disguises itself as legitimate software while hiding malicious functions.",
    "correct_letter": "A"
  },
  {
    "id": 18,
    "domain": 2,
    "question": "An attacker leaves infected USB drives in a parking lot hoping staff plug them in. This technique is:",
    "options": [
      "Pharming",
      "Tailgating",
      "Baiting",
      "Pretexting"
    ],
    "correct": 2,
    "explanation": "Baiting lures victims with something attractive, such as a free USB drive.",
    "correct_letter": "C"
  },
  {
    "id": 19,
    "domain": 2,
    "question": "An attacker follows an employee through a secure door without badging. This is:",
    "options": [
      "Piggybacking / tailgating",
      "Phishing",
      "Vishing",
      "Shoulder surfing"
    ],
    "correct": 0,
    "explanation": "Tailgating / piggybacking is entering a secure area by following an authorized person.",
    "correct_letter": "A"
  },
  {
    "id": 20,
    "domain": 2,
    "question": "A website frequented by engineers at a target company is compromised to infect visitors. This is a:",
    "options": [
      "Watering hole attack",
      "On-path attack",
      "Birthday attack",
      "DDoS attack"
    ],
    "correct": 0,
    "explanation": "A watering hole compromises a site the targets regularly visit.",
    "correct_letter": "A"
  },
  {
    "id": 21,
    "domain": 2,
    "question": "Which vulnerability is MOST dangerous because no patch exists yet?",
    "options": [
      "Zero-day",
      "Unsupported OS",
      "Misconfiguration",
      "Weak password"
    ],
    "correct": 0,
    "explanation": "A zero-day is unknown to the vendor or unpatched, so defenders have no fix yet.",
    "correct_letter": "A"
  },
  {
    "id": 22,
    "domain": 2,
    "question": "Many failed logins followed by a successful login from a foreign country at 3 a.m. MOST likely indicates:",
    "options": [
      "A patch failure",
      "Account compromise",
      "Normal maintenance",
      "DNS poisoning"
    ],
    "correct": 1,
    "explanation": "Impossible travel plus failed logins is a classic indicator of compromise.",
    "correct_letter": "B"
  },
  {
    "id": 23,
    "domain": 2,
    "question": "An attacker intercepts and alters traffic between a user and a website in real time. This is an:",
    "options": [
      "Offline attack",
      "Pass-the-hash attack",
      "On-path (man-in-the-middle) attack",
      "Watering hole attack"
    ],
    "correct": 2,
    "explanation": "An on-path attack sits between two parties, intercepting or modifying traffic.",
    "correct_letter": "C"
  },
  {
    "id": 24,
    "domain": 2,
    "question": "Using a stolen password hash directly to authenticate without cracking it is:",
    "options": [
      "Credential stuffing",
      "Brute force",
      "Password spraying",
      "Pass-the-hash"
    ],
    "correct": 3,
    "explanation": "Pass-the-hash uses the hash itself as the credential.",
    "correct_letter": "D"
  },
  {
    "id": 25,
    "domain": 2,
    "question": "Trying ONE common password against MANY accounts is:",
    "options": [
      "Password spraying",
      "Credential stuffing",
      "Rainbow table",
      "Brute force"
    ],
    "correct": 0,
    "explanation": "Password spraying tries a few common passwords across many accounts to avoid lockouts.",
    "correct_letter": "A"
  },
  {
    "id": 26,
    "domain": 2,
    "question": "Trying username/password pairs leaked from another site is:",
    "options": [
      "Phishing",
      "Credential stuffing",
      "Pretexting",
      "Password spraying"
    ],
    "correct": 1,
    "explanation": "Credential stuffing reuses breached credentials from other services.",
    "correct_letter": "B"
  },
  {
    "id": 27,
    "domain": 2,
    "question": "A supply chain attack targets an organization by compromising its:",
    "options": [
      "Employees only",
      "Software vendor or supplier",
      "Password policy",
      "Firewall rules"
    ],
    "correct": 1,
    "explanation": "Supply chain attacks enter through trusted vendors, updates, or suppliers.",
    "correct_letter": "B"
  },
  {
    "id": 28,
    "domain": 2,
    "question": "An insider copies customer data to a personal drive before resigning. The main threat characteristic is:",
    "options": [
      "Automated malware only",
      "No access",
      "Authorized access abused from inside",
      "External and unskilled"
    ],
    "correct": 2,
    "explanation": "Insiders abuse legitimate access, making detection harder.",
    "correct_letter": "C"
  },
  {
    "id": 29,
    "domain": 2,
    "question": "A DDoS attack primarily threatens which CIA property?",
    "options": [
      "Availability",
      "Non-repudiation",
      "Integrity",
      "Confidentiality"
    ],
    "correct": 0,
    "explanation": "DDoS overwhelms a service so legitimate users cannot use it - an availability attack.",
    "correct_letter": "A"
  },
  {
    "id": 30,
    "domain": 2,
    "question": "Typosquatting relies on users:",
    "options": [
      "Clicking email links only",
      "Using MFA",
      "Mistyping a URL and landing on a fake site",
      "Sharing passwords"
    ],
    "correct": 2,
    "explanation": "Typosquatting registers look-alike domains for common typing mistakes.",
    "correct_letter": "C"
  },
  {
    "id": 31,
    "domain": 2,
    "question": "The BEST first mitigation for phishing across a company is:",
    "options": [
      "Longer passwords only",
      "Block all email",
      "Disable the internet",
      "User awareness training plus email filtering and MFA"
    ],
    "correct": 3,
    "explanation": "Layered defense works: training, filtering, and MFA limits damage from a stolen password.",
    "correct_letter": "D"
  },
  {
    "id": 32,
    "domain": 3,
    "question": "In SaaS, the customer is MOST responsible for:",
    "options": [
      "Managing user access and their data",
      "Updating the provider's OS",
      "Maintaining data center power",
      "Patching the hypervisor"
    ],
    "correct": 0,
    "explanation": "In SaaS the provider runs the app; the customer manages accounts, access, and data.",
    "correct_letter": "A"
  },
  {
    "id": 33,
    "domain": 3,
    "question": "A company rents virtual servers and manages its own OS and apps. This model is:",
    "options": [
      "PaaS",
      "IaaS",
      "SaaS",
      "XaaS"
    ],
    "correct": 1,
    "explanation": "IaaS provides infrastructure; the customer manages OS and applications.",
    "correct_letter": "B"
  },
  {
    "id": 34,
    "domain": 3,
    "question": "A screened subnet (DMZ) is used to:",
    "options": [
      "Host public servers separated from the internal network",
      "Store offline backups",
      "Encrypt databases",
      "Replace authentication"
    ],
    "correct": 0,
    "explanation": "A DMZ isolates public-facing servers from the trusted internal network.",
    "correct_letter": "A"
  },
  {
    "id": 35,
    "domain": 3,
    "question": "Which protocol should replace Telnet for remote administration?",
    "options": [
      "SSH",
      "HTTP",
      "FTP",
      "SNMP v1"
    ],
    "correct": 0,
    "explanation": "SSH encrypts remote administration; Telnet sends data in clear text.",
    "correct_letter": "A"
  },
  {
    "id": 36,
    "domain": 3,
    "question": "Which is the secure version for file transfer?",
    "options": [
      "TFTP",
      "SFTP",
      "FTP",
      "Telnet"
    ],
    "correct": 1,
    "explanation": "SFTP transfers files over SSH encryption.",
    "correct_letter": "B"
  },
  {
    "id": 37,
    "domain": 3,
    "question": "Network segmentation helps security mainly by:",
    "options": [
      "Limiting lateral movement if one segment is breached",
      "Making networks faster only",
      "Encrypting all data",
      "Removing need for firewalls"
    ],
    "correct": 0,
    "explanation": "Segmentation contains a breach and limits how far an attacker can move.",
    "correct_letter": "A"
  },
  {
    "id": 38,
    "domain": 3,
    "question": "A load balancer primarily supports:",
    "options": [
      "Non-repudiation",
      "Availability and performance by distributing traffic",
      "Confidentiality",
      "Password storage"
    ],
    "correct": 1,
    "explanation": "Load balancers distribute traffic so no single server is overwhelmed.",
    "correct_letter": "B"
  },
  {
    "id": 39,
    "domain": 3,
    "question": "Containers differ from VMs because containers:",
    "options": [
      "Always include a full separate OS kernel per container",
      "Share the host OS kernel and are lighter",
      "Require no patching",
      "Cannot be isolated"
    ],
    "correct": 1,
    "explanation": "Containers share the host kernel, making them lighter than full virtual machines.",
    "correct_letter": "B"
  },
  {
    "id": 40,
    "domain": 3,
    "question": "A hypervisor is used to:",
    "options": [
      "Encrypt email",
      "Manage certificates",
      "Run multiple virtual machines on one host",
      "Filter web content"
    ],
    "correct": 2,
    "explanation": "A hypervisor creates and runs virtual machines on physical hardware.",
    "correct_letter": "C"
  },
  {
    "id": 41,
    "domain": 3,
    "question": "Defense in depth means:",
    "options": [
      "Encrypt everything twice",
      "Multiple overlapping layers of controls",
      "Block all outbound traffic",
      "One strong firewall is enough"
    ],
    "correct": 1,
    "explanation": "Defense in depth uses layers so failure of one control does not expose everything.",
    "correct_letter": "B"
  },
  {
    "id": 42,
    "domain": 3,
    "question": "Which design places a web server, app server, and database on separate tiers with firewalls between them?",
    "options": [
      "Air gap for all users",
      "Single VLAN",
      "Multi-tier segmented architecture",
      "Flat network"
    ],
    "correct": 2,
    "explanation": "Tiered segmentation limits direct access from the internet to the database.",
    "correct_letter": "C"
  },
  {
    "id": 43,
    "domain": 3,
    "question": "An air-gapped system is:",
    "options": [
      "In the cloud",
      "Physically isolated from other networks",
      "Connected by VPN only",
      "Protected by antivirus only"
    ],
    "correct": 1,
    "explanation": "Air-gapped systems have no network connection to untrusted networks.",
    "correct_letter": "B"
  },
  {
    "id": 44,
    "domain": 3,
    "question": "Which is BEST for securing API communications?",
    "options": [
      "HTTP with basic auth",
      "Telnet",
      "FTP",
      "TLS with token-based authentication"
    ],
    "correct": 3,
    "explanation": "APIs should use encrypted TLS and strong token authentication.",
    "correct_letter": "D"
  },
  {
    "id": 45,
    "domain": 3,
    "question": "RAID and clustering primarily improve:",
    "options": [
      "Confidentiality",
      "Authentication",
      "Availability / resilience",
      "Integrity of hashes"
    ],
    "correct": 2,
    "explanation": "Redundancy technologies keep services available when a component fails.",
    "correct_letter": "C"
  },
  {
    "id": 46,
    "domain": 3,
    "question": "A jump server is used to:",
    "options": [
      "Provide a controlled single point for admin access to a secure zone",
      "Store backups",
      "Replace MFA",
      "Host the public website"
    ],
    "correct": 0,
    "explanation": "Admins connect through a hardened jump server into sensitive segments.",
    "correct_letter": "A"
  },
  {
    "id": 47,
    "domain": 3,
    "question": "Microsegmentation in a data center helps by:",
    "options": [
      "Applying granular controls between workloads",
      "Disabling logging",
      "Merging all servers",
      "Removing all VLANs"
    ],
    "correct": 0,
    "explanation": "Microsegmentation enforces policy between individual workloads, limiting lateral movement.",
    "correct_letter": "A"
  },
  {
    "id": 48,
    "domain": 4,
    "question": "Which is TRUE MFA with two different factors?",
    "options": [
      "Password + code from an authenticator app",
      "Username + password",
      "Password + security question",
      "Two different passwords"
    ],
    "correct": 0,
    "explanation": "MFA needs different factor types: something you know plus something you have.",
    "correct_letter": "A"
  },
  {
    "id": 49,
    "domain": 4,
    "question": "An employee changes teams but keeps old system access for months. What failed?",
    "options": [
      "Access review and deprovisioning / least privilege",
      "SSO",
      "Encryption",
      "Backups"
    ],
    "correct": 0,
    "explanation": "Old access should be removed on role change - a least privilege and deprovisioning failure.",
    "correct_letter": "A"
  },
  {
    "id": 50,
    "domain": 4,
    "question": "In incident response, the step immediately AFTER containment is:",
    "options": [
      "Preparation",
      "Eradication",
      "Lessons learned",
      "Recovery"
    ],
    "correct": 1,
    "explanation": "Reminder: order is Preparation, Detection, Containment, Eradication, Recovery, Lessons learned.",
    "correct_letter": "B"
  },
  {
    "id": 51,
    "domain": 4,
    "question": "A compromised laptop is still running. What evidence should be collected FIRST?",
    "options": [
      "Printed logs",
      "Hard disk image",
      "RAM / volatile memory",
      "Last week's backup"
    ],
    "correct": 2,
    "explanation": "Reminder: RAM first. Volatile memory disappears when power is lost - order of volatility.",
    "correct_letter": "C"
  },
  {
    "id": 52,
    "domain": 4,
    "question": "A whole team shares one admin password that never changes. The main problem is:",
    "options": [
      "It requires SSO",
      "It is too slow",
      "It is too complex",
      "No accountability and no way to revoke one person"
    ],
    "correct": 3,
    "explanation": "Shared accounts destroy accountability; you cannot tell who did what.",
    "correct_letter": "D"
  },
  {
    "id": 53,
    "domain": 4,
    "question": "A SIEM mainly:",
    "options": [
      "Collects, correlates logs and alerts on suspicious patterns",
      "Encrypts logs",
      "Blocks all malware alone",
      "Backs up servers"
    ],
    "correct": 0,
    "explanation": "A SIEM centralizes log collection, correlation, and alerting.",
    "correct_letter": "A"
  },
  {
    "id": 54,
    "domain": 4,
    "question": "Hardening a new server includes:",
    "options": [
      "Installing every service",
      "Opening all inbound ports",
      "Disabling unused ports/services, patching, least privilege",
      "Keeping default passwords"
    ],
    "correct": 2,
    "explanation": "Hardening reduces attack surface: disable unused services, patch, and limit privilege.",
    "correct_letter": "C"
  },
  {
    "id": 55,
    "domain": 4,
    "question": "The same CVE is on an internet-facing server and an isolated lab PC. Fix first:",
    "options": [
      "Internet-facing server, due to greater exposure",
      "Lab PC",
      "Neither",
      "Both can wait"
    ],
    "correct": 0,
    "explanation": "Exposure and exploitability raise priority for internet-facing systems.",
    "correct_letter": "A"
  },
  {
    "id": 56,
    "domain": 4,
    "question": "Correct order for a critical patch on production is:",
    "options": [
      "Deploy, then test",
      "Uninstall the app",
      "Wait one year",
      "Test in staging, back up, deploy, verify"
    ],
    "correct": 3,
    "explanation": "Test first in staging, back up, deploy, then verify to avoid breaking production.",
    "correct_letter": "D"
  },
  {
    "id": 57,
    "domain": 4,
    "question": "Logs show repeated failed logins at 3 a.m. from an unusual location. This is:",
    "options": [
      "A licensing issue",
      "A backup issue",
      "Normal",
      "An indicator to investigate for possible compromise"
    ],
    "correct": 3,
    "explanation": "Unusual failed logins are an indicator of possible account compromise.",
    "correct_letter": "D"
  },
  {
    "id": 58,
    "domain": 4,
    "question": "RBAC grants access based on:",
    "options": [
      "Attributes like time and location",
      "Job role",
      "IP address only",
      "Biometrics only"
    ],
    "correct": 1,
    "explanation": "Role-Based Access Control assigns permissions by job role.",
    "correct_letter": "B"
  },
  {
    "id": 59,
    "domain": 4,
    "question": "SSO provides:",
    "options": [
      "Encryption for disks",
      "Physical security",
      "Automatic patching",
      "One login for many systems"
    ],
    "correct": 3,
    "explanation": "Single Sign-On lets a user authenticate once and access multiple systems.",
    "correct_letter": "D"
  },
  {
    "id": 60,
    "domain": 4,
    "question": "A forensic disk image is hashed primarily to:",
    "options": [
      "Compress it",
      "Prove the copy was not altered - integrity",
      "Speed analysis",
      "Encrypt it"
    ],
    "correct": 1,
    "explanation": "Hashing the image proves its integrity for evidence handling.",
    "correct_letter": "B"
  },
  {
    "id": 61,
    "domain": 4,
    "question": "Chain of custody documents:",
    "options": [
      "User passwords",
      "Patch levels",
      "Network diagrams only",
      "Who handled evidence, when, and what was done"
    ],
    "correct": 3,
    "explanation": "Chain of custody records evidence handling so it remains trustworthy and admissible.",
    "correct_letter": "D"
  },
  {
    "id": 62,
    "domain": 4,
    "question": "Vulnerability scanning is mainly used to:",
    "options": [
      "Identify known weaknesses for prioritization and fixing",
      "Monitor employees",
      "Exploit systems like an attacker",
      "Replace patching"
    ],
    "correct": 0,
    "explanation": "Scans find and help prioritize vulnerabilities; they do not fix them alone.",
    "correct_letter": "A"
  },
  {
    "id": 63,
    "domain": 4,
    "question": "CVSS is used to:",
    "options": [
      "Back up data",
      "Encrypt traffic",
      "Score the severity of vulnerabilities",
      "Authenticate users"
    ],
    "correct": 2,
    "explanation": "CVSS provides a standard severity score for vulnerabilities.",
    "correct_letter": "C"
  },
  {
    "id": 64,
    "domain": 4,
    "question": "Short-term containment for a malware-infected host is BEST done by:",
    "options": [
      "Isolating it from the network",
      "Reimaging immediately with no analysis",
      "Ignoring it",
      "Deleting all logs"
    ],
    "correct": 0,
    "explanation": "Isolating the host stops spread while preserving it for investigation.",
    "correct_letter": "A"
  },
  {
    "id": 65,
    "domain": 4,
    "question": "Eradication in incident response means:",
    "options": [
      "Restoring user passwords only",
      "Writing the final report",
      "Buying new hardware only",
      "Removing the root cause - malware, backdoor, compromised account"
    ],
    "correct": 3,
    "explanation": "Eradication removes the cause, not just the symptoms.",
    "correct_letter": "D"
  },
  {
    "id": 66,
    "domain": 4,
    "question": "Lessons learned occurs:",
    "options": [
      "During containment only",
      "Before detection",
      "After recovery, to improve future response",
      "Instead of eradication"
    ],
    "correct": 2,
    "explanation": "Lessons learned is the final phase, after recovery, to improve the process.",
    "correct_letter": "C"
  },
  {
    "id": 67,
    "domain": 4,
    "question": "A service account should:",
    "options": [
      "Be a domain admin always",
      "Be used by an application, with limited privilege and a managed password",
      "Be shared by all admins",
      "Have no password"
    ],
    "correct": 1,
    "explanation": "Service accounts run applications and should be least-privilege with managed credentials.",
    "correct_letter": "B"
  },
  {
    "id": 68,
    "domain": 4,
    "question": "PAM (Privileged Access Management) helps by:",
    "options": [
      "Filtering spam",
      "Encrypting backups",
      "Vaulting privileged credentials and granting admin access only when needed",
      "Managing public Wi-Fi"
    ],
    "correct": 2,
    "explanation": "PAM controls, vaults, and audits privileged account use.",
    "correct_letter": "C"
  },
  {
    "id": 69,
    "domain": 4,
    "question": "Which log source is MOST useful to detect lateral movement?",
    "options": [
      "Authentication logs across hosts",
      "Marketing logs",
      "Weather logs",
      "Only printer logs"
    ],
    "correct": 0,
    "explanation": "Authentication logs across systems reveal unusual logons between hosts.",
    "correct_letter": "A"
  },
  {
    "id": 70,
    "domain": 4,
    "question": "Disabling an ex-employee's account on their last day is:",
    "options": [
      "Federation",
      "Provisioning",
      "Accounting",
      "Deprovisioning"
    ],
    "correct": 3,
    "explanation": "Deprovisioning removes access when a user leaves or changes role.",
    "correct_letter": "D"
  },
  {
    "id": 71,
    "domain": 4,
    "question": "A playbook for ransomware primarily supports which IR phase preparation goal?",
    "options": [
      "Having predefined steps ready before an incident",
      "Encrypting files",
      "Paying ransom faster",
      "Disabling backups"
    ],
    "correct": 0,
    "explanation": "Playbooks are part of preparation: agreed steps ready before an incident occurs.",
    "correct_letter": "A"
  },
  {
    "id": 72,
    "domain": 4,
    "question": "Order of volatility means collect evidence:",
    "options": [
      "In alphabetical order",
      "Most fragile first - cache/RAM before disk",
      "From disk first, always",
      "Only after reboot"
    ],
    "correct": 1,
    "explanation": "Collect the most volatile evidence first, before it is lost on shutdown.",
    "correct_letter": "B"
  },
  {
    "id": 73,
    "domain": 5,
    "question": "An asset is worth $50,000 and an incident would cause 20% loss. SLE is:",
    "options": [
      "$5,000",
      "$50,000",
      "$70,000",
      "$10,000"
    ],
    "correct": 3,
    "explanation": "SLE = Asset Value x Exposure Factor = 50,000 x 0.20 = $10,000.",
    "correct_letter": "D"
  },
  {
    "id": 74,
    "domain": 5,
    "question": "If SLE is $10,000 and ARO is 0.5 per year, ALE is:",
    "options": [
      "$10,000",
      "$5,000",
      "$20,000",
      "$500"
    ],
    "correct": 1,
    "explanation": "ALE = SLE x ARO = 10,000 x 0.5 = $5,000 per year.",
    "correct_letter": "B"
  },
  {
    "id": 75,
    "domain": 5,
    "question": "Buying cyber insurance is which risk treatment?",
    "options": [
      "Mitigate",
      "Transfer",
      "Accept",
      "Avoid"
    ],
    "correct": 1,
    "explanation": "Insurance transfers financial impact to a third party.",
    "correct_letter": "B"
  },
  {
    "id": 76,
    "domain": 5,
    "question": "A company keeps a low risk because fixing it costs more than the possible loss. This is:",
    "options": [
      "Transfer",
      "Mitigate",
      "Accept",
      "Avoid"
    ],
    "correct": 2,
    "explanation": "Reminder: living with a low risk is Accept. Avoid means stopping the activity entirely.",
    "correct_letter": "C"
  },
  {
    "id": 77,
    "domain": 5,
    "question": "Stopping a risky activity completely so the risk disappears is:",
    "options": [
      "Acceptance by insurance",
      "Transfer",
      "Accept",
      "Avoid"
    ],
    "correct": 3,
    "explanation": "Avoidance eliminates the risk by not doing the activity.",
    "correct_letter": "D"
  },
  {
    "id": 78,
    "domain": 5,
    "question": "Installing a firewall to reduce a risk is:",
    "options": [
      "Avoid",
      "Transfer",
      "Accept",
      "Mitigate"
    ],
    "correct": 3,
    "explanation": "Mitigation reduces likelihood or impact; a firewall is a mitigating control.",
    "correct_letter": "D"
  },
  {
    "id": 79,
    "domain": 5,
    "question": "RTO defines:",
    "options": [
      "How often risk occurs",
      "How much data can be lost",
      "How quickly a system must be restored",
      "Cost of an asset"
    ],
    "correct": 2,
    "explanation": "Recovery Time Objective is the maximum time to restore service.",
    "correct_letter": "C"
  },
  {
    "id": 80,
    "domain": 5,
    "question": "RPO defines:",
    "options": [
      "How much data loss is acceptable, in time",
      "How quickly to restore",
      "Number of backups staff",
      "Password length"
    ],
    "correct": 0,
    "explanation": "Recovery Point Objective is how much data, measured in time, can be lost.",
    "correct_letter": "A"
  },
  {
    "id": 81,
    "domain": 5,
    "question": "A procedure document is:",
    "options": [
      "A law",
      "Step-by-step instructions to perform a task",
      "A suggestion only",
      "A high-level management rule"
    ],
    "correct": 1,
    "explanation": "Procedures give exact step-by-step instructions; policies are high-level rules.",
    "correct_letter": "B"
  },
  {
    "id": 82,
    "domain": 5,
    "question": "The document hierarchy from highest to most specific is:",
    "options": [
      "Procedure, Standard, Policy",
      "Policy, Standard, Procedure",
      "Standard, Policy, Guideline",
      "Guideline, Policy, Procedure"
    ],
    "correct": 1,
    "explanation": "Policy is high-level, standard defines requirements, procedure gives the steps.",
    "correct_letter": "B"
  },
  {
    "id": 83,
    "domain": 5,
    "question": "A BIA (Business Impact Analysis) identifies:",
    "options": [
      "Virus signatures",
      "Critical functions and impact if they stop",
      "Password hashes",
      "Firewall rules"
    ],
    "correct": 1,
    "explanation": "A BIA determines what is critical and the impact of disruption.",
    "correct_letter": "B"
  },
  {
    "id": 84,
    "domain": 5,
    "question": "A DRP (Disaster Recovery Plan) focuses on:",
    "options": [
      "Restoring IT systems after a disaster",
      "Marketing recovery",
      "Hiring staff",
      "Daily backups only"
    ],
    "correct": 0,
    "explanation": "DRP is about recovering IT systems; BCP is broader business continuity.",
    "correct_letter": "A"
  },
  {
    "id": 85,
    "domain": 5,
    "question": "Before signing a cloud vendor, a company should assess:",
    "options": [
      "Number of ads",
      "Vendor office size",
      "Vendor security, SLA, and right to audit",
      "Only price"
    ],
    "correct": 2,
    "explanation": "Third-party risk assessment checks security controls, SLAs, and audit rights.",
    "correct_letter": "C"
  },
  {
    "id": 86,
    "domain": 5,
    "question": "Qualitative risk assessment uses:",
    "options": [
      "No analysis",
      "Ratings such as High, Medium, Low",
      "Exact dollar values only",
      "ALE formulas only"
    ],
    "correct": 1,
    "explanation": "Qualitative assessment uses descriptive ratings rather than precise numbers.",
    "correct_letter": "B"
  },
  {
    "id": 87,
    "domain": 5,
    "question": "A guideline differs from a standard because a guideline is:",
    "options": [
      "Recommended but not mandatory",
      "Mandatory",
      "Step-by-step mandatory",
      "A law"
    ],
    "correct": 0,
    "explanation": "Guidelines are recommendations; standards are mandatory requirements.",
    "correct_letter": "A"
  },
  {
    "id": 88,
    "domain": 5,
    "question": "Data classification (Public, Internal, Confidential, Restricted) helps to:",
    "options": [
      "Speed up the network",
      "Remove need for access control",
      "Apply protection based on sensitivity",
      "Encrypt automatically"
    ],
    "correct": 2,
    "explanation": "Classification ensures handling and protection match data sensitivity.",
    "correct_letter": "C"
  },
  {
    "id": 89,
    "domain": 5,
    "question": "A data owner is primarily responsible for:",
    "options": [
      "Monitoring the SIEM",
      "Deciding classification and who can access the data",
      "Daily backups",
      "Installing patches"
    ],
    "correct": 1,
    "explanation": "Owners decide classification and access; custodians handle day-to-day protection.",
    "correct_letter": "B"
  },
  {
    "id": 90,
    "domain": 5,
    "question": "An SLA with a vendor should define:",
    "options": [
      "Employee holidays",
      "Office layout",
      "Expected service levels, uptime, and responsibilities",
      "Password rules for staff"
    ],
    "correct": 2,
    "explanation": "Service Level Agreements define measurable service expectations and duties.",
    "correct_letter": "C"
  }
];
