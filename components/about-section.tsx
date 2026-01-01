"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Jio",
    period: "2022 - 2024",
    description: "Building modern web applications using React, Next.js, and Node.js for various clients.",
  },
  {
    title: "Software Engineer Intern",
    company: "National Remote Sensing Centre, ISRO",
    period: "2020",
    description: "Developed responsive user interfaces and implemented complex features using React and TypeScript.",
  }
]

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Aligarh Muslim University",
    period: "2018 - 2022",
    description: "Specialized in software development and data structures.",
  }
]

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Git",
  "REST APIs",
  "Docker"
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">About Me</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A passionate developer with expertise in building scalable web applications
        </p>

        {/* Skills */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-accent/50 border border-border rounded-full text-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience & Education Vertical Stack */}
        <div className="flex flex-col gap-12">
          {/* Experience Timeline */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent rounded-lg">
                <Briefcase size={24} className="text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l border-border"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-foreground" />

                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                  <h4 className="text-lg font-medium text-foreground mt-1">{exp.title}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent rounded-lg">
                <GraduationCap size={24} className="text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l border-border"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-foreground" />

                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                  <h4 className="text-lg font-medium text-foreground mt-1">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
