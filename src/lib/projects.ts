import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project } from '@/types';

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        title: data.title || slug,
        slug,
        description: data.description || '',
        tags: data.tags || [],
        coverImage: data.coverImage || '/images/placeholder.jpg',
        date: data.date || '',
        featured: data.featured || false,
        category: data.category || '',
        liveUrl: data.liveUrl || '',
      } as Project;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return projects;
}

export function getProjectBySlug(slug: string): { project: Project; content: string } | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    project: {
      title: data.title || slug,
      slug,
      description: data.description || '',
      tags: data.tags || [],
      coverImage: data.coverImage || '/images/placeholder.jpg',
      date: data.date || '',
      featured: data.featured || false,
      category: data.category || '',
      liveUrl: data.liveUrl || '',
    },
    content,
  };
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  return fs
    .readdirSync(projectsDirectory)
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''));
}
