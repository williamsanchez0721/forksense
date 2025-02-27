'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import JoinWaitlistPopup from '../components/JoinWaitlistPopup'
export default function Safety() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleOpenPopup = () => {
        setIsPopupOpen(true)
    }
    return (
        <section 
        id="safety"
        className="relative min-h-screen bg-zinc-900 py-0 overflow-hidden"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/montacarga.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Background Abstract */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-[#FF1493]/20 to-transparent rounded-full blur-[120px]"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
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

            <div className="container mx-auto px-16 pb-32 relative z-10 min-h-screen flex items-end">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-7xl font-bold text-white title-font leading-none">
                            U DRIVE SAFETY
                        </h2>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-[--hi-vis-pink] text-white font-medium transition-colors"
                                onClick={handleOpenPopup}
                            >
                                JOIN THE WAITLIST
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full text-white font-medium border border-white/30 hover:bg-white/10 transition-colors"
                            >
                                GET STARTED (Coming Soon)
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
            {isPopupOpen && <JoinWaitlistPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />}
        </section>
    )
}
