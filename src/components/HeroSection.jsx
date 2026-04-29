"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import HeroGeometry from "./models/HeroGeometry";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "I build modern web experiences";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 z-10"
        >
          <div className="flex gap-4 mb-4">
            {[
              { Icon: FaGithub, href: "https://github.com/shanto2575" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/shantosharma" },
              { Icon: FaTwitter, href: "https://x.com/ShantoShar62589" }
            ].map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-primary transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight">
            Hi, I'm <span className="gradient-text">Shanto</span> 👋
            <br />
            <span className="text-4xl md:text-5xl text-gray-300">Frontend Developer</span>
          </h1>

          <div className="h-8">
            <p className="text-xl text-secondary font-mono">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-secondary ml-1 align-middle"
              />
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass text-white font-medium rounded-full hover:bg-white/10 transition-all"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[500px] relative z-0"
        >
          <HeroGeometry />
        </motion.div>
      </div>
    </section>
  );
}
