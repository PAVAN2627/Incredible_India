import './globals.css'
import { Metadata } from 'next'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Incredible India - A Cultural Journey',
  description: 'Explore the rich culture, heritage, and traditions of India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}