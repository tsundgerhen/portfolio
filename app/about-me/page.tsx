'use client';
import { Box, Text, chakra } from '@chakra-ui/react';

import '@/app/globals.css';

import Navbar from '@/components/global/navbar';
import MediaBar from '@/components/global/mediaBar';

import SkillData from '@/components/skill/skill_data.json' assert { type: 'json' };

import Footer from '@/components/global/footer';
import ProjectCard from '@/components/projects/project_card';
import AboutMeOverview from '@/components/about_me/about_me_overview';
import SkillOverview from '@/components/skill/skill_overview';
import SkillCard from '@/components/skill/skill_card';
export default function AboutMe() {
  const { skills } = SkillData;
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
            paddingTop={'6'}
            marginBottom={'12'}>
            <Text fontSize={'2xl'} fontWeight={'bold'}>
              <chakra.span color={'var(--primary)'}>/</chakra.span>about-me
            </Text>
            <Text fontSize={'md'} paddingTop={'4'}>
              Who am i?
            </Text>
          </Box>
          <AboutMeOverview />
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
              <Text fontSize={'3xl'} fontFamily={'var(--font-family)'}>
                <chakra.span
                  fontSize={'3xl'}
                  fontWeight={'semi-bold'}
                  fontFamily={'var(--font-family)'}
                  color={'var(--primary)'}>
                  #
                </chakra.span>
                skill
              </Text>
            </Box>
          </Box>
          <SkillCard skillData={skills} count={6} />
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
