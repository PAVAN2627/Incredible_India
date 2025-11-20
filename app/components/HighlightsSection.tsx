'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function HighlightsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const highlights = [
    {
      title: 'States of India',
      description: 'Explore unique culture, cuisine, and festivals of every Indian state',
      icon: '🗺️',
      href: '/states',
      color: 'from-indigo-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop'
    },
    {
      title: 'Festivals of Joy',
      description: 'Experience vibrant celebrations of Diwali, Holi, and regional festivals',
      icon: '🎉',
      href: '/festivals',
      color: 'from-saffron to-gold',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      title: 'Majestic Heritage',
      description: 'Discover architectural marvels from Taj Mahal to ancient temples',
      icon: '🏛️',
      href: '/heritage',
      color: 'from-peacock to-blue-600',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop'
    },
    {
      title: 'Culinary Delights',
      description: 'Savor diverse flavors from North to South, East to West',
      icon: '🍛',
      href: '/cuisine',
      color: 'from-maroon to-red-600',
      image: 'https://images.unsplash.com/photo-1596401682749-e5cf83c8c8d4?w=400&h=300&fit=crop'
    },
    {
      title: 'Arts & Culture',
      description: 'Explore classical dances, music, and traditional art forms',
      icon: '🎭',
      href: '/arts',
      color: 'from-green-600 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop'
    },
    {
      title: 'Historical Timeline',
      description: 'Journey through millennia of rich history and traditions',
      icon: '📜',
      href: '/timeline',
      color: 'from-purple-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-maroon mb-6">
            Explore India's Treasures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the heart of India through these immersive experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <Link href={item.href}>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80`} />
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                    <div>
                      <motion.div
                        animate={{ 
                          scale: hoveredCard === index ? 1.2 : 1,
                          rotate: hoveredCard === index ? 10 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-5xl mb-4"
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="font-playfair text-2xl font-bold mb-4">
                        {item.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    <motion.div
                      animate={{ x: hoveredCard === index ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center text-white/80 group-hover:text-white transition-colors"
                    >
                      <span className="mr-2">Explore</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}