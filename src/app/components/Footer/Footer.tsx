'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Footer.module.css'

const footerLinks = ['Dribbble', 'LinkedIn', 'Behance', 'Email']

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

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
              key={link}
              href="#"
              className={`label-caps ${styles.link}`}
              id={`footer-link-${link.toLowerCase()}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <p className={`body-md ${styles.copyright}`}>
          © {new Date().getFullYear()} Fajrin Widianto. Crafted with precision.
        </p>
      </div>
    </motion.footer>
  )
}
