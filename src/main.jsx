import React, {useState, useEffect, useRef} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowUpRight, ChevronDown, ChevronUp, Menu, X, Phone, Mail, MapPin, ArrowRight,
  Check, Factory, ShieldCheck, Settings2, Layers3, Boxes, Sparkles,
  CircleGauge, MoveUpRight, Send, Plus, Linkedin, Instagram, Info, Search,
  Star, Award, ThumbsUp, Quote, CheckCircle2, MessageSquare, Eye, User,
  ClipboardList, FileText, Trash2, Minus, Wrench
} from "lucide-react";
import "./styles.css";

const products = [
  {
    id: "rock-breaker-parts",
    name: "Rock breaker spare parts",
    cat: "Excavator & Mining Attachments",
    categoryGroup: "Rock Breaker Parts",
    price: "₹ 500",
    unit: "/Piece",
    minOrder: "1 Piece",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "70% Response Rate",
    rating: "3.0",
    reviews: "2",
    views: [
      { label: "Front View", src: "/rock-pad-front.jpg" },
      { label: "Back View", src: "/rock-pad-back.jpg" },
      { label: "Full Kit", src: "/rock-breaker-pads.jpg" }
    ],
    description: "Engineered specifically for heavy-duty hydraulic rock breakers and excavator hammers. These precision-cast polyurethane buffer pads absorb violent reciprocating shockwaves, prevent metal-to-metal housing friction, and significantly extend piston and cylinder service life in harsh quarrying and demolition conditions.",
    specs: [
      { label: "Material", value: "High-Grade Cast Polyurethane (PU)" },
      { label: "Hardness", value: "90° - 95° Shore A" },
      { label: "Color", value: "Golden Yellow" },
      { label: "Tensile Strength", value: "> 45 MPa" },
      { label: "Tear Strength", value: "> 105 kN/m" },
      { label: "Operating Temperature", value: "-30°C to +90°C" },
      { label: "Thickness", value: "25 mm to 65 mm (Customizable)" },
      { label: "Usage / Application", value: "Hydraulic Rock Breakers, Mining, Excavators" },
      { label: "Compatible Brands", value: "Soosan, Furukawa, Atlas Copco, Sandvik, JCB, Daemo" },
      { label: "Country of Origin", value: "Made in India (Hyderabad, Telangana)" }
    ],
    features: [
      "Eliminates destructive metal-to-metal contact inside breaker housing",
      "Superior tear strength and high dynamic impact load capacity",
      "Resistant to hydraulic oil, grease, abrasive rock dust, and moisture",
      "Manufactured to precise OEM dimensions or custom CAD drawing"
    ]
  },
  {
    id: "pu-buffer-pads",
    name: "PU Rock Breaker Buffer Pads",
    cat: "Wear & Damper Components",
    categoryGroup: "Rock Breaker Parts",
    price: "₹ 750",
    unit: "/Piece",
    minOrder: "2 Pieces",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "85% Response Rate",
    rating: "4.8",
    reviews: "19",
    views: [
      { label: "Front View", src: "/pu-buffer-pad.jpg" },
      { label: "Back View", src: "/pu-damper-back.jpg" }
    ],
    description: "High-resilience polyurethane damping blocks and buffer cushions designed to isolate impact vibration between breaker body and bracket. Features integrated compression relief grooves and heavy-duty steel inserts to withstand extreme cyclic loads in continuous mining operations.",
    specs: [
      { label: "Material", value: "Prepolymer Cast Elastomer" },
      { label: "Hardness", value: "92° ± 3 Shore A" },
      { label: "Color", value: "Safety Yellow" },
      { label: "Compression Set", value: "< 18% (at 70°C for 22h)" },
      { label: "Impact Resilience", value: "> 55%" },
      { label: "Insert Type", value: "Bonded Steel Mounting Bushings" },
      { label: "Usage / Application", value: "Heavy-Duty Breaker Dampers, Quarry Equipment" },
      { label: "Compatible Models", value: "SB Series, HB Series, DMB Series" },
      { label: "Country of Origin", value: "Made in India" }
    ],
    features: [
      "Absorbs over 75% of transmitted vibration, protecting excavator booms",
      "Engineered relief grooves prevent lateral bulge under maximum impact",
      "Anti-fatigue polyurethane formulation outlasts rubber dampers by 3-5x",
      "Precision threaded metal inserts for quick, secure bolt-on installation"
    ]
  },
  {
    id: "screen-panels",
    name: "PU Modular Screen Panels",
    cat: "Screening Solutions",
    categoryGroup: "Screening & Dewatering",
    price: "₹ 1,200",
    unit: "/Piece",
    minOrder: "5 Pieces",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "92% Response Rate",
    rating: "4.9",
    reviews: "31",
    views: [
      { label: "Front View", src: "/pu-screen-panel.jpg" },
      { label: "Back View", src: "/screen-panel-back.jpg" }
    ],
    description: "Interlocking polyurethane modular screen deck mats for vibrating screens, dewatering equipment, and mineral classification. Engineered with tapered non-blinding square apertures and an internal steel reinforcement skeleton to maximize screening throughput and resist severe slurry abrasion.",
    specs: [
      { label: "Material", value: "Premium Polyurethane Elastomer + Steel Reinforcement" },
      { label: "Aperture Sizes", value: "0.5 mm to 65 mm (Square, Slotted, Hexagonal)" },
      { label: "Hardness", value: "85° - 90° Shore A" },
      { label: "Standard Size", value: "305 mm x 305 mm (1ft x 1ft) & 305 mm x 610 mm" },
      { label: "Locking Type", value: "Pin & Sleeve, Snap-In, Bolted" },
      { label: "Open Area", value: "Up to 42% High Flow" },
      { label: "Usage / Application", value: "Vibrating Screens, Iron Ore, Coal, Quarry Aggregates" },
      { label: "Country of Origin", value: "Made in India" }
    ],
    features: [
      "Self-relieving tapered apertures eliminate particle pegging and blinding",
      "Internal high-tensile steel skeleton prevents deck sagging under heavy feed",
      "Abrasion resistance outlasts wire mesh screens by 6x to 10x",
      "Lightweight modular units reduce screen frame fatigue and power consumption"
    ]
  },
  {
    id: "pu-coated-rollers",
    name: "Polyurethane Coated Rollers",
    cat: "Industrial Drive & Conveying",
    categoryGroup: "Industrial & Mining Wear",
    price: "₹ 2,400",
    unit: "/Piece",
    minOrder: "1 Piece",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "88% Response Rate",
    rating: "4.7",
    reviews: "14",
    views: [
      { label: "Front View", src: "/pu-roller.jpg" },
      { label: "Side View", src: "/pu-roller-side.jpg" }
    ],
    description: "Heavy-duty industrial drive and guide rollers coated with high-performance polyurethane vulcanized directly onto machined steel cores. Provides superior traction, non-marking contact, chemical resistance, and high cut resistance for conveyors, steel mills, and automated processing lines.",
    specs: [
      { label: "Coating Material", value: "Thermoset Polyurethane Elastomer" },
      { label: "Core Material", value: "EN8 / Mild Steel / Stainless Steel" },
      { label: "Hardness Range", value: "65° Shore A to 75° Shore D" },
      { label: "Diameter", value: "50 mm to 450 mm (Custom Built)" },
      { label: "Face Length", value: "100 mm to 2500 mm" },
      { label: "Bearing Fitment", value: "Machined Bearing Housing with Keyway" },
      { label: "Usage / Application", value: "Conveyor Systems, Printing, Packaging, Steel Slitting" },
      { label: "Country of Origin", value: "Made in India" }
    ],
    features: [
      "Chemical bonding between PU and steel core prevents delamination under load",
      "High coefficient of friction ensures positive belt drive without slipping",
      "Non-marking surface protects delicate finished products and conveyor belts",
      "Re-coating and re-grinding services available for existing metal cores"
    ]
  },
  {
    id: "pu-belt-scraper",
    name: "Polyurethane Conveyor Belt Scraper",
    cat: "Conveyor Cleaning Systems",
    categoryGroup: "Industrial & Mining Wear",
    price: "₹ 1,450",
    unit: "/Piece",
    minOrder: "1 Piece",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "89% Response Rate",
    rating: "4.9",
    reviews: "24",
    views: [
      { label: "Front View", src: "/pu-scraper-front.jpg" },
      { label: "Back View", src: "/pu-scraper-back.jpg" }
    ],
    description: "Heavy-duty primary and secondary polyurethane belt cleaner blades engineered for high-speed bulk material conveyors in mining, cement, ports, and power plants. Cast from ultra-wear resistant polyurethane to ensure continuous carryback removal without belt scoring.",
    specs: [
      { label: "Blade Material", value: "Ultra High Wear Polyurethane (PU)" },
      { label: "Hardness", value: "85° - 90° Shore A" },
      { label: "Mounting Track", value: "Extruded Anodized Aluminum / Galvanized Steel" },
      { label: "Blade Width", value: "450 mm to 2200 mm (Belt Width Specific)" },
      { label: "Blade Height", value: "180 mm to 260 mm" },
      { label: "Belt Speed", value: "Up to 5.0 m/s" },
      { label: "Usage / Application", value: "Belt Conveyors, Mining, Cement, Coal Handling" },
      { label: "Country of Origin", value: "Made in India" }
    ],
    features: [
      "Beveled scraping profile ensures constant, uniform contact with conveyor belt",
      "Integrated slotted aluminum track allows swift, slide-in blade replacements",
      "Zero damage to belt top cover, cold vulcanized joints, or mechanical splices",
      "High thermal stability and low coefficient of friction prevent heat degradation"
    ]
  },
  {
    id: "pu-hydrocyclone",
    name: "Polyurethane Hydrocyclone Cone & Liner",
    cat: "Mineral Separation & Dewatering",
    categoryGroup: "Screening & Dewatering",
    price: "₹ 3,200",
    unit: "/Piece",
    minOrder: "1 Piece",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "91% Response Rate",
    rating: "4.8",
    reviews: "14",
    views: [
      { label: "Front View", src: "/pu-hydrocyclone-front.jpg" },
      { label: "Internal View", src: "/pu-hydrocyclone-back.jpg" }
    ],
    description: "Precision-molded cast polyurethane hydrocyclone cone assemblies engineered for solid-liquid slurry classification, desliming, and sand washing. Manufactured with premium prepolymers to resist extreme fine-particle slurry erosion in gold, iron ore, coal, and aggregate plants.",
    specs: [
      { label: "Material", value: "Hydrolysis-Resistant Cast Polyurethane" },
      { label: "Hardness", value: "88° - 92° Shore A" },
      { label: "Cone Diameter", value: "50 mm to 650 mm (Custom Sized)" },
      { label: "Inlet Geometry", value: "Involute / Tangential Feed Inlet" },
      { label: "Tensile Strength", value: "> 48 MPa" },
      { label: "Flange Standard", value: "ANSI / DIN Compatible Flanges" },
      { label: "Usage / Application", value: "Mineral Classification, Dewatering, Sand Washing" },
      { label: "Country of Origin", value: "Made in India" }
    ],
    features: [
      "Outlasts rubber and Ni-Hard metallic hydrocyclone liners by 3x to 5x",
      "Smooth precision-cast inner vortex profile maximizes classification sharpness",
      "Lightweight modular sections enable rapid on-site replacement with zero lifting cranes",
      "Excellent resistance to acidic mineral slurries and harsh process chemicals"
    ]
  },
  {
    id: "pu-wear-sheet",
    name: "Polyurethane Wear Sheets & Liners",
    cat: "Wear & Impact Protection",
    categoryGroup: "Industrial & Mining Wear",
    price: "₹ 2,800",
    unit: "/Sheet",
    minOrder: "1 Sheet",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "94% Response Rate",
    rating: "4.9",
    reviews: "38",
    views: [
      { label: "Front View", src: "/pu-sheet-front.jpg" },
      { label: "Back View", src: "/pu-sheet-back.jpg" }
    ],
    description: "Heavy-duty cast polyurethane wear liner plates with molded countersunk bolt apertures. Built to absorb devastating rock impact and abrasive sliding wear in chutes, hoppers, bins, transfer towers, and dump truck beds across mining and aggregate handling facilities.",
    specs: [
      { label: "Material", value: "High-Load Polyurethane (PU) Compound" },
      { label: "Hardness", value: "90° ± 3 Shore A" },
      { label: "Standard Thickness", value: "10 mm, 15 mm, 20 mm, 25 mm, 50 mm" },
      { label: "Sheet Dimensions", value: "1000 x 2000 mm, 1200 x 2400 mm, Custom Cut" },
      { label: "Fastening Type", value: "Counter-Sunk Bolt Holes / Steel Backing" },
      { label: "Operating Temperature", value: "-35°C to +85°C" },
      { label: "Usage / Application", value: "Hopper Lining, Chute Lining, Silos, Feeder Trays" },
      { label: "Country of Origin", value: "Made in India" }
    ],
    features: [
      "Drastically dampens impact noise and structural vibration in material transfer chutes",
      "Low friction surface eliminates material hanging, bridging, and sticky caking",
      "Recessed counter-sunk apertures protect bolt fasteners from abrasive rock contact",
      "Flexible yet indestructible under repetitive high-tonnage aggregate drops"
    ]
  },
  {
    id: "m-sand-dewatering",
    name: "M-Sand Polyurethane Dewatering Screen",
    cat: "Aggregate Dewatering",
    categoryGroup: "Screening & Dewatering",
    price: "₹ 1,450",
    unit: "/Piece",
    minOrder: "4 Pieces",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "93% Response Rate",
    rating: "4.9",
    reviews: "27",
    views: [
      { label: "Front View", src: "/pu-dewatering-front.jpg" },
      { label: "Back View", src: "/pu-dewatering-back.jpg" }
    ],
    description: "Fine aperture polyurethane dewatering screen panels engineered for high-frequency vibrating screens in M-Sand (manufactured sand) and aggregate washing plants. Features tapered self-relieving slot openings that prevent blinding, optimize water drainage, and ensure high throughput.",
    specs: [
      { label: "Material", value: "High-Rebound Wear-Resistant Polyurethane" },
      { label: "Aperture Type", value: "Continuous Slotted (0.3 mm to 2.5 mm)" },
      { label: "Hardness", value: "85° - 90° Shore A" },
      { label: "Panel Size", value: "305 x 305 mm (12 x 12 in) / 305 x 610 mm" },
      { label: "Frame Reinforcement", value: "Embedded High-Tensile Steel Wire Skeleton" },
      { label: "Interlocking Type", value: "Pin and Leg / Snap-Fit Modular Locking" },
      { label: "Usage / Application", value: "M-Sand Washing, Slurry Dewatering, Coal Screening" },
      { label: "Country of Origin", value: "Made in India" }
    ],
    features: [
      "Tapered trapezoidal slots prevent stone trapping and aperture blinding",
      "High open area ratio maximizes slurry dewatering and moisture removal",
      "Internal steel skeleton prevents sagging and distortion under heavy sand load",
      "Quick snap-in modular replacement without dismantling entire screen deck"
    ]
  }
];

