import React, { useState, useEffect } from "react";
import ProductHero from "./ProductHero";
import { ChevronDown, Phone, Layers } from "lucide-react";
import "./Pageproduct.css";

// Direct src/assets/ folder image loader (Vercel & Production Safe)
const productImagesMap = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  as: 'url',
});

const getProductImages = (productKey) => {
  // Finds exact image paths directly from src/assets/
  const img1 = productImagesMap[`../assets/${productKey}1.jpg`];
  const img2 = productImagesMap[`../assets/${productKey}2.jpg`];
  const img3 = productImagesMap[`../assets/${productKey}3.jpg`];

  return [img1, img2, img3];
};

// Common Standard Colors
const commonColors = [
  { name: "Blue", hex: "#0284c7" },
  { name: "Yellow", hex: "#eab308" },
  { name: "White", hex: "#ffffff" },
  { name: "Black", hex: "#000000" },
  { name: "Red", hex: "#ef4444" },
  { name: "Green", hex: "#22c55e" }
];

// Common Specifications Table Data
const commonSpecsTable = [
  { no: 1, thickness: "2 mm", weight: "250-600 GSM", width: "1220 mm", length: "As per requirements" },
  { no: 2, thickness: "2.5 mm", weight: "300-750 GSM", width: "1220 mm", length: "As per requirements" },
  { no: 3, thickness: "3 mm", weight: "350-900 GSM", width: "1220 mm", length: "As per requirements" },
  { no: 4, thickness: "3.5 mm", weight: "400-1000 GSM", width: "1220 mm", length: "As per requirements" },
  { no: 5, thickness: "4 mm", weight: "550-1100 GSM", width: "1220 mm", length: "As per requirements" },
  { no: 6, thickness: "4.5 mm", weight: "600-1200 GSM", width: "1220 mm", length: "As per requirements" },
  { no: 7, thickness: "5 mm", weight: "650-1300 GSM", width: "1220 mm", length: "As per requirements" }
];

