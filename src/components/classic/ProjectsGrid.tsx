'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { Project } from '@/types';

interface ProjectsGridProps {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | null = null;

        const initGsap = async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            if (!sectionRef.current) return;

            ctx = gsap.context(() => {
                gsap.fromTo(
                    '.section-heading-projects',
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: '.section-heading-projects',
                            start: 'top 85%',
                        },
                    }
                );

                gsap.fromTo(
                    '.project-card',
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '.projects-grid',
                            start: 'top 80%',
                        },
                    }
                );
            }, sectionRef);
        };

        initGsap();
        return () => { ctx?.revert(); };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="section-padding"
            aria-label="Featured Projects"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header row */}
                <div className="section-heading-projects flex items-end justify-between mb-12 opacity-0">
                    <div>
                        <p className="sketch-section-label mb-4">Portfolio</p>
                        <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Kalam, cursive' }}>
                            Featured Projects
                        </h2>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, i) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="project-card group overflow-hidden opacity-0 block"
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                border: '3px solid var(--border)',
                                borderRadius: 'var(--radius-wobbly-md)',
                                boxShadow: '4px 4px 0px 0px rgba(45,45,45,0.12)',
                                transform: `rotate(${i % 3 === 0 ? -1 : i % 3 === 1 ? 0.5 : -0.5}deg)`,
                                transition: 'transform 100ms ease, box-shadow 100ms ease',
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = `rotate(${i % 2 === 0 ? 1 : -1}deg) translateY(-4px)`;
                                el.style.boxShadow = '6px 6px 0px 0px rgba(45,45,45,0.18)';
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = `rotate(${i % 3 === 0 ? -1 : i % 3 === 1 ? 0.5 : -0.5}deg)`;
                                el.style.boxShadow = '4px 4px 0px 0px rgba(45,45,45,0.12)';
                            }}
                        >
                            {/* Cover Image Area */}
                            <div
                                className="relative w-full overflow-hidden"
                                style={{ height: '200px', backgroundColor: 'var(--bg-secondary)' }}
                            >
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Category badge — sticky note style */}
                                {project.category && (
                                    <span
                                        className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5"
                                        style={{
                                            backgroundColor: 'var(--postit-yellow)',
                                            color: 'var(--text-primary)',
                                            border: '2px solid var(--border)',
                                            borderRadius: 'var(--radius-wobbly-sm)',
                                            fontFamily: 'Patrick Hand, cursive',
                                            boxShadow: '2px 2px 0px 0px rgba(45,45,45,0.1)',
                                            transform: 'rotate(2deg)',
                                        }}
                                    >
                                        {project.category}
                                    </span>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-5 md:p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1"
                                            style={{
                                                backgroundColor: 'var(--bg-primary)',
                                                color: 'var(--text-primary)',
                                                border: '2px solid var(--border)',
                                                borderRadius: 'var(--radius-wobbly-sm)',
                                                fontFamily: 'Patrick Hand, cursive',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-lg font-bold mb-2 leading-tight"
                                    style={{ fontFamily: 'Kalam, cursive' }}
                                >
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-sm leading-relaxed mb-4 line-clamp-3"
                                    style={{ color: 'var(--text-secondary)', fontFamily: 'Patrick Hand, cursive', fontSize: '1rem' }}
                                >
                                    {project.description}
                                </p>

                                {/* View link */}
                                <div
                                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-100 group-hover:gap-3"
                                    style={{ color: 'var(--accent)', fontFamily: 'Patrick Hand, cursive', fontSize: '1.05rem' }}
                                >
                                    View Case Study
                                    <svg className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
