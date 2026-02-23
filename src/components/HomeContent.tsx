'use client';

import dynamic from 'next/dynamic';
import { useThemeStore } from '@/store/theme';
import Hero from '@/components/classic/Hero';
import ProjectsGrid from '@/components/classic/ProjectsGrid';
import Skills from '@/components/classic/Skills';
import EngineeringWorkflow from '@/components/classic/EngineeringWorkflow';
import Contact from '@/components/classic/Contact';
import Footer from '@/components/classic/Footer';
import Journey from '@/components/classic/Journey';
import Education from '@/components/classic/Education';
import type { Project } from '@/types';

const Terminal = dynamic(() => import('@/components/cli/Terminal'), {
    ssr: false,
    loading: () => (
        <div
            className="min-h-screen flex items-center justify-center terminal-font"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <div className="text-center">
                <div className="terminal-cursor inline-block mb-4" style={{ width: 12, height: 20 }} />
                <p style={{ color: 'var(--text-muted)' }} className="text-sm">
                    Initializing terminal...
                </p>
            </div>
        </div>
    ),
});

interface HomeContentProps {
    projects: Project[];
}

export default function HomeContent({ projects }: HomeContentProps) {
    const mode = useThemeStore((s) => s.mode);

    if (mode === 'cli') {
        return <Terminal />;
    }

    return (
        <>
            <Hero />
            <Journey />
            <Education />
            <ProjectsGrid projects={projects} />
            <Skills />
            <EngineeringWorkflow />
            <Contact />
            <Footer />
        </>
    );
}
