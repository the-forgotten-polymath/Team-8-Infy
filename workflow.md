flowchart TD

%% =========================
%% RSMS COMPLETE APP WORKFLOW
%% =========================

START(["User Opens RSMS iOS App"]) --> AUTH1["Secure Login<br/>Passkey / Password / 2FA / SSO"]
AUTH1 --> AUTH2["Validate User Identity"]
AUTH2 --> AUTH3{"Detect User Role"}

AUTH3 -->|Corporate Admin| CORP_DASH["Open Enterprise Control Tower"]
AUTH3 -->|Boutique Manager| BM_DASH["Open Boutique Command Dashboard"]
AUTH3 -->|Sales Associate| SA_DASH["Open Advisor Dashboard"]
AUTH3 -->|Inventory Controller| INV_DASH["Open Inventory Intelligence Dashboard"]
AUTH3 -->|After-Sales Specialist| AS_DASH["Open Service Dashboard"]

%% =========================
%% SHARED DIGITAL TWINS
%% =========================

subgraph DT["Shared Digital Twin Ecosystem"]
    CDT["Client Digital Twin<br/>Profiles, Preferences, Wishlist,<br/>Purchases, Appointments, Repairs"]
    PDT["Product Digital Twin<br/>SKU, Serial, Barcode/RFID,<br/>COA, Stock, Owner, Warranty, Repairs"]
    SDT["Store Digital Twin<br/>Sales, Staff, Inventory,<br/>Events, Repairs, Compliance"]
    RDT["Retail Digital Twin<br/>Enterprise View across<br/>Clients, Products, Stores"]
    AI["AI Copilot & Intelligence Layer<br/>Recommendations, Alerts,<br/>Forecasting, Risk Detection"]
end

CDT --> RDT
PDT --> RDT
SDT --> RDT
RDT --> AI

%% =========================
%% CORPORATE ADMIN WORKFLOW
%% =========================

subgraph CORP["Corporate Admin / Retail Ops Workflow"]
    CORP_DASH --> CORP1["Create / Update Product Master"]
    CORP1 --> CORP2["Define SKU, Brand, Category,<br/>Collection, Attributes, Images"]
    CORP2 --> CORP3["Define Serialization Rules<br/>Serial Required / Barcode / RFID / COA"]
    CORP3 --> CORP4["Define Warranty & Authentication Rules"]
    CORP4 --> CORP5["Define Assortment Rules<br/>Which Stores Carry Which Products"]

    CORP_DASH --> CORP6["Configure Pricing Rules"]
    CORP6 --> CORP7["Set Base Price, Regional Price,<br/>Store Price, Tax Class"]
    CORP7 --> CORP8["Create Promotions / Campaigns"]
    CORP8 --> CORP9["Set Discount Limits & Approval Thresholds"]

    CORP_DASH --> CORP10["Publish Compliance Policies"]
    CORP10 --> CORP11["Upload Planograms & Lookbooks"]
    CORP11 --> CORP12["Define Visual Merchandising Standards"]
    CORP12 --> CORP13["Define Repair SLA Policies"]

    CORP_DASH --> CORP14["Monitor Enterprise Analytics"]
    CORP14 --> CORP15["Review Revenue, Inventory,<br/>Compliance, Repairs, Events, Clients"]
    CORP15 --> CORP16["Use Corporate AI Copilot"]
    CORP16 --> CORP17["Adjust Pricing, Promotion,<br/>Assortment, SLA or Compliance Policy"]
end

CORP5 --> INV_PM["Product Master Available to Inventory"]
CORP5 --> SA_CATALOG["Product Catalog Available to Sales"]
CORP9 --> SA_PRICE["Pricing & Promotions Available at POS"]
CORP9 --> BM_APPROVAL_RULES["Discount Approval Rules Available to Boutique Manager"]
CORP13 --> AS_SLA["Repair SLA Rules Available to After-Sales"]
CORP11 --> BM_PLANOGRAM["Planogram Rules Available to Boutique Manager"]

%% =========================
%% INVENTORY CONTROLLER WORKFLOW
%% =========================

