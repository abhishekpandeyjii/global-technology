// ========================================
// GLOBAL GEOTECH ENGINEERING - Site Data
// ========================================

import logo from '../assets/images/logo.png';
import heroBg from '../assets/images/hero-bg.jpg';
import aboutImg from '../assets/images/about.jpg';
import ctaBg from '../assets/images/cta-bg.jpg';

import projectMarine from '../assets/images/project-marine.jpg';
import projectPiling from '../assets/images/project-piling.jpg';
import projectExcavation from '../assets/images/project-excavation.jpg';
import projectMicropiles from '../assets/images/project-micropiles.jpg';
import projectRock from '../assets/images/project-rock.jpg';
import projectInvestigation from '../assets/images/project-investigation.jpg';

import nayanTiwari from '../assets/images/nayan-tiwari.png';
import dhanjeetTiwari from '../assets/images/dhanjeet-tiwari.png';

import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import client4 from '../assets/images/client4.png';

export const images = {
  logo,
  heroBg,
  aboutImg,
  ctaBg,
  projectMarine,
  projectPiling,
  projectExcavation,
  projectMicropiles,
  projectRock,
  projectInvestigation,
  nayanTiwari,
  dhanjeetTiwari,
  client1,
  client2,
  client3,
  client4,
};

export const companyInfo = {
  name: 'Global Geotech Engineering',
  tagline: 'GEO TECHNICAL WORKS',
  subTagline: 'Pioneers in Geotechnical Engineering',
  experienceYears: '30+',
  phones: ['+91 97024 98203', '+91 9309873690'],
  emails: ['nayan@globalgeotechengineering.com', 'account@globalgeotechengineering.com'],
  address: 'Shop No. 12, Sunshine Garden Building, Near Millenium Park, Achole Road, Nalsopara (East), Thane, Maharashtra',
  hours: 'MON - FRI: 9AM - 7PM | SAT - SUN: CLOSED',
  whatsappNumber: '919702498203',
  whatsappLink: 'https://wa.me/919702498203',
};

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'projects', label: 'Work Gallery', href: '#projects' },
  { id: 'team', label: 'Our Team', href: '#team' },
  { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
];

export const heroData = {
  subtitle: 'Welcome to Global Geotech Engineering',
  title: 'Pioneers in',
  titleHighlight: 'Geotechnical Engineering',
  description: 'Providing end-to-end geotechnical engineering solutions designed to meet complex project needs with precision, safety, and sustainability for over three decades.',
  primaryBtn: 'Our Services',
  secondaryBtn: 'Request a Quote',
};

export const aboutData = {
  subtitle: 'About Our Company',
  title: 'For Over Three Decades of Geotechnical Innovation',
  description: 'For over three decades, Global Geotech Engineering has been at the forefront of construction and geotechnical innovation. Known for expertise, reliability, and excellence, we specialize in projects ranging from specialized foundations to large-scale commercial developments.',
  description2: 'Collaboration is central to our approach—we work closely with clients, architects, and stakeholders to transform visions into reality. With a legacy of trust and innovation, we continue to redefine geotechnical excellence for a sustainable future.',
  features: [
    'Pioneers in Geotechnical Engineering',
    'Highest Safety & Quality Standards',
    'End-to-End Precision Solutions',
    'Advanced Technology & Sustainable Design',
  ],
  experience: '30+',
  experienceText: 'Years of Experience',
};

