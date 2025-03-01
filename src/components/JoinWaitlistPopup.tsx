'use client'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { sendWaitlistEmail } from '@/app/actions/email'

interface JoinWaitlistPopupProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function JoinWaitlistPopup({ isOpen, setIsOpen }: JoinWaitlistPopupProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  const handleSubmit = async () => {
    if (!email) return

    setIsLoading(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      // Llamar al server action para enviar el email
      const result = await sendWaitlistEmail({ email });
      
      if (result.success) {
        setStatus('success')
        setTimeout(() => setIsOpen(false), 2000)
      } else {
        console.error('Error:', result.error)
        setErrorMessage(result.error || 'Unknown error. Please try again.')
        setStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setErrorMessage('Connection error. Please try again.')
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="bg-zinc-900 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto relative border border-[#FF1493]/20"
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
        {/* Background Abstract */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-[#FF1493]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-[#39FF14]/10 to-transparent rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[#FFFF00]/5 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 title-font">
            Join Our Waitlist
            <span className="block text-lg font-normal text-gray-400 mt-2">
              Be Part of the Future
            </span>
          </h2>

          <form ref={formRef} className="space-y-6">
            <p className="text-gray-300">
              Get early access to ForkU, the revolutionary platform for forklift training and safety management.
            </p>

            <div className="bg-zinc-800/50 p-4 rounded-xl border border-[#FF1493]/10">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-[#FF1493]">✦</span> 
                  OSHA Compliant Training
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#39FF14]">✦</span> 
                  Priority Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFFF00]">✦</span> 
                  Exclusive Features
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <input 
                type="email" 
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full bg-zinc-800/50 text-white px-4 py-3 border border-[#FF1493]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF1493] focus:border-transparent transition-all placeholder:text-gray-500"
                required
              />
              
              <div className="flex gap-3">
                <motion.button 
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)} 
                  className="flex-1 px-4 py-3 border border-[#FF1493]/20 text-white rounded-xl hover:bg-zinc-800/50 transition-colors"
                  disabled={isLoading}
                >
                  Cancel
                </motion.button>
                <motion.button 
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`flex-1 bg-[#FF1493] text-white px-4 py-3 rounded-xl hover:bg-[#39FF14] hover:text-zinc-900 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Sending...' : 'Join Now'}
                </motion.button>
              </div>

              {status === 'success' && (
                <p className="text-[#39FF14] text-center">¡Successfully joined the waitlist!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">
                  {errorMessage || 'There was an error. Please try again.'}
                </p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
} 