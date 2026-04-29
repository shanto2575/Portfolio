"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's build something <br />
            <span className="gradient-text text-glow">amazing together</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's connect and make it happen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-200 transition-all"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-200 transition-all"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-200 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                isSuccess
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" /> Sending...
                </>
              ) : isSuccess ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
