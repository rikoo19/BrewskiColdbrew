'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  message: string
  timestamp: Date
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      message: 'Halo! Selamat datang di Brewski Coffee Shop! 👋\n\nSaya di sini untuk membantu Anda dengan informasi tentang menu, seputar kopi, dan seputar Brewski. Ada yang bisa saya bantu?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return

    const newUserMessage: Message = {
      role: 'user',
      message: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newUserMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputMessage,
          history: messages.slice(-6).map(msg => ({
            role: msg.role,
            message: msg.message
          }))
        }),
      })

      const data = await response.json()

      const assistantMessage: Message = {
        role: 'assistant',
        message: data.message || 'Maaf, terjadi kesalahan. Silakan coba lagi.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        role: 'assistant',
        message: 'Maaf, terjadi kesalahan koneksi. Silakan coba lagi nanti.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickReplies = [
    "Berapa lama proses pembuatan Kopi Brewski?",
    "Mengapa bisa proses pembuatan Kopi Brewski bisa sampai 96jam atau 4 hari?",
    "Apa yang membedakan Coldbrew Brewski dengan Coldbrew lainnya?",
    "Mengapa Brewski menggunakan kucing sebagai logo branding?",
    "Target Pasar Brewski?"
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-coffee-brown text-white'
                  : 'bg-white border border-accent-purple/40 text-coffee-brown'
              }`}
            >
              <div className="text-sm whitespace-pre-wrap">{msg.message}</div>
              <div className="text-xs opacity-70 mt-1">
                {msg.timestamp.toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-accent-purple/40 text-coffee-brown p-3 rounded-lg flex items-center space-x-2">
              <Loader2 size={16} className="animate-spin" />
              <span className="text-sm">Mengetik...</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Replies */}
      <div className="border-t border-gray-200 p-2">
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => setInputMessage(reply)}
              className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full text-gray-700 transition-colors"
              disabled={isLoading}
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ketik pesan Anda..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-coffee-brown focus:border-transparent bg-white"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="bg-coffee-brown text-white p-2 rounded-lg hover:bg-coffee-brown/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}