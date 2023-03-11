import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Plans from "./components/Plans"
import Video_team_seccion from "./components/Video-team-seccion"

function App() {
  return ( 
    <div className="flex flex-col items-center justify-center bodycolor">
      <Header />
      <Hero />
      <Video_team_seccion/>
      <Benefits />
      <Plans />
      <Footer />
    </div>
  )
}

export default App
