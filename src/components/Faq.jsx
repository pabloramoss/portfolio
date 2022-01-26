import React from 'react';
import {
  Stack,
  Heading
} from '@chakra-ui/react'
import FaqComponent from './FaqComponent';
import config from '../config';

const Faq = ()=> {

  return(
    <Stack alignItems="center" gap="10px" pb="100px">
      <Heading pb="50px">FAQ</Heading>
      <FaqComponent body={config.about} title={config.aboutTitle}/>
      <FaqComponent body={config.hardTech} title={config.hardTechTitle}/>
      <FaqComponent body={config.softTech} title={config.softTechTitle}/>
      <FaqComponent body={config.future} title={config.futureTitle}/>
    </Stack>
  )
}
export default Faq