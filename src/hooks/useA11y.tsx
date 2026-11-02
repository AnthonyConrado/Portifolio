import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type A11yMode = 'contrast' | 'legible' | 'spacing' | 'links' | 'pause' | 'guide';
export type Zoom = '1' | '1.12' | '1.25' | '1.4';

interface Prefs {
  zoom: Zoom;
  modes: A11yMode[];
}

interface A11yContextValue extends Prefs {
  setZoom: (zoom: Zoom) => void;
  toggleMode: (mode: A11yMode) => boolean;
  hasMode: (mode: A11yMode) => boolean;
  reset: () => void;
  /** true quando as animações devem ficar paradas (escolha da pessoa ou "reduzir movimento" do sistema). */
  paused: boolean;
}

const STORAGE_KEY = 'ac-a11y';
const ALL_MODES: A11yMode[] = ['contrast', 'legible', 'spacing', 'links', 'pause', 'guide'];
const DEFAULT: Prefs = { zoom: '1', modes: [] };

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function loadPrefs(): Prefs {
  let prefs = DEFAULT;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && Array.isArray(saved.modes)) prefs = saved;
  } catch {
    /* navegador sem acesso ao armazenamento: segue com o padrão */
  }
  // Se o sistema pede menos movimento, o site já abre com as animações pausadas.
  if (prefersReducedMotion() && !prefs.modes.includes('pause')) {
    prefs = { ...prefs, modes: [...prefs.modes, 'pause'] };
  }
  return prefs;
}

const A11yContext = createContext<A11yContextValue | null>(null);

export function A11yProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<Prefs>(loadPrefs);

  // Aplica as escolhas como classes no <html>, onde o CSS global as lê.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--zoom', prefs.zoom);
    ALL_MODES.forEach((m) => root.classList.toggle(`a11y-${m}`, prefs.modes.includes(m)));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      /* sem armazenamento: as escolhas valem só nesta visita */
    }
  }, [prefs]);

  const setZoom = useCallback((zoom: Zoom) => setPrefs((p) => ({ ...p, zoom })), []);
  const hasMode = useCallback((mode: A11yMode) => prefs.modes.includes(mode), [prefs.modes]);
  const toggleMode = useCallback(
    (mode: A11yMode) => {
      const on = !prefs.modes.includes(mode);
      setPrefs((p) => ({ ...p, modes: on ? [...p.modes, mode] : p.modes.filter((m) => m !== mode) }));
      return on;
    },
    [prefs.modes],
  );
  const reset = useCallback(() => setPrefs(DEFAULT), []);

  const value = useMemo(
    () => ({ ...prefs, setZoom, toggleMode, hasMode, reset, paused: prefs.modes.includes('pause') }),
    [prefs, setZoom, toggleMode, hasMode, reset],
  );

  return <A11yContext.Provider value={value}>{children}</A11yContext.Provider>;
}

export function useA11y() {
  const ctx = useContext(A11yContext);
  if (!ctx) throw new Error('useA11y precisa estar dentro de <A11yProvider>');
  return ctx;
}
