import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { SkillsAbilities } from "./components/SkillsAbilities";
import { ResumeData } from "./types";
// import { parseResumeFromText } from "./services/geminiService";
import { AIModal } from "./components/AIModal";
import { Sparkles, Quote } from "lucide-react";
import { initialData } from "./data/wholedata";
import Education from "./components/Education";
import CoursesCertifications from "./components/CoursesCertifications";

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState("overview");
    const [resumeData, setResumeData] = useState<ResumeData>(initialData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleResumeParse = async (text: string) => {
    //   const partialData = await parseResumeFromText(text);
    //   setResumeData((prev) => ({
    //     ...prev,
    //     ...partialData,
    //     // Ensure arrays are merged or overwritten safely if undefined
    //     experience: partialData.experience || prev.experience,
    //     projects: partialData.projects || prev.projects,
    //     skills: partialData.skills || prev.skills,
    //     contact: { ...prev.contact, ...(partialData.contact || {}) },
    //   }));
    //   setActiveSection("overview");
    // };

    React.useEffect(() => {
        document.getElementById("content-container").scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
    }, [activeSection]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans text-slate-900">
            <Sidebar
                fullName={resumeData.fullName}
                title={resumeData.title}
                contact={resumeData.contact}
                activeSection={activeSection}
                onNavigate={setActiveSection}
            />

            <div className="flex-1 lg:ml-80">
                {/* Mobile Header */}
                {/* <div className="lg:hidden bg-white p-2 text-xs shadow-sm flex justify-between items-center sticky top-0 z-20">
                    <h1 className="font-bold text-slate-800">{resumeData.fullName}</h1>
                    
                </div> */}

                <main className="p-6 lg:p-12 max-w-6xl mx-auto" id="content-container">
                    {/* Floating Action Button for Desktop */}
                    {/* <div className="hidden lg:block fixed bottom-8 right-8 z-30">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 bg-slate-900 text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 hover:bg-blue-600 transition-all duration-300 group"
            >
              <Sparkles
                size={18}
                className="text-yellow-400 group-hover:rotate-12 transition-transform"
              />
              <span className="font-medium">Import Resume</span>
            </button>
          </div> */}
                    {activeSection === "overview" && (
                        <div className="space-y-10 animate-fade-in">
                            <section>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">About Me</h2>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                                    <Quote size={64} className="absolute top-4 right-4 text-slate-100 -z-0" />
                                    <p className="text-lg md:text-xl leading-relaxed text-slate-600 relative ">{resumeData.summary}</p>
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-slate-900">Experience Highlights</h2>
                                    <button onClick={() => setActiveSection("experience")} className="text-blue-600 font-medium hover:underline">
                                        View All
                                    </button>
                                </div>
                                <Experience items={resumeData.experience.slice(0, 3)} />
                            </section>
                        </div>
                    )}

                    {activeSection === "education" && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
                            <Education items={resumeData.education} />
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 mt-14">Certifications & Courses</h2>
                            <CoursesCertifications items={resumeData.certificationCourses} />
                        </div>
                    )}

                    {activeSection === "experience" && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Experiences & Work History</h2>
                            <Experience items={resumeData.experience} />
                        </div>
                    )}
                    {activeSection === "portfolio" && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Selected Projects</h2>
                            <Portfolio items={resumeData.projects} />
                        </div>
                    )}
                    {activeSection === "capabilities" && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Capabilities & Skills</h2>
                            <SkillsAbilities skills={resumeData.skills} />
                        </div>
                    )}
                </main>
            </div>

            {/* <AIModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleResumeParse}
      /> */}
        </div>
    );
};

export default App;
