import { features } from "../data/data";
import { S } from "../styles/shared";

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={S.section}>
        <h2 style={S.sectionTitle}>Why Choose <span style={S.blueText}>Cuvera Aqua</span></h2>
        <p style={S.sectionSub}>We're committed to delivering excellence in every drop</p>
        <div style={{ display: "grid", gap: "24px" }} className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card"
              style={{ padding: "28px", border: "1px solid #e2e8f0", borderRadius: "16px", transition: "all 0.2s ease", background: "#fff" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "20px" }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}