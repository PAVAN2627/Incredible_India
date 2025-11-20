'use client'
import { motion } from 'framer-motion'
import CuisineCard from '../components/CuisineCard'

export default function Cuisine() {
  const regions = [
    {
      name: 'North Indian',
      description: 'Rich, creamy curries with wheat-based breads',
      dishes: ['Butter Chicken', 'Naan', 'Rajma', 'Chole Bhature'],
      icon: '🍛',
      color: 'from-red-500 to-orange-500',
      spices: ['Garam Masala', 'Cumin', 'Coriander', 'Cardamom'],
      detailedHistory: 'North Indian cuisine represents a perfect blend of indigenous Indian cooking traditions and influences from Persian, Mughal, and Central Asian cuisines. Characterized by the use of wheat as the staple grain (instead of rice), this region\'s cooking emphasizes richness through generous use of cream, yogurt, and ghee. The influence of Mughal emperors is evident in elaborate gravies and cooking techniques like tandoori and dum pukht (slow cooking). Aromatic spices like saffron, cardamom, and rose petals feature prominently, creating dishes that balance heat, sweetness, and spice. Breads like naan, roti, and paratha are integral to meals, often served with elaborate meat curries and rich vegetarian preparations.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
      cardImage: 'https://images.unsplash.com/photo-1585937421612-4b5e97f9f28e?w=500'
    },
    {
      name: 'South Indian',
      description: 'Rice-based dishes with coconut and curry leaves',
      dishes: ['Dosa', 'Idli', 'Sambar', 'Rasam'],
      icon: '🥥',
      color: 'from-green-500 to-teal-500',
      spices: ['Mustard Seeds', 'Curry Leaves', 'Tamarind', 'Coconut'],
      detailedHistory: 'South Indian cuisine is an ancient culinary tradition rooted in the agricultural abundance of coconut, rice, and spices of the southern peninsula. This cuisine emphasizes light, elegant flavors with extensive use of coconut (fresh and ground), curry leaves, mustard seeds, and tamarind, creating a perfect balance of spice and tanginess. Rice forms the foundation of meals, prepared in various forms including steamed idlis, fermented dosas, and rice-flour preparations. The influence of temple cuisine (sattvic cooking) and Portuguese colonial trade in spices is evident in the sophistication of preparations and the spice blends used. South Indian cuisine is known for its vegetarian emphasis, with innovative preparations of vegetables, legumes, and grains, along with exquisite fish curries from coastal regions.',
      image: 'https://images.unsplash.com/photo-1585937421612-4b5e97f9f28e?w=800',
      cardImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'
    },
    {
      name: 'East Indian',
      description: 'Fish curries and sweet delicacies',
      dishes: ['Fish Curry', 'Rasgulla', 'Mishti Doi', 'Luchi'],
      icon: '🐟',
      color: 'from-blue-500 to-indigo-500',
      spices: ['Panch Phoron', 'Mustard Oil', 'Poppy Seeds', 'Jaggery'],
      detailedHistory: 'East Indian cuisine, particularly Bengali cooking, is celebrated for its subtle flavors, innovative use of fish and seafood, and artistic approach to sweet dishes. The region\'s geography with rivers, ponds, and proximity to the Bay of Bengal makes fish and shellfish central to the cuisine. The signature five-spice blend (panch phoron) and mustard oil form the flavor foundation for many dishes, creating aromatic, complex tastes. Bengali sweets (mishti) hold a special place in Indian confectionery, featuring innovative techniques to create delicacies like rasgulla and sandesh. The cuisine reflects a balance between simplicity and sophistication, with emphasis on the natural flavors of ingredients, minimal over-spicing, and elegant presentation.',
      image: 'https://images.unsplash.com/photo-1624867265905-37928bcad300?w=800',
      cardImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'
    },
    {
      name: 'West Indian',
      description: 'Spicy street food and coastal flavors',
      dishes: ['Vada Pav', 'Dhokla', 'Misal Pav', 'Goan Fish Curry'],
      icon: '🌶️',
      color: 'from-yellow-500 to-red-500',
      spices: ['Red Chili', 'Kokum', 'Hing', 'Turmeric'],
      detailedHistory: 'West Indian cuisine encompasses diverse regional styles from the spice-rich Maharashtrian coast to the Portuguese-influenced Goan cuisine and the traditional Gujarati vegetarian heritage. Characterized by bold, vibrant flavors and the liberal use of red chilies, this region\'s cooking ranges from street food to elaborate festive preparations. Goan cuisine shows Portuguese influences through the use of coconut, tamarind, and fish curries with unique spice combinations. Maharashtrian cuisine emphasizes seasonal ingredients with dishes like misal pav and bhakri, representing both street food culture and home cooking traditions. West Indian sweets and snacks are renowned for their crispness and flavor, making the region famous for its food heritage across India.',
      image: 'https://images.unsplash.com/photo-1504674900967-e69ca7e66bd6?w=800',
      cardImage: 'https://images.unsplash.com/photo-1585937421612-4b5e97f9f28e?w=500'
    }
  ]

  const famousDishes = [
    { name: 'Biryani', origin: 'Hyderabad/Lucknow', icon: '🍚' },
    { name: 'Dosa', origin: 'South India', icon: '🥞' },
    { name: 'Misal Pav', origin: 'Maharashtra', icon: '🍞' },
    { name: 'Litti Chokha', origin: 'Bihar', icon: '🥟' },
    { name: 'Rasgulla', origin: 'Bengal', icon: '🍡' },
    { name: 'Thali', origin: 'Pan-India', icon: '🍽️' }
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-saffron/20 via-gold/20 to-maroon/20 py-20 overflow-hidden">
        {/* Floating Food Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-30"
        >
          🍛
        </motion.div>
        <motion.div
          animate={{ y: [25, -25, 25], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-32 right-20 text-5xl opacity-30"
        >
          🌶️
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 text-4xl opacity-30"
        >
          🥥
        </motion.div>
        <motion.div
          animate={{ y: [18, -18, 18], rotate: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-32 right-10 text-5xl opacity-30"
        >
          🍚
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
                color: ['#800000', '#FF9933', '#FFD700', '#800000']
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Indian Cuisine
            </motion.span>
            <motion.span
              animate={{ 
                scale: [1, 1.3, 1], 
                rotate: [0, 15, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-4"
            >
              🍛
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            A culinary journey through diverse flavors, spices, and traditions from across India
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-4 flex-wrap gap-2"
          >
            {['🍛', '🌶️', '🥥', '🍚', '🍜', '🍲'].map((emoji, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
                className="text-4xl"
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Regional Cuisines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
          >
            Regional Flavors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <CuisineCard key={region.name} region={region} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Famous Dishes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-center text-maroon mb-16"
          >
            Iconic Dishes
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {famousDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">{dish.icon}</div>
                <h3 className="font-semibold text-maroon mb-1">{dish.name}</h3>
                <p className="text-sm text-gray-600">{dish.origin}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spice History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl font-bold text-maroon mb-6">
                The Spice Route Legacy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                India's culinary heritage dates back thousands of years, shaped by ancient trade routes, 
                Mughal influences, and regional traditions. The country's diverse climate and geography 
                have blessed it with an incredible variety of spices and ingredients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-saffron rounded-full"></span>
                  <span>Ancient Ayurvedic cooking principles</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-peacock rounded-full"></span>
                  <span>Mughal influence on North Indian cuisine</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-maroon rounded-full"></span>
                  <span>Portuguese and British colonial impacts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-gold rounded-full"></span>
                  <span>Regional variations and local ingredients</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-saffron/20 to-peacock/20 p-8 rounded-2xl">
                <h3 className="font-playfair text-2xl font-bold text-maroon mb-6">Essential Spices</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Turmeric', 'Cumin', 'Coriander', 'Cardamom', 'Cinnamon', 'Cloves', 'Black Pepper', 'Red Chili'].map((spice, index) => (
                    <motion.div
                      key={spice}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/80 p-3 rounded-lg text-center font-medium text-gray-700"
                    >
                      {spice}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}