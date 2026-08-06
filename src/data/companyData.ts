import { LeadershipMember, ServiceItem, BusinessSector, OfficeLocation, StatItem, CoreValue } from '../types';

export const COMPANY_INFO = {
  name: "Muslim and Brothers General Enterprises",
  shortName: "Muslim & Brothers",
  registrationNumber: "BN 2003703",
  tagline: "Building Strong Partnerships Across Africa and Beyond",
  headline: "Building Strong Partnerships Across Africa and Beyond",
  subheadline: "Muslim and Brothers General Enterprises is a trusted corporate enterprise specializing in importation, marketing, distribution, real estate, building materials, general supplies, travel consultancy, and international business solutions.",
  mainEmail: "muslimandbrothers1222@gmail.com",
  allPhones: {
    nigeria: ["+234 9073407583", "+234 8033822068", "+234 8031512307"],
    us: ["+1 9406170970"],
    ghana: ["+233 591841501", "+233 599319178"]
  },
  primaryWhatsApp: "+2349073407583",
  establishedYear: 2003
};

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity & Trust",
    description: "We uphold uncompromising transparency, legal compliance, and ethical standards across all international commercial transactions.",
    iconName: "ShieldCheck"
  },
  {
    title: "Unmatched Quality",
    description: "Sourcing premium building materials, Grade-A rice, authentic spices, and top-tier seafood for discerning markets.",
    iconName: "Award"
  },
  {
    title: "Reliable Supply Chain",
    description: "End-to-end logistics routing across Nigeria, Ghana, and international trade lines ensuring zero operational downtime.",
    iconName: "Truck"
  },
  {
    title: "Global Partnerships",
    description: "Fostering strategic cross-border ventures between West Africa, North America, Europe, and Asia.",
    iconName: "Globe"
  },
  {
    title: "Customer Centricity",
    description: "Customized procurement, tailored property agency solutions, and dedicated account managers for every client.",
    iconName: "Users"
  },
  {
    title: "Innovation & Growth",
    description: "Deploying modern IT infrastructure, digital tracking, and strategic business development techniques.",
    iconName: "TrendingUp"
  }
];

