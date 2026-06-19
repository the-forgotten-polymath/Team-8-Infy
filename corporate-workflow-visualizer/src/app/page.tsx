// @ts-nocheck
'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// --- FULL COMPLETE DATA: Corporate Admin Layer ---
const corporateTreeData = {
  name: "Corporate Admin Layer",
  desc: "Governance & Intelligence Engine",
  children: [
    {
      name: "C1: Enterprise Control Tower",
      desc: "Live operational snapshot & AI alerting",
      children: [
        {
          name: "Retail Health Score (CF2)",
          desc: "Aggregates 500+ KPIs into a 0-100 score.",
          children: [
            { 
              name: "Fetch Sales State", 
              desc: "Reads revenue vs target.",
              children: [{ name: "API: /v1/sales/metrics", desc: "The system executes a real-time SwiftData query against the global POS database to fetch all finalized transactions for the current business day, calculates the cumulative revenue, and compares it against the daily target set by the Regional Manager to determine pacing." }]
            },
            { 
              name: "Fetch Inventory State", 
              desc: "Reads stockout rate.",
              children: [{ name: "API: /v1/inventory/stock", desc: "A cron job polls the central inventory DB every 5 minutes to evaluate shrink percentages and real-time stockout rates across all Tier 1 boutiques, flagging any anomalies above a 2% variance threshold." }]
            },
            { 
              name: "Fetch Compliance State", 
              desc: "Reads planogram violations.",
              children: [{ name: "API: /v1/audit/compliance", desc: "The analytics engine pulls ML-derived Vision framework results from boutique iPads to evaluate how closely physical window displays match corporate-mandated visual merchandising directives." }]
            },
            { 
              name: "Calculate Weighted Score", 
              desc: "Applies strategic weights.",
              children: [{ name: "CoreML Predictor", desc: "A proprietary multi-variable ML model ingests the normalized sales, inventory, and compliance metrics, applying pre-configured business weights to generate a single composite 0-100 Health Score displayed on the Executive Dashboard." }]
            }
          ]
        },
        {
          name: "Network Dashboard",
          desc: "Aggregate performance metrics.",
          children: [
            { 
              name: "Aggregate Revenue", 
              desc: "Compare against targets.",
              children: [{ name: "Data Aggregation", desc: "Extracts normalized revenue metrics from the CloudKit data warehouse and rolls them up by boutique, region, and global levels to present an executive hierarchy of sales performance." }]
            },
            { 
              name: "Rank Boutiques", 
              desc: "Sort by growth %.",
              children: [{ name: "Sorting Algorithm", desc: "Computes year-over-year and month-over-month growth percentages dynamically, sorting boutiques into quartiles and visually highlighting underperformers in red." }]
            },
            { 
              name: "Predict End-of-Month", 
              desc: "Forecasting model.",
              children: [{ name: "ARIMA Forecasting", desc: "Utilizes an ARIMA time-series model on historical sales data combined with upcoming CRM calendar events to project the total expected revenue for the end of the fiscal month." }]
            }
          ]
        },
        {
          name: "Global Threat Map (CF3)",
          desc: "Visualizes live operational risks.",
          children: [
            { 
              name: "Fetch Incident Logs", 
              desc: "Query IT & Security.",
              children: [{ name: "Incident API", desc: "Continuously polls ServiceNow and physical security endpoints to gather a list of active disruptions, ranging from POS terminal offline statuses to supply chain delays." }]
            },
            { 
              name: "Plot Coordinates", 
              desc: "Map to physical stores.",
              children: [{ name: "MapKit Render", desc: "Translates the logical incident data into geolocated pins on a global MapKit interface, clustering nearby issues dynamically as the executive zooms out." }]
            },
            { 
              name: "Assess Impact", 
              desc: "Calculate $ value at risk.",
              children: [{ name: "Financial Risk Calc", desc: "Correlates the estimated downtime of an incident with the specific boutique's historical hourly revenue run-rate to present a live 'Dollars at Risk' counter." }]
            }
          ]
        }
      ]
    },
    {
      name: "C2: AI Assortment & Allocation",
      desc: "Smart inventory distribution",
      children: [
        {
          name: "Demand Forecasting (CF5)",
          desc: "Predicts SKU-level demand.",
          children: [
            { 
              name: "Analyze History", 
              desc: "Read past 3 years data.",
              children: [{ name: "BigQuery Pull", desc: "Executes a massive parallel query against the data lake to extract exactly three years of seasonal SKU consumption patterns, normalizing for past stockout anomalies." }]
            },
            { 
              name: "Incorporate Trends", 
              desc: "Read CRM wishlists.",
              children: [{ name: "NLP Sentiment", desc: "Scrapes unstructured Client Advisor notes and active wishlists, using NLP to identify surging micro-trends (e.g., 'rose gold' or 'small dials') before they show up in POS data." }]
            },
            { 
              name: "Generate Forecast", 
              desc: "Output predicted volume.",
              children: [{ name: "Forecast Output", desc: "Outputs a serialized JSON payload containing the predicted weekly unit demand for every active SKU in the upcoming quarter, stratified by region." }]
            }
          ]
        },
        {
          name: "Dynamic Re-Allocation (CF6)",
          desc: "Moves stock between stores.",
          children: [
            { 
              name: "Find Overstock", 
              desc: "Identify slow movers.",
              children: [{ name: "Stock Classifier", desc: "Flags items that have sat on a specific boutique's shelf for >90 days with zero sales velocity as 'Overstock Candidates'." }]
            },
            { 
              name: "Find Stockouts", 
              desc: "Identify lost sales.",
              children: [{ name: "Stockout Classifier", desc: "Identifies boutiques where high-velocity SKUs have dropped below the minimum presentation quantity (e.g., 2 units) and have pending client reservations." }]
            },
            { 
              name: "Calculate Transfer Cost", 
              desc: "Shipping vs Margin.",
              children: [{ name: "Logistics Math", desc: "Evaluates FedEx priority shipping costs against the gross margin of the item to ensure the physical transfer is financially viable before recommending it." }]
            },
            { 
              name: "Issue Transfer Ticket", 
              desc: "Alert both stores.",
              children: [{ name: "Create Ticket", desc: "Generates an immutable 'Store-to-Store Transfer' ticket, pushing an actionable task to the sending Boutique Admin to pack the item and notifying the receiving store of the incoming shipment." }]
            }
          ]
        },
        {
          name: "Assortment Sandbox",
          desc: "Simulate future collections.",
          children: [
            { 
              name: "Define Parameters", 
              desc: "Set max SKUs.",
              children: [{ name: "Config UI", desc: "Provides an interface for the merchandiser to define the physical capacity constraints of a new boutique layout (e.g., 40 watch slots, 120 jewelry slots)." }]
            },
            { 
              name: "Run Simulation", 
              desc: "Test financial yield.",
              children: [{ name: "Monte Carlo Model", desc: "Runs 10,000 Monte Carlo simulations using different SKU mixes to find the combination that maximizes expected yield while minimizing dead stock risk." }]
            },
            { 
              name: "Publish Planogram", 
              desc: "Push to stores.",
              children: [{ name: "Publish API", desc: "Finalizes the optimized assortment and distributes it as a strict digital planogram to the local Boutique Workforce iPads for physical setup." }]
            }
          ]
        }
      ]
    },
    {
      name: "C3: Cross-Boutique CRM",
      desc: "Global client intelligence",
      children: [
        {
          name: "Global Digital Twin Fabric (CF1)",
          desc: "The unified customer record.",
          children: [
            { 
              name: "Ingest POS Data", 
              desc: "Real-time sales feed.",
              children: [{ name: "Stream Processing", desc: "Listens to a Kafka stream of all global POS transactions, instantly updating the client's lifetime value and attaching the new Product Twin to their profile." }]
            },
            { 
              name: "Ingest E-Commerce", 
              desc: "Web interactions.",
              children: [{ name: "Webhooks", desc: "Captures abandoned cart events, page views, and online purchases from the brand's website, merging this digital behavior with their physical boutique history." }]
            },
            { 
              name: "Merge Identities", 
              desc: "Resolve duplicates.",
              children: [{ name: "Entity Resolution", desc: "Employs an identity resolution engine using fuzzy matching on names, emails, and phone numbers to automatically merge duplicate CRM profiles created by different boutiques." }]
            }
          ]
        },
        {
          name: "High-Value Client Radar",
          desc: "Track traveling VIPs.",
          children: [
            { 
              name: "Detect Travel", 
              desc: "Check appointment location.",
              children: [{ name: "Geo-Anomaly Check", desc: "Detects when a client books an appointment or makes a purchase in a boutique located outside their designated 'Home Region' (e.g., a London client in Dubai)." }]
            },
            { 
              name: "Alert Local Store", 
              desc: "Push briefing card.",
              children: [{ name: "Push Notification", desc: "Automatically alerts the destination Boutique Manager, forwarding the client's full preferences, preferred drink, and high-value status before they arrive." }]
            },
            { 
              name: "Track Conversion", 
              desc: "Measure travel sales.",
              children: [{ name: "Attribution Logic", desc: "Attributes any sales made during the trip to the destination store while maintaining the client's overall lifetime value under their home store." }]
            }
          ]
        },
        {
          name: "Corporate Gifting Engine",
          desc: "Manage VVIC gifts.",
          children: [
            { 
              name: "Identify Targets", 
              desc: "Top 0.1% spenders.",
              children: [{ name: "Filter Query", desc: "Runs a nightly SQL query to identify the top 0.1% of global spenders who have an upcoming birthday or major anniversary." }]
            },
            { 
              name: "Allocate Budget", 
              desc: "Assign spend limit.",
              children: [{ name: "Budget Engine", desc: "Automatically calculates a personalized gifting budget based on a percentage of the client's trailing 12-month spend." }]
            },
            { 
              name: "Dispatch to Store", 
              desc: "Task local advisor.",
              children: [{ name: "Task Creation", desc: "Generates a highly-prioritized task for the client's primary Sales Associate, detailing the budget and suggesting specific gift items based on their profile." }]
            }
          ]
        }
      ]
    },
    {
      name: "C4: Workforce & Policy Admin",
      desc: "Commission & Training",
      children: [
        {
          name: "Dynamic Commission Engine (CF7)",
          desc: "Calculates complex payouts.",
          children: [
            { 
              name: "Ingest Sales", 
              desc: "By associate ID.",
              children: [{ name: "Sales Linkage", desc: "Maps every finalized POS transaction directly to the unique ID of the Sales Associate who authored the ticket." }]
            },
            { 
              name: "Apply Rules", 
              desc: "Tiered % and kickers.",
              children: [{ name: "Rule Engine", desc: "Evaluates complex nested rules, such as applying a 2x commission multiplier if the item sold was an aged overstock SKU or a high-margin jewelry piece." }]
            },
            { 
              name: "Handle Returns", 
              desc: "Clawback logic.",
              children: [{ name: "Clawback Script", desc: "Automatically detects processed returns within the 30-day window and deducts the corresponding commission from the associate's current pay period ledger." }]
            },
            { 
              name: "Export Payroll", 
              desc: "Send to HR systems.",
              children: [{ name: "CSV Generation", desc: "Compiles all finalized commission totals at month-end into a standardized CSV payload securely SFTP'd to the external Workday/ADP payroll system." }]
            }
          ]
        },
        {
          name: "Global Policy Deployment",
          desc: "Push rule changes.",
          children: [
            { 
              name: "Draft Policy", 
              desc: "E.g., new return window.",
              children: [{ name: "Policy Editor", desc: "Provides a secure markdown editor for corporate compliance officers to draft new operational directives, such as extending the holiday return window to 60 days." }]
            },
            { 
              name: "Push to Devices", 
              desc: "Force read-receipt.",
              children: [{ name: "MDM Sync", desc: "Uses Mobile Device Management APIs to forcefully push the new policy document to all associate iPads, requiring a digital signature before unlocking POS capabilities." }]
            },
            { 
              name: "Audit Compliance", 
              desc: "Track adoption.",
              children: [{ name: "Status Dashboard", desc: "Displays a real-time progress bar to Corporate showing the exact percentage of global staff who have acknowledged and signed the new directive." }]
            }
          ]
        },
        {
          name: "Learning Management",
          desc: "Product knowledge.",
          children: [
            { 
              name: "Publish Module", 
              desc: "New collection training.",
              children: [{ name: "Content Upload", desc: "Allows uploading interactive SCORM packages containing 3D product turnarounds and historical lore for a newly launching watch collection." }]
            },
            { 
              name: "Track Quiz Scores", 
              desc: "Measure understanding.",
              children: [{ name: "Score Database", desc: "Logs the results of short post-module quizzes, automatically mandating a retake if the associate scores below the 80% passing threshold." }]
            },
            { 
              name: "Link to Sales", 
              desc: "ROI of training.",
              children: [{ name: "Correlation Analysis", desc: "Cross-references an associate's quiz completion date with their subsequent sales velocity of that specific product to prove the financial ROI of the training module." }]
            }
          ]
        }
      ]
    },
    {
      name: "C5: Automated Audit & Compliance",
      desc: "Zero-touch oversight",
      children: [
        {
          name: "Smart Variance Detection (CF8)",
          desc: "Flags financial anomalies.",
          children: [
            { 
              name: "Monitor Discounts", 
              desc: "Check % limits.",
              children: [{ name: "Discount Listener", desc: "Listens to all POS events in real-time, instantly flagging any transaction where a discretionary discount exceeds the store manager's authorized 10% limit." }]
            },
            { 
              name: "Check Shrinkage", 
              desc: "Physical vs System stock.",
              children: [{ name: "Variance Calc", desc: "Compares the results of the nightly RFID cycle counts against the expected ERP ledger, highlighting exactly which SKUs are missing and their financial value." }]
            },
            { 
              name: "Flag Anomalies", 
              desc: "Send to Loss Prevention.",
              children: [{ name: "Alert Generation", desc: "If a boutique exhibits consecutive days of high shrink or excessive discounts, the system automatically opens a High Priority ticket for the Regional Loss Prevention team." }]
            }
          ]
        },
        {
          name: "Digital Signature Log",
          desc: "Immutable approvals.",
          children: [
            { 
              name: "Capture Biometrics", 
              desc: "FaceID/TouchID.",
              children: [{ name: "LocalAuth API", desc: "Enforces strict biometric authentication on the iPad for any high-risk action, such as a cash refund over $5,000 or a manual inventory write-off." }]
            },
            { 
              name: "Store to CloudKit", 
              desc: "Append-only ledger.",
              children: [{ name: "Blockchain Write", desc: "Saves the manager's ID, the exact timestamp, the GPS location, and the authorization payload into an immutable, append-only CloudKit audit ledger." }]
            },
            { 
              name: "Generate Report", 
              desc: "For external auditors.",
              children: [{ name: "PDF Export", desc: "Compiles the cryptographically signed ledger into a formal PDF report designed specifically for Big Four financial auditors during quarterly reviews." }]
            }
          ]
        },
        {
          name: "SLA Monitor",
          desc: "Track service speed.",
          children: [
            { 
              name: "Fetch Repair SLAs", 
              desc: "Average turnaround.",
              children: [{ name: "Query DB", desc: "Calculates the exact duration between a repair ticket's 'Intake' timestamp and 'Ready for Pickup' timestamp across all global service centers." }]
            },
            { 
              name: "Compare to Target", 
              desc: "E.g., 14 days.",
              children: [{ name: "SLA Math", desc: "Compares the actual turnaround times against the corporate-mandated 14-day Service Level Agreement to identify systemic bottlenecks." }]
            },
            { 
              name: "Penalize/Reward", 
              desc: "Adjust health score.",
              children: [{ name: "Score Adjustment", desc: "Automatically penalizes the responsible service center's operational score if they breach SLAs on more than 5% of their total monthly volume." }]
            }
          ]
        }
      ]
    }
  ]
};

