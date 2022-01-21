import React, {useState} from 'react'
import { Flex, Link, IconButton,} from '@chakra-ui/react'
import {HashLink,} from "react-router-hash-link"
import { FaWindowClose, FaBars } from 'react-icons/fa'



function Navbar() {
  const [display, setDisplay] = useState("none")

  return (
    <Flex bg="#160f1b" height="6vh" width="100vw" color="white" justifyContent="flex-end" position="fixed">
      <Flex me={8}>
        <Flex alignItems="center" gap="20px" me="32px" display={["none", "none", "flex", "flex"]}>
        <HashLink to="#" smooth>Inicio</HashLink>
        <HashLink to="#projects" smooth>Proyectos</HashLink>
        <Link display="none">Blog</Link>
        <HashLink to="#contact">Contacto</HashLink>
        </Flex>
        <IconButton 
        size="lg" 
        bg="#160f1b"
        mr={2} 
        icon={<FaBars />}
        display={["flex", "flex", "none", "none"]}
        onClick={()=> setDisplay("flex")}
        _hover={{bg:"#1e1727"}}
         />
      </Flex>
      <Flex
      w="100vw"
      bgColor="#160f1b"
      zIndex={20}
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      overflowY="auto"
      direction="column"
      display={display}
      >
        <Flex justifyContent="end" me={8}>
          <IconButton
          mt='2'
          mr="2"
          size='md'
          bg="#160f1b"
          icon={<FaWindowClose />}
          onClick={()=> setDisplay("none")}
          _hover={{bg:"#1e1727"}}
          />
        </Flex>
        <Flex direction="column" gap={10} alignItems="center">
          <HashLink to="#" smooth onClick={()=> setDisplay("none")}>Inicio</HashLink>
          <HashLink to="#projects" smooth onClick={()=> setDisplay("none")}>Proyectos</HashLink>
          <Link display="none">Blog</Link>
          <HashLink to="#contact" onClick={()=> setDisplay("none")}>Contacto</HashLink>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
