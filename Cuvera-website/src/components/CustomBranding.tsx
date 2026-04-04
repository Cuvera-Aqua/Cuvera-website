import { brandingUses, WHATSAPP_URL } from "../data/data";
import { S } from "../styles/shared";

export default function CustomBranding() {
  return (
    <section style={{ padding: "80px 24px", background: "#f8fafc" }} id="branding">
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "64px" }} className="branding-grid">
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 700, marginBottom: "20px" }}>
            Custom <span style={S.blueText}>Label Service</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "28px" }}>
            Make your events memorable with personalized water bottles featuring your brand, logo, or message. Perfect for creating lasting impressions.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
            {brandingUses.map((u) => (
              <div key={u} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: "#334155" }}>
                <span style={{ color: "#2563eb" }}>✦</span> {u}
              </div>
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            style={{ ...S.btn, background: "#2563eb", color: "#fff", textDecoration: "none" }} className="btn-primary">
            Request Custom Branding
          </a>
        </div>
        <div style={{ flex: 1, borderRadius: "16px", overflow: "hidden", minHeight: "400px" }}>
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=700&q=80" alt="Custom label bottles" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}