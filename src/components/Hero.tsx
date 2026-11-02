import heroPhoto from '../assets/hero.jpg';
import { useA11y } from '../hooks/useA11y';
import { useToast } from '../hooks/useToast';
import { useTypewriter } from '../hooks/useTypewriter';
import { Icon } from './ui';

const ROLES = ['Full Stack', 'Automação N8N', 'Frontend', 'Backend'];

export function Hero() {
  const { paused, toggleMode } = useA11y();
  const toast = useToast();
  const typed = useTypewriter(ROLES, paused);

  return (
    <section className="hero" id="home" aria-labelledby="home-titulo">
      <div className="wrap">
        <div className="avatar" role="img" aria-label="Foto de Anthony Conrado">
          <img src={heroPhoto} alt="" />
          <span className="ac" aria-hidden="true">
            A<span>C</span>
          </span>
        </div>
        <h1 className="name" id="home-titulo">
          Anthony <span>Conrado</span>
        </h1>
        <p className="role">
          Desenvolvedor Júnior <span className="sr-only">Full Stack</span>
          <span className="typed" aria-hidden="true">
            {typed}
          </span>
        </p>
        <p className="lead">
          Crio aplicações web modernas com React, Node.js e TypeScript, e automações com N8N que tiram tarefas
          repetitivas das costas de quem trabalha.
        </p>
        <div className="chips" role="list">
          <span className="chip" role="listitem"><Icon name="t-react" />React</span>
          <span className="chip" role="listitem"><Icon name="t-ts" />TypeScript</span>
          <span className="chip" role="listitem"><Icon name="t-node" />Node.js</span>
          <span className="chip" role="listitem"><Icon name="t-n8n" />Automação N8N</span>
        </div>
        <div className="cta">
          <a className="btn" href="#projetos">
            Meus projetos <Icon name="u-ext" />
          </a>
          <a className="btn lilac" href="#contato">
            Vamos conversar <Icon name="u-chat" />
          </a>
        </div>
        <div style={{ marginTop: 22 }}>
          <button
            className="pause-btn"
            type="button"
            aria-pressed={paused}
            onClick={() => {
              const on = toggleMode('pause');
              toast(on ? 'Animações pausadas' : 'Animações retomadas');
            }}
          >
            <Icon name="u-pause" />
            <span>{paused ? 'Retomar animações' : 'Pausar animações'}</span>
          </button>
        </div>
        <div>
          <a className="scroll-hint" href="#projetos">
            <span className="mouse" aria-hidden="true" />
            Role para ver mais
          </a>
        </div>
      </div>
    </section>
  );
}
