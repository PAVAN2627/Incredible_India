'use client'
import { motion } from 'framer-motion'

interface Period {
  period: string
  years: string
  description: string
  detailedHistory: string
  achievements: string[]
  icon: string
  color: string
  image: string
  cardImage: string
}

interface TimelineCardProps {
  period: Period
  index: number
}

export default function TimelineCard({ period, index }: TimelineCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
            <span className="text-3xl">{period.icon}</span>
            <h3 className="font-playfair text-2xl font-bold" style={{ color: period.color }}>
              {period.period}
            </h3>
          </div>
          
          <p className="text-lg font-semibold text-gray-600 mb-3">{period.years}</p>
          <p className="text-gray-700 mb-4 leading-relaxed">{period.description}</p>

          {/* Detailed History */}
          <div className="mb-4 p-3 bg-gradient-to-r from-maroon/10 to-maroon/5 rounded-lg border-l-4" style={{ borderColor: period.color }}>
            <h4 className="font-bold mb-2 flex items-center gap-2" style={{ color: period.color }}>
              📚 Deep Dive
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {period.detailedHistory}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-peacock mb-2">Key Achievements:</h4>
            <ul className={`space-y-1 ${isEven ? 'text-right' : 'text-left'}`}>
              {period.achievements.map((achievement, i) => (
                <li key={i} className={`text-gray-600 flex items-center ${isEven ? 'justify-end' : 'justify-start'}`}>
                  {!isEven && <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>}
                  {achievement}
                  {isEven && <span className="w-2 h-2 bg-gold rounded-full ml-2"></span>}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
        style={{ backgroundColor: period.color }}
      ></motion.div>
      
      <div className="w-1/2"></div>
    </motion.div>
  )
}