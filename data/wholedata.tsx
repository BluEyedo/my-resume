import { ResumeData } from "@/types";
import { AiOutlineHtml5 } from "react-icons/ai";
import { GiPentarrowsTornado } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiIsland } from "react-icons/pi";
import { SiChainguard } from "react-icons/si";

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
        location: "Yala, Thailand",
        linkedin: "https://www.linkedin.com/in/eyad-hajisa-i-712aa0228/",
        github: "https://github.com/BluEyedo",
        website: "",
    },
    skills: [
        { name: "HTML", exp: "8 years", lvl: 90, category: "frontend" },
        { name: "CSS", exp: "8 years", lvl: 80, category: "frontend" },
        { name: "JavaScript", exp: "6 years", lvl: 77, category: "frontend" },
        { name: "TypeScript", exp: "2 years", lvl: 75, category: "frontend" },
        { name: "Tailwind CSS", exp: "2 years", lvl: 85, category: "frontend" },
        { name: "React Next.js", exp: "2 years", lvl: 75, category: "frontend" },
        { name: "Node.js", exp: "2 years", lvl: 30, category: "backend" },
        { name: "Flutter", exp: "2 years", lvl: 60, category: "frontend" },
        { name: "C# .NET", exp: "2 years", lvl: 65, category: "backend" },
        { name: "PHP Laravel", exp: "4 years", lvl: 35, category: "backend" },
        { name: "Docker", exp: "2 years", lvl: 30, category: "backend" },

        {
            name: "Adobe Photoshop",
            exp: "9 years",
            lvl: 75,
            category: "graphics",
        },
        {
            name: "Adobe Illustrator",
            exp: "9 years",
            lvl: 88,
            category: "graphics",
        },
        { name: "Adobe Premiere", exp: "5 years", lvl: 45, category: "graphics" },
        { name: "Canva", exp: "1 years", lvl: 60, category: "graphics" },
        {
            name: "Microsoft Office",
            exp: "8 years",
            lvl: 75,
            category: "graphics",
        },
        {
            name: "Microsoft PowerPoint",
            exp: "8 years",
            lvl: 80,
            category: "graphics",
        },
        {
            name: "Microsoft Excel",
            exp: "8 years",
            lvl: 45,
            category: "graphics",
        },

        { name: "SketchUp", exp: "5 years", lvl: 50, category: "graphics" },
        { name: "Blender", exp: "1 years", lvl: 10, category: "graphics" },

        { name: "English", lvl: 85, category: "language" },
        { name: "Thai", lvl: 55, category: "language" },
        { name: "Malay", lvl: 30, category: "language" },
        { name: "Arabic", lvl: 100, category: "language" },
    ],
    experience: [
        {
            id: "1",
            company: "Islamic Systems Corporation (Thailand)",
            role: "Frontend-focused Full-Stack Developer",
            startDate: "2023",
            endDate: "2026",
            images: ["icorp.jpeg", "icorp1.jpeg"],
            description: (
                <p>
                    After completing my academic internship at Islamic Systems Corporation (I-Corp), where I received strong evaluations for
                    discipline, work ethic, and adaptability, I was hired immediately after graduation and have since been working at the company for
                    two years as a full-time developer. During this period, I have been involved in developing and maintaining web and mobile
                    applications using technologies such as HTML, CSS, JavaScript, Tailwind CSS, Flutter, Next.js, .NET, and Microsoft SQL Server. My
                    role includes implementing frontend interfaces, collaborating with backend developers and designers, optimizing system
                    performance, and contributing to digital solutions used by various organizations across Thailand. This experience has strengthened
                    my technical abilities while allowing me to work effectively within a professional team environment.
                </p>
            ),
            technologies: [
                "Next.js",
                "C# .NET",
                "GitHub",
                "Docker",
                "Flutter",
                "Microsoft SQL Server",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Laravel",
                "PHP",
                "HTML",
                "CSS",
                "Postman",
            ],
        },
        {
            id: "2",
            icon: <GiPentarrowsTornado className="text-blue-500 text-[28px] p-1" />,
            company: "Freelance",
            role: "Web Developer",
            startDate: "2022",
            endDate: "Present",
            images: ["https://avatars.githubusercontent.com/u/72065224?v=4"],
            description: (
                <p>
                    Built responsive websites and dashboards starting from basic static development using HTML, CSS, JavaScript, and Tailwind CSS, and
                    progressing to modern frameworks such as .NET and Next.js. Experience includes both client-side data management using local
                    storage and server-side data handling with Microsoft SQL Server. Deployed projects on paid hosting platforms as well as GitHub
                    Pages for free unpaid and static applications.{" "}
                    <a className="text-blue-600 hover:text-blue-800" href="#portfolio" target="_blank" rel="noopener noreferrer">
                        Portfolio
                    </a>
                </p>
            ),
            technologies: [
                "HTML",
                "CSS",
                "Next.js",
                "C# .NET",
                "Microsoft SQL",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Blogger",
                "GitHub Pages",
            ],
        },
        {
            id: "3",
            icon: <GiPentarrowsTornado className="text-blue-500 text-[28px] p-1" />,
            company: "Freelance",
            role: "Graphic Designer",
            startDate: "2019",
            endDate: "Present",
            images: ["blueyedo.graphics.jpg"],
            description: (
                <p>
                    Provided freelance graphic design services for various clients from Saudi Arabia and Thailand, creating logos, marketing
                    materials, and social media graphics. Collaborated with clients to understand their vision and deliver designs that met their
                    needs. you can have a look at my portfolio on Instagram{" "}
                    <a
                        className="text-blue-600 hover:text-blue-800"
                        href="https://www.instagram.com/blueyedo.graphics/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @blueyedo.graphics
                    </a>
                </p>
            ),
            technologies: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere", "PowerPoint", "Canva", "SketchUp"],
        },
        {
            id: "4",
            company: "Mutawif Foundation for Hajj Pilgrims from Southeast Asia SEA (Saudi Arabia)",
            role: "Data Entry & Graphic Designer",
            startDate: "2017",
            endDate: "2018",
            images: ["SEA2.jpg", "hajj.jpeg", "SEA.jpg"],
            description: (
                <p>
                    Responsible for data entry of Hajj pilgrims' information and also montoring the numbers of pilgrims in Hajj season each day, and
                    also finding how many buses needed to transport them to the holy sites using Microsoft Excel, Additionally handled some Graphic
                    design tasks, like creating creating visual explanation of plans on maps using graphics, creating Operational and Workforce
                    Structures, and also creating PowerPoints for presenting and explaining Operational Plans for field personnel and other related
                    parties.
                </p>
            ),
            technologies: ["Microsoft PowerPoint", "Microsoft Excel", "Adobe Photoshop", "Adobe Illustrator"],
        },
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
                "SQL phpMyAdmin",
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "Laravel",
                "Adobe Illustrator",
                "Adobe Premiere",
                "Unreal Engine",
                "Github",
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
            role: "Arabic Debate Contest 2 - 1st Place",
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
            role: "Arabic Debate Contest 1",
            startDate: "2019",
            // endDate: "2017",
            description: `Received official recognition for contributing to the success of the World Arabic Language Day Festival, held on December 17–18, 2019. The participation supported activities related to Arabic language proficiency, skills development, and cultural promotion, and played a significant role in debate competition which contributed in the overall success of the event.`,
            images: ["publicArab2.jpeg", "arab_debator.jpg"],
            technologies: ["Communication", "Teamwork", "Critical Thinking", "Public Speaking", "Patience", "Conflict Resolution"],
        },
        {
            id: "5",
            company: "Fathoni University (Thailand)",
            icon: <LiaUniversitySolid className="text-blue-500 text-[28px] p-1" />,
            role: "English Public Speaking Contest – 3rd Place",
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
            icon: <PiIsland className="text-blue-500 text-[28px] p-1" />,
            startDate: "2019",
            // endDate: "2017",
            description: `Awarded for successfully completing a 50-meter bungy jump, demonstrating courage, mental resilience, and the ability to overcome high-pressure situations.`,
            images: ["courage.jpeg", "bungy.jpeg", "bungy1.mp4", "bungy2.mp4"],
            technologies: ["Confidence", "Taking Ownership", "High Pressure Management", "Resilience"],
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
            type: "coperate",
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
            tags: ["React", "Next.js", "TypeScript", "Tailwind_CSS", "C#_.NET", "Docker", "Microsoft_SQL"],
            // link: "https://imacscenter.org/",
            links: [
                { label: "Main Website", url: "https://imacscenter.org/main" },
                { label: "System Website", url: "https://imacscenter.org/app" },
            ],
            type: "coperate",
        },
        {
            id: "p3",
            title: "iMaCS View Application",
            description:
                "Served as the Flutter frontend developer for IMaCS View, a mobile app showing official prayer times for all IMaCS-registered mosques and provinces in Thailand, including UI development, API integration, and performance optimization.",
            imageUrl: "https://imacscenter.org/logos/imacs.png",
            objectFit: "contain",
            tags: ["Flutter", "C#_.NET", "Docker"],
            link: "https://play.google.com/store/apps/details?id=com.imacs.imacsview&hl=en",
            type: "coperate",
        },
        {
            id: "p4",
            title: "Mona's Employee Control Panel",
            description:
                "A web-based control panel for data entry and management services, built using HTML CSS and JavaScript Tailwind CSS. only local storage no backend. Website is published on github pages.",
            imageUrl: "monaweb.png",
            objectFit: "cover",
            tags: ["HTML", "CSS", "JavaScript", "Tailwind_CSS", "GitHub_Pages"],
            links: [
                {
                    label: "Control Panel Website",
                    url: "https://blueyedo.github.io/monawebsite/",
                },
                {
                    label: "Control Panel 2 Website",
                    url: "https://blueyedo.github.io/monagovwebsite/",
                },
                {
                    label: "Digital Gateway Website",
                    url: "https://blueyedo.github.io/monalinkswebsite/",
                },
            ],
            type: "freelance",
        },

        {
            id: "p4",
            title: "Naffis Web - Education Blog",
            description:
                "Developed Naffis Web, a education blog on Blogger, using custom HTML, CSS, and JavaScript to create responsive layouts and interactive features.",
            imageUrl:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFITehfA8cJFwcABXOdJMzzWxLZ60XMSw3Ve8zA0KmzDU8-w5zoKm0yGvM0UC-WnSKTNTMpF8AVo28QiU7-l2z7305SCBHmNK_O4rBiLQcGJof29EHUuDvMCXfcqahV8YOxtlv-wwy5x3NpcCcpDw995a5AErjBq1uuoq1ZE4uol47Q/s220/nafis.jpg",
            objectFit: "contain",
            tags: ["Blogger", "HTML", "CSS", "JavaScript"],
            link: "https://naffisweb.blogspot.com/?m=1",
            type: "freelance",
        },

        {
            id: "p5",
            title: "Graphics Portfolio - @blueyedo.graphics",
            description:
                "@blueyedo.graphics is a creative Instagram portfolio showcasing original graphic design works, visual branding, and digital artwork. Curated to highlight strong design aesthetics, visual communication skills, and multimedia creativity, this page reflects practical experience in graphic design, layout, and visual storytelling using tools such as Adobe Illustrator, Photoshop, and Premiere.",
            imageUrl: "blueyedo.graphics.jpg",
            objectFit: "cover",
            tags: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere", "PowerPoint", "Canva", "SketchUp", "Blender"],
            link: "https://www.instagram.com/blueyedo.graphics/",
            type: "freelance",
        },
    ],
};
