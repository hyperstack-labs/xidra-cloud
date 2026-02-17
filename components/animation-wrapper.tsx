"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimationWrapperProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    viewport?: { once?: boolean; margin?: string }
}

export function AnimationWrapper({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction = "up",
    viewport = { once: true, margin: "-100px" as any },
}: AnimationWrapperProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, viewport)

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    }

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...directions[direction],
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.25, 0, 1], // Custom cubic-bezier for "premium" feel
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
