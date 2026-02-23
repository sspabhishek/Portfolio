'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { Project } from '@/types';

interface ProjectsGridProps {
    projects: Project[];
}

function getCategoryStyle(category: string) {
    switch (category.toLowerCase()) {
        case 'internship':
            return {
                bg: 'rgba(99, 102, 241, 0.15)',
                color: '#2f43f7ff',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                label: '🏢 Internship',
            };
        case 'self made':
            return {
                bg: 'rgba(255, 26, 26, 0.47)',
                color: '#ffffffff',
                border: '1px solid rgba(245, 7, 157, 0.3)',
                label: 'Self Made',
            };
        default:
            return {
                bg: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--accent)',
                border: '1px solid var(--border)',
                label: category || 'Project',
            };
    }
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
                        <p
                            className="text-sm font-medium tracking-[0.3em] uppercase mb-4"
                            style={{ color: 'var(--accent)' }}
                        >
                            Portfolio
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Featured Projects
                        </h2>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project) => {
                        const catStyle = getCategoryStyle(project.category || '');
                        return (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="project-card group rounded-xl overflow-hidden theme-transition opacity-0"
                                style={{
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms ease, box-shadow 400ms ease',
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'translateY(-8px)';
                                    el.style.borderColor = 'var(--border-hover)';
                                    el.style.boxShadow = '0 20px 40px -12px var(--shadow)';
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'translateY(0)';
                                    el.style.borderColor = 'var(--border)';
                                    el.style.boxShadow = 'none';
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
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    {/* Category badge — top right */}
                                    {project.category && (
                                        <span
                                            className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm"
                                            style={{
                                                backgroundColor: catStyle.bg,
                                                color: catStyle.color,
                                                border: catStyle.border,
                                            }}
                                        >
                                            {catStyle.label}
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
                                                className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md"
                                                style={{
                                                    backgroundColor: 'var(--bg-secondary)',
                                                    color: 'var(--accent)',
                                                    border: '1px solid var(--border)',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold mb-2 leading-tight">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm leading-relaxed mb-4 line-clamp-3"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* View link */}
                                    <div
                                        className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                                        style={{ color: 'var(--accent)' }}
                                    >
                                        View Case Study
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
