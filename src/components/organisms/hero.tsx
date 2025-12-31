import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import profileImg from "@/assets/profile.png";

const Hero = () => {
    return (
        <section
            className="w-full min-h-screen lg:h-screen bg-slate-50/50 relative flex items-center justify-center pt-28 pb-12 lg:py-0 overflow-x-hidden"
            aria-label="Hero Section - Kazeetama Portfolio"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/40 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl h-full">
                <div className="grid gap-8 lg:grid-cols-2 items-center h-full">
                    <header className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">

                        {/* Status Badge */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-100 bg-white/80 shadow-sm backdrop-blur-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                                </span>
                                <span className="text-xs md:text-sm font-medium text-slate-600">
                                    Web Developer • Software Engineer
                                </span>
                            </div>
                        </div>

                        {/* Heading & Bio */}
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl/tight font-extrabold tracking-tight text-slate-900">
                                Teuku Aryansyah <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Pratama
                                </span>
                            </h2>

                            <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
                                Known as <strong>Kazeetama</strong>
                            </p>

                            <p className="max-w-2xl mx-auto lg:mx-0 text-base text-slate-600 leading-relaxed">
                                Saya adalah <strong>Teuku Aryansyah Pratama (Kazeetama)</strong>,
                                seorang Software Developer dan Research-Oriented Engineer yang
                                berfokus pada pengembangan sistem web modern, scalable, dan
                                sesuai standar industri.
                            </p>
                        </div>

                        {/* Buttons */}
                        <nav className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start w-full sm:w-auto">
                            <Button size="lg" className="h-11 md:h-12 w-full sm:w-auto px-8 text-base bg-slate-900">
                                Mulai Sekarang <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button size="lg" variant="outline" className="h-11 md:h-12 w-full sm:w-auto px-8 text-base">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub Profile
                            </Button>
                        </nav>
                    </header>
                    <figure className="relative flex justify-center lg:justify-end order-1 lg:order-2 mt-4 lg:mt-0">
                        <div className="relative bg-white p-2 md:p-3 rounded-[2rem] shadow-2xl w-full max-w-[260px] md:max-w-[360px] rotate-0 lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                            <Image
                                src={profileImg}
                                alt="Profile Kazeetama"
                                priority 
                                className="rounded-[1.5rem] w-full object-cover aspect-[3/4]"
                            />
                            <div className="absolute -left-2 bottom-6 md:-left-6 md:bottom-8 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-bounce-slow max-w-[180px] md:max-w-none">
                                <div className="bg-green-100 p-2 rounded-full shrink-0">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                                        Current Focus
                                    </p>
                                    <p className="text-xs md:text-sm font-bold text-slate-900">
                                        Fullstack Dev
                                    </p>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;