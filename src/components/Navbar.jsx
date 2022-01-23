import React, {useState} from 'react'
import { Flex, Link, IconButton,} from '@chakra-ui/react'
import {HashLink,} from "react-router-hash-link"
import { FaWindowClose, FaBars } from 'react-icons/fa'

function Navbar() {
  const [display, setDisplay] = useState("none")

  return (
    <Flex 
    zIndex={5} 
    bg="#160f1b" 
    height="6vh" 
    width="100vw" 
    color="white" 
    justifyContent="flex-end" 
    position="fixed">
      <Flex 
      me={8} 
      alignItems="center">
        <Flex 
        alignItems="center"
        gap="30px" 
        me="32px" 
        display={["none", "none", "flex", "flex"]}>
          <HashLink to="#" smooth>Inicio</HashLink>
          <HashLink to="#projects" smooth>Proyectos</HashLink>
          <Link display="none">Blog</Link>
          <HashLink to="#contact">Contacto</HashLink>
        </Flex>
        <IconButton 
        size="md" 
        bg="#160f1b"
        mr={2} 
        icon={<FaBars />}
        display={["flex", "flex", "none", "none"]}
        onClick={()=> setDisplay("flex")}
        _hover={{bg:"#1e1727"}}
        />
        <Flex
        w="100vw"
        bgColor="#160f1b"
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        direction="column"
        display={display}
        >
          <Flex 
          alignItems="center" 
          justifyContent="end" 
          me="40px" 
          mt={2}>
            <IconButton
            size='md'
            bg="#160f1b"
            icon={<FaWindowClose />}
            onClick={()=> setDisplay("none")}
            _hover={{bg:"#1e1727"}}
            />
          </Flex>
          <Flex 
          direction="column" 
          gap="100px" 
          alignItems="center">
            <HashLink 
            to="#" 
            smooth 
            onClick={()=> setDisplay("none")}>Inicio
            </HashLink>
            <HashLink 
            to="#projects" 
            smooth 
            onClick={()=> setDisplay("none")}>Proyectos
            </HashLink>
            <Link display="none">Blog</Link>
            <HashLink
            to="#contact" 
            onClick={()=> setDisplay("none")}>Contacto
            </HashLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
