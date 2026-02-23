import { getAllProjects } from '@/lib/projects';
import HomeContent from '@/components/HomeContent';

export default function HomePage() {
    const projects = getAllProjects();

    return <HomeContent projects={projects} />;
}
