const resumeData = {
  name: 'Roy Hodge Jr.',
  title: 'Cyber Security & Web3 Specialist',
  contacts: [
    { text: 'roy.hodge.jr@email.com', href: 'mailto:roy.hodge.jr@email.com' },
    { text: '(123) 456-7890', href: 'tel:123-456-7890' },
    { text: 'San Marcos, TX' },
    { text: 'linkedin.com/in/royhodgejr', href: 'https://linkedin.com/in/royhodgejr' },
    { text: 'github.com/royhodgejr', href: 'https://github.com/royhodgejr' },
    { text: 'royhodgejr.dev', href: 'https://royhodgejr.dev' },
  ],
  summary:
    'A highly motivated and results-oriented professional with deep expertise in cyber security, blockchain technology, and network engineering. Passionate about building and securing decentralized systems and exploring the potential of augmented reality in Web3 applications. Proven ability to translate complex technical concepts into actionable plans and robust solutions.',
  experience: [
    {
      role: 'Web3 Security Analyst',
      company: 'Decentralized Future Inc.',
      duration: 'Jan 2022 - Present',
      description:
        'Conducted security audits on smart contracts and decentralized applications (dApps). Developed and implemented security protocols for DeFi platforms, mitigating risks and preventing exploits. Monitored network traffic for anomalies and responded to security incidents.',
      technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'Wireshark', 'Metasploit', 'Next.js'],
    },
    {
      role: 'Network Engineer',
      company: 'Secure Networks LLC',
      duration: 'Jun 2019 - Dec 2021',
      description:
        'Designed, implemented, and managed secure network infrastructures for enterprise clients. Configured firewalls, VPNs, and intrusion detection systems. Performed regular vulnerability assessments and penetration testing to ensure network integrity.',
      technologies: ['Cisco IOS', 'Palo Alto Networks', 'Python', 'TCP/IP', 'BGP', 'OSPF'],
    },
    {
      role: 'Jr. Blockchain Developer',
      company: 'Crypto Innovators',
      duration: 'May 2018 - May 2019',
      description:
        'Assisted in the development of a peer-to-peer cryptocurrency exchange. Wrote and tested smart contracts on the Ethereum blockchain. Contributed to the front-end development using React and Web3.js.',
      technologies: ['JavaScript', 'React', 'Web3.js', 'Truffle', 'Ganache', 'Node.js'],
    },
  ],
  skills: [
    {
      category: 'Cyber Security',
      items: [
        { name: 'Penetration Testing', level: '90%' },
        { name: 'Smart Contract Auditing', level: '85%' },
        { name: 'Network Security', level: '95%' },
        { name: 'Cryptography', level: '75%' },
      ],
    },
    {
      category: 'Web3 & Blockchain',
      items: [
        { name: 'Solidity', level: '80%' },
        { name: 'Ethereum / EVM', level: '90%' },
        { name: 'Next.js / React', level: '95%' },
        { name: 'Ethers.js / Web3.js', level: '85%' },
      ],
    },
    {
      category: 'General',
      items: [
        { name: 'JavaScript / TypeScript', level: '95%' },
        { name: 'Python', level: '80%' },
        { name: 'Go', level: '60%' },
        { name: 'Docker & Kubernetes', level: '70%' },
      ],
    },
  ],
  education: [
    { degree: 'B.S. in Computer Science', institution: 'Texas State University', years: '2014 - 2018' },
    {
      degree: 'Certified Information Systems Security Professional (CISSP)',
      institution: '(ISC)²',
      years: 'Issued 2021',
    },
  ],
};

export default resumeData;