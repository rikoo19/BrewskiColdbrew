import { Coffee, Heart, Award, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-coffee-white">
      {/* Hero Section */}
      <section className="bg-coffee-white text-coffee-brown py-16 border-b border-coffee-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang Brewski
          </h1>
          <p className="text-xl text-coffee-brown/70 max-w-2xl mx-auto">
            Perjalanan kami dalam menghadirkan pengalaman kopi terbaik Indonesia
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-coffee-brown mb-6">
                Cerita Kami
              </h2>
              <p className="text-coffee-brown/80 mb-6 leading-relaxed">
                Brewski lahir dari kecintaan mendalam terhadap kopi Indonesia. Didirikan pada tahun 2023, 
                kami memulai perjalanan dengan visi sederhana: menghadirkan cita rasa coldbrew terbaik dengan biji kopi dari 
                berbagai daerah di Indonesia kepada para pecinta kopi.
              </p>
              <p className="text-coffee-brown/80 mb-6 leading-relaxed">
                Nama "Brewski" sendiri terinspirasi dari kata "brew" yang berarti menyeduh, dan "ski" 
                yang melambangkan perjalanan. Kami percaya bahwa setiap cangkir kopi adalah sebuah 
                perjalanan rasa yang membawa Anda menjelajahi kekayaan cita rasa Indonesia.
              </p>
              <p className="text-coffee-brown/80 leading-relaxed">
                Dengan komitmen terhadap kualitas dan keberlanjutan, kami bekerja sama langsung dengan 
                petani kopi lokal untuk memastikan setiap biji kopi yang kami gunakan adalah yang terbaik.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg px-4 py-6 flex items-center justify-center border border-accent-purple/30">
                <div className="text-center">
                  <img
                    src="/images/products/pertama.png"
                    alt="Sejak 2020"
                    className="mx-auto w-full max-w-xl h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-brown mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-coffee-brown/80 max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap langkah kami dalam menghadirkan pengalaman kopi terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-accent-pink text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                Kualitas Premium
              </h3>
              <p className="text-coffee-brown/80">
                Hanya menggunakan biji kopi terbaik yang dipilih dengan teliti dari petani terpercaya.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-accent-purple text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                Passion & Dedikasi
              </h3>
              <p className="text-coffee-brown/80">
                Setiap cangkir dibuat dengan cinta dan dedikasi untuk memberikan pengalaman terbaik.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-accent-pink text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                Keunggulan
              </h3>
              <p className="text-coffee-brown/80">
                Berkomitmen untuk selalu memberikan produk dan layanan yang melampaui ekspektasi.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-accent-purple text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                Komunitas
              </h3>
              <p className="text-coffee-brown/80">
                Membangun komunitas pecinta kopi dan mendukung petani kopi lokal Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-coffee-brown mb-8">
            Filosofi Kopi Kami
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-accent-purple/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-accent-pink mb-4">
                "Setiap Biji Memiliki Cerita"
              </h3>
              <p className="text-coffee-brown/80 leading-relaxed">
                Kami percaya bahwa setiap biji kopi membawa cerita dari tanah tempat ia tumbuh, 
                tangan petani yang merawatnya, dan perjalanan panjang hingga sampai di cangkir Anda. 
                Tugas kami adalah menceritakan kisah itu melalui setiap tegukan.
              </p>
            </div>
            
            <div className="bg-white border border-accent-purple/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-accent-purple mb-4">
                "Kopi adalah Seni"
              </h3>
              <p className="text-coffee-brown/80 leading-relaxed">
                Dari proses roasting hingga brewing, setiap tahap adalah seni yang membutuhkan 
                keahlian, kesabaran, dan dedikasi. Barista kami adalah seniman yang menciptakan 
                karya seni dalam setiap cangkir.
              </p>
            </div>
            
            <div className="bg-white border border-accent-purple/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-accent-pink mb-4">
                "Keberlanjutan adalah Masa Depan"
              </h3>
              <p className="text-coffee-brown/80 leading-relaxed">
                Kami berkomitmen pada praktik yang berkelanjutan, mulai dari mendukung petani 
                dengan harga yang adil hingga menggunakan kemasan yang ramah lingkungan. 
                Masa depan kopi adalah tanggung jawab kita bersama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-coffee-brown mb-4">
            Bergabunglah dengan Perjalanan Kopi Kami
          </h2>
          <p className="text-coffee-brown/80 mb-8 text-lg">
            Kunjungi kedai kami dan rasakan sendiri pengalaman kopi yang tak terlupakan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-coffee-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-coffee-brown/90 transition-colors"
            >
              Lihat Menu
            </a>
            <a
              href="/contact"
              className="border-2 border-coffee-brown text-coffee-brown px-8 py-3 rounded-lg font-semibold hover:bg-coffee-brown hover:text-white transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
