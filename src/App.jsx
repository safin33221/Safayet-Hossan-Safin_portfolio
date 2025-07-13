import { useEffect, useState } from "react"
import AboutMe from "./Components/AboutMe"
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Loader from "./Components/Loader"
import Navbar from "./Components/Navbar"
import PrepareToProduction from "./Components/PrepareToProduction"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import { AOSProvider } from "./Provider/AosProvider"



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <div className="bg-primary max-w-screen-2xl mx-auto  ">
      <div className="bg-hero-pattern ">
        <Navbar />
        <Hero />

      </div>

      <AboutMe />
      <PrepareToProduction />
      <Skills />
      <Projects />
      <Contact />
      <AOSProvider />

    </div>
  )
}

export default App
