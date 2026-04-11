'use client';

import { useEffect, useRef } from 'react';

const skillCategories = [
    {
        title: 'Languages',
        skills: ['C/C++', 'C#', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
        rotation: -1,
    },
    {
        title: 'Frameworks & Libraries',
        skills: ['.Net Core', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Socket.io'],
        rotation: 0.5,
    },
    {
        title: 'Databases',
        skills: ['MySQL', 'MongoDB', 'DynamoDB'],
        rotation: 1,
    },
    {
        title: 'Cloud & DevOps',
        skills: ['AWS IAM', 'AWS Lambda', 'API Gateway', 'S3', 'EC2', 'Azure Cloud', 'Azure DevOps'],
        rotation: -0.5,
    },
    {
        title: 'AI & Developer Tools',
        skills: ['Gemini API', 'Prompt Engineering', 'GitHub Copilot', 'Git', 'Visual Studio', 'VS Code'],
        rotation: 0.8,
    },
];

export default function Skills() {
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
                    '.section-heading-skills',
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: { trigger: '.section-heading-skills', start: 'top 85%' },
                    }
                );

                gsap.fromTo(
                    '.skill-category',
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: 'power2.out',
                        scrollTrigger: { trigger: '.skills-container', start: 'top 80%' },
                    }
                );

                gsap.fromTo(
                    '.skill-tag',
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        stagger: 0.05,
                        ease: 'back.out(1.5)',
                        scrollTrigger: { trigger: '.skills-container', start: 'top 75%' },
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
            id="skills"
            className="section-padding"
            aria-label="Skills"
        >
            <div className="max-w-6xl mx-auto">
                <div className="section-heading-skills text-center mb-16 opacity-0">
                    <p className="sketch-section-label mb-4">Expertise</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Kalam, cursive' }}>
                        Skills & Technologies
                    </h2>
                    <p
                        className="max-w-xl mx-auto"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'Patrick Hand, cursive', fontSize: '1.15rem' }}
                    >
                        Technologies I work with to bring ideas to life.
                    </p>
                </div>

                {/* Dashed divider */}
                <div
                    className="mx-auto mb-12"
                    style={{
                        width: '80px',
                        height: '0',
                        borderTop: '3px dashed var(--border)',
                        opacity: 0.3,
                    }}
                />

                <div className="skills-container grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="skill-category sketch-card p-6 md:p-8 opacity-0 transition-transform duration-100 hover:rotate-0"
                            style={{
                                transform: `rotate(${category.rotation}deg)`,
                            }}
                        >
                            <h3
                                className="text-lg font-semibold mb-5"
                                style={{ color: 'var(--accent)', fontFamily: 'Kalam, cursive', fontSize: '1.3rem' }}
                            >
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skill-tag sketch-tag opacity-0">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
