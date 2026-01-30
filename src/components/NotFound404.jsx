import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './Container';
import PiggyGame from './PiggyGame';

export default function NotFound404() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* 404 Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-primary-500 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
              Oops! Page not found
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Looks like this page went on vacation. While we look for it, why not play with our pig?
            </p>
          </motion.div>

          {/* Piggy Game */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PiggyGame />
          </motion.div>

          {/* Back Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
