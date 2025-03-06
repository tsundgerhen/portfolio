'use client';
import { useState } from 'react';
import {
  Box,
  Text,
  IconButton,
  VStack,
  Stack
} from '@chakra-ui/react';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { IoMdMenu } from 'react-icons/io';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (route: string) => {
    router.push(`/${route}`);
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      padding='12px'
      paddingTop='24px'
      fontSize='16px'
      bg='#282C33'
      color='gray.300'
      width='100%'
      fontFamily={'var(--font-family)'}>
      {/* Brand Name */}
      <Text fontWeight='bold' padding='6px' color='white'>
        Teru
      </Text>


      {/* Desktop Menu */}
      <Box display={{ base: 'none', md: 'flex' }}>
        {['', 'works', 'about-me', 'contacts'].map((route, index) => (
          <Box
            key={index}
            onClick={() => handleClick(route)}
            display='flex'
            padding='6px'
            paddingRight='24px'
            _hover={{ color: 'white', cursor: 'pointer', transform: 'scale(1.1)' }}
            rounded='2xl'>
            <Text color='purple.500'>#</Text>
            <Text>{route || 'home'}</Text>
          </Box>
        ))}
      </Box>

      {/* Hamburger Menu for Mobile */}
      <DrawerRoot open={isOpen} onOpenChange={({ open }) => setIsOpen(open)}>
        <DrawerTrigger asChild>
          <IconButton
            aria-label="Open Menu"
            variant="ghost"
            color="white"
            fontSize="24px"
            display={{ base: "block", md: "none" }}>
            <IoMdMenu />
          </IconButton>
        </DrawerTrigger>

        <DrawerBackdrop />
        <DrawerContent bg="#282C33" color="gray.300">
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerTitle >Menu</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Stack gap={6} mt={0}>
              {["", "works", "about-me", "contacts"].map((route, index) => (
                <Box
                  display={"flex"}
                  flexDir={"row"}
                  key={index}
                  onClick={() => handleClick(route)}
                  _active={{ color: "white", cursor: "pointer", transform: "scale(1.1)" }}
                  rounded="2xl"
                  fontSize="20px"
                  padding="8px"
                  gap={"2"}
                >
                  <Text color="purple.500">#</Text>
                  <Text display="inline">{route || "home"}</Text>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
}

