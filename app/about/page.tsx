"use client"

import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Target, Users, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 gradient-mesh">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        {...fadeInUp}
                        className="max-w-4xl mx-auto text-center space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-4">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">About Dr. Akin</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            Dedicated to Your
                            <br />
                            <span className="text-gradient">Health & Wellness</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Over 15 years of providing compassionate, evidence-based medical care
                            with a patient-first approach.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bio Section with Image */}
            <section className="py-20 md:py-32">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-luxury-lg">
                                <Image
                                    src="/assets/profile-2.jpg"
                                    alt="Dr. Akin - Professional Portrait"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">My Journey in Medicine</h2>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        With over 15 years of experience in medical practice, I have dedicated
                                        my career to providing exceptional healthcare services. My journey began
                                        with a passion for helping others and a commitment to excellence in
                                        patient care.
                                    </p>
                                    <p>
                                        I believe in treating the whole person, not just the symptoms. My
                                        approach combines the latest medical advances with compassionate,
                                        personalized care. Every patient deserves to be heard, understood,
                                        and treated with dignity and respect.
                                    </p>
                                    <p>
                                        Throughout my career, I have remained committed to continuous learning
                                        and staying at the forefront of medical innovation, ensuring that my
                                        patients receive the most effective, evidence-based treatments available.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: Users, label: "10,000+ Patients Treated" },
                                    { icon: Award, label: "15+ Years Experience" },
                                ].map((stat) => (
                                    <div key={stat.label} className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-primary/10">
                                        <stat.icon className="h-5 w-5 text-primary" />
                                        <span className="text-sm font-medium">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 md:py-32 bg-muted/30">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        {...fadeInUp}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Core Values
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            The principles that guide every aspect of my medical practice
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Heart,
                                title: "Compassion",
                                description: "Treating every patient with genuine empathy, understanding, and care."
                            },
                            {
                                icon: Target,
                                title: "Excellence",
                                description: "Committed to the highest standards of medical care and continuous improvement."
                            },
                            {
                                icon: Award,
                                title: "Integrity",
                                description: "Honest, ethical practice in all patient interactions and medical decisions."
                            },
                            {
                                icon: GraduationCap,
                                title: "Innovation",
                                description: "Embracing the latest medical advances and evidence-based research."
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-2">
                                    <div className="h-14 w-14 rounded-2xl gradient-medical flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medical Philosophy */}
            <section className="py-20 md:py-32">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Medical Philosophy</h2>
                            <p className="text-xl text-muted-foreground">
                                A patient-centered approach built on trust, communication, and collaboration
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                {
                                    title: "Patient-Centered Care",
                                    description: "I believe that effective healthcare is built on a foundation of trust, communication, and collaboration. My practice is centered on creating lasting relationships with patients, understanding their unique needs, and working together to achieve optimal health outcomes."
                                },
                                {
                                    title: "Prevention First",
                                    description: "Prevention is always better than cure. I emphasize preventive care and patient education, empowering individuals to take an active role in their health and well-being. Through regular check-ups, lifestyle counseling, and early intervention, we can prevent many health issues before they become serious."
                                },
                                {
                                    title: "Informed Decision Making",
                                    description: "When treatment is necessary, I ensure that my patients are fully informed about their options. I take the time to explain diagnoses, discuss treatment alternatives, and answer all questions. Together, we make decisions that align with each patient's values, preferences, and goals."
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-card border border-border shadow-luxury"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-lg">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 gradient-medical opacity-95" />
                <div className="absolute inset-0 gradient-mesh" />

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        {...fadeInUp}
                        className="max-w-3xl mx-auto text-center space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                            Ready to Start Your
                            <br />
                            <span className="text-primary font-display italic">Health Journey?</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Schedule a consultation and experience personalized, compassionate medical care.
                        </p>
                        <Button
                            size="lg"
                            asChild
                            className="h-14 px-8 text-lg bg-primary text-white hover:bg-primary/90 shadow-luxury-lg rounded-full"
                        >
                            <Link href="/contact">
                                Book Consultation
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
