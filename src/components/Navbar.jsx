import { useEffect, useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-purple-500/20">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-wide">My Futuristic Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 text-white/90">
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="py-2">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
