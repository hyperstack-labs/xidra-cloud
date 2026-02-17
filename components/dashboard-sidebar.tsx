"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Server,
  Rocket,
  BarChart3,
  Shield,
  Settings,
  ExternalLink,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
  SidebarRail,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const mainNav = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Services", href: "/dashboard/services", icon: Server },
  { label: "Deployments", href: "/dashboard/deployments", icon: Rocket },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Security", href: "/dashboard/security", icon: Shield },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="flex flex-row items-center justify-between py-4 pl-4 pr-0 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:py-4 group-data-[collapsible=icon]:justify-center">
        <Link href="/" className="flex items-center gap-3 overflow-hidden group-data-[collapsible=icon]:hidden">
          <Logo size={32} />
          <div className="flex flex-col truncate group-data-[collapsible=icon]:hidden">
            <span className="font-display text-sm font-bold text-sidebar-foreground">
              Xidra Cloud
            </span>
            <span className="text-[10px] tracking-widest text-sidebar-foreground/60">
              DASHBOARD
            </span>
          </div>
        </Link>
        <SidebarTrigger className="text-sidebar-foreground/50 hover:text-sidebar-foreground" />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 group-data-[collapsible=icon]:hidden px-4">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                      className={cn(
                        "rounded-none px-4",
                        isActive && "bg-sidebar-accent text-sidebar-accent-foreground border-r-2 border-primary"
                      )}
                    >
                      <Link href={item.href}>
                        <Icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="py-4 pl-4 pr-0 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:py-2">
        <SidebarSeparator className="mb-4" />
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent p-3 overflow-hidden">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sidebar-primary/20 font-display text-xs font-bold text-sidebar-primary">
            JD
          </div>
          <div className="flex flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-medium text-sidebar-foreground">
              John Doe
            </span>
            <span className="truncate text-xs text-sidebar-foreground/60">
              john.doe@xidracloud.com
            </span>
          </div>
        </div>
        <Link
          href="/"
          className="mt-3 flex items-center gap-2 rounded-md px-3 py-2 text-xs text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground group-data-[collapsible=icon]:hidden"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Back to Website
        </Link>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
