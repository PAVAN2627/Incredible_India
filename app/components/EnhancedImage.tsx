'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface EnhancedImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  overlayIcon?: string
  overlayText?: string
}

export default function EnhancedImage({ 
  src, 
  alt, 
  fallbackSrc, 
  className = '', 
  overlayIcon,
  overlayText 
}: EnhancedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const imageSources = [
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop', // India general
    'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop', // Taj Mahal
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop', // Festival
    'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&h=400&fit=crop', // Indian food
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', // Kerala backwaters
    'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop', // Rajasthan
  ]

  const getRandomImage = () => {
    return imageSources[Math.floor(Math.random() * imageSources.length)]
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: isLoaded ? 1 : 1.1, opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageError ? (fallbackSrc || getRandomImage()) : src}')`
          }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setImageError(true)}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Overlay Content */}
      {(overlayIcon || overlayText) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            {overlayIcon && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-2"
              >
                {overlayIcon}
              </motion.div>
            )}
            {overlayText && (
              <p className="text-lg font-semibold">{overlayText}</p>
            )}
          </div>
        </div>
      )}

      {/* Loading Shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
    </div>
  )
}