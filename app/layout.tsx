import type { Metadata } from 'next'
import { Noto_Serif_Bengali } from 'next/font/google'
import './globals.css'

const notoSerifBengali = Noto_Serif_Bengali({ 
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয়',
  description: 'Official website of Nowapara Shankarpasha Government Secondary School',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" className={notoSerifBengali.className}>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}

