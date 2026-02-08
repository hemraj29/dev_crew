import { motion } from 'framer-motion';
import Container from '../components/Container';
import FadeIn from '../components/FadeIn';

export default function Footer({ onContactClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05] py-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-cyan/5 rounded-full blur-[200px]"></div>
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-10">
            {/* CTA */}
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Let's Build<br />
                <span className="gradient-text">Together</span>
              </h3>
              <p className="text-white/40 mb-8 text-lg">
                Got an idea? Need a team? Let's chat. No pressure, just real talk about what you're building.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 240, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="group relative px-8 py-4 overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"></div>
                <div className="absolute inset-[1px] bg-dark-950 rounded-full"></div>
                <div className="absolute inset-[1px] bg-gradient-to-r from-neon-cyan/10 via-neon-blue/10 to-neon-purple/10 rounded-full"></div>
                <span className="relative z-10 flex items-center gap-3 text-white font-semibold text-lg">
                  Start a Conversation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-neon-cyan"
                  >
                    &rarr;
                  </motion.span>
                </span>
              </motion.button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Bottom */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
              <div className="flex items-center gap-3">
                {/* Mini logo */}
                <div className="w-8 h-8 bg-dark-800 border border-neon-cyan/20 rounded-lg flex items-center justify-center">
                  <span className="text-neon-cyan font-black text-xs font-mono">B</span>
                </div>
                <p className="font-mono">
                  &copy; {currentYear} Buildio<span className="text-neon-cyan">.in</span> All systems operational.
                </p>
              </div>

              <div className="flex gap-6">
                <a
                  href="mailto:hello@buildio.in"
                  className="hover:text-neon-cyan transition-colors font-mono text-xs"
                >
                  hello@buildio.in
                </a>
                <button
                  onClick={onContactClick}
                  className="hover:text-neon-cyan transition-colors font-mono text-xs"
                >
                  Initialize Contact
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}
