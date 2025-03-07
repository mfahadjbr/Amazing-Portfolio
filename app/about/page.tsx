import Image from "next/image";
import { Footer1 } from "@/components/footer1";
import ProjectsSection from "@/components/projects-section";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-background dark:bg-[#212121]">
        <div className="container px-4 sm:px-6 md:px-8 py-8 md:py-12 mx-auto max-w-4xl">
          {/* About Header */}
          <div className="flex items-center gap-2 mb-8 md:mb-12">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <h1 className="text-2xl font-medium text-[#35384a] dark:text-gray-200">
              About
            </h1>
          </div>

          {/* Introduction */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#35384a] dark:text-white">
              It&apos;s Me Muhammad Fahad Jabbar
            </h2>
            <p className="text-lg md:text-xl text-[#35384a] dark:text-gray-300 leading-relaxed max-w-3xl">
              Hello! I'm Muhammad Fahad Jabbar, a passionate Full Stack
              Developer with over 1 years of experience in creating robust and
              scalable web applications. My journey in the world of programming
              started when I was in college, and since then, I've been
              constantly learning and evolving with the ever-changing landscape
              of web technologies.
            </p>
          </div>

          {/* Profile Image */}
          <div className="mb-8 md:mb-16">
            <div className="flex">
              <div className="rounded-3xl border-gray-300 dark:border-gray-600 p-1">
                <div className="rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
                  <Image
                    src="/fahad.jpg"
                    alt="Muhammad Fahad Jabbar"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* More About Me */}
          <div className="mb-8 md:mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#35384a] dark:text-white">
              More About Me
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-[#35384a] dark:text-gray-300">
              <p>
                Hello! I'm Muhammad Fahad Jabbar, a passionate Full Stack
                Developer with over 1 years of experience in creating robust and
                scalable web applications. My journey in the world of
                programming started when I was in college, and since then, I've
                been constantly learning and evolving with the ever-changing
                landscape of web technologies.
              </p>
              <p>
                I specialize in Next.js ecosystems, with expertise in React for
                frontend development and
                Python,Fastapi,Crewai,Langchain,LangGraph for backend services.
                I'm also well-versed in database management, API design, and
                cloud deployment strategies.
              </p>
            </div>
          </div>

          {/* Side Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#35384a] dark:text-white">
              My Side Projects
            </h2>
            <p className="text-base md:text-lg text-[#35384a] dark:text-gray-300 mb-8">
              I did passion side projects in the weekend, please take a look you
              will love it (i hope).
            </p>
            <ProjectsSection />
            <Footer1 />
          </div>
        </div>
      </main>
    </>
  );
}
