"use client"

import { Eye, EyeOff, Copy, Coins } from "lucide-react"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false)
  const apiKey = "xcs_live_sk_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account, API keys, and preferences.
        </p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            Profile
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Your account information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  defaultValue="John Doe"
                  className="rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="john.doe@xidracloud.com"
                  className="rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="org" className="text-sm font-medium text-foreground">
                  Organization
                </label>
                <input
                  id="org"
                  type="text"
                  defaultValue="Xidra Cloud Services"
                  className="rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-medium text-foreground">
                  Role
                </label>
                <input
                  id="role"
                  type="text"
                  defaultValue="Platform Administrator"
                  disabled
                  className="rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-muted-foreground"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            Notifications
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Manage how you receive alerts and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {[
              {
                label: "Deployment notifications",
                description: "Get notified when deployments succeed or fail",
                enabled: true,
              },
              {
                label: "Security alerts",
                description: "Receive alerts for security incidents and threats",
                enabled: true,
              },
              {
                label: "Uptime monitoring",
                description: "Get notified when services experience downtime",
                enabled: true,
              },
              {
                label: "Weekly analytics report",
                description: "Receive a weekly summary of platform metrics",
                enabled: false,
              },
              {
                label: "Certificate expiration warnings",
                description: "Get alerts 30 days before certificate expiry",
                enabled: true,
              },
            ].map((pref) => (
              <div
                key={pref.label}
                className="flex items-center justify-between rounded-lg border border-border bg-secondary p-4"
              >
                <div>
                  <span className="text-sm font-medium text-foreground">
                    {pref.label}
                  </span>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {pref.description}
                  </p>
                </div>
                <button
                  className={`relative h-6 w-11 rounded-full transition-colors ${pref.enabled ? "bg-primary" : "bg-muted"
                    }`}
                  aria-label={`Toggle ${pref.label}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-primary-foreground transition-transform ${pref.enabled ? "translate-x-5" : ""
                      }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Keys */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            API Keys
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Manage your API access keys
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border bg-secondary p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-foreground">
                  Live API Key
                </span>
                <div className="mt-1 flex items-center gap-2">
                  <code className="rounded bg-muted px-2 py-1 font-mono text-xs text-foreground">
                    {showApiKey ? apiKey : "xcs_live_sk_****************************"}
                  </code>
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={showApiKey ? "Hide API key" : "Show API key"}
                  >
                    {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                  <button
                    className="text-muted-foreground hover:text-foreground"
                    aria-label="Copy API key"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent text-xs">
                Active
              </Badge>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" className="border-border text-muted-foreground hover:text-foreground">
              Generate New Key
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Billing / SDA */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            Billing & SDA Balance
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Your current plan and contribution balance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">
                    Professional Plan
                  </span>
                  <p className="text-xs text-muted-foreground">
                    500 SDA/month - Unlimited deployments
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="w-fit border-primary/30 bg-primary/10 text-primary text-xs">
                Active
              </Badge>
            </div>
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-6 text-center">
              <span className="text-sm text-muted-foreground">SDA Balance</span>
              <div className="mt-2 font-display text-4xl font-bold text-primary">
                7,806.67
              </div>
              <span className="text-xs text-muted-foreground">
                Sidra Digital Asset
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "This Month", value: "500 SDA", detail: "Subscription" },
                { label: "Overage", value: "0 SDA", detail: "No overages" },
                { label: "Next Billing", value: "Mar 1, 2026", detail: "Auto-renewal" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-secondary p-4 text-center">
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                  <div className="mt-1 font-display text-lg font-bold text-foreground">
                    {item.value}
                  </div>
                  <span className="text-xs text-muted-foreground">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
