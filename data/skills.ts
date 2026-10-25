import type { IconType } from "react-icons";
import { FaCode, FaCubes, FaServer, FaTerminal } from "react-icons/fa";
import {
  SiCss,
  SiEthereum,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPython,
  SiReact,
  SiRust,
  SiSolidity,
  SiWordpress,
} from "react-icons/si";
import { TbApi, TbHelmet } from "react-icons/tb";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Responsive, accessible interfaces with modern React and Next.js.",
    icon: FaCode,
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend",
    description: "APIs, databases and CMS integrations.",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "REST APIs", icon: TbApi },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PHP", icon: SiPhp },
      { name: "WordPress", icon: SiWordpress },
    ],
  },
  {
    title: "Blockchain",
    description: "Smart contracts and dApps on Ethereum.",
    icon: FaCubes,
    skills: [
      { name: "Solidity", icon: SiSolidity },
      { name: "Hardhat", icon: TbHelmet },
      { name: "Smart contracts", icon: SiEthereum },
    ],
  },
  {
    title: "Other languages",
    description: "Beyond the browser.",
    icon: FaTerminal,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Rust", icon: SiRust },
      { name: "Java", icon: SiOpenjdk },
    ],
  },
];

export const ALL_SKILLS = SKILL_GROUPS.flatMap((group) => group.skills);
