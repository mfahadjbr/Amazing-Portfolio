import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "Job_Interview_Application",
    name: "Job Interview Application",
    categories: ["Next.js", "Tailwind CSS", "Vapi"],
    initial: "J",
    bgColor: "bg-[#00214C]",
  },
  {
    id: "Medical-Rag-Application",
    name: "Medical Rag Application",
    categories: ["Next.js", "LangChain", "Streamlit"],
    initial: "M",
    bgColor: "bg-green-500",
  },
  {
    id: "Agentia-World-Website",
    name: "Agentia World Website",
    categories: ["Next.js", "CrewAI", "LangChain"],
    initial: "S",
    bgColor: "bg-[#5C888E]",
  },
]

export default function ProjectsSection() {
  return (
    <section className="w-full py-7 md:py-12 bg-white dark:bg-[#212121] flex justify-center">
      <div className="container px-6 md:px-12 lg:px-16 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            <h2 className="text-2xl font-semibold text-[#35384a] dark:text-gray-200">Projects</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-[#35384a] hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4 text-[#35384a] dark:text-gray-200">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="p-4 bg-white dark:bg-[#2A2A2A] mb-2 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center text-white",
                        project.bgColor,
                      )}
                    >
                      <span className="text-lg font-medium">{project.initial}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium dark:text-white">{project.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{project.categories.join(", ")}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

