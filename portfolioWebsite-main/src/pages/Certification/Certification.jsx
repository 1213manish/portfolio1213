import React from "react";

export default function Certification() {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL - IIT Kharagpur",
      date: "2025",
      image: "/certificates/cloud-computing.jpg",
    },
    {
      title: "Data Structure & Algorithm using Java",
      issuer: "CipherSchools",
      date: "Jul 2025",
      image: "/certificates/dsa-java.jpg",
    },
    {
      title: "Backend Development Course",
      issuer: "Physics Wallah",
      date: "Sep 2025",
      image: "/certificates/backend-development.jpg",
    },
    {
      title: "ChatGPT + Prompt Engineering",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      image: "/certificates/prompt-engineering.jpg",
    },
    {
      title: "Master Generative AI Tools",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      image: "/certificates/generative-ai-tools.jpg",
    },
    {
      title: "Build AI Apps with No-Code Tools",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      image: "/certificates/no-code-ai-apps.jpg",
    },
    {
      title: "Web Development Foundations",
      issuer: "Great Learning",
      date: "2024",
      image: "/certificates/web-foundations.jpg",
    },
    {
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      date: "2024",
      image: "/certificates/javascript-essentials.jpg",
    },
    {
      title: "Git and GitHub",
      issuer: "Google",
      date: "2024",
      image: "/certificates/git-github.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20 text-white">
      <div className="absolute inset-0 bg-[#050d1a]" />

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

      <section className="relative max-w-[1280px] mx-auto px-6 md:px-14 lg:px-20">
        <div className="relative mb-3 text-center">
          <h1 className="inline-block text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-blue-900 to-teal-400 bg-clip-text">
            Certification
          </h1>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-blue-600/20 blur-3xl rounded-full" />
        </div>
        <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-4xl mx-auto mb-10">
          "Transforming ideas into digital reality, one project at a time"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 pt-2">
          {certifications.map((item, index) => (
            <article
              key={index}
              className="group rounded-2xl border border-indigo-500/25 bg-[#090f24] overflow-hidden shadow-[0_0_30px_rgba(52,67,187,0.2)] hover:border-cyan-400/55 hover:shadow-[0_0_40px_rgba(34,211,238,0.26)] transition-all duration-300"
            >
              <div className="relative aspect-[16/11] bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <a
                  href={item.image}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <span className="relative inline-block">
                    View Certificate
                    <span className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                </a>
              </div>

              <div className="px-4 py-4 bg-gradient-to-br from-[#0a1025] to-[#060a1a]">
                <h2 className="text-xl leading-snug font-semibold text-slate-100 line-clamp-2">
                  {item.title}
                </h2>
                <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                  <p className="text-violet-200 truncate">{item.issuer}</p>
                  <p className="text-slate-400 shrink-0">{item.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

    </main>
  );
}
