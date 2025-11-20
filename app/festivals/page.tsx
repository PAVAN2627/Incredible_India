'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FestivalCard from '../components/FestivalCard'
import FestivalModal from '../components/FestivalModal'

export default function Festivals() {
  const [selectedFestival, setSelectedFestival] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const festivals = [
    {
      name: 'Diwali',
      description: 'Festival of Lights celebrating the return of Lord Rama to Ayodhya',
      season: 'October/November',
      region: 'Pan-India',
      icon: '🪔',
      colors: ['#FFD700', '#FF9933'],
      traditions: ['Lighting diyas', 'Fireworks', 'Rangoli', 'Sweet exchange'],
      history: 'Originated from the return of Lord Rama to Ayodhya after 14 years of exile',
      detailedHistory: 'Diwali, celebrated for over 2,500 years, commemorates the triumph of light over darkness and good over evil. The five-day festival marks the return of Lord Rama to his kingdom Ayodhya. People light lamps (diyas), burst fireworks, create colorful rangoli patterns, and exchange sweets and gifts. This festival transcends religious boundaries and is celebrated by Hindus, Sikhs, Jains, and Buddhists with unique traditions.',
      image: '/images/festivals/diwali.jpeg',
      cardImage: '/images/festivals/diwali.jpeg'
    },
    {
      name: 'Holi',
      description: 'Festival of Colors celebrating the victory of good over evil',
      season: 'March',
      region: 'North India',
      icon: '🎨',
      colors: ['#FF69B4', '#00FF00', '#FFD700'],
      traditions: ['Color throwing', 'Water balloons', 'Gujiya sweets', 'Holika bonfire'],
      history: 'Celebrates the legend of Prahlad and Holika, symbolizing triumph of devotion',
      detailedHistory: `Holi, the Festival of Colors, is one of India's most vibrant celebrations rooted in ancient Hindu mythology spanning over 2,000 years. It commemorates the divine love between Lord Krishna and the gopis while also celebrating the legend of Prahlad and Holika. The festival begins with Holika Dahan, a bonfire representing the burning of negativity, followed by playful color throwing that symbolizes joy and forgiveness. Holi transcends religious boundaries and is celebrated with music, dancing, and traditional sweets shared with family and friends.`,
      image: '/images/festivals/holi.jpeg',
      cardImage: '/images/festivals/holi.jpeg'
    },
    {
      name: 'Eid ul-Fitr',
      description: 'Celebration marking the end of Ramadan fasting',
      season: 'Varies (Lunar)',
      region: 'Pan-India',
      icon: '🌙',
      colors: ['#0066B2', '#FFFFFF', '#00FF00'],
      traditions: ['Special prayers', 'Feasting', 'Charity', 'New clothes'],
      history: 'Islamic festival celebrating the completion of the holy month of Ramadan',
      detailedHistory: `Eid ul-Fitr, meaning "Festival of Breaking the Fast," marks the conclusion of Ramadan, the ninth and holiest month in the Islamic calendar. This joyous celebration follows 29-30 days of fasting from dawn to dusk, a practice observed to develop self-discipline and empathy. The festival is celebrated with special prayers at mosques and prayer grounds, followed by feasting on traditional dishes, exchanging gifts, and giving to the needy. Eid represents a time of gratitude, forgiveness, and communal harmony, bringing families and communities together.`,
      image: '/images/festivals/Eid ul-Fitr.jpeg',
      cardImage: '/images/festivals/Eid ul-Fitr.jpeg'
    },
    {
      name: 'Navratri',
      description: 'Nine nights celebrating Goddess Durga',
      season: 'September/October',
      region: 'Gujarat, West India',
      icon: '💃',
      colors: ['#FF0000', '#FFD700', '#800000'],
      traditions: ['Garba dance', 'Dandiya', 'Fasting', 'Goddess worship'],
      history: 'Ancient festival honoring the divine feminine power of Goddess Durga',
      detailedHistory: 'Navratri, spanning nine nights and ten days, is one of the most significant Hindu festivals celebrated across India with regional variations. The festival honors the nine forms of Goddess Durga/Shakti, each representing different aspects of divine feminine power. In Gujarat, Navratri is synonymous with Garba and Dandiya dances, where communities gather in vibrant, colorful celebrations. The festival culminates in Dussehra, marking the victory of good over evil. Each night celebrates a different avatar with unique rituals and significance.',
      image: '/images/festivals/navratri.jpeg',
      cardImage: '/images/festivals/navratri.jpeg'
    },
    {
      name: 'Ganesh Chaturthi',
      description: 'Celebration of Lord Ganesha, the remover of obstacles',
      season: 'August/September',
      region: 'Maharashtra, South India',
      icon: '🐘',
      colors: ['#FF9933', '#800000'],
      traditions: ['Ganesha idols', 'Processions', 'Modak sweets', 'Immersion ceremony'],
      history: 'Popularized by freedom fighter Bal Gangadhar Tilak during British rule',
      detailedHistory: 'Ganesh Chaturthi celebrates the birth of Lord Ganesha, the elephant-headed deity revered as the remover of obstacles in Hindu tradition. With roots tracing back centuries, the festival gained widespread momentum in the 17th century and was further popularized by freedom fighter Bal Gangadhar Tilak as a tool for social unity. The festival spans 10 days, beginning with the installation of Ganesha idols in homes and public pandals with elaborate artistic designs. Devotees offer prayers and sweets, seek blessings for new ventures, and culminate with the immersion ceremony where idols are submerged in water bodies.',
      image: '/images/festivals/ganeshcahturthi.jpeg',
      cardImage: '/images/festivals/ganeshcahturthi.jpeg'
    },
    {
      name: 'Pongal',
      description: 'Tamil harvest festival thanking nature',
      season: 'January',
      region: 'Tamil Nadu',
      icon: '🌾',
      colors: ['#FFD700', '#00FF00'],
      traditions: ['Rice cooking', 'Kolam designs', 'Cattle decoration', 'Sugarcane'],
      history: 'Ancient Dravidian harvest festival celebrating the sun god Surya',
      detailedHistory: `Pongal, celebrated for centuries in Tamil Nadu and among Tamil communities worldwide, is a four-day harvest festival marking the sun's transition into the zodiac sign of Capricornus. The word "Pongal" means "to boil over," symbolizing abundance and prosperity. The festival is dedicated to the sun god Surya and celebrates gratitude for the harvest and the earth's fertility. Each day has distinct significance: Thai Pongal celebrates the harvest with specially cooked rice, Mattu Pongal honors cattle and agriculture, Kannu Pongal marks family bonding through kite flying. Families create intricate kolam designs and prepare traditional dishes.`,
      image: '/images/festivals/Pongal.jpeg',
      cardImage: '/images/festivals/Pongal.jpeg'
    },
    {
      name: 'Durga Puja',
      description: 'Worship of Goddess Durga, the divine mother',
      season: 'September/October',
      region: 'West Bengal, East India',
      icon: '🏺',
      colors: ['#FF0000', '#FFD700', '#FFFFFF'],
      traditions: ['Pandal hopping', 'Cultural programs', 'Dhunuchi dance', 'Sindoor khela'],
      history: 'Celebrates the victory of Goddess Durga over demon Mahishasura',
      detailedHistory: 'Durga Puja is the most prominent festival of West Bengal, celebrating the victory of Goddess Durga over the buffalo demon Mahishasura, symbolizing the triumph of good over evil and divine power over darkness. The festival spans ten days, with elaborately decorated pandals (temporary structures) showcasing artistic brilliance and cultural themes. Communities engage in pandal hopping to admire the creative designs and installations. The festival features cultural programs, music performances, and the famous Dhunuchi dance. Durga Puja represents the celebration of feminine divine energy and is a major social and cultural event bringing together families and communities.',
      image: '/images/festivals/durgapuja.jpeg',
      cardImage: '/images/festivals/durgapuja.jpeg'
    },
    {
      name: 'Onam',
      description: 'Kerala harvest festival welcoming King Mahabali',
      season: 'August/September',
      region: 'Kerala',
      icon: '🌺',
      colors: ['#FFD700', '#00FF00', '#FFFFFF'],
      traditions: ['Pookalam', 'Sadhya feast', 'Kathakali', 'Boat races'],
      history: 'Celebrates the annual visit of legendary King Mahabali to Kerala',
      detailedHistory: `Onam is the most important festival of Kerala, celebrating the harvest and the mythical visit of the benevolent King Mahabali. According to legend, King Mahabali was a demon king whose reign brought prosperity and justice to Kerala. Once a year, during Onam, his spirit is believed to visit his people. The festival spans ten days with vibrant celebrations including Pookalam (colorful flower arrangements), Sadhya feasts, Kathakali performances, and Vallamkali (boat races). Onam represents Kerala's unique cultural identity, breaking religious boundaries and bringing together people from all communities in celebration of togetherness and prosperity.`,
      image: '/images/festivals/Onam.jpeg',
      cardImage: '/images/festivals/Onam.jpeg'
    },
    {
      name: 'Karva Chauth',
      description: 'Festival where wives fast for husbands longevity',
      season: 'October/November',
      region: 'North India',
      icon: '🌙',
      colors: ['#FF0000', '#FFD700'],
      traditions: ['Day-long fasting', 'Moon worship', 'Mehendi', 'Sargi'],
      history: 'Ancient tradition of married women praying for husbands well-being',
      detailedHistory: 'Karva Chauth is a traditional festival celebrated primarily in North India where married women fast from sunrise to moonrise, praying for the longevity and well-being of their husbands. The festival has roots dating back centuries and is based on ancient Hindu customs. Women dress in traditional attire, apply mehendi (henna), and perform rituals throughout the day. In the evening, they gather to sight the moon and break their fast. The festival symbolizes marital devotion, family bonds, and the importance of relationships. In modern times, it has evolved to celebrate the strength and dedication of women while honoring marital commitment.',
      image: '/images/festivals/karvachauth.jpeg',
      cardImage: '/images/festivals/karvachauth.jpeg'
    },
    {
      name: 'Baisakhi',
      description: 'Sikh New Year and harvest festival',
      season: 'April',
      region: 'Punjab, North India',
      icon: '🌾',
      colors: ['#FFD700', '#FF9933', '#0066B2'],
      traditions: ['Gurdwara visits', 'Bhangra dance', 'Langar', 'Processions'],
      history: 'Marks the formation of Khalsa by Guru Gobind Singh in 1699',
      detailedHistory: 'Baisakhi, also spelled Vaisakhi, holds dual significance for Punjab as both the Sikh New Year and a harvest festival. The most important Sikh event associated with Baisakhi is the formation of the Khalsa by Guru Gobind Singh on April 13, 1699, marking a transformational moment in Sikh history. The festival celebrates the Punjabi harvest season when farmers reap the winter crops. Baisakhi is marked by vibrant Bhangra dances, colorful processions, special prayers at gurdwaras, and the preparation of the Langar (communal meals). The festival symbolizes new beginnings, community spirit, and the agricultural cycle while commemorating Sikh heritage and values.',
      image: '/images/festivals/Baisakhi.jpeg',
      cardImage: '/images/festivals/Baisakhi.jpeg'
    },
    {
      name: 'Kumbh Mela',
      description: 'Worlds largest religious gathering',
      season: 'Every 12 years',
      region: 'Allahabad, Haridwar, Ujjain, Nashik',
      icon: '🕉️',
      colors: ['#FF9933', '#FFFFFF', '#00FF00'],
      traditions: ['Holy dip', 'Spiritual discourses', 'Processions', 'Meditation'],
      history: 'Ancient pilgrimage dating back to Vedic times for spiritual purification',
      detailedHistory: 'Kumbh Mela is the largest religious gathering on Earth, held once every 12 years across four sacred locations. Millions gather to take holy dips for spiritual purification.',
      image: '/images/festivals/Kumbh Mela.jpeg',
      cardImage: '/images/festivals/Kumbh Mela.jpeg'
    },
    {
      name: 'Pushkar Fair',
      description: 'Rajasthans famous camel and cattle fair',
      season: 'November',
      region: 'Rajasthan',
      icon: '🐪',
      colors: ['#FF6B35', '#FFD700'],
      traditions: ['Camel trading', 'Folk performances', 'Competitions', 'Holy bath'],
      history: 'Ancient trading fair combined with religious pilgrimage to Pushkar Lake',
      detailedHistory: 'Pushkar Fair is one of the worlds largest camel fairs, featuring thousands of camels and cattle trade along with cultural performances and pilgrimage.',
      image: '/images/festivals/Pushkar Fair.jpeg',
      cardImage: '/images/festivals/Pushkar Fair.jpeg'
    },
    {
      name: 'Dussehra',
      description: 'Victory of good over evil, Lord Rama over Ravana',
      season: 'September/October',
      region: 'Pan-India',
      icon: '🏹',
      colors: ['#FF0000', '#FFD700', '#00FF00'],
      traditions: ['Ravana effigy burning', 'Ram Leela', 'Processions', 'Fireworks'],
      history: 'Celebrates Lord Ramas victory over demon king Ravana',
      detailedHistory: 'Dussehra marks victory of good over evil with burning of Ravana effigies and Ram Leela performances across India.',
      image: '/images/festivals/Dussehra.jpeg',
      cardImage: '/images/festivals/Dussehra.jpeg'
    },
    {
      name: 'Janmashtami',
      description: 'Birth celebration of Lord Krishna',
      season: 'August/September',
      region: 'Pan-India',
      icon: '🪐',
      colors: ['#0066B2', '#FFD700', '#FFFFFF'],
      traditions: ['Dahi Handi', 'Midnight celebrations', 'Krishna plays', 'Fasting'],
      history: 'Celebrates the birth of Lord Krishna, eighth avatar of Vishnu',
      detailedHistory: 'Janmashtami celebrates Krishna birth with midnight celebrations, Dahi Handi traditions, and cultural performances.',
      image: '/images/festivals/janmashthami.jpeg',
      cardImage: '/images/festivals/janmashthami.jpeg'
    },
    {
      name: 'Raksha Bandhan',
      description: 'Festival celebrating brother-sister bond',
      season: 'August',
      region: 'North India',
      icon: '🎀',
      colors: ['#FF69B4', '#FFD700', '#FF0000'],
      traditions: ['Rakhi tying', 'Gift exchange', 'Sweet sharing', 'Protection vows'],
      history: 'Ancient tradition symbolizing protection and love between siblings',
      detailedHistory: 'Raksha Bandhan celebrates the sacred bond between siblings with rakhi tying and protection vows.',
      image: '/images/festivals/Raksha Bandhan.jpeg',
      cardImage: '/images/festivals/Raksha Bandhan.jpeg'
    },
    {
      name: 'Makar Sankranti',
      description: 'Harvest festival marking suns northward journey',
      season: 'January',
      region: 'Pan-India',
      icon: '🪁',
      colors: ['#FFD700', '#FF9933', '#00FF00'],
      traditions: ['Kite flying', 'Sesame sweets', 'Holy dips', 'Bonfires'],
      history: 'Ancient festival celebrating the transition of sun into Capricorn',
      detailedHistory: 'Makar Sankranti marks suns northward journey with kite flying competitions and harvest celebrations.',
      image: '/images/festivals/makarsankrati.jpeg',
      cardImage: '/images/festivals/makarsankrati.jpeg'
    },
    {
      name: 'Teej',
      description: 'Monsoon festival celebrated by women',
      season: 'July/August',
      region: 'North India',
      icon: '🌧️',
      colors: ['#00FF00', '#FF69B4', '#FFD700'],
      traditions: ['Swing decorations', 'Mehendi', 'Fasting', 'Folk songs'],
      history: 'Celebrates the reunion of Goddess Parvati with Lord Shiva',
      detailedHistory: 'Teej celebrates the monsoon season with swings, mehendi, and traditional songs primarily by women.',
      image: '/images/festivals/teej.jpeg',
      cardImage: '/images/festivals/teej.jpeg'
    },
    {
      name: 'Bihu',
      description: 'Assamese New Year and harvest festival',
      season: 'April',
      region: 'Assam',
      icon: '🌾',
      colors: ['#32CD32', '#FFD700', '#FF9933'],
      traditions: ['Bihu dance', 'Traditional games', 'Feasting', 'Cultural programs'],
      history: 'Ancient Assamese festival marking the beginning of the agricultural year',
      detailedHistory: 'Bihu is Assams New Year with famous Bihu dance performances, traditional games, and festive celebrations.',
      image: '/images/festivals/Bihu.jpeg',
      cardImage: '/images/festivals/Bihu.jpeg'
    },
    {
      name: 'Hornbill Festival',
      description: 'Festival of festivals showcasing Naga culture',
      season: 'December',
      region: 'Nagaland',
      icon: '🪶',
      colors: ['#FF0000', '#000000', '#FFFFFF'],
      traditions: ['Tribal dances', 'Traditional crafts', 'Folk music', 'Local cuisine'],
      history: 'Modern festival celebrating the rich cultural heritage of Nagaland',
      detailedHistory: 'Hornbill Festival showcases diverse Naga tribal traditions with dances, crafts, music, and cuisine.',
      image: '/images/festivals/Hornbill Festival.jpeg',
      cardImage: '/images/festivals/Hornbill Festival.jpeg'
    }
  ]

  return (
    <>
      <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-saffron/20 to-peacock/20 py-20 overflow-hidden">
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-30"
        >
          🪔
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-32 right-20 text-5xl opacity-30"
        >
          🎨
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 text-4xl opacity-30"
        >
          🌙
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-32 right-10 text-5xl opacity-30"
        >
          💃
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-playfair text-5xl md:text-6xl font-bold text-maroon mb-6"
          >
            <motion.span
              animate={{ color: ['#800000', '#FF9933', '#0066B2', '#800000'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Festivals of India
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-4"
            >
              🎉
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Experience the joy, colors, and spiritual essence of India's diverse celebrations
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex justify-center space-x-4"
          >
            {['🪔', '🎨', '🌙', '💃', '🐘'].map((emoji, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-4xl"
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Festivals Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <FestivalCard 
                key={festival.name} 
                festival={festival} 
                index={index}
                onOpenModal={(festival) => {
                  setSelectedFestival(festival)
                  setIsModalOpen(true)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Festival Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
          >
            Festival Calendar
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-saffron to-peacock"></div>
            
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-playfair text-2xl font-bold text-maroon mb-2">
                      {festival.name} {festival.icon}
                    </h3>
                    <p className="text-peacock font-semibold mb-2">{festival.season}</p>
                    <p className="text-gray-600">{festival.description}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>

    <FestivalModal 
      isOpen={isModalOpen} 
      festival={selectedFestival} 
      onClose={() => {
        setIsModalOpen(false)
        setSelectedFestival(null)
      }} 
    />
    </>
  )
}