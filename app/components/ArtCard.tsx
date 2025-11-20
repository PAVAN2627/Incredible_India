'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Art {
  name: string
  origin: string
  description: string
  icon: string
  image?: string
  cardImage?: string
}

interface ArtCardProps {
  art: Art
  index: number
  onOpenModal: (art: Art) => void
}

export default function ArtCard({ art, index, onOpenModal }: ArtCardProps) {
  // Provide fallback image paths if not in data
  const imageUrl = art.cardImage || art.image || `/images/art/${art.name}.jpeg`

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onOpenModal(art)}
    >
      {/* Image Section */}
      <div className="relative h-40 bg-gray-200 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="text-4xl mb-3 text-center"
        >
          {art.icon}
        </motion.div>
        
        <h3 className="font-playfair text-xl font-bold text-maroon mb-2 text-center">
          {art.name}
        </h3>
        
        <p className="text-peacock font-semibold text-center mb-3 text-sm">{art.origin}</p>
        
        <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">{art.description}</p>
        
        <div className="text-center">
          <p className="text-xs text-gray-500">Click to explore more</p>
        </div>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-saffron via-peacock to-maroon"></div>
    </motion.div>
  )
}