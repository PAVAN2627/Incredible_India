'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface Festival {
  name: string
  description: string
  season: string
  region: string
  icon: string
  colors: string[]
  traditions: string[]
  history: string
  image?: string
  cardImage?: string
}

interface FestivalCardProps {
  festival: Festival
  index: number
  onOpenModal: (festival: Festival) => void
}

export default function FestivalCard({ festival, index, onOpenModal }: FestivalCardProps) {
  // Use festival image from data, with fallback construction
  const imageUrl = festival.cardImage || festival.image || `/images/festivals/${festival.name}.jpeg`

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onOpenModal(festival)}
    >
      <div className="relative h-48">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${imageUrl}')`
          }}
        />

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{festival.icon}</span>
            <h3 className="font-playfair text-2xl font-bold">{festival.name}</h3>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{festival.season}</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{festival.region}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">{festival.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-peacock mb-2">Key Traditions:</h4>
          <div className="flex flex-wrap gap-2">
            {festival.traditions.slice(0, 3).map((tradition, i) => (
              <span key={i} className="text-xs bg-saffron/10 text-saffron px-2 py-1 rounded-full">
                {tradition}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">Click to explore more</p>
        </div>
      </div>
    </motion.div>
  )
}