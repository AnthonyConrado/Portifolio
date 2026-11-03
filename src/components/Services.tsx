import processPhoto from '../assets/process.jpg';
import { Icon, SectionTitle } from './ui';

const SERVICES = [
  {
    icon: 'u-code',
    title: 'Desenvolvimento Web',
    text: 'Sites e aplicações modernas, rápidas e que funcionam bem no celular.',
    items: ['Sites institucionais e landing pages', 'Sistemas de agendamento', 'Painéis de gestão', 'Deploy e domínio configurados'],
  },
  {
    icon: 'u-flow',
    title: 'Automações com N8N',
    text: 'Fluxos que trabalham por você e reduzem tarefas manuais.',
    items: ['Atendimento automático no WhatsApp', 'Integração entre sistemas', 'Planilhas e relatórios automáticos', 'Lembretes e notificações'],
  },
  {
    icon: 'u-db',
    title: 'APIs & Back-end',
    text: 'A base que sustenta o seu sistema, organizada e segura.',
    items: ['Criação de APIs com Node.js', 'Modelagem de banco de dados', 'Integração com serviços externos', 'Ajustes e melhorias em projetos'],
  },
];

const STEPS = [
  { title: 'Conversa', text: 'Entendo o seu negócio, o problema e o que você precisa.' },
  { title: 'Planejamento', text: 'Defino telas, funcionalidades e prazos com você.' },
  { title: 'Desenvolvimento', text: 'Construo com atualizações frequentes para você acompanhar.' },
  { title: 'Entrega', text: 'Publico, configuro o domínio e dou suporte depois.' },
];

export function Services() {
  return (
    <section className="block" id="servicos" aria-labelledby="servicos-titulo">
      <div className="wrap">
        <SectionTitle id="servicos-titulo" eyebrow="O que eu faço" title="Serviços" subtitle="Onde posso contribuir no seu time ou projeto." />
        <div className="services">
          {SERVICES.map((s, i) => (
            <article className="service" key={s.title}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <div className="ic"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}><Icon name="u-check" />{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="block" id="processo" aria-labelledby="processo-titulo">
      <div className="wrap">
        <SectionTitle id="processo-titulo" eyebrow="Como eu trabalho" title="Processo" subtitle="Do primeiro papo até o projeto no ar." />
        <div className="process">
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li className="step" key={s.title}>
                <span className="dot">{i + 1}</span>
                <div className="step-card">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="process-photo">
            <span className="deco" aria-hidden="true" />
            <div className="photo">
              <img src={processPhoto} width={560} height={700} loading="lazy" decoding="async" alt="Anthony Conrado de costas, com uma pasta na mão, em um ambiente corporativo" />
            </div>
            <span className="tagline"><Icon name="u-chat" />Do primeiro papo ao deploy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
