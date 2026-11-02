import pmHome from '../assets/pm-home.jpg';
import pmServicos from '../assets/pm-servicos.jpg';
import pmIdeias from '../assets/pm-ideias.jpg';

export type ProjectCategory = 'web' | 'app' | 'auto' | 'api';
export type ProjectKey = 'powerman' | 'coreup' | 'amaar' | 'vet' | 'bancoai' | 'smartfinance';

export interface ProjectDetail {
  key: ProjectKey;
  title: string;
  category: ProjectCategory;
  /** Telas reais exibidas na galeria da janela de detalhes. */
  gallery?: { src: string; alt: string }[];
  about: string;
  goal: string;
  features: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
  code?: string;
}

export const FILTERS: { value: 'todos' | ProjectCategory; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'web', label: 'Web' },
  { value: 'app', label: 'App' },
  { value: 'auto', label: 'Automação' },
  { value: 'api', label: 'Back-end' },
];

export const PROJECTS: Record<ProjectKey, ProjectDetail> = {
  powerman: {
    key: 'powerman',
    title: 'Barbearia Power Man',
    category: 'web',
    gallery: [
      { src: pmHome, alt: 'Página inicial do site da Barbearia Power Man com o botão Agende seu horário' },
      { src: pmServicos, alt: 'Seção de serviços com preço e duração de cada atendimento' },
      { src: pmIdeias, alt: 'Guia de estilos de corte com a popularidade de cada um' },
    ],
    about:
      'Plataforma de gestão e agendamento online com interface intuitiva para a Barbearia Power Man, em Maringá. O site apresenta a barbearia, mostra os serviços e leva o cliente direto para o agendamento.',
    goal: 'Dar à barbearia uma presença online profissional e facilitar o agendamento, para que o cliente marque o horário sozinho a qualquer hora.',
    features: [
      'Agendamento online de horários',
      'Catálogo de serviços com preço e duração',
      'Galeria de trabalhos',
      'Guia de estilos de corte com popularidade',
      'Localização com mapa e rota',
      'Horários de funcionamento e contato',
      'Layout responsivo para celular',
    ],
    stack: ['TypeScript', 'Next.js 13', 'Node.js', 'Tailwind', 'Prisma', 'SQL'],
    link: 'https://barbeariapowerman.com/',
  },
  coreup: {
    key: 'coreup',
    title: 'CoreUp',
    category: 'app',
    about:
      'App de academia mobile-first que monta a rotina semanal de treino a partir das preferências do aluno, acompanha a execução dos treinos e registra a evolução corporal. A interface segue o formato de app nativo, com navegação inferior por abas.',
    goal: 'Ajudar o aluno a treinar com um plano feito para ele. O gerador não sorteia exercícios: cada um recebe uma pontuação pelo grupo muscular, pelos favoritos e pelo nível, então as mesmas preferências sempre geram o mesmo plano.',
    features: [
      'Gerador de plano por objetivo, nível, dias, tempo e equipamentos',
      'Catálogo de 200 exercícios com busca e filtro por grupo',
      'Registro dos treinos executados',
      'Evolução de peso, medidas e cobertura muscular com gráficos',
      'Avaliações de treinos por profissionais de Educação Física',
      'Painel de administrador para aprovar profissionais',
      'Notificações dentro do app',
      'Login com JWT e senhas protegidas com bcrypt',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Prisma 6', 'PostgreSQL (Neon)', 'Zod', 'JWT'],
    link: 'https://core-up-rho.vercel.app',
    linkLabel: 'Abrir o app',
    code: 'https://github.com/luisfmessias/CoreUp',
  },
  amaar: {
    key: 'amaar',
    title: 'ONG Amaar',
    category: 'web',
    about:
      'Plataforma social criada para a ONG Amaar, que centraliza o resgate e facilita a adoção responsável de animais em Maringá.',
    goal: 'Reunir em um só lugar as informações de resgate e os animais disponíveis, aproximando a ONG de quem quer adotar.',
    features: ['Centralização dos resgates da ONG', 'Vitrine de animais para adoção', 'Incentivo à adoção responsável', 'Interface responsiva'],
    stack: ['TypeScript', 'Next.js 13', 'Node.js', 'Tailwind'],
  },
  vet: {
    key: 'vet',
    title: 'Automação Veterinária',
    category: 'auto',
    about:
      'Automação construída no N8N para otimizar a comunicação entre clínica veterinária e cliente, com mais eficiência no atendimento.',
    goal: 'Diminuir o trabalho manual da equipe e agilizar as respostas aos clientes.',
    features: [
      'Atendimento pelo WhatsApp via EvolutionAPI',
      'Fluxos automatizados no N8N',
      'Dados organizados no Supabase com SQL',
      'Integração com planilhas Excel',
      'Hospedagem no Easypanel',
    ],
    stack: ['N8N', 'EvolutionAPI', 'Supabase', 'SQL', 'Easypanel', 'Excel'],
  },
  bancoai: {
    key: 'bancoai',
    title: 'BANCO AI',
    category: 'web',
    about:
      'Sistema completo para gerenciar um banco de dados de carros, com interface visual moderna em preto, vermelho e branco. Back-end em Java com Spring Boot e front-end em React.',
    goal: 'Centralizar o cadastro da frota em um painel simples, com acesso protegido por login.',
    features: [
      'Autenticação com JWT',
      'Cadastro de carros com placa, quilometragem, modelo e marca',
      'Upload de várias fotos por veículo, com recorte',
      'Painel visual com todos os carros',
      'Edição e exclusão de registros',
      'Telas de perfil, usuários e notificações',
      'Interface em português e inglês',
    ],
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Java 17', 'Spring Boot 3', 'Spring Security', 'PostgreSQL'],
    code: 'https://github.com/quickAIautomation/BANCO_AI',
  },
  smartfinance: {
    key: 'smartfinance',
    title: 'SmartFinance',
    category: 'api',
    about: 'API de controle financeiro pessoal construída com Node.js, TypeScript e Express. O projeto está em desenvolvimento.',
    goal: 'Criar a base de um sistema para organizar as finanças pessoais, com uma API tipada e bem estruturada.',
    features: [
      'Servidor Express com TypeScript',
      'Rotas organizadas por módulo',
      'Respostas em JSON',
      'Próximos passos: cadastro de receitas, despesas e saldo',
    ],
    stack: ['Node.js', 'TypeScript', 'Express'],
    code: 'https://github.com/AnthonyConrado/smartFinance',
  },
};
