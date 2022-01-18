import React from 'react';
import {
  Box,
  Stack,
  Flex
} from '@chakra-ui/react'
import FaqComponent from './FaqComponent';

const Faq = ()=> {
  const aboutBody = "lorem impsum"
  const hardTechBody = "lorem impsum"
  const softTechBody = "lorem impsum"
  const futureBody = "lorem impsum"
  const contactBody = "lorem impsum"
  const aboutTitle = "¿Quién soy?"
  const hardTechTitle = "Habilidades técnicas"
  const softTechTitle = "Habilidades blandas"
  const futureTitle = "Planes a futuro"
  const contactTitle = "Contacto"

  return(
    <Stack gap="10px">
      <FaqComponent body={aboutBody} title={aboutTitle}/>
      <FaqComponent body={hardTechBody} title={hardTechTitle}/>
      <FaqComponent body={softTechBody} title={softTechTitle}/>
      <FaqComponent body={futureBody} title={futureTitle}/>
      <FaqComponent body={contactBody} title={contactTitle}/>
    </Stack>
  )
}
export default Faq