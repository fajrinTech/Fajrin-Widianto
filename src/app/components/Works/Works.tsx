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
    techStack: ['Node.js', 'Express', 'MySQL', 'Google Cloud (GCP)', 'Docker', 'JWT', 'REST API'],
    role: 'Backend Engineer',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'saas',
    title: 'SaaS Platform',
    desc: 'Cloud infrastructure for creative teams.',
    longDesc: 'A collaborative workspace platform allowing creative designers and developers to manage, share, and deploy asset pipelines seamlessly across global teams.',
    challenge: 'Enabling real-time collaborative editing on large image and 3D assets without latency or version conflicts between remote users.',
    investigation: 'Researched conflict-free replicated data types (CRDTs) and WebSocket scaling architectures. Conducted focus groups with design agency leads to refine the asset sharing and workflow feedback loop.',
    solution: 'Built a lightweight collaborative canvas using React and customized operational transformation algorithms, backed by an optimized edge-caching layer and WebSockets.',
    year: '2024',
    span: 4,
    aspect: 'portrait',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiO6cFXT6XjwthCsL0pEe-9-yhiPDWeat-3rOHZEbKjivWnHd8k7vmRFshsY1A_wN9k2oBmangYa7Dg6VV5w-SZ5gl_YBNLaeuuK6LwfyBscUTnd3R9jAavbx5CQ7fm9Zy3xLgEmJReCBNJ_DOA18fCr-YUYrdHMFKGpMPiSEuofRhuNFClP6fzXmIPonGwLLUlKGqCTDOKiAZeoz9v8DbTSHUTc2f8vIdE77a2-3U9_TEt8gjh4iIJI_FUzhy6pHuJwbpcerDbbw',
    cta: 'View Case Study',
    techStack: ['React', 'Next.js', 'WebSockets', 'TailwindCSS', 'Zustand', 'Node.js'],
    role: 'Full-stack Engineer',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce App',
    desc: 'Premium retail experience for luxury brands.',
    longDesc: 'An immersive, high-end e-commerce experience featuring 3D product configurators and animated shopping flows tailored for premium fashion houses.',
    challenge: 'Creating a fast-loading, SEO-friendly storefront that embeds heavy 3D WebGL assets without sacrificing page load performance or mobile battery life.',
    investigation: 'Tested multiple 3D web frameworks (Three.js, React Three Fiber) and measured Core Web Vitals across mobile and desktop devices to optimize rendering paths.',
    solution: 'Implemented lazy-loading on-demand 3D canvas rendering, dynamic image compression pipelines, and standard static site generation via Next.js for instant static routing.',
    year: '2023',
    span: 4,
    aspect: 'square',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRl62y6yksV2yuTIrINapGY32aYb5O3ifR1QOXVqm0DSR1np49jbfZNaNG-paclbvWIWcZ5G1llg33II0_txm6TiuZdyFW4Ese2-vMOXKq_3BXukw-0AIj6dTMIl_ZqfH9OqyRjBEloMvFUDzL2Q7kmLoqktsIRJdtxB9puSi6_Ns83p11EXZTtxqJVJhchlD6KnWLxwbJwUIhh5IOheAVMq5omODl-L6TTUm-trXibJKXgpYNz2wAFgByGI0mSfKep4b0Ft-4jAk',
    cta: 'Explore',
    techStack: ['React', 'Next.js', 'Three.js', 'Framer Motion', 'TailwindCSS', 'CSS Modules'],
    role: 'Creative Developer',
    liveUrl: '#',
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

interface ArchiveProject {
  year: string
  title: string
  desc: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}

const archiveProjects: ArchiveProject[] = [
  {
    year: '2023',
    title: 'Weather CLI App',
    desc: 'A command-line tool to fetch and format global weather metrics with colored logging.',
    techStack: ['Node.js', 'Axios', 'Chalk', 'Commander'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    year: '2023',
    title: 'Markdown Notes Editor',
    desc: 'A browser-based markdown editor with local storage auto-save and live HTML rendering.',
    techStack: ['React', 'TypeScript', 'CSS Modules'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    year: '2022',
    title: 'Cryptographic Password API',
    desc: 'A secure, lightweight REST API microservice for generating customizable hashes.',
    techStack: ['Express.js', 'TypeScript', 'Crypto API'],
    githubUrl: '#',
  },
  {
    year: '2022',
    title: 'SVG Icon Sprite Packer',
    desc: 'A build script utility to optimize and compile directories of SVGs into a single asset sprite.',
    techStack: ['Node.js', 'SVGO', 'FS Extra'],
    githubUrl: '#',
  },
  {
    year: '2021',
    title: 'Visual CSS Grid Generator',
    desc: 'An interactive drag-and-drop tool that visualizes layout changes and generates clean CSS declarations.',
    techStack: ['React', 'HTML5 DnD', 'Zustand'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    year: '2021',
    title: 'JWT Auth Task API',
    desc: 'REST API backend implementing JWT authentication, refresh tokens, and user role validation.',
    techStack: ['NestJS', 'PostgreSQL', 'Prisma', 'JWT'],
    githubUrl: '#',
  },
]


export default function Works() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isArchiveOpen, setIsArchiveOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArchive = archiveProjects.filter(project => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.desc.toLowerCase().includes(query) ||
      project.techStack.some(tech => tech.toLowerCase().includes(query))
    );
  });


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

      {/* Archive Section Toggle */}
      <div className={styles.archiveToggleContainer}>
        <button
          className={`${styles.archiveToggleBtn} glass`}
          onClick={() => setIsArchiveOpen(!isArchiveOpen)}
        >
          {isArchiveOpen ? 'Hide Archive Projects ↑' : 'Show All Projects Archive ↓'}
        </button>
      </div>

      <AnimatePresence>
        {isArchiveOpen && (
          <motion.div
            className={styles.archiveWrapper}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.archiveContainer}>
              <div className={styles.archiveHeader}>
                <h3 className="headline-md">Project Archive</h3>
                <input
                  type="text"
                  placeholder="Search by project name or tech stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.archiveSearch}
                />
              </div>

              <div className={styles.tableResponsive}>
                <table className={styles.archiveTable}>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Project</th>
                      <th className={styles.hideOnMobile}>Description</th>
                      <th>Built With</th>
                      <th>Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredArchive.length > 0 ? (
                      filteredArchive.map((project, idx) => (
                        <tr key={idx}>
                          <td className={styles.tableYear}>{project.year}</td>
                          <td className={styles.tableTitle}>{project.title}</td>
                          <td className={`${styles.tableDesc} ${styles.hideOnMobile}`}>{project.desc}</td>
                          <td className={styles.tableTech}>
                            <div className={styles.techBadgeList}>
                              {project.techStack.map((tech) => (
                                <span key={tech} className={styles.archiveTechTag}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className={styles.tableLinks}>
                            <div className={styles.linkGroup}>
                              {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.archiveLink}>
                                  Demo ↗
                                </a>
                              )}
                              {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.archiveLink}>
                                  GitHub ↗
                                </a>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className={styles.noResults}>
                          No projects found matching &quot;{searchQuery}&quot;
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