const companyReviews = [
  {
    id: "rev-1",
    author: "Rajeshwar Rao",
    role: "Quarry Operations Manager",
    company: "R.K. Mining Services",
    location: "Karimnagar, Telangana",
    rating: 5,
    date: "August 2026",
    tag: "Consistent Material Quality",
    headline: "Consistent material quality and remarkable durability across every batch",
    comment: "Lakshmi PU Pads has been our dependable manufacturing partner in Hyderabad for over 4 years. Their polyurethane components have zero defect rates and remarkable impact dampening. Direct communication with their technical team and very transparent B2B dealings.",
    verified: true,
    aspect: "Quality"
  },
  {
    id: "rev-2",
    author: "M. Srinivas",
    role: "Plant In-Charge",
    company: "Deccan Aggregates & M-Sand",
    location: "Hyderabad, Telangana",
    rating: 5,
    date: "July 2026",
    tag: "On-Time Dispatch & Logistics",
    headline: "Fast turnaround and excellent on-site delivery in Hyderabad",
    comment: "Whenever we have an urgent plant breakdown or scheduled maintenance, their Hyderabad unit processes and dispatches our requirement in record time. Excellent communication over WhatsApp and reliable delivery schedules every single time.",
    verified: true,
    aspect: "Delivery"
  },
  {
    id: "rev-3",
    author: "K. Venkat Ramana",
    role: "Head of Mechanical Maintenance",
    company: "Coastal Mineral Processing Corp",
    location: "Visakhapatnam, AP",
    rating: 5,
    date: "June 2026",
    tag: "Technical Formulation",
    headline: "Superior prepolymer formulation and engineering expertise",
    comment: "Their engineering team guided us to the right Shore A hardness and abrasion-resistant polyurethane formulation for our extreme slurry conditions. Replaced costly imported components with their Hyderabad-cast parts at a fraction of the cost.",
    verified: true,
    aspect: "Quality"
  },
  {
    id: "rev-4",
    author: "Anand Kumar",
    role: "Fleet Maintenance Engineer",
    company: "Bharath Infrastructure & Earthmovers",
    location: "Bangalore, Karnataka",
    rating: 5,
    date: "May 2026",
    tag: "Custom Mold Tooling",
    headline: "Custom mold development executed with high precision",
    comment: "We needed non-standard dimensions manufactured according to our CAD drawing. Lakshmi PU Pads developed the custom tooling and delivered the batch within one week. Exact tolerances and exceptional build finish.",
    verified: true,
    aspect: "Tooling"
  }
];

