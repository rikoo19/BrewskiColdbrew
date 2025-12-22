'use client'

import { Coffee, Star, ShoppingCart, Store, Video, MessageCircle } from 'lucide-react'
import ProductImage from './ProductImage'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  price: string
  description: string | null
  imageUrl: string | null
  tags: string | null
  createdAt: Date
}

interface MenuClientProps {
  products: Product[]
}

export default function MenuClient({ products }: MenuClientProps) {
  const [showSocialIcons, setShowSocialIcons] = useState<Record<string, boolean>>({})

  const toggleSocialIcons = (productId: string) => {
    setShowSocialIcons(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }))
  }

  return (
    <div className="min-h-screen bg-coffee-white">
      {/* Header */}
      <section className="text-coffee-brown py-16 border-b border-coffee-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Menu Kopi Brewski
          </h1>
          <p className="text-xl text-coffee-brown/80 max-w-2xl mx-auto">
            Nikmati koleksi kopi premium kami yang dibuat dengan biji kopi terbaik dari seluruh Indonesia
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <Coffee size={64} className="text-coffee-brown mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                Menu Sedang Dimuat
              </h3>
              <p className="text-coffee-brown/80">
                Silakan refresh halaman atau hubungi kami untuk informasi menu terbaru.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product: Product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="h-56 relative overflow-hidden bg-[#d0c2aa] flex items-center justify-center">
                    <ProductImage
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-56"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-coffee-brown">
                        {product.name}
                      </h3>
                      <div className="flex items-center text-yellow-500">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                    </div>
                    
                    <p className="text-2xl font-bold text-coffee-brown mb-3">
                      {product.price}
                    </p>
                    
                    <p className="text-coffee-brown/80 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags?.split(',').map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="bg-white border border-accent-purple/40 text-coffee-brown px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag.trim()}
                        </span>
                      )) || []}
                    </div>
                    
                    {/* Order Button */}
                    <button 
                      onClick={() => toggleSocialIcons(product.id)}
                      className="w-full bg-accent-pink text-black py-3 rounded-lg font-semibold hover:bg-pink-400 transition-colors flex items-center justify-center"
                    >
                      <Coffee className="mr-2" size={18} />
                      Pesan Sekarang
                    </button>
                    
                    {/* Social Media Icons */}
                    {showSocialIcons[product.id] && (
                      <div className="mt-4 flex justify-center space-x-4">
                        <a
                          href="https://id.shp.ee/w4S8nwZ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center"
                        >
                          <img 
                            src="/images/products/shopee.png" 
                            alt="Shopee" 
                            className="w-10 h-10 object-contain"
                          />
                        </a>
                        <a
                          href="https://tokopedia.link/agXCgoeZuYb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
                        >
                          <img 
                            src="/images/products/tokopedia.png" 
                            alt="Tokopedia" 
                            className="w-10 h-10 object-contain"
                          />
                        </a>
                        <a
                          href="https://www.tiktok.com/@brewski.coldbrew?_r=1&_t=ZS-91bjSghwGyV"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white border border-gray-300 text-black p-3 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
                        >
                          <img 
                            src="/images/products/tk1.png" 
                            alt="TikTok Shop" 
                            className="w-10 h-10 object-contain"
                          />
                        </a>
                        <a
                          href="https://wa.me/6285717910061"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white border border-gray-300 text-black p-3 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
                        >
                          <img 
                            src="/images/products/wa.png" 
                            alt="WhatsApp" 
                            className="w-10 h-10 object-contain"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Order Info */}
      <section className="py-16 bg-white text-coffee-brown border-t border-coffee-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Cara Memesan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-white border border-accent-purple/40 text-coffee-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Pilih Menu</h3>
              <p className="text-coffee-brown/80">
                Pilih kopi favorit Anda dari menu di atas
              </p>
            </div>
            
            <div>
              <div className="bg-white border border-accent-purple/40 text-coffee-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Pesan Online</h3>
              <p className="text-coffee-brown/80">
                Pesan melalui Shopee, Tokopedia, TikTok Shop, atau WhatsApp
              </p>
            </div>
            
            <div>
              <div className="bg-white border border-accent-purple/40 text-coffee-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Nikmati</h3>
              <p className="text-coffee-brown/80">
                Kopi akan diantar atau siap diambil di kedai
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://id.shp.ee/w4S8nwZ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Order via Shopee
            </a>
            <a
              href="https://tokopedia.link/agXCgoeZuYb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Order via Tokopedia
            </a>
            <a
              href="https://www.tiktok.com/@brewski.coldbrew?_r=1&_t=ZS-91bjSghwGyV"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Order via TikTok Shop
            </a>
            <a
              href="https://wa.me/6285717910061"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
