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
        <Flex alignItems="center" gap={5}>
          <Link 
          _hover={{color:"cyan", bg:"gray.800"}} 
          href={config.linkedin}
          isExternal
          p={5}
          borderRadius={8}
          >
            <Icon 
            w={6} 
            h={6}
            as={FaLinkedin}
            me={4}
            />
            Linkedin
            </Link>
          <Link 
          _hover={{color:"cyan", bg:"gray.800"}} 
          href={config.telegram}
          isExternal
          p={5}
          borderRadius={8}
          >
            <Icon 
            w={6} 
            h={6}
            as={FaTelegram}
            me={4}
            />
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
            p={5}
            >
              <Icon
              w={6} 
              h={6}
              as={FaFileDownload}
              />
            </Link>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  )
}
export default Contact