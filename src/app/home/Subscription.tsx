'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annually'>('monthly')

  // Planes de suscripción - Placeholder para futura integración con Stripe
  const plans = [
    {
      id: 'business',
      name: 'Para Propietarios y Administradores',
      price: { monthly: '$99', annually: '$990' },
      features: [
        'Asegura el cumplimiento con OSHA',
        'Recibe informes de incidentes',
        'Monitoreo del rendimiento de conductores',
        'Gestión sencilla de inventario',
        'Comunicación fluida con conductores'
      ]
    },
    {
      id: 'operators',
      name: 'Para Operadores y Conductores',
      price: { monthly: '$49', annually: '$490' },
      features: [
        'Herramientas de verificación previa',
        'Recordatorios automáticos de seguridad',
        'Informes de incidentes',
        'Seguimiento de capacitación y certificaciones',
        'Comunicación clara con administradores'
      ]
    }
  ]

  return (
    <section className="relative bg-zinc-900 py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-yellow-500/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl title-font sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            PLANES DE SUSCRIPCIÓN
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-zinc-800/50 p-1 rounded-full border border-yellow-500/20 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedPlan === 'monthly' 
                  ? 'bg-yellow-500 text-zinc-900' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              Mensual
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedPlan === 'annually' 
                  ? 'bg-yellow-500 text-zinc-900' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setSelectedPlan('annually')}
            >
              Anual <span className="text-xs opacity-75">Ahorra 15%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800/30 max-w-sm rounded-xl border border-yellow-500/10 overflow-hidden hover:border-yellow-500/30 transition-all hover:shadow-lg hover:shadow-yellow-500/5"
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-yellow-500 mb-6">
                  {plan.price[selectedPlan]}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    /{selectedPlan === 'monthly' ? 'mes' : 'año'}
                  </span>
                </p>
                
                <button className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 rounded-lg font-medium transition-colors mb-8">
                  Seleccionar Plan
                </button>
                
                <h4 className="text-lg font-semibold text-white mb-4">Beneficios del Plan:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-0.5">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-50" />
    </section>
  )
}