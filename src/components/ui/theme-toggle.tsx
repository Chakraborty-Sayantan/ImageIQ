"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-10 h-10 rounded-full p-2 hover:bg-muted transition-colors "
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute h-5 w-5 transition-transform duration-300 ${
            theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
          }`}
          strokeWidth={1.5}
        />
        <Moon 
          className={`absolute h-5 w-5 transition-transform duration-300 ${
            theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"
          }`}
          strokeWidth={1.5}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 