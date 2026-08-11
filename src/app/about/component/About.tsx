'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const pillars = [
    {
      num: '01',
      title: 'API & Server Architecture',
      desc: 'Architecting robust, type-safe REST & GraphQL APIs and real-time WebSockets with Node.js, Express, and NestJS.',
    },
    {
      num: '02',
      title: 'PostgreSQL & Supabase Ecosystem',
      desc: 'Designing secure, relational database schemas and building scalable serverless backend flows leveraging Supabase.',
    },
    {
      num: '03',
      title: 'Full-Stack Integration',
      desc: 'Seamlessly connecting robust backend logic with responsive, performant React and Next.js frontend interfaces.',
    },
  ]

  return (
    <section id="about" ref={ref} className={styles.section}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Left Column: Heading and Narrative */}
        <motion.div className={styles.leftCol} variants={itemVariants}>
          <span className={`label-caps ${styles.tag}`}>About Me</span>
          <h2 className="headline-lg">Founder & AI Architect at THAELON</h2>
          <p className={`body-lg ${styles.narrative}`}>
            I am a software engineer and AI architect focused on building THAELON and FANA, an AI Intelligence Platform. Combining scalable backend infrastructure, cloud architecture, and full-stack engineering to deliver high-performance digital products.
          </p>
          <div className={styles.focusGrid}>
            <div className={styles.focusItem}>
              <span className={styles.focusIcon}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              <div>
                <h4 className={styles.focusTitle}>API & Server Logic</h4>
                <p className={styles.focusDesc}>REST & GraphQL, WebSockets, Node.js & NestJS</p>
              </div>
            </div>
            <div className={styles.focusItem}>
              <span className={styles.focusIcon}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
              </span>
              <div>
                <h4 className={styles.focusTitle}>Postgres & Supabase</h4>
                <p className={styles.focusDesc}>Schema design, relational indexes, serverless flows</p>
              </div>
            </div>
            <div className={styles.focusItem}>
              <span className={styles.focusIcon}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </span>
              <div>
                <h4 className={styles.focusTitle}>GCP Cloud Architecture</h4>
                <p className={styles.focusDesc}>Certified GCP solutions, serverless Cloud Run, and CI/CD pipelines</p>
              </div>
            </div>
            <div className={styles.focusItem}>
              <span className={styles.focusIcon}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </span>
              <div>
                <h4 className={styles.focusTitle}>Full-Stack Precision</h4>
                <p className={styles.focusDesc}>Polished React, Next.js, and Framer Motion integration</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Key Pillars */}
        <motion.div className={styles.rightCol} variants={itemVariants}>
          <h3 className={`label-caps ${styles.pillarsTitle}`}>Core Philosophy</h3>
          <div className={styles.pillarsList}>
            {pillars.map((pillar) => (
              <div key={pillar.num} className={`${styles.pillarCard} glass`}>
                <span className={styles.pillarNum}>{pillar.num}</span>
                <div className={styles.pillarContent}>
                  <h4 className={styles.pillarCardTitle}>{pillar.title}</h4>
                  <p className={`body-md ${styles.pillarDesc}`}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
