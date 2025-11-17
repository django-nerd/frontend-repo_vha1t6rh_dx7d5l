export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_100%_-50%,rgba(59,130,246,0.25),transparent),radial-gradient(600px_300px_at_-20%_-20%,rgba(34,197,94,0.15),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 text-blue-200 rounded-full px-3 py-1 text-xs ring-1 ring-white/10">
              <span>Solidity • ZK • Rust • Typescript</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
              Building secure, scalable blockchain systems
            </h1>
            <p className="mt-4 text-blue-100/80 text-lg leading-relaxed">
              I design and ship smart contracts, zero-knowledge applications, and high-performance on-chain services. I care deeply about security, gas efficiency, and great DX.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 text-sm font-semibold transition-colors">See Projects</a>
              <a href="#contact" className="rounded-lg border border-white/10 hover:border-white/20 text-blue-100 hover:text-white px-5 py-3 text-sm font-semibold transition-colors">Get in touch</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-xs text-blue-200/70">Years Experience</p>
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-3xl font-bold text-white">$1B+</p>
                <p className="text-xs text-blue-200/70">Secured TVL</p>
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-3xl font-bold text-white">40%</p>
                <p className="text-xs text-blue-200/70">Avg Gas Savings</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-12 -z-10 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-3xl" />
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="h-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 grid grid-rows-3 gap-4">
                <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
                  <p className="text-xs text-blue-200/70">Solidity • Foundry • Hardhat</p>
                  <p className="mt-2 text-sm text-white">Audit-ready smart contracts with fuzzing and invariant tests.</p>
                </div>
                <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
                  <p className="text-xs text-blue-200/70">ZK • Circom • Noir</p>
                  <p className="mt-2 text-sm text-white">Practical zero-knowledge systems with robust verifier design.</p>
                </div>
                <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
                  <p className="text-xs text-blue-200/70">Rust • Typescript • APIs</p>
                  <p className="mt-2 text-sm text-white">High-throughput chain services and ergonomic dev tooling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
