import imgfas from "../assets/fassai.jpeg";

const footerStyles = `
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 48px;
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
  }

  @media (max-width: 480px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }

  .footer-cert-images {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer
        style={{
          background: "#0f172a",
          color: "#94a3b8",
          padding: "60px 24px 32px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="footer-grid">
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
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                }}
              >
                Pure, copper-infused drinking water for a healthier lifestyle.
              </p>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                Brand Owner
              </div>
              <div style={{ fontSize: "14px", marginBottom: "20px" }}>
                Siddhartha Sharma
              </div>

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
              {["About Us", "Products", "Custom Branding", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(" ", "")}`}
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "#94a3b8",
                    textDecoration: "none",
                    marginBottom: "10px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {l}
                </a>
              ))}
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                  }}
                >
                  📍 Lucknow, UP, India
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                  }}
                >
                  ✉️ cuveraaqua@gmail.com
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                  }}
                >
                  📞 +91 97217 85327
                </div>
                {/* FSSAI Certificate */}
                <img
                  src={imgfas}
                  alt="FSSAI Registered"
                  style={{
                    width: "110px",
                    height: "auto",
                    borderRadius: "10px",
                    objectFit: "contain",
                    background: "#fff",
                    padding: "6px",
                    marginTop: "8px",
                  }}
                />
              </div>
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
    </>
  );
}