const productsData = [
  {
    id: "floor-protection-sheet",
    name: "Floor Protection Sheet",
    shortName: "Floor Protection",
    description: "Savaj Polytech PP corrugated sheets are engineered to safeguard flooring during construction, renovation, or painting. Their tough surface shields against scratches, spills, and debris while remaining lightweight, reusable, and easy to install on busy worksites.",
    images: getProductImages("floorprotectionsheet"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "Why should I use PP sheets instead of POP or cardboard for floor protection?", a: "PP Corrugated sheets are 100% waterproof, impact-resistant, non-tearable, and reusable multiple times, whereas POP/cardboard gets damaged easily by moisture and debris." },
      { q: "Can these sheets withstand heavy machinery and scaffolding on construction sites?", a: "Yes, our higher GSM sheets (4mm-5mm) offer exceptional compressive strength designed to absorb heavy impacts from ladders, scaffolding, and tools." },
      { q: "Are floor protection sheets easy to install and trim?", a: "Absolutely. They can be easily cut using a standard utility knife and joined using floor protection tape." }, 
      { q: "Are Savaj Polytech floor protection sheets recyclable?", a: "Yes, all our polypropylene sheets are 100% eco-friendly, recyclable, and reusable." }
    ]
  },
  {
    id: "construction-protection-sheet",
    name: "Construction Protection Sheet",
    shortName: "Construction Sheet",
    description: "Built to shield doors, windows, walls, and finished surfaces during interior and structural work. Savaj Polytech polypropylene corrugated boards withstand impact, dust, paint, and harsh weather conditions.",
    images: getProductImages("constructionprotectionsheet"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "Can these sheets be used for outdoor weather protection?", a: "Yes, Savaj Polytech sheets are weather-resistant and UV-treated to protect external structural fittings from sun and rain." },
      { q: "How do construction sheets protect delicate glass windows and aluminum frames?", a: "Their fluted cushioned interior absorbs shock and prevents dust, paint splatter, and mortar scratches during plastering and painting." },
      { q: "Do these sheets catch mold or mildew in damp conditions?", a: "No, polypropylene is completely moisture-proof, chemical-resistant, and immune to mold or rot." },
      { q: "What thickness is recommended for structural wall protection?", a: "3mm to 4mm sheets with 500+ GSM are ideal for structural and wall masking during heavy interior work." }
    ]
  },
  {
    id: "industrial-packaging-sheets",
    name: "Industrial Packaging Sheets",
    shortName: "Industrial Packaging",
    description: "An eco-friendly alternative for industrial logistics. Savaj Polytech PP corrugated packaging sheets deliver shock absorption, moisture resistance, and lightweight strength to protect boxes and crates in transit.",
    images: getProductImages("industrialpackagingsheets"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "How do PP packaging sheets compare to wooden crates and paper boxes?", a: "They are lighter, water-proof, rodent-proof, oil-resistant, and offer a much higher burst strength with a lower freight weight cost." },
      { q: "Can we print company branding on these packaging sheets?", a: "Yes, our sheets are corona-treated, making them ideal for high-quality screen printing and flexo printing." },
      { q: "Are custom sheet sizes available for specialized industrial machinery packaging?", a: "Yes, we customize length, width, GSM, and die-cut shapes according to your exact order requirements." },
      { q: "Is polypropylene safe for food-grade or sensitive industrial packaging?", a: "Yes, polypropylene is non-toxic, odorless, and chemically inert." }
    ]
  },
  {
    id: "pp-separator-sheets",
    name: "PP Separator Sheets",
    shortName: "PP Separators",
    description: "High-durability layer pads designed for stacking and securing items like glass bottles, cans, and ceramic tiles during shipping. Savaj Polytech separator sheets prevent breakage and improve stacking stability.",
    images: getProductImages("ppseparatorsheets"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "Are sealed edges available for hygienic bottle layer pads?", a: "Yes, we offer sealed rounded edges to prevent dirt ingress and ensure easy automated machine handling." },
      { q: "Can these separator sheets be washed and disinfected?", a: "Yes, they can be steam washed, water rinsed, or chemically sanitized without degrading material quality." },
      { q: "How many transit cycles can a single PP separator pad endure?", a: "Depending on handling, a single sheet can endure over 50 to 100 pallet shipping cycles." },
      { q: "Do these sheets prevent slip between stacked glass or metal containers?", a: "Yes, our textured surfaces provide anti-skid friction to stabilize pallet stacks." }
    ]
  },
  {
    id: "storage-organizing-sheets",
    name: "Storage Organizing Sheets",
    shortName: "Storage Bins",
    description: "Ideal for constructing waterproof, chemical-proof, and pest-resistant warehouse bins, trays, and shelf dividers. Savaj Polytech organizing sheets keep your storage facility structured and long-lasting.",
    images: getProductImages("storageorganizingsheets"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "Can these sheets be folded to create custom storage tote boxes?", a: "Yes, PP sheets are easily creased, folded, sonic-welded, or riveted into custom warehouse tote bins." },
      { q: "Are they resistant to oils, acids, and warehouse chemicals?", a: "Yes, polypropylene has high chemical resistance against most industrial solvents, oils, and acids." },
      { q: "What weight capacity can PP storage bins hold?", a: "Depending on thickness (4mm-5mm) and internal fluting design, bins can comfortably hold up to 15-30 kg." },
      { q: "Do these organizing sheets attract termites or insects?", a: "No, synthetic polymer material is completely pest-proof and termite-free." }
    ]
  },
  {
    id: "advertising-display-sheets",
    name: "Advertising Display Sheets",
    shortName: "Advertising Display",
    description: "High-impact PP corrugated boards crafted for promotional panels, exhibition displays, and temporary event branding. Savaj Polytech display sheets deliver vibrant graphics with weather-resistant durability.",
    images: getProductImages("advertisingdisplaysheets"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "What printing techniques work best on display sheets?", a: "Screen printing, UV flatbed printing, and vinyl sticker mounting work excellently on our corona-treated surfaces." },
      { q: "Are advertising display sheets suitable for outdoor hoardings?", a: "Yes, they are weather-proof and UV-stabilized, preventing fading under direct outdoor sunlight." },
      { q: "Which colors are most popular for advertising boards?", a: "White and Yellow are industry favorites for maximum color contrast, though all 6 colors are available." },
      { q: "Can display boards be easily mounted on walls or fences?", a: "Yes, they can be eyeleted, stapled, taped, or cable-tied effortlessly." }
    ]
  },
  {
    id: "signage-boards",
    name: "Signage Boards",
    shortName: "Signage Boards",
    description: "Premium PP corrugated sign boards engineered for long-lasting indoor and outdoor communication. Savaj Polytech signage boards support UV printing, cutting, and lamination for crisp, professional visuals.",
    images: getProductImages("signageboards"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "How long do outdoor PP sign boards last?", a: "With UV-stabilized polymer coating, outdoor signage boards maintain structural integrity for 1-3+ years." },
      { q: "Are these boards rigid enough for standalone directional signs?", a: "Yes, higher GSM boards (800-1000 GSM) offer high flexural rigidity for sturdy standalone signs." },
      { q: "Can we get custom die-cut arrow or logo shapes?", a: "Yes, Savaj Polytech supplies custom precision die-cut shapes tailored to your branding." },
      { q: "Do sign boards absorb rainwater during monsoons?", a: "No, they are 100% non-absorbent and waterproof." }
    ]
  },
  {
    id: "multipurpose-plastic-sheets",
    name: "Multipurpose Plastic Sheets",
    shortName: "Multipurpose Sheets",
    description: "Versatile, lightweight, and tough corrugated plastic sheets built for quick DIY projects, room partitions, prototypes, and custom creative installations by Savaj Polytech.",
    images: getProductImages("multipurposeplasticsheets"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "What makes multipurpose sheets suitable for DIY home projects?", a: "They are flexible, non-toxic, easy to cut with standard household scissors or knives, and washable." },
      { q: "Can multipurpose plastic sheets be used for temporary wall partitions?", a: "Yes, 4mm-5mm sheets provide clean, lightweight, and opaque temporary room or booth dividers." },
      { q: "Are these sheets reusable after dismantling a structure?", a: "Yes, their tear-resistant composition allows easy dismantling and reassembly without damage." },
      { q: "Can I weld or glue these plastic sheets together?", a: "Yes, they can be joined using hot air welding, hot melt glues, or double-sided acrylic tapes." }
    ]
  },
  {
    id: "sunpack-sheets",
    name: "Sunpack Sheets",
    shortName: "Sunpack Sheets",
    description: "Popularly known as Sunpack Sheets, Savaj Polytech PP corrugated boards combine lightweight flexibility with superior printability, making them widely used in real estate advertising, retail display, and protective wrapping.",
    images: getProductImages("sunpacksheets"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "What is the difference between Sunpack sheets and PP corrugated sheets?", a: "Sunpack sheet is the popular commercial trade name for high-grade Corona-treated PP flute sheets used in advertising." },
      { q: "Are Sunpack sheets ideal for real estate 'For Sale' signs?", a: "Yes, Sunpack sheets are the market standard for political, real estate, and pole branding signs." },
      { q: "What GSM is standard for Sunpack advertising boards?", a: "350 GSM to 600 GSM in 3mm thickness is the standard commercial preference." },
      { q: "Do you supply bulk orders across India?", a: "Yes, Savaj Polytech provides fast Pan-India dispatch for bulk Sunpack sheet orders." }
    ]
  },
  {
    id: "flute-sheet-board",
    name: "Flute Sheet Board",
    shortName: "Flute Sheet Board",
    description: "High-density polypropylene flute boards designed for multi-industrial applications. Featuring a fluted hollow core, Savaj Polytech flute boards offer extreme strength-to-weight ratio for heavy packaging and protective paneling.",
    images: getProductImages("flutesheetboard"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "What does the hollow fluted core structure do?", a: "The twin-wall fluted structure acts as an internal cushion that absorbs compression forces while keeping total sheet weight minimal." },
      { q: "Are flute boards fire retardant?", a: "Standard sheets are flame-resistant, and special Fire-Retardant (FR) grade sheets are available on bulk request." },
      { q: "Can flute boards replace heavy plywood in temporary structures?", a: "Yes, for temporary partitions, backings, and drop ceiling protection, flute boards offer a 100% waterproof plywood alternative." },
      { q: "What is the maximum thickness produced?", a: "We produce flute boards up to 5mm thickness with custom high GSM for maximum load resistance." }
    ]
  },
  {
    id: "pp-corrugated-edge-protectors",
    name: "PP Corrugated Edge Protectors",
    shortName: "Edge Protectors",
    description: "High-grade rigid polypropylene edge and corner protectors designed to safeguard palletized goods, sheet metal, and furniture from strap cutting and impact damage during transit.",
    images: getProductImages("ppcorrugatededgeprotectors"),
    tableData: commonSpecsTable,
    colors: commonColors,
    faqs: [
      { q: "Why choose PP edge protectors over paper angle board protectors?", a: "PP edge protectors do not crush under rain or humidity, offer higher strap tension resistance, and are reusable." },
      { q: "Can these edge protectors be used for outdoor strapping?", a: "Yes, they are weatherproof and withstand heavy steel or polyester strapping tension without cracking." },
      { q: "Are custom leg-lengths available for corner angles?", a: "Yes, wing sizes and lengths can be cut to fit your specific pallet or box dimensions." },
      { q: "Are edge protectors recyclable?", a: "Yes, like all Savaj Polytech products, they are made from 100% recyclable polypropylene." }
    ]
  }
];

