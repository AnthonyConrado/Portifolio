import { useEffect, useRef } from 'react';
import { useA11y } from '../hooks/useA11y';

// Fundo fixo do site: brilho lilás, trama de linhas onduladas na diagonal,
// luz que segue o mouse e partículas. Tudo decorativo (aria-hidden).
export function Background() {
  const { paused } = useA11y();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  // Luz que acompanha o ponteiro em todo o site
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      spotRef.current?.style.setProperty('--mx', `${e.clientX}px`);
      spotRef.current?.style.setProperty('--my', `${e.clientY}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  // Partículas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let frame = 0;
    let dots: { x: number; y: number; r: number; vx: number; vy: number; a: number }[] = [];

    const size = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = Array.from({ length: Math.round((w * h) / 15000) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        a: Math.random() * 0.5 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x = (d.x + d.vx + w) % w;
        d.y = (d.y + d.vy + h) % h;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(208, 184, 255, ${d.a})`;
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    size();
    if (paused) ctx.clearRect(0, 0, w, h);
    else draw();
    window.addEventListener('resize', size);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', size);
    };
  }, [paused]);

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <svg className="bg-waves" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="waves" width="76" height="76" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
            <g fill="none" stroke="rgba(183, 148, 246, 0.14)" strokeWidth="1">
              <path d="M0 38 Q19 27 38 38 T76 38" />
              <path d="M38 0 Q49 19 38 38 T38 76" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
      <div className="spot" ref={spotRef} aria-hidden="true" />
      <canvas id="particles" ref={canvasRef} aria-hidden="true" />
    </>
  );
}
