'use client';

import { useEffect, useRef, useState } from 'react';

const TAG_VISIBLE_COUNT = 5;

const experiences = [
    {
        company: 'Gencoft Technologies',
        location: 'Remote',
        role: 'Software Engineer Intern',
        period: 'Feb 2025 — Aug 2025',
        description:
            'Contributed across multiple projects spanning UI/UX revamp, payment infrastructure, and cross-platform mobile development with AWS and Flutter.',
        highlights: [
            {
                title: 'QuizWizard.net UI/UX Revamp',
                detail:
                    'Revamped the UI/UX of quizwizard.net, increasing user engagement by 30%. Developed AWS Lambda functions for location-based Stripe payment gateway integration.',
            },
            {
                title: 'ManageUpgrades Payment Infrastructure',
                detail:
                    'Built and deployed payment infrastructure with AWS API Gateway, Lambda, and DynamoDB, reducing payment-related support tickets by 25%.',
            },
            {
                title: 'Flutter Health & Fitness App',
                detail:
                    'Designed cross-platform Flutter app integrating Fitbit Web API and Apple HealthKit, enabling real-time activity sync across 95% of devices with 1,200+ daily users.',
            },
        ],
        tags: [
            'Next.js', 'Node.js', 'React', 'Tailwind', 'JavaScript', 'Python',
            'AWS Lambda', 'AWS API Gateway', 'AWS DynamoDB', 'AWS S3', 'AWS IAM',
            'AWS CloudWatch', 'Flutter', 'TypeScript', 'Stripe',
        ],
        isInternship: true,
    },
    {
        company: 'EduSkills',
        location: 'Remote',
        role: 'SDE Intern',
        period: 'Sep 2023 — Nov 2023',
        description:
            'Optimized data workflows and AWS deployments, accelerating data processing and enabling faster insight generation for strategic decision-making.',
        highlights: [
            {
                title: 'Data Workflow Optimization',
                detail:
                    'Optimized data workflows by 20% with Python (NumPy, Pandas, Matplotlib) for efficient manipulation and visualization.',
            },
            {
                title: 'AWS Deployment Streamlining',
                detail:
                    'Streamlined AWS-based deployments, cutting server setup time by 15%.',
            },
            {
                title: 'Legacy Script Optimization',
                detail:
                    'Accelerated data processing by 25% by optimizing legacy Python scripts, enabling faster insight generation for strategic decision-making.',
            },
        ],
        tags: ['Python', 'NumPy', 'Pandas', 'AWS'],
        isInternship: true,
    },
];

/* ── Tag rendering helper ── */
function TagPill({ tag }: { tag: string }) {
    return (
        <span className="sketch-tag">
            {tag}
        </span>
    );
}

