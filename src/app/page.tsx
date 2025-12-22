import { Coffee, MessageCircle, Star, Clock, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-coffee-white">
      {/* Hero Section */}
      <section className="bg-coffee-white text-coffee-brown border-b border-coffee-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Selamat Datang di <span className="text-accent-pink">Brewski</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-coffee-brown/80">
              Pengalaman Kopi Premium dengan Cita Rasa Terbaik 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="bg-accent-pink text-black px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 transition-colors inline-flex items-center justify-center"
              >
                <Coffee className="mr-2" size={20} />
                Order Sekarang
              </a>
              <a
                href="/menu"
                className="inline-flex items-center rounded-full border border-coffee-brown/20 bg-white px-4 py-2 text-sm font-semibold text-coffee-brown hover:bg-coffee-brown/5 shadow-sm"
              >
                Lihat Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-coffee-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-brown mb-4">
              Mengapa Memilih Brewski?
            </h2>
            <p className="text-coffee-brown/80 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman kopi terbaik dengan kualitas premium dan pelayanan yang ramah.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-accent-pink text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                Biji Kopi Premium
              </h3>
              <p className="text-coffee-brown/80">
                Menggunakan biji kopi pilihan dari Majalaya, Bandung untuk white variant, dan Parata, Bandung untuk black variant.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-accent-purple text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                Kualitas Terjamin
              </h3>
              <p className="text-coffee-brown/80">
                Setiap cangkir kopi dibuat dengan teknik brewing yang sempurna oleh barista berpengalaman.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-accent-pink text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                AI Assistant
              </h3>
              <p className="text-coffee-brown/80">
                Chatbot pintar yang siap membantu menjawab informasi seputar kopi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-coffee-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-coffee-brown mb-6">
                Cerita Brewski
              </h2>
              <p className="text-coffee-brown/80 mb-6 leading-relaxed">
                Brewski lahir dari passion mendalam terhadap kopi Indonesia. Kami percaya bahwa setiap cangkir kopi 
                memiliki cerita, dari petani yang menanamnya hingga barista yang menyajikannya.
              </p>
              <p className="text-coffee-brown/80 mb-8 leading-relaxed">
                Dengan menggunakan biji kopi terbaik dari daerah di Indonesia, kami menghadirkan 
                pengalaman kopi yang autentik dan berkualitas tinggi.
              </p>
              <a
                href="/about"
                className="bg-coffee-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-coffee-brown/90 transition-colors inline-block"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-8 h-[28rem] flex items-center justify-center border border-accent-purple/30">
                <img 
                  src="/images/products/coldbrew.jpg" 
                  alt="Cold Brew Coffee" 
                  className="w-[28rem] h-[28rem] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-white text-coffee-brown border-b border-coffee-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock size={48} className="text-accent-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jam Operasional</h3>
              <p className="text-coffee-brown/80">Senin - Minggu</p>
              <p className="text-coffee-brown/80">09:00 - 18:00 WIB</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin size={48} className="text-accent-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
              <p className="text-coffee-brown/80">Jl. Pademangan 2 raya no 30c</p>
              <p className="text-coffee-brown/80">Jakarta Utara</p>
            </div>
            
            <div className="flex flex-col items-center">
              <img 
                src="/images/products/instagram.png" 
                alt="Instagram" 
                className="w-12 h-12 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-coffee-brown/80">@brewskicoldbrew</p>
              <p className="text-coffee-brown/80">Follow kami untuk update terbaru!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-coffee-brown mb-4">
            Siap Menikmati Kopi Terbaik?
          </h2>
          <p className="text-coffee-brown/80 mb-8 text-lg">
            Pesan sekarang melalui aplikasi favorit Anda atau kunjungi langsung kedai kami!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>
    </div>
  )
}
