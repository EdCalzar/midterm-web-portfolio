import { useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import HomeSection from "./components/homeSection"
import AboutSection from "./components/aboutSection"
import ProjectSection from "./components/projectSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
  // Create refs for each section
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section") // 👈 add animation class
        } else {
          entry.target.classList.remove("show-section") // 👈 remove animation class
        }
      })
    },
    { threshold: 0.3 }
  )

  const elements = [homeRef, aboutRef, projectRef, contactRef]
  elements.forEach((ref) => {
    if (ref.current) observer.observe(ref.current)
  })

  return () => {
    elements.forEach((ref) => {
      if (ref.current) observer.unobserve(ref.current)
    })
  }
}, [])


  return (
    <>
      <Navbar />

      <section id="home" ref={homeRef} className="observed show-section">
        <HomeSection />
      </section>

      <section id="about" ref={aboutRef} className="observed">
        <AboutSection />
      </section>

      <section id="projects" ref={projectRef} className="observed">
        <ProjectSection />
      </section>

      <section id="contact" ref={contactRef} className="observed">
        <ContactSection />
      </section>

      <Footer />
    </>
  )
}
