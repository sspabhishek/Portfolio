'use client';

import { useEffect, useRef } from 'react';

const educationData = [
    {
        degree: 'Bachelor of Technology',
        field: 'Computer Science & Engineering',
        institution: 'Noida Institute of Engineering and Technology',
        location: 'GB Nagar, India',
        period: 'Jul 2022 — Jun 2025',
        score: '7.87',
        scoreLabel: 'CGPA',
        icon: '🎓',
        achievements: [
            'Winner of IoTRON 2.0 at NIET',
            'Smart India Hackathon 2023 — Grand Finale',
            '5-day IDE Startup Bootcamp (MoE Innovation Cell & AICTE)',
        ],
    },
    {
        degree: 'Diploma',
        field: 'Electronics Engineering',
        institution: 'Government Polytechnic Barabanki',
        location: 'Barabanki, India',
        period: 'Jul 2018 — Aug 2021',
        score: '77.43%',
        scoreLabel: 'Percentage',
        icon: '📜',
        achievements: [],
    },
];

/* ── Score Badge ── */
function ScoreBadge({ score, label }: { score: string; label: string }) {
    return (
        <div
            className="flex flex-col items-center justify-center rounded-2xl px-5 py-4 min-w-[100px] border theme-transition"
            style={{
                background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-card))',
                borderColor: 'var(--accent)',
                boxShadow: '0 0 24px rgba(212, 175, 55, 0.08)',
            }}
        >
            <span
                className="text-2xl md:text-3xl font-black tracking-tight"
                style={{ color: 'var(--accent)' }}
            >
                {score}
            </span>
            <span
                className="text-[10px] font-bold tracking-[0.15em] uppercase mt-1"
                style={{ color: 'var(--text-muted)' }}
            >
                {label}
            </span>
        </div>
    );
}

/* ── Education Card ── */
function EducationCard({ edu }: { edu: typeof educationData[number] }) {
    return (
        <div
            className="group relative rounded-2xl p-6 md:p-8 border overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl theme-transition"
            style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
            }}
        >
            {/* Subtle gradient overlay on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at top right, rgba(212,175,55,0.04), transparent 70%)',
                }}
            />

            <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-6">
                {/* Score Badge */}
                <div className="shrink-0 self-start sm:self-center">
                    <ScoreBadge score={edu.score} label={edu.scoreLabel} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    {/* Degree + Icon */}
                    <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl md:text-3xl leading-none mt-0.5 shrink-0">{edu.icon}</span>
                        <div>
                            <h3
                                className="text-lg md:text-xl font-bold leading-snug"
                                style={{ color: 'var(--accent)' }}
                            >
                                {edu.degree}
                            </h3>
                            <p
                                className="text-sm md:text-base font-semibold"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {edu.field}
                            </p>
                        </div>
                    </div>

                    {/* Institution */}
                    <p className="text-sm mb-1 ml-[calc(2rem+0.75rem)]" style={{ color: 'var(--text-secondary)' }}>
                        {edu.institution}
                    </p>

                    {/* Period & Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs ml-[calc(2rem+0.75rem)]" style={{ color: 'var(--text-muted)' }}>
                        <span className="inline-flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            {edu.location}
                        </span>
                    </div>

                    {/* Achievements */}
                    {edu.achievements.length > 0 && (
                        <div className="mt-4 ml-[calc(2rem+0.75rem)]">
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--accent)' }}>
                                Achievements
                            </p>
                            <ul className="space-y-1.5">
                                {edu.achievements.map((a, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        <svg className="w-3.5 h-3.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Education() {
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
                    '.edu-heading',
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: '.edu-heading', start: 'top 85%' } }
                );

                gsap.fromTo(
                    '.edu-card',
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.2,
                        ease: 'power2.out',
                        scrollTrigger: { trigger: '.edu-cards', start: 'top 80%' },
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
            id="education"
            className="section-padding"
            aria-label="Education"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section heading */}
                <div className="edu-heading mb-12 opacity-0">
                    <p
                        className="text-sm font-medium tracking-[0.3em] uppercase mb-4"
                        style={{ color: 'var(--accent)' }}
                    >
                        Education
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Academic Background
                    </h2>
                </div>

                {/* Cards */}
                <div className="edu-cards space-y-6 md:space-y-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="edu-card opacity-0">
                            <EducationCard edu={edu} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
