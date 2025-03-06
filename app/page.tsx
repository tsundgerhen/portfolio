import Image from "next/image";

import { Box } from "@chakra-ui/react";

import "@/app/globals.css";

import Navbar from "@/components/global/navbar";
import MediaBar from "@/components/global/mediaBar";
import ContentBox from "@/components/home/content_box";

import projectData from "@/components/projects/project_info.json" assert { type: "json" };
import skillData from "@/components/skill/skill_data.json" assert { type: "json" };
import {Project, Skill} from "@/types/index"
import Contacts from "@/components/contact/contact_overview";
import Footer from "@/components/global/footer";
export default function Home() {
  const { skills } = skillData;
  const { projects, small_projects } = projectData;
  
  return (
    <div>
    
      <Box display="flex" flexDirection="row" maxW={"100%"} bg="#282C33">
        {/* Media Bar */}
        <Box paddingLeft="3%">
          <MediaBar />
        </Box>

        {/* Content section */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          paddingLeft="6%"
          width="85%"
          justifyItems={"start"}
        >
          <Navbar />
          <ContentBox projects={projects} skills={skills}/>
        </Box>
      
      </Box>
      <Footer/>
    </div>
  );
}