// --- FULL COMPLETE DATA: Inventory Intelligence OS ---
// --- FULL COMPLETE DATA: Inventory Intelligence OS ---
const inventoryTreeData = {
  name: "Inventory Intelligence OS",
  desc: "Smart Asset Control Tower",
  children: [
    {
      name: "I1: Vision & RFID Capture",
      desc: "AI-powered stock verification.",
      children: [
        {
          name: "Continuous Vision Scan (IF10)",
          desc: "Camera captures 15-50 barcodes.",
          children: [
            { 
              name: "Extract Payloads", 
              desc: "VNDetectBarcodesRequest isolates IDs.",
              children: [{ name: "Vision Framework", desc: "The boutique iPad utilizes Apple's native Vision framework (VNDetectBarcodesRequest) to process a high-res video feed, simultaneously detecting and decoding up to 50 physical DataMatrix barcodes on a jewelry tray in real-time." }]
            },
            { 
              name: "Validation Engine", 
              desc: "Cross-checks physical vs system stock.",
              children: [{ name: "Local Cache Lookup", desc: "The app immediately cross-references the decoded physical barcode payload against an encrypted local SQLite cache of expected 'In-Stock' items synced from the corporate POS system." }]
            },
            { 
              name: "Shrink Identification", 
              desc: "Flags missing or unexpected items.",
              children: [{ name: "Delta Computation", desc: "A delta computation algorithm highlights discrepancies: items present in the DB but missing from the scan are flagged red (shrink), while unexpected physical items are flagged yellow." }]
            },
            { 
              name: "Update Twin", 
              desc: "Generates cycleCountVerified event.",
              children: [{ name: "Digital Twin Write", desc: "Upon manager confirmation, the system fires a GraphQL mutation updating the master Product Digital Twin in CloudKit, appending a 'CycleCountVerified' event with the exact timestamp and location." }]
            }
          ]
        }
      ]
    },
    {
      name: "I2: Smart ASN & Transfers",
      desc: "Inbound & Outbound Logistics",
      children: [
        {
          name: "Inbound Receiving",
          desc: "Auto-matching shipments.",
          children: [
            { 
              name: "Shipment Arrives", 
              desc: "Boxes physical arrive.",
              children: [{ name: "Dock Scan", desc: "The logistics associate scans the master courier barcode on the incoming pallet, which instantly logs the handoff timestamp and initiates the receiving workflow on the iPad." }]
            },
            { 
              name: "ASN Auto-Match", 
              desc: "Scan matches Advance Shipping Notice.",
              children: [{ name: "API Match", desc: "The system queries the central ERP API to pull the Advance Shipping Notice (ASN) payload associated with the courier tracking number, populating the expected SKU manifest." }]
            },
            { 
              name: "Visual Receiving", 
              desc: "Capture photo evidence of damages.",
              children: [{ name: "Photo Storage", desc: "If a box is damaged, the associate is forced to capture a timestamped photo which is automatically uploaded to an AWS S3 bucket and linked to the inbound discrepancy report." }]
            },
            { 
              name: "Initialize Stock", 
              desc: "Items moved to inStock status.",
              children: [{ name: "Status Update", desc: "Once the physical count matches the ASN, a batch update is dispatched to change all included Product Twin statuses from 'In-Transit' to 'In-Stock', making them instantly sellable on the POS." }]
            }
          ]
        },
        {
          name: "Outbound Transfers",
          desc: "Store to Store execution.",
          children: [
            { 
              name: "Initiate Transfer", 
              desc: "Select SKUs and Destination.",
              children: [{ name: "Create Transfer Order", desc: "The Boutique Admin selects the target SKUs and the destination store from a dropdown, triggering the creation of a pending Outbound Transfer ticket in the backend." }]
            },
            { 
              name: "In-Transit Lock", 
              desc: "Inventory status changes to 'inTransit'.",
              children: [{ name: "Reserve Stock", desc: "Upon the courier pickup scan, the system locks the items by changing their status to 'In-Transit', immediately deducting them from the local available inventory to prevent double-selling." }]
            },
            { 
              name: "Destination Signoff", 
              desc: "Receiving store confirms custody.",
              children: [{ name: "Digital Signature", desc: "The receiving store manager must use TouchID/FaceID to digitally sign for the transfer, which completes the chain of custody and shifts the financial liability to the new store." }]
            }
          ]
        }
      ]
    },
    {
      name: "I3: Cycle Count & Audit",
      desc: "Scheduled physical verifications.",
      children: [
        {
          name: "Count Execution",
          desc: "Zone-based audits.",
          children: [
            { 
              name: "Execute Scans", 
              desc: "Staff scan all items in zone.",
              children: [{ name: "RFID/Barcode Input", desc: "Associates use an integrated sled scanner to sweep physical zones (e.g., 'Window A'), batching hundreds of RFID EPC tags into the local memory buffer within seconds." }]
            },
            { 
              name: "Variance Generation", 
              desc: "System highlights discrepancies.",
              children: [{ name: "Calculate Variance", desc: "The application compares the aggregated scanned array against the expected inventory list for that specific zone, rendering a real-time 'missing items' UI." }]
            },
            { 
              name: "Autonomous Investigator (IF8)", 
              desc: "AI generates shrink report.",
              children: [{ name: "LLM Summary", desc: "If high-value shrink is detected, an integrated LLM parses recent POS returns, transfer logs, and staff schedules to draft a preliminary root-cause hypothesis report for Loss Prevention." }]
            },
            { 
              name: "Shrink Investigation Center (IF2)", 
              desc: "Track loss patterns.",
              children: [{ name: "Anomaly Dashboard", desc: "Corporate Loss Prevention accesses a specialized D3.js dashboard plotting historical shrink variances across all boutiques, allowing them to isolate systemic theft rings or procedural errors." }]
            }
          ]
        }
      ]
    },
    {
      name: "I4: Product Digital Twin Gen",
      desc: "The core shared entity creation.",
      children: [
        {
          name: "Mint Digital Twin",
          desc: "Creating the item's identity.",
          children: [
            { 
              name: "Capture Serial/RFID", 
              desc: "Bind physical identifiers.",
              children: [{ name: "Hardware Integration", desc: "During manufacturing or initial receiving, a specialized terminal writes the unique cryptographic Serial Number into the item's embedded NFC or RFID tag." }]
            },
            { 
              name: "Generate Passport", 
              desc: "Creates shared Core Data entity.",
              children: [{ name: "Entity Creation", desc: "The system mints the global 'Digital Twin' JSON object in CloudKit, establishing the immutable baseline for the product's origin, materials, and original MSRP." }]
            },
            { 
              name: "Inventory Memory System (IF7)", 
              desc: "Deep history timeline.",
              children: [{ name: "Event Logger", desc: "An event-sourcing architecture begins appending every state change—from transfers to repairs—into an immutable 'Memory' array nested within the Twin." }]
            },
            { 
              name: "Issue COA", 
              desc: "Generate Certificate of Authenticity.",
              children: [{ name: "PDF Generation", desc: "A serverless function uses PDFKit to dynamically generate a watermarked Certificate of Authenticity containing the Twin's metadata, securely emailed to the final client upon purchase." }]
            }
          ]
        }
      ]
    },
    {
      name: "I5: Service Logistics",
      desc: "Repair tracking & Loaners.",
      children: [
        {
          name: "Repair Intake",
          desc: "Processing customer repair items.",
          children: [
            { 
              name: "Read Twin", 
              desc: "Load item history from Passport.",
              children: [{ name: "Twin Lookup", desc: "When a client brings in a watch for repair, the associate scans it to instantly retrieve its Digital Twin, displaying warranty status and all prior service interventions." }]
            },
            { 
              name: "Issue Loaner", 
              desc: "Temporarily assign stock to client.",
              children: [{ name: "Loaner Assignment", desc: "The system allows the associate to scan a dedicated 'Loaner' SKU, legally binding the temporary asset to the Client's Digital Twin and generating a liability contract." }]
            },
            { 
              name: "Dispatch to Service", 
              desc: "Track shipment to external repair center.",
              children: [{ name: "Courier API", desc: "An integration with FedEx/UPS APIs automatically generates the outbound shipping label and updates the Product Twin's status to 'In-Transit to Service Center'." }]
            }
          ]
        }
      ]
    },
    {
      name: "I6: Intelligence Dashboard",
      desc: "Predictive Analytics.",
      children: [
        {
          name: "Digital Store Twin (IF6)",
          desc: "Real-time layout representation.",
          children: [
            { 
              name: "Inventory Heatmap (IF1)", 
              desc: "Zone-level accuracy colors.",
              children: [{ name: "Heatmap Render", desc: "A 2D spatial map of the boutique is rendered via Canvas API, color-coding specific display cases in red or green based on the frequency of recent cycle count variances." }]
            },
            { 
              name: "Vision Shelf Compliance (IF5)", 
              desc: "Planogram ML checks.",
              children: [{ name: "Planogram Match", desc: "The iPad camera captures the shelf layout, and an edge-based CoreML model verifies that the physical arrangement of SKUs perfectly matches the corporate-issued planogram metadata." }]
            }
          ]
        },
        {
          name: "Predictive Insights",
          desc: "AI forecasts.",
          children: [
            { 
              name: "Inventory Risk Score (IF3)", 
              desc: "Composite score per store.",
              children: [{ name: "Risk Calculation", desc: "A backend algorithm weights historical shrink data, staff turnover rates, and recent POS anomalies to compute a 0-100 'Inventory Risk Score' for each boutique." }]
            },
            { 
              name: "Smart Replenishment (IF4)", 
              desc: "Imbalance transfer suggestions.",
              children: [{ name: "Auto-Transfer Logic", desc: "A predictive model identifies local stock imbalances and autonomously proposes optimal store-to-store transfer manifests to level out inventory without waiting for corporate warehouse shipments." }]
            },
            { 
              name: "Health Forecast (IF9)", 
              desc: "Predict stockouts/shrink.",
              children: [{ name: "ML Forecasting", desc: "Time-series forecasting models (ARIMA) predict which high-velocity SKUs are likely to stock out in the next 14 days based on current regional sales trajectories." }]
            }
          ]
        }
      ]
    }
  ]
};

