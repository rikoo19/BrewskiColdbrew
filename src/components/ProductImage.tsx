'use client'

import { useState } from 'react'
import { Coffee } from 'lucide-react'

interface ProductImageProps {
  src: string | null
  alt: string
  className?: string
}

export default function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  const [imageError, setImageError] = useState(false)

  if (!src || imageError) {
    return (
      <div className={`bg-white border border-accent-purple/30 flex items-center justify-center ${className}`}>
        <img 
          src="/images/products/brw.png" 
          alt="Brewski" 
          className="w-40 h-40 object-contain"
        />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-contain ${className}`}
      onError={() => setImageError(true)}
    />
  )
}
