"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Award,
  Users,
  Activity,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Microscope,
  Brain
} from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* HERO SECTION - Immersive & Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient & Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />

        <motion.div
          style={{ opacity, scale }}
          className="container relative z-10 text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider mb-6 border border-primary/20">
              FEDERAL TEACHING HOSPITAL
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-4 font-display">
              Dr. Olugbemi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-[family-name:var(--font-pinyon)] font-normal py-2">
                Benedict Akintububo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light tracking-wide max-w-3xl mx-auto">
              Consultant Maxillofacial Surgeon
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button
              size="lg"
              className="h-14 px-10 rounded-full text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                Book Consultation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 rounded-full text-lg border-2 hover:bg-secondary transition-all duration-300"
              asChild
            >
              <Link href="/about">
                View Profile
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT / INTRO SECTION - Glassmorphism */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/profile-1.jpg"
                  alt="Dr. Olugbemi Benedict Akintububo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-lg font-medium">15+ Years Experience</p>
                  <p className="text-sm opacity-80">Maxillofacial Surgery</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Precision Meets <br />
                <span className="text-primary">Compassion</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                As a distinguished Maxillofacial Surgeon at the Federal Teaching Hospital,
                Dr. Akintububo specializes in correcting complex defects, injuries, and
                diseases affecting the face, jaw, and mouth.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                His approach combines state-of-the-art surgical techniques with a deep
                commitment to patient care, ensuring functional restoration and aesthetic harmony.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Brain, label: "Reconstructive Surgery" },
                  { icon: Stethoscope, label: "Oral Pathology" },
                  { icon: Activity, label: "Trauma Care" },
                  { icon: Microscope, label: "Research & Training" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATISTICS - Floating Cards */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "2,500+", label: "Surgeries Performed", icon: Activity },
              { number: "98%", label: "Success Rate", icon: CheckCircle2 },
              { number: "15+", label: "Years of Service", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="p-8 rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="inline-flex p-4 rounded-full bg-blue-50 text-primary mb-6">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL EXCELLENCE - Gallery */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Clinical Excellence</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A visual testament to precision, recovery, and life-changing outcomes through advanced surgical intervention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/assets/operation-1.jpg", title: "Reconstructive Surgery", category: "Maxillofacial" },
              { src: "/assets/operation-2.jpg", title: "Trauma Repair", category: "Emergency" },
              { src: "/assets/operation-3.jpg", title: "Tumor Resection", category: "Pathology" },
              { src: "/assets/operation-4.jpg", title: "Orthognathic Procedure", category: "Corrective" },
              { src: "/assets/operation-5.jpg", title: "Cleft Lip Repair", category: "Pediatric" },
              { src: "/assets/operation-6.jpg", title: "Dental Implant", category: "Restorative" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-none"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-xs font-medium text-primary bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Immersive Gradient */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-3xl" />

        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Advanced Care for Complex Needs
            </h2>
            <p className="text-xl text-blue-100/90">
              Schedule a consultation with Dr. Akintububo for expert evaluation and personalized treatment planning.
            </p>
            <Button
              size="lg"
              className="h-16 px-12 rounded-full bg-white text-primary hover:bg-blue-50 text-lg font-semibold shadow-2xl"
              asChild
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
