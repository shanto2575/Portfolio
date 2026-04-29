"use client";

import { motion } from "framer-motion";
import AboutGeometry from "./models/AboutGeometry";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Firebase",
  "GSAP",
  "Three.js",
  "Responsive Design",
  "REST API"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <AboutGeometry />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">
              Transforming ideas into <span className="text-secondary">digital reality</span>
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Hi, I’m Shanto — a passionate Frontend Developer focused on building modern,
              fast, and user-friendly web applications.

              I specialize in Next.js, React, and the modern JavaScript ecosystem, turning ideas
              into clean, scalable, and high-performance digital experiences. I love crafting
              intuitive interfaces that not only look great but also deliver real value.

              Currently, I’m expanding my skills by learning backend development on my journey
              to becoming a full-stack developer.

              I’m always curious, always learning, and always excited to build something new.
            </p>

            <h4 className="text-lg font-medium mb-4 text-gray-300">My Stack:</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(124,58,237,0.2)" }}
                  className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 border border-white/10 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
