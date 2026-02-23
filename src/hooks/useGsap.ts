'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGsapContext(callback: (ctx: gsap.Context) => void, deps: React.DependencyList = []) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      callback(ctx as unknown as gsap.Context);
    }, containerRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
