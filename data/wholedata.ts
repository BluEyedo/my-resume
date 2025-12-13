import { ResumeData } from "@/types";

// Initial Mock Data
export const initialData: ResumeData = {
  fullName: "Eyad Hajisaid",
  title: "Frontend-focused Full-Stack Developer & Graphic Designer",
  summary: `
  Frontend-focused Full-Stack developer, with experience in App development using Flutter, and Web development using TypeScript, and JavaScript frameworks such as React/Next.js. Skilled in creating modern responsive interfaces with Tailwind CSS.
  compined with some experience supporting these interfaces with backend development using C# .NET. 
  Also having a background in graphic design helped me a lot in bridging the gap between design and development.
  `,
  contact: {
    email: "esaidfatani@gmail.com",
    phone: "(+66)954375136",
    location: "Yala, Yala City",
    linkedin: "https://linkedin.com/in/alexsterling",
    github: "https://github.com/BluEyedo",
    website: "",
  },
  skills: [
    { name: "React", level: 95, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "GraphQL", level: 85, category: "backend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "System Design", level: 75, category: "soft-skills" },
    { name: "Leadership", level: 80, category: "soft-skills" },
    { name: "Agile/Scrum", level: 85, category: "tools" },
    { name: "Figma", level: 70, category: "tools" },
  ],
  experience: [
    {
      id: "1",
      company: "TechFlow Inc.",
      role: "Lead Frontend Developer",
      startDate: "2021",
      endDate: "Present",
      description:
        "Spearheaded the migration of a legacy monolith to a micro-frontend architecture using Module Federation. Reduced build times by 60% and improved developer velocity. Mentored a team of 5 junior developers.",
      technologies: ["React", "Webpack", "AWS", "TypeScript"],
    },
    // {
    //   id: "2",
    //   company: "Creative Solutions",
    //   role: "Senior UI Engineer",
    //   startDate: "2018",
    //   endDate: "2021",
    //   description:
    //     "Designed and implemented a component library used across 15+ internal products. Collaborated closely with design teams to ensure pixel-perfect implementation and accessibility compliance (WCAG 2.1).",
    //   technologies: ["React", "Storybook", "Jest", "Sass"],
    // },
    // {
    //   id: "3",
    //   company: "StartUp Vibe",
    //   role: "Full Stack Developer",
    //   startDate: "2016",
    //   endDate: "2018",
    //   description:
    //     "Built the MVP for a real-time collaboration tool. Handled both frontend interactions and backend websocket services. Scaled to 10k daily active users.",
    //   technologies: ["Vue.js", "Firebase", "Node.js"],
    // },
  ],
  education: [
    {
      id: "1",
      company: "Fathoni University (Thailand)",
      role: "Bachelor of Information Technology and Data Science",
      startDate: "2019",
      endDate: "2023",
      description: `My university studies began with core fundamentals such as algorithms and programming in C++, Java in the first year, followed by SQL and database concepts in the second year.
      In the late years, the curriculum focused more on full web development, including HTML, CSS, JavaScript, and PHP Laravel framework.`,
      images: ["uni2.jpeg", "uni1.jpeg"],
      technologies: [
        "C++",
        "Java",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Laravel",
      ],
    },
  ],

  certificationCourses: [
    {
      id: "1",
      company: "Teqani Collage (Saudi Arabia)",
      role: "Adobe Illustrator, indesign course",
      startDate: "2016",
      endDate: "2017",
      description: `Attendance for the training course in Illustrator-Indesign which was organized by Teqani center total of 32 hours of training.`,
      images: ["teqqani1.jpeg"],
      technologies: ["Adobe Illustrator", "Adobe Indesign"],
    },
    {
      id: "2",
      company: "Teqani Collage (Saudi Arabia)",
      role: "HTML&CSS Frontend development course",
      startDate: "2016",
      endDate: "2017",
      description: `Attendance for HTML&CSS course organized by Teqani center, total of 20 hourse of training.`,
      images: ["teqqani2.jpeg"],
      technologies: ["HTML", "CSS"],
    },
  ],

  projects: [
    {
      id: "p1",
      title: "E-Commerce Dashboard",
      description:
        "A high-performance analytics dashboard for e-commerce merchants, processing over 1M events daily. Features real-time charting and data filtering.",
      imageUrl: "https://picsum.photos/seed/dash/600/400",
      tags: ["React", "D3.js", "Redux"],
      link: "#",
    },
    {
      id: "p2",
      title: "TaskMaster Pro",
      description:
        "Project management SaaS with drag-and-drop kanban boards, team chat, and file sharing. Built with offline-first architecture.",
      imageUrl: "https://picsum.photos/seed/task/600/400",
      tags: ["Next.js", "Supabase", "Tailwind"],
      link: "#",
    },
    {
      id: "p3",
      title: "HealthTracker App",
      description:
        "Mobile-responsive PWA for tracking fitness metrics and nutrition. Integrates with wearable APIs.",
      imageUrl: "https://picsum.photos/seed/health/600/400",
      tags: ["PWA", "React", "Workbox"],
      link: "#",
    },
    {
      id: "p4",
      title: "FinTech Visualization",
      description:
        "Interactive financial modeling tool allowing users to simulate market conditions and visualize portfolio outcomes.",
      imageUrl: "https://picsum.photos/seed/finance/600/400",
      tags: ["Three.js", "WebGL", "TypeScript"],
      link: "#",
    },
  ],
};
