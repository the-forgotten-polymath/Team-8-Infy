const fs = require('fs');
const file = 'c:/Users/hp/Desktop/RSMS/corporate-workflow-visualizer/src/app/page.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

const afterSalesReplacement = `const afterSalesTreeData = {
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
};`;

let startIdx = lines.findIndex(l => l.startsWith('const afterSalesTreeData = {'));
let endIdx = lines.findIndex((l, i) => i > startIdx && l.startsWith('const boutiqueAdminTreeData = {'));
// The end index should be right before the comment for boutiqueAdminTreeData
let commentIdx = lines.findIndex((l, i) => i > startIdx && l.includes('// --- FULL COMPLETE DATA: Boutique Command Center (Boutique Admin) ---'));

if (startIdx !== -1 && commentIdx !== -1) {
    let newLines = [...lines.slice(0, startIdx), afterSalesReplacement, '', ...lines.slice(commentIdx)];
    fs.writeFileSync(file, newLines.join('\n'));
    console.log('Successfully replaced afterSalesTreeData');
} else {
    console.log('Failed to find boundaries');
}
