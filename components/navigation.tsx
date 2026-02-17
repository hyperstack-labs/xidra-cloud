"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
  { label: "Docs", href: "/docs" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "border-b border-border/40 bg-background/60 py-3  supports-[backdrop-filter]:bg-background/60"
          : "border-transparent bg-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
          <div className="relative">
            <div className={cn(
              "absolute inset-0 rounded-full bg-primary/20 blur-lg transition-opacity duration-500",
              scrolled ? "opacity-0" : "opacity-100 group-hover:opacity-100"
            )} />
            <Logo size={32} className="relative transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold leading-tight text-foreground tracking-tight">
              Xidra Cloud
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-transparent bg-secondary/0 px-2 py-1 transition-all duration-300 md:flex md:bg-secondary/0 md:hover:bg-secondary/40 md:hover:border-border/40">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {/* Hover effect that isn't the active state */}
                {!isActive && (
                  <motion.span
                    className="absolute inset-x-0 -bottom-px h-px bg-primary scale-x-0 origin-left"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/dashboard">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 font-medium h-8"
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className={cn(
                  "group relative overflow-hidden bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:bg-primary h-9 px-4",
                  scrolled ? "shadow-none" : "shadow-[0_0_10px_rgba(var(--primary),0.2)]"
                )}
              >
                <span className="relative z-10 font-semibold tracking-wide flex items-center gap-1.5 text-xs">
                  Start Building <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 z-40 w-full bg-background/95  md:hidden pt-[80px]"
          >
            <div className="flex flex-col gap-2 px-6 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-2xl font-medium py-3 px-4 rounded-xl transition-colors",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 h-px w-full bg-border/50" />
              <div className="mt-6 flex flex-col gap-4">
                <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full justify-center h-12 text-base border-border/50 bg-secondary/20">
                    Dashboard
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full justify-center h-12 text-base font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
