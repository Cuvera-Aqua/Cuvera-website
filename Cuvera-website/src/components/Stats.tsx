import { stats } from "../data/data";

export default function Stats() {
  return (
    <section style={{ padding: "60px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center" }} className="stats-grid">
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "24px" }}>
              {s.icon}
            </div>
            <div style={{ fontSize: "28px", fontWeight: 700, color: "#0f172a" }}>{s.value}</div>
            <div style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}