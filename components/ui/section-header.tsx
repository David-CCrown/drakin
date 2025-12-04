import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    className?: string
    centered?: boolean
}

export function SectionHeader({
    title,
    subtitle,
    className,
    centered = false
}: SectionHeaderProps) {
    return (
        <div className={cn(
            "space-y-2",
            centered && "text-center",
            className
        )}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
