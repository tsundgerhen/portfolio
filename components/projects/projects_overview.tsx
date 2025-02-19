'use client';
import { Box, Text, chakra } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import ProjectCard from './project_card';
import {Project} from "@/types/index"


export default function ProjectOverview({ projectsData }: { projectsData: Project[] }) {
  // Limit to max 3 projects
  const router = useRouter();
  const limitedProjects = projectsData.slice(0, 3);

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'start'} w={'100%'}>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} w={'100%'}>
        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' gap='20px' paddingY={'2vw'}>
          <Text fontSize={'3xl'} fontFamily={'var(--font-family)'}>
            <chakra.span fontSize={'3xl'} fontWeight={'semi-bold'} fontFamily={'var(--font-family)'} color={'var(--primary)'}>
              #
            </chakra.span>
            Projects
          </Text>
          <Box border={'1px solid var(--primary)'} marginTop={'2px'} w={'35vw'}></Box>
        </Box>
        <Text fontSize='md' fontFamily='var(--font-family)' onClick={() => router.push('/works')} _hover={{ cursor: 'pointer', color: "var(--primary)" }} color='var(--gray)'>
          View all {'~~>'}
        </Text>
      </Box>

      <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='start' alignItems='start' gap='20px'>
        {limitedProjects.map((project, index) => (
          <ProjectCard key={index} projectInfo={project} small_project={false} />
        ))}
      </Box>
    </Box>
  );
}
