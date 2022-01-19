import React from 'react'
import { Box, Flex, Stack, Heading, Button, Text } from '@chakra-ui/react'

function Hero() {

  return (
    <Stack height="100vh">
      <Flex direction="column" height="60vh" gap={6} ms={{base:"0", md:"25vw"}}  pt="300px" alignItems={{base:"center", md:"flex-start"}}>
        <Stack spacing={3}>
        <Heading size="2xl">Hola, soy <Box as="span" bgGradient='linear(to-r, #01f5dc, #01b2e4)' bgClip='text'>Pablo</Box></Heading>
        <Text fontSize='2xl'>Frontend developer</Text>
        </Stack>
        <Button colorScheme='cyan' width="200px" variant='outline'>VER PROYECTOS</Button>
      </Flex>
    </Stack>
  )
}

export default Hero
