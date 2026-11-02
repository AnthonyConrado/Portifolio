import { useEffect, useRef, type AnchorHTMLAttributes, type ReactNode } from 'react';
import type { TechId } from '../data/tech';

/** Ícone do sprite. Decorativo: o texto ao lado é que dá o nome. */
export function Icon({ name, className = 'i' }: { name: string; className?: string }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <use href={`#${name}`} />
    </svg>
  );
}

export function TechIcon({ id }: { id: TechId }) {
  return (
    <svg aria-hidden="true" focusable="false">
      <use href={`#t-${id}`} />
    </svg>
  );
}

/**
 * Link para outro site. Abre em nova aba e avisa isso a quem usa leitor de tela
 * (NBR 17225, 5.7.6 e 5.7.8).
 */
export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  const label = props['aria-label'];
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} (abre em nova aba)` : undefined}
    >
      {children}
      {!label && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}

/** Grupo de etiquetas, marcado como lista (NBR 17225, 5.5.2). */
export function Tags({ items, className = 'tags' }: { items: string[]; className?: string }) {
  return (
    <div className={className} role="list">
      {items.map((t) => (
        <span className="tag" role="listitem" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}

export function SectionTitle({ id, eyebrow, title, subtitle }: { id: string; eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="sec-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

/**
 * Janela modal com o <dialog> nativo: prende o foco, fecha com Esc
 * e devolve o foco ao botão que a abriu.
 */
export function Modal({
  open,
  onClose,
  title,
  titleId,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  titleId: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      opener.current = document.activeElement as HTMLElement | null;
      try {
        dialog.showModal();
      } catch {
        dialog.setAttribute('open', '');
      }
    } else if (!open) {
      if (dialog.open) dialog.close();
      opener.current?.focus();
      opener.current = null;
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="modal-head">
        <h2 id={titleId}>{title}</h2>
        <button className="close" type="button" onClick={onClose} aria-label="Fechar">
          <Icon name="u-close" />
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </dialog>
  );
}
