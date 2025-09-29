"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function TypingLogo() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "< Gabrielle Cristine />"
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(typingInterval)
      }
    }, 200) 

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <span className="text-2xl font-bold gradient-text font-mono">
        {displayText}
        {!isComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="text-primary"
          >
            |
          </motion.span>
        )}
      </span>
    </motion.div>
  )
}
