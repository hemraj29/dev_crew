import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalContactModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef(null);

  const prompts = [
    { field: 'name', question: '> identify.user()', placeholder: 'Your name', hint: 'What should we call you?' },
    { field: 'email', question: '> connect.channel()', placeholder: 'your@email.com', hint: 'Best email to reach you?' },
    { field: 'project', question: '> describe.mission()', placeholder: 'Describe what you want to build', multiline: true, hint: 'Tell us about your project...' },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, step]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(0);
        setFormData({ name: '', email: '', project: '' });
        setSubmitted(false);
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPrompt = prompts[step];
    const value = formData[currentPrompt.field];

    if (!value.trim()) return;

    if (step < prompts.length - 1) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 2500);
      }, 1500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl"
        onClick={onClose}
        onKeyDown={handleKeyDown}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-2xl opacity-30 blur-[2px]"></div>

          <div className="relative bg-dark-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-dark-800 border-b border-white/[0.05] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60 hover:bg-red-500 transition-colors cursor-pointer" onClick={onClose}></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-neon-green/60"></div>
                </div>
                <span className="text-white/30 text-xs font-mono">
                  buildio.in2@gmail.com ~ terminal
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-white/30 hover:text-white/60 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-8 font-mono text-sm">
              {!submitted ? (
                <>
                  {/* Welcome */}
                  <div className="mb-6 text-white/30">
                    <p className="mb-1">$ init contact_protocol <span className="text-neon-green">--secure</span></p>
                    <p className="text-neon-cyan/60">
                      &#9656; Connection established. Let's get to know your project.
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-[10px] text-white/20 font-mono uppercase tracking-widest">Progress</span>
                    <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((step + (formData[prompts[step]?.field] ? 0.5 : 0)) / prompts.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="text-[10px] text-white/20 font-mono">{step + 1}/{prompts.length}</span>
                  </div>

                  {/* Previous Answers */}
                  {prompts.slice(0, step).map((prompt, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-neon-cyan/60 mb-1">{prompt.question}</p>
                      <p className="text-white/60 ml-4">
                        <span className="text-neon-green/60">&#10003;</span> {formData[prompt.field]}
                      </p>
                    </div>
                  ))}

                  {/* Current Question */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <p className="text-neon-cyan/80 mb-1">{prompts[step].question}</p>
                      <p className="text-white/20 text-xs mb-3">{prompts[step].hint}</p>
                      {prompts[step].multiline ? (
                        <textarea
                          ref={inputRef}
                          value={formData[prompts[step].field]}
                          onChange={(e) =>
                            setFormData({ ...formData, [prompts[step].field]: e.target.value })
                          }
                          placeholder={prompts[step].placeholder}
                          rows={4}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/30 focus:ring-1 focus:ring-neon-cyan/20 font-sans text-base resize-none transition-all"
                          disabled={isSubmitting}
                        />
                      ) : (
                        <input
                          ref={inputRef}
                          type={prompts[step].field === 'email' ? 'email' : 'text'}
                          value={formData[prompts[step].field]}
                          onChange={(e) =>
                            setFormData({ ...formData, [prompts[step].field]: e.target.value })
                          }
                          placeholder={prompts[step].placeholder}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/30 focus:ring-1 focus:ring-neon-cyan/20 font-sans text-base transition-all"
                          disabled={isSubmitting}
                        />
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-white/20 text-xs">
                        Press Enter to {step < prompts.length - 1 ? 'continue' : 'transmit'}
                        <span className="text-neon-cyan/40 ml-1">
                          {step < prompts.length - 1 ? '&#9656;' : '&#9654;&#9654;'}
                        </span>
                      </p>
                      {step > 0 && (
                        <button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="text-white/30 hover:text-white/60 text-xs transition-colors font-mono"
                          disabled={isSubmitting}
                        >
                          &#9664; back
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Loading State */}
                  {isSubmitting && (
                    <div className="mt-6 flex items-center gap-3 text-neon-cyan/60">
                      <div className="flex gap-1">
                        {[0, 0.2, 0.4].map((delay) => (
                          <motion.span
                            key={delay}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay }}
                          >
                            .
                          </motion.span>
                        ))}
                      </div>
                      <span>Transmitting secure message</span>
                    </div>
                  )}
                </>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 bg-neon-green/10 border border-neon-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-8 h-8 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <p className="text-neon-green font-mono text-lg mb-2">$ transmission.successful()</p>
                  <p className="text-white/40">
                    We'll respond within 24 hours. Stand by.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
