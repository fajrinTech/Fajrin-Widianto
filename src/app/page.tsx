import Navbar from '@/app/components/Navbar/Navbar'
import Hero from '@/app/components/Hero/Hero'
import About from '@/app/components/About/About'
import Expertise from '@/app/components/Expertise/Expertise'
import Works from '@/app/components/Works/Works'
import Experience from '@/app/components/Experience/Experience'
import Footer from '@/app/components/Footer/Footer'
import WebGLBackground from '@/app/components/WebGLBackground/WebGLBackground'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <WebGLBackground />
      <Navbar />
      <main className={styles.main}>
        {/* Hero is full-width — no container wrap */}
        <div className={styles.heroWrapper}>
          <Hero />
        </div>
        {/* Other sections use container */}
        <div className="container">
          <div className={styles.sectionGap}>
            <About />
          </div>
          <div className={styles.sectionGap}>
            <Expertise />
          </div>
          <div className={styles.sectionGap}>
            <Works />
          </div>
          <div className={styles.sectionGap}>
            <Experience />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
