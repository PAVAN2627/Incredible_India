'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrollTriggerProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollTrigger({ children, className = '', delay = 0 }: ScrollTriggerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(elementRef)

    return () => observer.disconnect()
  }, [elementRef])

  return (
    <motion.div
      ref={setElementRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