subgraph INV["Inventory Controller Workflow"]
    INV_DASH --> INV1["Receive Shipment"]
    INV1 --> INV2{"Receiving Type"}
    INV2 -->|Vendor Shipment| INV3["Open ASN"]
    INV2 -->|Warehouse to Store| INV3
    INV2 -->|Inter-Store Transfer| INV3
    INV2 -->|Manual Receiving| INV4["Create Manual Receiving Record"]

    INV3 --> INV5["Scan Items<br/>Barcode / Vision Multi-Scan / RFID-NFC"]
    INV4 --> INV5

    INV5 --> INV6["Match Physical Items with ASN"]
    INV6 --> INV7{"Discrepancy Found?"}

    INV7 -->|No| INV8["Confirm Received Items"]
    INV7 -->|Missing Item| INV9["Create Missing Item Discrepancy"]
    INV7 -->|Damaged Item| INV10["Capture Damage Photos"]
    INV7 -->|Extra Item| INV11["Flag Extra Item for Approval"]
    INV7 -->|Wrong Item| INV12["Create Wrong Item Exception"]

    INV9 --> INV13["Send Variance / Exception to Boutique Manager"]
    INV10 --> INV13
    INV11 --> INV13
    INV12 --> INV13

    INV8 --> INV14{"Serial Required?"}
    INV14 -->|Yes| INV15["Capture / Validate Serial Number"]
    INV14 -->|No| INV16["Continue Receiving"]

    INV15 --> INV17{"Serial Valid?"}
    INV17 -->|No| INV18["Block Receiving or Request Approval"]
    INV17 -->|Yes| INV19["Create Product Digital Twin"]
    INV16 --> INV19

    INV19 --> INV20["Link Barcode / RFID / Serial"]
    INV20 --> INV21{"COA Required?"}
    INV21 -->|Yes| INV22["Generate / Link Certificate of Authenticity"]
    INV21 -->|No| INV23["Skip COA"]

    INV22 --> INV24["Assign Product Location<br/>Display / Stockroom / Vault / Reserved"]
    INV23 --> INV24

    INV24 --> INV25["Update Store Stock"]
    INV25 --> INV26["Update Product Digital Twin Timeline"]
    INV26 --> INV27["Inventory Available for Sales Associate"]
    INV27 --> INV28["Inventory Visible to Boutique Manager"]

    INV_DASH --> INV29["Cycle Count"]
    INV29 --> INV30["Scan Zone / Category / Full Store"]
    INV30 --> INV31["Compare Physical vs System Stock"]
    INV31 --> INV32{"Variance Found?"}
    INV32 -->|No| INV33["Create Inventory Validation Report"]
    INV32 -->|Yes| INV34["Create Variance Case"]
    INV34 --> INV35["Add Reason Code, Notes, Evidence"]
    INV35 --> INV36["Send for Manager Signoff"]
    INV36 --> INV33

    INV_DASH --> INV37["Transfer Management"]
    INV37 --> INV38["Create Inter-Store Transfer"]
    INV38 --> INV39["Select Source, Destination, Items, ETA"]
    INV39 --> INV40{"Approval Required?"}
    INV40 -->|Yes| INV41["Send Transfer Approval to Boutique Manager"]
    INV40 -->|No| INV42["Pack and Mark In Transit"]
    INV41 --> INV42
    INV42 --> INV43["Receiving Store Scans Items"]
    INV43 --> INV44{"Transfer Matched?"}
    INV44 -->|Yes| INV45["Complete Transfer"]
    INV44 -->|No| INV46["Create Transfer Exception"]
    INV45 --> INV47["Update Product Digital Twin Movement"]
    INV46 --> INV47

    INV_DASH --> INV48["Service Logistics / Loaners"]
    INV48 --> INV49["Reserve Repair Part or Loaner Item"]
    INV49 --> INV50["Link Item to After-Sales Ticket"]
    INV50 --> INV51["Track Outbound / Return / Loaner Status"]
end

INV19 --> PDT
INV22 --> PDT
INV24 --> PDT
INV25 --> SDT
INV33 --> SDT
INV47 --> PDT
INV51 --> PDT
INV51 --> AS_PARTS_LINK["Parts / Loaner Data Available to After-Sales"]

%% =========================
%% BOUTIQUE MANAGER WORKFLOW
%% =========================

