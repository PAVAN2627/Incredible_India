'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface Region {
  name: string
  description: string
  dishes: string[]
  icon: string
  color: string
  spices: string[]
  detailedHistory: string
  image: string
  cardImage: string
}

interface CuisineCardProps {
  region: Region
  index: number
}

export default function CuisineCard({ region, index }: CuisineCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl shadow-xl h-96"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${region.cardImage}')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-80`} />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
        <div>
          <motion.div
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            className="text-5xl mb-4"
          >
            {region.icon}
          </motion.div>
          
          <h3 className="font-playfair text-3xl font-bold mb-4">{region.name}</h3>
          <p className="text-white/90 mb-6 leading-relaxed">{region.description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 max-h-64 overflow-y-auto"
        >
          {/* Detailed History */}
          <div>
            <h4 className="font-bold mb-2 flex items-center gap-2">
              📚 History & Heritage
            </h4>
            <p className="text-white/90 text-sm leading-relaxed">
              {region.detailedHistory}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Popular Dishes:</h4>
            <div className="flex flex-wrap gap-2">
              {region.dishes.map((dish, i) => (
                <span key={i} className="bg-white/20 px-2 py-1 rounded-full text-sm">
                  {dish}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Key Spices:</h4>
            <div className="flex flex-wrap gap-2">
              {region.spices.map((spice, i) => (
                <span key={i} className="bg-white/20 px-2 py-1 rounded-full text-sm">
                  {spice}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 left-8 right-8 text-center text-white/70 text-sm"
        >
          Hover to explore
        </motion.div>
      </div>
    </motion.div>
  )
}