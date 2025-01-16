'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              GM
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
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

