import { motion } from 'framer-motion';
import Section from '../components/Section';
import Container from '../components/Container';

export default function Hero({ onContactClick }) {
  // Animated developer avatars
  const developers = [
    { emoji: '👨‍💻', name: 'Alex', delay: 0.2, x: -20, y: -10 },
    { emoji: '👩‍💻', name: 'Sarah', delay: 0.4, x: 20, y: -15 },
    { emoji: '🧑‍💻', name: 'Jordan', delay: 0.6, x: -15, y: 10 },
  ];

  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Warm blob backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-300/40 to-accent-300/40 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-accent-300/40 to-primary-200/40 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-primary-200/50 border border-primary-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                <span className="text-sm font-semibold text-warm-800">
                  New Developer Initiative • Just Launched
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-warm-900">
                  We're a Small
                </span>
                <br />
                <span className="gradient-text">
                  Dev Crew
                </span>
                <br />
                <span className="text-warm-800">
                  Building Big Ideas
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-warm-600 leading-relaxed max-w-xl"
            >
              Not an agency. Just passionate developers who love to code, ship fast, and make things that actually work.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px -10px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-lg font-semibold rounded-full shadow-xl shadow-primary-300/50 hover:shadow-2xl transition-all"
              >
                <span className="flex items-center gap-2">
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('what-we-build')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-warm-800 text-lg font-semibold rounded-full border-2 border-primary-200 hover:border-primary-400 hover:bg-white transition-all shadow-lg"
              >
                See What We Do
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-8 pt-4"
            >
              {[
                { label: 'Fresh Start', value: '2025' },
                { label: 'Dev Team', value: '3' },
                { label: 'Ready to Build', value: '100%' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-primary-600">
                    {stat.value}
                  </span>
                  <span className="text-sm text-warm-600">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated Developer Avatars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Central illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-80 h-80 border-2 border-dashed border-primary-300 rounded-full"
              ></motion.div>

              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-96 h-96 border border-accent-200 rounded-full"
              ></motion.div>

              {/* Developer avatars floating around */}
              {developers.map((dev, index) => (
                <motion.div
                  key={dev.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: dev.delay,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="absolute"
                  style={{
                    top: `${50 + dev.y}%`,
                    left: `${50 + dev.x}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    className="relative group cursor-pointer"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-2xl shadow-primary-300/50 flex items-center justify-center border-2 border-primary-200 group-hover:border-primary-400 transition-all">
                      <span className="text-5xl">{dev.emoji}</span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-semibold text-warm-800 bg-white px-3 py-1 rounded-full shadow-lg">
                        {dev.name}
                      </span>
                    </div>
                    {/* Activity indicator */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Center code symbol */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative z-10 w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl shadow-2xl shadow-primary-400/50 flex items-center justify-center"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-6xl text-white font-mono"
                >
                  {'</>'}
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
