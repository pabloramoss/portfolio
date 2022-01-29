import React from 'react';
import { Flex, Link, Icon, Text } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {motion} from "framer-motion"
import config from '../config';

const Footer = ()=> {
  var year = new Date().getFullYear()
  const MotionLink = motion(Link)

  return(
    <Flex direction="column" alignItems="center" py="50px">
      <Flex gap={4}>
        <MotionLink
        whileHover={{scale: 1.2}} 
        _hover={{color:"cyan"}} 
        href={config.linkedin}
        isExternal
        >
          <Icon 
          w={6} 
          h={6}
          as={FaLinkedin}
          />
        </MotionLink>
        <MotionLink 
        whileHover={{scale: 1.2}} 
        _hover={{color:"cyan"}} 
        href={config.github}
        isExternal
        >
          <Icon 
          w={6} 
          h={6}
          as={FaGithub}
          />
        </MotionLink>
        <MotionLink 
        whileHover={{scale: 1.2}} 
        _hover={{color:"cyan"}} 
        href={config.twitter}
        isExternal
        >
          <Icon 
          w={6} 
          h={6}
          as={FaTwitter}
          />
        </MotionLink>
      </Flex>
      <Text>© {year} - Pablo Ramos</Text>
    </Flex>
  )
}
export default Footer