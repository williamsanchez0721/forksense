'use client'
import { motion } from 'framer-motion'

interface JoinWaitlistPopupProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function JoinWaitlistPopup({ isOpen, setIsOpen }: JoinWaitlistPopupProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30 
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Elemento decorativo abstracto */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[--hi-vis-yellow] rounded-full opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[--secondary-color] rounded-full opacity-10" />
            
            <h2 className="text-3xl font-bold text-[--secondary-color] mb-6 relative">
              Join Our Waitlist
              <span className="block text-lg font-normal text-gray-600 mt-1">
                Be Part of the Future
              </span>
            </h2>

            <div className="space-y-6 relative">
              <p className="text-gray-700">
                Get early access to forkU, the revolutionary platform for forklift training and safety management.
              </p>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[--secondary-color]">✦</span> 
                    OSHA Compliant Training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[--secondary-color]">✦</span> 
                    Priority Access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[--secondary-color]">✦</span> 
                    Exclusive Features
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full text-gray-900 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--secondary-color] focus:border-transparent transition-all"
                />
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="flex-1 px-4 py-3 border text-gray-900 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-[--secondary-color] text-white px-4 py-3 rounded-xl hover:bg-[--hi-vis-yellow] hover:text-[--secondary-color] transition-colors">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
} 