/* ── Helper: renders a card block ── */
function CardBlock({ exp }: { exp: typeof experiences[number] }) {
    const [expanded, setExpanded] = useState(false);
    const hasOverflow = exp.tags.length > TAG_VISIBLE_COUNT;
    const hiddenCount = exp.tags.length - TAG_VISIBLE_COUNT;
    const visibleTags = hasOverflow ? exp.tags.slice(0, TAG_VISIBLE_COUNT) : exp.tags;
    const hiddenTags = hasOverflow ? exp.tags.slice(TAG_VISIBLE_COUNT) : [];

    return (
        <div
            className="sketch-card relative p-6 md:p-8 text-left transition-transform duration-100 hover:-translate-y-1"
            style={{ transform: 'rotate(-0.5deg)' }}
        >
            {/* Tape decoration */}
            <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                style={{
                    width: '70px',
                    height: '20px',
                    background: 'rgba(200, 200, 180, 0.55)',
                    borderRadius: '2px',
                    transform: 'translateX(-50%) rotate(1deg)',
                }}
            />

            {exp.isInternship && (
                <div
                    className="absolute top-0 right-4 md:right-6 px-3 md:px-4 py-1 md:py-1.5 text-[10px] font-black tracking-widest"
                    style={{
                        backgroundColor: 'var(--accent)',
                        color: '#ffffff',
                        fontFamily: 'Patrick Hand, cursive',
                        borderRadius: '0 0 8px 8px',
                        border: '2px solid var(--border)',
                        borderTop: 'none',
                        boxShadow: '2px 2px 0px 0px rgba(45,45,45,0.1)',
                    }}
                >
                    INTERNSHIP
                </div>
            )}
            <h4
                className="text-lg md:text-xl font-bold mb-2 md:mb-3 pt-2"
                style={{ color: 'var(--text-primary)', fontFamily: 'Kalam, cursive' }}
            >
                {exp.role}
            </h4>
            <p
                className="text-sm leading-relaxed mb-5 md:mb-6"
                style={{ color: 'var(--text-secondary)', fontFamily: 'Patrick Hand, cursive', fontSize: '1rem' }}
            >
                {exp.description}
            </p>
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                {exp.highlights.map((h, i) => (
                    <div
                        key={i}
                        className="p-4 md:p-5 transition-colors"
                        style={{
                            backgroundColor: 'var(--bg-primary)',
                            border: '2px dashed var(--border)',
                            borderRadius: 'var(--radius-wobbly-sm)',
                        }}
                    >
                        <h5
                            className="text-sm font-semibold mb-1 md:mb-2 flex items-center gap-2"
                            style={{ color: 'var(--text-primary)', fontFamily: 'Kalam, cursive' }}
                        >
                            <span style={{ color: 'var(--accent)', fontSize: '1.1em' }}>✦</span>
                            {h.title}
                        </h5>
                        <p
                            className="text-xs leading-relaxed"
                            style={{ color: 'var(--text-secondary)', fontFamily: 'Patrick Hand, cursive', fontSize: '0.9rem' }}
                        >
                            {h.detail}
                        </p>
                    </div>
                ))}
            </div>

            {/* Tags with collapsible overflow */}
            <div className="mt-2">
                <div className="flex flex-wrap gap-2">
                    {visibleTags.map((tag) => (
                        <TagPill key={tag} tag={tag} />
                    ))}

                    {/* Hidden tags — rendered but animated */}
                    {hasOverflow && (
                        <div
                            className="flex flex-wrap gap-2 basis-full"
                            style={{
                                maxHeight: expanded ? '200px' : '0px',
                                opacity: expanded ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                            }}
                        >
                            {hiddenTags.map((tag) => (
                                <TagPill key={tag} tag={tag} />
                            ))}
                        </div>
                    )}
                </div>

                {hasOverflow && (
                    <button
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                        aria-expanded={expanded}
                        aria-label={expanded ? 'Show fewer technologies' : `Show ${hiddenCount} more technologies`}
                        className="mt-3 text-sm font-semibold tracking-wide cursor-pointer bg-transparent border-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded px-1 py-0.5 transition-colors duration-200"
                        style={{
                            color: 'var(--accent)',
                            fontFamily: 'Patrick Hand, cursive',
                        }}
                    >
                        {expanded ? '← Show less' : `+${hiddenCount} more`}
                    </button>
                )}
            </div>
        </div>
    );
}

/* ── Helper: renders the text info block ── */
function InfoBlock({ exp, align }: { exp: typeof experiences[number]; align: 'left' | 'right' }) {
    return (
        <div className={align === 'right' ? 'text-right' : 'text-left'}>
            <p
                className="text-sm font-bold tracking-wider mb-2"
                style={{ color: 'var(--accent)', fontFamily: 'Patrick Hand, cursive', letterSpacing: '0.15em' }}
            >
                {exp.period.toUpperCase()}
            </p>
            <h3
                className="text-2xl md:text-3xl font-black mb-1"
                style={{ fontFamily: 'Kalam, cursive' }}
            >
                {exp.company}
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'Patrick Hand, cursive' }}>
                {exp.location}
            </p>
        </div>
    );
}

