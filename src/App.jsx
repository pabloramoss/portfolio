import { useState } from 'react'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
import Footer from './components/Footer'
import ProjectSection from './components/ProjectSection'

function App() {

  return (
    <Stack bg="#110b16" color="white">
      <Navbar />
      <Hero />
      <ProjectSection />
      <Faq />
      <Footer />
    </Stack>
  )
}

export default App
