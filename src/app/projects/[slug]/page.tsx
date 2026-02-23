import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ProjectContent from './ProjectContent';
import type { Metadata } from 'next';

export function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const data = getProjectBySlug(params.slug);
    if (!data) return { title: 'Project Not Found' };
    return {
        title: `${data.project.title} | Portfolio`,
        description: data.project.description,
    };
}

const mdxComponents = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12" style={{ color: 'var(--text-primary)' }} {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: 'var(--text-primary)' }} {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-xl font-semibold mb-3 mt-8" style={{ color: 'var(--text-primary)' }} {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }} {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: 'var(--text-secondary)' }} {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ color: 'var(--text-secondary)' }} {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="text-base leading-relaxed" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code
            className="px-2 py-1 rounded text-sm font-mono"
            style={{ backgroundColor: 'var(--code-bg)', color: 'var(--accent)' }}
            {...props}
        />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
            className="rounded-card p-6 mb-6 overflow-x-auto text-sm"
            style={{ backgroundColor: 'var(--code-bg)' }}
            {...props}
        />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="pl-4 mb-6 italic"
            style={{
                borderLeft: '3px solid var(--accent)',
                color: 'var(--text-muted)',
            }}
            {...props}
        />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
            className="underline underline-offset-4 theme-transition"
            style={{ color: 'var(--accent)' }}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong style={{ color: 'var(--text-primary)' }} {...props} />
    ),
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const data = getProjectBySlug(params.slug);
    if (!data) notFound();

    return (
        <article className="min-h-screen pt-24 pb-16">
            <ProjectContent project={data.project}>
                <MDXRemote source={data.content} components={mdxComponents} />
            </ProjectContent>
        </article>
    );
}
