import AboutMe from "./Components/AboutMe"
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import PrepareToProduction from "./Components/PrepareToProduction"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"



function App() {


  return (
    <div className="bg-primary max-w-screen-2xl mx-auto  ">
      <div className="bg-hero-pattern ">
        <Navbar/>
        <Hero/>

      </div>
      
      <AboutMe/>
      <PrepareToProduction/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App
