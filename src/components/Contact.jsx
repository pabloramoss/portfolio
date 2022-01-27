import React from 'react';
import {
  Stack,
  Heading,
  Text,
  Link,
  Icon,
  Flex
} from '@chakra-ui/react'
import { 
  FaTelegram,
  FaFileDownload, 
  FaLinkedin 
} from "react-icons/fa";
import config from '../config';


const Contact = ()=> {

  return(
    <Stack id="contact" alignItems="center" gap="10px" pb="100px">
      <Heading pb="50px">CONTACTO</Heading>
      <Stack>  
        <Text>Puedes contactarme por: </Text>
        <Flex gap={10}>
          <Link 
          _hover={{color:"cyan", bg:"gray.800"}} 
          href={config.linkedin}
          isExternal
          px={5}
          borderRadius={8}
          >
            <Icon 
            mt={2} 
            w={10} 
            h={10}>
              <FaLinkedin />
            </Icon>
            Linkedin
            </Link>
          <Link 
          _hover={{color:"cyan", bg:"gray.800"}} 
          href={config.telegram}
          isExternal
          px={5}
          borderRadius={8}
          >
            <Icon 
            mt={2} 
            w={10} 
            h={10}>
              <FaTelegram />
            </Icon>
            Telegram
          </Link>
        </Flex>
        <Flex 
        pt={5} 
        gap={8}
        >
          <Flex alignItems="center">
            <Text>Puedes descargar mi CV aquí: </Text>
            <Link 
            _hover={{color:"cyan", bg:"gray.800"}} 
            href={config.cv}
            isExternal
            borderRadius={8}
            px={5}
            >
              <Icon
              pt={2}
              ps={2} 
              w={10} 
              h={10}
            >
                <FaFileDownload />
              </Icon>
            </Link>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  )
}
export default Contact