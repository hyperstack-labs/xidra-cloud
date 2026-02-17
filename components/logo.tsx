import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    size?: number
}

export function Logo({ className, size = 40 }: LogoProps) {
    return (
        <div
            className={cn("relative flex items-center justify-center overflow-hidden rounded-xl bg-primary/10", className)}
            style={{ width: size, height: size }}
        >
            <Image
                src="/images/icon.png"
                alt="Xidra Cloud Services Logo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    )
}