export const services = [
  {
    id: 1,
    icon: 'FaHardHat',
    title: 'Excavations Services',
    description: 'We deliver precision-driven excavation solutions for projects of all sizes with state-of-the-art heavy machinery and engineering supervision.',
  },
  {
    id: 2,
    icon: 'FaWater',
    title: 'Marine Geotechnical',
    description: 'Our specialized marine geotechnical investigations and underwater sub-surface foundation services are essential for coastal and marine infrastructure.',
  },
  {
    id: 3,
    icon: 'FaBuilding',
    title: 'Piling Services',
    description: 'We offer a comprehensive range of piling services including bored cast in-situ, driven piles, and heavy foundation support systems.',
  },
  {
    id: 4,
    icon: 'FaTools',
    title: 'Micropiles',
    description: 'Advanced geotechnical solutions specializing in the design, drilling, and installation of high-capacity micropiles for confined or challenging sites.',
  },
  {
    id: 5,
    icon: 'FaCompass',
    title: 'Geotechnical Investigation',
    description: 'Comprehensive soil profiling, rock coring, SPT testing, and laboratory soil mechanics providing critical parameters for foundation design.',
  },
  {
    id: 6,
    icon: 'FaAnchor',
    title: 'Rock Anchoring',
    description: 'High-strength corrosion-resistant steel rods and cables engineered for deep slope stabilization, tiebacks, and foundation uplift resistance.',
  },
];

export const stats = [
  { id: 1, icon: 'FaProjectDiagram', value: 250, suffix: '+', label: 'Projects Completed' },
  { id: 2, icon: 'FaSmile', value: 500, suffix: '+', label: 'Clients Review' },
  { id: 3, icon: 'FaUsers', value: 50, suffix: '+', label: 'Team Members' },
  { id: 4, icon: 'FaTrophy', value: 15, suffix: '+', label: 'Winning Awards' },
];

export const projects = [
  {
    id: 1,
    image: projectMarine,
    title: 'Marine Geotechnical Investigation',
    category: 'Marine',
    location: 'Coastal & Offshore Zone, India',
  },
  {
    id: 2,
    image: projectPiling,
    title: 'Heavy Foundation Piling Services',
    category: 'Piling',
    location: 'Major Commercial Hub, Mumbai',
  },
  {
    id: 3,
    image: projectExcavation,
    title: 'Deep Site Excavation & Retention',
    category: 'Excavation',
    location: 'Metro Infrastructure Project',
  },
  {
    id: 4,
    image: projectMicropiles,
    title: 'High-Capacity Micropile Installation',
    category: 'Micropiles',
    location: 'Urban High-Rise Foundation',
  },
  {
    id: 5,
    image: projectRock,
    title: 'Slope Stabilization & Rock Anchoring',
    category: 'Rock Anchoring',
    location: 'High-Elevation Highway Corridor',
  },
  {
    id: 6,
    image: projectInvestigation,
    title: 'Sub-surface Soil & Rock Profiling',
    category: 'Investigation',
    location: 'Industrial Plant Development',
  },
];

export const whyChooseUsData = {
  subtitle: 'Why Choose Us',
  title: 'Engineering Foundations That Stand The Test Of Time',
  description: 'With over 30 years of geotechnical engineering mastery, Global Geotech Engineering provides state-of-the-art foundation testing, ground engineering, and stabilization solutions across India.',
  features: [
    {
      icon: 'FaUserTie',
      title: 'Expert Engineering Team',
      description: 'Led by seasoned project directors with over two decades of on-site geotechnical mastery.',
    },
    {
      icon: 'FaGem',
      title: 'Advanced Equipment',
      description: 'Modern rotary drilling rigs, hydraulic piling machines, and precision testing apparatus.',
    },
    {
      icon: 'FaClock',
      title: 'On-Time Project Delivery',
      description: 'Meticulous planning and execution ensuring strict adherence to civil engineering timelines.',
    },
    {
      icon: 'FaHeadset',
      title: 'Reliable Technical Consultation',
      description: 'Dedicated geotechnical advisory from initial site assessment to final load testing.',
    },
  ],
};

