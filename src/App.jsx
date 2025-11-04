import Navbar from "./components/Navbar"
import HomeSection from "./components/homeSection"
import AboutSection from "./components/aboutSection"
import ProjectSection from "./components/projectSection"
import ContactSection from "./components/ContactSection"
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection/>
    </>
  )
} 