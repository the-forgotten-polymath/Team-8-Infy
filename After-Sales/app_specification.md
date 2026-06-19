# RSMS After-Sales Module — Application & Device Specifications

This document defines the application architecture, targeted user personas, hardware mapping, technical requirements, and setup steps required to implement the **RSMS After-Sales Service (Repairs & Care)** system.

---

## 1. Application & Persona Mapping

The After-Sales system spans multiple roles, each requiring optimized UI/UX layouts tailored to their specific workflows.

| Target App/Interface | Primary User (Persona) | Hardware Device | Purpose & Key Features |
|:---|:---|:---|:---|
| **RSMS Service Console** | **After-Sales Specialist** | iPad (Landscape-first, Multitasking support) | **Intake & Repair Operations**:<br>• Camera-based diagnostics and Vision ML assessment<br>• AST creation & validation<br>• Parts allocation & repair logging<br>• QA inspections |
| **RSMS Store Dashboard** | **Boutique Manager** | iPad & iPhone (Universal app) | **Operations & Supervision**:<br>• Real-time SLA monitoring & alerts<br>• Technician task assignment/reassignment<br>• Authentication/valuation approval pipeline |
| **Corporate Operations Portal** | **Corporate Admin** | iPad & Web Fallback | **Brand Protection & Analytics**:<br>• System-wide service intelligence dashboards<br>• Final authentication verification<br>• Official insurance valuation letter signing |
| **Customer Experience Portal** | **End Customer (Vikram)** | iPhone (Branded App or Safari Web View) | **Self-Service Journey**:<br>• Interactive repair progress timeline<br>• Cost estimate approval/rejection<br>• Apple Pay processing<br>• In-app service messaging |

---

## 2. Technical Stack & Native Frameworks

The system is optimized for **iOS 26+** and utilizes the Apple ecosystem's native frameworks to ensure a premium, secure, and fast experience.

### Core Frameworks & Libraries
* **UI Structure**: **SwiftUI** (utilizing `NavigationSplitView` on iPad for sidebar/detail navigation and `NavigationStack` on iPhone).
* **AI Diagnostics**: **Vision** (for photo bounds detection) + **Core ML** (for local classification of scratches/cracks/dents using a custom `.mlmodel`).
* **Online Payments**: **PassKit** (Apple Pay integration for secure payment processing).
* **Siri & Shortcuts**: **App Intents** (enabling voice-activated queries like *"Siri, check the status of my watch repair"*).
* **Status Updates**: **WidgetKit** (Lock Screen and Home Screen accessory widgets showing real-time timeline status).
* **Communication**: **UserNotifications** (Push notifications triggered via Apple Push Notification service / APNs).
* **Analytics Views**: **Swift Charts** (interactive graphs showing SLA compliance, store performance, and volume forecasts).
* **Data Storage**: **SwiftData** or **Core Data** (with CloudKit integration for automatic offline-first queuing and background syncing).

---

## 3. Implementation Steps & Required Setup

To successfully deploy this module, the following configuration and development tasks must be completed:

### ⚙️ Developer Portal Configuration
1. **Apple Pay Setup**: Create a Merchant Identifier on the Apple Developer Portal and register the payment processing certificate.
2. **Push Notifications**: Generate an APNs authentication key (P8 file) or certificates to enable remote push notifications.
3. **App Groups**: Configure App Groups (`group.com.luxurycare.rsms`) to share ticket and timeline state between the main app and the WidgetKit extensions.

### 🧠 AI & ML Pipeline
1. **Model Training**: Collect training images of luxury items (watches, jewelry, leather) featuring scratches, discoloration, or missing components.
2. **Compile Model**: Train a classification/object detection model and export it as `LuxuryItemConditionClassifier.mlmodel`. Add the model directly to the Xcode project bundle.

### 🔒 Security & Compliance
1. **Role-Based Access (RBAC)**: Set up runtime validation tags to ensure specialists, managers, and corporate admins can only access their respective tabs.
2. **GDPR / Privacy Consent**: Store customer signature data securely and ensure camera assets strip location metadata before syncing to the cloud.
