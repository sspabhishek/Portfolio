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
            { name: 'Next.js', color: '#5f5d5dff', bg: 'rgba(157, 152, 152, 0.08)' },
            { name: 'Node.js', color: '#339933', bg: 'rgba(51, 153, 51, 0.15)' },
            { name: 'React', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.15)' },
            { name: 'Tailwind', color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.15)' },
            { name: 'JavaScript', color: '#F7DF1E', bg: 'rgba(247, 223, 30, 0.20)' },
            { name: 'Python', color: '#3776AB', bg: 'rgba(55, 118, 171, 0.15)' },
            { name: 'AWS Lambda', color: '#FF9900', bg: 'rgba(255, 153, 0, 0.18)' },
            { name: 'AWS API Gateway', color: '#FF4F8B', bg: 'rgba(255, 79, 139, 0.15)' },
            { name: 'AWS DynamoDB', color: '#4053D6', bg: 'rgba(64, 83, 214, 0.15)' },
            { name: 'AWS S3', color: '#569A31', bg: 'rgba(86, 154, 49, 0.15)' },
            { name: 'AWS IAM', color: '#DD344C', bg: 'rgba(221, 52, 76, 0.15)' },
            { name: 'AWS CloudWatch', color: '#FF4F8B', bg: 'rgba(255, 79, 139, 0.15)' },
            { name: 'Flutter', color: '#02569B', bg: 'rgba(2, 86, 155, 0.15)' },
            { name: 'TypeScript', color: '#3178C6', bg: 'rgba(49, 120, 198, 0.15)' },
            { name: 'Stripe', color: '#635BFF', bg: 'rgba(99, 91, 255, 0.15)' },
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
        tags: [
            { name: 'Python', color: '#3776AB', bg: 'rgba(55, 118, 171, 0.15)' },
            { name: 'NumPy', color: '#107fa3ff', bg: 'rgba(1, 50, 67, 0.15)' },
            { name: 'Pandas', color: '#553bbcff', bg: 'rgba(21, 4, 88, 0.15)' },
            { name: 'AWS', color: '#FF9900', bg: 'rgba(255, 153, 0, 0.15)' }
        ],
        isInternship: true,
    },
];

