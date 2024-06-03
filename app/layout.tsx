import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (  
    <>
      <html lang="en">
        <AnimatePresence mode="wait">
            <body className={inter.className}>
              <Navbar />
                {children}
                <Navigation />
                </body>
        </AnimatePresence>
      </html>
    </>
)
}
