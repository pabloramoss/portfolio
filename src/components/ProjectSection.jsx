import React from 'react';
import ProjectCard from './ProjectCard';
import { Grid, Stack, GridItem, Heading } from '@chakra-ui/react'
import config from '../config';

const ProjectSection = ()=> {

  return(
    <Stack id="projects" alignItems="center" pb="150px" pt="100px">
      <Heading pb="50px">PROYECTOS</Heading>
      <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} gap={6}>
        <GridItem>
          <ProjectCard 
          title="Valobrain" 
          src={config.project1Banner} 
          tech={["Next.js", "Chakra-UI"]}
          url={config.project1Url}
          github={config.project1Github}
          />
        </GridItem>
        <GridItem>
          <ProjectCard 
          title="My blog" 
          tech={["Next.js", "Chakra-UI", "SSR", "Markdown"]}src={config.project2Banner}
          url={config.project2Url}
          github={config.project2Github}
          />
        </GridItem>
        <GridItem>
          <ProjectCard 
          title="My portfolio" 
          tech={["React", "Chakra-UI"]}
          src={config.project3Banner}
          url={config.project3Url}
          github={config.project3Github}
          />
        </GridItem>
        <GridItem>
          <ProjectCard 
          title="CA Awards" 
          tech={["Next.js", "Chakra-UI"]} 
          src={config.project4Banner}
          url={config.project4Url}
          github={config.project1Github}
          />
        </GridItem>
        <GridItem>
          <ProjectCard 
          title="Giuseppe barber" 
          tech={["Next.js", "Chakra-UI"]} 
          src={config.project5Banner}
          url={config.project5Url}
          github={config.project1Github}
          />
        </GridItem>
        <GridItem>
          <ProjectCard 
          title="Gecomm" 
          tech={["Next.js", "Chakra-UI", "Firestore", "SSR"]} 
          src={config.project6Banner}
          url={config.project6Url}
          github={config.project1Github}
          />
        </GridItem>
      </Grid>
    </Stack>
  )
}
export default ProjectSection