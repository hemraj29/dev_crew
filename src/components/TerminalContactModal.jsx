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
    { field: 'name', question: '> What should we call you?', placeholder: 'Your name' },
    { field: 'email', question: '> Best email to reach you?', placeholder: 'your@email.com' },
    { field: 'project', question: '> Tell us about your project...', placeholder: 'Describe what you want to build', multiline: true },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, step]);

  // Reset state when modal closes
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
      // Final submission
      setIsSubmitting(true);

      // Simulate sending (replace with actual API call)
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);

        // Close modal after success
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={handleKeyDown}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl bg-neutral-950 border-2 border-primary-500/30 rounded-2xl shadow-2xl shadow-primary-500/20 overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-neutral-900 border-b border-primary-500/20 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-neutral-400 text-sm font-mono">terminal@contact</span>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
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
                {/* Welcome Message */}
                <div className="mb-6 text-neutral-400">
                  <p className="mb-1">$ initialize contact_form</p>
                  <p className="text-primary-400">
                    → System ready. Let's get to know your project.
                  </p>
                </div>

                {/* Previous Answers */}
                {prompts.slice(0, step).map((prompt, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-primary-400 mb-1">{prompt.question}</p>
                    <p className="text-neutral-300 ml-4">
                      {formData[prompt.field]}
                    </p>
                  </div>
                ))}

                {/* Current Question */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <p className="text-primary-400 mb-3">{prompts[step].question}</p>
                    {prompts[step].multiline ? (
                      <textarea
                        ref={inputRef}
                        value={formData[prompts[step].field]}
                        onChange={(e) =>
                          setFormData({ ...formData, [prompts[step].field]: e.target.value })
                        }
                        placeholder={prompts[step].placeholder}
                        rows={4}
                        className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 font-sans text-base resize-none"
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
                        className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 font-sans text-base"
                        disabled={isSubmitting}
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-neutral-600 text-xs">
                      Press Enter to continue {step < prompts.length - 1 ? '→' : '(submit)'}
                    </p>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors"
                        disabled={isSubmitting}
                      >
                        ← Back
                      </button>
                    )}
                  </div>
                </form>

                {/* Loading State */}
                {isSubmitting && (
                  <div className="mt-6 flex items-center gap-2 text-primary-400">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      >
                        .
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      >
                        .
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      >
                        .
                      </motion.span>
                    </div>
                    <span>Sending message</span>
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
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-500 text-lg mb-2">$ Message sent successfully!</p>
                <p className="text-neutral-400">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
