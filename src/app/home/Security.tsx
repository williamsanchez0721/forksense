'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Security() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

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
        setShowModal(false);
      }, 3000);
    }, 1500);
  };

  const openModal = () => {
    setShowModal(true);
    setSubmitStatus('idle');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-yellow-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-yellow-500/30 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Column - Image (Full Height) */}
          <div className="relative h-[50vh] lg:h-auto lg:min-h-screen order-2 lg:order-1">
            <Image
              src="/security2.png"
              alt="Operador de montacargas usando la app ForkU"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-900/60 to-transparent" />
            
            {/* Yellow Accent */}
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-yellow-500 rounded-full blur-xl opacity-30" />
            <div className="absolute top-4 left-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-30" />
          </div>

          {/* Right Column - Content */}
          <div className="flex items-center py-16 sm:py-20 md:py-24 lg:py-0 order-1 lg:order-2">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-2xl mx-auto lg:mx-0">
              <div className="space-y-4 sm:space-y-4">
                {/* Título principal */}
                <div>
                  <h2 className="text-3xl sm:text-4xl title-font mb-2 md:text-5xl lg:text-6xl font-bold text-white">
                    NUESTRA PRIORIDAD <br /> <span className="text-yellow-500">ERES TÚ</span>
                  </h2>
                  <div className="h-1 w-20 bg-yellow-500 mt-4 mb-6"></div>
                </div>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  Creemos en crear un lugar de trabajo más seguro, por eso nos enfocamos en TI, el operador. Nuestra plataforma está dedicada a promover las mejores prácticas, reducir accidentes y asegurar que TÚ estés bien preparado para regresar a casa con seguridad todos los días.
                </p>

                {/* Sección ¿CÓMO? */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">¿CÓMO?</h3>
                  </div>
                  
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-500 font-bold">✓</span>
                      <span className="text-gray-300">Identifícate como operador</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-500 font-bold">✓</span>
                      <span className="text-gray-300">Realiza verificaciones previas de vehículos conforme a OSHA</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-500 font-bold">✓</span>
                      <span className="text-gray-300">Crea y revisa informes de incidentes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-500 font-bold">✓</span>
                      <span className="text-gray-300">Haz seguimiento de tu progreso</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-500 font-bold">✓</span>
                      <span className="text-gray-300">Mantén tus certificaciones actualizadas</span>
                    </li>
                  </ul>
                </div>

                {/* Sección ¿QUIERES SABER MÁS? */}
                <div>
                  <div className="pl-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openModal}
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-yellow-500 text-zinc-900 font-medium transition-colors hover:bg-yellow-400 text-sm sm:text-base inline-flex items-center gap-2"
                    >
                      <span>CONTÁCTANOS</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showModal && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
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
                  onClick={closeModal}
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
                      onClick={closeModal} 
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
    </section>
  )
}
