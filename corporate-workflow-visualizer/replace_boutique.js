const fs = require('fs');
const file = 'c:/Users/hp/Desktop/RSMS/corporate-workflow-visualizer/src/app/page.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

const boutiqueAdminReplacement = `const boutiqueAdminTreeData = {
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
};`;

let startIdx = lines.findIndex(l => l.startsWith('const boutiqueAdminTreeData = {'));
let endIdx = lines.findIndex((l, i) => i > startIdx && l.startsWith('const salesAssociateTreeData = {'));
let commentIdx = lines.findIndex((l, i) => i > startIdx && l.includes('// --- FULL COMPLETE DATA: Sales Associate (Client Advisor) ---'));

if (startIdx !== -1 && commentIdx !== -1) {
    let newLines = [...lines.slice(0, startIdx), boutiqueAdminReplacement, '', ...lines.slice(commentIdx)];
    fs.writeFileSync(file, newLines.join('\n'));
    console.log('Successfully replaced boutiqueAdminTreeData');
} else {
    console.log('Failed to find boundaries for Boutique Admin');
}
