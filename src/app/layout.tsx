import Favicon from '@/components/Favicon'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buana Bahari Samudera',
  description: 'Company Buana Bahari Samudera',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <Favicon />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
