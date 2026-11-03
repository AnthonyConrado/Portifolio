import aboutPhoto from '../assets/about.jpg';
import { CONTACT } from '../data/contact';
import { Icon, SectionTitle } from './ui';

export function About() {
  return (
    <section className="block" id="sobre" aria-labelledby="sobre-titulo">
      <div className="wrap">
        <SectionTitle id="sobre-titulo" eyebrow="Quem sou eu" title="Sobre" subtitle="Do banco de dados ao deploy." />
        <div className="about">
          <div className="about-card">
            <span className="deco" aria-hidden="true" />
            <span className="bubble" aria-hidden="true">"Hello, World!"</span>
            <div className="photo">
              <img src={aboutPhoto} alt="Foto de Anthony Gonçalves Conrado" width={640} height={640} loading="lazy" decoding="async" />
            </div>
            <span className="loc">
              <Icon name="u-pin" />
              {CONTACT.locationShort}
            </span>
          </div>
          <div className="about-text">
            <p>
              Olá! Eu sou o <strong>Anthony Gonçalves Conrado</strong>, <strong>desenvolvedor full stack júnior</strong> de
              Guarulhos, em São Paulo. Trabalho no desenvolvimento de aplicações web modernas e de{' '}
              <strong>automações com N8N</strong>.
            </p>
            <p>
              Tenho experiência prática em{' '}
              <strong>
                construção de <abbr title="Interfaces de Programação de Aplicações">APIs</abbr>
              </strong>
              , <strong>interfaces responsivas</strong> e <strong>deploy de aplicações</strong>, usando principalmente{' '}
              <strong>React, TypeScript, Next.js e Node.js</strong>.
            </p>
            <p>
              Sou <strong>formado em Análise e Desenvolvimento de Sistemas (2026)</strong> e busco novos desafios para
              crescer profissionalmente e entregar <span className="accent">soluções que resolvem problemas de verdade</span>.
            </p>
            <p className="avail">
              <i aria-hidden="true" />
              Disponível para vagas e parcerias
            </p>
            <div className="term" aria-label="Resumo em formato de terminal">
              <div className="bar">
                <i /><i /><i />
                <small>anthony@portfolio: ~</small>
              </div>
              <pre>
                <span className="p">$</span> whoami{'\n'}
                anthony-conrado <span className="c"># dev full stack júnior</span>{'\n'}
                <span className="p">$</span> cat stack.txt{'\n'}
                React · TypeScript · Next.js · Node.js · N8N{'\n'}
                <span className="p">$</span> git remote -v{'\n'}
                github.com/AnthonyConrado{'\n'}
                <span className="p">$</span> status --agora{'\n'}
                <span className="g hl">● disponível para vagas e parcerias</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
