import React from 'react';
import ProjectCard from './ProjectCard';
import { Grid, Stack, GridItem, Heading } from '@chakra-ui/react'


const ProjectSection = ()=> {

  return(
    <Stack id="projects" alignItems="center" pb="150px" pt="100px">
      <Heading pb="50px">PROYECTOS</Heading>
      <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} gap={6}>
        <GridItem><ProjectCard title="Valobrain" /></GridItem>
        <GridItem><ProjectCard title="My blog" /></GridItem>
        <GridItem><ProjectCard title="Gecomm" /></GridItem>
        <GridItem><ProjectCard title="My portfolio" /></GridItem>
        <GridItem><ProjectCard title="CA Awards" /></GridItem>
        <GridItem><ProjectCard title="Giuseppe barber" /></GridItem>
      </Grid>
    </Stack>
  )
}
export default ProjectSection