function CompanyRatings({ onSelectContact, onOpenReviewModal }) {
  const [allReviewsOpen, setAllReviewsOpen] = useState(false);

  return (
    <section id="ratings" className="company-ratings-section">
      <div className="section-head compact" style={{ marginBottom: "32px" }}>
        <div>
          <div className="eyebrow">
            <span></span> VERIFIED COMPANY RATINGS
          </div>
          <h2>
            Trusted by Heavy Industry<br />
            <em>Across Telangana, AP & Pan-India.</em>
          </h2>
        </div>
        <p>
          Quality, durability, and dispatch benchmarks verified across industrial clients, quarries, and engineering plants.
        </p>
      </div>

      {/* Main Scorecard Banner */}
      <div className="ratings-scorecard-card">
        {/* Left: Overall Score */}
        <div className="scorecard-left">
          <div className="scorecard-score-box">
            <span className="scorecard-big-num">4.9</span>
            <div className="scorecard-score-sub">
              <span className="scorecard-out-of">out of 5.0</span>
              <div className="scorecard-stars">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={20} className="star-icon-filled" fill="#E8A817" color="#E8A817" />
                ))}
              </div>
            </div>
          </div>
          <div className="scorecard-total-reviews">
            <strong>Verified Client Ratings</strong>
            <span>Direct B2B Customers & Quarry Operators</span>
          </div>
          <div className="scorecard-badges-row">
            <span className="sc-badge">
              <CheckCircle2 size={13} className="sc-badge-icon" /> IndiaMART TrustSEAL
            </span>
            <span className="sc-badge">
              <CheckCircle2 size={13} className="sc-badge-icon" /> Google Verified 4.9★
            </span>
            <span className="sc-badge">
              <CheckCircle2 size={13} className="sc-badge-icon" /> ISO 9001:2015 Process
            </span>
          </div>
        </div>

        {/* Center: Star Distribution Bars */}
        <div className="scorecard-center">
          <div className="distribution-title">Rating Breakdown</div>
          <div className="distribution-rows">
            {[
              { stars: 5, pct: 100 },
              { stars: 4, pct: 0 },
              { stars: 3, pct: 0 },
              { stars: 2, pct: 0 },
              { stars: 1, pct: 0 }
            ].map(row => (
              <div className="dist-row" key={row.stars}>
                <span className="dist-label">{row.stars} Star</span>
                <div className="dist-bar-track">
                  <div className="dist-bar-fill" style={{ width: `${row.pct}%` }}></div>
                </div>
                <span className="dist-pct">{row.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Key Performance Pillars */}
        <div className="scorecard-right">
          <div className="pillar-item">
            <div className="pillar-num">98.4%</div>
            <div className="pillar-text">
              <b>Client Recommendation</b>
              <span>Would re-order for future plant maintenance</span>
            </div>
          </div>
          <div className="pillar-item">
            <div className="pillar-num">98%</div>
            <div className="pillar-text">
              <b>On-Time Dispatch</b>
              <span>Fast courier & transport from Hyderabad unit</span>
            </div>
          </div>
          <div className="pillar-item">
            <div className="pillar-num">&lt; 2h</div>
            <div className="pillar-text">
              <b>Average Response Time</b>
              <span>Quick phone & WhatsApp RFQ quotes</span>
            </div>
          </div>
          <div className="pillar-item">
            <div className="pillar-num">15+ Yrs</div>
            <div className="pillar-text">
              <b>Manufacturing Experience</b>
              <span>High-pressure casting & custom mold design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Action Bar (Short & Sweet on Main UI) */}
      <div className="ratings-summary-action-bar">
        <div className="ratings-summary-text">
          <Star size={18} fill="#E8A817" color="#E8A817" />
          <span><strong>5.0 / 5.0</strong> Rating · Verified Client Feedback</span>
        </div>
        <div className="ratings-action-btns">
          <button
            type="button"
            className="view-all-reviews-btn"
            onClick={() => setAllReviewsOpen(true)}
          >
            <MessageSquare size={16} /> View Client Reviews ({companyReviews.length}) <ArrowRight size={15} />
          </button>
          <button
            type="button"
            className="write-review-outline-btn"
            onClick={onOpenReviewModal}
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Bottom Guarantee Banner */}
      <div className="ratings-guarantee-banner">
        <div className="guarantee-left">
          <ShieldCheck size={36} className="guarantee-icon" />
          <div>
            <h4>100% Quality & Shore A Hardness Guaranteed</h4>
            <p>Every polyurethane pad and screen panel is tested for durometer hardness, tensile resilience, and tear resistance prior to dispatch from our Hyderabad factory.</p>
          </div>
        </div>
        <div className="guarantee-actions">
          <button
            type="button"
            className="primary-btn"
            onClick={() => onSelectContact(null)}
          >
            Get Best Direct Quote <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* View All Reviews Modal */}
      <AllReviewsModal
        isOpen={allReviewsOpen}
        onClose={() => setAllReviewsOpen(false)}
        onOpenWriteReview={() => {
          setAllReviewsOpen(false);
          onOpenReviewModal();
        }}
      />
    </section>
  );
}

