"use client";
import { Box, Text } from "@chakra-ui/react";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(`/${route}`);
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      padding="12px"
      paddingTop="32px"
      fontSize="16px"
      bg="#282C33"
      color="gray.300"
      width="100%"
    >
      <Text fontWeight="bold" padding="6px" paddingRight="12px" color="white">
        Teru
      </Text>
      <Box display="flex">
        <Box
          onClick={() => handleClick("")}
          display="flex"
          padding="6px"
          paddingRight="24px"
          _hover={{ color: "white", cursor: "pointer", transform: "scale(1.1)" }}
          rounded="2xl"
        >
          <Text color="purple.500">#</Text>
          <Text>home</Text>
        </Box>
        <Box
          onClick={() => handleClick("works")}
          display="flex"
          padding="6px"
          paddingRight="24px"
          _hover={{ color: "white", cursor: "pointer", transform: "scale(1.1)" }}
          rounded="2xl"
        >
          <Text color="purple.500">#</Text>
          <Text>works</Text>
        </Box>
        <Box
          onClick={() => handleClick("about-me")}
          display="flex"
          padding="6px"
          paddingRight="24px"
          _hover={{ color: "white", cursor: "pointer",  transform: "scale(1.1)" }}
          rounded="2xl"
        >
          <Text color="purple.500">#</Text>
          <Text>about-me</Text>
        </Box>
        <Box
          onClick={() => handleClick("contacts")}
          display="flex"
          padding="6px"
          paddingRight="24px"
          _hover={{ color: "white", cursor: "pointer",  transform: "scale(1.1)" }}
          rounded="2xl"
        >
          <Text color="purple.500">#</Text>
          <Text>contacts</Text>
        </Box>
      </Box>
    </Box>
  );
}
