'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface Festival {
  name: string
  description: string
  season: string
  region: string
  icon: string
  colors: string[]
  traditions: string[]
  history: string
  detailedHistory: string
  image: string
  cardImage: string
}

interface FestivalDetailModalProps {
  isOpen: boolean
  festival: Festival | null
  onClose: () => void
}

export default function FestivalDetailModal({ isOpen, festival, onClose }: FestivalDetailModalProps) {
  if (!festival) return null

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
            {/* Header with Image */}
            <div 
              className="relative w-full h-64 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${festival.image}')`
              }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-8xl drop-shadow-lg"
                >
                  {festival.icon}
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-playfair text-4xl font-bold text-white drop-shadow-lg"
                >
                  {festival.name}
                </motion.h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Key Information */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200"
                >
                  <p className="text-gray-600 text-sm font-semibold">Season</p>
                  <p className="text-gray-800 font-bold">{festival.season}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200"
                >
                  <p className="text-gray-600 text-sm font-semibold">Region</p>
                  <p className="text-gray-800 font-bold">{festival.region}</p>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <h3 className="font-bold text-maroon mb-2 flex items-center gap-2">
                  📖 Description
                </h3>
                <p className="text-gray-700 leading-relaxed">{festival.description}</p>
              </motion.div>

              {/* Detailed History */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 bg-gradient-to-br from-saffron/10 to-orange-50 rounded-lg border border-saffron/30"
              >
                <h3 className="font-bold text-maroon mb-2 flex items-center gap-2">
                  📚 Detailed History
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{festival.detailedHistory}</p>
              </motion.div>

              {/* Historical Significance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-4 bg-gradient-to-br from-peacock/10 to-blue-50 rounded-lg border border-peacock/30"
              >
                <h3 className="font-bold text-peacock mb-2 flex items-center gap-2">
                  ✨ Historical Significance
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{festival.history}</p>
              </motion.div>

              {/* Traditions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-4 bg-gradient-to-br from-gold/10 to-yellow-50 rounded-lg border border-gold/30"
              >
                <h3 className="font-bold text-gold mb-3 flex items-center gap-2">
                  🎉 Celebrations & Traditions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {festival.traditions.map((tradition, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.05 }}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      {tradition}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Color Palette */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <h3 className="font-bold text-gray-800 mb-3">Festival Colors</h3>
                <div className="flex gap-3">
                  {festival.colors.map((color, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-200 cursor-pointer"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-maroon to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Close Details
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
