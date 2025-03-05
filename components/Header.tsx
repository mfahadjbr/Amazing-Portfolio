"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, User, Briefcase, ShoppingBag, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase }
]

export function Header() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full p-7">
      <div className="mx-auto flex h-12 sm:h-14 max-w-7xl items-center justify-center px-2 sm:px-6 lg:px-8">
        {/* Navigation - Responsive for all screen sizes */}
        <nav className="flex flex-1 items-center justify-center">
          <div className="relative flex w-full max-w-3xl items-center justify-between rounded-lg bg-gray-100/90 dark:bg-[#2a2a2a]/90 px-3 sm:px-6 py-1.5 sm:py-2 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-6">
              {navItems.map((item) => {
                const isActive = activeItem === item.name
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative"
                    onMouseEnter={() => setActiveItem(item.name)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="relative flex flex-col items-center">
                      {isActive && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:opacity-100">
                          <div className="rounded-full bg-black px-3 py-1 text-xs text-white dark:bg-white dark:text-[#212121]">
                            {item.name}
                          </div>
                        </div>
                      )}
                      <div
                        className={cn(
                          "relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all duration-300",
                          isActive ? "bg-white dark:bg-[#212121] shadow-md" : "hover:bg-white/60 dark:hover:bg-[#212121]/60"
                        )}
                      >
                        <Icon className={cn(
                          "h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300",
                          isActive ? "scale-110" : "scale-100"
                        )} />
                        {isActive && (
                          <span className="absolute -right-1 -top-1 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-primary p-1">
                            <span className="sr-only">Active</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
            
            {/* Right side items */}
            <div className="flex items-center justify-end gap-2 sm:gap-4 w-full sm:w-auto ml-auto">
              <ThemeToggle />
              <Link href="/contact">
              <Button className="w-auto sm:w-full rounded-lg gap-1 font-medium text-xs sm:text-sm h-8 sm:h-10 px-2 sm:px-4 bg-gray-900 dark:bg-white text-white dark:text-[#212121] hover:bg-gray-800 dark:hover:bg-gray-100">
                <Plus className="h-4 w-4 border rounded-full border-current" />
                <span className="sm:inline hidden">Hire Me</span>
                <span className="sm:hidden inline">Hire Me</span>
              </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}