"use client"

import {
  Rocket,
  CheckCircle2,
  Clock,
  XCircle,
  Loader2,
  GitBranch,
  ExternalLink,
  Plus,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const deployments = [
  {
    id: "dep-001",
    name: "web-tier-v2.4.1",
    service: "Web Tier Gateway",
    status: "success",
    branch: "main",
    commit: "a3f8c2e",
    regions: ["Asia", "Europe", "NA"],
    duration: "2m 14s",
    timestamp: "2 minutes ago",
  },
  {
    id: "dep-002",
    name: "node-cluster-v1.9.0",
    service: "SidraChain Node Cluster",
    status: "in-progress",
    branch: "release/1.9",
    commit: "b7d1e4a",
    regions: ["Asia"],
    duration: "1m 32s",
    timestamp: "8 minutes ago",
  },
  {
    id: "dep-003",
    name: "ai-detector-v3.1.2",
    service: "AI Anomaly Detection",
    status: "success",
    branch: "main",
    commit: "c9f2b3d",
    regions: ["Global"],
    duration: "3m 45s",
    timestamp: "1 hour ago",
  },
  {
    id: "dep-004",
    name: "cdn-config-v1.2.0",
    service: "CDN Edge Network",
    status: "success",
    branch: "main",
    commit: "d4e5f6a",
    regions: ["Global"],
    duration: "45s",
    timestamp: "3 hours ago",
  },
  {
    id: "dep-005",
    name: "replication-v2.0.1",
    service: "Data Replication Service",
    status: "failed",
    branch: "fix/sync-lag",
    commit: "e8g7h9i",
    regions: ["Asia"],
    duration: "4m 12s",
    timestamp: "5 hours ago",
  },
  {
    id: "dep-006",
    name: "web-tier-v2.4.0",
    service: "Web Tier Gateway",
    status: "success",
    branch: "main",
    commit: "f1j2k3l",
    regions: ["Asia", "Europe", "NA"],
    duration: "2m 08s",
    timestamp: "8 hours ago",
  },
  {
    id: "dep-007",
    name: "dapp-engine-v4.2.0",
    service: "DApp Deployment Engine",
    status: "success",
    branch: "main",
    commit: "m4n5o6p",
    regions: ["North America"],
    duration: "1m 55s",
    timestamp: "12 hours ago",
  },
  {
    id: "dep-008",
    name: "cert-manager-v1.1.0",
    service: "Certificate Manager",
    status: "success",
    branch: "main",
    commit: "q7r8s9t",
    regions: ["Global"],
    duration: "32s",
    timestamp: "1 day ago",
  },
]

function StatusIcon({ status }: { status: string }) {
  if (status === "success") return <CheckCircle2 className="h-4 w-4 text-accent" />
  if (status === "in-progress") return <Loader2 className="h-4 w-4 animate-spin text-primary" />
  if (status === "failed") return <XCircle className="h-4 w-4 text-destructive" />
  return <Clock className="h-4 w-4 text-muted-foreground" />
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    success: "border-accent/30 bg-accent/10 text-accent",
    "in-progress": "border-primary/30 bg-primary/10 text-primary",
    failed: "border-destructive/30 bg-destructive/10 text-destructive",
  }
  const labels = {
    success: "Success",
    "in-progress": "In Progress",
    failed: "Failed",
  }
  return (
    <Badge variant="outline" className={`text-xs ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </Badge>
  )
}

const pipelineStages = ["Build", "Test", "Stage", "Deploy"]

export default function DeploymentsPage() {
  const stats = {
    total: deployments.length,
    success: deployments.filter((d) => d.status === "success").length,
    inProgress: deployments.filter((d) => d.status === "in-progress").length,
    failed: deployments.filter((d) => d.status === "failed").length,
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Deployments
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track and manage all deployment pipelines.
          </p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          New Deployment
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Total", value: stats.total, color: "text-foreground" },
          { label: "Successful", value: stats.success, color: "text-accent" },
          { label: "In Progress", value: stats.inProgress, color: "text-primary" },
          { label: "Failed", value: stats.failed, color: "text-destructive" },
        ].map((s) => (
          <Card key={s.label} className="bg-card border-border">
            <CardContent className="flex items-center justify-between p-4">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <span className={`font-display text-2xl font-bold ${s.color}`}>
                {s.value}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pipeline Visualization */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            Latest Pipeline
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            web-tier-v2.4.1 deployment pipeline status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            {pipelineStages.map((stage, i) => (
              <div key={stage} className="flex flex-1 items-center gap-2">
                <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 p-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-xs font-medium text-foreground">{stage}</span>
                </div>
                {i < pipelineStages.length - 1 && (
                  <div className="h-px w-4 bg-accent/50 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Deployment History */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            Deployment History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {deployments.map((dep) => (
              <div
                key={dep.id}
                className="flex flex-col gap-3 rounded-lg border border-border bg-secondary p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-3">
                  <StatusIcon status={dep.status} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">
                        {dep.name}
                      </span>
                      <StatusBadge status={dep.status} />
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {dep.service}
                    </p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <GitBranch className="h-3 w-3" />
                        {dep.branch}
                      </span>
                      <span>{dep.commit}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-7 text-xs text-muted-foreground md:pl-0">
                  <div className="flex flex-wrap gap-1">
                    {dep.regions.map((r) => (
                      <span key={r} className="rounded bg-muted px-1.5 py-0.5 text-xs">
                        {r}
                      </span>
                    ))}
                  </div>
                  <span>{dep.duration}</span>
                  <span>{dep.timestamp}</span>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span className="sr-only">View deployment</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
