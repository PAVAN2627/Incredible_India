'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import MonumentCard from '../components/MonumentCard'

export default function Heritage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const monuments = [
    {
      name: 'Taj Mahal',
      icon: '🕌',
      location: 'Agra, Uttar Pradesh',
      period: 'Mughal Era (1632-1653)',
      description: 'A symbol of eternal love, this ivory-white marble mausoleum was built by Emperor Shah Jahan for his wife Mumtaz Mahal.',
      detailedHistory: 'Built between 1632-1653, the Taj Mahal stands as an unparalleled monument to eternal love and one of the world\'s most architecturally perfect structures.',
      facts: ['UNESCO World Heritage Site', 'One of the New Seven Wonders', '20,000 artisans worked on it', 'Changes color throughout the day'],
      dynasty: 'Mughal',
      image: '/images/monuments/tajmahal.jpeg',
      cardImage: '/images/monuments/tajmahal.jpeg'
    },
    {
      name: 'Red Fort',
      icon: '🏰',
      location: 'Delhi',
      period: 'Mughal Era (1638-1648)',
      description: 'The main residence of the Mughal emperors, this red sandstone fort complex served as the political center of Mughal rule.',
      detailedHistory: 'Built by Emperor Shah Jahan between 1638-1648, the Red Fort represents the architectural grandeur and military might of the Mughal Empire.',
      facts: ['UNESCO World Heritage Site', 'Independence Day speeches held here', 'Covers 254 acres', 'Built by Shah Jahan'],
      dynasty: 'Mughal',
      image: '/images/monuments/redfort.jpeg',
      cardImage: '/images/monuments/redfort.jpeg'
    },
    {
      name: 'Hampi',
      icon: '🏛️',
      location: 'Karnataka',
      period: 'Vijayanagara Empire (14th-16th century)',
      description: 'The ruins of the magnificent Vijayanagara Empire, showcasing incredible Dravidian architecture and temple complexes.',
      detailedHistory: 'Hampi stands as a testament to the artistic, architectural, and engineering prowess of the Vijayanagara Empire.',
      facts: ['UNESCO World Heritage Site', 'Once the second largest city in the world', '1,600 monuments', 'Vittala Temple with musical pillars'],
      dynasty: 'Vijayanagara',
      image: '/images/monuments/hampi.jpeg',
      cardImage: '/images/monuments/hampi.jpeg'
    },
    {
      name: 'Ajanta Caves',
      icon: '⛩️',
      location: 'Maharashtra',
      period: 'Buddhist Era (2nd century BCE - 6th century CE)',
      description: 'Rock-cut Buddhist cave monuments featuring exquisite paintings and sculptures depicting the life of Buddha.',
      detailedHistory: 'The Ajanta Caves represent one of the earliest examples of Indian rock-cut architecture and Buddhist monastic art.',
      facts: ['UNESCO World Heritage Site', '30 rock-cut caves', 'Masterpieces of Buddhist art', 'Rediscovered in 1819'],
      dynasty: 'Buddhist',
      image: '/images/monuments/Ajanta Caves.jpeg',
      cardImage: '/images/monuments/Ajanta Caves.jpeg'
    },
    {
      name: 'Qutub Minar',
      icon: '📍',
      location: 'Delhi',
      period: 'Delhi Sultanate (1192-1220)',
      description: 'The tallest brick minaret in the world, representing the beginning of Muslim rule in India.',
      detailedHistory: 'Constructed between 1192-1220, the Qutub Minar marks the beginning of Muslim rule in India.',
      facts: ['UNESCO World Heritage Site', '73 meters tall', '379 steps to the top', 'Built with red sandstone and marble'],
      dynasty: 'Delhi Sultanate',
      image: '/images/monuments/Qutub Minar.jpeg',
      cardImage: '/images/monuments/Qutub Minar.jpeg'
    },
    {
      name: 'Konark Sun Temple',
      icon: '☀️',
      location: 'Odisha',
      period: 'Eastern Ganga Dynasty (13th century)',
      description: 'A magnificent temple dedicated to the Sun God, designed as a colossal chariot with intricately carved wheels.',
      detailedHistory: 'Built in the 13th century by King Narasimhadeva I of the Eastern Ganga dynasty.',
      facts: ['UNESCO World Heritage Site', 'Shaped like a chariot', '24 wheels carved in stone', 'Architectural marvel of Kalinga style'],
      dynasty: 'Eastern Ganga',
      image: '/images/monuments/Konark Sun Temple.jpeg',
      cardImage: '/images/monuments/Konark Sun Temple.jpeg'
    },
    {
      name: 'Golden Temple',
      icon: '✨',
      location: 'Amritsar, Punjab',
      period: 'Sikh Era (1604)',
      description: 'The holiest shrine of Sikhism, covered in gold and surrounded by a sacred pool.',
      detailedHistory: 'Built by Guru Arjan Dev in 1604, the Golden Temple is the spiritual center of Sikhism.',
      facts: ['Harmandir Sahib', 'Serves 100,000 free meals daily', 'Gold-plated dome', 'Open to all religions'],
      dynasty: 'Sikh',
      image: '/images/monuments/Golden Temple.jpeg',
      cardImage: '/images/monuments/Golden Temple.jpeg'
    },
    {
      name: 'Khajuraho Temples',
      icon: '🎨',
      location: 'Madhya Pradesh',
      period: 'Chandela Dynasty (950-1050 CE)',
      description: 'Famous for intricate sculptures and erotic art, representing medieval Indian architecture.',
      detailedHistory: 'Built by the Chandela dynasty, these temples showcase exquisite stone carvings and sculptures.',
      facts: ['UNESCO World Heritage Site', '85 original temples', 'Only 25 survive today', 'Exquisite stone carvings'],
      dynasty: 'Chandela',
      image: '/images/monuments/Khajuraho Temples.jpeg',
      cardImage: '/images/monuments/Khajuraho Temples.jpeg'
    },
    {
      name: 'Meenakshi Temple',
      icon: '🏯',
      location: 'Madurai, Tamil Nadu',
      period: 'Pandyan Dynasty (6th century CE)',
      description: 'Historic Hindu temple with towering gopurams and intricate sculptures.',
      detailedHistory: 'Ancient temple dedicated to Goddess Meenakshi with magnificent Dravidian architecture.',
      facts: ['14 colorful gopurams', '33,000 sculptures', 'Hall of 1000 pillars', 'Living temple with daily rituals'],
      dynasty: 'Pandyan',
      image: '/images/monuments/Meenakshi Temple.jpeg',
      cardImage: '/images/monuments/Meenakshi Temple.jpeg'
    },
    {
      name: 'Charminar',
      icon: '🌃',
      location: 'Hyderabad, Telangana',
      period: 'Qutb Shahi Dynasty (1591)',
      description: 'Iconic monument with four grand arches, symbol of Hyderabad city.',
      detailedHistory: 'Built by Sultan Muhammad Quli Qutb Shah as the centerpiece of Hyderabad.',
      facts: ['Built by Sultan Muhammad Quli Qutb Shah', '56 meters tall', '4 minarets', 'Bustling market around it'],
      dynasty: 'Qutb Shahi',
      image: '/images/monuments/Charminar.jpeg',
      cardImage: '/images/monuments/Charminar.jpeg'
    }
  ]

  const dynasties = [
    { name: 'Maurya Empire', period: '322-185 BCE', color: '#8B4513' },
    { name: 'Gupta Empire', period: '320-550 CE', color: '#FFD700' },
    { name: 'Mughal Empire', period: '1526-1857', color: '#800000' },
    { name: 'Maratha Empire', period: '1674-1818', color: '#FF9933' },
    { name: 'British India', period: '1858-1947', color: '#0066B2' }
  ]

  return (
    <main className="min-h-screen pt-16">
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-maroon/30 to-gold/30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        {/* Floating Heritage Elements */}
        <motion.div
          animate={{ y: [-30, 30, -30], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🏛️
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-32 right-20 text-5xl opacity-20"
        >
          🕊
        </motion.div>
        <motion.div
          animate={{ y: [-25, 25, -25], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 text-4xl opacity-20"
        >
          🗿
        </motion.div>
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-32 right-10 text-5xl opacity-20"
        >
          ⛩️
        </motion.div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-playfair text-6xl md:text-7xl font-bold text-white mb-6"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(255,215,0,0.5)',
                    '0 0 40px rgba(255,153,51,0.7)',
                    '0 0 20px rgba(255,215,0,0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Heritage & Monuments
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              Journey through millennia of architectural marvels and historical treasures
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex justify-center space-x-6"
            >
              {['🏛️', '🕊', '🗿', '⛩️', '🏰'].map((emoji, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: index * 0.3 
                  }}
                  className="text-5xl"
                >
                  {emoji}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
          >
            Architectural Marvels
          </motion.h2>

          <div className="space-y-20">
            {monuments.map((monument, index) => (
              <MonumentCard key={monument.name} monument={monument} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
          >
            Dynasty Timeline
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-saffron via-peacock to-maroon"></div>
            
            {dynasties.map((dynasty, index) => (
              <motion.div
                key={dynasty.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-center justify-center mb-16"
              >
                <div 
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 max-w-md"
                  style={{ borderColor: dynasty.color }}
                >
                  <h3 className="font-playfair text-xl font-bold mb-2" style={{ color: dynasty.color }}>
                    {dynasty.name}
                  </h3>
                  <p className="text-gray-600 font-semibold">{dynasty.period}</p>
                </div>
                
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg"
                  style={{ backgroundColor: dynasty.color }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}