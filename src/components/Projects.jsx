const projects = [
  {
    title: "Perimeter - ZK Access Control",
    desc: "Circuit-driven access tokens with on-chain verifiers and gas-optimized Solidity library.",
    tags: ["Solidity", "Circom", "ZKP", "Foundry"],
    link: "#"
  },
  {
    title: "Roller - Minimal Rollup",
    desc: "Educational optimistic rollup with fraud proofs, batcher, and indexer in Rust.",
    tags: ["Rust", "EVM", "Rollups", "TypeScript"],
    link: "#"
  },
  {
    title: "Scribe - Dev Tooling",
    desc: "Typescript SDK and REST API around event indexing and caching for dapps.",
    tags: ["TypeScript", "REST", "Subgraphs"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-blue-200/80">A few things I can talk about</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-lg border border-white/10 hover:border-white/20 text-blue-100 hover:text-white px-4 py-2 text-sm font-semibold transition-colors">Request detailed case studies</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg font-semibold text-white group-hover:text-white/90">{p.title}</p>
                <span className="text-[10px] text-blue-200/70">Open</span>
              </div>
              <p className="mt-2 text-sm text-blue-100/80">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-blue-100/90 bg-white/5 rounded-md px-2.5 py-1 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
