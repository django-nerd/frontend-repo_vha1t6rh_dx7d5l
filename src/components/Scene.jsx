import Spline from '@splinetool/react-spline'

export default function Scene() {
  // Full-viewport Spline canvas. The scene URL is a lightweight, neon, sci‑fi environment.
  // If the asset fails to load (e.g., offline), the rest of the UI still renders over a gradient.
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(900px_500px_at_110%_30%,rgba(249,115,22,0.15),transparent),radial-gradient(800px_400px_at_-10%_80%,rgba(56,189,248,0.15),transparent)]" />
      <div className="absolute inset-0 opacity-[0.85]">
        <Spline scene="https://prod.spline.design/AVKtfyVhmY8nq5Aq/scene.splinecode" />
      </div>
      {/* Subtle scanlines for a sci‑fi HUD vibe */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[length:100%_3px]" />
      {/* Holographic grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  )
}
