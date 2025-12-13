import { enhanceDescription } from "@/services/geminiService";
import { Building2, Calendar, Wand2 } from "lucide-react";
import React, { useState } from "react";
import ImageViewer from "./ImageViewer";

type Props = { items: any };

const CoursesCertifications = ({ items }: Props) => {
  return (
    <div>
      <div className="space-y-8 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem: React.FC<{ item: any; isLast: boolean }> = ({
  item,
  isLast,
}) => {
  const [description, setDescription] = useState(item.description);
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleEnhance = async () => {
    setIsEnhancing(true);
    try {
      const improved = await enhanceDescription(description);
      setDescription(improved);
    } catch (err) {
      // Fallback silently
    } finally {
      setIsEnhancing(false);
    }
  };

  const [visible, setVisible] = useState(0);

  return (
    <div className="relative md:pl-12 group">
      {/* Dot on the timeline */}
      <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border-2 border-blue-500 rounded-full hidden md:flex items-center justify-center  shadow-sm group-hover:scale-110 transition-transform duration-300">
        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
      </div>

      <div
        className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300
      flex flex-row gap-4 items-center
      "
      >
        {item.images.map((item2, index2) => (
          <img
            src={item2}
            key={index2}
            className="h-[150px] border-blue-500 border rounded-md cursor-pointer"
            onClick={() => setVisible(index2 + 1)}
          />
        ))}

        {item.images.map((item2, index2) => {
          if (visible == index2 + 1) {
            return <ImageViewer src={item2} onClose={() => setVisible(0)} />;
          }
        })}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
              <div className="flex items-center text-slate-600 font-medium mt-1">
                <Building2 size={16} className="mr-2 text-blue-500" />
                {item.company}
              </div>
            </div>
            <div className="flex items-center text-slate-500 text-sm mt-2 sm:mt-0 bg-slate-50 px-3 py-1 rounded-full">
              <Calendar size={14} className="mr-2" />
              {item.startDate} - {item.endDate}
            </div>
          </div>

          <div className="relative mb-4">
            <p className="text-slate-600 leading-relaxed text-sm md:text-base pr-8">
              {description ?? ""}
            </p>
            {/* <button
            onClick={handleEnhance}
            disabled={isEnhancing}
            className="absolute top-0 right-0 p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            title="Enhance with AI"
          >
            <Wand2 size={16} className={isEnhancing ? "animate-spin" : ""} />
          </button> */}
          </div>

          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCertifications;
