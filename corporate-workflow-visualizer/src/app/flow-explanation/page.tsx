'use client';

import React, { useState } from 'react';

const flowData = [
  {
    section: 'Inventory Intelligence OS',
    priorityRange: 'Priorities 1 - 58',
    scenario: {
      title: 'Real-World Scenario: Receiving a 500-Item Shipment',
      text: 'A delivery truck arrives with 500 new luxury handbags. In a traditional store, staff would spend hours scanning each box one by one with a laser scanner. With Hutch OS, the associate simply holds up an iPad. The Vision Scanner instantly reads up to 50 barcodes simultaneously in a single 2-second camera frame. For every item scanned, the system automatically mints a permanent "Product Digital Twin" (a secure digital passport). If the original shipping manifest said 500 bags were coming, but the scanner only sees 499, the OS instantly flashes an anomaly alert, catching the missing item before the delivery driver even leaves the building.'
    },
    flow: [
      '1. Receiving: Items arrive. Associate uses Vision Scanner to verify dozens of items instantly.',
      '2. Digital Passport Minting: A secure "Product Digital Twin" is automatically generated for every received item.',
      '3. Cycle Counting: Daily inventory counts are executed 10x faster using the multi-barcode camera or RFID/NFC.',
      '4. Anomaly Detection: Missing, extra, or damaged items are flagged immediately. Shrink metrics update in real-time.',
      '5. Resolution: Managers review and approve variances on their dashboard, creating an immutable audit trail.'
    ],
    differentiators: [
      'Vision-Powered Capture: We replace single-item laser scanning with multi-item computer vision, saving thousands of labor hours.',
      'Product Digital Twin: We don\'t just track "SKU count = 5". Every physical item gets a unique, permanent cryptographic identity from the moment it enters the store.',
      'Predictive Shrink Analytics: Instead of discovering a stolen item during a yearly audit, ML algorithms predict stockouts and flag anomalies instantly.'
    ]
  },
  {
    section: 'After-Sales Service',
    priorityRange: 'Priorities 59 - 114',
    scenario: {
      title: 'Real-World Scenario: The Scratched Luxury Watch',
      text: 'A VIP client walks in with a deeply scratched luxury watch. Instead of the associate subjectively guessing the repair cost and timeline, they use the OS AI Triage tool. The app recognizes the watch model and damage type, instantly generating an accurate quote of $400 and a 3-week turnaround. The client agrees. The OS immediately issues a "Loaner Watch," linking the loaner\'s digital ID to the client\'s profile so it doesn\'t get lost. As the watch moves to the repair center, the client tracks its exact progress live on their phone—just like tracking a pizza delivery. Once repaired, the service history is permanently etched into the watch\'s Digital Twin.'
    },
    flow: [
      '1. AI Triage: Client brings in a damaged item. The AI tool instantly diagnoses the issue, estimates cost, and predicts turnaround time.',
      '2. Loaner Issuance: A temporary loaner item is seamlessly issued, linking its digital identity to the active repair ticket.',
      '3. Secure Shipment: The damaged item is tracked and shipped to the central service center, updating its digital passport.',
      '4. Client Transparency: The customer monitors the exact repair stage via a live, self-service tracking portal.',
      '5. Return & Log: The repaired item is returned, the loaner is checked back in, and the digital twin logs the service history permanently.'
    ],
    differentiators: [
      'AI-Driven Triage: Legacy systems rely on staff guessing repair times. We use historical ML data to provide instant, highly accurate triage.',
      'Digital Twin Updating: A repair isn\'t just a paper ticket; it becomes a permanent, verifiable part of the item\'s digital passport.',
      'Omnichannel Client Transparency: Customers never have to call the store asking "is my watch ready?" because they have real-time visibility.'
    ]
  },
  {
    section: 'Boutique Admin',
    priorityRange: 'Priorities 115 - 172',
    scenario: {
      title: 'Real-World Scenario: Surviving the Saturday Rush',
      text: 'It\'s a chaotic Saturday afternoon. The boutique manager looks at the OS Dashboard. The predictive AI knows that 5 VIP clients are scheduled to arrive at 2:00 PM, and the physical in-store heatmaps show massive crowding near the shoe section. The OS automatically pings two associates currently on break, asking them to return 5 minutes early, and assigns them directly to the VIPs based on their past purchase history. Meanwhile, walk-in customers are seamlessly added to a digital waitlist queue. The manager orchestrates the entire floor without leaving their iPad, ensuring zero VIP wait time and perfectly optimized staff deployment.'
    },
    flow: [
      '1. Daily Prep: The Store Manager opens the dashboard to view predictive traffic and real-time VIP appointments.',
      '2. Smart Scheduling: Staff are automatically allocated based on expected foot traffic and their specific product expertise.',
      '3. In-Store Heatmaps: The manager views a live physical heatmap of the store to deploy staff to high-traffic or "cold" zones.',
      '4. VIP Queue Management: Walk-ins are added to a digital queue, routing them to the best-matched available associate.',
      '5. End-of-Day: The OS generates automated performance reports, reducing manager admin time by up to 80%.'
    ],
    differentiators: [
      'Predictive Traffic Heatmaps: We integrate physical store sensor data to show exactly where clients are lingering, far beyond static door counters.',
      'Skill-Based Routing: Associates aren\'t assigned randomly. The VIP queue matches clients to staff based on purchase history and language skills.',
      'Holistic Dashboarding: Managers no longer switch between 5 different apps for schedule, inventory, and sales—it\'s all unified in one OS.'
    ]
  },
  {
    section: 'Corporate Admin',
    priorityRange: 'Priorities 173 - 230',
    scenario: {
      title: 'Real-World Scenario: Global Inventory Rebalancing',
      text: 'A Regional Director in Paris opens the Global Dashboard. They notice the "Inventory Accuracy Score" for the London boutique has dropped to a \'C\' grade. Drilling down, they see a specific line of winter jackets is completely sold out in London, but sitting untouched as deadstock in a Miami boutique. Using the "Dynamic Reallocation" feature, the Director clicks one button. The OS automatically generates the transfer manifests, alerting Miami to pack the jackets and shipping them directly to London to capture the demand. The entire global ecosystem is optimized in three clicks.'
    },
    flow: [
      '1. Global View: Regional managers open the ecosystem dashboard to see a unified view of all global boutiques.',
      '2. Performance Tracking: Real-time metrics compare store performances, inventory accuracy, and sales conversion rates.',
      '3. Logistics Oversight: Corporate monitors inter-store transfers and service center SLAs globally.',
      '4. Product Lifecycle Tracing: Trace the journey of any specific luxury item from manufacturing to after-sales across the world.',
      '5. Strategic Actions: Push new visual merchandising guidelines, update pricing, or dynamically reallocate inventory across regions.'
    ],
    differentiators: [
      'True Ecosystem Visibility: Competitors offer fragmented tools for CRM vs Inventory. Hutch provides a single pane of glass for the entire retail ecosystem.',
      'Automated Compliance: The system automatically scores stores on Standard Operating Procedure (SOP) compliance without needing manual regional audits.',
      'Dynamic Reallocation: Uses AI to suggest moving deadstock from one boutique to another where demand is predicted to be higher.'
    ]
  },
  {
    section: 'Sales Associate',
    priorityRange: 'Priorities 231 - 288',
    scenario: {
      title: 'Real-World Scenario: The Hyper-Personalized Remote Sale',
      text: 'An associate gets an ML-driven push notification: "Your top client, Emma, usually buys a new silk scarf every October. A new collection just arrived." The associate taps the notification, which automatically generates a highly personalized, secure "Micro-site" link featuring the exact scarves Emma will love. They text her the link. Emma opens it on her phone, views the scarves in 3D, and buys one with Apple Pay in a single tap. The transaction is credited to the associate. Instantly, the scarf\'s Product Digital Twin is transferred to Emma\'s digital wallet, proving its authenticity forever.'
    },
    flow: [
      '1. Clienteling 2.0: Associate receives an ML-driven notification that a top client is likely to buy a specific new arrival.',
      '2. Remote Outreach: Associate uses the unified platform to send a hyper-personalized, shoppable link directly to the client.',
      '3. In-Store Visit: If the client visits, the Associate instantly accesses their 360-degree profile, including wishlists and past repairs.',
      '4. Global Discovery: The Associate uses real-time inventory lookup across all global stores to find the exact variant the client wants.',
      '5. Seamless Checkout: Mobile checkout on the shop floor is followed by an automated post-purchase digital twin certificate transfer.'
    ],
    differentiators: [
      'Predictive Recommendations: We move beyond basic "birthday reminders" to ML-driven predictive product recommendations based on global purchasing habits.',
      'Frictionless Remote Selling: Associates can create secure, personalized micro-sites for clients to check out remotely with one tap.',
      'Unified Profile: The CRM merges sales data, service/repair history, and digital twins, giving the Associate absolute context on the client.'
    ]
  }
];

