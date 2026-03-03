import type { Metadata } from 'next';
import DSASheetPage from '@/components/dsa/DSASheetPage';

export const metadata: Metadata = {
    title: 'Striver\'s A2Z DSA Sheet | Abhishek',
    description:
        'Track your DSA progress with Striver\'s A2Z Sheet — 455+ problems across Arrays, Graphs, DP, Trees, and more.',
    keywords: ['dsa', 'data structures', 'algorithms', 'striver', 'a2z', 'leetcode', 'interview prep'],
};

export default function DSASheetRoute() {
    return <DSASheetPage />;
}
