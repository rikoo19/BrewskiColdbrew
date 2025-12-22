import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Products - Produk Baru Brewski
  const products = [
    {
      name: 'Mango',
      price: 'Rp 28.000',
      description: 'Minuman segar dengan rasa mangga tropis yang manis dan menyegarkan',
      imageUrl: null, // Placeholder hitam
      tags: 'fruit,mango,fresh,tropical'
    },
    {
      name: 'Blueberry Cheesecake',
      price: 'Rp 45.000',
      description: 'Minuman dengan rasa cheesecake blueberry yang creamy dan lezat',
      imageUrl: null, // Placeholder hitam
      tags: 'dessert,blueberry,cheesecake,creamy'
    },
    {
      name: 'Peach',
      price: 'Rp 30.000',
      description: 'Minuman dengan rasa peach yang segar dan manis alami',
      imageUrl: null, // Placeholder hitam
      tags: 'fruit,peach,fresh,sweet'
    },
    {
      name: 'Orange',
      price: 'Rp 26.000',
      description: 'Minuman jeruk segar yang kaya vitamin C dan menyegarkan',
      imageUrl: null, // Placeholder hitam
      tags: 'fruit,orange,fresh,vitamin'
    }
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product
    })
  }

  // Seed Knowledge Base
  const knowledgeBase = [
    {
      question: 'Jam buka Brewski?',
      answer: 'Brewski buka setiap hari dari jam 07:00 - 22:00 WIB. Kami siap melayani Anda dari pagi hingga malam!',
      category: 'store_info'
    },
    {
      question: 'Dimana lokasi Brewski?',
      answer: 'Brewski berlokasi di Jl. Kopi Nikmat No. 123, Jakarta Selatan. Mudah dijangkau dengan transportasi umum maupun kendaraan pribadi.',
      category: 'store_info'
    },
    {
      question: 'Apakah ada promo hari ini?',
      answer: 'Kami selalu memiliki promo menarik! Saat ini ada promo beli 2 gratis 1 untuk semua minuman kopi setiap hari Selasa. Follow Instagram @brewski_coffee untuk update promo terbaru!',
      category: 'promo'
    },
    {
      question: 'Bisa pesan online?',
      answer: 'Tentu saja! Anda bisa pesan melalui aplikasi GoFood, GrabFood, atau langsung WhatsApp kami di 0812-3456-7890.',
      category: 'store_info'
    },
    {
      question: 'Menu favorit di Brewski?',
      answer: 'Menu favorit pelanggan kami adalah Cappuccino dan Latte. Keduanya dibuat dengan biji kopi pilihan dan teknik brewing yang sempurna!',
      category: 'menu'
    },
    {
      question: 'Apakah ada menu non-kopi?',
      answer: 'Ya! Kami juga menyediakan teh, cokelat panas, jus buah segar, dan berbagai macam pastry dan cake yang lezat.',
      category: 'menu'
    },
    {
      question: 'Biji kopi dari mana?',
      answer: 'Kami menggunakan biji kopi premium dari berbagai daerah di Indonesia seperti Aceh Gayo, Toraja, dan Kintamani Bali. Semua biji kopi di-roasting fresh setiap hari.',
      category: 'menu'
    },
    {
      question: 'Ada wifi gratis?',
      answer: 'Ya, kami menyediakan WiFi gratis untuk semua pelanggan. Password: BrewskiCoffee2024',
      category: 'store_info'
    }
  ]

  for (const kb of knowledgeBase) {
    await prisma.knowledgeBase.create({
      data: kb
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
