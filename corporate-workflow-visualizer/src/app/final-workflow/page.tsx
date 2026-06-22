"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Detailed data for each of the 5 modules extracted from workflow.md
interface FlowStep {
  id: string;
  title: string;
  desc: string;
  type: 'action' | 'decision' | 'twin' | 'integration';
  icon?: string;
  target?: string;
}

interface ModuleFlow {
  id: string;
  title: string;
  shortDesc: string;
  color: string;
  textColor: string;
  accentBg: string;
  borderColor: string;
  icon: string;
  steps: FlowStep[];
}

const MODULES_FLOWS: ModuleFlow[] = [
  {
    id: "corp",
    title: "Corporate Admin & Retail Ops",
    shortDesc: "Manage product catalogs, pricing rules, promotions, assortment rules, and retail policies.",
    color: "from-amber-600 to-amber-800",
    textColor: "text-amber-600",
    accentBg: "bg-amber-500/5",
    borderColor: "border-amber-500/20",
    icon: "🏢",
    steps: [
      { id: "corp_1", title: "Enterprise Control Tower", desc: "Access the corporate retail operations dashboard.", type: "action" },
      { id: "corp_2", title: "Create / Update Product Master", desc: "Define SKU, brand, category, collection, attributes, and image assets.", type: "action" },
      { id: "corp_3", title: "Define Serialization Rules", desc: "Set serial requirement rules, barcode, RFID, and Certificate of Authenticity (COA) rules.", type: "action" },
      { id: "corp_4", title: "Define Warranty & Authentication Rules", desc: "Set up warranty lifespans, extension parameters, and diagnostic rules.", type: "action" },
      { id: "corp_5", title: "Define Assortment Rules", desc: "Determine catalog availability across specific physical boutiques and online warehouses.", type: "twin", target: "Product Catalog Available to Sales & Product Master Available to Inventory" },
      { id: "corp_6", title: "Configure Pricing Rules", desc: "Set base price, regional prices, taxes, and promotional campaigns.", type: "action" },
      { id: "corp_7", title: "Set Discount Limits & Approval Thresholds", desc: "Define maximum associate discount and manager approval triggers.", type: "decision", target: "Discount Approval Rules Available to Boutique Manager & Sales POS" },
      { id: "corp_8", title: "Publish Compliance Policies", desc: "Upload official planograms, store lookbooks, and VM compliance criteria.", type: "action", target: "Planogram Rules Available to Boutique Manager" },
      { id: "corp_9", title: "Define Repair SLA Policies", desc: "Configure maximum lead times for diagnostics, repair, and customer updates.", type: "decision", target: "Repair SLA Rules Available to After-Sales" },
      { id: "corp_10", title: "Monitor Enterprise Analytics", desc: "Review real-time revenue, inventory, compliance reports, and adjust rules via Corporate AI Copilot.", type: "twin" }
    ]
  },
  {
    id: "inv",
    title: "Inventory Controller",
    shortDesc: "Handle receiving, multi-scanning, discrepancy logging, cycle counting, and inter-store transfers.",
    color: "from-blue-600 to-blue-800",
    textColor: "text-blue-600",
    accentBg: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    icon: "📦",
    steps: [
      { id: "inv_1", title: "Open Inventory Intelligence Dashboard", desc: "Receive real-time stock status, pending shipments, and transfer lists.", type: "action" },
      { id: "inv_2", title: "Receive Shipment", desc: "Process incoming cargo: Vendor ASN, Warehouse transfer, or Inter-Store transfer.", type: "decision" },
      { id: "inv_3", title: "Scan Items", desc: "Scan shipment items using Barcode, RFID-NFC, or camera-based Vision Multi-Scan.", type: "action" },
      { id: "inv_4", title: "Match with ASN & Verify Discrepancies", desc: "Cross-reference physical scans with ASN. Log exceptions (Missing, Damaged, Extra) and push to Boutique Manager for signoff.", type: "decision", target: "Variance / Exception Sent to Boutique Manager" },
      { id: "inv_5", title: "Validate Serial Numbers", desc: "For serial-required products, capture and validate serials. Create/update Product Digital Twin.", type: "twin" },
      { id: "inv_6", title: "Generate Certificate of Authenticity (COA)", desc: "Trigger COA creation and link it to the Product Digital Twin.", type: "twin" },
      { id: "inv_7", title: "Assign Product Location", desc: "Designate storage location: Display, Stockroom, Vault, or Reserved for VIP.", type: "action" },
      { id: "inv_8", title: "Update Store Stock", desc: "Sync physical quantity change to Store Digital Twin and make inventory available for Sales.", type: "twin" },
      { id: "inv_9", title: "Cycle Count & Stock Audit", desc: "Perform periodic checks using RFID zone scanning. Generate variances for manager approval.", type: "decision" },
      { id: "inv_10", title: "Manage Transfers & Service Logistics", desc: "Process inter-store transfers, pack outgoing items, and reserve loaner items or repair parts.", type: "integration", target: "Parts / Loaner Data Available to After-Sales" }
    ]
  },
  {
    id: "bm",
    title: "Boutique Manager",
    shortDesc: "Monitor store health score, manage schedules, approve transactions, and visual merchandising.",
    color: "from-emerald-600 to-emerald-800",
    textColor: "text-emerald-600",
    accentBg: "bg-emerald-500/5",
    borderColor: "border-emerald-500/20",
    icon: "👔",
    steps: [
      { id: "bm_1", title: "Boutique Command Dashboard", desc: "Access the unified store-level oversight panel.", type: "action" },
      { id: "bm_2", title: "Monitor Boutique Health Score", desc: "Track KPIs: Sales vs Target, Staff Shifts, Stock alerts, Repair SLAs, VM compliance, and VIP RSVPs.", type: "twin" },
      { id: "bm_3", title: "Staff & Shift Planning", desc: "Create/publish advisor schedules, validate role coverage, avoid conflicts, and assign targets.", type: "action" },
      { id: "bm_4", title: "Visual Merchandising Compliance", desc: "Capture store display photos. AI compares them with planograms to yield a compliance score and corrective tasks.", type: "integration" },
      { id: "bm_5", title: "VIP Event Management", desc: "Organize trunk shows, select collection focus, send AI-segmented invitations, and track RSVPs and ROI.", type: "action" },
      { id: "bm_6", title: "Unified Approval Center", desc: "Approve/Reject requests: Discount overrides, inventory variances, transfers, high-value returns, or repair SLA extensions.", type: "decision", target: "Decisions returned to Sales, Inventory, and After-Sales" },
      { id: "bm_7", title: "Ask AI Boutique Copilot", desc: "Interact with the local AI Copilot for action items regarding revenue gaps, understaffing, or stockouts.", type: "twin" }
    ]
  },
  {
    id: "sa",
    title: "Sales Associate & Client Advisor",
    shortDesc: "Clienteling digital twin, appointments, assisted selling catalog, luxury POS, and omnichannel checkout.",
    color: "from-orange-600 to-orange-800",
    textColor: "text-orange-600",
    accentBg: "bg-orange-500/5",
    borderColor: "border-orange-500/20",
    icon: "🛍️",
    steps: [
      { id: "sa_1", title: "Open Advisor Dashboard", desc: "Review daily appointments, goals, open opportunities, and task reminders.", type: "action" },
      { id: "sa_2", title: "Identify Client Profile", desc: "Search existing client record or register a new client profile with privacy consent.", type: "twin" },
      { id: "sa_3", title: "Review Client Digital Twin", desc: "View chronological client timeline, preferences, wishlist, sizing, and service history.", type: "twin" },
      { id: "sa_4", title: "Assisted Selling catalog", desc: "Browse guided catalog, view Product Digital Twin details, and apply AI recommendation looks.", type: "action" },
      { id: "sa_5", title: "Check Stock & Allocate Products", desc: "Add current store items to cart, or create Endless Aisle orders from warehouses, or queue out-of-stock to wishlist.", type: "decision" },
      { id: "sa_6", title: "Build Cart & Manage Discounts", desc: "Consolidate items into a curated cart or bundle. Request manager approval if discount exceeds limit.", type: "decision", target: "Discount request sent to Boutique Manager" },
      { id: "sa_7", title: "Process Payments & Concierge Checkout", desc: "Process payments (split tenders, mobile checkout), generate tax-free docs, register warranty, and print receipts.", type: "integration" },
      { id: "sa_8", title: "Sync Twin Ecosystem", desc: "Update Client Digital Twin (purchased event), Product Digital Twin (owner, warranty), and Store sales stats.", type: "twin" },
      { id: "sa_9", title: "Trigger Omnichannel Fulfillment", desc: "Dispatch carry-out, arrange BOPIS pickup, or send endless-aisle/ship-from-store instructions.", type: "integration" },
      { id: "sa_10", title: "Create Post-Sale Tasks", desc: "AI registers automated milestone/wishlist outreach tasks on the advisor's dashboard.", type: "action" }
    ]
  },
  {
    id: "as",
    title: "After-Sales Specialist",
    shortDesc: "Product intake, condition reports, warranty checks, diagnostics, QA checks, and customer updates.",
    color: "from-purple-600 to-purple-800",
    textColor: "text-purple-600",
    accentBg: "bg-purple-500/5",
    borderColor: "border-purple-500/20",
    icon: "🛠️",
    steps: [
      { id: "as_1", title: "Open Service Dashboard", desc: "Review intake queues, SLA alerts, pending client approvals, and completed repair lists.", type: "action" },
      { id: "as_2", title: "Product Service Intake", desc: "Scan product serial/barcode to fetch Product Digital Twin, confirm warranty status, and load owner profile.", type: "twin" },
      { id: "as_3", title: "Create Ticket & Diagnostic Intake", desc: "Create ticket, capture high-res intake photos, and run AI Condition Analysis or manual diagnostics.", type: "action" },
      { id: "as_4", title: "Customer Approval Loop", desc: "Generate repair estimate. System messages estimate to client for approval and collects payment.", type: "decision" },
      { id: "as_5", title: "Allocate & Request Repair Parts", desc: "Reserve parts locally or request parts from the Inventory Controller. Recalculate SLA breach risk.", type: "integration", target: "Parts requested from Inventory" },
      { id: "as_6", title: "Execute Repair & QA Checklist", desc: "Start repair work, update repair stage timeline, and run a mandatory QA checklist. Retry if QA fails.", type: "decision" },
      { id: "as_7", title: "Notify Customer & Return Item", desc: "Notify client, schedule store pickup or Courier shipment. Update client timeline.", type: "integration" },
      { id: "as_8", title: "Close AST & Sync Digital Twins", desc: "Close ticket. Append full repair history to Product Digital Twin, update Client Twin, and sync store metrics.", type: "twin" },
      { id: "as_9", title: "Process Authentication & Valuations", desc: "Process separate requests: evaluate authenticity, issue Certificate of Authenticity, or print signed Valuation PDF.", type: "action" }
    ]
  }
];

