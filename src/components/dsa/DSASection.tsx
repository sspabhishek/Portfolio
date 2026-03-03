'use client';

import { useState } from 'react';
import { DSASection as DSASectionType } from '@/data/dsa-sheet';
import DSASubSection from './DSASubSection';

interface DSASectionProps {
    section: DSASectionType;
    index: number;
    solvedSet: Set<string>;
    onToggle: (id: string) => void;
    searchQuery: string;
    difficultyFilter: string | null;
}

export default function DSASection({
    section,
    index,
    solvedSet,
    onToggle,
    searchQuery,
    difficultyFilter,
}: DSASectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Get all problem ids in this section
    const allProblems = section.subSections.flatMap((ss) => ss.problems);

    // Filter for counting
    const filteredProblems = allProblems.filter((p) => {
        const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDiff = !difficultyFilter || p.difficulty === difficultyFilter;
        return matchesSearch && matchesDiff;
    });

    if (filteredProblems.length === 0) return null;

    const totalCount = filteredProblems.length;
    const solvedCount = filteredProblems.filter((p) => solvedSet.has(p.id)).length;
    const progressPct = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0;

    return (
        <div className="dsa-section">
            <div
                className="dsa-section__header"
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <div className="dsa-section__left">
                    <svg
                        className={`dsa-section__chevron ${isOpen ? 'dsa-section__chevron--open' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="dsa-section__title">
                        Step {index + 1}: {section.title}
                    </span>
                </div>
                <div className="dsa-section__right">
                    <div className="dsa-section__progress-bar">
                        <div className="dsa-section__progress-fill" style={{ width: `${progressPct}%` }} />
                    </div>
                    <span className="dsa-section__count">
                        {solvedCount} / {totalCount}
                    </span>
                </div>
            </div>

            {isOpen && (
                <div className="dsa-section__body">
                    {section.subSections.map((subSection, ssIdx) => (
                        <DSASubSection
                            key={ssIdx}
                            subSection={subSection}
                            solvedSet={solvedSet}
                            onToggle={onToggle}
                            searchQuery={searchQuery}
                            difficultyFilter={difficultyFilter}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
