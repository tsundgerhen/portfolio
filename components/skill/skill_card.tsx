"use client"
import { Box } from "@chakra-ui/react";
import { Skill } from "@/types/index";

export default function SkillCard({ skillData, count }: { skillData: Skill; count: number }) {
    return (
        <Box 
            display="grid"
            gridTemplateColumns={`repeat(${count}, 1fr)`} // Ensures 'count' items per row
            gap="16px"
            width={count === 3 ? "40%" : "100%"}
        >
            {Object.entries(skillData).map(([category, skills]) => (
                <Box 
                    key={category} 
                    border="1px solid var(--gray)" 
                    padding="12px"// Ensures proper spacing
                    height="auto" // Prevents equal height enforcement
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