import React from 'react'
import { Box, Flex, Stack, Heading, Button } from '@chakra-ui/react'

function Hero() {

  return (
    <Stack>
      <Box>
        <Heading>Hola, soy <span>Pablo</span></Heading>
        <Heading size="md">Frontend developer</Heading>
        <Button variant='outline'>VER PROYECTOS</Button>
      </Box>
    </Stack>
  )
}

export default Hero
