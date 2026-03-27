import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import { FlipWords } from "@/components/ui/flip-words";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "/src/assets/css/tomorrow.css";
import "react-toastify/dist/ReactToastify.css";
import "/src/assets/css/toast-custom.css";  // your custom styles



// New Twist: Particle Background - Replacing the GridBackground for a more dynamic, futuristic feel
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <div className="particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "A software engineer based in India",
    "Full-Stack Developer & UI/UX Enthusiast",
    "JavaScript Developer",
    "MERN Stack Enthusiast",
  ];

  const resumeFileName = "Manish-Kumar-Resume.pdf";
  const resumeUrl = `/${resumeFileName}`;
  const toastBaseConfig = {
    position: "bottom-right",
    autoClose: 2500,
    hideProgressBar: false,
    progressStyle: {
      background: "#3b82f6",
      height: "6px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(124,58,237,0.35)",
    },
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    style: {
      background: "#031125",
      color: "#cbd5e1",
      border: "1px solid #031125",
      borderRadius: "0.75rem",
      fontSize: "0.95rem",
      fontWeight: 500,
    },
  };

  const handleResumeDownload = async () => {
    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) {
        throw new Error("Resume file not found");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = resumeFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

      toast.success("Resume download starting...", toastBaseConfig);
    } catch (error) {
      console.error("Failed to download resume", error);
      toast.error("Resume not available right now.", toastBaseConfig);
    }
  };

  const [code] = useState(`
const profile = {
    name: 'Manish Kumar',
    title: 'Full-Stack Developer | MERN Stack Developer',
    skills: [
        'React', 'NodeJS', 'Redux', 'Express',
        'MySQL', 'MongoDB', 
        'Git', 'Linux', 'Docker', 'Deployment'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
        );
    }
};
  `);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for particles and other effects
    const style = document.createElement("style");
    style.textContent = `
      @keyframes particleFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
      }
      
      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #2563EB, #38BDF8); /* Electric Blue Glow */
        border-radius: 50%;
        animation: particleFloat infinite ease-in-out;
      }
      
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      <main className="bg-[#050d1a] text-white min-h-screen"> {/* Updated background to deep navy */}
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>

          {/* New Twist: Particle Background for a dynamic, space-like effect */}
          <ParticleBackground />

          {/* Meteors Effect - Kept the same */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Main content container - Slightly adjusted for centered layout twist */}
          <div
            className="container mx-auto flex flex-col items-center justify-center relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28 text-center"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Centered Text content - Twist: Made it centered instead of left-aligned for a more modern, focal hero */}
            <div className="w-full max-w-4xl mb-12 animate__animated animate__fadeInUp relative">
              {/* Decorative blurs - Updated colors to specified glows */}
              <div className="absolute hidden lg:-top-20 lg:left-1/2 transform -translate-x-1/2 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-[#2563EB]/10 rounded-full blur-3xl"></div> {/* Azure Glow */}
              <div className="absolute hidden lg:block lg:top-40 lg:left-1/2 transform -translate-x-1/2 w-48 h-48 lg:w-64 lg:h-64 bg-[#38BDF8]/10 rounded-full blur-3xl"></div> {/* Cyan Glow */}
              <div className="absolute hidden lg:block lg:bottom-20 lg:left-1/2 transform -translate-x-1/2 w-48 h-48 lg:w-64 lg:h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div> {/* Blue Glow */}

              {/* Welcome badge - Different Look: Changed to a glowing, rounded rectangle with a star icon for a cosmic vibe */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-700/20 to-sky-400/20 backdrop-blur-sm border border-blue-500/30  mb-6 sm:mb-8 mt-16 lg:mt-8 animate__animated animate__fadeInDown animate__delay-1s shadow-lg shadow-blue-500/20">
                <i className="fas fa-star text-sky-300 animate-spin text-sm"></i>
                <span className="text-blue-200 text-sm sm:text-base font-semibold tracking-wide">
                  Welcome to my website
                </span>
              </div>

              {/* Name section - Different Look: Removed SparklesText, added a neon glow effect and a sliding animation instead of typing */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-center animate-slideInFromLeft">
                  <span className="text-white drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]">
                    Hello
                  </span>
                  <span className="relative inline-block ml-4">
                    I&apos;m
                    <span className="text-white drop-shadow-[0_0_18px_rgba(59,130,246,0.45)]">
                      {" "}
                      MANISH
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-8 sm:mb-12 max-w-xl mx-auto">
                <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                  Crafting seamless web experiences with code and creativity.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s justify-center">
                {/* View Projects Button */}
                <a
                  href="https://github.com/1213manish" target="_blank" rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-900 to-cyan-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-900 group-hover:to-sky-700">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </a>

                {/* Resume Download Button */}
                <button
                  type="button"
                  onClick={() => setIsResumeModalOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <span>Get Resume</span>
                      <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                    </span>
                  </span>
                </button>

              </div>

              {/* Floating badges - Repositioned to left and right sides for better symmetry */}
              <div className="hidden lg:block absolute left-1 top-1/2 animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-300">
                  <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI
                  Magic
                </div>
              </div>
              <div className="hidden lg:block absolute right-8 bottom-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
                </div>
              </div>
              <div className="hidden lg:block absolute right-8 bottom-5/4 animate-float">
                <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
                </div>
              </div>
            </div>

            {/* Code window - Kept below for a stacked layout twist */}
            <div className="w-full max-w-2xl animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className="code-window bg-[#071b3a]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i>
            About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>
        <PortfolioPage />
      </main>

      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsResumeModalOpen(false)}
            aria-hidden="true"
          ></div>

          <div className="relative w-full max-w-4xl">
            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-sky-400 via-blue-900 to-slate-950 animate-gradient-x shadow-[0_0_40px_rgba(8,47,73,0.7)]">
              <div className="bg-[#071736] rounded-3xl border border-slate-800/80 p-6 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70 mb-1">
                  Resume Preview
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {resumeFileName}
                </h3>
              </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleResumeDownload}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500/40 text-blue-100 bg-blue-500/10 hover:bg-blue-500/20 transition"
                    >
                      <i className="fas fa-download"></i>
                      Download
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsResumeModalOpen(false)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800/60 transition"
                    >
                      <i className="fas fa-times"></i>
                      Close
                    </button>
                  </div>
                </div>

                <div className="w-full h-[70vh] bg-[#050d1a] border border-slate-800/70 rounded-2xl overflow-hidden">
                  <iframe
                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Resume preview"
                    className="w-full h-full"
                  ></iframe>
                </div>

                <p className="text-xs text-slate-400 mt-3">
                  If the preview doesn&apos;t load, use the download button to open the PDF in your viewer.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