// --- FULL COMPLETE DATA: Luxury Care OS (After-Sales) ---
const afterSalesTreeData = {
  name: "After-Sales Service",
  desc: "Luxury Care OS",
  children: [
    {
      name: "E1: Smart Intake & Diagnostics",
      desc: "AST creation & AI condition assessment",
      children: [
        {
          name: "Intake Creation",
          desc: "End-to-end AST generation.",
          children: [
            { 
              name: "Customer Search", 
              desc: "Lookup profile in CRM.",
              children: [{ name: "CRM API Call", desc: "The associate inputs the client's phone number, executing a GraphQL query against the unified CloudKit CRM to pull the client's global lifetime value, previous repair history, and active warranties." }]
            },
            { 
              name: "Product Identify", 
              desc: "Scan RFID or enter serial.",
              children: [{ name: "Hardware Tag Read", desc: "The physical watch is placed on an RFID sled which extracts the embedded cryptographic Serial Number, instantly linking the physical asset to its master Product Digital Twin." }]
            },
            { 
              name: "Photo Capture", 
              desc: "Mandatory condition evidence.",
              children: [{ name: "Camera Module", desc: "The iPad camera enforces the capture of 6 high-resolution macro photos of the item's current state, uploading them immediately to an immutable AWS S3 bucket to prevent false damage claims." }]
            },
            { 
              name: "Generate AST", 
              desc: "Create unique AST-YYYY-STR ID.",
              children: [{ name: "ID Generator", desc: "The backend generates a globally unique After-Sales Ticket (AST) ID, creating a dedicated relational database record that links the Client Twin, Product Twin, and the initial photos." }]
            }
          ]
        },
        {
          name: "AI Condition Analysis",
          desc: "Vision framework defect detection.",
          children: [
            { 
              name: "Upload Photos", 
              desc: "Pass to Core ML model.",
              children: [{ name: "Image Preprocessing", desc: "The captured macro photos are compressed and normalized via the Vision framework before being passed locally to the on-device Core ML scratch-detection model." }]
            },
            { 
              name: "Run Classification", 
              desc: "Detect scratches, cracks, etc.",
              children: [{ name: "Vision Framework", desc: "The Core ML model analyzes pixel gradients to autonomously classify physical defects, such as identifying a 'Sapphire Crystal Micro-Fracture' vs a surface smudge." }]
            },
            { 
              name: "Highlight Defects", 
              desc: "Draw bounding boxes.",
              children: [{ name: "Overlay Render", desc: "The UI renders red SVG bounding boxes over the original image exactly where the ML model detected defects, ensuring the client and associate agree on pre-existing damage." }]
            },
            { 
              name: "Calculate Confidence", 
              desc: "Output ML certainty %.",
              children: [{ name: "Confidence Score", desc: "The model returns a confidence score (e.g., 92%); if the score is below 80%, the system flags the image for mandatory manual review by a Master Watchmaker." }]
            }
          ]
        },
        {
          name: "White-Glove Concierge (F5)",
          desc: "VIP detection & personalized UI.",
          children: [
            { 
              name: "Detect VIP Status", 
              desc: "Check tier upon entry.",
              children: [{ name: "Tier Check", desc: "As the intake begins, a background thread evaluates the client's total lifetime spend against regional threshold bands to silently determine if they qualify as a VVIC (Top 1%)." }]
            },
            { 
              name: "Load Historical Prefs", 
              desc: "Fetch past repairs & drinks.",
              children: [{ name: "Client Twin Read", desc: "The system fetches the 'Preferences' array from the CRM Twin, identifying the client's preferred beverage (e.g., Sparkling Water, no ice) and past repair pain points." }]
            },
            { 
              name: "Show Concierge Card", 
              desc: "Alert associate immediately.",
              children: [{ name: "UI Notification", desc: "A discreet, un-closable 'Concierge Alert' modal appears on the iPad, instructing the associate to offer the specific beverage and to expedite the repair based on VIP status." }]
            }
          ]
        },
        {
          name: "Chain of Custody (F1)",
          desc: "Logs physical handoffs.",
          children: [
            { 
              name: "Capture Timestamp", 
              desc: "Record exact handoff time.",
              children: [{ name: "Server Time Sync", desc: "The system makes a lightweight API call to the NTP server to capture a cryptographically secure timestamp, proving exactly when the client surrendered the item." }]
            },
            { 
              name: "Digital Signature", 
              desc: "Customer/Staff biometric signoff.",
              children: [{ name: "PencilKit Input", desc: "The client uses an Apple Pencil to sign a digital waiver rendered via PencilKit, capturing vector stroke data and pressure sensitivity for legal non-repudiation." }]
            },
            { 
              name: "Store CustodyEvent", 
              desc: "Save immutable log.",
              children: [{ name: "Blockchain Ledger", desc: "A 'Custody Transferred' event, embedding the signature hash and timestamp, is appended to the Product Twin's immutable ledger in CloudKit." }]
            }
          ]
        }
      ]
    },
    {
      name: "E2: Repair Workflow Engine",
      desc: "Multi-stage repair pipeline",
      children: [
        {
          name: "Cost Estimation",
          desc: "Calculates parts, labor, and tax.",
          children: [
            { 
              name: "Identify Parts", 
              desc: "Link required SKUs.",
              children: [{ name: "BOM Lookup", desc: "The system queries the ERP's Bill of Materials based on the Watch's Serial Number to display a precise dropdown of compatible replacement parts and their current global stock levels." }]
            },
            { 
              name: "Calculate Taxes", 
              desc: "Apply regional modifiers.",
              children: [{ name: "Tax Engine", desc: "An integration with the Avalara Tax API calculates the exact regional VAT or state sales tax based on the boutique's physical location and the service labor codes." }]
            },
            { 
              name: "Generate Estimate", 
              desc: "Create PDF itemized bill.",
              children: [{ name: "PDFKit Render", desc: "A microservice compiles the parts, labor hours, and taxes into a legally binding PDF Estimate document, ready for physical printing or SMS dispatch." }]
            }
          ]
        },
        {
          name: "Repair State Machine",
          desc: "Technician tracks work stages.",
          children: [
            { 
              name: "Transition State", 
              desc: "Move from Inspection to Repair.",
              children: [{ name: "State Update", desc: "When the watchmaker physically begins work, they tap a button that executes an atomic database transaction changing the AST state from 'Pending Authorization' to 'In Progress'." }]
            },
            { 
              name: "QA Verification", 
              desc: "Mandatory checklist pass.",
              children: [{ name: "Form Validation", desc: "Before closing the ticket, the UI enforces the completion of a strict 12-point Quality Assurance digital checklist (e.g., 'Water Resistance Tested: Pass')." }]
            },
            { 
              name: "Log Audit Trail", 
              desc: "Immutable state history.",
              children: [{ name: "Event Logger", desc: "Every state transition writes a micro-event containing the Watchmaker's employee ID, GPS location, and exact timestamp to the audit table for accountability." }]
            }
          ]
        },
        {
          name: "Intelligent Escalation (F8)",
          desc: "Auto-escalates overdue repairs.",
          children: [
            { 
              name: "Monitor Delays", 
              desc: "Check Days Overdue.",
              children: [{ name: "Daily Cron", desc: "A nightly AWS Lambda function scans all active ASTs, calculating the delta between the 'Promised Date' and the current system date." }]
            },
            { 
              name: "Check Threshold", 
              desc: "Evaluate L1 vs L2 SLA.",
              children: [{ name: "Rule Engine", desc: "If an AST exceeds its SLA by 3 days, it breaches the Level 1 threshold; at 7 days, it triggers a critical Level 2 breach." }]
            },
            { 
              name: "Trigger Escalation", 
              desc: "Notify Regional Manager.",
              children: [{ name: "Email/Push Relay", desc: "A Level 2 breach automatically fires a high-priority APNs push notification and email directly to the Regional Service Director, forcing an immediate intervention." }]
            }
          ]
        },
        {
          name: "Knowledge Base (F10)",
          desc: "Searchable repair resolutions.",
          children: [
            { 
              name: "Search Category", 
              desc: "Find similar past tickets.",
              children: [{ name: "Vector Search", desc: "When a technician types a symptom, the system uses an embedded Vector Database to perform a semantic search against the last 5 years of resolved corporate repair notes." }]
            },
            { 
              name: "Read Resolutions", 
              desc: "Apply known fix.",
              children: [{ name: "UI Display", desc: "The UI surfaces the top 3 most statistically successful repair procedures for that specific defect, complete with embedded corporate video tutorials." }]
            }
          ]
        }
      ]
    },
    {
      name: "E3: Customer Experience Portal",
      desc: "Self-service tracking & approval",
      children: [
        {
          name: "Approval & Payment",
          desc: "Frictionless customer consent.",
          children: [
            { 
              name: "Send Deep Link", 
              desc: "Push notification / SMS.",
              children: [{ name: "Twilio API", desc: "The backend invokes the Twilio API to dispatch an SMS to the client containing a secure, short-lived JWT URL linking directly to their personal repair estimate." }]
            },
            { 
              name: "One-Tap Consent", 
              desc: "Customer approves UI.",
              children: [{ name: "Web App View", desc: "The client opens a mobile-optimized React web-view where they can review the itemized PDF and tap 'Approve', instantly updating the AST status in the boutique." }]
            },
            { 
              name: "Process Apple Pay", 
              desc: "Secure transaction.",
              children: [{ name: "Payment Gateway", desc: "The web-view integrates the Stripe/Apple Pay SDK, allowing the client to securely prepay the repair cost using biometric authentication on their personal iPhone." }]
            }
          ]
        },
        {
          name: "Visual Progress Tracker",
          desc: "Parcel-tracking-like status.",
          children: [
            { 
              name: "Poll Timeline Data", 
              desc: "Fetch live AST status.",
              children: [{ name: "Websocket Listener", desc: "The customer portal maintains an active WebSocket connection, instantly pushing live state changes (e.g., 'Parts Arrived') directly to the client's screen." }]
            },
            { 
              name: "Render Stepper", 
              desc: "Show visual milestones.",
              children: [{ name: "SVG Generation", desc: "The frontend maps the backend AST states to a 5-step visual SVG progress bar, turning segments from grey to brand-color (Terracotta) as milestones complete." }]
            }
          ]
        },
        {
          name: "Before vs After Gallery (F2)",
          desc: "Visual comparison of repair.",
          children: [
            { 
              name: "Load Images", 
              desc: "Fetch intake vs QA photos.",
              children: [{ name: "CDN Fetch", desc: "The portal asynchronously fetches the original intake photos and the finalized QA macro photos from the CloudFront CDN, loading them into memory." }]
            },
            { 
              name: "Sync Slider", 
              desc: "Interactive swipe control.",
              children: [{ name: "Touch Events", desc: "A custom React component binds to mobile touch events, mapping the user's horizontal finger drag to the position of a vertical dividing line." }]
            },
            { 
              name: "Apply Mask", 
              desc: "Reveal after photo dynamically.",
              children: [{ name: "CSS Clip-Path", desc: "The slider manipulates a CSS 'clip-path' property on the top image layer, seamlessly revealing the flawless 'After' photo beneath the scratched 'Before' photo." }]
            }
          ]
        },
        {
          name: "Post-Service Engine (F9)",
          desc: "Automated retention touchpoints.",
          children: [
            { 
              name: "Trigger CSAT", 
              desc: "Send survey on Day 3.",
              children: [{ name: "Scheduled Task", desc: "Exactly 72 hours after the 'Picked Up' event, a scheduled cron job emails a personalized 3-question Net Promoter Score (NPS) survey to the client." }]
            },
            { 
              name: "Warranty Reminder", 
              desc: "Send at 30 days before expiry.",
              children: [{ name: "CRM Trigger", desc: "The CRM engine continuously monitors the new 24-month service warranty, automatically queueing an SMS reminder 30 days before it expires to encourage a checkup." }]
            },
            { 
              name: "Schedule Event", 
              desc: "Invite VIPs later.",
              children: [{ name: "Calendar API", desc: "For VVIC clients, the system automatically drafts a calendar invite for the Boutique Manager to invite the client to an upcoming product launch event." }]
            }
          ]
        }
      ]
    },
    {
      name: "E4: Warranty & Authentication",
      desc: "Brand protection & certification",
      children: [
        {
          name: "Warranty Validation",
          desc: "Determines coverage.",
          children: [
            { 
              name: "Input Serial", 
              desc: "Query Twin DB.",
              children: [{ name: "Database Search", desc: "The associate types the serial number into the POS, triggering a fast indexed lookup in the global PostgreSQL database to find the master Product Twin." }]
            },
            { 
              name: "Resolve Status", 
              desc: "Active vs Expired vs Void.",
              children: [{ name: "Date Math", desc: "The backend calculates the delta between the original activation date and the current date, checking if it falls within the 5-year global warranty window." }]
            }
          ]
        },
        {
          name: "Product Authentication",
          desc: "Corporate review of validity.",
          children: [
            { 
              name: "Submit Evidence", 
              desc: "Upload macro photos.",
              children: [{ name: "High-Res Transfer", desc: "The associate is prompted to photograph specific micro-engravings (e.g., the laser etched crown), transferring these heavily compressed images securely to Corporate HQ." }]
            },
            { 
              name: "Corporate Review", 
              desc: "Experts analyze metadata.",
              children: [{ name: "Admin Dashboard", desc: "A dedicated Heritage Department user accesses a high-res web dashboard to visually inspect the engravings against archival schematics to verify authenticity." }]
            },
            { 
              name: "Generate Certificate", 
              desc: "Mint signed PDF + QR code.",
              children: [{ name: "Crypto Signing", desc: "Upon approval, the system generates a PDF Certificate of Authenticity, signing it with a corporate private key and embedding a verification QR code." }]
            }
          ]
        },
        {
          name: "Service Passport (F6)",
          desc: "Appends to Digital Twin timeline.",
          children: [
            { 
              name: "Fetch Digital Twin", 
              desc: "Read global shared entity.",
              children: [{ name: "Twin API Lookup", desc: "The backend resolves the unique Product ID against the CloudKit container to fetch the current state of the item's digital passport." }]
            },
            { 
              name: "Append Event", 
              desc: "Write repair history log.",
              children: [{ name: "Array Push", desc: "A JSON object containing the date, boutique ID, replaced part numbers, and the lead technician's ID is appended to the Passport's 'Service History' array." }]
            },
            { 
              name: "Sync to CloudKit", 
              desc: "Push to ecosystem.",
              children: [{ name: "Network Sync", desc: "The updated Passport is committed to CloudKit, ensuring that if the client visits a boutique in Tokyo tomorrow, the system instantly sees today's repair." }]
            }
          ]
        },
        {
          name: "Valuation Processing",
          desc: "Official insurance documentation.",
          children: [
            { 
              name: "Request Value", 
              desc: "Assess current market worth.",
              children: [{ name: "Pricing API", desc: "The system pings the corporate Pricing API to fetch the exact current Retail Replacement Value of the specific SKU in the local currency." }]
            },
            { 
              name: "Corporate Approval", 
              desc: "Validate numbers.",
              children: [{ name: "Manager Auth", desc: "A boutique manager must input their PIN to legally authorize the system to bind the brand's name to the quoted insurance replacement value." }]
            },
            { 
              name: "Output Signed PDF", 
              desc: "Send to customer.",
              children: [{ name: "Document Render", desc: "A formal PDF is generated with the client's name, the item's Serial Number, the current date, and the authorized value, directly emailed to the client's insurance broker." }]
            }
          ]
        }
      ]
    },
    {
      name: "E5: Return & Logistics",
      desc: "Pickup & courier management",
      children: [
        {
          name: "Pickup Scheduling",
          desc: "Customer selects slot.",
          children: [
            { 
              name: "Present Time Slots", 
              desc: "Show available store hours.",
              children: [{ name: "Availability Engine", desc: "The booking microservice reads the boutique's operational hours and current staff rostering to calculate and expose available 15-minute pickup slots via the web portal." }]
            },
            { 
              name: "Customer Selects", 
              desc: "Book appointment.",
              children: [{ name: "Reservation Write", desc: "When the client taps a slot, a POST request locks the appointment in the centralized scheduling database, preventing double-booking." }]
            },
            { 
              name: "Store Acknowledges", 
              desc: "Queue item for front.",
              children: [{ name: "Task Creation", desc: "At the start of the business day, the system generates a priority task on the Boutique Admin's dashboard to retrieve the client's item from the back-of-house safe." }]
            }
          ]
        },
        {
          name: "Smart Packaging",
          desc: "ML recommends protective materials.",
          children: [
            { 
              name: "Check Category", 
              desc: "Identify Watch vs Jewelry.",
              children: [{ name: "Product Parsing", desc: "The shipping module reads the Product Twin metadata to determine the item category, dimensions, and fragility rating." }]
            },
            { 
              name: "Determine Materials", 
              desc: "Select Velvet vs Box.",
              children: [{ name: "Rules Engine", desc: "A rules engine evaluates the fragility rating to output exactly which corporate packaging SKUs (e.g., 'Foam Insert B', 'Small Velvet Pouch') must be used." }]
            },
            { 
              name: "Print Instructions", 
              desc: "Staff packing guide.",
              children: [{ name: "Label Printer API", desc: "The system sends an AirPrint command to the local Zebra thermal printer, generating a visual packing checklist slip for the shipping associate." }]
            }
          ]
        },
        {
          name: "Auto-Documentation",
          desc: "Generates closing PDFs.",
          children: [
            { 
              name: "Aggregate Data", 
              desc: "Gather repair + QA details.",
              children: [{ name: "Data Aggregation", desc: "Before final checkout, a backend script compiles the original complaint, the replaced parts list, the final QA test results, and the payment receipt into one payload." }]
            },
            { 
              name: "Run PDFKit", 
              desc: "Generate summary and invoice.",
              children: [{ name: "PDF Compiler", desc: "PDFKit ingests the JSON payload and maps it into a beautiful, multi-page corporate branded document detailing the entire lifecycle of the intervention." }]
            },
            { 
              name: "Store Digital Copy", 
              desc: "Attach to AST.",
              children: [{ name: "File Upload", desc: "The final PDF is permanently uploaded to the CloudKit document store, linked directly to the AST so any global associate can reprint it years later." }]
            }
          ]
        },
        {
          name: "Courier Tracking",
          desc: "MapKit integration.",
          children: [
            { 
              name: "Ping API", 
              desc: "Fetch carrier coordinates.",
              children: [{ name: "FedEx/UPS REST", desc: "If the item is shipped back to the client, the backend polls the FedEx/UPS REST API every 15 minutes to retrieve the latest GPS coordinates of the delivery truck." }]
            },
            { 
              name: "Map Marker", 
              desc: "Draw on MapKit View.",
              children: [{ name: "UI Overlay", desc: "The client's tracking portal translates the lat/long coordinates into a dynamic marker on an interactive Apple MapKit component." }]
            },
            { 
              name: "Update ETA", 
              desc: "Display delivery time.",
              children: [{ name: "Time Calculation", desc: "The system parses the carrier's estimated delivery payload and formats it into a user-friendly countdown timer (e.g., 'Arriving in 45 mins') on the client portal." }]
            }
          ]
        }
      ]
    },
    {
      name: "E6: Service Intelligence Dashboard",
      desc: "Predictive repair analytics",
      children: [
        {
          name: "Network Dashboard",
          desc: "Aggregated reporting.",
          children: [
            { 
              name: "Pull Data", 
              desc: "Fetch turnaround times.",
              children: [{ name: "Data Warehouse Query", desc: "The analytics engine executes a massive daily rollup query across all regional databases to calculate the mean repair turnaround time for every active boutique." }]
            },
            { 
              name: "Render Charts", 
              desc: "Use Swift Charts API.",
              children: [{ name: "Chart Generation", desc: "The UI consumes the JSON rollup array, using Swift Charts to natively render interactive, animated bar charts comparing SLA performance across regions." }]
            },
            { 
              name: "Compare Stores", 
              desc: "Rank best/worst performance.",
              children: [{ name: "Ranking Algorithm", desc: "An algorithm sorts the boutiques by efficiency, dynamically highlighting the top 3 performing service centers in green and the bottom 3 in red." }]
            }
          ]
        },
        {
          name: "Repair Health Score (F3)",
          desc: "Store-level composite metric.",
          children: [
            { 
              name: "Aggregate SLAs", 
              desc: "Combine QA, CSAT, Speed.",
              children: [{ name: "Score Compiler", desc: "The system pulls the average SLA deviation, the First-Time Fix rate (QA pass), and the post-repair CSAT survey scores into a unified matrix." }]
            },
            { 
              name: "Calculate Composite", 
              desc: "Output 0-100 score.",
              children: [{ name: "Weighting Math", desc: "A pre-configured weighting model (e.g., CSAT is 50%, Speed is 30%, QA is 20%) computes a single 'Service Health Index' score out of 100 for the store." }]
            },
            { 
              name: "Render Gauge", 
              desc: "Circular UI representation.",
              children: [{ name: "SVG Render", desc: "The dashboard generates a dynamic SVG radial gauge chart that fills up proportionally to represent the 0-100 Service Health Index." }]
            }
          ]
        },
        {
          name: "Smart Parts Forecast (F4)",
          desc: "Predicts future demand for spares.",
          children: [
            { 
              name: "Time-series ML", 
              desc: "Analyze historical repairs.",
              children: [{ name: "ML Analysis", desc: "A backend machine learning pipeline ingests 5 years of historical parts consumption data, adjusting for seasonality (e.g., more watch battery replacements in summer)." }]
            },
            { 
              name: "Predict Demand", 
              desc: "Forecast 30-day needs.",
              children: [{ name: "Extrapolation", desc: "The model runs an ARIMA projection to forecast the exact quantity of specific spare parts (e.g., 'O-Ring 4mm') each service center will need over the next 30 days." }]
            },
            { 
              name: "Flag Low Stock", 
              desc: "Alert procurement.",
              children: [{ name: "Threshold Trigger", desc: "If the forecasted 30-day demand exceeds the service center's current on-hand inventory, the system automatically drafts a Purchase Order for corporate approval." }]
            }
          ]
        },
        {
          name: "SLA Risk Prediction (F7)",
          desc: "AI forecasts SLA breach probability.",
          children: [
            { 
              name: "Analyze Backlog", 
              desc: "Check current queue depth.",
              children: [{ name: "Queue Parser", desc: "A script counts the total number of unassigned ASTs sitting in the queue and cross-references it with the scheduled working hours of available technicians." }]
            },
            { 
              name: "Calculate Probability", 
              desc: "Output breach % risk.",
              children: [{ name: "Risk Model", desc: "A statistical model estimates the probability of failure; if the backlog requires 40 hours of labor but only 30 hours of staff time are scheduled, the breach risk is high." }]
            },
            { 
              name: "Recommend Action", 
              desc: "Suggest reassignment.",
              children: [{ name: "Routing Suggestion", desc: "If the breach risk exceeds 80%, the UI actively prompts the manager to physically reroute the excess repair tickets to a neighboring service center with idle capacity." }]
            }
          ]
        }
      ]
    }
  ]
};

