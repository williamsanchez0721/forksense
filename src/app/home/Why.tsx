'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Why() {
  return (
    <section className="relative bg-zinc-900 py-0 overflow-hidden min-h-screen">
      {/* Background Abstract */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-[#FF1493]/40 to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-[#32CD32]/20 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-[#FF1493]/5 to-transparent" />
        <div className="absolute inset-0 bg-[#FFFF00]/5 mix-blend-overlay" />
      </div>

      <div className="mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative">
                <Image
                  src="/family.jpg"
                  alt="Forklift Operator"
                  width={1920}
                  height={1080}
                  className="object-cover object-center h-[500px] lg:h-screen w-full"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-[#FF1493]/10 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 px-6 md:px-20 pt-20 pb-20 order-2 lg:order-2"
          >
            <h2 className="text-6xl font-bold text-white title-font">
              WHY FORKU?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              At forkU, we prioritize U—the operator. We believe in creating a safer workplace. Our platform is dedicated to promoting best practices in forklift operation, reducing workplace accidents, and ensuring that U are well-versed to return home safely every day.
            </p>

            <p className="text-sm text-gray-400 italic">
              Explore our flexible training modules designed for your success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#FF1493] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-[#32CD32] rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-[#FFFF00] rounded-full opacity-50 animate-pulse" />
    </section>
  )
}