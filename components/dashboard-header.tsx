"use client"

import { usePathname } from "next/navigation"
import { Bell, Search } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const breadcrumbMap: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/services": "Services",
  "/dashboard/deployments": "Deployments",
  "/dashboard/analytics": "Analytics",
  "/dashboard/security": "Security",
  "/dashboard/settings": "Settings",
}

export function DashboardHeader() {
  const pathname = usePathname()
  const pageTitle = breadcrumbMap[pathname] || "Dashboard"

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div className="hidden items-center gap-2 text-sm md:flex">
          <span className="text-muted-foreground">Dashboard</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-medium text-foreground">{pageTitle}</span>
        </div>
        <span className="font-display text-sm font-semibold text-foreground md:hidden">
          {pageTitle}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-1.5 md:flex">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-48 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
          <span className="sr-only">Notifications</span>
        </Button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 font-display text-xs font-bold text-primary">
          JD
        </div>
      </div>
    </header>
  )
}
