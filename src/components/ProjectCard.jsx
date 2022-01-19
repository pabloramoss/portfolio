import React from 'react';
import { Flex, Heading, Box, Image, Icon, Link, Stack } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin, FaShare } from "react-icons/fa";
import ProjectTags from './ProjectTags';



const ProjectCard = (props)=> {

  return(
    <Box height="500px" width="300px" bg="#1e1727" borderRadius={10}>
      <Link>
        <Image src="https://via.placeholder.com/300" borderTopRadius={10}></Image>
      </Link>
      <Stack justifyContent="space-around" height="200px" ms="30px">
        <Link><Heading fontSize={30}>{props.title}</Heading></Link>
        <Stack direction="row">
          <ProjectTags />
          <ProjectTags />
        </Stack>
        <Flex>
          <Link _hover={{color:"cyan"}}><Icon w={10} h={10}><FaGithub /></Icon></Link>
          <Link _hover={{color:"cyan"}}><Icon w={10} h={10}><FaShare /></Icon></Link>
        </Flex>
      </Stack>
    </Box>
  )
}
export default ProjectCard