import type { MouseEvent, ReactNode } from 'react';
import { useToast } from '../hooks/useToast';

/** Arquivo em public/. Caminho relativo para funcionar em qualquer endereço. */
export const CV_URL = 'curriculo-anthony-conrado.pdf';
const CV_FILENAME = 'Curriculo-Anthony-Conrado.pdf';

interface DownloadsCapability {
  save(request: { filename: string; data: Blob }): Promise<{ status: string }>;
}
type ClaudeHost = { use(name: 'downloads'): Promise<DownloadsCapability | null> };

/**
 * Link para baixar o currículo em PDF.
 * Num site comum (Vercel), é um link de download normal.
 * Dentro do visualizador de artefatos do Claude, onde downloads diretos são bloqueados,
 * o arquivo é entregue pelo recurso de downloads da página, que pede confirmação.
 */
export function CvButton({ className, children, label }: { className?: string; children: ReactNode; label?: string }) {
  const toast = useToast();

  const onClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    const host = (window as unknown as { claude?: ClaudeHost }).claude;
    if (!host?.use) return; // site comum: o navegador baixa sozinho
    e.preventDefault();
    const downloads = await host.use('downloads');
    if (!downloads) {
      toast('O download não está disponível nesta visualização');
      return;
    }
    try {
      const blob = await (await fetch(CV_URL)).blob();
      await downloads.save({ filename: CV_FILENAME, data: blob });
      toast('Currículo baixado');
    } catch (err) {
      const code = (err as { code?: string } | null)?.code;
      if (code !== 'declined') toast('Não foi possível baixar o currículo agora');
    }
  };

  return (
    <a className={className} href={CV_URL} download={CV_FILENAME} type="application/pdf" aria-label={label} onClick={onClick}>
      {children}
    </a>
  );
}
