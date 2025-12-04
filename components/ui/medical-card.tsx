import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MedicalCardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    shadow?: "sm" | "md" | "lg"
}

export function MedicalCard({
    children,
    className,
    hover = false,
    shadow = "md"
}: MedicalCardProps) {
    return (
        <div
            className={cn(
                "rounded-lg bg-card border border-border p-6",
                shadow === "sm" && "shadow-sm",
                shadow === "md" && "medical-shadow",
                shadow === "lg" && "medical-shadow-lg",
                hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    )
}
