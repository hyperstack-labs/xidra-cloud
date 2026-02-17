"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Area,
  AreaChart,
  Line,
  LineChart,
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

const timeRanges = ["24h", "7d", "30d"] as const

const trafficData24h = [
  { time: "00:00", requests: 8200, errors: 12 },
  { time: "02:00", requests: 5100, errors: 8 },
  { time: "04:00", requests: 3800, errors: 5 },
  { time: "06:00", requests: 6400, errors: 9 },
  { time: "08:00", requests: 12300, errors: 18 },
  { time: "10:00", requests: 18700, errors: 24 },
  { time: "12:00", requests: 21400, errors: 31 },
  { time: "14:00", requests: 19800, errors: 22 },
  { time: "16:00", requests: 17200, errors: 19 },
  { time: "18:00", requests: 15600, errors: 16 },
  { time: "20:00", requests: 13100, errors: 14 },
  { time: "22:00", requests: 9800, errors: 11 },
]

const latencyData = [
  { time: "00:00", p50: 8, p95: 24, p99: 48 },
  { time: "02:00", p50: 7, p95: 21, p99: 42 },
  { time: "04:00", p50: 6, p95: 19, p99: 38 },
  { time: "06:00", p50: 8, p95: 25, p99: 52 },
  { time: "08:00", p50: 12, p95: 35, p99: 68 },
  { time: "10:00", p50: 14, p95: 42, p99: 78 },
  { time: "12:00", p50: 16, p95: 48, p99: 92 },
  { time: "14:00", p50: 13, p95: 38, p99: 72 },
  { time: "16:00", p50: 11, p95: 32, p99: 64 },
  { time: "18:00", p50: 10, p95: 28, p99: 56 },
  { time: "20:00", p50: 9, p95: 26, p99: 50 },
  { time: "22:00", p50: 8, p95: 23, p99: 46 },
]

const throughputData = [
  { time: "00:00", inbound: 4.2, outbound: 6.8 },
  { time: "02:00", inbound: 2.8, outbound: 4.1 },
  { time: "04:00", inbound: 2.1, outbound: 3.2 },
  { time: "06:00", inbound: 3.5, outbound: 5.4 },
  { time: "08:00", inbound: 6.8, outbound: 10.2 },
  { time: "10:00", inbound: 9.4, outbound: 14.1 },
  { time: "12:00", inbound: 10.8, outbound: 16.2 },
  { time: "14:00", inbound: 9.1, outbound: 13.8 },
  { time: "16:00", inbound: 7.6, outbound: 11.4 },
  { time: "18:00", inbound: 6.2, outbound: 9.3 },
  { time: "20:00", inbound: 5.1, outbound: 7.8 },
  { time: "22:00", inbound: 4.5, outbound: 7.0 },
]

const regionData = [
  { region: "Asia-Pacific", requests: 42500, latency: 8, errors: 0.02 },
  { region: "Europe", requests: 38200, latency: 12, errors: 0.03 },
  { region: "North America", requests: 35100, latency: 10, errors: 0.01 },
  { region: "Middle East", requests: 12800, latency: 15, errors: 0.04 },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<(typeof timeRanges)[number]>("24h")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Analytics
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Platform performance metrics and monitoring.
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-border bg-secondary p-1">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant="ghost"
              size="sm"
              onClick={() => setTimeRange(range)}
              className={
                timeRange === range
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      {/* Traffic Chart */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            Traffic & Errors
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Request volume and error count over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              requests: { label: "Requests", color: "hsl(204, 100%, 44%)" },
              errors: { label: "Errors", color: "hsl(0, 84%, 60%)" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData24h} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 16%, 16%)" />
                <XAxis dataKey="time" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="requests" stroke="var(--color-requests)" fill="var(--color-requests)" fillOpacity={0.1} />
                <Area type="monotone" dataKey="errors" stroke="var(--color-errors)" fill="var(--color-errors)" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Latency Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-base text-foreground">
              Latency Distribution
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              P50, P95, and P99 latency in milliseconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                p50: { label: "P50", color: "hsl(152, 70%, 45%)" },
                p95: { label: "P95", color: "hsl(204, 100%, 44%)" },
                p99: { label: "P99", color: "hsl(38, 80%, 55%)" },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={latencyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 16%, 16%)" />
                  <XAxis dataKey="time" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" unit="ms" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="p50" stroke="var(--color-p50)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="p95" stroke="var(--color-p95)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="p99" stroke="var(--color-p99)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Throughput Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-base text-foreground">
              Network Throughput
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Inbound and outbound traffic in Gbps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                inbound: { label: "Inbound", color: "hsl(204, 100%, 44%)" },
                outbound: { label: "Outbound", color: "hsl(152, 70%, 45%)" },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={throughputData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 16%, 16%)" />
                  <XAxis dataKey="time" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 55%)" unit=" Gb" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="inbound" fill="var(--color-inbound)" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="outbound" fill="var(--color-outbound)" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Region Breakdown */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="font-display text-base text-foreground">
            Region Breakdown
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Performance metrics by geographic region
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {regionData.map((region) => (
              <div
                key={region.region}
                className="flex flex-col gap-3 rounded-lg border border-border bg-secondary p-4"
              >
                <span className="text-sm font-medium text-foreground">
                  {region.region}
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Requests</span>
                    <span className="font-medium text-foreground">
                      {(region.requests / 1000).toFixed(1)}K
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Avg Latency</span>
                    <span className="font-medium text-foreground">
                      {region.latency}ms
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Error Rate</span>
                    <span className="font-medium text-accent">
                      {region.errors}%
                    </span>
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
