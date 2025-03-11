'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Referral() {
  return (
    <section className="relative bg-zinc-900 py-16 sm:py-20 overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-yellow-500/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            PROGRAMA DE REFERIDOS
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Gana recompensas por referir clientes
          </p>
        </motion.div>

        {/* Referral Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-zinc-800/30 rounded-2xl border border-yellow-500/10 overflow-hidden hover:border-yellow-500/30 transition-all hover:shadow-lg hover:shadow-yellow-500/5"
        >
          <div className="p-8 sm:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¡Invita a tus contactos de la industria y obtén recompensas!
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl mt-0.5">✓</span>
                    <div>
                      <span className="text-white font-medium">Por cada negocio que refieras:</span>
                      <p className="text-gray-300">Gana $XX de crédito por cliente referido.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl mt-0.5">✓</span>
                    <div>
                      <span className="text-white font-medium">Para referencias grandes (5+ negocios):</span>
                      <p className="text-gray-300">Obtén un descuento exclusivo en tu suscripción.</p>
                    </div>
                  </li>
                </ul>
                <Link 
                  href="#" 
                  className="inline-block bg-yellow-500 text-zinc-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors"
                >
                  Comienza a Referir Hoy
                </Link>
              </div>
              
              {/* Right Illustration */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative aspect-square bg-yellow-500/10 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-md"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Banner */}
          <div className="bg-yellow-500/10 p-4 border-t border-yellow-500/10 text-center">
            <p className="text-white">
              <span className="font-medium">¿Preguntas sobre el programa?</span> Contáctanos en <a href="mailto:referrals@forku.com" className="text-yellow-500 hover:text-yellow-400 transition-colors">referrals@forku.com</a>
            </p>
          </div>
        </motion.div>
        
        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Cómo Funciona</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/20 rounded-xl p-5 text-center border border-yellow-500/10">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-500 font-bold text-xl">1</span>
              </div>
              <h4 className="text-white font-medium mb-2">Invita</h4>
              <p className="text-gray-300 text-sm">Comparte tu código único con tus contactos de la industria</p>
            </div>
            <div className="bg-zinc-800/20 rounded-xl p-5 text-center border border-yellow-500/10">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-500 font-bold text-xl">2</span>
              </div>
              <h4 className="text-white font-medium mb-2">Ellos se unen</h4>
              <p className="text-gray-300 text-sm">Cuando tus referidos se registran usando tu código</p>
            </div>
            <div className="bg-zinc-800/20 rounded-xl p-5 text-center border border-yellow-500/10">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-500 font-bold text-xl">3</span>
              </div>
              <h4 className="text-white font-medium mb-2">Tú ganas</h4>
              <p className="text-gray-300 text-sm">Recibe créditos y descuentos automáticamente en tu cuenta</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-50" />
    </section>
  )
}
