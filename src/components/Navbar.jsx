import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import {HashLink} from "react-router-hash-link"



function Navbar() {

  return (
    <Flex bg="#160f1b" height="6vh" width="100vw" color="white" justifyContent="flex-end" position="fixed">
      <Flex gap="20px" me="32px" alignItems="center">
        <HashLink to="#" smooth>Inicio</HashLink>
        <HashLink to="#projects" smooth>Proyectos</HashLink>
        <Link display="none">Blog</Link>
        <HashLink to="#contact">Contacto</HashLink>
      </Flex>
    </Flex>
  )
}

export default Navbar
