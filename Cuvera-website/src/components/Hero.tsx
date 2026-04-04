import { S } from "../styles/shared";
//import { WHATSAPP_URL } from "../data/data";
import logo from "../assets/cover.jpeg";

export default function Hero() {
  return (
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
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 70px)",
            background: "transparent", // Changed from solid grey to blend with gradient
            overflow: "hidden",
            padding: "40px", // Adds some breathing room around the logo
          }}
        >
          <img
            src={logo}
            alt="Cuvera Aqua logo"
            style={{
              maxWidth: "100%",
              maxHeight: "80%",
              objectFit: "contain",
              borderRadius: "24px", // Optional: gives a softer look if the image has a background
            }}
          />
        </div>
      </div>
    </section>
  );
}
