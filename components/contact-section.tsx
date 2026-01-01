"use client"
import { motion, useInView } from "framer-motion"
import type React from "react"

import { useRef, useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

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
                href="mailto:furquananwer@gmail.com"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-accent transition-colors"
              >
                <div className="p-2 bg-accent rounded-lg">
                  <Mail size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">furquan.anwer@gmail.com</p>
                </div>
              </Link>

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
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                    <Send size={24} className="text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-accent/30 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-accent/30 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-accent/30 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
