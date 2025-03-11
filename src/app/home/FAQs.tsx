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
    question: "¿Cómo funciona la plataforma ForkU?",
    answer: "Nuestra plataforma permite a los administradores de montacargas realizar seguimiento de su flota, asegurar el cumplimiento normativo y comunicarse con los conductores, todo en un solo lugar.",
    category: "Preguntas Generales"
  },
  {
    question: "¿Para quién está diseñada esta plataforma?",
    answer: "Estamos diseñados para pequeñas y medianas empresas que poseen 7 o menos montacargas.",
    category: "Preguntas Generales"
  },
  {
    question: "¿Qué es ForkU?",
    answer: "La plataforma todo en uno para propietarios de flotas de montacargas y conductores. Mejora el seguimiento de inventario, asegura el cumplimiento de OSHA, certifica la capacitación y mejora la comunicación del equipo con una solución simple pero potente y asequible.",
    category: "Preguntas Generales"
  },
  {
    question: "¿Por qué es importante la capacitación en seguridad de montacargas?",
    answer: "La capacitación en seguridad de montacargas es crucial para prevenir accidentes laborales, garantizar el cumplimiento de OSHA y proteger tanto a los operadores como al personal del lugar de trabajo. Una formación adecuada reduce accidentes, aumenta la eficiencia y crea un entorno de trabajo más seguro para todos.",
    category: "Preguntas Generales"
  },
  {
    question: "¿Cómo ayuda ForkU con el cumplimiento de OSHA?",
    answer: "ForkU proporciona materiales de capacitación completos alineados con los requisitos de OSHA, realiza seguimiento del progreso de certificación y mantiene registros digitales de la capacitación completada. Nuestra plataforma garantiza que cumplas con todas las regulaciones necesarias y mantiene tu documentación actualizada.",
    category: "Preguntas Generales"
  },
  {
    question: "¿Cómo accedo a los materiales de capacitación?",
    answer: "Los materiales de capacitación están disponibles 24/7 a través de nuestra plataforma en línea segura. Una vez registrado, puedes acceder a todo el contenido desde cualquier dispositivo, incluyendo módulos interactivos, tutoriales en video y pruebas de práctica.",
    category: "Preguntas Generales"
  },
  
  // Precios y Planes
  {
    question: "¿Cuánto cuesta?",
    answer: "Nuestros precios comienzan en $5 por conductor/mes y $10 por administrador/mes.",
    category: "Precios y Planes"
  },
  {
    question: "¿Hay una prueba gratuita?",
    answer: "¡Sí! Regístrate para una prueba gratuita de 14 días, sin necesidad de tarjeta de crédito.",
    category: "Precios y Planes"
  },
  
  // Soporte Técnico
  {
    question: "¿Mis datos están seguros?",
    answer: "Sí, utilizamos almacenamiento en la nube encriptado para mantener tus datos seguros.",
    category: "Soporte Técnico"
  },
  {
    question: "¿Ofrecen soporte al cliente?",
    answer: "¡Absolutamente! Nuestro equipo de soporte está disponible a través de chat y correo electrónico 24/7.",
    category: "Soporte Técnico"
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("Preguntas Generales")
  
  const categories = [...new Set(faqItems.map(item => item.category))]
  const filteredItems = faqItems.filter(item => item.category === activeCategory)

  return (
    <section className="relative bg-zinc-900 py-16 sm:py-20 md:py-24 overflow-hidden">
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