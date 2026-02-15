import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import Careers from '../sections/Careers';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../sections/Footer';
import TerminalContactModal from '../components/TerminalContactModal';

export default function CareersPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParticleField />

      {/* Minimal nav for careers page */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-2xl border-b border-neon-cyan/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-18">
            {/* Logo - link back home */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="relative w-11 h-11 bg-dark-800 border border-neon-cyan/30 rounded-xl flex items-center justify-center group-hover:border-neon-cyan/60 transition-all duration-500">
                  <span className="text-neon-cyan font-black text-lg font-mono">B</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white tracking-tight">
                  Build<span className="text-neon-cyan">io.in</span>
                </span>
                <span className="text-[9px] font-mono text-neon-cyan/60 tracking-[0.2em] uppercase">
                  Careers Portal
                </span>
              </div>
            </Link>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-white/50 hover:text-neon-cyan transition-colors font-mono"
              >
                &larr; Home
              </Link>

              <ThemeToggle />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openContactModal}
                className="relative group"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-full opacity-60 group-hover:opacity-100 blur-[2px] transition-all duration-500"></div>
                <div className="relative px-6 py-2.5 bg-dark-900 text-white font-semibold rounded-full text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></span>
                    Contact Us
                  </span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer for fixed nav */}
      <div className="h-18"></div>

      <Careers />
      <Footer onContactClick={openContactModal} />
      <TerminalContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
