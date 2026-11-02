import { useEffect, useState } from 'react';

interface ScrollState {
  /** Quanto da página já foi rolado, de 0 a 1. */
  progress: number;
  scrolled: boolean;
  showToTop: boolean;
  /** Seção que está na parte de cima da tela agora. */
  active: string;
}

// "processo" não tem item no menu, então conta como "servicos".
const ALIASES: Record<string, string> = { processo: 'servicos' };

export function useScroll(sectionIds: string[]): ScrollState {
  const [state, setState] = useState<ScrollState>({ progress: 0, scrolled: false, showToTop: false, active: 'home' });

  useEffect(() => {
    const ids = [...sectionIds, 'processo'];
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const line = window.innerHeight * 0.35;
      let current = 'home';
      let currentTop = -Infinity;
      ids.forEach((id) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top < line && top > currentTop) {
          current = id;
          currentTop = top;
        }
      });
      setState({
        progress: max > 0 ? y / max : 0,
        scrolled: y > 10,
        showToTop: y > 700,
        active: ALIASES[current] ?? current,
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds]);

  return state;
}
