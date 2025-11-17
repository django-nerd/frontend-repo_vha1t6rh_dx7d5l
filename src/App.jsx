import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Your Name • Blockchain Engineer</p>
          <div className="flex items-center gap-4 text-blue-200/70 text-sm">
            <a href="mailto:you@example.com" className="hover:text-white">Email</a>
            <a href="https://x.com/" target="_blank" className="hover:text-white" rel="noreferrer">X</a>
            <a href="https://github.com/" target="_blank" className="hover:text-white" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
