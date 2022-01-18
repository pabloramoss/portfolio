import { useState } from 'react'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'

function App() {

  return (
    <Stack bg="#110b16" color="white">
      <Navbar />
      <Hero />
      <Faq />
    </Stack>
  )
}

export default App
