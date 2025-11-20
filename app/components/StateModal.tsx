'use client'
import { motion, AnimatePresence } from 'framer-motion'


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

interface StateModalProps {
  state: State | null
  isOpen: boolean
  onClose: () => void
}

export default function StateModal({ state, isOpen, onClose }: StateModalProps) {
  if (!state) return null

  const getStateImage = (stateName: string) => {
    const stateImages: { [key: string]: string } = {
      'Rajasthan': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=400&fit=crop',
      'Kerala': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      'Maharashtra': 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&h=400&fit=crop',
      'West Bengal': 'https://images.unsplash.com/photo-1564515592487-b30e38a7b6ce?w=800&h=400&fit=crop',
      'Tamil Nadu': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=400&fit=crop',
      'Punjab': 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=400&fit=crop',
      'Gujarat': 'https://images.unsplash.com/photo-1609013906945-c6db59da9e0d?w=800&h=400&fit=crop',
      'Karnataka': 'https://images.unsplash.com/photo-1577720643272-265f434e60d0?w=800&h=400&fit=crop',
      'Uttar Pradesh': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=400&fit=crop',
      'Goa': 'https://images.unsplash.com/photo-1555244712-d4b1afa00e5e?w=800&h=400&fit=crop',
      'Himachal Pradesh': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      'Assam': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop',
      'Odisha': 'https://images.unsplash.com/photo-1570503882257-eb0f06a32c67?w=800&h=400&fit=crop',
      'Andhra Pradesh': 'https://images.unsplash.com/photo-1570503386663-90e95c5a7a12?w=800&h=400&fit=crop',
      'Madhya Pradesh': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop'
    }
    return stateImages[stateName] || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=400&fit=crop'
  }

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
            {/* Header Image */}
            <div className="relative h-64">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${getStateImage(state.name)}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors text-white text-xl"
              >
                ✕
              </button>

              <div className="absolute bottom-6 left-6">
                <h2 className="font-playfair text-4xl font-bold text-white mb-2">
                  {state.name}
                </h2>
                <p className="text-white/90 text-lg">Capital: {state.capital}</p>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mt-2"
                  style={{ backgroundColor: state.color }}
                >
                  {state.region} India
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-saffron text-lg mb-2 flex items-center gap-2">
                      🍛 Famous Food
                    </h3>
                    <p className="text-gray-700">{state.famousFood}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-peacock text-lg mb-2 flex items-center gap-2">
                      🎉 Biggest Festival
                    </h3>
                    <p className="text-gray-700">{state.biggestFestival}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-maroon text-lg mb-2 flex items-center gap-2">
                      ⭐ Speciality
                    </h3>
                    <p className="text-gray-700">{state.speciality}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className="font-semibold text-gold text-lg mb-3 flex items-center gap-2">
                    📜 History & Heritage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{state.history}</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-peacock text-lg mb-4">Quick Facts</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">🏛️</div>
                    <p className="text-sm font-medium">Capital</p>
                    <p className="text-xs text-gray-600">{state.capital}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">🌍</div>
                    <p className="text-sm font-medium">Region</p>
                    <p className="text-xs text-gray-600">{state.region}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">🍽️</div>
                    <p className="text-sm font-medium">Cuisine</p>
                    <p className="text-xs text-gray-600">{state.famousFood}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">🎊</div>
                    <p className="text-sm font-medium">Festival</p>
                    <p className="text-xs text-gray-600">{state.biggestFestival}</p>
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