export default function FinalWorkflow() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const toggleModule = (id: string) => {
    if (activeModule === id) {
      setActiveModule(null);
    } else {
      setActiveModule(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans pb-24 relative overflow-x-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-[10%] w-[35vw] h-[35vw] rounded-full bg-[#C9540A]/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-[#1E3A8A]/5 blur-[150px]" />
      </div>

      {/* Navigation Header */}
      <header className="w-full border-b border-[#1A1A1A]/5 bg-white/60 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-wider text-[#1A1A1A]">RSMS</span>
          <span className="px-2 py-0.5 text-xs bg-[#C9540A]/10 text-[#C9540A] rounded-full font-medium">Enterprise Flow</span>
        </div>
        <Link href="/" className="px-4 py-2 border border-[#1A1A1A]/10 hover:border-[#C9540A] hover:text-[#C9540A] rounded-sm text-sm font-medium transition-all">
          ← Home Dashboard
        </Link>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#1A1A1A] tracking-tight mb-4">
            Complete Application <span className="text-[#C9540A] italic">Workflow</span>
          </h1>
          <p className="text-base md:text-lg text-[#1A1A1A]/70 font-light">
            Interactive visualization of the Retail Store Management System (RSMS) role-based workflows and synchronized digital twin architecture.
          </p>
        </div>

        {/* 1. Root Node: RSMS */}
        <div className="flex flex-col items-center mb-16 relative">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] text-[#FAF8F5] px-12 py-6 rounded-lg shadow-2xl text-center border border-white/10 hover:scale-105 transition-transform duration-300 max-w-md w-full relative group">
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-[#C9540A]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-lg -z-10" />
            <h2 className="text-2xl md:text-3xl font-playfair tracking-wide font-bold mb-1.5">RSMS</h2>
            <p className="text-xs uppercase tracking-widest text-[#C9540A] font-semibold mb-3">Retail Store Management System</p>
            <div className="h-px bg-white/20 my-2" />
            <p className="text-xs text-white/70 font-light mt-2 leading-relaxed">
              Unified ecosystem supporting Real-Time Operations, Omni-channel Fulfillment, and Multi-Twin Sync.
            </p>
          </div>
          
          {/* Stem leading down */}
          <div className="w-0.5 h-16 bg-[#1A1A1A]/10 mt-0" />
        </div>

        {/* 2. 5 Horizontal Modules */}
        <div className="relative">
          {/* Connecting horizontal line */}
          <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-[#1A1A1A]/10 -mt-0.5 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {MODULES_FLOWS.map((module) => {
              const isOpen = activeModule === module.id;
              return (
                <div key={module.id} className="flex flex-col items-center">
                  {/* vertical drop stem */}
                  <div className="w-0.5 h-6 bg-[#1A1A1A]/10 hidden md:block" />
                  
                  {/* Module selector card */}
                  <button 
                    onClick={() => toggleModule(module.id)}
                    className={`w-full text-left p-5 rounded-lg border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[180px] bg-white ${
                      isOpen 
                        ? `ring-2 ring-offset-2 ring-[#C9540A] shadow-xl translate-y-1` 
                        : "border-[#1A1A1A]/10 hover:border-[#C9540A] hover:shadow-lg"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl">{module.icon}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          isOpen ? 'bg-[#C9540A]/10 text-[#C9540A]' : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/60'
                        }`}>
                          {module.id.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="font-playfair text-base font-bold mb-2 text-[#1A1A1A] group-hover:text-[#C9540A] transition-colors leading-tight">
                        {module.title}
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/60 font-light leading-relaxed line-clamp-3">
                        {module.shortDesc}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-[#1A1A1A]/5 flex items-center justify-between text-[11px] font-semibold text-[#C9540A]">
                      <span>{isOpen ? "Close Workflow ↑" : "Explore Workflow ↓"}</span>
                      <span className="text-xs transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        ▼
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Drop-down flow section */}
        <div className="mt-12 relative min-h-[100px]">
          {MODULES_FLOWS.map((module) => {
            const isOpen = activeModule === module.id;
            if (!isOpen) return null;
            return (
              <div 
                key={module.id} 
                className="bg-white rounded-xl border border-[#1A1A1A]/10 shadow-2xl p-8 md:p-12 animate-fadeIn relative overflow-hidden"
              >
                {/* Visual Header Decoration */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${module.color}`} />
                
                {/* Module Details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-[#1A1A1A]/5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{module.icon}</span>
                      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#1A1A1A]">
                        {module.title}
                      </h2>
                    </div>
                    <p className="text-sm text-[#1A1A1A]/70 font-light max-w-3xl">
                      {module.shortDesc}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#1A1A1A]/50">Sequence:</span>
                    <span className="text-xs font-bold px-3 py-1 bg-[#1A1A1A]/5 rounded-full text-[#1A1A1A]">
                      Top-to-Bottom Flow
                    </span>
                  </div>
                </div>

                {/* Top-to-Bottom step list */}
                <div className="max-w-2xl mx-auto flex flex-col items-center">
                  {module.steps.map((step, idx) => {
                    const isLast = idx === module.steps.length - 1;
                    return (
                      <React.Fragment key={step.id}>
                        {/* Step Card */}
                        <div className="w-full relative group">
                          {/* Inner border highlighting on hover */}
                          <div className={`absolute -inset-px rounded-lg bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
                          
                          <div className="bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/20 shadow-md hover:shadow-xl rounded-lg p-6 transition-all duration-300 flex items-start gap-4">
                            {/* Step number bubble */}
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              step.type === 'decision' 
                                ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                                : step.type === 'twin'
                                ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                : step.type === 'integration'
                                ? 'bg-purple-100 text-purple-800 border border-purple-300'
                                : 'bg-[#1A1A1A]/5 text-[#1A1A1A]'
                            }`}>
                              {idx + 1}
                            </div>
                            
                            <div className="flex-grow">
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <h4 className="font-playfair text-base font-bold text-[#1A1A1A] leading-snug">
                                  {step.title}
                                </h4>
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                                  step.type === 'decision'
                                    ? 'bg-amber-100 text-amber-800'
                                    : step.type === 'twin'
                                    ? 'bg-blue-100 text-blue-800'
                                    : step.type === 'integration'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/60'
                                }`}>
                                  {step.type}
                                </span>
                              </div>
                              <p className="text-xs text-[#1A1A1A]/70 font-light leading-relaxed">
                                {step.desc}
                              </p>
                              
                              {step.target && (
                                <div className="mt-3 pt-2.5 border-t border-dashed border-[#1A1A1A]/5 flex items-center gap-2">
                                  <span className="text-[10px] text-[#C9540A] font-bold uppercase tracking-widest">Integration Point:</span>
                                  <span className="text-[11px] text-[#1A1A1A]/80 italic font-medium">{step.target}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Drop arrow to next step */}
                        {!isLast && (
                          <div className="flex flex-col items-center py-4">
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
      </div>
    </main>
  );
}
