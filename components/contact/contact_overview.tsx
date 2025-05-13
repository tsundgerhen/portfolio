'use client';
import { Box, Button, Text, chakra } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { LuMails } from 'react-icons/lu';
import { FaFacebook } from 'react-icons/fa';
export default function Contacts() {
  const router = useRouter();
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
            contacts
          </Text>
          <Box border={'1px solid var(--primary)'} marginTop={'2px'} w={'10vw'}></Box>
        </Box>
      </Box>
      <Box
        display='flex'
        flexDir={{base:'column', md:'row'}}
        alignItems='start'
        justifyContent='space-between'
        gap='6'
        w='100%'
        fontFamily='var(--mono-family)'
        color='var(--gray)'>
        <Text maxW={{base:'100%', md:'40vw'}}>
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
    </Box>
  );
}
