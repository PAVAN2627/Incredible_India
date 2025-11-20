'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from './components/HeroSection'
import HighlightsSection from './components/HighlightsSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <HighlightsSection />
      <TestimonialsSection />
    </main>
  )
}