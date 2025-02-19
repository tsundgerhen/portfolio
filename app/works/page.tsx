'use client';
import { Box, Text, chakra } from '@chakra-ui/react';

import '@/app/globals.css';

import Navbar from '@/components/global/navbar';
import MediaBar from '@/components/global/mediaBar';

import projectData from '@/components/projects/project_info.json' assert { type: 'json' };
import { Project, Skill } from '@/types/index';
import Footer from '@/components/global/footer';
import ProjectCard from '@/components/projects/project_card';
export default function Works() {
  const { projects, small_projects } = projectData;
  const finishedProjects = projects.filter((project) => project.finished);
  const unfinishedProjects = projects.filter((project) => !project.finished);
  console.log("unfinishedProjects, ", unfinishedProjects)
  return (
    <div>
      <Box display='flex' flexDirection='row' width={'100%'} bg='#282C33' paddingBottom={'12'}>
        {/* Media Bar */}
        <Box paddingLeft='3%'>
          <MediaBar />
        </Box>

        {/* Content section */}
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='start'
          alignItems='start'
          paddingLeft='6%'
          width='85%'
          justifyItems={'start'}>
          <Navbar />
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='start'
            alignItems='start'
            width='100%'
            justifyItems={'start'}
            fontFamily={'var(--mono-font)'}
            paddingTop={'6'}>
            <Text fontSize={'2xl'} fontWeight={'bold'}>
              <chakra.span color={'var(--primary)'}>/</chakra.span>projects
            </Text>
            <Text fontSize={'md'} paddingTop={'4'}>
              list of my projects
            </Text>
          </Box>
          <Box
            fontFamily={'var(--mono-font)'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'start'}
            justifyContent={'start'}
            w={'100%'}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              w={'100%'}>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                gap='20px'
                paddingY={'2vw'}>
                <Text fontSize={'2xl'} fontFamily={'var(--font-family)'}>
                  <chakra.span
                    fontSize={'2xl'}
                    fontWeight={'semi-bold'}
                    fontFamily={'var(--font-family)'}
                    color={'var(--primary)'}>
                    #
                  </chakra.span>
                  completed-projects
                </Text>
              </Box>
            </Box>

            <Box
              display='flex'
              flexDirection='row'
              flexWrap='wrap'
              justifyContent='start'
              alignItems='start'
              gap='20px'
              maxW={"100%"}>
              {finishedProjects.map((project, index) => (
                <ProjectCard key={index} projectInfo={project} small_project={false} />
              ))}
            </Box>
          </Box>
          <Box
            fontFamily={'var(--mono-font)'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'start'}
            justifyContent={'start'}
            w={'100%'}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              w={'100%'}>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                gap='20px'
                paddingY={'2vw'}>
                <Text fontSize={'2xl'} fontFamily={'var(--font-family)'}>
                  <chakra.span
                    fontSize={'2xl'}
                    fontWeight={'semi-bold'}
                    fontFamily={'var(--font-family)'}
                    color={'var(--primary)'}>
                    #
                  </chakra.span>
                  working-projects
                </Text>
              </Box>
            </Box>

            <Box
              display='flex'
              flexDirection='row'
              flexWrap='wrap'
              justifyContent='start'
              alignItems='start'
              gap='20px'
              maxW={"100%"}>
              {unfinishedProjects.map((project, index) => (
                <ProjectCard key={index} projectInfo={project} small_project={false} />
              ))}
            </Box>
          </Box>
          <Box
            fontFamily={'var(--mono-font)'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'start'}
            justifyContent={'start'}
            w={'100%'}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              w={'100%'}>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                gap='20px'
                paddingY={'2vw'}>
                <Text fontSize={'2xl'} fontFamily={'var(--font-family)'}>
                  <chakra.span
                    fontSize={'2xl'}
                    fontWeight={'semi-bold'}
                    fontFamily={'var(--font-family)'}
                    color={'var(--primary)'}>
                    #
                  </chakra.span>
                  small-projects
                </Text>
              </Box>
            </Box>

            <Box
              display='flex'
              flexDirection='row'
              flexWrap='wrap'
              justifyContent='start'
              alignItems='start'
              gap='20px'
              maxW={"100%"}>
              {small_projects.map((project, index) => (
                <ProjectCard key={index} projectInfo={project} small_project={true}  />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
