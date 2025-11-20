'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface StateDetails {
  name: string
  capital: string
  famousFood: string
  biggestFestival: string
  history: string
  speciality: string
  color: string
  region: string
  population?: string
  area?: string
  language?: string
  bestTimeToVisit?: string
  image?: string
  cardImage?: string
}

interface StateDetailModalProps {
  isOpen: boolean
  state: StateDetails | null
  onClose: () => void
}

export default function StateDetailModal({ isOpen, state, onClose }: StateDetailModalProps) {
  if (!state) return null

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 100,
      transition: { duration: 0.2 }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div 
              className="relative p-8 text-white min-h-[200px] flex flex-col justify-end"
              style={{
                background: `linear-gradient(135deg, ${state.color}99 0%, ${state.color}cc 100%)`
              }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-playfair text-5xl font-bold mb-4 drop-shadow-lg"
              >
                {state.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/90 text-lg font-medium drop-shadow-md"
              >
                {state.region} India • Capital: {state.capital}
              </motion.p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-gradient-to-br from-saffron/10 to-saffron/5 p-4 rounded-xl border border-saffron/20">
                  <p className="text-saffron text-sm font-bold uppercase mb-1">Language</p>
                  <p className="text-gray-800 font-semibold">{state.language || 'Hindi, Regional'}</p>
                </div>
                <div className="bg-gradient-to-br from-peacock/10 to-peacock/5 p-4 rounded-xl border border-peacock/20">
                  <p className="text-peacock text-sm font-bold uppercase mb-1">Best Time to Visit</p>
                  <p className="text-gray-800 font-semibold">{state.bestTimeToVisit || 'Oct - Mar'}</p>
                </div>
              </motion.div>

              {/* History Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-maroon/5 to-transparent p-6 rounded-xl border-l-4 border-maroon"
              >
                <h3 className="text-2xl font-bold text-maroon mb-3 flex items-center gap-2">
                  <span>📜</span> Historical Significance
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">{state.history}</p>
              </motion.div>

              {/* Cuisine Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-saffron/5 to-transparent p-6 rounded-xl border-l-4 border-saffron"
              >
                <h3 className="text-2xl font-bold text-saffron mb-3 flex items-center gap-2">
                  <span>🍛</span> Culinary Heritage
                </h3>
                <p className="text-gray-700 text-lg font-semibold">{state.famousFood}</p>
                <p className="text-gray-600 mt-2 text-sm">A unique blend of spices and cooking traditions that have been perfected over centuries.</p>
              </motion.div>

              {/* Festival Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-gold/5 to-transparent p-6 rounded-xl border-l-4 border-gold"
              >
                <h3 className="text-2xl font-bold text-maroon mb-3 flex items-center gap-2">
                  <span>🎉</span> Major Celebrations
                </h3>
                <p className="text-gray-700 text-lg font-semibold">{state.biggestFestival}</p>
                <p className="text-gray-600 mt-2 text-sm">The most vibrant and celebrated festival that brings the entire state together in joyous celebration.</p>
              </motion.div>

              {/* Speciality Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-peacock/5 to-transparent p-6 rounded-xl border-l-4 border-peacock"
              >
                <h3 className="text-2xl font-bold text-peacock mb-3 flex items-center gap-2">
                  <span>⭐</span> Unique Features
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">{state.speciality}</p>
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full bg-gradient-to-r from-maroon to-saffron text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                Explore More States ✨
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
