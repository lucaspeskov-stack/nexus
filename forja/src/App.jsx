import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Agents from './pages/Agents'
import { useSmoothScroll } from './lib/useSmoothScroll'

// 3D carregado de forma assíncrona — não bloqueia o primeiro paint
const ForgeBackground = lazy(() => import('./three/ForgeBackground'))

// Volta ao topo ao trocar de página
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  useSmoothScroll()

  return (
    <>
      {/* base escura imediata enquanto o 3D carrega */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-ink-900" />
      <Suspense fallback={null}>
        <ForgeBackground />
      </Suspense>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
