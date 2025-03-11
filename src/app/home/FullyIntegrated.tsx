'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function FullyIntegrated() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative bg-zinc-900 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden" 
      id="fully-integrated"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/montacarga.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Text */}
      <div className="absolute flex items-center pl-4 sm:pl-10 md:pl-16 lg:pl-20 xl:pl-24 pb-20 inset-0 opacity-10 select-none pointer-events-none">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[10vw] xl:text-[12vw] font-bold text-white leading-none uppercase">
          Seguridad
          <br />
          Montacargas
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 max-w-screen-2xl">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {/* Phone Image - First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex justify-center w-full"
          >
            <div className="relative z-10 flex justify-center w-full">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Image
                  src="/phoneforku.svg"
                  alt="Vista previa de la aplicación ForkU"
                  width={600}
                  height={800}
                  className="rounded-3xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[520px] drop-shadow-2xl"
                />
              </motion.div>
            </div>

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full blur-[100px] opacity-20" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-500 rounded-full blur-[100px] opacity-20" />
          </motion.div>

          {/* Text Content - Second */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white flex flex-wrap items-center justify-between"
          >
            <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-2xl text-left'>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight title-font">
                Seguridad de Montacargas <span className="text-yellow-500">Simplificada</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-300 leading-relaxed">
                La aplicación y recursos de ForkU están desarrollados pensando en Ti. Nuestra plataforma integral simplifica las regulaciones OSHA, ofrece materiales completos de capacitación, realiza seguimiento de certificaciones y mantiene actualizados los protocolos de seguridad para tu flota.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideo(true)}
                className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full bg-yellow-500 text-zinc-900 font-medium transition-colors hover:bg-yellow-400 text-xs sm:text-sm md:text-base"
              >
                EXPLORAR LA APLICACIÓN
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-white font-medium border border-yellow-500/30 hover:bg-yellow-500/10 transition-colors text-xs sm:text-sm md:text-base"
              >
                VER CARACTERÍSTICAS
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-400 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-yellow-500 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-50" />

      {/* Video Popup */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div 
            className="bg-zinc-900 rounded-2xl shadow-2xl p-1 w-full max-w-4xl mx-auto relative border border-yellow-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              {/* Aquí puedes insertar un video o un iframe de YouTube */}
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                <p className="text-white text-center p-4">Video de demostración de la aplicación</p>
              </div>
            </div>
            <button 
              className="absolute -top-3 -right-3 bg-yellow-500 text-zinc-900 w-8 h-8 rounded-full flex items-center justify-center"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
} 