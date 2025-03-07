"use client"

import { useState } from "react";
import { Copy, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "mfahadjbr@gmail.com"; // Replace with actual email

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-7 md:py-12 bg-white dark:bg-[#212121] flex justify-center">
      <div className="container px-6 md:px-12 lg:px-16 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 mr-2"></div>
            <span className="text-gray-500 dark:text-gray-400 font-medium">Full Stack Developer</span>
          </div>
          <Link href="/contact">
            <div className="flex px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium items-center hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-green-500  mr-2"></div>
              <span className="hidden sm:inline">AVAILABLE FOR WORK</span>
              <span className="sm:hidden">AVAILABLE</span>
            </div>
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          {/* Text Content */}
          <div className="max-w-xl md:text-left text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[#35384a] dark:text-white">
              I&apos;m M.FahadJabbar
            </h1>
            <p className="text-xl text-[#35384a] dark:text-gray-300 mb-8">
              Full Stack Developer from Pakistan.
              <br /> Currently working at Next.js,Crewai,Langchain,LangGraph.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/contact">
                <Button className="rounded-md bg-gray-900 dark:bg-white text-white dark:text-[#212121] hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 text-lg">
                  <Plus className="h-5 w-5 border rounded-full border-current" /> Hire Me
                </Button>
              </Link>
              <Button
                variant="outline"
                className="rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-[#212121] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 py-3 text-lg"
                onClick={copyEmail}
              >
                <Copy className="mr-2 h-5 w-5" /> {copied ? "Copied!" : "Copy Email"}
              </Button>
            </div>

            {/* Follow Me - Moved below buttons */}
            <div className=" border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex space-x-4 justify-center md:justify-start">
                <Link href="https://github.com/mfahadjbr" target="_blank">
                <button className="p-3 bg-gray-100 dark:bg-[#2a2a2a] text-[#35384a] dark:text-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors">
                  <FaGithub size={24} />
                </button>
                </Link>
                <Link href="https://www.linkedin.com/in/mfahadjbr/" target="_blank">
                <button className="p-3 bg-gray-100 dark:bg-[#2a2a2a] text-[#35384a] dark:text-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors">
                  <FaLinkedin size={24} />
                </button>
                </Link>
                <Link href="https://www.youtube.com/@ProgrammingCommunities" target="_blank">
                <button className="p-3 bg-gray-100 dark:bg-[#2a2a2a] text-[#35384a] dark:text-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors">
                  <FaYoutube size={24} />
                </button>
                </Link>
                <Link href="https://www.facebook.com/mfahadjbr" target="_blank">
                <button className="p-3 bg-gray-100 dark:bg-[#2a2a2a] text-[#35384a] dark:text-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors">
                  <FaFacebook size={24} />
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end mb-10 md:mb-0">
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-[#2a2a2a] flex items-center justify-center">
                <Image
                  src="/fahad.avif"
                  alt="Brian Do avatar"
                  width={256}
                  height={256}
                  className="w-5/6 h-5/6 object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-8 border-white dark:border-[#212121]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
