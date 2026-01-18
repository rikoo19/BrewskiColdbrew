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
              ? 'inset-2 w-[98vw] h-[96vh] max-w-none max-h-none sm:inset-4 sm:w-auto sm:h-auto'
              : 'bottom-4 right-4 w-[95vw] max-w-xs h-[70vh] max-h-[80vh] sm:bottom-6 sm:right-6 sm:w-96 sm:h-[600px]'
          }`}
        >
          {/* Header */}
          <div className="bg-coffee-brown text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} />
              <h3 className="font-semibold font-lazydog">Brewski Assistant</h3>
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