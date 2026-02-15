import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import Container from '../components/Container';
import FadeIn from '../components/FadeIn';

const openings = [
  {
    id: 1,
    title: 'Senior React Developer',
    type: 'Full-time',
    location: 'Remote',
    level: 'Senior',
    gradient: 'from-neon-cyan to-neon-blue',
    tags: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    description: 'Build cutting-edge web applications with our core team. You\'ll architect and implement complex UIs, work with real-time data, and push the boundaries of what\'s possible in the browser.',
    requirements: [
      '5+ years of React experience',
      'Strong TypeScript skills',
      'Experience with state management (Redux, Zustand)',
      'Performance optimization expertise',
    ],
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'Remote',
    level: 'Mid-Senior',
    gradient: 'from-neon-blue to-neon-purple',
    tags: ['Python', 'LangChain', 'LLMs', 'RAG'],
    description: 'Design and deploy intelligent AI agents and ML pipelines. Work with LLMs, build RAG systems, and create autonomous agents that solve real problems.',
    requirements: [
      '3+ years ML/AI experience',
      'Proficiency with LangChain/LangGraph',
      'Experience deploying ML models to production',
      'Strong Python and data engineering skills',
    ],
  },
  {
    id: 3,
    title: 'Blockchain Developer',
    type: 'Contract',
    location: 'Remote',
    level: 'Mid-Senior',
    gradient: 'from-neon-purple to-neon-pink',
    tags: ['Solidity', 'Web3.js', 'Smart Contracts', 'DeFi'],
    description: 'Build decentralized applications and smart contracts. Work on cutting-edge DeFi protocols, NFT platforms, and Web3 infrastructure.',
    requirements: [
      '2+ years Solidity development',
      'Experience with EVM-compatible chains',
      'Smart contract security knowledge',
      'Understanding of DeFi protocols',
    ],
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    level: 'Mid',
    gradient: 'from-neon-green to-neon-cyan',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    description: 'Own our infrastructure and deployment pipelines. Build reliable, scalable systems that keep our applications running at peak performance.',
    requirements: [
      '3+ years DevOps experience',
      'AWS or GCP certification preferred',
      'Container orchestration expertise',
      'Infrastructure as Code (Terraform)',
    ],
  },
];

const perks = [
  { icon: '01', title: 'Remote First', desc: 'Work from anywhere in the world' },
  { icon: '02', title: 'Cutting Edge', desc: 'Latest tech stack, no legacy code' },
  { icon: '03', title: 'Ownership', desc: 'Real impact, not just ticket work' },
  { icon: '04', title: 'Growth', desc: 'Learn, build, and level up daily' },
  { icon: '05', title: 'Async Culture', desc: 'No unnecessary meetings' },
  { icon: '06', title: 'Open Source', desc: 'Contribute to the community' },
];

function JobCard({ job, isExpanded, onToggle }) {
  return (
    <motion.div
      layout
      className="group relative"
    >
      {/* Glow on hover */}
      <div className={`absolute -inset-[1px] bg-gradient-to-r ${job.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500`}></div>

      <div className="relative glass-card rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-white/15">
        {/* Top gradient accent */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${job.gradient} opacity-40 group-hover:opacity-80 transition-opacity`}></div>

        {/* Header - always visible */}
        <button
          onClick={onToggle}
          className="w-full text-left p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                  {job.title}
                </h3>
                <span className={`px-3 py-0.5 text-xs font-mono rounded-full bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent border border-white/10`}>
                  {job.level}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-neon-green rounded-full"></span>
                  {job.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-neon-cyan rounded-full"></span>
                  {job.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Tags */}
              <div className="hidden lg:flex flex-wrap gap-2">
                {job.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-white/30 bg-white/[0.03] border border-white/[0.06] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expand indicator */}
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 group-hover:border-neon-cyan/30 group-hover:text-neon-cyan transition-colors"
              >
                +
              </motion.div>
            </div>
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 border-t border-white/[0.05] pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <h4 className="text-sm font-mono text-neon-cyan/60 uppercase tracking-wider mb-3">
                      // About the role
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-sm font-mono text-neon-cyan/60 uppercase tracking-wider mb-3">
                      // Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-white/40"
                        >
                          <span className="text-neon-cyan/60 mt-1 flex-shrink-0">&#9656;</span>
                          {req}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags mobile */}
                <div className="flex flex-wrap gap-2 mt-6 lg:hidden">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-white/30 bg-white/[0.03] border border-white/[0.06] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Apply button */}
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn relative px-6 py-3 overflow-hidden rounded-full"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${job.gradient}`}></div>
                    <div className="absolute inset-[1px] bg-dark-900 rounded-full"></div>
                    <div className={`absolute inset-[1px] bg-gradient-to-r ${job.gradient} opacity-10 rounded-full`}></div>
                    <span className="relative z-10 flex items-center gap-2 text-white font-semibold text-sm">
                      Apply Now
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        &rarr;
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Careers() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleJob = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="careers" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"></div>
        <div className="absolute inset-0 dot-matrix opacity-20"></div>
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[200px]"></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/[0.03] backdrop-blur-sm rounded-full text-sm font-mono text-neon-green/80 border border-neon-green/20">
              careers.openPositions()
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Join the <span className="gradient-text">Mission</span>
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            We're building the future and we need exceptional people.
            If you love shipping code and hate bureaucracy, you'll fit right in.
          </p>
        </FadeIn>

        {/* Perks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-20">
          {perks.map((perk, index) => (
            <FadeIn key={perk.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                className="group glass-card glass-card-hover rounded-xl p-4 text-center transition-all duration-300"
              >
                <div className="text-2xl font-black font-mono text-neon-cyan/30 group-hover:text-neon-cyan/60 transition-colors mb-2">
                  {perk.icon}
                </div>
                <h4 className="text-sm font-bold text-white/80 group-hover:text-neon-cyan transition-colors mb-1">
                  {perk.title}
                </h4>
                <p className="text-xs text-white/30">{perk.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/20 to-transparent"></div>
            <span className="text-sm font-mono text-white/30 uppercase tracking-widest">
              Open Positions
            </span>
            <span className="px-2 py-0.5 text-xs font-mono text-neon-green bg-neon-green/10 border border-neon-green/20 rounded-full">
              {openings.length}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-neon-cyan/20 to-transparent"></div>
          </div>
        </FadeIn>

        {/* Job Listings */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {openings.map((job, index) => (
            <FadeIn key={job.id} delay={index * 0.1}>
              <JobCard
                job={job}
                isExpanded={expandedId === job.id}
                onToggle={() => toggleJob(job.id)}
              />
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.3}>
          <div className="max-w-2xl mx-auto text-center mt-16">
            <div className="relative glass-card rounded-2xl p-8 neon-border">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue rounded-2xl opacity-10 blur-[1px]"></div>
              <div className="relative z-10">
                <p className="text-white/60 leading-relaxed mb-2">
                  <span className="font-bold text-neon-green">Don't see your role?</span>{' '}
                  We're always looking for exceptional talent.
                </p>
                <p className="text-white/30 text-sm font-mono">
                  {'>'} send resume to{' '}
                  <a href="mailto:careers@buildio.in" className="text-neon-cyan hover:underline">
                    careers@buildio.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
