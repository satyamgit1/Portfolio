import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Society Sathi",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Bhagavad-Gita",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Bhagavad-Gita",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "SocietySathi",
    favicon: "/images/projects/logos/societylogo.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/societysathi2.webp",
    ],
    description:
      "Introducing SocietySathi - Your Ultimate Apartment Management Solution! 🏢  Excited to share SocietySathi, a robust Apartment Management System built with Next.js, Express, Node.js, and MongoDB. 🚀",
    sourceCodeHref: "https://github.com/rhtm123/ff-frontend",
    liveWebsiteHref: "https://www.societysathi.com/",
  },
  {
    name: "Bhagavad-gita",
    favicon: "/images/projects/logos/gitalogo.ico",
    imageUrl: [
      "/images/projects/kanbanLight.webp",
      "/images/projects/gita2.webp",
      "/images/projects/bhagavadgita2.webp",
      "/images/projects/gitacontact.webp",
      "/images/projects/gitaaudio.webp",
    ],
    description:
      "We developed a website centered around the Hindu scripture Bhagavad Gita using Next.js and Tailwind CSS. Integrated API calls to retrieve and display chapter and verse data dynamically. The project showcases proficiency in front-end technologies and a commitment to cultural and religious exploration through digital platforms.",
    sourceCodeHref: "https://github.com/satyamgit1/bhagavad_gita",
    liveWebsiteHref: "https://www.bhagavadgita.site/",
  },
];
