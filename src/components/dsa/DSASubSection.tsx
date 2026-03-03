'use client';

import { useState } from 'react';
import { DSASubSection as DSASubSectionType } from '@/data/dsa-sheet';
import DSAProblemRow from './DSAProblemRow';

interface DSASubSectionProps {
    subSection: DSASubSectionType;
    solvedSet: Set<string>;
    onToggle: (id: string) => void;
    searchQuery: string;
    difficultyFilter: string | null;
}

export default function DSASubSection({
    subSection,
    solvedSet,
    onToggle,
    searchQuery,
    difficultyFilter,
}: DSASubSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const filteredProblems = subSection.problems.filter((p) => {
        const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDiff = !difficultyFilter || p.difficulty === difficultyFilter;
        return matchesSearch && matchesDiff;
    });

    if (filteredProblems.length === 0) return null;

    const solvedCount = filteredProblems.filter((p) => solvedSet.has(p.id)).length;

    return (
        <div className="dsa-subsection">
            <div
                className="dsa-subsection__header"
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <svg
                    className={`dsa-subsection__chevron ${isOpen ? 'dsa-subsection__chevron--open' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
                <span className="dsa-subsection__title">{subSection.title}</span>
                <span className="dsa-subsection__count">
                    {solvedCount} / {filteredProblems.length}
                </span>
            </div>

            {isOpen && (
                <table className="dsa-problems">
                    <thead>
                        <tr>
                            <th style={{ width: 36 }}>✓</th>
                            <th>Problem</th>
                            <th style={{ width: 80 }}>Difficulty</th>
                            <th style={{ width: 140 }}>Practice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProblems.map((problem) => (
                            <DSAProblemRow
                                key={problem.id}
                                problem={problem}
                                solved={solvedSet.has(problem.id)}
                                onToggle={onToggle}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
