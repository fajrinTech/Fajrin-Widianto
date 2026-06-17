'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './Footer.module.css'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/fajrinTech' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fajrin-widianto/' },
  { label: 'WhatsApp', href: 'https://wa.me/6285692473334' },
  { label: 'Email', href: '#', isCopy: true },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [showToast, setShowToast] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('fajrintech@gmail.com')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <motion.footer
      ref={ref}
      className={`${styles.footer} glass`}
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className={`container ${styles.inner}`}>
        <div className={`headline-md ${styles.name}`}>Fajrin Widianto.</div>

        <nav className={styles.links}>
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isCopy ? undefined : '_blank'}
              rel={link.isCopy ? undefined : 'noopener noreferrer'}
              className={`label-caps ${styles.link}`}
              id={`footer-link-${link.label.toLowerCase()}`}
              onClick={link.isCopy ? handleCopyEmail : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className={`body-md ${styles.copyright}`}>
          © {new Date().getFullYear()} Fajrin Widianto. Crafted with precision.
        </p>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={styles.toast}
          >
            Email copied to clipboard! 📋
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  )
}