subgraph BM["Boutique Manager Workflow"]
    BM_DASH --> BM1["View Boutique Health Score"]
    BM1 --> BM2["Monitor Sales vs Target"]
    BM2 --> BM3["Monitor Appointments & VIP Visits"]
    BM3 --> BM4["Monitor Staff Shifts"]
    BM4 --> BM5["Monitor Stock Alerts & Transfers"]
    BM5 --> BM6["Monitor Repair SLA Risks"]
    BM6 --> BM7["Monitor Event Activity"]

    BM_DASH --> BM8["Staff & Shift Planning"]
    BM8 --> BM9["Create / Publish Staff Schedule"]
    BM9 --> BM10["Validate Role Coverage and Conflicts"]
    BM10 --> BM11["Assign Advisors to Appointments"]
    BM11 --> BM12["Set Sales Goals & Commission Rules"]

    BM_DASH --> BM13["Visual Merchandising Compliance"]
    BM13 --> BM14["Capture / Upload Display Photos"]
    BM14 --> BM15["Compare with Corporate Planogram"]
    BM15 --> BM16{"Compliance Passed?"}
    BM16 -->|Yes| BM17["Save Compliance Score"]
    BM16 -->|No| BM18["Create Corrective Action"]
    BM18 --> BM17

    BM_DASH --> BM19["VIP Event Management"]
    BM19 --> BM20["Create Event / Trunk Show"]
    BM20 --> BM21["Select Collection Focus"]
    BM21 --> BM22["AI Suggests Invitees"]
    BM22 --> BM23["Send Invitations"]
    BM23 --> BM24["Track RSVP and Attendance"]
    BM24 --> BM25["Track Event Revenue Attribution"]

    BM_DASH --> BM26["Unified Approval Center"]
    BM26 --> BM27{"Approval Type"}
    BM27 -->|Discount| BM28["Approve / Reject Discount"]
    BM27 -->|Inventory Variance| BM29["Approve / Reject Variance"]
    BM27 -->|Transfer| BM30["Approve / Reject Transfer"]
    BM27 -->|Refund / Return| BM31["Approve / Reject Refund"]
    BM27 -->|Repair Escalation| BM32["Review SLA Escalation"]

    BM28 --> BM33["Log Approval Decision"]
    BM29 --> BM33
    BM30 --> BM33
    BM31 --> BM33
    BM32 --> BM33

    BM_DASH --> BM34["Ask AI Boutique Copilot"]
    BM34 --> BM35["Receive Top Actions<br/>Sales Gap, Staffing Risk,<br/>Stock Alert, SLA Risk, Event Readiness"]
end

BM12 --> SDT
BM17 --> SDT
BM25 --> SDT
BM33 --> SDT
BM28 --> SA_DISCOUNT_DECISION["Discount Approval Returned to Sales"]
BM29 --> INV_VARIANCE_DECISION["Variance Approval Returned to Inventory"]
BM30 --> INV_TRANSFER_DECISION["Transfer Approval Returned to Inventory"]
BM32 --> AS_ESCALATION_DECISION["SLA Escalation Returned to After-Sales"]

%% =========================
%% SALES ASSOCIATE WORKFLOW
%% =========================

