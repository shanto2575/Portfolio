"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's build something <br />
            <span className="gradient-text text-glow">
              amazing together
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Feel free to reach out through email or connect with me on social platforms.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >

          {/* Email */}
          <a
            href="mailto:shanto2575@gmail.com?subject=Project Inquiry&body=Hello Shanto, I want to work with you."
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold hover:scale-105 transition"
          >
            <FaEnvelope /> Email Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/shantosharma"
            target="_blank"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 text-white text-lg font-semibold hover:bg-white/10 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shanto2575"
            target="_blank"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 text-white text-lg font-semibold hover:bg-white/10 transition"
          >
            <FaGithub /> GitHub
          </a>

        </motion.div>
      </div>
    </section>
  );
}