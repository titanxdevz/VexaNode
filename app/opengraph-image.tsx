import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VexaNode — Minecraft, VPS & Discord Bot Hosting";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07090e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.08) 2%, transparent 0%)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient emerald glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.15)",
            filter: "blur(120px)",
          }}
        />

        {/* Top brand header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(16, 185, 129, 0.2)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#10b981",
              fontSize: "24px",
              fontWeight: 900,
            }}
          >
            V
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 900,
              letterSpacing: "2px",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            Vexa<span style={{ color: "#10b981" }}>Node</span>
          </div>
          <div
            style={{
              marginLeft: "12px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#10b981",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Next-Gen Cloud
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 10,
            maxWidth: "950px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Cloud, Game & <span style={{ color: "#10b981" }}>Discord Bot Hosting</span>
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#9ca3af",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            High-performance Minecraft, Cloud VPS, Discord Bot, and Lavalink infrastructure powered by modern AMD compute and DDoS mitigation.
          </p>
        </div>

        {/* Bottom Trust Line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            zIndex: 10,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div style={{ color: "#10b981", fontSize: "16px", fontWeight: 700 }}>
            ⚡ Fast Deployment
          </div>
          <div style={{ color: "#4b5563" }}>•</div>
          <div style={{ color: "#10b981", fontSize: "16px", fontWeight: 700 }}>
            🛡️ 100Gbps+ DDoS Protection
          </div>
          <div style={{ color: "#4b5563" }}>•</div>
          <div style={{ color: "#10b981", fontSize: "16px", fontWeight: 700 }}>
            🚀 Modern AMD Ryzen & EPYC
          </div>
          <div style={{ marginLeft: "auto", color: "#9ca3af", fontSize: "16px", fontWeight: 600 }}>
            vexanode.cloud
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
