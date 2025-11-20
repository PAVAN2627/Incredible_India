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
  detailedHistory?: string
  image?: string
  cardImage?: string
}

interface FestivalModalProps {
  festival: Festival | null
  isOpen: boolean
  onClose: () => void
}

export default function FestivalModal({ festival, isOpen, onClose }: FestivalModalProps) {
  if (!festival) return null

  // Use festival image from data, with fallback construction
  const imageUrl = festival.cardImage || festival.image || `/images/festivals/${festival.name}.jpeg`

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-64">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${festival.colors[0]}CC, ${festival.colors[1] || festival.colors[0]}CC), url('${imageUrl}')`
                }}
              />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors text-white text-xl"
              >
                ✕
              </button>

              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl"
                  >
                    {festival.icon}
                  </motion.div>
                  <div>
                    <h2 className="font-playfair text-4xl font-bold mb-2">
                      {festival.name}
                    </h2>
                    <div className="flex gap-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {festival.season}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {festival.region}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-saffron text-lg mb-3">
                      About the Festival
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{festival.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-peacock text-lg mb-3">
                      Celebrations & Traditions
                    </h3>
                    <ul className="space-y-2">
                      {festival.traditions.map((tradition, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <span className="w-2 h-2 bg-saffron rounded-full"></span>
                          {tradition}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-maroon text-lg mb-3">
                      Historical Significance
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{festival.history}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gold text-lg mb-3">
                      Festival Colors
                    </h3>
                    <div className="flex gap-3">
                      {festival.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-peacock text-lg mb-4">Festival Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-saffron/10 to-gold/10 rounded-lg">
                    <div className="text-3xl mb-2">{festival.icon}</div>
                    <p className="font-semibold text-maroon">{festival.name}</p>
                    <p className="text-sm text-gray-600">{festival.season}</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-peacock/10 to-blue-500/10 rounded-lg">
                    <div className="text-3xl mb-2">🌍</div>
                    <p className="font-semibold text-maroon">Region</p>
                    <p className="text-sm text-gray-600">{festival.region}</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-maroon/10 to-red-500/10 rounded-lg">
                    <div className="text-3xl mb-2">🎊</div>
                    <p className="font-semibold text-maroon">Traditions</p>
                    <p className="text-sm text-gray-600">{festival.traditions.length} customs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}