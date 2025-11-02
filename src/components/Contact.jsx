import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s collaborate</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Open to freelance, contracts, and exciting full-time roles. Tell me about your idea and we’ll make it real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks! Your message has been noted for this demo.');
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input
                  required
                  type="text"
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input
                  required
                  type="email"
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="you@domain.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70">Message</label>
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="Tell me about your project..."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 px-5 py-3 text-black font-medium shadow-lg shadow-purple-500/30 hover:brightness-110 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col gap-4"
          >
            <a href="mailto:hello@example.com" className="flex items-center gap-3 text-white/90 hover:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                <Mail size={18} />
              </span>
              hello@example.com
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/90 hover:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                <Github size={18} />
              </span>
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/90 hover:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                <Linkedin size={18} />
              </span>
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
