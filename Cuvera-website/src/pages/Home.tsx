import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Products from "../components/Products";
import CustomBranding from "../components/CustomBranding";
import WhyChooseUs from "../components/Whychooseus";
import BulkCTA from "../components/Bulkcta";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { WHATSAPP_URL } from "../data/data";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", color: "#0f172a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        input, textarea { outline: none; font-family: 'Outfit', sans-serif; }
        input:focus, textarea:focus { border-color: #2563eb !important; }
        .product-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important; }
        .feature-card:hover { border-color: #bfdbfe !important; background: #f0f7ff !important; }
        .btn-primary:hover { background: #1d4ed8 !important; }
        .btn-outline:hover { background: #eff6ff !important; }
        .order-btn:hover { background: #1d4ed8 !important; }
        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; }
          .hero-img { width: 100% !important; border-radius: 16px !important; min-height: 300px !important; }
          .hero-text { padding: 40px 24px 24px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .products-grid { grid-template-columns: repeat(1, 1fr) !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .about-grid { flex-direction: column !important; }
          .branding-grid { flex-direction: column !important; }
          .contact-grid { flex-direction: column !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-btns { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (min-width: 640px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 1024px) {
          .products-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .features-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>

      <Hero />
      <Stats />
      <About />
      <Products />
      <CustomBranding />
      <WhyChooseUs />
      <BulkCTA />
      <Contact />
      <Footer />

      {/* Floating WhatsApp button */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
        style={{ position: "fixed", bottom: "28px", right: "28px", width: "56px", height: "56px", borderRadius: "50%", background: "#25d366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,0.4)", zIndex: 999, textDecoration: "none", fontSize: "28px" }}
        title="Chat on WhatsApp">
        💬
      </a>
    </div>
  );
}