function AllReviewsModal({ isOpen, onClose, onOpenWriteReview }) {
  const [activeFilter, setActiveFilter] = useState("All");

  if (!isOpen) return null;

  const categories = [
    { label: "All Reviews", count: companyReviews.length, value: "All" },
    { label: "Manufacturing Quality", count: companyReviews.filter(r => r.aspect === "Quality").length, value: "Quality" },
    { label: "On-Time Dispatch", count: companyReviews.filter(r => r.aspect === "Delivery").length, value: "Delivery" },
    { label: "Custom Tooling", count: companyReviews.filter(r => r.aspect === "Tooling").length, value: "Tooling" }
  ];

  const filteredReviews = activeFilter === "All"
    ? companyReviews
    : companyReviews.filter(r => r.aspect === activeFilter);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal all-reviews-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="all-reviews-header">
          <div className="all-reviews-title-col">
            <div className="eyebrow" style={{ marginBottom: "6px" }}>CLIENT TESTIMONIALS & FEEDBACK</div>
            <h2>Verified Company Reviews</h2>
            <p>Read authentic experiences and feedback from industrial buyers, plant managers, and quarry operators.</p>
          </div>
          <button
            type="button"
            className="write-review-btn"
            onClick={onOpenWriteReview}
          >
            <MessageSquare size={15} /> Write a Review
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="all-reviews-filter-row">
          {categories.map(cat => (
            <button
              key={cat.value}
              type="button"
              className={`ratings-tab ${activeFilter === cat.value ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              <span>{cat.label}</span>
              <span className="ratings-tab-badge">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="all-reviews-list">
          {filteredReviews.map(r => (
            <article className="all-reviews-item" key={r.id}>
              <div className="review-card-header">
                <div className="reviewer-avatar">
                  {r.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div className="reviewer-info">
                  <div className="reviewer-name-row">
                    <h4 className="reviewer-name">{r.author}</h4>
                    {r.verified && (
                      <span className="verified-buyer-pill">
                        <CheckCircle2 size={12} /> Verified Buyer
                      </span>
                    )}
                  </div>
                  <div className="reviewer-role">{r.role} · {r.company}</div>
                  <div className="reviewer-loc"><MapPin size={12} /> {r.location}</div>
                </div>
              </div>

              <div className="review-card-meta">
                <div className="review-stars-row">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star
                      key={s}
                      size={15}
                      className="star-icon-filled"
                      fill={s <= r.rating ? "#E8A817" : "#cbd5e1"}
                      color={s <= r.rating ? "#E8A817" : "#cbd5e1"}
                    />
                  ))}
                  <span className="review-rating-num">{r.rating}.0</span>
                </div>
                <span className="review-date">{r.date}</span>
              </div>

              <h5 className="review-headline">"{r.headline}"</h5>
              <p className="review-comment">{r.comment}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function WriteReviewModal({ isOpen, onClose }) {
  const [stars, setStars] = useState(5);
  const [hoverStars, setHoverStars] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  const getRatingLabel = (val) => {
    switch (val) {
      case 5: return "5.0 · Outstanding (Highest Quality & Service)";
      case 4: return "4.0 · Very Good (Dependable Performance)";
      case 3: return "3.0 · Satisfactory";
      case 2: return "2.0 · Needs Improvement";
      case 1: return "1.0 · Unsatisfactory";
      default: return `${val}.0 out of 5`;
    }
  };

  const currentScore = hoverStars || stars;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal review-submission-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {submitted ? (
          <div className="review-success-state">
            <CheckCircle2 size={54} color="#10b981" />
            <h3>Thank You for Your Feedback!</h3>
            <p>Your verified company review for Lakshmi PU Pads has been received and will be published on our verified company profile.</p>
          </div>
        ) : (
          <>
            <div className="review-modal-header">
              <div className="eyebrow">COMPANY FEEDBACK</div>
              <h2>Write a <em>Company Review</em></h2>
              <p className="review-modal-desc">Share your experience with Lakshmi PU Pads manufacturing standards, delivery, and service.</p>
            </div>

            <form onSubmit={handleSubmit} className="review-form">
              <div className="review-rating-picker-card">
                <span className="picker-label">Rate Overall Experience:</span>
                <div className="picker-stars-row">
                  {[1, 2, 3, 4, 5].map(s => (
                    <button
                      key={s}
                      type="button"
                      className="picker-star-btn"
                      onMouseEnter={() => setHoverStars(s)}
                      onMouseLeave={() => setHoverStars(0)}
                      onClick={() => setStars(s)}
                      aria-label={`${s} star`}
                    >
                      <Star
                        size={26}
                        fill={currentScore >= s ? "#E8A817" : "#e2e8f0"}
                        color={currentScore >= s ? "#E8A817" : "#cbd5e1"}
                      />
                    </button>
                  ))}
                  <span className="picker-score-badge">{getRatingLabel(currentScore)}</span>
                </div>
              </div>

              <div className="review-form-grid">
                <div className="review-form-field">
                  <label>Your Name *</label>
                  <input placeholder="e.g. Ramesh Kumar" required />
                </div>
                <div className="review-form-field">
                  <label>Company / Plant Name *</label>
                  <input placeholder="e.g. Deccan Aggregates & M-Sand" required />
                </div>
              </div>

              <div className="review-form-grid">
                <div className="review-form-field">
                  <label>City & State *</label>
                  <input placeholder="e.g. Hyderabad, Telangana" required />
                </div>
                <div className="review-form-field">
                  <label>Engagement Nature *</label>
                  <select defaultValue="" required>
                    <option value="" disabled>Select Relationship</option>
                    <option>Regular Industrial Client / Bulk Purchaser</option>
                    <option>OEM & Equipment Manufacturer</option>
                    <option>Quarry & Crushing Plant Operator</option>
                    <option>Mining & Infrastructure Contractor</option>
                    <option>Custom Moulding & Engineering Partner</option>
                  </select>
                </div>
              </div>

              <div className="review-form-field">
                <label>Review Headline *</label>
                <input placeholder="e.g. Reliable manufacturing partner and fast Hyderabad dispatch" required />
              </div>

              <div className="review-form-field">
                <label>Detailed Feedback *</label>
                <textarea rows={3} placeholder="Share details on Shore A hardness consistency, dispatch timeliness, communication, and engineering support..." required></textarea>
              </div>

              <button className="primary-btn review-submit-btn" type="submit">
                Submit Verified Review <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Logo({ onNavigate, isFooter = false }){
  if (isFooter) {
    return (
      <a 
        className="logo" 
        href="#home" 
        onClick={(e)=>{
          if (onNavigate) {
            e.preventDefault();
            onNavigate("home");
          }
        }} 
        aria-label="Lakshmi PU Pads home"
      >
        <span className="footer-logo-title">LAKSHMI PU PADS</span>
      </a>
    );
  }

  return (
    <div className="brand-header-group">
      <a 
        className="logo" 
        href="#home" 
        onClick={(e)=>{
          if (onNavigate) {
            e.preventDefault();
            onNavigate("home");
          }
        }} 
        aria-label="Lakshmi PU Pads home"
      >
        <img src="/logo.png" alt="Lakshmi PU Pads" className="logo-img" />
      </a>
      <div className="company-location-badge">
        <MapPin size={15} className="loc-icon" />
        <div className="loc-text-col">
          <span className="loc-city">Hyderabad, Telangana</span>
          <span className="loc-sub">Manufacturer · India</span>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ p, onSelectContact, onOpenDetails, onAddToRfq }){
  return (
    <article className="product-b2b-card" key={p.id}>
      <div className="product-b2b-img-wrap" onClick={()=>onOpenDetails(p, 0)}>
        <img src={p.views[0]?.src} alt={p.name} className="product-b2b-img" />
      </div>
      <div className="product-b2b-body">
        <h3 className="product-b2b-title" onClick={()=>onOpenDetails(p, 0)}>{p.name}</h3>
        <div className="product-b2b-price">
          <strong>{p.price}</strong> <span className="unit">{p.unit}</span>
        </div>
        
        <div className="product-b2b-actions">
          <button 
            type="button" 
            className="product-b2b-view-btn"
            onClick={()=>onOpenDetails(p, 0)}
          >
            <Eye size={15} /> View Details
          </button>
          {onAddToRfq && (
            <button
              type="button"
              className="product-b2b-rfq-pill-btn"
              title="Add to multi-item RFQ list"
              onClick={(e)=>{
                e.stopPropagation();
                onAddToRfq(p, 1);
              }}
            >
              <Plus size={14} /> RFQ
            </button>
          )}
        </div>

        <div className="product-b2b-supplier-info">
          <div className="supplier-name">Lakshmi PU Pads · {p.supplier}</div>
          <div className="supplier-loc">{p.location}</div>
        </div>
        <div className="product-b2b-metrics">
          <span className="response-rate">92% Response Rate</span>
          <span className="rating-wrap" title="Verified Manufacturer Rating: 4.9/5">
            <span className="stars-icons">
              {[1,2,3,4,5].map(s=>(
                <span key={s} className="star-fill">★</span>
              ))}
            </span>
            <strong>4.9</strong>
            <small>(Verified)</small>
          </span>
        </div>
      </div>
    </article>
  );
}

function ProductDetailModal({ product, initialViewIdx, onClose, onSelectContact, onAddToRfq }){
  const [activeViewIdx, setActiveViewIdx] = useState(initialViewIdx || 0);
  const currentView = product.views[activeViewIdx] || product.views[0];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="product-detail-modal" onClick={e=>e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close details"><X/></button>
        
        <div className="pdm-header">
          <div className="eyebrow">{product.cat}</div>
          <h2>{product.name}</h2>
          <div className="pdm-subhead">
            <span className="pdm-supplier">{product.supplier}</span>
            <span className="pdm-dot">·</span>
            <span className="pdm-location">{product.location}</span>
          </div>
        </div>

        <div className="pdm-layout">
          {/* Left Column: Gallery */}
          <div className="pdm-gallery">
            <div className="pdm-main-img-box">
              <img src={currentView.src} alt={`${product.name} - ${currentView.label}`} />
              <div className="pdm-active-tag">{currentView.label}</div>
            </div>
            <div className="pdm-thumbnails">
              {product.views.map((v, idx) => (
                <button
                  key={v.label}
                  type="button"
                  className={`pdm-thumb-btn ${activeViewIdx === idx ? "active" : ""}`}
                  onClick={()=>setActiveViewIdx(idx)}
                >
                  <img src={v.src} alt={v.label} />
                  <span>{v.label}</span>
                </button>
              ))}
            </div>

            <div className="pdm-gallery-cta">
              <button
                type="button"
                className="product-b2b-contact-btn large"
                onClick={()=>{
                  onClose();
                  onSelectContact(product);
                }}
              >
                <Send size={16} style={{transform:"rotate(-20deg)"}} /> Contact Supplier for Best Quote
              </button>
              {onAddToRfq && (
                <button
                  type="button"
                  className="product-b2b-rfq-add-btn"
                  onClick={()=>{
                    onAddToRfq(product, 1);
                  }}
                >
                  <ClipboardList size={16} /> Add to Multi-Item RFQ List
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Specs & Description */}
          <div className="pdm-info">
            <div className="pdm-price-banner">
              <div className="pdm-price-val">
                <strong>{product.price}</strong>
                <span>{product.unit}</span>
              </div>
              <div className="pdm-min-order">
                <span>Min. Order:</span> <b>{product.minOrder}</b>
              </div>
            </div>

            <div className="pdm-section">
              <h4>Product Description</h4>
              <p className="pdm-desc">{product.description}</p>
            </div>

            <div className="pdm-section">
              <h4>Technical Specifications</h4>
              <div className="pdm-specs-table">
                <table>
                  <tbody>
                    {product.specs.map(s => (
                      <tr key={s.label}>
                        <td className="spec-label">{s.label}</td>
                        <td className="spec-value">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pdm-section">
              <h4>Key Performance Features</h4>
              <ul className="pdm-features-list">
                {product.features.map(f => (
                  <li key={f}>
                    <Check size={16} className="feature-check-icon"/>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RfqDrawer({ isOpen, onClose, cart, onUpdateQty, onRemoveItem, onClearCart }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rfq-drawer-backdrop" onClick={onClose}>
      <div className="rfq-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="rfq-drawer-header">
          <div className="rfq-dh-title">
            <ClipboardList size={20} color="var(--color-primary)" />
            <h3>B2B Quote Request List</h3>
            <span className="rfq-dh-badge">{cart.length} {cart.length === 1 ? "Product" : "Products"}</span>
          </div>
          <button className="rfq-drawer-close" onClick={onClose} aria-label="Close quote list">
            <X size={18} />
          </button>
        </div>

        <div className="rfq-drawer-body">
          {submitted ? (
            <div className="enquiry-success-state" style={{ padding: "40px 10px" }}>
              <CheckCircle2 size={54} color="#10b981" />
              <h3>Consolidated RFQ Received!</h3>
              <p>
                Thank you{name ? `, ${name}` : ""}{company ? ` from ${company}` : ""}! Your formal request for quotation for{" "}
                <strong>{cart.length} polyurethane component{cart.length > 1 ? "s" : ""}</strong> has been forwarded to our engineering sales division in Hyderabad.
              </p>
              <div className="enquiry-success-details">
                {phone && <span>📞 Follow-up Phone: {phone}</span>}
                {email && <span>✉️ Quotation Email: {email}</span>}
              </div>
              <button
                type="button"
                className="enquiry-submit-btn enquiry-success-btn"
                onClick={() => {
                  onClearCart();
                  onClose();
                }}
              >
                Close & Return
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="rfq-drawer-empty">
              <div className="rfq-empty-icon">
                <ClipboardList size={32} />
              </div>
              <h4>Your Quote List is Empty</h4>
              <p>
                Browse our polyurethane components and click <strong>"Add to Quote List"</strong> or <strong>"+ RFQ"</strong> on any product card to compile a multi-item enquiry.
              </p>
            </div>
          ) : (
            <>
              <div className="rfq-items-list">
                {cart.map((item) => (
                  <div className="rfq-item-card" key={item.product.id}>
                    <img
                      src={item.product.views?.[0]?.src}
                      alt={item.product.name}
                      className="rfq-item-img"
                    />
                    <div className="rfq-item-info">
                      <div className="rfq-item-title" title={item.product.name}>
                        {item.product.name}
                      </div>
                      <div className="rfq-item-meta">
                        <span>{item.product.price} {item.product.unit}</span>
                        <span>·</span>
                        <span>Min. {item.product.minOrder}</span>
                      </div>
                      <div className="rfq-item-qty-row">
                        <button
                          type="button"
                          className="rfq-qty-btn"
                          onClick={() => onUpdateQty(item.product.id, -1)}
                          title="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="rfq-qty-display">{item.quantity}</span>
                        <button
                          type="button"
                          className="rfq-qty-btn"
                          onClick={() => onUpdateQty(item.product.id, 1)}
                          title="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="rfq-item-remove-btn"
                      onClick={() => onRemoveItem(item.product.id)}
                      title="Remove from quote list"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="rfq-form-section">
                <h4>
                  <FileText size={15} color="var(--color-primary)" />
                  Submit Multi-Item Requirement
                </h4>
                <div className="rfq-form-grid">
                  <div className="rfq-form-field">
                    <label>Your Name *</label>
                    <input
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="rfq-form-field">
                    <label>Company / Plant *</label>
                    <input
                      required
                      placeholder="e.g. Deccan Mining Corp"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div className="rfq-form-field">
                    <label>Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="rfq-form-field">
                    <label>Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. purchase@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="rfq-form-field">
                  <label>Application / Custom Dimensions (Optional)</label>
                  <textarea
                    placeholder="Specify operating environment, machine model, custom Shore A hardness or required delivery timeline..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <button type="submit" className="rfq-submit-btn">
                  <Send size={15} /> Request Consolidated Official Quote
                </button>

                <div className="rfq-drawer-trust-note">
                  <ShieldCheck size={14} color="#10b981" />
                  <span>Direct manufacturer quotation · GST compliant invoice</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function EnquiryModal({ isOpen, product, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage(
        product
          ? `Hi, I am interested in ${product.name} (${product.price} ${product.unit}). Please provide price quotation for bulk quantity and delivery timeline.`
          : "Hi, I would like to get a quote and specifications for custom polyurethane components."
      );
    }
  }, [isOpen, product]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal enquiry-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {submitted ? (
          <div className="enquiry-success-state">
            <CheckCircle2 size={52} color="#10b981" />
            <h3>Enquiry Sent Successfully!</h3>
            <p>
              Thank you{name ? `, ${name}` : ""}! Your requirement for{" "}
              <strong>{product ? product.name : "custom polyurethane components"}</strong> has been received.
              Our sales engineering team will get back to you shortly with the best quote.
            </p>
            <div className="enquiry-success-details">
              {phone && <span>📞 Phone: {phone}</span>}
              {email && <span>✉️ Email: {email}</span>}
            </div>
            <button type="button" className="enquiry-submit-btn enquiry-success-btn" onClick={onClose}>
              Done / Close
            </button>
          </div>
        ) : (
          <>
            <div className="enquiry-modal-header">
              <div className="enquiry-eyebrow">
                <Sparkles size={13} />
                <span>{product ? "PRODUCT ENQUIRY & RFQ" : "REQUEST A CUSTOM QUOTE"}</span>
              </div>
              <h2 className="enquiry-title">
                {product ? (
                  <>Get Best Quote for <em>{product.name}</em></>
                ) : (
                  <>Let's build the right <em>solution.</em></>
                )}
              </h2>
              <p className="enquiry-desc">
                {product
                  ? `Direct manufacturer pricing from Lakshmi PU Pads with guaranteed quality standards.`
                  : "Share your dimensions and technical requirement for immediate assistance."}
              </p>
            </div>

            {product && (
              <div className="enquiry-product-preview">
                <div className="epp-thumb-wrap">
                  <img src={product.views?.[0]?.src} alt={product.name} className="epp-thumb" />
                </div>
                <div className="epp-details">
                  <div className="epp-category">{product.cat || "Polyurethane Components"}</div>
                  <div className="epp-name" title={product.name}>{product.name}</div>
                  <div className="epp-meta-row">
                    <span className="epp-price-tag">{product.price} <small>{product.unit}</small></span>
                    <span className="epp-badge">Min. {product.minOrder || "1 Piece"}</span>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="enquiry-form-row">
                <div className="enquiry-field">
                  <label htmlFor="enquiry-name">Your Name *</label>
                  <div className="input-with-icon">
                    <User size={15} className="field-icon" />
                    <input
                      id="enquiry-name"
                      placeholder="e.g. Rajesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiry-phone">Phone Number *</label>
                  <div className="input-with-icon">
                    <Phone size={15} className="field-icon" />
                    <input
                      id="enquiry-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-email">Email Address (Optional)</label>
                <div className="input-with-icon">
                  <Mail size={15} className="field-icon" />
                  <input
                    id="enquiry-email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-message">Requirement / Quantity Details *</label>
                <textarea
                  id="enquiry-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Mention required quantity, dimensions, or specific technical criteria..."
                  required
                />
              </div>

              <button type="submit" className="enquiry-submit-btn">
                <span>Send Enquiry for Best Quote</span>
                <Send size={15} style={{transform: "rotate(-10deg)"}} />
              </button>

              <div className="enquiry-trust-banner">
                <span>⚡ Direct Manufacturer Response</span>
                <span>•</span>
                <span>🔒 100% Confidential RFQ</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function ProductsPage({ 
  products, 
  activeCategory, 
  setActiveCategory, 
  categories, 
  onSelectContact, 
  onOpenDetails, 
  onNavigateHome,
  onAddToRfq 
}){
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProdId, setSelectedProdId] = useState(products[0]?.id || "");
  const [activeViewIdx, setActiveViewIdx] = useState(0);
  const searchRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter products by search text and active category
  const filteredProducts = products.filter(p => {
    const matchesCat = activeCategory === "All" || p.categoryGroup === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) ||
      p.cat.toLowerCase().includes(query) ||
      p.categoryGroup.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.specs.some(s => s.value.toLowerCase().includes(query) || s.label.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  // Current selected product (fallback safely)
  const currentProduct = products.find(p => p.id === selectedProdId) || filteredProducts[0] || products[0];
  const currentView = currentProduct?.views?.[activeViewIdx] || currentProduct?.views?.[0];


  const handleSelectProduct = (product) => {
    setSelectedProdId(product.id);
    setActiveViewIdx(0);
    setIsDropdownOpen(false);
  };

  return (
    <div className="products-page">
      <div className="products-page-header">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <button type="button" className="breadcrumb-link" onClick={onNavigateHome}>
            Home
          </button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">All Products</span>
        </nav>
        
        <div className="eyebrow">OUR CATALOG</div>
        <h1>All Products</h1>
        <p>
          Search or select any polyurethane component from the dropdown to view its full engineering specifications and views.
        </p>

        {/* Search Bar with Interactive Dropdown */}
        <div className="product-search-wrapper" ref={searchRef}>
          <div 
            className={`product-search-bar ${isDropdownOpen ? "focused" : ""}`}
            onClick={() => setIsDropdownOpen(true)}
          >
            <Search size={20} className="search-bar-icon" />
            <input
              type="text"
              className="product-search-input"
              placeholder="Search by product name, grade, or select from dropdown..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsDropdownOpen(true);
              }}
              onFocus={() => setIsDropdownOpen(true)}
              aria-label="Search polyurethane products"
            />
            
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchQuery("");
                }}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}

            <button
              type="button"
              className="search-dropdown-toggle-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              aria-label="Toggle products dropdown"
            >
              <span className="search-items-pill">{filteredProducts.length} Products</span>
              {isDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {/* Dropdown Menu showing all product names without images */}
          {isDropdownOpen && (
            <div className="product-dropdown-menu">
              <div className="dropdown-menu-header">
                <span className="dm-title">SELECT A PRODUCT</span>
                <span className="dm-badge">{filteredProducts.length} Available</span>
              </div>
              <div className="dropdown-menu-list">
                {filteredProducts.length === 0 ? (
                  <div className="dropdown-empty-state">
                    <p>No products found matching "<strong>{searchQuery}</strong>"</p>
                    <button
                      type="button"
                      className="dropdown-reset-btn"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("All");
                      }}
                    >
                      Show All Products
                    </button>
                  </div>
                ) : (
                  filteredProducts.map((p) => {
                    const isSelected = p.id === currentProduct?.id;
                    return (
                      <div
                        key={p.id}
                        className={`dropdown-name-item ${isSelected ? "selected" : ""}`}
                        onClick={() => handleSelectProduct(p)}
                      >
                        <span className="dropdown-item-name">{p.name}</span>
                        {isSelected && (
                          <span className="dropdown-item-selected-badge">
                            <Check size={14} /> Selected
                          </span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Category Tabs */}
        <div className="product-filter-tabs">
          {categories.map(cat => {
            const count = cat === "All" ? products.length : products.filter(p => p.categoryGroup === cat).length;
            return (
              <button
                key={cat}
                type="button"
                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory(cat);
                  if (cat !== "All") {
                    const firstInCat = products.find(p => p.categoryGroup === cat);
                    if (firstInCat) {
                      setSelectedProdId(firstInCat.id);
                      setActiveViewIdx(0);
                    }
                  }
                }}
              >
                <span>{cat === "All" ? "All Products" : cat}</span>
                <span className="badge">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Product Details Showcase */}
      <section className="section products-section" style={{paddingTop: "32px"}}>
        {/* Main Product Showcase Card */}
        {currentProduct && (
          <div className="product-showcase-card">
            <div className="showcase-header">
              <div className="showcase-header-left">
                <div className="eyebrow">{currentProduct.cat}</div>
                <h2>{currentProduct.name}</h2>
                <div className="pdm-subhead">
                  <span className="pdm-supplier">{currentProduct.supplier}</span>
                  <span className="pdm-dot">·</span>
                  <span className="pdm-location">{currentProduct.location}</span>
                  <span className="pdm-dot">·</span>
                  <span className="response-rate">{currentProduct.responseRate}</span>
                </div>
              </div>
              <div className="showcase-header-right">
                <div className="pdm-price-val">
                  <strong>{currentProduct.price}</strong>
                  <span>{currentProduct.unit}</span>
                </div>
                <div className="pdm-min-order">
                  <span>Min. Order:</span> <b>{currentProduct.minOrder}</b>
                </div>
              </div>
            </div>

            <div className="pdm-layout">
              {/* Left Column: Multi-angle views & Contact */}
              <div className="pdm-gallery">
                <div className="pdm-main-img-box">
                  <img src={currentView?.src} alt={`${currentProduct.name} - ${currentView?.label}`} />
                  <div className="pdm-active-tag">{currentView?.label}</div>
                </div>
                <div className="pdm-thumbnails">
                  {currentProduct.views.map((v, idx) => (
                    <button
                      key={v.label}
                      type="button"
                      className={`pdm-thumb-btn ${activeViewIdx === idx ? "active" : ""}`}
                      onClick={() => setActiveViewIdx(idx)}
                    >
                      <img src={v.src} alt={v.label} />
                      <span>{v.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pdm-gallery-cta">
                  <button
                    type="button"
                    className="product-b2b-contact-btn large"
                    onClick={() => onSelectContact(currentProduct)}
                  >
                    <Send size={16} style={{transform:"rotate(-20deg)"}} /> Contact Supplier for Best Quote
                  </button>
                  {onAddToRfq && (
                    <button
                      type="button"
                      className="product-b2b-rfq-add-btn"
                      onClick={() => onAddToRfq(currentProduct, 1)}
                    >
                      <ClipboardList size={16} /> Add to Multi-Item RFQ List
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Specifications & Description */}
              <div className="pdm-info">
                <div className="pdm-section">
                  <h4>Product Description</h4>
                  <p className="pdm-desc">{currentProduct.description}</p>
                </div>

                <div className="pdm-section">
                  <h4>Technical Specifications</h4>
                  <div className="pdm-specs-table">
                    <table>
                      <tbody>
                        {currentProduct.specs.map(s => (
                          <tr key={s.label}>
                            <td className="spec-label">{s.label}</td>
                            <td className="spec-value">{s.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pdm-section">
                  <h4>Key Performance Features</h4>
                  <ul className="pdm-features-list">
                    {currentProduct.features.map(f => (
                      <li key={f}>
                        <Check size={16} className="feature-check-icon"/>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="products-custom-cta-box">
          <div>
            <h3>Need a Custom Formulation, Hardness or CAD Drawing?</h3>
            <p>
              We specialize in custom polyurethane tooling, reverse engineering, and custom prepolymer formulation tailored to your operating temperatures, shock loads, and abrasive materials.
            </p>
          </div>
          <button 
            type="button" 
            className="primary-btn"
            onClick={()=>onSelectContact(null)}
          >
            Request Custom Quote <ArrowRight size={17}/>
          </button>
        </div>
      </section>
    </div>
  );
}

function App(){
  const [open,setOpen]=useState(false);
  const [quote,setQuote]=useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);
  const [detailViewIdx, setDetailViewIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [rfqCart, setRfqCart] = useState([]);
  const [rfqDrawerOpen, setRfqDrawerOpen] = useState(false);

  const [page, setPage] = useState(() => {
    if (typeof window !== "undefined" && (window.location.hash === "#all-products" || window.location.hash === "#products")) {
      return "products";
    }
    return "home";
  });

  const categories = ["All", "Rock Breaker Parts", "Screening & Dewatering", "Industrial & Mining Wear"];

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#all-products" || window.location.hash === "#products") {
        setPage("products");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (window.location.hash === "#home" || window.location.hash === "") {
        setPage("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleAddToRfq = (product, qty = 1) => {
    setRfqCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setRfqDrawerOpen(true);
  };

  const handleUpdateRfqQty = (productId, delta) => {
    setRfqCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveFromRfq = (productId) => {
    setRfqCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearRfqCart = () => {
    setRfqCart([]);
  };

  const navigateTo = (targetPage, sectionId = null, category = null) => {
    setOpen(false);
    if (category) {
      setActiveCategory(category);
    }
    if (targetPage === "products") {
      setPage("products");
      window.location.hash = "all-products";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setPage("home");
      window.location.hash = sectionId ? sectionId : "home";
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleOpenDetails = (product, initialView = 0) => {
    setDetailProduct(product);
    setDetailViewIdx(initialView);
  };

  const handleSelectContact = (product) => {
    setSelectedProduct(product);
    setQuote(true);
  };

  return <div className="app">
    <header className="header">
      <Logo onNavigate={navigateTo}/>

      <div className="header-nav-and-contact">
        <nav className={open ? "nav open":"nav"}>
          <a 
            href="#home" 
            className={page === "home" ? "active" : ""}
            onClick={(e)=>{ e.preventDefault(); navigateTo("home"); }}
          >
            Home
          </a>

          {/* Products Dropdown (PU Priority) */}
          <div className="nav-dropdown-wrapper">
            <button
              type="button"
              className={`nav-dropdown-trigger ${page === "products" ? "active" : ""}`}
              onClick={() => navigateTo("products")}
              aria-expanded="false"
            >
              <span>Products</span>
              <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-eyebrow">
                <Sparkles size={12} />
                <span>POLYURETHANE COMPONENTS (PRIMARY SPECIALTY)</span>
              </div>
              <a
                href="#all-products"
                className="nav-dropdown-item"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("products", null, "Rock Breaker Parts");
                }}
              >
                <div className="nav-dropdown-icon"><Boxes size={16}/></div>
                <div className="nav-dropdown-text">
                  <strong>Rock Breaker & Mining Parts</strong>
                  <span>Buffer pads, impact damper cushions, wear kits</span>
                </div>
              </a>
              <a
                href="#all-products"
                className="nav-dropdown-item"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("products", null, "Screening & Dewatering");
                }}
              >
                <div className="nav-dropdown-icon"><Layers3 size={16}/></div>
                <div className="nav-dropdown-text">
                  <strong>Screening & Dewatering Media</strong>
                  <span>Modular screen panels, M-sand dewatering, hydrocyclones</span>
                </div>
              </a>
              <a
                href="#all-products"
                className="nav-dropdown-item"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("products", null, "Industrial & Mining Wear");
                }}
              >
                <div className="nav-dropdown-icon"><Settings2 size={16}/></div>
                <div className="nav-dropdown-text">
                  <strong>Industrial & Conveyor Wear Protection</strong>
                  <span>PU coated rollers, belt cleaner blades, wear liner sheets</span>
                </div>
              </a>
              <div className="nav-dropdown-footer">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProduct(null);
                    setQuote(true);
                  }}
                >
                  ⚡ Custom Moulding & CAD Tooling
                </a>
                <a
                  href="#all-products"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("products", null, "All");
                  }}
                >
                  View All 8 Products →
                </a>
              </div>
            </div>
          </div>

          <a 
            href="#applications" 
            onClick={(e)=>{ e.preventDefault(); navigateTo("home", "applications"); }}
          >
            Applications
          </a>
          <a 
            href="#why-pu" 
            onClick={(e)=>{ e.preventDefault(); navigateTo("home", "why-pu"); }}
          >
            Why PU?
          </a>
          <a 
            href="#quality" 
            onClick={(e)=>{ e.preventDefault(); navigateTo("home", "quality"); }}
          >
            Quality
          </a>
          <a 
            href="#about" 
            onClick={(e)=>{ e.preventDefault(); navigateTo("home", "about"); }}
          >
            About
          </a>
          <a 
            href="#ratings" 
            onClick={(e)=>{ e.preventDefault(); navigateTo("home", "ratings"); }}
          >
            Ratings
          </a>
          <a 
            href="#contact" 
            onClick={(e)=>{ e.preventDefault(); navigateTo("home", "contact"); }}
          >
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <div className="header-contact-direct">
            <div className="hcd-icon"><Phone size={15}/></div>
            <div className="hcd-info">
              <span className="hcd-label">Call Supplier</span>
              <a href="tel:+919876543210" className="hcd-phone">+91 98765 43210</a>
            </div>
          </div>

          <button
            type="button"
            className="header-rfq-cart-btn"
            onClick={() => setRfqDrawerOpen(true)}
            aria-label={`View Quote Request List with ${rfqCart.length} items`}
          >
            <ClipboardList size={16} />
            <span>RFQ List</span>
            <span className="rfq-cart-count-badge">{rfqCart.length}</span>
          </button>

          <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
        </div>
      </div>
    </header>

    <main>
      {page === "products" ? (
        <ProductsPage
          products={products}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
          onSelectContact={handleSelectContact}
          onOpenDetails={handleOpenDetails}
          onNavigateHome={()=>navigateTo("home")}
          onAddToRfq={handleAddToRfq}
        />
      ) : (
        <>
          <section id="home" className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> ENGINEERED INDUSTRIAL SOLUTIONS</div>
              <h1>Built for the<br/><em>hardest</em> work.</h1>
              <p>High-performance polyurethane and industrial components engineered for durability, precision and dependable performance.</p>
              <div className="hero-actions">
                <button type="button" className="primary-btn" onClick={()=>navigateTo("products")}>Explore products <ArrowRight size={18}/></button>
                <button type="button" className="text-btn" onClick={()=>{setSelectedProduct(null);setQuote(true);}}>Talk to an expert <MoveUpRight size={17}/></button>
              </div>
              <div className="hero-proof">
                <div><strong>15+</strong><span>Years of<br/>experience</span></div>
                <div><strong>500+</strong><span>Custom<br/>solutions</span></div>
                <div><strong>98%</strong><span>On-time<br/>delivery</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image"></div>
              <div className="hero-floating top"><span>01</span><b>Wear<br/>resistant</b></div>
              <div className="hero-floating bottom"><CircleGauge size={22}/><div><b>Precision engineered</b><small>Made for performance</small></div></div>
              <div className="hero-grid"></div>
            </div>
          </section>

          <section className="trust">
            <span>Trusted engineering for demanding applications</span>
            <div className="trust-line"></div>
            <b>QUALITY</b><b>PRECISION</b><b>DURABILITY</b><b>CUSTOM</b>
          </section>

          <section id="products" className="section products-section">
            <div className="section-head">
              <div><div className="eyebrow">FEATURED PRODUCT RANGE</div><h2>Components that<br/><em>keep industry moving.</em></h2></div>
              <p>Explore our most in-demand polyurethane components built to withstand heavy impacts and severe abrasive wear.</p>
            </div>

            <div className="product-grid">
              {products.slice(0, 4).map((p) => (
                <ProductCard 
                  key={p.id} 
                  p={p} 
                  onSelectContact={handleSelectContact} 
                  onOpenDetails={handleOpenDetails} 
                  onAddToRfq={handleAddToRfq}
                />
              ))}
            </div>

            <div className="center-link">
              <button
                type="button"
                className="view-more-products-btn"
                id="btn-view-complete-range"
                onClick={() => navigateTo("products")}
              >
                View Complete Product Range ({products.length} Products) <ArrowRight size={17}/>
              </button>
            </div>
          </section>

          <section id="about" className="about-unified-section">
            <div className="about-unified-top">
              <div className="about-unified-intro">
                <div className="eyebrow">ABOUT LAKSHMI PU PADS</div>
                <h2>Material expertise.<br/><em>Real-world performance.</em></h2>
                <p>
                  We believe industrial components shouldn't be an afterthought. We combine deep material knowledge, precision polyurethane manufacturing, and application-focused engineering to deliver components that work harder and last longer where abrasion, impact, and continuous operation are part of the job.
                </p>
                <div className="about-capabilities-list">
                  {[
                    ["Precision manufacturing", "Consistent dimensions, strict tolerances, and dependable performance across every batch."],
                    ["Custom engineering", "Tailored polyurethane compounds and tooling developed around your exact application."],
                    ["Quality first", "High-grade prepolymer resins and rigorous testing for demanding industrial conditions."]
                  ].map(([a,b])=><div className="about-cap-item" key={a}>
                    <span className="cap-icon"><Check size={16}/></span>
                    <div>
                      <b>{a}</b>
                      <small>{b}</small>
                    </div>
                  </div>)}
                </div>
                <div className="about-cta-row">
                  <a href="#contact" className="primary-btn">Start a conversation <ArrowRight size={18}/></a>
                </div>
              </div>

              <div className="about-stats-card-grid">
                <div className="about-stat-box">
                  <Factory size={24}/>
                  <strong>15+</strong>
                  <span>Years in manufacturing</span>
                </div>
                <div className="about-stat-box">
                  <ShieldCheck size={24}/>
                  <strong>100%</strong>
                  <span>Quality focused</span>
                </div>
                <div className="about-stat-box">
                  <Boxes size={24}/>
                  <strong>500+</strong>
                  <span>Custom solutions</span>
                </div>
                <div className="about-stat-box">
                  <Settings2 size={24}/>
                  <strong>24/7</strong>
                  <span>Technical support</span>
                </div>
              </div>
            </div>
          </section>

          {/* Company Ratings & Verified Buyer Reviews Section */}
          <CompanyRatings 
            onSelectContact={handleSelectContact}
            onOpenReviewModal={()=>setReviewModalOpen(true)}
          />

          <section id="contact" className="contact-section">
            <div><div className="eyebrow">LET'S WORK TOGETHER</div><h2>Have a tough<br/><em>application?</em></h2><p>Tell us what you're trying to solve. We'll help you find the right material, design and solution.</p><div className="contact-mini"><span><Phone size={17}/><b>+91 98765 43210</b></span><span><Mail size={17}/><b>info@lakshmipupads.com</b></span></div></div>
            <form onSubmit={e=>{e.preventDefault();setQuote(false);alert("Thank you! We'll contact you shortly.")}}>
              <div className="form-row"><input placeholder="Your name"/><input placeholder="Company name"/></div>
              <div className="form-row"><input placeholder="Email address"/><input placeholder="Phone number"/></div>
              <select defaultValue=""><option value="" disabled>What are you looking for?</option><option>Polyurethane components</option><option>Screening solutions</option><option>Custom manufacturing</option></select>
              <textarea placeholder="Tell us briefly about your requirement..."></textarea>
              <button className="primary-btn" type="submit">Send enquiry <Send size={17}/></button>
            </form>
          </section>
        </>
      )}
    </main>

    <footer>
      <div className="footer-main">
        <div>
          <Logo onNavigate={navigateTo} isFooter={true}/>
          <p>Engineered polyurethane pads and industrial solutions built for demanding applications.</p>
          <div className="socials"><span><Linkedin/></span><span><Instagram/></span></div>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#all-products" onClick={(e)=>{ e.preventDefault(); navigateTo("products"); }}>All Products</a>
          <a href="#about" onClick={(e)=>{ e.preventDefault(); navigateTo("home", "about"); }}>About us</a>
          <a href="#ratings" onClick={(e)=>{ e.preventDefault(); navigateTo("home", "ratings"); }}>Company Ratings</a>
          <a href="#contact" onClick={(e)=>{ e.preventDefault(); navigateTo("home", "contact"); }}>Contact</a>
        </div>
        <div>
          <h4>Contact</h4>
          <span>Hyderabad, Telangana, India</span>
          <span>+91 98765 43210</span>
          <span>info@lakshmipupads.com</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Lakshmi PU Pads. All rights reserved.</span>
        <span>Built for performance.</span>
      </div>
    </footer>

    {/* Detail Specifications Modal */}
    {detailProduct && (
      <ProductDetailModal
        product={detailProduct}
        initialViewIdx={detailViewIdx}
        onClose={()=>setDetailProduct(null)}
        onSelectContact={handleSelectContact}
        onAddToRfq={handleAddToRfq}
      />
    )}

    {/* Product & Quick Enquiry Modal */}
    <EnquiryModal
      isOpen={quote}
      product={selectedProduct}
      onClose={() => {
        setQuote(false);
        setSelectedProduct(null);
      }}
    />

    {/* Multi-Item B2B RFQ Cart Drawer */}
    <RfqDrawer
      isOpen={rfqDrawerOpen}
      onClose={()=>setRfqDrawerOpen(false)}
      cart={rfqCart}
      onUpdateQty={handleUpdateRfqQty}
      onRemoveItem={handleRemoveFromRfq}
      onClearCart={handleClearRfqCart}
    />

    {/* Write Review Modal */}
    <WriteReviewModal
      isOpen={reviewModalOpen}
      onClose={()=>setReviewModalOpen(false)}
    />
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);