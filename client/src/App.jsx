import { Routes, Route } from 'react-router-dom'
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Gallery from "./components/Gallery"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Skills />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/gallery/:slug" element={<Gallery />} />
      </Routes>
    </>
  )
}
