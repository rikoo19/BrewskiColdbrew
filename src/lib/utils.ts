import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateSimilarity(str1: string, str2: string): number {
  const words1 = str1.toLowerCase().split(/\s+/)
  const words2 = str2.toLowerCase().split(/\s+/)
  
  const allWords = [...new Set([...words1, ...words2])]
  
  const vector1 = allWords.map(word => words1.filter(w => w === word).length)
  const vector2 = allWords.map(word => words2.filter(w => w === word).length)
  
  const dotProduct = vector1.reduce((sum, val, i) => sum + val * vector2[i], 0)
  const magnitude1 = Math.sqrt(vector1.reduce((sum, val) => sum + val * val, 0))
  const magnitude2 = Math.sqrt(vector2.reduce((sum, val) => sum + val * val, 0))
  
  if (magnitude1 === 0 || magnitude2 === 0) return 0
  
  return dotProduct / (magnitude1 * magnitude2)
}

export function fuzzyMatch(query: string, target: string, threshold: number = 0.3): boolean {
  const similarity = calculateSimilarity(query, target)
  return similarity >= threshold
}
