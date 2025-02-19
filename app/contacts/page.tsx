'use client';
import { Box, Text, chakra } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { LuMails } from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";
import '@/app/globals.css';

import Navbar from '@/components/global/navbar';
import MediaBar from '@/components/global/mediaBar';

import SkillData from '@/components/skill/skill_data.json' assert { type: 'json' };

import Footer from '@/components/global/footer';
import ProjectCard from '@/components/projects/project_card';
import AboutMeOverview from '@/components/about_me/about_me_overview';
import SkillOverview from '@/components/skill/skill_overview';
import SkillCard from '@/components/skill/skill_card';
export default function Contacts() {
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
              <chakra.span color={'var(--primary)'}>/</chakra.span>contacts
            </Text>
            <Text fontSize={'md'} paddingTop={'4'}>
              Who am i?
            </Text>
          </Box>
          <Box
            display='flex'
            flexDir='row'
            alignItems='start'
            justifyContent='space-between'
            gap='6'
            w='100%'
            fontFamily='var(--mono-family)'
            color='var(--gray)'
            marginBottom={"12"}>
            <Text maxW={'40vw'}>
              I am eager to pursue my first internship opportunity. However, if you have any other
              requests or questions, please don’t hesitate to reach out.
            </Text>
            <Box
              display={'flex'}
              flexDir={'column'}
              alignItems={'start'}
              justifyContent={'start'}
              padding={'12px'}
              minW={'17vw'}
              gapY={'12px'}
              border={'1px solid var(--gray)'}>
              <Text>Message me here</Text>
              <Box
                display={'flex'}
                alignItems={'center'}
                onClick={() => {
                  window.location.href = 'mailto:tergelb0528@gmail.com';
                }}
                _hover={{
                  color: 'white',
                  transform: 'scale(1.09)',
                  transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
                }}
                aria-label='GitHub Profile'
                cursor='pointer' // Adds a pointer cursor for clickability
              >
                <LuMails size='20px' /> <Text marginStart={'12px'}>tergelb0528@gmail.com</Text>
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                onClick={() => {
                  window.open('https://www.facebook.com/Tsundgerhen', '_blank');
                }}
                _hover={{
                  color: 'white',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
                }}
                aria-label='GitHub Profile'
                cursor='pointer' // Adds a pointer cursor for clickability
              >
                <FaFacebook size='20px' /> <Text marginStart={'12px'}>Tsundgerhen</Text>
              </Box>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
            w={'100%'}>
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              gap='20px'
              paddingY={'2vw'}
              w={'100%'}>
              <Text fontSize={'3xl'} fontFamily={'var(--font-family)'}>
                <chakra.span
                  fontSize={'3xl'}
                  fontWeight={'semi-bold'}
                  fontFamily={'var(--font-family)'}
                  color={'var(--primary)'}>
                  #
                </chakra.span>
                all-media
              </Text>
            </Box>
            <Box display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'start'}
            w={'100%'}
            gapX={"6"}
            marginBottom={"7vw"}>
                <Box
                display={'flex'}
                alignItems={'center'}
                onClick={() => {
                  window.open('https://www.facebook.com/Tsundgerhen', '_blank');
                }}
                _hover={{
                  color: 'white',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
                }}
                aria-label='GitHub Profile'
                cursor='pointer' // Adds a pointer cursor for clickability
              >
                <FaFacebook size='20px' /> <Text marginStart={'12px'}>Tsundgerhen</Text>
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                onClick={() => {
                  window.open('https://www.instagram.com/tsundgerhenkiun/', '_blank');
                }}
                _hover={{
                  color: 'white',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
                }}
                aria-label='GitHub Profile'
                cursor='pointer' // Adds a pointer cursor for clickability
              >
                <FaInstagram size='20px' /> <Text marginStart={'12px'}>Tsundgerhen</Text>
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                onClick={() => {
                  window.open('https://www.discordapp.com/users/589019628030918658', '_blank');
                }}
                _hover={{
                  color: 'white',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
                }}
                aria-label='GitHub Profile'
                cursor='pointer' // Adds a pointer cursor for clickability
              >
                <FaDiscord size='20px' /> <Text marginStart={'12px'}>Teru</Text>
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                onClick={() => {
                  window.open('https://www.threads.net/@tsundgerhenkiun', '_blank');
                }}
                _hover={{
                  color: 'white',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
                }}
                aria-label='GitHub Profile'
                cursor='pointer' // Adds a pointer cursor for clickability
              >
                <FaThreads size='20px' /> <Text marginStart={'12px'}>Tsundgerhen</Text>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
      <Footer />
    </div>
  );
}
