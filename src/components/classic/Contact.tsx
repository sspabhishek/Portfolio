'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | null = null;

        const initGsap = async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            if (!sectionRef.current) return;

            ctx = gsap.context(() => {
                gsap.fromTo(
                    '.section-heading-contact',
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: { trigger: '.section-heading-contact', start: 'top 85%' },
                    }
                );

                gsap.fromTo(
                    '.contact-form-container',
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: { trigger: '.contact-form-container', start: 'top 80%' },
                    }
                );
            }, sectionRef);
        };

        initGsap();
        return () => { ctx?.revert(); };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:abhishekprajapati243@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="section-padding"
            aria-label="Contact"
        >
            <div className="max-w-3xl mx-auto">
                <div className="section-heading-contact text-center mb-16 opacity-0">
                    <p className="sketch-section-label mb-4">Get In Touch</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Kalam, cursive' }}>
                        Let&apos;s Work Together
                    </h2>
                    <p
                        className="max-w-xl mx-auto"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'Patrick Hand, cursive', fontSize: '1.15rem' }}
                    >
                        Have a project in mind? Let&apos;s talk about how I can help bring your vision to life.
                    </p>
                </div>

                <div
                    className="contact-form-container sketch-card relative p-8 md:p-12 opacity-0"
                    style={{ transform: 'rotate(-0.3deg)' }}
                >
                    {/* Tape decoration at top */}
                    <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                        style={{
                            width: '90px',
                            height: '24px',
                            background: 'rgba(200, 200, 180, 0.55)',
                            borderRadius: '2px',
                            transform: 'translateX(-50%) rotate(1deg)',
                        }}
                    />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontFamily: 'Kalam, cursive',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="sketch-input"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontFamily: 'Kalam, cursive',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="sketch-input"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block mb-2"
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontFamily: 'Kalam, cursive',
                                    fontSize: '1.1rem',
                                }}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={5}
                                className="sketch-input resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="sketch-btn w-full justify-center"
                            style={{ fontSize: '1.2rem' }}
                        >
                            ✉ Send Message
                        </button>
                        <p
                            className="text-center mt-4"
                            style={{
                                color: 'var(--text-muted)',
                                fontFamily: 'Patrick Hand, cursive',
                                fontSize: '0.9rem',
                            }}
                        >
                            This will open your default email client via mailto.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
