import React from "react";
import { useState } from "react";
import { ContactInfo } from "../types";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Briefcase,
  Github,
} from "lucide-react";
import ImageViewer from "./ImageViewer";

interface SidebarProps {
  fullName: string;
  title: string;
  contact: ContactInfo;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  fullName,
  title,
  contact,
  activeSection,
  onNavigate,
}) => {
  const [visible, setVisible] = useState(false);
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "education", label: "education" },
    { id: "experience", label: "experiences" },
    { id: "portfolio", label: "Portfolio" },
    { id: "capabilities", label: "skills & abilities" },
  ];

  return (
    <div className="w-full lg:w-80 bg-white lg:h-screen lg:fixed lg:left-0 top-0 border-r border-slate-200 flex flex-col shadow-sm z-10 pb-2">
      <div className="p-6 flex flex-col items-center text-center border-b border-slate-100">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner mb-4 bg-slate-200">
          <img
            src={"my-pic.jpg"}
            style={{ objectFit: "cover", cursor: "pointer" }}
            alt=""
            onClick={() => setVisible(true)}
          />

          {visible && (
            <ImageViewer src="my-pic.jpg" onClose={() => setVisible(false)} />
          )}
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{fullName}</h1>
        <p className="text-slate-500 text-sm mt-1">{title}</p>
      </div>

      <div className="flex-1 overflow-y-auto mt-3">
        <nav className="px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                activeSection === item.id
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className="capitalize text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-8 mt-3">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Contact
          </h3>
          <div className="space-y-4">
            {contact.email && (
              <div className="flex items-center text-slate-600 text-sm">
                <Mail size={16} className="mr-3 text-slate-400" />
                <span className="truncate">{contact.email}</span>
              </div>
            )}
            {contact.phone && (
              <div className="flex items-center text-slate-600 text-sm">
                <Phone size={16} className="mr-3 text-slate-400" />
                <span>{contact.phone}</span>
              </div>
            )}
            {contact.location && (
              <div className="flex items-center text-slate-600 text-sm">
                <MapPin size={16} className="mr-3 text-slate-400" />
                <span>{contact.location}</span>
              </div>
            )}
            {contact.github && (
              <div className="flex items-center text-slate-600 text-sm">
                <Github size={16} className="mr-3 text-slate-400" />
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  Github Profile
                </a>
              </div>
            )}
            {contact.linkedin && (
              <div className="flex items-center text-slate-600 text-sm">
                <Linkedin size={16} className="mr-3 text-slate-400" />
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            )}
            {contact.website && (
              <div className="flex items-center text-slate-600 text-sm">
                <Globe size={16} className="mr-3 text-slate-400" />
                <a
                  href={contact.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  Portfolio Site
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div className="p-3 border-t border-slate-100">
        <button className="w-full flex items-center justify-center space-x-2 bg-slate-900 text-white py-2.5 rounded-lg hover:bg-slate-800 transition-colors font-medium  shadow-lg shadow-slate-900/20">
          <Briefcase size={16} />
          <span>Download PDF</span>
        </button>
      </div> */}
    </div>
  );
};
