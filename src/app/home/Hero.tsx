'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import JoinWaitlistPopup from "../components/JoinWaitlistPopup"
import { useState } from 'react'
export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[--secondary-color] to-[--primary-color] relative overflow-hidden">
      <div className="mx-auto px-6 lg:px-24 xl:px-32 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white space-y-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-7xl font-extrabold leading-none title-font"
            >
              THE SAFETY <br />
              PLATFORM BUILT FOR <br />
              FORKLIFT 
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-100 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ensuring OSHA Compliance Made Simple
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <JoinWaitlistPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[--secondary-color] text-white px-8 py-3 rounded-full font-medium hover:bg-[--hi-vis-yellow] hover:text-[--secondary-color] transition-colors"
                onClick={handleOpenPopup}
              >
                JOIN THE WAITLIST
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[--foreground] px-8 py-3 rounded-full font-medium hover:bg-[--hi-vis-yellow] hover:text-[--secondary-color] transition-colors"
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              className="absolute w-full h-full bg-gradient-to-tr from-[#FFFF00]/20 to-[#39FF14]/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative"
              >
                <Image 
                  src="/mobile2.png" 
                  alt="ForkU Device"
                  width={400}
                  height={400}
                  className="w-full max-w-60 lg:max-w-80 mx-auto drop-shadow-2xl"
                />
                
                {/* Destellos */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-full blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-5 -left-5 w-16 h-16 bg-green-400 rounded-full blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    delay: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
