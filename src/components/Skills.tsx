import { SKILL_GROUPS, techName } from '../data/tech';
import { SectionTitle, TechIcon } from './ui';

export function Skills() {
  return (
    <section className="block" id="skills" aria-labelledby="skills-titulo">
      <div className="wrap">
        <SectionTitle id="skills-titulo" eyebrow="Stack" title="Skills" subtitle="As ferramentas que uso para tirar ideias do papel." />
        <div className="skill-groups">
          {SKILL_GROUPS.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <div className="skills" role="list">
                {g.items.map((id) => (
                  <div className="skill" role="listitem" key={id}>
                    <TechIcon id={id} />
                    <span>{techName(id)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
