import { ResumeData } from "@/types";
import { AiOutlineHtml5 } from "react-icons/ai";
import { LiaUniversitySolid } from "react-icons/lia";

// Initial Mock Data
export const initialData: ResumeData = {
  fullName: "Eyad Hajisaid",
  title: "Frontend-focused Full-Stack Developer & Graphic Designer",
  summary: `
  Frontend-focused Full-Stack developer, with experience in App development using Flutter, and Web development using TypeScript, and JavaScript frameworks such as React/Next.js. Skilled in creating modern responsive interfaces with Tailwind CSS.
  compined with some experience supporting these interfaces with backend development using C# .NET. 
  Also having a background in graphic design helped me a lot in bridging the gap between design and development.`,
  contact: {
    email: "esaidfatani@gmail.com",
    phone: "(+66)954375136",
    location: "Yala, Yala City",
    linkedin: "https://linkedin.com/in/alexsterling",
    github: "https://github.com/BluEyedo",
    website: "",
  },
  skills: [
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "TypeScript", level: 75, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "React Next.js", level: 75, category: "frontend" },
    { name: "Node.js", level: 30, category: "backend" },
    { name: "Flutter", level: 60, category: "frontend" },
    { name: "C# .NET", level: 65, category: "backend" },
    { name: "PHP Laravel", level: 35, category: "backend" },
    { name: "Docker", level: 45, category: "backend" },

    { name: "Adobe Photoshop", level: 75, category: "graphics" },
    { name: "Adobe Illustrator", level: 88, category: "graphics" },
    { name: "Adobe Premiere", level: 45, category: "graphics" },
    { name: "Microsoft Office", level: 75, category: "graphics" },
    { name: "Microsoft PowerPoint", level: 80, category: "graphics" },
    { name: "Microsoft Excel", level: 45, category: "graphics" },
    { name: "SketchUp", level: 50, category: "graphics" },

    { name: "English", level: 85, category: "language" },
    { name: "Thai", level: 55, category: "language" },
    { name: "Malay", level: 30, category: "language" },
    { name: "Arabic", level: 100, category: "language" },
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
      icon: <LiaUniversitySolid className="text-blue-500 text-[28px] p-1" />,
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
    {
      id: "3",
      company: "Prince Of Songkhla University (Thailand)",
      icon: <LiaUniversitySolid className="text-blue-500 text-[28px] p-1" />,
      role: "Arabic Debate 2",
      startDate: "2020",
      // endDate: "2017",
      description: `Received official recognition for contributing to the success of the World Arabic Language Day Festival, held on December 17–18, 2020. The participation supported activities related to Arabic language proficiency, skills development, and cultural promotion, and played a significant role in debate competition and won first place, in which contributed in the overall success of the event.`,
      images: ["publicArab1.jpeg"],
      technologies: [
        "Communication",
        "Teamwork",
        "Critical Thinking",
        "Public Speaking",
        "Patience",
        "Problem-Solving",
        "Attention to Detail",
        "Conflict Resolution",
        "Leadership",
      ],
    },
    {
      id: "4",
      company: "Prince Of Songkhla University (Thailand)",
      icon: <LiaUniversitySolid className="text-blue-500 text-[28px] p-1" />,
      role: "Arabic Debate 1",
      startDate: "2019",
      // endDate: "2017",
      description: `Received official recognition for contributing to the success of the World Arabic Language Day Festival, held on December 17–18, 2019. The participation supported activities related to Arabic language proficiency, skills development, and cultural promotion, and played a significant role in debate competition which contributed in the overall success of the event.`,
      images: ["publicArab2.jpeg"],
      technologies: [
        "Communication",
        "Teamwork",
        "Critical Thinking",
        "Public Speaking",
        "Patience",
        "Conflict Resolution",
      ],
    },
    {
      id: "5",
      company: "Fathoni University (Thailand)",
      icon: <LiaUniversitySolid className="text-blue-500 text-[28px] p-1" />,
      role: "Public Speaking Contest – 3rd Place",
      startDate: "2019",
      // endDate: "2017",
      description: `Certificate of Achievement – International Language Academy, Fatoni University
      Awarded for winning third place in the Public Speaking Contest held on February 14, 2019. Recognized for strong communication skills, confidence in public speaking, and effective delivery of structured speeches.`,
      images: ["publicEng.jpeg"],
      technologies: ["Confidence", "Communication", "Public Speaking"],
    },
    {
      id: "6",
      company: "Jungle Bungy Jump (Thailand)",
      role: "Certificate of Courage",
      startDate: "2019",
      // endDate: "2017",
      description: `Awarded for successfully completing a 50-meter bungy jump, demonstrating courage, mental resilience, and the ability to overcome high-pressure situations.`,
      images: ["courage.jpeg"],
      technologies: [
        "Confidence",
        "Taking Ownership",
        "High Pressure Management",
        "Resilience",
      ],
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
