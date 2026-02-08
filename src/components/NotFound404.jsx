import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './Container';
import PiggyGame from './PiggyGame';

export default function NotFound404() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[200px] pointer-events-none"></div>

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl md:text-9xl font-black gradient-text mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              System Not Found
            </h2>
            <p className="text-lg text-white/40 mb-8 font-mono">
              {'>'} error: page_not_found // try catching the pig while we fix it
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PiggyGame />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/"
              className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"></div>
              <div className="absolute inset-[1px] bg-dark-950 rounded-full"></div>
              <div className="absolute inset-[1px] bg-gradient-to-r from-neon-cyan/10 via-neon-blue/10 to-neon-purple/10 rounded-full"></div>
              <svg className="relative z-10 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="relative z-10 text-white font-semibold">Return to Base</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
