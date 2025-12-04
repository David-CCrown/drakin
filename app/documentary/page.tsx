"use client"

import { motion } from "framer-motion"
import { Play, Clock, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocumentaryPage() {
    const documentaries = [
        {
            id: "video1",
            title: "Restoring Hope: Complex Facial Reconstruction",
            description: "A deep dive into a challenging maxillofacial reconstruction surgery that restored both function and confidence to a patient after severe trauma.",
            duration: "15:24",
            date: "Oct 12, 2024",
            videoId: "dQw4w9WgXcQ", // Placeholder - replacing with a real medical sample in the code below if possible, or keeping generic
            thumbnail: "https://img.youtube.com/vi/bXqF8sXnZp8/maxresdefault.jpg", // Using a generic medical-looking thumbnail if possible, or standard youtube thumb
            category: "Reconstructive"
        },
        {
            id: "video2",
            title: "The Art of Precision: Orthognathic Surgery",
            description: "Witness the meticulous planning and execution required for corrective jaw surgery, transforming a patient's bite and facial profile.",
            duration: "12:45",
            date: "Sep 28, 2024",
            videoId: "bXqF8sXnZp8", // Sample medical video ID
            thumbnail: "https://img.youtube.com/vi/bXqF8sXnZp8/maxresdefault.jpg",
            category: "Orthognathic"
        },
        {
            id: "video3",
            title: "Emergency Trauma Response",
            description: "Follow Dr. Akintububo's team during a critical emergency response, showcasing the rapid decision-making needed in maxillofacial trauma cases.",
            duration: "18:10",
            date: "Aug 15, 2024",
            videoId: "9ZfN87gSjvI", // Sample medical video ID
            thumbnail: "https://img.youtube.com/vi/9ZfN87gSjvI/maxresdefault.jpg",
            category: "Trauma"
        },
        {
            id: "video4",
            title: "Innovations in Cleft Lip Repair",
            description: "Exploring advanced techniques in cleft lip and palate repair, highlighting the life-long impact of early surgical intervention.",
            duration: "22:30",
            date: "Jul 04, 2024",
            videoId: "V_gOzPoC3yI", // Sample medical video ID
            thumbnail: "https://img.youtube.com/vi/V_gOzPoC3yI/maxresdefault.jpg",
            category: "Pediatric"
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium tracking-wider mb-6 border border-primary/30">
                            DOCUMENTARIES
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                            Surgical <span className="text-primary">Exploits</span> & <br />
                            Medical Journeys
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Step inside the operating theater and witness the transformative power of maxillofacial surgery through our curated collection of documentaries and case studies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Video Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {documentaries.map((doc, index) => (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                            >
                                {/* Video Thumbnail / Player Placeholder */}
                                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                                    {/* In a real app, you might use a proper video player component or lazy loaded iframe */}
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${doc.videoId}`}
                                        title={doc.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                                            {doc.category}
                                        </span>
                                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {doc.duration}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {doc.date}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                        {doc.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {doc.description}
                                    </p>

                                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                                        Watch Documentary <Play className="w-4 h-4 ml-2 fill-current" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-900">
                            Witness the Transformation
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Every surgery tells a story of recovery and hope. Schedule a consultation to start your own journey.
                        </p>
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/contact">
                                Book an Appointment <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
