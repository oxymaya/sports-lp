'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: '実績', href: '#social-proof' },
  { label: '測定', href: '#measurement' },
  { label: 'トレーニング', href: '#training' },
  { label: '競技', href: '#sports' },
  { label: '料金', href: '#pricing' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0F1A]/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-1 h-6 bg-primary" />
          <span className="text-foreground font-black text-lg tracking-widest group-hover:text-primary transition-colors">
            REAXION<span className="text-primary">PRO</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/contact?type=document"
            className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
          >
            資料請求
          </a>
          <a href="/contact?type=demo" className="bg-primary text-primary-foreground font-bold text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-primary/90 transition-all duration-200">
            デモを予約
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="メニューを開く"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0F1A]/98 backdrop-blur-md border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase py-2 border-b border-border"
              >
                {item.label}
              </a>
            ))}
            <a href="/contact?type=demo" className="bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase px-6 py-3 mt-2 hover:bg-primary/90 transition-all text-center block">
              デモを予約
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
