import { createFileRoute } from '@tanstack/react-router'

import Presentation from '@/sections/Presentation'
import About from '@/sections/About'
import HowIWork from '@/sections/HowIWork'
import FeaturedProjects from '@/sections/FeaturedProjects'
import CaseStudies from '@/sections/CaseStudies'
import SimplyProducts from '@/sections/SimplyProducts'
import Skills from '@/sections/Skills'
import WorkExperience from '@/sections/WorkExperience'
import Contact from '@/sections/Contact'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Presentation />
      <About />
      <HowIWork />
      <FeaturedProjects />
      <CaseStudies />
      <SimplyProducts />
      <Skills />
      <WorkExperience />
      <Contact />
    </>
  )
}
