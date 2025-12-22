
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { GoogleGenerativeAI } from '@google/generative-ai'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json()
    
    console.log('chat-api: incoming', { message, historyLength: history.length })
    
    // 1. Cek knowledge base untuk jawaban exact/similar
    const knowledgeBase = await prisma.knowledgeBase.findMany({
      where: {
        OR: [
          { question: { contains: message, mode: 'insensitive' } },
          { answer: { contains: message, mode: 'insensitive' } }
        ]
      }
    })
    if (knowledgeBase.length > 0) {
      // Selalu prioritaskan jawaban database, termasuk quick chat
      return NextResponse.json({ 
        message: knowledgeBase[0].answer,
        source: 'knowledge_base'
      })
    }

    // Jika pertanyaan mengandung 'brewski' dan tidak ada jawaban di database, balas admin + lanjutkan saran AI
    if (message.toLowerCase().includes('brewski')) {
      // Proses saran AI
      const apiKey = process.env.GEMINI_API_KEY
      if (!apiKey) {
        return NextResponse.json({ 
          message: 'Hubungi admin untuk informasi lebih lanjut mengenai produk brewski.',
          source: 'admin'
        })
      }
      const personaInstruction = 'Anda adalah asisten kopi umum. Jawab ramah, ringkas (maks 5 kalimat). Jangan menyebut nama merek atau Brewski. Fokus pada informasi netral dan umum tentang kopi.'
      const historyText = history.length > 0 
        ? history.map((h: any) => `${h.role}: ${h.message}`).join('\n')
        : 'Tidak ada riwayat.'
      const prompt = `${personaInstruction}\n\nRiwayat percakapan (ringkas):\n${historyText}\n\nPertanyaan: ${message}`
      const models = ['gemini-2.5-pro', 'gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-2.0-flash-001', 'gemini-flash-latest', 'gemini-pro-latest']
      let geminiResponse = null
      let lastError = null
      for (const modelName of models) {
        try {
          const genAI = new GoogleGenerativeAI(apiKey)
          const model = genAI.getGenerativeModel({ model: modelName })
          const result = await model.generateContent(prompt)
          geminiResponse = result.response.text()
          break
        } catch (error) {
          lastError = error
          continue
        }
      }
      if (!geminiResponse) {
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }]
            })
          })
          if (response.ok) {
            const data = await response.json()
            geminiResponse = data.candidates[0].content.parts[0].text
          }
        } catch (error) {
          // fallback failed
        }
      }
      let finalMessage = 'Hubungi admin untuk informasi lebih lanjut mengenai produk brewski.'
      if (geminiResponse) {
        finalMessage += '\n\n' + geminiResponse
      }
      return NextResponse.json({ 
        message: finalMessage,
        source: 'admin+ai'
      })
    }

    // 2. Cek products untuk pertanyaan menu/harga
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: message, mode: 'insensitive' } },
          { description: { contains: message, mode: 'insensitive' } }
        ]
      }
    })
    if (products.length > 0) {
      const product = products[0]
      const productResponse = `${product.name}\n${product.description}\n\nHarga: ${product.price}`
      return NextResponse.json({ 
        message: productResponse,
        source: 'products'
      })
    }

    // 3. Fallback ke Gemini untuk pertanyaan umum seputar kopi
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ 
        message: 'Maaf, layanan AI sedang tidak tersedia. Silakan coba lagi nanti.',
        source: 'error'
      })
    }
    // Persona kopi umum
    const personaInstruction = 'Anda adalah asisten kopi umum. Jawab ramah, ringkas (maks 5 kalimat). Jangan menyebut nama merek atau Brewski. Fokus pada informasi netral dan umum tentang kopi.'
    const historyText = history.length > 0 
      ? history.map((h: any) => `${h.role}: ${h.message}`).join('\n')
      : 'Tidak ada riwayat.'
    const prompt = `${personaInstruction}\n\nRiwayat percakapan (ringkas):\n${historyText}\n\nPertanyaan: ${message}`
    const models = ['gemini-2.5-pro', 'gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-2.0-flash-001', 'gemini-flash-latest', 'gemini-pro-latest']
    let geminiResponse = null
    let lastError = null
    for (const modelName of models) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey)
        const model = genAI.getGenerativeModel({ model: modelName })
        const result = await model.generateContent(prompt)
        geminiResponse = result.response.text()
        break
      } catch (error) {
        lastError = error
        continue
      }
    }
    if (!geminiResponse) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        })
        if (response.ok) {
          const data = await response.json()
          geminiResponse = data.candidates[0].content.parts[0].text
        }
      } catch (error) {
        // fallback failed
      }
    }
    if (geminiResponse) {
      return NextResponse.json({ 
        message: geminiResponse,
        source: 'gemini',
        persona: 'general'
      })
    }
    // Final fallback
    return NextResponse.json({ 
      message: 'Maaf, saya tidak dapat memproses pertanyaan Anda saat ini. Silakan coba lagi.',
      source: 'error'
    })
    
  } catch (error) {
    console.error('chat-api: error', error)
    return NextResponse.json({ 
      message: 'Maaf, terjadi kesalahan sistem. Silakan coba lagi nanti.',
      source: 'error'
    }, { status: 500 })
  }
}