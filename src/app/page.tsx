import Navbar from '@/app/navbar/component/Navbar'
import Hero from '@/app/hero/component/Hero'
import About from '@/app/about/component/About'
import Expertise from '@/app/expertise/component/Expertise'
import Works from '@/app/works/component/Works'
import Experience from '@/app/experience/component/Experience'
import Footer from '@/app/footer/component/Footer'
import WebGLBackground from '@/app/webgl/component/WebGLBackground'
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
