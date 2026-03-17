"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
}

export default function TypingText({ text, className, speed = 80 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="text-primary"
        >
          |
        </motion.span>
      )}
    </span>
  )
}
