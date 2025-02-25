'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Security() {
  return (
    <section className="relative bg-[#1C1C1E] py-0 overflow-hidden">
      <div className="px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8 max-w-2xl pl-20 pt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[80px] font-bold leading-none tracking-tight title-font"
            >
              SIMPLE IS<br />SECURE
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed max-w-lg"
            >
              Navigating OSHA compliance can be daunting. ForkU reimagines safety training, ensuring that no matter what happens, your certification process is straightforward and your knowledge is up-to-date.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="group relative inline-flex items-center text-white text-lg font-medium">
                LEARN MORE ABOUT COMPLIANCE
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
              </button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative px-0"
          >
            {/* Conector visual */}
            <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-[#f8f3ed00] to-[#1C1C1E]" />
            
            <Image
              src="/security2.png"
              alt="Forklift Operator using ForkU app"
              width={1920}
              height={1080}
              className="rounded-b-2xl object-cover object-center h-screen w-full"
              priority
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-transparent rounded-b-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#FF1493]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#39FF14]/20 to-transparent" />
      </div>
    </section>
  )
}
