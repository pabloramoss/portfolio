import React from 'react';
import { Box, Flex, Link, Icon, Text, color } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = ()=> {
  var year = new Date().getFullYear()

  return(
    <Flex direction="column" alignItems="center" py="50px">
      <Flex>
        <Link _hover={{color:"cyan"}}><Icon w={10} h={10}><FaLinkedin /></Icon></Link>
        <Link _hover={{color:"cyan"}}><Icon w={10} h={10}><FaGithub /></Icon></Link>
        <Link _hover={{color:"cyan"}}><Icon w={10} h={10}><FaTwitter /></Icon></Link>
      </Flex>
      <Text>© {year} - Pablo Ramos</Text>
    </Flex>
  )
}
export default Footer