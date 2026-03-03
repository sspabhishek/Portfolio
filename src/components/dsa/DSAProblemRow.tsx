'use client';

import { useState } from 'react';
import { DSAProblem } from '@/data/dsa-sheet';

interface DSAProblemRowProps {
    problem: DSAProblem;
    solved: boolean;
    onToggle: (id: string) => void;
}

export default function DSAProblemRow({ problem, solved, onToggle }: DSAProblemRowProps) {
    const diffClass = problem.difficulty.toLowerCase();
    const [showPreview, setShowPreview] = useState(false);

    return (
        <>
            <tr>
                <td className="dsa-problem__status">
                    <input
                        type="checkbox"
                        className="dsa-checkbox"
                        checked={solved}
                        onChange={() => onToggle(problem.id)}
                        aria-label={`Mark "${problem.name}" as ${solved ? 'unsolved' : 'solved'}`}
                    />
                </td>
                <td>
                    <div className="dsa-problem__name-cell">
                        <span className={`dsa-problem__name ${solved ? 'dsa-problem__name--solved' : ''}`}>
                            {problem.name}
                        </span>
                        {problem.patternPreview && (
                            <button
                                className={`dsa-pattern-toggle ${showPreview ? 'dsa-pattern-toggle--active' : ''}`}
                                onClick={() => setShowPreview(!showPreview)}
                                aria-label={showPreview ? 'Hide pattern preview' : 'Show pattern preview'}
                                title={showPreview ? 'Hide pattern' : 'Show pattern'}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {showPreview ? (
                                        <>
                                            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                                            <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </>
                                    ) : (
                                        <>
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </>
                                    )}
                                </svg>
                            </button>
                        )}
                    </div>
                </td>
                <td>
                    <span className={`dsa-badge dsa-badge--${diffClass}`}>{problem.difficulty}</span>
                </td>
                <td>
                    <div className="dsa-platforms">
                        {problem.articleLink && (
                            <a
                                href={problem.articleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dsa-platform-link dsa-platform-link--tuf"
                                title="TakeUForward"
                            >
                                TUF
                            </a>
                        )}
                        {problem.leetcodeLink && (
                            <a
                                href={problem.leetcodeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dsa-platform-link dsa-platform-link--lc"
                                title="LeetCode"
                            >
                                LC
                            </a>
                        )}
                        {problem.gfgLink && (
                            <a
                                href={problem.gfgLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dsa-platform-link dsa-platform-link--gfg"
                                title="GeeksforGeeks"
                            >
                                GFG
                            </a>
                        )}
                        {problem.codingNinjasLink && (
                            <a
                                href={problem.codingNinjasLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dsa-platform-link dsa-platform-link--cn"
                                title="Coding Ninjas"
                            >
                                CN
                            </a>
                        )}
                    </div>
                </td>
            </tr>
            {showPreview && problem.patternPreview && (
                <tr className="dsa-pattern-row">
                    <td colSpan={4}>
                        <div className="dsa-pattern-preview">
                            <div className="dsa-pattern-preview__header">
                                <span className="dsa-pattern-preview__label">Expected Output (n = 5)</span>
                            </div>
                            <pre className="dsa-pattern-preview__code">{problem.patternPreview}</pre>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}