export default function Journey() {
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
                    '.journey-heading',
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: '.journey-heading', start: 'top 85%' } }
                );

                gsap.fromTo(
                    '.journey-card',
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.25,
                        ease: 'power2.out',
                        scrollTrigger: { trigger: '.journey-timeline', start: 'top 80%' },
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
            id="experience"
            className="section-padding"
            aria-label="Professional Journey"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section heading */}
                <div className="journey-heading mb-16 opacity-0">
                    <p className="sketch-section-label mb-4">
                        Experience
                    </p>
                    <h2
                        className="text-3xl md:text-5xl font-bold"
                        style={{ fontFamily: 'Kalam, cursive' }}
                    >
                        Professional Journey
                    </h2>
                </div>

                {/* Timeline */}
                <div className="journey-timeline relative mt-12">
                    {/* Center dashed line (hidden on mobile, visible on md+) */}
                    <div
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
                        style={{
                            width: '2px',
                            backgroundImage: 'repeating-linear-gradient(to bottom, var(--border) 0, var(--border) 8px, transparent 8px, transparent 16px)',
                        }}
                    />

                    {/* Left dashed line (visible on mobile only) */}
                    <div
                        className="md:hidden absolute left-[15px] top-0 bottom-0"
                        style={{
                            width: '2px',
                            backgroundImage: 'repeating-linear-gradient(to bottom, var(--border) 0, var(--border) 6px, transparent 6px, transparent 12px)',
                        }}
                    />

                    <div className="space-y-20 md:space-y-24">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="journey-card relative opacity-0">

                                    {/* ── Mobile Layout (always left-aligned) ── */}
                                    <div className="md:hidden relative pl-12">
                                        <div
                                            className="absolute left-[6px] top-2 w-[18px] h-[18px] z-10"
                                            style={{
                                                border: '3px solid var(--accent)',
                                                backgroundColor: 'var(--bg-primary)',
                                                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                            }}
                                        />
                                        <div className="mb-3">
                                            <p
                                                className="text-xs font-bold tracking-wider mb-1"
                                                style={{ color: 'var(--accent)', fontFamily: 'Patrick Hand, cursive' }}
                                            >
                                                {exp.period.toUpperCase()}
                                            </p>
                                            <h3 className="text-xl font-bold" style={{ fontFamily: 'Kalam, cursive' }}>
                                                {exp.company}
                                            </h3>
                                            <p className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'Patrick Hand, cursive' }}>
                                                {exp.location}
                                            </p>
                                        </div>
                                        <CardBlock exp={exp} />
                                    </div>

                                    {/* ── Desktop Layout (TRUE zigzag alternating) ── */}
                                    <div className="hidden md:grid grid-cols-2 gap-12 items-center">

                                        {/* Center Dot on the timeline — wobbly */}
                                        <div
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22px] h-[22px] z-10"
                                            style={{
                                                border: '3px solid var(--accent)',
                                                backgroundColor: 'var(--bg-primary)',
                                                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                                boxShadow: '2px 2px 0px 0px rgba(45,45,45,0.1)',
                                            }}
                                        />

                                        {/* Column 1 (LEFT side) */}
                                        <div className="pr-8">
                                            {isEven ? (
                                                <InfoBlock exp={exp} align="right" />
                                            ) : (
                                                <CardBlock exp={exp} />
                                            )}
                                        </div>

                                        {/* Column 2 (RIGHT side) */}
                                        <div className="pl-8">
                                            {isEven ? (
                                                <CardBlock exp={exp} />
                                            ) : (
                                                <InfoBlock exp={exp} align="left" />
                                            )}
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Resume CTA centered on desktop */}
                    <div className="relative flex justify-center mt-14 md:mt-16">
                        <a
                            href="/resume.pdf"
                            download
                            className="sketch-btn md:pl-0 pl-12"
                            style={{ fontSize: '1rem' }}
                        >
                            View Full Resume
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
