import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Society Sathi",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/societysathi_light.png",
      DARK: "/images/projects/societysathi_dark.png",
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
      LIGHT: "/images/projects/gita_main_light.png",
      DARK: "/images/projects/gita_main_dark.png",
    },
  },
  {
    index: 2,
    title: "Codeverse",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Next js", "React Pdf"],
    image: {
      LIGHT: "/images/projects/codeverse_light.webp",
      DARK: "/images/projects/codeverse_dark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "SocietySathi",
    favicon: "/images/projects/logos/societylogo.ico",
    imageUrl: [
      "/images/projects/societysathi_light.png",
      "/images/projects/society_sathi_feature.png",
      "/images/projects/society_sathi_login.png",
      "/images/projects/societysathi2.webp",
      "/images/projects/society_sathi_flatview.png",
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
      "/images/projects/gita_main_light.png",
      "/images/projects/bhagavadgita_login.png",
      "/images/projects/bhagavadgita2.webp",
      "/images/projects/gitacontact.webp",
      "/images/projects/gitaaudio.webp",
    ],
    description:
      "We developed a website centered around the Hindu scripture Bhagavad Gita using Next.js and Tailwind CSS. Integrated API calls to retrieve and display chapter and verse data dynamically. The project showcases proficiency in front-end technologies and a commitment to cultural and religious exploration through digital platforms.",
    sourceCodeHref: "https://github.com/satyamgit1/bhagavad_gita",
    liveWebsiteHref: "https://www.bhagavadgita.site/",
  },
  {
    name: "Codeverse",
    favicon: "/images/projects/logos/codeverse_logo.ico",
    imageUrl: [
      "/images/projects/codeverse_light.webp",
      "/images/projects/codeverse_project.webp",
      "/images/projects/codeverse_editor.webp",
      "/images/projects/codeverse_project.webp",
      "/images/projects/codeverse_feature.webp",
      "/images/projects/codeverse_login.webp",
    ],
    description:
      "Developed a real-time code editor using React.js, Next.js, Firestore, and Firebase Storage, featuring live HTML/CSS/JS previews, authentication, project management, and responsive UI design with Tailwind CSS and Lodash.",
    sourceCodeHref: "https://github.com/satyamgit1/CodeVerse",
    liveWebsiteHref: "https://code-verse-xi.vercel.app/",
  },
];
