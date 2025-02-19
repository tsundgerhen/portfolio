export interface Project {
  name: string;
  image_src?: string;
  languages: string[];
  frameworks?: string[];
  tools: string[];
  info: string;
  link: string;
  finished: boolean;
  link_type: string;
}

export interface Skill {
  languages: string[];
  frameworks: string[];
  ui_libraries: string[];
  databases: string[];
  tools: string[];
  other_technologies: string[];
}
