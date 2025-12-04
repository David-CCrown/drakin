"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Stethoscope } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Documentary", href: "/documentary" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

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
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm py-2"
                    : "bg-transparent py-6"
            )}
        >
            <nav className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
                            <Stethoscope className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-slate-900 tracking-tight leading-none group-hover:text-primary transition-colors">
                                Dr. Akintububo
                            </span>
                            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                                Maxillofacial Surgeon
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/40 shadow-sm">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                    pathname === item.href
                                        ? "text-primary bg-white shadow-sm"
                                        : "text-slate-600 hover:text-primary hover:bg-white/50"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            asChild
                            className="rounded-full bg-slate-900 text-white hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            <Link href="/contact">
                                Book Appointment
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-slate-900" />
                        ) : (
                            <Menu className="h-6 w-6 text-slate-900" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col pt-24 px-6"
                    >
                        {/* Close Button for Mobile Menu */}
                        <button
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="flex flex-col gap-4">
                            {navigation.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "block text-3xl font-bold tracking-tight py-2",
                                            pathname === item.href
                                                ? "text-primary"
                                                : "text-slate-900"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto mb-10"
                        >
                            <Button asChild size="lg" className="w-full rounded-full text-lg h-14">
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                    Book Appointment
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
