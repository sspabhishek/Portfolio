'use client';

import { useEffect, useRef } from 'react';

const coreStack = [
    'Next.js 14',
    'TypeScript',
    'Tailwind CSS',
    'GSAP',
    'MDX + Contentlayer',
];

const aiWorkflow = [
    { tool: 'Stitch', role: 'UI/UX Design' },
    { tool: 'ChatGPT', role: 'Planning & Debugging' },
    { tool: 'Gemini Pro 3.1', role: 'Code Generation' },
    { tool: 'Claude Opus 4.5', role: 'Code Generation' },
    { tool: 'Sonnet 4.6 (Thinking)', role: 'Structured Reasoning' },
    { tool: 'Antigravity', role: 'AI-native IDE' },
];

export default function EngineeringWorkflow() {
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
                    '.workflow-heading',
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: { trigger: '.workflow-heading', start: 'top 85%' },
                    }
                );

                gsap.fromTo(
                    '.workflow-card',
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: 'power2.out',
                        scrollTrigger: { trigger: '.workflow-cards', start: 'top 80%' },
                    }
                );

                gsap.fromTo(
                    '.workflow-closing',
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        scrollTrigger: { trigger: '.workflow-closing', start: 'top 90%' },
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
            id="engineering-workflow"
            className="section-padding"
            aria-label="Engineering Workflow"
        >
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="workflow-heading text-center mb-16 opacity-0">
                    <p
                        className="text-sm font-medium tracking-[0.3em] uppercase mb-4"
                        style={{ color: 'var(--accent)' }}
                    >
                        Process
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Engineering Workflow
                    </h2>
                    <p
                        style={{ color: 'var(--text-secondary)' }}
                        className="max-w-2xl mx-auto leading-relaxed"
                    >
                        This portfolio was built using a modern AI-assisted development workflow,
                        combining human architectural decisions with advanced coding models.
                    </p>
                </div>

                {/* Divider */}
                <div
                    className="mx-auto mb-12"
                    style={{
                        width: 60,
                        height: 1,
                        backgroundColor: 'var(--accent)',
                        opacity: 0.4,
                    }}
                />

                {/* Cards */}
                <div className="workflow-cards grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Core Stack */}
                    <div className="workflow-card rounded-card p-6 md:p-8 theme-transition glass opacity-0">
                        <h3
                            className="text-lg font-semibold mb-6"
                            style={{ color: 'var(--accent)' }}
                        >
                            Core Stack
                        </h3>
                        <ul className="space-y-3">
                            {coreStack.map((tech) => (
                                <li
                                    key={tech}
                                    className="flex items-center gap-3 text-sm"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: 'var(--accent)' }}
                                    />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AI-Assisted Workflow */}
                    <div className="workflow-card rounded-card p-6 md:p-8 theme-transition glass opacity-0">
                        <h3
                            className="text-lg font-semibold mb-6"
                            style={{ color: 'var(--accent)' }}
                        >
                            AI-Assisted Workflow
                        </h3>
                        <ul className="space-y-3">
                            {aiWorkflow.map((item) => (
                                <li
                                    key={item.tool}
                                    className="flex items-start gap-3 text-sm"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                                        style={{ backgroundColor: 'var(--accent)' }}
                                    />
                                    <span>
                                        <span className="font-medium">{item.tool}</span>
                                        <span style={{ color: 'var(--text-secondary)' }}>
                                            {' — '}{item.role}
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Closing line */}
                <p
                    className="workflow-closing text-center text-sm mt-12 opacity-0"
                    style={{ color: 'var(--text-muted)' }}
                >
                    All architecture, decisions, and refinements were validated and customized manually.
                </p>
            </div>
        </section>
    );
}
