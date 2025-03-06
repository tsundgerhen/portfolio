'use client';
import { Box, Text, chakra } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import ProjectCard from './project_card';
import { Project } from '@/types/index';

export default function ProjectOverview({ projectsData }: { projectsData: Project[] }) {
  // Limit to max 3 projects
  const router = useRouter();
  const limitedProjects = projectsData.slice(0, 3);

  return (
    <Box
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
          <Text fontSize={{ base: 'xl', md: '3xl' }} fontFamily={'var(--font-family)'}>
            <chakra.span
              fontSize={{ base: 'xl', md: '3xl' }}
              fontWeight={'semi-bold'}
              fontFamily={'var(--font-family)'}
              color={'var(--primary)'}>
              #
            </chakra.span>
            Projects
          </Text>
          <Box
            border={'1px solid var(--primary)'}
            marginTop={'2px'}
            w={{ base: '20vw', md: '35vw' }}></Box>
        </Box>
        <Text
          fontSize={{ base: 'xs', md: 'md' }}
          fontFamily='var(--font-family)'
          onClick={() => router.push('/works')}
          _hover={{ cursor: 'pointer', color: 'var(--primary)' }}
          color='var(--gray)'>
          View all {'~~>'}
        </Text>
      </Box>

      <Box display={{base:'none', md:'grid'}} gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap='20px' paddingTop={'8'}>
        {limitedProjects.slice(0, 3).map((project, index) => (
          // Limit to show a maximum of 3 items
          <ProjectCard key={index} projectInfo={project} small_project={false} />
        ))}
      </Box>
      <Box display={{base:'grid', md:'none'}} gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap='20px' paddingTop={'8'}>
        {limitedProjects.slice(0, 1).map((project, index) => (
          // Limit to show a maximum of 3 items
          <ProjectCard key={index} projectInfo={project} small_project={false} />
        ))}
      </Box>
    </Box>
  );
}
