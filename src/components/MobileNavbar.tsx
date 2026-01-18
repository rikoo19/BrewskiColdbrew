"use client"
import { useState } from 'react'

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-coffee-brown"
        onClick={() => setOpen(!open)}
      >
        <span className="block w-6 h-0.5 bg-coffee-brown mb-1"></span>
        <span className="block w-6 h-0.5 bg-coffee-brown mb-1"></span>
        <span className="block w-6 h-0.5 bg-coffee-brown"></span>
      </button>
      {open && (
        <div className="absolute top-16 right-4 bg-white border border-coffee-cream rounded-lg shadow-lg z-50 w-48 py-4 flex flex-col space-y-2">
          <a href="/" className="px-4 py-2 hover:bg-coffee-brown/5 rounded font-medium transition-colors">Home</a>
          <a href="/menu" className="px-4 py-2 hover:bg-coffee-brown/5 rounded font-medium transition-colors">Menu</a>
          <a href="/about" className="px-4 py-2 hover:bg-coffee-brown/5 rounded font-medium transition-colors">About</a>
          <a href="/contact" className="px-4 py-2 hover:bg-coffee-brown/5 rounded font-medium transition-colors">Contact</a>
        </div>
      )}
    </div>
  )
}