// --- FULL COMPLETE DATA: Boutique Command Center (Boutique Admin) ---
const boutiqueAdminTreeData = {
  name: "Boutique Admin",
  desc: "Local Operations Command Center",
  children: [
    {
      name: "B1: Morning Briefing & Setup",
      desc: "Daily operational initialization",
      children: [
        {
          name: "Manager Dashboard",
          desc: "Review daily targets.",
          children: [
            { 
              name: "Fetch KPIs", 
              desc: "Read target vs actual.",
              children: [{ name: "API Request", desc: "A SwiftData query pulls the boutique's daily financial targets, forecasted foot traffic, and the previous day's closing variances directly from the Corporate CloudKit container." }]
            },
            { 
              name: "Identify Gaps", 
              desc: "Highlight underperforming categories.",
              children: [{ name: "Data Processing", desc: "An on-device CoreML model compares current pacing against historical data to highlight which specific watch or jewelry categories need focused selling today." }]
            },
            { 
              name: "Generate Briefing", 
              desc: "Draft talking points.",
              children: [{ name: "LLM Output", desc: "The AI Copilot generates a 3-bullet-point morning huddle summary for the manager to share with the team, highlighting VIP arrivals and low-stock warnings." }]
            }
          ]
        },
        {
          name: "Safe & Inventory Unlock",
          desc: "Dual-control vault access.",
          children: [
            { 
              name: "Biometric Auth", 
              desc: "Manager 1 + Manager 2.",
              children: [{ name: "FaceID Integration", desc: "The system enforces a strict dual-control policy, requiring two separate authorized managers to authenticate via FaceID within a 60-second window to initiate the safe protocol." }]
            },
            { 
              name: "Trigger Relay", 
              desc: "Open physical vault.",
              children: [{ name: "IoT Command", desc: "Upon successful biometric authentication, a secure encrypted payload is dispatched to the physical IoT relay controlling the vault's magnetic lock." }]
            },
            { 
              name: "Log Access", 
              desc: "Write audit event.",
              children: [{ name: "Audit Trail", desc: "The exact timestamp, the GPS location of the iPad, and the IDs of both managers are written to an immutable blockchain ledger to comply with insurance mandates." }]
            }
          ]
        },
        {
          name: "Task Assignment (BA1)",
          desc: "Allocate daily responsibilities.",
          children: [
            { 
              name: "Read Roster", 
              desc: "Check active staff.",
              children: [{ name: "HR Sync", desc: "The system reads the daily Workday/ADP schedule to identify exactly which Sales Associates are clocked in for the morning shift." }]
            },
            { 
              name: "Distribute Tasks", 
              desc: "Assign to iPads.",
              children: [{ name: "Task Engine", desc: "The manager's iPad distributes contextual tasks (e.g., 'Setup Window A', 'Call VIP Client X') directly to the individual associates' devices via a silent push notification." }]
            },
            { 
              name: "Track Completion", 
              desc: "Monitor status.",
              children: [{ name: "UI Dashboard", desc: "A real-time Kanban board on the manager's screen updates instantly as associates mark their assigned tasks as 'In Progress' or 'Completed'." }]
            }
          ]
        }
      ]
    },
    {
      name: "B2: Workforce & Roster",
      desc: "Staff management & optimization",
      children: [
        {
          name: "Dynamic Rostering",
          desc: "Match staff to traffic.",
          children: [
            { 
              name: "Predict Footfall", 
              desc: "ML traffic estimate.",
              children: [{ name: "Time-Series Model", desc: "The system uses historical foot-traffic data and local weather APIs to predict the exact hourly client volume expected for the day." }]
            },
            { 
              name: "Suggest Shifts", 
              desc: "Align breaks to lulls.",
              children: [{ name: "Optimization Algorithm", desc: "An algorithm calculates the optimal lunch break schedule, ensuring that the highest number of associates are active during the predicted 2:00 PM peak." }]
            },
            { 
              name: "Publish Roster", 
              desc: "Update employee app.",
              children: [{ name: "Data Push", desc: "The finalized schedule is pushed to the associate-facing iOS app, alerting them of their specific break times and assigned zones." }]
            }
          ]
        },
        {
          name: "Performance Coaching (BA2)",
          desc: "Real-time associate metrics.",
          children: [
            { 
              name: "Track Live Sales", 
              desc: "By associate ID.",
              children: [{ name: "Data Aggregation", desc: "The dashboard continuously aggregates live POS transaction data, mapping every closed ticket to the unique ID of the associate who authored it." }]
            },
            { 
              name: "Identify Low Conversion", 
              desc: "Traffic vs Sales.",
              children: [{ name: "Metric Comparison", desc: "The system highlights associates who have high client interaction times (tracked via CRM) but abnormally low sales conversion rates for the current week." }]
            },
            { 
              name: "Recommend Training", 
              desc: "Suggest learning module.",
              children: [{ name: "Rule Engine", desc: "If an associate struggles specifically with selling High Jewelry, the system prompts the manager to push a 5-minute interactive SCORM training module to the associate's iPad." }]
            }
          ]
        },
        {
          name: "Commission Approvals",
          desc: "End-of-day verifications.",
          children: [
            { 
              name: "Review Exceptions", 
              desc: "Discounts and returns.",
              children: [{ name: "Query DB", desc: "The manager is presented with a filtered list of all anomalous transactions, such as items sold with a manual discount exceeding 5%." }]
            },
            { 
              name: "Manager Signoff", 
              desc: "Approve daily ledger.",
              children: [{ name: "Digital Signature", desc: "The manager uses FaceID to digitally sign and lock the day's commission ledger, freezing the data against further local modification." }]
            },
            { 
              name: "Send to Payroll", 
              desc: "Push to corporate.",
              children: [{ name: "API Transmission", desc: "The finalized, cryptographically signed ledger is securely transmitted to the corporate HR/Payroll endpoint for processing." }]
            }
          ]
        }
      ]
    },
    {
      name: "B3: Floor & Traffic Control",
      desc: "Live boutique orchestration",
      children: [
        {
          name: "VIP Arrival Alert (BA4)",
          desc: "Facial/Beacon detection.",
          children: [
            { 
              name: "Detect Client", 
              desc: "Identify at entrance.",
              children: [{ name: "Beacon Integration", desc: "As a VVIC enters, their opt-in client app triggers an iBeacon event, sending an encrypted UUID to the boutique's local server." }]
            },
            { 
              name: "Fetch Profile", 
              desc: "Read CRM twin.",
              children: [{ name: "Data Fetch", desc: "The system instantly resolves the UUID against the CRM database, pulling their photo, name, and primary dedicated Sales Associate." }]
            },
            { 
              name: "Alert Greeter", 
              desc: "Push to front desk.",
              children: [{ name: "UI Notification", desc: "The Greeter's iPad displays a rich notification with the client's photo and name, instructing them to warmly welcome the client while silently pinging their dedicated associate." }]
            }
          ]
        },
        {
          name: "Zone Management",
          desc: "Monitor physical areas.",
          children: [
            { 
              name: "Map Client Density", 
              desc: "Track hot spots.",
              children: [{ name: "IoT Processing", desc: "Ceiling-mounted thermal sensors feed data into the local server, rendering a live 2D heat-map on the manager's dashboard indicating crowded zones." }]
            },
            { 
              name: "Re-Route Staff", 
              desc: "Move associates to busy areas.",
              children: [{ name: "Automated Logic", desc: "If 'Zone B (Watches)' exceeds a 5:1 client-to-staff ratio, the system automatically tasks a free associate from 'Zone A' to relocate and assist." }]
            }
          ]
        },
        {
          name: "Queue & Appointment (BA5)",
          desc: "Waitlist handling.",
          children: [
            { 
              name: "Add to Queue", 
              desc: "Walk-in registration.",
              children: [{ name: "Form Submission", desc: "Walk-in clients input their phone number into a kiosk; the system creates a temporary session ID and adds them to the digital waitlist." }]
            },
            { 
              name: "Calculate Wait", 
              desc: "Estimated time to serve.",
              children: [{ name: "Algorithm", desc: "A predictive algorithm divides the number of waiting clients by the historical average transaction time (e.g., 22 mins) to generate an accurate ETA." }]
            },
            { 
              name: "Notify Client", 
              desc: "Send SMS when ready.",
              children: [{ name: "SMS Gateway", desc: "When the client reaches position #1, the Twilio integration automatically sends an SMS inviting them to return to the specific display counter." }]
            }
          ]
        }
      ]
    },
    {
      name: "B4: Local Inventory Admin",
      desc: "Stock adjustments & approvals",
      children: [
        {
          name: "Cycle Count Approval (BA6)",
          desc: "Review daily scan variances.",
          children: [
            { 
              name: "Fetch Variance List", 
              desc: "Differences from RFID scan.",
              children: [{ name: "Data Query", desc: "The manager's UI loads the delta report generated by the morning RFID sweep, specifically highlighting SKUs marked as 'Missing'." }]
            },
            { 
              name: "Investigate Missing", 
              desc: "Check recent transfers.",
              children: [{ name: "Log Lookup", desc: "The manager taps a missing SKU to cross-reference the local log, checking if it was recently moved to the repair safe or transferred to another store." }]
            },
            { 
              name: "Approve Write-off", 
              desc: "Accept loss.",
              children: [{ name: "Financial Transaction", desc: "If the item is genuinely missing, the manager must use biometrics to authorize a financial 'Shrinkage' write-off, adjusting the general ledger." }]
            }
          ]
        },
        {
          name: "Transfer Management",
          desc: "Approving store-to-store moves.",
          children: [
            { 
              name: "Review Request", 
              desc: "Corporate asks for stock.",
              children: [{ name: "Task Fetch", desc: "An urgent ticket appears on the dashboard: Corporate's Allocation AI is requesting the physical transfer of 3 high-velocity SKUs to the Paris flagship." }]
            },
            { 
              name: "Approve Dispatch", 
              desc: "Generate packing slip.",
              children: [{ name: "Status Update", desc: "The manager taps 'Approve', which instantly updates the local inventory status to 'Reserved for Transfer' and generates the outbound shipping label." }]
            }
          ]
        },
        {
          name: "Planogram Enforcement",
          desc: "Visual display checks.",
          children: [
            { 
              name: "Review Photos", 
              desc: "Check staff uploads.",
              children: [{ name: "Image Compare", desc: "The manager reviews the photos of the newly arranged window displays uploaded by the visual merchandising team against the corporate reference images." }]
            },
            { 
              name: "Signoff Compliance", 
              desc: "Confirm display is correct.",
              children: [{ name: "State Update", desc: "The manager approves the layout, sending a 'Planogram Compliant' boolean flag and the validated photo back to the Corporate Compliance Heatmap." }]
            }
          ]
        }
      ]
    },
    {
      name: "B5: Client Issue Resolution",
      desc: "High-level overrides & refunds",
      children: [
        {
          name: "Override Authorization",
          desc: "Approving associate requests.",
          children: [
            { 
              name: "Receive Prompt", 
              desc: "Associate needs manager code.",
              children: [{ name: "Websocket Event", desc: "An associate's iPad sends an urgent WebSocket request to the manager's device asking for a 15% discount authorization on a $20,000 transaction." }]
            },
            { 
              name: "Review Context", 
              desc: "Check client LTV.",
              children: [{ name: "Context Fetch", desc: "The prompt automatically embeds the client's CRM profile, showing they are a VVIC with a $150k lifetime spend, justifying the exception." }]
            },
            { 
              name: "Remote Approval", 
              desc: "Sign off from manager device.",
              children: [{ name: "Crypto Auth", desc: "The manager uses FaceID to generate an encrypted token, which is transmitted back to the associate's iPad, instantly unlocking the POS discount field." }]
            }
          ]
        },
        {
          name: "Refund Management",
          desc: "Processing returns.",
          children: [
            { 
              name: "Verify Item", 
              desc: "Check condition.",
              children: [{ name: "Condition Form", desc: "The manager must physically inspect the returned item and fill out a digital condition report to ensure it hasn't been worn or damaged." }]
            },
            { 
              name: "Execute Reversal", 
              desc: "Send funds back.",
              children: [{ name: "Payment Gateway API", desc: "The system triggers a refund call to the Stripe/Adyen API, routing the exact transactional amount back to the original payment method." }]
            },
            { 
              name: "Update Inventory", 
              desc: "Put item back in stock.",
              children: [{ name: "Status Change", desc: "The Product Digital Twin's status is atomically reverted from 'Sold' to 'In-Stock', and the commission clawback is queued for the original associate." }]
            }
          ]
        },
        {
          name: "Service Escalation (BA7)",
          desc: "Handling angry repair clients.",
          children: [
            { 
              name: "Flag Ticket", 
              desc: "Mark AST as critical.",
              children: [{ name: "Database Update", desc: "The manager upgrades the priority flag on a delayed After-Sales Ticket from 'Normal' to 'Critical', pushing it to the top of the technician's queue." }]
            },
            { 
              name: "Issue Concession", 
              desc: "Offer free gift/service.",
              children: [{ name: "Ledger Entry", desc: "The manager selects a 'Service Concession' option, authorizing a complimentary watch strap replacement and deducting the cost from the boutique's localized goodwill budget." }]
            }
          ]
        }
      ]
    }
  ]
};

