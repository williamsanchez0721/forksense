'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Why() {
  return (
    <section className="relative bg-zinc-900 py-0 overflow-hidden min-h-screen">
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
          className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-[#FF1493]/10 via-[#39FF14]/5 to-transparent rounded-full blur-[100px]"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-[#FFFF00]/5 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <Image
                src="/security2.png"
                alt="Forklift Operator"
                width={800}
                height={600}
                className="shadow-xl object-cover h-screen"
                priority
              />
              {/* Conector visual */}
              <div className="absolute -bottom-32 left-0 w-full h-32 bg-gradient-to-b from-zinc-900 to-[#1C1C1E]" />
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 px-20 pt-20"
          >
            <h2 className="text-6xl font-bold text-white title-font">
              WHY FORKU?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              At forkU, we prioritize U—the operator. We believe in creating a safer workplace. Our platform is dedicated to promoting best practices in forklift operation, reducing workplace accidents, and ensuring that U are well-versed to return home safely every day.
            </p>

            <div className="text-2xl font-bold text-[#FF1493]">
              U drive safety
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-[--hi-vis-pink] text-white font-medium transition-colors"
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

            <p className="text-sm text-gray-400 italic">
              Explore our flexible training modules designed for your success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#FF1493] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-[#FFFF00] rounded-full opacity-50 animate-pulse" />
    </section>
  )
}
