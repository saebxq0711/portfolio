import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import Footer from "./components/Footer"
import "./App.css"


function App() {
  return (
    <div className="min-h-screen bg-black-primary text-accent-white font-inter">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
