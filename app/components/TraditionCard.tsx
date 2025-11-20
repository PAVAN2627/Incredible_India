'use client'
import { motion } from 'framer-motion'

interface Tradition {
  name: string
  description: string
  icon: string
  significance: string
}

interface TraditionCardProps {
  tradition: Tradition
  index: number
}

export default function TraditionCard({ tradition, index }: TraditionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-saffron/20 to-peacock/20 p-6 text-center">
        <motion.div
          whileHover={{ scale: 1.3, rotate: 10 }}
          transition={{ duration: 0.3 }}
          className="text-5xl mb-4"
        >
          {tradition.icon}
        </motion.div>
        
        <h3 className="font-playfair text-2xl font-bold text-maroon mb-3">
          {tradition.name}
        </h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">{tradition.description}</p>
        
        <div className="border-t pt-4">
          <h4 className="font-semibold text-peacock mb-2">Cultural Significance:</h4>
          <p className="text-gray-600 text-sm">{tradition.significance}</p>
        </div>
      </div>
    </motion.div>
  )
}