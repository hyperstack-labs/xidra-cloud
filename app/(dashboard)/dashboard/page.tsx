"use client"

import {
  Activity,
  Server,
  Rocket,
  Coins,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const stats = [
  {
    label: "Uptime",
    value: "99.999%",
    change: "+0.001%",
    trend: "up" as const,
    icon: Activity,
  },
  {
    label: "Active Services",
    value: "12",
    change: "+2",
    trend: "up" as const,
    icon: Server,
  },
  {
    label: "Deployments",
    value: "47",
    change: "+5 this week",
    trend: "up" as const,
    icon: Rocket,
  },
  {
    label: "SDA Balance",
    value: "7,806.67",
    change: "+124.50",
    trend: "up" as const,
    icon: Coins,
  },
]

const resourceData = [
  { time: "00:00", cpu: 42, memory: 58, storage: 34 },
  { time: "04:00", cpu: 38, memory: 55, storage: 34 },
  { time: "08:00", cpu: 65, memory: 62, storage: 35 },
  { time: "12:00", cpu: 78, memory: 71, storage: 35 },
  { time: "16:00", cpu: 72, memory: 68, storage: 36 },
  { time: "20:00", cpu: 55, memory: 61, storage: 36 },
  { time: "Now", cpu: 48, memory: 59, storage: 36 },
]

const trafficData = [
  { day: "Mon", requests: 12400 },
  { day: "Tue", requests: 14800 },
  { day: "Wed", requests: 13200 },
  { day: "Thu", requests: 16500 },
  { day: "Fri", requests: 18900 },
  { day: "Sat", requests: 11200 },
  { day: "Sun", requests: 9800 },
]

const services = [
  { name: "SidraChain Node Cluster", status: "online", region: "Asia-Pacific", uptime: "99.999%" },
  { name: "Web Tier Gateway", status: "online", region: "Europe", uptime: "99.998%" },
  { name: "DApp Deployment Engine", status: "online", region: "North America", uptime: "99.999%" },
  { name: "AI Anomaly Detection", status: "online", region: "Global", uptime: "100%" },
  { name: "Data Replication Service", status: "warning", region: "Asia-Pacific", uptime: "99.95%" },
  { name: "CDN Edge Network", status: "online", region: "Global", uptime: "99.999%" },
]

const activities = [
  { action: "Deployment successful", target: "web-tier-v2.4.1", time: "2 minutes ago", type: "success" },
  { action: "Auto-scaled", target: "Node Cluster (Asia)", time: "15 minutes ago", type: "info" },
  { action: "Certificate renewed", target: "*.xidracloud.com", time: "1 hour ago", type: "success" },
  { action: "Latency spike detected", target: "EU Gateway", time: "2 hours ago", type: "warning" },
  { action: "Backup completed", target: "Database Cluster A", time: "3 hours ago", type: "success" },
  { action: "Security scan passed", target: "All Services", time: "6 hours ago", type: "success" },
]

function StatusDot({ status }: { status: string }) {
  const colorClass = status === "online"
    ? "bg-accent"
    : status === "warning"
    ? "bg-chart-4"
    : "bg-destructive"
  return <div className={`h-2.5 w-2.5 rounded-full ${colorClass}`} />
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Dashboard Overview
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back. Here is a summary of your XCS platform status.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5 text-destructive" />
                  )}
                  <span className={stat.trend === "up" ? "text-accent" : "text-destructive"}>
                    {stat.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Resource Usage */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-base text-foreground">
              Resource Usage
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              CPU, Memory, and Storage utilization over 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                cpu: { label: "CPU", color: "hsl(204, 100%, 44%)" },
                memory: { label: "Memory", color: "hsl(152, 70%, 45%)" },
                storage: { label: "Storage", color: "hsl(210, 20%, 60%)" },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={resourceData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 16%, 16%)" />
                  <XAxis dataKey="time" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="cpu" stroke="var(--color-cpu)" fill="var(--color-cpu)" fillOpacity={0.1} />
                  <Area type="monotone" dataKey="memory" stroke="var(--color-memory)" fill="var(--color-memory)" fillOpacity={0.1} />
                  <Area type="monotone" dataKey="storage" stroke="var(--color-storage)" fill="var(--color-storage)" fillOpacity={0.1} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Traffic */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-base text-foreground">
              Weekly Traffic
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              API requests per day this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                requests: { label: "Requests", color: "hsl(204, 100%, 44%)" },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trafficData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 16%, 16%)" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="requests" fill="var(--color-requests)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Service Health + Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Service Health */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-base text-foreground">
              Service Health
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Current status of all active services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-secondary p-3"
                >
                  <div className="flex items-center gap-3">
                    <StatusDot status={service.status} />
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {service.name}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {service.region}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={service.status === "online" ? "secondary" : "outline"}
                    className={`text-xs ${
                      service.status === "online"
                        ? "border-accent/30 bg-accent/10 text-accent"
                        : "border-chart-4/30 bg-chart-4/10 text-chart-4"
                    }`}
                  >
                    {service.uptime}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-base text-foreground">
              Recent Activity
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Latest platform events and actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {activity.type === "success" ? (
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    ) : activity.type === "warning" ? (
                      <AlertTriangle className="h-4 w-4 text-chart-4" />
                    ) : activity.type === "error" ? (
                      <XCircle className="h-4 w-4 text-destructive" />
                    ) : (
                      <Clock className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      {activity.action}{" "}
                      <span className="font-medium text-primary">
                        {activity.target}
                      </span>
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
