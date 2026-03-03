'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { dsaSheetData } from '@/data/dsa-sheet';
import DSASection from './DSASection';
import './dsa-sheet.css';

const STORAGE_KEY = 'dsa-sheet-progress';

function loadProgress(): Set<string> {
    if (typeof window === 'undefined') return new Set();
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
        return new Set();
    }
}

function saveProgress(solved: Set<string>) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...solved]));
    } catch {
        // silently fail
    }
}

export default function DSASheetPage() {
    const [solvedSet, setSolvedSet] = useState<Set<string>>(new Set());
    const [searchQuery, setSearchQuery] = useState('');
    const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setSolvedSet(loadProgress());
        setMounted(true);
    }, []);

    const handleToggle = useCallback((id: string) => {
        setSolvedSet((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            saveProgress(next);
            return next;
        });
    }, []);

    const allProblems = useMemo(
        () => dsaSheetData.flatMap((s) => s.subSections.flatMap((ss) => ss.problems)),
        []
    );

    const totalCount = allProblems.length;
    const solvedCount = allProblems.filter((p) => solvedSet.has(p.id)).length;
    const progressPct = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0;

    const easyCount = allProblems.filter((p) => p.difficulty === 'Easy').length;
    const mediumCount = allProblems.filter((p) => p.difficulty === 'Medium').length;
    const hardCount = allProblems.filter((p) => p.difficulty === 'Hard').length;

    const easySolved = allProblems.filter((p) => p.difficulty === 'Easy' && solvedSet.has(p.id)).length;
    const mediumSolved = allProblems.filter((p) => p.difficulty === 'Medium' && solvedSet.has(p.id)).length;
    const hardSolved = allProblems.filter((p) => p.difficulty === 'Hard' && solvedSet.has(p.id)).length;

    const toggleDifficulty = (diff: string) => {
        setDifficultyFilter((prev) => (prev === diff ? null : diff));
    };

    // Check if any sections have matching problems after filters
    const hasResults = dsaSheetData.some((section) =>
        section.subSections.some((ss) =>
            ss.problems.some((p) => {
                const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesDiff = !difficultyFilter || p.difficulty === difficultyFilter;
                return matchesSearch && matchesDiff;
            })
        )
    );

    if (!mounted) {
        return (
            <div className="dsa-sheet" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: 'var(--dsa-text-muted)', fontSize: '1rem' }}>Loading DSA Sheet...</div>
            </div>
        );
    }

    return (
        <div className="dsa-sheet">
            {/* Back Link */}
            <Link href="/" className="dsa-back-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back to Portfolio
            </Link>

            {/* Header */}
            <header className="dsa-header">
                <h1 className="dsa-header__title">Striver&apos;s A2Z DSA Sheet</h1>
                <p className="dsa-header__subtitle">
                    Master DSA from basics to advanced — {totalCount} problems across {dsaSheetData.length} topics
                </p>

                {/* Overall Progress */}
                <div className="dsa-progress">
                    <div className="dsa-progress__fill" style={{ width: `${progressPct}%` }} />
                </div>

                {/* Stats */}
                <div className="dsa-header__stats">
                    <div className="dsa-stat">
                        Total: <span className="dsa-stat__value">{solvedCount}</span> / {totalCount}
                    </div>
                    <div className="dsa-stat">
                        <span style={{ color: 'var(--dsa-easy)' }}>Easy:</span>{' '}
                        <span className="dsa-stat__value">{easySolved}</span> / {easyCount}
                    </div>
                    <div className="dsa-stat">
                        <span style={{ color: 'var(--dsa-medium)' }}>Medium:</span>{' '}
                        <span className="dsa-stat__value">{mediumSolved}</span> / {mediumCount}
                    </div>
                    <div className="dsa-stat">
                        <span style={{ color: 'var(--dsa-hard)' }}>Hard:</span>{' '}
                        <span className="dsa-stat__value">{hardSolved}</span> / {hardCount}
                    </div>
                </div>
            </header>

            {/* Search & Filters */}
            <div className="dsa-controls">
                <input
                    type="text"
                    className="dsa-search"
                    placeholder="Search problems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className={`dsa-filter-chip dsa-filter-chip--easy ${difficultyFilter === 'Easy' ? 'dsa-filter-chip--active' : ''}`}
                    onClick={() => toggleDifficulty('Easy')}
                >
                    Easy
                </button>
                <button
                    className={`dsa-filter-chip dsa-filter-chip--medium ${difficultyFilter === 'Medium' ? 'dsa-filter-chip--active' : ''}`}
                    onClick={() => toggleDifficulty('Medium')}
                >
                    Medium
                </button>
                <button
                    className={`dsa-filter-chip dsa-filter-chip--hard ${difficultyFilter === 'Hard' ? 'dsa-filter-chip--active' : ''}`}
                    onClick={() => toggleDifficulty('Hard')}
                >
                    Hard
                </button>
            </div>

            {/* Sections */}
            <div className="dsa-sections">
                {hasResults ? (
                    dsaSheetData.map((section, idx) => (
                        <DSASection
                            key={idx}
                            section={section}
                            index={idx}
                            solvedSet={solvedSet}
                            onToggle={handleToggle}
                            searchQuery={searchQuery}
                            difficultyFilter={difficultyFilter}
                        />
                    ))
                ) : (
                    <div className="dsa-no-results">
                        No problems found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
}
