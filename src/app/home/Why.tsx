'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Why() {
  return (
    <>
      {/* Primera Sección: Quiénes Somos */}
      <section className="relative bg-zinc-900 overflow-hidden">
        {/* Background Abstract */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-yellow-500/5 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Column - Content */}
          <div className="flex items-center py-16 sm:py-20 md:py-24 lg:py-0 order-2 lg:order-1">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-2xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white title-font mb-2 sm:mb-4">
                    QUIÉNES SOMOS
                  </h2>
                  <div className="h-1 w-20 bg-yellow-500 mb-6 sm:mb-8"></div>
                </div>
                
                <div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Somos un equipo dedicado y apasionado por mejorar la gestión de flotas de montacargas para pequeñas empresas. Entendemos los desafíos de cumplimiento, seguridad y eficiencia, por lo que construimos una plataforma inteligente y fácil de usar que ayuda a las empresas a operar sin problemas, mantenerse en cumplimiento y mejorar los estándares de seguridad.
                  </p>
                </div>
                
                {/* Tarjetas de Misión y Visión */}
                <div className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Tarjeta de Misión */}
                    <div className="bg-zinc-800/40 rounded-xl border border-yellow-500/10 overflow-hidden">
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">Nuestra Misión</h3>
                            <div className="h-1 w-12 bg-yellow-500/50 mt-1"></div>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                          Empoderar a pequeñas y medianas empresas proporcionando una solución asequible, eficiente y conforme para la gestión de montacargas, conductores y operaciones.
                        </p>
                      </div>
                    </div>
                    
                    {/* Tarjeta de Visión */}
                    <div className="bg-zinc-800/40 rounded-xl border border-yellow-500/10 overflow-hidden">
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">Nuestra Visión</h3>
                            <div className="h-1 w-12 bg-yellow-500/50 mt-1"></div>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                          Ser la plataforma líder en gestión de flotas de montacargas en México, ayudando a las empresas a reducir riesgos, mejorar la productividad y garantizar el cumplimiento normativo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Image (Full Height) */}
          <div className="relative h-[50vh] lg:h-auto lg:min-h-screen order-1 lg:order-2">
            <Image
              src="/family.jpg"
              alt="Equipo de ForkU"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/70 via-zinc-900/40 to-transparent" />
            
            {/* Yellow Accent */}
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-yellow-500 rounded-full blur-xl opacity-30" />
            <div className="absolute top-4 left-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-30" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full" />
      </section>
    </>
  )
}