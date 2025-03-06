"use client"
import { Box } from "@chakra-ui/react";
import { Skill } from "@/types/index";

export default function SkillCard({ skillData, count }: { skillData: Skill; count: number }) {
    return (
        <Box 
            display="grid"
            gridTemplateColumns={{
                base: `repeat(${count !== 3 ? 2 : count - 1}, 1fr)`, // If count is not 3, show 1 item on mobile
                md: `repeat(${count}, 1fr)`,                         // MD and above: show `count` items
              }}gap="16px"
              width={count === 3 ? { md: '40%', base: '70%' } : '100%'}
        >
            {Object.entries(skillData).map(([category, skills]) => (
                <Box 
                    key={category} 
                    border="1px solid var(--gray)" 
                    padding="12px"// Ensures proper spacing
                    height="auto" // Prevents equal height enforcement
                    fontSize={{base: 'sm', md:'md'}}
                >
                    <Box 
                        borderBottom="1px solid var(--gray)" 
                        paddingBottom="8px" 
                        fontWeight="bold"
                        textAlign="center"
                    >
                        {category.replace(/_/g, " ")}
                    </Box>
                    <Box paddingTop="8px">
                        {(skills as string[]).slice(0, 6).join(", ")}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}