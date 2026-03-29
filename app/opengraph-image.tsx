import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "VantumData — ERP Data Intelligence Platform"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  const loraFont = await fetch(
    "https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787wsuyJGmKxemMeZ.woff"
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1c1917",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "30%",
          width: "40%",
          height: "80%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(56,130,175,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Constellation accent — top right */}
      <svg
        viewBox="0 0 400 300"
        width="500"
        height="375"
        style={{
          position: "absolute",
          top: -40,
          right: -60,
          opacity: 0.06,
        }}
      >
        <path
          d="M40 200 C80 140, 160 100, 240 130 C320 160, 340 80, 380 60"
          stroke="#f5f5f0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M240 130 C250 180, 270 220, 320 250"
          stroke="#f5f5f0"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="40" cy="200" r="6" fill="#3882af" />
        <circle cx="240" cy="130" r="7" fill="#3882af" />
        <circle cx="380" cy="60" r="5" fill="#3882af" />
        <circle cx="320" cy="250" r="5" fill="#3882af" />
      </svg>

      {/* Constellation accent — bottom left */}
      <svg
        viewBox="0 0 300 200"
        width="380"
        height="253"
        style={{
          position: "absolute",
          bottom: -30,
          left: -50,
          opacity: 0.06,
        }}
      >
        <path
          d="M20 120 C50 80, 120 50, 180 70 C240 90, 260 40, 290 30"
          stroke="#f5f5f0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="20" cy="120" r="5" fill="#3882af" />
        <circle cx="180" cy="70" r="6" fill="#3882af" />
        <circle cx="290" cy="30" r="4.5" fill="#3882af" />
      </svg>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg
          viewBox="0 0 160 120"
          width="80"
          height="60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M20 30 C31 47, 42 64, 60 90"
            stroke="#f5f5f0"
            strokeWidth="2.7"
          />
          <path
            d="M60 90 C72 78, 85 64, 100 50"
            stroke="#f5f5f0"
            strokeWidth="2.7"
          />
          <path
            d="M100 50 C113 40, 126 30, 140 20"
            stroke="#f5f5f0"
            strokeWidth="2.7"
          />
          <path
            d="M60 90 C80 88.5, 99 87, 120 85"
            stroke="#f5f5f0"
            strokeWidth="2.2"
          />
          <circle cx="20" cy="30" r="4.75" fill="#3882af" />
          <circle cx="60" cy="90" r="4.75" fill="#3882af" />
          <circle cx="100" cy="50" r="4.75" fill="#3882af" />
          <circle cx="140" cy="20" r="4.75" fill="#3882af" />
          <circle cx="120" cy="85" r="4.75" fill="#3882af" />
        </svg>

        <span
          style={{
            fontFamily: "Lora",
            fontSize: 48,
            color: "#f5f5f0",
            letterSpacing: "-0.02em",
          }}
        >
          VantumData
        </span>
      </div>

      {/* Tagline */}
      <span
        style={{
          fontFamily: "Lora",
          fontSize: 22,
          color: "#a8a29e",
          marginTop: 24,
          letterSpacing: "-0.01em",
        }}
      >
        ERP Data Intelligence Platform
      </span>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Lora",
          data: loraFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  )
}
