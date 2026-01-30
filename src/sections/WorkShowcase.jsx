import Section from '../components/Section';
import Container from '../components/Container';

export default function WorkShowcase() {
  return (
    <Section id="work" className="relative bg-white/50">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-warm-800 border border-warm-200 shadow-lg">
              🚀 Fresh & Ready
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-warm-900 mb-6">
            We're New, But Not Inexperienced
          </h2>

          <p className="text-xl text-warm-600 leading-relaxed">
            This is a fresh initiative, but we've each spent years building products at scale.
            Now we're doing it our way - fast, focused, and without the overhead.
          </p>
        </div>

        {/* What we bring */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-primary-200/30 border border-primary-100 hover:border-primary-300 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-warm-900 mb-3">
              Years of Experience
            </h3>
            <p className="text-warm-600 leading-relaxed">
              Combined 15+ years building products for startups and enterprises
            </p>
          </div>

          <div className="relative group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-primary-200/30 border border-primary-100 hover:border-primary-300 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-warm-900 mb-3">
              Modern Stack
            </h3>
            <p className="text-warm-600 leading-relaxed">
              React, Node, Python, Cloud - we use what works, not what's trendy
            </p>
          </div>

          <div className="relative group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-primary-200/30 border border-primary-100 hover:border-primary-300 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-warm-900 mb-3">
              No BS Approach
            </h3>
            <p className="text-warm-600 leading-relaxed">
              We ship MVPs in weeks, not months. Iterate fast, learn faster
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-white/90 to-cyan-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary-200/50 border border-primary-200/50 max-w-2xl">
            <p className="text-lg md:text-xl text-warm-800 leading-relaxed mb-4">
              <span className="font-bold text-primary-600">Your project could be our first showcase.</span>
              <br />
              Let's build something great together.
            </p>
            <p className="text-sm text-warm-600">
              (And hey, being early means you get our full attention and energy 🔥)
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
