import React from 'react';
import { Flex, Text } from '@chakra-ui/react'


const ProjectTags = (props)=> {

  return(
    <Flex bg="white" borderRadius={4} px={2}>
      <Text color="black">{props.name}</Text>
    </Flex>
  )
}
export default ProjectTags