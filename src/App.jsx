import AboutMe from "./Components/AboutMe"
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"



function App() {


  return (
    <div className="bg-primary place-items-center place-content-center">
      <div className="bg-hero-pattern">
        <Navbar/>
        <Hero/>

      </div>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App
