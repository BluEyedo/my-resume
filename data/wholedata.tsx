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
      title: "AIC TOUCH Application",
      description:
        "Worked as one of two frontend developers on the AIC TOUCH financial mobile app, responsible for building responsive UI components, improving user experience, and integrating features with backend APIs.",
      imageUrl: "https://aiconline.assiddeek.net/web-aictouch.jpg",
      objectFit: "cover",
      tags: ["Flutter", "Bloc"],
      link: "https://play.google.com/store/apps/details?id=net.aic.touchv2&hl=th",
    },
    {
      id: "p2",
      title: "iMaCS Website",
      description: `
        Collaborated in a two-developer team to build the full-stack iMaCS platform, an administrative and data management system for Islamic councils and mosques in Thailand.
        Developed the frontend using Next.js, implementing dynamic pages, UI components, authentication, dashboard features, and integration with backend APIs.
        Built and maintained the backend using C# .NET, designing REST APIs, business logic, role-based access, and secure data workflows.        
        Designed and structured the Microsoft SQL Server database, including tables, relationships, stored procedures, and data models supporting the system’s core functionalities.
        Contributed to testing, debugging, performance improvement, and deployment of the platform.`,
      imageUrl: "https://imacscenter.org/logos/imacs.png",
      objectFit: "contain",
      tags: ["Next.js", "TypeScript", "Tailwind_CSS", "C#_.NET"],
      link: "https://imacscenter.org/",
    },
    {
      id: "p3",
      title: "iMaCS View Application",
      description:
        "Served as the Flutter frontend developer for IMaCS View, a mobile app showing official prayer times for all IMaCS-registered mosques and provinces in Thailand, including UI development, API integration, and performance optimization.",
      imageUrl: "https://imacscenter.org/logos/imacs.png",
      objectFit: "contain",
      tags: ["Flutter", "C#_.NET"],
      link: "https://play.google.com/store/apps/details?id=com.imacs.imacsview&hl=en",
    },
    {
      id: "p4",
      title: "Graphics Portfolio - @blueyedo.graphics",
      description:
        "@blueyedo.graphics is a creative Instagram portfolio showcasing original graphic design works, visual branding, and digital artwork. Curated to highlight strong design aesthetics, visual communication skills, and multimedia creativity, this page reflects practical experience in graphic design, layout, and visual storytelling using tools such as Adobe Illustrator, Photoshop, and Premiere.",
      imageUrl: "blueyedo.graphics.jpg",
      objectFit: "cover",
      tags: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premiere",
        "SketchUp",
      ],
      link: "https://www.instagram.com/blueyedo.graphics/",
    },
  ],
};
