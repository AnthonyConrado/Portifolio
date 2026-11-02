import { useEffect, useState } from 'react';
import { CONTACT, SECTIONS } from '../data/contact';
import { ExternalLink, Icon, TechIcon } from './ui';

export function Navbar({ active, scrolled }: { active: string; scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  // Esc fecha o menu do celular
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        document.getElementById('menuBtn')?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap">
        <a className="logo" href="#home" aria-label="Anthony Conrado, início">
          A<span>C</span>
        </a>
        <button
          className="menu-btn"
          id="menuBtn"
          type="button"
          aria-expanded={open}
          aria-controls="navLinks"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'u-close' : 'u-menu'} />
        </button>
        <nav className="main-nav" aria-label="Menu principal">
          <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={'highlight' in s && s.highlight ? 'nav-a11y' : undefined}
                  aria-current={active === s.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {'highlight' in s && s.highlight && <Icon name="u-a11y" />}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ExternalLink className="nav-gh" href={CONTACT.github} aria-label="GitHub de Anthony Conrado">
          <TechIcon id="github" />
        </ExternalLink>
        <ExternalLink className="nav-cta" href={CONTACT.whatsapp}>
          <Icon name="u-wa" />
          Fale comigo
        </ExternalLink>
      </div>
    </header>
  );
}
