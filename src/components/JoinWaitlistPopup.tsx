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
    if (!email) {
      setErrorMessage('Por favor ingresa tu correo electrónico')
      setStatus('error')
      return
    }

    // Validación simple de formato de email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Por favor ingresa un correo electrónico válido')
      setStatus('error')
      return
    }

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
        
        // Manejar el mensaje de error de manera más amigable
        let userMessage = 'Hubo un problema al registrarte. Por favor intenta de nuevo.'
        
        const errorMsg = result.error || '';
        
        if (errorMsg.includes('not verified')) {
          userMessage = 'El correo aún no está verificado en nuestro sistema. Estaremos habilitándolo pronto.'
        } else if (errorMsg.includes('autenticación') || errorMsg.includes('credenciales')) {
          userMessage = 'Problema temporal en el servidor de correo. Tu información ha sido registrada.'
        }
        
        setErrorMessage(userMessage)
        setStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setErrorMessage('Problema de conexión. Por favor intenta de nuevo más tarde.')
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
        className="bg-zinc-900 rounded-2xl shadow-2xl p-5 sm:p-6 w-full max-w-md mx-auto relative border border-yellow-500/20 max-h-[90vh] overflow-auto flex flex-col"
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
          <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-zinc-800/30 to-transparent rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-yellow-500/5 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 title-font">
            Seguridad y Cumplimiento
            <span className="block text-lg sm:text-xl font-semibold text-yellow-500 mt-1">
              ¡Diseñado para Ti!
            </span>
          </h2>

          <form ref={formRef} className="space-y-4 sm:space-y-5" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <p className="text-gray-300 text-sm sm:text-base">
              Únete a la lista de espera y obtén acceso anticipado a forkU, la plataforma definitiva para capacitación de montacargas conforme a OSHA.
            </p>

            <div className="bg-zinc-800/50 p-3 rounded-xl border border-yellow-500/10">
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-0.5">✅</span> 
                  <span>Mantente en Cumplimiento con OSHA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-0.5">✅</span> 
                  <span>Acceso Anticipado Exclusivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-0.5">✅</span> 
                  <span>Herramientas de Seguridad Diseñadas para Ti</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-500/10 p-2 sm:p-3 rounded-xl border border-yellow-500/20 text-center">
              <p className="text-yellow-500 font-medium text-sm">
                <span className="mr-1">🔒</span> ¡Cupos Limitados! Sé de los primeros en controlar tu seguridad.
              </p>
            </div>

            <div className="space-y-3">
              <input 
                type="email" 
                name="user_email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Ingresa tu correo electrónico" 
                className="w-full bg-zinc-800/50 text-white px-4 py-2 sm:py-3 border border-yellow-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all placeholder:text-gray-500"
                required
              />
              
              <div className="flex gap-3">
                <motion.button 
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)} 
                  className="flex-1 px-4 py-2 sm:py-3 border border-yellow-500/20 text-white rounded-xl bg-zinc-800/30 hover:bg-zinc-800/70 transition-colors text-sm sm:text-base"
                  disabled={isLoading}
                >
                  Cancelar
                </motion.button>
                <motion.button 
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className={`flex-1 bg-yellow-500 text-zinc-900 px-4 py-2 sm:py-3 rounded-xl hover:bg-yellow-400 transition-colors text-sm sm:text-base ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Enviando...' : 'Unirse Ahora'}
                </motion.button>
              </div>

              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-yellow-500 text-center p-2 bg-yellow-500/10 rounded-lg text-sm"
                >
                  ¡Te has unido exitosamente a la lista de espera!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-center p-2 bg-red-500/10 rounded-lg text-sm"
                >
                  {errorMessage || 'Hubo un error. Por favor intenta de nuevo.'}
                </motion.p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
} 