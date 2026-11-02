// Tecnologias exibidas na faixa animada e na seção Skills.
// O "id" é o nome do ícone no sprite (t-<id>).
export type TechId =
  | 'react' | 'next' | 'js' | 'ts' | 'tailwind'
  | 'node' | 'express' | 'java' | 'sql' | 'postgres' | 'prisma' | 'supabase'
  | 'n8n' | 'evolution' | 'git' | 'github';

export const TECH: { id: TechId; name: string }[] = [
  { id: 'react', name: 'React' },
  { id: 'next', name: 'Next.js' },
  { id: 'js', name: 'JavaScript' },
  { id: 'ts', name: 'TypeScript' },
  { id: 'tailwind', name: 'Tailwind CSS' },
  { id: 'node', name: 'Node.js' },
  { id: 'express', name: 'Express' },
  { id: 'java', name: 'Java' },
  { id: 'sql', name: 'SQL' },
  { id: 'postgres', name: 'PostgreSQL' },
  { id: 'prisma', name: 'Prisma' },
  { id: 'supabase', name: 'Supabase' },
  { id: 'n8n', name: 'N8N' },
  { id: 'evolution', name: 'EvolutionAPI' },
  { id: 'git', name: 'Git' },
  { id: 'github', name: 'GitHub' },
];

export const SKILL_GROUPS: { title: string; items: TechId[] }[] = [
  { title: 'Front-end', items: ['react', 'next', 'js', 'ts', 'tailwind'] },
  { title: 'Back-end e dados', items: ['node', 'express', 'java', 'sql', 'postgres', 'prisma', 'supabase'] },
  { title: 'Automação e ferramentas', items: ['n8n', 'evolution', 'git', 'github'] },
];

export const techName = (id: TechId) => TECH.find((t) => t.id === id)?.name ?? id;
