import { brandingUses, WHATSAPP_URL } from "../data/data";
import { S } from "../styles/shared";
import customimg from "../assets/custom.jpeg";

export default function CustomBranding() {
  return (
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
            Make your events memorable with personalized water bottles featuring
            your brand, logo, or message. Perfect for creating lasting
            impressions.
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
            href={WHATSAPP_URL}
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
            maxHeight: "560px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0d2137", // ← matches the image's dark blue bg
          }}
        >
          <img
            src={customimg}
            alt="Custom label bottles"
            style={{
              width: "100%",
              height: "560px",
              objectFit: "contain",
              objectPosition: "center 30%", // ← shifts focus to show cap + label
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
