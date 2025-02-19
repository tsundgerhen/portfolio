import { Box, useBreakpointValue } from "@chakra-ui/react";

interface DotsProps {
  x: number | Record<string, number>;
  y: number | Record<string, number>;
  p: number | Record<string, number>;
}

export default function Dots({ x, y, p }: DotsProps) {
  // Get responsive values with fallbacks
  const xValue = useBreakpointValue(typeof x === "number" ? { base: x } : x) ?? 5;
  const yValue = useBreakpointValue(typeof y === "number" ? { base: y } : y) ?? 5;
  const pValue = useBreakpointValue(typeof p === "number" ? { base: p } : p) ?? 10;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      {/* Loop through rows */}
      {Array.from({ length: yValue }).map((_, rowIndex) => (
        <Box key={rowIndex} display="flex">
          {/* Loop through columns */}
          {Array.from({ length: xValue }).map((_, colIndex) => (
            <Box
              key={colIndex}
              w="3px" // Dot width
              h="3px" // Dot height
              bg="var(--gray)" // Dot color
              borderRadius="50%" // Makes it a circle
              mx={`${pValue / 2}px`} // Horizontal spacing
              my={`${pValue / 2}px`} // Vertical spacing
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}