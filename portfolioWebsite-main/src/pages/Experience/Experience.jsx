import React, { useState } from "react";
import { Layers, Briefcase } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  onClick,
  clickable,
}) => (
  <div
    className={`group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${clickable ? "cursor-pointer" : ""}`}
    onClick={onClick}
  >
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-sky-700 to-indigo-900 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-400/55 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.26)]">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-sky-200 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          {period && (
            <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
              {period}
            </span>
          )}
        </div>
        <p className="text-gray-300 mt-4 leading-relaxed">
          {description}
        </p>
        {clickable && (
          <p className="text-cyan-400 text-sm mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to view details & certificate →
          </p>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-blue-900" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-blue-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-blue-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificateFileName = "UpdatedExperienceCertificate.pdf";
  const certificateUrl = `/${certificateFileName}`;

  const handleCertificateDownload = async () => {
    try {
      const response = await fetch(certificateUrl);
      if (!response.ok) throw new Error("Certificate file not found");

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = certificateFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Failed to download certificate", error);
    }
  };

  const experiences = [
    {
      icon: Briefcase,
      title: "Full Stack Web Developer Intern",
      company: "KiudTech Solutions Pvt. Ltd",
      period: "3 Months",
      description:
        "Developed an LMS for schools serving 200+ students, engineered RESTful APIs with Node.js and MongoDB.",
      clickable: true,
      onClick: () => setIsModalOpen(true),
    },
    {
      icon: Layers,
      title: "Technical Head",
      company: "Zillion - Student Organization",
      period: "Present",
      description:
        "Led the organization: mentored junior developers, organized workshops and hackathon.",
    },
  ];

  const internshipLearnings = [
    "Developed a Learning Management System (LMS) for schools serving 200+ students, featuring course management, content delivery, and user authentication, reducing administrative overhead by ~30%.",
    "Built and deployed 3 responsive client-facing websites using React and Tailwind CSS, achieving 95+ Lighthouse performance scores across all projects.",
    "Engineered RESTful backend APIs with Node.js and Express integrated with MongoDB Atlas, supporting full CRUD operations and cutting average API response time by 25%.",
    "Performed end-to-end testing and debugging, reducing post-deployment bugs by 40% across all delivered projects.",
  ];

  const techStack = ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#050d1a]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-blue-900 to-teal-400 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-blue-600/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Internship Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          ></div>

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-sky-400 via-blue-900 to-slate-950 animate-gradient-x shadow-[0_0_40px_rgba(8,47,73,0.7)]">
              <div className="bg-[#071736] rounded-3xl border border-slate-800/80 p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70 mb-1">
                      Internship Experience
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      Full Stack Web Developer Intern
                    </h3>
                    <p className="text-blue-400 mt-1">
                      KiudTech Solutions Pvt. Ltd · Jun 2025 – Aug 2025
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleCertificateDownload}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500/40 text-blue-100 bg-blue-500/10 hover:bg-blue-500/20 transition"
                    >
                      <i className="fas fa-download"></i>
                      Download Certificate
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800/60 transition"
                    >
                      <i className="fas fa-times"></i>
                      Close
                    </button>
                  </div>
                </div>

                {/* Key Learnings */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-[0.2em] text-cyan-300/80 mb-4 font-semibold">
                    Key Contributions & Learnings
                  </h4>
                  <ul className="space-y-3">
                    {internshipLearnings.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-[0.2em] text-cyan-300/80 mb-3 font-semibold">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Preview */}
                <div className="w-full h-[50vh] bg-[#050d1a] border border-slate-800/70 rounded-2xl overflow-hidden">
                  <iframe
                    src={`${certificateUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Experience Certificate Preview"
                    className="w-full h-full"
                  ></iframe>
                </div>

                <p className="text-xs text-slate-400 mt-3">
                  If the preview doesn&apos;t load, use the download button to open the certificate in your viewer.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceSection;
