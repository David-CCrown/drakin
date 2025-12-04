"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false)
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890"

    const handleClick = () => {
        const message = encodeURIComponent("Hello! I'd like to inquire about your medical services.")
        window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank')
    }

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <Button
                    size="lg"
                    onClick={handleClick}
                    className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-luxury-lg hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
                    aria-label="Contact via WhatsApp"
                >
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <MessageCircle className="h-7 w-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
            </motion.div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                    >
                        <div className="glass rounded-lg px-4 py-2 shadow-luxury">
                            <p className="text-sm font-medium text-foreground">Chat with us on WhatsApp</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

function AnimatePresence({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
