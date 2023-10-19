import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col mx-auto max-w-2xl px-4 pt-8 pb-16">
          <div className="flex-grow">
            <Navigation />
            <main className='py-4'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}