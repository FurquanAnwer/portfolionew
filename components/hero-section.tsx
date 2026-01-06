"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <p className="text-muted-foreground text-lg mb-2">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">Md Furquan Anwer</h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">Full-Stack Developer</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
            Innovative developer skilled in React and Next.js, dedicated to crafting high-performance web solutions that
            enhance user experience and drive business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="#projects"
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/furquanresumenew.pdf"
              target="_blank"
              className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-accent transition-colors"
            >
              Download CV
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/FurquanAnwer"
              target="_blank"
              className="p-3 glass-card rounded-full hover:bg-accent transition-colors"
            >
              <Github size={20} className="text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/furquananwer/"
              target="_blank"
              className="p-3 glass-card rounded-full hover:bg-accent transition-colors"
            >
              <Linkedin size={20} className="text-foreground" />
            </Link>
            <Link
              href="mailto:furquananwer@gmail.com"
              className="p-3 glass-card rounded-full hover:bg-accent transition-colors"
            >
              <Mail size={20} className="text-foreground" />
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full glass-card p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-accent to-secondary">
                <Image
                  src="/professional-developer-portrait-black-white.jpg"
                  alt="Md Furquan Anwer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-border/50 -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
