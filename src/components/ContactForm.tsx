'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({ name: '', email: '', company: '' });
        // Cerrar el modal después de mostrar el mensaje de éxito
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div 
            className="bg-zinc-900 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto relative border border-yellow-500/20"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
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
              <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10">
              <button 
                className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                onClick={onClose}
              >
                ✕
              </button>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Contáctanos</h3>
                <div className="h-1 w-12 bg-yellow-500/50 mt-1"></div>
                <p className="text-sm text-gray-400 mt-2">
                  Completa el formulario y nos pondremos en contacto contigo
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre" 
                    className="w-full bg-zinc-800/50 text-white px-4 py-3 border border-yellow-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all placeholder:text-gray-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico" 
                    className="w-full bg-zinc-800/50 text-white px-4 py-3 border border-yellow-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all placeholder:text-gray-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Empresa" 
                    className="w-full bg-zinc-800/50 text-white px-4 py-3 border border-yellow-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all placeholder:text-gray-500"
                    required
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose} 
                    className="flex-1 px-4 py-3 border border-yellow-500/20 text-white rounded-xl hover:bg-zinc-800/50 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 bg-yellow-500 text-zinc-900 px-4 py-3 rounded-xl font-medium hover:bg-yellow-400 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </motion.button>
                </div>
                
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-zinc-800/50 text-center p-3 rounded-xl border border-yellow-500/20"
                  >
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-500 font-medium">¡Gracias por contactarnos!</p>
                    <p className="text-sm text-gray-300">Te responderemos pronto.</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 