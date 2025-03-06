'use client';
import { Box, Text, chakra } from '@chakra-ui/react';
import Overview from './overview';
import Quote from './quote';
import ProjectOverview from '../projects/projects_overview';

import { Project } from '@/types/index';
import { Skill } from '@/types/index';
import SkillOverview from '../skill/skill_overview';
import AboutMeOverview from '../about_me/about_me_overview';
import Contacts from '../contact/contact_overview';

interface ContentBoxProps {
  projects: Project[];
  skills: Skill;
}

export default function ContentBox({ projects, skills }: ContentBoxProps) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      p={{ base: '10px', md: '50px' }}
      gapY={'5vw'}
      mb={"4vh"}>
      <Overview />
      <Quote />
      <ProjectOverview projectsData={projects} />
      <SkillOverview />
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' gap='20px' paddingY={'0'}>
          <Text fontSize={'3xl'} fontFamily={'var(--font-family)'}>
            <chakra.span fontSize={'3xl'} fontWeight={'semi-bold'} fontFamily={'var(--font-family)'} color={'var(--primary)'}>
              #
            </chakra.span>
            about-me
          </Text>
          <Box border={'1px solid var(--primary)'} marginTop={'2px'} w={'20vw'}></Box>
        </Box>
      </Box>
      <AboutMeOverview />
      <Contacts />
    </Box>
  );
}
