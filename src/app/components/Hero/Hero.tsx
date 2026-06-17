'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
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
          <h2 className={`headline-lg ${styles.role}`}>
            FullStack Developer
          </h2>
          <p className={`body-md ${styles.subtitle}`}>
            Designing digital products that are clear, usable, and conversion focused.
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
            { label: 'Dribbble', icon: '⊕', href: '#' },
            { label: 'Instagram', icon: '◻', href: '#' },
            { label: 'LinkedIn', icon: 'in', href: '#' },
            { label: 'Behance', icon: 'Bē', href: '#' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className={styles.socialLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              id={`social-${social.label.toLowerCase()}`}
            >
              <span className={styles.socialIcon}>{social.icon}</span>
              <span className="label-caps">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── BOTTOM BLEND & BLUR OVERLAY ── */}
      <div className={styles.bottomOverlay} />
    </section>
  )
}
