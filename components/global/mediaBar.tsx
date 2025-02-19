"use client";
import { Box } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function MediaBar() {
  const router = useRouter();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="40px"
    >
      <Box width="2px" height="150px" bg="gray.300" />
      <Box
        onClick={() => {
          window.open("https://github.com/tsundgerhen", "_blank");
        }}
        _hover={{
          color: "white",
          transform: "scale(1.3)",
          transition: "transform 0.2s ease, color 0.2s ease", // Smooth transition
        }}
        aria-label="GitHub Profile"
        cursor="pointer" // Adds a pointer cursor for clickability
      >
        <FaGithub  size="20px"/>
      </Box>
      <Box
        onClick={() => {
          window.open("https://www.facebook.com/Tsundgerhen", "_blank");
        }}
        _hover={{
          color: "white",
          transform: "scale(1.3)",
          transition: "transform 0.2s ease, color 0.2s ease", // Smooth transition
        }}
        aria-label="Facebook Profile"
        cursor="pointer" // Adds a pointer cursor for clickability
      >
        <FaFacebook size="20px"/>
      </Box>
    </Box>
  );
}
