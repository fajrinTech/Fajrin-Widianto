'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    const timer = setTimeout(handleResize, 0)
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Listen to window scroll to shrink/expand island
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Load theme preference
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setTimeout(() => {
        setIsDark(true)
      }, 0)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Collapse island when clicking outside
  useEffect(() => {
    if (!isClicked) return
    const handleOutsideClick = () => {
      setIsClicked(false)
    }
    window.addEventListener('click', handleOutsideClick)
    return () => window.removeEventListener('click', handleOutsideClick)
  }, [isClicked])

  const toggleTheme = (e: React.MouseEvent) => {
    e.stopPropagation() // prevent expanding/collapsing when clicking toggle
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    e.stopPropagation()
    setIsClicked(false)
    setIsHovered(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePillClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsClicked(true)
  }

  // On mobile, the navbar is always collapsed by default. On desktop, it collapses on scroll.
  // We ignore hover on mobile to prevent touch-emulated hover sticking on touchscreen tap.
  const isCollapsed = (isScrolled || isMobile) && !(isHovered && !isMobile) && !isClicked

  return (
    <motion.div
      className={styles.navbarWrapper}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.header
        layout
        transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        className={`${styles.navbar} ${isCollapsed ? styles.collapsedNavbar : styles.expandedNavbar}`}
        onClick={isCollapsed ? handlePillClick : undefined}
      >
        <AnimatePresence mode="wait">
          {isCollapsed ? (
            /* ── COLLAPSED STATE: MINIMALIST BLACK CAPSULE ── */
            <motion.div
              key="pill"
              className={styles.pillContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <span className={styles.dot} />
              <span className={`label-caps ${styles.logoText}`}>FW</span>
            </motion.div>
          ) : (
            /* ── EXPANDED STATE: FULL NAVIGATION BAR ── */
            <motion.div
              key="bar"
              className={styles.barContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Left — Logo Text */}
              <div className={styles.left}>
                <span className={styles.dot} />
                <span className={`label-caps ${styles.logoTextFull}`}>Fajrin Widianto</span>
              </div>

              {/* Center — Nav Links */}
              <nav className={styles.nav}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.navLink}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span className="label-caps">{link.label}</span>
                  </a>
                ))}
              </nav>

              {/* Right — Theme Toggle & CTA */}
              <div className={styles.right}>
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className={styles.themeToggle}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  id="theme-toggle-btn"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                      <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                        style={{ display: 'flex' }}
                      >
                        ☀️
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                        style={{ display: 'flex' }}
                      >
                        🌙
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.a
                  href="#contact"
                  className={styles.ctaBtn}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#contact')}
                  id="lets-talk-btn"
                >
                  <span className="label-caps">Let&apos;s Talk</span>
                  <span className={styles.ctaArrow}>↗</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </motion.div>
  )
}
