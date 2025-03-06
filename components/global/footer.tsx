'use client';
import { Box, Text, chakra } from '@chakra-ui/react';
import { LuMails } from 'react-icons/lu';
import { FaFacebook, FaGithub } from 'react-icons/fa';
export default function Footer() {
  return (
    <Box display={'flex'} flexDir={'column'} alignContent={'center'} w={'100%'} paddingX={"15vw"} paddingY={"2vw"} maxH={{base:"15vh", md:"15vh"}} borderTop={"1px solid var(--gray)"}>
      <Box display={'flex'} flexDir={'row'} justifyContent={'space-between'} w={'100%'}>
        <Box display={'flex'} flexDir={'column'}>
          <Text fontFamily={'var(--mono-font)'} color={'var(--white)'} fontWeight={'semibold'}>
            Teru <chakra.span color={'var(--gray)'}>tergelb0528@gmail.com</chakra.span>
          </Text>
          <Text fontFamily={'var(--mono-font)'} color={'var(--white)'} fontWeight={'semibold'}>
            Fontend and backend developer
          </Text>
        </Box>
        <Box
          display={'flex'}
          flexDir={'column'}
          alignItems={'start'}
          justifyContent={'start'}
          maxW={'20vw'}
          gapY={'12px'}>
          <Text fontFamily={"var(mono-font)"} fontWeight={"semibold"} fontSize={"lg"}>Media</Text>
          <Box display={'flex'}
          flexDir={'row'}
          alignItems={'start'}
          justifyContent={''}
          gapX={'1vw'}
          color={"var(--gray)"}>
            <Box
              display={'flex'}
              alignItems={'center'}
              onClick={() => {
                window.location.href = 'mailto:tergelb0528@gmail.com';
              }}
              _hover={{
                color: 'white',
                transform: 'scale(1.3)',
                transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
              }}
              aria-label='GitHub Profile'
              cursor='pointer' // Adds a pointer cursor for clickability
            >
              <LuMails size='20px' /> 
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              onClick={() => {
                window.open('https://www.facebook.com/Tsundgerhen', '_blank');
              }}
              _hover={{
                color: 'white',
                transform: 'scale(1.3)',
                transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
              }}
              aria-label='GitHub Profile'
              cursor='pointer' // Adds a pointer cursor for clickability
            >
              <FaFacebook size='20px' />
            </Box>
            <Box
              onClick={() => {
                window.open('https://github.com/tsundgerhen', '_blank');
              }}
              _hover={{
                color: 'white',
                transform: 'scale(1.3)',
                transition: 'transform 0.2s ease, color 0.2s ease', // Smooth transition
              }}
              aria-label='GitHub Profile'
              cursor='pointer' // Adds a pointer cursor for clickability
            >
              <FaGithub size='20px' />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
