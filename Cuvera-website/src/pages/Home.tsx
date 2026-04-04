import { useEffect, useRef , useState} from "react";


// ── TYPES ──────────────────────────────────────────────
interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Product {
  name: string;
  tagline: string;
  desc: string;
  img: string;
}

interface Stat {
  icon: string;
  value: string;
  label: string;
}

// ── DATA ───────────────────────────────────────────────
const stats: Stat[] = [
  { icon: "🛡️", value: "100%", label: "Safe & Pure" },
  { icon: "🏅", value: "ISO", label: "Certified Quality" },
  { icon: "👥", value: "10,000+", label: "Happy Customers" },
  { icon: "🚚", value: "Fast", label: "Delivery" },
];

const products: Product[] = [
  {
    name: "250ml Bottle",
    tagline: "Perfect for events & functions",
    desc: "Ideal for parties, conferences, and special occasions",
    img: "https://images.unsplash.com/photo-1603356033288-acfcb54801e6?w=400&q=80",
  },
  {
    name: "500ml Bottle",
    tagline: "Daily hydration companion",
    desc: "Perfect for daily use, travel, and on-the-go",
    img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
  },
  {
    name: "1 Litre Bottle",
    tagline: "Family size hydration",
    desc: "Great for families, offices, and workouts",
    img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&q=80",
  },
  {
    name: "20 Litre Jar",
    tagline: "Home & office solution",
    desc: "Complete water solution for homes and offices",
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
  },
];

const features: Feature[] = [
  {
    icon: "🛡️",
    title: "High-Quality Purification",
    desc: "Advanced RO + UV purification with copper infusion ensures every drop is pure and healthy",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Competitive prices without compromising on quality. Premium water at reasonable rates",
  },
  {
    icon: "💧",
    title: "Bulk Supply Available",
    desc: "Special pricing for bulk orders. Ideal for distributors, retailers, and event planners",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Quick and reliable delivery across Lucknow and surrounding areas",
  },
  {
    icon: "✨",
    title: "Custom Branding Support",
    desc: "Personalized labels with your brand logo for events, weddings, and corporate needs",
  },
  {
    icon: "⚡",
    title: "Copper-Infused Benefits",
    desc: "Natural antimicrobial properties of copper for enhanced health and wellness",
  },
];

const brandingUses = [
  "Weddings & Celebrations",
  "Corporate Events & Conferences",
  "Political Campaigns",
  "Hotels & Restaurants",
  "Gyms & Fitness Events",
];

const aboutPoints = [
  { title: "Advanced Purification", desc: "Multi-stage RO + UV treatment for 100% safe water" },
  { title: "Strict Quality Checks", desc: "Every batch tested for purity and safety" },
  { title: "Hygiene Standards", desc: "Sealed packaging and sanitized production facility" },
  { title: "Copper-Infused Benefits", desc: "Natural antimicrobial properties for enhanced wellness" },
];

// ── STYLES (shared) ────────────────────────────────────
const S = {
  section: { padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" } as React.CSSProperties,
  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: 700,
    color: "#0f172a",
    textAlign: "center" as const,
    marginBottom: "12px",
  },
  sectionSub: {
    fontSize: "16px",
    color: "#64748b",
    textAlign: "center" as const,
    marginBottom: "48px",
  },
  blueText: { color: "#2563eb" },
  btn: {
    display: "inline-block",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease",
  },
};

