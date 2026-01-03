import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Mail,
    MapPin,
    Send,
    MessageSquare,
    Linkedin,
    Github,
    Instagram,
    ArrowRight,
    Copy
} from "lucide-react";

const Contact = () => {
    return (
        <section
            className="w-full py-24 bg-slate-50 relative overflow-hidden"
            id="contact"
            aria-labelledby="contact-heading"
        >
            <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/3 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-3 py-1 text-sm text-blue-600 shadow-sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        <span className="font-semibold">Get in Touch</span>
                    </div>
                    <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Mari Mulai <span className="text-blue-600">Sesuatu yang Hebat</span>
                    </h2>
                    <p className="max-w-xl text-slate-500 md:text-lg">
                        Punya ide gila atau butuh solusi teknis? Saya siap mendengarkan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="space-y-2 mb-2">
                            <h3 className="text-2xl font-bold text-slate-900">Informasi Kontak</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Pilih metode yang paling nyaman untuk Anda. Saya biasanya membalas email dalam waktu &lt; 24 jam.
                            </p>
                        </div>
                        
                        <a
                            href="Kazeee.dev@gmail.com"
                            className="group relative bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Mail size={80} className="text-blue-600 rotate-12 translate-x-4 -translate-y-2" />
                            </div>

                            <div className="relative z-10 flex items-center gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email Resmi</p>
                                    <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        Kazeee.dev@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Kirim Email Sekarang <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </a>

                        {/* Card 3: Location */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Basis Operasional</p>
                                <p className="text-lg font-bold text-slate-900">
                                    Kediri, Indonesia
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Social Row */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: Github, label: "GitHub", href: "https://github.com/kazetama", color: "hover:bg-slate-900 hover:text-white" },
                                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/teuku-aryansyah-pratama-81aa97278", color: "hover:bg-blue-700 hover:text-white" },
                                { icon: Instagram, label: "Instagram", href: "https://instagram.com/kazeetama", color: "hover:bg-pink-600 hover:text-white" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex flex-col items-center justify-center gap-2 p-4 bg-white border border-slate-100 rounded-3xl shadow-sm transition-all duration-300 group ${social.color}`}
                                >
                                    <social.icon className="w-6 h-6 text-slate-500 group-hover:text-current transition-colors" />
                                    <span className="text-xs font-medium text-slate-500 group-hover:text-current">{social.label}</span>
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* --- RIGHT SIDE: FORM (Clean Card) --- */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r"></div>

                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Nama Lengkap</label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className="bg-slate-50 border-slate-100 focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50/50 h-14 rounded-2xl transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            className="bg-slate-50 border-slate-100 focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50/50 h-14 rounded-2xl transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">Subjek</label>
                                    <Input
                                        id="subject"
                                        placeholder="Tawaran Proyek / Kolaborasi"
                                        className="bg-slate-50 border-slate-100 focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50/50 h-14 rounded-2xl transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Pesan</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Ceritakan detail proyekmu..."
                                        className="bg-slate-50 border-slate-100 focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50/50 min-h-[160px] rounded-2xl resize-none p-4 transition-all"
                                    />
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white text-base font-semibold shadow-xl shadow-slate-200 hover:shadow-blue-200 transition-all duration-300 mt-2"
                                >
                                    Kirim Pesan <Send className="w-4 h-4 ml-2 animate-pulse" />
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;