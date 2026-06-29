import Navbar from './components/Navbar'
import WhatsAppFab from './components/WhatsAppFab'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import About from './sections/About'
import MapSection from './sections/MapSection'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="topo">
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <Reviews />
        <About />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
