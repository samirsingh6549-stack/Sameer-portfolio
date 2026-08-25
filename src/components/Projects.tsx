'use client';

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "NyayaSetu",
    description: "An AI-driven civic bridge empowering 1.4 billion citizens with free, multilingual legal drafting, RTI petitions, and welfare scheme navigation.",
    longDescription: "NyayaSetu is an AI-powered legal and civic empowerment platform designed to democratize access to justice for Indian citizens. Powered by Next.js and Google Gemini AI, it enables anyone to draft statutory RTI applications, generate legally sound dispute notices, and discover eligible government welfare schemes for free. Supporting 12 Indian regional languages with instant court-compliant PDF downloads, NyayaSetu bridges the gap of expensive lawyer fees, complex legal jargon, and language barriers.",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    features: [
      "RTI Drafting Agent: Auto-generates formal Section 6(1) petitions with statutory citations, specific query framing, and BPL fee waivers.",
      "Rights & Dispute Navigator: Drafts authoritative legal notices for consumer complaints, tenancy issues, unpaid salaries, and cyber/UPI fraud.",
      "Welfare Scheme Autofill: Identifies matching Central & State welfare schemes and creates standardized application sheets for CSC centers.",
      "Multilingual Access: Fully translates and formats documents in 12 Indian regional languages using native scripts.",
      "Instant PDF Export & Presets: Produces official, multi-page downloadable PDFs with 1-click pre-loaded templates for immediate use."
    ],
    github: "https://github.com/samirsingh6549-stack/nyayasetu",
    liveDemo: "https://nyayasetu-one.vercel.app/",
    image: "/nyayasetu.png",
    featured: true,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="section-padding bg-background z-20 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">What I Built</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="glow-text">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className={`grid gap-6 mx-auto ${projects.length === 1 ? 'max-w-xl grid-cols-1' : projects.length === 2 ? 'max-w-4xl grid-cols-1 md:grid-cols-2' : 'max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="glass-card glow-hover p-6 flex flex-col group relative overflow-hidden cursor-pointer bg-background"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Top accent */}
                <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />

                <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">{project.description}</p>

                <div className="mb-5">
                  <p className="text-xs text-primary/70 mb-2 uppercase tracking-wider font-semibold">Key Features</p>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto relative z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-transparent border border-primary text-primary hover:bg-primary/10 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground border border-transparent hover:bg-primary/90 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
