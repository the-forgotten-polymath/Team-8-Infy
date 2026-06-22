"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface FlowNode {
  id: string;
  label: string;
  type: 'process' | 'decision' | 'twin' | 'external';
  subText?: string;
  connections?: string[];
}

interface ColumnFlow {
  id: string;
  title: string;
  headerColor: string;
  borderColor: string;
  accentBg: string;
  textColor: string;
  steps: FlowNode[];
}

const FLOW_DATA: ColumnFlow[] = [
  {
    id: "corp",
    title: "1. CORPORATE ADMIN FLOW",
    headerColor: "bg-[#0B4F9F] text-white",
    borderColor: "border-[#0B4F9F]/30",
    accentBg: "bg-[#0B4F9F]/5",
    textColor: "text-[#0B4F9F]",
    steps: [
      { id: "ca_1", label: "Manage Product Master", type: "process", subText: "SKUs, Brands, Collections, Serialization rules" },
      { id: "ca_2", label: "Set Pricing, Promotions & Assortment Rules", type: "process", subText: "Base & regional prices, campaign discounts" },
      { id: "ca_3", label: "Define Warranty, Authentication, SLA & Compliance Policies", type: "process", subText: "Planograms, SLA triggers, COA requirements" },
      { id: "ca_4", label: "Master Data & Governance Layer", type: "twin", subText: "Distributes configurations to all subsystems" }
    ]
  },
  {
    id: "inv",
    title: "2. INVENTORY FLOW",
    headerColor: "bg-[#DD6B20] text-white",
    borderColor: "border-[#DD6B20]/30",
    accentBg: "bg-[#DD6B20]/5",
    textColor: "text-[#DD6B20]",
    steps: [
      { id: "ic_1", label: "Receive Shipment / Open ASN", type: "process", subText: "Verify inbound vendor or warehouse shipments" },
      { id: "ic_2", label: "Scan Items using Barcode, Vision or RFID", type: "process", subText: "Bulk scan validation" },
      { id: "ic_3", label: "Shipment Matched with ASN?", type: "decision" },
      { id: "ic_4", label: "Capture Serial Number & Product Details", type: "process", subText: "For verified items" },
      { id: "ic_5", label: "Create Discrepancy Case", type: "external", subText: "Triggers Boutique Manager sign-off" },
      { id: "ic_6", label: "Create / Update Product Digital Twin", type: "twin" },
      { id: "ic_7", label: "Assign Location: Store Floor, Stock Room, Vault or Transfer", type: "process" },
      { id: "ic_8", label: "Update Store Digital Twin Inventory State", type: "twin", subText: "Sync physical quantity change" }
    ]
  },
  {
    id: "bm",
    title: "3. BOUTIQUE MANAGER FLOW",
    headerColor: "bg-[#2F855A] text-white",
    borderColor: "border-[#2F855A]/30",
    accentBg: "bg-[#2F855A]/5",
    textColor: "text-[#2F855A]",
    steps: [
      { id: "bm_1", label: "Open Boutique Command Dashboard", type: "process", subText: "Store operations console" },
      { id: "bm_2", label: "Monitor Sales, Appointments, Staff, Stock Alerts & Repairs", type: "process", subText: "Real-time health indicators" },
      { id: "bm_3", label: "Manage Shifts, Goals and Commissions", type: "process", subText: "Workforce scheduler" },
      { id: "bm_4", label: "Manager Approval / Variance Review", type: "decision", subText: "Review discounts, variances, transfers" },
      { id: "bm_5", label: "Manage VIP Events and RSVP", type: "process", subText: "Exclusives outreach" },
      { id: "bm_6", label: "Upload Visual Merchandising Compliance Photos", type: "process", subText: "Compare display photos to planograms" },
      { id: "bm_7", label: "Update Store Digital Twin State", type: "twin", subText: "Consolidates all manager inputs" }
    ]
  },
  {
    id: "sa",
    title: "4. SALES ASSOCIATE FLOW",
    headerColor: "bg-[#6B46C1] text-white",
    borderColor: "border-[#6B46C1]/30",
    accentBg: "bg-[#6B46C1]/5",
    textColor: "text-[#6B46C1]",
    steps: [
      { id: "sa_1", label: "Open Advisor Dashboard", type: "process" },
      { id: "sa_2", label: "Client Interaction Type", type: "decision" },
      { id: "sa_3", label: "Walk-in: Search or Create Client Profile", type: "process" },
      { id: "sa_4", label: "Appointment: Open Preparation Brief", type: "process" },
      { id: "sa_5", label: "Remote: Create Curated Cart", type: "process" },
      { id: "sa_6", label: "BOPIS: Verify Order & Complete Pickup", type: "process" },
      { id: "sa_7", label: "Return/Exchange: Validate Policy", type: "process" },
      { id: "sa_8", label: "Open / Update Client Digital Twin", type: "twin" },
      { id: "sa_9", label: "Review Preferences, Wishlist, Owned Products & History", type: "process" },
      { id: "sa_10", label: "Browse Catalog & AI Recommendations", type: "process" },
      { id: "sa_11", label: "Check Inventory Availability (Product Digital Twin)", type: "twin" },
      { id: "sa_12", label: "Product Available?", type: "decision" },
      { id: "sa_13", label: "Add to Cart", type: "process", subText: "In-store allocation" },
      { id: "sa_14", label: "Create Endless Aisle Order / Reservation", type: "process", subText: "Warehouse / other store allocation" },
      { id: "sa_15", label: "Add to Wishlist & Create Follow-up", type: "process", subText: "Backorder restock setup" },
      { id: "sa_16", label: "Cart Review & Discount Check", type: "process" },
      { id: "sa_17", label: "Manager Approval Needed?", type: "decision" },
      { id: "sa_18", label: "Proceed to Checkout", type: "process" },
      { id: "sa_19", label: "Payment: Single or Split Tender", type: "process" },
      { id: "sa_20", label: "Gift Receipt, Tax-Free & Warranty Registration", type: "process" },
      { id: "sa_21", label: "Sync Digital Twin Ecosystem", type: "twin", subText: "Update Client, Product, & Store Twins" }
    ]
  },
  {
    id: "as",
    title: "5. AFTER-SALES FLOW",
    headerColor: "bg-[#C53030] text-white",
    borderColor: "border-[#C53030]/30",
    accentBg: "bg-[#C53030]/5",
    textColor: "text-[#C53030]",
    steps: [
      { id: "as_1", label: "Create After-Sales Ticket", type: "process" },
      { id: "as_2", label: "Scan Product Serial / Barcode", type: "process" },
      { id: "as_3", label: "Load Product History, Warranty & Ownership", type: "twin" },
      { id: "as_4", label: "Capture Condition Photos & Diagnostic Notes", type: "process" },
      { id: "as_5", label: "Validate Warranty & SLA Status", type: "process" },
      { id: "as_6", label: "Generate Repair Estimate", type: "process" },
      { id: "as_7", label: "Customer Approval Required?", type: "decision" },
      { id: "as_8", label: "Send Estimate for Approval & Payment", type: "process" },
      { id: "as_9", label: "Start Repair Workflow", type: "process" },
      { id: "as_10", label: "Allocate Parts from Inventory", type: "external", subText: "Sync with inventory module" },
      { id: "as_11", label: "Repair In Progress", type: "process" },
      { id: "as_12", label: "Complete QA Checklist & QA Passed?", type: "decision" },
      { id: "as_13", label: "Schedule Pickup or Courier Shipment", type: "process" },
      { id: "as_14", label: "Return Item to Client & Sync Twins", type: "twin" }
    ]
  }
];

