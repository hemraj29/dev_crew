import { motion } from 'framer-motion';
import Section from '../components/Section';
import Container from '../components/Container';
import FadeIn from '../components/FadeIn';

const team = [
  {
    name: 'Alex Chen',
    role: 'Full-Stack Engineer',
    what: 'Builds the systems that power your product. 8 years deep in React, Node, cloud architecture, LangChain, and AI agents.',
    initial: 'AC',
    gradient: 'from-neon-cyan to-neon-blue',
    skills: ['React', 'Node.js', 'AI/ML', 'Cloud'],
  },
  {
    name: 'Sarah Martinez',
    role: 'Product Engineer',
    what: 'Turns ideas into interfaces people actually want to use. Obsessed with details, user experience, and AI/ML integration.',
    initial: 'SM',
    gradient: 'from-neon-blue to-neon-purple',
    skills: ['UX/UI', 'React', 'Python', 'Design'],
  },
  {
    name: 'Jordan Kim',
    role: 'Backend Architect',
    what: 'Makes sure everything scales. From databases to APIs, blockchain smart contracts, and infrastructure that just works.',
    initial: 'JK',
    gradient: 'from-neon-purple to-neon-pink',
    skills: ['Systems', 'Blockchain', 'APIs', 'DevOps'],
  },
];

export default function TheTeam() {
  return (
    <Section id="team" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[200px]"></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/[0.03] backdrop-blur-sm rounded-full text-sm font-mono text-neon-purple/80 border border-neon-purple/20">
              team.members.list()
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            The <span className="gradient-text">Crew</span>
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            Small team, big skills. Developers who care about shipping quality code
            and building things that work.
          </p>
        </FadeIn>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group relative h-full"
              >
                {/* Glow */}
                <div className={`absolute -inset-[1px] bg-gradient-to-b ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-700`}></div>

                <div className="relative h-full glass-card rounded-2xl p-8 transition-all duration-500 group-hover:border-white/15 overflow-hidden">
                  {/* Holographic shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5"></div>
                  </div>

                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>

                  <div className="relative z-10 text-center">
                    {/* Avatar */}
                    <div className="relative inline-block mb-6">
                      <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity`}></div>
                      <div className="relative w-20 h-20 bg-dark-800 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-white/20 transition-all">
                        <span className={`text-2xl font-black font-mono bg-gradient-to-br ${member.gradient} bg-clip-text text-transparent`}>
                          {member.initial}
                        </span>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -top-1 -right-1">
                        <span className="absolute inline-flex h-3 w-3 rounded-full bg-neon-green opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green border border-dark-800"></span>
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className={`text-sm font-mono bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                      {member.role}
                    </p>

                    {/* Description */}
                    <p className="text-white/35 text-sm leading-relaxed mb-6">
                      {member.what}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-mono text-white/40 bg-white/[0.03] border border-white/[0.06] rounded-full group-hover:text-neon-cyan/60 group-hover:border-neon-cyan/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Message */}
        <FadeIn delay={0.4}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative glass-card rounded-2xl p-8 neon-border">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-2xl opacity-10 blur-[1px]"></div>
              <div className="relative z-10">
                <p className="text-white/60 leading-relaxed mb-3">
                  <span className="font-bold text-neon-cyan">Direct access.</span> You'll work with us directly -- no account managers, no middlemen. Just engineers who care.
                </p>
                <p className="text-white/30 text-sm font-mono">
                  {'>'} communication_style = "simple, direct, effective"
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