subgraph SA["Sales Associate / Client Advisor Workflow"]
    SA_DASH --> SA1{"Workflow Entry Point"}
    SA1 -->|Walk-in Client| SA2["Search Existing Client"]
    SA1 -->|Scheduled Appointment| SA3["Open Appointment Brief"]
    SA1 -->|Remote Selling| SA4["Open Remote Selling Workspace"]
    SA1 -->|BOPIS Pickup| SA5["Open BOPIS Queue"]
    SA1 -->|Return / Exchange| SA6["Open Return or Exchange Flow"]
    SA1 -->|Opportunity Alert| SA7["Open Opportunity"]

    SA2 --> SA8{"Client Found?"}
    SA8 -->|Yes| SA9["Open Client Digital Twin"]
    SA8 -->|No| SA10["Create New Client Profile"]
    SA10 --> SA11["Capture Consent and Preferences"]
    SA11 --> SA9

    SA3 --> SA9
    SA4 --> SA9
    SA7 --> SA9

    SA9 --> SA12["Review Preferences, Wishlist,<br/>Owned Products, Service History,<br/>Appointments, Consent"]
    SA12 --> SA13["Browse Guided Catalog"]
    SA13 --> SA14["View Product Detail & Product Digital Twin Summary"]
    SA14 --> SA15["AI Cross-Sell / Upsell / Look Recommendations"]
    SA15 --> SA16["Check Inventory Availability"]

    SA16 --> SA17{"Product Available?"}
    SA17 -->|Current Store| SA18["Add Product to Cart"]
    SA17 -->|Other Store / Warehouse| SA19["Create Endless Aisle Order"]
    SA17 -->|Not Available| SA20["Add to Wishlist / Enable Restock Alert"]

    SA18 --> SA21["Build Look / Bundle / Curated Cart"]
    SA21 --> SA22["Review Cart"]
    SA22 --> SA23{"Discount Needed?"}

    SA23 -->|No| SA24["Proceed to Checkout"]
    SA23 -->|Yes| SA25["Apply Discount"]
    SA25 --> SA26{"Within Associate Limit?"}
    SA26 -->|Yes| SA24
    SA26 -->|No| SA27["Request Boutique Manager Approval"]
    SA27 --> SA28{"Approved?"}
    SA28 -->|Yes| SA24
    SA28 -->|No| SA22

    SA24 --> SA29["Process Payment"]
    SA29 --> SA30{"Payment Successful?"}
    SA30 -->|No| SA31["Retry / Change Payment Method"]
    SA31 --> SA29
    SA30 -->|Yes| SA32["Concierge Checkout"]

    SA32 --> SA33["Gift Receipt / Tax-Free Docs<br/>Gift Wrap / Personal Note"]
    SA33 --> SA34["Register Warranty"]
    SA34 --> SA35["Generate Receipt"]
    SA35 --> SA36["Update Client Digital Twin"]
    SA36 --> SA37["Update Product Digital Twin"]
    SA37 --> SA38["Update Store Digital Twin Sales State"]

    SA38 --> SA39{"Fulfillment Type"}
    SA39 -->|Carry-Out| SA40["Hand Product to Customer"]
    SA39 -->|BOPIS| SA41["Reserve for Pickup"]
    SA39 -->|Endless Aisle| SA42["Send Order to Fulfillment"]
    SA39 -->|Ship-from-Store| SA43["Generate Packing Slip"]
    SA39 -->|Delivery| SA44["Send Delivery Instruction"]

    SA40 --> SA45["Create Follow-Up Task"]
    SA41 --> SA45
    SA42 --> SA45
    SA43 --> SA45
    SA44 --> SA45

    SA5 --> SA46["Verify BOPIS Order"]
    SA46 --> SA47["Scan Product"]
    SA47 --> SA48["Confirm Pickup"]
    SA48 --> SA36

    SA6 --> SA49["Search Original Transaction"]
    SA49 --> SA50["Validate Return / Exchange Policy"]
    SA50 --> SA51{"Eligible?"}
    SA51 -->|Yes| SA52["Process Return / Exchange"]
    SA51 -->|Approval Required| SA53["Request Boutique Manager Approval"]
    SA51 -->|No| SA54["Show Policy Reason / Escalation"]
    SA52 --> SA36
end

SA9 --> CDT
SA10 --> CDT
SA20 --> CDT
SA36 --> CDT
SA37 --> PDT
SA38 --> SDT
SA19 --> INV_TRANSFER_DEMAND["Inventory Receives Endless Aisle / Transfer Demand"]
SA41 --> PDT
SA43 --> PDT

%% =========================
%% AFTER-SALES WORKFLOW
%% =========================

subgraph AS["After-Sales Specialist Workflow"]
    AS_DASH --> AS1{"Service Entry Point"}
    AS1 -->|Customer Repair Request| AS2["Scan Product Serial / Barcode"]
    AS1 -->|Sales Initiated Service| AS2
    AS1 -->|Warranty Issue| AS2
    AS1 -->|Authentication Request| AS3["Create Authentication Request"]
    AS1 -->|Valuation Request| AS4["Create Valuation Request"]

    AS2 --> AS5["Load Product Digital Twin"]
    AS5 --> AS6["Load Client Digital Twin"]
    AS6 --> AS7["Validate Warranty Status"]
    AS7 --> AS8["Create After-Sales Ticket"]
    AS8 --> AS9["Capture Intake Photos"]
    AS9 --> AS10["Add Diagnostic Notes, Issue Category, Severity"]
    AS10 --> AS11{"AI Diagnostics Enabled?"}
    AS11 -->|Yes| AS12["Run AI Condition Analysis"]
    AS11 -->|No| AS13["Manual Condition Report"]
    AS12 --> AS14["Finalize Condition Report"]
    AS13 --> AS14

    AS14 --> AS15["Generate Repair Estimate"]
    AS15 --> AS16["Send Estimate to Customer"]
    AS16 --> AS17{"Customer Decision"}
    AS17 -->|Approved| AS18["Collect Payment if Required"]
    AS17 -->|Rejected| AS19["Cancel / Close Ticket"]
    AS17 -->|No Response| AS20["Send Reminder"]

    AS18 --> AS21["Allocate Repair Parts"]
    AS21 --> AS22{"Parts Available?"}
    AS22 -->|Yes| AS23["Reserve Parts"]
    AS22 -->|No| AS24["Request Parts from Inventory"]
    AS24 --> AS25["SLA Risk Recalculated"]
    AS23 --> AS26["Start Repair"]

    AS26 --> AS27["Update Repair Stage Timeline"]
    AS27 --> AS28["Repair Completed"]
    AS28 --> AS29["Mandatory QA Checklist"]
    AS29 --> AS30{"QA Passed?"}
    AS30 -->|No| AS31["Return to Repair Stage"]
    AS31 --> AS26
    AS30 -->|Yes| AS32["Mark Ready for Pickup / Shipment"]

    AS32 --> AS33["Notify Customer"]
    AS33 --> AS34{"Return Method"}
    AS34 -->|Store Pickup| AS35["Schedule Pickup"]
    AS34 -->|Courier| AS36["Generate Packaging Docs and Shipment"]
    AS34 -->|Appointment Pickup| AS37["Book Pickup Appointment"]

    AS35 --> AS38["Return Item to Client"]
    AS36 --> AS38
    AS37 --> AS38

    AS38 --> AS39["Close AST"]
    AS39 --> AS40["Append Repair History to Product Digital Twin"]
    AS40 --> AS41["Append Service Event to Client Digital Twin"]
    AS41 --> AS42["Update Store Service Metrics"]

    AS3 --> AS43["Capture Product Photos and COA"]
    AS43 --> AS44["Submit Authentication Review"]
    AS44 --> AS45["Attach Result to Product Digital Twin"]

    AS4 --> AS46["Prepare Product Condition and History"]
    AS46 --> AS47["Generate Valuation Letter"]
    AS47 --> AS48["Attach Valuation to Product Digital Twin"]
