'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface State {
  name: string
  capital: string
  famousFood: string
  biggestFestival: string
  history: string
  speciality: string
  image: string
  color: string
  region: string
}

interface StateCardProps {
  state: State
  index: number
  onOpenModal: (state: State) => void
}

export default function StateCard({ state, index, onOpenModal }: StateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onOpenModal(state)}
    >
      <div className="relative h-48">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${state.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-playfair text-2xl font-bold mb-1">{state.name}</h3>
          <p className="text-white/90 text-sm">Capital: {state.capital}</p>
        </div>

        <span 
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: state.color }}
        >
          {state.region}
        </span>
      </div>

      <div className="p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🍛</span>
            <div>
              <p className="text-xs text-saffron font-semibold">Famous Food</p>
              <p className="text-sm text-gray-700">{state.famousFood}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg">🎉</span>
            <div>
              <p className="text-xs text-peacock font-semibold">Biggest Festival</p>
              <p className="text-sm text-gray-700">{state.biggestFestival}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <div>
              <p className="text-xs text-maroon font-semibold">Speciality</p>
              <p className="text-sm text-gray-700">{state.speciality}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">Click to explore more</p>
        </div>
      </div>
    </motion.div>
  )
}