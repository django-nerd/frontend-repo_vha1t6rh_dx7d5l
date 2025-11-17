const items = [
  {
    place: "DeFi Protocol (Top 20)",
    role: "Smart Contract Engineer",
    time: "2022 — Present",
    bullets: [
      "Led audits and shipped upgradeable contracts securing >$1B TVL",
      "Designed gas-optimized strategies saving ~40% on claims",
      "Built rigorous invariant/fuzz testing suites"
    ]
  },
  {
    place: "L2 Infrastructure",
    role: "Blockchain Architect",
    time: "2020 — 2022",
    bullets: [
      "Prototyped rollup components and bridge contracts",
      "Designed event-driven indexers and data pipelines",
      "Owned developer tooling and SDKs"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h2>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.place} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-white font-semibold">{item.role}</p>
                  <p className="text-blue-200/80 text-sm">{item.place}</p>
                </div>
                <p className="text-blue-200/60 text-sm">{item.time}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 text-blue-100/90 text-sm space-y-1">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
