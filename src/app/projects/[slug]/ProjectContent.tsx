'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { Project } from '@/types';

interface ProjectContentProps {
    project: Project;
    children: React.ReactNode;
}

export default function ProjectContent({ project, children }: ProjectContentProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | null = null;

        const initGsap = async () => {
            const { gsap } = await import('gsap');

            if (!containerRef.current) return;

            ctx = gsap.context(() => {
                const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

                tl.fromTo(
                    '.project-back',
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.6 }
                )
                    .fromTo(
                        '.project-tags-header',
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5 },
                        '-=0.3'
                    )
                    .fromTo(
                        '.project-title',
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.8 },
                        '-=0.3'
                    )
                    .fromTo(
                        '.project-description',
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.6 },
                        '-=0.4'
                    )
                    .fromTo(
                        '.project-cover',
                        { opacity: 0, scale: 0.98 },
                        { opacity: 1, scale: 1, duration: 0.8 },
                        '-=0.3'
                    )
                    .fromTo(
                        '.project-body',
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.8 },
                        '-=0.3'
                    );
            }, containerRef);
        };

        initGsap();
        return () => { ctx?.revert(); };
    }, []);

    return (
        <div ref={containerRef} className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                {/* Back link */}
                <Link
                    href="/#projects"
                    className="project-back inline-flex items-center gap-2 text-sm font-medium theme-transition opacity-0"
                    style={{ color: 'var(--accent)' }}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Live Preview Button */}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-back inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full theme-transition glass glass-hover accent-glow opacity-0"
                        style={{ color: 'var(--accent)' }}
                    >
                        Live Preview
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}
            </div>

            {/* Tags */}
            <div className="project-tags-header flex flex-wrap gap-2 mb-4 opacity-0">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            color: 'var(--accent)',
                            border: '1px solid var(--border)',
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h1 className="project-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0">
                {project.title}
            </h1>

            {/* Description */}
            <p
                className="project-description text-lg md:text-xl mb-10 opacity-0"
                style={{ color: 'var(--text-secondary)' }}
            >
                {project.description}
            </p>

            {/* Cover Image */}
            <div className="project-cover rounded-card overflow-hidden mb-12 opacity-0">
                <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-64 md:h-96 object-cover"
                />
            </div>

            {/* MDX Content (passed as children from server component) */}
            <div className="project-body opacity-0">
                {children}
            </div>

            {/* Navigation */}
            <div
                className="mt-16 pt-8 flex justify-between"
                style={{ borderTop: '1px solid var(--border)' }}
            >
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-medium theme-transition"
                    style={{ color: 'var(--accent)' }}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    All Projects
                </Link>
            </div>
        </div>
    );
}
