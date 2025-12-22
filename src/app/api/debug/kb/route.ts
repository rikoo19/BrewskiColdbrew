import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Ambil semua data knowledge_base
    const knowledgeBase = await prisma.knowledgeBase.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    // Ambil semua data products
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json({
      knowledge_base: {
        count: knowledgeBase.length,
        data: knowledgeBase.map(item => ({
          id: item.id,
          question: item.question,
          answer: item.answer,
          category: item.category,
          created_at: item.createdAt
        }))
      },
      products: {
        count: products.length,
        data: products.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          description: item.description,
          tags: item.tags,
          created_at: item.createdAt
        }))
      },
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Debug KB API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch database data', details: error },
      { status: 500 }
    )
  }
}
