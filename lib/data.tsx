import { Bot, BrainCircuit, FileText, Type} from "lucide-react"
import { FaBriefcase, FaCoffee, FaMapMarkedAlt, FaTools } from "react-icons/fa"
import { MdLocalGroceryStore } from "react-icons/md"

export const projects = [
  {
    id: "Coffee-House-Website",
    company: "Coffee House Website",
    type: ["Next.js", "Tailwind CSS"],
    iconBg: "#B26336",
    icon: <FaCoffee   className="w-6 h-6" />,
  },
  {
    id: "Job_Interview_Application",
    company: "Job Interview Application",
    type: ["Next.js", "Tailwind CSS", "Vapi"],
    iconBg: "#5C888E",
    icon: <FaBriefcase  className="w-6 h-6" />,
  },
  {
    id: "Medical-Rag-Application",
    company: "Medical Rag Application",
    type: ["Next.js", "LangChain", "Streamlit"],
    iconBg: "#1E293B",
    icon: <Type className="w-6 h-6" />,
  },
  {
    id: "Basketball-Website",
    company: "Basketball Website",
    type: ["Next.js", "Tailwind CSS"],
    iconBg: "#CC72F9",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    id: "Agentia-World-Website",
    company: "Agentia World Website",
    type: ["Next.js", "CrewAI", "LangChain"],
    iconBg: "#5C888E",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    id: "Medical-ChatBot-Assistant",
    company: "Medical ChatBot Assistant",
    type: ["Next.js", "LangChain", "Streamlit"],
    iconBg: "#F97316",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    id: "AI-Resume-Application",
    company: "AI Resume Application",
    type: ["Next.js", "Gemini API Key"],
    iconBg: "#F97316",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    id: "vprimetech-Website",
    company: "vprimetech Website",
    type: ["Next.js", "Tailwind CSS"],
    iconBg: "#F97316",
    icon: <FaTools className="w-6 h-6" />,
  },
  {
    id: "Online-Grocery-Store-Website",
    company: "Online Grocery Store Website",
    type: ["Next.js", "Tailwind CSS"],
    iconBg: "#F97316",
    icon: <MdLocalGroceryStore className="w-6 h-6" />,
  },
  {
    id: "AI-Trip-Planner-Application",
    company: "AI Trip Planner Application",
    type: ["crewai", "langchain", "Google Gemini API"],
    iconBg: "#F97316",
    icon: <FaMapMarkedAlt className="w-6 h-6" />,
  },
]