export const COMPANY_STATS: StatItem[] = [
  {
    label: "Years of Excellence",
    value: "20+",
    numericValue: 20,
    subtext: "Established commercial track record in West Africa",
    iconName: "Calendar"
  },
  {
    label: "Satisfied Corporate Clients",
    value: "1,500+",
    numericValue: 1500,
    subtext: "Across construction, retail, and corporate sectors",
    iconName: "Users"
  },
  {
    label: "International Partners",
    value: "50+",
    numericValue: 50,
    subtext: "Global trade, supply & shipping networks",
    iconName: "Globe"
  },
  {
    label: "Countries Served",
    value: "15+",
    numericValue: 15,
    subtext: "Nigeria, Ghana, USA & global destinations",
    iconName: "MapPin"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "importation-services",
    title: "Importation & Global Trading",
    category: "import_export",
    iconName: "Ship",
    shortDesc: "End-to-end international freighting, clearing, and global sourcing from top manufacturers worldwide.",
    fullDesc: "Muslim and Brothers General Enterprises manages complex cross-border procurement and containerized shipping into West Africa. We handle customs documentation, port clearance, compliance checks, and door-to-door distribution.",
    keyFeatures: ["Customs Duty & Clearance Processing", "Bulk Freight & Containerization", "Multi-Country Sourcing Protocols", "Door-to-Door Cargo Freight"],
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "marketing-distribution",
    title: "Marketing & Wholesale Distribution",
    category: "import_export",
    iconName: "Share2",
    shortDesc: "Aggressive commercial channel expansion in major West African hubs including Kwari & Singers markets.",
    fullDesc: "Our deep retail and wholesale networks give brand owners and foreign suppliers instant market saturation across major West African trade hubs, including Kano's famous Singers and Kwari Market divisions.",
    keyFeatures: ["Wholesale Network Saturation", "Market Penetration Strategy", "Warehouse Storage & Logistics", "Kwari & Singers Market Depots"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "building-materials",
    title: "Building Materials & Construction Supply",
    category: "real_estate",
    iconName: "HardHat",
    shortDesc: "Premium structural steel, cement, roofing, plumbing, and structural components for civil engineering projects.",
    fullDesc: "Direct supply of tested construction materials to property developers, state contractors, and commercial builders. We supply high-grade rebar, structural steel, roofing tiles, sanitary fittings, and specialized cement.",
    keyFeatures: ["High-Tensile Rebar & Steel", "Commercial Cement Sourcing", "Roofing & Plumbing Components", "Contractor Volume Discounts"],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "real-estate-property",
    title: "Real Estate & Property Agency",
    category: "real_estate",
    iconName: "Building2",
    shortDesc: "Residential, commercial land acquisition, property management, and investment advisory in Nigeria & Ghana.",
    fullDesc: "We facilitate verified land acquisitions, residential estates, high-yield commercial plazas, and property management across Kano, Abuja, Lagos, and Greater Accra.",
    keyFeatures: ["Verified Title Verification (C of O)", "Commercial Plaza Leasing", "Residential Property Acquisition", "Facility & Property Management"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "rice-supply",
    title: "Premium Rice Supply & Grain Distribution",
    category: "commodities",
    iconName: "Wheat",
    shortDesc: "Bulk distribution of long-grain parboiled rice, aromatic basmati, and high-grade local rice sacks.",
    fullDesc: "Large-scale supply of premium Grade-A rice to distributors, state programs, institutions, and supermarkets. We guarantee clean, well-milled, stoneless grains in 50kg, 25kg, and custom branded packaging.",
    keyFeatures: ["50kg & 25kg Bulk Rice Sacks", "Stoneless Double-Polished Grains", "Institutional Contract Supply", "Branded Packing Options"],
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "spices-distribution",
    title: "Spices & Agro-Commodity Trading",
    category: "commodities",
    iconName: "Flame",
    shortDesc: "Authentic culinary spices, natural seasonings, ginger, garlic, and agricultural commodity supply.",
    fullDesc: "Direct farm-gate and imported procurement of premium spices, whole seeds, grounded peppers, garlic, ginger, and aromatic culinary ingredients distributed across West Africa.",
    keyFeatures: ["Bulk Farm-Gate Sourcing", "Hygienic Quality Processing", "Long-Shelf Storage", "Export-Grade Quality Standards"],
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sardine-canned-seafood",
    title: "Sardine Fish & Canned Seafood Distribution",
    category: "commodities",
    iconName: "Fish",
    shortDesc: "Wholesale distribution of premium canned sardines in vegetable oil and tomato sauce.",
    fullDesc: "Official wholesale distributor for high-protein canned sardines and preserved seafood. We supply retail chains, government feeding initiatives, and regional food marts with sealed shelf-stable stock.",
    keyFeatures: ["High-Protein Canned Sardines", "Vegetable Oil & Tomato Variations", "Sealed Carton Wholesale Delivery", "NFDAC / Standards Compliant"],
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "travel-consultancy",
    title: "Travel & Visa Advisory Consultancy",
    category: "consultancy",
    iconName: "PlaneTakeoff",
    shortDesc: "Corporate flight bookings, visa processing assistance, business travel logistics, and VIP itineraries.",
    fullDesc: "Professional travel desk assisting corporate executives, trade delegations, and families with visa documentation, international flight ticketing, hotel reservations, and travel insurance.",
    keyFeatures: ["Executive Visa Facilitation", "Group Trade Delegation Logistics", "Discounted Corporate Airfares", "Emergency Ticket Rerouting"],
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "business-development",
    title: "Business Development & Strategy Consulting",
    category: "consultancy",
    iconName: "Briefcase",
    shortDesc: "West African market entry, regulatory advisory, strategic joint-ventures, and corporate expansion.",
    fullDesc: "Helping international brands navigate West African regulatory bodies, tax frameworks, market feasibility studies, and strategic local partnership formation.",
    keyFeatures: ["Market Feasibility Analysis", "Regulatory Agency Approvals", "Strategic Joint Venture Structuring", "Corporate Expansion Audits"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "procurement-services",
    title: "Corporate & Government Procurement",
    category: "procurement",
    iconName: "ShoppingBag",
    shortDesc: "Turnkey supply solutions for government agencies, NGOs, corporate institutions, and large firms.",
    fullDesc: "End-to-end tender fulfillment, office equipment sourcing, industrial safety gear, emergency relief supply, and bulk material provision with strict deadline adherence.",
    keyFeatures: ["Tender & Contract Fulfillment", "Institutional Bulk Purchasing", "Supply Chain Auditing", "Strict Quality Assurance Testing"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  }
];

export const BUSINESS_SECTORS: BusinessSector[] = [
  {
    id: "real-estate-sector",
    name: "Real Estate & Housing",
    description: "Property development, land acquisitions, estate planning, and commercial plazas across Kano, Abuja & Greater Accra.",
    iconName: "Building",
    bgImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    stats: "250+ Properties Facilitated"
  },
  {
    id: "construction-materials-sector",
    name: "Construction Materials",
    description: "Structural rebar, cement, roofing, tiles, and civil engineering building components.",
    iconName: "Truck",
    bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    stats: "50,000+ Tons Shipped"
  },
  {
    id: "rice-sector",
    name: "Rice & Grain Distribution",
    description: "Wholesale parboiled and basmati rice supply in 50kg sacks for distributors and commercial hubs.",
    iconName: "Wheat",
    bgImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    stats: "100,000+ Bags Distributed"
  },
  {
    id: "spices-sector",
    name: "Spices & Agro-Commodities",
    description: "Export and local distribution of authentic natural spices, ginger, garlic, and peppers.",
    iconName: "Flame",
    bgImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    stats: "Bulk Wholesale Depots"
  },
  {
    id: "seafood-sector",
    name: "Seafood & Canned Sardines",
    description: "Canned sardine fish distribution to major market hubs in Kano, Lagos, Accra and beyond.",
    iconName: "Fish",
    bgImage: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
    stats: "National Distribution"
  },
  {
    id: "import-export-sector",
    name: "Import & Export Logistics",
    description: "International cargo freight, customs clearance, and global supply chain logistics.",
    iconName: "Anchor",
    bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    stats: "Global Shipping Lines"
  },
  {
    id: "travel-sector",
    name: "Travel & Visa Advisory",
    description: "Corporate travel, flight ticketing, business visa support, and international travel logistics.",
    iconName: "Plane",
    bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    stats: "1,000+ Travel Solutions"
  },
  {
    id: "procurement-sector",
    name: "Corporate Procurement",
    description: "Government tenders, corporate equipment supply, and bulk institutional purchasing.",
    iconName: "ShoppingBag",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    stats: "Full Compliance Certified"
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "habib-umar-usman",
    name: "Habib Umar Usman",
    rank: "CEO / Managing Director",
    department: "executive",
    phones: ["+234 9073407583", "+233 599319178", "+234 8033822068"],
    email: "habibumarusman@gmail.com",
    bio: "Founding visionary and Chief Executive driving Muslim and Brothers General Enterprises across Nigeria, Ghana, and international trade routes. Expert in corporate strategy and international trade.",
    location: "Kano, Nigeria & Accra, Ghana",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ismail-banda",
    name: "Ismail Banda",
    rank: "GM / Business Development & Strategy",
    department: "executive",
    phones: ["+1 9406170970", "+233 591841501"],
    email: "ismobda2023@mail.com",
    bio: "General Manager overseeing international partnerships, North American strategy, and business growth across West Africa and US trade channels.",
    location: "United States & Ghana",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "zahradeen-abubakar-sadiq",
    name: "Zahradeen Abubakar Sadiq",
    rank: "Deputy Managing Director (DMD)",
    department: "executive",
    phones: ["+234 9121798008"],
    email: "alhajideeni@gmail.com",
    bio: "Deputy Managing Director ensuring operational oversight, administrative leadership, and strategic cross-sector execution across all company divisions.",
    location: "Kano, Nigeria",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nasir-isa",
    name: "Nasir Isa",
    rank: "Director, Marketing & Corporate Affairs",
    department: "marketing",
    phones: ["+234 8038602798"],
    email: "isahnasir90@gmail.com",
    bio: "Leading corporate branding, market penetration strategies, stakeholder relations, and high-level communications for commercial ventures.",
    location: "Kano, Nigeria",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "auwal-muhammad",
    name: "Auwal Muhammad",
    rank: "Director, Real Estate Sector",
    department: "real_estate",
    phones: ["+234 8031512307"],
    email: "auwalmkano@gmail.com",
    bio: "Head of property agency, title verifications, estate development, and commercial land investments in Kano and surrounding commercial corridors.",
    location: "Kano, Nigeria",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "abubakar-barau-abdullahi",
    name: "Abubakar Barau Abdullahi",
    rank: "Director Advisory Board & Business Consultant",
    department: "advisory",
    phones: ["+234 8020716666", "+234 9020202079"],
    email: "muslimandbrothers1222@gmail.com",
    bio: "Advisory Board Director specializing in corporate governance, institutional consultation, and high-stakes trade negotiations.",
    location: "Nigeria & International",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nura-sulaiman",
    name: "Nura Sulaiman",
    rank: "Senior Marketing Representative",
    department: "marketing",
    phones: ["+234 8135917798"],
    email: "nurasulaiman145@gmail.com",
    bio: "Key commercial representative managing distributor relations, wholesale sales channels, and product marketing across regional centers.",
    location: "Kano, Nigeria",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "aminu-datti-sani",
    name: "Aminu Datti Sani",
    rank: "Marketing Representative II (Singers & Kwari Division)",
    department: "marketing",
    phones: ["+234 09039250313"],
    email: "aminudatti95@gmail.com",
    bio: "Direct field leader managing wholesale accounts at Kano's world-famous Kwari Textile & Singers Commodities market centers.",
    location: "Singers & Kwari Market, Kano",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "auwal-bashir",
    name: "Auwal Bashir",
    rank: "IT & Cloud Computing Specialist",
    department: "technical",
    phones: ["+234 8109857034"],
    email: "aburingim1997@gmail.com",
    bio: "Architect of company digital systems, cloud management, portal infrastructure, and modern business technology deployment.",
    location: "Kano, Nigeria",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "halima-bala-khamis",
    name: "Halima Bala Khamis",
    rank: "Executive Secretary",
    department: "operations",
    phones: ["+234 8088855054"],
    email: "imanummi132@gmail.com",
    bio: "Executive desk coordinator handling client communications, documentation, corporate schedules, and official correspondence.",
    location: "Kano Head Office",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "abdullahi-umar-usman",
    name: "Abdullahi Umar Usman",
    rank: "Brand Ambassador",
    department: "marketing",
    phones: ["+234 8068719811"],
    email: "abdullahiumarusman1335@gmail.com",
    bio: "Official Brand Ambassador advocating company values, community engagement, and strategic brand visibility.",
    location: "Nigeria",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600"
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: "kano-head-office",
    country: "Nigeria",
    type: "HEAD OFFICE",
    address: [
      "No. 14–15 Royal Plaza Suite",
      "Beside MTN Office, Opposite MYCA7 Plaza",
      "Zoo Road, Kano State",
      "Nigeria"
    ],
    landmark: "Beside MTN Office & Opposite MYCA7 Plaza, Zoo Road",
    phones: ["+234 9073407583", "+234 8033822068", "+234 8031512307"],
    email: "muslimandbrothers1222@gmail.com",
    googleMapUrl: "https://maps.google.com/?q=Zoo+Road+Kano+Nigeria",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.02321481023!2d8.5303!3d11.9785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae813e3b0b9b3f%3A0x8f7d9e4a3b1c2d3e!2sZoo%20Rd%2C%20Kano%2C%20Nigeria!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    hours: "Mon - Sat: 8:00 AM - 6:00 PM (WAT)"
  },
  {
    id: "ghana-branch-office",
    country: "Ghana",
    type: "GHANA OFFICE",
    address: [
      "GE-024-6629#081",
      "Near Preointa Street, Abokobi",
      "Greater Accra, Box SD 172 Stadium",
      "Accra, Ghana"
    ],
    landmark: "Near Preointa Street, Abokobi, Greater Accra",
    phones: ["+233 591841501", "+233 599319178"],
    email: "ismobda2023@mail.com",
    googleMapUrl: "https://maps.google.com/?q=Abokobi+Accra+Ghana",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0!2d-0.2!3d5.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAbokobi%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    hours: "Mon - Sat: 8:00 AM - 5:30 PM (GMT)"
  }
];
