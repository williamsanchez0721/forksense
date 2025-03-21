'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqItems: FAQItem[] = [
  // Preguntas Generales
  {
    question: "¿Qué es ForkU?",
    answer: "Es una plataforma móvil diseñada para acompañar al operador de montacargas en su día a día, contiene procesos de autenticación de operador y montacargas, monitoreo de operación, registro de incidentes y mucho más.",
    category: "Preguntas Generales"
  },
  {
    question: "¿Por qué es nuestra prioridad la seguridad?",
    answer: "Estamos convencidos de que cuidar la seguridad de nuestros operadores es cuidar al negocio mismo y a la comunidad, lo cuál nos lleva a la eficiencia operativa y el crecimiento de la industria.",
    category: "Preguntas Generales"
  },
  {
    question: "¿Cómo nos ayuda ForkU al cumplimiento normativo?",
    answer: "Nuestra aplicación mantiene el registro de las operaciones, los chequeos previos, registro de incidentes, certificaciones de nuestros operadores y más. Todo en tiempo real y accesible desde cualquier lugar.",
    category: "Preguntas Generales"
  },
  {
    question: "¿Cómo puedo tener ForkU en mis manos?",
    answer: "Pensando en ti estamos en un proceso de escucha activa al mercado, puedes inscribirte en la lista de espera y ser parte de nuestra comunidad. Adicional podrás ser uno de los primeros en descubrir como ForkU mejorará tu día a día desde el primer instante.",
    category: "Preguntas Generales"
  }
  
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("Preguntas Generales")
  
  const categories = [...new Set(faqItems.map(item => item.category))]
  const filteredItems = faqItems.filter(item => item.category === activeCategory)

  return (
    <section id='faqs' className="relative bg-zinc-900 py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-yellow-500/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            PREGUNTAS FRECUENTES
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
        </motion.div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-yellow-500 text-zinc-900' 
                  : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 bg-zinc-800/30 rounded-xl border border-yellow-500/10 flex justify-between items-center hover:border-yellow-500/30 transition-all"
              >
                <span className="text-base sm:text-lg font-medium text-white pr-4">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-yellow-500 flex-shrink-0"
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
                    className="overflow-hidden bg-zinc-800/20 rounded-b-xl border-x border-b border-yellow-500/10"
                  >
                    <p className="p-5 text-gray-300">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-50" />
    </section>
  )
}