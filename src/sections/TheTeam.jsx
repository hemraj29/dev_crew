import { motion } from 'framer-motion';
import Section from '../components/Section';
import Container from '../components/Container';
import FadeIn from '../components/FadeIn';

const team = [
  {
    name: 'Alex Chen',
    role: 'Full-Stack Engineer',
    what: 'Builds the systems that power your product. 8 years deep in React, Node, cloud architecture, LangChain, and AI agents.',
  },
  {
    name: 'Sarah Martinez',
    role: 'Product Engineer',
    what: 'Turns ideas into interfaces people actually want to use. Obsessed with details, user experience, and AI/ML integration.',
  },
  {
    name: 'Jordan Kim',
    role: 'Backend Architect',
    what: 'Makes sure everything scales. From databases to APIs, blockchain smart contracts, and infrastructure that just works.',
  },
];

export default function TheTeam() {
  return (
    <Section id="team" className="relative">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-900 mb-6">
            The Crew
          </h2>
          <p className="text-lg md:text-xl text-warm-600 leading-relaxed">
            Small team, big skills. We're developers who care about shipping quality code and building things that work.
          </p>
        </FadeIn>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-primary-200/30 border border-primary-100 hover:border-primary-300 hover:shadow-2xl"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-warm-900 mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-primary-600 font-semibold mb-3 text-sm">
                  {member.role}
                </p>

                {/* What they do */}
                <p className="text-warm-600 text-sm leading-relaxed">
                  {member.what}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Message */}
        <FadeIn delay={0.4}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/90 to-cyan-50/90 backdrop-blur-sm border border-primary-200 rounded-3xl p-8 shadow-xl shadow-primary-200/50">
              <p className="text-warm-800 leading-relaxed mb-4">
                <span className="font-bold text-primary-600">We're hands-on.</span> You'll work directly with us - no account managers, no middlemen. Just devs who care about your project.
              </p>
              <p className="text-warm-600 text-sm">
                That's how we like to work. Simple, direct, effective.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
