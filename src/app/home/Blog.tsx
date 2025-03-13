'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Blog() {
  // Artículos destacados del blog
  const featuredArticles = [
    {
      id: 'osha-compliance',
      slug: 'entendiendo-el-cumplimiento-osha-que-significa-para-tu-negocio',
      title: 'Entendiendo el cumplimiento OSHA: Qué significa para tu negocio',
      excerpt: 'Descubre cómo las regulaciones OSHA impactan tu operación y qué debes hacer para mantener el cumplimiento.',
      category: 'Industria y Cumplimiento',
      date: '15 Jun 2023'
    },
    {
      id: 'digital-tools',
      slug: 'como-las-herramientas-digitales-estan-transformando-la-gestion-de-flotas',
      title: 'Cómo las herramientas digitales están transformando la gestión de flotas',
      excerpt: 'Explora el impacto de la digitalización en la eficiencia y seguridad de las operaciones con montacargas.',
      category: 'Negocios y Productividad',
      date: '22 Abr 2023'
    },
    {
      id: 'improve-safety',
      slug: 'mejorar-la-seguridad-de-montacargas-en-tu-lugar-de-trabajo',
      title: 'Cómo mejorar la seguridad de montacargas en tu lugar de trabajo',
      excerpt: 'Estrategias prácticas para crear un entorno de trabajo más seguro para operadores de montacargas.',
      category: 'Industria y Cumplimiento',
      date: '10 May 2023'
    }
  ]

  return (
    <section id="blog" className="relative bg-zinc-900 py-16 sm:py-20 overflow-hidden">
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
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl title-font sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            BLOG
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Artículos destacados sobre seguridad de montacargas y cumplimiento normativo
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {featuredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800/30 rounded-xl border border-yellow-500/10 overflow-hidden hover:border-yellow-500/30 transition-all hover:shadow-lg hover:shadow-yellow-500/5 group"
            >
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900/50 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                <div className="h-full w-full bg-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-700">Imagen del artículo</span>
                </div>
                <div className="absolute top-3 left-3 z-20">
                  <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 z-20">
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link href={`/blog/${article.slug}`} className="text-yellow-500 text-sm font-medium hover:text-yellow-400 transition-colors inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link 
            href="/blog"
            className="inline-block bg-yellow-500 text-zinc-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors"
          >
            Ver todos los artículos
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-50" />
    </section>
  )
}
