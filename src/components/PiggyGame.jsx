import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PiggyGame() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const movePiggy = () => {
    // Random position within bounds
    const newX = Math.random() * 80 + 10; // 10-90%
    const newY = Math.random() * 60 + 10; // 10-70%
    setPosition({ x: newX, y: newY });
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 400);
  };

  const handlePiggyClick = () => {
    setScore(score + 1);
    movePiggy();
  };

  useEffect(() => {
    // Auto-move piggy every 3 seconds if not clicked
    const interval = setInterval(() => {
      movePiggy();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 bg-neutral-900/30 border border-neutral-800 rounded-2xl overflow-hidden">
      {/* Game Instructions */}
      <div className="absolute top-4 left-4 right-4 text-center">
        <h3 className="text-xl font-bold text-neutral-100 mb-2">
          Catch the Pig! 🐷
        </h3>
        <p className="text-neutral-400 text-sm mb-2">
          Click the pig before it jumps away
        </p>
        <div className="inline-block bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-1">
          <span className="text-primary-400 font-bold">Score: {score}</span>
        </div>
      </div>

      {/* The Piggy */}
      <motion.button
        onClick={handlePiggyClick}
        animate={{
          x: `${position.x}%`,
          y: `${position.y}%`,
          scale: isJumping ? 1.2 : 1,
          rotate: isJumping ? 360 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 100, damping: 15 },
          y: { type: 'spring', stiffness: 100, damping: 15 },
          scale: { duration: 0.2 },
          rotate: { duration: 0.4 },
        }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        className="absolute text-6xl cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:drop-shadow-lg transition-all"
        style={{ willChange: 'transform' }}
      >
        🐷
      </motion.button>

      {/* Encouraging Messages */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-neutral-500 text-sm">
          {score === 0 && "Give it a try! Click the pig!"}
          {score > 0 && score < 5 && "Nice! Keep going!"}
          {score >= 5 && score < 10 && "You're on fire! 🔥"}
          {score >= 10 && score < 20 && "Pig master! 🏆"}
          {score >= 20 && "Legendary! You're unstoppable! ⭐"}
        </p>
      </div>
    </div>
  );
}