end

AS5 --> PDT
AS6 --> CDT
AS24 --> INV_PARTS_REQUEST["Inventory Receives Parts Request"]
AS40 --> PDT
AS41 --> CDT
AS42 --> SDT
AS45 --> PDT
AS48 --> PDT

%% =========================
%% OMNICHANNEL AND STOCK FEEDBACK
%% =========================

subgraph OMNI["Omnichannel & Stock Feedback Loop"]
    O1["Sale Completed"] --> O2["Inventory Count Reduced"]
    O2 --> O3{"Low Stock Threshold Reached?"}
    O3 -->|Yes| O4["Create Stock Alert"]
    O3 -->|No| O5["Continue Monitoring"]
    O4 --> O6["Boutique Manager Sees Stock Alert"]
    O4 --> O7["Inventory Receives Replenishment Suggestion"]
    O4 --> O8["Corporate Sees Network Stockout Risk"]

    O9["Wishlist Item Back in Stock"] --> O10["Create Sales Opportunity Alert"]
    O10 --> O11["Sales Associate Follow-Up Task"]

    O12["Repair Completed"] --> O13["Create Client Pickup Opportunity"]
    O13 --> O14["Sales Associate / After-Sales Follow-Up"]

    O15["VIP Event Created"] --> O16["AI Suggests Invitees"]
    O16 --> O17["Sales Associate Outreach Tasks"]
end

SA38 --> O1
INV25 --> O9
AS39 --> O12
BM20 --> O15

%% =========================
%% AI COPILOT ROLE-BASED OUTPUTS
%% =========================

subgraph AIFLOW["AI Copilot Outputs"]
    AI --> AI1["Corporate Admin Insight<br/>Revenue, Promotion, Compliance,<br/>Assortment, Store Performance"]
    AI --> AI2["Boutique Manager Insight<br/>Sales Gap, Staffing Risk,<br/>Stock Alert, Event Readiness, SLA Risk"]
    AI --> AI3["Sales Associate Insight<br/>Next Best Product, Wishlist Alert,<br/>Client Follow-Up, Look Builder"]
    AI --> AI4["Inventory Insight<br/>Shrink Risk, Stockout Risk,<br/>Replenishment, Transfer Suggestion"]
    AI --> AI5["After-Sales Insight<br/>SLA Breach Risk, Parts Delay,<br/>QA Failure Trend, Repair Bottleneck"]
end

AI1 --> CORP17
AI2 --> BM35
AI3 --> SA7
AI4 --> INV37
AI5 --> AS25

%% =========================
%% FINAL ENTERPRISE FEEDBACK
%% =========================

SDT --> RDT
CDT --> RDT
PDT --> RDT

RDT --> FINAL1["Enterprise Analytics Updated"]
FINAL1 --> FINAL2["Reports, Forecasts, Compliance,<br/>Revenue, Inventory, Service Quality"]
FINAL2 --> FINAL3["Corporate Decisions Improve Next Cycle"]
FINAL3 --> CORP_DASH