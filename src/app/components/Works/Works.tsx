'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import styles from './Works.module.css'

interface Project {
  id: string
  title: string
  desc: string
  longDesc: string
  challenge: string
  investigation: string
  solution: string
  year: string
  span: number
  aspect: 'landscape' | 'portrait' | 'square'
  imgSrc: string
  cta: string
  techStack: string[]
  role?: string
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 'kaloriku',
    title: 'Kaloriku',
    desc: 'Smart nutrition & daily calorie tracking platform.',
    longDesc: 'A mobile-responsive health and wellness application designed to help users track their daily nutrition intake, log meals, and manage weight goals. Built as a Capstone Project for the DBS Foundation x Dicoding Coding Camp.',
    challenge: 'Designing a highly secure, reliable, and low-latency REST API that handles rapid calorie tracking calculations and concurrent user traffic, alongside secure authentication and image upload capabilities.',
    investigation: 'We researched Node.js frameworks (Express/Hapi) to benchmark latency under concurrent requests. We optimized database schemas for fast retrieval of meal logs and mapped out storage solutions on GCP for user meal photos.',
    solution: 'Developed a robust Node.js REST API with Express, MySQL, and Sequelize, secured with JWT authentication. Deployed the backend services on Google Cloud Platform (using Cloud Run, Cloud SQL, and Cloud Storage) inside Docker containers, ensuring scalability and high availability.',
    year: '2026',
    span: 8,
    aspect: 'landscape',
    imgSrc: '/kaloriku.jpg',
    cta: 'View Case Study',
    techStack: ['Node.js', 'Express', 'Supabase', 'Google Cloud (GCP)', 'Docker', 'JWT', 'REST API'],
    role: 'Backend Engineer',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'cosmic',
    title: 'Cosmic',
    desc: 'Classroom management hub with dashboard.',
    longDesc: 'An interactive space-themed portal and functional classroom dashboard designed for student task tracking, study resources, and performance analytics. Integrates client-side logic with backend systems.',
    challenge: 'Managing dynamic classroom state, secure user sessions, and database integrations for task lists and schedule tables.',
    investigation: 'Researched responsive dashboard architectures, state sync mechanisms, and security structures for user and role authentication.',
    solution: 'Implemented the application using React, Next.js, and Tailwind CSS. Integrated Supabase for database schemas, custom authentication rules, and realtime classroom feeds.',
    year: '2025',
    span: 4,
    aspect: 'portrait',
    imgSrc: '/mockdash.png',
    cta: 'View Live Site',
    techStack: ['React', 'Next.js', 'Supabase', 'TailwindCSS', 'Framer Motion'],
    role: 'Full-stack Developer',
    liveUrl: 'https://class-cosmic-mi24.vercel.app/',
    githubUrl: '#',
  },
  {
    id: 'snapbooth',
    title: 'Snapbooth',
    desc: 'Web-based digital photobooth application.',
    longDesc: 'An interactive, browser-based digital photobooth application allowing event attendees to capture instant photos, customize frames, apply live filters, and download their snaps.',
    challenge: 'Handling reliable WebRTC camera streams, real-time image processing on HTML5 Canvas, and seamless asset downloads across various mobile browsers and hardware configurations.',
    investigation: 'Researched HTML5 Canvas API optimization, browser media device permissions, and image encoding speeds to ensure instant rendering with low processing latency.',
    solution: 'Designed and developed a responsive client-side interface using React, Next.js, and Tailwind CSS. Implemented clean WebRTC camera streaming and local canvas processing for filters and layout overlays.',
    year: '2025',
    span: 4,
    aspect: 'square',
    imgSrc: '/snapboth.jpg',
    cta: 'View Live Site',
    techStack: ['React', 'Next.js', 'HTML5 Canvas', 'TailwindCSS', 'WebRTC'],
    role: 'Frontend Lead',
    liveUrl: 'https://prd-project-photobooth.vercel.app/',
    githubUrl: '#',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.08,
    },
  }),
}




