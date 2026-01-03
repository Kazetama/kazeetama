"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Download,
    Code2,
    Briefcase,
    Globe
} from "lucide-react";

const About = () => {

    const [repoCount, setRepoCount] = useState<number | null>(0);

    useEffect(() => {
        fetch("https://api.github.com/users/Kazetama")
            .then(res => res.json())
            .then(data => setRepoCount(data.public_repos))
            .catch(() => setRepoCount(0));
    }, []);

    const skills = [
        // Frontend Frameworks
        "Next.js",
        "React.js",
        "Tailwind CSS",

        // Backend Frameworks
        "Laravel",
        "Express.js",

        // Core Backend
        "Node.js",
        "RESTful API Development",
        "Authentication & Authorization (JWT)",

        // Database
        "MySQL",
        "PostgreSQL",

        // Engineering & Security
        "Backend System Design",
        "Cyber Security Fundamentals",

        // Tools & Soft Skills
        "Git & GitHub",
        "Problem Solving",
        "Team Leadership",
    ];

    return (
        <section
            className="w-full py-20 bg-white relative"
            id="about"
            aria-labelledby="about-heading"
        >
            <h2 className="sr-only" id="about-heading">
                About Kazeetama – Teuku Aryansyah Pratama | Software Developer Portfolio
            </h2>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <header className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-sm text-blue-600">
                        <span className="font-semibold">About Me</span>
                    </div>

                    <p className="max-w-2xl text-slate-500 md:text-lg">
                        Profil profesional <strong>Teuku Aryansyah Pratama (Kazeetama)</strong>,
                        mahasiswa Teknik Informatika yang aktif membangun sistem web,
                        memimpin organisasi, dan berfokus pada backend engineering
                        yang terstruktur, aman, dan scalable.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <article className="md:col-span-7 lg:col-span-8 bg-slate-50 rounded-[2rem] p-8 border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10">
                            <Code2 size={120} />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <h4 className="text-2xl font-bold text-slate-800">
                                Perjalanan Profesional
                            </h4>

                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Saya adalah <strong>Teuku Aryansyah Pratama</strong>,
                                    dikenal sebagai <strong>Kazeetama</strong>,
                                    mahasiswa <strong>Teknik Informatika semester 5 </strong>
                                    di Universitas Dian Nuswantoro Kediri
                                </p>

                                <p>
                                    Ketertarikan saya pada teknologi berawal dari rasa ingin tahu
                                    tentang bagaimana sebuah sistem bekerja secara menyeluruh,
                                    mulai dari perancangan backend, pengelolaan database,
                                    hingga integrasi API yang aman dan efisien.
                                </p>

                                <p>
                                    Saya terbiasa mengembangkan aplikasi web menggunakan
                                    <strong> Laravel, Express.js, dan Next.js</strong>,
                                    dengan fokus pada arsitektur sistem yang rapi,
                                    mudah dipelihara, dan siap dikembangkan ke skala yang lebih besar.
                                </p>

                                <p>
                                    Di luar aspek teknis, pengalaman organisasi membentuk saya
                                    dalam <strong>kepemimpinan tim, komunikasi teknis,
                                        dan pengambilan keputusan</strong>,
                                    yang sangat relevan dalam pengembangan software di dunia nyata.
                                </p>
                            </div>

                            <Button
                                className="rounded-full mt-4 bg-slate-900 hover:bg-slate-800 gap-2"
                                aria-label="Download CV Teuku Aryansyah Pratama"
                            >
                                <Download className="w-4 h-4" />
                                Download CV
                            </Button>
                        </div>
                    </article>

                    <aside className="md:col-span-5 lg:col-span-4 grid grid-rows-2 gap-6">
                        <div className="bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[60px] opacity-20"></div>
                            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
                                3+
                            </span>
                            <p className="text-slate-300 font-medium text-lg">
                                Pengalaman Akademik & Proyek
                            </p>
                            <p className="text-sm text-slate-500">
                                Web Development & Backend Engineering
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <span className="text-4xl font-bold text-slate-900">
                                    {repoCount !== null ? `${repoCount}+` : "—"}
                                </span>
                            </div>
                            <p className="text-slate-600 font-medium">
                                Proyek Diselesaikan
                            </p>
                            <p className="text-sm text-slate-400">
                                API Backend, Sistem Informasi, Dashboard, dan Project Akademik
                            </p>
                        </div>
                    </aside>

                    <section
                        className="md:col-span-12 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm"
                        aria-label="Tech Stack Kazeetama"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="space-y-2 md:w-1/3">
                                <h5 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                    Tech Stack & Tools
                                </h5>
                                <p className="text-slate-500 text-sm">
                                    Teknologi yang saya gunakan dalam project akademik,
                                    organisasi, dan pengembangan sistem berbasis web.
                                </p>
                            </div>

                            <ul className="flex flex-wrap gap-2 md:w-2/3 justify-start md:justify-end">
                                {skills.map((item, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-slate-50 text-slate-600 border border-slate-100 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default About;