// --- FULL COMPLETE DATA: Sales Associate (Client Advisor) ---
const salesAssociateTreeData = {
  name: "Sales Associate",
  desc: "Client Advisor Experience Platform",
  children: [
    {
      name: "S1: Clienteling Hub",
      desc: "Client Digital Twin & Profiling",
      children: [
        {
          name: "Client Digital Twin (SF1)",
          desc: "The core customer entity.",
          children: [
            { 
              name: "Create Profile", 
              desc: "Capture preferences & sizes.",
              children: [{ name: "Profile Initialization", desc: "The associate uses the iPad app to input the client's name, email, preferred contact method, and sizing metrics, which syncs directly to the CRM backend via CloudKit." }]
            },
            { 
              name: "Relationship Timeline", 
              desc: "View all touchpoints.",
              children: [{ name: "Timeline Rendering", desc: "The system queries all historical interactions, including purchases, repair tickets, and event attendances, rendering them in a chronological UI timeline for instant context." }]
            },
            { 
              name: "Owned Products", 
              desc: "Link to Product Twins.",
              children: [{ name: "Asset Binding", desc: "Retrieves an array of Product Digital Twin IDs associated with this client's profile, displaying the exact status, warranty, and repair history for each owned item." }]
            },
            { 
              name: "Manage Consents", 
              desc: "GDPR compliance.",
              children: [{ name: "Consent Framework", desc: "Presents a digital consent form for marketing and data processing; capturing the client's biometric signature and storing the encrypted compliance log." }]
            }
          ]
        },
        {
          name: "AI Client Memory (SF2)",
          desc: "Instant customer context.",
          children: [
            { 
              name: "View Preferences", 
              desc: "Brands, colors, sizes.",
              children: [{ name: "Preference Extraction", desc: "An NLP model analyzes past purchase notes and wishlist additions to automatically tag the client's preferred materials, colors, and designers." }]
            },
            { 
              name: "Track Milestones", 
              desc: "Anniversaries & birthdays.",
              children: [{ name: "Milestone Engine", desc: "A cron job monitors the client's demographic data, triggering a push notification to the assigned Associate 14 days prior to a major life event." }]
            },
            { 
              name: "Review History", 
              desc: "Past purchases & repairs.",
              children: [{ name: "Aggregate History", desc: "Joins data from the POS transaction ledger and After-Sales repair database to present a unified view of the client's lifetime spend and service needs." }]
            }
          ]
        },
        {
          name: "Client Networking",
          desc: "Visual relationship mapping.",
          children: [
            { 
              name: "Luxury Circle Graph (SF4)", 
              desc: "Map family & gifts.",
              children: [{ name: "Graph Visualization", desc: "Uses a D3 network graph to visually map familial links and gifting histories between clients, identifying hidden high-value networks." }]
            },
            { 
              name: "Relationship Health Score (SF5)", 
              desc: "Score engagement.",
              children: [{ name: "Health Metric Calculation", desc: "A machine learning model evaluates frequency of visits, average order value, and survey responses to output a 0-100 retention score." }]
            }
          ]
        }
      ]
    },
    {
      name: "S2: Appointment & Remote Selling",
      desc: "Consultations & Curated Carts",
      children: [
        {
          name: "Appointment Booking",
          desc: "Schedule and prepare.",
          children: [
            { 
              name: "Book Consultation", 
              desc: "Set date, time & type.",
              children: [{ name: "Calendar Integration", desc: "Interfaces with the Boutique Workforce scheduler to reserve a specific Associate and fitting room, locking the time slot in the central DB." }]
            },
            { 
              name: "Send Reminders", 
              desc: "Automated Push/SMS.",
              children: [{ name: "Twilio Dispatch", desc: "Executes an automated sequence sending a confirmation email immediately and an SMS reminder 24 hours prior to the appointment." }]
            },
            { 
              name: "View Briefing Card", 
              desc: "Pre-appointment context.",
              children: [{ name: "Briefing Generation", desc: "The AI Copilot synthesizes the client's wishlist and recent purchases into a 3-bullet summary card, displayed on the Associate's dashboard." }]
            }
          ]
        },
        {
          name: "Virtual Boutique Experience (SF6)",
          desc: "Remote luxury selling.",
          children: [
            { 
              name: "Build Curated Cart", 
              desc: "Add products & styling notes.",
              children: [{ name: "Cart Assembly", desc: "The associate selects specific SKUs from the live inventory, appending personalized video messages and styling advice into a custom digital lookbook." }]
            },
            { 
              name: "Share Private Link", 
              desc: "Send to client.",
              children: [{ name: "Secure Link Generation", desc: "Generates a time-expiring, encrypted deep link sent via WhatsApp or SMS that opens the bespoke web application for the client." }]
            },
            { 
              name: "Track Views", 
              desc: "Monitor client engagement.",
              children: [{ name: "Analytics Telemetry", desc: "Fires webhooks when the client opens the link, views specific products, or abandons the cart, notifying the Associate instantly." }]
            },
            { 
              name: "Convert to Order", 
              desc: "Seamless checkout.",
              children: [{ name: "Payment Processing", desc: "Passes the cart payload securely to Stripe/Apple Pay, converting the remote session into a finalized POS transaction." }]
            }
          ]
        }
      ]
    },
    {
      name: "S3: Assisted Selling Intelligence",
      desc: "AI-driven discovery",
      children: [
        {
          name: "Contextual Selling Intelligence (SF8)",
          desc: "Smart recommendations.",
          children: [
            { 
              name: "Guided Catalogue", 
              desc: "Filter by preferences.",
              children: [{ name: "Algorithmic Filtering", desc: "Filters the master product catalog in real-time based on the client's recorded size, color preferences, and past brand affinities." }]
            },
            { 
              name: "Live Inventory", 
              desc: "Real-time stock checks.",
              children: [{ name: "Stock Validation API", desc: "Queries the local Store Digital Twin and the central Corporate warehouse to verify exact unit availability down to the specific shelf location." }]
            },
            { 
              name: "Look Builder", 
              desc: "Suggest complementary items.",
              children: [{ name: "Cross-Sell Engine", desc: "Uses association rule learning to recommend accessories and secondary items that historically sell well with the primary SKU in the cart." }]
            },
            { 
              name: "Occasion Collections", 
              desc: "Auto-build for events.",
              children: [{ name: "Event Matching", desc: "If the client's profile indicates an upcoming wedding or gala, the system automatically surfaces a curated collection of formalwear and gifts." }]
            }
          ]
        }
      ]
    },
    {
      name: "S4: Luxury POS & Checkout",
      desc: "Transactional ceremony",
      children: [
        {
          name: "POS Operations",
          desc: "Payments & returns.",
          children: [
            { 
              name: "Apply Discounts", 
              desc: "Require manager approval.",
              children: [{ name: "Approval Workflow", desc: "Triggers a secure push notification to the Boutique Manager's Apple Watch, requiring biometric authentication to authorize a price override." }]
            },
            { 
              name: "Split Tenders", 
              desc: "Combine payment methods.",
              children: [{ name: "Transaction Orchestrator", desc: "Safely handles multiple async payment intents (e.g., cash + credit card), only finalizing the POS receipt once all legs successfully clear." }]
            },
            { 
              name: "Process Tax-Free", 
              desc: "Capture passport details.",
              children: [{ name: "OCR Passport Scan", desc: "Utilizes the iPad camera and Vision framework to extract MRZ data from a passport, automatically filing the Global Blue VAT refund form." }]
            },
            { 
              name: "Handle Returns", 
              desc: "Exchanges and refunds.",
              children: [{ name: "Return Authorization", desc: "Reverses the financial transaction while triggering an API call to the Inventory OS to move the item back into the 'Inspection' queue." }]
            }
          ]
        },
        {
          name: "Concierge Checkout (SF7)",
          desc: "Elevated checkout flow.",
          children: [
            { 
              name: "Add Gift Wrap", 
              desc: "Select style & note.",
              children: [{ name: "Packaging Addition", desc: "Appends zero-cost packaging SKUs to the cart to ensure inventory accuracy for ribbons and boxes, while saving the custom gift note." }]
            },
            { 
              name: "Schedule Delivery", 
              desc: "Set dispatch date.",
              children: [{ name: "Logistics API", desc: "Integrates with FedEx/UPS to print a shipping label directly from the POS, registering the tracking number to the client's profile." }]
            },
            { 
              name: "Register Warranty", 
              desc: "Write to Product Twin.",
              children: [{ name: "Twin Activation", desc: "Transitions the Product Digital Twin from 'InStock' to 'Sold', binding the client ID and starting the 24-month warranty countdown clock." }]
            }
          ]
        },
        {
          name: "Post-Purchase Lifecycle Engine (SF10)",
          desc: "Automated relationship.",
          children: [
            { 
              name: "Send Care Tips", 
              desc: "Unboxing & instructions.",
              children: [{ name: "Automated Dispatch", desc: "Schedules an email to be sent 24 hours post-purchase containing a PDF care guide and a personalized 'Thank You' video from the Associate." }]
            },
            { 
              name: "Request Feedback", 
              desc: "Post-purchase survey.",
              children: [{ name: "Survey Trigger", desc: "Fires a webhook to Qualtrics 7 days after the sale, requesting a Net Promoter Score rating, which feeds directly into the Corporate Health metric." }]
            },
            { 
              name: "Trigger Service Reminder", 
              desc: "6-month checkup.",
              children: [{ name: "Lifecycle Cron", desc: "Generates an actionable 'Opportunity' task for the Sales Associate 6 months later, prompting them to invite the client back for a complimentary cleaning." }]
            }
          ]
        }
      ]
    },
    {
      name: "S5: Omnichannel Fulfillment",
      desc: "Endless aisle & BOPIS",
      children: [
        {
          name: "BOPIS Concierge (SF9)",
          desc: "Buy online pick up in store.",
          children: [
            { 
              name: "Monitor Queue", 
              desc: "View incoming orders.",
              children: [{ name: "Order Polling", desc: "Continuously polls the e-commerce backend for new local pickup orders, playing a subtle chime on the Associate's device when a new order drops." }]
            },
            { 
              name: "VIP Greeting", 
              desc: "Triggered on arrival.",
              children: [{ name: "Geofence Trigger", desc: "Detects when the client's mobile app enters the boutique geofence, alerting the host stand to prepare the prepared package immediately." }]
            },
            { 
              name: "Verify Pickup", 
              desc: "Capture signature.",
              children: [{ name: "Handoff Authentication", desc: "Requires the Associate to scan the order QR code and capture the client's digital signature, changing the order status to 'Fulfilled'." }]
            }
          ]
        },
        {
          name: "Endless Aisle",
          desc: "Sell from anywhere.",
          children: [
            { 
              name: "Check Cross-Store Stock", 
              desc: "View network inventory.",
              children: [{ name: "Distributed Query", desc: "Searches the global inventory database if an item is out of stock locally, providing real-time visibility into neighboring boutiques and warehouses." }]
            },
            { 
              name: "Place Order", 
              desc: "Route to fulfilling store.",
              children: [{ name: "Order Routing Engine", desc: "Processes the payment locally but assigns the fulfillment ticket to the remote location, crediting the local Associate with the sales commission." }]
            },
            { 
              name: "Ship from Store", 
              desc: "Generate packing slips.",
              children: [{ name: "Fulfillment Workflow", desc: "Provides the remote store with a pick-and-pack workflow, generating the necessary shipping labels to send the item directly to the client's home." }]
            }
          ]
        }
      ]
    },
    {
      name: "S6: Client Intelligence Dashboard",
      desc: "Data-driven actions",
      children: [
        {
          name: "Advisor Dashboard",
          desc: "Daily agenda & goals.",
          children: [
            { 
              name: "View Agenda", 
              desc: "Appointments & BOPIS.",
              children: [{ name: "Agenda Aggregation", desc: "Consolidates CRM calendar events, overdue tasks, and pending BOPIS orders into a single, prioritized chronological list for the Associate." }]
            },
            { 
              name: "Track Goals", 
              desc: "Sales performance metrics.",
              children: [{ name: "KPI Dashboard", desc: "Queries the Corporate analytics engine to display the Associate's live pacing against monthly revenue targets, visually represented by a progress ring." }]
            }
          ]
        },
        {
          name: "Opportunity Engine (SF3)",
          desc: "Proactive outreach.",
          children: [
            { 
              name: "Detect Triggers", 
              desc: "Anniversaries & wishlists.",
              children: [{ name: "Rule Evaluation", desc: "A background service evaluates all assigned clients against predefined engagement rules, such as a wishlist item coming back in stock." }]
            },
            { 
              name: "Generate Opportunities", 
              desc: "Create task lists.",
              children: [{ name: "Task Instantiation", desc: "Creates highly actionable task cards (e.g., 'Call Sarah regarding her upcoming anniversary') injected directly into the Advisor Dashboard." }]
            },
            { 
              name: "Execute Action", 
              desc: "Send curated cart/message.",
              children: [{ name: "Action Deep-linking", desc: "Provides a one-tap button that automatically drafts a personalized iMessage or email, attaching the relevant product deep links for immediate sending." }]
            }
          ]
        }
      ]
    }
  ]
};

