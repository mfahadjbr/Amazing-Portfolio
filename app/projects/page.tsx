import ProjectList from "@/components/project-list"

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 mx-auto text-[#35384a] dark:text-gray-200">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          <h1 className="text-2xl font-medium text-[#35384a] dark:text-white">Projects</h1>
        </div>
      </div>
      <ProjectList />
    </div>
  )
}

