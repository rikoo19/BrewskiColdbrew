import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-coffee-white">
      {/* Hero Section */}
      <section className="bg-coffee-white text-coffee-brown py-16 border-b border-coffee-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-lazydog">
            Hubungi Kami
          </h1>
          <p className="text-xl text-coffee-brown/70 max-w-2xl mx-auto">
            Kami siap melayani Anda dengan sepenuh hati. Jangan ragu untuk menghubungi kami!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-coffee-brown mb-8 font-lazydog">
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                      Alamat Kedai
                    </h3>
                    <p className="text-coffee-brown/80">
                      Jl. Pademangan raya no 30<br />
                      Jakarta Utara<br />
                      Indonesia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                      Telepon & WhatsApp
                    </h3>
                    <p className="text-coffee-brown/80">
                      <a href="tel:+6285717910061" className="hover:text-coffee-brown">
                        +62 857-1791-0061
                      </a>
                    </p>
                    <p className="text-coffee-brown/80">
                      <a href="https://wa.me/6285717910061" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-brown">
                        WhatsApp: 0857-1791-0061
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                      Instagram
                    </h3>
                    <p className="text-coffee-brown/80">
                      <a href="https://www.instagram.com/brewskicoldbrew" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-brown">
                        @brewskicoldbrew
                      </a>
                    </p>
                    <p className="text-coffee-brown/80">
                      <a href="https://www.instagram.com/brewskicoldbrew" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-brown">
                        Follow untuk update terbaru
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                      Jam Operasional
                    </h3>
                    <div className="text-coffee-brown/80 space-y-1">
                      <p>Senin - Minggu: 09:00 - 18:00 </p>
                      <p className="text-sm">Buka setiap hari, termasuk hari libur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-coffee-brown mb-8 font-lazydog">
                Lokasi Kami
              </h2>
              <div className="bg-white rounded-lg p-8 h-96 flex items-center justify-center border border-accent-purple/30">
                <div className="text-center">
                  <MapPin size={64} className="text-coffee-brown mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                    Google Maps
                  </h3>
                  <p className="text-coffee-brown/80 mb-4">
                    Klik tombol di bawah untuk melihat lokasi kami di Google Maps
                  </p>
                  <a
                    href="https://maps.app.goo.gl/C1942QWNLB6HLj1f9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-coffee-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-coffee-brown/90 transition-colors inline-block"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-brown mb-4 font-lazydog">
              Cara Memesan
            </h2>
            <p className="text-coffee-brown/80 max-w-2xl mx-auto">
              Pilih cara yang paling nyaman untuk Anda memesan kopi favorit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500 bg-white">
                <img src="/images/products/wa.png" alt="WhatsApp" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-brown mb-2">WhatsApp</h3>
              <p className="text-coffee-brown/80 mb-4 text-sm">Pesan langsung via WhatsApp untuk pengalaman yang personal</p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                Chat WhatsApp
              </a>
            </div>
            {/* Shopee */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-orange-500 bg-white">
                <img src="/images/products/shopee.png" alt="Shopee" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-brown mb-2">Shopee</h3>
              <p className="text-coffee-brown/80 mb-4 text-sm">Pesan melalui aplikasi Shopee dengan berbagai promo menarik</p>
              <a
                href="https://id.shp.ee/w4S8nwZ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
              >
                Buka Shopee
              </a>
            </div>
            {/* Tokopedia */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-600 bg-white">
                <img src="/images/products/tokopedia.png" alt="Tokopedia" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-brown mb-2">TokoPedia</h3>
              <p className="text-coffee-brown/80 mb-4 text-sm">Nikmati promo menarik melalui aplikasi TokoPedia</p>
              <a
                href="https://tokopedia.link/agXCgoeZuYb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                Buka TokoPedia
              </a>
            </div>
            {/* TikTok Shop */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black bg-white">
                <img src="/images/products/tk1.png" alt="TiktokShop" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-brown mb-2">TiktokShop</h3>
              <p className="text-coffee-brown/80 mb-4 text-sm">Pesan melalui aplikasi TiktokShop untuk menikmati promo menarik</p>
              <a
                href="https://www.tiktok.com/@brewski.coldbrew?_r=1&_t=ZS-91bjSghwGyV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Buka TiktokShop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-coffee-brown border-t border-coffee-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-lazydog">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-coffee-brown/80 mb-8 text-lg">
            Jangan ragu untuk menghubungi kami! Tim <span className="font-lazydog">Brewski</span> siap membantu Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat WhatsApp
            </a>
            <a
              href="https://www.instagram.com/brewskicoldbrew"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors flex items-center justify-center"
            >
              <img 
                src="/images/products/instagram.png" 
                alt="Instagram" 
                className="w-5 h-5 mr-2 object-contain"
              />
              Chat Instagram
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-coffee-brown/10">
            <p className="text-coffee-brown/60 text-sm">
              Atau gunakan chatbot AI kami di pojok kanan bawah untuk bantuan instant!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
