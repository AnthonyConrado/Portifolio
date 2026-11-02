import { useState } from 'react';
import certImg from '../assets/cert.jpg';
import { Icon, Modal, SectionTitle } from './ui';

const CERT_ALT =
  'Certificado do INAER em nome de Anthony Gonçalves Conrado, pela participação no Evento de Acessibilidade Arquitetônica Acessibilidade PRO 2026, com 20 horas, nos dias 22 e 23 de agosto de 2026, em São Paulo.';

export function Certificates({ onOpenA11y }: { onOpenA11y: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="block" id="certificados" aria-labelledby="certTitle">
      <div className="wrap">
        <SectionTitle
          id="certTitle"
          eyebrow="Formação complementar"
          title="Certificados"
          subtitle="Acessibilidade não é detalhe. É parte de como eu construo."
        />
        <div className="cert">
          <button className="cert-img" type="button" aria-label="Ampliar o certificado do Acessibilidade PRO 2026" onClick={() => setOpen(true)}>
            <img src={certImg} alt={CERT_ALT} />
          </button>
          <div className="cert-body">
            <span className="p-kicker">INAER · Instituto Nacional de Acessibilidade</span>
            <h3>Acessibilidade PRO 2026</h3>
            <p>
              Participei do evento presencial de acessibilidade arquitetônica do INAER, em São Paulo. Foram dois dias sobre
              normas, acessibilidade urbana, inteligência artificial aplicada à acessibilidade e como tornar espaços para
              todas as pessoas.
            </p>
            <div className="cert-meta" role="list">
              <span role="listitem"><Icon name="u-award" />20 horas</span>
              <span role="listitem">22 e 23 de agosto de 2026</span>
              <span role="listitem"><Icon name="u-pin" />São Paulo</span>
            </div>
            <p style={{ marginBottom: 12, color: '#fff' }}>
              <strong>Levo isso para o código. Este portfólio tem:</strong>
            </p>
            <ul className="a11y-list">
              <li><Icon name="u-check" />Menu de acessibilidade com tamanho de texto, alto contraste e fonte mais legível</li>
              <li><Icon name="u-check" />Navegação completa pelo teclado, com foco bem visível</li>
              <li><Icon name="u-check" />Textos alternativos nas imagens para leitores de tela</li>
              <li><Icon name="u-check" />Opção de pausar animações e respeito ao "reduzir movimento"</li>
            </ul>
            <p style={{ fontSize: 14, color: '#d5d0e0', margin: '0 0 20px' }}>
              Este site foi desenvolvido seguindo os requisitos da{' '}
              <strong>
                <abbr title="Associação Brasileira de Normas Técnicas">ABNT</abbr> NBR 17225:2025
              </strong>
              , a norma brasileira de acessibilidade em conteúdo e aplicações web. Encontrou alguma barreira?{' '}
              <a href="#contato" style={{ color: 'var(--accent-2)' }}>
                Me avise pelo contato
              </a>{' '}
              que eu corrijo.
            </p>
            <button className="btn lilac" type="button" data-a11y-open onClick={onOpenA11y}>
              <Icon name="u-a11y" />
              Abrir menu de acessibilidade
            </button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Certificado · Acessibilidade PRO 2026" titleId="certModalTitle">
        <img src={certImg} alt={CERT_ALT} style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
      </Modal>
    </section>
  );
}
