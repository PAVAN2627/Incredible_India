'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend.",
      author: "Mark Twain",
      role: "American Writer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "India is not just a country, it's a universe in itself. Every state tells a different story, every festival brings new colors.",
      author: "A.P.J. Abdul Kalam",
      role: "Former President of India",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The diversity of India is tremendous; it is obvious. It is something that is very close to my heart.",
      author: "Ratan Tata",
      role: "Indian Industrialist",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-maroon/5 to-peacock/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-maroon mb-6">
            What People Say About India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voices from around the world celebrating India's incredible heritage and culture
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          >
            <div className="text-6xl text-saffron/20 mb-6">❝</div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light italic"
            >
              {testimonials[activeIndex].quote}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-saffron/20"
                style={{ backgroundImage: `url('${testimonials[activeIndex].image}')` }}
              />
              <div className="text-left">
                <h4 className="font-bold text-maroon text-lg">{testimonials[activeIndex].author}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-saffron scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 text-4xl opacity-10"
          >
            🪷
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 text-4xl opacity-10"
          >
            🕉️
          </motion.div>
        </div>
      </div>
    </section>
  )
}