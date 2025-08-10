"use client"

import * as React from "react"
import Link from "next/link"; 
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#recent-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.div
      className="sticky top-0 z-50 flex justify-center w-full py-6 px-4 backdrop-blur-sm"
      animate={{
        paddingTop: isScrolled ? "0.5rem" : "1.5rem",
        paddingBottom: isScrolled ? "0.5rem" : "1.5rem",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-between px-6 py-3 bg-card dark:bg-card border  rounded-full shadow-sm w-full relative "
        animate={{
          padding: isScrolled ? "0.5rem 1.5rem" : "0.75rem 1.5rem",
          maxWidth: isScrolled ? "800px" : "1024px",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center">
          <motion.div
            className="w-12 h-12 mr-6 rounded-full"
            initial={{ scale: 0.8 }}
            animate={{
              scale: 1,
              width: isScrolled ? "2.5rem" : "3rem",
              height: isScrolled ? "2.5rem" : "3rem",
              marginRight: isScrolled ? "1rem" : "1.5rem"
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {isScrolled ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                <Home className="w-5 h-5 text-primary" />
              </motion.div>
            ) : (
              <motion.img
                src="/Recents/logo1-Photoroom.png"
                alt="ImageIQ Studios Logo"
                className="w-full h-full object-contain rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        </div>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          animate={{
            gap: isScrolled ? "1.5rem" : "2rem"
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
             <Link href={item.href}>
                <span className="text-sm text-black dark:text-foreground hover:text-primary transition-colors font-medium cursor-pointer">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </motion.nav>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: isScrolled ? 0.9 : 1
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-primary-foreground bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 rounded-full transition-colors"
          >
            Get Started
          </button> */}
        </motion.div>

        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-foreground" />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-foreground" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link href={item.href}>
                  <span className="text-base text-foreground hover:text-primary font-medium">
                   {item.name}
                  </span>
                  </Link>
                                        
                  
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                {/* <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-primary-foreground bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 rounded-full transition-colors"
                >
                  Get Started
                </button> */}
              </motion.div>
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export { Navbar }