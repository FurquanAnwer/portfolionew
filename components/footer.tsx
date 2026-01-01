import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Md Furquan Anwer. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/FurquanAnwer"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/furquananwer/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="mailto:furquananwer@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
