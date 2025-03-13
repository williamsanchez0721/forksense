'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import JoinWaitlistPopup from "@/components/JoinWaitlistPopup"
import { useState } from 'react'
// Importamos los iconos de Lucide React
import { LineChart, ClipboardCheck, Shield } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <section 
      className="min-h-[95svh] bg-zinc-900 relative overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Abstract */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-[100px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-zinc-800/30 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-yellow-500/5 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-18 lg:pt-22 pb-10 md:pb-14 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <motion.div 
            className="text-white space-y-4 sm:space-y-5 w-full order-2 lg:order-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight title-font"
              aria-label="La Plataforma Segura Hecha Para Montacargas"
            >
              <span className="inline sm:hidden">LA PLATAFORMA PARA SEGURIDAD DE MONTACARGAS</span>
              <span className="hidden sm:inline">
                LA PLATAFORMA <br className="hidden sm:block" />
                <span className="text-white">HECHA PARA LA</span> <br className="hidden sm:block" />
                <span className="text-yellow-500">SEGURIDAD DE MONTACARGAS</span>
              </span>
            </motion.h1>
            
            {/* Feature Icons Section */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-start gap-4 sm:gap-6 my-5 sm:my-6 bg-zinc-800/30 rounded-xl p-4 sm:p-5 border border-yellow-500/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-yellow-500/20 p-2.5 rounded-lg">
                  <LineChart className="text-yellow-500 w-6 h-6" strokeWidth={2} />
                </div>
                <span className="font-medium text-base sm:text-lg">Rastrea</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-yellow-500/20 p-2.5 rounded-lg">
                  <ClipboardCheck className="text-yellow-500 w-6 h-6" strokeWidth={2} />
                </div>
                <span className="font-medium text-base sm:text-lg">Gestiona</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-yellow-500/20 p-2.5 rounded-lg">
                  <Shield className="text-yellow-500 w-6 h-6" strokeWidth={2} />
                </div>
                <span className="font-medium text-base sm:text-lg">Cumple</span>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              La solución todo en uno para flotas de montacargas que mejora el seguimiento, garantiza el cumplimiento de normas OSHA y optimiza la comunicación.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-5 sm:mt-6">
              <button
                className="w-full sm:w-auto bg-yellow-500 text-zinc-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium hover:bg-yellow-400 transition-colors transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                onClick={handleOpenPopup}
                aria-label="Join the waitlist"
              >
                ÚNETE A LA LISTA DE ESPERA
              </button>
              <button
                className="w-full sm:w-auto bg-white text-zinc-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium hover:bg-yellow-400 transition-colors transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                aria-label="Más información sobre ForkU"
                onClick={() => setShowModal(true)}
              >
                MÁS INFORMACIÓN
              </button>
            </div>
          </motion.div>
          
          {/* EFECTOS DE ILUMINACIÓN */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <motion.div 
              className="absolute w-full h-full bg-gradient-to-tr from-yellow-500/30 to-zinc-800/30 rounded-full blur-3xl"
              aria-hidden="true"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            
            <motion.div
              className="relative z-10 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[340px] mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-1.5, 1.5, -1.5],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative"
              >
                <Image 
                  src="/mobile2.png" 
                  alt="ForkU mobile application interface showing safety tracking features"
                  width={400}
                  height={400}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
                
                {/* Destellos */}
                <motion.div
                  className="absolute -top-8 -right-8 w-12 sm:w-14 lg:w-20 h-12 sm:h-14 lg:h-20 bg-yellow-500 rounded-full blur-xl opacity-50"
                  aria-hidden="true"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-zinc-800 rounded-full blur-xl opacity-50"
                  aria-hidden="true"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <JoinWaitlistPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
      <ContactForm isOpen={showModal} onClose={closeModal} />
    </section>
  )
}
