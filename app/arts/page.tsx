'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ArtCard from '../components/ArtCard'
import ArtModal from '../components/ArtModal'

export default function Arts() {
  const [selectedArt, setSelectedArt] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (art: any) => {
    setSelectedArt({
      ...art,
      history: getArtHistory(art.name),
      techniques: getArtTechniques(art.name),
      masters: getArtMasters(art.name),
      significance: getArtSignificance(art.name)
    })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArt(null)
  }

  const getArtHistory = (artName: string) => {
    const histories: { [key: string]: string } = {
      'Madhubani': 'Madhubani painting originated in the Mithila region of Bihar and Nepal. This ancient art form dates back to the Ramayana period and was traditionally practiced by women.',
      'Bharatanatyam': 'Bharatanatyam is one of the oldest classical dance forms of India, originating in Tamil Nadu. It was traditionally performed in Hindu temples as a form of worship.',
      'Hindustani': 'Hindustani classical music evolved in North India during the medieval period, influenced by Persian and Central Asian musical traditions.',
      'Sitar': 'The sitar evolved from the Persian setar in the 18th century. It became popular during the Mughal period and was refined by master musicians.'
    }
    return histories[artName] || 'Rich historical tradition passed down through generations.'
  }

  const getArtTechniques = (artName: string) => {
    const techniques: { [key: string]: string[] } = {
      'Madhubani': ['Natural pigments', 'Geometric patterns', 'Religious motifs', 'Line work'],
      'Bharatanatyam': ['Adavus (basic steps)', 'Mudras (hand gestures)', 'Abhinaya (expressions)', 'Rhythmic patterns'],
      'Hindustani': ['Ragas', 'Talas', 'Improvisation', 'Alap-Jod-Jhala structure'],
      'Sitar': ['Meend (gliding)', 'Gamak (ornaments)', 'Jhala (rapid plucking)', 'Sympathetic strings']
    }
    return techniques[artName] || ['Traditional methods', 'Cultural practices', 'Artistic expression']
  }

  const getArtMasters = (artName: string) => {
    const masters: { [key: string]: string[] } = {
      'Madhubani': ['Sita Devi', 'Ganga Devi', 'Mahasundari Devi'],
      'Bharatanatyam': ['Rukmini Devi', 'Balasaraswati', 'Yamini Krishnamurthy'],
      'Hindustani': ['Ustad Allauddin Khan', 'Pandit Ravi Shankar', 'Ustad Vilayat Khan'],
      'Sitar': ['Pandit Ravi Shankar', 'Ustad Vilayat Khan', 'Pandit Nikhil Banerjee']
    }
    return masters[artName] || ['Renowned practitioners', 'Master artists']
  }

  const getArtSignificance = (artName: string) => {
    const significance: { [key: string]: string } = {
      'Madhubani': 'Represents the cultural identity of Mithila region and empowers rural women through art.',
      'Bharatanatyam': 'Embodies spiritual devotion and preserves ancient Indian cultural traditions.',
      'Hindustani': 'Represents the synthesis of Indian and Persian musical traditions.',
      'Sitar': 'Symbol of Indian classical music recognized worldwide.'
    }
    return significance[artName] || 'Important part of Indian cultural heritage.'
  }
  const artForms = [
    {
      category: 'Paintings',
      items: [
        { 
          name: 'Madhubani', 
          origin: 'Bihar', 
          description: 'Colorful folk art with geometric patterns', 
          icon: '🎨',
          detailedHistory: 'Madhubani art, also known as Mithila painting, originates from the Mithila region of Bihar and Jharkhand. This ancient art form, with roots tracing back to the Vedic period, was traditionally created by women during auspicious occasions and rituals. Characterized by intricate geometric patterns, religious iconography, and depictions of nature and mythology, Madhubani paintings feature bright natural pigments and bold outlines. The art form, historically restricted to walls and floors during marriages and religious ceremonies, has evolved to canvas and paper, gaining international recognition while maintaining its distinctive style and cultural significance.',
          image: '/images/art/Madhubani.jpeg',
          cardImage: '/images/art/Madhubani.jpeg'
        },
        { 
          name: 'Warli', 
          origin: 'Maharashtra', 
          description: 'Tribal art with simple geometric shapes', 
          icon: '🖼️',
          detailedHistory: 'Warli art represents one of India\'s most ancient tribal art forms, originating from the Warli tribe in the western ghats of Maharashtra. Created primarily by tribal women, Warli paintings feature simple geometric shapes (circles, triangles, and lines) rendered in white pigment on mud walls and surfaces. The art form served ritual and ceremonial purposes, depicting village life, agriculture, animals, and religious beliefs. The artistic philosophy emphasizes the balance between empty and filled spaces, creating a unique aesthetic that has captivated modern artists. Today, Warli art represents a bridge between tribal heritage and contemporary art, preserving the cultural identity and artistic expression of the Warli community.',
          image: '/images/art/Warli.jpeg',
          cardImage: '/images/art/Warli.jpeg'
        },
        { 
          name: 'Kalamkari', 
          origin: 'Andhra Pradesh', 
          description: 'Hand-painted textile art', 
          icon: '🖌️',
          detailedHistory: 'Kalamkari, meaning "pen work" in Persian, is an ancient hand-painted textile art form from Andhra Pradesh that flourished under Mughal patronage. Created using natural dyes and traditional techniques, Kalamkari paintings feature elaborate floral designs, mythological narratives, and intricate patterns applied to cotton fabric. The art form requires exceptional skill, with artists using natural pigments derived from plants, minerals, and vegetable matter to create vibrant, long-lasting colors. Recognized as a UNESCO Craft Heritage, Kalamkari represents the synthesis of Persian, Indian, and local artistic traditions, with each piece telling stories from mythology while showcasing the mastery of the artisan.',
          image: '/images/art/Kalamkari.jpeg',
          cardImage: '/images/art/Kalamkari.jpeg'
        },
        { 
          name: 'Tanjore', 
          origin: 'Tamil Nadu', 
          description: 'Gold foil paintings of deities', 
          icon: '✨',
          detailedHistory: 'Tanjore painting, originating from the Thanjavur region of Tamil Nadu, represents a classical art form that emerged during the Maratha rule in the 17th century. Distinguished by the use of gold foil, bright colors, and religious iconography, Tanjore paintings primarily depict Hindu deities with exceptional detail and spiritual reverence. The unique technique involves applying gold foil to wooden base using natural gum, creating a luminous, three-dimensional effect that evokes divinity and ethereal beauty. Each painting is a labor-intensive masterpiece, combining the principles of composition learned from the Chola temples with Persian and European artistic influences, representing the artistic excellence and devotional spirit of South Indian artisans.',
          image: '/images/art/tanjore.jpeg',
          cardImage: '/images/art/tanjore.jpeg'
        }
      ]
    },
    {
      category: 'Dance Forms',
      items: [
        { 
          name: 'Bharatanatyam', 
          origin: 'Tamil Nadu', 
          description: 'Classical dance with precise movements', 
          icon: '💃',
          detailedHistory: 'Bharatanatyam, one of the oldest classical dance forms of India, originated in the temples of Tamil Nadu where it was performed by devadasis (temple dancers) as an offering to the divine. The dance form, rooted in ancient Sanskrit texts on dance (Natyashastra), combines precise hand gestures (mudras), rhythmic foot movements (tala), and facial expressions to narrate stories of mythology and spiritual devotion. Each movement, from the slightest hand gesture to the footwork, carries deep meaning and aesthetic significance, creating a complete visual language. Revived from near extinction during the independence movement, Bharatanatyam remains a symbol of Indian cultural pride and classical excellence, performed in temples, concert halls, and international stages.',
          image: '/images/art/Bharatanatyam.jpeg',
          cardImage: '/images/art/Bharatanatyam.jpeg'
        },
        { 
          name: 'Kathak', 
          origin: 'North India', 
          description: 'Storytelling through graceful spins', 
          icon: '🌀',
          detailedHistory: 'Kathak, the classical dance form of North India, evolved in the courts of Mughal emperors and the temples of Mathura and Vrindavan. The dance form, whose name derives from the Sanskrit word for "story," originated as a narrative art performed by wandering bards (kathakars) who recited stories while dancing. Characterized by rapid spins (chakris), intricate footwork, hand gestures, and facial expressions, Kathak combines Hindu devotional themes with Persian court aesthetics. The form emphasizes the interplay between movement and music, with dancers improvising to live music, creating a dynamic dialogue between artist and musician that celebrates the joy and complexity of human expression.',
          image: '/images/art/Kathak.jpg',
          cardImage: '/images/art/Kathak.jpg'
        },
        { 
          name: 'Odissi', 
          origin: 'Odisha', 
          description: 'Temple dance with fluid movements', 
          icon: '🕺',
          detailedHistory: 'Odissi, the classical dance form of Odisha, originated in the temples dedicated to Lord Jagannath, with its aesthetic principles derived from the sculptures adorning these ancient temples. The dance form, performed primarily by female dancers (Maharis), combines spiritual devotion with artistic excellence, depicting stories of Krishna and other Hindu deities. Characterized by fluid, undulating movements, gentle hand gestures, and a graceful posture called tribhanga (triple bend), Odissi creates an ethereal quality that emphasizes the sensuous and spiritual dimensions of movement. With influences from sculpture, music, and philosophical concepts of divine love, Odissi remains a living tradition that celebrates the spiritual heritage of Odisha.',
          image: '/images/art/Odissi.jpeg',
          cardImage: '/images/art/Odissi.jpeg'
        },
        { 
          name: 'Kathakali', 
          origin: 'Kerala', 
          description: 'Dramatic dance with elaborate makeup', 
          icon: '🎭',
          detailedHistory: 'Kathakali, originating from Kerala in the 16th century, represents one of the world\'s most elaborate and visually stunning dance-dramas. The art form combines dance, music, pantomime, and elaborate costumes and makeup (mukhathezhuthu), creating a complete theatrical experience that narrates stories from Hindu epics. Performers undergo years of rigorous training to master the intricate hand gestures (mudras), facial expressions, and movements that convey emotions and meanings in the absence of spoken dialogue. The distinctive green makeup, elaborately layered costumes, and headpieces create characters of mythological proportions, while the music and rhythmic patterns drive the narrative. Kathakali represents the height of Kerala\'s artistic tradition and remains a symbol of Indian theatrical sophistication.',
          image: '/images/art/Kathakali.jpeg',
          cardImage: '/images/art/Kathakali.jpeg'
        }
      ]
    },
    {
      category: 'Music',
      items: [
        { 
          name: 'Hindustani', 
          origin: 'North India', 
          description: 'Classical music with improvisation', 
          icon: '🎵',
          detailedHistory: 'Hindustani classical music, developed in the courts of North India over centuries, represents one of the world\'s most complex and improvisational musical systems. The form utilizes the raga system, where each raga is a melodic framework with specific ascending and descending note sequences, associated emotions, and prescribed times for performance. Musicians improvise within these frameworks, creating unique interpretations while maintaining the raga\'s essential character. With instruments like sitar, sarangi, and vocal styles, Hindustani music emphasizes emotional expression, spiritual depth, and the relationship between artist and audience. The tradition remains alive through guru-shishya relationships, preserving knowledge while allowing artistic innovation and personal interpretation.',
          image: '/images/art/Hindustani.jpeg',
          cardImage: '/images/art/Hindustani.jpeg'
        },
        { 
          name: 'Carnatic', 
          origin: 'South India', 
          description: 'Structured classical compositions', 
          icon: '🎶',
          detailedHistory: 'Carnatic music, the classical music tradition of South India, developed independently from Hindustani music and represents a more compositionally structured system. Built on the raga and tala frameworks, Carnatic music emphasizes the performance of composed pieces (kritis) alongside improvisations, creating a balance between structure and creativity. The tradition, documented in ancient treatises and developed through the patronage of South Indian kings and temples, features complex rhythmic patterns and intricate melodic variations. Instruments like the veena and violin, along with sophisticated vocal techniques, allow musicians to express profound devotional feelings and technical mastery. Carnatic music\'s emphasis on mathematical precision combined with emotional depth makes it a unique contribution to world classical music traditions.',
          image: '/images/art/Carnatic.jpeg',
          cardImage: '/images/art/Carnatic.jpeg'
        },
        { 
          name: 'Sitar', 
          origin: 'Pan-India', 
          description: 'Stringed instrument with resonant sound', 
          icon: '🪕',
          detailedHistory: 'The sitar, a stringed instrument with Persian origins that evolved in medieval India, has become synonymous with Indian classical music. Featuring sympathetic strings that resonate and amplify the melodic sound, the sitar produces a rich, complex timbre that allows musicians to explore subtle nuances of ragas. The instrument\'s long neck enables the musician to bend notes and create microtonal variations, essential for expressing the emotional depth of Indian music. Masters like Ravi Shankar brought the sitar to international attention, making it a symbol of Indian cultural identity globally. The sitar represents centuries of craftsmanship and musical innovation, demonstrating how an instrument can become a vehicle for profound artistic expression.',
          image: '/images/art/Sitar.jpeg',
          cardImage: '/images/art/Sitar.jpeg'
        },
        { 
          name: 'Tabla', 
          origin: 'North India', 
          description: 'Percussion instrument pair', 
          icon: '🥁',
          detailedHistory: 'The tabla, a pair of hand drums originating in North India, represents the rhythmic foundation of Hindustani classical music. Consisting of the treble-pitched dayan and the bass-pitched bayan, the tabla produces hundreds of distinct sounds through various striking techniques and finger positions. The instrument\'s versatility allows percussionists to create complex rhythmic patterns (taals) that accompany and enhance melodic instruments and vocals. The tabla\'s musical vocabulary is so sophisticated that accomplished performers can express themselves through rhythm alone, creating conversations with other musicians. The instrument\'s global influence through world music and fusion has made it one of India\'s most recognizable percussion instruments, embodying the rhythmic sophistication of Indian music.',
          image: '/images/art/Tabla.jpeg',
          cardImage: '/images/art/Tabla.jpeg'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 py-20 overflow-hidden">
        {/* Floating Art Elements */}
        <motion.div
          animate={{ y: [-25, 25, -25], rotate: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-30"
        >
          🎨
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-32 right-20 text-5xl opacity-30"
        >
          💃
        </motion.div>
        <motion.div
          animate={{ y: [-18, 18, -18], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 text-4xl opacity-30"
        >
          🎵
        </motion.div>
        <motion.div
          animate={{ y: [22, -22, 22], rotate: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-32 right-10 text-5xl opacity-30"
        >
          🎭
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-playfair text-5xl md:text-6xl font-bold text-maroon mb-6"
          >
            <motion.span
              animate={{ 
                background: [
                  'linear-gradient(45deg, #800000, #FF9933)',
                  'linear-gradient(45deg, #0066B2, #FFD700)',
                  'linear-gradient(45deg, #800000, #FF9933)'
                ],
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Art, Music & Dance
            </motion.span>
            <motion.span
              animate={{ 
                scale: [1, 1.4, 1], 
                rotate: [0, 20, 0] 
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-block ml-4"
            >
              🎭
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            Discover the rich artistic heritage that has flourished across India for centuries
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-4 flex-wrap gap-2"
          >
            {['🎨', '💃', '🎵', '🎭', '🥁', '🎺'].map((emoji, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2.2, 
                  repeat: Infinity, 
                  delay: index * 0.25 
                }}
                className="text-4xl"
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Art Forms Sections */}
      {artForms.map((category, categoryIndex) => (
        <section key={category.category} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
            >
              {category.category}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.items.map((item, index) => (
                <ArtCard key={item.name} art={item} index={index} onOpenModal={handleOpenModal} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cultural Heritage Section */}
      <section className="py-20 bg-gradient-to-br from-saffron/10 to-peacock/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
          >
            Living Heritage
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Guru-Shishya Tradition', description: 'Master-disciple learning system', icon: '👨‍🏫' },
              { title: 'Temple Architecture', description: 'Sacred geometry in stone', icon: '🏛️' },
              { title: 'Folk Traditions', description: 'Community celebrations and rituals', icon: '🎪' },
              { title: 'Handicrafts', description: 'Artisan skills passed through generations', icon: '🏺' },
              { title: 'Storytelling', description: 'Oral traditions and epics', icon: '📚' },
              { title: 'Spiritual Arts', description: 'Art as path to divine', icon: '🕉️' }
            ].map((heritage, index) => (
              <motion.div
                key={heritage.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{heritage.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-maroon mb-3 text-center">
                  {heritage.title}
                </h3>
                <p className="text-gray-600 text-center">{heritage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ArtModal 
        isOpen={isModalOpen}
        art={selectedArt}
        onClose={handleCloseModal}
      />
    </main>
  )
}