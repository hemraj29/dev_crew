import { motion } from 'framer-motion';
import Section from '../components/Section';
import Container from '../components/Container';
import FadeIn from '../components/FadeIn';
import Interactive3DPlayground from '../components/Interactive3DPlayground';

const cards = [
  {
    number: '01',
    title: 'Years of Experience',
    desc: 'Combined 15+ years building products for startups and enterprises',
    gradient: 'from-neon-cyan to-neon-blue',
    stat: '15+',
    statLabel: 'combined years',
  },
  {
    number: '02',
    title: 'Modern Stack',
    desc: 'React, Node, Python, Cloud - we use what works, not what\'s trendy',
    gradient: 'from-neon-blue to-neon-purple',
    stat: '10+',
    statLabel: 'technologies',
  },
  {
    number: '03',
    title: 'Ship Fast',
    desc: 'We ship MVPs in weeks, not months. Iterate fast, learn faster',
    gradient: 'from-neon-purple to-neon-pink',
    stat: '100%',
    statLabel: 'commitment',
  },
];

export default function WorkShowcase() {
  return (
    <Section id="work" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent"></div>
        <div className="absolute inset-0 dot-matrix opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[200px]"></div>
      </div>

      <Container className="relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/[0.03] backdrop-blur-sm rounded-full text-sm font-mono text-neon-green/80 border border-neon-green/20">
              // status: operational
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            New<span className="text-neon-cyan">,</span> But Not
            <br />
            <span className="gradient-text">Inexperienced</span>
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            Fresh initiative, years of battle-tested experience.
            We build it our way -- fast, focused, and without the overhead.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group relative h-full"
              >
                {/* Card glow on hover */}
                <div className={`absolute -inset-[1px] bg-gradient-to-b ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500`}></div>

                <div className="relative h-full glass-card rounded-2xl p-8 transition-all duration-500 group-hover:border-white/20 hud-corners">
                  {/* Scan line effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/0 group-hover:via-neon-cyan/40 to-transparent transition-all duration-500"></div>
                  </div>

                  {/* Number */}
                  <span className={`text-5xl font-black font-mono bg-gradient-to-br ${card.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500`}>
                    {card.number}
                  </span>

                  {/* Stat */}
                  <div className="mt-4 mb-4">
                    <span className="text-3xl font-black text-neon-cyan font-mono">{card.stat}</span>
                    <span className="text-xs text-white/30 font-mono ml-2 uppercase tracking-wider">{card.statLabel}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-white/40 leading-relaxed text-sm">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Interactive 3D Playground */}
        <FadeIn delay={0.2}>
          <Interactive3DPlayground />
        </FadeIn>

        {/* CTA Box */}
        <FadeIn delay={0.3}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative glass-card rounded-2xl p-8 md:p-10 neon-border">
              {/* Animated border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-2xl opacity-20 blur-[1px]"></div>

              <div className="relative z-10">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-3">
                  <span className="font-bold text-neon-cyan">Your project could be our next mission.</span>
                  <br />
                  Let's build something extraordinary.
                </p>
                <p className="text-sm text-white/30 font-mono">
                  {'>'} early_access = true // full attention & energy guaranteed
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
