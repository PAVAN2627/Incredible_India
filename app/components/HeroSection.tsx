'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop')",
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-6xl opacity-30"
        >
          🪷
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 text-5xl opacity-40"
        >
          🪔
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -35, 0],
            x: [0, 15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-40 left-20 text-5xl opacity-35"
        >
          🦚
        </motion.div>

        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 text-4xl opacity-25"
        >
          🏛️
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 right-10 text-4xl opacity-30"
        >
          🕉️
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-playfair text-7xl md:text-9xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-saffron via-gold to-peacock bg-clip-text text-transparent">
                Incredible
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">India</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl font-medium">
              {['Unity in Diversity', 'Rich Culture', 'Ancient History', 'Timeless Heritage'].map((text, index) => (
                <motion.span 
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-white/90 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default"
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Embark on a mesmerizing journey through India's rich tapestry of traditions, 
            festivals, monuments, and timeless heritage spanning over 5000 years
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/states">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-saffron to-gold text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-saffron/25 transition-all duration-300"
              >
                Explore States 🗺️
              </motion.button>
            </Link>
            <Link href="/heritage">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Discover Heritage 🏛️
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}