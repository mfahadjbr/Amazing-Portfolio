import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCarousel from "@/components/project-carousel";

const projects = [
  {
    id: "Medical-Rag-Application",
    name: "Medical Rag Application",
    description:
      "The Medical RAG Application is a full-stack web-based platform built with Next.js and TypeScript, designed to assist healthcare professionals and patients with accurate and context-aware medical information retrieval. The system leverages Retrieval-Augmented Generation (RAG) to enhance responses by integrating Google Gemini API, Hugging Face models, or a custom RAG approach.",
    longDescription:
      "The Medical RAG Application is a full-stack web-based platform built with Next.js and TypeScript, designed to assist healthcare professionals and patients with accurate and context-aware medical information retrieval. The system leverages Retrieval-Augmented Generation (RAG) to enhance responses by integrating Google Gemini API, Hugging Face models, or a custom RAG approach.The application provides precise and up-to-date medical insights by fetching reliable data from medical research, articles, and trusted sources, ensuring users get fact-based responses rather than generic AI-generated answers. Users can input queries related to diseases, symptoms, treatments, and medications, and the AI-powered engine will deliver relevant, well-referenced responses.With a user-friendly UI, authentication, and a scalable backend, the platform ensures security, efficiency, and accessibility. This AI-driven solution revolutionizes medical knowledge retrieval, aiding both professionals and general users in making informed healthcare decisions.",
    categories: ["Visual design", "Branding"],
    websiteUrl: "https://medical-rag-application.vercel.app/",
    images: [
      "/project1(3image).png",
      "/project1.png",
      "/project1(2image).png",
    ],
  },
  {
    id: "Basketball-Website",
    name: "Basketball Website",
  description:
      "The Basketball Website is a fully responsive frontend blog platform built with Next.js, designed for basketball enthusiasts, players, and analysts. This website provides latest news, match analyses, player stats, training guides, and expert opinions on basketball.",
  longDescription:
      "The Basketball Website is a fully responsive frontend blog platform built with Next.js, designed for basketball enthusiasts, players, and analysts. This website provides latest news, match analyses, player stats, training guides, and expert opinions on basketball.With a sleek and modern UI/UX design, the website ensures an engaging user experience across all devices. It features dynamic blog sections, categorized content, search functionality, and interactive UI elements to enhance readability and accessibility. Users can explore articles on NBA, international leagues, college basketball, and streetball, keeping them updated with game highlights, strategies, and player insights.The website leverages Next.js for optimized performance, fast navigation, and SEO-friendly blog content, ensuring smooth browsing. Whether you're a casual fan, aspiring player, or basketball analyst, this platform serves as the ultimate destination for in-depth basketball content.",
  categories: ["Product design", "Icon design"],
    websiteUrl: "https://basketball-website-ten.vercel.app/",
    images: [
      "/project2(2image).png",
      "/project2(1image).png",
      "/project2(3image).png",
    ],
    },
  {
    id: "Agentia-World-Website",
    name: "Agentia World Website",
    description:
      "The Agentia World Website is an advanced AI-driven platform built with Next.js, integrating LangChain and CrewAI to power intelligent, multi-agent workflows. Designed for automation, AI collaboration, and smart decision-making, this platform leverages LLM APIs such as OpenAI, Google Gemini, or Hugging Face to create autonomous AI agents capable of executing complex tasks efficiently.",
    longDescription:
      "The Agentia World Website is an advanced AI-driven platform built with Next.js, integrating LangChain and CrewAI to power intelligent, multi-agent workflows. Designed for automation, AI collaboration, and smart decision-making, this platform leverages LLM APIs such as OpenAI, Google Gemini, or Hugging Face to create autonomous AI agents capable of executing complex tasks efficiently.With a sleek and modern UI/UX design, the website ensures an engaging user experience across all devices. It features dynamic blog sections, categorized content, search functionality, and interactive UI elements to enhance readability and accessibility. Users can explore articles on NBA, international leagues, college basketball, and streetball, keeping them updated with game highlights, strategies, and player insights.The website leverages Next.js for optimized performance, fast navigation, and SEO-friendly blog content, ensuring smooth browsing. Whether you're a casual fan, aspiring player, or basketball analyst, this platform serves as the ultimate destination for in-depth basketball content.The website offers a user-friendly interface, allowing users to deploy and manage AI agents for various use cases, including data analysis, research assistance, content generation, and customer support automation. By utilizing LangChain for structured reasoning and CrewAI for orchestrating multi-agent collaboration, the system ensures seamless interactions between AI models for enhanced productivity.With Next.js, the website delivers fast performance, scalability, and SEO-friendly content, making it a powerful tool for businesses and developers exploring the potential of AI agents. Agentia World revolutionizes AI-driven automation with cutting-edge technology and intuitive design. ",
    categories: ["Landing page", "Illustration design"],
    websiteUrl: "https://agentia-world-website.vercel.app/",
    images: [
      "/project3(3image).png",
      "/project3(2image).jpg",
      "/project3(1image).png",
    ]
  },
  {
    id: "Medical-ChatBot-Assistant",
    name: "Medical ChatBot Assistant",
    description:
      "The Medical ChatBot Assistant is an AI-powered healthcare assistant designed to provide accurate medical information and symptom analysis using the Retrieval-Augmented Generation (RAG) approach. Built with LangChain for intelligent processing and Streamlit for an interactive and user-friendly frontend, this chatbot ensures seamless communication between users and AI.",
    longDescription:
      "The Medical ChatBot Assistant is an AI-powered healthcare assistant designed to provide accurate medical information and symptom analysis using the Retrieval-Augmented Generation (RAG) approach. Built with LangChain for intelligent processing and Streamlit for an interactive and user-friendly frontend, this chatbot ensures seamless communication between users and AI.With a sleek and modern UI/UX design, the website ensures an engaging user experience across all devices. It features dynamic blog sections, categorized content, search functionality, and interactive UI elements to enhance readability and accessibility. Users can explore articles on NBA, international leagues, college basketball, and streetball, keeping them updated with game highlights, strategies, and player insights.The website leverages Next.js for optimized performance, fast navigation, and SEO-friendly blog content, ensuring smooth browsing. Whether you're a casual fan, aspiring player, or basketball analyst, this platform serves as the ultimate destination for in-depth basketball content.The website offers a user-friendly interface, allowing users to deploy and manage AI agents for various use cases, including data analysis, research assistance, content generation, and customer support automation. By utilizing LangChain for structured reasoning and CrewAI for orchestrating multi-agent collaboration, the system ensures seamless interactions between AI models for enhanced productivity.With Next.js, the website delivers fast performance, scalability, and SEO-friendly content, making it a powerful tool for businesses and developers exploring the potential of AI agents. Agentia World revolutionizes AI-driven automation with cutting-edge technology and intuitive design.The system leverages Google Gemini API or Serper API to fetch reliable medical insights, symptom explanations, and treatment guidance from trusted sources. Users can ask health-related questions, receive fact-checked responses, and get recommendations on when to consult a doctor.With real-time processing, intuitive UI, and natural language understanding, the chatbot enhances accessibility to healthcare knowledge. Whether for general health inquiries, disease symptoms, or medication details, the Medical ChatBot Assistant provides quick, informative, and evidence-based responses, empowering users to make informed health decisions.",
    categories: ["Landing page", "Illustration design"],
    websiteUrl: "https://mfahadjbr-medical-chatbot-assistant-main-plrqms.streamlit.app/",
    images: [
      "/project4(1image).png",
      "/project1(3image).png",
      "/project1.png"
    ],
  },
  {
    id: "AI-Resume-Application",
    name: "AI Resume Application",
    description:
      "The AI Resume Application is an intelligent resume-building platform powered by Next.js and Google Gemini API, designed to help users create professional, optimized, and ATS-friendly resumes effortlessly. Using AI-driven content generation, the platform assists users in crafting well-structured resumes by suggesting personalized summaries, skill highlights, and job-specific achievements based on industry standards.",
    longDescription:
      "The AI Resume Application is an intelligent resume-building platform powered by Next.js and Google Gemini API, designed to help users create professional, optimized, and ATS-friendly resumes effortlessly. Using AI-driven content generation, the platform assists users in crafting well-structured resumes by suggesting personalized summaries, skill highlights, and job-specific achievements based on industry standards.With a modern and responsive UI, the application provides an easy-to-use interface where users can input their experience, skills, and job preferences, and the AI dynamically generates tailored resume sections. It also offers resume formatting, proofreading, and keyword optimization, ensuring better chances of passing applicant tracking systems (ATS).By leveraging the Google Gemini API, the system delivers smart recommendations, grammar corrections, and impactful phrasing to make resumes stand out. Whether you're a fresh graduate or an experienced professional, the AI Resume Application simplifies the process of creating a polished, job-ready resume in minutes",
    categories: ["Next.js", "Gemini API Key"],
    websiteUrl: "https://ai-resume-builder-three-iota.vercel.app/",
    images: [
      "/banner.jpeg",
      "/project1(3image).png",
      "/project1.png"
    ],
  },
  {
    id: "vprimetech-Website",
    name: "vprimetech Website",
    description:
      "The VPrimeTech Website is a modern and fully responsive platform built with Next.js and Tailwind CSS, designed to showcase cutting-edge technology solutions and services. With a sleek and user-friendly UI/UX, the website delivers a seamless browsing experience across all devices.",
    longDescription:
      "The VPrimeTech Website is a modern and fully responsive platform built with Next.js and Tailwind CSS, designed to showcase cutting-edge technology solutions and services. With a sleek and user-friendly UI/UX, the website delivers a seamless browsing experience across all devices.Powered by Next.js, the site ensures fast performance, SEO optimization, and smooth navigation, while Tailwind CSS provides a clean, customizable, and efficient design. The platform highlights technology services, software solutions, AI innovations, and digital transformation strategies, making it an ideal space for businesses looking for tech-driven growth.Featuring dynamic content sections, interactive UI elements, and an intuitive layout, VPrimeTech offers an engaging experience for users. Whether showcasing services, case studies, or industry insights, the website is structured to maximize impact and accessibility.With scalability and future-ready technology, VPrimeTech Website stands as a powerful digital presence, driving innovation and excellence in the tech industry.",
    categories: ["Next.js", "Tailwind CSS"],
    websiteUrl: "https://vprimetech.vercel.app/",
    images: [
      "/4.jpeg",
      "/2.jpeg",
      "/9.png"
    ],
  },
  {
    id: "Online-Grocery-Store-Website",
    name: "Online Grocery Store Website",
    description:
      "The Online Grocery Store Website is a modern, fully responsive e-commerce platform built with Next.js and Tailwind CSS, offering a seamless shopping experience for users. Designed for efficiency and speed, the website provides a user-friendly interface where customers can browse, search, and purchase grocery items with ease.",
    longDescription:
      "The Online Grocery Store Website is a modern, fully responsive e-commerce platform built with Next.js and Tailwind CSS, offering a seamless shopping experience for users. Designed for efficiency and speed, the website provides a user-friendly interface where customers can browse, search, and purchase grocery items with ease.With Next.js, the platform ensures fast performance, SEO optimization, and dynamic routing, while Tailwind CSS delivers a clean, modern, and mobile-friendly design. The website features categorized product listings, an interactive shopping cart, secure checkout, and multiple payment options. Users can explore fresh produce, dairy, bakery items, beverages, and household essentials, all available for quick delivery.The intuitive design includes filters, discounts, and real-time order tracking, enhancing the shopping experience. Whether for daily groceries or bulk purchases, the Online Grocery Store Website provides a convenient, secure, and efficient solution for all grocery needs.",
    categories: ["Next.js", "Tailwind CSS"],
    websiteUrl: "https://ecommerce-website-online-grocery-store-fahad.vercel.app/",
    images: [
      "/vegetable.png",
      "/vegetable2.png",
      "/vegetable2.png"
    ],
  },
  {
    id: "AI-Trip-Planner-Application",
    name: "AI Trip Planner Application",
    description:
      "The AI Trip Plan is a smart travel planning platform powered by CrewAI, LangChain, and Google Gemini API, designed to create personalized, AI-driven travel itineraries. This intelligent system leverages multi-agent collaboration to analyze user preferences, budget, and destination details, providing optimized travel plans for any journey.",
    longDescription:
      "The AI Trip Plan is a smart travel planning platform powered by CrewAI, LangChain, and Google Gemini API, designed to create personalized, AI-driven travel itineraries. This intelligent system leverages multi-agent collaboration to analyze user preferences, budget, and destination details, providing optimized travel plans for any journey.Using LangChain, the platform processes real-time travel data, hotel bookings, flights, and activity recommendations, ensuring a customized and hassle-free experience. CrewAI agents work together to handle various aspects of trip planning, such as suggesting local attractions, best travel routes, dining options, and cultural experiences.The integration of Google Gemini API enhances AI-generated recommendations with accurate insights, weather forecasts, and local events. Users receive detailed day-by-day itineraries, making travel planning effortless.",
    categories: ["crewai", "langchain", "Google Gemini API"],
    websiteUrl: "https://mfahadjbr-ai-trip-plan-website-srcproject1main-0b1pil.streamlit.app/",
  images: [
      "/travel2.png",
      "/travel1.png",
      "/travel.png"
    ],
  },
];

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#212121]">
      <div className="container px-4 py-12 mx-auto max-w-4xl">
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 dark:text-white text-[#35384A] ">
            {project.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>
          <Button
            variant="outline"
            className="inline-flex items-center dark:bg-[#383838]  dark:hover:text-white dark:hover:bg-[#3e3c3c]"
            asChild
          >
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>


        {/* Image Carousel */}
        <ProjectCarousel images={project.images} projectName={project.name} />

        {/* Project Description */}
        <div className="prose dark:prose-invert max-w-none mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            {project.longDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