/* ── Tag rendering helper ── */
function TagPill({ tag }: { tag: { name: string; color: string; bg: string } }) {
    return (
        <span
            className="text-[10px] md:text-[11px] font-bold tracking-wide px-3 py-1 md:py-1.5 rounded-full border shadow-sm"
            style={{
                color: tag.color,
                backgroundColor: tag.bg,
                borderColor: tag.color,
            }}
        >
            {tag.name}
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
            className="rounded-2xl p-6 md:p-8 relative overflow-hidden text-left shadow-2xl transition-transform hover:-translate-y-1 duration-300 border theme-transition"
            style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border)',
            }}
        >
            {exp.isInternship && (
                <div
                    className="absolute top-0 right-4 md:right-6 px-3 md:px-4 py-1 md:py-1.5 rounded-b-lg text-[10px] font-black tracking-widest shadow-sm"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}
                >
                    INTERNSHIP
                </div>
            )}
            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 pt-2" style={{ color: 'var(--text-primary)' }}>
                {exp.role}
            </h4>
            <p className="text-sm leading-relaxed mb-5 md:mb-6" style={{ color: 'var(--text-secondary)' }}>
                {exp.description}
            </p>
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                {exp.highlights.map((h, i) => (
                    <div
                        key={i}
                        className="rounded-xl p-4 md:p-5 border transition-colors theme-transition"
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            borderColor: 'var(--border)',
                        }}
                    >
                        <h5 className="text-sm font-semibold mb-1 md:mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                            <svg className="w-4 h-4 md:w-5 md:h-5 opacity-80 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color: 'var(--accent)' }}>
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="2"></rect>
                                <rect x="9" y="9" width="6" height="6" strokeWidth="2"></rect>
                                <line x1="9" y1="1" x2="9" y2="4" strokeWidth="2"></line>
                                <line x1="15" y1="1" x2="15" y2="4" strokeWidth="2"></line>
                                <line x1="9" y1="20" x2="9" y2="23" strokeWidth="2"></line>
                                <line x1="15" y1="20" x2="15" y2="23" strokeWidth="2"></line>
                                <line x1="20" y1="9" x2="23" y2="9" strokeWidth="2"></line>
                                <line x1="20" y1="14" x2="23" y2="14" strokeWidth="2"></line>
                                <line x1="1" y1="9" x2="4" y2="9" strokeWidth="2"></line>
                                <line x1="1" y1="14" x2="4" y2="14" strokeWidth="2"></line>
                            </svg>
                            {h.title}
                        </h5>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                            {h.detail}
                        </p>
                    </div>
                ))}
            </div>

            {/* Tags with collapsible overflow */}
            <div className="mt-2">
                <div className="flex flex-wrap gap-2">
                    {visibleTags.map((tag) => (
                        <TagPill key={tag.name} tag={tag} />
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
                                <TagPill key={tag.name} tag={tag} />
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
                        className="mt-3 text-[11px] font-semibold tracking-wide cursor-pointer bg-transparent border-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded px-1 py-0.5 transition-colors duration-200"
                        style={{
                            color: 'var(--accent)',
                            opacity: 0.85,
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                    >
                        {expanded ? '← Show less' : `+${hiddenCount} more`}
                    </button>
                )}
            </div>
        </div>
    );
}

/* ── Helper: renders the text info block (company name, period, location) ── */
function InfoBlock({ exp, align }: { exp: typeof experiences[number]; align: 'left' | 'right' }) {
    return (
        <div className={align === 'right' ? 'text-right' : 'text-left'}>
            <p className="text-sm font-bold tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
                {exp.period.toUpperCase()}
            </p>
            <h3 className="text-2xl md:text-3xl font-black mb-1">{exp.company}</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
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
                    <p
                        className="text-sm font-medium tracking-[0.3em] uppercase mb-4"
                        style={{ color: 'var(--accent)' }}
                    >
                        Experience
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Professional Journey
                    </h2>
                </div>

                {/* Timeline */}
                <div className="journey-timeline relative mt-12">
                    {/* Center Vertical line (hidden on mobile, visible on md+) */}
                    <div
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                        style={{ backgroundColor: 'var(--border)' }}
                    />

                    {/* Left Vertical line (visible on mobile only) */}
                    <div
                        className="md:hidden absolute left-[15px] top-0 bottom-0 w-px"
                        style={{ backgroundColor: 'var(--border)' }}
                    />

                    <div className="space-y-20 md:space-y-24">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            // isEven (index 0): Text on LEFT, Card on RIGHT
                            // !isEven (index 1): Card on LEFT, Text on RIGHT (true zigzag)

                            return (
                                <div key={index} className="journey-card relative opacity-0">

                                    {/* ── Mobile Layout (always left-aligned) ── */}
                                    <div className="md:hidden relative pl-12">
                                        <div
                                            className="absolute left-[8px] top-2 w-[15px] h-[15px] rounded-full border-[3px] z-10"
                                            style={{
                                                borderColor: 'var(--accent)',
                                                backgroundColor: 'var(--bg-primary)',
                                            }}
                                        />
                                        <div className="mb-3">
                                            <p className="text-xs font-bold tracking-wider mb-1" style={{ color: 'var(--accent)' }}>
                                                {exp.period.toUpperCase()}
                                            </p>
                                            <h3 className="text-xl font-bold">{exp.company}</h3>
                                            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                                {exp.location}
                                            </p>
                                        </div>
                                        <CardBlock exp={exp} />
                                    </div>

                                    {/* ── Desktop Layout (TRUE zigzag alternating) ── */}
                                    <div className="hidden md:grid grid-cols-2 gap-12 items-center">

                                        {/* Center Dot on the timeline */}
                                        <div
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] rounded-full border-[4px] z-10"
                                            style={{
                                                borderColor: 'var(--accent)',
                                                backgroundColor: 'var(--bg-primary)',
                                            }}
                                        />

                                        {/* Column 1 (LEFT side) */}
                                        <div className={isEven ? 'pr-8' : 'pr-8'}>
                                            {isEven ? (
                                                /* Even rows: Text info on LEFT */
                                                <InfoBlock exp={exp} align="right" />
                                            ) : (
                                                /* Odd rows: Card on LEFT (zigzag!) */
                                                <CardBlock exp={exp} />
                                            )}
                                        </div>

                                        {/* Column 2 (RIGHT side) */}
                                        <div className={isEven ? 'pl-8' : 'pl-8'}>
                                            {isEven ? (
                                                /* Even rows: Card on RIGHT */
                                                <CardBlock exp={exp} />
                                            ) : (
                                                /* Odd rows: Text info on RIGHT (zigzag!) */
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
                            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase md:pl-0 pl-12 theme-transition hover:opacity-80"
                            style={{ color: 'var(--accent)' }}
                        >
                            View Full Resume
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
