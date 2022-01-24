import React from 'react';
import { Flex, Heading, Box, Image, Icon, Link, Stack, Grid } from '@chakra-ui/react'
import { FaGithub, FaShare } from "react-icons/fa";
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
      <Link>
        <Image src="https://via.placeholder.com/300" borderTopRadius={10}></Image>
      </Link>
      <Stack justifyContent="space-around" height="200px" mx="30px">
        <Link><Heading fontSize={30}>{props.title}</Heading></Link>
        <Grid templateColumns='repeat(2, 1fr)' gap={3}>
          {props.tech.map((item, index)=><ProjectTags key={index} name={item} />)}
        </Grid>
        <Flex>
          <Link _hover={{color:"cyan"}}><Icon w={10} h={10}><FaGithub /></Icon></Link>
          <Link _hover={{color:"cyan"}}><Icon w={10} h={10}><FaShare /></Icon></Link>
        </Flex>
      </Stack>
    </MotionBox>
  )
}
export default ProjectCard