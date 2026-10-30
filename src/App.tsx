import { useCallback, useEffect, useState } from 'react'
import { BootLoader } from './components/BootLoader'
import { Header } from './components/Header'
import { StatusBar } from './components/StatusBar'
import { scrollToId, startSmoothScroll } from './lib/scroll'
import { About } from './sections/About'
import { Blog } from './sections/Blog'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Terminal } from './sections/Terminal'

export default function App() {
  // The page mounts once the boot terminal finishes, so the hero's intro animations play in view.
  const [booted, setBooted] = useState(false)
  const [loaderGone, setLoaderGone] = useState(false)
  const finishBoot = useCallback(() => setBooted(true), [])
  const removeLoader = useCallback(() => setLoaderGone(true), [])

  useEffect(() => startSmoothScroll(), [])

  // The browser's own jump to #section fires before the page exists, so redo it after boot.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (booted && id) window.setTimeout(() => scrollToId(id), 50)
  }, [booted])

  return (
    <>
      {!loaderGone && <BootLoader leaving={booted} onFinish={finishBoot} onExited={removeLoader} />}
      {booted && (
        <>
          <Header />
          <main>
            <Hero />
            <Terminal />
            <About />
            <Projects />
            <Experience />
            <Education />
            <Blog />
            <Contact />
          </main>
          <StatusBar />
        </>
      )}
    </>
  )
}
