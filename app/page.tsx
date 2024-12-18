'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, BookOpen, Calendar, FileText, ImageIcon, Users2, GraduationCap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const dashboardItems = [
  { icon: FileText, title: "নোটিশ বোর্ড", color: "from-orange-400 to-red-500", link: "/notice" },
  { icon: BookOpen, title: "ক্লাস কার্যক্রম", color: "from-blue-400 to-indigo-500", link: "/class-activities" },
  { icon: BookOpen, title: "ক্লাস রুটিন", color: "from-green-400 to-teal-500", link: "/class-routine" },
  { icon: BarChart3, title: "পরিসংখ্যান", color: "from-purple-400 to-pink-500", link: "/statistics" },
  { icon: GraduationCap, title: "পরীক্ষার ফলাফল", color: "from-teal-400 to-green-500", link: "/exam-results" },
  { icon: Calendar, title: "একাডেমিক ক্যালেন্ডার", color: "from-yellow-400 to-orange-500", link: "/academic-calendar" },
  { icon: ImageIcon, title: "ফটো গ্যালারি", color: "from-red-400 to-yellow-500", link: "/photo-gallery" },
]

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
      </div>

      {/* Header */}
      <header className="relative h-48 mb-8 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shat_Gombuj_Masjid-scaled.jpg-ws5HHSSh59c3WzoiemBfuVEfVIfyIK.jpeg"
          alt="School Background"
          fill
          className="object-cover"
          priority
        />
        
        {/* School info overlay */}
        <div className="absolute bottom-4 left-4 z-20 bg-black/30 backdrop-blur-sm p-4 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/115466-WqISaIDwzjnUgKPyKqmLMk4qGPdub0.png"
                alt="School Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white">
                নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয়
              </h1>
              <p className="text-sm text-white/90">EIN - 115466</p>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Grid */}
      <main className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.link}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <div
                className={`h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${item.color} p-6`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-col items-center text-white space-y-4">
                  <div className="p-3 bg-white/90 rounded-full">
                    <item.icon className="h-8 w-8 text-gray-800" />
                  </div>
                  <h2 className="text-lg font-medium text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

