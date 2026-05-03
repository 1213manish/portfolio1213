import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Layout, Cpu, Database, } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMui,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiFirebase,
  SiVercel,
  SiWoocommerce,
  SiExpress,
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-[#041126] border-gray-700 hover:border-cyan-400/55 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.26)]">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "Material UI",
          icon: <SiMui className="w-4 h-4 text-[#007FFF]" />,
        },
        
      ],
    },
    {
      icon: FaNodeJs,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Express",
          icon: <SiExpress className="w-4 h-4 text-white" />,
        },
        {
          name: "PHP",
          icon: <SiPhp className="w-4 h-4 text-[#777BB4]" />,
        },
        {
          name: "Laravel",
          icon: <SiLaravel className="w-4 h-4 text-[#FF2D20]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "text-cyan-300",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
      ],
    },
    {
      icon: FaDocker,
      title: "DevOps & Deployment",
      color: "text-blue-300",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "Kubernetes",
          icon: <Cpu className="w-4 h-4 text-[#326CE5]" />,
        },
        {
          name: "Hostinger",
          icon: <FaLinux className="w-4 h-4 text-[#673DE6]" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },
        {
          name: "Vercel",
          icon: <SiVercel className="w-4 h-4 text-white" />,
        },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "UI Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "SVG Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "3D Modeling",
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Figma",
          icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" />,
        },
        {
          name: "Canva",
          icon: <Paintbrush className="w-4 h-4 text-[#00C4CC]" />,
        },
      ],
    },
    {
      icon: FaWordpress,
      title: "WordPress Development",
      color: "text-indigo-300",
      skills: [
        {
          name: "WooCommerce",
          icon: <SiWoocommerce className="w-4 h-4 text-[#96588A]" />,
        },
        {
          name: "Theme Customization",
          icon: <Paintbrush className="w-4 h-4 text-[#60A5FA]" />,
        },
        {
          name: "Custom Plugin",
          icon: <Code2 className="w-4 h-4 text-[#22D3EE]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#050d1a] relative">
      

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
