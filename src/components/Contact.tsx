import { useMemo, useState } from 'react';
import { CONTACT } from '../data/contact';
import { useToast } from '../hooks/useToast';
import { CvButton } from './CvButton';
import { ExternalLink, Icon } from './ui';

const TYPES = [
  { value: 'falar sobre uma vaga', label: 'Vaga' },
  { value: 'um site', label: 'Site' },
  { value: 'um sistema', label: 'Sistema' },
  { value: 'uma automação', label: 'Automação' },
  { value: 'outra coisa', label: 'Outro' },
];

export function Contact() {
  const toast = useToast();
  const [name, setName] = useState('');
  const [type, setType] = useState(TYPES[0].value);
  const [message, setMessage] = useState('');

  // Monta a mensagem que abre pronta no WhatsApp
  const whatsappHref = useMemo(() => {
    const wants = type === 'falar sobre uma vaga' || type === 'outra coisa' ? type : `conversar sobre ${type}`;
    const text = `Olá, Anthony! ${name.trim() ? `Sou ${name.trim()}. ` : ''}Vi seu portfólio e quero ${wants}.${message.trim() ? `\n\n${message.trim()}` : ''}`;
    return `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [name, type, message]);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(`Copiado: ${text}`);
    } catch {
      toast('Selecione o texto para copiar');
    }
  };

  return (
    <section className="contact" id="contato" aria-labelledby="contato-titulo">
      <div className="wrap contact-grid">
        <div>
          <p className="avail light"><i aria-hidden="true" />Disponível para vagas e parcerias</p>
          <h2 id="contato-titulo">
            Vamos trabalhar <span>juntos?</span>
          </h2>
          <p className="lead">Está contratando ou quer construir algo junto? Me conte o que você precisa e eu respondo o mais rápido possível.</p>
          <div className="c-list">
            <ExternalLink className="c-item" href={CONTACT.whatsapp}>
              <span className="ic"><Icon name="u-wa" /></span>
              <span className="tx"><small>WhatsApp</small><b>{CONTACT.phone}</b></span>
              <Icon name="u-ext" />
            </ExternalLink>
            <div className="c-item">
              <span className="ic"><Icon name="u-mail" /></span>
              <span className="tx"><small>E-mail</small><b>{CONTACT.email}</b></span>
              <button className="copy" type="button" onClick={() => copy(CONTACT.email)}>Copiar</button>
            </div>
            <ExternalLink className="c-item" href={CONTACT.github}>
              <span className="gh"><svg aria-hidden="true" focusable="false"><use href="#t-github" /></svg></span>
              <span className="tx"><small>GitHub</small><b>{CONTACT.githubLabel}</b></span>
              <Icon name="u-ext" />
            </ExternalLink>
            <CvButton className="c-item" label="Baixar currículo em PDF">
              <span className="ic"><Icon name="u-file" /></span>
              <span className="tx"><small>Currículo</small><b>Baixar em PDF</b></span>
              <Icon name="u-download" />
            </CvButton>
            <div className="c-item">
              <span className="ic"><Icon name="u-pin" /></span>
              <span className="tx"><small>Localização</small><b>{CONTACT.location}</b></span>
            </div>
          </div>
        </div>

        <form className="form" noValidate onSubmit={(e) => e.preventDefault()}>
          <h3>Mande uma mensagem</h3>
          <p>Preencha e envie direto para o meu WhatsApp.</p>
          <div className="field">
            <label htmlFor="fName">Seu nome</label>
            <input id="fName" name="nome" type="text" autoComplete="name" placeholder="Como posso te chamar?" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <fieldset className="field" style={{ border: 0, padding: 0, margin: '0 0 14px', minWidth: 0 }}>
            <legend style={{ fontSize: 13, fontWeight: 600, color: '#2b2537', padding: 0, marginBottom: 6 }}>O que você precisa?</legend>
            <div className="types">
              {TYPES.map((t, i) => (
                <span key={t.value}>
                  <input type="radio" name="tipo" id={`t${i + 1}`} value={t.value} checked={type === t.value} onChange={() => setType(t.value)} />
                  <label htmlFor={`t${i + 1}`}>{t.label}</label>
                </span>
              ))}
            </div>
          </fieldset>
          <div className="field">
            <label htmlFor="fMsg">Mensagem</label>
            <textarea id="fMsg" name="mensagem" autoComplete="off" placeholder="Conte um pouco sobre o projeto ou a vaga" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <ExternalLink className="btn send" href={whatsappHref} aria-describedby="sendNote">
            <Icon name="u-wa" />
            Enviar pelo WhatsApp
          </ExternalLink>
          <span className="note" id="sendNote">A mensagem abre pronta no WhatsApp, é só tocar em enviar.</span>
        </form>
      </div>
    </section>
  );
}
