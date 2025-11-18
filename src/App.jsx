import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SciFiScene from './components/SciFiScene'

function App() {
  return (
    <div className="min-h-screen bg-[#05070b] relative">
      {/* 3D Sci‑Fi Background */}
      <SciFiScene />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="border-t border-white/10 py-10 bg-black/20 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cyan-200/80 text-sm">© {new Date().getFullYear()} Your Name • Blockchain Engineer</p>
            <div className="flex items-center gap-4 text-cyan-200/80 text-sm">
              <a href="mailto:you@example.com" className="hover:text-white">Email</a>
              <a href="https://x.com/" target="_blank" className="hover:text-white" rel="noreferrer">X</a>
              <a href="https://github.com/" target="_blank" className="hover:text-white" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/" target="_blank" className="hover:text-white" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Neon vignette glow */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(900px_500px_at_110%_30%,rgba(249,115,22,0.12),transparent),radial-gradient(800px_400px_at_-10%_80%,rgba(56,189,248,0.12),transparent)]" />
    </div>
  )
}

export default App
