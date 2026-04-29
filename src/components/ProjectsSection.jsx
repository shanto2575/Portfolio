"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "The Daily News",
    image: "https://i.ibb.co.com/KptF94w4/daily-news.png",
    tags: ["React", "Next.js", "News API"],
    demo: "https://the-daily-news-five.vercel.app",
    github: "https://github.com/shanto2575/The-Daily-News",
  },
  {
    title: "Pixgen AI Image",
    image: "https://i.ibb.co.com/wNHbKTQM/pixgen.png",
    tags: ["React", "AI", "Tailwind"],
    demo: "https://pixgen-ai-image.vercel.app",
    github: "https://github.com/shanto2575/Pixgen-Ai-Image",
  },
  {
    title: "Play Store Clone",
    image: "https://i.ibb.co.com/4ggtQxkP/play-store.png",
    tags: ["Next.js", "Tailwind", "Firebase"],
    demo: "https://play-store-pearl.vercel.app",
    github: "https://github.com/shanto2575/Play-Store",
  },
  {
    title: "KeenKeeper",
    image: "https://i.ibb.co.com/CK1Zgqbz/keenkeeper.png",
    tags: ["React", "State Management", "CSS"],
    demo: "https://keep-keepers.vercel.app",
    github: "https://github.com/shanto2575/KeenKeeper",
  },
  {
    title: "Foodi",
    image: "https://i.ibb.co.com/BHGg605N/foodi.png",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "https://foodi-lac-ten.vercel.app",
    github: "https://github.com/shanto2575/Foodi",
  },
  {
    title: "Coming Soon...",
    image: "https://picsum.photos/seed/soon/600/600",
    tags: ["Next.js", "Three.js", "Awesome"],
    demo: "#",
    github: "#",
  },
];

function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-card overflow-hidden group relative"
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-300" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6 relative z-20 bg-background/80 backdrop-blur-sm" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
