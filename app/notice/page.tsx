'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FileText, ArrowLeft, Calendar, User, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const notices = [
  {
    id: 1,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৩",
    date: "১৫ ডিসেম্বর, ২০২৩",
    author: "প্রধান শিক্ষক",
    content: "আগামী ২০ ডিসেম্বর, ২০২৩ তারিখে বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে। সকল শিক্ষার্থীদের অংশগ্রহণ করার জন্য অনুরোধ করা হচ্ছে।"
  },
  {
    id: 2,
    title: "অভিভাবক-শিক্ষক সভা",
    date: "১০ ডিসেম্বর, ২০২৫",
    author: "শিক্ষক পরিষদ",
    content: "আগামী ১৮ ডিসেম্বর, ২০২৫ তারিখে সকল শ্রেণির জন্য অভিভাবক-শিক্ষক সভা অনুষ্ঠিত হবে। সকল অভিভাবকদের উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে।"
  },
  {
    id: 3,
    title: "শীতকালীন অবকাশ",
    date: "৫ ডিসেম্বর, ২০২৫",
    author: "প্রশাসন",
    content: "২৫ ডিসেম্বর, ২০২৫ থেকে ৫ জানুয়ারি, ২০২৬ পর্যন্ত শীতকালীন অবকাশ চলবে। ৬ জানুয়ারি, ২০২৬ থেকে নিয়মিত ক্লাস শুরু হবে।"
  }
]

export default function NoticePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedNotice, setExpandedNotice] = useState<number | null>(null)

  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8 transition-colors duration-300">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-orange-800 mb-8 flex items-center">
          <FileText className="mr-4" /> নোটিশ বোর্ড
        </h1>
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="নোটিশ খুঁজুন..."
            className="w-full p-3 pl-10 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-orange-400" />
        </div>
        <AnimatePresence>
          {filteredNotices.map((notice) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 mb-4 group"
            >
              <h2 
                className="text-2xl font-semibold text-orange-600 mb-2 cursor-pointer flex items-center justify-between group-hover:text-orange-700 transition-colors duration-300"
                onClick={() => setExpandedNotice(expandedNotice === notice.id ? null : notice.id)}
              >
                <span className="flex-1">{notice.title}</span>
                <motion.div
                  animate={{ rotate: expandedNotice === notice.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-orange-500 group-hover:text-orange-700 transition-colors duration-300" />
                </motion.div>
              </h2>
              <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                <div className="flex items-center space-x-2 bg-orange-50 px-3 py-1 rounded-full">
                  <Calendar className="text-orange-500" size={16} />
                  <span>{notice.date}</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-50 px-3 py-1 rounded-full">
                  <User className="text-orange-500" size={16} />
                  <span>{notice.author}</span>
                </div>
              </div>
              <AnimatePresence>
                {expandedNotice === notice.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-orange-50 p-4 rounded-lg"
                  >
                    <p className="text-gray-700 leading-relaxed">{notice.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

