'use client';

import { useEffect, useRef } from 'react';
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

                tl.fromTo('.hero-badge', { opacity: 0, y: 20, rotate: -3 }, { opacity: 1, y: 0, rotate: -1, duration: 0.6 })
                    .fromTo('.hero-heading', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.3')
                    .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
                    .fromTo('.hero-stats > div', { opacity: 0, y: 20, rotate: 2 }, { opacity: 1, y: 0, rotate: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
                    .fromTo('.hero-cta', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, '-=0.2')
                    .fromTo('.hero-avatar', { opacity: 0, scale: 0.92, rotate: -5 }, { opacity: 1, scale: 1, rotate: 2, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.6')
                    .fromTo('.hero-arrow', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4 }, '-=0.3');
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
            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    {/* Text Content — spans 3 columns */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Status badge — sticky-note style */}
                        <div className="hero-badge opacity-0">
                            <span
                                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase px-5 py-2.5"
                                style={{
                                    backgroundColor: 'var(--postit-yellow)',
                                    border: '2px solid var(--border)',
                                    borderRadius: 'var(--radius-wobbly-sm)',
                                    color: 'var(--text-primary)',
                                    fontFamily: 'Patrick Hand, cursive',
                                    boxShadow: '3px 3px 0px 0px rgba(45,45,45,0.1)',
                                    transform: 'rotate(-1deg)',
                                }}
                            >
                                <span
                                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                                    style={{ backgroundColor: '#22c55e', border: '1px solid #2d2d2d' }}
                                />
                                Available for opportunities
                            </span>
                        </div>

                        {/* Heading — Kalam font */}
                        <div className="hero-heading opacity-0">
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                                style={{ fontFamily: 'Kalam, cursive' }}
                            >
                                Building Scalable
                                <br />
                                <span style={{ color: 'var(--accent)' }}>
                                    Digital Experiences
                                </span>
                                <span
                                    className="inline-block ml-2 animate-wiggle"
                                    style={{ color: 'var(--accent)', fontSize: '0.8em' }}
                                >
                                    !
                                </span>
                            </h1>
                        </div>

                        {/* Subtext */}
                        <p
                            className="hero-sub text-base md:text-lg leading-relaxed max-w-xl opacity-0"
                            style={{
                                color: 'var(--text-secondary)',
                                fontFamily: 'Patrick Hand, cursive',
                                fontSize: '1.2rem',
                            }}
                        >
                            Software Engineer with strong foundations in Data Structures &amp;
                            Algorithms and experience building scalable systems using MERN
                            stack and AWS. Passionate about optimizing performance and
                            designing high-availability backend architectures.
                        </p>

                        {/* Quick stats — organic shapes */}
                        <div className="hero-stats flex flex-wrap gap-6 md:gap-8 pt-2">
                            {[
                                { value: 'MERN Stack', label: 'Full-Stack' },
                                { value: 'AWS', label: 'Cloud & DevOps' },
                                { value: 'DSA', label: 'Problem Solver' },
                            ].map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className="opacity-0 px-5 py-3"
                                    style={{
                                        border: '2px solid var(--border)',
                                        borderRadius: i === 0
                                            ? '255px 15px 225px 15px / 15px 225px 15px 255px'
                                            : i === 1
                                                ? '15px 255px 15px 225px / 225px 15px 255px 15px'
                                                : '185px 10px 165px 10px / 10px 165px 10px 185px',
                                        backgroundColor: 'var(--bg-card)',
                                        boxShadow: '2px 2px 0px 0px rgba(45,45,45,0.08)',
                                        transform: `rotate(${i === 0 ? -1 : i === 1 ? 1 : -0.5}deg)`,
                                    }}
                                >
                                    <p
                                        className="text-lg md:text-xl font-bold"
                                        style={{ color: 'var(--accent)', fontFamily: 'Kalam, cursive' }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        className="text-xs uppercase tracking-wider mt-1"
                                        style={{ color: 'var(--text-muted)', fontFamily: 'Patrick Hand, cursive' }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs — hand-drawn buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2 relative">
                            <a href="#projects" className="hero-cta sketch-btn opacity-0">
                                View Projects
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>

                            <a href="#contact" className="hero-cta sketch-btn-secondary opacity-0">
                                Contact Me
                            </a>

                            {/* Hand-drawn arrow pointing to CTA — desktop only */}
                            <svg
                                className="hero-arrow hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 opacity-0"
                                width="50" height="40" viewBox="0 0 50 40"
                                style={{ color: 'var(--text-muted)' }}
                            >
                                <path
                                    d="M5 20 Q15 5, 30 18 Q40 28, 45 15"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="4 3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M42 12 L45 15 L41 17"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Avatar area — spans 2 columns */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
                        <div
                            className="hero-avatar relative w-72 h-72 md:w-80 md:h-80 flex items-end justify-center opacity-0"
                        >
                            {/* Bouncing decorative circle — desktop only */}
                            <div
                                className="hidden md:block absolute -top-8 -right-8 w-12 h-12 rounded-full animate-bounce-gentle"
                                style={{
                                    backgroundColor: 'var(--postit-yellow)',
                                    border: '2px solid var(--border)',
                                    boxShadow: '2px 2px 0px 0px rgba(45,45,45,0.1)',
                                }}
                            />

                            {/* Tape decoration at top */}
                            <div
                                className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
                                style={{
                                    width: '80px',
                                    height: '24px',
                                    background: 'rgba(200, 200, 180, 0.6)',
                                    borderRadius: '2px',
                                    transform: 'translateX(-50%) rotate(-2deg)',
                                }}
                            />

                            {/* Corner frame marks */}
                            <svg className="absolute -top-4 -left-4 w-8 h-8 z-20" viewBox="0 0 24 24" style={{ color: 'var(--border)' }}>
                                <path d="M4 20 L4 4 L20 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            <svg className="absolute -bottom-4 -right-4 w-8 h-8 z-20" viewBox="0 0 24 24" style={{ color: 'var(--border)' }}>
                                <path d="M20 4 L20 20 L4 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>

                            {/* Image container with wobbly border */}
                            <div
                                className="relative w-full h-full overflow-hidden z-10"
                                style={{
                                    borderRadius: 'var(--radius-wobbly)',
                                    border: '3px solid var(--border)',
                                    backgroundColor: 'var(--bg-card)',
                                    boxShadow: '6px 6px 0px 0px rgba(45,45,45,0.15)',
                                    transform: 'rotate(2deg)',
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
