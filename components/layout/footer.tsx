import Link from "next/link"
import { Mail, Phone, MapPin, Stethoscope, ArrowUpRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative bg-slate-900 text-white overflow-hidden pt-24 pb-12">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
                    {/* Brand Column - 5 Cols */}
                    <div className="md:col-span-5 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                                <Stethoscope className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight">Dr. Akintububo</span>
                                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Maxillofacial Surgeon</span>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-lg max-w-md">
                            Dedicated to restoring function and aesthetics with precision surgical care.
                            Serving patients at the Federal Teaching Hospital with compassion and excellence.
                        </p>
                    </div>

                    {/* Navigation - 3 Cols */}
                    <div className="md:col-span-3">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Profile", href: "/about" },
                                { name: "Contact Clinic", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                                    >
                                        <span className="mr-2 group-hover:translate-x-1 transition-transform">{link.name}</span>
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - 4 Cols */}
                    <div className="md:col-span-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">Contact Information</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors duration-300">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">
                                    <p className="font-medium text-white mb-1">Federal Teaching Hospital</p>
                                    <p>Department of Maxillofacial Surgery</p>
                                    <p>Ido-Ekiti, Ekiti State, Nigeria</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <a href="tel:+2348000000000" className="text-slate-400 hover:text-white transition-colors text-lg">
                                    +234 800 000 0000
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <a href="mailto:contact@drakintububo.com" className="text-slate-400 hover:text-white transition-colors text-lg">
                                    contact@drakintububo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Dr. Olugbemi Benedict Akintububo. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
