import { aboutPoints } from "../data/data";
import { S } from "../styles/shared";
import imgabt from "../assets/three.jpeg";

export default function About() {
  return (
    <section style={{ padding: "80px 24px", background: "#f8fafc" }} id="about">
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
            borderRadius: "24px",
            overflow: "hidden",
            maxHeight: "600px",
          }}
        >
          <img
            src={imgabt}
            alt="Pure water"
            style={{
              width: "100%", // ← 100% to fill container fully
              height: "100%", // ← fill height too
              objectFit: "cover",
              objectPosition: "top",
              display: "block", // ← removes bottom gap under image
            }}
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
            copper-infused drinking water to homes and businesses across India.
            Our advanced RO + UV purification process ensures every drop meets
            the highest quality and hygiene standards.
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
                  <span style={{ color: "#2563eb", fontSize: "13px" }}>✓</span>
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
  );
}
