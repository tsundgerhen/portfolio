'use client';
import { Box, Text, chakra } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import ProjectCard from '../projects/project_card';

import { Skill } from '@/types/index';
import SkillCard from './skill_card';
import skillData from '@/components/skill/skill_data.json' assert { type: 'json' };
import Dots from '../global/dots';
import Logo from '../global/logo';

export default function SkillOverview() {
  // Limit to max 3 projects
  const router = useRouter();
  const { skills } = skillData;

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'start'} w={'100%'}>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' gap='20px' paddingY={'2vw'}>
          <Text fontSize={'3xl'} fontFamily={'var(--font-family)'}>
            <chakra.span fontSize={'3xl'} fontWeight={'semi-bold'} fontFamily={'var(--font-family)'} color={'var(--primary)'}>
              #
            </chakra.span>
            skill
          </Text>
          <Box border={'1px solid var(--primary)'} marginTop={'2px'} w={'20vw'}></Box>
        </Box>
      </Box>

      <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='start' alignItems='start' gap='100px' w={'100%'} paddingTop={"8"}>
        <Box h='40%' w='40%' display='flex' justifyContent='center' alignItems='center' position='relative'>
          {/* Grid Layout for Background */}
          <Box position='absolute' top='-10%' left='10%'>
            <Dots x={5} y={5} p={10} />
          </Box>

          <Box position='absolute' top='-30%' right='10%'>
            <Box border='1px solid gray' w='80px' h='80px' />
          </Box>

          <Box position='absolute' bottom='-20%' right='25%'>
            <Dots x={5} y={5} p={10} />
          </Box>

          <Box position='absolute' bottom='-100%' left='15%'>
            <Logo size={30} />
          </Box>

          <Box position='absolute' bottom='-80%' right='5%'>
            <Box border='1px solid gray' w='40px' h='40px' />
          </Box>
        </Box>
        <SkillCard skillData={skills} count={3} />
      </Box>
    </Box>
  );
}
