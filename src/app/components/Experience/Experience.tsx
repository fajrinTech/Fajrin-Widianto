'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Experience.module.css'

interface Job {
  id: string
  period: string
  role: string
  company: string
  companyUrl?: string
  desc: string
  highlights: string[]
  techStack: string[]
}

const experiences: Job[] = [
  {
    id: 'exp-1',
    period: '2026',
    role: 'Fullstack Web Developer',
    company: 'DBS Foundation Coding Camp x Dicoding',
    desc: 'Selected as an intensive Full-Stack Web Developer track participant, developing scalable web architectures, optimized backend API services, and clean responsive frontends.',
    highlights: [
      'Engineered secure RESTful APIs with Node.js, Express, and PostgreSQL, managed by Sequelize ORM.',
      'Built the responsive Kaloriku nutrition app utilizing React, Next.js, and Tailwind CSS, connected seamlessly via Supabase.',
      'Containerized the deployment workflow with Docker and deployed scalable serverless environments on Google Cloud (Cloud Run).',
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'GCP', 'Docker'],
  },
  {
    id: 'exp-2',
    period: '2025',
    role: 'Google Student Ambassador (GSA)',
    company: 'Google Student Ambassador Program',
    desc: 'Served as the primary liaison between Google and the university campus, leading community initiatives to promote Google Cloud, AI tools, and digital literacy.',
    highlights: [
      'Hosted hands-on workshops and peer learning sessions on Google Cloud services and Google Workspace developer APIs.',
      'Organized campus-wide technology bootcamps and study groups, engaging over 150+ students in practical development.',
      'Gathered feedback and acted as a community builder, bridging student developers with Google resources and learning platforms.',
    ],
    techStack: ['Dicoding', 'AI Tools', 'Google', 'Community Leadership', 'Public Speaking'],
  },
  {
    id: 'exp-3',
    period: '2025',
    role: 'Google Cloud Facilitator / Cloud Architect',
    company: 'Google Cloud Arcade',
    desc: 'Completed advanced, hands-on cloud labs and learning pathways on Google Cloud Skills Boost, focusing on network routing, databases, and microservices.',
    highlights: [
      'Gained hands-on proficiency deploying containerized applications to Google Kubernetes Engine (GKE) and Cloud Run.',
      'Configured secure IAM access policies, Cloud SQL databases (PostgreSQL), and virtual private clouds (VPC) on GCP.',
      'Completed Google Cloud Skills Boost quests, earning multiple skills badges in cloud engineering, infrastructure, and serverless compute.',
    ],
    techStack: ['Google Cloud (GCP)', 'Kubernetes (GKE)', 'Cloud Run', 'Cloud SQL', 'Cloud Storage', 'IAM'],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <span className={`label-caps ${styles.tag}`}>Resume</span>
        <h2 className="headline-lg">Professional Experience</h2>
      </div>

      <div ref={containerRef} className={styles.timelineContainer}>
        {/* Central Vertical Timeline Line */}
        <div className={styles.timelineLine} />

        <div className={styles.timelineList}>
          {experiences.map((job, idx) => {
            return (
              <TimelineCard
                key={job.id}
                job={job}
                index={idx}
                isInView={isInView}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  job,
  index,
  isInView,
}: {
  job: Job
  index: number
  isInView: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isCardInView = useInView(cardRef, { once: true, margin: '-80px' })

  // Stagger entry animations
  const variant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: index * 0.15,
      },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      className={styles.timelineItem}
      variants={variant}
      initial="hidden"
      animate={isInView || isCardInView ? 'visible' : 'hidden'}
    >
      {/* Timeline Bullet Node */}
      <div className={styles.timelineBullet}>
        <div className={styles.bulletInner} />
      </div>

      {/* Period Info (Floating/Side) */}
      <div className={styles.periodBox}>
        <span className={`label-caps ${styles.periodText}`}>{job.period}</span>
      </div>

      {/* Glass Content Card */}
      <div className={`${styles.experienceCard} glass`}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.roleTitle}>{job.role}</h3>
            <h4 className={styles.companyName}>{job.company}</h4>
          </div>
        </div>

        <p className={`body-md ${styles.jobDesc}`}>{job.desc}</p>

        <ul className={styles.highlights}>
          {job.highlights.map((highlight, i) => (
            <li key={i} className="body-md">
              <span className={styles.bulletSymbol}>✦</span>
              <p>{highlight}</p>
            </li>
          ))}
        </ul>

        <div className={styles.techStackList}>
          {job.techStack.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
