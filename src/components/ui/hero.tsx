"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "Welcome to ImageIQ Studios"
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full"
      >
        <motion.img
          src="/Recents/logo1-Photoroom.png"
          alt="ImageIQ Studios Logo"
          className="mx-auto mb-8 w-32 h-32 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-oswald">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B88A3E] to-[#6B4E20]">
            {text}
          </span>
          <span className="animate-blink">|</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Transforming ideas into stunning visual experiences. We create, innovate, and inspire through the power of design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black-900 dark:bg-gray-100 dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Get Started
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export { Hero } 