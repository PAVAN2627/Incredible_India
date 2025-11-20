'use client'
import { motion } from 'framer-motion'

interface InteractiveMapProps {
  states?: any[]
}

export default function InteractiveMap({ states }: InteractiveMapProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-playfair text-4xl font-bold text-center text-maroon mb-12"
      >
        Interactive India Map
      </motion.h2>

      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full"
        >
          <img 
            src="https://www.toptourguide.com/indialarge.gif"
            alt="Interactive Map of India"
            className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl mb-2"
            >
              🇮🇳
            </motion.div>
            <h3 className="font-playfair text-xl font-bold text-white drop-shadow-lg mb-1">
              Incredible India
            </h3>
            <p className="text-white/90 drop-shadow-md text-sm">
              28 States, 8 Union Territories
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}