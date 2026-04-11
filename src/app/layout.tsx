import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/shared/ThemeProvider';
import Header from '@/components/shared/Header';

export const metadata: Metadata = {
    title: 'Abhishek | Developer Portfolio',
    description:
        'A premium personal portfolio showcasing projects, skills, and experience. Built with Next.js, TypeScript, and modern web technologies.',
    keywords: ['portfolio', 'developer', 'full-stack', 'react', 'nextjs', 'typescript'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="cli" suppressHydrationWarning>
            <body className="min-h-screen">
                <ThemeProvider>
                    <Header />
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
