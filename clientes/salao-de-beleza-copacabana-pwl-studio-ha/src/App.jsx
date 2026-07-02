import Navbar from './components/Navbar.jsx';
import PhoneFab from './components/PhoneFab.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-bronze-600 focus:px-4 focus:py-2 focus:text-sand-50"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <About />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <PhoneFab />
    </div>
  );
}
