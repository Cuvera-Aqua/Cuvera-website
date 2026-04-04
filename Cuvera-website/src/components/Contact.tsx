import { useState } from "react";
import { WHATSAPP_URL } from "../data/data";
import { S } from "../styles/shared";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const text =
      "Hello Cuvera Aqua!" + "\n\n" +
      "New Enquiry" + "\n" +
      "-------------------" + "\n" +
      "Name: " + formData.name + "\n" +
      "Email: " + formData.email + "\n" +
      "Phone: " + formData.phone + "\n" +
      "Message: " + formData.message;
    window.open("https://wa.me/919721785327?text=" + encodeURIComponent(text), "_blank");
  };

  const contactInfo = [
    { icon: "📱", label: "WhatsApp", value: "+91 9721785327", href: WHATSAPP_URL },
    { icon: "📧", label: "Email", value: "cuveraaqua@gmail.com", href: "mailto:cuveraaqua@gmail.com" },
    { icon: "📍", label: "Location", value: "Lucknow, Uttar Pradesh, India", href: "#" },
  ];

  return (
    <section style={{ padding: "80px 24px", background: "#fff" }} id="contact">
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "64px", alignItems: "flex-start" }} className="contact-grid">

        {/* Left — contact info */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 700, marginBottom: "12px" }}>Get In Touch</h2>
          <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "40px", lineHeight: 1.7 }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          {contactInfo.map((c) => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "2px" }}>{c.label}</div>
                <a href={c.href} style={{ fontSize: "15px", fontWeight: 500, color: "#2563eb", textDecoration: "none" }}>{c.value}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "36px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>Send us a message</h3>
          <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px" }}>Fill out the form below and we'll get back to you soon</p>

          {[
            { label: "Name", type: "text", placeholder: "Your name" },
            { label: "Email", type: "email", placeholder: "Your email" },
            { label: "Phone", type: "tel", placeholder: "+91 XXXXXXXXXX" },
          ].map((f) => (
            <div key={f.label} style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 500, marginBottom: "6px", color: "#374151" }}>{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={formData[f.label.toLowerCase() as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [f.label.toLowerCase()]: e.target.value })}
                style={{ width: "100%", padding: "12px 14px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#0f172a" }}
              />
            </div>
          ))}

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 500, marginBottom: "6px", color: "#374151" }}>Message</label>
            <textarea
              placeholder="Tell us about your requirements..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#0f172a", resize: "vertical" }}
            />
          </div>

          <button onClick={handleSubmit} className="btn-primary"
            style={{ ...S.btn, width: "100%", background: "linear-gradient(90deg, #2563eb, #0891b2)", color: "#fff", textAlign: "center" as const }}>
            Send Message via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}