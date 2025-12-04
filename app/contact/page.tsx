"use client"

import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            // TODO: Implement API call to save contact submission
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
            console.log("Form data:", data);
            setSubmitSuccess(true);
            reset();
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890";
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hello! I'd like to schedule an appointment.");
        window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Have questions or ready to schedule an appointment? I'm here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                <p className="text-muted-foreground mb-8">
                                    Reach out through any of the following channels. I look forward
                                    to hearing from you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <a
                                            href={`mailto:${process.env.NEXT_PUBLIC_DOCTOR_EMAIL || 'contact@drakin.com'}`}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {process.env.NEXT_PUBLIC_DOCTOR_EMAIL || 'contact@drakin.com'}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Phone</h3>
                                        <p className="text-muted-foreground">
                                            Available during office hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Office Hours</h3>
                                        <div className="text-muted-foreground space-y-1">
                                            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                            <p>Saturday: 9:00 AM - 1:00 PM</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Location</h3>
                                        <p className="text-muted-foreground">
                                            Medical Center<br />
                                            City, State, ZIP
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button
                                    onClick={handleWhatsAppClick}
                                    className="bg-[#25D366] hover:bg-[#20BA5A] w-full sm:w-auto"
                                >
                                    <Phone className="mr-2 h-4 w-4" />
                                    Contact via WhatsApp
                                </Button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card border rounded-lg p-8 medical-shadow">
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg text-accent">
                                    Thank you for your message! I'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <Label htmlFor="name">Full Name *</Label>
                                    <Input
                                        id="name"
                                        {...register("name")}
                                        placeholder="John Doe"
                                        className="mt-2"
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        {...register("email")}
                                        placeholder="john@example.com"
                                        className="mt-2"
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        {...register("phone")}
                                        placeholder="+1 (555) 000-0000"
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="subject">Subject *</Label>
                                    <Input
                                        id="subject"
                                        {...register("subject")}
                                        placeholder="Appointment Request"
                                        className="mt-2"
                                    />
                                    {errors.subject && (
                                        <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        {...register("message")}
                                        placeholder="Please provide details about your inquiry..."
                                        rows={5}
                                        className="mt-2"
                                    />
                                    {errors.message && (
                                        <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
