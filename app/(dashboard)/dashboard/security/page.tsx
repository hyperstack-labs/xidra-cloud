"use client"

import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lock,
  Eye,
  FileCheck,
  Clock,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const threatFeed = [
  {
    type: "blocked",
    message: "DDoS attack mitigated from 185.x.x.x",
    severity: "high",
    time: "12 minutes ago",
  },
  {
    type: "blocked",
    message: "Brute force login attempt blocked (23 attempts)",
    severity: "medium",
    time: "45 minutes ago",
  },
  {
    type: "detected",
    message: "Anomalous traffic pattern from EU region",
    severity: "low",
    time: "1 hour ago",
  },
  {
    type: "blocked",
    message: "SQL injection attempt on API endpoint",
    severity: "high",
    time: "2 hours ago",
  },
  {
    type: "resolved",
    message: "Suspicious API key usage investigated - false positive",
    severity: "medium",
    time: "4 hours ago",
  },
  {
    type: "blocked",
    message: "Rate limit exceeded from 92.x.x.x (3,400 req/min)",
    severity: "low",
    time: "6 hours ago",
  },
]

const complianceChecks = [
  { name: "Data Encryption at Rest", status: "pass", lastCheck: "2 hours ago" },
  { name: "Data Encryption in Transit", status: "pass", lastCheck: "2 hours ago" },
  { name: "Access Control Policies", status: "pass", lastCheck: "4 hours ago" },
  { name: "Shariah Compliance Audit", status: "pass", lastCheck: "1 day ago" },
  { name: "Vulnerability Scanning", status: "pass", lastCheck: "6 hours ago" },
  { name: "Backup Verification", status: "pass", lastCheck: "12 hours ago" },
  { name: "Log Retention Policy", status: "pass", lastCheck: "1 hour ago" },
  { name: "Network Segmentation", status: "warning", lastCheck: "1 day ago" },
]

const certificates = [
  { domain: "*.xidracloud.com", issuer: "Let's Encrypt", expires: "2026-08-15", daysLeft: 181 },
  { domain: "api.xidracloud.com", issuer: "DigiCert", expires: "2026-11-22", daysLeft: 280 },
  { domain: "dashboard.xidracloud.com", issuer: "Let's Encrypt", expires: "2026-05-01", daysLeft: 75 },
  { domain: "cdn.xidracloud.com", issuer: "Cloudflare", expires: "2027-01-10", daysLeft: 329 },
]

function SeverityBadge({ severity }: { severity: string }) {
  const styles = {
    high: "border-destructive/30 bg-destructive/10 text-destructive",
    medium: "border-chart-4/30 bg-chart-4/10 text-chart-4",
    low: "border-primary/30 bg-primary/10 text-primary",
  }
  return (
    <Badge variant="outline" className={`text-xs ${styles[severity as keyof typeof styles]}`}>
      {severity.charAt(0).toUpperCase() + severity.slice(1)}
    </Badge>
  )
}

function ThreatIcon({ type }: { type: string }) {
  if (type === "blocked") return <Shield className="h-4 w-4 text-accent" />
  if (type === "detected") return <AlertTriangle className="h-4 w-4 text-chart-4" />
  if (type === "resolved") return <CheckCircle2 className="h-4 w-4 text-primary" />
  return <XCircle className="h-4 w-4 text-destructive" />
}

export default function SecurityDashboardPage() {
  const passCount = complianceChecks.filter((c) => c.status === "pass").length
  const totalChecks = complianceChecks.length
  const securityScore = Math.round((passCount / totalChecks) * 100)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Security Monitoring
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Threat detection, compliance status, and certificate management.
        </p>
      </div>

      {/* Security Score */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card border-border">
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <Shield className="h-8 w-8 text-accent" />
            <span className="font-display text-4xl font-bold text-accent">
              {securityScore}
            </span>
            <span className="text-sm text-muted-foreground">Security Score</span>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <Lock className="h-8 w-8 text-primary" />
            <span className="font-display text-4xl font-bold text-foreground">
              247
            </span>
            <span className="text-sm text-muted-foreground">Threats Blocked (24h)</span>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <Eye className="h-8 w-8 text-primary" />
            <span className="font-display text-4xl font-bold text-foreground">
              0
            </span>
            <span className="text-sm text-muted-foreground">Active Incidents</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Threat Feed */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-base text-foreground">
              Threat Detection Feed
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Real-time security events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {threatFeed.map((threat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ThreatIcon type={threat.type} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground">
                        {threat.message}
                      </span>
                      <SeverityBadge severity={threat.severity} />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {threat.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compliance Status */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-base text-foreground">
              Compliance Status
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {passCount}/{totalChecks} checks passing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {complianceChecks.map((check) => (
                <div
                  key={check.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-secondary p-3"
                >
                  <div className="flex items-center gap-2.5">
                    {check.status === "pass" ? (
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-chart-4" />
                    )}
                    <span className="text-sm text-foreground">{check.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {check.lastCheck}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certificate Tracker */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            Certificate Expiration Tracker
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            SSL/TLS certificate status for all domains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.domain}
                className="flex flex-col gap-3 rounded-lg border border-border bg-secondary p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-3">
                  <FileCheck className="h-4 w-4 text-primary" />
                  <div>
                    <span className="text-sm font-medium text-foreground">
                      {cert.domain}
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Issuer: {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        Expires: {cert.expires}
                      </span>
                      <span className={`font-medium ${cert.daysLeft < 90 ? "text-chart-4" : "text-accent"}`}>
                        {cert.daysLeft} days
                      </span>
                    </div>
                    <Progress
                      value={Math.min((cert.daysLeft / 365) * 100, 100)}
                      className="h-1.5 w-48"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
