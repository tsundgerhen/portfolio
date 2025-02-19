import { Box } from '@chakra-ui/react';

interface LogoProps {
  size?: number; // Make size optional for flexibility
}

export default function Logo({ size = 30 }: LogoProps) {
  return (
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' w='100%'>
      {/* Left Box */}
      <Box
        display='flex'
        bg='transparent'
        border='1px solid var(--primary)'
        
        w={{ base: `${size * 1.5}px`, md: `${size * 2}px` }} // Adjust size based on screen width
        h={{ base: `${size * 2}px`, md: `${size * 3}px` }}
        flexDirection='column'
        alignItems='end'
        justifyContent='center'
        p='0'
        mt={{ base: `${size}px`, md: `${size * 2}px` }}>
        <Box display='flex' bg='transparent' border='1px solid var(--primary)' w={{ base: `${size * 0.8}px`, md: `${size}px` }} h={{ base: `${size * 0.8}px`, md: `${size}px` }} borderRight='none' flexDirection='column' alignItems='start' justifyContent='center' p='0'></Box>
      </Box>

      {/* Right Box */}
      <Box display='flex' bg='transparent' border='1px solid var(--primary)' w={{ base: `${size * 1.5}px`, md: `${size * 2}px` }} h={{ base: `${size * 2}px`, md: `${size * 3}px` }} flexDirection='column' alignItems='start' justifyContent='center' p='0'>
        <Box display='flex' bg='transparent' border='1px solid var(--primary)' w={{ base: `${size * 0.8}px`, md: `${size}px` }} h={{ base: `${size * 0.8}px`, md: `${size}px` }} borderLeft='none' flexDirection='column' alignItems='start' justifyContent='center' p='0'></Box>
      </Box>
    </Box>
  );
}
