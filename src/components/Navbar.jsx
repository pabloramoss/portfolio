import React, {useState} from 'react'
import { Flex, Link, IconButton, Heading} from '@chakra-ui/react'
import {HashLink,} from "react-router-hash-link"
import { FaWindowClose, FaBars } from 'react-icons/fa'
import {motion} from "framer-motion"
import config from '../config'

function Navbar() {
  const [display, setDisplay] = useState("none")
  const MotionFlex = motion(Flex)

  return (
    <MotionFlex 
    initial={{y:-100}}
    animate={{y:0}}
    transition={{duration: 0.5}}
    zIndex={5} 
    bg="#160f1b" 
    height="6vh" 
    width="100vw" 
    color="white" 
    justifyContent="space-between" 
    position="fixed"
    alignItems="center"
    color="cyan.500">
      <HashLink to="#" smooth><Heading fontSize={20} ms={10}>PABLO</Heading></HashLink>
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
          <Link 
          display="none" 
          href={config.project2Url}
          isExternal
          >Blog</Link>
          <HashLink to="#contact" smooth>Contacto</HashLink>
        </Flex>
        <IconButton 
        size="md" 
        bg="#160f1b"
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
            <Link 
            display="none"
            href={config.project2Url}
            >Blog</Link>
            <HashLink
            to="#contact"
            smooth 
            onClick={()=> setDisplay("none")}>Contacto
            </HashLink>
          </Flex>
        </Flex>
      </Flex>
    </MotionFlex>
  )
}

export default Navbar