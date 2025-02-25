'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "WHAT IS FORKU?",
    answer: "ForkU is a comprehensive platform designed to streamline forklift safety training and OSHA compliance. Our platform combines modern technology with industry-standard safety protocols to ensure operators are well-trained and certified."
  },
  {
    question: "WHY IS FORKLIFT SAFETY TRAINING IMPORTANT?",
    answer: "Forklift safety training is crucial for preventing workplace accidents, ensuring OSHA compliance, and protecting both operators and workplace personnel. Proper training reduces accidents, increases efficiency, and creates a safer work environment for everyone."
  },
  {
    question: "HOW DOES FORKU HELP WITH OSHA COMPLIANCE?",
    answer: "ForkU provides comprehensive training materials aligned with OSHA requirements, tracks certification progress, and maintains digital records of completed training. Our platform ensures you stay compliant with all necessary regulations and keeps your documentation up-to-date."
  },
  {
    question: "WHAT HAPPENS IF I FAIL A CERTIFICATION EXAM?",
    answer: "If you don't pass a certification exam, you can review the material and retake the test. Our platform provides detailed feedback on areas that need improvement and additional study resources to help you succeed in your next attempt."
  },
  {
    question: "HOW DO I ACCESS TRAINING MATERIALS?",
    answer: "Training materials are available 24/7 through our secure online platform. Once registered, you can access all content from any device, including interactive modules, video tutorials, and practice tests."
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-zinc-900 py-32 overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-[#FF1493]/10 to-transparent rounded-full blur-[100px]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-[#39FF14]/10 to-transparent rounded-full blur-[100px]"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-[#FFFF00]/5 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col px-6">
        <div className='flex flex-col items-center justify-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-16 text-white title-font"
          >
            FAQ
          </motion.h2>
          <div className="space-y-4 w-full max-w-2xl">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left py-6 border-b border-white/20 flex justify-between items-center group"
                >
                  <span className="text-lg font-mono tracking-tight text-white">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-white font-mono transform group-hover:text-[#FF1493]"
                  >
                    +
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="py-6 text-gray-300 text-lg">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#FF1493] rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-[#39FF14] rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-[#FFFF00] rounded-full opacity-50" />
    </section>
  )
}