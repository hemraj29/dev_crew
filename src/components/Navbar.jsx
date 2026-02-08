import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

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

  const sectionLinks = [
    { label: 'Build', id: 'what-we-build' },
    { label: 'Work', id: 'work' },
    { label: 'Crew', id: 'team' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-2xl border-b border-neon-cyan/10 shadow-[0_4px_30px_rgba(0,240,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative w-11 h-11 bg-dark-800 border border-neon-cyan/30 rounded-xl flex items-center justify-center group-hover:border-neon-cyan/60 transition-all duration-500">
                <span className="text-neon-cyan font-black text-lg font-mono">B</span>
              </div>
              <div className="absolute -top-1 -right-1 flex items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-neon-green opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-black text-lg text-white tracking-tight">
                Build<span className="text-neon-cyan">io.in</span>
              </span>
              <span className="text-[9px] font-mono text-neon-cyan/60 tracking-[0.2em] uppercase">
                System Online
              </span>
            </div>
          </motion.div>

          {/* Center Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-xl rounded-full px-2 py-1.5 border border-white/[0.06]">
            {sectionLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(link.id)}
                className="relative px-5 py-2 text-sm font-medium text-white/60 hover:text-neon-cyan rounded-full transition-all duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-neon-cyan/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            ))}

            {/* Careers as a route link */}
            <Link to="/careers">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-5 py-2 text-sm font-medium text-white/60 hover:text-neon-green rounded-full transition-all duration-300 group cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Careers
                  <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></span>
                </span>
                <div className="absolute inset-0 bg-neon-green/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContactClick}
              className="relative group hidden md:block"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-full opacity-60 group-hover:opacity-100 blur-[2px] transition-all duration-500"></div>
              <div className="relative px-6 py-2.5 bg-dark-900 text-white font-semibold rounded-full text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse-neon"></span>
                  Initialize
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-neon-cyan"
                  >
                    &rarr;
                  </motion.span>
                </span>
              </div>
            </motion.button>

            {/* Mobile CTA */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onContactClick}
              className="md:hidden px-4 py-2 bg-dark-800 border border-neon-cyan/30 text-neon-cyan font-semibold rounded-full text-sm"
            >
              Init
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
