import { prisma } from '@/lib/prisma'
import { Coffee, Star } from 'lucide-react'
import ProductImage from '@/components/ProductImage'
import MenuClient from '@/components/MenuClient'

async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        name: 'asc'
      }
    })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export default async function MenuPage() {
  const products = await getProducts()

  return <MenuClient products={products} />
}