// ── COUNTER HOOK ───────────────────────────────────────
function useCountUp(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("counted");
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

// ── MAIN COMPONENT ─────────────────────────────────────
export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const text = 
    `Hello Cuvera Aqua!` + "\n\n" +
    `*New Enquiry*` + "\n" +
    `*Name:* ${formData.name}` + "\n" +
    `*Email:* ${formData.email}` + "\n" +
    `*Phone:* ${formData.phone}` + "\n" +
    `*Message:* ${formData.message}`;

  const whatsappUrl = `https://wa.me/919721785327?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank");
};
  useCountUp(statsRef);

  const whatsappNumber = "919721785327";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", color: "#0f172a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        input, textarea { outline: none; font-family: 'Outfit', sans-serif; }
        input:focus, textarea:focus { border-color: #2563eb !important; }

        .product-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important; }
        .feature-card:hover { border-color: #bfdbfe !important; background: #f0f7ff !important; }
        .btn-primary:hover { background: #1d4ed8 !important; }
        .btn-outline:hover { background: #eff6ff !important; }
        .order-btn:hover { background: #1d4ed8 !important; }

        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; }
          .hero-img { width: 100% !important; border-radius: 16px !important; min-height: 300px !important; }
          .hero-text { padding: 40px 24px 24px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .products-grid { grid-template-columns: repeat(1, 1fr) !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .about-grid { flex-direction: column !important; }
          .branding-grid { flex-direction: column !important; }
          .contact-grid { flex-direction: column !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-btns { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (min-width: 640px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .products-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .features-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%)",
          minHeight: "calc(100vh - 70px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div
            style={{ flex: 1, padding: "60px 48px 60px 24px" }}
            className="hero-text"
          >
            <span
              style={{
                display: "inline-block",
                background: "#2563eb",
                color: "#fff",
                borderRadius: "20px",
                padding: "6px 16px",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Copper-Infused Drinking Water
            </span>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "20px",
                color: "#0f172a",
              }}
            >
              Pure Refreshment.
              <br />
              <span style={{ color: "#2563eb" }}>Powerful Hydration.</span>
            </h1>
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              Experience the perfect blend of purity and wellness with Cuvera
              Aqua's copper-infused drinking water. RO + UV purified for your
              health and safety.
            </p>
            <div
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
              className="cta-btns"
            >
              <a
                href="#contact"
                style={{ ...S.btn, background: "#2563eb", color: "#fff" }}
                className="btn-primary"
              >
                Get Quote
              </a>
              <a
                href="#contact"
                style={{
                  ...S.btn,
                  background: "transparent",
                  color: "#2563eb",
                  border: "2px solid #2563eb",
                }}
                className="btn-outline"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Right image */}
          <div
            className="hero-img"
            style={{
              width: "52%",
              minHeight: "calc(100vh - 70px)",
              background: "#e2e8f0",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=900&q=80"
              alt="Cuvera Aqua water bottle"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{ padding: "60px 24px", background: "#fff" }}
        ref={statsRef}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
            textAlign: "center",
          }}
          className="stats-grid"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: "24px",
                }}
              >
                {s.icon}
              </div>
              <div
                style={{ fontSize: "28px", fontWeight: 700, color: "#0f172a" }}
              >
                {s.value}
              </div>
              <div
                style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        style={{ padding: "80px 24px", background: "#f8fafc" }}
        id="about"
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "64px",
          }}
          className="about-grid"
        >
          <div
            style={{
              flex: 1,
              borderRadius: "16px",
              overflow: "hidden",
              minHeight: "460px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=700&q=80"
              alt="Pure water"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              About <span style={S.blueText}>Cuvera Aqua</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#475569",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Cuvera Aqua is committed to delivering safe, pure, and refreshing
              copper-infused drinking water to homes and businesses across
              India. Our advanced RO + UV purification process ensures every
              drop meets the highest quality and hygiene standards.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {aboutPoints.map((p) => (
                <div
                  key={p.title}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: "2px solid #2563eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <span style={{ color: "#2563eb", fontSize: "13px" }}>
                      ✓
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        marginBottom: "2px",
                      }}
                    >
                      {p.title}
                    </div>
                    <div style={{ fontSize: "14px", color: "#64748b" }}>
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section
        style={{ padding: "80px 24px", background: "#fff" }}
        id="products"
      >
        <div style={S.section}>
          <h2 style={S.sectionTitle}>
            Our <span style={S.blueText}>Products</span>
          </h2>
          <p style={S.sectionSub}>
            Choose from our range of pure, copper-infused drinking water
            products for every need
          </p>
          <div
            style={{ display: "grid", gap: "24px" }}
            className="products-grid"
          >
            {products.map((p) => (
              <div
                key={p.name}
                className="product-card"
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    background: "#f0f9ff",
                    padding: "24px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      height: "180px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      marginBottom: "8px",
                    }}
                  >
                    {p.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#94a3b8",
                      marginBottom: "20px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="order-btn"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "#2563eb",
                      color: "#fff",
                      padding: "12px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM BRANDING ── */}
      <section
        style={{ padding: "80px 24px", background: "#f8fafc" }}
        id="branding"
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "64px",
          }}
          className="branding-grid"
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Custom <span style={S.blueText}>Label Service</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#475569",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              Make your events memorable with personalized water bottles
              featuring your brand, logo, or message. Perfect for creating
              lasting impressions.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginBottom: "32px",
              }}
            >
              {brandingUses.map((u) => (
                <div
                  key={u}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "15px",
                    color: "#334155",
                  }}
                >
                  <span style={{ color: "#2563eb" }}>✦</span> {u}
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...S.btn,
                background: "#2563eb",
                color: "#fff",
                textDecoration: "none",
              }}
              className="btn-primary"
            >
              Request Custom Branding
            </a>
          </div>
          <div
            style={{
              flex: 1,
              borderRadius: "16px",
              overflow: "hidden",
              minHeight: "400px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=700&q=80"
              alt="Custom label bottles"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={S.section}>
          <h2 style={S.sectionTitle}>
            Why Choose <span style={S.blueText}>Cuvera Aqua</span>
          </h2>
          <p style={S.sectionSub}>
            We're committed to delivering excellence in every drop
          </p>
          <div
            style={{ display: "grid", gap: "24px" }}
            className="features-grid"
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="feature-card"
                style={{
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  transition: "all 0.2s ease",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    marginBottom: "20px",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    lineHeight: 1.7,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BULK CTA BANNER ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #2563eb, #0891b2)",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 40px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "16px",
          }}
        >
          Bulk & Wholesale Supply
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#bfdbfe",
            marginBottom: "36px",
            maxWidth: "600px",
            margin: "0 auto 36px",
          }}
        >
          Special pricing packages for distributors, retailers, and event
          planners. Partner with Cuvera Aqua for reliable bulk water supply at
          competitive rates.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...S.btn,
              background: "#fff",
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            Get Wholesale Pricing
          </a>
          <a
            href="#contact"
            style={{
              ...S.btn,
              background: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              textDecoration: "none",
            }}
          >
            Contact Sales Team
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        style={{ padding: "80px 24px", background: "#fff" }}
        id="contact"
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "64px",
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Get In Touch
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#64748b",
                marginBottom: "40px",
                lineHeight: 1.7,
              }}
            >
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
            {[
              {
                icon: "📱",
                label: "WhatsApp",
                value: "+91 9721785327",
                href: whatsappUrl,
              },
              {
                icon: "📧",
                label: "Email",
                value: "cuveraaqua@gmail.com",
                href: "mailto:cuveraaqua@gmail.com",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Lucknow, Uttar Pradesh, India",
                href: "#",
              },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#94a3b8",
                      marginBottom: "2px",
                    }}
                  >
                    {c.label}
                  </div>
                  <a
                    href={c.href}
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#2563eb",
                      textDecoration: "none",
                    }}
                  >
                    {c.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "36px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}
            >
              Send us a message
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                marginBottom: "24px",
              }}
            >
              Fill out the form below and we'll get back to you soon
            </p>
            {["Name", "Email", "Phone"].map((field) => (
              <div key={field} style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "6px",
                    color: "#374151",
                  }}
                >
                  {field}
                </label>
                <input
                  type={
                    field === "Email"
                      ? "email"
                      : field === "Phone"
                        ? "tel"
                        : "text"
                  }
                  placeholder={
                    field === "Phone"
                      ? "+91 XXXXXXXXXX"
                      : `Your ${field.toLowerCase()}`
                  }
                  value={formData[field.toLowerCase() as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.toLowerCase()]: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0f172a",
                    transition: "border 0.2s",
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "6px",
                  color: "#374151",
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Tell us about your requirements..."
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#0f172a",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="btn-primary"
              style={{
                ...S.btn,
                width: "100%",
                background: "linear-gradient(90deg, #2563eb, #0891b2)",
                color: "#fff",
                textAlign: "center" as const,
              }}
            >
              Send Message via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#0f172a",
          color: "#94a3b8",
          padding: "60px 24px 32px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "40px",
              marginBottom: "48px",
            }}
            className="footer-grid"
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "12px",
                }}
              >
                <span style={{ color: "#2563eb" }}>Cuvera</span> Aqua
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.7 }}>
                Pure, copper-infused drinking water for a healthier lifestyle.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                Quick Links
              </div>
              {["About Us", "Products", "Custom Branding", "Contact"].map(
                (l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().replace(" ", "")}`}
                    style={{
                      display: "block",
                      fontSize: "14px",
                      color: "#94a3b8",
                      textDecoration: "none",
                      marginBottom: "10px",
                    }}
                  >
                    {l}
                  </a>
                ),
              )}
            </div>
            {/* Products */}
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                Products
              </div>
              {[
                "250ml Bottles",
                "500ml Bottles",
                "1 Litre Bottles",
                "20 Litre Jars",
              ].map((p) => (
                <div key={p} style={{ fontSize: "14px", marginBottom: "10px" }}>
                  {p}
                </div>
              ))}
            </div>
            {/* Contact */}
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                Contact Info
              </div>
              <div style={{ fontSize: "14px", marginBottom: "10px" }}>
                Lucknow, UP, India
              </div>
              <div style={{ fontSize: "14px", marginBottom: "10px" }}>
                cuveraaqua@gmail.com
              </div>
              <div style={{ fontSize: "14px" }}>+919721785327</div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #1e293b",
              paddingTop: "24px",
              textAlign: "center",
              fontSize: "13px",
            }}
          >
            © {new Date().getFullYear()} Cuvera Aqua. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#25d366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
          zIndex: 999,
          textDecoration: "none",
          fontSize: "28px",
        }}
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}