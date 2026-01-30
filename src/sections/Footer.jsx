import Container from '../components/Container';

export default function Footer({ onContactClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-primary-200 py-16">
      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          {/* CTA */}
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-warm-900 mb-4">
              Let's Build Together 🚀
            </h3>
            <p className="text-warm-600 mb-8">
              Got an idea? Need a team? Let's chat. No pressure, just real talk about what you're building.
            </p>
            <button
              onClick={onContactClick}
              className="group px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-2xl rounded-full transition-all duration-300 shadow-xl shadow-primary-300/50 hover:scale-105"
            >
              Start a Conversation ✨
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Bottom */}
          <div className="w-full pt-8 border-t border-primary-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-600">
            <p>
              © {currentYear} DevCrew. Fresh, new, and ready to ship ⚡
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:hello@devcrew.com"
                className="hover:text-primary-600 transition-colors font-medium"
              >
                hello@devcrew.com
              </a>
              <button
                onClick={onContactClick}
                className="hover:text-primary-600 transition-colors font-medium"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
