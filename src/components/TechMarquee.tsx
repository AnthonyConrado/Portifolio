import { TECH } from '../data/tech';
import { TechIcon } from './ui';

// Faixa que rola sozinha. É só decoração: as mesmas tecnologias estão listadas em Skills.
export function TechMarquee() {
  const items = [...TECH, ...TECH];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={`${t.id}-${i}`}>
            <TechIcon id={t.id} />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="wrap">
      <div className="stats" role="list">
        <div className="stat" role="listitem"><b>6</b><span>projetos no portfólio</span></div>
        <div className="stat" role="listitem"><b>{TECH.length}<em>+</em></b><span>tecnologias no dia a dia</span></div>
        <div className="stat" role="listitem"><b>2026</b><span>formado em Análise e Desenv. de Sistemas</span></div>
        <div className="stat" role="listitem"><b>Full<em>.</em></b><span>do banco de dados ao deploy</span></div>
      </div>
    </div>
  );
}
