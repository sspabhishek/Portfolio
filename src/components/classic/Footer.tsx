import Link from 'next/link';

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/sspabhishek',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/sspabhishek',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/sspabhishek_',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer
            className="theme-transition section-padding pb-8"
            style={{
                borderTop: '3px dashed var(--border)',
                backgroundColor: 'var(--bg-secondary)',
            }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-3xl font-bold mb-4 inline-block"
                            style={{ color: 'var(--accent)', fontFamily: 'Kalam, cursive' }}
                        >
                            A.
                        </Link>
                        <p
                            className="leading-relaxed"
                            style={{
                                color: 'var(--text-secondary)',
                                fontFamily: 'Patrick Hand, cursive',
                                fontSize: '1.05rem',
                            }}
                        >
                            Software Engineer passionate about building scalable systems
                            using MERN stack, AWS, and modern web technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className="font-semibold uppercase tracking-wider mb-4 wavy-underline inline-block pb-1"
                            style={{
                                color: 'var(--text-primary)',
                                fontFamily: 'Kalam, cursive',
                                fontSize: '1.1rem',
                            }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { href: '/#projects', label: 'Projects' },
                                { href: '/#skills', label: 'Skills' },
                                { href: '/#contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="theme-transition hover:line-through"
                                        style={{
                                            color: 'var(--text-primary)',
                                            fontFamily: 'Patrick Hand, cursive',
                                            fontSize: '1.05rem',
                                            opacity: 0.8,
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4
                            className="font-semibold uppercase tracking-wider mb-4 wavy-underline inline-block pb-1"
                            style={{
                                color: 'var(--text-primary)',
                                fontFamily: 'Kalam, cursive',
                                fontSize: '1.1rem',
                            }}
                        >
                            Connect
                        </h4>
                        <div className="flex gap-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 flex items-center justify-center theme-transition"
                                    style={{
                                        color: 'var(--text-primary)',
                                        border: '2px solid var(--border)',
                                        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                        backgroundColor: 'var(--bg-card)',
                                        boxShadow: '2px 2px 0px 0px rgba(45,45,45,0.08)',
                                        transition: 'transform 100ms ease, box-shadow 100ms ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.transform = 'rotate(-3deg) translate(1px, 1px)';
                                        el.style.boxShadow = '1px 1px 0px 0px rgba(45,45,45,0.08)';
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.transform = 'rotate(0deg)';
                                        el.style.boxShadow = '2px 2px 0px 0px rgba(45,45,45,0.08)';
                                    }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 font-medium theme-transition"
                            style={{
                                color: 'var(--accent)',
                                fontFamily: 'Patrick Hand, cursive',
                                fontSize: '1.05rem',
                            }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8 text-center"
                    style={{
                        borderTop: '2px dashed var(--border)',
                        color: 'var(--text-muted)',
                        fontFamily: 'Patrick Hand, cursive',
                        fontSize: '0.95rem',
                        opacity: 0.6,
                    }}
                >
                    <p>© {new Date().getFullYear()} Abhishek. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
