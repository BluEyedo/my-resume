import React, { useState } from "react";
import { ProjectItem } from "../types";
import { ExternalLink, Github } from "lucide-react";

interface PortfolioProps {
  items: ProjectItem[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  const [readMore, setReadMore] = useState<null | number>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {items.map((project, ix) => (
        <div
          key={project.id}
          className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
            <img
              src={project.imageUrl}
              alt={project.title}
              className={`w-full h-full object-${project.objectFit} transform group-hover:scale-105 transition-transform duration-500`}
            />
          </div>

          <div className="p-6 flex flex-col flex-1 scale-100">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 bg-gray-100 backdrop-blur p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-sm hover:text-blue-600"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p
              className={`text-slate-600 text-sm mb-4 max-h-[100px] ${
                project.description.length > 313 && "overflow-y-scroll"
              } `}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
