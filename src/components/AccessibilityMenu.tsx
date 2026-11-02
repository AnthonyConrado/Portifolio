import { useEffect, useRef, useState } from 'react';
import { useA11y, type A11yMode, type Zoom } from '../hooks/useA11y';
import { useToast } from '../hooks/useToast';

const SIZES: { zoom: Zoom; text: string; label: string }[] = [
  { zoom: '1', text: 'A', label: 'Texto normal' },
  { zoom: '1.12', text: 'A+', label: 'Texto grande' },
  { zoom: '1.25', text: 'A++', label: 'Texto maior' },
  { zoom: '1.4', text: 'A+++', label: 'Texto muito grande' },
];

const MODES: { mode: A11yMode; icon: string; label: string }[] = [
  { mode: 'contrast', icon: 'u-contrast', label: 'Alto contraste' },
  { mode: 'legible', icon: 'u-font', label: 'Fonte legível' },
  { mode: 'spacing', icon: 'u-spacing', label: 'Mais espaçamento' },
  { mode: 'links', icon: 'u-link', label: 'Destacar links' },
  { mode: 'pause', icon: 'u-pause', label: 'Pausar animações' },
  { mode: 'guide', icon: 'u-guide', label: 'Guia de leitura' },
];

/** Botão fixo + painel de acessibilidade. `open`/`setOpen` vêm do App para outros botões poderem abrir o painel. */
export function AccessibilityMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const a11y = useA11y();
  const toast = useToast();
  const panelRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [guideY, setGuideY] = useState<number | null>(null);

  // Ao abrir, o foco vai para a opção ativa (ou a primeira)
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    (panel?.querySelector<HTMLButtonElement>('[aria-pressed="true"]') ?? panel?.querySelector<HTMLButtonElement>('button'))?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panel?.contains(target) || buttonRef.current?.contains(target)) return;
      if ((target as HTMLElement).closest?.('[data-a11y-open]')) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open, setOpen]);

  // Guia de leitura: escurece a tela fora de uma faixa na altura do ponteiro
  useEffect(() => {
    if (!a11y.hasMode('guide')) return;
    const onMove = (e: PointerEvent) => setGuideY(e.clientY);
    document.addEventListener('pointermove', onMove);
    return () => document.removeEventListener('pointermove', onMove);
  }, [a11y]);

  const band = 70;
  const y = guideY ?? window.innerHeight / 2;

  return (
    <>
      <button
        ref={buttonRef}
        className="a11y-btn"
        type="button"
        aria-expanded={open}
        aria-controls="a11yPanel"
        aria-label={open ? 'Fechar menu de acessibilidade' : 'Abrir menu de acessibilidade'}
        onClick={() => setOpen(!open)}
      >
        <svg aria-hidden="true" focusable="false"><use href="#u-a11y" /></svg>
      </button>

      <aside ref={panelRef} className="a11y-panel" id="a11yPanel" aria-labelledby="a11yTitle" hidden={!open}>
        <h2 id="a11yTitle">Acessibilidade</h2>
        <p>Ajuste o site do jeito que fica melhor para você. Suas escolhas ficam salvas neste navegador.</p>
        <div className="a11y-size" role="group" aria-label="Tamanho do texto">
          {SIZES.map((s) => (
            <button
              key={s.zoom}
              className="a11y-opt"
              type="button"
              aria-pressed={a11y.zoom === s.zoom}
              aria-label={s.label}
              onClick={() => {
                a11y.setZoom(s.zoom);
                toast('Tamanho do texto alterado');
              }}
            >
              {s.text}
            </button>
          ))}
        </div>
        <div className="a11y-grid">
          {MODES.map((m) => (
            <button
              key={m.mode}
              className="a11y-opt"
              type="button"
              aria-pressed={a11y.hasMode(m.mode)}
              onClick={() => {
                const on = a11y.toggleMode(m.mode);
                toast(`${m.label} ${on ? 'ativado' : 'desativado'}`);
              }}
            >
              <svg aria-hidden="true" focusable="false"><use href={`#${m.icon}`} /></svg>
              {m.label}
            </button>
          ))}
        </div>
        <button
          className="a11y-reset"
          type="button"
          onClick={() => {
            a11y.reset();
            toast('Configurações restauradas');
          }}
        >
          Restaurar padrão
        </button>
        <p className="a11y-note">Dica: use Tab para navegar e Esc para fechar janelas.</p>
      </aside>

      <div className="reading-guide rg-top" aria-hidden="true" style={{ height: Math.max(0, y - band) }} />
      <div className="reading-guide rg-bottom" aria-hidden="true" style={{ height: Math.max(0, window.innerHeight - y - band) }} />
    </>
  );
}

