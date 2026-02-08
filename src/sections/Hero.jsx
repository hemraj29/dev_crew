import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Container from '../components/Container';
import HeroScene3D from '../components/HeroScene3D';

function AnimatedCounter({ target, suffix = '', label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-black text-neon-cyan font-mono">
        {count}{suffix}
      </span>
      <span className="text-xs text-white/40 font-mono uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
}

export default function Hero({ onContactClick }) {
  const [typedText, setTypedText] = useState('');
  const fullText = '> initializing buildio.exe...';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <HeroScene3D />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 via-transparent to-dark-950/80 pointer-events-none"></div>

      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Terminal typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm rounded-full border border-white/[0.06]">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-neon-green/80">
                {typedText}
                <span className="terminal-cursor"></span>
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="text-white/90">We're a Small</span>
              <br />
              <span className="gradient-text text-6xl md:text-8xl lg:text-9xl">
                Buildio.in
              </span>
              <br />
              <span className="text-white/70">Building the</span>
              <br />
              <span className="text-white/90">
                Future<span className="text-neon-cyan">.</span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mt-8 font-light"
          >
            Not an agency. Just passionate developers who code, ship fast,
            and build things that actually work. No meetings. No bureaucracy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 items-center justify-center mt-12"
          >
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
                Launch Project
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-neon-cyan"
                >
                  &rarr;
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('what-we-build')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/[0.03] backdrop-blur-sm text-white/70 text-lg font-medium rounded-full border border-white/10 hover:text-neon-cyan transition-all duration-500"
            >
              Explore Systems
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-12 md:gap-16 mt-16 pt-8 border-t border-white/[0.05]"
          >
            <AnimatedCounter target={15} suffix="+" label="Years Exp" />
            <AnimatedCounter target={3} suffix="" label="Engineers" />
            <AnimatedCounter target={100} suffix="%" label="Ready" />
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none"></div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-neon-cyan/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
