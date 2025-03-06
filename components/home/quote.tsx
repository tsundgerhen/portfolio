import { Box, Text } from '@chakra-ui/react';

export default function Quote() {
  return (
    <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} p={{ base: '10px', md: '20px' }}>
      <Box position='relative' maxW={{ base: '90%', md: 'fit-content' }}>
        {/* Top-left quotation mark */}
        <Text fontFamily={'var(--font-family)'} fontSize={{ base: '3xl', md: '5xl' }} fontWeight='bold' position='absolute' top={{ base: '-10px', md: '-20px' }} left={{ base: '10px', md: '30px' }} zIndex={1}>
          "
        </Text>

        {/* Quote text with border */}
        <Text fontFamily={'var(--font-family)'} p={{ base: '10px', md: '20px' }} border={'1px solid var(--gray)'} fontSize={{ base: 'sm', md: 'xl' }} textAlign='center' backgroundColor='var(--background)' position='relative' zIndex={0}>
          With great power comes great electricity bill
        </Text>

        <Box display={'flex'} justifyContent={'end'}>
          <Text fontFamily={'var(--font-family)'} p={{ base: '5px', md: '10px' }} border={'1px solid var(--gray)'} fontSize={{ base: 'sm', md: 'xl' }} textAlign='center' backgroundColor='var(--background)' position='relative' zIndex={0} w={'fit-content'}>
            - Dr. Who
          </Text>
        </Box>

        {/* Bottom-right quotation mark */}
        <Text fontFamily={'var(--font-family)'} fontSize={{ base: '3xl', md: '5xl' }} fontWeight='bold' position='absolute' bottom={{ base: '0px', md: '2px' }} right={{ base: '10px', md: '20px' }} zIndex={1}>
          "
        </Text>
      </Box>
    </Box>
  );
}
