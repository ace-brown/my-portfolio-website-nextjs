import type { IconType } from "react-icons";
import {
  FaCloud,
  FaCode,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaVial,
  FaWordpress,
} from "react-icons/fa";
import {
  SiCypress,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiHugo,
  SiJest,
  SiJsonwebtokens,
  SiKeycloak,
  SiKubernetes,
  SiLangchain,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiOllama,
  SiOpenid,
  SiOwasp,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPydantic,
  SiPytest,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiShadcnui,
  SiSolana,
  SiSolidity,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiTypo3,
  SiVitest,
  SiWordpress,
  SiZod,
} from "react-icons/si";
import {
  TbApi,
  TbBinaryTree,
  TbBrandAws,
  TbBrandAzure,
  TbBrandOpenai,
  TbChartLine,
  TbEye,
  TbMicrophone,
  TbPlugConnected,
  TbServer,
  TbShieldLock,
  TbTestPipe,
  TbTool,
  TbWorld,
} from "react-icons/tb";

// Skills as listed on the CV ("Core skills"). Keep to what the CV claims.

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
      "Typed, accessible interfaces with React and the Next.js App Router.",
    icon: FaCode,
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "React Hook Form", icon: SiReacthookform },
      { name: "Zod", icon: SiZod },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "MUI", icon: SiMui },
      { name: "Recharts", icon: TbChartLine },
    ],
  },
  {
    title: "Backend & data",
    description: "APIs, microservices and databases, plus ledgers and chains.",
    icon: FaServer,
    skills: [
      { name: "NestJS", icon: SiNestjs },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "REST APIs", icon: TbApi },
      { name: "Microservices", icon: TbServer },
      { name: "Corda", icon: TbBinaryTree },
      { name: "Solidity", icon: SiSolidity },
      { name: "Solana", icon: SiSolana },
    ],
  },
  {
    title: "AI & agents",
    description: "LLM features and agents that ship inside real products.",
    icon: FaRobot,
    skills: [
      { name: "AI agents", icon: FaRobot },
      { name: "Tool calling", icon: TbTool },
      { name: "MCP", icon: TbPlugConnected },
      { name: "OpenAI", icon: TbBrandOpenai },
      { name: "LangChain", icon: SiLangchain },
      { name: "LiteLLM", icon: TbApi },
      { name: "Ollama", icon: SiOllama },
      { name: "Whisper", icon: TbMicrophone },
      { name: "Vision models", icon: TbEye },
      { name: "Pydantic", icon: SiPydantic },
    ],
  },
  {
    title: "Security & auth",
    description:
      "Identity, tokens, and finding and fixing web vulnerabilities.",
    icon: FaShieldAlt,
    skills: [
      { name: "Keycloak", icon: SiKeycloak },
      { name: "OAuth 2.0 / OIDC", icon: SiOpenid },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "ICAP", icon: TbPlugConnected },
      { name: "OWASP ZAP", icon: SiOwasp },
      { name: "XSS · CSRF · CORS · CSP", icon: TbShieldLock },
    ],
  },
  {
    title: "Testing",
    description: "End-to-end, unit and API tests.",
    icon: FaVial,
    skills: [
      { name: "Playwright", icon: TbTestPipe },
      { name: "Cypress", icon: SiCypress },
      { name: "Vitest", icon: SiVitest },
      { name: "Jest", icon: SiJest },
      { name: "pytest", icon: SiPytest },
    ],
  },
  {
    title: "DevOps & cloud",
    description: "Containers, infrastructure and pipelines.",
    icon: FaCloud,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "AWS", icon: TbBrandAws },
      { name: "Azure", icon: TbBrandAzure },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Nginx", icon: SiNginx },
    ],
  },
  {
    title: "CMS & PHP",
    description: "Custom sites and migrations.",
    icon: FaWordpress,
    skills: [
      { name: "PHP", icon: SiPhp },
      { name: "TYPO3", icon: SiTypo3 },
      { name: "WordPress", icon: SiWordpress },
      { name: "OpenCMS", icon: TbWorld },
      { name: "Hugo", icon: SiHugo },
    ],
  },
];

export const ALL_SKILLS = SKILL_GROUPS.flatMap((group) => group.skills);

const MARQUEE_NAMES = [
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "AI agents",
  "LangChain",
  "OpenAI",
  "Whisper",
  "Keycloak",
  "OWASP ZAP",
  "Playwright",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
];

/** The skills most worth seeing at a glance, for the scrolling marquee. */
export const MARQUEE_SKILLS = ALL_SKILLS.filter((skill) =>
  MARQUEE_NAMES.includes(skill.name),
);
