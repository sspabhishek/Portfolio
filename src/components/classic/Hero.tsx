'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | null = null;

        const initGsap = async () => {
            const { gsap } = await import('gsap');
            if (!containerRef.current) return;

            ctx = gsap.context(() => {
                const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

                tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo('.hero-heading', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.3')
                    .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
                    .fromTo('.hero-stats > div', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
                    .fromTo('.hero-cta', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, '-=0.2')
                    .fromTo('.hero-avatar', { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.6');
            }, containerRef);
        };

        initGsap();
        return () => { ctx?.revert(); };
    }, []);

    return (
        <section
            ref={containerRef}
            id="about"
            className="relative min-h-screen flex items-center section-padding pt-28"
            aria-label="Hero section"
        >
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    {/* Text Content — spans 3 columns */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Status badge */}
                        <div className="hero-badge opacity-0">
                            <span
                                className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full"
                                style={{
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--accent)',
                                }}
                            >
                                <span
                                    className="w-2 h-2 rounded-full animate-pulse"
                                    style={{ backgroundColor: '#22c55e' }}
                                />
                                Available for opportunities
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="hero-heading opacity-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                                Building Scalable
                                <br />
                                <span className="text-gradient">Digital Experiences</span>
                            </h1>
                        </div>

                        {/* Subtext */}
                        <p
                            className="hero-sub text-base md:text-lg leading-relaxed max-w-xl opacity-0"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Software Engineer with strong foundations in Data Structures &amp;
                            Algorithms and experience building scalable systems using MERN
                            stack and AWS. Passionate about optimizing performance and
                            designing high-availability backend architectures.
                        </p>

                        {/* Quick stats */}
                        <div
                            className="hero-stats flex flex-wrap gap-6 md:gap-10 pt-2"
                        >
                            {[
                                { value: 'MERN Stack', label: 'Full-Stack' },
                                { value: 'AWS', label: 'Cloud & DevOps' },
                                { value: 'DSA', label: 'Problem Solver' },
                            ].map((stat) => (
                                <div key={stat.label} className="opacity-0">
                                    <p className="text-lg md:text-xl font-bold" style={{ color: 'var(--accent)' }}>
                                        {stat.value}
                                    </p>
                                    <p className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)' }}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                                href="#projects"
                                className="hero-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-card font-semibold text-sm tracking-wide theme-transition opacity-0"
                                style={{
                                    backgroundColor: 'var(--accent)',
                                    color: 'var(--bg-primary)',
                                }}
                            >
                                View Projects
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>

                            <a
                                href="#contact"
                                className="hero-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-card font-semibold text-sm tracking-wide theme-transition glass glass-hover opacity-0"
                                style={{ color: 'var(--accent)' }}
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Avatar area — spans 2 columns */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
                        {/* Semi-circular arch container */}
                        <div className="hero-avatar relative w-72 h-72 md:w-80 md:h-80 flex items-end justify-center opacity-0">

                            {/* Large diffuse background bloom — strong ambient glow */}
                            <div
                                className="absolute rounded-full pointer-events-none"
                                style={{
                                    width: '180%',
                                    height: '180%',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: 'radial-gradient(circle, var(--accent) 0%, transparent 55%)',
                                    opacity: 0.35,
                                    filter: 'blur(60px)',
                                }}
                            />

                            {/* Medium glow halo — tighter ring */}
                            <div
                                className="absolute rounded-full pointer-events-none"
                                style={{
                                    width: '130%',
                                    height: '130%',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                                    opacity: 0.2,
                                    filter: 'blur(25px)',
                                }}
                            />

                            {/* Dashed semi-circular outline */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    borderRadius: '8px 8px 50% 50%',
                                    border: '2px dashed var(--accent)',
                                    opacity: 0.5,
                                    transform: 'scale(1.12)',
                                }}
                            />

                            {/* Inner glow behind the arch shape */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    borderRadius: '8px 8px 50% 50%',
                                    background: 'radial-gradient(ellipse at 50% 60%, var(--accent), transparent 70%)',
                                    opacity: 0.2,
                                    transform: 'scale(1.06)',
                                    filter: 'blur(12px)',
                                }}
                            />

                            {/* Arch-shaped image mask — half circle top, flat bottom */}
                            <div
                                className="relative w-full h-full overflow-hidden z-10 border-2 theme-transition"
                                style={{
                                    borderRadius: '12px 12px 50% 50%',
                                    backgroundColor: 'var(--bg-card)',
                                    borderColor: 'var(--border)',
                                }}
                            >
                                <Image
                                    src="/images/sspabhishek.png"
                                    alt="Abhishek Prajapati"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 288px, 320px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
