import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowUpRight, ChevronDown, Menu, X, Phone, Mail, MapPin, ArrowRight,
  Check, Factory, ShieldCheck, Settings2, Layers3, Boxes, Sparkles,
  CircleGauge, MoveUpRight, Send, Plus, Linkedin, Instagram
} from "lucide-react";
import "./styles.css";

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
  {
    name: "PU Rock Breaker Buffer Pads",
    cat: "Wear & Damper Components",
    price: "₹ 750",
    unit: "/Piece",
    image: "/pu-buffer-pad.jpg",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "85% Response Rate",
    rating: "4.8",
    reviews: "19"
  },
  {
    name: "PU Modular Screen Panels",
    cat: "Screening Solutions",
    price: "₹ 1,200",
    unit: "/Piece",
    image: "/pu-screen-panel.jpg",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "92% Response Rate",
    rating: "4.9",
    reviews: "31"
  },
  {
    name: "Polyurethane Coated Rollers",
    cat: "Material Handling",
    price: "₹ 850",
    unit: "/Piece",
    image: "/pu-roller.jpg",
    supplier: "Sri Laxmi Ganapathi Enterprises",
    location: "Hyderabad, Telangana · 5 yrs",
    responseRate: "88% Response Rate",
    rating: "4.7",
    reviews: "14"
  }
];

function Logo(){
  return <a className="logo" href="#home" aria-label="Lakshmi PU Pads home">
    <img src="/logo.png" alt="Lakshmi PU Pads" className="logo-img" />
  </a>
}

function App(){
  const [open,setOpen]=useState(false);
  const [quote,setQuote]=useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
          <p>From rock breaker spare parts to custom-engineered polyurethane solutions, our products are built for high performance, impact resistance, and durability.</p>
        </div>
        <div className="product-grid">
          {products.map((p)=><article className="product-b2b-card" key={p.name}>
            <div className="product-b2b-img-wrap">
              <img src={p.image} alt={p.name} className="product-b2b-img" />
            </div>
            <div className="product-b2b-body">
              <h3 className="product-b2b-title">{p.name}</h3>
              <div className="product-b2b-price">
                <strong>{p.price}</strong> <span className="unit">{p.unit}</span>
              </div>
              <button 
                type="button" 
                className="product-b2b-contact-btn"
                onClick={()=>{setSelectedProduct(p);setQuote(true);}}
              >
                <Send size={15} style={{transform:"rotate(-20deg)"}} /> Contact Supplier
              </button>
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
              <a href="tel:+919876543210" className="product-b2b-call-btn">
                <Phone size={15} /> Call Now
              </a>
            </div>
          </article>)}
        </div>
        <div className="center-link"><a href="#products">View complete product range <ArrowRight size={17}/></a></div>
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

    {quote && <div className="modal-backdrop" onClick={()=>{setQuote(false);setSelectedProduct(null);}}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>{setQuote(false);setSelectedProduct(null);}}><X/></button><div className="eyebrow">{selectedProduct ? "PRODUCT ENQUIRY" : "QUICK ENQUIRY"}</div><h2>{selectedProduct ? <>Enquire: <em>{selectedProduct.name}</em></> : <>Let's build the right <em>solution.</em></>}</h2><p>{selectedProduct ? `Get instant best quote and specifications for ${selectedProduct.name} (${selectedProduct.price} ${selectedProduct.unit}).` : "Share your requirement and our team will get back to you."}</p><form onSubmit={e=>{e.preventDefault();setQuote(false);setSelectedProduct(null);alert("Enquiry received! We'll contact you shortly.")}}><input placeholder="Your name" required/><input placeholder="Email address" type="email" required/><input placeholder="Phone number" type="tel" required/><textarea placeholder="Your requirement" defaultValue={selectedProduct ? `Hi, I am interested in ${selectedProduct.name} (${selectedProduct.price} ${selectedProduct.unit}). Please provide availability and delivery timeline.` : ""}></textarea><button className="primary-btn">Send enquiry <Send size={17}/></button></form></div></div>}
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);