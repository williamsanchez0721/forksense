'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import JoinWaitlistPopup from '@/components/JoinWaitlistPopup'

export default function Safety() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleOpenPopup = () => {
        setIsPopupOpen(true)
    }
    return (
        <section 
        id="safety"
        className="relative min-h-screen bg-zinc-900 py-0 overflow-hidden"
        style={{ 
            backgroundImage: "linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 0.3)), url('/driverforklift.jpg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }}
        >
            {/* Background Abstract */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-[100px]" />
                <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/80 via-zinc-900/50 to-transparent" />
                <div className="absolute inset-0 bg-yellow-500/5 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 md:px-16 pb-32 relative z-10 min-h-screen flex items-end">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Title with enhanced design - reduced size */}
                        <div className="mb-8 title-font">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl sm:text-5xl font-bold text-white"
                            >
                                TÚ <span className="relative inline-block">
                                    <span className="relative z-10">CONDUCES</span>
                                    <motion.span 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 0.7, delay: 0.3 }}
                                        className="absolute bottom-1 left-0 h-2 bg-yellow-500/30 z-0"
                                    ></motion.span>
                                </span>
                            </motion.h2>
                            <motion.h2 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-4xl sm:text-5xl font-bold text-yellow-500 mt-1"
                            >
                                SEGURIDAD
                            </motion.h2>
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: 100 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="h-1 bg-yellow-500 mt-4"
                            ></motion.div>
                        </div>

                        {/* Why Choose Us Section - more compact */}
                        <div>
                            <motion.h3 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-xl font-bold text-white mb-5"
                            >
                                ¿Por qué elegirnos?
                            </motion.h3>
                            <ul className="space-y-3">
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="flex items-start"
                                >
                                    <span className="text-yellow-500 mr-2 text-lg">✓</span>
                                    <div>
                                        <span className="font-semibold text-white text-sm sm:text-base">Precios Accesibles</span>
                                        <span className="text-zinc-300 text-sm sm:text-base"> – Planes de suscripción flexibles que se adaptan a tu presupuesto.</span>
                                    </div>
                                </motion.li>
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="flex items-start"
                                >
                                    <span className="text-yellow-500 mr-2 text-lg">✓</span>
                                    <div>
                                        <span className="font-semibold text-white text-sm sm:text-base">Cumplimiento Simplificado</span>
                                        <span className="text-zinc-300 text-sm sm:text-base"> – Asegura el cumplimiento con OSHA sin complicaciones.</span>
                                    </div>
                                </motion.li>
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className="flex items-start"
                                >
                                    <span className="text-yellow-500 mr-2 text-lg">✓</span>
                                    <div>
                                        <span className="font-semibold text-white text-sm sm:text-base">Interfaz Amigable</span>
                                        <span className="text-zinc-300 text-sm sm:text-base"> – No se necesita experiencia técnica, solo herramientas simples y efectivas.</span>
                                    </div>
                                </motion.li>
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                    className="flex items-start"
                                >
                                    <span className="text-yellow-500 mr-2 text-lg">✓</span>
                                    <div>
                                        <span className="font-semibold text-white text-sm sm:text-base">Seguridad de Conductores y Flota</span>
                                        <span className="text-zinc-300 text-sm sm:text-base"> – Mantén un seguimiento del mantenimiento de montacargas, rendimiento de conductores y objetivos de seguridad.</span>
                                    </div>
                                </motion.li>
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                    className="flex items-start"
                                >
                                    <span className="text-yellow-500 mr-2 text-lg">✓</span>
                                    <div>
                                        <span className="font-semibold text-white text-sm sm:text-base">Comunicación Eficiente</span>
                                        <span className="text-zinc-300 text-sm sm:text-base"> – Conecta administradores y conductores con nuestro sistema de mensajería integrado.</span>
                                    </div>
                                </motion.li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-yellow-500 text-zinc-900 font-medium hover:bg-yellow-400 transition-colors"
                                onClick={handleOpenPopup}
                            >
                                ÚNETE A LA LISTA DE ESPERA
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full text-white font-medium border border-yellow-500/30 hover:bg-yellow-500/10 transition-colors"
                            >
                                COMENZAR (Próximamente)
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-50 animate-pulse" />

            {isPopupOpen && <JoinWaitlistPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />}
        </section>
    )
}
