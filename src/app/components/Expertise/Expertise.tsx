'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Expertise.module.css'

interface TechItem {
  name: string
  desc: string
  icon: string
  glow: string
}

interface TechGroup {
  title: string
  items: TechItem[]
}

const techGroups: TechGroup[] = [
  {
    title: 'Frontend Stack',
    items: [
      { name: 'React', desc: 'Component-based UI architecture', icon: 'react', glow: '#61dafb' },
      { name: 'Next.js', desc: 'SSR, App Router & web performance', icon: 'nextjs', glow: '#a8a8a8' },
      { name: 'TypeScript', desc: 'Type-safe scalable development', icon: 'typescript', glow: '#3178c6' },
      { name: 'Tailwind CSS', desc: 'Utility-first utility styling', icon: 'tailwind', glow: '#38bdf8' },
      { name: 'Framer Motion', desc: 'Premium micro-animations', icon: 'motion', glow: '#ff007a' },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', desc: 'Scalable runtime environments', icon: 'nodejs', glow: '#339933' },
      { name: 'Express.js', desc: 'Minimalist web API frameworks', icon: 'express', glow: '#7e7e7e' },
      { name: 'PostgreSQL', desc: 'Robust relational database systems', icon: 'postgres', glow: '#4169e1' },
      { name: 'MongoDB', desc: 'Flexible NoSQL document storage', icon: 'mongodb', glow: '#47a248' },
      { name: 'REST & GraphQL', desc: 'Efficient data architecture queries', icon: 'graphql', glow: '#e10098' },
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', desc: 'Distributed version control systems', icon: 'git', glow: '#f05032' },
      { name: 'Docker', desc: 'Containerized deployment setups', icon: 'docker', glow: '#2496ed' },
      { name: 'Vercel / Cloud', desc: 'Cloud deployment & optimization', icon: 'vercel', glow: '#ffffff' },
      { name: 'Figma', desc: 'Collaborative UI design & prototyping', icon: 'figma', glow: '#f24e1e' },
      { name: 'Postman', desc: 'API testing & client documentation', icon: 'postman', glow: '#ff6c37' },
    ],
  },
]

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" width="100%" height="100%" fill="currentColor">
          <circle cx="90" cy="90" r="80" stroke="currentColor" strokeWidth="8" fill="none"/>
          <path d="M124.18 141.77L68.64 69.37v72.4H53.37V49.03h15.27l55.54 72.4V49.03h15.27v92.74h-15.27z"/>
        </svg>
      )
    case 'typescript':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor">
          <rect width="100" height="100" rx="12" fill="none" stroke="currentColor" strokeWidth="8"/>
          <text x="50" y="70" textAnchor="middle" fill="currentColor" fontSize="42" fontWeight="800" fontFamily="system-ui, sans-serif">TS</text>
        </svg>
      )
    case 'tailwind':
      return (
        <svg viewBox="0 0 33 20" width="100%" height="100%" fill="currentColor">
          <path d="M16.5 0C12.5 0 9.5 2 7.5 6C10.5 4 12.5 5 13.5 9C11.5 10 9.5 9 7.5 6C4.5 11.5 5.5 15.5 10.5 18C13.5 19.5 16 19 18 16.5C15.5 17.5 13.5 17 12.5 14C14.5 13 16.5 14 18.5 17C21.5 11.5 20.5 7.5 15.5 5C12.5 3.5 11 4 9.5 6.5C12 5.5 13.5 6 14.5 9C12.5 10 10.5 9 8.5 6C5.5 11.5 6.5 15.5 11.5 18C12.5 18 14.5 18 16.5 18C20.5 18 23.5 16 25.5 12C22.5 14 20.5 13 19.5 9C21.5 8 23.5 9 25.5 12C28.5 6.5 27.5 2.5 22.5 0C19.5-1.5 18 0 16.5 0z" />
        </svg>
      )
    case 'motion':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="8">
          <path d="M20 20 L80 20 L50 50 Z" fill="currentColor"/>
          <path d="M20 50 L80 50 L50 80 Z" fill="currentColor" transform="rotate(180 50 65)"/>
        </svg>
      )
    case 'nodejs':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor">
          <path d="M50 10L15 30v40l35 20 35-20V30L50 10zm-5 65.6L25 64V40.4L45 52v23.6zm0-28.8L25 35.2 45 23.6v23.2zm30 17.6L55 75.6V52l20-11.6v23.2z"/>
        </svg>
      )
    case 'express':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor">
          <rect width="100" height="100" rx="12" fill="none" stroke="currentColor" strokeWidth="8"/>
          <text x="50" y="65" textAnchor="middle" fill="currentColor" fontSize="38" fontWeight="800" fontFamily="system-ui, sans-serif">EX</text>
        </svg>
      )
    case 'postgres':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="8">
          <ellipse cx="50" cy="35" rx="35" ry="15" fill="currentColor" fillOpacity="0.1" />
          <path d="M15 35 v20 C15 65, 85 65, 85 55 v-20" />
          <path d="M15 55 v20 C15 85, 85 85, 85 75 v-20" />
        </svg>
      )
    case 'mongodb':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor">
          <path d="M50 5C50 5 30 25 30 50c0 15 10 25 20 35 10-10 20-20 20-35 0-25-20-45-20-45zm0 65c-5 0-10-5-10-15 0-15 10-25 10-25s10 10 10 25c0 10-5 15-10 15z"/>
        </svg>
      )
    case 'graphql':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="6">
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" />
          <circle cx="50" cy="50" r="12" fill="currentColor"/>
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="15" y1="30" x2="85" y2="70" />
          <line x1="15" y1="70" x2="85" y2="30" />
        </svg>
      )
    case 'git':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="8">
          <circle cx="35" cy="70" r="8" fill="currentColor"/>
          <circle cx="65" cy="30" r="8" fill="currentColor"/>
          <circle cx="35" cy="30" r="8" fill="currentColor"/>
          <line x1="35" y1="38" x2="35" y2="62" />
          <path d="M35 50 Q50 50 65 38" />
        </svg>
      )
    case 'docker':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor">
          <rect x="25" y="42" width="10" height="10" rx="1.5" />
          <rect x="38" y="42" width="10" height="10" rx="1.5" />
          <rect x="51" y="42" width="10" height="10" rx="1.5" />
          <rect x="38" y="29" width="10" height="10" rx="1.5" />
          <rect x="51" y="29" width="10" height="10" rx="1.5" />
          <rect x="64" y="42" width="10" height="10" rx="1.5" />
          <path d="M10 60 Q30 55 50 60 T90 60 L90 70 Q70 75 50 70 T10 70 Z" />
        </svg>
      )
    case 'vercel':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor">
          <polygon points="50,20 90,85 10,85" />
        </svg>
      )
    case 'figma':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor">
          <path d="M35 25c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15H35V25z"/>
          <path d="M35 55c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15H35V55z"/>
          <path d="M65 25c0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15 15 6.7 15 15z"/>
          <path d="M65 55c0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15 15 6.7 15 15z"/>
          <path d="M35 85c0-8.3 6.7-15 15-15s15 6.7 15 15c0 8.3-6.7 15-15 15s-15-6.7-15-15z"/>
        </svg>
      )
    case 'postman':
      return (
        <svg viewBox="0 0 120 120" width="100%" height="100%" fill="currentColor">
          <path d="M60 10C32.4 10 10 32.4 10 60s22.4 50 50 50 50-22.4 50-50S87.6 10 60 10zm0 15c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5 3.4-7.5 7.5-7.5zm-20 40c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zm20 30c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25zm20-30c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"/>
        </svg>
      )
    default:
      return <span>✦</span>
  }
}

