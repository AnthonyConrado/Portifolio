import { useEffect, useState } from 'react';

// Escreve e apaga cada palavra da lista em sequência.
// Com `paused`, fica parado mostrando a primeira palavra.
export function useTypewriter(words: string[], paused: boolean) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (paused) {
      setText(words[0]);
      return;
    }
    let wordIndex = 0;
    let charCount = words[0].length;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        if (charCount < word.length) {
          charCount++;
          setText(word.slice(0, charCount));
          timer = window.setTimeout(tick, 85);
        } else {
          deleting = true;
          timer = window.setTimeout(tick, 1900);
        }
      } else if (charCount > 0) {
        charCount--;
        setText(word.slice(0, charCount) || ' ');
        timer = window.setTimeout(tick, 42);
      } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timer = window.setTimeout(tick, 260);
      }
    };

    timer = window.setTimeout(tick, 2200);
    return () => window.clearTimeout(timer);
  }, [words, paused]);

  return text;
}
