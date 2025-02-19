'use client';
import { Box, Button, Text, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import Profile from '@/public/Image.jpg';

import Logo from '@/components/global/logo';
import Dots from '../global/dots';
export default function Overview() {
  return (
    <Box display='flex' flexDirection='row' alignItems='space-between' justifyContent='space-between' w={'100%'} paddingLeft={'12px'}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'center'}>
        <Text color='white' fontFamily='var(--font-family)' fontSize={{ base: '1.5rem', md: '1.8rem' }} fontWeight='bold' paddingBottom={'12px'}>
          Teru is a <chakra.span color='var(--primary)'>Frontend developer</chakra.span> and <chakra.span color='var(--primary)'>Backend developer</chakra.span>
        </Text>
        <Text color='var(--gray)' fontSize={{ base: '0.5rem', md: '0.8rem' }} fontFamily='var(--font-family)' paddingBottom={'24px'}>
          He is a developer with experience in building web applications using modern technologies. He is passionate about building scalable and maintainable applications.
        </Text>
        <Button bg='transparent' border='1px solid var(--primary)' color='var(--white)' _hover={{ bg: 'var(--primary)', color: 'white' }} padding={'4px'} paddingX={'18px'}>
          Contact me
        </Button>
      </Box>
      <Box display='flex' flexDirection='column' position='relative'>
        {/* Logo positioned absolutely */}
        <Box
          position='absolute'
          zIndex={0}
          margin='0px' // Adjust size based on screen size // Adjust position based on screen size
        >
          <Logo size={50} />
        </Box>

        {/* Profile Image */}
        <Box zIndex={1} width={{ base: '300px', md: '500px' }}>
          <img src='/Image.png' alt='Profile' width='100%' height='auto' />
        </Box>

        {/* Dots positioned behind everything */}
        <Box
          zIndex={2}
          position='absolute'
          marginLeft={{ base: '120px', md: '350px' }} // Adjust for smaller screens
          marginTop={{ base: '100px', md: '260px' }} // Adjust for smaller screens
        >
          <Dots x={{ base: 5, md: 5 }} y={{ base: 5, md: 5 }} p={{ base: 9, md: 24 }} />
        </Box>
      </Box>
    </Box>
  );
}
