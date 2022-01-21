import React from 'react';
import {
  Box,
  Stack,
  Flex,
  Heading
} from '@chakra-ui/react'
import FaqComponent from './FaqComponent';

const Faq = ()=> {
  const aboutBody = "lorem impsum"
  const hardTechBody = "Frontend: Html, Css, Javascript, React, Next.js, Typescript, Frame Motion, Chakra-UI"
  const softTechBody = "lorem impsum"
  const futureBody = "lorem impsum"
  const contactBody = "lorem impsum"
  const aboutTitle = "¿Quién soy?"
  const hardTechTitle = "Habilidades técnicas"
  const softTechTitle = "Habilidades blandas"
  const futureTitle = "Planes a futuro"
  const contactTitle = "Contacto"

  return(
    <Stack alignItems="center" gap="10px" pb="100px">
      <Heading pb="50px">FAQ</Heading>
      <FaqComponent body={aboutBody} title={aboutTitle}/>
      <FaqComponent body={hardTechBody} title={hardTechTitle}/>
      <FaqComponent body={softTechBody} title={softTechTitle}/>
      <FaqComponent body={futureBody} title={futureTitle}/>
      <FaqComponent body={contactBody} title={contactTitle}/>
    </Stack>
  )
}
export default Faq