import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { projects } from "@/lib/data"

export default function ProjectList() {
  return (
    <div className="space-y-4">
      {projects.map((project: any) => (
        <Link key={project.id} href={`/projects/${project.id}`} className="block">
          <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 dark:hover:border-[#35384a] dark:border-gray-800 dark:bg-[#2a2a2a] transition-shadow">
            <div className="flex items-center justify-between dark:text-[#212121]">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: project.iconBg }}
                >
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#35384a] dark:text-gray-200">{project.company}</h3>
                  <p className="text-gray-500">{project.type.join(", ")}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-200" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

