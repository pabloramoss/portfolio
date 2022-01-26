import React from 'react';
import {
  Stack,
  Heading,
  Text,
  Link,
  Icon,
  Flex
} from '@chakra-ui/react'
import { FaTelegram, FaDownload, FaLinkedin } from "react-icons/fa";


const Contact = ()=> {

  return(
    <Stack id="contact" alignItems="center" gap="10px" pb="100px">
      <Heading pb="50px">CONTACTO</Heading>
      <Stack>  
        <Text>Puedes contactarme por: </Text>
        <Flex gap={10}>
          <Link 
          _hover={{color:"cyan"}} 
          href='https://ar.linkedin.com/'
          >
            <Icon mt={2} w={10} h={10}><FaLinkedin /></Icon>
            Linkedin
            </Link>
          <Link 
          _hover={{color:"cyan"}} 
          href='https://ar.linkedin.com/'
          >
            <Icon mt={2} w={10} h={10}><FaTelegram /></Icon>
            Telegram
          </Link>
        </Flex>
        <Flex pt={5} gap={8}>
          <Text>Puedes descargar mi CV aquí: </Text>
          <Link _hover={{color:"cyan"}} href='https://ar.linkedin.com/'><Icon w={10} h={10}><FaDownload /></Icon></Link>
        </Flex>
      </Stack>
    </Stack>
  )
}
export default Contact