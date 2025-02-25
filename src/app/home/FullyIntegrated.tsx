'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FullyIntegrated() {
  return (
    <section className="relative bg-[#1C1C1E] py-32 px-20 overflow-hidden">
      {/* Background Text */}
      <div className="absolute flex items-center pb-44 inset-0 opacity-10 select-none pointer-events-none">
        <div className="text-[15vw] font-bold text-white leading-none">
          FULLY
          <br />
          INTEGRATED
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex gap-20 items-center">

          <motion.div
            className="relative flex justify-center w-full"
          >
            <div className="relative z-10 flex justify-center w-full">
              <motion.div>
                <Image
                  src="/device.webp"
                  alt="ForkU App Preview"
                  width={600}
                  height={800}
                  className="rounded-3xl w-full max-w-5xl"
                />
              </motion.div>
            </div>

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FFFF00] rounded-full blur-[100px] opacity-20" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF1493] rounded-full blur-[100px] opacity-20" />
          </motion.div>
        </div>
        {/* Left Column - Text Content */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white flex items-center justify-between"
          >
            <div className='flex flex-col gap-4'>
              <h2 className="text-7xl font-extrabold leading-tight title-font">
                FULLY INTEGRATED
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                ForkU&apos;s app and resources are developed and designed with U in mind. Our comprehensive platform simplifies the complexities of OSHA regulations. Access comprehensive training materials, track your certification progress, and stay updated with the latest safety protocols.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-[#FF1493] text-white font-medium transition-colors"
              >
                EXPLORE THE APP
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full text-white font-medium border border-white/30 hover:bg-white/10 transition-colors"
              >
                EXPLORE FEATURES
              </motion.button>
            </div>
          </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#4B8B76] rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-white rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-50" />
    </section>
  )
} 