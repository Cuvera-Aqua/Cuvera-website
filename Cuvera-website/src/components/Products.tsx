import { products, WHATSAPP_URL } from "../data/data";
import { S } from "../styles/shared";

export default function Products() {
  return (
    <section style={{ padding: "80px 24px", background: "#fff" }} id="products">
      <div style={S.section}>
        <h2 style={S.sectionTitle}>
          Our <span style={S.blueText}>Products</span>
        </h2>
        <p style={S.sectionSub}>
          Choose from our range of pure, copper-infused drinking water products
          for every need
        </p>
        <div style={{ display: "grid", gap: "24px" }} className="products-grid">
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
                  borderRadius: "32px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    height: "280px",
                    width: "100%",
                    objectFit: "contain",
                    borderRadius: "8px",
                    overflow: "hidden",
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
                  href={WHATSAPP_URL}
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
  );
}
