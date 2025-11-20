'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface Art {
  name: string
  origin: string
  description: string
  icon: string
  history?: string
  techniques?: string[]
  masters?: string[]
  significance?: string
  image?: string
  cardImage?: string
}

interface ArtModalProps {
  art: Art | null
  isOpen: boolean
  onClose: () => void
}

export default function ArtModal({ art, isOpen, onClose }: ArtModalProps) {
  if (!art) return null

  // Use local image path if available in data, otherwise construct from name
  const imageUrl = art.image || art.cardImage || `/images/art/${art.name}.jpeg`

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
            <div className="relative h-64">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors text-white text-xl"
              >
                ✕
              </button>

              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl"
                  >
                    {art.icon}
                  </motion.div>
                  <div>
                    <h2 className="font-playfair text-4xl font-bold mb-2">
                      {art.name}
                    </h2>
                    <p className="text-white/90 text-lg">Origin: {art.origin}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-saffron text-lg mb-3">
                      About the Art Form
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{art.description}</p>
                  </div>

                  {art.techniques && (
                    <div>
                      <h3 className="font-semibold text-peacock text-lg mb-3">
                        Key Techniques
                      </h3>
                      <ul className="space-y-2">
                        {art.techniques.map((technique, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-saffron rounded-full"></span>
                            {technique}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {art.history && (
                    <div>
                      <h3 className="font-semibold text-maroon text-lg mb-3">
                        Historical Background
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{art.history}</p>
                    </div>
                  )}

                  {art.masters && (
                    <div>
                      <h3 className="font-semibold text-gold text-lg mb-3">
                        Notable Masters
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {art.masters.map((master, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium"
                          >
                            {master}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {art.significance && (
                    <div>
                      <h3 className="font-semibold text-peacock text-lg mb-3">
                        Cultural Significance
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{art.significance}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}