export default function Expertise() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="expertise" ref={ref} className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <h2 className="headline-lg">Tech Stack & Expertise</h2>
        <p className={`body-lg ${styles.headerDesc}`}>
          A structured roadmap of the languages, frameworks, databases, and design systems I specialize in to build comprehensive, performance-driven web products.
        </p>
      </motion.div>

      {/* Mobile Tabs Bar */}
      <div className={styles.tabsContainer}>
        {techGroups.map((group, index) => (
          <button
            key={group.title}
            className={`${styles.tabBtn} ${activeTab === index ? styles.activeTabBtn : ''} label-caps`}
            onClick={() => setActiveTab(index)}
          >
            <span className={styles.tabLabel}>{group.title.split(' ')[0]}</span>
            {activeTab === index && (
              <motion.div
                layoutId="activeTabIndicator"
                className={styles.tabIndicator}
                transition={{
                  layout: {
                    type: 'spring',
                    stiffness: 450,
                    damping: 24,
                    mass: 0.8
                  },
                  // Explicitly separate x and width springs to create the elastic "Squash and Stretch" morphing
                  x: { type: 'spring', stiffness: 500, damping: 20, mass: 0.8 },
                  width: { type: 'spring', stiffness: 350, damping: 22, mass: 1.4 }
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div className={styles.groupsContainer}>
        {techGroups.map((group, groupIndex) => (
          <div
            key={group.title}
            className={`${styles.groupColumn} ${
              activeTab === groupIndex ? styles.activeColumn : styles.inactiveColumn
            }`}
          >
            <motion.h3
              className={`label-caps ${styles.groupTitle}`}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.12 }}
            >
              {group.title}
            </motion.h3>

            <div className={styles.techStackList}>
              {group.items.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className={`${styles.techCard} glass`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1] as const,
                    delay: groupIndex * 0.12 + i * 0.06,
                  }}
                  style={{
                    ['--tech-glow-color' as any]: tech.glow,
                    ['--tech-glow-shadow' as any]: tech.glow + '25', // 15% opacity glow
                  }}
                >
                  <div className={styles.techIconBox}>
                    <TechIcon name={tech.icon} />
                  </div>
                  <div className={styles.techInfo}>
                    <h4 className={styles.techName}>{tech.name}</h4>
                    <p className={styles.techDesc}>{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
