import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon UI Kit',
    description: 'A high-tech component library with glassmorphism and motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Holo Dashboard',
    description: 'Real-time analytics with shimmering cards and micro-interactions.',
    tags: ['Next.js', 'Charting', 'UX'],
    link: '#',
  },
  {
    title: 'XR Portfolio',
    description: '3D scenes and interactive storytelling with Spline + WebGL.',
    tags: ['Spline', 'Three.js', 'Story'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            A snapshot of interfaces, systems, and experiments I’ve shipped recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              href={p.link}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 hover:border-white/20 transition overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium">{p.title}</h3>
                <ExternalLink size={18} className="text-white/60 group-hover:text-white transition" />
              </div>
              <p className="mt-3 text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-white/70 border border-white/10 bg-white/5 rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
