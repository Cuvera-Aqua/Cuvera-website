import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Custom Branding", href: "#branding" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/919721785327";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: "#fff",
      boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "0 1px 0 #e2e8f0",
      transition: "box-shadow 0.3s ease",
      fontFamily: "'Outfit', sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ background: "#dc2626", color: "#fff", fontWeight: 800, fontSize: "13px", padding: "4px 8px", borderRadius: "4px", letterSpacing: "0.5px" }}>CUVERA</div>
          <div style={{ fontSize: "10px", color: "#64748b", lineHeight: 1.2 }}>AQUA</div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0 }} className="nav-links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} style={{ textDecoration: "none", padding: "8px 16px", fontSize: "15px", fontWeight: 500, color: "#374151", borderRadius: "8px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wa-btn"
          style={{ display: "flex", alignItems: "center", gap: "8px", background: "#2563eb", color: "#fff", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
        >
          💬 WhatsApp
        </a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: "24px", height: "2px", background: "#0f172a", borderRadius: "2px", transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{ maxHeight: menuOpen ? "400px" : "0", overflow: "hidden", transition: "max-height 0.3s ease", background: "#fff", borderTop: menuOpen ? "1px solid #e2e8f0" : "none" }} className="mobile-menu">
        <ul style={{ listStyle: "none", margin: 0, padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "12px 16px", fontSize: "15px", fontWeight: 500, color: "#374151", textDecoration: "none", borderRadius: "8px" }}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", padding: "12px 16px", fontSize: "15px", fontWeight: 600, color: "#fff", background: "#2563eb", textDecoration: "none", borderRadius: "8px", textAlign: "center", marginTop: "8px" }}>
              💬 WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .wa-btn { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}