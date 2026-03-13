import { ImageResponse } from "next/og"

export const size = { width: 48, height: 48 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1c1917",
        borderRadius: "8px",
      }}
    >
      <svg
        viewBox="0 0 160 120"
        width="42"
        height="32"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M20 30 C31 47, 42 64, 60 90"
          stroke="#f5f5f0"
          strokeWidth="5"
        />
        <path
          d="M60 90 C72 78, 85 64, 100 50"
          stroke="#f5f5f0"
          strokeWidth="5"
        />
        <path
          d="M100 50 C113 40, 126 30, 140 20"
          stroke="#f5f5f0"
          strokeWidth="5"
        />
        <path
          d="M60 90 C80 88.5, 99 87, 120 85"
          stroke="#f5f5f0"
          strokeWidth="4"
        />
        <circle cx="20" cy="30" r="8" fill="#3882af" />
        <circle cx="60" cy="90" r="8" fill="#3882af" />
        <circle cx="100" cy="50" r="8" fill="#3882af" />
        <circle cx="140" cy="20" r="8" fill="#3882af" />
        <circle cx="120" cy="85" r="8" fill="#3882af" />
      </svg>
    </div>,
    {
      ...size,
    }
  )
}
