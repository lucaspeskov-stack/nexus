import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import StarField from './components/StarField'
import Progress from './components/Progress'
import { SCENES } from './data/content'

import Intro from './sections/Intro'
import Encounter from './sections/Encounter'
import Constellation from './sections/Constellation'
import TimeScene from './sections/TimeScene'
import Reasons from './sections/Reasons'
import Dreams from './sections/Dreams'
import Quiz from './sections/Quiz'
import Letter from './sections/Letter'
import Finale from './sections/Finale'

// Mapa: nome da cena → componente
const SCENE_COMPONENTS = {
  intro: Intro,
  encounter: Encounter,
  constellation: Constellation,
  time: TimeScene,
  reasons: Reasons,
  dreams: Dreams,
  quiz: Quiz,
  letter: Letter,
  finale: Finale,
}

export default function App() {
  const [index, setIndex] = useState(0)

  const goTo = useCallback((i) => {
    const clamped = Math.max(0, Math.min(SCENES.length - 1, i))
    setIndex(clamped)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const restart = useCallback(() => goTo(0), [goTo])

  // Sempre começa a cena no topo
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [index])

  const sceneName = SCENES[index]
  const SceneComponent = SCENE_COMPONENTS[sceneName]

  return (
    <main className="bg-deep-space relative min-h-[100svh] w-full overflow-hidden">
      <StarField />
      <Progress current={index} onJump={goTo} />

      <AnimatePresence mode="wait">
        <SceneComponent
          key={sceneName}
          onNext={next}
          onRestart={restart}
        />
      </AnimatePresence>
    </main>
  )
}
