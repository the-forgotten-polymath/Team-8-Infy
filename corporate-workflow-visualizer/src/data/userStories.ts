export type MoscowPriority = 'Must have' | 'Should have' | 'Could have' | 'Won\'t have';
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
  {
    "id": "I1-US01",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to scan multiple barcodes in a single camera frame so that I can count inventory 10x faster than manual scanning.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 1
  },
  {
    "id": "I1-US02",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want the system to process item-level RFID scans so that I can instantly reconcile physical vs. system inventory.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 2
  },
  {
    "id": "I1-US03",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want the system to automatically flag missing items, unexpected items, wrong-location items, and duplicate scans so that exceptions are caught immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 3
  },
  {
    "id": "I1-US04",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to see real-time shrink analytics after each scan session so that I can identify loss patterns.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 4
  },
  {
    "id": "I1-US05",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want the system to generate an Inventory Validation Report comparing System vs Physical inventory so that I have an auditable record.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 5
  },
  {
    "id": "I1-US06",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to scan product barcodes using only iPhone/iPad camera (no external hardware) so that setup is zero-cost.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 6
  },
  {
    "id": "I1-US07",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want to see an Inventory Heatmap showing accuracy by store zone (Green/Yellow/Red) so that I can instantly see problem areas.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 7
  },
  {
    "id": "I1-US08",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to scan NFC/RFID tags using the device's NFC reader so that I can verify individual high-value items.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 8
  },
  {
    "id": "I1-US09",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want scan sessions to automatically update the Product Digital Twin for each verified item so that the timeline stays current.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 9
  },
  {
    "id": "I1-US10",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want aggregated scan accuracy data across all stores so that I can compare performance.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 10
  },
  {
    "id": "I2-US01",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to scan an incoming shipment and have the system auto-match against the ASN so that I don't manually reconcile.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 11
  },
  {
    "id": "I2-US02",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want the system to highlight discrepancies (missing, damaged, extra items) between ASN and received shipment so that I can create exception cases.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 12
  },
  {
    "id": "I2-US03",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to capture photos of received items and any damage so that I have visual evidence for disputes.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 13
  },
  {
    "id": "I2-US04",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to initiate an inter-store transfer with items, destination, and expected delivery date so that I can move stock.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 14
  },
  {
    "id": "I2-US05",
    "section": "Inventory Intelligence OS",
    "story": "As a receiving store, I want to confirm receipt of transferred items and flag any discrepancies so that chain of custody is complete.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 15
  },
  {
    "id": "I2-US06",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to create vendor return requests with reason codes and supporting photos so that the process is documented.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 16
  },
  {
    "id": "I2-US07",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want to see all active transfers with real-time status (Created / In Transit / Received / Exception) so that I can track movements.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 17
  },
  {
    "id": "I2-US08",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want each received product to automatically generate a Product Digital Twin so that every item has a digital identity from day one.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 18
  },
  {
    "id": "I2-US09",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want the system to auto-capture serial numbers during receiving and link them to the Product Digital Twin so that provenance starts at intake.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 19
  },
  {
    "id": "I2-US10",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want to see ASN match rates per supplier so that I can identify problematic vendors.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 20
  },
  {
    "id": "I3-US01",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to execute scheduled cycle counts by zone so that I can systematically verify all inventory.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 21
  },
  {
    "id": "I3-US02",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want real-time variance detection during counting so that discrepancies are caught immediately, not after the fact.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 22
  },
  {
    "id": "I3-US03",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want to review and approve all variances with my digital signature so that accountability is maintained.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 23
  },
  {
    "id": "I3-US04",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want immutable audit trails for every count, including who counted, when, on which device, what variance was found, and who approved.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 24
  },
  {
    "id": "I3-US05",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want to schedule recurring cycle counts (daily, weekly, monthly) for specific zones so that counting is systematic.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 25
  },
  {
    "id": "I3-US06",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want a Confidence Score after each count showing inventory accuracy percentage and letter grade (A+ to F) so that I know the state of my store.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 26
  },
  {
    "id": "I3-US07",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want to compare Confidence Scores across all stores so that I can identify underperformers.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 27
  },
  {
    "id": "I3-US08",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to use Vision multi-barcode scanning during cycle counts so that counting is fast.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 28
  },
  {
    "id": "I3-US09",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want count results to automatically update Product Digital Twins for verified items so that the timeline stays current.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 29
  },
  {
    "id": "I3-US10",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want to set audit compliance policies (minimum count frequency, mandatory zones) so that standards are enforced.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 30
  },
  {
    "id": "I4-US01",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to capture the serial number of each high-value item during receiving so that every item has a unique identifier.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 31
  },
  {
    "id": "I4-US02",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want the system to auto-generate a Product Digital Twin for each serialized item so that its digital identity begins at intake.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 32
  },
  {
    "id": "I4-US03",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to automatically link/print a localized Certificate of Authenticity for each item so that the certificate is available at point of sale.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 33
  },
  {
    "id": "I4-US04",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to scan RFID/NFC tags and associate them with the Product Digital Twin so that items can be tracked electronically.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 34
  },
  {
    "id": "I4-US05",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want to view the complete Product Digital Twin timeline for any item in my store so that I can see its full history.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 35
  },
  {
    "id": "I4-US06",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want to search any product by serial number across all stores and see its passport so that I have network-wide visibility.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 36
  },
  {
    "id": "I4-US07",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want the Certificate of Authenticity to include a QR code that links to the product's digital passport so that authenticity can be verified externally.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 37
  },
  {
    "id": "I4-US08",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to capture photos of each item during serialization so that the passport has a visual baseline.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 38
  },
  {
    "id": "I4-US09",
    "section": "Inventory Intelligence OS",
    "story": "As a customer (post-purchase), I want to access my product's passport via the Customer Portal so that I have a complete ownership record.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 39
  },
  {
    "id": "I4-US10",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want serialization compliance reporting (% of items with complete passports) so that I can enforce standards.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 40
  },
  {
    "id": "I5-US01",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to create a service shipment when an item needs to be sent to a repair center so that I can track the outbound movement.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 41
  },
  {
    "id": "I5-US02",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to track shipment status in real-time (Packed / Shipped / In Transit / Delivered / Returned) so that I know where the item is.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 42
  },
  {
    "id": "I5-US03",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want SLA tracking on each service shipment so that I'm alerted if delivery deadlines are at risk.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 43
  },
  {
    "id": "I5-US04",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to issue a loaner item to a customer when their item goes for repair, linking the loaner to the AST.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 44
  },
  {
    "id": "I5-US05",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want to track all outstanding loaners with expected return dates so that I can follow up on overdue loaners.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 45
  },
  {
    "id": "I5-US06",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want loaner return to be recorded with condition verification so that damage is caught.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 46
  },
  {
    "id": "I5-US07",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want to see the complete Asset Journey (Store → Service Center → Technician → QA → Store) for each item in service.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 47
  },
  {
    "id": "I5-US08",
    "section": "Inventory Intelligence OS",
    "story": "As an inventory controller, I want the Product Digital Twin to be updated when an item is shipped to/from service so that the timeline reflects the movement.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 48
  },
  {
    "id": "I5-US09",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want a loaner inventory dashboard showing total loaners, available, issued, and overdue.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 49
  },
  {
    "id": "I5-US10",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want service logistics SLA compliance metrics across all stores.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 50
  },
  {
    "id": "I6-US01",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want a single Inventory Health Score for my store so that I have one metric to track.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 51
  },
  {
    "id": "I6-US02",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want to compare inventory accuracy, shrink, and compliance across all stores so that I can benchmark.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 52
  },
  {
    "id": "I6-US03",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want to see shrink analytics broken down by type (theft, damage, administrative, vendor) and trend over time.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 53
  },
  {
    "id": "I6-US04",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want transfer efficiency metrics (average time, completion rate, exception rate) so that I can optimize logistics.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 54
  },
  {
    "id": "I6-US05",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want AI-powered stockout risk predictions so that I can act proactively.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 55
  },
  {
    "id": "I6-US06",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want smart replenishment suggestions (Store A overstocked, Store B understocked → suggest transfer) so that stock is balanced.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 56
  },
  {
    "id": "I6-US07",
    "section": "Inventory Intelligence OS",
    "story": "As a boutique manager, I want cycle count compliance tracking (scheduled vs completed, on-time rate) so that I can enforce standards.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 57
  },
  {
    "id": "I6-US08",
    "section": "Inventory Intelligence OS",
    "story": "As a corporate admin, I want to export inventory analytics as PDF or CSV for board reporting.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 58
  },
  {
    "id": "E1-US01",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to create a new AST by searching for or scanning the customer's profile so that I can link the ticket to existing customer data.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 59
  },
  {
    "id": "E1-US02",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to identify the product by serial number, RFID scan, or barcode so that I can pull product details automatically.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 60
  },
  {
    "id": "E1-US03",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to capture multiple high-resolution photos of the product using the device camera so that I can document the current condition.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 61
  },
  {
    "id": "E1-US04",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want the system to run AI-powered condition analysis on captured photos so that scratches, discoloration, cracks, and missing parts are auto-detected.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 62
  },
  {
    "id": "E1-US05",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to validate warranty status by serial number so that I know if the repair is covered or chargeable.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 63
  },
  {
    "id": "E1-US06",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to add diagnostic notes and select the issue category so that the repair team has full context.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 64
  },
  {
    "id": "E1-US07",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want a confirmation summary screen before finalizing the AST so that I can review all captured data.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 65
  },
  {
    "id": "E1-US08",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want the system to auto-generate a unique Ticket ID in a human-readable format (e.g., `AST-2026-DLH-00123`) so that it's easy to reference.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 66
  },
  {
    "id": "E1-US09",
    "section": "After-Sales Service",
    "story": "As a boutique manager, I want to receive a notification when a new AST is created so that I'm aware of incoming service requests.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 67
  },
  {
    "id": "E1-US10",
    "section": "After-Sales Service",
    "story": "As a customer, I want to receive a confirmation (push/SMS/email) that my item has been received for service so that I have a record.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 68
  },
  {
    "id": "E2-US01",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to review the diagnostic report and create a cost estimate with itemized parts and labor so that the customer can approve.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 69
  },
  {
    "id": "E2-US02",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want the estimate to auto-calculate total cost including tax so that pricing is accurate.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 70
  },
  {
    "id": "E2-US03",
    "section": "After-Sales Service",
    "story": "As a customer, I want to receive the estimate digitally and approve/reject with one tap so that I don't need phone calls.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 71
  },
  {
    "id": "E2-US04",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to allocate required parts from inventory with availability checks so that repair can begin.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 72
  },
  {
    "id": "E2-US05",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to track repair stages with timestamps so that I have a complete audit trail.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 73
  },
  {
    "id": "E2-US06",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want a mandatory QA checklist before marking repair as complete so that quality is ensured.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 74
  },
  {
    "id": "E2-US07",
    "section": "After-Sales Service",
    "story": "As a customer, I want to see a visual repair timeline (like parcel tracking) showing each completed stage so that I have full transparency.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 75
  },
  {
    "id": "E2-US08",
    "section": "After-Sales Service",
    "story": "As a boutique manager, I want to see all active repairs with stage, SLA status, and assigned technician so that I can manage workload.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 76
  },
  {
    "id": "E2-US09",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to capture before and after photos at each stage so that repair quality is documented.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 77
  },
  {
    "id": "E2-US10",
    "section": "After-Sales Service",
    "story": "As a boutique manager, I want to reassign a repair to a different technician so that I can balance workload.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 78
  },
  {
    "id": "E3-US01",
    "section": "After-Sales Service",
    "story": "As a customer, I want to receive a push notification with a deep link when my estimate is ready so that I can approve immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 79
  },
  {
    "id": "E3-US02",
    "section": "After-Sales Service",
    "story": "As a customer, I want to view my repair estimate with itemized breakdown in the portal so that I understand the costs.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 80
  },
  {
    "id": "E3-US03",
    "section": "After-Sales Service",
    "story": "As a customer, I want to approve or reject the estimate with one tap so that the process is frictionless.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 81
  },
  {
    "id": "E3-US04",
    "section": "After-Sales Service",
    "story": "As a customer, I want to pay online via Apple Pay or credit card so that I don't need to visit the store.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 82
  },
  {
    "id": "E3-US05",
    "section": "After-Sales Service",
    "story": "As a customer, I want to see real-time repair status with visual timeline so that I know exactly where my item is.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 83
  },
  {
    "id": "E3-US06",
    "section": "After-Sales Service",
    "story": "As a customer, I want to view before/after photos of my repair so that I can see the quality of work.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 84
  },
  {
    "id": "E3-US07",
    "section": "After-Sales Service",
    "story": "As a customer, I want to message the service team directly from the portal so that I can ask questions.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 85
  },
  {
    "id": "E3-US08",
    "section": "After-Sales Service",
    "story": "As a customer, I want to download repair documents (invoice, QA report, warranty update) so that I have records.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 86
  },
  {
    "id": "E3-US09",
    "section": "After-Sales Service",
    "story": "As a customer, I want notifications at each major milestone (received, estimate ready, repair started, completed, ready for pickup) so that I'm always informed.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 87
  },
  {
    "id": "E3-US10",
    "section": "After-Sales Service",
    "story": "As a customer, I want to schedule my pickup directly from the portal so that it's convenient.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 88
  },
  {
    "id": "E4-US01",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to look up warranty status by serial number so that I can determine coverage.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 89
  },
  {
    "id": "E4-US02",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to see warranty details including type (standard/extended), coverage period, and terms so that I can advise the customer.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 90
  },
  {
    "id": "E4-US03",
    "section": "After-Sales Service",
    "story": "As a customer, I want to request product authentication through the store so that I can verify my item's authenticity.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 91
  },
  {
    "id": "E4-US04",
    "section": "After-Sales Service",
    "story": "As a boutique manager, I want to submit authentication requests to corporate with supporting photos and documents so that the review process is structured.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 92
  },
  {
    "id": "E4-US05",
    "section": "After-Sales Service",
    "story": "As a corporate admin, I want to review authentication requests and issue digital certificates so that authenticity is officially confirmed.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 93
  },
  {
    "id": "E4-US06",
    "section": "After-Sales Service",
    "story": "As a customer, I want to request a valuation letter for insurance, resale, or estate purposes so that I have official documentation.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 94
  },
  {
    "id": "E4-US07",
    "section": "After-Sales Service",
    "story": "As a corporate admin, I want to review valuation requests with product history and issue official valuation letters so that the brand's authority is maintained.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 95
  },
  {
    "id": "E4-US08",
    "section": "After-Sales Service",
    "story": "As a customer, I want to receive my authentication certificate and valuation letter digitally so that I have instant access.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 96
  },
  {
    "id": "E4-US09",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to extend a customer's warranty upon completion of authorized service so that records stay current.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 97
  },
  {
    "id": "E4-US10",
    "section": "After-Sales Service",
    "story": "As a corporate admin, I want to see a dashboard of all authentication and valuation requests with status tracking so that I can manage the queue.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 98
  },
  {
    "id": "E5-US01",
    "section": "After-Sales Service",
    "story": "As a customer, I want to choose between in-store pickup or courier delivery so that I can receive my repaired item conveniently.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 99
  },
  {
    "id": "E5-US02",
    "section": "After-Sales Service",
    "story": "As a customer, I want to select a preferred date and time slot for pickup so that I can plan accordingly.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 100
  },
  {
    "id": "E5-US03",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want the system to auto-generate return documentation (repair summary, QA report, packaging slip, invoice, warranty update) so that paperwork is eliminated.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 101
  },
  {
    "id": "E5-US04",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want the system to recommend appropriate packaging based on product category so that items are safely returned.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 102
  },
  {
    "id": "E5-US05",
    "section": "After-Sales Service",
    "story": "As a customer, I want to track my courier shipment in real-time with a tracking number so that I know when to expect delivery.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 103
  },
  {
    "id": "E5-US06",
    "section": "After-Sales Service",
    "story": "As an after-sales specialist, I want to record the handoff with timestamp, photos, and digital signature so that chain of custody is complete.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 104
  },
  {
    "id": "E5-US07",
    "section": "After-Sales Service",
    "story": "As a boutique manager, I want to see a list of all items ready for pickup with scheduled dates so that I can manage daily operations.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 105
  },
  {
    "id": "E5-US08",
    "section": "After-Sales Service",
    "story": "As a customer, I want to receive all return documents digitally (PDF) so that I have a complete record.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 106
  },
  {
    "id": "E6-US01",
    "section": "After-Sales Service",
    "story": "As a boutique manager, I want to see average repair turnaround time so that I can identify bottlenecks.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 107
  },
  {
    "id": "E6-US02",
    "section": "After-Sales Service",
    "story": "As a corporate admin, I want to compare repair performance across stores so that I can benchmark.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 108
  },
  {
    "id": "E6-US03",
    "section": "After-Sales Service",
    "story": "As a corporate admin, I want to see the most frequently repaired products so that I can identify quality issues.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 109
  },
  {
    "id": "E6-US04",
    "section": "After-Sales Service",
    "story": "As a boutique manager, I want to see QA failure rates so that I can address quality concerns.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 110
  },
  {
    "id": "E6-US05",
    "section": "After-Sales Service",
    "story": "As a corporate admin, I want AI-powered predictions for SLA breach risk so that I can act proactively.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 111
  },
  {
    "id": "E6-US06",
    "section": "After-Sales Service",
    "story": "As a corporate admin, I want to see warranty claim trends so that I can forecast costs.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 112
  },
  {
    "id": "E6-US07",
    "section": "After-Sales Service",
    "story": "As a boutique manager, I want a Repair Health Score for my store so that I have a single performance metric.",
    "moscow": "Could have",
    "risk": "Low",
    "businessValue": "Medium",
    "interdependency": "Core Platform",
    "priority": 113
  },
  {
    "id": "E6-US08",
    "section": "After-Sales Service",
    "story": "As a corporate admin, I want to see predictive parts demand forecasting so that I can optimize inventory.",
    "moscow": "Could have",
    "risk": "Low",
    "businessValue": "Medium",
    "interdependency": "Core Platform",
    "priority": 114
  },
  {
    "id": "B1-US01",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see today's revenue vs target with a clear visual indicator so that I can assess performance at a glance.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 115
  },
  {
    "id": "B1-US02",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see a single Boutique Health Score (0–100) with the top 3 issues and top 3 recommendations so that I know exactly where to focus.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 116
  },
  {
    "id": "B1-US03",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see today's appointment count and completion status so that I can track client engagement.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 117
  },
  {
    "id": "B1-US04",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see which VIP clients are expected or present in-store today so that I can ensure they receive the right level of service.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 118
  },
  {
    "id": "B1-US05",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see staff on shift vs scheduled so that I can spot understaffing immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 119
  },
  {
    "id": "B1-US06",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see stock alert count (low stock, stockouts, shrink risk) from the Inventory module so that I can act before a stockout loses a sale.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 120
  },
  {
    "id": "B1-US07",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see open repair count and SLA-at-risk repairs from the After-Sales module so that I can escalate before client satisfaction is impacted.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 121
  },
  {
    "id": "B1-US08",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want a configurable widget layout so that I can prioritise what matters most to my store.",
    "moscow": "Could have",
    "risk": "Low",
    "businessValue": "Medium",
    "interdependency": "Core Platform",
    "priority": 122
  },
  {
    "id": "B1-US09",
    "section": "Boutique Admin",
    "story": "As an area manager, I want to switch between stores I oversee and see each store's health score so that I can identify underperformers.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 123
  },
  {
    "id": "B1-US10",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to tap any dashboard card to drill into the detail view for that domain so that the dashboard is a navigation hub, not just a summary.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 124
  },
  {
    "id": "B2-US01",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to create and publish weekly shift schedules, assign staff to shifts, and set role constraints so that coverage is always planned.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 125
  },
  {
    "id": "B2-US02",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to view each associate's performance metrics (revenue, conversion, AOV, appointments, follow-ups) so that I can coach effectively.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 126
  },
  {
    "id": "B2-US03",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to set revenue targets and performance goals per associate per week/month so that individual accountability is clear.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 127
  },
  {
    "id": "B2-US04",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want the system to dynamically calculate associate commissions based on configurable rules (flat rate, tiered, brand-weighted, bonus triggers) so that commission processing is accurate and automatic.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 128
  },
  {
    "id": "B2-US05",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see AI-generated coaching alerts (\"Associate A has high traffic but low conversion — recommend upselling training\") so that I can act on underperformance early.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 129
  },
  {
    "id": "B2-US06",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want the AI Workforce Optimizer to predict next week's traffic and suggest headcount adjustments so that I am never understaffed.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 130
  },
  {
    "id": "B2-US07",
    "section": "Boutique Admin",
    "story": "As a boutique manager, when a VIP client books an appointment, I want the system to suggest the best available advisor based on their past relationship, language, and expertise so that the match is optimal.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 131
  },
  {
    "id": "B2-US08",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to view month-to-date commission summaries per associate and export a payroll report so that finance can process commissions.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 132
  },
  {
    "id": "B2-US09",
    "section": "Boutique Admin",
    "story": "As an area manager, I want to compare advisor performance across all stores in my region so that I can identify best practices.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 133
  },
  {
    "id": "B2-US10",
    "section": "Boutique Admin",
    "story": "As a sales associate, I want to view my own performance metrics and commission breakdown so that I can self-manage.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 134
  },
  {
    "id": "B3-US01",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to photograph a display area and have the app automatically compare it against the corporate planogram so that compliance checking is instant.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 135
  },
  {
    "id": "B3-US02",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see a compliance score (0–100%) per display zone so that I know exactly which areas need attention.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 136
  },
  {
    "id": "B3-US03",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want the Vision system to detect missing products, wrong positions, incorrect displays, and outdated collections so that every violation is captured.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 137
  },
  {
    "id": "B3-US04",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to view the corporate planogram side-by-side with my compliance photo so that corrections are unambiguous.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 138
  },
  {
    "id": "B3-US05",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to add a correction note and re-photograph after fixing a violation so that I can close compliance issues with evidence.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 139
  },
  {
    "id": "B3-US06",
    "section": "Boutique Admin",
    "story": "As a corporate admin, I want to upload updated planogram reference images and layouts for each store so that compliance is always measured against the latest standard.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 140
  },
  {
    "id": "B3-US07",
    "section": "Boutique Admin",
    "story": "As a corporate admin, I want to see compliance scores across all stores so that I can identify stores consistently failing visual standards.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 141
  },
  {
    "id": "B3-US08",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to access the lookbook for the current season so that staff can reference collection styling standards.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 142
  },
  {
    "id": "B3-US09",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want historical compliance scores charted over time so that I can see improvement trends.",
    "moscow": "Could have",
    "risk": "Low",
    "businessValue": "Medium",
    "interdependency": "Core Platform",
    "priority": 143
  },
  {
    "id": "B3-US10",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want compliance check results to feed into the Boutique Health Score automatically so that the health score reflects visual standards.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 144
  },
  {
    "id": "B4-US01",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to create a VIP event with a name, date, venue, capacity, dress code, and description so that the event is fully structured.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 145
  },
  {
    "id": "B4-US02",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want the AI to recommend which clients to invite based on brand affinity, purchase history, wishlist alignment, and relationship health score so that the right VIPs attend.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 146
  },
  {
    "id": "B4-US03",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to send personalised digital invitations to selected guests via push, email, SMS, or WhatsApp so that invitations feel premium and reach every channel.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 147
  },
  {
    "id": "B4-US04",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to track RSVPs in real time (accepted, declined, no response) and send automated reminders to non-responders so that attendance is maximised.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 148
  },
  {
    "id": "B4-US05",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to check in guests on the day using a QR-code scan so that attendance is accurately tracked.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 149
  },
  {
    "id": "B4-US06",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want the system to automatically attribute purchases made on event day (or within 7 days) by attending guests to the event so that I can compute true revenue and ROI.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 150
  },
  {
    "id": "B4-US07",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see a post-event report showing guests invited, attended, revenue generated, and ROI so that I can present results to corporate.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 151
  },
  {
    "id": "B4-US08",
    "section": "Boutique Admin",
    "story": "As a corporate admin, I want to see event ROI across all stores and event types so that I can allocate event budget more effectively.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 152
  },
  {
    "id": "B4-US09",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want event attendance to be logged as an event on the attendee's Client Digital Twin so that the relationship history is complete.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 153
  },
  {
    "id": "B4-US10",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to create a follow-up opportunity for every attendee who did not purchase at the event so that no lead is wasted.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 154
  },
  {
    "id": "B5-US01",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see a daily inventory operations summary (today's receipts, pending put-away, transfer requests, open variances, cycle count status) so that I have a complete operations picture.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 155
  },
  {
    "id": "B5-US02",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to be notified of any inventory variance above the configured threshold so that I can review and approve or investigate immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 156
  },
  {
    "id": "B5-US03",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to approve, reject, or escalate variance resolutions with a reason and audit trail so that every adjustment is authorised and traceable.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 157
  },
  {
    "id": "B5-US04",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see a Unified Approval Center containing every pending approval — inventory variance, discount request, refund, transfer — in a single prioritised inbox so that nothing is missed.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 158
  },
  {
    "id": "B5-US05",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to approve or reject inter-store transfer requests with comments so that transfers are controlled.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 159
  },
  {
    "id": "B5-US06",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see the current cycle count schedule and the status of any in-progress count so that audits are on track.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 160
  },
  {
    "id": "B5-US07",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see open repair tickets and those approaching SLA breach so that I can escalate to the After-Sales team before a client is impacted.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 161
  },
  {
    "id": "B5-US08",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to see authentication and valuation requests pending corporate response so that I can set client expectations.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 162
  },
  {
    "id": "B5-US09",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to be notified of shrink risk items identified by the Inventory Controller so that I can initiate an investigation.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 163
  },
  {
    "id": "B5-US10",
    "section": "Boutique Admin",
    "story": "As an area manager, I want to see pending approvals across all stores I manage so that critical items are not bottlenecked.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 164
  },
  {
    "id": "B6-US01",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to ask \"Why are sales down today?\" and receive a specific, data-backed explanation (not just a chart).",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 165
  },
  {
    "id": "B6-US02",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to ask \"Which associates need coaching?\" and receive ranked, reason-backed suggestions.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 166
  },
  {
    "id": "B6-US03",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to ask \"Which products should I transfer from another store?\" and receive specific SKU recommendations with demand reasoning.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 167
  },
  {
    "id": "B6-US04",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to ask \"Which VIP clients should I focus on this week?\" and receive a ranked list with context (anniversary, wishlist, repair completed).",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 168
  },
  {
    "id": "B6-US05",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to ask \"What is hurting our Boutique Health Score?\" and receive the top 3 issues with suggested actions.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 169
  },
  {
    "id": "B6-US06",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to receive a proactive daily insight at store opening without asking a question (\"Today's top 3 priorities\").",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 170
  },
  {
    "id": "B6-US07",
    "section": "Boutique Admin",
    "story": "As an area manager, I want to ask \"Which stores are underperforming this week and why?\" and receive a cross-store analysis.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 171
  },
  {
    "id": "B6-US08",
    "section": "Boutique Admin",
    "story": "As a boutique manager, I want to ask \"Summarise today's repairs\" and receive a concise operational summary.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 172
  },
  {
    "id": "C1-US01",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see the Retail Health Score for the entire network and for each individual store so that I know which stores need attention immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 173
  },
  {
    "id": "C1-US02",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see total network revenue vs target with store-level breakdown so that I can identify underperformers.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 174
  },
  {
    "id": "C1-US03",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see a visual store network map colour-coded by health score so that geographic performance patterns are instantly visible.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 175
  },
  {
    "id": "C1-US04",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see active promotion performance (revenue generated, conversion lift) across all stores so that I can pull or extend promotions in real time.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 176
  },
  {
    "id": "C1-US05",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see the network compliance status (planogram + pricing) with the count of critical violations so that I can prioritise compliance actions.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 177
  },
  {
    "id": "C1-US06",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see network-level After-Sales health (open repairs, SLA breach count) so that service quality issues are visible at the corporate level.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 178
  },
  {
    "id": "C1-US07",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see VIP client engagement metrics (retention rate, at-risk VIPs) across the network so that client relationship strategy can be informed.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 179
  },
  {
    "id": "C1-US08",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to tap any dashboard card to drill into the detailed intelligence view for that domain.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 180
  },
  {
    "id": "C1-US09",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want the AI Copilot to surface the most important insight or action for today at app open without me having to ask.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 181
  },
  {
    "id": "C1-US10",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to configure Retail Health Score component weights to reflect my organisation's strategic priorities.",
    "moscow": "Could have",
    "risk": "Low",
    "businessValue": "Medium",
    "interdependency": "Core Platform",
    "priority": 182
  },
  {
    "id": "C2-US01",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to create a product with all master data (name, SKU, category, brand, attributes, images) and have a Product Digital Twin automatically initialised so that every product is tracked from creation.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 183
  },
  {
    "id": "C2-US02",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to create and manage collections (a group of products tied to a season, brand, or occasion) and assign them to stores so that collections are launched systematically.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 184
  },
  {
    "id": "C2-US03",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to define assortment rules (which products/collections are available at which stores) so that inventory allocation is policy-driven.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 185
  },
  {
    "id": "C2-US04",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see the sell-through rate and revenue performance for every product and collection, sourced from the Product Digital Twin, so that I can make lifecycle decisions.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 186
  },
  {
    "id": "C2-US05",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to use the Assortment Intelligence Engine to get AI-recommended store placements for a new collection based on client profiles and local demand.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 187
  },
  {
    "id": "C2-US06",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to manage the product lifecycle (active, discontinued, clearance, archived) and have the status propagate to all stores automatically.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 188
  },
  {
    "id": "C2-US07",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to define serialisation rules per product type (when serial capture is mandatory) and have these rules enforce the Product Digital Twin creation workflow.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 189
  },
  {
    "id": "C2-US08",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to link authentication and warranty rules to a product at the master data level so that both the Inventory and After-Sales modules enforce them consistently.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 190
  },
  {
    "id": "C2-US09",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see a live product view showing: inventory across all stores, sales performance, repair history, and authenticity status — the Product Digital Twin — from one screen.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 191
  },
  {
    "id": "C2-US10",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to export a product performance report (sell-through, revenue, returns, repairs) for board-level presentations.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 192
  },
  {
    "id": "C3-US01",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to define base pricing rules and regional pricing variations per product/category so that the correct price is always applied at checkout regardless of store.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 193
  },
  {
    "id": "C3-US02",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to create time-limited promotional campaigns with a discount type, value, target products/categories, target stores, and date range so that promotions are systematically launched.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 194
  },
  {
    "id": "C3-US03",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to define product bundles (e.g., watch + strap + case = bundle price) so that cross-sell promotions are structured.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 195
  },
  {
    "id": "C3-US04",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to use the AI Promotion Simulator to forecast the revenue uplift, margin impact, and inventory draw-down of a planned promotion before publishing so that I never launch a margin-negative campaign.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 196
  },
  {
    "id": "C3-US05",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see a live promotion performance dashboard showing revenue generated, conversion lift, units sold, and ROI per promotion so that I can act on underperforming campaigns immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 197
  },
  {
    "id": "C3-US06",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to pause, extend, or terminate a promotion mid-campaign and have the change propagate to all store POS systems immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 198
  },
  {
    "id": "C3-US07",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see discount override rates per store and per associate so that pricing discipline is visible and I can act on abuse.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 199
  },
  {
    "id": "C3-US08",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to set maximum discount authority levels per role (associate threshold, manager threshold) so that the RBAC system enforces pricing discipline.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 200
  },
  {
    "id": "C3-US09",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see historical promotion comparisons (current vs prior campaigns of the same type) so that I can assess improvement.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 201
  },
  {
    "id": "C3-US10",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to export a promotion ROI report for finance and board-level presentations.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 202
  },
  {
    "id": "C4-US01",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see a network-wide compliance heatmap showing every store's planogram, pricing, and policy compliance score so that I can identify violations at a glance.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 203
  },
  {
    "id": "C4-US02",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to drill into any store on the heatmap and see the specific violations (missing display, wrong price, incomplete audit) so that I can direct corrective action.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 204
  },
  {
    "id": "C4-US03",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to upload and version-control planogram reference images per store and season so that compliance is always measured against the current standard.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 205
  },
  {
    "id": "C4-US04",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to define and manage warranty policies (coverage, duration, registration deadline) and have them automatically enforced in the Sales Associate POS and After-Sales module.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 206
  },
  {
    "id": "C4-US05",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to define authentication standards per product category and have them enforced in the Inventory Controller (serialisation) and After-Sales (authentication workflow).",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 207
  },
  {
    "id": "C4-US06",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to define repair SLA standards per service type and have them enforced in the After-Sales module with escalation to the Boutique Admin.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 208
  },
  {
    "id": "C4-US07",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to manage GDPR privacy settings (consent templates, data retention periods, right-to-erasure workflow) so that all modules comply with data privacy regulations.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 209
  },
  {
    "id": "C4-US08",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see an immutable audit trail of all compliance reviews, violation resolutions, and policy changes with timestamps and actor IDs.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 210
  },
  {
    "id": "C4-US09",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to set compliance score thresholds that trigger automatic escalation to Area Managers and Boutique Managers.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 211
  },
  {
    "id": "C4-US10",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to export a network-wide compliance report for regulatory purposes and board presentations.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 212
  },
  {
    "id": "C5-US01",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see network-wide sales analytics (revenue, conversion, AOV) broken down by store, collection, associate, and time period so that I can identify performance patterns.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 213
  },
  {
    "id": "C5-US02",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see inventory intelligence (stockout rate, shrink value, transfer efficiency, accuracy) across the network so that I can make sourcing and allocation decisions.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 214
  },
  {
    "id": "C5-US03",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see After-Sales service performance (repair SLA adherence, authentication request volume, warranty claim rate) across all stores so that service quality is monitored at the corporate level.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 215
  },
  {
    "id": "C5-US04",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see client retention analytics (12-month retention rate, VIP churn, new vs returning clients, lifetime value distribution) so that relationship strategy can be informed.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 216
  },
  {
    "id": "C5-US05",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see event intelligence (total event ROI across the network, attendance rates, revenue attribution) so that the event strategy can be optimised.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 217
  },
  {
    "id": "C5-US06",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see a unified explanation when a metric is underperforming (e.g., \"Revenue down 18% — root cause: inventory shortage + promotion underperformance + 3 VIP appointments cancelled\") so that I act on root causes, not symptoms.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 218
  },
  {
    "id": "C5-US07",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to compare store performance head-to-head on any metric so that benchmarks and best practices can be identified.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 219
  },
  {
    "id": "C5-US08",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to export any analytics view as a PDF or CSV report for board, finance, or regulatory purposes.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 220
  },
  {
    "id": "C5-US09",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to set performance alerts (e.g., if any store's conversion drops below 20%, notify me) so that I am proactively informed.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 221
  },
  {
    "id": "C5-US10",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to see AI-generated demand forecasts per product category per store for the next 30/60/90 days so that assortment and replenishment decisions are data-driven.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 222
  },
  {
    "id": "C6-US01",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to ask \"Which stores need attention this week?\" and receive a ranked list with specific reasons.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 223
  },
  {
    "id": "C6-US02",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to ask \"Why is the Cartier Love collection underperforming?\" and receive a cross-module causal analysis.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 224
  },
  {
    "id": "C6-US03",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to ask \"Which promotion generated the highest ROI last quarter?\" and receive an instant comparison.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 225
  },
  {
    "id": "C6-US04",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to ask \"Which VIP clients are at risk of churning?\" and receive a ranked list from the Client Digital Twin.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 226
  },
  {
    "id": "C6-US05",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to ask \"What inventory transfers should we initiate across the network?\" and receive specific SKU and store recommendations.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 227
  },
  {
    "id": "C6-US06",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to ask \"Summarise this week's repair SLA performance\" and receive a concise service quality summary.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 228
  },
  {
    "id": "C6-US07",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to receive a proactive daily enterprise intelligence briefing at 8am without asking a question.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 229
  },
  {
    "id": "C6-US08",
    "section": "Corporate Admin",
    "story": "As a corporate admin, I want to ask \"Which products should be marked for clearance?\" and receive an AI-driven sell-through analysis.",
    "moscow": "Could have",
    "risk": "Low",
    "businessValue": "Medium",
    "interdependency": "Core Platform",
    "priority": 230
  },
  {
    "id": "S1-US01",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to search for a client by name, phone, or email so that I can open their Client Digital Twin immediately when they arrive.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 231
  },
  {
    "id": "S1-US02",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see a client's full preference profile (brands, sizes, colours, occasions) so that I can personalise my presentation.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 232
  },
  {
    "id": "S1-US03",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see a client's complete Relationship Timeline (visits, purchases, repairs, events, wishlists) in one view so that I know their full history.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 233
  },
  {
    "id": "S1-US04",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see all products the client owns (linked to their Product Digital Twins) so that I can see their collection without asking.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 234
  },
  {
    "id": "S1-US05",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see the client's active wishlist so that I can surface items immediately during the visit.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 235
  },
  {
    "id": "S1-US06",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to create and update a client's privacy consent record so that GDPR compliance is always maintained.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 236
  },
  {
    "id": "S1-US07",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to record a new client profile with all preference fields so that the Client Digital Twin is created immediately at first visit.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 237
  },
  {
    "id": "S1-US08",
    "section": "Sales Associate",
    "story": "As a boutique manager, I want to see all active client relationships and upcoming anniversaries / birthdays so that I can prepare outreach.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 238
  },
  {
    "id": "S1-US09",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to add a wishlist item for a customer and be notified when it comes back in stock so that I never miss a sales opportunity.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 239
  },
  {
    "id": "S1-US10",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to log notes after each client interaction so that the next associate has full context.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 240
  },
  {
    "id": "S2-US01",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to book an appointment for a client with date, time, type (in-store/video), and assigned advisor so that visits are organised.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 241
  },
  {
    "id": "S2-US02",
    "section": "Sales Associate",
    "story": "As a sales associate, I want automated appointment reminders sent to the client (push/SMS/email) so that no-shows are reduced.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 242
  },
  {
    "id": "S2-US03",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see a pre-appointment briefing card showing the client's preferences, recent purchases, and wishlist before the meeting.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 243
  },
  {
    "id": "S2-US04",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to create a Curated Cart with selected products, styling notes, videos, and personal recommendations so that I can share it with the client before or after a consultation.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 244
  },
  {
    "id": "S2-US05",
    "section": "Sales Associate",
    "story": "As a client, I want to receive a private, branded link to a curated cart so that I can browse and purchase at my convenience.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 245
  },
  {
    "id": "S2-US06",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see when a client has viewed my curated cart so that I can follow up at the right time.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 246
  },
  {
    "id": "S2-US07",
    "section": "Sales Associate",
    "story": "As a boutique manager, I want to see all appointments for today and this week across all advisors so that I can manage staffing.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 247
  },
  {
    "id": "S2-US08",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to log video consultation notes and outcomes so that the interaction is captured in the Client Digital Twin.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 248
  },
  {
    "id": "S2-US09",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to convert a curated cart directly to a checkout when the client approves so that the purchase is seamless.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 249
  },
  {
    "id": "S2-US10",
    "section": "Sales Associate",
    "story": "As a corporate admin, I want to see appointment conversion rates per advisor and store so that I can measure effectiveness.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 250
  },
  {
    "id": "S3-US01",
    "section": "Sales Associate",
    "story": "As a sales associate, I want a guided digital catalogue filtered by the client's preferences (brand, category, colour) so that product discovery is personalised.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 251
  },
  {
    "id": "S3-US02",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to use a Look Builder to select an anchor product and see AI-suggested complementary items (strap, case, extension) so that I can present a complete luxury collection.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 252
  },
  {
    "id": "S3-US03",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to select an occasion (Wedding, Anniversary, Corporate, Birthday, Travel) and have the system auto-build a complete recommended luxury collection so that the presentation is effortless.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 253
  },
  {
    "id": "S3-US04",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see AI-generated cross-sell and upsell recommendations based on what's already in the cart and the client's history so that I maximise AOV.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 254
  },
  {
    "id": "S3-US05",
    "section": "Sales Associate",
    "story": "As a sales associate, I want real-time inventory availability shown for every product in the catalogue so that I never promise an out-of-stock item.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 255
  },
  {
    "id": "S3-US06",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see which wishlist items are available in store today so that I can surface them immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 256
  },
  {
    "id": "S3-US07",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to add any catalogue product to the cart or curated cart directly from the product detail view so that the selling flow is frictionless.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 257
  },
  {
    "id": "S3-US08",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see the client's purchase history to avoid recommending items they already own.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 258
  },
  {
    "id": "S3-US09",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to view the Product Digital Twin for any product in the catalogue so that I can speak to its authenticity and provenance.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 259
  },
  {
    "id": "S3-US10",
    "section": "Sales Associate",
    "story": "As a boutique manager, I want to see which AI recommendations led to conversions so that I can measure AI effectiveness.",
    "moscow": "Could have",
    "risk": "Low",
    "businessValue": "Medium",
    "interdependency": "Core Platform",
    "priority": 260
  },
  {
    "id": "S4-US01",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to build a cart with multiple items, apply item-level and cart-level discounts (with approval), and see a live total with tax so that checkout is accurate.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 261
  },
  {
    "id": "S4-US02",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to accept payment via multiple methods in a single transaction (Apple Pay, card, UPI, cash, store credit, gift card) so that clients can pay how they prefer.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 262
  },
  {
    "id": "S4-US03",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to process a tax-free sale for tourist customers by capturing passport details and generating the required tax-free documentation.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 263
  },
  {
    "id": "S4-US04",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to generate a digital gift receipt with no price so that gifting is seamless.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 264
  },
  {
    "id": "S4-US05",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to process a product exchange (return + re-purchase) in a single flow so that the transaction is handled correctly.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 265
  },
  {
    "id": "S4-US06",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to process a return with reason code, condition assessment, and refund to original payment method so that returns are compliant.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 266
  },
  {
    "id": "S4-US07",
    "section": "Sales Associate",
    "story": "As a sales associate, I want the Concierge Checkout layer to let me add gift wrap, personalised note, delivery scheduling, and warranty registration without leaving the checkout flow.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 267
  },
  {
    "id": "S4-US08",
    "section": "Sales Associate",
    "story": "As a sales associate, I want warranty registration at checkout to automatically write to the Product Digital Twin and Client Digital Twin so that there is no manual follow-up.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 268
  },
  {
    "id": "S4-US09",
    "section": "Sales Associate",
    "story": "As a boutique manager, I want to approve discount requests above my associate's authorisation threshold before they are applied.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 269
  },
  {
    "id": "S4-US10",
    "section": "Sales Associate",
    "story": "As a corporate admin, I want to see discount usage, average discount rate, and override patterns so that pricing discipline is maintained.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 270
  },
  {
    "id": "S5-US01",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see all incoming BOPIS orders assigned to my store so that I can prepare them for pickup.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 271
  },
  {
    "id": "S5-US02",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to verify the customer's identity and the order at pickup, capture a digital signature, and mark the order as completed.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 272
  },
  {
    "id": "S5-US03",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to check real-time stock across all stores, the warehouse, and in-transit inventory when a product is not available locally so that I can offer endless aisle.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 273
  },
  {
    "id": "S5-US04",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to place an endless aisle order on behalf of the client with their preferred delivery address so that the sale is not lost.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 274
  },
  {
    "id": "S5-US05",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to generate a ship-from-store packing slip for online orders so that I can pack and hand off to the carrier.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 275
  },
  {
    "id": "S5-US06",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see a unified inventory view (current store, nearby stores, warehouse, in-transit, reserved) in one screen while serving a client.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 276
  },
  {
    "id": "S5-US07",
    "section": "Sales Associate",
    "story": "As a boutique manager, I want to see all pending BOPIS orders with their status and scheduled pickup times so that I can manage daily operations.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 277
  },
  {
    "id": "S5-US08",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to notify the client when their BOPIS order is ready so that they come in on time.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 278
  },
  {
    "id": "S5-US09",
    "section": "Sales Associate",
    "story": "As a corporate admin, I want to see BOPIS fulfillment rates and endless aisle capture rates so that I can measure omnichannel performance.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 279
  },
  {
    "id": "S5-US10",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to reserve a product at another store for a client so that it is held for them for 24 hours.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 280
  },
  {
    "id": "S6-US01",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see my agenda for today (appointments, BOPIS pickups, follow-ups due) so that I can plan my shift.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 281
  },
  {
    "id": "S6-US02",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see all active opportunities (wishlist in stock, anniversary upcoming, warranty expiring, repair complete) so that I can act on them immediately.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 282
  },
  {
    "id": "S6-US03",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see my individual sales goals and current progress so that I can self-manage performance.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 283
  },
  {
    "id": "S6-US04",
    "section": "Sales Associate",
    "story": "As a boutique manager, I want to see today's conversion rate, average order value, and top-performing advisors so that I can manage the floor.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 284
  },
  {
    "id": "S6-US05",
    "section": "Sales Associate",
    "story": "As a boutique manager, I want to see pending follow-ups across all advisors so that nothing falls through the cracks.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 285
  },
  {
    "id": "S6-US06",
    "section": "Sales Associate",
    "story": "As a corporate admin, I want to compare conversion rate, AOV, and client retention across all stores so that I can benchmark.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 286
  },
  {
    "id": "S6-US07",
    "section": "Sales Associate",
    "story": "As a boutique manager, I want to see appointment success rates (booked vs completed, converted to sale) so that I can improve the process.",
    "moscow": "Should have",
    "risk": "Medium",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 287
  },
  {
    "id": "S6-US08",
    "section": "Sales Associate",
    "story": "As a sales associate, I want to see clients with birthdays or anniversaries in the next 30 days so that I can plan outreach.",
    "moscow": "Must have",
    "risk": "High",
    "businessValue": "High",
    "interdependency": "Core Platform",
    "priority": 288
  }
];
