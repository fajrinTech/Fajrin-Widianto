'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Hero.module.css'

const firstName = 'FAJRIN'.split('')
const lastName = 'WIDIANTO'.split('')

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
}

const charVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  const [showToast, setShowToast] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('fajrintech@gmail.com')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <section className={styles.hero}>
      {/* ── BIG NAME (BACKGROUND LAYER) ── */}
      <motion.div
        className={styles.nameRow}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="Fajrin Widianto"
      >
        <div className={`${styles.nameBlock} ${styles.leftBlock}`}>
          {firstName.map((char, i) => (
            <motion.span key={`f-${i}`} variants={charVariants} className={styles.charOutline}>
              {char}
            </motion.span>
          ))}
        </div>

        <div className={`${styles.nameBlock} ${styles.rightBlock}`}>
          {lastName.map((char, i) => (
            <motion.span key={`l-${i}`} variants={charVariants} className={styles.charSolid}>
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* ── CENTERED PHOTO (MIDDLE LAYER) ── */}
      <div className={styles.photoWrapper}>
        <motion.div
          className={styles.photoInner}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Image
            src="/fajrin.png"
            alt="Fajrin Widianto"
            fill
            className={styles.photo}
            priority
          />
        </motion.div>
      </div>

      {/* ── BOTTOM CONTENT ROW (FOREGROUND LAYER) ── */}
      <div className={styles.bottomRow}>
        {/* Left — intro */}
        <motion.div
          className={styles.intro}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 } as Parameters<typeof motion.div>[0]['transition']}
        >
          <h2 className={styles.role}>
            Founder & AI Architect at THAELON
          </h2>
          <p className={`body-md ${styles.subtitle}`}>
            Building FANA, an AI Intelligence Platform, with full-stack engineering, scalable cloud infrastructure, and intelligent software systems.
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaBtn}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            id="hero-cta-btn"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="label-caps">Let&apos;s collaborate</span>
            <span className={styles.ctaArrow}>↗</span>
          </motion.a>
        </motion.div>

        {/* Right — social links */}
        <motion.div
          className={styles.socialLinks}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.75 } as Parameters<typeof motion.div>[0]['transition']}
        >
          {[
            {
              label: 'GitHub',
              icon: (
                <svg viewBox="0 0 1024 1024" fill="none" width="14" height="14" style={{ display: 'block' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor" />
                </svg>
              ),
              href: 'https://github.com/fajrinTech',
            },
            {
              label: 'LinkedIn',
              icon: (
                <svg viewBox="0 0 256 256" fill="none" width="14" height="14" style={{ display: 'block' }}>
                  <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor" />
                </svg>
              ),
              href: 'https://www.linkedin.com/in/fajrin-widianto/',
            },
            {
              label: 'WhatsApp',
              icon: (
                <svg viewBox="0 0 360 362" fill="none" width="14" height="14" style={{ display: 'block' }}>
                  <path fill="currentColor" fillRule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" clipRule="evenodd" />
                </svg>
              ),
              href: 'https://wa.me/6285692473334',
            },
            {
              label: 'Email',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              href: '#',
              isCopy: true,
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.isCopy ? undefined : '_blank'}
              rel={social.isCopy ? undefined : 'noopener noreferrer'}
              className={styles.socialLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              id={`social-${social.label.toLowerCase()}`}
              onClick={social.isCopy ? handleCopyEmail : undefined}
            >
              <span className={styles.socialIcon}>{social.icon}</span>
              <span className="label-caps">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
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

      {/* ── BOTTOM BLEND & BLUR OVERLAY ── */}
      <div className={styles.bottomOverlay} />
    </section>
  )
}
