import React, { useState } from "react";
import { ProjectItem } from "../types";
import { ExternalLink, Github } from "lucide-react";

interface PortfolioProps {
  items: ProjectItem[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  const [readMore, setReadMore] = useState<null | number>(null);
  const [open, setOpen] = useState<null | number>(null);
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
            {project.type && (
              <div
                className="text-xs absolute top-4 right-4 bg-black/40 backdrop-blur p-2 border-white/40 border rounded-full capitalize
              text-white  transition-opacity z-20 shadow-sm "
              >
                {project.type}
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-1 scale-100">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center gap-2 absolute top-4 right-4 bg-gray-100 backdrop-blur px-2 py-1 rounded-full text-slate-900  transition-opacity z-20 shadow-sm hover:text-blue-600"
              >
                <ExternalLink size={18} />{" "}
                <span className="text-xs capitalize">link</span>
              </a>
            )}

            {project.links && project.links.length > 0 && (
              <button
                onClick={() => {
                  open == null ? setOpen(ix) : setOpen(null);
                }}
                className="flex flex-row items-center gap-2 absolute top-4 right-4 bg-gray-100 backdrop-blur px-2 py-1 rounded-full text-slate-900  transition-opacity z-20 shadow-sm hover:text-blue-600"
              >
                <ExternalLink size={18} />{" "}
                <span className="text-xs capitalize">links</span>
              </button>
            )}

            {/* Dropdown Menu */}
            {project.links && project.links.length && open == ix && (
              <div
                onMouseLeave={() => setOpen(null)}
                className="absolute top-4 right-4 bg-white border shadow-lg rounded-md z-30 min-w-40 max-w-64"
              >
                <ul className="py-1">
                  {project.links.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p
              className={`text-slate-600 text-sm mb-4 max-h-[100px] px-3 ${
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