export default function Pageproduct() {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Auto Carousel Image Transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedProduct.images.length > 0) {
        setCurrentImgIndex((prev) => (prev + 1) % selectedProduct.images.length);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [selectedProduct]);

  // Product Switch Handler
  const handleProductChange = (product) => {
    if (product.id === selectedProduct.id) return;

    setIsFading(true);
    setActiveFaq(null);

    setTimeout(() => {
      setSelectedProduct(product);
      setCurrentImgIndex(0);
      setIsFading(false);
    }, 200);
  };

  const handleNextImg = () => {
    if (selectedProduct.images.length > 0) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const handlePrevImg = () => {
    if (selectedProduct.images.length > 0) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      {/* Product Hero Section */}
     

      <section className="products-section">
        {/* Background Shapes */}
        <div className="bg-sunburst-ring" />
        <div className="bg-polyhedron" />
        <div className="products-bg-glow-1" />
        <div className="products-bg-glow-2" />
        <div className="products-bg-pattern" />

        {/* MOBILE-ONLY CATEGORY BAR */}
        <div className="mobile-app-category-bar">
          <div className="category-bar-inner">
            {productsData.map((prod) => (
              <button
                key={prod.id}
                className={`app-pill-btn ${selectedProduct.id === prod.id ? "active" : ""}`}
                onClick={() => handleProductChange(prod)}
              >
                <Layers size={14} />
                <span>{prod.shortName || prod.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="products-container">
          
          {/* MAIN DYNAMIC CONTENT */}
          <div className={`product-details-content ${isFading ? "fade-switch" : ""}`}>
            
            {/* Title & Description */}
            <div>
              <h2 className="product-main-heading">{selectedProduct.name}</h2>
              <p className="product-description">{selectedProduct.description}</p>
            </div>

            {/* Auto Carousel */}
            <div className="carousel-container">
              <img
                src={selectedProduct.images[currentImgIndex]}
                alt={selectedProduct.name}
                className="carousel-image"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop";
                }}
              />

              <button className="carousel-btn prev" onClick={handlePrevImg}>❮</button>
              <button className="carousel-btn next" onClick={handleNextImg}>❯</button>

              <div className="carousel-dots">
                {selectedProduct.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === currentImgIndex ? "active" : ""}`}
                    onClick={() => setCurrentImgIndex(idx)}
                  />
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="spec-section-title">Application Specifications</h3>
              <div className="section-title-underline" />

              {/* Desktop Table View */}
              <div className="specs-table-container desktop-specs-view">
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Thickness</th>
                      <th>Weight</th>
                      <th>Width</th>
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProduct.tableData.map((row) => (
                      <tr key={row.no}>
                        <td>{row.no}</td>
                        <td>{row.thickness}</td>
                        <td>{row.weight}</td>
                        <td>{row.width}</td>
                        <td>{row.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile-Only Spec Cards View */}
              <div className="mobile-specs-grid">
                {selectedProduct.tableData.map((row) => (
                  <div key={row.no} className="mobile-spec-card">
                    <div className="spec-card-top">
                      <span className="spec-thickness">{row.thickness}</span>
                      <span className="spec-tag">Type #{row.no}</span>
                    </div>
                    <div className="spec-card-body">
                      <div className="spec-item">
                        <span className="spec-label">Weight:</span>
                        <span className="spec-val">{row.weight}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Width:</span>
                        <span className="spec-val">{row.width}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="colors-section-title">Available Colors</h3>
              <div className="colors-list">
                {selectedProduct.colors.map((color, idx) => (
                  <div key={idx} className="color-badge">
                    <span className="color-circle" style={{ backgroundColor: color.hex }} />
                    <span>{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="faq-section">
              <h3 className="spec-section-title">Frequently Asked Questions</h3>
              <div className="section-title-underline" />

              <div className="faq-accordion-list">
                {selectedProduct.faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`faq-item ${activeFaq === idx ? "active" : ""}`}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="faq-question">
                      <span>Q: {faq.q}</span>
                      <span className="faq-icon">{activeFaq === idx ? "−" : "+"}</span>
                    </div>
                    {activeFaq === idx && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* DESKTOP SIDEBAR */}
          <div className="product-sidebar desktop-sidebar">
            <h3 className="sidebar-title">Our Products</h3>

            {productsData.map((prod) => (
              <button
                key={prod.id}
                className={`product-nav-btn ${selectedProduct.id === prod.id ? "active" : ""}`}
                onClick={() => handleProductChange(prod)}
              >
                <span>{prod.name}</span>
                <span className="btn-arrow">❯</span>
              </button>
            ))}

            {/* Contact Box Widget */}
            <div className="sidebar-contact-box">
              <h4>Need Custom Dimensions?</h4>
              <p>We supply custom sheet length, GSM, and colors as per your requirement.</p>
              <a href="tel:+919904743373" className="sidebar-phone-btn">
                📞 +91 99047 43343
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}