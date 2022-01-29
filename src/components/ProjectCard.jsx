import React from 'react';
import { 
  Flex, 
  Heading, 
  Box, 
  Image, 
  Icon, 
  Link, 
  Stack, 
  Grid 
} from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
import ProjectTags from './ProjectTags';
import {motion} from "framer-motion"



const ProjectCard = (props)=> {
  const MotionBox = motion(Box)

  return(
    <MotionBox 
    whileHover={{ 
      scale: 1.1, 
      boxShadow: "0px 0px 8px rgb(255,255,255)" }} 
    boxShadow='dark-lg' 
    height="500px" 
    width="300px" 
    bg="#1e1727" 
    borderRadius={10}>
      <Link href={props.url} isExternal>
        <Image src={props.src} borderTopRadius={10}></Image>
      </Link>
      <Stack 
      justifyContent="space-around" 
      height="200px" 
      mx="30px">
        <Link 
        href={props.url} 
        isExternal
        >
          <Heading 
          fontSize={30}>{props.title}
          </Heading>
        </Link>
        <Grid 
        templateColumns='repeat(2, 1fr)' 
        gap={3}>
          {props.tech.map((item, index)=><ProjectTags key={index} name={item} />)}
        </Grid>
        <Flex>
          <Link 
          _hover={{color:"cyan"}}
          href={props.github} 
          isExternal
          ><Icon w={6} h={6} as={FaGithub} /></Link>
        </Flex>
      </Stack>
    </MotionBox>
  )
}
export default ProjectCard