import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import AlbumDesign from "./components/AlbumDesign"; // import the new AlbumDesign component

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Skills />
              <Portfolio />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />
        
        {/* Gallery route with slug and albumId */}
        <Route path="/gallery/:slug/:albumId" element={<AlbumDesign />} />
        <Route path="/gallery/:slug" element={<Gallery />} />
      </Routes>
    </>
  );
}
