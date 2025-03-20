'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-zinc-900 text-white overflow-hidden">
      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      {/* Background Abstract */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-yellow-500/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex justify-center items-center gap-2 bg-white rounded-full p-2 w-14 h-14">
              <Link href="/">
                <Image
                  src="/logos/forksense.png"
                  alt="ForkU Logo"
                  width={150}
                  height={50}
                  className="w-full"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
            Líderes en eficiencia y seguridad de montacargas
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-mono mb-6 text-yellow-500">NAVEGACIÓN</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  INICIO
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-yellow-400 transition-colors">
                  CÓMO FUNCIONA
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-yellow-400 transition-colors">
                  CAPACITACIÓN
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-400 transition-colors">
                  BLOG
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-mono mb-6 text-yellow-500">SOPORTE</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/support" className="hover:text-yellow-400 transition-colors">
                  ATENCIÓN AL CLIENTE
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-yellow-400 transition-colors">
                  TUS PEDIDOS
                </Link>
              </li>
              <li>
                <Link href="/releases" className="hover:text-yellow-400 transition-colors">
                  NOTAS DE VERSIÓN
                </Link>
              </li>
              <li>
                <Link href="/referral" className="hover:text-yellow-400 transition-colors">
                  PROGRAMA DE REFERIDOS
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-mono mb-6 text-yellow-500">CONÉCTATE</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://www.instagram.com/forku.app/" className="hover:text-yellow-400 transition-colors">
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@forku.app" className="hover:text-yellow-400 transition-colors">
                  X
                </Link>
              </li>
              <li>
                <Link href="mailto:contacto@forku.com" className="hover:text-yellow-400 transition-colors">
                  CONTACTO
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright and Credits */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Forksense. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2">
              Diseñado y Desarrollado por{" "}
              <Link 
                href="https://github.com/williamsanchez0721" 
                target="_blank" 
                className="text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                William Lopez
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-50 animate-pulse" />
    </footer>
  )
}
