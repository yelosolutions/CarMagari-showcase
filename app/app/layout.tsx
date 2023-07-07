import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'CarMagari',
  description: 'Instant wheels at your fingertips. Effortless booking, smooth ride.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
