'use client'; // Add this line for client-side rendering

import { Box, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import {Project} from "@/types/index"

interface ProjectCardProps {
  projectInfo: Project;
  small_project: boolean;
}

export default function ProjectCard({ projectInfo, small_project }: ProjectCardProps) {
  const router = useRouter();

  return (
    <Box display={'block'} boxDirection={'column'} border={'1px solid var(--gray)'} w={'25vw'}>
      {/* Image Section */}
      {projectInfo.image_src && <img src={projectInfo.image_src} alt={projectInfo.name} />}

      <Text borderBottom={'1px solid var(--gray)'} borderTop={'1px solid var(--gray)'} padding={'12px'} fontFamily={'var(--font-family)'} color={'var(--gray)'}>
        {/* Display languages, tools, and frameworks */}
        {projectInfo.languages.join(', ')}, {projectInfo.frameworks?.join(', ')}, {projectInfo.tools.join(', ')}
      </Text>

      <Box display={'flex'} flexDir={'column'} alignItems={'start'} justifyContent={'start'} padding={'12px'} fontFamily={'var(--font-family)'} color={'var(--gray)'} gapY={"12px"}>
        <Text color={'var(--white)'} fontSize={'xl'} fontWeight={'bold'}>
          {projectInfo.name}
        </Text>
        <Text>{projectInfo.info}</Text>

        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} w={'100%'}>
          {/* Button to redirect */}
          <Button bg='transparent' border='1px solid var(--primary)' color='var(--white)' _hover={{ cursor: 'pointer', bg: 'var(--primary)', color: 'white' }} padding={'4px'} paddingX={'18px'} onClick={() => window.open(projectInfo.link, '_blank', 'noopener,noreferrer')}>
            {projectInfo.link_type === 'Domain' ? 'Live  <~>' : 'GitHub <~>'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
