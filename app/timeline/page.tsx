'use client'
import { motion } from 'framer-motion'
import TimelineCard from '../components/TimelineCard'
import TraditionCard from '../components/TraditionCard'

export default function Timeline() {
  const historicalPeriods = [
    {
      period: 'Indus Valley Civilization',
      years: '3300-1300 BCE',
      description: 'One of the world\'s earliest urban civilizations with advanced drainage systems',
      detailedHistory: 'The Indus Valley Civilization stands as one of the world\'s most advanced ancient urban cultures, contemporary with the Egyptian and Mesopotamian civilizations. Flourishing across the Indus River valley in present-day Pakistan and northwest India, this civilization demonstrated remarkable urban planning with grid-pattern streets, advanced drainage systems, and standardized brick sizes. Archaeological evidence reveals a sophisticated society engaged in extensive trade networks extending to Mesopotamia and Central Asia. Despite their advanced material culture, their writing system remains undeciphered, creating an enduring mystery about their language, beliefs, and governance structures. The civilization\'s gradual decline around 1300 BCE remains one of history\'s unresolved questions, though environmental and geological changes likely played significant roles.',
      achievements: ['Urban planning', 'Drainage systems', 'Standardized weights', 'Trade networks'],
      icon: '🏛️',
      color: '#8B4513',
      image: 'https://images.unsplash.com/photo-1577720643272-265f434e3b84?w=800',
      cardImage: 'https://images.unsplash.com/photo-1577720562004-ae8c80e0c2aa?w=500'
    },
    {
      period: 'Vedic Period',
      years: '1500-500 BCE',
      description: 'Foundation of Hindu philosophy, literature, and social structure',
      detailedHistory: 'The Vedic Period, spanning from the arrival of Indo-Aryans into the Indian subcontinent until the rise of the Buddha, laid the spiritual and intellectual foundations for Indian civilization. During this era, the four Vedas (Rigveda, Yajurveda, Samaveda, and Atharvaveda) were composed and transmitted orally, establishing the basis of Hindu philosophy, cosmology, and ethical systems. The period witnessed the development of the Sanskrit language, the flourishing of sacrificial rituals, and the gradual emergence of the social hierarchies that would become the caste system. The Vedic texts contain humanity\'s earliest philosophical explorations of consciousness, existence, and the nature of reality. By the Upanishadic period, Vedic thought had evolved into sophisticated metaphysical systems emphasizing the concept of Brahman (ultimate reality) and the goal of moksha (liberation), profoundly influencing Indian thought for millennia.',
      achievements: ['Vedas composition', 'Sanskrit language', 'Caste system', 'Yoga origins'],
      icon: '📜',
      color: '#FFD700',
      image: 'https://images.unsplash.com/photo-1570144611937-2b4e32a8d37a?w=800',
      cardImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500'
    },
    {
      period: 'Maurya Empire',
      years: '322-185 BCE',
      description: 'First pan-Indian empire under Chandragupta and Ashoka',
      detailedHistory: 'The Maurya Empire represents India\'s first attempt at political unification under a centralized authority. Founded by Chandragupta Maurya after overthrowing the Nanda dynasty, the empire rapidly expanded to encompass most of the Indian subcontinent. Under Emperor Ashoka (304-232 BCE), the Mauryan empire reached its zenith, establishing a sophisticated administrative system with appointed officials, tax collectors, and military commanders spread across the realm. Ashoka\'s revolutionary conversion to Buddhism and his subsequent spread of Buddhist teachings throughout Asia marked a watershed moment in world history. His Rock Edicts, inscribed across his empire, represent some of history\'s earliest public declarations of state policy and moral principles. The Mauryan period witnessed advances in trade, urban development, and administrative organization that would influence Indian governance for centuries.',
      achievements: ['Political unification', 'Buddhism spread', 'Edicts of Ashoka', 'Trade expansion'],
      icon: '👑',
      color: '#800000',
      image: 'https://images.unsplash.com/photo-1569163139625-0f4517e36f51?w=800',
      cardImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500'
    },
    {
      period: 'Gupta Empire',
      years: '320-550 CE',
      description: 'Golden Age of Indian culture, science, and mathematics',
      detailedHistory: 'The Gupta Empire is widely regarded as the Golden Age of Indian civilization, a period of extraordinary cultural, scientific, and artistic achievement. Established by Sri Gupta and expanded by Chandragupta I and Samudragupta, the empire created conditions for an intellectual renaissance. The mathematician Aryabhata developed the concept of zero and laid foundations for decimal mathematics and trigonometry, transforming mathematics forever. Kalidasa produced plays and poetry of unmatched literary brilliance, while medical advances under scholars like Sushruta revolutionized surgical techniques. Hindu, Buddhist, and Jain scholars engaged in intense philosophical debates while simultaneously pushing boundaries of scientific inquiry. The court patronage of arts, literature, and learning created an environment where human intellectual potential flourished. This period\'s achievements in mathematics, astronomy, medicine, and literature established standards that influenced the world for centuries.',
      achievements: ['Zero invention', 'Decimal system', 'Classical literature', 'Scientific advances'],
      icon: '🔢',
      color: '#FF9933',
      image: 'https://images.unsplash.com/photo-1523971575743-5c1f1b2f1f1f?w=800',
      cardImage: 'https://images.unsplash.com/photo-1509439773091-7b1b1a85aeb5?w=500'
    },
    {
      period: 'Mughal Empire',
      years: '1526-1857',
      description: 'Islamic rule bringing architectural marvels and cultural synthesis',
      detailedHistory: 'The Mughal Empire, established by Babur and consolidated by Akbar, represents a remarkable synthesis of Persian-Islamic and Indian cultural traditions. Under emperors like Akbar, the empire developed sophisticated administrative systems, legal codes respecting diverse populations, and policies of religious tolerance unusual for their time. The Mughal period produced some of the world\'s most iconic architectural monuments, including the Taj Mahal, Red Fort, and countless mosques and gardens that blend Islamic and Indian aesthetic principles. The court became a center of artistic patronage, supporting miniature painting, calligraphy, poetry, and music that created a distinctive Indo-Islamic culture. Despite its later decline and eventual dissolution under British pressure, the Mughal legacy profoundly shaped Indian culture, language (Urdu), architecture, and cuisine. The empire\'s administrative innovations and cultural achievements demonstrated how different religious and ethnic traditions could coexist and flourish together.',
      achievements: ['Taj Mahal', 'Red Fort', 'Miniature paintings', 'Cultural fusion'],
      icon: '🕌',
      color: '#0066B2',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
      cardImage: 'https://images.unsplash.com/photo-1545776490-64f4908e2f77?w=500'
    },
    {
      period: 'British India',
      years: '1858-1947',
      description: 'Colonial period leading to independence movement',
      detailedHistory: 'The British colonial period, lasting nearly two centuries, fundamentally transformed Indian society while simultaneously sparking a nationalist movement that would reshape world history. The British East India Company\'s commercial interests evolved into direct imperial rule following the 1857 Rebellion, establishing an administrative system that exploited Indian resources while introducing modern infrastructure like railways and telegraph systems. The colonial period witnessed the emergence of modern Indian nationalism, as educated Indian intellectuals began challenging colonial rule through both peaceful and militant means. The Indian National Congress, founded in 1885, became the vehicle for independence, while visionary leaders like Mahatma Gandhi transformed independence struggle into a mass movement through nonviolent resistance. The period also saw the renaissance of Indian intellectual and cultural life, with figures like Rammohan Roy, Keshab Chandra Sen, and Rabindranath Tagore reinterpreting Indian traditions for modern times. Indian independence in 1947 inspired liberation movements worldwide and demonstrated the power of nonviolent resistance.',
      achievements: ['Railway system', 'Telegraph', 'Independence movement', 'Modern education'],
      icon: '🚂',
      color: '#4B0082',
      image: 'https://images.unsplash.com/photo-1570144611937-2b4e32a8d37a?w=800',
      cardImage: 'https://images.unsplash.com/photo-1599667862592-d3da39d65e72?w=500'
    },
    {
      period: 'Modern India',
      years: '1947-Present',
      description: 'Independent nation becoming a global power',
      detailedHistory: 'Independent India, under the vision of Jawaharlal Nehru and guided by the visionary Constitution drafted by Dr. B.R. Ambedkar, established itself as the world\'s largest democracy. Despite facing enormous challenges of poverty, illiteracy, communal tensions, and border conflicts, India chose the democratic path, embracing universal adult suffrage, secularism, and pluralism. The country invested heavily in science and education, launching its space program, developing nuclear capabilities, and producing world-class scientists and engineers. The economic liberalization of 1991 transformed India into one of the world\'s fastest-growing economies, with the IT industry establishing India as a technological powerhouse. Modern India has maintained its multicultural and multireligious character while adapting to globalization. Today, India stands as the world\'s most populous democracy, a major global economic player, a space-faring nation, and a cultural ambassador to the world. The journey from colonial subjugation to democratic superpower represents one of history\'s remarkable transformations.',
      achievements: ['Democracy', 'Space program', 'IT revolution', 'Economic growth'],
      icon: '🚀',
      color: '#228B22',
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800',
      cardImage: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500'
    }
  ]

  const traditions = [
    { name: 'Namaste', description: 'Traditional greeting with joined palms', icon: '🙏', significance: 'Respect and humility' },
    { name: 'Yoga', description: 'Ancient practice for physical and mental well-being', icon: '🧘', significance: 'Mind-body harmony' },
    { name: 'Ayurveda', description: 'Traditional medicine system', icon: '🌿', significance: 'Holistic healing' },
    { name: 'Saree', description: 'Traditional women\'s garment', icon: '👘', significance: 'Grace and elegance' },
    { name: 'Mehendi', description: 'Henna art on hands and feet', icon: '✋', significance: 'Celebration and beauty' },
    { name: 'Rangoli', description: 'Decorative floor art', icon: '🎨', significance: 'Welcome and prosperity' }
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 py-20 overflow-hidden">
        {/* Floating Historical Elements */}
        <motion.div
          animate={{ y: [-30, 30, -30], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-30"
        >
          📜
        </motion.div>
        <motion.div
          animate={{ y: [25, -25, 25], rotate: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
          className="absolute top-32 right-20 text-5xl opacity-30"
        >
          ⏳
        </motion.div>
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 text-4xl opacity-30"
        >
          🏛️
        </motion.div>
        <motion.div
          animate={{ y: [28, -28, 28], rotate: [0, -18, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-32 right-10 text-5xl opacity-30"
        >
          👑
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-playfair text-5xl md:text-6xl font-bold text-maroon mb-6"
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(128,0,0,0.3)',
                  '0 0 40px rgba(255,153,51,0.5)',
                  '0 0 20px rgba(0,102,178,0.4)',
                  '0 0 20px rgba(128,0,0,0.3)'
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Timeline of India
            </motion.span>
            <motion.span
              animate={{ 
                scale: [1, 1.3, 1], 
                rotate: [0, 25, 0] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block ml-4"
            >
              📜
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            Journey through 5000 years of rich history, culture, and timeless traditions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center space-x-4 flex-wrap gap-2"
          >
            {['📜', '⏳', '🏛️', '👑', '🗿', '⚙️'].map((emoji, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -18, 0],
                  rotate: [0, 12, 0]
                }}
                transition={{ 
                  duration: 2.8, 
                  repeat: Infinity, 
                  delay: index * 0.3 
                }}
                className="text-4xl"
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
          >
            Historical Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-saffron via-peacock to-maroon"></div>
            
            {historicalPeriods.map((period, index) => (
              <TimelineCard key={period.period} period={period} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Traditions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
          >
            Timeless Traditions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <TraditionCard key={tradition.name} tradition={tradition} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-saffron/10 to-peacock/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-maroon mb-12"
          >
            Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: 'Vasudhaiva Kutumbakam', meaning: 'The world is one family', icon: '🌍' },
              { value: 'Ahimsa', meaning: 'Non-violence', icon: '☮️' },
              { value: 'Dharma', meaning: 'Righteous duty', icon: '⚖️' },
              { value: 'Seva', meaning: 'Selfless service', icon: '🤝' }
            ].map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-maroon mb-2">{item.value}</h3>
                <p className="text-gray-600">{item.meaning}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}