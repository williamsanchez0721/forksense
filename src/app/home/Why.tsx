'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Why() {
  return (
    <section className="relative bg-[#F8F3ED] py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Illustration */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Forklift Icons Grid */}
              <div className="grid grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 6,
                      delay: index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    <Image
                      src={`/forklift-icon-${index}.svg`}
                      alt="Forklift Icon"
                      width={150}
                      height={150}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-[#4B8B76] rounded-full opacity-20"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-[#4B8B76] rounded-full opacity-10" />
            </div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-6xl font-bold text-[#1C1C1E]">
              WHY FORKU?
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              At forkU, we prioritize U—the operator. We believe in creating a safer workplace. Our platform is dedicated to promoting best practices in forklift operation, reducing workplace accidents, and ensuring that U are well-versed to return home safely every day.
            </p>

            <div className="text-2xl font-bold text-[#4B8B76]">
              U drive safety
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-[#4B8B76] text-white font-medium hover:bg-[#3A6B5C] transition-colors"
              >
                JOIN THE WAITLIST
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full text-[#1C1C1E] font-medium border border-[#1C1C1E] hover:bg-[#1C1C1E] hover:text-white transition-colors"
              >
                GET STARTED (Coming Soon)
              </motion.button>
            </div>

            <p className="text-sm text-gray-600 italic">
              Explore our flexible training modules designed for your success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
