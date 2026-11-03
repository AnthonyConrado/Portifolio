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
        <div className="stat" role="listitem"><b>2</b><span>projetos no ar: Power Man e CoreUp</span></div>
        <div className="stat" role="listitem"><b>6</b><span>projetos entre web, app, API e automação</span></div>
        <div className="stat" role="listitem"><b>2026</b><span>formado em Análise e Desenvolvimento de Sistemas</span></div>
        <div className="stat" role="listitem"><b>20<em>h</em></b><span>certificado em acessibilidade (Acessibilidade PRO)</span></div>
      </div>
    </div>
  );
}
