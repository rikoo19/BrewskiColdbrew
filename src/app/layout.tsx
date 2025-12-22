import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brewski Coldbrew - Premium Coffee Experience',
  description: 'Nikmati pengalaman kopi premium di Brewski Coffee Shop. Menu kopi terbaik dengan biji kopi pilihan dari seluruh Indonesia.',
  keywords: 'kopi, coffee shop, brewski, espresso, cappuccino, latte, jakarta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <nav className="bg-white text-coffee-brown shadow-sm border-b border-coffee-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold flex items-center">
                  <img 
                    src="/images/products/bar.png" 
                    alt="Brewski" 
                    className="w-8 h-8 mr-2 object-contain"
                  />
                  Brewski
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="hover:bg-coffee-brown/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="/menu"
                    className="hover:bg-coffee-brown/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Menu
                  </a>
                  <a
                    href="/about"
                    className="hover:bg-coffee-brown/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="/contact"
                    className="hover:bg-coffee-brown/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="bg-coffee-white min-h-screen">{children}</main>
        
        <footer className="bg-white text-coffee-brown border-t border-coffee-cream">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">☕ Brewski Coffee Shop</h3>
                <p className="text-coffee-brown/80">
                  Pengalaman kopi premium dengan biji kopi terbaik.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Kontak</h3>
                <div className="text-coffee-brown/80 space-y-2">
                  <p>📍 Jl. Pademangan raya no 30</p>
                  <p>📞 085717910061</p>
                  <div className="flex items-center">
                    <img 
                      src="/images/products/instagram.png" 
                      alt="Instagram" 
                      className="w-4 h-4 mr-2 object-contain"
                    />
                    @brewskicoldbrew
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>
                <div className="text-coffee-brown/80 space-y-2">
                  <p>Senin - Minggu</p>
                  <p>09:00 - 18:00 WIB</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-coffee-cream text-center text-coffee-brown/60">
              <p>&copy; 2024 Brewski Coffee Shop. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
        <ChatWidget />
      </body>
    </html>
  )
}
