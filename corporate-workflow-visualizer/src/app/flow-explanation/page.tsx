'use client';

import React, { useState } from 'react';

const flowData = [
  {
    section: 'Inventory Intelligence OS',
    flow: [
      '1. Receiving: Items arrive via ASN. The Associate uses the Vision Scanner to instantly verify dozens of items in a single frame.',
      '2. Digital Identity Creation: The system automatically generates a secure "Product Digital Twin" for every luxury item upon receiving.',
      '3. Cycle Counting: Daily counts are performed 10x faster using the multi-barcode camera scanner or RFID/NFC.',
      '4. Anomaly Detection: The system flags missing, extra, or damaged items immediately. Shrink metrics are updated.',
      '5. Resolution: Managers approve variances on their dashboard, automatically updating the Product Digital Twin lifecycle.'
    ],
    differentiators: [
      'Vision-Powered Capture: Instead of scanning items one by one, our OS captures 15-50 barcodes in a single 2-second camera frame.',
      'Product Digital Twin: Legacy systems just track "SKU count = 5". Hutch assigns a permanent cryptographic passport to every physical item from the moment it enters the store.',
      'Predictive Shrink Analytics: Rather than waiting for a monthly audit to discover loss, our OS uses ML to predict stockouts and flag shrink risks in real-time.'
    ]
  },
  {
    section: 'After-Sales Service',
    flow: [
      '1. Triage: Client brings in an item for repair. The Associate uses the AI-driven triage tool to diagnose the issue and estimate cost.',
      '2. Loaner Issuance: If needed, the system seamlessly issues a loaner item, linking its digital identity to the repair ticket.',
      '3. Shipment: The item is securely tracked and shipped to the central service center, updating its digital passport.',
      '4. Transparency: The client tracks the repair progress via a self-service portal (Customer App).',
      '5. Return: The repaired item is shipped back, the loaner is returned, and the digital twin logs the service history permanently.'
    ],
    differentiators: [
      'AI-Driven Triage: Legacy solutions rely on staff guessing repair times. We use historical ML data to provide instant, accurate triage.',
      'Digital Twin Updating: A repair isn\'t just a ticket; it becomes a permanent part of the item\'s digital passport, proving provenance and service history.',
      'Omnichannel Client Transparency: Customers don\'t need to call the store; they have real-time visibility into the exact stage of their repair.'
    ]
  },
  {
    section: 'Boutique Admin',
    flow: [
      '1. Daily Prep: The Store Manager opens the dashboard to view real-time VIP appointments and expected traffic.',
      '2. Smart Scheduling: Staff are automatically allocated based on the predictive traffic model and their specific skill sets.',
      '3. In-Store Heatmap: The manager views the physical heatmap of the store to deploy staff to high-traffic or "cold" zones.',
      '4. Queue Management: VIP walk-ins are seamlessly added to a digital queue, routing them to the best-matched available associate.',
      '5. End-of-Day: The OS generates automated performance reports for the boutique, reducing manager admin time by 80%.'
    ],
    differentiators: [
      'Predictive Traffic Heatmaps: We integrate physical store sensor data to show exactly where clients are lingering, unlike static footfall counters.',
      'Skill-Based Routing: Associates aren\'t just assigned randomly; the VIP queue routes clients to staff based on purchase history and expertise.',
      'Holistic Dashboarding: Managers no longer switch between 5 different apps for schedule, inventory, and sales—it\'s all unified in one OS.'
    ]
  },
  {
    section: 'Corporate Admin',
    flow: [
      '1. Global View: Regional managers open the ecosystem dashboard to see a unified view of all global boutiques.',
      '2. Performance Tracking: Real-time metrics compare store performances, inventory accuracy, and sales conversion rates.',
      '3. Logistics Oversight: Corporate monitors inter-store transfers and service center SLAs globally.',
      '4. Product Lifecycle: They can trace the journey of any specific luxury item from manufacturing to after-sales.',
      '5. Strategic Actions: Push new visual merchandising guidelines, update pricing, or reallocate inventory across regions instantly.'
    ],
    differentiators: [
      'True Ecosystem Visibility: Competitors offer fragmented tools for CRM vs Inventory. Hutch provides a single pane of glass for the entire retail ecosystem.',
      'Automated Compliance: The system automatically scores stores on SOP compliance without needing manual regional audits.',
      'Dynamic Reallocation: Uses AI to suggest moving deadstock from one boutique to another where demand is predicted to be higher.'
    ]
  },
  {
    section: 'Sales Associate',
    flow: [
      '1. Clienteling: Associate receives an ML-driven notification that a top client is likely to buy a specific new arrival.',
      '2. Outreach: Associate uses the unified messaging platform to send a hyper-personalized, shoppable link to the client.',
      '3. Visit: Client arrives in-store. The Associate instantly accesses their 360-degree profile, including wishlists and past repairs.',
      '4. Discovery: The Associate uses real-time inventory lookup (across all global stores) to find the exact variant the client wants.',
      '5. Checkout: Seamless mobile checkout on the shop floor, followed by an automated post-purchase digital twin certificate issuance.'
    ],
    differentiators: [
      'Clienteling 2.0: We move beyond "birthday reminders" to ML-driven predictive product recommendations based on global purchasing habits.',
      'Remote Selling: Associates can create secure, personalized micro-sites for clients to check out remotely with one tap.',
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
            Understand how each module works in plain language, and discover exactly how the Hutch ecosystem outpaces legacy retail solutions.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {flowData.map((data) => (
              <button
                key={data.section}
                onClick={() => setActiveSection(data)}
                className={`text-left px-6 py-4 rounded-md text-sm font-bold tracking-wide transition-all \${
                  activeSection.section === data.section 
                  ? 'bg-[#C9540A] text-white shadow-md scale-[1.02]' 
                  : 'bg-white border border-[#1A1A1A]/10 text-[#1A1A1A]/90 hover:border-[#C9540A] hover:text-[#C9540A]'
                }`}
              >
                {data.section}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-white border border-[#1A1A1A]/10 p-8 md:p-12 rounded-sm shadow-sm">
            <h2 className="text-3xl font-playfair mb-8 pb-4 border-b border-[#1A1A1A]/10">
              {activeSection.section}
            </h2>

            <div className="mb-10">
              <h3 className="text-sm uppercase tracking-widest font-bold text-[#C9540A] mb-6">
                How It Works (The Flow)
              </h3>
              <div className="flex flex-col gap-4">
                {activeSection.flow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-[#FAF8F5] rounded-md">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-[#1A1A1A] leading-relaxed mt-1">
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
              <div className="flex flex-col gap-4 border-l-2 border-[#C9540A] pl-6">
                {activeSection.differentiators.map((diff, idx) => {
                  const [title, desc] = diff.split(': ');
                  return (
                    <div key={idx}>
                      <strong className="text-[#1A1A1A] block mb-1">{title}</strong>
                      <p className="text-[#1A1A1A]/90 leading-relaxed">{desc}</p>
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
