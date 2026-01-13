"use client"
import { motion, useInView } from "framer-motion"
import type React from "react"

import { useRef, useState } from "react"
import { Github, Linkedin, Send,X } from "lucide-react"
import Link from "next/link"
import ContactForm from "./contact-form"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          I&apos;m currently looking for new opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Let&apos;s Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you have a project in mind, a question, or just want to say hi, I&apos;d love to hear from you.
              I&apos;ll get back to you as soon as possible!
            </p>

            <div className="space-y-4">

              <Link
                href="https://github.com/FurquanAnwer"
                target="_blank"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-accent transition-colors"
              >
                <div className="p-2 bg-accent rounded-lg">
                  <Github size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-foreground">FurquanAnwer</p>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/furquananwer/"
                target="_blank"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-accent transition-colors"
              >
                <div className="p-2 bg-accent rounded-lg">
                  <Linkedin size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground">furquananwer</p>
                </div>
              </Link>
              <Link
                href="https://www.x.com/furquan_anwer/"
                target="_blank"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-accent transition-colors"
              >
                <div className="p-2 bg-accent rounded-lg">
                  <X size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">X</p>
                  <p className="text-foreground">furquan_anwer</p>
                </div>
              </Link>

            </div>
          </div>

          {/* Contact Form */}
          <ContactForm/>
        </div>
      </motion.div>
    </section>
  )
}
