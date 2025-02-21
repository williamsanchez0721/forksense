'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function JoinWaitlistPopup() {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button 
        onClick={togglePopup} 
        className="bg-[--secondary-color] text-white px-8 py-3 rounded-full font-medium hover:bg-[--hi-vis-yellow] hover:text-[--secondary-color] transition-colors"
      >
        Join the Waitlist
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#FF1493] mb-4">
              Forklift Safety & Compliance—Designed for U!
            </h2>
            <p className="text-gray-700 mb-4">
              Join the waitlist and get early access to forkU, the ultimate platform for OSHA-compliant forklift training, certification tracking, and safety resources.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>✅ Stay OSHA Compliant</li>
              <li>✅ Exclusive Early Access</li>
              <li>✅ Safety Tools Built for You</li>
            </ul>
            <p className="text-red-600 font-semibold mb-4">
              Limited Spots Available! Be among the first to take control of your forklift safety journey.
            </p>
            <input 
              type="email" 
              placeholder="Enter your email below to secure your spot!" 
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end">
              <button 
                onClick={togglePopup} 
                className="text-gray-500 hover:text-gray-700 mr-4"
              >
                Cancel
              </button>
              <button className="bg-[#FF1493] text-white px-4 py-2 rounded hover:bg-[#39FF14] transition-colors">
                Submit
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
} 