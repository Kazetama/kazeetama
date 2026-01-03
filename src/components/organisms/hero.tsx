import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import profileImg from "@/assets/profile.png";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const Hero = () => {
    return (
        <section
            className="w-full min-h-screen lg:h-screen bg-slate-50/50 relative flex items-center justify-center pt-28 pb-12 lg:py-0 overflow-x-hidden"
            aria-label="Hero Section - Teuku Aryansyah Pratama Portfolio"
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
                                    Informatics Student • Web Developer
                                </span>
                            </div>
                        </div>

                        {/* Heading & Bio */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl/tight font-extrabold tracking-tight text-slate-900">
                                Teuku Aryansyah <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                                    Pratama
                                </span>
                            </h1>

                            <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
                                Known as <strong>Kazeetama</strong>
                            </p>

                            <p className="max-w-2xl mx-auto lg:mx-0 text-base text-slate-600 leading-relaxed">
                                Saya adalah <strong>Teuku Aryansyah Pratama (Kazeetama)</strong>,
                                mahasiswa <strong>Teknik Informatika</strong> yang memiliki minat
                                pada pengembangan sistem web, backend engineering, dan
                                perancangan aplikasi yang terstruktur, efisien, serta mudah
                                dikembangkan.
                            </p>
                        </div>

                        {/* CTA */}
                        <nav className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="h-11 md:h-12 w-full sm:w-auto px-8 text-base bg-slate-900"
                            >
                                Lihat Portfolio
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Link href="https://github.com/Kazetama" passHref>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-11 md:h-12 w-full sm:w-auto px-8 text-base"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </Button>
                            </Link>
                        </nav>
                    </header>

                    <figure className="relative flex justify-center lg:justify-end order-1 lg:order-2 mt-4 lg:mt-0 z-10">
                        <Tilt
                            perspective={1000}
                            glareEnable={true}
                            glareMaxOpacity={0.45}
                            scale={1.02}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            transitionSpeed={1500}
                            className="w-full max-w-65 md:max-w-90"
                        >
                            <div
                                className="relative bg-white p-2 md:p-3 rounded-[2rem] shadow-2xl w-full transition-all duration-300"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div style={{ transform: "translateZ(20px)" }}>
                                    <Image
                                        src={profileImg}
                                        alt="Teuku Aryansyah Pratama Profile"
                                        priority
                                        className="rounded-[1.5rem] w-full object-cover aspect-3/4 shadow-sm"
                                    />
                                </div>

                                <div
                                    className="absolute -left-2 bottom-6 md:-left-6 md:bottom-8 bg-linear-to-br from-white via-white to-slate-100/90 backdrop-blur-md p-3 rounded-xl border-t border-l border-r border-white/60 border-b-4 border-b-slate-200/80 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex items-center gap-3 animate-bounce-slow max-w-45 md:max-w-none"
                                    style={{ transform: "translateZ(110px)" }}
                                >
                                    <div className="bg-green-100 p-2 rounded-full shrink-0">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ring-2 ring-green-300/50"></div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                                            Current Focus
                                        </p>
                                        <p className="text-xs md:text-sm font-black text-slate-900">
                                            Backend & Web Systems
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;
