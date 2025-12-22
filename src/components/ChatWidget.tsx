'use client'

import { useState } from 'react'
import { MessageCircle, X, Maximize2, Minimize2 } from 'lucide-react'
import ChatWindow from './ChatWindow'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-coffee-brown text-white p-4 rounded-full shadow-lg hover:bg-coffee-brown/90 transition-all z-50"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed bg-white rounded-lg shadow-2xl border border-accent-purple/40 z-50 ${
            isMaximized 
              ? 'inset-4 w-auto h-auto' 
              : 'bottom-6 right-6 w-96 h-[600px] max-h-[80vh]'
          }`}
        >
          {/* Header */}
          <div className="bg-coffee-brown text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} />
              <h3 className="font-semibold">Brewski Assistant</h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="hover:bg-coffee-brown/80 p-1 rounded"
              >
                {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-coffee-brown/80 p-1 rounded"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          
          {/* Chat Content */}
          <div className="h-[calc(100%-4rem)] overflow-hidden">
            <ChatWindow />
          </div>
        </div>
      )}
    </>
  )
}