// --- COMBINED UNIFIED DATA ---
const unifiedTreeData = {
  name: "Retail Digital Twin Fabric (CF1)",
  desc: "The Master Enterprise Entity",
  children: [
    corporateTreeData,
    inventoryTreeData,
    afterSalesTreeData,
    boutiqueAdminTreeData,
    salesAssociateTreeData
  ]
};

export default function WorkflowVisualizer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !svgRef.current || !containerRef.current) return;
    d3.select(svgRef.current).selectAll("*").remove();

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const margin = { top: 80, right: 20, bottom: 80, left: 20 };

    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%");

    const g = svg.append("g")
      .attr("transform", `translate(${width / 2},${margin.top})`);

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.05, 3])
      .on("zoom", (event) => g.attr("transform", event.transform));
      
    svg.call(zoom);
    // Zoom out enough to show the huge unified tree
    svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2, margin.top).scale(0.35));

    const tree = d3.tree<any>().nodeSize([260, 200]);
    const root: any = d3.hierarchy(unifiedTreeData);
    root.x0 = 0;
    root.y0 = 0;

    // Collapse children initially so user only sees Corporate vs Inventory branches (Level 2)
    root.children?.forEach((child: any) => {
      child.children?.forEach((grandchild: any) => {
        collapse(grandchild);
      });
    });

    let i = 0;

    function collapse(d: any) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    // Dynamic color helper
    const getNodeColors = (d: any) => {
      // Highlight CF, IF, F, BF, and SF nodes (Innovation Features) - Terracotta
      if (d.data.name.includes("(CF") || d.data.name.includes("(IF") || d.data.name.match(/\(F\d+\)/) || d.data.name.includes("(BF") || d.data.name.includes("(SF")) {
        return { bg: "#FFF3ED", hover: "#FCE7DB", stroke: "#C9540A", expandedBg: "#FCE7DB", text: "#C9540A" }; // Terracotta
      }

      // Trace lineage back to top level to determine module color
      let current = d;
      while (current.depth > 1) {
        current = current.parent;
      }
      
      if (current.data.name === "Corporate Admin Layer") {
        return { bg: "#EEF2FF", hover: "#E0E7FF", stroke: "#818CF8", expandedBg: "#E0E7FF", text: "#3730A3" }; // Indigo
      } else if (current.data.name === "Inventory Intelligence OS") {
        return { bg: "#ECFDF5", hover: "#D1FAE5", stroke: "#34D399", expandedBg: "#D1FAE5", text: "#065F46" }; // Emerald
      } else if (current.data.name === "After-Sales Service") {
        return { bg: "#FFF1F2", hover: "#FFE4E6", stroke: "#FB7185", expandedBg: "#FFE4E6", text: "#9F1239" }; // Rose
      } else if (current.data.name === "Boutique Admin") {
        return { bg: "#FFFBEB", hover: "#FEF3C7", stroke: "#FBBF24", expandedBg: "#FEF3C7", text: "#92400E" }; // Amber
      } else if (current.data.name === "Sales Associate") {
        return { bg: "#EFF6FF", hover: "#DBEAFE", stroke: "#60A5FA", expandedBg: "#DBEAFE", text: "#1E40AF" }; // Blue
      }
      // Root node (CF1) - Hutch Dark Charcoal
      return { bg: "#1A1A1A", hover: "#2D2D2D", stroke: "#1A1A1A", expandedBg: "#2D2D2D", text: "#FFFFFF" }; // Dark Root
    };

    function update(source: any) {
      const treeData = tree(root);
      const nodes = treeData.descendants();
      const links = treeData.links();

      const node = g.selectAll('g.node')
        .data(nodes, (d: any) => d.id || (d.id = ++i));

      const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", (d: any) => `translate(${source.x0},${source.y0})`)
        .on('click', (event, d: any) => {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update(d);
        });

      nodeEnter.append('rect')
        .attr('width', 240)
        .attr('height', 90)
        .attr('x', -120)
        .attr('y', -45)
        .attr('rx', 12)
        .attr('ry', 12)
        .style("fill", (d: any) => {
          const colors = getNodeColors(d);
          return d._children ? colors.expandedBg : (d.depth === 0 ? "#1A1A1A" : colors.bg);
        })
        .style("stroke", (d: any) => {
          const colors = getNodeColors(d);
          return d._children ? colors.hover : colors.stroke;
        })
        .style("stroke-width", (d: any) => d.depth === 0 ? 3 : 2)
        .style("cursor", "pointer")
        .style("filter", "drop-shadow(0 4px 6px rgba(0,0,0,0.05))")
        .on("mouseover", function(event, d: any) {
          const colors = getNodeColors(d);
          d3.select(this)
            .style("stroke", colors.stroke)
            .style("fill", colors.hover)
            .style("filter", "drop-shadow(0 10px 15px rgba(0,0,0,0.1))");
        })
        .on("mouseout", function(event, d: any) {
          const colors = getNodeColors(d);
          d3.select(this)
            .style("fill", d._children ? colors.expandedBg : (d.depth === 0 ? "#1A1A1A" : colors.bg))
            .style("stroke", d._children ? colors.hover : colors.stroke)
            .style("filter", "drop-shadow(0 4px 6px rgba(0,0,0,0.05))");
        });

      nodeEnter.append('text')
        .attr('y', -15)
        .attr('text-anchor', 'middle')
        .style("fill", (d: any) => d.depth === 0 ? "#FFFFFF" : getNodeColors(d).text)
        .style("font-family", "var(--font-sans)")
        .style("font-size", (d: any) => d.depth === 0 ? "16px" : "14px")
        .style("font-weight", "600")
        .style("pointer-events", "none")
        .text((d: any) => d.data.name);

      nodeEnter.append('foreignObject')
        .attr('x', -110)
        .attr('y', 0)
        .attr('width', 220)
        .attr('height', 40)
        .style("pointer-events", "none")
        .append('xhtml:div')
        .style('color', (d: any) => d.depth === 0 ? '#E8E4DF' : '#6B6B6B')
        .style('font-family', 'var(--font-sans)')
        .style('font-size', '11.5px')
        .style('text-align', 'center')
        .style('line-height', '1.3')
        .style('display', 'flex')
        .style('align-items', 'flex-start')
        .style('justify-content', 'center')
        .style('height', '100%')
        .html((d: any) => d.data.desc || "");

      const nodeUpdate = nodeEnter.merge(node as any);

      nodeUpdate.transition()
        .duration(500)
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);

      nodeUpdate.select('rect')
        .style("fill", (d: any) => {
          const colors = getNodeColors(d);
          return d._children ? colors.expandedBg : (d.depth === 0 ? "#1A1A1A" : colors.bg);
        })
        .style("stroke", (d: any) => {
          const colors = getNodeColors(d);
          return d._children ? colors.hover : colors.stroke;
        });

      const nodeExit = node.exit().transition()
        .duration(500)
        .attr("transform", (d: any) => `translate(${source.x},${source.y})`)
        .remove();

      nodeExit.select('rect').attr('width', 0).attr('height', 0);
      nodeExit.select('text').style('fill-opacity', 0);

      const link = g.selectAll('path.link')
        .data(links, (d: any) => d.target.id);

      const linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .style("fill", "none")
        .style("stroke", (d: any) => {
           // Color the link based on the target node's theme
           const colors = getNodeColors(d.target);
           return colors.stroke;
        })
        .style("stroke-width", "2px")
        .attr('d', (d) => {
          const o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

      const linkUpdate = linkEnter.merge(link as any);

      linkUpdate.transition()
        .duration(500)
        .attr('d', (d: any) => diagonal(d.source, d.target));

      const linkExit = link.exit().transition()
        .duration(500)
        .attr('d', (d) => {
          const o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      nodes.forEach((d: any) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    function diagonal(s: any, d: any) {
      return `M ${s.x} ${s.y + 38}
              C ${s.x} ${(s.y + 38 + d.y - 38) / 2},
                ${d.x} ${(s.y + 38 + d.y - 38) / 2},
                ${d.x} ${d.y - 38}`;
    }

    update(root);

  }, [isMounted]);

  if (!isMounted) return <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center text-[#C9540A] font-playfair">Loading Ecosystem...</div>;

  return (
    <main className="h-screen w-screen bg-[#FAF8F5] font-sans text-[#1A1A1A] relative overflow-hidden flex flex-col">
      
      <header className="relative z-20 px-8 py-6 border-b border-[#E8E4DF] bg-white/90 backdrop-blur-md flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A]">
            <span className="font-sans font-semibold tracking-tight text-[#1A1A1A]">Unified</span> <span className="italic text-[#C9540A]">RSMS</span> Architecture
          </h1>
          <p className="text-[#6B6B6B] text-sm mt-2 font-sans max-w-2xl">
            Creating <span className="italic text-[#C9540A]">Interiors</span> That Inspire Living. Innovation features (CF, IF, F, BF, & SF) are highlighted in Terracotta.
          </p>
        </div>
        <div className="hidden md:flex gap-4 border border-[#E8E4DF] px-5 py-2.5 rounded-full bg-white flex-wrap max-w-2xl justify-end shadow-sm">
           <div className="flex items-center gap-2 text-xs font-semibold text-[#1A1A1A] uppercase tracking-wide">
             <div className="w-3 h-3 rounded-full bg-[#C9540A]"></div> Innovation
           </div>
           <div className="flex items-center gap-2 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wide">
             <div className="w-3 h-3 rounded-full bg-[#818CF8]"></div> Corporate
           </div>
           <div className="flex items-center gap-2 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wide">
             <div className="w-3 h-3 rounded-full bg-[#34D399]"></div> Inventory
           </div>
           <div className="flex items-center gap-2 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wide">
             <div className="w-3 h-3 rounded-full bg-[#FB7185]"></div> After-Sales
           </div>
           <div className="flex items-center gap-2 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wide">
             <div className="w-3 h-3 rounded-full bg-[#FBBF24]"></div> Boutique
           </div>
           <div className="flex items-center gap-2 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wide">
             <div className="w-3 h-3 rounded-full bg-[#60A5FA]"></div> Sales
           </div>
        </div>
      </header>

      {/* Unified Full Screen Container */}
      <div ref={containerRef} className="flex-1 w-full relative z-10 cursor-grab active:cursor-grabbing">
        <svg ref={svgRef} className="w-full h-full block"></svg>
      </div>
    </main>
  );
}
