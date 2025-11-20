'use client'
import { motion } from 'framer-motion'

interface Monument {
  name: string
  location: string
  period: string
  description: string
  detailedHistory: string
  facts: string[]
  dynasty: string
  icon: string
  image: string
  cardImage: string
}

interface MonumentCardProps {
  monument: Monument
  index: number
}

export default function MonumentCard({ monument, index }: MonumentCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Monument Image */}
      <div className="lg:w-1/2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${monument.image}')`
            }}
          />

          <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
            <p className="text-white font-semibold">{monument.location}</p>
            <p className="text-white/80 text-sm">{monument.period}</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="mb-4">
            <h3 className="font-playfair text-3xl font-bold text-maroon">
              {monument.name}
            </h3>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-peacock/10 text-peacock px-3 py-1 rounded-full text-sm font-semibold">
              {monument.dynasty}
            </span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {monument.description}
          </p>

          <div className="mb-6 p-4 bg-maroon/5 border-l-4 border-maroon rounded-r-lg">
            <h4 className="font-bold text-maroon mb-2">
              Historical Significance
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {monument.detailedHistory}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-saffron mb-3">Fascinating Facts:</h4>
            <ul className="space-y-2">
              {monument.facts.map((fact, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  {fact}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}