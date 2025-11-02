import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
                <p className="mt-4 text-white/80 max-w-2xl">
                  I design and develop high-performance web apps with a focus on interaction, motion, and clarity. My toolkit blends engineering discipline with creative exploration, resulting in interfaces that feel alive and purposeful.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['React', 'FastAPI', 'TypeScript', 'Tailwind', 'Spline', 'Framer Motion'].map((t) => (
                    <span key={t} className="text-xs text-white/70 border border-white/10 bg-white/5 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-white/70">
                  Currently exploring new ways to combine real‑time 3D with modern UI patterns to create immersive yet accessible experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-white/60">
          © {new Date().getFullYear()} • Built with a love for clean code and good design.
        </div>
      </footer>
    </div>
  );
}

export default App;
