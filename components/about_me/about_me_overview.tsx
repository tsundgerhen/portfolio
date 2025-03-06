'use client';
import { Box, Button, Text, chakra } from '@chakra-ui/react';
import { useRouter, usePathname } from 'next/navigation';
import Dots from '../global/dots';
export default function AboutMeOverview() {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname;
  const pageSegment = currentPath.split('/').pop();
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
        alignItems={'start'}
        justifyContent={'space-between'}
        w={'100%'}>
       
      </Box>
      <Box display='flex' justifyContent='space-between' w='100%'>
        <Box
          display='flex'
          flexDir='column'
          alignItems='start'
          justifyContent='start'
          gap='6'
          maxW={{base:'100%', md:'35vw'}}
          fontFamily='var(--mono-family)'
          color='var(--gray)'>
          <Text>Hello, I'm Teru! </Text>
          <Text>
            I’m a frontend and backend developer from Mongolia and a student at MUST. I specialize
            in building responsive websites from scratch and developing well-structured backend
            servers, transforming them into modern, user-friendly systems.
          </Text>
          <Text display={{base:`${pageSegment === "about-me" ? 'flex' : 'none'}`, md:"flex"} }>
            Transforming my creativity and knowledge into application systems has been my passion
            for over a year. I’ve been developing various innovative systems with my team, MS. I’m
            constantly exploring the latest technologies and frameworks to enhance my skills and
            stay ahead in the field.
          </Text>
          <Button
            bg='transparent'
            border='1px solid var(--primary)'
            color='var(--white)'
            _hover={{ cursor: 'pointer', bg: 'var(--primary)', color: 'white' }}
            padding={'4px'}
            paddingX={'18px'}
            onClick={() => router.push('/about-me')}
            display={`${pageSegment === "about-me" ? 'none' :'flex'}`}>
            Read more {`~~>`}
          </Button>
        </Box>
        <Box display={{base: "none", md:'flex'}} flexDirection='column' position='relative'>
          {/* Logo positioned absolutely */}
          <Box
            position='absolute'
            zIndex={2}
            marginY='50px' // Adjust size based on screen size // Adjust position based on screen size
          >
            <Dots x={{ base: 5, md: 5 }} y={{ base: 5, md: 5 }} p={{ base: 9, md: 12 }} />
          </Box>

          {/* Profile Image */}
          <Box zIndex={1} width={{ base: '300px', md: '300px' }}>
            <img src='/Image1.png' alt='Profile' width='100%' height='auto' />
          </Box>

          {/* Dots positioned behind everything */}
          <Box
            zIndex={2}
            position='absolute'
            marginLeft={{ base: '120px', md: '200px' }} // Adjust for smaller screens
            marginTop={{ base: '100px', md: '260px' }} // Adjust for smaller screens
          >
            <Dots x={{ base: 5, md: 5 }} y={{ base: 4, md: 4 }} p={{ base: 9, md: 16 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
