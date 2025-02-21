'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import JoinWaitlistPopup from "../components/JoinWaitlistPopup"

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[--secondary-color] to-[--primary-color] relative overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wide"
              style={{ fontFamily: 'Inter' }}
            >
              THE PLATFORM<br />
              BUILT FOR<br />
              FORKLIFT SAFETY
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
              <JoinWaitlistPopup />
              <button className="bg-white text-[--foreground] px-8 py-3 rounded-full font-medium hover:bg-[--secondary-color] hover:text-white transition-colors">
                LEARN MORE
              </button>
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
                  src="/preview2.png" 
                  alt="ForkU Device"
                  width={400}
                  height={400}
                  className="w-full max-w-80 mx-auto drop-shadow-2xl"
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
        
        <motion.div 
          className="flex items-center gap-6 mt-20 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Image src="/osha-logo.svg" alt="OSHA" width={100} height={32} className="h-8 w-auto" />
          <Image src="/safety-logo.svg" alt="Safety" width={100} height={32} className="h-8 w-auto" />
          <Image src="/compliance-logo.svg" alt="Compliance" width={100} height={32} className="h-8 w-auto" />
        </motion.div>
      </div>
    </div>
  )
}
