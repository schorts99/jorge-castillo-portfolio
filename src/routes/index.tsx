import { createFileRoute } from '@tanstack/react-router'

import Presentation from '@/sections/Presentation'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import WorkExperience from '@/sections/WorkExperience'
import FeaturedProjects from '@/sections/FeaturedProjects'
import Contact from '@/sections/Contact'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Presentation />
      <About />
      <Skills />
      <WorkExperience />
      <FeaturedProjects />
      <Contact />
    </>
  )
}
