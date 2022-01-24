import React from 'react';
import { Flex, Link, Icon, Text } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {motion} from "framer-motion"

const Footer = ()=> {
  var year = new Date().getFullYear()
  const MotionLink = motion(Link)

  return(
    <Flex direction="column" alignItems="center" py="50px">
      <Flex>
        <MotionLink whileHover={{scale: 1.2}} _hover={{color:"cyan"}} href='https://ar.linkedin.com/'><Icon w={10} h={10}><FaLinkedin /></Icon></MotionLink>
        <MotionLink whileHover={{scale: 1.2}} _hover={{color:"cyan"}} href='https://github.com/pabloramoss'><Icon w={10} h={10}><FaGithub /></Icon></MotionLink>
        <MotionLink whileHover={{scale: 1.2}} _hover={{color:"cyan"}} href='https://twitter.com'><Icon w={10} h={10}><FaTwitter /></Icon></MotionLink>
      </Flex>
      <Text>© {year} - Pablo Ramos</Text>
    </Flex>
  )
}
export default Footer