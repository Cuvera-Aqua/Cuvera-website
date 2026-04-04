import { WHATSAPP_URL } from "../data/data";
import { S } from "../styles/shared";

export default function BulkCTA() {
  return (
    <section style={{ background: "linear-gradient(135deg, #2563eb, #0891b2)", padding: "72px 24px", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
        Bulk & Wholesale Supply
      </h2>
      <p style={{ fontSize: "16px", color: "#bfdbfe", maxWidth: "600px", margin: "0 auto 36px" }}>
        Special pricing packages for distributors, retailers, and event planners. Partner with Cuvera Aqua for reliable bulk water supply at competitive rates.
      </p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          style={{ ...S.btn, background: "#fff", color: "#2563eb", textDecoration: "none" }}>
          Get Wholesale Pricing
        </a>
        <a href="#contact"
          style={{ ...S.btn, background: "transparent", color: "#fff", border: "2px solid #fff", textDecoration: "none" }}>
          Contact Sales Team
        </a>
      </div>
    </section>
  );
}