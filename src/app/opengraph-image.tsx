import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Vibecoding League — Competição de Desenvolvimento com IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0e17",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background decoration */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(124,58,237,0.2)",
            border: "1px solid rgba(124,58,237,0.5)",
            borderRadius: "9999px",
            padding: "8px 20px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              color: "#a78bfa",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            ⚡ Vibecoding League
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#fffffe",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: "20px",
            }}
          >
            Compita com IA.{" "}
            <span style={{ color: "#f59e0b" }}>Evolua de Verdade.</span>
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#a0a0b2",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            A arena definitiva para desenvolvedores que usam IA
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #7c3aed, #f59e0b, #7c3aed)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
