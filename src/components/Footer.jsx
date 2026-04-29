"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Shanto. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/shanto2575" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shantosharma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors text-xl">
            <FaLinkedin />
          </a>
          <a href="https://x.com/ShantoShar62589" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-xl">
            <FaTwitter />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

