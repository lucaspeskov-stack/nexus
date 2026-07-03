import Navbar from './components/Navbar.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import Gallery from './sections/Gallery.jsx';
import Reviews from './sections/Reviews.jsx';
import About from './sections/About.jsx';
import MapSection from './sections/MapSection.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-dvh">
      <a
        href="#servicos"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-rose-600 focus:px-4 focus:py-2 focus:text-cream-50"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <About />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
