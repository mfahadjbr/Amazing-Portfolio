"use client"

import { useState } from "react"
import Link from "next/link"
import { Copy, Plus} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

export function Footer1() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("mfahadjbr@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="w-full md:py-9 dark:bg-[#212121] flex flex-col items-center justify-center text-center">
      <div className="container max-w-screen-lg px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#35384a] dark:text-gray-200">
              Let's work together.
            </h2>
            <p className="text-lg text-muted-foreground">
              Creating user experience and visual appealing design
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <Button className="rounded-lg gap-1 font-medium">
                <Plus className="h-4 w-4 border rounded-full border-current" />
                Hire Me
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="rounded-lg gap-1 font-medium"
              onClick={copyEmail}
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : "Copy Email"}
            </Button>
          </div>

          <div className="pt-8 border-t border-border w-full max-w-md">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/60"></div>
              <p className="text-muted-foreground">Follow Me</p>
            </div>

            <div className="flex justify-center gap-4">
              <Link href="https://github.com/mfahadjbr" target="_blank" className="p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
              <Link href="https://www.linkedin.com/in/mfahadjbr" target="_blank" className="p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.youtube.com/@ProgrammingCommunities" target="_blank" className="p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors">
                <FaYoutube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="https://www.facebook.com/mfahadjbr" target="_blank" className="p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors">
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              
            </div>
          </div>

          <div className="text-sm text-muted-foreground text-[#35384a] dark:text-gray-200">
            <p>© 2025 Portfolio all rights reserved</p>
            <p className="mt-1">
              <Link href="#" className="underline underline-offset-2 hover:text-foreground">M.FahadJabbar</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
