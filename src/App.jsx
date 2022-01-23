import { Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
import Footer from './components/Footer'
import ProjectSection from './components/ProjectSection'
import {
  BrowserRouter,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Stack bg="#110b16" color="white">
        <Navbar />
        <Hero />
        <ProjectSection id="projects" />
        <Faq />
        <Footer />
      </Stack>
    </BrowserRouter>
  )
}

export default App
