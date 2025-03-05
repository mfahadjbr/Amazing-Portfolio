"use client"

import Link from "next/link"
import { useState } from "react"
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa"

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Handle form submission here
    console.log(data)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#212121]">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            <h2 className="text-xl font-semibold text-[#35384a] dark:text-white">Hire Me</h2>
          </div>
          <div className="flex items-center px-3 py-1 text-sm font-medium text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded-full hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
            <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 mr-2"></div>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Form Section */}
        <h1 className="text-3xl font-bold mb-2 text-[#35384a] dark:text-white">Design Inquiry</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Got an idea and need design help? Reach out now</p>

        <form method="POST" action="https://formspree.io/f/xanewwpb" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                autoComplete="off"
                required
                className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
                className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              autoComplete="off"
              required
              rows={4}
              className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white text-xl py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 dark:bg-white dark:text-[#212121] dark:hover:bg-gray-100"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 text-center">
          <h2 className="text-xl font-semibold mb-4 text-[#35384a] dark:text-gray-200">Follow Me</h2>
          <div className="flex space-x-4 justify-center items-center">
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

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
          © 2025 Portfolio all rights reserved
          <br />
          by{" "}
          <a href="#" className="underline hover:text-gray-700 dark:hover:text-gray-300">
            M.FahadJabbar
          </a>
          </div>
      </div>
    </main>
  )
}

