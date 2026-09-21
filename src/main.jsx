import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowUpRight, ChevronDown, ChevronUp, Menu, X, Phone, Mail, MapPin, ArrowRight,
  Check, Factory, ShieldCheck, Settings2, Layers3, Boxes, Sparkles,
  CircleGauge, MoveUpRight, Send, Plus, Linkedin, Instagram, Eye, Info
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

function Logo(){
  return <a className="logo" href="#home" aria-label="Lakshmi PU Pads home">
    <img src="/logo.png" alt="Lakshmi PU Pads" className="logo-img" />
  </a>
}

function ProductCard({ p, onSelectContact, onOpenDetails }){
  const [viewIdx, setViewIdx] = useState(0);
  const currentView = p.views[viewIdx] || p.views[0];

  return (
    <article className="product-b2b-card" key={p.id}>
      <div className="product-b2b-img-wrap" onClick={()=>onOpenDetails(p, viewIdx)}>
        <img src={currentView.src} alt={`${p.name} - ${currentView.label}`} className="product-b2b-img" />
        <div className="view-angle-badge">{currentView.label}</div>
        <div className="view-switcher-chips" onClick={e=>e.stopPropagation()}>
          {p.views.map((v, i) => (
            <button
              key={v.label}
              type="button"
              className={`view-chip ${viewIdx === i ? "active" : ""}`}
              onClick={()=>setViewIdx(i)}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>
      <div className="product-b2b-body">
        <h3 className="product-b2b-title" onClick={()=>onOpenDetails(p, viewIdx)}>{p.name}</h3>
        <div className="product-b2b-price">
          <strong>{p.price}</strong> <span className="unit">{p.unit}</span>
        </div>
        
        <div className="product-b2b-actions">
          <button 
            type="button" 
            className="product-b2b-contact-btn"
            onClick={()=>onSelectContact(p)}
          >
            <Send size={14} style={{transform:"rotate(-20deg)"}} /> Contact Supplier
          </button>
          <button 
            type="button" 
            className="product-b2b-details-btn"
            onClick={()=>onOpenDetails(p, viewIdx)}
          >
            <Eye size={14}/> View Specs & Details
          </button>
        </div>

        <div className="product-b2b-supplier-info">
          <div className="supplier-name">{p.supplier}</div>
          <div className="supplier-loc">{p.location}</div>
        </div>
        <div className="product-b2b-metrics">
          <span className="response-rate">{p.responseRate}</span>
          <span className="rating-wrap">
            <span className="stars-icons">
              {[1,2,3,4,5].map(s=>(
                <span key={s} className={s <= Math.round(Number(p.rating)) ? "star-fill" : "star-empty"}>★</span>
              ))}
            </span>
            <strong>{p.rating}</strong>
            <small>({p.reviews})</small>
          </span>
        </div>
      </div>
    </article>
  );
}

function ProductDetailModal({ product, initialViewIdx, onClose, onSelectContact }){
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

function App(){
  const [open,setOpen]=useState(false);
  const [quote,setQuote]=useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);
  const [detailViewIdx, setDetailViewIdx] = useState(0);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Rock Breaker Parts", "Screening & Dewatering", "Industrial & Mining Wear"];

  const filteredProducts = products.filter(p => {
    if (activeCategory === "All") return true;
    return p.categoryGroup === activeCategory;
  });

  const displayedProducts = (showAllProducts || activeCategory !== "All")
    ? filteredProducts 
    : filteredProducts.slice(0, 4);

  const handleOpenDetails = (product, initialView = 0) => {
    setDetailProduct(product);
    setDetailViewIdx(initialView);
  };

  const handleSelectContact = (product) => {
    setSelectedProduct(product);
    setQuote(true);
  };

  const nav = ["Products","About","Contact"];

  return <div className="app">
    <div className="topbar"><div>Precision polyurethane pads & industrial components</div>      <div className="toplinks"><span><Phone size={13}/> +91 98765 43210</span><span><Mail size={13}/> info@lakshmipupads.com</span></div></div>

    <header className="header">
      <Logo/>
      <nav className={open ? "nav open":"nav"}>
        {nav.map((n,i)=><a key={n} href={"#"+n.toLowerCase()} onClick={()=>setOpen(false)}>{n}{i===0 && <ChevronDown size={15}/>}</a>)}
        <button className="nav-cta" onClick={()=>{setSelectedProduct(null);setQuote(true);}}>Request a Quote <ArrowUpRight size={17}/></button>
      </nav>
      <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> ENGINEERED INDUSTRIAL SOLUTIONS</div>
          <h1>Built for the<br/><em>hardest</em> work.</h1>
          <p>High-performance polyurethane and industrial components engineered for durability, precision and dependable performance.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#products">Explore products <ArrowRight size={18}/></a>
            <button className="text-btn" onClick={()=>{setSelectedProduct(null);setQuote(true);}}>Talk to an expert <MoveUpRight size={17}/></button>
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
          <div><div className="eyebrow">OUR PRODUCT RANGE</div><h2>Components that<br/><em>keep industry moving.</em></h2></div>
          <p>Explore multi-angle views, engineering specifications, and custom-molded polyurethane solutions built to withstand heavy impacts and severe abrasive wear.</p>
        </div>

        <div className="product-filter-tabs">
          {categories.map(cat => {
            const count = cat === "All" ? products.length : products.filter(p=>p.categoryGroup === cat).length;
            return (
              <button
                key={cat}
                type="button"
                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory(cat);
                  if (cat !== "All") setShowAllProducts(true);
                }}
              >
                <span>{cat === "All" ? "All Products" : cat}</span>
                <span className="badge">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="product-grid">
          {displayedProducts.map((p) => (
            <ProductCard 
              key={p.id} 
              p={p} 
              onSelectContact={handleSelectContact} 
              onOpenDetails={handleOpenDetails} 
            />
          ))}
        </div>

        <div className="center-link">
          <button
            type="button"
            className="view-more-products-btn"
            id="btn-view-complete-range"
            onClick={() => {
              if (activeCategory !== "All") {
                setActiveCategory("All");
                setShowAllProducts(true);
              } else {
                setShowAllProducts(!showAllProducts);
              }
            }}
          >
            {showAllProducts && activeCategory === "All" ? (
              <>Show Featured Products Only <ChevronUp size={17}/></>
            ) : (
              <>View Complete Product Range ({products.length} Products) <ArrowRight size={17}/></>
            )}
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

        <div className="about-applications-block">
          <div className="section-head compact" style={{marginBottom:"32px"}}>
            <div>
              <div className="eyebrow">APPLICATIONS</div>
              <h2>Made for the<br/><em>real world.</em></h2>
            </div>
            <p>Where abrasion, impact and continuous operation are part of the job, engineered materials make the difference.</p>
          </div>
          <div className="about-app-grid">
            {[
              ["01","Mining & Minerals","Durable screening and wear solutions for high-abrasion environments."],
              ["02","Construction","Reliable components built for demanding equipment and site conditions."],
              ["03","Engineering","Precision polyurethane parts for specialized industrial systems."],
              ["04","Material Handling","High-performance components that keep production moving."]
            ].map(([num, title, desc]) => (
              <div className="about-app-card" key={num}>
                <span className="app-badge">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </main>

    <footer>
      <div className="footer-main"><div><Logo/><p>Engineered polyurethane pads and industrial solutions built for demanding applications.</p><div className="socials"><span><Linkedin/></span><span><Instagram/></span></div></div><div><h4>Explore</h4><a href="#products">Products</a><a href="#about">About us</a><a href="#contact">Contact</a></div><div><h4>Contact</h4><span>Hyderabad, Telangana, India</span><span>+91 98765 43210</span><span>info@lakshmipupads.com</span></div></div>
      <div className="footer-bottom"><span>© 2026 Lakshmi PU Pads. All rights reserved.</span><span>Built for performance.</span></div>
    </footer>

    {/* Detail Specifications Modal */}
    {detailProduct && (
      <ProductDetailModal
        product={detailProduct}
        initialViewIdx={detailViewIdx}
        onClose={()=>setDetailProduct(null)}
        onSelectContact={handleSelectContact}
      />
    )}

    {/* Quick Enquiry Modal */}
    {quote && <div className="modal-backdrop" onClick={()=>{setQuote(false);setSelectedProduct(null);}}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>{setQuote(false);setSelectedProduct(null);}}><X/></button><div className="eyebrow">{selectedProduct ? "PRODUCT ENQUIRY" : "QUICK ENQUIRY"}</div><h2>{selectedProduct ? <>Enquire: <em>{selectedProduct.name}</em></> : <>Let's build the right <em>solution.</em></>}</h2><p>{selectedProduct ? `Get instant best quote and specifications for ${selectedProduct.name} (${selectedProduct.price} ${selectedProduct.unit}).` : "Share your requirement and our team will get back to you."}</p><form onSubmit={e=>{e.preventDefault();setQuote(false);setSelectedProduct(null);alert("Enquiry received! We'll contact you shortly.")}}><input placeholder="Your name" required/><input placeholder="Email address" type="email" required/><input placeholder="Phone number" type="tel" required/><textarea placeholder="Your requirement" defaultValue={selectedProduct ? `Hi, I am interested in ${selectedProduct.name} (${selectedProduct.price} ${selectedProduct.unit}). Please provide availability and delivery timeline.` : ""}></textarea><button className="primary-btn">Send enquiry <Send size={17}/></button></form></div></div>}
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);