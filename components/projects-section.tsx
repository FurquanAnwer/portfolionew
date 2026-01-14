"use client"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard from "./project-card"

const projectsData = [
    {
    id: 1,
    title: "AI Image Editor",
    description:
      "A Next.js-based Image Editor that lets users upload, edit, and manage images in real time with AI-powered features.",
    image: "/ai-image-editor-dark-theme.jpg",
    gitUrl: "https://github.com/FurquanAnwer/ImageEditor",
    previewUrl: "https://image-editor-omega-ten.vercel.app/",
    tag: "Projects",
  },  
  {
    id: 2,
    title: "ShopMart",
    description:
      "An e-commerce application built using Next.js, featuring a responsive design and user authentication. It includes an Add to Cart functionality.",
    image: "/ecommerce-shopping-website-dark-theme.jpg",
    gitUrl: "https://github.com/FurquanAnwer/Shopmart_hiring",
    previewUrl: "https://hiring-challenge-lake.vercel.app",
    tag: "Projects",
  },
  {
    id: 3,
    title: "Holiday Inn",
    description:
      "A Hotel Internal Management App built using React.js and Styled Components, with Supabase for backend functionality.",
    image: "/hotel-management-dashboard-dark-theme.jpg",
    gitUrl: "https://github.com/FurquanAnwer/Hotel-Internal-Management-App",
    previewUrl: "https://hotel-internal-management-app.vercel.app/dashboard",
    tag: "Projects",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "A modern personal portfolio built with Next.js, showcasing projects, skills, and experience with a sleek design and fast performance.",
    image: "/developer-portfolio-dark-theme.jpg",
    gitUrl: "https://github.com/FurquanAnwer/portfolionew",
    previewUrl: "https://www.furquan.xyz",
    tag: "Projects",
  }, 
  {
    id: 5,
    title: "Youtube Clone",
    description:
      "A YouTube clone built using React, offering video searching, video viewing, and commenting features in a user-friendly interface.",
    image: "/video-streaming-platform-dark-theme.jpg",
    gitUrl: "https://github.com/FurquanAnwer/youtube-clone",
    previewUrl: "https://yclone-three.vercel.app/",
    tag: "Projects",
  },
  {
    id: 6,
    title: "React Quiz",
    description:
      "A React quiz application leveraging the useReducer hook for state management, providing a dynamic and interactive user experience.",
    image: "/quiz-application-dark-theme.jpg",
    gitUrl: "https://github.com/FurquanAnwer/quizai",
    previewUrl: "https://quizai-gamma.vercel.app/",
    tag: "Projects",
  },
  {
    id: 7,
    title: "Whack-a-mole",
    description:
      "A fast-paced arcade game where players score points by clicking randomly appearing moles within a time limit.",
    image: "/whack-a-mole.png",
    gitUrl: "https://github.com/FurquanAnwer/whack-a-mole",
    previewUrl: "https://whack-a-mole-seven-tau.vercel.app/",
    tag: "Games",
  },
  {
    id: 8,
    title: "2048",
    description:
      "A sliding puzzle game where players combine numbered tiles on a grid to reach the 2048 tile through strategic moves.",
    image: "/2048.png",
    gitUrl: "https://github.com/FurquanAnwer/2048",
    previewUrl: "https://2048-chi-nine.vercel.app/",
    tag: "Games",
  }
]

const tags = ["All", "Projects", "Games"]

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeTag === "All" ? projectsData : projectsData.filter((project) => project.tag === activeTag)

  return (
    <section id="projects" className="py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">My Projects</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Explore my latest work across different categories
        </p>

        <div className="flex justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTag === tag
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground border-border hover:bg-foreground/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="w-full max-w-sm"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
