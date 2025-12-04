"use client"

import { motion } from "framer-motion"
import { Play, Clock, Calendar, ArrowRight, Film, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function DocumentaryPage() {
    const featuredDoc = {
        id: "featured",
        title: "Restoring Hope: A Surgeon's Mission",
        description: "An intimate look into Dr. Akintububo's journey of transforming lives through complex maxillofacial reconstruction. Witness the emotional and physical restoration of patients who had lost all hope.",
        duration: "45:20",
        date: "Nov 15, 2024",
        videoId: "dQw4w9WgXcQ", // Placeholder
        thumbnail: "/assets/operation-1.jpg", // Using local asset if available, or fallback
        category: "Feature Documentary"
    }

    const documentaries = [
        {
            id: "video1",
            title: "The Art of Precision: Orthognathic Surgery",
            description: "Witness the meticulous planning and execution required for corrective jaw surgery.",
            duration: "12:45",
            date: "Sep 28, 2024",
            videoId: "bXqF8sXnZp8",
            category: "Orthognathic"
        },
        {
            id: "video2",
            title: "Emergency Trauma Response",
            description: "Follow the team during a critical emergency response in maxillofacial trauma cases.",
            duration: "18:10",
            date: "Aug 15, 2024",
            videoId: "9ZfN87gSjvI",
            category: "Trauma"
        },
        {
            id: "video3",
            title: "Innovations in Cleft Lip Repair",
            description: "Exploring advanced techniques in cleft lip and palate repair and their life-long impact.",
            duration: "22:30",
            date: "Jul 04, 2024",
            videoId: "V_gOzPoC3yI",
            category: "Pediatric"
        },
        {
            id: "video4",
            title: "Complex Tumor Resection",
            description: "A detailed case study of a life-saving tumor resection and facial reconstruction.",
            duration: "30:15",
            date: "Jun 12, 2024",
            videoId: "dQw4w9WgXcQ",
            category: "Pathology"
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section - Cinematic */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900 z-10" />

                {/* Background Video/Image Placeholder */}
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/assets/operation-3.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                            <Film className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium tracking-wider uppercase">Medical Archives</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display">
                            Surgical <span className="font-[family-name:var(--font-pinyon)] text-primary font-normal">Odyssey</span>
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                            Step into the operating theatre. Witness the precision, the pressure, and the profound impact of maxillofacial surgery through our lens.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Documentary */}
            <section className="relative -mt-12 z-30 pb-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200"
                    >
                        <div className="grid lg:grid-cols-3">
                            <div className="lg:col-span-2 relative aspect-video bg-black group">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${featuredDoc.videoId}`}
                                    title={featuredDoc.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                                <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    Featured Documentary
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display leading-tight">
                                    {featuredDoc.title}
                                </h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    {featuredDoc.description}
                                </p>

                                <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {featuredDoc.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {featuredDoc.date}
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <Button className="flex-1 rounded-full bg-slate-900 text-white hover:bg-primary transition-colors">
                                        <Play className="w-4 h-4 mr-2 fill-current" /> Watch Now
                                    </Button>
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Video Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">Latest Episodes</h2>
                            <p className="text-slate-600">Explore our library of surgical cases and medical insights.</p>
                        </div>
                        <Button variant="link" className="text-primary hidden md:flex">
                            View All Archives <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {documentaries.map((doc, index) => (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${doc.videoId}`}
                                        title={doc.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                                            {doc.category}
                                        </span>
                                        <span className="text-xs text-slate-400 flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {doc.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-primary transition-colors line-clamp-2">
                                        {doc.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                                        {doc.description}
                                    </p>

                                    <Button variant="ghost" className="w-full justify-between group-hover:bg-slate-50 text-slate-900">
                                        Watch Episode <Play className="w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto space-y-8"
                    >
                        <h2 className="text-4xl font-bold font-display">
                            Stay Updated with <br />
                            <span className="font-[family-name:var(--font-pinyon)] text-primary font-normal text-5xl">Medical Breakthroughs</span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Subscribe to our newsletter to receive the latest case studies, research findings, and documentary releases directly to your inbox.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white">
                                Subscribe
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
