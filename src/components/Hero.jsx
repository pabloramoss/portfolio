import React from 'react'
import { Box, Flex, Stack, Heading, Button, Text } from '@chakra-ui/react'
import {HashLink} from "react-router-hash-link"
import {motion} from "framer-motion"

function Hero() {
  const MotionStack = motion(Stack)
  const MotionText = motion(Text)
  const MotionBox = motion(Box)

  return (
    <MotionStack height="100vh"  initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1, duration: 1.5}}>
      <Flex 
      direction="column" 
      height="60vh" 
      gap={6} 
      ms={{base:"0", md:"25vw"}}  
      pt="300px" 
      alignItems={{base:"center", md:"flex-start"}}>
        <Stack spacing={3}>
        <Heading size="2xl">Hola, soy <Box as="span" bgGradient='linear(to-r, #01f5dc, #01b2e4)' bgClip='text'>Pablo</Box></Heading>
        <MotionText 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:2, duration: 1.5}} 
        fontSize='2xl'>Frontend developer</MotionText>
        </Stack>
        <HashLink to="#projects" smooth>
          <MotionBox 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:3, duration: 1.5}}>
            <Button colorScheme='cyan' width="200px" variant='outline'>VER PROYECTOS</Button>
          </MotionBox>
        </HashLink>
      </Flex>
    </MotionStack>
  )
}

export default Hero
