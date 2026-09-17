# Lakshmi PU Pads - Industrial Polyurethane & Spare Parts Portal

A modern, responsive B2B web application built for **Lakshmi PU Pads** (Sri Laxmi Ganapathi Enterprises), specializing in high-performance polyurethane components, heavy-duty rock breaker buffer pads, modular screening panels, and industrial wear solutions.

---

## 🚀 Overview

This website serves as a high-conversion digital product catalog and inquiry portal tailored for industrial B2B clients across mining, quarrying, construction, and heavy engineering sectors.

### Key Features
- **Official Brand Identity**: Integrated official logo and custom-styled brand palette (Industrial Navy `#0e202a`, Safety Yellow `#E8A817`, and B2B Teal `#127b82`).
- **B2B Product Showcase**: IndiaMART-style product cards featuring:
  - **Rock Breaker Spare Parts** (₹ 500 /Piece)
  - **PU Rock Breaker Buffer Pads** (₹ 750 /Piece)
  - **PU Modular Screen Panels** (₹ 1,200 /Piece)
  - **Polyurethane Coated Rollers** (₹ 850 /Piece)
  - Pricing tags, supplier metadata, response rates, and star rating metrics.
- **Interactive Quick Enquiry Modal**: One-click *"Contact Supplier"* button that opens an inquiry modal pre-filled with the selected product specifications.
- **Direct Calling ("Call Now")**: Instant click-to-call integration (`tel:+919876543210`) for mobile and desktop callers.
- **Unified About & Capabilities Section**: Combined material science capabilities (*Precision manufacturing*, *Custom engineering*, *Quality first*) with real-world industry applications:
  - `01 Mining & Minerals`
  - `02 Construction`
  - `03 Engineering`
  - `04 Material Handling`
- **Fully Responsive**: Optimized for desktop, tablet, and mobile displays with hamburger menu navigation.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (`src/styles.css`) with custom design tokens, modern typography (Manrope / Inter), and responsive CSS grid.

---

## 📁 Project Structure

```text
polynova-industries/
├── public/
│   ├── hero.jpg                 # Custom hero section industrial photography
│   ├── logo.png                 # Official Lakshmi PU Pads logo
│   ├── pu-buffer-pad.jpg        # PU rock breaker buffer pads product shot
│   ├── pu-roller.jpg            # Polyurethane coated roller product shot
│   ├── pu-screen-panel.jpg      # PU modular screen deck product shot
│   └── rock-breaker.png         # Hydraulic rock breaker isolated product image
├── src/
│   ├── main.jsx                 # Core application component, state & catalog data
│   └── styles.css               # Design system, layout rules, and B2B card styles
├── index.html                   # HTML entry point and font imports
├── package.json                 # Project metadata and dependencies
├── vite.config.js               # Vite build configuration
└── Readme.md                    # Project documentation
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Clone or Open the Repository
```bash
cd polynova-industries
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch locally at:
```text
http://localhost:5173/
```

### 4. Build for Production
To generate optimized production-ready static assets in the `dist/` folder:
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization & Configuration

### Adding or Modifying Products
Products are defined in `src/main.jsx` within the `products` array:

```javascript
const products = [
  {
    name: "Rock breaker spare parts",
    cat: "Excavator & Mining Attachments",
    price: "₹ 500",
    unit: "/Piece",
    image: "/rock-breaker.png",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "70% Response Rate",
    rating: "3.0",
    reviews: "2"
  },
  // Add additional products here...
];
```

### Updating Business & Contact Information
Contact numbers, email addresses, and company location can be updated directly in `src/main.jsx` in:
- The top header bar (`.topbar`)
- The contact form section (`#contact`)
- The footer (`footer .footer-main`)

---

## 🏢 Business Details

- **Company Name**: Lakshmi PU Pads / Sri Laxmi Ganapathi Enterprises
- **Location**: Hyderabad, Telangana, India
- **Phone**: +91 98765 43210
- **Email**: info@lakshmipupads.com
- **Specialization**: Polyurethane buffer blocks, rock breaker spare parts, screening panels, and custom cast polyurethane components.

---

## 📄 License
Private project for Lakshmi PU Pads (Sri Laxmi Ganapathi Enterprises). All rights reserved.
