import { motion } from 'framer-motion';
import Section from '../components/Section';
import Container from '../components/Container';
import FadeIn from '../components/FadeIn';

const skills = [
  { icon: '01', label: 'Web Apps', desc: 'React, Next.js, full-stack', color: 'from-neon-cyan to-neon-blue' },
  { icon: '02', label: 'Mobile', desc: 'React Native, cross-platform', color: 'from-neon-blue to-neon-purple' },
  { icon: '03', label: 'APIs', desc: 'Node, Python, GraphQL', color: 'from-neon-purple to-neon-pink' },
  { icon: '04', label: 'Cloud', desc: 'AWS, Vercel, Docker', color: 'from-neon-cyan to-neon-green' },
  { icon: '05', label: 'AI Agents', desc: 'LangChain, LLMs, RAG', color: 'from-neon-blue to-neon-cyan' },
  { icon: '06', label: 'Blockchain', desc: 'Smart contracts, Web3', color: 'from-neon-purple to-neon-blue' },
];

const techStack = [
  { label: 'webApps', desc: 'React, Next.js, full-stack magic' },
  { label: 'mobileApps', desc: 'React Native, native feel, cross-platform' },
  { label: 'backends', desc: 'Node, Python, scalable APIs' },
  { label: 'deployment', desc: 'AWS, Vercel, Docker - we ship it live' },
  { label: 'aiAgents', desc: 'LangChain, LangGraph, intelligent automation' },
  { label: 'blockchain', desc: 'Smart contracts, Web3, Solidity' },
];

export default function WhatWeBuild() {
  return (
    <Section id="what-we-build" className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"></div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/[0.03] backdrop-blur-sm rounded-full text-sm font-mono text-neon-cyan/80 border border-neon-cyan/20">
              <span className="text-neon-purple">const</span> capabilities = () =&gt; {'{'}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            We Code<span className="text-neon-cyan">.</span>{' '}
            <span className="gradient-text">We Ship</span>
            <span className="text-neon-cyan">.</span>
            <br className="hidden md:block" />
            We Make It Work<span className="text-neon-cyan">.</span>
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            From idea to deployment, we handle the full stack. Modern tech, clean code,
            and products that people actually want to use.
          </p>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {skills.map((skill, index) => (
            <FadeIn key={skill.label} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="relative glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 holo-shimmer overflow-hidden">
                  {/* Gradient line at top */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10 flex items-center gap-4">
                    {/* Number */}
                    <div className={`text-3xl font-black font-mono bg-gradient-to-br ${skill.color} bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-neon-cyan transition-colors">
                        {skill.label}
                      </h3>
                      <p className="text-sm text-white/30 group-hover:text-white/50 transition-colors">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Code Block Section */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.05] bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-neon-green/60"></div>
                </div>
                <span className="text-xs font-mono text-white/30">services.config</span>
              </div>

              {/* Code content */}
              <div className="p-6 md:p-8 font-mono text-sm md:text-base">
                <div className="space-y-3 text-white/70">
                  <div className="flex flex-wrap gap-2 items-start">
                    <span className="text-neon-purple">function</span>
                    <span className="text-neon-cyan">buildYourProduct</span>
                    <span className="text-white/40">() {'{'}</span>
                  </div>

                  <div className="pl-6 text-white/40">
                    <span className="text-neon-purple">return</span> {'{'}
                  </div>

                  <div className="pl-12 space-y-2">
                    {techStack.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-neon-cyan flex-shrink-0">{item.label}:</span>
                        <span className="text-neon-green/60 font-sans">'{item.desc}'</span>
                        <span className="text-white/20">,</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pl-6 text-white/40">{'}'}</div>
                  <div className="text-white/40">{'}'}</div>
                </div>

                {/* Bottom note */}
                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                  <p className="text-white/30 text-center font-sans text-sm">
                    <span className="text-neon-cyan font-mono">//</span>{' '}
                    Hands-on from day one. No hand-offs, no bureaucracy. Just devs building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
