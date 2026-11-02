import { CONTACT } from '../data/contact';
import { ExternalLink, Icon } from './ui';

export function Footer({ showToTop }: { showToTop: boolean }) {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <a className="logo" href="#home" aria-label="Anthony Conrado, início">A<span>C</span></a>
              <p>Anthony Gonçalves Conrado. Desenvolvedor full stack júnior criando sites, sistemas e automações em Guarulhos-SP.</p>
            </div>
            <nav aria-label="Navegação do rodapé">
              <h2 className="foot-h">Navegação</h2>
              <ul>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#certificados">Certificados</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#servicos">Serviços</a></li>
              </ul>
            </nav>
            <div>
              <h2 className="foot-h">Contato</h2>
              <ul>
                <li><ExternalLink href={CONTACT.whatsapp}>WhatsApp</ExternalLink></li>
                <li><a href="#contato">{CONTACT.email}</a></li>
                <li><ExternalLink href={CONTACT.github}>GitHub</ExternalLink></li>
                <li><ExternalLink href="https://core-up-rho.vercel.app">CoreUp (app)</ExternalLink></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Anthony Gonçalves Conrado</span>
            <span>Feito com React, código e café em Guarulhos · SP</span>
          </div>
        </div>
      </footer>
      <a className={`to-top${showToTop ? ' show' : ''}`} href="#home" aria-label="Voltar ao topo">
        <Icon name="u-up" />
      </a>
    </>
  );
}
