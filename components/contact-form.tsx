"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
    return (
        <form className="mt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company / Organization
                </label>
                <input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="plan" className="text-sm font-medium text-foreground">
                    Interest
                </label>
                <select
                    id="plan"
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select your interest
                    </option>
                    <option value="starter">Starter Plan</option>
                    <option value="professional">Professional Plan</option>
                    <option value="enterprise">Enterprise Plan</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project or how we can help..."
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
            </div>
            <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </form>
    )
}
