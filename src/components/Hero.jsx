import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradients - allow interaction with 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
          Interactive • Tech • Minimal
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight"
        >
          Crafting futuristic
          <br />
          digital experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 max-w-2xl text-white/80"
        >
          I’m a creative developer focused on immersive web interfaces, real-time 3D, and
          refined user journeys. Let’s build something extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 px-5 py-3 text-black font-medium shadow-lg shadow-purple-500/30 hover:brightness-110 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/15 bg-white/10 px-5 py-3 text-white hover:bg-white/20 backdrop-blur-md transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