export default function Works() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)


  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  // Handle Escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="work" ref={ref} className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className={styles.headerLeft}>
          <span className={`label-caps ${styles.tag}`}>Portfolio</span>
          <h2 className="headline-lg">Selected Projects</h2>
        </div>
        <span className={`label-caps ${styles.scrollHint}`}>SCROLL TO EXPLORE ↓</span>
      </motion.div>

      <div className={styles.grid}>
        {/* ROW 1: Large Project (Fintech - span 8) & SaaS Project (span 4) */}
        <motion.div
          className={`${styles.bentoCard} ${styles.span8} glass`}
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          id={`project-${projects[0].id}`}
          onClick={() => setSelectedProject(projects[0])}
        >
          <div className={`${styles.imageWrapper} ${styles.landscape} glass-shine`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={projects[0].imgSrc}
              alt={projects[0].title}
              className={styles.projectImage}
            />
            <div className={styles.overlay}>
              <button className={styles.viewBtn}>
                {projects[0].cta} ↗
              </button>
            </div>
          </div>
          <div className={styles.projectMeta}>
            <div className={styles.projectInfo}>
              <h3 className="headline-md">{projects[0].title}</h3>
              <p className={`body-md ${styles.projectDesc}`}>{projects[0].desc}</p>
            </div>
            <span className={`label-caps ${styles.year}`}>{projects[0].year}</span>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.bentoCard} ${styles.span4} glass`}
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          id={`project-${projects[1].id}`}
          onClick={() => setSelectedProject(projects[1])}
        >
          <div className={`${styles.imageWrapper} ${styles.portrait} glass-shine`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={projects[1].imgSrc}
              alt={projects[1].title}
              className={styles.projectImage}
            />
            <div className={styles.overlay}>
              <button className={styles.viewBtn}>
                {projects[1].cta} ↗
              </button>
            </div>
          </div>
          <div className={styles.projectMeta}>
            <div className={styles.projectInfo}>
              <h3 className="headline-md">{projects[1].title}</h3>
              <p className={`body-md ${styles.projectDesc}`}>{projects[1].desc}</p>
            </div>
            <span className={`label-caps ${styles.year}`}>{projects[1].year}</span>
          </div>
        </motion.div>

        {/* ROW 2: E-commerce Project (span 4) & Full-width CTA Bento card (span 8) */}
        <motion.div
          className={`${styles.bentoCard} ${styles.span4} glass`}
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          id={`project-${projects[2].id}`}
          onClick={() => setSelectedProject(projects[2])}
        >
          <div className={`${styles.imageWrapper} ${styles.square} glass-shine`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={projects[2].imgSrc}
              alt={projects[2].title}
              className={styles.projectImage}
            />
            <div className={styles.overlay}>
              <button className={styles.viewBtn}>
                {projects[2].cta} ↗
              </button>
            </div>
          </div>
          <div className={styles.projectMeta}>
            <div className={styles.projectInfo}>
              <h3 className="headline-md">{projects[2].title}</h3>
              <p className={`body-md ${styles.projectDesc}`}>{projects[2].desc}</p>
            </div>
            <span className={`label-caps ${styles.year}`}>{projects[2].year}</span>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.bentoCard} ${styles.span8} glass`}
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          id="project-cta-bento"
        >
          <div className={styles.bentoCardInner}>
            <div className={styles.bentoContent}>
              <span className={`label-caps ${styles.bentoTag}`}>Collaboration</span>
              <h3 className={`${styles.bentoTitle} headline-lg`}>
                Let&apos;s create something remarkable together.
              </h3>
            </div>
            <div className={styles.bentoActions}>
              <motion.a
                href="#contact"
                className={styles.bentoBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                id="bento-contact-btn"
              >
                <span className="label-caps">Get in touch</span>
              </motion.a>
              <div className={styles.iconCircle}>✉</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Coming Soon Indicator */}
      <div className={styles.comingSoon}>
        <span className={styles.comingSoonDot}>●</span>
        <span className="label-caps">More projects in development — coming soon</span>
      </div>

      {/* Selected Project Detail Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalCard}
              initial={{ scale: 0.35, y: 60, opacity: 0, borderRadius: '64px' }}
              animate={{ scale: 1, y: 0, opacity: 1, borderRadius: '32px' }}
              exit={{ scale: 0.5, y: 40, opacity: 0, borderRadius: '64px' }}
              transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Scrollable Container */}
              <div className={styles.modalScrollable}>
                {/* Hero Banner */}
                <div className={styles.modalBanner}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedProject.imgSrc}
                    alt={selectedProject.title}
                    className={styles.modalBannerImage}
                  />
                  <div className={styles.modalBannerOverlay} />
                  <div className={styles.modalHeaderContent}>
                    <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                    <p className={styles.modalSub}>{selectedProject.desc}</p>
                  </div>
                </div>

                {/* Body */}
                <div className={styles.modalBody}>
                  {/* Left: CBL narrative */}
                  <div className={styles.modalMainContent}>
                    <div className={styles.cblSection}>
                      <h4>Overview</h4>
                      <p>{selectedProject.longDesc}</p>
                    </div>

                    <div className={styles.cblSection}>
                      <h4>Challenge (Tantangan)</h4>
                      <p>{selectedProject.challenge}</p>
                    </div>

                    <div className={styles.cblSection}>
                      <h4>Investigation (Investigasi)</h4>
                      <p>{selectedProject.investigation}</p>
                    </div>

                    <div className={styles.cblSection}>
                      <h4>Act (Solusi)</h4>
                      <p>{selectedProject.solution}</p>
                    </div>
                  </div>

                  {/* Right: Sidebar Metadata */}
                  <div className={styles.modalSidebar}>
                    <div className={styles.metaItem}>
                      <label>Year</label>
                      <span>{selectedProject.year}</span>
                    </div>

                    {selectedProject.role && (
                      <div className={styles.metaItem}>
                        <label>Role</label>
                        <span>{selectedProject.role}</span>
                      </div>
                    )}

                    <div className={styles.metaItem}>
                      <label>Tech Stack</label>
                      <div className={styles.techStackList}>
                        {selectedProject.techStack.map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.actionBtns}>
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          className={`${styles.modalActionBtn} ${styles.primaryAction}`}
                        >
                          Live Demo
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          className={`${styles.modalActionBtn} ${styles.secondaryAction}`}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
