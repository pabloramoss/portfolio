import React from 'react';
import ProjectCard from './ProjectCard';
import { Grid, Stack, GridItem, Heading } from '@chakra-ui/react'

const ProjectSection = ()=> {

  return(
    <Stack id="projects" alignItems="center" pb="150px" pt="100px">
      <Heading pb="50px">PROYECTOS</Heading>
      <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} gap={6}>
        <GridItem><ProjectCard title="Valobrain" tech={["Next.js", "Chakra-UI"]} /></GridItem>
        <GridItem><ProjectCard title="My blog" tech={["Next.js", "Chakra-UI", "SSR", "React-router", "React"]} /></GridItem>
        <GridItem><ProjectCard title="My portfolio" tech={["Next.js", "Chakra-UI"]} /></GridItem>
        <GridItem><ProjectCard title="CA Awards" tech={["Next.js", "Chakra-UI"]} /></GridItem>
        <GridItem><ProjectCard title="Giuseppe barber" tech={["Next.js", "Chakra-UI"]} /></GridItem>
        <GridItem><ProjectCard title="Gecomm" tech={["Next.js", "Chakra-UI"]} /></GridItem>
      </Grid>
    </Stack>
  )
}
export default ProjectSection