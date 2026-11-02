import { useState, type ReactNode } from 'react';
import pmHome from '../assets/pm-home.jpg';
import pmMobile from '../assets/pm-mobile.jpg';
import { FILTERS, PROJECTS, type ProjectCategory, type ProjectDetail, type ProjectKey } from '../data/projects';
import { useToast } from '../hooks/useToast';
import { AmaarThumb } from './thumbs/AmaarThumb';
import { BancoAiThumb } from './thumbs/BancoAiThumb';
import { CoreUpMockup } from './thumbs/CoreUpMockup';
import { SmartFinanceThumb } from './thumbs/SmartFinanceThumb';
import { VetThumb } from './thumbs/VetThumb';
import { ExternalLink, Icon, Modal, SectionTitle, Tags } from './ui';

type Filter = 'todos' | ProjectCategory;

const CARDS: { key: ProjectKey; kicker: string; summary: string; tags: string[]; thumb: ReactNode }[] = [
  {
    key: 'amaar',
    kicker: 'Plataforma social',
    summary: 'Plataforma para centralizar o resgate e facilitar a adoção responsável de animais em Maringá.',
    tags: ['TypeScript', 'Next.js 13', 'Node.js', 'Tailwind'],
    thumb: <AmaarThumb />,
  },
  {
    key: 'vet',
    kicker: 'Automação N8N',
    summary: 'Fluxos no N8N que deixam a comunicação entre clínica e cliente mais rápida, com atendimento pelo WhatsApp.',
    tags: ['N8N', 'EvolutionAPI', 'Supabase', 'SQL'],
    thumb: <VetThumb />,
  },
  {
    key: 'bancoai',
    kicker: 'Sistema web · Full stack',
    summary: 'Sistema de gerenciamento de veículos com login seguro, cadastro de carros com fotos e painel visual para editar e acompanhar a frota.',
    tags: ['React', 'Vite', 'Tailwind', 'Java', 'Spring Boot', 'PostgreSQL'],
    thumb: <BancoAiThumb />,
  },
  {
    key: 'smartfinance',
    kicker: 'API · Em desenvolvimento',
    summary: 'API de controle financeiro pessoal em Node.js e TypeScript, com Express. Projeto em construção para organizar entradas, saídas e saldo.',
    tags: ['Node.js', 'TypeScript', 'Express'],
    thumb: <SmartFinanceThumb />,
  },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('todos');
  const [openKey, setOpenKey] = useState<ProjectKey | null>(null);
  const toast = useToast();

  const visible = (cat: ProjectCategory) => filter === 'todos' || filter === cat;
  const choose = (value: Filter) => {
    setFilter(value);
    const count = Object.values(PROJECTS).filter((p) => value === 'todos' || p.category === value).length;
    toast(`Mostrando ${count} ${count === 1 ? 'projeto' : 'projetos'}`);
  };

  return (
    <section className="block" id="projetos" aria-labelledby="projetos-titulo">
      <div className="wrap">
        <SectionTitle id="projetos-titulo" eyebrow="Portfólio" title="Projetos" subtitle="Sistemas reais, feitos para negócios e causas de verdade." />

        <div className="filters" role="group" aria-label="Filtrar projetos">
          {FILTERS.map((f) => (
            <button key={f.value} className="filter" type="button" aria-pressed={filter === f.value} onClick={() => choose(f.value)}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Projeto em destaque: Barbearia Power Man */}
        <article className="featured" hidden={!visible('web')}>
          <div className="featured-media">
            <div className="desk">
              <div className="bar"><i /><i /><i /></div>
              <img src={pmHome} alt="Página inicial do site da Barbearia Power Man" />
            </div>
            <div className="phone">
              <img src={pmMobile} alt="Site da Power Man aberto no celular" />
            </div>
            <span className="live"><i />No ar</span>
          </div>
          <div className="featured-body">
            <span className="p-kicker">Projeto em destaque · Agendamento online</span>
            <h3>Barbearia Power Man</h3>
            <p>
              Plataforma de gestão e agendamento online para uma barbearia de Maringá. O cliente conhece os serviços,
              se inspira nos estilos de corte e agenda o horário em poucos cliques, pelo computador ou celular.
            </p>
            <Checks items={['Agendamento online', 'Serviços com preço e duração', 'Galeria e guia de estilos', 'Mapa, horários e contato']} />
            <Tags items={PROJECTS.powerman.stack} />
            <div className="p-actions">
              <ExternalLink className="btn ghost" href={PROJECTS.powerman.link} aria-label="Ver site, Barbearia Power Man">
                Ver site <Icon name="u-ext" />
              </ExternalLink>
              <button className="btn" type="button" aria-label="Detalhes, Barbearia Power Man" onClick={() => setOpenKey('powerman')}>
                Detalhes <Icon name="u-eye" />
              </button>
            </div>
          </div>
        </article>

        {/* Segundo destaque: CoreUp */}
        <article className="featured alt" hidden={!visible('app')}>
          <div
            className="featured-media"
            role="img"
            aria-label="Dois celulares com o CoreUp: à esquerda a tela inicial com o treino do dia e o resumo semanal, à direita a tela real de login do app."
          >
            <CoreUpMockup />
            <span className="badge-dev">
              <i style={{ width: 7, height: 7, borderRadius: '50%', background: '#0a1a12', display: 'inline-block' }} />
              No ar · App mobile-first
            </span>
          </div>
          <div className="featured-body">
            <span className="p-kicker">Aplicativo · No ar · Treino e evolução</span>
            <h3>CoreUp</h3>
            <p>
              App de academia que monta a rotina semanal de treino a partir das preferências do aluno, acompanha a
              execução e registra a evolução corporal. Feito no formato de app nativo, com navegação por abas.
            </p>
            <Checks items={['Gerador de treino inteligente', 'Catálogo com 200 exercícios', 'Evolução com gráficos', 'Avaliações de profissionais']} />
            <Tags items={['Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'Prisma', 'PostgreSQL', 'JWT']} />
            <div className="p-actions">
              <ExternalLink className="btn ghost" href={PROJECTS.coreup.link} aria-label="Abrir app, CoreUp">
                Abrir app <Icon name="u-ext" />
              </ExternalLink>
              <button className="btn" type="button" aria-label="Detalhes, CoreUp" onClick={() => setOpenKey('coreup')}>
                Detalhes <Icon name="u-eye" />
              </button>
            </div>
          </div>
        </article>

        <div className="projects">
          {CARDS.map((c) => {
            const p = PROJECTS[c.key];
            return (
              <article className="card" key={c.key} hidden={!visible(p.category)}>
                <div className="thumb" aria-hidden="true">{c.thumb}</div>
                <div className="body">
                  <span className="p-kicker">{c.kicker}</span>
                  <h3>{p.title}</h3>
                  <p>{c.summary}</p>
                  <Tags items={c.tags} />
                  <div className="p-actions">
                    {p.code && (
                      <ExternalLink className="btn ghost code" href={p.code} aria-label={`Código, ${p.title}`}>
                        <Icon name="t-github" />
                        Código
                      </ExternalLink>
                    )}
                    <button className="btn ghost" type="button" aria-label={`Ver detalhes, ${p.title}`} onClick={() => setOpenKey(c.key)}>
                      {p.code ? 'Detalhes' : 'Ver detalhes'} <Icon name="u-arrow" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={openKey ? PROJECTS[openKey] : null} onClose={() => setOpenKey(null)} />
    </section>
  );
}

function Checks({ items, oneColumn = false }: { items: string[]; oneColumn?: boolean }) {
  return (
    <ul className="checks" style={oneColumn ? { gridTemplateColumns: '1fr' } : undefined}>
      {items.map((f) => (
        <li key={f}>
          <Icon name="u-check" />
          {f}
        </li>
      ))}
    </ul>
  );
}

function ProjectModal({ project, onClose }: { project: ProjectDetail | null; onClose: () => void }) {
  const [shot, setShot] = useState(0);
  // Guarda o último projeto aberto para o conteúdo não sumir durante o fechamento.
  const [last, setLast] = useState<ProjectDetail | null>(project);
  if (project && project !== last) {
    setLast(project);
    setShot(0);
  }
  const p = project ?? last;

  return (
    <Modal open={!!project} onClose={onClose} title={p?.title ?? ''} titleId="modalTitle">
      {p && (
        <>
          {p.gallery && (
            <div>
              <div className="gallery-main">
                <img src={p.gallery[shot].src} alt={p.gallery[shot].alt} />
              </div>
              <div className="gallery-thumbs">
                {p.gallery.map((g, i) => (
                  <button key={g.src} type="button" aria-pressed={shot === i} aria-label={`Ver tela ${i + 1}`} onClick={() => setShot(i)}>
                    <img src={g.src} alt="" />
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="modal-cols">
            <div>
              <h3>Sobre o projeto</h3>
              <p>{p.about}</p>
              <h3>Objetivo</h3>
              <p>{p.goal}</p>
              <h3>Tecnologias</h3>
              <Tags items={p.stack} />
            </div>
            <div>
              <h3>Funcionalidades</h3>
              <Checks items={p.features} oneColumn />
              {p.link || p.code ? (
                <div className="p-actions" style={{ marginTop: 18 }}>
                  {p.link && (
                    <ExternalLink className="btn lilac" href={p.link}>
                      {p.linkLabel ?? 'Ver site no ar'} <Icon name="u-ext" />
                    </ExternalLink>
                  )}
                  {p.code && (
                    <ExternalLink className="btn ghost" href={p.code}>
                      <Icon name="t-github" />
                      Ver código
                    </ExternalLink>
                  )}
                </div>
              ) : (
                <p style={{ marginTop: 16, color: '#8e86a3', fontSize: 13 }}>Link público em breve.</p>
              )}
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}
