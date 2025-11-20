'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function StatsSection() {
  const [counts, setCounts] = useState({ states: 0, languages: 0, festivals: 0, monuments: 0 })

  const stats = [
    { label: 'States & UTs', value: 36, icon: '🗺️', color: 'from-saffron to-gold' },
    { label: 'Languages', value: 780, icon: '🗣️', color: 'from-peacock to-blue-600' },
    { label: 'Festivals', value: 50, icon: '🎉', color: 'from-maroon to-red-600' },
    { label: 'Heritage Sites', value: 40, icon: '🏛️', color: 'from-green-600 to-emerald-600' }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        const increment = stat.value / 50
        let current = 0
        const counter = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(counter)
          }
          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'states' : index === 1 ? 'languages' : index === 2 ? 'festivals' : 'monuments']: Math.floor(current)
          }))
        }, 30)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-maroon mb-6">
            India by Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the incredible diversity and richness of Indian culture through these fascinating statistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className={`bg-gradient-to-br ${stat.color} p-8 text-white text-center h-full`}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="text-5xl mb-4"
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {Object.values(counts)[index]}+
                </motion.div>
                
                <p className="text-white/90 font-medium text-lg">{stat.label}</p>
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}