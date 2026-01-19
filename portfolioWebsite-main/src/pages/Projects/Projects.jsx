import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from "react"
import { useTransform, motion, useScroll } from "framer-motion";
import PropTypes from "prop-types";

const projects = [
   {
    title: "Roomezy",
    description:
      "A modern room-sharing and rental platform that helps users discover, connect, and manage stays with a seamless social and booking experience.",
    src: "",
    link: "https://res.cloudinary.com/djsytmwcw/image/upload/v1766384234/samples/paper.png",
    color: "brown",
    githubLink: "https://github.com/Aman-ydav/Roomezy",
    liveLink: "https://roomezy.vercel.app/",
  },
   {
    title: "CareSync - Hospital Management System",
    description:
      "An AI-powered healthcare management platform that streamlines patient records, appointments, and digital care coordination in one unified system.",
    src: "",
    link: "https://res.cloudinary.com/djsytmwcw/image/upload/v1766384252/samples/waves.png",
    color: "teal",
    githubLink: "https://github.com/Aman-ydav/CareSync",
    liveLink: "https://caresyncapp.vercel.app/",
  },
  {
    title: "Spark Student Club Website",
    description:
      "Official website for Spark student organisation featuring events, team, and a database connected joining form.",
    src: "",
    link: "https://res.cloudinary.com/djsytmwcw/image/upload/v1763216482/roomezy/ma8v3sfm1hiijejawhl8.png",
    color: "orange",
    githubLink: "https://github.com/Aman-ydav/spark",
    liveLink: "https://www.sparkedu.in/",
  },
  {
    title: "Diabetes Predictor",
    description:
      "ML - based tool that predicts diabetes risk using real data and user health metrics.",
    src: "",
    link: "https://res.cloudinary.com/djsytmwcw/image/upload/v1763216543/roomezy/boto4cr9ca6ss68ie5fc.png",
    color: "skyblue",
    githubLink: "https://github.com/Aman-ydav/diabetes-prediction",
    liveLink: "https://diabetes-prediction-beta.vercel.app/",
  },
  {
    title: "Virtual Zoo",
    description:
      "A creative and educational virtual zoo platform where users can explore different species hologram interactively.",
    src: "",
    link: "https://res.cloudinary.com/djsytmwcw/image/upload/v1763216519/roomezy/gyr73ydb7decfao3kekx.png",
    color: "orange",
    githubLink: "https://github.com/Aman-ydav/virtual_zoo",
    liveLink: "https://virtual-zoo-app.vercel.app/",
  },
  {
    title: "Fleet Management System",
    description:
      "PHP-based system with login, driver tracking, and vehicle allocation for managers",
    src: "",
    link: "https://res.cloudinary.com/djsytmwcw/image/upload/v1763216560/roomezy/qxwthwowxunkbvt6fshm.png",
    color: "#ed649e",
    githubLink: "https://github.com/Aman-ydav/fleetPro",
    liveLink: "https://fleet-pro.infinityfreeapp.com/",
  },
];


export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
     <main className="bg-[#130b14]" ref={container}>
      <section className="text-white w-full ">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              title={project.title}
              color={project.color}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          );
        })}
      </section>
    </main>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="w-full h-[55vh] flex flex-col md:flex-row bg-[#160e24] rounded-2xl overflow-hidden shadow-xl">

          <div className="w-full md:w-[55%] h-auto relative bg-white flex items-center justify-center">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-auto object-contain"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.25 }}
              transition={{ duration: 0.3 }}
            />

            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">

                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium" style={{ color }}>
                    Code
                  </span>
                </motion.a>

                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium" style={{ color }}>
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
