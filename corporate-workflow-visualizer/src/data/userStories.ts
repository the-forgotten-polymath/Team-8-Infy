export type MoscowPriority = 'Must have' | 'Should have' | 'Could have' | 'Won\\'t have';
export type RiskLevel = 'High' | 'Medium' | 'Low';
export type BusinessValue = 'High' | 'Medium' | 'Low';

export interface UserStory {
  id: string;
  section: string;
  story: string;
  moscow: MoscowPriority;
  risk: RiskLevel;
  businessValue: BusinessValue;
  interdependency: string;
  priority: number;
}

export const userStoriesData: UserStory[] = [
  // ------------------- INVENTORY CONTROLLER -------------------
  {
    id: 'US-INV-01',
    section: 'Inventory Intelligence OS',
    story: 'As a Boutique Admin, I want to capture 15-50 products in a single camera frame using the Vision Framework, so that cycle counts can be completed in minutes instead of hours.',
    moscow: 'Must have',
    risk: 'High',
    businessValue: 'High',
    interdependency: 'None',
    priority: 1
  },
  {
    id: 'US-INV-02',
    section: 'Inventory Intelligence OS',
    story: 'As an Inventory Manager, I want to use RFID sled integration to physical bind items to their Product Digital Twin, so that provenance is never lost.',
    moscow: 'Must have',
    risk: 'Medium',
    businessValue: 'High',
    interdependency: 'Product Master Database',
    priority: 2
  },
  {
    id: 'US-INV-03',
    section: 'Inventory Intelligence OS',
    story: 'As a Store Manager, I want to view a real-time Inventory Heatmap overlaying the physical store layout, so I can instantly spot mis-categorized or missing stock zones.',
    moscow: 'Could have',
    risk: 'High',
    businessValue: 'Medium',
    interdependency: 'Store Physical Planogram API',
    priority: 3
  },
  {
    id: 'US-INV-04',
    section: 'Inventory Intelligence OS',
    story: 'As an Associate, I want the system to auto-match physical deliveries against Advanced Shipping Notices (ASN), so manual reconciliation is completely eliminated.',
    moscow: 'Should have',
    risk: 'Medium',
    businessValue: 'High',
    interdependency: 'Corporate ERP (SAP/Oracle)',
    priority: 4
  },
  {
    id: 'US-INV-05',
    section: 'Inventory Intelligence OS',
    story: 'As a Corporate Admin, I want an autonomous ML model to predict future stockouts based on local weather and historical traffic, so I can pre-emptively transfer inventory.',
    moscow: 'Won\'t have',
    risk: 'High',
    businessValue: 'Medium',
    interdependency: 'Weather API, Traffic CoreML Model',
    priority: 5
  },

  // ------------------- AFTER-SALES SERVICE -------------------
  {
    id: 'US-AFT-01',
    section: 'After-Sales Service',
    story: 'As an Associate, I want the iPad camera to mandate 6 high-res macro photos during intake, so that false damage claims are structurally prevented.',
    moscow: 'Must have',
    risk: 'Low',
    businessValue: 'High',
    interdependency: 'AWS S3 Storage',
    priority: 1
  },
  {
    id: 'US-AFT-02',
    section: 'After-Sales Service',
    story: 'As a Master Watchmaker, I want a CoreML vision model to automatically detect and highlight sapphire crystal micro-fractures, so I don\'t miss microscopic damage during QA.',
    moscow: 'Should have',
    risk: 'High',
    businessValue: 'Medium',
    interdependency: 'On-device CoreML Models',
    priority: 2
  },
  {
    id: 'US-AFT-03',
    section: 'After-Sales Service',
    story: 'As a Customer, I want to receive an SMS with a secure JWT deep-link, so I can securely approve and pay for my repair using Apple Pay from my phone.',
    moscow: 'Must have',
    risk: 'Medium',
    businessValue: 'High',
    interdependency: 'Twilio API, Stripe/Adyen Gateway',
    priority: 3
  },
  {
    id: 'US-AFT-04',
    section: 'After-Sales Service',
    story: 'As a Manager, I want a Service Passport event appended to the item\'s Product Digital Twin via CloudKit, so the item\'s repair history is accessible globally in real-time.',
    moscow: 'Must have',
    risk: 'Low',
    businessValue: 'High',
    interdependency: 'CloudKit Sync Engine',
    priority: 4
  },
  {
    id: 'US-AFT-05',
    section: 'After-Sales Service',
    story: 'As a Customer, I want a visual Before vs After slider gallery on my portal, so I can clearly see the quality of the repair.',
    moscow: 'Could have',
    risk: 'Low',
    businessValue: 'Medium',
    interdependency: 'Customer Experience Portal UI',
    priority: 5
  },

  // ------------------- BOUTIQUE ADMIN -------------------
  {
    id: 'US-BTA-01',
    section: 'Boutique Admin',
    story: 'As a Boutique Manager, I want the system to enforce dual-control FaceID authentication within a 60-second window, so that the high-value physical vault is securely unlocked.',
    moscow: 'Must have',
    risk: 'High',
    businessValue: 'High',
    interdependency: 'IoT Vault Relay, Local Network',
    priority: 1
  },
  {
    id: 'US-BTA-02',
    section: 'Boutique Admin',
    story: 'As a Manager, I want ceiling-mounted thermal sensors to feed into a live traffic dashboard, so I can automatically re-route idle staff to crowded zones like Watches.',
    moscow: 'Could have',
    risk: 'High',
    businessValue: 'Medium',
    interdependency: 'Hardware IoT Sensor Installation',
    priority: 2
  },
  {
    id: 'US-BTA-03',
    section: 'Boutique Admin',
    story: 'As a Greeter, I want to receive an iBeacon VIP arrival push notification with their CRM profile photo, so I can offer their preferred beverage immediately.',
    moscow: 'Should have',
    risk: 'Medium',
    businessValue: 'High',
    interdependency: 'Client iOS App (Opt-in Beacon)',
    priority: 3
  },
  {
    id: 'US-BTA-04',
    section: 'Boutique Admin',
    story: 'As a Manager, I want to remotely authorize a high-value discount using biometric token transmission to the associate\'s iPad, so I don\'t have to interrupt my client meeting.',
    moscow: 'Must have',
    risk: 'Medium',
    businessValue: 'High',
    interdependency: 'Websocket Peer-to-Peer Relay',
    priority: 4
  },

  // ------------------- CORPORATE ADMIN -------------------
  {
    id: 'US-COR-01',
    section: 'Corporate Admin',
    story: 'As a Corporate Planner, I want an AI agent to continuously calculate live price elasticity curves, so I can dynamically adjust markup recommendations in real-time across the network.',
    moscow: 'Should have',
    risk: 'High',
    businessValue: 'High',
    interdependency: 'Global Pricing API',
    priority: 1
  },
  {
    id: 'US-COR-02',
    section: 'Corporate Admin',
    story: 'As a Security Director, I want every system transaction to be irreversibly hashed and written to a private blockchain ledger, so audit trails are legally non-repudiable.',
    moscow: 'Must have',
    risk: 'High',
    businessValue: 'High',
    interdependency: 'Enterprise Blockchain Node',
    priority: 2
  },
  {
    id: 'US-COR-03',
    section: 'Corporate Admin',
    story: 'As an Allocation Manager, I want the Smart Rebalancing Engine to automatically draft cross-store transfer manifests based on moving slow-sellers to high-velocity regions.',
    moscow: 'Must have',
    risk: 'Medium',
    businessValue: 'High',
    interdependency: 'Regional Logistics Couriers',
    priority: 3
  },
  {
    id: 'US-COR-04',
    section: 'Corporate Admin',
    story: 'As a Regional VP, I want an interactive, WebGL-powered 3D visualization of global revenue mapped onto a digital globe, so I can present metrics beautifully during quarterly reviews.',
    moscow: 'Could have',
    risk: 'Medium',
    businessValue: 'Medium',
    interdependency: 'Three.js / WebGL Rendering Pipeline',
    priority: 4
  },

  // ------------------- SALES ASSOCIATE -------------------
  {
    id: 'US-SAL-01',
    section: 'Sales Associate',
    story: 'As an Advisor, I want to instantly tap-to-pay via iPhone NFC using the Stripe SDK, so the client never has to leave their seat or wait at a cash register.',
    moscow: 'Must have',
    risk: 'Medium',
    businessValue: 'High',
    interdependency: 'Stripe Terminal SDK',
    priority: 1
  },
  {
    id: 'US-SAL-02',
    section: 'Sales Associate',
    story: 'As an Advisor, I want to view a unified \'Client Digital Twin\' that aggregates all omnichannel purchases and online wishlist items, so I can recommend complementary accessories.',
    moscow: 'Must have',
    risk: 'Low',
    businessValue: 'High',
    interdependency: 'E-commerce API Integration',
    priority: 2
  },
  {
    id: 'US-SAL-03',
    section: 'Sales Associate',
    story: 'As an Advisor, I want the system to automatically generate a pre-filled PDF Certificate of Authenticity and AirPrint it, so I can hand the client their physical document immediately.',
    moscow: 'Should have',
    risk: 'Low',
    businessValue: 'Medium',
    interdependency: 'Local AirPrint Network',
    priority: 3
  },
  {
    id: 'US-SAL-04',
    section: 'Sales Associate',
    story: 'As an Advisor, I want a smart Clienteling assistant to remind me to reach out to a VIP client precisely 11 months after purchase, so I can schedule their annual warranty checkup.',
    moscow: 'Could have',
    risk: 'Low',
    businessValue: 'High',
    interdependency: 'CRM Automated Rules Engine',
    priority: 4
  }
];
