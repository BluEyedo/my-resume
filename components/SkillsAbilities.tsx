import React from "react";
import { Skill } from "../types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface SkillsAbilitiesProps {
  skills: Skill[];
}

export const SkillsAbilities: React.FC<SkillsAbilitiesProps> = ({ skills }) => {
  const softSkills = skills.filter(
    (s) => s.category === "soft-skills" || s.category === "tools"
  );
  const graphicSkils = skills.filter((s) => s.category === "graphics");
  const lang = skills.filter((s) => s.category === "language");
  const techSkills = skills.filter(
    (s) =>
      s.category === "frontend" ||
      s.category === "backend" ||
      s.category === "fullstack"
  );

  // Sort tech skills by level
  // techSkills.sort((a, b) => b.level - a.level);
  lang.sort((a, b) => b.level - a.level);
  // graphicSkils.sort((a, b) => b.level - a.level);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* Technical Proficiency Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          Programming Stack
        </h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={techSkills}
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                stroke="#e2e8f0"
              />
              <XAxis type="number" hide domain={[0, 100]} />
              <YAxis
                dataKey="name"
                type="category"
                width={100}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "#f1f5f9" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="level"
                fill="#3b82f6"
                radius={[0, 4, 4, 0]}
                barSize={20}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-3 mt-3">
          Other Technical Skills and Tools Stack
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={graphicSkils}
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                stroke="#e2e8f0"
              />
              <XAxis type="number" hide domain={[0, 100]} />
              <YAxis
                dataKey="name"
                type="category"
                width={100}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <Tooltip
                cursor={{ fill: "#1BDA841A" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="level"
                fill="#1BDA84"
                radius={[0, 4, 4, 0]}
                barSize={20}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Core Competencies Radar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col ">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Core Competencies
        </h3>
        <p className="text-sm text-slate-500 mb-4">proficiency analysis.</p>
        <div className="h-[550px] w-full flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="70%"
              data={
                softSkills.length > 0
                  ? softSkills
                  : [
                      { name: "Communication", level: 65 },
                      { name: "Leadership", level: 36 },
                      { name: "Problem Solving", level: 45 },
                      { name: "Programming", level: 75 },
                      { name: "Design", level: 70 },
                    ]
              }
            >
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis
                dataKey="name"
                tick={{ fill: "#64748b", fontSize: 11 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="#3b82f6"
                fillOpacity={0.4}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Spoken Languages Stack
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={lang}
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                stroke="#e2e8f0"
              />
              <XAxis type="number" hide domain={[0, 100]} />
              <YAxis
                dataKey="name"
                type="category"
                width={100}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "#8C00FF1A" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="level"
                fill="#8C00FF"
                radius={[0, 4, 4, 0]}
                barSize={20}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
