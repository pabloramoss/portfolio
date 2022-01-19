import React from 'react'
import { Flex, Link } from '@chakra-ui/react'


function Navbar() {

  return (
    <Flex bg="#160f1b" height="6vh" width="100vw" color="white" justifyContent="flex-end" position="fixed">
      <Flex gap="20px" me="32px" alignItems="center">
        <Link>Inicio</Link>
        <Link>Proyectos</Link>
        <Link display="none">Blog</Link>
        <Link>Contacto</Link>
      </Flex>
    </Flex>
  )
}

export default Navbar
