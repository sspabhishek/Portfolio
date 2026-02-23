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

    const inputStyle = {
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border)',
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
                    <p
                        className="text-sm font-medium tracking-[0.3em] uppercase mb-4"
                        style={{ color: 'var(--accent)' }}
                    >
                        Get In Touch
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Let&apos;s Work Together
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }} className="max-w-xl mx-auto">
                        Have a project in mind? Let&apos;s talk about how I can help bring your vision to life.
                    </p>
                </div>

                <div className="contact-form-container rounded-card p-8 md:p-12 glass opacity-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border theme-transition focus:outline-none"
                                    style={inputStyle}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border theme-transition focus:outline-none"
                                    style={inputStyle}
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border theme-transition focus:outline-none resize-none"
                                style={inputStyle}
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 rounded-card font-semibold text-sm tracking-wide uppercase theme-transition"
                            style={{
                                backgroundColor: 'var(--accent)',
                                color: 'var(--bg-primary)',
                            }}
                        >
                            Send Message
                        </button>
                        <p
                            className="text-center text-xs mt-4"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            This will open your default email client via mailto.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
