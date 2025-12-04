"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
            setIsVisible(true)
        }

        const handleMouseDown = () => setIsVisible(true) // Expand effect could go here

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mousedown", handleMouseDown)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mousedown", handleMouseDown)
        }
    }, [cursorX, cursorY])

    if (!isVisible) return null

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <div className="relative w-full h-full">
                {/* Main Cursor Dot */}
                <div className="absolute inset-0 bg-white rounded-full opacity-80" />

                {/* Outer Ring */}
                <motion.div
                    className="absolute -inset-4 border border-white/50 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </motion.div>
    )
}
