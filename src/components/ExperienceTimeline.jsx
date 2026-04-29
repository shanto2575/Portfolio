"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

const timelineData = [
  {
    year: "Currently",
    title: "Frontend Developer",
    subtitle: "Learning Backend",
    description: "Working as a Frontend Developer. Learning Backend Development (Node.js, MongoDB) with the goal to become a Full-Stack Developer.",
    icon: FaBriefcase,
  },
  {
    year: "2024",
    title: "Advanced Frontend",
    subtitle: "Next.js & Modern Web Architecture",
    description: "Built full projects with authentication, dashboards, and API integration. Started exploring 3D web (Three.js) and animations.",
    icon: FaLaptopCode,
  },
  {
    year: "2023 - 2027",
    title: "B.Sc in Computer Science & Engineering",
    subtitle: "Dhaka International University",
    description: "Focus on Web Development and Software Engineering.",
    icon: FaGraduationCap,
  },
  {
    year: "2023",
    title: "Frontend Development",
    subtitle: "React & Modern JavaScript",
    description: "Deep focus on React. Learned Tailwind CSS and responsive design. Built multiple UI projects and landing pages.",
    icon: FaCode,
  },
  {
    year: "2022",
    title: "Started Programming",
    subtitle: "HTML, CSS & JavaScript",
    description: "Learned HTML, CSS and basic JavaScript. Built first static websites.",
    icon: FaCode,
  },
  {
    year: "2020",
    title: "Completed HSC",
    subtitle: "Dinajpur Adarsha College",
    description: "Started interest in programming and web development.",
    icon: FaGraduationCap,
  },
];



export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the vertical line drawing down
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // Animate each timeline item
    itemsRef.current.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Coding Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            <span className="text-gray-200 font-semibold">Shanto Dev Sharma</span> • Frontend Developer
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2" />
          {/* Vertical Line Animated */}
          <div
            ref={lineRef}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2 shadow-[0_0_10px_#7C3AED]"
          />

          <div className="space-y-12 relative">
            {timelineData.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for alternative side */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Center Node */}
                  <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                    <Icon className="text-secondary text-sm" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                    <div className={`glass-card p-6 transition-colors ${
                      isEven 
                        ? "border-l-4 border-l-primary hover:border-l-secondary md:border-l-0 md:border-r-4 md:border-r-primary md:hover:border-r-secondary"
                        : "border-l-4 border-l-primary hover:border-l-secondary"
                    }`}>
                      <span className="text-accent text-sm font-mono font-bold mb-2 block">{exp.year}</span>
                      <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
                      <h4 className="text-md text-gray-400 font-medium mb-3">{exp.subtitle}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
