// Base color tokens
export const COLORS = {
  bg:     'oklch(0.97 0.006 240)',
  bgSoft: 'oklch(0.97 0.006 240 / 0.92)',
  ink:    'oklch(0.2 0.015 240)',
  dark:   'oklch(0.18 0.015 240)',
  onDark: 'oklch(0.97 0.006 240)',
  accent: 'oklch(0.5 0.1 195)',

  // ink at opacity (light-on-dark borders, dividers, text tints)
  inkShadow:   'oklch(0.2 0.015 240 / 0.06)',  // subtle box-shadow
  inkHairline: 'oklch(0.2 0.015 240 / 0.07)',  // faintest divider (mobile menu items)
  inkBorder:   'oklch(0.2 0.015 240 / 0.12)',  // navbar bottom border
  inkDivider:  'oklch(0.2 0.015 240 / 0.14)',  // dot-grid dots, section dividers, stat cells
  inkCardEdge: 'oklch(0.2 0.015 240 / 0.16)',  // blog card border
  inkOutline:  'oklch(0.2 0.015 240 / 0.18)',  // hero card & stats-bar outline
  inkChipEdge: 'oklch(0.2 0.015 240 / 0.20)',  // skill chip border
  inkDashed:   'oklch(0.2 0.015 240 / 0.35)',  // dashed "profile includes" box
  inkLabel:    'oklch(0.2 0.015 240 / 0.55)',  // stat label text
  inkMuted:    'oklch(0.2 0.015 240 / 0.60)',  // secondary body text
  inkSubtle:   'oklch(0.2 0.015 240 / 0.65)',  // tag/chip text
  inkSoft:     'oklch(0.2 0.015 240 / 0.75)',  // hero body text, skill chip text
  inkBody:     'oklch(0.2 0.015 240 / 0.80)',  // about-section prose

  // onDark at opacity (for elements sitting on COLORS.dark backgrounds)
  onDarkTagBg:    'oklch(0.97 0.006 240 / 0.10)', // project tag background
  onDarkBorder:   'oklch(0.97 0.006 240 / 0.12)', // footer divider
  onDarkCardEdge: 'oklch(0.97 0.006 240 / 0.14)', // project card border
  onDarkIconEdge: 'oklch(0.97 0.006 240 / 0.30)', // project icon border
  onDarkFaint:    'oklch(0.97 0.006 240 / 0.40)', // footer copyright text
  onDarkMuted:    'oklch(0.97 0.006 240 / 0.60)', // secondary text on dark
  onDarkSubtle:   'oklch(0.97 0.006 240 / 0.65)', // links on dark
  onDarkSoft:     'oklch(0.97 0.006 240 / 0.75)', // tag text on dark

  // bg at opacity (for dot-grid dots rendered on COLORS.dark)
  bgDot: 'oklch(0.97 0.006 240 / 0.08)',
};

export const site = {
  name: 'Linda Eng',
  handle: 'linda.dev',
  roleTagline: 'Software Engineer & Creative Coder',
  resumeHref: '/Linda_Eng_Resume_2026.pdf',
  email: '90lineng@gmail.com',
  github: 'https://github.com/LindaEng',
  linkedin: 'https://www.linkedin.com/in/linda-eng/',
  showBlog: true,
};

export const highlights = [
  { icon: '✦', label: 'AI product engineering' },
  { icon: '✦', label: 'Full-stack & systems design' },
  { icon: '✦', label: 'Open-source side projects' },
];

export const stats = [
  { label: 'Experience', value: '5+ years' },
  { label: 'Shipped', value: '6 featured builds' },
  { label: 'Focus', value: 'AI + full-stack' },
];

export const projectIcon = '▸';

export const projects = [
  {
    title: 'RAG Learning Assistant',
    description:
      'Turns dense PDFs into interactive Q&A for neurodivergent learners — grounded answers with exact page references, no hallucinations.',
    tags: ['Python', 'Qdrant', 'Groq/Llama 3.3', 'FastAPI'],
    href: 'https://github.com/LindaEng/rag-helper',
  },
  {
    title: 'CoachMe',
    description:
      'Asynchronous feedback processing service that turns raw coaching notes into structured, actionable feedback via S3 + SQS worker pipelines.',
    tags: ['Node.js', 'TypeScript', 'AWS SQS', 'AWS S3'],
    href: 'https://github.com/LindaEng/coachMe',
  },
  {
    title: 'Handwriting Recognition',
    description:
      'PyTorch CNN for handwritten digit classification, with a full training, evaluation, and error-analysis pipeline.',
    tags: ['Python', 'PyTorch', 'CNN'],
    href: 'https://github.com/LindaEng/handwriting-recognition',
  },
  {
    title: 'TouchDesigner AI Companion',
    description:
      'A local hotkey agent that screenshots a TouchDesigner patch and uses Claude Vision + MCP tools to debug node networks in real time.',
    tags: ['Python', 'Claude + MCP', 'TouchDesigner'],
    href: 'https://github.com/LindaEng/mcp_touch',
  },
];

export const blogPosts = [
  {
    title: 'TouchDesigner AI Companion',
    description:
      'A local hotkey agent that screenshots a TouchDesigner patch and uses Claude Vision + MCP tools to debug node networks in real time.',
    tags: ['Creative coding', 'Claude + MCP', 'TouchDesigner'],
    href: 'https://github.com/LindaEng/mcp_touch',
  },
  {
    title: 'Skyboxx Synth',
    description:
      'A compact digital synthesizer built with Tone.js and React — an excuse to play with sound design in the browser.',
    tags: ['Creative coding', 'Tone.js', 'React'],
    href: 'https://github.com/LindaEng/Skyboxx',
  },
];

export const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'AWS',
  'OpenAI/Claude',
  'Elixir',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Tailwind CSS',
];
