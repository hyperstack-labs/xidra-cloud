"use client"

import { useState } from "react"
import { Search, Filter, Server, Globe, Cpu, BarChart3 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const allServices = [
  {
    name: "SidraChain Node Cluster",
    description: "Primary blockchain node orchestration cluster",
    status: "online",
    region: "Asia-Pacific",
    uptime: "99.999%",
    cpu: 45,
    memory: 62,
    requests: "2.4M/day",
    icon: Server,
  },
  {
    name: "Web Tier Gateway",
    description: "Load balanced web application gateway",
    status: "online",
    region: "Europe",
    uptime: "99.998%",
    cpu: 38,
    memory: 54,
    requests: "1.8M/day",
    icon: Globe,
  },
  {
    name: "DApp Deployment Engine",
    description: "Continuous deployment and migration service",
    status: "online",
    region: "North America",
    uptime: "99.999%",
    cpu: 22,
    memory: 41,
    requests: "340K/day",
    icon: Cpu,
  },
  {
    name: "AI Anomaly Detection",
    description: "ML-powered threat detection and monitoring",
    status: "online",
    region: "Global",
    uptime: "100%",
    cpu: 67,
    memory: 78,
    requests: "5.1M/day",
    icon: BarChart3,
  },
  {
    name: "Data Replication Service",
    description: "Multi-geographic database mirroring",
    status: "maintenance",
    region: "Asia-Pacific",
    uptime: "99.95%",
    cpu: 55,
    memory: 48,
    requests: "890K/day",
    icon: Server,
  },
  {
    name: "CDN Edge Network",
    description: "Global content delivery and edge caching",
    status: "online",
    region: "Global",
    uptime: "99.999%",
    cpu: 31,
    memory: 35,
    requests: "8.2M/day",
    icon: Globe,
  },
  {
    name: "Certificate Manager",
    description: "Automated SSL/TLS certificate provisioning",
    status: "online",
    region: "Global",
    uptime: "100%",
    cpu: 5,
    memory: 12,
    requests: "12K/day",
    icon: Server,
  },
  {
    name: "Logging Pipeline",
    description: "Centralized log aggregation and analysis",
    status: "online",
    region: "Europe",
    uptime: "99.998%",
    cpu: 42,
    memory: 56,
    requests: "3.6M/day",
    icon: BarChart3,
  },
]

function StatusBadge({ status }: { status: string }) {
  const styles = {
    online: "border-accent/30 bg-accent/10 text-accent",
    maintenance: "border-chart-4/30 bg-chart-4/10 text-chart-4",
    offline: "border-destructive/30 bg-destructive/10 text-destructive",
  }
  return (
    <Badge variant="outline" className={`text-xs ${styles[status as keyof typeof styles] || styles.offline}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}

export default function DashboardServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredServices = allServices.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || s.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Services
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and monitor all active XCS services.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none md:w-64"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {["all", "online", "maintenance", "offline"].map((filter) => (
            <Button
              key={filter}
              variant={statusFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(filter)}
              className={
                statusFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredServices.map((service) => {
          const Icon = service.icon
          return (
            <Card key={service.name} className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-display text-base text-foreground">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                  <StatusBadge status={service.status} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{service.region}</span>
                    <span>Uptime: {service.uptime}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="text-foreground">{service.cpu}%</span>
                    </div>
                    <Progress value={service.cpu} className="h-1.5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Memory</span>
                      <span className="text-foreground">{service.memory}%</span>
                    </div>
                    <Progress value={service.memory} className="h-1.5" />
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-3 text-xs">
                    <span className="text-muted-foreground">Requests</span>
                    <span className="font-medium text-foreground">{service.requests}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
