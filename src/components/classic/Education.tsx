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

/* ── Score Badge — hand-drawn circle ── */
function ScoreBadge({ score, label }: { score: string; label: string }) {
    return (
        <div
            className="flex flex-col items-center justify-center min-w-[100px] px-5 py-4"
            style={{
                border: '3px solid var(--accent)',
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                backgroundColor: 'var(--postit-yellow)',
                boxShadow: '3px 3px 0px 0px rgba(45,45,45,0.1)',
                transform: 'rotate(-2deg)',
            }}
        >
            <span
                className="text-2xl md:text-3xl font-black tracking-tight"
                style={{ color: 'var(--accent)', fontFamily: 'Kalam, cursive' }}
            >
                {score}
            </span>
            <span
                className="text-[10px] font-bold tracking-[0.15em] uppercase mt-1"
                style={{ color: 'var(--text-secondary)', fontFamily: 'Patrick Hand, cursive' }}
            >
                {label}
            </span>
        </div>
    );
}

/* ── Education Card ── */
function EducationCard({ edu, index }: { edu: typeof educationData[number]; index: number }) {
    return (
        <div
            className="sketch-card group relative p-6 md:p-8 overflow-hidden transition-all duration-100 hover:-translate-y-1"
            style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
        >
            {/* Tack decoration */}
            <div
                className="absolute -top-2 left-8 w-4 h-4 rounded-full z-10"
                style={{
                    backgroundColor: index === 0 ? 'var(--accent)' : 'var(--accent-blue)',
                    border: '2px solid var(--border)',
                    boxShadow: '1px 1px 0px 0px var(--border)',
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
                                style={{ color: 'var(--accent)', fontFamily: 'Kalam, cursive' }}
                            >
                                {edu.degree}
                            </h3>
                            <p
                                className="text-sm md:text-base font-semibold"
                                style={{ color: 'var(--text-primary)', fontFamily: 'Kalam, cursive' }}
                            >
                                {edu.field}
                            </p>
                        </div>
                    </div>

                    {/* Institution */}
                    <p
                        className="text-sm mb-1 ml-[calc(2rem+0.75rem)]"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'Patrick Hand, cursive', fontSize: '1rem' }}
                    >
                        {edu.institution}
                    </p>

                    {/* Period & Location */}
                    <div
                        className="flex flex-wrap items-center gap-3 text-xs ml-[calc(2rem+0.75rem)]"
                        style={{ color: 'var(--text-muted)', fontFamily: 'Patrick Hand, cursive', fontSize: '0.9rem' }}
                    >
                        <span className="inline-flex items-center gap-1.5">
                            📅 {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            📍 {edu.location}
                        </span>
                    </div>

                    {/* Achievements */}
                    {edu.achievements.length > 0 && (
                        <div className="mt-4 ml-[calc(2rem+0.75rem)]">
                            <p
                                className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
                                style={{ color: 'var(--accent)', fontFamily: 'Patrick Hand, cursive', fontSize: '0.8rem' }}
                            >
                                Achievements
                            </p>
                            <ul className="space-y-1.5">
                                {edu.achievements.map((a, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 leading-relaxed"
                                        style={{ color: 'var(--text-secondary)', fontFamily: 'Patrick Hand, cursive', fontSize: '0.95rem' }}
                                    >
                                        <span style={{ color: 'var(--accent)' }}>✓</span>
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
                    <p className="sketch-section-label mb-4">Education</p>
                    <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Kalam, cursive' }}>
                        Academic Background
                    </h2>
                </div>

                {/* Cards */}
                <div className="edu-cards space-y-6 md:space-y-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="edu-card opacity-0">
                            <EducationCard edu={edu} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
