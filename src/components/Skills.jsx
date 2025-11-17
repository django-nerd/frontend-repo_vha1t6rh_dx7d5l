const skills = [
  { group: "Smart Contracts", items: ["Solidity", "Foundry", "Hardhat", "OpenZeppelin", "Security Audits"] },
  { group: "Zero-Knowledge", items: ["Circom", "Noir", "Halo2", "zk-SNARKs", "zkVMs"] },
  { group: "Languages", items: ["Rust", "TypeScript", "Python", "Go"] },
  { group: "Architecture", items: ["EVM", "L2 Rollups", "Bridges", "Subgraphs", "Event-driven"] },
  { group: "Tooling", items: ["REST APIs", "gRPC", "Docker", "Kubernetes", "CI/CD"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Core Skills</h2>
        <p className="mt-2 text-blue-200/80">Practical expertise across the full blockchain stack</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
              <p className="text-sm font-semibold text-white/90">{s.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="text-xs text-blue-100/90 bg-white/5 rounded-md px-2.5 py-1 ring-1 ring-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
