import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-primary-100/50 border-b border-primary-100'
          : 'bg-gradient-to-b from-cyan-50/80 via-sky-50/60 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Creative Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Logo Icon */}
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>

              {/* Main logo box */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl font-mono">DC</span>
              </div>

              {/* Pulse indicator */}
              <div className="absolute -top-1 -right-1 flex items-center justify-center">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white shadow-lg"></span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="font-black text-xl text-warm-900 tracking-tight">
                Dev<span className="text-primary-600">Crew</span>
              </span>
              <span className="text-[10px] font-semibold text-primary-600 tracking-wider uppercase">
                Ship • Build • Grow
              </span>
            </div>
          </motion.div>

          {/* Center Nav - Compact Pills */}
          <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-primary-100">
            {[
              { label: 'Build', id: 'what-we-build', icon: '⚡' },
              { label: 'Work', id: 'work', icon: '🚀' },
              { label: 'Crew', id: 'team', icon: '👥' },
            ].map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(link.id)}
                className="group px-4 py-1.5 text-sm font-semibold text-warm-700 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 rounded-full transition-all duration-300"
              >
                <span className="hidden group-hover:inline mr-1">{link.icon}</span>
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button - Glowing */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            className="relative group hidden md:block"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity"></div>

            {/* Button */}
            <div className="relative px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full shadow-lg">
              <span className="flex items-center gap-2">
                Let's Talk
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onContactClick}
            className="md:hidden px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full text-sm shadow-lg"
          >
            Talk
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
