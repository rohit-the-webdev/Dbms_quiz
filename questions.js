const questions = [
  // --- Week 1: Networking & Ethical Hacking (10 Questions) ---
  {
    question: "What is the main objective of ethical hacking?",
    options: [
      "Deletes files from a system.",
      "Inserts malwares in a system.",
      "Legally Identify system vulnerabilities.",
      "Steal sensitive information."
    ],
    answer: "Legally Identify system vulnerabilities."
  },
  {
    question: "Which of the following are types of penetration testing methodologies?",
    options: [
      "White Box",
      "Black Box",
      "Red Box",
      "Trojan Horse"
    ],
    answer: ["White Box", "Black Box"]
  },
  {
    question: "Which of the following switching techniques is more efficient for bursty data traffic?",
    options: [
      "Circuit Switching",
      "Message Switching",
      "Packet Switching",
      "None of these"
    ],
    answer: "Packet Switching"
  },
  {
    question: "Which protocol in TCP/IP is connectionless and does not provide reliability?",
    options: [
      "TCP",
      "UDP",
      "FTP",
      "TELNET"
    ],
    answer: "UDP"
  },
  {
    question: "Which IP header field prevents infinite looping of packets?",
    options: [
      "Header Checksum",
      "Time to Live",
      "Fragment offset",
      "HLEN"
    ],
    answer: "Time to Live"
  },
  {
    question: "What are the responsibilities of the IP layer?",
    options: [
      "Framing",
      "Route packets",
      "Provide reliable transmission",
      "None of these"
    ],
    answer: "Route packets"
  },
  {
    question: "Which of the following is/are not a valid field of IP header?",
    options: [
      "TTL",
      "Port Number",
      "Protocols",
      "MAC address"
    ],
    answer: ["Port Number", "MAC address"]
  },
  {
    question: "Which of the following statements is/are true about datagram packet switching?",
    options: [
      "Requires prior route establishment.",
      "Faster for fewer packet.",
      "Uses dynamic routing.",
      "All packets follow the same path."
    ],
    answer: ["Faster for fewer packet.", "Uses dynamic routing."]
  },
  {
    question: "The max value (in decimal) for HLEN field (header length) is ?",
    options: [],
    answer: "15"
  },
  {
    question: "The header checksum field in the IP header is ___ bits wide.",
    options: [],
    answer: "16"
  },

  // --- Week 2: IP Fragmentation, TCP/UDP, and Addressing (10 Questions) ---
  {
    question: "Why do we need fragmentation?",
    options: [
      "To increase transmission speed.",
      "Due to varying MTU across networks.",
      "To improve encryption.",
      "To compress packet."
    ],
    answer: "Due to varying MTU across networks."
  },
  {
    question: "IP fragmentation is typically done by:",
    options: [
      "Source Host",
      "Destination Host",
      "Intermediate Routers",
      "Hubs"
    ],
    answer: "Intermediate Routers"
  },
  {
    question: "For reassembling the fragmented packets at the final destination, which of the following header field(s) is (are) used?",
    options: [
      "Fragment offset",
      "Flags",
      "Port number",
      "Checksum",
      "Identification"
    ],
    answer: ["Fragment offset", "Flags", "Identification"]
  },
  {
    question: "An IP packet arrives at the final destination with the D flag set as 0, M flag set as 1 and offset is set to 0. Which of the following statements is true about the packet?",
    options: [
      "The packet has not been fragmented.",
      "The packet has been fragmented and it is the first fragment.",
      "The packet has been fragmented and it is the last fragment.",
      "None of these."
    ],
    answer: "The packet has been fragmented and it is the first fragment."
  },
  {
    question: "In an IP packet, the value of HLEN is 15, and the total size of IP packet is 2000 bytes. The number of data bytes in the packet will be",
    options: [],
    answer: "1940"
  },
  {
    question: "Which address classes do the IP addresses 128.0.1.3 and 193.11.23.10 belong to?",
    options: [
      "Class A and Class B",
      "Class B and Class C",
      "Class C and Class D",
      "Class A and Class C"
    ],
    answer: "Class B and Class C"
  },
  {
    question: "Which IP addresses are reserved for private use?",
    options: [
      "10.x.x.x",
      "172.32.x.x",
      "192.168.x.x",
      "128.x.x.x"
    ],
    answer: ["10.x.x.x", "192.168.x.x"]
  },
  {
    question: "What does a TCP segment with SYN=1 and ACK=0 indicate?",
    options: [
      "Connection termination",
      "Connection reset",
      "Keep-alive signal",
      "Initial connection request",
      "Connection acknowledgement"
    ],
    answer: "Initial connection request"
  },
  {
    question: "What is the size of UDP header?",
    options: [
      "16 bits",
      "16 bytes",
      "8 bits",
      "8 bytes"
    ],
    answer: "8 bytes"
  },
  {
    question: "What is the subnet address if the destination IP address is 192.168.77.213 and the subnet mask is 255.255.252.0?",
    options: [
      "192.168.76.0",
      "192.168.76.213",
      "192.168.77.0",
      "192.168.0.0"
    ],
    answer: "192.168.76.0"
  },

  // --- Week 3: IP Routing and Protocols (10 Questions) ---
  {
    question: "Which of the following statement(s) is/are false?",
    options: [
      "IP protocol uses connection-oriented routing.",
      "IP protocol uses connection-less routing.",
      "In connection-less routing, each packet is treated as an independent packet.",
      "None of these."
    ],
    answer: "IP protocol uses connection-oriented routing."
  },
  {
    question: "A routing table entry that is manually configured remains unchanged unless manually modified is called a _____ routing table entry.",
    options: [
      "Automatic",
      "Static",
      "Dynamic",
      "None of these"
    ],
    answer: "Static"
  },
  {
    question: "Which of the following statements is/are false about direct and indirect packet delivery?",
    options: [
      "Direct delivery happens within the same network.",
      "Indirect delivery is used for different networks.",
      "In indirect delivery packet travel through multiple routers.",
      "None of these."
    ],
    answer: "None of these."
  },
  {
    question: "Which of the following statements correctly describe features of dynamic routing?",
    options: [
      "All routers are manually configured by the network administrator.",
      "Routing table updates periodically depending on the network condition.",
      "Routers exchange control information, which consumes network resources.",
      "It can automatically find alternate paths during link failures.",
      "It never changes the routing table once initialized."
    ],
    answer: ["Routing table updates periodically depending on the network condition.", "Routers exchange control information, which consumes network resources.", "It can automatically find alternate paths during link failures."]
  },
  {
    question: "In the routing table, which of the following flags indicates that the route uses a gateway to reach the destination?",
    options: [
      "U",
      "G",
      "H",
      "D",
      "M"
    ],
    answer: "G"
  },
  {
    question: "Which of the following statement about the default route is incorrect?",
    options: [
      "It is specified by an address 0.0.0.0.",
      "It is specified by an address 127.0.0.1.",
      "It is used for forwarding packets to unknown destinations.",
      "None of these."
    ],
    answer: "It is specified by an address 127.0.0.1."
  },
  {
    question: "Which of the following routing protocols suffers from the count-to-infinity problem?",
    options: [
      "OSFP",
      "BGP",
      "RIP",
      "None of these."
    ],
    answer: "RIP"
  },
  {
    question: "Which of the following routing protocols is used for routing between different autonomous systems?",
    options: [
      "RIP",
      "OSFP",
      "BGP",
      "ICMP"
    ],
    answer: "BGP"
  },
  {
    question: "In Open Shortest Path First (OSPF) routing protocol, which of the following packets is used to check if the neighbor router is up(active)?",
    options: [
      "Link State Request",
      "Hello Packet",
      "Link State Acknowledgement",
      "TCP 3-way handshake",
      "None of these"
    ],
    answer: "Hello Packet"
  },
  {
    question: "Which of the following statement(s) is/are false for IPv6?",
    options: [
      "IPv6 supports address class like A, B, and C.",
      "IPv6 address are 128-bit long.",
      "The base header size in IPv6 is 40 byte.",
      "None of these."
    ],
    answer: "IPv6 supports address class like A, B, and C."
  },

  // --- Week 4: Reconnaissance and Nmap Basics (10 Questions) ---
  {
    question: "Which of the following statement(s) is/are true?",
    options: [
      "A hypervisor allows one host to run multiple virtual machines by sharing resources.",
      "A hypervisor requires one physical machine per virtual machine.",
      "A hypervisor can only run one virtual machine at a time.",
      "Kali-linux is hack proof hypervisor.",
      "None of these."
    ],
    answer: "A hypervisor allows one host to run multiple virtual machines by sharing resources."
  },
  {
    question: "Which of the following statement(s) is/are true about 'Passive Reconnaissance'?",
    options: [
      "Information about the target is collected indirectly.",
      "Information about the target is collected directly.",
      "There is a chance of detection.",
      "There is no chance of detection."
    ],
    answer: ["Information about the target is collected indirectly.", "There is no chance of detection."]
  },
  {
    question: "Which operator is used in Google to search for an exact phrase?",
    options: [
      "AND",
      "\"\" (double quotes)",
      "+",
      "()"
    ],
    answer: "\"\" (double quotes)"
  },
  {
    question: "What does a WHOIS lookup provides?",
    options: [
      "Website loading speed.",
      "Source code of webpage",
      "Historical screenshot of website",
      "Ownership and registration details of a domain."
    ],
    answer: "Ownership and registration details of a domain."
  },
  {
    question: "Which search will show results from only the website swayam.gov.in?",
    options: [
      "swayam.gov.in",
      "filetype:swayam.gov.in",
      "site:swayam.gov.in",
      "None of these"
    ],
    answer: "site:swayam.gov.in"
  },
  {
    question: "What is the main function of Archive.org's Wayback Machine?",
    options: [
      "To view historical version of the website",
      "To scan website for malware",
      "To test internet speed.",
      "To monitor websites uptime"
    ],
    answer: "To view historical version of the website"
  },
  {
    question: "An ICMP sweep scan is used to:",
    options: [
      "Block TCP connection",
      "Scan for DNS servers",
      "Detect live hosts",
      "Detect phishing emails."
    ],
    answer: "Detect live hosts"
  },
  {
    question: "Which of the following tools is primarily used for network scanning, including host discovery and port scanning?",
    options: [
      "Wireshark",
      "DNSEnum",
      "Notepad++",
      "None of these"
    ],
    answer: "None of these"
  },
  {
    question: "Which of the following option tells NMAP to skip port scanning and perform only host discovery?",
    options: [
      "-ss",
      "-O",
      "-sn",
      "-p"
    ],
    answer: "-sn"
  },
  {
    question: "How many ports does NMAP scan by default when no specific port option is provided?",
    options: [],
    answer: "1000"
  },

  // --- Week 5: Nmap Scripts, Brute-Forcing, and Malware (10 Questions) ---
  {
    question: "Where are the default NMAP scripts stored in a typical Linux system?",
    options: [
      "/usr/bin/nmap/scripts",
      "/usr/share/nmap/scripts",
      "/opt/nmap/scripts",
      "/etc/nmap/scripts"
    ],
    answer: "/usr/share/nmap/scripts"
  },
  {
    question: "Which of the following NMAP options runs the default set of NSE scripts?",
    options: [
      "--nse",
      "--script=all",
      "--script default",
      "--run-default"
    ],
    answer: "--script default"
  },
  {
    question: "Which of the following NMAP scripts checks for vulnerabilities to a Slowloris DoS attack?",
    options: [
      "http-slowloris-test",
      "http-slowloris-discovery",
      "http-slowloris-check",
      "http-slowloris-flood",
      "None of these"
    ],
    answer: "http-slowloris-check"
  },
  {
    question: "Which of the following NMAP scripts is used to identify the OS of the target system?",
    options: [
      "http-os-brute",
      "smb-os-brute",
      "smb-brute",
      "smb-os-attack",
      "None of these"
    ],
    answer: "None of these"
  },
  {
    question: "Which of the following best describes the function of the crunch tool in hacking?",
    options: [
      "It scans open ports and running services on a target system.",
      "It generates custom wordlist for password attacks.",
      "It hashes passwords using various algorithms.",
      "It decrypts SSL/TLS encrypted traffic.",
      "None of these.."
    ],
    answer: "It generates custom wordlist for password attacks."
  },
  {
    question: "What is the primary function of the hydra tool in penetration testing?",
    options: [
      "Generating custom wordlist for password attacks.",
      "Performing OS fingerprinting",
      "Performs ARP spoofing attacks",
      "Brute-force login attempts on network services"
    ],
    answer: "Brute-force login attempts on network services"
  },
  {
    question: "Which tool is most appropriate for performing a brute-force attack against remote login services such as Telnet, FTP, or SSH?",
    options: [
      "DNSEnum",
      "Crunch",
      "Hydra",
      "Wireshark"
    ],
    answer: "Hydra"
  },
  {
    question: "What is user enumeration?",
    options: [
      "Creating multiple user accounts on a system.",
      "Deleting inactive user accounts",
      "Identifying valid usernames on a target system or services",
      "None of these."
    ],
    answer: "Identifying valid usernames on a target system or services"
  },
  {
    question: "Which malware records the keystrokes that are typed on the keyboard?",
    options: [
      "Keylogger",
      "Virus",
      "Adware",
      "None of these."
    ],
    answer: "Keylogger"
  },
  {
    question: "Which of the following best describes the function of the ARP (Address Resolution Protocol)?",
    options: [
      "It maps IP addresses to MAC addresses in a local network.",
      "It encrypts data at the transport layer.",
      "It maps domain names to IP addresses.",
      "It establishes secure tunnels between routers."
    ],
    answer: "It maps IP addresses to MAC addresses in a local network."
  },

  // --- Week 6: Cryptography and Attacks (10 Questions) ---
  {
    question: "Which of the following types of attack can the DoS attack be categorized into?",
    options: [
      "Interruption",
      "Interception",
      "Modification",
      "Fabrication"
    ],
    answer: "Interruption"
  },
  {
    question: "Which of the following statement(s) is/are false?",
    options: [
      "In symmetric key cryptography, separate keys are used by sender and receiver.",
      "In symmetric key cryptography, a single key is used by sender and receiver.",
      "In asymmetric key cryptography, separate keys are used by sender and receiver.",
      "In asymmetric key cryptography, a single key is used by sender and receiver."
    ],
    answer: ["In symmetric key cryptography, separate keys are used by sender and receiver.", "In asymmetric key cryptography, a single key is used by sender and receiver."]
  },
  {
    question: "Which of the following is an example of symmetric key cryptography?",
    options: [
      "AES",
      "DES",
      "RSA",
      "None of these."
    ],
    answer: ["AES", "DES"]
  },
  {
    question: "Which of the following is an example of asymmetric key cryptography?",
    options: [
      "RSA",
      "DES",
      "AES",
      "None of these."
    ],
    answer: "RSA"
  },
  {
    question: "How many bits are in an AES block?",
    options: [
      "64 bit",
      "128 bit",
      "192 bit",
      "256 bit"
    ],
    answer: "128 bit"
  },
  {
    question: "How many rounds does DES (56-bit key) use for encryption?",
    options: [],
    answer: "16"
  },
  {
    question: "If the plain message is MEET ME and the key is a 1-digit number 2, then the encrypted message using Caesar cipher will be:",
    options: [
      "GCAYAM",
      "NFFVOGP",
      "FDDQFD",
      "ODDVPG"
    ],
    answer: "ODDVPG"
  },
  {
    question: "If a receiver A wants to carry out decryption on a message received from B using public-key cryptography, which of the following key will be used for decryption by A?",
    options: [
      "A's public key",
      "A's private key",
      "B's public key",
      "B's private key"
    ],
    answer: "A's private key"
  },
  {
    question: "AES uses an effective key length of ____ bits?",
    options: [
      "64 bit",
      "128 bit",
      "192 bit",
      "256 bit",
      "513 bit."
    ],
    answer: ["128 bit", "192 bit", "256 bit"]
  },
  {
    question: "Which cryptographic algorithms uses the same key for encryption and decryption?",
    options: [
      "RSA",
      "Diffie-Hellman",
      "DES",
      "AES"
    ],
    answer: ["DES", "AES"]
  },

  // --- Week 7: Cryptographic Hashing, Digital Signatures, and SSL/IPSec (10 Questions) ---
  {
    question: "Which type of mapping is implemented by cryptographic hash function?",
    options: [
      "One-to-One",
      "Many-to-One",
      "One-to-Many",
      "Many-to-Many"
    ],
    answer: "Many-to-One"
  },
  {
    question: "Two messages M₁ and M₂ are fed to a hash function HASH to generate the hash value: H₁=HASH(M₁), H₂=HASH(M₂). Which of the following options can never be true?",
    options: [
      "H₁=H₂ and M₁≠M₂",
      "H₁≠H₂ and M₁=M₂",
      "H₁≠H₂ and M₁≠M₂",
      "H₁=H₂ and M₁=M₂"
    ],
    answer: "H₁≠H₂ and M₁=M₂"
  },
  {
    question: "Which of the following is an example of an iterative hash function?",
    options: [
      "SHA-1",
      "DES",
      "AES",
      "None of these."
    ],
    answer: "SHA-1"
  },
  {
    question: "Which property of a cryptographic hash function states that it is computationally infeasible to find any second input M₂ such that HASH(M₁) = HASH(M₂) for any given M₁?",
    options: [
      "Pre-image resistance",
      "Second pre-image resistance",
      "Collision resistance",
      "None of these."
    ],
    answer: "Second pre-image resistance"
  },
  {
    question: "Which of the following statement(s) is/are true for an ideal cryptographic hash function?",
    options: [
      "It is one-way function",
      "It is collision-free",
      "It is a many-to-one function",
      "None of these."
    ],
    answer: ["It is one-way function", "It is collision-free", "It is a many-to-one function"]
  },
  {
    question: "Which of the following is not an objective of a digital signature?",
    options: [
      "Authentication",
      "Non-repudiation",
      "Data Integrity",
      "Data modification."
    ],
    answer: "Data modification."
  },
  {
    question: "Which of the following is a drawback of using a message digest for integrity checks?",
    options: [
      "Low computation cost",
      "Fixed length output",
      "No authentication/integrity check",
      "Susceptible to birthday attacks."
    ],
    answer: "No authentication/integrity check"
  },
  {
    question: "In a digital signature, the signature is generated by encrypting the message digest with the sender's",
    options: [
      "Public key",
      "Session key",
      "Private key",
      "Receiver's private key."
    ],
    answer: "Private key"
  },
  {
    question: "Which of the following is not an objective of SSL?",
    options: [
      "Authentication",
      "Data Integrity",
      "Data Privacy",
      "Faster Transmission"
    ],
    answer: "Faster Transmission"
  },
  {
    question: "In IPSec, which mode encapsulates only the transport layer information with protection?",
    options: [
      "Tunnel Mode",
      "Transport Mode",
      "Replay Mode",
      "Confidential Mode"
    ],
    answer: "Transport Mode"
  },

  // --- Week 8: Steganography, Biometrics, and DoS Attacks (10 Questions) ---
  {
    question: "Which one of the following best describes steganography?",
    options: [
      "Use encrypting/decryption technique so that data can be read only by intended recipient.",
      "Hiding the existence of a message by embedding it inside another medium (audio/video/image).",
      "Digitally sign a message to provide authenticity.",
      "Compress data to reduce transmission size."
    ],
    answer: "Hiding the existence of a message by embedding it inside another medium (audio/video/image)."
  },
  {
    question: "Which of the following is/are true about LSB steganography in images?",
    options: [
      "It is simple to implement.",
      "It is robust against lossy compression like JPEG.",
      "It works well with 24-bit images.",
      "It is vulnerable to image manipulation and filtering."
    ],
    answer: ["It is simple to implement.", "It works well with 24-bit images.", "It is vulnerable to image manipulation and filtering."]
  },
  {
    question: "Consider a RGB image of size 200x150, where each pixel is stored in 24-bits (3-color channels, 8-bits each). The number of bytes of information that can be hidden in the image using LSB steganography (replacing 1 LSB-bit in each channel of every pixel) is",
    options: [],
    answer: "11250"
  },
  {
    question: "Which of the following does not correspond to physiological biometrics?",
    options: [
      "Fingerprint",
      "Iris",
      "Retina",
      "Signature"
    ],
    answer: "Signature"
  },
  {
    question: "Which biometric gives the highest uniqueness for identification but is often invasive?",
    options: [
      "Face",
      "Voice",
      "Signature",
      "Iris/Retina"
    ],
    answer: "Iris/Retina"
  },
  {
    question: "What is denial-of-service attack?",
    options: [
      "An attack on a system whereby stored files get modified or deleted.",
      "An attack that prevents legitimate users from accessing some service.",
      "An attack that modifies the stored password information in a system.",
      "None of these."
    ],
    answer: "An attack that prevents legitimate users from accessing some service."
  },
  {
    question: "A Smurf DoS attack works by:",
    options: [
      "Sending oversized IP packets to crash a host.",
      "Sending forged ICMP echo requests to a broadcast address so that many hosts reply to the spoofed victim IP.",
      "Exploiting a buffer overflow in web servers.",
      "Using SQL injection to compromise database."
    ],
    answer: "Sending forged ICMP echo requests to a broadcast address so that many hosts reply to the spoofed victim IP."
  },
  {
    question: "Which of the following is an example of denial-of-service attack?",
    options: [
      "Ping-of-death",
      "SQL injection",
      "Phishing",
      "Smurf attack"
    ],
    answer: ["Ping-of-death", "Smurf attack"]
  },
  {
    question: "What is the main purpose of Domain Name System (DNS)?",
    options: [
      "To provide end-to-end encryption for emails.",
      "To map human-readable domain names to IP addresses.",
      "To compress and segment long messages.",
      "To hide secret data inside images."
    ],
    answer: "To map human-readable domain names to IP addresses."
  },
  {
    question: "A Distributed Denial-of-Service (DDoS) attack differs from DoS primarily because:",
    options: [
      "DDoS targets multiple victim servers at once.",
      "DDoS uses multiple compromised machines (botnet) to attack a single target, increasing scale and obfuscation.",
      "DDoS only uses UDP while DoS uses TCP.",
      "There is no difference between DDoS and DoS."
    ],
    answer: "DDoS uses multiple compromised machines (botnet) to attack a single target, increasing scale and obfuscation."
  },

  // --- Week 9: Sniffing, Spoofing, and Social Engineering (10 Questions) ---
  {
    question: "Which mode allows a network interface card (NIC) to capture all traffic on the network segment regardless of the destination?",
    options: [
      "Monitor mode",
      "Transparent mode",
      "Promiscuous mode",
      "Hypervisor mode"
    ],
    answer: "Promiscuous mode"
  },
  {
    question: "Which of the following is/are not a feature of Wireshark?",
    options: [
      "Captures and analyzes packets",
      "Generates statistical reports",
      "Manipulates live network traffic",
      "Carries out SQL injection attack"
    ],
    answer: ["Manipulates live network traffic", "Carries out SQL injection attack"]
  },
  {
    question: "Which of the following protocols are vulnerable to sniffing attack?",
    options: [
      "HTTP",
      "FTP",
      "HTTPS",
      "SSL"
    ],
    answer: ["HTTP", "FTP"]
  },
  {
    question: "Which of the following is an example of an Active Sniffing attack?",
    options: [
      "ARP spoofing",
      "DNS poisoning",
      "MAC flooding",
      "All of these"
    ],
    answer: "All of these"
  },
  {
    question: "Which of the following is/are true for ARP Spoofing?",
    options: [
      "It is an active sniffing attack",
      "It is a passive sniffing attack",
      "It redirects traffic to the attacker",
      "It is used in MitM attack"
    ],
    answer: ["It is an active sniffing attack", "It redirects traffic to the attacker", "It is used in MitM attack"]
  },
  {
    question: "A DoS attack that targets the Domain Name System (DNS) to overload servers and prevent name resolution is known as:",
    options: [
      "Ping-of-death",
      "Smurf attack",
      "DNS Flood",
      "Phishing"
    ],
    answer: "DNS Flood"
  },
  {
    question: "Which of the following is an example of a human-based social engineering attack?",
    options: [
      "Tailgating",
      "Impersonation",
      "Dumpster diving",
      "Phishing"
    ],
    answer: ["Tailgating", "Impersonation", "Dumpster diving"]
  },
  {
    question: "A DoS attack that exploits the TCP three-way handshake is called:",
    options: [
      "SYN Flooding",
      "ICMP Flood",
      "Ping of Death",
      "UDP Flood"
    ],
    answer: "SYN Flooding"
  },
  {
    question: "Which tool performs a DoS attack by sending partial HTTP requests and never completing them?",
    options: [
      "Hydra",
      "Wireshark",
      "Slowloris",
      "Crunch"
    ],
    answer: "Slowloris"
  },
  {
    question: "Which of the following best defines a Botnet?",
    options: [
      "A network of legitimate IoT devices",
      "A protocol for DoS mitigation",
      "A security feature in switches",
      "A group of compromised systems remotely controlled by an attacker"
    ],
    answer: "A group of compromised systems remotely controlled by an attacker"
  },

  // --- Week 10: Hardware Attacks and PUF (10 Questions) ---
  {
    question: "Which of the following is/are not an example of hardware-based attack?",
    options: [
      "Side-channel attack",
      "Physical probing",
      "Denial of service",
      "SQL injection"
    ],
    answer: ["Denial of service", "SQL injection"]
  },
  {
    question: "Which of the following are typically exploited in side-channel attacks?",
    options: [
      "Time required to carry out operations",
      "Electromagnetic emissions from the device",
      "Space complexity of the algorithm",
      "Plaintext and Ciphertext",
      "Power consumed during computation"
    ],
    answer: ["Time required to carry out operations", "Electromagnetic emissions from the device", "Power consumed during computation"]
  },
  {
    question: "Which of the following attacks on hardware are invasive in nature?",
    options: [
      "Black-box testing",
      "Physical probing",
      "Reverse engineering",
      "Side-channel attack"
    ],
    answer: ["Physical probing", "Reverse engineering"]
  },
  {
    question: "Which of the following can be used as countermeasures to prevent hardware-based attacks?",
    options: [
      "Obfuscate data in register and buses",
      "Add dummy circuit to generate random noise",
      "Increase CPU clock frequency to make probing harder",
      "Use secure cryptographic algorithm"
    ],
    answer: ["Obfuscate data in register and buses", "Add dummy circuit to generate random noise"]
  },
  {
    question: "What is hardware Trojan?",
    options: [
      "A virus that infects software",
      "A malicious change inside a chip",
      "A tool used for testing hardware",
      "A feature to make hardware faster"
    ],
    answer: "A malicious change inside a chip"
  },
  {
    question: "Which of the following is/are true for differential power analysis?",
    options: [
      "It requires a single measurement",
      "It requires multiple measurements",
      "It is more effective than simple power analysis",
      "It is less effective than simple power analysis"
    ],
    answer: ["It requires multiple measurements", "It is more effective than simple power analysis"]
  },
  {
    question: "Which of the following statement(s) is/are false?",
    options: [
      "Detection of hardware Trojans is relatively easy",
      "No single method can detect all types of hardware Trojans",
      "Hardware Trojan detection often involves high design, testing, or runtime overhead",
      "Hardware Trojans are always inserted at the software level"
    ],
    answer: ["Detection of hardware Trojans is relatively easy", "Hardware Trojans are always inserted at the software level"]
  },
  {
    question: "For modular exponentiation computation of x^25, how many squaring and multiplication operations would be required?",
    options: [
      "3 and 2",
      "3 and 3",
      "3 and 4",
      "4 and 2"
    ],
    answer: "4 and 2"
  },
  {
    question: "What is the main purpose of Physical Unclonable Function (PUF) in hardware security?",
    options: [
      "To increase the clock speed of the processor",
      "To provide device-unique authentication",
      "To reduce the power consumption of chips",
      "To improve signal transmission speed"
    ],
    answer: "To provide device-unique authentication"
  },
  {
    question: "Which of the following statements describe the evaluability property of PUF?",
    options: [
      "Given a PUF, it is hard to construct a procedure PUF', where PUF ≠ PUF' and PUF'(x) = PUF(x) for all x.",
      "Given only y and corresponding PUF instance, it is hard to find x such that PUF(x) = y.",
      "Given PUF and x, it should be easy to evaluate y=PUF(x).",
      "None of these."
    ],
    answer: "Given PUF and x, it should be easy to evaluate y=PUF(x)."
  },

  // --- Week 11: Metasploit, SQL Injection, and XSS (10 Questions) ---
  {
    question: "Which of the following Metasploit modules is used to take advantage of a vulnerability on some target system?",
    options: [
      "Exploit",
      "Payload",
      "Auxiliary",
      "Encoder",
      "None of these"
    ],
    answer: "Exploit"
  },
  {
    question: "Which of the following describes meterpreter accurately?",
    options: [
      "It is a static payload generator.",
      "It is an interactive payload that allows remote commands and file operations.",
      "It is a Metasploits web Graphical User Interface.",
      "It is a network scanner bundled with Metasploit.",
      "It is a database for storing exploits."
    ],
    answer: "It is an interactive payload that allows remote commands and file operations."
  },
  {
    question: "Which of the following commands would you use to find the hash value of the password for user 'user_a' in the system after successfully getting a meterpreter shell?",
    options: [
      "get hash",
      "hash dump",
      "cred dump",
      "hash all"
    ],
    answer: "hash dump"
  },
  {
    question: "Which of the following commands can be used to perform Privilege Escalation after getting a meterpreter shell?",
    options: [
      "getuid",
      "getsystem",
      "setprivilege",
      "setuser"
    ],
    answer: "getsystem"
  },
  {
    question: "Which of the following Metasploit modules is used to perform brute force attack, DoS attack, host and port scanning, vulnerability scanning, etc.?",
    options: [
      "Exploit",
      "Payload",
      "Auxiliary",
      "Encoder",
      "None of these"
    ],
    answer: "Auxiliary"
  },
  {
    question: "Which of the following is/are an example of a SQL injection vulnerability?",
    options: [
      "Error-based SQL injection",
      "Time-based Blind SQL injection",
      "Union-based SQL injection",
      "Tautology-based SQL injection",
      "None of these"
    ],
    answer: [
      "Error-based SQL injection",
      "Time-based Blind SQL injection",
      "Union-based SQL injection",
      "Tautology-based SQL injection"
    ]
  },
  {
    question: "Which of the following is/are an example of SQL injection payload?",
    options: [
      "UNION SELECT",
      "' OR '1'='1' --",
      "SLEEP()",
      "NULL",
      "SQL payload"
    ],
    answer: [
      "UNION SELECT",
      "' OR '1'='1' --",
      "SLEEP()",
      "NULL"
    ]
  },
  {
    question: "If any web page is vulnerable to blind SQL injection, then which of the following is true?",
    options: [
      "It will print error message for incorrect user input.",
      "It will not print anything for incorrect user input."
    ],
    answer: "It will not print anything for incorrect user input."
  },
  {
    question: "Which of the following SQLMAP options can extract credential-related information?",
    options: [
      "users",
      "--passwords",
      "-current-user",
      "hostname"
    ],
    answer: [
      "users",
      "--passwords",
      "-current-user"
    ]
  },
  {
    question: "Which of the following are recognized types of XSS attacks?",
    options: [
      "Stored (persistent) XSS",
      "Reflected (non-persistent) XSS",
      "DOM-based XSS",
      "SQL-based XSS",
      "Cookie Injection XSS"
    ],
    answer: [
      "Stored (persistent) XSS",
      "Reflected (non-persistent) XSS",
      "DOM-based XSS"
    ]
  },

  // --- Week 12: Nmap Scanning and Wireshark (10 Questions) ---
  {
    question: "Which option is used for ICMP echo sweep in NMAP?",
    options: [
      "-PE",
      "-PS",
      "-PP",
      "-PM"
    ],
    answer: "-PE"
  },
  {
    question: "In ICMP Sweep, receiving ICMP Type 0 reply indicates:",
    options: [
      "Target host is down",
      "Target host is alive",
      "Target host is filtered",
      "None of these."
    ],
    answer: "Target host is alive"
  },
  {
    question: "By default NMAP scans how many ports?",
    options: [
      "10",
      "100",
      "1000",
      "65536"
    ],
    answer: "1000"
  },
  {
    question: "Which option makes NMAP treat all host as online (skip host discovery)?",
    options: [
      "-SP",
      "-PO",
      "-Pn",
      "-F"
    ],
    answer: "-Pn"
  },
  {
    question: "Which scanning technique uses full 3-way handshake?",
    options: [
      "TCP SYN scan",
      "TCP Connect scan",
      "ICMP Sweep scan",
      "FIN scan"
    ],
    answer: "TCP Connect scan"
  },
  {
    question: "Assume we are running Wireshark in a host, if the NIC of the host is set in promiscuous mode, what Wireshark will do:",
    options: [
      "It will capture packets only oriented to that host",
      "It will capture all packets in the same network segment in which host is connected.",
      "It will encrypt all captured packet.",
      "It will block all malicious traffic."
    ],
    answer: "It will capture all packets in the same network segment in which host is connected."
  },
  {
    question: "Which of the following NMAP option is used for OS discovery?",
    options: [
      "-0",
      "-TO",
      "-SO",
      "None of these"
    ],
    answer: "-0"
  },
  {
    question: "Which of the following can be detected using service/version detection (-sV)?",
    options: [
      "Application name",
      "Application version",
      "OS fingerprint",
      "Vulnerability status"
    ],
    answer: ["Application name", "Application version"]
  },
  {
    question: "Which NMAP option allows scanning only the most common 10 ports?",
    options: [
      "p 10",
      "-r 10",
      "--top-ports 10",
      "-top 10"
    ],
    answer: "--top-ports 10"
  },
  {
    question: "In which default format does Wireshark save captured packets?",
    options: [
      ".txt",
      ".csv",
      ".xml",
      ".pcapng/.pcap"
    ],
    answer: ".pcapng/.pcap"
  }
];
