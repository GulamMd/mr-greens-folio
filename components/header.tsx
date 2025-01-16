'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </div>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <ul className="flex space-x-4">
              {['About', 'Portfolio', 'Blog', 'Skills', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href={`#${item.toLowerCase()}`} className="text-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
          <div className="flex items-center">
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 md:hidden"
            >
              <svg className="h-6 w-6 fill-current text-foreground" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li><Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="#blog" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors">Skills</Link></li>
            <li><Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header