export default function FinalWorkflow() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (id: string) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans pb-24 relative overflow-x-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-[10%] w-[35vw] h-[35vw] rounded-full bg-[#C9540A]/3 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-[#1E3A8A]/3 blur-[150px]" />
      </div>

      {/* Navigation Header */}
      <header className="w-full border-b border-[#1A1A1A]/5 bg-white/60 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-wider text-[#1A1A1A]">RSMS</span>
          <span className="px-2 py-0.5 text-xs bg-[#C9540A]/10 text-[#C9540A] rounded-full font-medium">Enterprise Flow Map</span>
        </div>
        <Link href="/" className="px-4 py-2 border border-[#1A1A1A]/10 hover:border-[#C9540A] hover:text-[#C9540A] rounded-sm text-sm font-medium transition-all">
          ← Home Dashboard
        </Link>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#1A1A1A] tracking-tight mb-4">
            RSMS Complete <span className="text-[#C9540A] italic">App Workflow</span>
          </h1>
          <p className="text-base md:text-lg text-[#1A1A1A]/70 font-light">
            Interactive, top-to-bottom layout mapping the entire governance, inventory, boutique management, retail sales, and after-sales service pipeline.
          </p>
        </div>

        {/* 1. Header Access Row */}
        <div className="flex flex-col items-center mb-12">
          {/* User Login & Role based access */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white border border-[#1A1A1A]/10 shadow-lg rounded-xl p-6 max-w-xl w-full">
            <div className="flex items-center gap-3 bg-[#1A1A1A] text-white px-5 py-3 rounded-lg text-sm font-semibold shadow">
              <span>👤</span>
              <span>User Login</span>
            </div>
            
            <div className="hidden md:block text-[#1A1A1A]/30 text-lg">➜</div>

            <div className="bg-amber-50 text-amber-800 border border-amber-300 px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2">
              <span>🛡️</span>
              <span>Role-Based Access Control</span>
            </div>
          </div>
          <div className="w-0.5 h-10 bg-[#1A1A1A]/10" />
        </div>

        {/* 2. 5 Horizontal Module Headers */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {FLOW_DATA.map((module) => {
            const isExpanded = expandedModule === module.id;
            return (
              <button
                key={module.id}
                onClick={() => toggleModule(module.id)}
                className={`w-full text-left p-5 rounded-lg border transition-all duration-300 shadow bg-white cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[140px] hover:shadow-lg ${
                  isExpanded ? 'ring-2 ring-[#C9540A] ring-offset-2 scale-102' : 'border-[#1A1A1A]/10'
                }`}
              >
                <div>
                  <h3 className={`text-xs font-bold tracking-wider px-2.5 py-1 rounded-sm inline-block mb-3 ${module.headerColor}`}>
                    {module.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 font-light leading-relaxed">
                    Interactive role-based pipeline with digital twin updates.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-[#C9540A]">
                  <span>{isExpanded ? "Collapse Flow ↑" : "Expand Downwards ↓"}</span>
                  <span>▼</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 3. Dropdown Flow Column rendering */}
        <div className="mt-6">
          {FLOW_DATA.map((module) => {
            const isExpanded = expandedModule === module.id;
            if (!isExpanded) return null;
            return (
              <div
                key={module.id}
                className="bg-white rounded-xl border border-[#1A1A1A]/10 shadow-2xl p-8 md:p-12 animate-fadeIn"
              >
                <div className="text-center mb-10 pb-6 border-b border-[#1A1A1A]/5">
                  <h2 className={`text-xl font-bold uppercase tracking-wider px-4 py-1.5 rounded inline-block ${module.headerColor}`}>
                    {module.title}
                  </h2>
                  <p className="text-xs text-[#1A1A1A]/50 mt-3 font-light">
                    Follow the top-to-bottom pipeline sequence. Decisions represent approval gate reviews.
                  </p>
                </div>

                {/* Steps container */}
                <div className="max-w-xl mx-auto flex flex-col items-center">
                  {module.steps.map((step, idx) => {
                    const isLast = idx === module.steps.length - 1;
                    return (
                      <React.Fragment key={step.id}>
                        {/* Flow nodes rendering */}
                        {step.type === 'decision' ? (
                          /* Decision Diamond style */
                          <div className="relative my-4 flex justify-center items-center group w-64 h-32">
                            <div className="absolute inset-0 bg-[#DD6B20]/10 border-2 border-[#DD6B20] rotate-45 rounded-sm shadow-md transition-all duration-300 group-hover:bg-[#DD6B20]/20" />
                            <div className="relative text-center z-10 px-4">
                              <h4 className="font-playfair text-sm font-bold text-[#1A1A1A] leading-tight">
                                {step.label}
                              </h4>
                              {step.subText && (
                                <p className="text-[10px] text-[#1A1A1A]/60 mt-1 font-light leading-none">
                                  {step.subText}
                                </p>
                              )}
                              <span className="text-[8px] uppercase tracking-widest font-bold text-[#DD6B20] block mt-1">Decision Gate</span>
                            </div>
                          </div>
                        ) : step.type === 'twin' ? (
                          /* Digital Twin style - Cylinder/Hexagon capsule look */
                          <div className="w-full bg-[#007A87]/5 border-2 border-[#007A87] rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-lg flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#007A87]/10 flex items-center justify-center text-lg">
                              🧬
                            </div>
                            <div className="text-left">
                              <h4 className="font-playfair text-sm font-bold text-[#1A1A1A] leading-tight">
                                {step.label}
                              </h4>
                              <p className="text-[11px] text-[#1A1A1A]/60 font-light mt-1">
                                {step.subText || "Sync & write changes back to the Digital Twin Ledger"}
                              </p>
                              <span className="text-[8px] uppercase tracking-widest font-bold text-[#007A87] block mt-1">Digital Twin Sync</span>
                            </div>
                          </div>
                        ) : (
                          /* Process Box style */
                          <div className="w-full bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-lg flex items-start gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${module.headerColor}`}>
                              {idx + 1}
                            </div>
                            <div className="text-left flex-grow">
                              <h4 className="font-playfair text-sm font-bold text-[#1A1A1A]">
                                {step.label}
                              </h4>
                              {step.subText && (
                                <p className="text-xs text-[#1A1A1A]/60 font-light mt-1">
                                  {step.subText}
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Connector arrow */}
                        {!isLast && (
                          <div className="flex flex-col items-center py-3">
                            <div className="w-0.5 h-6 bg-[#1A1A1A]/10" />
                            <div className="text-[#1A1A1A]/20 -my-1 text-xs">▼</div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Shared Digital Twin & AI Layer (Section 6 & 7) */}
        <div className="mt-16 bg-white border border-[#1A1A1A]/10 rounded-xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 to-indigo-600" />
          
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-teal-50 text-teal-800 border border-teal-300 rounded-full">
              6. Shared Digital Twin & AI Layer
            </span>
            <h2 className="text-2xl font-playfair font-bold text-[#1A1A1A] mt-3">
              Retail Intelligence Core
            </h2>
          </div>

          {/* Grid layout of 4 twins */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-center">
              <span className="text-2xl block mb-2">📁</span>
              <h4 className="font-semibold text-xs text-[#1A1A1A]">Product Digital Twin</h4>
              <p className="text-[10px] text-[#1A1A1A]/60 mt-1 font-light leading-snug">SKU, Barcode, Serial, Owner, Warranty history</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-center">
              <span className="text-2xl block mb-2">👤</span>
              <h4 className="font-semibold text-xs text-[#1A1A1A]">Client Digital Twin</h4>
              <p className="text-[10px] text-[#1A1A1A]/60 mt-1 font-light leading-snug">Preferences, Size history, Wishlist, Consent</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-center">
              <span className="text-2xl block mb-2">🏪</span>
              <h4 className="font-semibold text-xs text-[#1A1A1A]">Store Digital Twin</h4>
              <p className="text-[10px] text-[#1A1A1A]/60 mt-1 font-light leading-snug">Sales, Staff Shifts, VM compliance, Local stock</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-center">
              <span className="text-2xl block mb-2">🌐</span>
              <h4 className="font-semibold text-xs text-[#1A1A1A]">Retail Digital Twin</h4>
              <p className="text-[10px] text-[#1A1A1A]/60 mt-1 font-light leading-snug">Enterprise-wide analytical consolidation ledger</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500/5 to-indigo-500/5 border border-teal-500/20 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg shrink-0">
              🤖
            </div>
            <div>
              <h4 className="font-playfair font-bold text-sm text-[#1A1A1A] mb-1">AI Copilot & Intelligence Layer</h4>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-light">
                Continuous data engine consuming digital twin updates to issue role-based recommendations, detect stockouts, prevent SLA breaches, and generate VM compliance feedback loops.
              </p>
            </div>
          </div>

          {/* 7. AI Copilot Insights outputs */}
          <div className="mt-8 pt-8 border-t border-[#1A1A1A]/5">
            <h3 className="text-center text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 mb-6">
              7. AI COPILOT ROLE-BASED OUTPUTS & INSIGHTS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="border border-[#0B4F9F]/20 bg-[#0B4F9F]/2 p-4 rounded-lg text-center">
                <span className="text-sm font-bold text-[#0B4F9F] block mb-1">Corporate Insights</span>
                <p className="text-[10px] text-[#1A1A1A]/70 font-light leading-relaxed">Revenue performance, Compliance audits, Pricing adjust alerts</p>
              </div>
              <div className="border border-[#DD6B20]/20 bg-[#DD6B20]/2 p-4 rounded-lg text-center">
                <span className="text-sm font-bold text-[#DD6B20] block mb-1">Inventory Insights</span>
                <p className="text-[10px] text-[#1A1A1A]/70 font-light leading-relaxed">Stockout prediction, variance triggers, shrink alerts</p>
              </div>
              <div className="border border-[#2F855A]/20 bg-[#2F855A]/2 p-4 rounded-lg text-center">
                <span className="text-sm font-bold text-[#2F855A] block mb-1">Boutique Insights</span>
                <p className="text-[10px] text-[#1A1A1A]/70 font-light leading-relaxed">Store Health KPI recommendations, workforce alerts</p>
              </div>
              <div className="border border-[#6B46C1]/20 bg-[#6B46C1]/2 p-4 rounded-lg text-center">
                <span className="text-sm font-bold text-[#6B46C1] block mb-1">Sales Insights</span>
                <p className="text-[10px] text-[#1A1A1A]/70 font-light leading-relaxed">Next Best Action suggestions, Milestones milestones outreach</p>
              </div>
              <div className="border border-[#C53030]/20 bg-[#C53030]/2 p-4 rounded-lg text-center">
                <span className="text-sm font-bold text-[#C53030] block mb-1">Service Insights</span>
                <p className="text-[10px] text-[#1A1A1A]/70 font-light leading-relaxed">SLA risk escalations, spare parts availability tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
