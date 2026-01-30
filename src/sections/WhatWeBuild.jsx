import Section from '../components/Section';
import Container from '../components/Container';

const skills = [
  { icon: '⚡', label: 'Web Apps', color: 'from-cyan-400 to-blue-500' },
  { icon: '📱', label: 'Mobile', color: 'from-teal-400 to-cyan-500' },
  { icon: '🔧', label: 'APIs', color: 'from-sky-400 to-cyan-500' },
  { icon: '☁️', label: 'Cloud', color: 'from-cyan-300 to-sky-400' },
  { icon: '🤖', label: 'AI Agents', color: 'from-cyan-500 to-blue-600' },
  { icon: '⛓️', label: 'Blockchain', color: 'from-teal-500 to-cyan-600' },
];

export default function WhatWeBuild() {
  return (
    <Section id="what-we-build" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-mono text-primary-600 border border-primary-200 shadow-lg">
              <span className="text-accent-500">const</span> whatWeDo = () =&gt; {'{'}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-warm-900 mb-6">
            We Code.{' '}
            <span className="gradient-text">
              We Ship.
            </span>{' '}
            <br className="hidden md:block" />
            We Make It Work.
          </h2>

          <p className="text-xl text-warm-600 leading-relaxed">
            From idea to deployment, we handle the full stack. Modern tech, clean code, and products that people actually want to use.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <div key={skill.label} className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-primary-200/30 border border-primary-100 hover:border-primary-300 transition-all overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-5xl mb-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg text-warm-900">{skill.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What we actually do */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/90 to-cyan-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary-200/50 border border-primary-200/50">
            <div className="space-y-8">
              {/* Code-like presentation */}
              <div className="font-mono text-sm md:text-base space-y-4 text-warm-800">
                <div className="flex flex-wrap gap-2 items-start">
                  <span className="text-primary-600 font-bold">function</span>
                  <span className="text-accent-600 font-bold">buildYourProduct</span>
                  <span className="text-warm-700">() {'{'}</span>
                </div>

                <div className="pl-6 text-warm-700">
                  <span className="text-accent-600">return</span> {'{'}
                </div>

                <div className="pl-12 space-y-3">
                  {[
                    { label: 'webApps', desc: 'React, Next.js, full-stack magic' },
                    { label: 'mobileApps', desc: 'React Native, native feel, cross-platform' },
                    { label: 'backends', desc: 'Node, Python, scalable APIs' },
                    { label: 'deployment', desc: 'AWS, Vercel, Docker - we ship it live' },
                    { label: 'aiAgents', desc: 'LangChain, LangGraph, intelligent automation' },
                    { label: 'blockchain', desc: 'Smart contracts, Web3, Solidity' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-primary-600 font-mono flex-shrink-0">{item.label}:</span>
                      <span className="text-warm-700 font-sans">{item.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="pl-6 text-warm-700">
                  {'}'}
                </div>

                <div className="text-warm-700">
                  {'}'}
                </div>
              </div>

              {/* Bottom note */}
              <div className="pt-6 border-t border-primary-200">
                <p className="text-warm-700 text-center font-medium">
                  <span className="text-primary-600 font-bold">💡 Pro tip:</span> We're hands-on from day one. No hand-offs, no bureaucracy. Just devs building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
