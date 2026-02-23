import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1
                    className="text-8xl md:text-9xl font-bold mb-4"
                    style={{ color: 'var(--accent)' }}
                >
                    404
                </h1>
                <p
                    className="text-xl md:text-2xl font-light mb-8"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    Page not found
                </p>
                <p
                    className="text-base mb-12 max-w-md mx-auto"
                    style={{ color: 'var(--text-muted)' }}
                >
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-card font-semibold text-sm tracking-wide uppercase theme-transition"
                        style={{
                            backgroundColor: 'var(--accent)',
                            color: 'var(--bg-primary)',
                        }}
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/cli"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-card font-semibold text-sm tracking-wide uppercase theme-transition glass glass-hover"
                        style={{ color: 'var(--accent)' }}
                    >
                        Open CLI
                    </Link>
                </div>
            </div>
        </div>
    );
}
