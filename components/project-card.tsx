"use client"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  gitUrl: string
  previewUrl: string
}

export default function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }: ProjectCardProps) {
  return (
    <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col group">
      {/* Image Container */}
      <div className="h-48 sm:h-56 relative overflow-hidden">
        <Image src={imgUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />

        {/* Overlay with action buttons */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-accent transition-colors"
          >
            <Github size={22} className="text-foreground" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-accent transition-colors"
          >
            <ExternalLink size={22} className="text-foreground" />
          </Link>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>
    </div>
  )
}
