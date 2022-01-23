import React from 'react';
import { Flex, Link, Icon, Text } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = ()=> {
  var year = new Date().getFullYear()

  return(
    <Flex direction="column" alignItems="center" py="50px">
      <Flex>
        <Link _hover={{color:"cyan"}} href='https://ar.linkedin.com/'><Icon w={10} h={10}><FaLinkedin /></Icon></Link>
        <Link _hover={{color:"cyan"}} href='https://github.com/pabloramoss'><Icon w={10} h={10}><FaGithub /></Icon></Link>
        <Link _hover={{color:"cyan"}} href='https://twitter.com'><Icon w={10} h={10}><FaTwitter /></Icon></Link>
      </Flex>
      <Text>© {year} - Pablo Ramos</Text>
    </Flex>
  )
}
export default Footer