export default function FlowExplanationPage() {
  const [activeSection, setActiveSection] = useState(flowData[0]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans p-8 md:p-16">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair tracking-tight text-[#1A1A1A]">
            Flow Explanations <span className="text-[#C9540A] italic">& Differentiators</span>
          </h1>
          <p className="mt-4 text-[#1A1A1A]/90 max-w-3xl text-lg">
            Understand how each module works through real-world scenarios, and discover exactly how the Hutch ecosystem outpaces legacy retail solutions.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {flowData.map((data) => (
              <button
                key={data.section}
                onClick={() => setActiveSection(data)}
                className={`text-left px-6 py-4 rounded-md text-sm font-bold tracking-wide transition-all ${
                  activeSection.section === data.section 
                  ? 'bg-[#C9540A] text-white shadow-md scale-[1.02]' 
                  : 'bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#C9540A] hover:text-[#C9540A]'
                }`}
              >
                {data.section}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-white border border-[#1A1A1A]/10 p-8 md:p-12 rounded-sm shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-[#1A1A1A]/10 gap-4">
              <h2 className="text-3xl font-playfair text-[#1A1A1A]">
                {activeSection.section}
              </h2>
              <div className="inline-flex items-center px-4 py-2 bg-[#FAF8F5] border border-[#1A1A1A]/20 rounded-md text-sm font-bold text-[#C9540A]">
                {activeSection.priorityRange}
              </div>
            </div>

            {/* Real World Scenario */}
            <div className="mb-12 bg-[#1A1A1A] text-[#FAF8F5] p-6 rounded-md shadow-md border-l-4 border-[#C9540A]">
              <h3 className="text-sm uppercase tracking-widest font-bold text-[#C9540A] mb-3">
                {activeSection.scenario.title}
              </h3>
              <p className="text-[#FAF8F5]/90 leading-relaxed text-lg font-playfair italic">
                "{activeSection.scenario.text}"
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-widest font-bold text-[#C9540A] mb-6">
                Step-by-Step Flow
              </h3>
              <div className="flex flex-col gap-4">
                {activeSection.flow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-[#FAF8F5] rounded-md border border-[#1A1A1A]/5 hover:border-[#C9540A]/30 transition-colors">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-[#1A1A1A]/90 leading-relaxed mt-1 font-medium">
                      {step.substring(3)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-[#C9540A] mb-6">
                Why We Are Different
              </h3>
              <div className="flex flex-col gap-6 border-l-2 border-[#C9540A] pl-6">
                {activeSection.differentiators.map((diff, idx) => {
                  const [title, desc] = diff.split(': ');
                  return (
                    <div key={idx} className="bg-[#FAF8F5]/50 p-4 rounded-r-md">
                      <strong className="text-[#1A1A1A] block mb-2 text-lg">{title}</strong>
                      <p className="text-[#1A1A1A]/80 leading-relaxed">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
