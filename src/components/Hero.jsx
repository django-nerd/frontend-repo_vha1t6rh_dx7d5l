import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Neon rings */}
      <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full blur-3xl bg-cyan-500/20" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full blur-3xl bg-orange-500/20" />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 text-cyan-200 rounded-full px-3 py-1 text-xs ring-1 ring-white/10 backdrop-blur">
              <span>Solidity • ZK • Rust • TypeScript</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              Sci‑Fi Blockchain Engineer Portfolio
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-blue-100/85 text-lg leading-relaxed">
              Interactive 3D, neon orange + cyan palette, and a holographic UI. Secure, gas‑efficient on‑chain systems and zero‑knowledge applications.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 px-5 py-3 text-sm font-semibold transition-colors shadow-[0_0_20px_#22d3ee88]">See Projects</a>
              <a href="#contact" className="rounded-lg border border-white/10 hover:border-white/20 text-cyan-100 hover:text-white px-5 py-3 text-sm font-semibold transition-colors">Get in touch</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-4 backdrop-blur">
                <p className="text-3xl font-bold text-white drop-shadow-[0_0_8px_#22d3ee]">5+</p>
                <p className="text-xs text-cyan-200/70">Years Experience</p>
              </div>
              <div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-4 backdrop-blur">
                <p className="text-3xl font-bold text-white drop-shadow-[0_0_8px_#f97316]">$1B+</p>
                <p className="text-xs text-cyan-200/70">Secured TVL</p>
              </div>
              <div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-4 backdrop-blur">
                <p className="text-3xl font-bold text-white drop-shadow-[0_0_8px_#22d3ee]">40%</p>
                <p className="text-xs text-cyan-200/70">Avg Gas Savings</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-12 -z-10 bg-gradient-to-tr from-cyan-500/20 to-orange-400/20 blur-3xl" />
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur">
              <div className="h-full rounded-xl bg-gradient-to-br from-slate-900/80 to-black/40 p-6 grid grid-rows-3 gap-4">
                <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
                  <p className="text-xs text-cyan-200/80">Solidity • Foundry • Hardhat</p>
                  <p className="mt-2 text-sm text-white/95">Audit‑ready contracts with fuzzing and invariants.</p>
                </div>
                <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
                  <p className="text-xs text-cyan-200/80">ZK • Circom • Noir</p>
                  <p className="mt-2 text-sm text-white/95">Practical ZK systems with robust verifiers.</p>
                </div>
                <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
                  <p className="text-xs text-cyan-200/80">Rust • TypeScript • APIs</p>
                  <p className="mt-2 text-sm text-white/95">High‑throughput services and ergonomic tooling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