export const teamMembers = [
  {
    id: 1,
    image: nayanTiwari,
    name: 'Nayan Tiwari',
    designation: 'Managing Director & Project Manager',
    bio: 'With over 20 years of experience in the construction and geotechnical industry, Nayan Tiwari leads Global Geotech Engineering with technical rigor and strategic vision.',
    socials: { facebook: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 2,
    image: dhanjeetTiwari,
    name: 'Dhanjeet Tiwari',
    designation: 'Board of Director',
    bio: 'Dhanjeet Tiwari brings deep executive expertise and strategic insight in managing large-scale civil engineering, piling, and complex ground stabilization contracts.',
    socials: { facebook: '#', twitter: '#', linkedin: '#' },
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    designation: 'Property Developer',
    text: 'Global Geotech transformed my old house into a modern, energy-efficient structure. Their team was super professional, communicated clearly, and finished the project right on time. Totally worth it!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Menon',
    designation: 'Infrastructure Architect',
    text: 'Working with Global Geotech was seamless. They understood my design intent perfectly and executed it with precision. Their attention to detail and geotechnical sustainability focus really stood out.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Sharma',
    designation: 'Commercial Build Director',
    text: 'We partnered with Global Geotech for a large commercial build, and the results were exceptional. The quality, safety standards, and transparency throughout the project were top-notch.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Neha Patel',
    designation: 'Residential Client',
    text: 'I got my home foundation and extension done by Global Geotech, and I’m super happy with how it turned out! The workmanship is excellent, and the team made the entire process stress-free.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Arjun Reddy',
    designation: 'Civil Engineering Lead',
    text: 'Global Geotech Engineering is one of the most reliable geotechnical partners we’ve worked with. Their technical expertise, piling precision, and commitment to innovation make them stand out in the industry.',
    rating: 5,
  },
];

export const clientsData = [
  { id: 1, name: 'Client Partner 1', logo: client1 },
  { id: 2, name: 'Client Partner 2', logo: client2 },
  { id: 3, name: 'Client Partner 3', logo: client3 },
  { id: 4, name: 'Client Partner 4', logo: client4 },
];

export const blogPosts = [
  {
    id: 1,
    image: projectInvestigation,
    date: 'Jan 15, 2026',
    author: 'Admin',
    category: 'Investigation',
    title: 'Critical Role of Marine Geotechnical Investigations in Coastal Builds',
    excerpt: 'Explore why offshore and coastal projects necessitate specialized underwater sub-surface sampling and geotechnical testing before foundation design.',
  },
  {
    id: 2,
    image: projectMicropiles,
    date: 'Dec 28, 2025',
    author: 'Admin',
    category: 'Micropiles',
    title: 'Why High-Capacity Micropiles Are Ideal for High-Density Urban Sites',
    excerpt: 'Discover how micropiling technology enables strong structural foundations in restricted access areas with minimal soil disturbance.',
  },
  {
    id: 3,
    image: projectRock,
    date: 'Nov 12, 2025',
    author: 'Admin',
    category: 'Rock Anchoring',
    title: 'Advanced Slope Stabilization and Deep Rock Tieback Methods',
    excerpt: 'A technical deep-dive into high-tensile corrosion-resistant rock anchors for critical highway retaining walls and foundation uplift resistance.',
  },
];

export const footerData = {
  about: 'For over three decades, Global Geotech Engineering has been at the forefront of geotechnical innovation, delivering precision piling, marine investigation, micropiles, excavation, and rock anchoring solutions across India.',
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work Gallery', href: '#projects' },
    { label: 'Our Team', href: '#team' },
    { label: 'Contact Us', href: '#contact' },
  ],
  serviceLinks: [
    'Excavations Services',
    'Marine Geotechnical',
    'Piling Services',
    'Micropiles',
    'Geotechnical Investigation',
    'Rock Anchoring',
  ],
  contact: {
    address: 'Shop No. 12, Sunshine Garden Building, Near Millenium Park, Achole Road, Nalsopara (East), Thane, Maharashtra',
    phone: '+91 97024 98203 | +91 9309873690',
    primaryPhone: '+91 97024 98203',
    email: 'nayan@globalgeotechengineering.com',
    accountEmail: 'account@globalgeotechengineering.com',
    hours: 'MON - FRI: 9AM - 7PM | SAT - SUN: CLOSED',
    whatsapp: 'https://wa.me/919702498203',
  },
};
