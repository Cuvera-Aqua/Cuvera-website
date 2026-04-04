export const S = {
  section: { padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" } as React.CSSProperties,
  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: 700,
    color: "#0f172a",
    textAlign: "center" as const,
    marginBottom: "12px",
  },
  sectionSub: {
    fontSize: "16px",
    color: "#64748b",
    textAlign: "center" as const,
    marginBottom: "48px",
  },
  blueText: { color: "#2563eb" },
  btn: {
    display: "inline-block",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease",
  } as React.CSSProperties,
};